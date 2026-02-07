import type { Command } from "commander";
import { loadConfig, saveConfig } from "../config";
import { handleLabelAccount } from "../interactive";
import { exitWithCommandError } from "./errors";

export const registerLabelCommand = (program: Command): void => {
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
            (entry) => entry.accountId === account || entry.label === account,
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
          return;
        }

        await handleLabelAccount();
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
