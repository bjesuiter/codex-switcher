import { describe, expect, it } from "bun:test";
import type { OAuthPayload } from "./types";
import {
  deleteWindowsCredentialPayload,
  getWindowsCredentialService,
  getWindowsCredentialTarget,
  listWindowsCredentialAccounts,
  loadWindowsCredentialPayload,
  saveWindowsCredentialPayload,
  windowsCredentialPayloadExists,
  type WindowsCredentialBackend,
} from "./windows-credential";

type StoredCredential = {
  username: string;
  value: string;
};

const createMemoryBackend = (): WindowsCredentialBackend => {
  const credentials = new Map<string, StoredCredential>();

  return {
    write(target, username, value) {
      credentials.set(target, { username, value });
    },

    read(target) {
      const value = credentials.get(target);
      if (!value) {
        return { found: false };
      }

      return {
        found: true,
        username: value.username,
        value: value.value,
      };
    },

    delete(target) {
      credentials.delete(target);
    },

    list(prefix) {
      return [...credentials.keys()].filter((target) => target.startsWith(prefix));
    },
  };
};

const TEST_ACCOUNT_ID = "win-account-1";

const TEST_PAYLOAD: OAuthPayload = {
  refresh: "refresh-token",
  access: "access-token",
  expires: 1771332000000,
  accountId: TEST_ACCOUNT_ID,
  idToken: "id-token",
};

describe("windows-credential", () => {
  it("builds service names with cdx-openai prefix", () => {
    expect(getWindowsCredentialService("abc")).toBe("cdx-openai-abc");
  });

  it("saves and loads segmented credential payload", () => {
    const backend = createMemoryBackend();

    saveWindowsCredentialPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD, backend);

    const loaded = loadWindowsCredentialPayload(TEST_ACCOUNT_ID, backend);
    expect(loaded).toEqual(TEST_PAYLOAD);
  });

  it("deletes optional idToken segment when payload has no idToken", () => {
    const backend = createMemoryBackend();

    saveWindowsCredentialPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD, backend);
    saveWindowsCredentialPayload(
      TEST_ACCOUNT_ID,
      {
        ...TEST_PAYLOAD,
        idToken: undefined,
      },
      backend,
    );

    const loaded = loadWindowsCredentialPayload(TEST_ACCOUNT_ID, backend);
    expect(loaded.idToken).toBeUndefined();
    expect(backend.read(getWindowsCredentialTarget(TEST_ACCOUNT_ID, "idToken")).found).toBe(
      false,
    );
  });

  it("checks existence via refresh credential", () => {
    const backend = createMemoryBackend();

    expect(windowsCredentialPayloadExists(TEST_ACCOUNT_ID, backend)).toBe(false);

    saveWindowsCredentialPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD, backend);

    expect(windowsCredentialPayloadExists(TEST_ACCOUNT_ID, backend)).toBe(true);
  });

  it("lists account ids based on refresh segments", () => {
    const backend = createMemoryBackend();

    saveWindowsCredentialPayload("account-b", { ...TEST_PAYLOAD, accountId: "account-b" }, backend);
    saveWindowsCredentialPayload("account-a", { ...TEST_PAYLOAD, accountId: "account-a" }, backend);

    expect(listWindowsCredentialAccounts(backend)).toEqual(["account-a", "account-b"]);
  });

  it("deletes all segments for an account", () => {
    const backend = createMemoryBackend();

    saveWindowsCredentialPayload(TEST_ACCOUNT_ID, TEST_PAYLOAD, backend);
    deleteWindowsCredentialPayload(TEST_ACCOUNT_ID, backend);

    expect(windowsCredentialPayloadExists(TEST_ACCOUNT_ID, backend)).toBe(false);
  });

  it("throws when required segment is missing", () => {
    const backend = createMemoryBackend();

    backend.write(getWindowsCredentialTarget(TEST_ACCOUNT_ID, "refresh"), TEST_ACCOUNT_ID, "r");

    expect(() => loadWindowsCredentialPayload(TEST_ACCOUNT_ID, backend)).toThrow(
      "Credential field 'access' missing",
    );
  });

  it("throws when expires segment is invalid", () => {
    const backend = createMemoryBackend();

    backend.write(getWindowsCredentialTarget(TEST_ACCOUNT_ID, "refresh"), TEST_ACCOUNT_ID, "r");
    backend.write(getWindowsCredentialTarget(TEST_ACCOUNT_ID, "access"), TEST_ACCOUNT_ID, "a");
    backend.write(getWindowsCredentialTarget(TEST_ACCOUNT_ID, "expires"), TEST_ACCOUNT_ID, "not-a-number");

    expect(() => loadWindowsCredentialPayload(TEST_ACCOUNT_ID, backend)).toThrow(
      "Credential field 'expires' is invalid",
    );
  });
});
