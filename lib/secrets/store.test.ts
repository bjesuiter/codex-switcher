import { afterEach, describe, expect, it } from "bun:test";
import type { OAuthPayload } from "../types";
import {
  createRuntimeSecretStoreAdapter,
  createSecretStoreAdapterFromSelection,
  getSecretStoreAdapter,
  isMissingSecretStoreEntryError,
  resetSecretStoreAdapter,
  setSecretStoreAdapter,
  type SecretStoreAdapter,
} from "./store";

afterEach(() => {
  resetSecretStoreAdapter();
});

describe("createRuntimeSecretStoreAdapter", () => {
  it("selects cross-keychain macOS adapter for darwin", () => {
    const adapter = createRuntimeSecretStoreAdapter("darwin");
    expect(adapter.id).toBe("macos-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });

  it("selects cross-keychain Linux adapter for linux", () => {
    const adapter = createRuntimeSecretStoreAdapter("linux");
    expect(adapter.id).toBe("linux-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });

  it("selects cross-keychain Windows adapter for win32", () => {
    const adapter = createRuntimeSecretStoreAdapter("win32");
    expect(adapter.id).toBe("windows-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });
});

describe("createSecretStoreAdapterFromSelection", () => {
  it("selects legacy macOS adapter when requested on darwin", () => {
    const adapter = createSecretStoreAdapterFromSelection("legacy-keychain", "darwin");
    expect(adapter.id).toBe("macos-legacy-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });

  it("throws for legacy adapter on non-macOS", () => {
    expect(() =>
      createSecretStoreAdapterFromSelection("legacy-keychain", "linux"),
    ).toThrow(/only available on macOS/);
  });
});

describe("isMissingSecretStoreEntryError", () => {
  it("detects native Linux missing-entry error markers", () => {
    const error = new Error(
      "Native secret service error: no matching entry found in secure storage",
    );
    expect(isMissingSecretStoreEntryError(error)).toBe(true);
  });
});

describe("cached runtime adapter", () => {
  it("reuses loaded credentials across exists/load calls", async () => {
    const payload: OAuthPayload = {
      refresh: "refresh-token",
      access: "access-token",
      expires: Date.now() + 60_000,
      accountId: "account-1",
      idToken: "id-token",
    };

    let loadCalls = 0;
    let existsCalls = 0;

    const adapter: SecretStoreAdapter = {
      id: "mock",
      label: "Mock",
      getServiceName: (accountId: string) => `service-${accountId}`,
      save: async () => {},
      load: async () => {
        loadCalls += 1;
        return payload;
      },
      delete: async () => {},
      exists: async () => {
        existsCalls += 1;
        return true;
      },
      listAccountIds: async () => [payload.accountId],
      getCapability: () => ({ available: true }),
    };

    setSecretStoreAdapter(adapter);

    const runtimeAdapter = getSecretStoreAdapter();
    const exists = await runtimeAdapter.exists(payload.accountId);
    const loaded = await runtimeAdapter.load(payload.accountId);

    expect(exists).toBe(true);
    expect(loaded).toEqual(payload);
    expect(loadCalls).toBe(1);
    expect(existsCalls).toBe(0);

    resetSecretStoreAdapter();
  });
});
