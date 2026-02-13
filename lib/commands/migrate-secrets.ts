import type { Command } from "commander";
import {
  migrateLegacyMacOSSecrets,
  type SecretMigrationAccountResult,
} from "../secrets/migrate";
import { exitWithCommandError } from "./errors";

const statusPrefix = (result: SecretMigrationAccountResult): string => {
  if (result.status === "migrated") return "✓";
  if (result.status === "skipped") return "-";
  return "✗";
};

const formatName = (result: SecretMigrationAccountResult): string =>
  result.label ? `${result.label} (${result.accountId})` : result.accountId;

export const registerMigrateSecretsCommand = (program: Command): void => {
  program
    .command("migrate-secrets")
    .description(
      "Migrate macOS legacy keychain entries to cross-keychain and update config",
    )
    .action(async () => {
      try {
        const result = await migrateLegacyMacOSSecrets();

        process.stdout.write("\nSecret migration results:\n");
        for (const accountResult of result.accountResults) {
          process.stdout.write(
            `  ${statusPrefix(accountResult)} ${formatName(accountResult)}: ${accountResult.message}\n`,
          );
        }

        process.stdout.write("\nSummary:\n");
        process.stdout.write(`  Migrated: ${result.migrated}\n`);
        process.stdout.write(`  Skipped:  ${result.skipped}\n`);
        process.stdout.write(`  Failed:   ${result.failed}\n`);

        if (result.failed === 0) {
          process.stdout.write(
            result.configUpdated
              ? "  Config:   updated (secretStore=auto, service names normalized)\n\n"
              : "  Config:   already up to date\n\n",
          );
          return;
        }

        process.stdout.write(
          "  Config:   not updated because at least one account failed\n\n",
        );
        throw new Error(
          `Migration finished with ${result.failed} failed account(s). Resolve them and run 'cdx migrate-secrets' again.`,
        );
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
