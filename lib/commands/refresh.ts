import type { Command } from "commander";
import { loadConfig } from "../config";
import { handleRefreshAccount } from "../interactive";
import { performRefresh } from "../oauth/login";
import { writeActiveAuthFilesIfCurrent } from "../refresh";
import { exitWithCommandError } from "./errors";
import { writeUpdatedAuthSummary } from "./output";

export const registerRefreshCommand = (program: Command): void => {
  program
    .command("refresh")
    .description(
      "Re-authenticate an existing account (update tokens without creating a duplicate)",
    )
    .argument("[account]", "Account ID or label to refresh")
    .action(async (account: string | undefined) => {
      try {
        if (account) {
          const config = await loadConfig();
          const target = config.accounts.find(
            (entry) => entry.accountId === account || entry.label === account,
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

          const authResult = await writeActiveAuthFilesIfCurrent(result.accountId);
          if (authResult) {
            writeUpdatedAuthSummary(authResult);
          }
          return;
        }

        await handleRefreshAccount();
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
