import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { mkdirSync, rmSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createTestPaths, resetPaths, setPaths } from "./paths";
import { saveConfig } from "./config";
import {
  resetSecretStoreAdapter,
  setSecretStoreAdapter,
  type SecretStoreAdapter,
} from "./secrets/store";
import { formatExpiry, getStatus } from "./status";
import type { OAuthPayload } from "./types";

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

describe("formatExpiry", () => {
  it("shows 'unknown' for null", () => {
    expect(formatExpiry(null)).toBe("unknown");
  });

  it("shows remaining time for future expiry", () => {
    const twoHoursFromNow = Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000;
    const result = formatExpiry(twoHoursFromNow);
    expect(result).toMatch(/^expires in 2h 15m$/);
  });

  it("shows days for long durations", () => {
    const threeDays = Date.now() + 3 * 24 * 60 * 60 * 1000;
    expect(formatExpiry(threeDays)).toMatch(/^expires in 3d$/);
  });

  it("shows EXPIRED for past expiry", () => {
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    const result = formatExpiry(oneHourAgo);
    expect(result).toMatch(/^EXPIRED 1h ago$/);
  });

  it("shows minutes for short durations", () => {
    const fiveMinutes = Date.now() + 5 * 60 * 1000;
    expect(formatExpiry(fiveMinutes)).toMatch(/^expires in 5m$/);
  });
});

const TEST_ACCOUNT = "status-test-" + Date.now();

const REALISTIC_PI_AUTH_FIXTURE = {
  "openai-codex": {
    type: "oauth",
    access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.access.token",
    refresh: "rt_mock_refresh_token",
    expires: 1771332000000,
    accountId: "1dM6Ly9hcGkub3B1bmFpLmNvbS9vcmdzLzQx",
  },
  anthropic: {
    type: "api_key",
    key: "sk-ant-mock",
  },
};

describe("getStatus", () => {
  let testDir: string;
  let secretStore: SecretStoreAdapter;

  beforeEach(() => {
    testDir = path.join(os.tmpdir(), `cdx-status-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(testDir, { recursive: true });
    setPaths(createTestPaths(testDir));

    secretStore = createInMemorySecretStoreAdapter();
    setSecretStoreAdapter(secretStore);
  });

  afterEach(() => {
    resetSecretStoreAdapter();
    resetPaths();
    try { rmSync(testDir, { recursive: true }); } catch {}
  });

  it("returns empty accounts when no config exists", async () => {
    const status = await getStatus();
    expect(status.accounts).toHaveLength(0);
  });

  it("returns account status with secure-store data", async () => {
    const payload: OAuthPayload = {
      refresh: "r",
      access: "a",
      expires: Date.now() + 3600000,
      accountId: TEST_ACCOUNT,
      idToken: "id",
    };
    await secretStore.save(TEST_ACCOUNT, payload);

    await saveConfig({
      current: 0,
      accounts: [{ accountId: TEST_ACCOUNT, keychainService: `cdx-openai-${TEST_ACCOUNT}`, label: "Test" }],
    });

    const status = await getStatus();
    expect(status.accounts).toHaveLength(1);
    expect(status.accounts[0].accountId).toBe(TEST_ACCOUNT);
    expect(status.accounts[0].label).toBe("Test");
    expect(status.accounts[0].isCurrent).toBe(true);
    expect(status.accounts[0].secureStoreExists).toBe(true);
    expect(status.accounts[0].hasIdToken).toBe(true);
    expect(status.accounts[0].expiresIn).toMatch(/^expires in/);
  });

  it("detects missing secure-store entry", async () => {
    await saveConfig({
      current: 0,
      accounts: [{ accountId: "nonexistent-account", keychainService: "cdx-openai-nonexistent" }],
    });

    const status = await getStatus();
    expect(status.accounts[0].secureStoreExists).toBe(false);
    expect(status.accounts[0].expiresIn).toBe("unknown");
  });

  it("reads opencode auth file account", async () => {
    const { authPath } = createTestPaths(testDir);
    await mkdir(path.dirname(authPath), { recursive: true });
    await writeFile(authPath, JSON.stringify({ openai: { accountId: "abc123" } }));

    const status = await getStatus();
    expect(status.opencodeAuth.exists).toBe(true);
    expect(status.opencodeAuth.accountId).toBe("abc123");
  });

  it("reads codex auth file account", async () => {
    const { codexAuthPath } = createTestPaths(testDir);
    await mkdir(path.dirname(codexAuthPath), { recursive: true });
    await writeFile(codexAuthPath, JSON.stringify({ tokens: { account_id: "xyz789" } }));

    const status = await getStatus();
    expect(status.codexAuth.exists).toBe(true);
    expect(status.codexAuth.accountId).toBe("xyz789");
  });

  it("reports auth files as not found when missing", async () => {
    const status = await getStatus();
    expect(status.opencodeAuth.exists).toBe(false);
    expect(status.codexAuth.exists).toBe(false);
    expect(status.piAuth.exists).toBe(false);
  });

  it("reads pi auth file account", async () => {
    const { piAuthPath } = createTestPaths(testDir);
    await mkdir(path.dirname(piAuthPath), { recursive: true });
    await writeFile(
      piAuthPath,
      JSON.stringify({ "openai-codex": { accountId: "pi-acc-123" } }),
    );

    const status = await getStatus();
    expect(status.piAuth.exists).toBe(true);
    expect(status.piAuth.accountId).toBe("pi-acc-123");
  });

  it("reads account from realistic pi auth.json shape", async () => {
    const { piAuthPath } = createTestPaths(testDir);
    await mkdir(path.dirname(piAuthPath), { recursive: true });
    await writeFile(piAuthPath, JSON.stringify(REALISTIC_PI_AUTH_FIXTURE, null, 2));

    const status = await getStatus();
    expect(status.piAuth.exists).toBe(true);
    expect(status.piAuth.accountId).toBe(
      REALISTIC_PI_AUTH_FIXTURE["openai-codex"].accountId,
    );
  });
});
