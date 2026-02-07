import type { Command } from "commander";
import { loadConfig } from "../config";
import {
  fetchUsage,
  formatUsage,
  formatUsageOverview,
  type AccountUsageEntry,
} from "../usage";
import { exitWithCommandError } from "./errors";

export const registerUsageCommand = (program: Command): void => {
  program
    .command("usage")
    .description("Show OpenAI usage for all accounts (or detailed view for one)")
    .argument("[account]", "Account ID or label (shows detailed single-account view)")
    .action(async (account: string | undefined) => {
      try {
        const config = await loadConfig();

        if (account) {
          const found = config.accounts.find(
            (entry) => entry.accountId === account || entry.label === account,
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
          return;
        }

        if (config.accounts.length === 0) {
          throw new Error("No accounts configured. Use 'cdx login' to add one.");
        }

        const results = await Promise.allSettled(
          config.accounts.map((entry) => fetchUsage(entry.accountId)),
        );

        const entries: AccountUsageEntry[] = config.accounts.map((entry, index) => {
          const settled = results[index];
          const displayName = entry.label
            ? `${entry.label} (${entry.accountId})`
            : entry.accountId;
          const result: AccountUsageEntry["result"] = settled.status === "fulfilled"
            ? settled.value
            : {
                ok: false,
                error: {
                  type: "network_error",
                  message: settled.reason?.message ?? "Fetch failed",
                },
              };

          return {
            displayName,
            isCurrent: index === config.current,
            result,
          };
        });

        process.stdout.write(`\n${formatUsageOverview(entries)}\n\n`);
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
