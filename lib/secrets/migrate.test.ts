import { describe, expect, it } from "bun:test";
import type { Config, OAuthPayload } from "../types";
import { migrateLegacyMacOSSecrets } from "./migrate";
import type { SecretStoreAdapter } from "./store";

const createConfig = (): Config => ({
  current: 0,
  accounts: [
    {
      accountId: "acc-1",
      keychainService: "legacy-service-1",
      label: "Primary",
    },
    {
      accountId: "acc-2",
      keychainService: "legacy-service-2",
    },
  ],
  secretStore: "legacy-keychain",
});

const createPayload = (accountId: string): OAuthPayload => ({
  refresh: `refresh-${accountId}`,
  access: `access-${accountId}`,
  expires: Date.now() + 60_000,
  accountId,
  idToken: `id-${accountId}`,
});

const createAdapter = (
  handlers: Partial<SecretStoreAdapter>,
): SecretStoreAdapter => ({
  id: "mock",
  label: "Mock",
  getServiceName: (accountId: string) => `service-${accountId}`,
  save: async () => {},
  load: async () => createPayload("default"),
  delete: async () => {},
  exists: async () => true,
  listAccountIds: async () => [],
  getCapability: () => ({ available: true }),
  ...handlers,
});

describe("migrateLegacyMacOSSecrets", () => {
  it("migrates legacy entries, updates config, and deletes old entries", async () => {
    const config = createConfig();
    const saves: string[] = [];
    const deletes: string[] = [];

    const sourceAdapter = createAdapter({
      id: "legacy",
      exists: async () => true,
      load: async (accountId: string) => createPayload(accountId),
      delete: async (accountId: string) => {
        deletes.push(accountId);
      },
    });

    const targetAdapter = createAdapter({
      id: "cross",
      getServiceName: (accountId: string) => `cdx-openai-${accountId}`,
      save: async (accountId: string) => {
        saves.push(accountId);
      },
    });

    let savedConfig: Config | null = null;

    const result = await migrateLegacyMacOSSecrets({
      platform: "darwin",
      loadConfigFn: async () => structuredClone(config),
      saveConfigFn: async (nextConfig) => {
        savedConfig = structuredClone(nextConfig);
      },
      sourceAdapter,
      targetAdapter,
    });

    expect(result.migrated).toBe(2);
    expect(result.skipped).toBe(0);
    expect(result.failed).toBe(0);
    expect(result.configUpdated).toBe(true);
    expect(saves).toEqual(["acc-1", "acc-2"]);
    expect(deletes).toEqual(["acc-1", "acc-2"]);
    expect(savedConfig?.secretStore).toBe("auto");
    expect(savedConfig?.accounts.map((account) => account.keychainService)).toEqual([
      "cdx-openai-acc-1",
      "cdx-openai-acc-2",
    ]);
  });

  it("does not update config when at least one migration fails", async () => {
    const config = createConfig();
    let configSaveCalled = false;

    const sourceAdapter = createAdapter({
      id: "legacy",
      exists: async () => true,
      load: async (accountId: string) => createPayload(accountId),
      delete: async () => {},
    });

    const targetAdapter = createAdapter({
      id: "cross",
      save: async (accountId: string) => {
        if (accountId === "acc-2") {
          throw new Error("boom");
        }
      },
    });

    const result = await migrateLegacyMacOSSecrets({
      platform: "darwin",
      loadConfigFn: async () => structuredClone(config),
      saveConfigFn: async () => {
        configSaveCalled = true;
      },
      sourceAdapter,
      targetAdapter,
    });

    expect(result.migrated).toBe(1);
    expect(result.failed).toBe(1);
    expect(result.configUpdated).toBe(false);
    expect(configSaveCalled).toBe(false);

    const failedEntry = result.accountResults.find((entry) => entry.accountId === "acc-2");
    expect(failedEntry?.status).toBe("failed");
    expect(failedEntry?.message).toContain("boom");
  });

  it("throws on non-macOS platforms", async () => {
    await expect(
      migrateLegacyMacOSSecrets({
        platform: "linux",
        loadConfigFn: async () => createConfig(),
      }),
    ).rejects.toThrow("only available on macOS");
  });
});
