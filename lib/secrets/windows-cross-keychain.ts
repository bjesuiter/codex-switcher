import {
  deletePassword,
  getPassword,
  listBackends,
  setPassword,
  useBackend,
} from "cross-keychain";
import type { OAuthPayload } from "../types";
import { ensureFallbackConsent } from "./fallback-consent";

const SERVICE_PREFIX = "cdx-openai-";
const WINDOWS_FALLBACK_SCOPE = "win32:cross-keychain:windows";

type BackendId = "native-windows" | "windows";

let backendInitPromise: Promise<void> | null = null;
let selectedBackend: BackendId | null = null;

const tryUseBackend = async (backendId: BackendId): Promise<boolean> => {
  try {
    await useBackend(backendId);
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

export const getWindowsCrossKeychainService = (accountId: string): string =>
  `${SERVICE_PREFIX}${accountId}`;

const parsePayload = (accountId: string, raw: string): OAuthPayload => {
  let parsed: OAuthPayload;
  try {
    parsed = JSON.parse(raw) as OAuthPayload;
  } catch {
    throw new Error(`Stored credential payload for account ${accountId} is not valid JSON.`);
  }

  if (!parsed.refresh || !parsed.access || !parsed.expires || !parsed.accountId) {
    throw new Error(`Stored credential payload for account ${accountId} is missing required fields.`);
  }

  return parsed;
};

const withService = async <T>(
  accountId: string,
  run: (service: string) => Promise<T>,
  options: { forWrite?: boolean } = {},
): Promise<T> => {
  await ensureWindowsBackend(options);
  return run(getWindowsCrossKeychainService(accountId));
};

export const saveWindowsCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => withService(
  accountId,
  (service) => setPassword(service, accountId, JSON.stringify(payload)),
  { forWrite: true },
);

export const loadWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  const raw = await withService(
    accountId,
    (service) => getPassword(service, accountId),
  );

  if (raw === null) {
    throw new Error(`No stored credentials found for account ${accountId}.`);
  }

  return parsePayload(accountId, raw);
};

export const deleteWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => withService(accountId, (service) => deletePassword(service, accountId));

export const windowsCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withService(
  accountId,
  async (service) => (await getPassword(service, accountId)) !== null,
);
