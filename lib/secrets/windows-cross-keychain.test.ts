import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import type { OAuthPayload } from "../types";
import {
  __resetWindowsCrossKeychainStateForTests,
  __setWindowsCrossKeychainApiForTests,
  getWindowsCrossKeychainService,
  loadWindowsCrossKeychainPayload,
  saveWindowsCrossKeychainPayload,
} from "./windows-cross-keychain";

const mapKey = (service: string, account: string): string => `${service}::${account}`;

describe("windows cross-keychain chunked payload storage", () => {
  const values = new Map<string, string>();

  beforeEach(() => {
    values.clear();

    __setWindowsCrossKeychainApiForTests({
      listBackends: async () => [{ id: "native-windows" }],
      useBackend: async (backend) => {
        if (backend !== "native-windows") {
          throw new Error(`Unsupported backend in test: ${backend}`);
        }
      },
      setPassword: async (service, account, password) => {
        values.set(mapKey(service, account), password);
      },
      getPassword: async (service, account) => values.get(mapKey(service, account)) ?? null,
      deletePassword: async (service, account) => {
        values.delete(mapKey(service, account));
      },
    });
  });

  afterEach(() => {
    __resetWindowsCrossKeychainStateForTests();
    values.clear();
  });

  it("stores oversized payloads in chunks and reconstructs them on load", async () => {
    const accountId = "account-chunked";
    const payload: OAuthPayload = {
      refresh: "refresh-token",
      access: "access-token",
      expires: Date.now() + 60_000,
      accountId,
      idToken: "x".repeat(12_000),
    };

    await saveWindowsCrossKeychainPayload(accountId, payload);

    const service = getWindowsCrossKeychainService(accountId);
    const pointerRaw = values.get(mapKey(service, accountId));
    expect(pointerRaw).toBeTruthy();

    const pointer = JSON.parse(pointerRaw as string) as {
      marker: string;
      chunks: number;
    };

    expect(pointer.marker).toBe("cdx-oauth-chunked-v1");
    expect(pointer.chunks).toBeGreaterThan(1);

    for (let index = 0; index < pointer.chunks; index += 1) {
      const chunk = values.get(mapKey(service, `${accountId}__chunk_${index}`));
      expect(chunk).toBeTruthy();
      expect((chunk as string).length).toBeLessThanOrEqual(3000);
    }

    const loaded = await loadWindowsCrossKeychainPayload(accountId);
    expect(loaded).toEqual(payload);
  });

  it("removes stale chunk entries when saving a small payload after a chunked payload", async () => {
    const accountId = "account-chunk-cleanup";
    const largePayload: OAuthPayload = {
      refresh: "refresh-token",
      access: "access-token",
      expires: Date.now() + 60_000,
      accountId,
      idToken: "x".repeat(12_000),
    };

    const smallPayload: OAuthPayload = {
      refresh: "refresh-small",
      access: "access-small",
      expires: Date.now() + 60_000,
      accountId,
      idToken: "short-token",
    };

    await saveWindowsCrossKeychainPayload(accountId, largePayload);
    await saveWindowsCrossKeychainPayload(accountId, smallPayload);

    const service = getWindowsCrossKeychainService(accountId);
    const chunkKeys = [...values.keys()].filter((key) =>
      key.startsWith(`${service}::${accountId}__chunk_`),
    );
    expect(chunkKeys.length).toBe(0);

    const loaded = await loadWindowsCrossKeychainPayload(accountId);
    expect(loaded).toEqual(smallPayload);
  });
});
