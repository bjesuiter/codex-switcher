import { describe, expect, it } from "bun:test";
import {
  buildClipboardHelperCommand,
  buildOsc52Sequence,
  resolveClipboardTargets,
  tryCopyToClipboard,
} from "./clipboard";

describe("resolveClipboardTargets", () => {
  it("prefers pbcopy on macOS and keeps OSC52 as fallback", () => {
    const targets = resolveClipboardTargets(
      { platform: "darwin", env: {}, isTTY: true },
      (command) => command === "pbcopy",
    );

    expect(targets.map((target) => target.method)).toEqual(["pbcopy", "osc52"]);
  });

  it("prefers OSC52 in remote SSH sessions without display", () => {
    const targets = resolveClipboardTargets(
      {
        platform: "linux",
        env: { SSH_CONNECTION: "1" },
        isTTY: true,
      },
      () => true,
    );

    expect(targets.map((target) => target.method)).toEqual(["osc52"]);
  });

  it("prefers wl-copy on Wayland Linux sessions", () => {
    const targets = resolveClipboardTargets(
      {
        platform: "linux",
        env: { WAYLAND_DISPLAY: "wayland-1" },
        isTTY: true,
      },
      (command) => ["wl-copy", "xclip", "xsel"].includes(command),
    );

    expect(targets.map((target) => target.method)).toEqual(["wl-copy", "osc52"]);
  });
});

describe("buildOsc52Sequence", () => {
  it("wraps OSC52 payload for tmux", () => {
    const sequence = buildOsc52Sequence("hello", { TMUX: "1" });
    expect(sequence.startsWith("\u001bPtmux;\u001b\u001b]52;c;")).toBe(true);
    expect(sequence.endsWith("\u0007\u001b\\")).toBe(true);
  });
});

describe("tryCopyToClipboard", () => {
  it("uses local clipboard command when available", () => {
    const calls: Array<{ command: string; args: string[]; input: string }> = [];

    const result = tryCopyToClipboard("https://example.com", {
      platform: "darwin",
      env: {},
      isTTY: true,
      commandExistsImpl: (command) => command === "pbcopy",
      runCommandImpl: (command, args, input) => {
        calls.push({ command, args, input });
        return { ok: true };
      },
      writeStdoutImpl: () => {
        throw new Error("should not use OSC52");
      },
    });

    expect(result).toEqual({ ok: true, method: "pbcopy" });
    expect(calls).toHaveLength(1);
    expect(calls[0]).toEqual({ command: "pbcopy", args: [], input: "https://example.com" });
  });

  it("falls back to OSC52 when command copy fails", () => {
    const writes: string[] = [];

    const result = tryCopyToClipboard("https://example.com", {
      platform: "darwin",
      env: {},
      isTTY: true,
      commandExistsImpl: (command) => command === "pbcopy",
      runCommandImpl: () => ({ ok: false, error: "pbcopy failed" }),
      writeStdoutImpl: (chunk) => {
        writes.push(chunk);
      },
    });

    expect(result).toEqual({ ok: true, method: "osc52" });
    expect(writes).toHaveLength(1);
    expect(writes[0]).toBe(buildOsc52Sequence("https://example.com", {}));
  });
});

describe("buildClipboardHelperCommand", () => {
  it("builds a helper command for macOS", () => {
    const helper = buildClipboardHelperCommand(
      "https://example.com/a?b=1&c=2",
      { platform: "darwin", env: {}, isTTY: true },
      (command) => command === "pbcopy",
    );

    expect(helper).toContain("pbcopy");
    expect(helper).toContain("https://example.com/a?b=1&c=2");
  });
});
