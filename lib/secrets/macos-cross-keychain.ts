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

const SERVICE_PREFIX = "cdx-openai-";
const MACOS_FALLBACK_SCOPE = "darwin:cross-keychain:macos";

type BackendId = "native-macos" | "macos";

export type MacOSCrossKeychainBackendId = BackendId;

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

  if (available.has("native-macos") && (await tryUseBackend("native-macos"))) {
    return "native-macos";
  }

  if (available.has("macos") && (await tryUseBackend("macos"))) {
    return "macos";
  }

  if (await tryUseBackend("native-macos")) {
    return "native-macos";
  }

  if (await tryUseBackend("macos")) {
    return "macos";
  }

  throw new Error("Unable to initialize macOS keychain backend via cross-keychain.");
};

const ensureMacOSBackend = async (
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
    throw new Error("Unable to initialize macOS keychain backend via cross-keychain.");
  }

  if (options.forWrite && selectedBackend === "macos") {
    await ensureFallbackConsent(
      MACOS_FALLBACK_SCOPE,
      "⚠ Security warning: only the cross-keychain macOS fallback backend is available.\n" +
        "This path uses the `security` command to access Keychain.\n" +
        "Compared to native bindings, secrets may be more exposed to process inspection/logging while helper commands run.",
    );
  }
};

export const resolveMacOSCrossKeychainBackendId = async (): Promise<MacOSCrossKeychainBackendId> => {
  await ensureMacOSBackend();

  if (!selectedBackend) {
    throw new Error("Unable to initialize macOS keychain backend via cross-keychain.");
  }

  return selectedBackend;
};

export const getMacOSCrossKeychainService = (accountId: string): string =>
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
  await ensureMacOSBackend(options);
  return run(getMacOSCrossKeychainService(accountId));
};

export const saveMacOSCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => withService(
  accountId,
  (service) => setPassword(service, accountId, JSON.stringify(payload)),
  { forWrite: true },
);

export const loadMacOSCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  const raw = await withService(accountId, (service) => getPassword(service, accountId));

  if (raw === null) {
    throw new Error(`No stored credentials found for account ${accountId}.`);
  }

  return parsePayload(accountId, raw);
};

export const deleteMacOSCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => withService(accountId, (service) => deletePassword(service, accountId));

export const macosCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withService(
  accountId,
  async (service) => (await getPassword(service, accountId)) !== null,
);
