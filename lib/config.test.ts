import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { mkdirSync, rmSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  configExists,
  loadConfig,
  loadConfiguredSecretStoreSelection,
  saveConfig,
} from "./config";
import { createTestPaths, getPaths, resetPaths, setPaths } from "./paths";

describe("config", () => {
  let testDir: string;

  beforeEach(() => {
    testDir = path.join(
      os.tmpdir(),
      `cdx-config-test-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    );
    mkdirSync(testDir, { recursive: true });
    setPaths(createTestPaths(testDir));
  });

  afterEach(() => {
    resetPaths();
    try {
      rmSync(testDir, { recursive: true, force: true });
    } catch {}
  });

  describe("loadConfiguredSecretStoreSelection", () => {
    it("returns undefined when config file is missing", async () => {
      expect(configExists()).toBe(false);
      await expect(loadConfiguredSecretStoreSelection()).resolves.toBeUndefined();
    });

    it("returns secretStore from config when valid", async () => {
      await saveConfig({
        current: 0,
        secretStore: "legacy-keychain",
        accounts: [{ accountId: "acc", keychainService: "cdx-openai-acc" }],
      });

      await expect(loadConfiguredSecretStoreSelection()).resolves.toBe("legacy-keychain");
    });

    it("ignores invalid secretStore values", async () => {
      const { configDir, configPath } = getPaths();
      mkdirSync(configDir, { recursive: true });
      await writeFile(
        configPath,
        JSON.stringify({
          current: 0,
          secretStore: "invalid",
          accounts: [{ accountId: "acc", keychainService: "cdx-openai-acc" }],
        }),
        "utf8",
      );

      await expect(loadConfiguredSecretStoreSelection()).resolves.toBeUndefined();
    });
  });

  it("drops invalid secretStore values on loadConfig", async () => {
    const { configDir, configPath } = getPaths();
    mkdirSync(configDir, { recursive: true });
    await writeFile(
      configPath,
      JSON.stringify({
        current: 0,
        secretStore: "invalid",
        accounts: [{ accountId: "acc", keychainService: "cdx-openai-acc" }],
      }),
      "utf8",
    );

    const config = await loadConfig();
    expect(config.secretStore).toBeUndefined();
  });
});
