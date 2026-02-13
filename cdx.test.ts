import { describe, expect, it } from "bun:test";
import pkg from "./package.json";
import { createProgram } from "./cdx";

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

    it("has description set", () => {
      const program = createProgram();
      expect(program.description()).toBe(
        "OpenAI account switcher - manage multiple OpenAI Pro subscriptions",
      );
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
      expect(output).toContain("doctor");
      expect(output).toContain("--help");
      expect(output).toContain("--version");
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
