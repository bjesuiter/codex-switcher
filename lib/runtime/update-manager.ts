export type RuntimeKind = "bun" | "node" | "deno" | "unknown";
export type InstallManagerKind = "bun" | "npm" | "deno" | "unknown";
export type UpdateManager = "bun" | "npm" | "deno";
export type UpdateManagerOption = "auto" | UpdateManager;

export type RuntimeDetectionInput = {
  hasDenoGlobal?: boolean;
  versions?: {
    bun?: string;
    node?: string;
  };
};

export const detectRuntime = (input: RuntimeDetectionInput = {}): RuntimeKind => {
  const hasDenoGlobal =
    input.hasDenoGlobal ?? ("Deno" in globalThis && typeof (globalThis as { Deno?: unknown }).Deno !== "undefined");
  const versions = input.versions ?? process.versions;

  if (hasDenoGlobal) {
    return "deno";
  }

  if (typeof versions.bun === "string" && versions.bun.length > 0) {
    return "bun";
  }

  if (typeof versions.node === "string" && versions.node.length > 0) {
    return "node";
  }

  return "unknown";
};

const normalizePath = (value: string): string => value.replaceAll("\\", "/").toLowerCase();

export const detectInstallManagerFromPath = (
  executablePath: string | null | undefined,
): InstallManagerKind => {
  if (!executablePath) {
    return "unknown";
  }

  const normalizedPath = normalizePath(executablePath);

  if (normalizedPath.includes("/.bun/install/global/node_modules/")) {
    return "bun";
  }

  if (normalizedPath.includes("/lib/node_modules/") || normalizedPath.includes("/npm/node_modules/")) {
    return "npm";
  }

  if (normalizedPath.includes("/.deno/") || normalizedPath.includes("/deno/bin/")) {
    return "deno";
  }

  return "unknown";
};

export type InstallContext = "global" | "local-or-dev" | "unknown";

export const classifyInstallContextFromPath = (
  executablePath: string | null | undefined,
): InstallContext => {
  if (!executablePath) {
    return "unknown";
  }

  const manager = detectInstallManagerFromPath(executablePath);
  if (manager !== "unknown") {
    return "global";
  }

  const normalizedPath = normalizePath(executablePath);
  if (
    normalizedPath.endsWith("/cdx.ts")
    || normalizedPath.includes("/codex-switcher/")
    || normalizedPath.includes("/node_modules/.bin/")
  ) {
    return "local-or-dev";
  }

  return "unknown";
};

export type ResolveUpdateManagerInput = {
  requestedManager: UpdateManagerOption;
  runtime: RuntimeKind;
  installManager: InstallManagerKind;
};

export type ResolveUpdateManagerResult =
  | {
    ok: true;
    manager: UpdateManager;
    source: "explicit" | "install-manager" | "runtime";
  }
  | {
    ok: false;
  };

const resolveFromRuntime = (runtime: RuntimeKind): UpdateManager | null => {
  if (runtime === "bun") return "bun";
  if (runtime === "node") return "npm";
  if (runtime === "deno") return "deno";
  return null;
};

export const resolveUpdateManager = (
  input: ResolveUpdateManagerInput,
): ResolveUpdateManagerResult => {
  if (input.requestedManager !== "auto") {
    return {
      ok: true,
      manager: input.requestedManager,
      source: "explicit",
    };
  }

  if (input.installManager !== "unknown") {
    return {
      ok: true,
      manager: input.installManager,
      source: "install-manager",
    };
  }

  const fromRuntime = resolveFromRuntime(input.runtime);
  if (fromRuntime) {
    return {
      ok: true,
      manager: fromRuntime,
      source: "runtime",
    };
  }

  return { ok: false };
};

export const buildUpdateInstallCommand = (
  manager: UpdateManager,
  packageName: string,
): { command: string; args: string[] } => {
  if (manager === "bun") {
    return {
      command: "bun",
      args: ["add", "-g", `${packageName}@latest`],
    };
  }

  if (manager === "npm") {
    return {
      command: "npm",
      args: ["i", "-g", `${packageName}@latest`],
    };
  }

  return {
    command: "deno",
    args: ["install", "-g", "-f", "-A", "-n", "cdx", `npm:${packageName}@latest`],
  };
};
