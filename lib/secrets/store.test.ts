import { describe, expect, it } from "bun:test";
import { createRuntimeSecretStoreAdapter } from "./store";

describe("createRuntimeSecretStoreAdapter", () => {
  it("selects cross-keychain macOS adapter for darwin", () => {
    const adapter = createRuntimeSecretStoreAdapter("darwin");
    expect(adapter.id).toBe("macos-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });

  it("selects cross-keychain Linux adapter for linux", () => {
    const adapter = createRuntimeSecretStoreAdapter("linux");
    expect(adapter.id).toBe("linux-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });

  it("selects cross-keychain Windows adapter for win32", () => {
    const adapter = createRuntimeSecretStoreAdapter("win32");
    expect(adapter.id).toBe("windows-cross-keychain");
    expect(adapter.getCapability().available).toBe(true);
  });
});
