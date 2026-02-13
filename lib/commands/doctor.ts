import path from "node:path";
import * as p from "@clack/prompts";
import type { Command } from "commander";
import { getPaths } from "../paths";
import { getStatus } from "../status";
import { getKeychainDecryptAccessByServiceAsync } from "../keychain-acl";
import { getSecretStoreAdapter } from "../secrets/store";
import { exitWithCommandError } from "./errors";

const hasRuntimeTrustedApp = (
  trustedApplications: string[],
  runtimeExecutablePath: string,
): boolean => {
  const runtimeBaseName = path.basename(runtimeExecutablePath).toLowerCase();

  return trustedApplications.some((trustedApp) => {
    if (trustedApp === runtimeExecutablePath) {
      return true;
    }

    return path.basename(trustedApp).toLowerCase() === runtimeBaseName;
  });
};

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

        if (process.platform === "darwin") {
          const secretStore = getSecretStoreAdapter();
          const accountsWithSecrets = status.accounts.filter((account) => account.secureStoreExists);

          if (accountsWithSecrets.length > 0) {
            const runtimeExecutablePath = process.execPath;
            const services = accountsWithSecrets.map((account) =>
              secretStore.getServiceName(account.accountId)
            );

            process.stdout.write("\nKeychain ACL checks:\n");
            process.stdout.write(`  Runtime executable: ${runtimeExecutablePath}\n`);

            const aclSpinner = p.spinner();
            const accountWord = accountsWithSecrets.length === 1 ? "account" : "accounts";
            aclSpinner.start(
              `Checking keychain ACLs for ${accountsWithSecrets.length} ${accountWord}...`,
            );
            const decryptAccessByService = await getKeychainDecryptAccessByServiceAsync(services);
            aclSpinner.stop("Keychain ACL checks complete.");

            for (const account of accountsWithSecrets) {
              const service = secretStore.getServiceName(account.accountId);
              const decryptAccess = decryptAccessByService.get(service);
              const accountLabel = resolveLabel(account.accountId);

              if (!decryptAccess || decryptAccess.mode === "missing") {
                process.stdout.write(
                  `  ${accountLabel}: unable to read decrypt trusted apps (service: ${service})\n`,
                );
                continue;
              }

              if (decryptAccess.mode === "all-apps") {
                process.stdout.write(
                  `  ${accountLabel}: decrypt access allows all apps (<null>)\n`,
                );
                continue;
              }

              const runtimeTrusted = hasRuntimeTrustedApp(
                decryptAccess.applications,
                runtimeExecutablePath,
              );
              const trustedAppsList = decryptAccess.applications.join(", ");

              if (runtimeTrusted) {
                process.stdout.write(`  ${accountLabel}: runtime is in trusted apps\n`);
                continue;
              }

              process.stdout.write(
                `  ⚠ ${accountLabel}: runtime not found in trusted apps\n`,
              );
              process.stdout.write(`    Service: ${service}\n`);
              process.stdout.write(`    Trusted apps: ${trustedAppsList || "(none)"}\n`);
              process.stdout.write(
                "    This secret may have been created with a different runtime/toolchain (for example node vs bun).\n",
              );
            }
          }
        }

        process.stdout.write("\n");
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
