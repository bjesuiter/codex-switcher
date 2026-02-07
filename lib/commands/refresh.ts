import type { Command } from "commander";
import { loadConfig } from "../config";
import { handleReloginAccount } from "../interactive";
import { keychainPayloadExists, loadKeychainPayload } from "../keychain";
import { performRefresh } from "../oauth/login";
import { writeActiveAuthFilesIfCurrent } from "../refresh";
import { formatExpiry } from "../status";
import { exitWithCommandError } from "./errors";
import { writeUpdatedAuthSummary } from "./output";

export const registerReloginCommand = (program: Command): void => {
  program
    .command("relogin")
    .description(
      "Re-authenticate an existing account with full OAuth login (no duplicate account)",
    )
    .argument("[account]", "Account ID or label to re-login")
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

          const displayName = target.label ?? target.accountId;
          let expiryState = "unknown";
          let keychainState = "";
          if (keychainPayloadExists(target.accountId)) {
            try {
              const payload = loadKeychainPayload(target.accountId);
              expiryState = formatExpiry(payload.expires);
            } catch {
              expiryState = "unknown";
            }
          } else {
            keychainState = " [no keychain]";
          }
          process.stdout.write(
            `Current token status for ${displayName}: ${expiryState}${keychainState}\n`,
          );

          const result = await performRefresh(target.accountId, target.label);
          if (!result) {
            process.stderr.write("Re-login failed.\n");
            process.exit(1);
          }

          const authResult = await writeActiveAuthFilesIfCurrent(result.accountId);
          if (authResult) {
            writeUpdatedAuthSummary(authResult);
          }
          return;
        }

        await handleReloginAccount();
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
