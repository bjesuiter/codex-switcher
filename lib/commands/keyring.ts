import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import * as p from "@clack/prompts";
import type { Command } from "commander";
import { runSecretStoreWriteReadProbe } from "../secrets/probe";
import { createRuntimeSecretStoreAdapter } from "../secrets/store";
import { exitWithCommandError } from "./errors";

type CommandCaptureResult = {
  ok: boolean;
  stdout: string;
  stderr: string;
  error?: string;
};

type LinuxKeyringChecklistItem = {
  question: string;
  ok: boolean;
  details?: string;
  hint?: string;
};

type LinuxAutoStartStatus = {
  state: "enabled" | "disabled" | "unknown";
  details?: string;
};

type LinuxDistroInfo = {
  id: string;
  idLike: string[];
  prettyName: string;
};

const APT_INSTALL_COMMAND =
  "sudo apt-get update && sudo apt-get install -y gnome-keyring libsecret-tools dbus-user-session xdg-utils libpam-gnome-keyring";

const GNOME_KEYRING_CMDLINE_PATTERN = /(^|\/)gnome-keyring-daemon(\s|$)/;

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

const runCommandInherit = async (command: string, args: string[]): Promise<number> =>
  await new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: "inherit",
    });

    child.once("error", () => resolve(1));
    child.once("close", (code) => resolve(code ?? 1));
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

const applyEnvAssignments = (raw: string): void => {
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

const startGnomeKeyringNow = async (): Promise<{ ok: boolean; details?: string }> => {
  const directStart = await runCommandCapture("gnome-keyring-daemon", [
    "--start",
    "--components=secrets",
  ]);

  if (directStart.ok) {
    applyEnvAssignments(directStart.stdout);
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

const detectLinuxDistro = async (): Promise<LinuxDistroInfo> => {
  try {
    const raw = await readFile("/etc/os-release", "utf8");
    const pairs = raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((line) => !line.startsWith("#"))
      .map((line) => {
        const idx = line.indexOf("=");
        if (idx === -1) return null;
        const key = line.slice(0, idx);
        let value = line.slice(idx + 1);
        value = value.replace(/^"|"$/g, "");
        return { key, value };
      })
      .filter((entry): entry is { key: string; value: string } => Boolean(entry));

    const map = new Map(pairs.map((entry) => [entry.key, entry.value]));
    const id = (map.get("ID") ?? "unknown").toLowerCase();
    const idLike = (map.get("ID_LIKE") ?? "")
      .toLowerCase()
      .split(/\s+/)
      .map((item) => item.trim())
      .filter(Boolean);
    const prettyName = map.get("PRETTY_NAME") ?? map.get("NAME") ?? id;

    return { id, idLike, prettyName };
  } catch {
    return {
      id: "unknown",
      idLike: [],
      prettyName: "Unknown Linux",
    };
  }
};

const isDebianUbuntuMint = (distro: LinuxDistroInfo): boolean => {
  if (["debian", "ubuntu", "linuxmint", "mint"].includes(distro.id)) {
    return true;
  }

  return distro.idLike.some((item) => ["debian", "ubuntu", "linuxmint", "mint"].includes(item));
};

const printChecklist = (title: string, items: LinuxKeyringChecklistItem[]): number => {
  process.stdout.write(`${title}:\n`);
  let passed = 0;

  items.forEach((item, index) => {
    if (item.ok) {
      passed += 1;
      process.stdout.write(`  ${index + 1}. ${item.question}: yes\n`);
      return;
    }

    process.stdout.write(`  ${index + 1}. ${item.question}: no\n`);
    if (item.details) {
      process.stdout.write(`     details: ${item.details}\n`);
    }
    if (item.hint) {
      process.stdout.write(`     hint: ${item.hint}\n`);
    }
  });

  process.stdout.write(`  Summary: ${passed}/${items.length} checks passed.\n`);
  return passed;
};

const runLinuxKeyringCheck = async (options: { allowInteractiveStart?: boolean } = {}): Promise<boolean> => {
  const distro = await detectLinuxDistro();

  process.stdout.write("\nLinux keyring diagnostics:\n");
  process.stdout.write(`  Distro: ${distro.prettyName} (id=${distro.id})\n`);
  process.stdout.write(`  DBUS_SESSION_BUS_ADDRESS: ${process.env.DBUS_SESSION_BUS_ADDRESS ?? "<unset>"}\n`);
  process.stdout.write(`  XDG_RUNTIME_DIR: ${process.env.XDG_RUNTIME_DIR ?? "<unset>"}\n`);

  const gnomeKeyringInstalled = await isCommandAvailable("gnome-keyring-daemon");
  const secretToolInstalled = await isCommandAvailable("secret-tool");
  const xdgOpenInstalled = await isCommandAvailable("xdg-open");
  const dbusSendInstalled = await isCommandAvailable("dbus-send");
  const running = await checkGnomeKeyringRunning();
  const autostart = await getLinuxGnomeKeyringAutoStartStatus();

  const checklistPassed = printChecklist("\nDependency and runtime checks", [
    {
      question: "gnome-keyring-daemon installed",
      ok: gnomeKeyringInstalled,
      hint: "Install package: gnome-keyring",
    },
    {
      question: "secret-tool installed",
      ok: secretToolInstalled,
      hint: "Install package: libsecret-tools",
    },
    {
      question: "dbus-send installed",
      ok: dbusSendInstalled,
      hint: "Install package: dbus",
    },
    {
      question: "xdg-open installed",
      ok: xdgOpenInstalled,
      hint: "Install package: xdg-utils",
    },
    {
      question: "gnome-keyring-daemon running",
      ok: running.ok,
      details: running.details,
      hint: "Start daemon: gnome-keyring-daemon --start --components=secrets",
    },
  ]);

  process.stdout.write("\nAutostart status:\n");
  process.stdout.write(`  gnome-keyring autostart: ${autostart.state}`);
  if (autostart.details) {
    process.stdout.write(` (${autostart.details})`);
  }
  process.stdout.write("\n");

  if (
    options.allowInteractiveStart !== false &&
    isInteractiveTerminal() &&
    gnomeKeyringInstalled &&
    !running.ok
  ) {
    const shouldStart = await p.confirm({
      message: "gnome-keyring-daemon is not running. Start it now for this session?",
      initialValue: true,
    });

    if (!p.isCancel(shouldStart) && shouldStart) {
      const started = await startGnomeKeyringNow();
      if (started.ok) {
        process.stdout.write("  Started gnome-keyring-daemon for this session.\n");
      } else {
        process.stdout.write(`  Failed to start gnome-keyring-daemon (${started.details ?? "unknown error"}).\n`);
      }
    }
  }

  process.stdout.write("\nSecret-store write/read/delete probe:\n");
  const probeAdapter = createRuntimeSecretStoreAdapter("linux");
  const probeResult = await runSecretStoreWriteReadProbe(probeAdapter);

  if (probeResult.ok) {
    process.stdout.write("  write/read/delete probe: OK\n");
  } else {
    process.stdout.write(`  ${probeResult.stage} failed: ${probeResult.error.message}\n`);
    process.stdout.write(
      "  Suggested fix: ensure Secret Service is running and unlocked (gnome-keyring + secret-tool), then run `cdx keyring check` again.\n",
    );
  }

  const checksOk = checklistPassed === 5 && probeResult.ok;
  process.stdout.write(`\nResult: ${checksOk ? "OK" : "NOT READY"}\n\n`);
  return checksOk;
};

const runLinuxKeyringInstall = async (options: { yes?: boolean; skipCheck?: boolean }): Promise<void> => {
  const distro = await detectLinuxDistro();

  process.stdout.write("\nLinux keyring setup:\n");
  process.stdout.write(`  Distro: ${distro.prettyName} (id=${distro.id})\n`);

  if (!isDebianUbuntuMint(distro)) {
    process.stdout.write("\nAutomatic install is currently only implemented for Debian/Ubuntu/Mint.\n");
    process.stdout.write("Install these packages manually, then run `cdx keyring check`:\n");
    process.stdout.write("  - gnome-keyring\n");
    process.stdout.write("  - libsecret-tools\n");
    process.stdout.write("  - dbus-user-session\n");
    process.stdout.write("  - xdg-utils\n");
    process.stdout.write("  - libpam-gnome-keyring (optional, for PAM auto-unlock)\n\n");
    return;
  }

  process.stdout.write("\nInstall command:\n");
  process.stdout.write(`  ${APT_INSTALL_COMMAND}\n`);

  let shouldRun = true;
  if (!options.yes) {
    if (!isInteractiveTerminal()) {
      process.stdout.write("\nNon-interactive terminal detected. Re-run with --yes to execute install automatically.\n\n");
      return;
    }

    const confirmed = await p.confirm({
      message: "Run this install command now?",
      initialValue: true,
    });

    shouldRun = !p.isCancel(confirmed) && confirmed;
  }

  if (!shouldRun) {
    process.stdout.write("\nInstall skipped.\n\n");
    return;
  }

  const exitCode = await runCommandInherit("sh", ["-lc", APT_INSTALL_COMMAND]);
  if (exitCode !== 0) {
    throw new Error(`Install command failed with exit code ${exitCode}.`);
  }

  process.stdout.write("\nInstall completed.\n");

  if (!options.skipCheck) {
    const ok = await runLinuxKeyringCheck({ allowInteractiveStart: true });
    if (!ok) {
      process.exitCode = 1;
    }
  } else {
    process.stdout.write("Run `cdx keyring check` to verify setup.\n\n");
  }
};

export const registerKeyringCommand = (program: Command): void => {
  const keyring = program
    .command("keyring")
    .description("Setup and diagnose Linux gnome-keyring/Secret Service support");

  keyring
    .command("check")
    .description("Run focused Linux keyring dependency and probe checks")
    .action(async () => {
      try {
        if (process.platform !== "linux") {
          process.stdout.write("This command currently targets Linux only.\n\n");
          return;
        }

        const ok = await runLinuxKeyringCheck({ allowInteractiveStart: true });
        if (!ok) {
          process.exitCode = 1;
        }
      } catch (error) {
        exitWithCommandError(error);
      }
    });

  keyring
    .command("install")
    .description("Install gnome-keyring dependencies on Debian/Ubuntu/Mint")
    .option("--yes", "Run installation without interactive confirmation")
    .option("--skip-check", "Skip automatic post-install verification")
    .action(async (options: { yes?: boolean; skipCheck?: boolean }) => {
      try {
        if (process.platform !== "linux") {
          process.stdout.write("This command currently targets Linux only.\n\n");
          return;
        }

        await runLinuxKeyringInstall(options);
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
