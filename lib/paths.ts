import os from "node:os";
import path from "node:path";

export type PathConfig = {
  configDir: string;
  configPath: string;
  authPath: string;
  codexAuthPath: string;
  piAuthPath: string;
};

const defaultConfigDir = path.join(os.homedir(), ".config", "cdx");

const resolvePiAuthPath = (): string => {
  const piAgentDir = process.env.PI_CODING_AGENT_DIR?.trim();
  if (piAgentDir) return path.join(piAgentDir, "auth.json");
  return path.join(os.homedir(), ".pi", "agent", "auth.json");
};

const createDefaultPaths = (): PathConfig => ({
  configDir: defaultConfigDir,
  configPath: path.join(defaultConfigDir, "accounts.json"),
  authPath: path.join(os.homedir(), ".local", "share", "opencode", "auth.json"),
  codexAuthPath: path.join(os.homedir(), ".codex", "auth.json"),
  piAuthPath: resolvePiAuthPath(),
});

let currentPaths: PathConfig = createDefaultPaths();

export const getPaths = (): PathConfig => currentPaths;

export const setPaths = (paths: Partial<PathConfig>): void => {
  currentPaths = { ...currentPaths, ...paths };
  if (paths.configDir && !paths.configPath) {
    currentPaths.configPath = path.join(paths.configDir, "accounts.json");
  }
};

export const resetPaths = (): void => {
  currentPaths = createDefaultPaths();
};

export const createTestPaths = (testDir: string): PathConfig => ({
  configDir: path.join(testDir, "config"),
  configPath: path.join(testDir, "config", "accounts.json"),
  authPath: path.join(testDir, "auth", "auth.json"),
  codexAuthPath: path.join(testDir, "codex", "auth.json"),
  piAuthPath: path.join(testDir, "pi", "auth.json"),
});
