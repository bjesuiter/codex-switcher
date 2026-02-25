import { configExists, loadConfig } from "../config";
import {
  deleteKeychainPayload,
  getKeychainService,
  keychainPayloadExists,
  listKeychainAccounts,
  loadKeychainPayload,
  saveKeychainPayload,
} from "../keychain";
import type { OAuthPayload, SecretStoreSelection } from "../types";
import {
  deleteLinuxCrossKeychainPayload,
  getLinuxCrossKeychainService,
  linuxCrossKeychainPayloadExists,
  loadLinuxCrossKeychainPayload,
  saveLinuxCrossKeychainPayload,
} from "./linux-cross-keychain";
import {
  deleteMacOSCrossKeychainPayload,
  getMacOSCrossKeychainService,
  loadMacOSCrossKeychainPayload,
  macosCrossKeychainPayloadExists,
  resolveMacOSCrossKeychainBackendId as resolveCrossKeychainMacOSBackendId,
  saveMacOSCrossKeychainPayload,
  type MacOSCrossKeychainBackendId,
} from "./macos-cross-keychain";
import {
  deleteWindowsCrossKeychainPayload,
  getWindowsCrossKeychainService,
  loadWindowsCrossKeychainPayload,
  saveWindowsCrossKeychainPayload,
  windowsCrossKeychainPayloadExists,
} from "./windows-cross-keychain";

export type { SecretStoreSelection } from "../types";
export type { MacOSCrossKeychainBackendId };

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

const MISSING_SECRET_STORE_ERROR_MARKERS = [
  "no stored credentials found",
  "no keychain payload found",
  "password not found",
  "no matching entry found in secure storage",
  "no result found",
];

export const isMissingSecretStoreEntryError = (error: unknown): boolean => {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();

  return MISSING_SECRET_STORE_ERROR_MARKERS.some((marker) =>
    message.includes(marker)
  );
};

const createMissingSecretStoreEntryError = (accountId: string): Error =>
  new Error(`No stored credentials found for account ${accountId}.`);

const CACHED_ADAPTER_SYMBOL = Symbol.for("cdx.secretStore.cachedAdapter");

type CachedSecretStoreAdapter = SecretStoreAdapter & {
  [CACHED_ADAPTER_SYMBOL]?: true;
};

const withSecretStoreCache = (adapter: SecretStoreAdapter): SecretStoreAdapter => {
  const alreadyCached = adapter as CachedSecretStoreAdapter;
  if (alreadyCached[CACHED_ADAPTER_SYMBOL]) {
    return adapter;
  }

  const payloadCache = new Map<string, OAuthPayload>();
  const existsCache = new Map<string, boolean>();
  const missingAccounts = new Set<string>();
  const inFlightLoads = new Map<string, Promise<OAuthPayload>>();

  const markPresent = (accountId: string, payload: OAuthPayload): void => {
    payloadCache.set(accountId, payload);
    existsCache.set(accountId, true);
    missingAccounts.delete(accountId);
  };

  const markMissing = (accountId: string): void => {
    payloadCache.delete(accountId);
    existsCache.set(accountId, false);
    missingAccounts.add(accountId);
  };

  const loadAndCache = async (accountId: string): Promise<OAuthPayload> => {
    const existingPromise = inFlightLoads.get(accountId);
    if (existingPromise) {
      return existingPromise;
    }

    const promise = (async () => {
      try {
        const payload = await adapter.load(accountId);
        markPresent(accountId, payload);
        return payload;
      } catch (error) {
        if (isMissingSecretStoreEntryError(error)) {
          markMissing(accountId);
        }
        throw error;
      } finally {
        inFlightLoads.delete(accountId);
      }
    })();

    inFlightLoads.set(accountId, promise);
    return promise;
  };

  const cachedAdapter: CachedSecretStoreAdapter = {
    id: adapter.id,
    label: adapter.label,
    getServiceName: (accountId: string) => adapter.getServiceName(accountId),
    save: async (accountId: string, payload: OAuthPayload) => {
      await adapter.save(accountId, payload);
      markPresent(accountId, payload);
    },
    load: async (accountId: string) => {
      const cachedPayload = payloadCache.get(accountId);
      if (cachedPayload) {
        return cachedPayload;
      }

      if (missingAccounts.has(accountId)) {
        throw createMissingSecretStoreEntryError(accountId);
      }

      return loadAndCache(accountId);
    },
    delete: async (accountId: string) => {
      try {
        await adapter.delete(accountId);
      } catch (error) {
        if (isMissingSecretStoreEntryError(error)) {
          markMissing(accountId);
        }
        throw error;
      }

      markMissing(accountId);
    },
    exists: async (accountId: string) => {
      if (payloadCache.has(accountId)) {
        return true;
      }

      if (missingAccounts.has(accountId)) {
        return false;
      }

      const cachedExists = existsCache.get(accountId);
      if (cachedExists !== undefined) {
        return cachedExists;
      }

      try {
        await loadAndCache(accountId);
        return true;
      } catch (error) {
        if (isMissingSecretStoreEntryError(error)) {
          return false;
        }
      }

      const exists = await adapter.exists(accountId);
      existsCache.set(accountId, exists);
      if (!exists) {
        missingAccounts.add(accountId);
      }
      return exists;
    },
    listAccountIds: async () => {
      const accountIds = await adapter.listAccountIds();
      for (const accountId of accountIds) {
        existsCache.set(accountId, true);
        missingAccounts.delete(accountId);
      }
      return accountIds;
    },
    getCapability: () => adapter.getCapability(),
    [CACHED_ADAPTER_SYMBOL]: true,
  };

  return cachedAdapter;
};

const unsupportedError = (platform: NodeJS.Platform): Error =>
  new Error(
    `No default secret store adapter configured for platform '${platform}'. ` +
      "Only macOS, Windows, and Linux adapters are wired by default right now.",
  );

const loadConfiguredAccountIds = async (): Promise<string[]> => {
  if (!configExists()) {
    return [];
  }

  const config = await loadConfig();
  return config.accounts.map((account) => account.accountId);
};

const createMacOSCrossKeychainAdapter = (): SecretStoreAdapter => ({
  id: "macos-cross-keychain",
  label: "macOS Keychain (cross-keychain)",
  getServiceName: getMacOSCrossKeychainService,
  save: saveMacOSCrossKeychainPayload,
  load: loadMacOSCrossKeychainPayload,
  delete: deleteMacOSCrossKeychainPayload,
  exists: macosCrossKeychainPayloadExists,
  listAccountIds: async () => {
    const accountIds = await loadConfiguredAccountIds();
    const existing = await Promise.all(
      accountIds.map(async (accountId) => ({
        accountId,
        exists: await macosCrossKeychainPayloadExists(accountId),
      })),
    );
    return existing.filter((item) => item.exists).map((item) => item.accountId);
  },
  getCapability: () => ({ available: true }),
});

export const createMacOSLegacyKeychainAdapter = (): SecretStoreAdapter => ({
  id: "macos-legacy-keychain",
  label: "macOS Keychain (legacy security CLI)",
  getServiceName: getKeychainService,
  save: async (accountId, payload) => {
    saveKeychainPayload(accountId, payload);
  },
  load: async (accountId) => loadKeychainPayload(accountId),
  delete: async (accountId) => {
    deleteKeychainPayload(accountId);
  },
  exists: async (accountId) => keychainPayloadExists(accountId),
  listAccountIds: async () => listKeychainAccounts(),
  getCapability: () => ({ available: true }),
});

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

const createLinuxCrossKeychainAdapter = (): SecretStoreAdapter => ({
  id: "linux-cross-keychain",
  label: "Linux Secret Service (cross-keychain)",
  getServiceName: getLinuxCrossKeychainService,
  save: saveLinuxCrossKeychainPayload,
  load: loadLinuxCrossKeychainPayload,
  delete: deleteLinuxCrossKeychainPayload,
  exists: linuxCrossKeychainPayloadExists,
  listAccountIds: async () => {
    const accountIds = await loadConfiguredAccountIds();
    const existing = await Promise.all(
      accountIds.map(async (accountId) => ({
        accountId,
        exists: await linuxCrossKeychainPayloadExists(accountId),
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
    return createMacOSCrossKeychainAdapter();
  }

  if (platform === "win32") {
    return createWindowsCrossKeychainAdapter();
  }

  if (platform === "linux") {
    return createLinuxCrossKeychainAdapter();
  }

  return createUnsupportedAdapter(platform);
};

export const createSecretStoreAdapterFromSelection = (
  selection: SecretStoreSelection = "auto",
  platform: NodeJS.Platform = process.platform,
): SecretStoreAdapter => {
  if (selection === "legacy-keychain") {
    if (platform !== "darwin") {
      throw new Error(
        "The legacy keychain adapter is only available on macOS (darwin).",
      );
    }
    return createMacOSLegacyKeychainAdapter();
  }

  return createRuntimeSecretStoreAdapter(platform);
};

export const resolveMacOSCrossKeychainBackendId = async (
  platform: NodeJS.Platform = process.platform,
): Promise<MacOSCrossKeychainBackendId | null> => {
  if (platform !== "darwin") {
    return null;
  }

  return resolveCrossKeychainMacOSBackendId();
};

let currentSecretStoreAdapter: SecretStoreAdapter = withSecretStoreCache(
  createRuntimeSecretStoreAdapter(),
);

export const getSecretStoreAdapter = (): SecretStoreAdapter =>
  currentSecretStoreAdapter;

export const setSecretStoreAdapter = (adapter: SecretStoreAdapter): void => {
  currentSecretStoreAdapter = withSecretStoreCache(adapter);
};

export const resetSecretStoreAdapter = (): void => {
  currentSecretStoreAdapter = withSecretStoreCache(createRuntimeSecretStoreAdapter());
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
