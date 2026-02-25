import path from "node:path";
import { spawn } from "node:child_process";
import * as p from "@clack/prompts";
import type { Command } from "commander";
import { getPaths } from "../paths";
import { getStatus } from "../status";
import { getKeychainDecryptAccessByServiceAsync } from "../keychain-acl";
import { runSecretStoreWriteReadProbe } from "../secrets/probe";
import {
  createRuntimeSecretStoreAdapter,
  createSecretStoreAdapterFromSelection,
  getSecretStoreAdapter,
  isMissingSecretStoreEntryError,
} from "../secrets/store";
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

const getSecretStoreProbeHeading = (platform: NodeJS.Platform): string | null => {
  if (platform === "linux") {
    return "Linux secure-store probe";
  }

  if (platform === "darwin") {
    return "macOS secure-store probe";
  }

  if (platform === "win32") {
    return "Windows secure-store probe";
  }

  return null;
};

const createProbeAdapterForCurrentPlatform = () => {
  const currentAdapter = getSecretStoreAdapter();

  if (process.platform === "darwin" && currentAdapter.id === "macos-legacy-keychain") {
    return createSecretStoreAdapterFromSelection("legacy-keychain", "darwin");
  }

  return createRuntimeSecretStoreAdapter(process.platform);
};

const getSecretStoreProbeGuidance = (platform: NodeJS.Platform): string | null => {
  if (platform === "linux") {
    return (
      "Suggested fix: ensure Secret Service is running/unlocked " +
      "(for example gnome-keyring + secret-tool), then retry login."
    );
  }

  if (platform === "darwin") {
    return (
      "Suggested fix: ensure Keychain Access is unlocked and allows this runtime/toolchain " +
      "to store/read passwords, then retry login."
    );
  }

  if (platform === "win32") {
    return (
      "Suggested fix: ensure Windows Credential Manager is available for this user session, " +
      "then retry login."
    );
  }

  return null;
};

type CommandCaptureResult = {
  ok: boolean;
  stdout: string;
  stderr: string;
  error?: string;
};

type LinuxSecretStoreChecklistItem = {
  question: string;
  ok: boolean;
  details?: string;
  hint?: string;
};

const isInteractiveTerminal = (): boolean =>
  Boolean(process.stdin.isTTY) && Boolean(process.stdout.isTTY);

const runCommandCapture = async (
  command: string,
  args: string[],
): Promise<CommandCaptureResult> =>
  await new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let spawnError: string | null = null;

    child.stdout?.on("data", (chunk: Buffer) => {
      stdout += chunk.toString();
    });

    child.stderr?.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });

    child.once("error", (error) => {
      spawnError = error.message;
    });

    child.once("close", (code) => {
      resolve({
        ok: spawnError === null && code === 0,
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        ...(spawnError ? { error: spawnError } : {}),
      });
    });
  });

const extractCommandFailureDetails = (result: CommandCaptureResult): string | undefined =>
  result.error || result.stderr || result.stdout || undefined;

const isCommandAvailable = async (commandName: string): Promise<boolean> => {
  const shellCheck = await runCommandCapture("sh", [
    "-lc",
    `command -v ${commandName} >/dev/null 2>&1`,
  ]);

  return shellCheck.ok;
};

const checkGnomeKeyringRunning = async (): Promise<{
  ok: boolean;
  details?: string;
}> => {
  if (await isCommandAvailable("pgrep")) {
    const pgrepResult = await runCommandCapture("pgrep", [
      "-x",
      "gnome-keyring-daemon",
    ]);

    if (pgrepResult.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      details: extractCommandFailureDetails(pgrepResult) ??
        "No gnome-keyring-daemon process found.",
    };
  }

  const psFallback = await runCommandCapture("sh", [
    "-lc",
    "ps -A -o comm= | grep -q '^gnome-keyring-daemon$'",
  ]);

  if (psFallback.ok) {
    return { ok: true };
  }

  return {
    ok: false,
    details: extractCommandFailureDetails(psFallback) ??
      "No gnome-keyring-daemon process found.",
  };
};

const runLinuxSecretStoreChecklist = async (): Promise<
  LinuxSecretStoreChecklistItem[]
> => {
  const gnomeKeyringInstalled = await isCommandAvailable("gnome-keyring-daemon");
  const secretToolInstalled = await isCommandAvailable("secret-tool");
  const gnomeKeyringRunning = await checkGnomeKeyringRunning();

  return [
    {
      question: "Is gnome-keyring installed?",
      ok: gnomeKeyringInstalled,
      hint:
        "Install the `gnome-keyring` package, then log out/in (or restart your session).",
    },
    {
      question: "Is secret-tool installed?",
      ok: secretToolInstalled,
      hint:
        "Install the package that provides `secret-tool` (often `libsecret-tools`).",
    },
    {
      question: "Is gnome-keyring running?",
      ok: gnomeKeyringRunning.ok,
      details: gnomeKeyringRunning.details,
      hint:
        "Start/unlock gnome-keyring-daemon in your session (for a quick test: `gnome-keyring-daemon --start --components=secrets`).",
    },
  ];
};

const maybeRunLinuxSecretStoreChecklist = async (): Promise<void> => {
  if (!isInteractiveTerminal()) {
    process.stdout.write(
      "  Tip: run `cdx doctor` in an interactive terminal to start guided Linux secret-store checks.\n",
    );
    return;
  }

  const shouldRunChecklist = await p.confirm({
    message:
      "Run guided Linux secret-store checks now? (gnome-keyring installed, secret-tool installed, gnome-keyring running)",
    initialValue: true,
  });

  if (p.isCancel(shouldRunChecklist) || !shouldRunChecklist) {
    process.stdout.write("  Guided Linux checks skipped.\n");
    return;
  }

  process.stdout.write("  Guided Linux checks:\n");

  const checklist = await runLinuxSecretStoreChecklist();
  let passed = 0;

  for (let i = 0; i < checklist.length; i++) {
    const item = checklist[i];
    if (item.ok) {
      passed += 1;
      process.stdout.write(`    ${i + 1}/3 ${item.question} yes\n`);
      continue;
    }

    process.stdout.write(`    ${i + 1}/3 ${item.question} no\n`);

    if (item.details) {
      process.stdout.write(`      details: ${item.details}\n`);
    }

    if (item.hint) {
      process.stdout.write(`      hint: ${item.hint}\n`);
    }
  }

  process.stdout.write(
    `  Guided checklist summary: ${passed}/${checklist.length} checks passed.\n`,
  );
};

export const registerDoctorCommand = (program: Command): void => {
  program
    .command("doctor")
    .description("Show auth file paths and runtime capabilities")
    .option(
      "--check-keychain-acl",
      "Run keychain trusted-app/ACL checks on macOS (can be slow)",
    )
    .action(async (options: { checkKeychainAcl?: boolean }) => {
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

        if (process.platform === "win32") {
          const secretStore = getSecretStoreAdapter();
          process.stdout.write("\nWindows secure-store checks:\n");

          if (status.accounts.length === 0) {
            process.stdout.write("  No accounts configured in config.\n");
          } else {
            let okCount = 0;

            for (const account of status.accounts) {
              const accountLabel = resolveLabel(account.accountId);
              try {
                await secretStore.load(account.accountId);
                okCount += 1;
                process.stdout.write(`  ${accountLabel}: credential payload load OK\n`);
              } catch (error) {
                if (isMissingSecretStoreEntryError(error)) {
                  process.stdout.write(
                    `  ⚠ ${accountLabel}: missing secure-store entry for configured account\n`,
                  );
                  continue;
                }

                const message = error instanceof Error ? error.message : String(error);
                process.stdout.write(
                  `  ⚠ ${accountLabel}: secure-store load failed (${message})\n`,
                );
              }
            }

            process.stdout.write(
              `  Summary: ${okCount}/${status.accounts.length} configured account(s) passed secure-store load checks.\n`,
            );
          }
        }

        const probeHeading = getSecretStoreProbeHeading(process.platform);
        if (probeHeading) {
          process.stdout.write(`\n${probeHeading}:\n`);
          const probeAdapter = createProbeAdapterForCurrentPlatform();
          const probeResult = await runSecretStoreWriteReadProbe(probeAdapter);

          if (probeResult.ok) {
            process.stdout.write("  write/read/delete probe: OK\n");
          } else {
            process.stdout.write(
              `  ⚠ ${probeResult.stage} failed: ${probeResult.error.message}\n`,
            );
            const guidance = getSecretStoreProbeGuidance(process.platform);
            if (guidance) {
              process.stdout.write(`  ${guidance}\n`);
            }

            if (process.platform === "linux") {
              await maybeRunLinuxSecretStoreChecklist();
            }
          }
        }

        if (process.platform === "darwin" && !options.checkKeychainAcl) {
          process.stdout.write("  ┌─ Optional keychain ACL check\n");
          process.stdout.write("  │  Run: cdx doctor --check-keychain-acl\n");
          process.stdout.write(
            "  │  Verifies whether your current runtime is trusted by Keychain.\n",
          );
          process.stdout.write("  └─ Expected duration: ~30-60 seconds\n");
        }

        if (process.platform === "darwin" && options.checkKeychainAcl) {
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
              process.stdout.write(
                "    Suggested fix: run `cdx migrate-secrets` to recreate keychain entries with the current runtime ACL.\n",
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
