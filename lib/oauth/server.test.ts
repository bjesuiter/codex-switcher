import { describe, expect, it } from "bun:test";
import { startOAuthServer } from "./server";

const callbackUrl = (port: number, params: string) =>
  `http://127.0.0.1:${port}/auth/callback?${params}`;

describe("OAuth callback server", () => {
  it("resolves with null on error callbacks", async () => {
    const stateMismatchServer = await startOAuthServer("expected");

    const stateMismatchResponse = await fetch(
      callbackUrl(stateMismatchServer.port, "state=wrong"),
    );
    expect(stateMismatchResponse.status).toBe(400);

    const stateMismatchResult = await stateMismatchServer.waitForCode();
    expect(stateMismatchResult).toBeNull();
    stateMismatchServer.close();

    const missingCodeServer = await startOAuthServer("expected");

    const missingCodeResponse = await fetch(
      callbackUrl(missingCodeServer.port, "state=expected"),
    );
    expect(missingCodeResponse.status).toBe(400);

    const missingCodeResult = await missingCodeServer.waitForCode();
    expect(missingCodeResult).toBeNull();
    missingCodeServer.close();
  });
});
