import path from "node:path";

export type ResolvedPathProfile = "xdg" | "windows-appdata";

export type PathResolverInput = {
  platform: NodeJS.Platform;
  env: NodeJS.ProcessEnv;
  homeDir: string;
};

export type ResolvedPathValues = {
  profile: ResolvedPathProfile;
  configDir: string;
  configPath: string;
  authPath: string;
  codexAuthPath: string;
  piAuthPath: string;
};

const envValue = (env: NodeJS.ProcessEnv, key: string): string | undefined => {
  const value = env[key];
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const resolvePiAuthPath = (
  env: NodeJS.ProcessEnv,
  homeDir: string,
  platform: NodeJS.Platform,
): string => {
  const piAgentDir = envValue(env, "PI_CODING_AGENT_DIR");
  if (piAgentDir) {
    return platform === "win32"
      ? path.win32.join(piAgentDir, "auth.json")
      : path.join(piAgentDir, "auth.json");
  }

  return platform === "win32"
    ? path.win32.join(homeDir, ".pi", "agent", "auth.json")
    : path.join(homeDir, ".pi", "agent", "auth.json");
};

const resolveXdgPaths = (
  env: NodeJS.ProcessEnv,
  homeDir: string,
  platform: NodeJS.Platform,
): ResolvedPathValues => {
  const configHome = envValue(env, "XDG_CONFIG_HOME") ?? path.join(homeDir, ".config");
  const dataHome = envValue(env, "XDG_DATA_HOME") ?? path.join(homeDir, ".local", "share");

  const configDir = path.join(configHome, "cdx");

  return {
    profile: "xdg",
    configDir,
    configPath: path.join(configDir, "accounts.json"),
    authPath: path.join(dataHome, "opencode", "auth.json"),
    codexAuthPath: path.join(homeDir, ".codex", "auth.json"),
    piAuthPath: resolvePiAuthPath(env, homeDir, platform),
  };
};

const resolveWindowsPaths = (env: NodeJS.ProcessEnv, homeDir: string): ResolvedPathValues => {
  const winPath = path.win32;
  const appData =
    envValue(env, "APPDATA") ?? winPath.join(homeDir, "AppData", "Roaming");
  const localAppData =
    envValue(env, "LOCALAPPDATA") ?? winPath.join(homeDir, "AppData", "Local");

  const configDir = winPath.join(appData, "cdx");

  return {
    profile: "windows-appdata",
    configDir,
    configPath: winPath.join(configDir, "accounts.json"),
    authPath: winPath.join(localAppData, "opencode", "auth.json"),
    codexAuthPath: winPath.join(homeDir, ".codex", "auth.json"),
    piAuthPath: resolvePiAuthPath(env, homeDir, "win32"),
  };
};

export const resolveRuntimePaths = (input: PathResolverInput): ResolvedPathValues => {
  if (input.platform === "win32") {
    return resolveWindowsPaths(input.env, input.homeDir);
  }

  return resolveXdgPaths(input.env, input.homeDir, input.platform);
};
