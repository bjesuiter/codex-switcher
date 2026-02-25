import { describe, expect, it } from "bun:test";
import {
  parseLsofListeningProcess,
  parseOAuthCallbackInput,
  parseWindowsNetstatListeningPid,
} from "./login";

describe("parseOAuthCallbackInput", () => {
  it("parses a full callback URL", () => {
    const parsed = parseOAuthCallbackInput(
      "http://localhost:1455/auth/callback?code=abc123&state=state-1",
    );

    expect(parsed).toEqual({ code: "abc123", state: "state-1" });
  });

  it("parses query-string input", () => {
    const parsed = parseOAuthCallbackInput("code=abc123&state=state-1");
    expect(parsed).toEqual({ code: "abc123", state: "state-1" });
  });

  it("accepts raw code input", () => {
    const parsed = parseOAuthCallbackInput("abc123");
    expect(parsed).toEqual({ code: "abc123" });
  });

  it("returns null for empty input", () => {
    const parsed = parseOAuthCallbackInput("   ");
    expect(parsed).toBeNull();
  });
});

describe("parseLsofListeningProcess", () => {
  it("extracts pid and command from lsof machine output", () => {
    const parsed = parseLsofListeningProcess("p4242\ncnode\nf21\n");
    expect(parsed).toEqual({ pid: 4242, command: "node" });
  });

  it("returns null when no pid is present", () => {
    const parsed = parseLsofListeningProcess("ccode\nf21\n");
    expect(parsed).toBeNull();
  });
});

describe("parseWindowsNetstatListeningPid", () => {
  it("extracts listening pid for the given port", () => {
    const parsed = parseWindowsNetstatListeningPid(
      [
        "  Proto  Local Address          Foreign Address        State           PID",
        "  TCP    0.0.0.0:1455           0.0.0.0:0              LISTENING       7120",
      ].join("\n"),
      1455,
    );

    expect(parsed).toBe(7120);
  });

  it("returns null when port line is not present", () => {
    const parsed = parseWindowsNetstatListeningPid(
      "TCP    0.0.0.0:4444   0.0.0.0:0   LISTENING   22",
      1455,
    );

    expect(parsed).toBeNull();
  });
});
