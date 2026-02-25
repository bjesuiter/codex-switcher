import net from "node:net";
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

  it("reports port_in_use when callback port is occupied", async () => {
    const occupied = net.createServer();
    await new Promise<void>((resolve, reject) => {
      occupied.once("error", reject);
      occupied.listen(1455, "127.0.0.1", () => resolve());
    });

    try {
      const server = await startOAuthServer("expected");
      expect(server.ready).toBe(false);
      expect(server.reason).toBe("port_in_use");
      expect(server.errorCode).toBe("EADDRINUSE");
    } finally {
      await new Promise<void>((resolve) => occupied.close(() => resolve()));
    }
  });
});
