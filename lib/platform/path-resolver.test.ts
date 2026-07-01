import { describe, expect, it } from "bun:test";
import path from "node:path";
import { resolveRuntimePaths } from "./path-resolver";

describe("resolveRuntimePaths", () => {
  it("uses XDG defaults on darwin/linux", () => {
    const home = "/Users/tester";
    const resolved = resolveRuntimePaths({
      platform: "darwin",
      env: {},
      homeDir: home,
    });

    expect(resolved.profile).toBe("xdg");
    expect(resolved.configDir).toBe(path.join(home, ".config", "cdx"));
    expect(resolved.authPath).toBe(
      path.join(home, ".local", "share", "opencode", "auth.json"),
    );
    expect(resolved.authCompatPaths).toEqual([]);
  });

  it("respects XDG env overrides", () => {
    const configHome = "/tmp/config-home";
    const dataHome = "/tmp/data-home";

    const resolved = resolveRuntimePaths({
      platform: "linux",
      env: {
        XDG_CONFIG_HOME: configHome,
        XDG_DATA_HOME: dataHome,
      },
      homeDir: "/home/tester",
    });

    expect(resolved.configDir).toBe(path.join(configHome, "cdx"));
    expect(resolved.authPath).toBe(path.join(dataHome, "opencode", "auth.json"));
    expect(resolved.authCompatPaths).toEqual([]);
  });

  it("uses XDG data default for OpenCode and LOCALAPPDATA compatibility on win32", () => {
    const resolved = resolveRuntimePaths({
      platform: "win32",
      env: {
        APPDATA: "C:\\Users\\tester\\AppData\\Roaming",
        LOCALAPPDATA: "C:\\Users\\tester\\AppData\\Local",
      },
      homeDir: "C:\\Users\\tester",
    });

    expect(resolved.profile).toBe("windows-appdata");
    expect(resolved.configDir).toBe(
      "C:\\Users\\tester\\AppData\\Roaming\\cdx",
    );
    expect(resolved.authPath).toBe(
      "C:\\Users\\tester\\.local\\share\\opencode\\auth.json",
    );
    expect(resolved.authCompatPaths).toEqual([
      "C:\\Users\\tester\\AppData\\Local\\opencode\\auth.json",
    ]);
  });

  it("respects XDG_DATA_HOME for OpenCode auth on win32", () => {
    const resolved = resolveRuntimePaths({
      platform: "win32",
      env: {
        APPDATA: "C:\\Users\\tester\\AppData\\Roaming",
        LOCALAPPDATA: "C:\\Users\\tester\\AppData\\Local",
        XDG_DATA_HOME: "D:\\xdg-data",
      },
      homeDir: "C:\\Users\\tester",
    });

    expect(resolved.authPath).toBe("D:\\xdg-data\\opencode\\auth.json");
    expect(resolved.authCompatPaths).toEqual([
      "C:\\Users\\tester\\AppData\\Local\\opencode\\auth.json",
    ]);
  });

  it("can resolve the same win32 primary and compatibility OpenCode auth path", () => {
    const resolved = resolveRuntimePaths({
      platform: "win32",
      env: {
        APPDATA: "C:\\Users\\tester\\AppData\\Roaming",
        LOCALAPPDATA: "C:\\Users\\tester\\AppData\\Local",
        XDG_DATA_HOME: "C:\\Users\\tester\\AppData\\Local",
      },
      homeDir: "C:\\Users\\tester",
    });

    expect(resolved.authPath).toBe(
      "C:\\Users\\tester\\AppData\\Local\\opencode\\auth.json",
    );
    expect(resolved.authCompatPaths).toEqual([
      "C:\\Users\\tester\\AppData\\Local\\opencode\\auth.json",
    ]);
  });

  it("respects PI_CODING_AGENT_DIR override", () => {
    const piAgentDir = "/tmp/pi-agent";
    const resolved = resolveRuntimePaths({
      platform: "linux",
      env: {
        PI_CODING_AGENT_DIR: piAgentDir,
      },
      homeDir: "/home/tester",
    });

    expect(resolved.piAuthPath).toBe(path.join(piAgentDir, "auth.json"));
  });
});
