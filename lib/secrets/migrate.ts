import { loadConfig, saveConfig } from "../config";
import type { Config } from "../types";
import {
  createMacOSLegacyKeychainAdapter,
  createRuntimeSecretStoreAdapter,
  type SecretStoreAdapter,
} from "./store";

export type SecretMigrationAccountResult = {
  accountId: string;
  label?: string;
  status: "migrated" | "skipped" | "failed";
  message: string;
};

export type SecretMigrationResult = {
  migrated: number;
  skipped: number;
  failed: number;
  configUpdated: boolean;
  accountResults: SecretMigrationAccountResult[];
};

type MigrateLegacyMacOSSecretsOptions = {
  platform?: NodeJS.Platform;
  loadConfigFn?: () => Promise<Config>;
  saveConfigFn?: (config: Config) => Promise<void>;
  sourceAdapter?: SecretStoreAdapter;
  targetAdapter?: SecretStoreAdapter;
};

const asErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

export const migrateLegacyMacOSSecrets = async (
  options: MigrateLegacyMacOSSecretsOptions = {},
): Promise<SecretMigrationResult> => {
  const platform = options.platform ?? process.platform;

  if (platform !== "darwin") {
    throw new Error("'migrate-secrets' is only available on macOS (darwin).");
  }

  const loadConfigFn = options.loadConfigFn ?? loadConfig;
  const saveConfigFn = options.saveConfigFn ?? saveConfig;
  const sourceAdapter = options.sourceAdapter ?? createMacOSLegacyKeychainAdapter();
  const targetAdapter =
    options.targetAdapter ?? createRuntimeSecretStoreAdapter("darwin");

  const config = await loadConfigFn();
  const accountResults: SecretMigrationAccountResult[] = [];

  for (const account of config.accounts) {
    const accountId = account.accountId;

    try {
      const exists = await sourceAdapter.exists(accountId);
      if (!exists) {
        accountResults.push({
          accountId,
          label: account.label,
          status: "skipped",
          message: "No legacy keychain entry found.",
        });
        continue;
      }

      const loaded = await sourceAdapter.load(accountId);
      const payload =
        loaded.accountId === accountId
          ? loaded
          : { ...loaded, accountId };

      await sourceAdapter.delete(accountId);

      try {
        await targetAdapter.save(accountId, payload);
      } catch (error) {
        try {
          await sourceAdapter.save(accountId, payload);
        } catch {
          // Best effort rollback only.
        }
        throw error;
      }

      accountResults.push({
        accountId,
        label: account.label,
        status: "migrated",
        message: "Legacy entry migrated to cross-keychain backend.",
      });
    } catch (error) {
      accountResults.push({
        accountId,
        label: account.label,
        status: "failed",
        message: asErrorMessage(error),
      });
    }
  }

  const failed = accountResults.filter((entry) => entry.status === "failed").length;
  const skipped = accountResults.filter((entry) => entry.status === "skipped").length;
  const migrated = accountResults.filter((entry) => entry.status === "migrated").length;

  let configUpdated = false;

  if (failed === 0) {
    let changed = false;

    for (const account of config.accounts) {
      const expectedService = targetAdapter.getServiceName(account.accountId);
      if (account.keychainService !== expectedService) {
        account.keychainService = expectedService;
        changed = true;
      }
    }

    if (config.secretStore !== "auto") {
      config.secretStore = "auto";
      changed = true;
    }

    if (changed) {
      await saveConfigFn(config);
      configUpdated = true;
    }
  }

  return {
    migrated,
    skipped,
    failed,
    configUpdated,
    accountResults,
  };
};
