#!/usr/bin/env bun
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

type AccountRecord = {
  accountId: string;
  keychainService: string;
};

type Config = {
  current: number;
  accounts: AccountRecord[];
};

type OAuthPayload = {
  refresh: string;
  access: string;
  expires: number;
  accountId: string;
};

const CONFIG_DIR = path.join(os.homedir(), ".config", "cdx");
const CONFIG_PATH = path.join(CONFIG_DIR, "accounts.json");
const OPENCODE_AUTH_PATH = path.join(
  os.homedir(),
  ".local",
  "share",
  "opencode",
  "auth.json",
);

const HELP_TEXT = `cdx - OpenCode account switcher

Usage:
  cdx switch
`;

const runSecurity = (args: string[]) => {
  const result = Bun.spawnSync({
    cmd: ["security", ...args],
    stderr: "pipe",
    stdout: "pipe",
  });

  if (result.exitCode !== 0) {
    const message = result.stderr.toString().trim();
    throw new Error(message || "Keychain command failed");
  }

  return result.stdout.toString();
};

const loadConfig = async (): Promise<Config> => {
  if (!existsSync(CONFIG_PATH)) {
    throw new Error(
      `Missing config at ${CONFIG_PATH}. Create accounts.json to list Keychain services.`,
    );
  }

  const raw = await readFile(CONFIG_PATH, "utf8");
  const parsed = JSON.parse(raw) as Config;

  if (!Array.isArray(parsed.accounts) || parsed.accounts.length === 0) {
    throw new Error("accounts.json must include a non-empty accounts array.");
  }

  if (typeof parsed.current !== "number" || Number.isNaN(parsed.current)) {
    parsed.current = 0;
  }

  return parsed;
};

const saveConfig = async (config: Config) => {
  await mkdir(CONFIG_DIR, { recursive: true });
  await writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
};

const loadKeychainPayload = (service: string): OAuthPayload => {
  const raw = runSecurity(["find-generic-password", "-s", service, "-w"]).trim();
  if (!raw) {
    throw new Error(`No Keychain payload found for ${service}.`);
  }

  const parsed = JSON.parse(raw) as OAuthPayload;

  if (!parsed.refresh || !parsed.access || !parsed.expires || !parsed.accountId) {
    throw new Error(`Keychain payload for ${service} is missing required fields.`);
  }

  return parsed;
};

const writeAuthFile = async (payload: OAuthPayload) => {
  const authDir = path.dirname(OPENCODE_AUTH_PATH);
  await mkdir(authDir, { recursive: true });

  const authJson = {
    openai: {
      type: "oauth",
      refresh: payload.refresh,
      access: payload.access,
      expires: payload.expires,
      accountId: payload.accountId,
    },
  };

  await writeFile(OPENCODE_AUTH_PATH, JSON.stringify(authJson, null, 2), "utf8");
};

const switchAccount = async () => {
  const config = await loadConfig();
  const nextIndex = (config.current + 1) % config.accounts.length;
  const nextAccount = config.accounts[nextIndex];

  if (!nextAccount?.keychainService) {
    throw new Error("Account entry missing keychainService.");
  }

  const payload = loadKeychainPayload(nextAccount.keychainService);
  await writeAuthFile(payload);

  config.current = nextIndex;
  await saveConfig(config);

  const message = `Switched to account ${payload.accountId}`;
  process.stdout.write(`${message}\n`);
};

const main = async () => {
  const [, , command] = process.argv;

  if (!command || command === "-h" || command === "--help") {
    process.stdout.write(`${HELP_TEXT}\n`);
    return;
  }

  if (command === "switch") {
    await switchAccount();
    return;
  }

  throw new Error(`Unknown command: ${command}`);
};

try {
  await main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
}
