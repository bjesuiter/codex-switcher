import * as p from "@clack/prompts";
import { writeAllAuthFiles } from "./auth";
import { configExists, loadConfig, saveConfig } from "./config";
import {
  performLogin,
  performRefresh,
  type AuthFlowMode,
} from "./oauth/login";
import { getSecretStoreAdapter } from "./secrets/store";
import { writeActiveAuthFilesIfCurrent } from "./refresh";
import { formatExpiry, getStatus } from "./status";
import type { Config } from "./types";

type MenuAction = "list" | "switch" | "add" | "relogin" | "remove" | "label" | "status" | "exit";

const getAccountDisplay = (
  accountId: string,
  isCurrent: boolean,
  label?: string,
): string => {
  const name = label ? `${label} (${accountId})` : accountId;
  return isCurrent ? `${name} (current)` : name;
};

const hasStoredCredentials = async (accountId: string): Promise<boolean> =>
  getSecretStoreAdapter().exists(accountId);

const loadStoredCredentials = async (accountId: string) =>
  getSecretStoreAdapter().load(accountId);

const getStoredAccountIds = async (): Promise<string[]> =>
  getSecretStoreAdapter().listAccountIds();

const removeStoredCredentials = async (accountId: string): Promise<void> => {
  await getSecretStoreAdapter().delete(accountId);
};

const getRefreshExpiryState = async (accountId: string): Promise<string> => {
  if (!(await hasStoredCredentials(accountId))) {
    return "unknown [no secure store entry]";
  }

  try {
    const payload = await loadStoredCredentials(accountId);
    return formatExpiry(payload.expires);
  } catch {
    return "unknown";
  }
};

const handleListAccounts = async (): Promise<void> => {
  if (!configExists()) {
    p.log.warning("No accounts configured. Use 'Add account' to get started.");
    return;
  }

  const config = await loadConfig();
  const currentAccountId = config.accounts[config.current]?.accountId;

  p.log.info("Configured accounts:");
  for (const account of config.accounts) {
    const marker = account.accountId === currentAccountId ? "→ " : "  ";
    const displayName = account.label
      ? `${account.label} (${account.accountId})`
      : account.accountId;
    const status = await hasStoredCredentials(account.accountId)
      ? ""
      : " (missing credentials)";
    p.log.message(`${marker}${displayName}${status}`);
  }
};

export const handleSwitchAccount = async (): Promise<void> => {
  if (!configExists()) {
    p.log.warning("No accounts configured. Use 'Add account' first.");
    return;
  }

  const config = await loadConfig();

  if (config.accounts.length === 0) {
    p.log.warning("No accounts found. Use 'Add account' first.");
    return;
  }

  if (config.accounts.length === 1) {
    p.log.info("Only one account configured. Nothing to switch.");
    return;
  }

  const currentAccountId = config.accounts[config.current]?.accountId;

  const options = config.accounts.map((account, index) => ({
    value: index,
    label: getAccountDisplay(
      account.accountId,
      account.accountId === currentAccountId,
      account.label,
    ),
  }));

  const selected = await p.select({
    message: "Select account to activate:",
    options,
  });

  if (p.isCancel(selected)) {
    p.log.info("Cancelled.");
    return;
  }

  const selectedAccount = config.accounts[selected as number];
  if (!selectedAccount) {
    p.log.error("Invalid selection.");
    return;
  }

  let payload;
  try {
    payload = await loadStoredCredentials(selectedAccount.accountId);
  } catch {
    p.log.error(
      `Missing credentials for account ${selectedAccount.label ?? selectedAccount.accountId}. Re-login with 'cdx login'.`,
    );
    return;
  }

  const result = await writeAllAuthFiles(payload);

  config.current = selected as number;
  await saveConfig(config);

  const displayName = selectedAccount.label ?? selectedAccount.accountId;
  const opencodeMark = "✓";
  const piMark = result.piWritten ? "✓" : "✗";
  const codexMark = result.codexWritten
    ? "✓"
    : result.codexCleared
      ? "⚠ missing id_token (cleared)"
      : "⚠ missing id_token";
  p.log.success(`Switched to account ${displayName}`);
  p.log.message(`  OpenCode:  ${opencodeMark}`);
  p.log.message(`  Pi Agent:  ${piMark}`);
  p.log.message(`  Codex CLI: ${codexMark}`);
};

const handleAddAccount = async (): Promise<void> => {
  await performLogin();
};

export const handleReloginAccount = async (
  reloginOptions: { authFlow?: AuthFlowMode } = {},
): Promise<void> => {
  if (!configExists()) {
    p.log.warning("No accounts configured. Use 'Add account' first.");
    return;
  }

  const config = await loadConfig();

  if (config.accounts.length === 0) {
    p.log.warning("No accounts to re-login.");
    return;
  }

  const currentAccountId = config.accounts[config.current]?.accountId;

  const options = await Promise.all(
    config.accounts.map(async (account) => ({
      value: account.accountId,
      label: `${getAccountDisplay(
        account.accountId,
        account.accountId === currentAccountId,
        account.label,
      )} — ${await getRefreshExpiryState(account.accountId)}`,
    })),
  );

  const selected = await p.select({
    message: "Select account to re-login:",
    options,
  });

  if (p.isCancel(selected)) {
    p.log.info("Cancelled.");
    return;
  }

  const accountId = selected as string;
  const account = config.accounts.find((a) => a.accountId === accountId);
  const expiryState = await getRefreshExpiryState(accountId);
  const displayName = account?.label ?? accountId;
  p.log.info(`Current token status for ${displayName}: ${expiryState}`);

  try {
    const result = await performRefresh(accountId, account?.label, {
      useSpinner: false,
      authFlow: reloginOptions.authFlow,
    });
    if (!result) {
      p.log.warning("Re-login was not completed.");
    } else {
      const authResult = await writeActiveAuthFilesIfCurrent(result.accountId);
      if (authResult) {
        const piMark = authResult.piWritten ? "✓" : "✗";
        const codexMark = authResult.codexWritten
          ? "✓"
          : authResult.codexCleared
            ? "⚠ missing id_token (cleared)"
            : "⚠ missing id_token";
        p.log.message("Updated active auth files:");
        p.log.message("  OpenCode:  ✓");
        p.log.message(`  Pi Agent:  ${piMark}`);
        p.log.message(`  Codex CLI: ${codexMark}`);
      }
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    p.log.error(`Re-login failed: ${msg}`);
  }
};

const handleRemoveAccount = async (): Promise<void> => {
  if (!configExists()) {
    p.log.warning("No accounts configured.");
    return;
  }

  const config = await loadConfig();

  if (config.accounts.length === 0) {
    p.log.warning("No accounts to remove.");
    return;
  }

  const currentAccountId = config.accounts[config.current]?.accountId;

  const options = config.accounts.map((account) => ({
    value: account.accountId,
    label: getAccountDisplay(
      account.accountId,
      account.accountId === currentAccountId,
      account.label,
    ),
  }));

  const selected = await p.select({
    message: "Select account to remove:",
    options,
  });

  if (p.isCancel(selected)) {
    p.log.info("Cancelled.");
    return;
  }

  const accountId = selected as string;

  const confirmed = await p.confirm({
    message: `Are you sure you want to remove account ${accountId}?`,
    initialValue: false,
  });

  if (p.isCancel(confirmed) || !confirmed) {
    p.log.info("Cancelled.");
    return;
  }

  try {
    await removeStoredCredentials(accountId);
  } catch {
    // Secure-store entry may not exist
  }

  const previousAccountId = config.accounts[config.current]?.accountId;
  config.accounts = config.accounts.filter((a) => a.accountId !== accountId);

  if (config.accounts.length === 0) {
    config.current = 0;
  } else if (accountId === previousAccountId) {
    // Removed the active account — reset to first
    config.current = 0;
  } else {
    // Preserve the previously active account by finding its new index
    const newIndex = config.accounts.findIndex(
      (a) => a.accountId === previousAccountId,
    );
    config.current = newIndex >= 0 ? newIndex : 0;
  }

  await saveConfig(config);

  p.log.success(`Removed account ${accountId}`);
};

export const handleLabelAccount = async (): Promise<void> => {
  if (!configExists()) {
    p.log.warning("No accounts configured.");
    return;
  }

  const config = await loadConfig();

  if (config.accounts.length === 0) {
    p.log.warning("No accounts to label.");
    return;
  }

  const currentAccountId = config.accounts[config.current]?.accountId;

  const options = config.accounts.map((account) => ({
    value: account.accountId,
    label: getAccountDisplay(
      account.accountId,
      account.accountId === currentAccountId,
      account.label,
    ),
  }));

  const selected = await p.select({
    message: "Select account to label:",
    options,
  });

  if (p.isCancel(selected)) {
    p.log.info("Cancelled.");
    return;
  }

  const accountId = selected as string;
  const account = config.accounts.find((a) => a.accountId === accountId);

  const labelInput = await p.text({
    message: "Enter new label (or leave empty to remove label):",
    placeholder: "e.g. Work, Personal",
    initialValue: account?.label ?? "",
  });

  if (p.isCancel(labelInput)) {
    p.log.info("Cancelled.");
    return;
  }

  const newLabel = labelInput?.trim() || undefined;
  const target = config.accounts.find((a) => a.accountId === accountId);
  if (target) {
    target.label = newLabel;
  }

  await saveConfig(config);

  if (newLabel) {
    p.log.success(`Account ${accountId} labeled as "${newLabel}".`);
  } else {
    p.log.success(`Label removed from account ${accountId}.`);
  }
};

const handleStatus = async (): Promise<void> => {
  const status = await getStatus();

  if (status.accounts.length === 0) {
    p.log.warning("No accounts configured. Use 'Add account' to get started.");
    return;
  }

  p.log.info("Account status:");
  for (const account of status.accounts) {
    const marker = account.isCurrent ? "→ " : "  ";
    const name = account.label
      ? `${account.label} (${account.accountId})`
      : account.accountId;
    const secureStore = account.secureStoreExists ? "" : " [no secure store entry]";
    const idToken = account.hasIdToken ? "" : " [no id_token]";
    p.log.message(`${marker}${name} — ${account.expiresIn}${secureStore}${idToken}`);
  }

  const ocStatus = status.opencodeAuth.exists
    ? `active: ${status.opencodeAuth.accountId ?? "unknown"}`
    : "not found";
  const cxStatus = status.codexAuth.exists
    ? `active: ${status.codexAuth.accountId ?? "unknown"}`
    : "not found";
  const piStatus = status.piAuth.exists
    ? `active: ${status.piAuth.accountId ?? "unknown"}`
    : "not found";

  p.log.info(`Auth files:`);
  p.log.message(`  OpenCode: ${ocStatus}`);
  p.log.message(`  Codex CLI: ${cxStatus}`);
  p.log.message(`  Pi Agent: ${piStatus}`);
};

export const runInteractiveMode = async (): Promise<void> => {
  p.intro("cdx - OpenAI Account Switcher");

  let running = true;

  while (running) {
    const storedAccounts = await getStoredAccountIds();
    let currentInfo = "";

    if (configExists()) {
      try {
        const config = await loadConfig();
        const current = config.accounts[config.current];
        if (current) {
          const displayName = current.label ?? current.accountId;
          currentInfo = ` (current: ${displayName})`;
        }
      } catch {
        // Config may be invalid
      }
    }

    const action = await p.select<
      { value: MenuAction; label: string }[],
      MenuAction
    >({
      message: `What would you like to do?${currentInfo}`,
      options: [
        {
          value: "list",
          label: `List accounts (${storedAccounts.length} in secure store)`,
        },
        { value: "switch", label: "Switch account" },
        { value: "add", label: "Add account (OAuth login)" },
        { value: "relogin", label: "Re-login account" },
        { value: "remove", label: "Remove account" },
        { value: "label", label: "Label account" },
        { value: "status", label: "Account status & token expiry" },
        { value: "exit", label: "Exit" },
      ],
    });

    if (p.isCancel(action)) {
      running = false;
      continue;
    }

    switch (action) {
      case "list":
        await handleListAccounts();
        break;
      case "switch":
        await handleSwitchAccount();
        break;
      case "add":
        await handleAddAccount();
        break;
      case "relogin":
        await handleReloginAccount();
        break;
      case "remove":
        await handleRemoveAccount();
        break;
      case "label":
        await handleLabelAccount();
        break;
      case "status":
        await handleStatus();
        break;
      case "exit":
        running = false;
        break;
    }

    if (running && action !== "exit") {
      p.log.message("");
    }
  }

  p.outro("Goodbye!");
};
