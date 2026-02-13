import os from "node:os";
import path from "node:path";
import {
  resolveRuntimePaths,
  type ResolvedPathProfile,
  type ResolvedPathValues,
} from "./platform/path-resolver";

export type PathConfig = {
  configDir: string;
  configPath: string;
  authPath: string;
  codexAuthPath: string;
  piAuthPath: string;
};

export type PathResolutionInfo = {
  platform: NodeJS.Platform;
  profile: ResolvedPathProfile;
};

const toPathConfig = (paths: ResolvedPathValues): PathConfig => ({
  configDir: paths.configDir,
  configPath: paths.configPath,
  authPath: paths.authPath,
  codexAuthPath: paths.codexAuthPath,
  piAuthPath: paths.piAuthPath,
});

const createDefaultPaths = (): {
  paths: PathConfig;
  resolution: PathResolutionInfo;
} => {
  const resolved = resolveRuntimePaths({
    platform: process.platform,
    env: process.env,
    homeDir: os.homedir(),
  });

  return {
    paths: toPathConfig(resolved),
    resolution: {
      platform: process.platform,
      profile: resolved.profile,
    },
  };
};

const initial = createDefaultPaths();
let currentPaths: PathConfig = initial.paths;
let currentResolution: PathResolutionInfo = initial.resolution;

export const getPaths = (): PathConfig => currentPaths;

export const getPathResolutionInfo = (): PathResolutionInfo => currentResolution;

export const setPaths = (paths: Partial<PathConfig>): void => {
  currentPaths = { ...currentPaths, ...paths };
  if (paths.configDir && !paths.configPath) {
    currentPaths.configPath = path.join(paths.configDir, "accounts.json");
  }
};

export const resetPaths = (): void => {
  const next = createDefaultPaths();
  currentPaths = next.paths;
  currentResolution = next.resolution;
};

export const createTestPaths = (testDir: string): PathConfig => ({
  configDir: path.join(testDir, "config"),
  configPath: path.join(testDir, "config", "accounts.json"),
  authPath: path.join(testDir, "auth", "auth.json"),
  codexAuthPath: path.join(testDir, "codex", "auth.json"),
  piAuthPath: path.join(testDir, "pi", "auth.json"),
});
