import {
  deletePassword,
  getPassword,
  listBackends,
  setPassword,
  useBackend,
} from "@bjesuiter/cross-keychain";
import type { OAuthPayload } from "../types";
import { getCrossKeychainBackendOverrides } from "./cross-keychain-overrides";
import { ensureFallbackConsent } from "./fallback-consent";
import {
  createWindowsChunkedPayloadPointer,
  MAX_WINDOWS_PASSWORD_CHUNK_LENGTH,
  parseWindowsChunkedPayloadPointer,
  splitWindowsPayloadIntoChunks,
} from "./windows-chunked-payload";

const SERVICE_PREFIX = "cdx-openai-";
const WINDOWS_FALLBACK_SCOPE = "win32:cross-keychain:windows";

type BackendId = "native-windows" | "windows";

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

export const getWindowsCrossKeychainService = (accountId: string): string =>
  `${SERVICE_PREFIX}${accountId}`;

const getChunkAccountName = (accountId: string, index: number): string =>
  `${accountId}__chunk_${index}`;

const deleteChunkEntries = async (
  service: string,
  accountId: string,
  chunks: number,
  startIndex = 0,
): Promise<void> => {
  for (let index = startIndex; index < chunks; index += 1) {
    try {
      await deletePassword(service, getChunkAccountName(accountId, index));
    } catch {
      // Best effort cleanup.
    }
  }
};

const readStoredPayloadRaw = async (
  service: string,
  accountId: string,
): Promise<string | null> => {
  const raw = await getPassword(service, accountId);
  if (raw === null) {
    return null;
  }

  const pointer = parseWindowsChunkedPayloadPointer(raw);
  if (!pointer) {
    return raw;
  }

  let combined = "";
  for (let index = 0; index < pointer.chunks; index += 1) {
    const chunk = await getPassword(service, getChunkAccountName(accountId, index));
    if (chunk === null) {
      throw new Error(
        `Stored credential payload for account ${accountId} is missing chunk ${index + 1}/${pointer.chunks}.`,
      );
    }
    combined += chunk;
  }

  return combined;
};

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
  async (service) => {
    const serialized = JSON.stringify(payload);
    const previousRaw = await getPassword(service, accountId);
    const previousPointer = previousRaw
      ? parseWindowsChunkedPayloadPointer(previousRaw)
      : null;

    if (serialized.length <= MAX_WINDOWS_PASSWORD_CHUNK_LENGTH) {
      await setPassword(service, accountId, serialized);
      if (previousPointer) {
        await deleteChunkEntries(service, accountId, previousPointer.chunks);
      }
      return;
    }

    const chunks = splitWindowsPayloadIntoChunks(serialized);
    for (let index = 0; index < chunks.length; index += 1) {
      await setPassword(service, getChunkAccountName(accountId, index), chunks[index]);
    }

    await setPassword(
      service,
      accountId,
      JSON.stringify(createWindowsChunkedPayloadPointer(chunks.length)),
    );

    if (previousPointer && previousPointer.chunks > chunks.length) {
      await deleteChunkEntries(service, accountId, previousPointer.chunks, chunks.length);
    }
  },
  { forWrite: true },
);

export const loadWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  const raw = await withService(
    accountId,
    (service) => readStoredPayloadRaw(service, accountId),
  );

  if (raw === null) {
    throw new Error(`No stored credentials found for account ${accountId}.`);
  }

  return parsePayload(accountId, raw);
};

export const deleteWindowsCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => withService(accountId, async (service) => {
  const raw = await getPassword(service, accountId);
  const pointer = raw ? parseWindowsChunkedPayloadPointer(raw) : null;
  if (pointer) {
    await deleteChunkEntries(service, accountId, pointer.chunks);
  }
  await deletePassword(service, accountId);
});

export const windowsCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withService(
  accountId,
  async (service) => (await getPassword(service, accountId)) !== null,
);
