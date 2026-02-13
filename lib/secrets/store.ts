import {
  deleteKeychainPayload,
  getKeychainService,
  keychainPayloadExists,
  listKeychainAccounts,
  loadKeychainPayload,
  saveKeychainPayload,
} from "../keychain";
import { configExists, loadConfig } from "../config";
import type { OAuthPayload } from "../types";
import {
  deleteWindowsCrossKeychainPayload,
  getWindowsCrossKeychainService,
  loadWindowsCrossKeychainPayload,
  saveWindowsCrossKeychainPayload,
  windowsCrossKeychainPayloadExists,
} from "./windows-cross-keychain";

export type SecretStoreCapability = {
  available: boolean;
  reason?: string;
};

export type SecretStoreAdapter = {
  id: string;
  label: string;
  getServiceName(accountId: string): string;
  save(accountId: string, payload: OAuthPayload): Promise<void>;
  load(accountId: string): Promise<OAuthPayload>;
  delete(accountId: string): Promise<void>;
  exists(accountId: string): Promise<boolean>;
  listAccountIds(): Promise<string[]>;
  getCapability(): SecretStoreCapability;
};

const unsupportedError = (platform: NodeJS.Platform): Error =>
  new Error(
    `No default secret store adapter configured for platform '${platform}'. ` +
      "Only macOS Keychain and Windows Credential Manager are wired by default right now.",
  );

const createMacOSKeychainAdapter = (): SecretStoreAdapter => ({
  id: "macos-keychain",
  label: "macOS Keychain",
  getServiceName: getKeychainService,
  save: async (accountId: string, payload: OAuthPayload) => saveKeychainPayload(accountId, payload),
  load: async (accountId: string) => loadKeychainPayload(accountId),
  delete: async (accountId: string) => deleteKeychainPayload(accountId),
  exists: async (accountId: string) => keychainPayloadExists(accountId),
  listAccountIds: async () => listKeychainAccounts(),
  getCapability: () => ({ available: true }),
});

const loadConfiguredAccountIds = async (): Promise<string[]> => {
  if (!configExists()) {
    return [];
  }

  const config = await loadConfig();
  return config.accounts.map((account) => account.accountId);
};

const createWindowsCrossKeychainAdapter = (): SecretStoreAdapter => ({
  id: "windows-cross-keychain",
  label: "Windows Credential Manager (cross-keychain)",
  getServiceName: getWindowsCrossKeychainService,
  save: saveWindowsCrossKeychainPayload,
  load: loadWindowsCrossKeychainPayload,
  delete: deleteWindowsCrossKeychainPayload,
  exists: windowsCrossKeychainPayloadExists,
  listAccountIds: async () => {
    const accountIds = await loadConfiguredAccountIds();
    const existing = await Promise.all(
      accountIds.map(async (accountId) => ({
        accountId,
        exists: await windowsCrossKeychainPayloadExists(accountId),
      })),
    );
    return existing.filter((item) => item.exists).map((item) => item.accountId);
  },
  getCapability: () => ({ available: true }),
});

const createUnsupportedAdapter = (
  platform: NodeJS.Platform,
): SecretStoreAdapter => ({
  id: "unsupported",
  label: "Unsupported (no adapter configured)",
  getServiceName: (accountId: string) => `cdx-openai-${accountId}`,
  save: async () => {
    throw unsupportedError(platform);
  },
  load: async () => {
    throw unsupportedError(platform);
  },
  delete: async () => {
    throw unsupportedError(platform);
  },
  exists: async () => false,
  listAccountIds: async () => [],
  getCapability: () => ({
    available: false,
    reason: "No default secure-store adapter available for this platform.",
  }),
});

export const createRuntimeSecretStoreAdapter = (
  platform: NodeJS.Platform = process.platform,
): SecretStoreAdapter => {
  if (platform === "darwin") {
    return createMacOSKeychainAdapter();
  }

  if (platform === "win32") {
    return createWindowsCrossKeychainAdapter();
  }

  return createUnsupportedAdapter(platform);
};

let currentSecretStoreAdapter: SecretStoreAdapter = createRuntimeSecretStoreAdapter();

export const getSecretStoreAdapter = (): SecretStoreAdapter =>
  currentSecretStoreAdapter;

export const setSecretStoreAdapter = (adapter: SecretStoreAdapter): void => {
  currentSecretStoreAdapter = adapter;
};

export const resetSecretStoreAdapter = (): void => {
  currentSecretStoreAdapter = createRuntimeSecretStoreAdapter();
};

export const getSecretStoreCapability = (): {
  id: string;
  label: string;
  available: boolean;
  reason?: string;
} => {
  const adapter = getSecretStoreAdapter();
  const capability = adapter.getCapability();
  return {
    id: adapter.id,
    label: adapter.label,
    available: capability.available,
    ...(capability.reason ? { reason: capability.reason } : {}),
  };
};
