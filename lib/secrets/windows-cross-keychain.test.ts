import { afterEach, describe, expect, it } from "bun:test";
import type { OAuthPayload } from "../types";
import {
  deleteWindowsCrossKeychainPayload,
  loadWindowsCrossKeychainPayload,
  saveWindowsCrossKeychainPayload,
  windowsCrossKeychainPayloadExists,
} from "./windows-cross-keychain";

const isWindows = process.platform === "win32";

const withFallbackBypass = async <T>(run: () => Promise<T>): Promise<T> => {
  const previous = process.env.CDX_ALLOW_SECURE_STORE_FALLBACK;
  process.env.CDX_ALLOW_SECURE_STORE_FALLBACK = "1";
  try {
    return await run();
  } finally {
    if (previous === undefined) {
      delete process.env.CDX_ALLOW_SECURE_STORE_FALLBACK;
    } else {
      process.env.CDX_ALLOW_SECURE_STORE_FALLBACK = previous;
    }
  }
};

const makeTestAccountId = (prefix: string): string =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const makePayload = (accountId: string): OAuthPayload => ({
  refresh: "refresh-token",
  access: "access-token",
  expires: Date.now() + 60_000,
  accountId,
  idToken: "id-token",
});

describe("windows cross-keychain integration", () => {
  const createdAccountIds: string[] = [];

  afterEach(async () => {
    for (const accountId of createdAccountIds.splice(0)) {
      try {
        await withFallbackBypass(() => deleteWindowsCrossKeychainPayload(accountId));
      } catch {
        // Best effort cleanup in tests.
      }
    }
  });

  it.skipIf(!isWindows)("stores payloads in Windows Credential Manager", async () => {
    const accountId = makeTestAccountId("cdx-test-store");
    createdAccountIds.push(accountId);

    await withFallbackBypass(() =>
      saveWindowsCrossKeychainPayload(accountId, makePayload(accountId))
    );

    const exists = await withFallbackBypass(() =>
      windowsCrossKeychainPayloadExists(accountId)
    );
    expect(exists).toBe(true);
  });

  it.skipIf(!isWindows)("reads payloads from Windows Credential Manager", async () => {
    const accountId = makeTestAccountId("cdx-test-read");
    createdAccountIds.push(accountId);

    const payload = makePayload(accountId);
    await withFallbackBypass(() =>
      saveWindowsCrossKeychainPayload(accountId, payload)
    );

    const loaded = await withFallbackBypass(() =>
      loadWindowsCrossKeychainPayload(accountId)
    );
    expect(loaded).toEqual(payload);
  });

  it.skipIf(!isWindows)("updates existing payloads in Windows Credential Manager", async () => {
    const accountId = makeTestAccountId("cdx-test-update");
    createdAccountIds.push(accountId);

    const initialPayload = makePayload(accountId);
    const updatedPayload: OAuthPayload = {
      ...initialPayload,
      access: "updated-access-token",
      refresh: "updated-refresh-token",
      expires: Date.now() + 120_000,
      idToken: "updated-id-token",
    };

    await withFallbackBypass(() =>
      saveWindowsCrossKeychainPayload(accountId, initialPayload)
    );
    await withFallbackBypass(() =>
      saveWindowsCrossKeychainPayload(accountId, updatedPayload)
    );

    const loaded = await withFallbackBypass(() =>
      loadWindowsCrossKeychainPayload(accountId)
    );
    expect(loaded).toEqual(updatedPayload);
  });

  it.skipIf(!isWindows)("deletes payloads from Windows Credential Manager", async () => {
    const accountId = makeTestAccountId("cdx-test-delete");
    createdAccountIds.push(accountId);

    await withFallbackBypass(() =>
      saveWindowsCrossKeychainPayload(accountId, makePayload(accountId))
    );
    expect(
      await withFallbackBypass(() => windowsCrossKeychainPayloadExists(accountId)),
    ).toBe(true);

    await withFallbackBypass(() => deleteWindowsCrossKeychainPayload(accountId));
    const index = createdAccountIds.indexOf(accountId);
    if (index >= 0) {
      createdAccountIds.splice(index, 1);
    }

    expect(
      await withFallbackBypass(() => windowsCrossKeychainPayloadExists(accountId)),
    ).toBe(false);
  });
});
