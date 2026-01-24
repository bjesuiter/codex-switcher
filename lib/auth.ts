import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { getPaths } from "./paths";
import type { OAuthPayload } from "./types";

export const writeAuthFile = async (payload: OAuthPayload): Promise<void> => {
  const { authPath } = getPaths();
  const authDir = path.dirname(authPath);
  await mkdir(authDir, { recursive: true });

  const authJson = {
    openai: {
      type: "oauth",
      refresh: payload.refresh,
      access: payload.access,
      expires: payload.expires,
      accountId: payload.accountId,
    },
  };

  await writeFile(authPath, JSON.stringify(authJson, null, 2), "utf8");
};

export const writeCodexAuthFile = async (payload: OAuthPayload): Promise<void> => {
  const { codexAuthPath } = getPaths();
  const codexAuthDir = path.dirname(codexAuthPath);
  await mkdir(codexAuthDir, { recursive: true });

  const codexAuthJson = {
    OPENAI_API_KEY: null,
    tokens: {
      id_token: payload.idToken ?? null,
      access_token: payload.access,
      refresh_token: payload.refresh,
      account_id: payload.accountId,
    },
    last_refresh: new Date().toISOString(),
  };

  await writeFile(codexAuthPath, JSON.stringify(codexAuthJson, null, 2), "utf8");
};

export type WriteAuthResult = {
  codexWritten: boolean;
  codexMissingIdToken: boolean;
};

export const writeAllAuthFiles = async (payload: OAuthPayload): Promise<WriteAuthResult> => {
  await writeAuthFile(payload);

  if (payload.idToken) {
    await writeCodexAuthFile(payload);
    return { codexWritten: true, codexMissingIdToken: false };
  }

  return { codexWritten: false, codexMissingIdToken: true };
};
