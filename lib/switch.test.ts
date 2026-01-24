import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { writeAllAuthFiles, writeAuthFile, writeCodexAuthFile } from "./auth";
import { loadConfig, saveConfig } from "./config";
import { deleteKeychainPayload, saveKeychainPayload } from "./keychain";
import { createTestPaths, getPaths, resetPaths, setPaths } from "./paths";
import type { Config, OAuthPayload } from "./types";

const TEST_ACCOUNT_1 = "switch-test-account-1-" + Date.now();
const TEST_ACCOUNT_2 = "switch-test-account-2-" + Date.now();

const TEST_PAYLOAD_1: OAuthPayload = {
  refresh: "refresh-token-1",
  access: "access-token-1",
  expires: Date.now() + 3600000,
  accountId: TEST_ACCOUNT_1,
  idToken: "id-token-1",
};

const TEST_PAYLOAD_2: OAuthPayload = {
  refresh: "refresh-token-2",
  access: "access-token-2",
  expires: Date.now() + 3600000,
  accountId: TEST_ACCOUNT_2,
};

describe.skipIf(!!process.env.CI)("switch command utilities", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = path.join(os.tmpdir(), `cdx-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(testDir, { recursive: true });

    const testPaths = createTestPaths(testDir);
    setPaths(testPaths);

    saveKeychainPayload(TEST_ACCOUNT_1, TEST_PAYLOAD_1);
    saveKeychainPayload(TEST_ACCOUNT_2, TEST_PAYLOAD_2);
  });

  afterEach(() => {
    resetPaths();

    try {
      deleteKeychainPayload(TEST_ACCOUNT_1);
    } catch {
      // Cleanup - ignore if not exists
    }
    try {
      deleteKeychainPayload(TEST_ACCOUNT_2);
    } catch {
      // Cleanup - ignore if not exists
    }
    try {
      rmSync(testDir, { recursive: true });
    } catch {
      // Cleanup - ignore if not exists
    }
  });

  describe("writeAuthFile", () => {
    it("writes auth.json in correct format to test directory", async () => {
      await writeAuthFile(TEST_PAYLOAD_1);

      const { authPath } = getPaths();
      expect(authPath.startsWith(testDir)).toBe(true);
      expect(existsSync(authPath)).toBe(true);

      const content = await readFile(authPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.openai.type).toBe("oauth");
      expect(parsed.openai.refresh).toBe(TEST_PAYLOAD_1.refresh);
      expect(parsed.openai.access).toBe(TEST_PAYLOAD_1.access);
      expect(parsed.openai.expires).toBe(TEST_PAYLOAD_1.expires);
      expect(parsed.openai.accountId).toBe(TEST_PAYLOAD_1.accountId);
    });
  });

  describe("writeCodexAuthFile", () => {
    it("writes codex auth.json in correct format", async () => {
      await writeCodexAuthFile(TEST_PAYLOAD_1);

      const { codexAuthPath } = getPaths();
      expect(codexAuthPath.startsWith(testDir)).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(true);

      const content = await readFile(codexAuthPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.OPENAI_API_KEY).toBeNull();
      expect(parsed.tokens.id_token).toBe("id-token-1");
      expect(parsed.tokens.access_token).toBe(TEST_PAYLOAD_1.access);
      expect(parsed.tokens.refresh_token).toBe(TEST_PAYLOAD_1.refresh);
      expect(parsed.tokens.account_id).toBe(TEST_PAYLOAD_1.accountId);
      expect(parsed.last_refresh).toBeDefined();
    });

    it("writes null id_token when not available", async () => {
      await writeCodexAuthFile(TEST_PAYLOAD_2);

      const { codexAuthPath } = getPaths();
      const content = await readFile(codexAuthPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.tokens.id_token).toBeNull();
    });
  });

  describe("writeAllAuthFiles", () => {
    it("writes both auth files when idToken is present", async () => {
      const result = await writeAllAuthFiles(TEST_PAYLOAD_1);

      const { authPath, codexAuthPath } = getPaths();
      expect(existsSync(authPath)).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(true);
      expect(result.codexWritten).toBe(true);
      expect(result.codexMissingIdToken).toBe(false);
    });

    it("skips codex auth and warns when idToken is missing", async () => {
      const result = await writeAllAuthFiles(TEST_PAYLOAD_2);

      const { authPath, codexAuthPath } = getPaths();
      expect(existsSync(authPath)).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(false);
      expect(result.codexWritten).toBe(false);
      expect(result.codexMissingIdToken).toBe(true);
    });
  });

  describe("config operations", () => {
    it("saves and loads config correctly from test directory", async () => {
      const testConfig: Config = {
        current: 0,
        accounts: [
          { accountId: TEST_ACCOUNT_1, keychainService: "cdx-openai-" + TEST_ACCOUNT_1 },
          { accountId: TEST_ACCOUNT_2, keychainService: "cdx-openai-" + TEST_ACCOUNT_2 },
        ],
      };

      await saveConfig(testConfig);

      const { configPath } = getPaths();
      expect(configPath.startsWith(testDir)).toBe(true);

      const loaded = await loadConfig();
      expect(loaded.current).toBe(0);
      expect(loaded.accounts.length).toBe(2);
      expect(loaded.accounts[0].accountId).toBe(TEST_ACCOUNT_1);
    });

    it("throws when config is missing", async () => {
      await expect(loadConfig()).rejects.toThrow("Missing config");
    });
  });

});

describe("cycle logic", () => {
  it("cycles correctly with two accounts", () => {
    const accounts = [{ accountId: "a" }, { accountId: "b" }];

    const nextIndex0 = (0 + 1) % accounts.length;
    expect(nextIndex0).toBe(1);

    const nextIndex1 = (1 + 1) % accounts.length;
    expect(nextIndex1).toBe(0);
  });

  it("handles single account", () => {
    const accounts = [{ accountId: "a" }];

    const nextIndex = (0 + 1) % accounts.length;
    expect(nextIndex).toBe(0);
  });
});
