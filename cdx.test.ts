import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "bun:test";
import pkg from "./package.json";
import { createProgram, getMacOSKeychainPromptWarning } from "./cdx";

describe("cdx CLI", () => {
  describe("createProgram", () => {
    it("creates a program with correct name", () => {
      const program = createProgram();
      expect(program.name()).toBe("cdx");
    });

    it("creates a program with version from package.json", () => {
      const program = createProgram();
      expect(program.version()).toBe(pkg.version);
    });

    it("has switch command registered", () => {
      const program = createProgram();
      const switchCmd = program.commands.find((cmd) => cmd.name() === "switch");
      expect(switchCmd).toBeDefined();
      expect(switchCmd?.description()).toBe(
        "Switch OpenAI account (interactive picker, by name, or --next)",
      );
    });

    it("has doctor command registered", () => {
      const program = createProgram();
      const doctorCmd = program.commands.find((cmd) => cmd.name() === "doctor");
      expect(doctorCmd).toBeDefined();
      expect(doctorCmd?.description()).toBe("Show auth file paths and runtime capabilities");
    });

    it("has update-self command registered", () => {
      const program = createProgram();
      const updateSelfCmd = program.commands.find((cmd) => cmd.name() === "update-self");
      expect(updateSelfCmd).toBeDefined();
      expect(updateSelfCmd?.description()).toBe("Update cdx to the latest version");
    });

    it("has migrate-secrets command registered", () => {
      const program = createProgram();
      const migrateCmd = program.commands.find((cmd) => cmd.name() === "migrate-secrets");
      expect(migrateCmd).toBeDefined();
      expect(migrateCmd?.description()).toBe(
        "Migrate macOS legacy keychain entries to cross-keychain and update config",
      );
    });

    it("has description set", () => {
      const program = createProgram();
      expect(program.description()).toBe(
        "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
      );
    });
  });

  describe("touch id warning helper", () => {
    it("returns no warning on non-macOS", () => {
      expect(getMacOSKeychainPromptWarning("auto", "linux", null)).toBeNull();
    });

    it("warns for legacy keychain on macOS", () => {
      expect(getMacOSKeychainPromptWarning("legacy-keychain", "darwin", null)).toContain(
        "legacy security CLI",
      );
    });

    it("warns for macOS CLI fallback backend", () => {
      expect(getMacOSKeychainPromptWarning("auto", "darwin", "macos")).toContain(
        "CLI fallback",
      );
    });

    it("returns no warning for native macOS backend", () => {
      expect(getMacOSKeychainPromptWarning("auto", "darwin", "native-macos")).toBeNull();
    });
  });

  describe("CLI execution", () => {
    it("shows help with --help flag", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "--help"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(output).toContain("Usage: cdx");
      expect(output).toContain("switch");
      expect(output).toContain("migrate-secrets");
      expect(output).toContain("doctor");
      expect(output).toContain("--help");
      expect(output).toContain("--version");
      expect(output).toContain("--secret-store");
    });

    it("shows doctor-specific help for keychain ACL check flag", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "doctor", "--help"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(output).toContain("--check-keychain-acl");
    });

    it("shows login-specific help for device flow flag", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "login", "--help"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(output).toContain("--device-flow");
    });

    it("shows relogin-specific help for device flow flag", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "relogin", "--help"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(output).toContain("--device-flow");
    });

    it("shows version with --version flag", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "--version"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString().trim();
      expect(output).toBe(pkg.version);
    });

    it("prints update-self dry-run command for npm", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "update-self", "--dry-run", "--manager", "npm"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(result.exitCode).toBe(0);
      expect(output).toContain("Selected manager: npm");
      expect(output).toContain("npm i -g @bjesuiter/codex-switcher@latest");
    });

    it("refuses auto update-self in local/dev execution context", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "update-self", "--dry-run"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const stderr = result.stderr.toString();
      expect(result.exitCode).toBe(1);
      expect(stderr).toContain("local/dev checkout");
      expect(stderr).toContain("--manager");
    });

    it("generates completion script for zsh", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "complete", "zsh"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(result.exitCode).toBe(0);
      expect(output).toContain("#compdef cdx");
    });

    it("responds to shell completion parse requests", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "complete", "--", "s"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(result.exitCode).toBe(0);
      expect(output).toContain("switch");
      expect(output).toContain("status");
    });

    it("completes --secret-store values", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "complete", "--", "--secret-store="],
        stdout: "pipe",
        stderr: "pipe",
      });

      const output = result.stdout.toString();
      expect(result.exitCode).toBe(0);
      expect(output).toContain("auto");
      expect(output).toContain("legacy-keychain");
    });

    it("completes account arguments from accounts.json", async () => {
      const tempConfigHome = mkdtempSync(path.join(os.tmpdir(), "cdx-complete-"));
      const configDir = path.join(tempConfigHome, "cdx");
      mkdirSync(configDir, { recursive: true });
      writeFileSync(
        path.join(configDir, "accounts.json"),
        JSON.stringify({
          current: 0,
          accounts: [
            { accountId: "acc-work", keychainService: "cdx-openai-acc-work", label: "Work" },
            { accountId: "acc-personal", keychainService: "cdx-openai-acc-personal" },
          ],
        }),
        "utf8",
      );

      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "complete", "--", "switch", ""],
        stdout: "pipe",
        stderr: "pipe",
        env: {
          ...process.env,
          XDG_CONFIG_HOME: tempConfigHome,
          APPDATA: tempConfigHome,
        },
      });

      const output = result.stdout.toString();
      expect(result.exitCode).toBe(0);
      expect(output).toContain("acc-work");
      expect(output).toContain("Work");
      expect(output).toContain("acc-personal");
    });

    it("rejects invalid --secret-store values", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "--secret-store", "invalid", "version"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const stderr = result.stderr.toString();
      expect(result.exitCode).toBe(1);
      expect(stderr).toContain("Invalid value 'invalid' for --secret-store");
    });

    it("exits non-zero when login fails", async () => {
      const program = createProgram({
        performLogin: async () => null,
      });

      const originalExit = process.exit;
      let exitCode: number | undefined;
      process.exit = ((code?: number) => {
        exitCode = code;
        throw new Error("exit");
      }) as typeof process.exit;

      try {
        await program.parseAsync(["node", "cdx", "login"]);
      } catch {
        // ignore exit override error
      } finally {
        process.exit = originalExit;
      }

      expect(exitCode).toBe(1);
    });

    it.skipIf(!!process.env.CI)("runs interactive mode by default (no command)", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts"],
        stdout: "pipe",
        stderr: "pipe",
        timeout: 1000,
      });

      const output = result.stdout.toString();
      expect(output).toContain("cdx - OpenAI Account Switcher");
    });

    it("fails gracefully with unknown command", async () => {
      const result = Bun.spawnSync({
        cmd: ["bun", "run", "cdx.ts", "unknown-command"],
        stdout: "pipe",
        stderr: "pipe",
      });

      const stderr = result.stderr.toString();
      expect(stderr).toContain("too many arguments");
    });
  });
});
