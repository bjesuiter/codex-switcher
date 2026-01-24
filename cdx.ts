#!/usr/bin/env bun
import { Command } from "commander";
import pkg from "./package.json";
import { writeAllAuthFiles } from "./lib/auth";
import { loadConfig, saveConfig } from "./lib/config";
import { loadKeychainPayload } from "./lib/keychain";
import {
  handleLabelAccount,
  handleSwitchAccount,
  runInteractiveMode,
} from "./lib/interactive";
import { performLogin } from "./lib/oauth/login";
import { getStatus } from "./lib/status";
import { fetchUsage, formatUsage, formatUsageCompact } from "./lib/usage";

export type { AccountRecord, Config, OAuthPayload } from "./lib/types";
export { loadConfig, saveConfig } from "./lib/config";
export { writeAuthFile, writeCodexAuthFile, writeAllAuthFiles } from "./lib/auth";
export { getPaths, setPaths, resetPaths, createTestPaths } from "./lib/paths";
export { runInteractiveMode } from "./lib/interactive";

export const switchNext = async () => {
  const config = await loadConfig();
  const nextIndex = (config.current + 1) % config.accounts.length;
  const nextAccount = config.accounts[nextIndex];

  if (!nextAccount?.accountId) {
    throw new Error("Account entry missing accountId.");
  }

  const payload = loadKeychainPayload(nextAccount.accountId);
  const result = await writeAllAuthFiles(payload);

  config.current = nextIndex;
  await saveConfig(config);

  const displayName = nextAccount.label ?? payload.accountId;
  process.stdout.write(`Switched to account ${displayName}\n`);

  if (result.codexMissingIdToken) {
    process.stderr.write(
      `Warning: Codex CLI auth not updated (missing id_token). Re-login with 'cdx login' to enable Codex CLI switching.\n`,
    );
  }
};

export const switchToAccount = async (identifier: string) => {
  const config = await loadConfig();
  const index = config.accounts.findIndex(
    (a) => a.accountId === identifier || a.label === identifier,
  );

  if (index === -1) {
    throw new Error(
      `Account "${identifier}" not found. Use 'cdx login' to add it.`,
    );
  }

  const account = config.accounts[index];
  const payload = loadKeychainPayload(account.accountId);
  const result = await writeAllAuthFiles(payload);

  config.current = index;
  await saveConfig(config);

  const displayName = account.label ?? account.accountId;
  process.stdout.write(`Switched to account ${displayName}\n`);

  if (result.codexMissingIdToken) {
    process.stderr.write(
      `Warning: Codex CLI auth not updated (missing id_token). Re-login with 'cdx login' to enable Codex CLI switching.\n`,
    );
  }
};

export const interactiveMode = runInteractiveMode;

export const createProgram = (
  deps: { performLogin?: typeof performLogin } = {},
) => {
  const program = new Command();
  const runLogin = deps.performLogin ?? performLogin;

  program
    .name("cdx")
    .description(
      "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
    )
    .version(pkg.version, "-v, --version");

  program
    .command("login")
    .description("Add a new OpenAI account via OAuth")
    .action(async () => {
      try {
        const result = await runLogin();
        if (!result) {
          process.stderr.write("Login failed.\n");
          process.exit(1);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("switch")
    .description("Switch OpenAI account (interactive picker, by name, or --next)")
    .argument("[account-id]", "Account ID to switch to directly")
    .option("-n, --next", "Cycle to the next configured account")
    .action(async (accountId: string | undefined, options: { next?: boolean }) => {
      try {
        if (options.next) {
          await switchNext();
        } else if (accountId) {
          await switchToAccount(accountId);
        } else {
          await handleSwitchAccount();
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("label")
    .description("Add or change label for an account")
    .argument("[account]", "Account ID or current label to relabel")
    .argument("[new-label]", "New label to assign")
    .action(async (account: string | undefined, newLabel: string | undefined) => {
      try {
        if (account && newLabel) {
          const config = await loadConfig();
          const target = config.accounts.find(
            (a) => a.accountId === account || a.label === account,
          );
          if (!target) {
            throw new Error(
              `Account "${account}" not found. Use 'cdx login' to add it.`,
            );
          }
          target.label = newLabel;
          await saveConfig(config);
          process.stdout.write(
            `Account ${target.accountId} labeled as "${newLabel}".\n`,
          );
        } else {
          await handleLabelAccount();
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("status")
    .description("Show account status, token expiry, and auth file state")
    .action(async () => {
      try {
        const status = await getStatus();

        if (status.accounts.length === 0) {
          process.stdout.write("No accounts configured. Use 'cdx login' to add one.\n");
          return;
        }

        process.stdout.write("\nAccounts:\n");
        for (const account of status.accounts) {
          const marker = account.isCurrent ? "→ " : "  ";
          const name = account.label
            ? `${account.label} (${account.accountId})`
            : account.accountId;
          const keychain = account.keychainExists ? "" : " [no keychain]";
          const idToken = account.hasIdToken ? "" : " [no id_token]";
          process.stdout.write(
            `${marker}${name} — ${account.expiresIn}${keychain}${idToken}\n`,
          );
        }

        const currentAccount = status.accounts.find((a) => a.isCurrent);
        if (currentAccount) {
          const usageResult = await fetchUsage(currentAccount.accountId);
          if (usageResult.ok) {
            process.stdout.write(`\nUsage: ${formatUsageCompact(usageResult.data)}\n`);
          }
        }

        process.stdout.write("\nAuth files:\n");
        const ocStatus = status.opencodeAuth.exists
          ? `active: ${status.opencodeAuth.accountId ?? "unknown"}`
          : "not found";
        process.stdout.write(`  OpenCode: ${ocStatus}\n`);

        const cxStatus = status.codexAuth.exists
          ? `active: ${status.codexAuth.accountId ?? "unknown"}`
          : "not found";
        process.stdout.write(`  Codex CLI: ${cxStatus}\n`);

        process.stdout.write("\n");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("usage")
    .description("Show OpenAI usage for current account")
    .argument("[account]", "Account ID or label (defaults to current)")
    .action(async (account: string | undefined) => {
      try {
        const config = await loadConfig();

        let targetAccountId: string;
        if (account) {
          const found = config.accounts.find(
            (a) => a.accountId === account || a.label === account,
          );
          if (!found) {
            throw new Error(
              `Account "${account}" not found. Use 'cdx login' to add it.`,
            );
          }
          targetAccountId = found.accountId;
        } else {
          const current = config.accounts[config.current];
          if (!current) {
            throw new Error("No current account. Use 'cdx login' to add one.");
          }
          targetAccountId = current.accountId;
        }

        const result = await fetchUsage(targetAccountId);
        if (!result.ok) {
          throw new Error(result.error.message);
        }

        process.stdout.write(`\n${formatUsage(result.data)}\n\n`);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("help")
    .description("Show available commands and usage information")
    .argument("[command]", "Show help for a specific command")
    .action((commandName: string | undefined) => {
      if (commandName) {
        const cmd = program.commands.find((c) => c.name() === commandName);
        if (cmd) {
          cmd.outputHelp();
        } else {
          process.stderr.write(`Unknown command: ${commandName}\n`);
          program.outputHelp();
          process.exit(1);
        }
      } else {
        program.outputHelp();
      }
    });

  program
    .command("version")
    .description("Show CLI version")
    .action(() => {
      process.stdout.write(`${pkg.version}\n`);
    });

  program.action(async () => {
    try {
      await interactiveMode();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      process.stderr.write(`${message}\n`);
      process.exit(1);
    }
  });

  return program;
};

const main = async () => {
  const program = createProgram();
  await program.parseAsync(process.argv);
};

if (import.meta.main) {
  main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`${message}\n`);
    process.exit(1);
  });
}
