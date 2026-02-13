import type { Command } from "commander";
import { getPaths } from "../paths";
import { getStatus } from "../status";
import { exitWithCommandError } from "./errors";

export const registerDoctorCommand = (program: Command): void => {
  program
    .command("doctor")
    .description("Show auth file paths and runtime capabilities")
    .action(async () => {
      try {
        const status = await getStatus();
        const paths = getPaths();

        const resolveLabel = (accountId: string | null): string => {
          if (!accountId) return "unknown";
          const match = status.accounts.find((account) => account.accountId === accountId);
          return match?.label ?? accountId;
        };

        process.stdout.write("\nAuth files:\n");

        const ocStatus = status.opencodeAuth.exists
          ? `active: ${resolveLabel(status.opencodeAuth.accountId)}`
          : "not found";
        process.stdout.write(`  OpenCode: ${ocStatus}\n`);
        process.stdout.write(`    Path: ${paths.authPath}\n`);

        const cxStatus = status.codexAuth.exists
          ? `active: ${resolveLabel(status.codexAuth.accountId)}`
          : "not found";
        process.stdout.write(`  Codex CLI: ${cxStatus}\n`);
        process.stdout.write(`    Path: ${paths.codexAuthPath}\n`);

        const piStatus = status.piAuth.exists
          ? `active: ${resolveLabel(status.piAuth.accountId)}`
          : "not found";
        process.stdout.write(`  Pi Agent: ${piStatus}\n`);
        process.stdout.write(`    Path: ${paths.piAuthPath}\n`);

        process.stdout.write("\nCapabilities:\n");
        process.stdout.write(`  Platform: ${status.capabilities.platform}\n`);
        process.stdout.write(`  Path profile: ${status.capabilities.pathProfile}\n`);

        const secretStoreState = status.capabilities.secretStore.available
          ? "available"
          : `unavailable${status.capabilities.secretStore.reason
              ? ` (${status.capabilities.secretStore.reason})`
              : ""}`;
        process.stdout.write(
          `  Secret store: ${status.capabilities.secretStore.label} — ${secretStoreState}\n`,
        );

        const browserState = status.capabilities.browserLauncher.available
          ? "available"
          : "not found";
        process.stdout.write(
          `  Browser launcher: ${status.capabilities.browserLauncher.label} — ${browserState}\n`,
        );

        process.stdout.write("\n");
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
