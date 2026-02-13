import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import {
  deleteKeychainPayload,
  getKeychainService,
  keychainPayloadExists,
  loadKeychainPayload,
  listKeychainAccounts,
  saveKeychainPayload,
} from "./keychain";
import type { OAuthPayload } from "./types";

const TEST_ACCOUNT_ID = "cdx-test-account-" + Date.now();
const TEST_PAYLOAD: OAuthPayload = {
  refresh: "test-refresh-token",
  access: "test-access-token",
  expires: Date.now() + 3600000,
  accountId: TEST_ACCOUNT_ID,
};

describe("keychain", () => {
  describe("getKeychainService", () => {
    it("prefixes accountId with cdx-openai-", () => {
      expect(getKeychainService("my-account")).toBe("cdx-openai-my-account");
    });

    it("handles empty accountId", () => {
      expect(getKeychainService("")).toBe("cdx-openai-");
    });
  });

  describe.skipIf(process.platform !== "darwin" || !!process.env.CI)("keychain operations", () => {
    afterEach(() => {
      try {
        deleteKeychainPayload(TEST_ACCOUNT_ID);
      } catch {
        // Ignore if not exists
      }
    });

    it("saves and loads keychain payload", () => {
      saveKeychainPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD);
      const loaded = loadKeychainPayload(TEST_ACCOUNT_ID);

      expect(loaded.refresh).toBe(TEST_PAYLOAD.refresh);
      expect(loaded.access).toBe(TEST_PAYLOAD.access);
      expect(loaded.expires).toBe(TEST_PAYLOAD.expires);
      expect(loaded.accountId).toBe(TEST_PAYLOAD.accountId);
    });

    it("keychainPayloadExists returns true for existing account", () => {
      saveKeychainPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD);
      expect(keychainPayloadExists(TEST_ACCOUNT_ID)).toBe(true);
    });

    it("keychainPayloadExists returns false for non-existing account", () => {
      expect(keychainPayloadExists("non-existent-account-xyz")).toBe(false);
    });

    it("deletes keychain payload", () => {
      saveKeychainPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD);
      expect(keychainPayloadExists(TEST_ACCOUNT_ID)).toBe(true);

      deleteKeychainPayload(TEST_ACCOUNT_ID);
      expect(keychainPayloadExists(TEST_ACCOUNT_ID)).toBe(false);
    });

    it("updates existing keychain payload", () => {
      saveKeychainPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD);

      const updatedPayload: OAuthPayload = {
        ...TEST_PAYLOAD,
        access: "updated-access-token",
      };
      saveKeychainPayload(TEST_ACCOUNT_ID, updatedPayload);

      const loaded = loadKeychainPayload(TEST_ACCOUNT_ID);
      expect(loaded.access).toBe("updated-access-token");
    });

    it("throws when loading non-existent account", () => {
      expect(() => loadKeychainPayload("non-existent-account-xyz")).toThrow();
    });
  });

  describe.skipIf(process.platform !== "darwin" || !!process.env.CI)("listKeychainAccounts", () => {
    beforeEach(() => {
      saveKeychainPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD);
    });

    afterEach(() => {
      try {
        deleteKeychainPayload(TEST_ACCOUNT_ID);
      } catch {
        // Ignore if not exists
      }
    });

    it("returns array", () => {
      const accounts = listKeychainAccounts();
      expect(Array.isArray(accounts)).toBe(true);
    });

    it("includes the test account", () => {
      const accounts = listKeychainAccounts();
      expect(accounts).toContain(TEST_ACCOUNT_ID);
    });
  });
});
