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

  it.skipIf(!isWindows)(
    "stores and loads oversized payloads through Windows Credential Manager",
    async () => {
      const accountId = makeTestAccountId("cdx-test-chunked");
      createdAccountIds.push(accountId);

      const payload: OAuthPayload = {
        refresh: "refresh-token",
        access: "access-token",
        expires: Date.now() + 60_000,
        accountId,
        idToken: "x".repeat(12_000),
      };

      await withFallbackBypass(() =>
        saveWindowsCrossKeychainPayload(accountId, payload)
      );

      const exists = await withFallbackBypass(() =>
        windowsCrossKeychainPayloadExists(accountId)
      );
      expect(exists).toBe(true);

      const loaded = await withFallbackBypass(() =>
        loadWindowsCrossKeychainPayload(accountId)
      );
      expect(loaded).toEqual(payload);
    },
  );

  it.skipIf(!isWindows)(
    "deletes chunked payload credentials from Windows Credential Manager",
    async () => {
      const accountId = makeTestAccountId("cdx-test-delete");
      createdAccountIds.push(accountId);

      const payload: OAuthPayload = {
        refresh: "refresh-token",
        access: "access-token",
        expires: Date.now() + 60_000,
        accountId,
        idToken: "x".repeat(12_000),
      };

      await withFallbackBypass(() =>
        saveWindowsCrossKeychainPayload(accountId, payload)
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
    },
  );
});
