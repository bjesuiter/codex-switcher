import { describe, expect, it } from "bun:test";
import {
  buildUpdateInstallCommand,
  classifyInstallContextFromPath,
  detectInstallManagerFromPath,
  detectRuntime,
  resolveUpdateManager,
  type RuntimeKind,
} from "./update-manager";

describe("detectRuntime", () => {
  it("detects deno when Deno global is available", () => {
    expect(
      detectRuntime({
        hasDenoGlobal: true,
        versions: { bun: "1.0.0", node: "22.0.0" },
      }),
    ).toBe("deno");
  });

  it("detects bun when bun version is present", () => {
    expect(
      detectRuntime({
        hasDenoGlobal: false,
        versions: { bun: "1.2.0" },
      }),
    ).toBe("bun");
  });

  it("detects node when only node version is present", () => {
    expect(
      detectRuntime({
        hasDenoGlobal: false,
        versions: { node: "22.5.0" },
      }),
    ).toBe("node");
  });

  it("returns unknown when no runtime signal is available", () => {
    expect(
      detectRuntime({
        hasDenoGlobal: false,
        versions: {},
      }),
    ).toBe("unknown");
  });
});

describe("detectInstallManagerFromPath", () => {
  it("detects bun global install path", () => {
    expect(
      detectInstallManagerFromPath(
        "/Users/test/.bun/install/global/node_modules/@bjesuiter/codex-switcher/dist/cdx.mjs",
      ),
    ).toBe("bun");
  });

  it("detects npm global install path (unix)", () => {
    expect(
      detectInstallManagerFromPath(
        "/usr/local/lib/node_modules/@bjesuiter/codex-switcher/dist/cdx.mjs",
      ),
    ).toBe("npm");
  });

  it("detects npm global install path (windows)", () => {
    expect(
      detectInstallManagerFromPath(
        "C:\\Users\\tester\\AppData\\Roaming\\npm\\node_modules\\@bjesuiter\\codex-switcher\\dist\\cdx.mjs",
      ),
    ).toBe("npm");
  });

  it("detects deno install path", () => {
    expect(detectInstallManagerFromPath("/Users/test/.deno/bin/cdx")).toBe("deno");
  });

  it("returns unknown for unrelated path", () => {
    expect(detectInstallManagerFromPath("/Users/test/src/codex-switcher/cdx.ts")).toBe(
      "unknown",
    );
  });
});

describe("classifyInstallContextFromPath", () => {
  it("classifies known global install paths as global", () => {
    expect(
      classifyInstallContextFromPath(
        "/Users/test/.bun/install/global/node_modules/@bjesuiter/codex-switcher/dist/cdx.mjs",
      ),
    ).toBe("global");
  });

  it("classifies repository paths as local-or-dev", () => {
    expect(
      classifyInstallContextFromPath("/Users/test/src/codex-switcher/cdx.ts"),
    ).toBe("local-or-dev");
  });
});

describe("resolveUpdateManager", () => {
  it("prefers install manager over runtime in auto mode", () => {
    const resolved = resolveUpdateManager({
      requestedManager: "auto",
      runtime: "bun",
      installManager: "npm",
    });

    expect(resolved.ok).toBe(true);
    if (!resolved.ok) {
      throw new Error("Expected update manager to resolve");
    }

    expect(resolved.manager).toBe("npm");
    expect(resolved.source).toBe("install-manager");
  });

  it.each([
    ["bun", "bun"],
    ["node", "npm"],
    ["deno", "deno"],
  ] satisfies [RuntimeKind, "bun" | "npm" | "deno"][])(
    "falls back to runtime in auto mode: %s -> %s",
    (runtime, expected) => {
      const resolved = resolveUpdateManager({
        requestedManager: "auto",
        runtime,
        installManager: "unknown",
      });

      expect(resolved.ok).toBe(true);
      if (!resolved.ok) {
        throw new Error("Expected update manager to resolve");
      }

      expect(resolved.manager).toBe(expected);
      expect(resolved.source).toBe("runtime");
    },
  );

  it("uses explicit manager override", () => {
    const resolved = resolveUpdateManager({
      requestedManager: "npm",
      runtime: "bun",
      installManager: "bun",
    });

    expect(resolved.ok).toBe(true);
    if (!resolved.ok) {
      throw new Error("Expected update manager to resolve");
    }

    expect(resolved.manager).toBe("npm");
    expect(resolved.source).toBe("explicit");
  });

  it("fails when runtime and install manager are both unknown", () => {
    const resolved = resolveUpdateManager({
      requestedManager: "auto",
      runtime: "unknown",
      installManager: "unknown",
    });

    expect(resolved.ok).toBe(false);
  });
});

describe("buildUpdateInstallCommand", () => {
  const packageName = "@bjesuiter/codex-switcher";

  it("builds bun global update command", () => {
    expect(buildUpdateInstallCommand("bun", packageName)).toEqual({
      command: "bun",
      args: ["add", "-g", `${packageName}@latest`],
    });
  });

  it("builds npm global update command", () => {
    expect(buildUpdateInstallCommand("npm", packageName)).toEqual({
      command: "npm",
      args: ["i", "-g", `${packageName}@latest`],
    });
  });

  it("builds deno global update command", () => {
    expect(buildUpdateInstallCommand("deno", packageName)).toEqual({
      command: "deno",
      args: ["install", "-g", "-f", "-A", "-n", "cdx", `npm:${packageName}@latest`],
    });
  });
});
