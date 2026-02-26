import { describe, expect, it } from "bun:test";
import { classifyLinuxSecureStoreError } from "./linux-cross-keychain";

describe("classifyLinuxSecureStoreError", () => {
  it("classifies missing-entry native secret-service errors", () => {
    const error = new Error(
      "Native secret service error: no matching entry found in secure storage",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("missing_entry");
  });

  it("classifies missing-entry secret-service 'no result found' errors", () => {
    const error = new Error(
      "Native secret service errror: Couldn't access platform secure storage: Secret Service: no result found",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("missing_entry");
  });

  it("classifies store-unavailable initialization errors", () => {
    const error = new Error(
      "Unable to initialize Linux secure-store backend via cross-keychain.",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("store_unavailable");
  });

  it("classifies store-unavailable DBus errors", () => {
    const error = new Error(
      "Native secret service error: org.freedesktop.secrets service unavailable on D-Bus",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("store_unavailable");
  });

  it("classifies wrapped Linux secure-store unavailable errors", () => {
    const error = new Error(
      "Linux secure store is unavailable. Ensure Secret Service is installed/running.",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("store_unavailable");
  });

  it("classifies generic secure-storage access failures as store-unavailable", () => {
    const error = new Error(
      "Couldn't access platform secure storage: Secret Service: session is closed",
    );

    expect(classifyLinuxSecureStoreError(error)).toBe("store_unavailable");
  });

  it("leaves unrelated errors as other", () => {
    const error = new Error("Stored credential payload is not valid JSON.");

    expect(classifyLinuxSecureStoreError(error)).toBe("other");
  });
});
