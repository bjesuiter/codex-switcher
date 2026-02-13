import { spawn, type ChildProcess } from "node:child_process";

export type BrowserLauncher = {
  command: string;
  args: string[];
  label: string;
};

export type BrowserLaunchResult = {
  ok: boolean;
  launcher: BrowserLauncher;
  error?: string;
};

type SpawnLike = (
  command: string,
  args: string[],
  options: { detached: boolean; stdio: "ignore" },
) => ChildProcess;

export const getBrowserLauncher = (
  platform: NodeJS.Platform = process.platform,
  url: string,
): BrowserLauncher => {
  if (platform === "darwin") {
    return { command: "open", args: [url], label: "open" };
  }

  if (platform === "win32") {
    return {
      command: "cmd",
      args: ["/c", "start", "", url],
      label: "cmd /c start",
    };
  }

  return { command: "xdg-open", args: [url], label: "xdg-open" };
};

const isCommandAvailable = (
  command: string,
  platform: NodeJS.Platform = process.platform,
): boolean => {
  const probe = platform === "win32" ? "where" : "which";
  const result = Bun.spawnSync({
    cmd: [probe, command],
    stdout: "pipe",
    stderr: "pipe",
  });
  return result.exitCode === 0;
};

export const getBrowserLauncherCapability = (
  platform: NodeJS.Platform = process.platform,
): {
  command: string;
  label: string;
  available: boolean;
} => {
  const launcher = getBrowserLauncher(platform, "https://example.com");
  return {
    command: launcher.command,
    label: launcher.label,
    available: isCommandAvailable(launcher.command, platform),
  };
};

export const openBrowserUrl = (
  url: string,
  spawnImpl: SpawnLike = spawn,
): BrowserLaunchResult => {
  const launcher = getBrowserLauncher(process.platform, url);

  try {
    spawnImpl(launcher.command, launcher.args, {
      detached: true,
      stdio: "ignore",
    }).unref();
    return { ok: true, launcher };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, launcher, error: message };
  }
};
