import {
  deletePassword,
  getPassword,
  setPassword,
  useBackend,
} from "cross-keychain";
import type { OAuthPayload } from "../types";

const SERVICE_PREFIX = "cdx-openai-";

let backendInitPromise: Promise<void> | null = null;

const tryUseBackend = async (backendId: "native-windows" | "windows"): Promise<boolean> => {
  try {
    await useBackend(backendId);
    return true;
  } catch {
    return false;
  }
};

const ensureWindowsBackend = async (): Promise<void> => {
  if (!backendInitPromise) {
    backendInitPromise = (async () => {
      if (await tryUseBackend("native-windows")) {
        return;
      }

      if (await tryUseBackend("windows")) {
        return;
      }

      throw new Error("Unable to initialize Windows credential backend via cross-keychain.");
    })();
  }

  try {
    await backendInitPromise;
  } catch {
    backendInitPromise = null;
    throw new Error("Unable to initialize Windows credential backend via cross-keychain.");
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
): Promise<T> => {
  await ensureWindowsBackend();
  return run(getWindowsCrossKeychainService(accountId));
};

export const saveWindowsCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => withService(
  accountId,
  (service) => setPassword(service, accountId, JSON.stringify(payload)),
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
