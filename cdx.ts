#!/usr/bin/env bun
import { Command } from "commander";
import pkg from "./package.json";
import { writeAllAuthFiles } from "./lib/auth";
import { loadConfig, saveConfig } from "./lib/config";
import { loadKeychainPayload } from "./lib/keychain";
import {
  handleLabelAccount,
  handleRefreshAccount,
  handleSwitchAccount,
  runInteractiveMode,
} from "./lib/interactive";
import { performLogin, performRefresh } from "./lib/oauth/login";
import { getStatus } from "./lib/status";
import { fetchUsage, formatUsage, formatUsageBars, formatUsageCompact, formatUsageOverview, type AccountUsageEntry } from "./lib/usage";

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
  const opencodeMark = "✓";
  const codexMark = result.codexWritten ? "✓" : "⚠ missing id_token";
  process.stdout.write(
    `Switched to account ${displayName} [OpenCode: ${opencodeMark}] [Codex CLI: ${codexMark}]\n`,
  );
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
  const opencodeMark = "✓";
  const codexMark = result.codexWritten ? "✓" : "⚠ missing id_token";
  process.stdout.write(
    `Switched to account ${displayName} [OpenCode: ${opencodeMark}] [Codex CLI: ${codexMark}]\n`,
  );
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
    .command("refresh")
    .description("Re-authenticate an existing account (update tokens without creating a duplicate)")
    .argument("[account]", "Account ID or label to refresh")
    .action(async (account: string | undefined) => {
      try {
        if (account) {
          const config = await loadConfig();
          const target = config.accounts.find(
            (a) => a.accountId === account || a.label === account,
          );
          if (!target) {
            throw new Error(
              `Account "${account}" not found. Use 'cdx login' to add it.`,
            );
          }
          const result = await performRefresh(target.accountId, target.label);
          if (!result) {
            process.stderr.write("Refresh failed.\n");
            process.exit(1);
          }
        } else {
          await handleRefreshAccount();
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

        process.stdout.write("\n");
        for (let i = 0; i < status.accounts.length; i++) {
          const account = status.accounts[i];
          const marker = account.isCurrent ? "→ " : "  ";
          const warnings: string[] = [];
          if (!account.keychainExists) warnings.push("[no keychain]");
          if (!account.hasIdToken) warnings.push("[no id_token]");
          const warnStr = warnings.length > 0 ? `  ${warnings.join(" ")}` : "";

          const displayName = account.label ?? account.accountId;
          process.stdout.write(`${marker}${displayName}${warnStr}\n`);

          if (account.label) {
            process.stdout.write(`    ${account.accountId}\n`);
          }

          process.stdout.write(`    ${account.expiresIn}\n`);

          const usageResult = await fetchUsage(account.accountId);
          if (usageResult.ok) {
            const bars = formatUsageBars(usageResult.data);
            for (const bar of bars) {
              process.stdout.write(`${bar}\n`);
            }
          }

          if (i < status.accounts.length - 1) {
            process.stdout.write("\n");
          }
        }

        const resolveLabel = (id: string | null) => {
          if (!id) return "unknown";
          const match = status.accounts.find((a) => a.accountId === id);
          return match?.label ?? id;
        };

        process.stdout.write("\nAuth files:\n");
        const ocStatus = status.opencodeAuth.exists
          ? `active: ${resolveLabel(status.opencodeAuth.accountId)}`
          : "not found";
        process.stdout.write(`  OpenCode: ${ocStatus}\n`);

        const cxStatus = status.codexAuth.exists
          ? `active: ${resolveLabel(status.codexAuth.accountId)}`
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
    .description("Show OpenAI usage for all accounts (or detailed view for one)")
    .argument("[account]", "Account ID or label (shows detailed single-account view)")
    .action(async (account: string | undefined) => {
      try {
        const config = await loadConfig();

        if (account) {
          const found = config.accounts.find(
            (a) => a.accountId === account || a.label === account,
          );
          if (!found) {
            throw new Error(
              `Account "${account}" not found. Use 'cdx login' to add it.`,
            );
          }

          const result = await fetchUsage(found.accountId);
          if (!result.ok) {
            throw new Error(result.error.message);
          }

          const displayName = found.label
            ? `${found.label} (${found.accountId})`
            : found.accountId;
          process.stdout.write(`\n${displayName}\n${formatUsage(result.data)}\n\n`);
        } else {
          if (config.accounts.length === 0) {
            throw new Error("No accounts configured. Use 'cdx login' to add one.");
          }

          const results = await Promise.allSettled(
            config.accounts.map((a) => fetchUsage(a.accountId)),
          );

          const entries: AccountUsageEntry[] = config.accounts.map((a, i) => {
            const settled = results[i];
            const displayName = a.label
              ? `${a.label} (${a.accountId})`
              : a.accountId;
            const result: AccountUsageEntry["result"] =
              settled.status === "fulfilled"
                ? settled.value
                : { ok: false, error: { type: "network_error", message: settled.reason?.message ?? "Fetch failed" } };
            return {
              displayName,
              isCurrent: i === config.current,
              result,
            };
          });

          process.stdout.write(`\n${formatUsageOverview(entries)}\n\n`);
        }
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
