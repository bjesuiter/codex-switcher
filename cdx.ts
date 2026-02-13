#!/usr/bin/env bun
import { Command, InvalidArgumentError } from "commander";
import pkg from "./package.json";
import { loadConfiguredSecretStoreSelection } from "./lib/config";
import { exitWithCommandError } from "./lib/commands/errors";
import {
  registerDefaultInteractiveAction,
  registerDoctorCommand,
  registerHelpCommand,
  registerLabelCommand,
  registerLoginCommand,
  registerMigrateSecretsCommand,
  registerReloginCommand,
  registerStatusCommand,
  registerSwitchCommand,
  registerUsageCommand,
  registerVersionCommand,
  type LoginDeps,
} from "./lib/commands";
import { runInteractiveMode } from "./lib/interactive";
import {
  createSecretStoreAdapterFromSelection,
  resetSecretStoreAdapter,
  setSecretStoreAdapter,
  type SecretStoreSelection,
} from "./lib/secrets/store";

export type { AccountRecord, Config, OAuthPayload } from "./lib/types";
export { loadConfig, saveConfig } from "./lib/config";
export { writeAuthFile, writeCodexAuthFile, writePiAuthFile, writeAllAuthFiles } from "./lib/auth";
export { getPaths, setPaths, resetPaths, createTestPaths } from "./lib/paths";
export {
  createRuntimeSecretStoreAdapter,
  createSecretStoreAdapterFromSelection,
  getSecretStoreAdapter,
  resetSecretStoreAdapter,
  setSecretStoreAdapter,
  type SecretStoreAdapter,
  type SecretStoreSelection,
} from "./lib/secrets/store";
export { runInteractiveMode } from "./lib/interactive";
export { switchNext, switchToAccount } from "./lib/commands";

export const interactiveMode = runInteractiveMode;

const parseSecretStoreSelection = (value: string): SecretStoreSelection => {
  if (value === "auto" || value === "legacy-keychain") {
    return value;
  }

  throw new InvalidArgumentError(
    `Invalid value '${value}' for --secret-store. Allowed values: auto, legacy-keychain.`,
  );
};

export const createProgram = (
  deps: LoginDeps = {},
): Command => {
  const program = new Command();

  program
    .name("cdx")
    .description(
      "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
    )
    .version(pkg.version, "-v, --version")
    .option(
      "--secret-store <mode>",
      "Select secret-store backend (auto|legacy-keychain)",
      parseSecretStoreSelection,
    );

  program.hook("preAction", async (_thisCommand, actionCommand) => {
    const options = actionCommand.optsWithGlobals() as { secretStore?: SecretStoreSelection };
    const configuredSelection = options.secretStore
      ? undefined
      : await loadConfiguredSecretStoreSelection();
    const selection = options.secretStore ?? configuredSelection ?? "auto";
    const adapter = createSecretStoreAdapterFromSelection(selection);
    setSecretStoreAdapter(adapter);
  });

  program.hook("postAction", () => {
    resetSecretStoreAdapter();
  });

  registerLoginCommand(program, deps);
  registerReloginCommand(program);
  registerSwitchCommand(program);
  registerLabelCommand(program);
  registerMigrateSecretsCommand(program);
  registerStatusCommand(program);
  registerDoctorCommand(program);
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
