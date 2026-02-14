import { randomBytes } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  deletePassword,
  getPassword,
  listBackends,
  setPassword,
  useBackend,
} from "@bjesuiter/cross-keychain";
import { Decrypter, Encrypter } from "age-encryption";
import { getPaths } from "../paths";
import type { OAuthPayload } from "../types";
import { getCrossKeychainBackendOverrides } from "./cross-keychain-overrides";
import { ensureFallbackConsent } from "./fallback-consent";

const SERVICE_PREFIX = "cdx-openai-";
const WINDOWS_FALLBACK_SCOPE = "win32:cross-keychain:windows";
const WINDOWS_VAULT_FILE = "accounts.windows.age";
const WINDOWS_VAULT_VERSION = 1;
const WINDOWS_VAULT_KEY_SERVICE = "cdx-openai-vault-passphrase";
const WINDOWS_VAULT_KEY_ACCOUNT = "windows-v1";

type BackendId = "native-windows" | "windows";

type WindowsEncryptedVault = {
  version: number;
  accounts: Record<string, OAuthPayload>;
};

let backendInitPromise: Promise<void> | null = null;
let selectedBackend: BackendId | null = null;

const tryUseBackend = async (backendId: BackendId): Promise<boolean> => {
  try {
    await useBackend(backendId, getCrossKeychainBackendOverrides());
    return true;
  } catch {
    return false;
  }
};

const selectBackend = async (): Promise<BackendId> => {
  const backends = await listBackends();
  const available = new Set(backends.map((backend) => backend.id));

  if (available.has("native-windows") && (await tryUseBackend("native-windows"))) {
    return "native-windows";
  }

  if (available.has("windows") && (await tryUseBackend("windows"))) {
    return "windows";
  }

  if (await tryUseBackend("native-windows")) {
    return "native-windows";
  }

  if (await tryUseBackend("windows")) {
    return "windows";
  }

  throw new Error("Unable to initialize Windows credential backend via cross-keychain.");
};

const ensureWindowsBackend = async (
  options: { forWrite?: boolean } = {},
): Promise<void> => {
  if (!backendInitPromise) {
    backendInitPromise = (async () => {
      selectedBackend = await selectBackend();
    })();
  }

  try {
    await backendInitPromise;
  } catch {
    backendInitPromise = null;
    selectedBackend = null;
    throw new Error("Unable to initialize Windows credential backend via cross-keychain.");
  }

  if (options.forWrite && selectedBackend === "windows") {
    await ensureFallbackConsent(
      WINDOWS_FALLBACK_SCOPE,
      "⚠ Security warning: only the cross-keychain Windows fallback backend is available.\n" +
        "This path runs a PowerShell helper to access Windows Credential Manager.\n" +
        "Compared to native bindings, secrets may be more exposed to process inspection/logging while the helper runs.",
    );
  }
};

const withWindowsBackend = async <T>(
  run: () => Promise<T>,
  options: { forWrite?: boolean } = {},
): Promise<T> => {
  await ensureWindowsBackend(options);
  return run();
};

const getWindowsVaultPath = (): string =>
  path.join(getPaths().configDir, WINDOWS_VAULT_FILE);

const createVaultPassphrase = (): string =>
  randomBytes(32).toString("hex");

const getVaultPassphrase = async (
  options: { createIfMissing?: boolean } = {},
): Promise<string | null> => {
  const current = await getPassword(
    WINDOWS_VAULT_KEY_SERVICE,
    WINDOWS_VAULT_KEY_ACCOUNT,
  );
  if (current) {
    return current;
  }

  if (!options.createIfMissing) {
    return null;
  }

  const generated = createVaultPassphrase();
  await setPassword(WINDOWS_VAULT_KEY_SERVICE, WINDOWS_VAULT_KEY_ACCOUNT, generated);
  return generated;
};

const createEmptyVault = (): WindowsEncryptedVault => ({
  version: WINDOWS_VAULT_VERSION,
  accounts: {},
});

const parsePayload = (accountId: string, input: unknown): OAuthPayload => {
  if (!input || typeof input !== "object") {
    throw new Error(`Stored credential payload for account ${accountId} is not valid JSON.`);
  }

  const parsed = input as Partial<OAuthPayload>;

  if (!parsed.refresh || !parsed.access || !parsed.expires || !parsed.accountId) {
    throw new Error(`Stored credential payload for account ${accountId} is missing required fields.`);
  }

  return {
    refresh: parsed.refresh,
    access: parsed.access,
    expires: parsed.expires,
    accountId: parsed.accountId,
    ...(parsed.idToken ? { idToken: parsed.idToken } : {}),
  };
};

const parseVault = (raw: string, source: string): WindowsEncryptedVault => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Stored Windows credential vault (${source}) is not valid JSON.`);
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error(`Stored Windows credential vault (${source}) is not valid JSON.`);
  }

  const vault = parsed as Partial<WindowsEncryptedVault>;
  const rawAccounts = vault.accounts;
  if (!rawAccounts || typeof rawAccounts !== "object") {
    throw new Error(`Stored Windows credential vault (${source}) is missing account data.`);
  }

  const accounts: Record<string, OAuthPayload> = {};
  for (const [accountId, payload] of Object.entries(rawAccounts)) {
    accounts[accountId] = parsePayload(accountId, payload);
  }

  return {
    version: typeof vault.version === "number" ? vault.version : WINDOWS_VAULT_VERSION,
    accounts,
  };
};

const decryptVault = async (
  ciphertext: Uint8Array,
  passphrase: string,
  source: string,
): Promise<WindowsEncryptedVault> => {
  const decrypter = new Decrypter();
  decrypter.addPassphrase(passphrase);

  let plaintext: string;
  try {
    plaintext = await decrypter.decrypt(ciphertext, "text");
  } catch {
    throw new Error(
      `Failed to decrypt Windows credential vault (${source}). ` +
        "Stored passphrase or vault file may be invalid.",
    );
  }

  return parseVault(plaintext, source);
};

const encryptVault = async (
  vault: WindowsEncryptedVault,
  passphrase: string,
): Promise<Uint8Array> => {
  const encrypter = new Encrypter();
  encrypter.setPassphrase(passphrase);
  return encrypter.encrypt(JSON.stringify(vault));
};

const loadVault = async (passphrase: string): Promise<WindowsEncryptedVault> => {
  const vaultPath = getWindowsVaultPath();

  let ciphertext: Uint8Array;
  try {
    ciphertext = await readFile(vaultPath);
  } catch (error) {
    if ((error as NodeJS.ErrnoException)?.code === "ENOENT") {
      return createEmptyVault();
    }
    throw error;
  }

  if (ciphertext.length === 0) {
    return createEmptyVault();
  }

  return decryptVault(ciphertext, passphrase, vaultPath);
};

const saveVault = async (
  vault: WindowsEncryptedVault,
  passphrase: string,
): Promise<void> => {
  const { configDir } = getPaths();
  const vaultPath = getWindowsVaultPath();
  await mkdir(configDir, { recursive: true });
  const ciphertext = await encryptVault(vault, passphrase);
  await writeFile(vaultPath, ciphertext);
};

const loadLegacyPayload = async (accountId: string): Promise<OAuthPayload | null> => {
  const service = getWindowsCrossKeychainService(accountId);
  const raw = await getPassword(service, accountId);
  if (raw === null) {
    return null;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Stored credential payload for account ${accountId} is not valid JSON.`);
  }

  return parsePayload(accountId, parsed);
};

const deleteLegacyPayload = async (accountId: string): Promise<void> => {
  const service = getWindowsCrossKeychainService(accountId);
  try {
    await deletePassword(service, accountId);
  } catch {
    // Best-effort cleanup for old per-account credential entries.
  }
};

export const getWindowsCrossKeychainService = (accountId: string): string =>
  `${SERVICE_PREFIX}${accountId}`;

export const saveWindowsCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => withWindowsBackend(async () => {
  const passphrase = await getVaultPassphrase({ createIfMissing: true });
  if (!passphrase) {
    throw new Error("Unable to resolve Windows credential vault passphrase.");
  }

  const vault = await loadVault(passphrase);
  vault.accounts[accountId] = payload;
  await saveVault(vault, passphrase);
  await deleteLegacyPayload(accountId);
}, { forWrite: true });

export const loadWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => withWindowsBackend(async () => {
  const passphrase = await getVaultPassphrase();
  if (passphrase) {
    const vault = await loadVault(passphrase);
    const payload = vault.accounts[accountId];
    if (payload) {
      return payload;
    }
  }

  const legacyPayload = await loadLegacyPayload(accountId);
  if (legacyPayload) {
    return legacyPayload;
  }

  throw new Error(`No stored credentials found for account ${accountId}.`);
});

export const deleteWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => withWindowsBackend(async () => {
  const passphrase = await getVaultPassphrase();
  if (passphrase) {
    const vault = await loadVault(passphrase);
    if (vault.accounts[accountId]) {
      delete vault.accounts[accountId];
      if (Object.keys(vault.accounts).length === 0) {
        await rm(getWindowsVaultPath(), { force: true });
      } else {
        await saveVault(vault, passphrase);
      }
    }
  }

  await deleteLegacyPayload(accountId);
});

export const windowsCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withWindowsBackend(async () => {
  const passphrase = await getVaultPassphrase();
  if (passphrase) {
    const vault = await loadVault(passphrase);
    if (vault.accounts[accountId]) {
      return true;
    }
  }

  return (await loadLegacyPayload(accountId)) !== null;
});
