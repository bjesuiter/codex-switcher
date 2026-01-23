import { describe, expect, it } from "bun:test";
import {
  createAuthorizationFlow,
  createState,
  decodeJWT,
  extractAccountId,
} from "./auth";
import { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URI, SCOPE } from "./constants";

describe("OAuth auth utilities", () => {
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
