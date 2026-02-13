import * as p from "@clack/prompts";
import type { Command } from "commander";
import { getStatus } from "../status";
import { fetchUsage, formatUsageBars } from "../usage";
import { exitWithCommandError } from "./errors";

export const registerStatusCommand = (program: Command): void => {
  program
    .command("status")
    .description("Show account status, token expiry, and usage")
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
          if (!account.secureStoreExists) warnings.push("[no secure store entry]");
          if (!account.hasIdToken) warnings.push("[no id_token]");
          const warnStr = warnings.length > 0 ? `  ${warnings.join(" ")}` : "";

          const displayName = account.label ?? account.accountId;
          process.stdout.write(`${marker}${displayName}${warnStr}\n`);

          if (account.label) {
            process.stdout.write(`    ${account.accountId}\n`);
          }

          process.stdout.write(`    ${account.expiresIn}\n`);

          if (i < status.accounts.length - 1) {
            process.stdout.write("\n");
          }
        }

        const usageSpinner = p.spinner();
        const accountWord = status.accounts.length === 1 ? "account" : "accounts";
        usageSpinner.start(`Fetching usage for ${status.accounts.length} ${accountWord}...`);

        const usageResults = await Promise.allSettled(
          status.accounts.map((account) => fetchUsage(account.accountId)),
        );

        const failedUsageCount = usageResults.filter((result) =>
          result.status === "rejected" || (result.status === "fulfilled" && !result.value.ok)
        ).length;

        if (failedUsageCount === 0) {
          usageSpinner.stop("Usage loaded.");
        } else {
          const failedWord = failedUsageCount === 1 ? "account" : "accounts";
          usageSpinner.stop(`Usage loaded (${failedUsageCount} ${failedWord} failed).`);
        }

        process.stdout.write("\nUsage:\n");
        for (let i = 0; i < status.accounts.length; i++) {
          const account = status.accounts[i];
          const marker = account.isCurrent ? "→ " : "  ";
          const displayName = account.label ?? account.accountId;
          process.stdout.write(`${marker}${displayName}\n`);

          if (account.label) {
            process.stdout.write(`    ${account.accountId}\n`);
          }

          const usageResult = usageResults[i];
          if (usageResult.status === "rejected") {
            const message = usageResult.reason instanceof Error
              ? usageResult.reason.message
              : "Fetch failed";
            process.stdout.write(`    [usage unavailable] ${message}\n`);
          } else if (usageResult.value.ok) {
            const bars = formatUsageBars(usageResult.value.data);
            if (bars.length === 0) {
              process.stdout.write("    Usage data unavailable\n");
            }
            for (const bar of bars) {
              process.stdout.write(`${bar}\n`);
            }
          } else {
            process.stdout.write(`    [usage unavailable] ${usageResult.value.error.message}\n`);
          }

          if (i < status.accounts.length - 1) {
            process.stdout.write("\n");
          }
        }

        process.stdout.write("\n");
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
