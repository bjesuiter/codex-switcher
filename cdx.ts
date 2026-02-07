#!/usr/bin/env bun
import { Command } from "commander";
import pkg from "./package.json";
import { exitWithCommandError } from "./lib/commands/errors";
import {
  registerDefaultInteractiveAction,
  registerHelpCommand,
  registerLabelCommand,
  registerLoginCommand,
  registerRefreshCommand,
  registerStatusCommand,
  registerSwitchCommand,
  registerUsageCommand,
  registerVersionCommand,
  type LoginDeps,
} from "./lib/commands";
import { runInteractiveMode } from "./lib/interactive";

export type { AccountRecord, Config, OAuthPayload } from "./lib/types";
export { loadConfig, saveConfig } from "./lib/config";
export { writeAuthFile, writeCodexAuthFile, writePiAuthFile, writeAllAuthFiles } from "./lib/auth";
export { getPaths, setPaths, resetPaths, createTestPaths } from "./lib/paths";
export { runInteractiveMode } from "./lib/interactive";
export { switchNext, switchToAccount } from "./lib/commands";

export const interactiveMode = runInteractiveMode;

export const createProgram = (
  deps: LoginDeps = {},
): Command => {
  const program = new Command();

  program
    .name("cdx")
    .description(
      "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
    )
    .version(pkg.version, "-v, --version");

  registerLoginCommand(program, deps);
  registerRefreshCommand(program);
  registerSwitchCommand(program);
  registerLabelCommand(program);
  registerStatusCommand(program);
  registerUsageCommand(program);
  registerHelpCommand(program);
  registerVersionCommand(program, pkg.version);
  registerDefaultInteractiveAction(program);

  return program;
};

const main = async () => {
  const program = createProgram();
  await program.parseAsync(process.argv);
};

if (import.meta.main) {
  main().catch((error) => {
    exitWithCommandError(error);
  });
}
