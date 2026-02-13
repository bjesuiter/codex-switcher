import { describe, expect, it } from "bun:test";
import { getBrowserLauncher } from "./browser";

describe("getBrowserLauncher", () => {
  const url = "https://example.com";

  it("uses open on darwin", () => {
    const launcher = getBrowserLauncher("darwin", url);
    expect(launcher.command).toBe("open");
    expect(launcher.args).toEqual([url]);
  });

  it("uses cmd /c start on win32", () => {
    const launcher = getBrowserLauncher("win32", url);
    expect(launcher.command).toBe("cmd");
    expect(launcher.args).toEqual(["/c", "start", "", url]);
  });

  it("uses xdg-open on linux", () => {
    const launcher = getBrowserLauncher("linux", url);
    expect(launcher.command).toBe("xdg-open");
    expect(launcher.args).toEqual([url]);
  });
});
