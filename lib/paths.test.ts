import { afterEach, describe, expect, it } from "bun:test";
import os from "node:os";
import path from "node:path";
import { getPaths, resetPaths } from "./paths";

const originalPiAgentDir = process.env.PI_CODING_AGENT_DIR;

afterEach(() => {
  if (originalPiAgentDir === undefined) {
    delete process.env.PI_CODING_AGENT_DIR;
  } else {
    process.env.PI_CODING_AGENT_DIR = originalPiAgentDir;
  }
  resetPaths();
});

describe("paths", () => {
  it("uses default pi auth path when PI_CODING_AGENT_DIR is not set", () => {
    delete process.env.PI_CODING_AGENT_DIR;
    resetPaths();

    expect(getPaths().piAuthPath).toBe(path.join(os.homedir(), ".pi", "agent", "auth.json"));
  });

  it("uses PI_CODING_AGENT_DIR override for pi auth path", () => {
    process.env.PI_CODING_AGENT_DIR = "/tmp/pi-coding-agent";
    resetPaths();

    expect(getPaths().piAuthPath).toBe("/tmp/pi-coding-agent/auth.json");
  });
});
