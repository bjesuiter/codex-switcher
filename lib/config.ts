import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { getPaths } from "./paths";
import type { Config, SecretStoreSelection } from "./types";

const isSecretStoreSelection = (value: unknown): value is SecretStoreSelection =>
  value === "auto" || value === "legacy-keychain";

export const loadConfiguredSecretStoreSelection = async (): Promise<
  SecretStoreSelection | undefined
> => {
  const { configPath } = getPaths();

  if (!existsSync(configPath)) {
    return undefined;
  }

  try {
    const raw = await readFile(configPath, "utf8");
    const parsed = JSON.parse(raw) as Partial<Config>;
    return isSecretStoreSelection(parsed.secretStore)
      ? parsed.secretStore
      : undefined;
  } catch {
    return undefined;
  }
};

export const loadConfig = async (): Promise<Config> => {
  const { configPath } = getPaths();

  if (!existsSync(configPath)) {
    throw new Error(
      `Missing config at ${configPath}. Create accounts.json to list Keychain services.`,
    );
  }

  const raw = await readFile(configPath, "utf8");
  const parsed = JSON.parse(raw) as Config;

  if (!Array.isArray(parsed.accounts) || parsed.accounts.length === 0) {
    throw new Error("accounts.json must include a non-empty accounts array.");
  }

  if (typeof parsed.current !== "number" || Number.isNaN(parsed.current)) {
    parsed.current = 0;
  }

  if (!isSecretStoreSelection(parsed.secretStore)) {
    delete parsed.secretStore;
  }

  return parsed;
};

export const saveConfig = async (config: Config): Promise<void> => {
  const { configDir, configPath } = getPaths();
  await mkdir(configDir, { recursive: true });
  await writeFile(configPath, JSON.stringify(config, null, 2), "utf8");
};

export const configExists = (): boolean => {
  const { configPath } = getPaths();
  return existsSync(configPath);
};
