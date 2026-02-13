import { describe, expect, it } from "bun:test";
import {
  parseKeychainDecryptAccessFromDump,
} from "./keychain-acl";

const DUMP_SAMPLE = `keychain: "/Users/test/Library/Keychains/login.keychain-db"
version: 512
class: "genp"
attributes:
    "acct"<blob>="user-1"
    "svce"<blob>="cdx-openai-user-1"
access: 5 entries
    entry 0:
        authorizations (6): decrypt derive export_clear export_wrapped mac sign
        don't-require-password
        description: cdx-openai-user-1
        applications (2):
            0: /Users/test/.bun/bin/bun (OK)
                requirement: identifier bun and anchor apple
            1: /usr/bin/security (OK)
                requirement: identifier "com.apple.security" and anchor apple
    entry 1:
        authorizations (1): encrypt
        don't-require-password
        description: cdx-openai-user-1
        applications: <null>
keychain: "/Users/test/Library/Keychains/login.keychain-db"
version: 512
class: "genp"
attributes:
    "acct"<blob>="user-2"
    "svce"<blob>="cdx-openai-user-2"
access: 5 entries
    entry 0:
        authorizations (6): decrypt derive export_clear export_wrapped mac sign
        don't-require-password
        description: cdx-openai-user-2
        applications: <null>
`;

describe("parseKeychainDecryptAccessFromDump", () => {
  it("parses explicit trusted application lists for decrypt access", () => {
    const parsed = parseKeychainDecryptAccessFromDump(DUMP_SAMPLE, ["cdx-openai-user-1"]);
    const info = parsed.get("cdx-openai-user-1");

    expect(info).toBeDefined();
    expect(info?.mode).toBe("explicit-list");
    expect(info?.applications).toEqual([
      "/Users/test/.bun/bin/bun",
      "/usr/bin/security",
    ]);
  });

  it("marks decrypt access with applications: <null> as all-apps", () => {
    const parsed = parseKeychainDecryptAccessFromDump(DUMP_SAMPLE, ["cdx-openai-user-2"]);
    const info = parsed.get("cdx-openai-user-2");

    expect(info).toBeDefined();
    expect(info?.mode).toBe("all-apps");
    expect(info?.applications).toEqual([]);
  });

  it("returns missing for services not present in dump output", () => {
    const parsed = parseKeychainDecryptAccessFromDump(DUMP_SAMPLE, ["cdx-openai-missing"]);
    const info = parsed.get("cdx-openai-missing");

    expect(info).toBeDefined();
    expect(info?.mode).toBe("missing");
    expect(info?.applications).toEqual([]);
  });
});
