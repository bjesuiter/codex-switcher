import { spawn } from "node:child_process";
import * as p from "@clack/prompts";
import type { Command } from "commander";
import {
  buildUpdateInstallCommand,
  classifyInstallContextFromPath,
  detectInstallManagerFromPath,
  detectRuntime,
  resolveUpdateManager,
  type UpdateManager,
  type UpdateManagerOption,
} from "../runtime/update-manager";
import { exitWithCommandError } from "./errors";

const PACKAGE_NAME = "@bjesuiter/codex-switcher";

type UpdateSelfOptions = {
  manager?: UpdateManagerOption;
  dryRun?: boolean;
  yes?: boolean;
};

const quoteIfNeeded = (value: string): string => {
  if (value.includes(" ")) {
    return JSON.stringify(value);
  }

  return value;
};

export const formatShellCommand = (command: string, args: string[]): string =>
  [command, ...args].map(quoteIfNeeded).join(" ");

const executeUpdate = async (
  command: string,
  args: string[],
): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
    });

    child.once("error", (error) => {
      reject(error);
    });

    child.once("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(`Update command failed with exit code ${code ?? "unknown"}.`),
      );
    });
  });
};

const executeCapture = async (
  command: string,
  args: string[],
): Promise<{ ok: boolean; output: string }> =>
  await new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";

    child.stdout?.on("data", (chunk: Buffer) => {
      stdout += chunk.toString();
    });

    child.once("error", () => {
      resolve({ ok: false, output: "" });
    });

    child.once("close", (code) => {
      resolve({ ok: code === 0, output: stdout.trim() });
    });
  });

const getInstalledCdxVersion = async (): Promise<string | null> => {
  const attempts: Array<{ command: string; args: string[] }> = [
    { command: "cdx", args: ["--version"] },
  ];

  if (process.argv[0] && process.argv[1]) {
    attempts.push({
      command: process.argv[0],
      args: [process.argv[1], "--version"],
    });
  }

  for (const attempt of attempts) {
    const result = await executeCapture(attempt.command, attempt.args);
    if (!result.ok || !result.output) {
      continue;
    }

    const version = result.output.split(/\r?\n/).at(-1)?.trim();
    if (version) {
      return version;
    }
  }

  return null;
};

export const registerUpdateSelfCommand = (program: Command): void => {
  program
    .command("update-self")
    .aliases(["self-update", "update", "updte"])
    .description("Update cdx to the latest version")
    .option(
      "--manager <manager>",
      "Select update manager (auto|bun|npm|deno)",
      "auto",
    )
    .option(
      "--dry-run",
      "Print selected manager and update command without executing",
    )
    .option("-y, --yes", "Skip confirmation prompt")
    .action(async (options: UpdateSelfOptions) => {
      try {
        const requestedManager = options.manager ?? "auto";
        if (
          !(["auto", "bun", "npm", "deno"] as const).includes(requestedManager)
        ) {
          process.stderr.write(
            `Invalid value '${requestedManager}' for --manager. Allowed values: auto, bun, npm, deno.\n`,
          );
          process.exit(1);
        }

        const runtime = detectRuntime();
        const executablePath = process.argv[1];
        const installManager = detectInstallManagerFromPath(executablePath);
        const installContext = classifyInstallContextFromPath(executablePath);

        if (
          requestedManager === "auto" &&
          installManager === "unknown" &&
          installContext === "local-or-dev"
        ) {
          process.stderr.write(
            "Refusing to auto-update from a local/dev checkout. Re-run with --manager bun|npm|deno.\n",
          );
          process.exit(1);
        }

        const resolvedManager = resolveUpdateManager({
          requestedManager,
          runtime,
          installManager,
        });

        process.stdout.write(`Runtime: ${runtime}\n`);
        process.stdout.write(`Detected install manager: ${installManager}\n`);

        if (!resolvedManager.ok) {
          process.stderr.write(
            "Could not determine update manager automatically. Re-run with --manager bun|npm|deno.\n",
          );
          process.stderr.write("Manual update commands:\n");
          process.stderr.write(
            `  bun: ${formatShellCommand("bun", ["add", "-g", `${PACKAGE_NAME}@latest`])}\n`,
          );
          process.stderr.write(
            `  npm: ${formatShellCommand("npm", ["i", "-g", `${PACKAGE_NAME}@latest`])}\n`,
          );
          process.stderr.write(
            `  deno: ${formatShellCommand("deno", ["install", "-g", "-f", "-A", "-n", "cdx", `npm:${PACKAGE_NAME}@latest`])}\n`,
          );
          process.exit(1);
        }

        const selectedManager: UpdateManager = resolvedManager.manager;
        const command = buildUpdateInstallCommand(
          selectedManager,
          PACKAGE_NAME,
        );
        const printableCommand = formatShellCommand(
          command.command,
          command.args,
        );

        process.stdout.write(`Selected manager: ${selectedManager}\n`);
        process.stdout.write(`Source: ${resolvedManager.source}\n`);
        process.stdout.write(`Command: ${printableCommand}\n`);

        if (options.dryRun) {
          return;
        }

        if (!options.yes) {
          const confirmed = await p.confirm({
            message: `Run update command now?\n${printableCommand}`,
            initialValue: true,
          });

          if (p.isCancel(confirmed) || !confirmed) {
            process.stderr.write("Update cancelled.\n");
            process.exit(1);
          }
        }

        await executeUpdate(command.command, command.args);
        const installedVersion = await getInstalledCdxVersion();
        process.stdout.write("Update completed.\n");
        process.stdout.write(
          `Installed version: ${installedVersion ?? "unknown"}\n`,
        );
      } catch (error) {
        exitWithCommandError(error);
      }
    });
};
