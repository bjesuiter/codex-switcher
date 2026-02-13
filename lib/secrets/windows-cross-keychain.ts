import {
  deletePassword,
  getPassword,
  setPassword,
  useBackend,
} from "cross-keychain";
import type { OAuthPayload } from "../types";

const SERVICE_PREFIX = "cdx-openai-";

let backendInitPromise: Promise<void> | null = null;

const ensureWindowsBackend = async (): Promise<void> => {
  if (!backendInitPromise) {
    backendInitPromise = (async () => {
      try {
        await useBackend("native-windows");
        return;
      } catch {
      }

      try {
        await useBackend("windows");
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        throw new Error(`Unable to initialize Windows credential backend via cross-keychain: ${msg}`);
      }
    })();
  }

  await backendInitPromise;
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

export const saveWindowsCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => {
  await ensureWindowsBackend();
  const service = getWindowsCrossKeychainService(accountId);
  await setPassword(service, accountId, JSON.stringify(payload));
};

export const loadWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  await ensureWindowsBackend();
  const service = getWindowsCrossKeychainService(accountId);
  const raw = await getPassword(service, accountId);

  if (raw === null) {
    throw new Error(`No stored credentials found for account ${accountId}.`);
  }

  return parsePayload(accountId, raw);
};

export const deleteWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => {
  await ensureWindowsBackend();
  const service = getWindowsCrossKeychainService(accountId);
  await deletePassword(service, accountId);
};

export const windowsCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => {
  await ensureWindowsBackend();
  const service = getWindowsCrossKeychainService(accountId);
  return (await getPassword(service, accountId)) !== null;
};
