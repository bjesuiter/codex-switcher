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
const MAX_WINDOWS_PASSWORD_CHUNK_LENGTH = 3000;
const CHUNKED_PAYLOAD_MARKER = "cdx-oauth-chunked-v1";

type BackendId = "native-windows" | "windows";

type ChunkedPayloadPointer = {
  marker: typeof CHUNKED_PAYLOAD_MARKER;
  chunks: number;
};

type CrossKeychainApi = {
  setPassword: typeof setPassword;
  getPassword: typeof getPassword;
  deletePassword: typeof deletePassword;
  useBackend: typeof useBackend;
  listBackends: () => Promise<Array<{ id: string }>>;
};

const DEFAULT_CROSS_KEYCHAIN_API: CrossKeychainApi = {
  setPassword,
  getPassword,
  deletePassword,
  useBackend,
  listBackends,
};

let crossKeychainApi: CrossKeychainApi = DEFAULT_CROSS_KEYCHAIN_API;
let backendInitPromise: Promise<void> | null = null;
let selectedBackend: BackendId | null = null;

export const __setWindowsCrossKeychainApiForTests = (
  overrides: Partial<CrossKeychainApi>,
): void => {
  crossKeychainApi = { ...DEFAULT_CROSS_KEYCHAIN_API, ...overrides };
  backendInitPromise = null;
  selectedBackend = null;
};

export const __resetWindowsCrossKeychainStateForTests = (): void => {
  crossKeychainApi = DEFAULT_CROSS_KEYCHAIN_API;
  backendInitPromise = null;
  selectedBackend = null;
};

const tryUseBackend = async (backendId: BackendId): Promise<boolean> => {
  try {
    await crossKeychainApi.useBackend(backendId);
    return true;
  } catch {
    return false;
  }
};

const selectBackend = async (): Promise<BackendId> => {
  const backends = await crossKeychainApi.listBackends();
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

const splitIntoChunks = (value: string, chunkSize: number): string[] => {
  const chunks: string[] = [];
  for (let index = 0; index < value.length; index += chunkSize) {
    chunks.push(value.slice(index, index + chunkSize));
  }
  return chunks;
};

const isChunkedPayloadPointer = (value: unknown): value is ChunkedPayloadPointer => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const pointer = value as Partial<ChunkedPayloadPointer>;
  return pointer.marker === CHUNKED_PAYLOAD_MARKER
    && typeof pointer.chunks === "number"
    && Number.isInteger(pointer.chunks)
    && pointer.chunks > 0;
};

const parseChunkedPayloadPointer = (raw: string): ChunkedPayloadPointer | null => {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return isChunkedPayloadPointer(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

const deleteChunkEntries = async (
  service: string,
  accountId: string,
  chunks: number,
  startIndex = 0,
): Promise<void> => {
  for (let index = startIndex; index < chunks; index += 1) {
    try {
      await crossKeychainApi.deletePassword(service, getChunkAccountName(accountId, index));
    } catch {
      // Best effort cleanup.
    }
  }
};

const readStoredPayloadRaw = async (
  service: string,
  accountId: string,
): Promise<string | null> => {
  const raw = await crossKeychainApi.getPassword(service, accountId);
  if (raw === null) {
    return null;
  }

  const pointer = parseChunkedPayloadPointer(raw);
  if (!pointer) {
    return raw;
  }

  let combined = "";
  for (let index = 0; index < pointer.chunks; index += 1) {
    const chunk = await crossKeychainApi.getPassword(service, getChunkAccountName(accountId, index));
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
    const previousRaw = await crossKeychainApi.getPassword(service, accountId);
    const previousPointer = previousRaw ? parseChunkedPayloadPointer(previousRaw) : null;

    if (serialized.length <= MAX_WINDOWS_PASSWORD_CHUNK_LENGTH) {
      await crossKeychainApi.setPassword(service, accountId, serialized);
      if (previousPointer) {
        await deleteChunkEntries(service, accountId, previousPointer.chunks);
      }
      return;
    }

    const chunks = splitIntoChunks(serialized, MAX_WINDOWS_PASSWORD_CHUNK_LENGTH);
    for (let index = 0; index < chunks.length; index += 1) {
      await crossKeychainApi.setPassword(service, getChunkAccountName(accountId, index), chunks[index]);
    }

    const pointer: ChunkedPayloadPointer = {
      marker: CHUNKED_PAYLOAD_MARKER,
      chunks: chunks.length,
    };
    await crossKeychainApi.setPassword(service, accountId, JSON.stringify(pointer));

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
  const raw = await crossKeychainApi.getPassword(service, accountId);
  const pointer = raw ? parseChunkedPayloadPointer(raw) : null;
  if (pointer) {
    await deleteChunkEntries(service, accountId, pointer.chunks);
  }
  await crossKeychainApi.deletePassword(service, accountId);
});

export const windowsCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withService(
  accountId,
  async (service) => (await crossKeychainApi.getPassword(service, accountId)) !== null,
);
