import {
  deletePassword,
  getPassword,
  listBackends,
  setPassword,
  useBackend,
} from "@bjesuiter/cross-keychain";
import { spawn } from "node:child_process";
import * as p from "@clack/prompts";
import type { OAuthPayload } from "../types";
import { getCrossKeychainBackendOverrides } from "./cross-keychain-overrides";
import { ensureFallbackConsent } from "./fallback-consent";

const SERVICE_PREFIX = "cdx-openai-";
const LINUX_FALLBACK_SCOPE = "linux:cross-keychain:secret-service";

type BackendId = "native-linux" | "secret-service";

export type LinuxSecureStoreErrorKind =
  | "missing_entry"
  | "store_unavailable"
  | "other";

const MISSING_ENTRY_MARKERS = [
  "no matching entry found in secure storage",
  "password not found",
  "no stored credentials found",
  "credential not found",
  "no result found",
];

const STORE_UNAVAILABLE_MARKERS = [
  "unable to initialize linux secure-store backend",
  "no keyring backend could be initialized",
  "native keyring module not available",
  "linux secure store is unavailable",
  "secret service operation failed",
  "couldn't access platform secure storage",
  "dbus",
  "d-bus",
  "org.freedesktop.secrets",
  "service unavailable",
];

let backendInitPromise: Promise<void> | null = null;
let selectedBackend: BackendId | null = null;

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

export const classifyLinuxSecureStoreError = (
  error: unknown,
): LinuxSecureStoreErrorKind => {
  const message = getErrorMessage(error).toLowerCase();

  if (MISSING_ENTRY_MARKERS.some((marker) => message.includes(marker))) {
    return "missing_entry";
  }

  if (STORE_UNAVAILABLE_MARKERS.some((marker) => message.includes(marker))) {
    return "store_unavailable";
  }

  return "other";
};

const createLinuxSecureStoreUnavailableError = (details?: string): Error => {
  const guidance =
    "Linux secure store is unavailable. Ensure Secret Service is installed/running " +
    "(for example gnome-keyring with secret-tool), then retry login.";

  if (!details) {
    return new Error(guidance);
  }

  return new Error(`${guidance} Technical details: ${details}`);
};

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

const setActiveBackend = (backendId: BackendId): void => {
  selectedBackend = backendId;
  backendInitPromise = Promise.resolve();
};

const trySwitchBackend = async (
  backendId: BackendId,
  options: { forWrite?: boolean } = {},
): Promise<boolean> => {
  if (options.forWrite && backendId === "secret-service") {
    await ensureFallbackConsent(
      LINUX_FALLBACK_SCOPE,
      "⚠ Security warning: only the cross-keychain Linux fallback backend is available.\n" +
        "This path relies on shell-based `secret-tool` operations for Secret Service access.\n" +
        "Compared to native bindings, secrets may be more exposed to process inspection/logging while helper commands run.",
    );
  }

  try {
    await useBackend(backendId, getCrossKeychainBackendOverrides());
    setActiveBackend(backendId);
    return true;
  } catch {
    return false;
  }
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
  try {
    await ensureLinuxBackend(options);
  } catch (error) {
    throw createLinuxSecureStoreUnavailableError(getErrorMessage(error));
  }

  try {
    return await run(getLinuxCrossKeychainService(accountId));
  } catch (error) {
    if (classifyLinuxSecureStoreError(error) === "store_unavailable") {
      throw createLinuxSecureStoreUnavailableError(getErrorMessage(error));
    }
    throw error;
  }
};

type CommandWithInputResult = {
  ok: boolean;
  stdout: string;
  stderr: string;
  error?: string;
};

const isInteractiveTerminal = (): boolean =>
  Boolean(process.stdin.isTTY) && Boolean(process.stdout.isTTY);

const applyEnvAssignments = (raw: string): void => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const match = line.match(/^([A-Z0-9_]+)=(.*);?$/);
    if (!match) {
      continue;
    }

    const key = match[1];
    const value = match[2].replace(/;$/, "");
    if (key) {
      process.env[key] = value;
    }
  }
};

const runCommandWithInput = async (
  command: string,
  args: string[],
  input: string,
): Promise<CommandWithInputResult> =>
  await new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let spawnError: string | null = null;

    child.stdout?.on("data", (chunk: Buffer) => {
      stdout += chunk.toString();
    });

    child.stderr?.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });

    child.once("error", (error) => {
      spawnError = error.message;
    });

    child.once("close", (code) => {
      resolve({
        ok: spawnError === null && code === 0,
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        ...(spawnError ? { error: spawnError } : {}),
      });
    });

    child.stdin?.write(input);
    child.stdin?.end();
  });

const attemptInteractiveLinuxKeyringUnlock = async (): Promise<boolean> => {
  if (!isInteractiveTerminal()) {
    return false;
  }

  const shouldUnlock = await p.confirm({
    message: "Linux keyring appears locked. Unlock it now?",
    initialValue: true,
  });

  if (p.isCancel(shouldUnlock) || !shouldUnlock) {
    return false;
  }

  const passphrase = await p.password({
    message: "Enter Linux keyring password:",
    validate: (value) => {
      if (!value || !value.trim()) {
        return "Password is required to unlock keyring.";
      }
      return undefined;
    },
  });

  if (p.isCancel(passphrase) || !passphrase) {
    return false;
  }

  const result = await runCommandWithInput(
    "gnome-keyring-daemon",
    ["--unlock", "--components=secrets"],
    `${passphrase}\n`,
  );

  if (!result.ok) {
    const details = result.error || result.stderr || result.stdout;
    if (details) {
      process.stderr.write(`cdx: keyring unlock failed (${details})\n`);
    }
    return false;
  }

  applyEnvAssignments(result.stdout);
  return true;
};

const withLinuxUnlockRetry = async <T>(
  run: () => Promise<T>,
  options: { forWrite?: boolean; retryOnMissingEntryForNativeWrite?: boolean } = {},
): Promise<T> => {
  let unlockAttempted = false;

  while (true) {
    try {
      return await run();
    } catch (error) {
      const kind = classifyLinuxSecureStoreError(error);
      const canRetryAfterUnlock =
        !unlockAttempted &&
        (kind === "store_unavailable" ||
          (
            kind === "missing_entry" &&
            options.forWrite &&
            options.retryOnMissingEntryForNativeWrite &&
            selectedBackend === "native-linux"
          ));

      if (!canRetryAfterUnlock) {
        throw error;
      }

      unlockAttempted = true;
      const unlocked = await attemptInteractiveLinuxKeyringUnlock();
      if (!unlocked) {
        throw error;
      }

      backendInitPromise = null;
      selectedBackend = null;
    }
  }
};

const trySaveWithSecretServiceFallback = async (
  accountId: string,
  serializedPayload: string,
): Promise<{ ok: true } | { ok: false; error: unknown }> => {
  const switched = await trySwitchBackend("secret-service", { forWrite: true });
  if (!switched) {
    return {
      ok: false,
      error: new Error("Unable to switch Linux secure-store backend to secret-service fallback."),
    };
  }

  try {
    const service = getLinuxCrossKeychainService(accountId);
    await setPassword(service, accountId, serializedPayload);
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export const saveLinuxCrossKeychainPayload = async (
  accountId: string,
  payload: OAuthPayload,
): Promise<void> => {
  const serialized = JSON.stringify(payload);

  try {
    await withLinuxUnlockRetry(
      () =>
        withService(
          accountId,
          (service) => setPassword(service, accountId, serialized),
          { forWrite: true },
        ),
      { forWrite: true, retryOnMissingEntryForNativeWrite: true },
    );
    return;
  } catch (error) {
    const kind = classifyLinuxSecureStoreError(error);

    if (kind === "missing_entry" && selectedBackend === "native-linux") {
      const fallbackResult = await trySaveWithSecretServiceFallback(accountId, serialized);
      if (fallbackResult.ok) {
        return;
      }

      const originalDetails = getErrorMessage(error);
      const fallbackDetails = getErrorMessage(fallbackResult.error);
      throw createLinuxSecureStoreUnavailableError(
        `Native backend could not create the credential entry (${originalDetails}). ` +
          `Fallback secret-service backend also failed (${fallbackDetails}).`,
      );
    }

    if (kind === "store_unavailable") {
      throw createLinuxSecureStoreUnavailableError(getErrorMessage(error));
    }

    throw error;
  }
};

export const loadLinuxCrossKeychainPayload = async (
  accountId: string,
): Promise<OAuthPayload> => {
  try {
    const raw = await withLinuxUnlockRetry(() =>
      withService(accountId, (service) => getPassword(service, accountId))
    );

    if (raw === null) {
      throw new Error(`No stored credentials found for account ${accountId}.`);
    }

    return parsePayload(accountId, raw);
  } catch (error) {
    if (classifyLinuxSecureStoreError(error) === "missing_entry") {
      throw new Error(`No stored credentials found for account ${accountId}.`);
    }
    throw error;
  }
};

export const deleteLinuxCrossKeychainPayload = async (
  accountId: string,
): Promise<void> => {
  try {
    await withLinuxUnlockRetry(() =>
      withService(accountId, (service) => deletePassword(service, accountId))
    );
  } catch (error) {
    if (classifyLinuxSecureStoreError(error) === "missing_entry") {
      return;
    }
    throw error;
  }
};

export const linuxCrossKeychainPayloadExists = async (
  accountId: string,
): Promise<boolean> => {
  try {
    return await withLinuxUnlockRetry(() =>
      withService(
        accountId,
        async (service) => (await getPassword(service, accountId)) !== null,
      )
    );
  } catch (error) {
    if (classifyLinuxSecureStoreError(error) === "missing_entry") {
      return false;
    }
    throw error;
  }
};
