import * as p from "@clack/prompts";
import { writeAuthFile } from "./auth";
import { configExists, loadConfig, saveConfig } from "./config";
import {
  deleteKeychainPayload,
  keychainPayloadExists,
  listKeychainAccounts,
  loadKeychainPayload,
} from "./keychain";
import { performLogin } from "./oauth/login";
import type { Config } from "./types";

type MenuAction = "list" | "switch" | "add" | "remove" | "exit";

const getAccountDisplay = (
  accountId: string,
  isCurrent: boolean,
  label?: string,
): string => {
  const name = label ? `${label} (${accountId})` : accountId;
  return isCurrent ? `${name} (current)` : name;
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
    const status = keychainPayloadExists(account.accountId)
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

  const payload = loadKeychainPayload(selectedAccount.accountId);
  await writeAuthFile(payload);

  config.current = selected as number;
  await saveConfig(config);

  const displayName = selectedAccount.label ?? selectedAccount.accountId;
  p.log.success(`Switched to account ${displayName}`);
};

const handleAddAccount = async (): Promise<void> => {
  await performLogin();
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
    deleteKeychainPayload(accountId);
  } catch {
    // Keychain entry may not exist
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

export const runInteractiveMode = async (): Promise<void> => {
  p.intro("cdx - OpenAI Account Switcher");

  let running = true;

  while (running) {
    const keychainAccounts = listKeychainAccounts();
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
          label: `List accounts (${keychainAccounts.length} in Keychain)`,
        },
        { value: "switch", label: "Switch account" },
        { value: "add", label: "Add account (OAuth login)" },
        { value: "remove", label: "Remove account" },
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
      case "remove":
        await handleRemoveAccount();
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
