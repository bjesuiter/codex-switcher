import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  dedupeAuthPaths,
  writeAllAuthFiles,
  writeAuthFile,
  writeCodexAuthFile,
  writePiAuthFile,
} from "./auth";
import { loadConfig, saveConfig } from "./config";
import { createTestPaths, getPaths, resetPaths, setPaths } from "./paths";
import { writeActiveAuthFilesIfCurrent } from "./refresh";
import {
  resetSecretStoreAdapter,
  setSecretStoreAdapter,
  type SecretStoreAdapter,
} from "./secrets/store";
import type { Config, OAuthPayload } from "./types";

const TEST_ACCOUNT_1 = "switch-test-account-1-" + Date.now();
const TEST_ACCOUNT_2 = "switch-test-account-2-" + Date.now();
const originalPiAgentDir = process.env.PI_CODING_AGENT_DIR;

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

const createInMemorySecretStoreAdapter = (
  initialPayloads: OAuthPayload[] = [],
): SecretStoreAdapter => {
  const payloads = new Map<string, OAuthPayload>(
    initialPayloads.map((payload) => [payload.accountId, payload]),
  );

  return {
    id: "test-memory-secret-store",
    label: "Test memory secret store",
    getServiceName: (accountId: string) => `test-${accountId}`,
    save: async (accountId: string, payload: OAuthPayload) => {
      payloads.set(accountId, payload);
    },
    load: async (accountId: string) => {
      const payload = payloads.get(accountId);
      if (!payload) {
        throw new Error(`No stored credentials found for account ${accountId}.`);
      }
      return payload;
    },
    delete: async (accountId: string) => {
      payloads.delete(accountId);
    },
    exists: async (accountId: string) => payloads.has(accountId),
    listAccountIds: async () => [...payloads.keys()],
    getCapability: () => ({ available: true }),
  };
};

describe("switch command utilities", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = path.join(os.tmpdir(), `cdx-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(testDir, { recursive: true });

    const testPaths = createTestPaths(testDir);
    setPaths(testPaths);

    setSecretStoreAdapter(
      createInMemorySecretStoreAdapter([TEST_PAYLOAD_1, TEST_PAYLOAD_2]),
    );
  });

  afterEach(() => {
    if (originalPiAgentDir === undefined) {
      delete process.env.PI_CODING_AGENT_DIR;
    } else {
      process.env.PI_CODING_AGENT_DIR = originalPiAgentDir;
    }
    resetSecretStoreAdapter();
    resetPaths();

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

    it("preserves non-openai sections in existing auth.json", async () => {
      const { authPath } = getPaths();
      const authDir = path.dirname(authPath);
      mkdirSync(authDir, { recursive: true });

      const existing = {
        anthropic: { key: "sk-ant-xxx", model: "claude-4" },
        custom: { foo: "bar" },
      };
      await writeFile(authPath, JSON.stringify(existing, null, 2), "utf8");

      await writeAuthFile(TEST_PAYLOAD_1);

      const content = await readFile(authPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.anthropic.key).toBe("sk-ant-xxx");
      expect(parsed.anthropic.model).toBe("claude-4");
      expect(parsed.custom.foo).toBe("bar");
      expect(parsed.openai.type).toBe("oauth");
      expect(parsed.openai.accountId).toBe(TEST_PAYLOAD_1.accountId);
    });

    it("writes OpenCode auth to compatibility paths while preserving each file", async () => {
      const paths = getPaths();
      const compatPath = path.join(testDir, "compat", "opencode", "auth.json");
      setPaths({ authCompatPaths: [compatPath] });

      mkdirSync(path.dirname(paths.authPath), { recursive: true });
      mkdirSync(path.dirname(compatPath), { recursive: true });
      await writeFile(
        paths.authPath,
        JSON.stringify({ "opencode-go": { type: "api", key: "keep-primary" } }, null, 2),
        "utf8",
      );
      await writeFile(
        compatPath,
        JSON.stringify({ openrouter: { type: "api", key: "keep-compat" } }, null, 2),
        "utf8",
      );

      await writeAuthFile(TEST_PAYLOAD_1);

      const primary = JSON.parse(await readFile(paths.authPath, "utf8"));
      const compat = JSON.parse(await readFile(compatPath, "utf8"));

      expect(primary["opencode-go"].key).toBe("keep-primary");
      expect(primary.openai.accountId).toBe(TEST_PAYLOAD_1.accountId);
      expect(compat.openrouter.key).toBe("keep-compat");
      expect(compat.openai.accountId).toBe(TEST_PAYLOAD_1.accountId);
    });

    it("deduplicates OpenCode auth write paths", () => {
      const authPath = path.join(testDir, "auth", "auth.json");

      expect(dedupeAuthPaths([authPath, authPath])).toEqual([authPath]);
    });

    it("deduplicates Windows OpenCode auth paths case-insensitively", () => {
      const authPath = "C:\\Users\\alice\\AppData\\Local\\opencode\\auth.json";

      expect(
        dedupeAuthPaths(
          [authPath, "c:\\users\\alice\\appdata\\local\\opencode\\auth.json"],
          "win32",
        ),
      ).toEqual([authPath]);
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

    it("preserves existing fields in codex auth.json", async () => {
      const { codexAuthPath } = getPaths();
      const codexAuthDir = path.dirname(codexAuthPath);
      mkdirSync(codexAuthDir, { recursive: true });

      const existing = {
        OPENAI_API_KEY: "sk-existing-key",
        tokens: { custom_field: "keep-me" },
        some_other_setting: true,
      };
      await writeFile(codexAuthPath, JSON.stringify(existing, null, 2), "utf8");

      await writeCodexAuthFile(TEST_PAYLOAD_1);

      const content = await readFile(codexAuthPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.OPENAI_API_KEY).toBe("sk-existing-key");
      expect(parsed.some_other_setting).toBe(true);
      expect(parsed.tokens.custom_field).toBe("keep-me");
      expect(parsed.tokens.access_token).toBe(TEST_PAYLOAD_1.access);
      expect(parsed.tokens.refresh_token).toBe(TEST_PAYLOAD_1.refresh);
      expect(parsed.tokens.account_id).toBe(TEST_PAYLOAD_1.accountId);
      expect(parsed.tokens.id_token).toBe("id-token-1");
    });
  });

  describe("writePiAuthFile", () => {
    it("writes pi auth.json in correct format", async () => {
      await writePiAuthFile(TEST_PAYLOAD_1);

      const { piAuthPath } = getPaths();
      expect(piAuthPath.startsWith(testDir)).toBe(true);
      expect(existsSync(piAuthPath)).toBe(true);

      const content = await readFile(piAuthPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed["openai-codex"].type).toBe("oauth");
      expect(parsed["openai-codex"].access).toBe(TEST_PAYLOAD_1.access);
      expect(parsed["openai-codex"].refresh).toBe(TEST_PAYLOAD_1.refresh);
      expect(parsed["openai-codex"].expires).toBe(TEST_PAYLOAD_1.expires);
      expect(parsed["openai-codex"].accountId).toBe(TEST_PAYLOAD_1.accountId);
    });

    it("preserves existing sections in pi auth.json", async () => {
      const { piAuthPath } = getPaths();
      const piAuthDir = path.dirname(piAuthPath);
      mkdirSync(piAuthDir, { recursive: true });

      const existing = {
        foo: "bar",
        "openai-other": { enabled: true },
      };
      await writeFile(piAuthPath, JSON.stringify(existing, null, 2), "utf8");

      await writePiAuthFile(TEST_PAYLOAD_1);

      const content = await readFile(piAuthPath, "utf8");
      const parsed = JSON.parse(content);

      expect(parsed.foo).toBe("bar");
      expect(parsed["openai-other"].enabled).toBe(true);
      expect(parsed["openai-codex"].accountId).toBe(TEST_PAYLOAD_1.accountId);
    });

    it("throws when PI_CODING_AGENT_DIR points to a non-directory path", async () => {
      const blockedPiAgentDir = path.join(testDir, "pi-agent-dir-as-file");
      await writeFile(blockedPiAgentDir, "not-a-directory", "utf8");

      process.env.PI_CODING_AGENT_DIR = blockedPiAgentDir;
      resetPaths();

      expect(getPaths().piAuthPath).toBe(path.join(blockedPiAgentDir, "auth.json"));
      await expect(writePiAuthFile(TEST_PAYLOAD_1)).rejects.toThrow(/EEXIST|ENOTDIR/);
    });
  });

  describe("writeAllAuthFiles", () => {
    it("writes both auth files when idToken is present", async () => {
      const result = await writeAllAuthFiles(TEST_PAYLOAD_1);

      const { authPath, codexAuthPath, piAuthPath } = getPaths();
      expect(existsSync(authPath)).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(true);
      expect(existsSync(piAuthPath)).toBe(true);
      expect(result.piWritten).toBe(true);
      expect(result.codexWritten).toBe(true);
      expect(result.codexMissingIdToken).toBe(false);
    });

    it("clears codex auth when idToken is missing", async () => {
      const { codexAuthPath } = getPaths();
      await mkdirSync(path.dirname(codexAuthPath), { recursive: true });
      await writeFile(codexAuthPath, JSON.stringify({ tokens: { account_id: "stale" } }, null, 2), "utf8");
      expect(existsSync(codexAuthPath)).toBe(true);

      const result = await writeAllAuthFiles(TEST_PAYLOAD_2);

      const { authPath, piAuthPath } = getPaths();
      expect(existsSync(authPath)).toBe(true);
      expect(existsSync(piAuthPath)).toBe(true);
      expect(result.piWritten).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(false);
      expect(result.codexWritten).toBe(false);
      expect(result.codexMissingIdToken).toBe(true);
      expect(result.codexCleared).toBe(true);
    });
  });

  describe("writeActiveAuthFilesIfCurrent", () => {
    it("updates auth files when refreshed account is current", async () => {
      const config: Config = {
        current: 0,
        accounts: [
          { accountId: TEST_ACCOUNT_1, keychainService: "cdx-openai-" + TEST_ACCOUNT_1 },
          { accountId: TEST_ACCOUNT_2, keychainService: "cdx-openai-" + TEST_ACCOUNT_2 },
        ],
      };

      await saveConfig(config);

      const result = await writeActiveAuthFilesIfCurrent(TEST_ACCOUNT_1);

      const { authPath, codexAuthPath, piAuthPath } = getPaths();
      expect(result?.piWritten).toBe(true);
      expect(result?.codexWritten).toBe(true);
      expect(existsSync(authPath)).toBe(true);
      expect(existsSync(codexAuthPath)).toBe(true);
      expect(existsSync(piAuthPath)).toBe(true);
    });

    it("skips auth file updates when refreshed account is not current", async () => {
      const config: Config = {
        current: 0,
        accounts: [
          { accountId: TEST_ACCOUNT_1, keychainService: "cdx-openai-" + TEST_ACCOUNT_1 },
          { accountId: TEST_ACCOUNT_2, keychainService: "cdx-openai-" + TEST_ACCOUNT_2 },
        ],
      };

      await saveConfig(config);

      const result = await writeActiveAuthFilesIfCurrent(TEST_ACCOUNT_2);

      const { authPath, codexAuthPath, piAuthPath } = getPaths();
      expect(result).toBeNull();
      expect(existsSync(authPath)).toBe(false);
      expect(existsSync(codexAuthPath)).toBe(false);
      expect(existsSync(piAuthPath)).toBe(false);
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
