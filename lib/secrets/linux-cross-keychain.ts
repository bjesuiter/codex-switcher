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
const LINUX_FALLBACK_SCOPE = "linux:cross-keychain:secret-service";

type BackendId = "native-linux" | "secret-service";

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

  if (available.has("native-linux") && (await tryUseBackend("native-linux"))) {
    return "native-linux";
  }

  if (available.has("secret-service") && (await tryUseBackend("secret-service"))) {
    return "secret-service";
  }

  if (await tryUseBackend("native-linux")) {
    return "native-linux";
  }

  if (await tryUseBackend("secret-service")) {
    return "secret-service";
  }

  throw new Error("Unable to initialize Linux secure-store backend via cross-keychain.");
};

const ensureLinuxBackend = async (
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
    throw new Error("Unable to initialize Linux secure-store backend via cross-keychain.");
  }

  if (options.forWrite && selectedBackend === "secret-service") {
    await ensureFallbackConsent(
      LINUX_FALLBACK_SCOPE,
      "⚠ Security warning: only the cross-keychain Linux fallback backend is available.\n" +
        "This path relies on shell-based `secret-tool` operations for Secret Service access.\n" +
        "Compared to native bindings, secrets may be more exposed to process inspection/logging while helper commands run.",
    );
  }
};

export const getLinuxCrossKeychainService = (accountId: string): string =>
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
  await ensureLinuxBackend(options);
  return run(getLinuxCrossKeychainService(accountId));
};

export const saveLinuxCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => withService(
  accountId,
  (service) => setPassword(service, accountId, JSON.stringify(payload)),
  { forWrite: true },
);

export const loadLinuxCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  const raw = await withService(accountId, (service) => getPassword(service, accountId));

  if (raw === null) {
    throw new Error(`No stored credentials found for account ${accountId}.`);
  }

  return parsePayload(accountId, raw);
};

export const deleteLinuxCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => withService(accountId, (service) => deletePassword(service, accountId));

export const linuxCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => withService(
  accountId,
  async (service) => (await getPassword(service, accountId)) !== null,
);
