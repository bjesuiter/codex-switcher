import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { configExists, loadConfig } from "./config";
import {
  getRuntimeCapabilities,
  type RuntimeCapabilities,
} from "./platform/capabilities";
import { getPaths } from "./paths";
import {
  getSecretStoreAdapter,
  isMissingSecretStoreEntryError,
} from "./secrets/store";
import type { OAuthPayload } from "./types";

export type AccountStatus = {
  accountId: string;
  label?: string;
  isCurrent: boolean;
  secureStoreExists: boolean;
  hasIdToken: boolean;
  expiresAt: number | null;
  expiresIn: string;
};

export type AuthFileStatus = {
  exists: boolean;
  accountId: string | null;
};

export type StatusInfo = {
  accounts: AccountStatus[];
  opencodeAuth: AuthFileStatus;
  codexAuth: AuthFileStatus;
  piAuth: AuthFileStatus;
  capabilities: RuntimeCapabilities;
};

const formatDuration = (ms: number): string => {
  const absMs = Math.abs(ms);
  const seconds = Math.floor(absMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    const remainingHours = hours % 24;
    return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`;
  }
  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  }
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
};

export const formatExpiry = (expiresAt: number | null): string => {
  if (expiresAt === null) return "unknown";

  const remaining = expiresAt - Date.now();
  if (remaining <= 0) {
    return `EXPIRED ${formatDuration(remaining)} ago`;
  }
  return `expires in ${formatDuration(remaining)}`;
};

const readOpenCodeAuthAccount = async (): Promise<AuthFileStatus> => {
  const { authPath } = getPaths();
  if (!existsSync(authPath)) {
    return { exists: false, accountId: null };
  }
  try {
    const raw = await readFile(authPath, "utf8");
    const parsed = JSON.parse(raw) as { openai?: { accountId?: string } };
    return { exists: true, accountId: parsed.openai?.accountId ?? null };
  } catch {
    return { exists: true, accountId: null };
  }
};

const readCodexAuthAccount = async (): Promise<AuthFileStatus> => {
  const { codexAuthPath } = getPaths();
  if (!existsSync(codexAuthPath)) {
    return { exists: false, accountId: null };
  }
  try {
    const raw = await readFile(codexAuthPath, "utf8");
    const parsed = JSON.parse(raw) as { tokens?: { account_id?: string } };
    return { exists: true, accountId: parsed.tokens?.account_id ?? null };
  } catch {
    return { exists: true, accountId: null };
  }
};

const readPiAuthAccount = async (): Promise<AuthFileStatus> => {
  const { piAuthPath } = getPaths();
  if (!existsSync(piAuthPath)) {
    return { exists: false, accountId: null };
  }
  try {
    const raw = await readFile(piAuthPath, "utf8");
    const parsed = JSON.parse(raw) as { "openai-codex"?: { accountId?: string } };
    return { exists: true, accountId: parsed["openai-codex"]?.accountId ?? null };
  } catch {
    return { exists: true, accountId: null };
  }
};

const getAccountStatus = async (
  accountId: string,
  isCurrent: boolean,
  label?: string,
): Promise<AccountStatus> => {
  const secretStore = getSecretStoreAdapter();

  let secureStoreExists = false;
  let expiresAt: number | null = null;
  let hasIdToken = false;

  try {
    const payload: OAuthPayload = await secretStore.load(accountId);
    secureStoreExists = true;
    expiresAt = payload.expires;
    hasIdToken = !!payload.idToken;
  } catch (error) {
    secureStoreExists = !isMissingSecretStoreEntryError(error);
  }

  return {
    accountId,
    label,
    isCurrent,
    secureStoreExists,
    hasIdToken,
    expiresAt,
    expiresIn: formatExpiry(expiresAt),
  };
};

export const getStatus = async (): Promise<StatusInfo> => {
  const accounts: AccountStatus[] = [];

  if (configExists()) {
    const config = await loadConfig();
    for (let i = 0; i < config.accounts.length; i++) {
      const account = config.accounts[i];
      accounts.push(
        await getAccountStatus(account.accountId, i === config.current, account.label),
      );
    }
  }

  const [opencodeAuth, codexAuth, piAuth] = await Promise.all([
    readOpenCodeAuthAccount(),
    readCodexAuthAccount(),
    readPiAuthAccount(),
  ]);

  return {
    accounts,
    opencodeAuth,
    codexAuth,
    piAuth,
    capabilities: getRuntimeCapabilities(),
  };
};
