import * as p from "@clack/prompts";
import { spawn } from "node:child_process";
import { configExists, loadConfig, saveConfig } from "../config";
import { getKeychainService, saveKeychainPayload } from "../keychain";
import type { Config, OAuthPayload } from "../types";
import {
  createAuthorizationFlow,
  exchangeAuthorizationCode,
  extractAccountId,
} from "./auth";
import { startOAuthServer } from "./server";

const openBrowser = (url: string): void => {
  const cmd = process.platform === "darwin" ? "open" : "xdg-open";
  spawn(cmd, [url], { detached: true, stdio: "ignore" }).unref();
};

const addAccountToConfig = async (
  accountId: string,
  label?: string,
): Promise<void> => {
  let config: Config;

  if (configExists()) {
    config = await loadConfig();
    const exists = config.accounts.some((a) => a.accountId === accountId);
    if (!exists) {
      config.accounts.push({
        accountId,
        keychainService: getKeychainService(accountId),
        ...(label ? { label } : {}),
      });
    }
  } else {
    config = {
      current: 0,
      accounts: [
        {
          accountId,
          keychainService: getKeychainService(accountId),
          ...(label ? { label } : {}),
        },
      ],
    };
  }

  await saveConfig(config);
};

export const performRefresh = async (
  targetAccountId: string,
  label?: string,
): Promise<{ accountId: string } | null> => {
  const displayName = label ?? targetAccountId;
  p.log.step(`Refreshing credentials for "${displayName}"...`);

  let flow;
  try {
    flow = await createAuthorizationFlow();
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    p.log.error(`Failed to create authorization flow: ${msg}`);
    return null;
  }

  const server = await startOAuthServer(flow.state);

  if (!server.ready) {
    p.log.error("Failed to start local server on port 1455.");
    p.log.info("Please ensure the port is not in use.");
    return null;
  }

  const spinner = p.spinner();

  p.log.info("Opening browser for authentication...");
  openBrowser(flow.url);

  spinner.start("Waiting for authentication...");

  const result = await server.waitForCode();
  server.close();

  if (!result) {
    spinner.stop("Authentication timed out or failed.");
    return null;
  }

  spinner.message("Exchanging authorization code...");

  const tokenResult = await exchangeAuthorizationCode(
    result.code,
    flow.pkce.verifier,
  );

  if (tokenResult.type === "failed") {
    spinner.stop("Failed to exchange authorization code.");
    return null;
  }

  const newAccountId = extractAccountId(tokenResult.access);

  if (!newAccountId) {
    spinner.stop("Failed to extract account ID from token.");
    return null;
  }

  if (newAccountId !== targetAccountId) {
    spinner.stop(
      `Account mismatch: expected "${targetAccountId}" but got "${newAccountId}". Make sure you log in with the correct OpenAI account.`,
    );
    return null;
  }

  spinner.message("Updating credentials...");

  const payload: OAuthPayload = {
    refresh: tokenResult.refresh,
    access: tokenResult.access,
    expires: tokenResult.expires,
    accountId: newAccountId,
    ...(tokenResult.idToken ? { idToken: tokenResult.idToken } : {}),
  };

  saveKeychainPayload(newAccountId, payload);

  spinner.stop("Credentials refreshed!");
  p.log.success(`Account "${displayName}" credentials updated in Keychain.`);

  return { accountId: newAccountId };
};

export const performLogin = async (): Promise<{ accountId: string } | null> => {
  p.intro("cdx login - Add OpenAI account");

  const flow = await createAuthorizationFlow();
  const server = await startOAuthServer(flow.state);

  if (!server.ready) {
    p.log.error("Failed to start local server on port 1455.");
    p.log.info("Please ensure the port is not in use.");
    return null;
  }

  const spinner = p.spinner();

  p.log.info("Opening browser for authentication...");
  openBrowser(flow.url);

  spinner.start("Waiting for authentication...");

  const result = await server.waitForCode();
  server.close();

  if (!result) {
    spinner.stop("Authentication timed out or failed.");
    return null;
  }

  spinner.message("Exchanging authorization code...");

  const tokenResult = await exchangeAuthorizationCode(
    result.code,
    flow.pkce.verifier,
  );

  if (tokenResult.type === "failed") {
    spinner.stop("Failed to exchange authorization code.");
    return null;
  }

  const accountId = extractAccountId(tokenResult.access);

  if (!accountId) {
    spinner.stop("Failed to extract account ID from token.");
    return null;
  }

  spinner.message("Saving credentials...");

  const payload: OAuthPayload = {
    refresh: tokenResult.refresh,
    access: tokenResult.access,
    expires: tokenResult.expires,
    accountId,
    ...(tokenResult.idToken ? { idToken: tokenResult.idToken } : {}),
  };

  saveKeychainPayload(accountId, payload);

  spinner.stop("Login successful!");

  const labelInput = await p.text({
    message: "Enter a label for this account (or press Enter to skip):",
    placeholder: "e.g. Work, Personal",
  });

  const label =
    !p.isCancel(labelInput) && labelInput?.trim()
      ? labelInput.trim()
      : undefined;

  await addAccountToConfig(accountId, label);

  const displayName = label ?? accountId;
  p.log.success(`Account "${displayName}" saved to Keychain and config.`);
  p.outro("You can now use 'cdx switch' to activate this account.");

  return { accountId };
};
