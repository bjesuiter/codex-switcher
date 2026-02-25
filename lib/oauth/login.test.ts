import { describe, expect, it } from "bun:test";
import { parseOAuthCallbackInput } from "./login";

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
