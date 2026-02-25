import { describe, expect, it } from "bun:test";
import { EventEmitter } from "node:events";
import { getBrowserLauncher, openBrowserUrl } from "./browser";

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

describe("openBrowserUrl", () => {
  const url = "https://example.com";

  it("returns launcher_missing when command is unavailable", () => {
    const result = openBrowserUrl(url, {
      platform: "linux",
      isCommandAvailableImpl: () => false,
    });

    expect(result.ok).toBe(false);
    expect(result.reason).toBe("launcher_missing");
  });

  it("returns spawn_failed when spawn throws", () => {
    const result = openBrowserUrl(url, {
      platform: "linux",
      isCommandAvailableImpl: () => true,
      spawnImpl: () => {
        throw new Error("spawn failed");
      },
    });

    expect(result.ok).toBe(false);
    expect(result.reason).toBe("spawn_failed");
  });

  it("attaches an error handler to child process", () => {
    class FakeChild extends EventEmitter {
      unrefCalled = false;

      unref() {
        this.unrefCalled = true;
      }
    }

    const child = new FakeChild();

    const result = openBrowserUrl(url, {
      platform: "linux",
      isCommandAvailableImpl: () => true,
      spawnImpl: () => child as any,
    });

    expect(result.ok).toBe(true);
    expect(child.unrefCalled).toBe(true);

    // Should not throw because openBrowserUrl installs a listener for this event.
    expect(() => child.emit("error", new Error("ENOENT"))).not.toThrow();
  });
});
