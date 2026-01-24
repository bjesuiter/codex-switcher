import os from "node:os";
import path from "node:path";

export type PathConfig = {
  configDir: string;
  configPath: string;
  authPath: string;
  codexAuthPath: string;
};

const defaultConfigDir = path.join(os.homedir(), ".config", "cdx");

const defaultPaths: PathConfig = {
  configDir: defaultConfigDir,
  configPath: path.join(defaultConfigDir, "accounts.json"),
  authPath: path.join(os.homedir(), ".local", "share", "opencode", "auth.json"),
  codexAuthPath: path.join(os.homedir(), ".codex", "auth.json"),
};

let currentPaths: PathConfig = { ...defaultPaths };

export const getPaths = (): PathConfig => currentPaths;

export const setPaths = (paths: Partial<PathConfig>): void => {
  currentPaths = { ...currentPaths, ...paths };
  if (paths.configDir && !paths.configPath) {
    currentPaths.configPath = path.join(paths.configDir, "accounts.json");
  }
};

export const resetPaths = (): void => {
  currentPaths = { ...defaultPaths };
};

export const createTestPaths = (testDir: string): PathConfig => ({
  configDir: path.join(testDir, "config"),
  configPath: path.join(testDir, "config", "accounts.json"),
  authPath: path.join(testDir, "auth", "auth.json"),
  codexAuthPath: path.join(testDir, "codex", "auth.json"),
});
