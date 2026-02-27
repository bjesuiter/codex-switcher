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

type LinuxSecretStoreChecklistItemId =
  | "gnome-keyring-installed"
  | "secret-tool-installed"
  | "gnome-keyring-running";

type LinuxSecretStoreChecklistItem = {
  id: LinuxSecretStoreChecklistItemId;
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

const runCommandCaptureWithInput = async (
  command: string,
  args: string[],
  input: string,
): Promise<CommandCaptureResult> =>
  await new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"],
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

    child.stdin?.write(input);
    child.stdin?.end();

    child.once("close", (code) => {
      resolve({
        ok: spawnError === null && code === 0,
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        ...(spawnError ? { error: spawnError } : {}),
      });
    });
  });

const runCommandDetached = async (
  command: string,
  args: string[],
): Promise<{ ok: boolean; error?: string }> => {
  try {
    const child = spawn(command, args, {
      detached: true,
      stdio: "ignore",
    });
    child.unref();
    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, error: message };
  }
};

const extractCommandFailureDetails = (result: CommandCaptureResult): string | undefined =>
  result.error || result.stderr || result.stdout || undefined;

const isCommandAvailable = async (commandName: string): Promise<boolean> => {
  const shellCheck = await runCommandCapture("sh", [
    "-lc",
    `command -v ${commandName} >/dev/null 2>&1`,
  ]);

  return shellCheck.ok;
};

const GNOME_KEYRING_CMDLINE_PATTERN = /(^|\/)gnome-keyring-daemon(\s|$)/;

const checkGnomeKeyringRunning = async (): Promise<{
  ok: boolean;
  details?: string;
}> => {
  if (await isCommandAvailable("ps")) {
    const psResult = await runCommandCapture("ps", ["-A", "-o", "args="]);

    if (psResult.ok) {
      const hasDaemon = psResult.stdout
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .some((line) => GNOME_KEYRING_CMDLINE_PATTERN.test(line));

      if (hasDaemon) {
        return { ok: true };
      }

      return {
        ok: false,
        details: "No gnome-keyring-daemon process found.",
      };
    }
  }

  if (await isCommandAvailable("pgrep")) {
    const pgrepResult = await runCommandCapture("pgrep", [
      "-f",
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

  return {
    ok: false,
    details: "Neither ps nor pgrep is available to check gnome-keyring-daemon.",
  };
};

type LinuxAutoStartStatus = {
  state: "enabled" | "disabled" | "unknown";
  details?: string;
};

const parseSystemctlEnabledState = (output: string): "enabled" | "disabled" | "unknown" => {
  const normalized = output.trim().toLowerCase();

  if (["enabled", "enabled-runtime", "static", "indirect", "generated"].includes(normalized)) {
    return "enabled";
  }

  if (["disabled", "masked", "not-found", "linked", "linked-runtime"].includes(normalized)) {
    return "disabled";
  }

  return "unknown";
};

const getLinuxGnomeKeyringAutoStartStatus = async (): Promise<LinuxAutoStartStatus> => {
  if (!(await isCommandAvailable("systemctl"))) {
    return {
      state: "unknown",
      details: "systemctl is not available; autostart detection depends on your desktop/session config.",
    };
  }

  const units = ["gnome-keyring-daemon.socket", "gnome-keyring-daemon.service"];
  let sawDisabled = false;
  const details: string[] = [];

  for (const unit of units) {
    const result = await runCommandCapture("systemctl", ["--user", "is-enabled", unit]);
    const state = parseSystemctlEnabledState(result.stdout || result.stderr);

    if (state === "enabled") {
      return { state: "enabled", details: `${unit} is enabled (${result.stdout || "enabled"}).` };
    }

    if (state === "disabled") {
      sawDisabled = true;
      details.push(`${unit}: ${result.stdout || result.stderr || "disabled"}`);
      continue;
    }

    const maybeDetail = extractCommandFailureDetails(result);
    if (maybeDetail) {
      details.push(`${unit}: ${maybeDetail}`);
    }
  }

  if (sawDisabled) {
    return {
      state: "disabled",
      details: details.join("; "),
    };
  }

  return {
    state: "unknown",
    details: details.join("; ") || "Unable to determine gnome-keyring autostart state.",
  };
};

const applyKeyringEnvAssignments = (raw: string): void => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const match = line.match(/^([A-Z0-9_]+)=(.*);?$/);
    if (!match) {
      continue;
    }

    const key = match[1];
    const value = match[2].replace(/;$/, "");
    if (key) {
      process.env[key] = value;
    }
  }
};

const startGnomeKeyringNow = async (): Promise<{ ok: boolean; details?: string }> => {
  const directStart = await runCommandCapture("gnome-keyring-daemon", [
    "--start",
    "--components=secrets",
  ]);

  if (directStart.ok) {
    applyKeyringEnvAssignments(directStart.stdout);
    const runningCheck = await checkGnomeKeyringRunning();
    if (runningCheck.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      details: runningCheck.details ??
        "gnome-keyring-daemon start command succeeded, but process was not detected afterwards.",
    };
  }

  if (await isCommandAvailable("systemctl")) {
    const serviceStart = await runCommandCapture("systemctl", [
      "--user",
      "start",
      "gnome-keyring-daemon.service",
    ]);

    if (serviceStart.ok) {
      const runningCheck = await checkGnomeKeyringRunning();
      if (runningCheck.ok) {
        return { ok: true };
      }

      return {
        ok: false,
        details: runningCheck.details ??
          "systemctl start succeeded, but gnome-keyring-daemon was not detected afterwards.",
      };
    }

    return {
      ok: false,
      details:
        extractCommandFailureDetails(directStart) ??
        extractCommandFailureDetails(serviceStart) ??
        "Failed to start gnome-keyring-daemon.",
    };
  }

  return {
    ok: false,
    details: extractCommandFailureDetails(directStart) ?? "Failed to start gnome-keyring-daemon.",
  };
};

const enableGnomeKeyringAutoStart = async (): Promise<{ ok: boolean; details?: string }> => {
  if (!(await isCommandAvailable("systemctl"))) {
    return {
      ok: false,
      details:
        "systemctl is not available, so cdx cannot automatically enable startup in this session manager.",
    };
  }

  const units = ["gnome-keyring-daemon.socket", "gnome-keyring-daemon.service"];
  const failures: string[] = [];

  for (const unit of units) {
    const result = await runCommandCapture("systemctl", [
      "--user",
      "enable",
      unit,
    ]);

    if (result.ok) {
      return { ok: true, details: `${unit} enabled.` };
    }

    const detail = extractCommandFailureDetails(result);
    failures.push(`${unit}: ${detail ?? "enable failed"}`);
  }

  return {
    ok: false,
    details: failures.join("; "),
  };
};

const maybeOfferToStartGnomeKeyring = async (): Promise<boolean> => {
  const autoStartStatus = await getLinuxGnomeKeyringAutoStartStatus();

  if (autoStartStatus.state === "enabled") {
    const shouldStartNow = await p.confirm({
      message:
        "gnome-keyring autostart appears enabled, but it is not running right now. Start it now?",
      initialValue: true,
    });

    if (p.isCancel(shouldStartNow) || !shouldStartNow) {
      return false;
    }

    const startResult = await startGnomeKeyringNow();
    if (!startResult.ok) {
      process.stdout.write(
        `      failed to start gnome-keyring-daemon: ${startResult.details ?? "unknown error"}\n`,
      );
      return false;
    }

    process.stdout.write("      started gnome-keyring-daemon for this session.\n");
    return true;
  }

  if (autoStartStatus.details) {
    process.stdout.write(`      autostart check: ${autoStartStatus.details}\n`);
  }

  const action = await p.select<"start-now" | "enable-and-start" | "skip">({
    message:
      autoStartStatus.state === "disabled"
        ? "gnome-keyring autostart seems disabled. What should cdx do?"
        : "Could not confirm gnome-keyring autostart. What should cdx do?",
    options: [
      { value: "start-now", label: "Start now only" },
      {
        value: "enable-and-start",
        label: "Enable on system start and start now",
      },
      { value: "skip", label: "Skip" },
    ],
    initialValue: "start-now",
  });

  if (p.isCancel(action) || action === "skip") {
    return false;
  }

  if (action === "enable-and-start") {
    const enableResult = await enableGnomeKeyringAutoStart();
    if (!enableResult.ok) {
      process.stdout.write(
        `      failed to enable autostart: ${enableResult.details ?? "unknown error"}\n`,
      );
      return false;
    }

    process.stdout.write(
      `      autostart enabled${enableResult.details ? ` (${enableResult.details})` : ""}.\n`,
    );
  }

  const startResult = await startGnomeKeyringNow();
  if (!startResult.ok) {
    process.stdout.write(
      `      failed to start gnome-keyring-daemon: ${startResult.details ?? "unknown error"}\n`,
    );
    return false;
  }

  process.stdout.write("      started gnome-keyring-daemon for this session.\n");
  return true;
};

const runLinuxSecretStoreChecklist = async (): Promise<
  LinuxSecretStoreChecklistItem[]
> => {
  const gnomeKeyringInstalled = await isCommandAvailable("gnome-keyring-daemon");
  const secretToolInstalled = await isCommandAvailable("secret-tool");
  const gnomeKeyringRunning = await checkGnomeKeyringRunning();

  return [
    {
      id: "gnome-keyring-installed",
      question: "Is gnome-keyring installed?",
      ok: gnomeKeyringInstalled,
      hint:
        "Install the `gnome-keyring` package, then log out/in (or restart your session).",
    },
    {
      id: "secret-tool-installed",
      question: "Is secret-tool installed?",
      ok: secretToolInstalled,
      hint:
        "Install the package that provides `secret-tool` (often `libsecret-tools`).",
    },
    {
      id: "gnome-keyring-running",
      question: "Is gnome-keyring running?",
      ok: gnomeKeyringRunning.ok,
      details: gnomeKeyringRunning.details,
      hint:
        "Start/unlock gnome-keyring-daemon in your session (cdx can do this interactively).",
    },
  ];
};

const runSecretToolRoundTripCheck = async (): Promise<{ ok: boolean; details?: string }> => {
  const id = `${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const service = `cdx-doctor-secret-service-${id}`;
  const account = `cdx-doctor-account-${id}`;
  const value = `cdx-doctor-value-${id}`;

  const storeResult = await runCommandCaptureWithInput(
    "secret-tool",
    ["store", "--label=cdx doctor Secret Service probe", "service", service, "account", account],
    `${value}\n`,
  );

  if (!storeResult.ok) {
    return {
      ok: false,
      details: extractCommandFailureDetails(storeResult) ?? "secret-tool store failed.",
    };
  }

  const lookupResult = await runCommandCapture("secret-tool", [
    "lookup",
    "service",
    service,
    "account",
    account,
  ]);

  if (!lookupResult.ok) {
    return {
      ok: false,
      details: extractCommandFailureDetails(lookupResult) ?? "secret-tool lookup failed.",
    };
  }

  if (lookupResult.stdout.trim() !== value) {
    return {
      ok: false,
      details: "secret-tool lookup returned an unexpected value after store.",
    };
  }

  const clearResult = await runCommandCapture("secret-tool", [
    "clear",
    "service",
    service,
    "account",
    account,
  ]);

  if (!clearResult.ok) {
    return {
      ok: false,
      details: extractCommandFailureDetails(clearResult) ?? "secret-tool clear failed.",
    };
  }

  return { ok: true };
};

const runLinuxSecretStoreDeepRemediation = async (): Promise<void> => {
  if (!isInteractiveTerminal()) {
    return;
  }

  const hasSecretTool = await isCommandAvailable("secret-tool");
  const hasSeahorse = await isCommandAvailable("seahorse");

  const shouldStart = await p.confirm({
    message:
      "Run deeper Linux Secret Service remediation now? (interactive actions, no copy/paste commands)",
    initialValue: true,
  });

  if (p.isCancel(shouldStart) || !shouldStart) {
    return;
  }

  while (true) {
    const action = await p.select<"secret-tool-test" | "open-keyring-manager" | "retry-probe" | "done">({
      message: "Choose next remediation action:",
      options: [
        {
          value: "secret-tool-test",
          label: hasSecretTool
            ? "Run Secret Service write/read/clear test now"
            : "Run Secret Service write/read/clear test now (secret-tool not found)",
        },
        {
          value: "open-keyring-manager",
          label: hasSeahorse
            ? "Open keyring manager now"
            : "Open keyring manager now (seahorse not found)",
        },
        {
          value: "retry-probe",
          label: "Retry cdx secure-store probe now",
        },
        {
          value: "done",
          label: "Done",
        },
      ],
      initialValue: "secret-tool-test",
    });

    if (p.isCancel(action) || action === "done") {
      return;
    }

    if (action === "secret-tool-test") {
      if (!hasSecretTool) {
        process.stdout.write(
          "    secret-tool is not installed; install it first, then rerun this remediation action.\n",
        );
        continue;
      }

      const result = await runSecretToolRoundTripCheck();
      if (result.ok) {
        process.stdout.write("    secret-tool roundtrip test passed.\n");
      } else {
        process.stdout.write(
          `    secret-tool roundtrip test failed: ${result.details ?? "unknown error"}\n`,
        );
      }
      continue;
    }

    if (action === "open-keyring-manager") {
      if (!hasSeahorse) {
        process.stdout.write(
          "    keyring manager app was not found (seahorse). Install it to manage collections/locks interactively.\n",
        );
        continue;
      }

      const opened = await runCommandDetached("seahorse", []);
      if (!opened.ok) {
        process.stdout.write(
          `    failed to open keyring manager: ${opened.error ?? "unknown error"}\n`,
        );
      } else {
        process.stdout.write(
          "    opened keyring manager. Unlock/create the default keyring, then return here and retry probe.\n",
        );
      }
      continue;
    }

    const probeResult = await runSecretStoreWriteReadProbe(createProbeAdapterForCurrentPlatform());
    if (probeResult.ok) {
      process.stdout.write("    cdx secure-store probe now passes.\n");
      return;
    }

    process.stdout.write(
      `    probe still failing (${probeResult.stage}): ${probeResult.error.message}\n`,
    );
  }
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

    if (item.id === "gnome-keyring-running") {
      const started = await maybeOfferToStartGnomeKeyring();
      if (started) {
        const runningNow = await checkGnomeKeyringRunning();
        if (runningNow.ok) {
          passed += 1;
          process.stdout.write("      re-check: gnome-keyring-daemon is now running.\n");
        } else {
          process.stdout.write(
            `      re-check still failing: ${runningNow.details ?? "process not detected"}\n`,
          );
        }
      }
    }
  }

  process.stdout.write(
    `  Guided checklist summary: ${passed}/${checklist.length} checks passed.\n`,
  );

  if (passed === checklist.length) {
    process.stdout.write(
      "  Note: basic checks passed, but secure-store probe still failed. This can happen when the keyring is locked, has no default collection, or your D-Bus/session setup prevents Secret Service writes.\n",
    );

    await runLinuxSecretStoreDeepRemediation();
  }
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
