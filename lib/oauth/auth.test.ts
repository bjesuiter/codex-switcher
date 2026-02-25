import { afterEach, describe, expect, it } from "bun:test";
import {
  createAuthorizationFlow,
  createState,
  decodeJWT,
  extractAccountId,
  pollDeviceAuthorizationToken,
  startDeviceAuthorizationFlow,
} from "./auth";
import { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URI, SCOPE } from "./constants";

const originalFetch = globalThis.fetch;

describe("OAuth auth utilities", () => {
  afterEach(() => {
    globalThis.fetch = originalFetch;
  });
  describe("createState", () => {
    it("generates a 32-character hex string", () => {
      const state = createState();
      expect(state).toHaveLength(32);
      expect(/^[0-9a-f]+$/.test(state)).toBe(true);
    });

    it("generates unique states", () => {
      const state1 = createState();
      const state2 = createState();
      expect(state1).not.toBe(state2);
    });
  });

  describe("createAuthorizationFlow", () => {
    it("returns pkce, state, and url", async () => {
      const flow = await createAuthorizationFlow();

      expect(flow.pkce).toBeDefined();
      expect(flow.pkce.verifier).toBeDefined();
      expect(flow.pkce.challenge).toBeDefined();
      expect(flow.state).toBeDefined();
      expect(flow.url).toBeDefined();
    });

    it("generates valid authorization URL", async () => {
      const flow = await createAuthorizationFlow();
      const url = new URL(flow.url);

      expect(url.origin + url.pathname).toBe(AUTHORIZE_URL);
      expect(url.searchParams.get("response_type")).toBe("code");
      expect(url.searchParams.get("client_id")).toBe(CLIENT_ID);
      expect(url.searchParams.get("redirect_uri")).toBe(REDIRECT_URI);
      expect(url.searchParams.get("scope")).toBe(SCOPE);
      expect(url.searchParams.get("code_challenge")).toBe(flow.pkce.challenge);
      expect(url.searchParams.get("code_challenge_method")).toBe("S256");
      expect(url.searchParams.get("state")).toBe(flow.state);
    });
  });

  describe("device OAuth helpers", () => {
    it("returns detailed failure when device-code endpoint is unavailable", async () => {
      globalThis.fetch = async () =>
        new Response(
          JSON.stringify({
            error: "unsupported_grant_type",
            error_description: "device_code flow is disabled",
          }),
          {
            status: 404,
            statusText: "Not Found",
            headers: { "Content-Type": "application/json" },
          },
        );

      const result = await startDeviceAuthorizationFlow();
      expect(result.type).toBe("failed");
      if (result.type === "failed") {
        expect(result.status).toBe(404);
        expect(result.oauthError).toBe("unsupported_grant_type");
        expect(result.responseBody).toContain("device_code flow is disabled");
      }
    });

    it("detects Cloudflare challenge responses on device-code endpoint", async () => {
      globalThis.fetch = async () =>
        new Response("<!DOCTYPE html><title>Just a moment...</title>", {
          status: 403,
          statusText: "Forbidden",
          headers: {
            "Content-Type": "text/html; charset=UTF-8",
            "cf-mitigated": "challenge",
          },
        });

      const result = await startDeviceAuthorizationFlow();
      expect(result.type).toBe("failed");
      if (result.type === "failed") {
        expect(result.status).toBe(403);
        expect(result.failureReason).toBe("cloudflare_challenge");
        expect(result.error).toContain("Cloudflare challenge");
      }
    });

    it("returns detailed polling failures for unknown error responses", async () => {
      globalThis.fetch = async () =>
        new Response(
          JSON.stringify({
            error: "invalid_client",
            error_description: "client id rejected",
          }),
          {
            status: 401,
            statusText: "Unauthorized",
            headers: { "Content-Type": "application/json" },
          },
        );

      const result = await pollDeviceAuthorizationToken("device-code-123");
      expect(result.type).toBe("failed");
      if (result.type === "failed") {
        expect(result.status).toBe(401);
        expect(result.oauthError).toBe("invalid_client");
        expect(result.responseBody).toContain("client id rejected");
      }
    });

    it("detects Cloudflare challenge responses while polling", async () => {
      globalThis.fetch = async () =>
        new Response("<html><body>Enable JavaScript and cookies to continue</body></html>", {
          status: 403,
          statusText: "Forbidden",
          headers: { "Content-Type": "text/html; charset=UTF-8" },
        });

      const result = await pollDeviceAuthorizationToken("device-code-123");
      expect(result.type).toBe("failed");
      if (result.type === "failed") {
        expect(result.status).toBe(403);
        expect(result.failureReason).toBe("cloudflare_challenge");
        expect(result.error).toContain("Cloudflare challenge");
      }
    });
  });

  describe("decodeJWT", () => {
    it("returns null for invalid token", () => {
      expect(decodeJWT("invalid")).toBeNull();
      expect(decodeJWT("a.b")).toBeNull();
      expect(decodeJWT("")).toBeNull();
    });

    it("decodes valid JWT payload", () => {
      const payload = { sub: "user123", email: "test@example.com" };
      const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64");
      const fakeJWT = `header.${encodedPayload}.signature`;

      const result = decodeJWT(fakeJWT);
      expect(result?.sub).toBe("user123");
      expect(result?.email).toBe("test@example.com");
    });
  });

  describe("extractAccountId", () => {
    it("extracts accountId from https://api.openai.com/auth claim", () => {
      const payload = {
        sub: "sub-user",
        "https://api.openai.com/auth": { user_id: "openai-user-123" },
      };
      const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64");
      const fakeJWT = `header.${encodedPayload}.signature`;

      const accountId = extractAccountId(fakeJWT);
      expect(accountId).toBe("openai-user-123");
    });

    it("falls back to sub claim", () => {
      const payload = { sub: "fallback-user" };
      const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64");
      const fakeJWT = `header.${encodedPayload}.signature`;

      const accountId = extractAccountId(fakeJWT);
      expect(accountId).toBe("fallback-user");
    });

    it("returns null for invalid token", () => {
      expect(extractAccountId("invalid")).toBeNull();
    });
  });
});
