import type { OAuthPayload } from "../types";
import type { SecretStoreAdapter } from "./store";

export type SecretStoreProbeFailureStage = "save" | "load" | "verify" | "delete";

export type SecretStoreProbeResult =
  | { ok: true }
  | {
      ok: false;
      stage: SecretStoreProbeFailureStage;
      error: Error;
    };

const toError = (error: unknown): Error =>
  error instanceof Error ? error : new Error(String(error));

const createProbePayload = (accountId: string, now: number): OAuthPayload => ({
  refresh: `probe-refresh-${accountId}`,
  access: `probe-access-${accountId}`,
  expires: now + 60_000,
  accountId,
});

const payloadMatches = (expected: OAuthPayload, actual: OAuthPayload): boolean =>
  expected.accountId === actual.accountId &&
  expected.refresh === actual.refresh &&
  expected.access === actual.access &&
  expected.expires === actual.expires;

export const runSecretStoreWriteReadProbe = async (
  secretStore: Pick<SecretStoreAdapter, "save" | "load" | "delete">,
  options: { probeAccountId?: string; now?: number } = {},
): Promise<SecretStoreProbeResult> => {
  const probeAccountId =
    options.probeAccountId ??
    `cdx-doctor-probe-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const payload = createProbePayload(probeAccountId, options.now ?? Date.now());

  let saveSucceeded = false;
  let result: SecretStoreProbeResult = { ok: true };

  try {
    await secretStore.save(probeAccountId, payload);
    saveSucceeded = true;
  } catch (error) {
    result = { ok: false, stage: "save", error: toError(error) };
  }

  if (result.ok) {
    try {
      const loaded = await secretStore.load(probeAccountId);
      if (!payloadMatches(payload, loaded)) {
        result = {
          ok: false,
          stage: "verify",
          error: new Error("Secure-store probe loaded payload does not match the saved payload."),
        };
      }
    } catch (error) {
      result = { ok: false, stage: "load", error: toError(error) };
    }
  }

  if (saveSucceeded) {
    try {
      await secretStore.delete(probeAccountId);
    } catch (error) {
      if (result.ok) {
        result = { ok: false, stage: "delete", error: toError(error) };
      }
    }
  }

  return result;
};
