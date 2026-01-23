#!/usr/bin/env bun
import { Command } from "commander";
import { writeAuthFile } from "./lib/auth";
import { loadConfig, saveConfig } from "./lib/config";
import { loadKeychainPayload } from "./lib/keychain";
import { runInteractiveMode } from "./lib/interactive";
import { performLogin } from "./lib/oauth/login";

export type { AccountRecord, Config, OAuthPayload } from "./lib/types";
export { loadConfig, saveConfig } from "./lib/config";
export { writeAuthFile } from "./lib/auth";
export { getPaths, setPaths, resetPaths, createTestPaths } from "./lib/paths";
export { runInteractiveMode } from "./lib/interactive";

export const switchAccount = async () => {
  const config = await loadConfig();
  const nextIndex = (config.current + 1) % config.accounts.length;
  const nextAccount = config.accounts[nextIndex];

  if (!nextAccount?.accountId) {
    throw new Error("Account entry missing accountId.");
  }

  const payload = loadKeychainPayload(nextAccount.accountId);
  await writeAuthFile(payload);

  config.current = nextIndex;
  await saveConfig(config);

  const message = `Switched to account ${payload.accountId}`;
  process.stdout.write(`${message}\n`);
};

export const interactiveMode = runInteractiveMode;

export const createProgram = (
  deps: { performLogin?: typeof performLogin } = {},
) => {
  const program = new Command();
  const runLogin = deps.performLogin ?? performLogin;

  program
    .name("cdx")
    .description(
      "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
    )
    .version("0.1.0");

  program
    .command("login")
    .description("Add a new OpenAI account via OAuth")
    .action(async () => {
      try {
        const result = await runLogin();
        if (!result) {
          process.stderr.write("Login failed.\n");
          process.exit(1);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program
    .command("switch")
    .description("Switch to the next configured OpenAI account")
    .action(async () => {
      try {
        await switchAccount();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`${message}\n`);
        process.exit(1);
      }
    });

  program.action(async () => {
    try {
      await interactiveMode();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      process.stderr.write(`${message}\n`);
      process.exit(1);
    }
  });

  return program;
};

const main = async () => {
  const program = createProgram();
  await program.parseAsync(process.argv);
};

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
});
