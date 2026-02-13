import { afterEach, describe, expect, it } from "bun:test";
import {
  DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH,
  getCrossKeychainBackendOverrides,
} from "./cross-keychain-overrides";

const readMaxPasswordLength = (): number => {
  const value = getCrossKeychainBackendOverrides().max_password_length;
  if (typeof value !== "number") {
    throw new Error("Expected numeric max_password_length");
  }
  return value;
};

const originalEnv = process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH;

afterEach(() => {
  if (originalEnv === undefined) {
    delete process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH;
    return;
  }

  process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH = originalEnv;
});

describe("cross-keychain backend overrides", () => {
  it("uses the default max password length when env override is not set", () => {
    delete process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH;
    expect(readMaxPasswordLength()).toBe(DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH);
  });

  it("uses env override when value is a valid integer above 4096", () => {
    process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH = "8192";
    expect(readMaxPasswordLength()).toBe(8192);
  });

  it("falls back to default when env override is invalid", () => {
    process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH = "invalid";
    expect(readMaxPasswordLength()).toBe(DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH);
  });

  it("falls back to default when env override is not above 4096", () => {
    process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH = "4096";
    expect(readMaxPasswordLength()).toBe(DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH);
  });
});
