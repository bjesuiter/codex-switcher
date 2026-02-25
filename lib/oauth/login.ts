import * as p from "@clack/prompts";
import { configExists, loadConfig, saveConfig } from "../config";
import { openBrowserUrl } from "../platform/browser";
import { getSecretStoreAdapter } from "../secrets/store";
import type { Config, OAuthPayload } from "../types";
import {
  createAuthorizationFlow,
  exchangeAuthorizationCode,
  extractAccountId,
  pollDeviceAuthorizationToken,
  startDeviceAuthorizationFlow,
  type AuthorizationFlow,
  type TokenResult,
} from "./auth";
import { startOAuthServer } from "./server";

export type AuthFlowMode = "auto" | "device";

export type PerformLoginOptions = {
  authFlow?: AuthFlowMode;
};

export type PerformRefreshOptions = {
  useSpinner?: boolean;
  authFlow?: AuthFlowMode;
};

type SuccessfulTokenResult = Extract<TokenResult, { type: "success" }>;
type BrowserFallbackChoice = "manual" | "device" | "cancel";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const isLikelyRemoteEnvironment = (): boolean => {
  if (process.platform !== "linux") {
    return false;
  }

  if (process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY) {
    return true;
  }

  return !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY;
};

export const parseOAuthCallbackInput = (
  input: string,
): { code: string; state?: string } | null => {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  if (!trimmed.includes("://") && !trimmed.includes("code=") && !trimmed.includes("?")) {
    return { code: trimmed };
  }

  try {
    const parsedUrl = new URL(trimmed);
    const code = parsedUrl.searchParams.get("code");
    if (code) {
      return {
        code,
        state: parsedUrl.searchParams.get("state") ?? undefined,
      };
    }
  } catch {
    // Not a full URL, continue with query-string parsing.
  }

  const queryLike =
    trimmed.startsWith("?") || trimmed.startsWith("#")
      ? trimmed.slice(1)
      : trimmed.includes("?")
        ? trimmed.slice(trimmed.indexOf("?") + 1)
        : trimmed;

  const params = new URLSearchParams(queryLike);
  const code = params.get("code");
  if (!code) {
    return null;
  }

  return {
    code,
    state: params.get("state") ?? undefined,
  };
};

const promptBrowserFallbackChoice = async (): Promise<BrowserFallbackChoice> => {
  const remoteHint = isLikelyRemoteEnvironment();

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    const selected = remoteHint ? "device" : "manual";
    p.log.info(
      `Non-interactive terminal detected. Falling back to ${selected === "device" ? "device OAuth flow" : "manual URL copy/paste flow"}.`,
    );
    return selected;
  }

  const options: Array<{ value: BrowserFallbackChoice; label: string; hint?: string }> = remoteHint
    ? [
        {
          value: "device",
          label: "Use device OAuth flow",
          hint: "Recommended on SSH/remote servers",
        },
        {
          value: "manual",
          label: "Finish manually by copying URL",
          hint: "Open URL on any machine and paste callback URL/code back here",
        },
        { value: "cancel", label: "Cancel login" },
      ]
    : [
        {
          value: "manual",
          label: "Finish manually by copying URL",
          hint: "Open URL on any machine and paste callback URL/code back here",
        },
        {
          value: "device",
          label: "Use device OAuth flow",
          hint: "Best for headless/remote environments",
        },
        { value: "cancel", label: "Cancel login" },
      ];

  const selection = await p.select({
    message: "Browser launcher is unavailable. How do you want to continue?",
    options,
  });

  if (p.isCancel(selection)) {
    return "cancel";
  }

  return selection as BrowserFallbackChoice;
};

const promptManualAuthorizationCode = async (
  authorizationUrl: string,
  expectedState: string,
): Promise<string | null> => {
  p.log.info("Manual login selected.");
  p.log.message(`Open this URL in a browser:\n${authorizationUrl}`);
  p.log.message(
    "After approving, copy the full callback URL (or just the 'code' value) and paste it below.",
  );

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await p.text({
      message: "Paste callback URL or authorization code:",
      placeholder: "http://localhost:1455/auth/callback?code=...&state=...",
    });

    if (p.isCancel(response)) {
      p.log.info("Login cancelled.");
      return null;
    }

    const parsed = parseOAuthCallbackInput(String(response));
    if (!parsed) {
      p.log.warning("Could not parse input. Please paste a callback URL or code.");
      continue;
    }

    if (parsed.state && parsed.state !== expectedState) {
      p.log.error("State mismatch in callback URL. Please retry the login flow.");
      return null;
    }

    return parsed.code;
  }

  p.log.error("Failed to parse callback input after multiple attempts.");
  return null;
};

const runDeviceOAuthFlow = async (
  useSpinner: boolean,
): Promise<SuccessfulTokenResult | null> => {
  const deviceFlowResult = await startDeviceAuthorizationFlow();
  if (deviceFlowResult.type !== "success") {
    p.log.error("Device OAuth flow is not available right now.");
    p.log.error(`Technical details: ${deviceFlowResult.error}`);
    if (typeof deviceFlowResult.status === "number") {
      p.log.error(`HTTP status: ${deviceFlowResult.status}`);
    }
    if (deviceFlowResult.oauthError) {
      p.log.error(`OAuth error: ${deviceFlowResult.oauthError}`);
    }
    if (deviceFlowResult.responseBody) {
      p.log.error(`Response: ${deviceFlowResult.responseBody}`);
    }
    return null;
  }

  const deviceFlow = deviceFlowResult.flow;

  p.log.info("Using device OAuth flow.");
  p.log.message(`Verification URL: ${deviceFlow.verificationUri}`);
  p.log.message(`User code: ${deviceFlow.userCode}`);

  const verificationTarget = deviceFlow.verificationUriComplete ?? deviceFlow.verificationUri;
  const launchResult = openBrowserUrl(verificationTarget);
  if (!launchResult.ok) {
    const msg = launchResult.error ?? "unknown error";
    p.log.warning(
      `Could not auto-open verification URL via ${launchResult.launcher.label} (${msg}).`,
    );
  }

  const spinner = useSpinner ? p.spinner() : null;
  if (spinner) {
    spinner.start("Waiting for device authorization...");
  } else {
    p.log.message("Waiting for device authorization...");
  }

  let intervalMs = Math.max(deviceFlow.interval, 1) * 1000;
  const deadline = Date.now() + deviceFlow.expiresIn * 1000;

  while (Date.now() < deadline) {
    await sleep(intervalMs);

    const pollResult = await pollDeviceAuthorizationToken(deviceFlow.deviceCode);

    if (pollResult.type === "success") {
      if (spinner) {
        spinner.stop("Device authorization completed.");
      } else {
        p.log.success("Device authorization completed.");
      }
      return pollResult;
    }

    if (pollResult.type === "pending") {
      intervalMs = Math.max(pollResult.interval, 1) * 1000;
      continue;
    }

    if (pollResult.type === "slow_down") {
      intervalMs = Math.max(pollResult.interval, Math.ceil(intervalMs / 1000) + 5) * 1000;
      continue;
    }

    if (pollResult.type === "access_denied") {
      if (spinner) {
        spinner.stop("Device authorization was denied.");
      } else {
        p.log.error("Device authorization was denied.");
      }
      return null;
    }

    if (pollResult.type === "expired") {
      if (spinner) {
        spinner.stop("Device authorization expired.");
      } else {
        p.log.error("Device authorization expired.");
      }
      return null;
    }

    if (spinner) {
      spinner.stop("Device authorization failed.");
    } else {
      p.log.error("Device authorization failed.");
    }

    if (pollResult.type === "failed") {
      if (pollResult.error) {
        p.log.error(`Technical details: ${pollResult.error}`);
      }
      if (typeof pollResult.status === "number") {
        p.log.error(`HTTP status: ${pollResult.status}`);
      }
      if (pollResult.oauthError) {
        p.log.error(`OAuth error: ${pollResult.oauthError}`);
      }
      if (pollResult.responseBody) {
        p.log.error(`Response: ${pollResult.responseBody}`);
      }
    }

    return null;
  }

  if (spinner) {
    spinner.stop("Device authorization timed out.");
  } else {
    p.log.error("Device authorization timed out.");
  }
  return null;
};

const requestTokenViaOAuth = async (
  flow: AuthorizationFlow,
  options: { useSpinner: boolean; authFlow?: AuthFlowMode },
): Promise<SuccessfulTokenResult | null> => {
  if (options.authFlow === "device") {
    return runDeviceOAuthFlow(options.useSpinner);
  }

  const server = await startOAuthServer(flow.state);

  if (!server.ready) {
    p.log.error("Failed to start local server on port 1455.");
    p.log.info("Please ensure the port is not in use.");
    return null;
  }

  const spinner = options.useSpinner ? p.spinner() : null;
  let spinnerStarted = false;

  p.log.info("Opening browser for authentication...");
  const launchResult = openBrowserUrl(flow.url);
  if (!launchResult.ok) {
    const msg = launchResult.error ?? "unknown error";
    p.log.warning(
      `Could not auto-open browser via ${launchResult.launcher.label} (${msg}).`,
    );
  }
  p.log.message(`If your browser did not open, paste this URL:\n${flow.url}`);

  if (launchResult.ok) {
    if (spinner) {
      spinner.start("Waiting for authentication...");
      spinnerStarted = true;
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

    const tokenResult = await exchangeAuthorizationCode(result.code, flow.pkce.verifier);

    if (tokenResult.type !== "success") {
      if (spinner) {
        spinner.stop("Failed to exchange authorization code.");
      } else {
        p.log.error("Failed to exchange authorization code.");
      }
      return null;
    }

    if (spinner) {
      spinner.stop("Authentication completed.");
    }

    return tokenResult;
  }

  const fallbackChoice = await promptBrowserFallbackChoice();
  if (fallbackChoice === "cancel") {
    server.close();
    p.log.info("Login cancelled.");
    return null;
  }

  if (fallbackChoice === "device") {
    server.close();
    return runDeviceOAuthFlow(options.useSpinner);
  }

  server.close();
  const code = await promptManualAuthorizationCode(flow.url, flow.state);
  if (!code) {
    return null;
  }

  if (spinner) {
    if (spinnerStarted) {
      spinner.message("Exchanging authorization code...");
    } else {
      spinner.start("Exchanging authorization code...");
      spinnerStarted = true;
    }
  } else {
    p.log.message("Exchanging authorization code...");
  }

  const tokenResult = await exchangeAuthorizationCode(code, flow.pkce.verifier);

  if (tokenResult.type !== "success") {
    if (spinner) {
      spinner.stop("Failed to exchange authorization code.");
    } else {
      p.log.error("Failed to exchange authorization code.");
    }
    return null;
  }

  if (spinner) {
    spinner.stop("Authentication completed.");
  }

  return tokenResult;
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
  options: PerformRefreshOptions = {},
): Promise<{ accountId: string } | null> => {
  const keepAlive = setInterval(() => {}, 1000);
  try {
    const displayName = label ?? targetAccountId;
    p.log.step(`Re-authenticating account "${displayName}"...`);
    const useSpinner = options.useSpinner ?? true;
    const authFlow = options.authFlow ?? "auto";

    let tokenResult: SuccessfulTokenResult | null = null;

    if (authFlow === "device") {
      tokenResult = await runDeviceOAuthFlow(useSpinner);
    } else {
      let flow;
      try {
        flow = await createAuthorizationFlow();
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        p.log.error(`Failed to create authorization flow: ${msg}`);
        process.stderr.write(`Failed to create authorization flow: ${msg}\n`);
        return null;
      }

      tokenResult = await requestTokenViaOAuth(flow, { useSpinner, authFlow });
    }

    if (!tokenResult) {
      return null;
    }

    const newAccountId = extractAccountId(tokenResult.access);

    if (!newAccountId) {
      p.log.error("Failed to extract account ID from token.");
      return null;
    }

    if (newAccountId !== targetAccountId) {
      p.log.error("Authentication completed for a different account.");
      throw new Error(
        `Account mismatch: expected "${targetAccountId}" but got "${newAccountId}". Make sure you log in with the correct OpenAI account.`,
      );
    }

    if (!useSpinner) {
      p.log.message("Updating credentials...");
    }

    const payload: OAuthPayload = {
      refresh: tokenResult.refresh,
      access: tokenResult.access,
      expires: tokenResult.expires,
      accountId: newAccountId,
      ...(tokenResult.idToken ? { idToken: tokenResult.idToken } : {}),
    };

    await getSecretStoreAdapter().save(newAccountId, payload);

    p.log.success("Credentials refreshed!");
    p.log.success(`Account "${displayName}" credentials updated in secure store.`);

    return { accountId: newAccountId };
  } finally {
    clearInterval(keepAlive);
  }
};

export const performLogin = async (
  options: PerformLoginOptions = {},
): Promise<{ accountId: string } | null> => {
  p.intro("cdx login - Add OpenAI account");

  const authFlow = options.authFlow ?? "auto";

  let tokenResult: SuccessfulTokenResult | null = null;

  if (authFlow === "device") {
    tokenResult = await runDeviceOAuthFlow(true);
  } else {
    const flow = await createAuthorizationFlow();
    tokenResult = await requestTokenViaOAuth(flow, {
      useSpinner: true,
      authFlow,
    });
  }

  if (!tokenResult) {
    return null;
  }

  const accountId = extractAccountId(tokenResult.access);

  if (!accountId) {
    p.log.error("Failed to extract account ID from token.");
    return null;
  }

  p.log.message("Saving credentials...");

  const payload: OAuthPayload = {
    refresh: tokenResult.refresh,
    access: tokenResult.access,
    expires: tokenResult.expires,
    accountId,
    ...(tokenResult.idToken ? { idToken: tokenResult.idToken } : {}),
  };

  await getSecretStoreAdapter().save(accountId, payload);

  p.log.success("Login successful!");

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
