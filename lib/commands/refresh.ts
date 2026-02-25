import type { Command } from "commander";
import { loadConfig } from "../config";
import { handleReloginAccount } from "../interactive";
import { performRefresh } from "../oauth/login";
import { writeActiveAuthFilesIfCurrent } from "../refresh";
import { getSecretStoreAdapter } from "../secrets/store";
import { formatExpiry } from "../status";
import { exitWithCommandError } from "./errors";
import { writeUpdatedAuthSummary } from "./output";

export const registerReloginCommand = (program: Command): void => {
  program
    .command("relogin")
    .description(
      "Re-authenticate an existing account with full OAuth login (no duplicate account)",
    )
    .option(
      "--device-flow",
      "Use OAuth device flow instead of browser callback flow (manual/browser flow is recommended; device flow may fail on some VPS due to Cloudflare)",
    )
    .argument("[account]", "Account ID or label to re-login")
    .action(async (account: string | undefined, options: { deviceFlow?: boolean }) => {
      try {
        const authFlow = options.deviceFlow ? "device" : "auto";

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
          let secureStoreState = "";
          const secretStore = getSecretStoreAdapter();
          if (await secretStore.exists(target.accountId)) {
            try {
              const payload = await secretStore.load(target.accountId);
              expiryState = formatExpiry(payload.expires);
            } catch {
              expiryState = "unknown";
            }
          } else {
            secureStoreState = " [no secure store entry]";
          }
          process.stdout.write(
            `Current token status for ${displayName}: ${expiryState}${secureStoreState}\n`,
          );

          const result = await performRefresh(target.accountId, target.label, {
            authFlow,
          });
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

        await handleReloginAccount({ authFlow });
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
