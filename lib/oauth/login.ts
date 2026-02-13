import * as p from "@clack/prompts";
import { configExists, loadConfig, saveConfig } from "../config";
import { openBrowserUrl } from "../platform/browser";
import { getSecretStoreAdapter } from "../secrets/store";
import type { Config, OAuthPayload } from "../types";
import {
  createAuthorizationFlow,
  exchangeAuthorizationCode,
  extractAccountId,
} from "./auth";
import { startOAuthServer } from "./server";

const openBrowser = (url: string): void => {
  const result = openBrowserUrl(url);
  if (!result.ok) {
    const msg = result.error ?? "unknown error";
    p.log.warning(
      `Could not auto-open browser via ${result.launcher.label} (${msg}).`,
    );
  }
};

const addAccountToConfig = async (
  accountId: string,
  label?: string,
): Promise<void> => {
  let config: Config;
  const secretStore = getSecretStoreAdapter();

  if (configExists()) {
    config = await loadConfig();
    const exists = config.accounts.some((a) => a.accountId === accountId);
    if (!exists) {
      config.accounts.push({
        accountId,
        keychainService: secretStore.getServiceName(accountId),
        ...(label ? { label } : {}),
      });
    }
  } else {
    config = {
      current: 0,
      accounts: [
        {
          accountId,
          keychainService: secretStore.getServiceName(accountId),
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
  options: { useSpinner?: boolean } = {},
): Promise<{ accountId: string } | null> => {
  const keepAlive = setInterval(() => {}, 1000);
  try {
    const displayName = label ?? targetAccountId;
    p.log.step(`Re-authenticating account "${displayName}"...`);
    const useSpinner = options.useSpinner ?? true;

    let flow;
    try {
      flow = await createAuthorizationFlow();
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      p.log.error(`Failed to create authorization flow: ${msg}`);
      process.stderr.write(`Failed to create authorization flow: ${msg}\n`);
      return null;
    }

    const server = await startOAuthServer(flow.state);

    if (!server.ready) {
      p.log.error("Failed to start local server on port 1455.");
      p.log.info("Please ensure the port is not in use.");
      return null;
    }

    const spinner = useSpinner ? p.spinner() : null;

    p.log.info("Opening browser for authentication...");
    openBrowser(flow.url);
    p.log.message(`If your browser did not open, paste this URL:\n${flow.url}`);

    if (spinner) {
      spinner.start("Waiting for authentication...");
    }

    const result = await server.waitForCode();
    server.close();

    if (!result) {
      if (spinner) {
        spinner.stop("Authentication timed out or failed.");
      } else {
        p.log.warning("Authentication timed out or failed.");
      }
      return null;
    }

    if (spinner) {
      spinner.message("Exchanging authorization code...");
    } else {
      p.log.message("Exchanging authorization code...");
    }

    const tokenResult = await exchangeAuthorizationCode(
      result.code,
      flow.pkce.verifier,
    );

    if (tokenResult.type === "failed") {
      if (spinner) {
        spinner.stop("Failed to exchange authorization code.");
      } else {
        p.log.error("Failed to exchange authorization code.");
      }
      return null;
    }

    const newAccountId = extractAccountId(tokenResult.access);

    if (!newAccountId) {
      if (spinner) {
        spinner.stop("Failed to extract account ID from token.");
      } else {
        p.log.error("Failed to extract account ID from token.");
      }
      return null;
    }

    if (newAccountId !== targetAccountId) {
      if (spinner) {
        spinner.stop("Authentication completed for a different account.");
      } else {
        p.log.error("Authentication completed for a different account.");
      }
      throw new Error(
        `Account mismatch: expected "${targetAccountId}" but got "${newAccountId}". Make sure you log in with the correct OpenAI account.`,
      );
    }

    if (spinner) {
      spinner.message("Updating credentials...");
    } else {
      p.log.message("Updating credentials...");
    }

    const payload: OAuthPayload = {
      refresh: tokenResult.refresh,
      access: tokenResult.access,
      expires: tokenResult.expires,
      accountId: newAccountId,
      ...(tokenResult.idToken ? { idToken: tokenResult.idToken } : {}),
    };

    getSecretStoreAdapter().save(newAccountId, payload);

    if (spinner) {
      spinner.stop("Credentials refreshed!");
    } else {
      p.log.success("Credentials refreshed!");
    }
    p.log.success(`Account "${displayName}" credentials updated in secure store.`);

    return { accountId: newAccountId };
  } finally {
    clearInterval(keepAlive);
  }
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
  p.log.message(`If your browser did not open, paste this URL:\n${flow.url}`);

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

  getSecretStoreAdapter().save(accountId, payload);

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
  p.log.success(`Account "${displayName}" saved to secure store and config.`);
  p.outro("You can now use 'cdx switch' to activate this account.");

  return { accountId };
};
