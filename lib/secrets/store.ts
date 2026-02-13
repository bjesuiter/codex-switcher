import {
  deleteKeychainPayload,
  getKeychainService,
  keychainPayloadExists,
  listKeychainAccounts,
  loadKeychainPayload,
  saveKeychainPayload,
} from "../keychain";
import type { OAuthPayload } from "../types";
import {
  deleteWindowsCredentialPayload,
  getWindowsCredentialService,
  listWindowsCredentialAccounts,
  loadWindowsCredentialPayload,
  saveWindowsCredentialPayload,
  windowsCredentialPayloadExists,
} from "../windows-credential";

export type SecretStoreCapability = {
  available: boolean;
  reason?: string;
};

export type SecretStoreAdapter = {
  id: string;
  label: string;
  getServiceName(accountId: string): string;
  save(accountId: string, payload: OAuthPayload): void;
  load(accountId: string): OAuthPayload;
  delete(accountId: string): void;
  exists(accountId: string): boolean;
  listAccountIds(): string[];
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
  save: saveKeychainPayload,
  load: loadKeychainPayload,
  delete: deleteKeychainPayload,
  exists: keychainPayloadExists,
  listAccountIds: listKeychainAccounts,
  getCapability: () => ({ available: true }),
});

const createWindowsCredentialManagerAdapter = (): SecretStoreAdapter => ({
  id: "windows-credential-manager",
  label: "Windows Credential Manager",
  getServiceName: getWindowsCredentialService,
  save: saveWindowsCredentialPayload,
  load: loadWindowsCredentialPayload,
  delete: deleteWindowsCredentialPayload,
  exists: windowsCredentialPayloadExists,
  listAccountIds: listWindowsCredentialAccounts,
  getCapability: () => ({ available: true }),
});

const createUnsupportedAdapter = (
  platform: NodeJS.Platform,
): SecretStoreAdapter => ({
  id: "unsupported",
  label: "Unsupported (no adapter configured)",
  getServiceName: (accountId: string) => `cdx-openai-${accountId}`,
  save: () => {
    throw unsupportedError(platform);
  },
  load: () => {
    throw unsupportedError(platform);
  },
  delete: () => {
    throw unsupportedError(platform);
  },
  exists: () => false,
  listAccountIds: () => [],
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
    return createWindowsCredentialManagerAdapter();
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
