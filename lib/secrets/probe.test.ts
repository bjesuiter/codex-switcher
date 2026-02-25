import { describe, expect, it } from "bun:test";
import type { OAuthPayload } from "../types";
import type { SecretStoreAdapter } from "./store";
import { runSecretStoreWriteReadProbe } from "./probe";

const createAdapter = (
  handlers: Partial<Pick<SecretStoreAdapter, "save" | "load" | "delete">>,
): Pick<SecretStoreAdapter, "save" | "load" | "delete"> => {
  const memory = new Map<string, OAuthPayload>();

  const base: Pick<SecretStoreAdapter, "save" | "load" | "delete"> = {
    save: async (accountId: string, payload: OAuthPayload) => {
      memory.set(accountId, payload);
    },
    load: async (accountId: string) => {
      const payload = memory.get(accountId);
      if (!payload) {
        throw new Error(`No stored credentials found for account ${accountId}.`);
      }
      return payload;
    },
    delete: async (accountId: string) => {
      memory.delete(accountId);
    },
  };

  return {
    save: handlers.save ?? base.save,
    load: handlers.load ?? base.load,
    delete: handlers.delete ?? base.delete,
  };
};

describe("runSecretStoreWriteReadProbe", () => {
  it("returns ok when save/load/delete succeed", async () => {
    const result = await runSecretStoreWriteReadProbe(createAdapter({}), {
      probeAccountId: "probe-ok",
      now: 63,
    });

    expect(result).toEqual({ ok: true });
  });

  it("returns save failure and skips delete when save fails", async () => {
    let deleteCalled = false;

    const result = await runSecretStoreWriteReadProbe(
      createAdapter({
        save: async () => {
          throw new Error("save failed");
        },
        delete: async () => {
          deleteCalled = true;
        },
      }),
      { probeAccountId: "probe-save-fail", now: 63 },
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.stage).toBe("save");
      expect(result.error.message).toContain("save failed");
    }
    expect(deleteCalled).toBe(false);
  });

  it("returns load failure and still performs cleanup delete", async () => {
    let deleteCalled = false;

    const result = await runSecretStoreWriteReadProbe(
      createAdapter({
        load: async () => {
          throw new Error("load failed");
        },
        delete: async () => {
          deleteCalled = true;
        },
      }),
      { probeAccountId: "probe-load-fail", now: 63 },
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.stage).toBe("load");
      expect(result.error.message).toContain("load failed");
    }
    expect(deleteCalled).toBe(true);
  });

  it("returns verify failure when loaded payload differs", async () => {
    const result = await runSecretStoreWriteReadProbe(
      createAdapter({
        load: async (accountId: string): Promise<OAuthPayload> => ({
          refresh: `probe-refresh-${accountId}`,
          access: "wrong-access",
          expires: 60063,
          accountId,
        }),
      }),
      { probeAccountId: "probe-verify-fail", now: 63 },
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.stage).toBe("verify");
      expect(result.error.message).toContain("does not match");
    }
  });

  it("returns delete failure only when save/load succeeded", async () => {
    const result = await runSecretStoreWriteReadProbe(
      createAdapter({
        delete: async () => {
          throw new Error("delete failed");
        },
      }),
      { probeAccountId: "probe-delete-fail", now: 63 },
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.stage).toBe("delete");
      expect(result.error.message).toContain("delete failed");
    }
  });
});
