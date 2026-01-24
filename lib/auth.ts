import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { getPaths } from "./paths";
import type { OAuthPayload } from "./types";

const readExistingJson = async (filePath: string): Promise<Record<string, unknown>> => {
  if (!existsSync(filePath)) return {};
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
};

export const writeAuthFile = async (payload: OAuthPayload): Promise<void> => {
  const { authPath } = getPaths();
  const authDir = path.dirname(authPath);
  await mkdir(authDir, { recursive: true });

  const existing = await readExistingJson(authPath);

  existing.openai = {
    type: "oauth",
    refresh: payload.refresh,
    access: payload.access,
    expires: payload.expires,
    accountId: payload.accountId,
  };

  await writeFile(authPath, JSON.stringify(existing, null, 2), "utf8");
};

export const writeCodexAuthFile = async (payload: OAuthPayload): Promise<void> => {
  const { codexAuthPath } = getPaths();
  const codexAuthDir = path.dirname(codexAuthPath);
  await mkdir(codexAuthDir, { recursive: true });

  const existing = await readExistingJson(codexAuthPath);

  const existingTokens = typeof existing.tokens === "object" && existing.tokens !== null
    ? (existing.tokens as Record<string, unknown>)
    : {};

  existing.tokens = {
    ...existingTokens,
    id_token: payload.idToken ?? null,
    access_token: payload.access,
    refresh_token: payload.refresh,
    account_id: payload.accountId,
  };
  existing.last_refresh = new Date().toISOString();

  await writeFile(codexAuthPath, JSON.stringify(existing, null, 2), "utf8");
};

export type WriteAuthResult = {
  codexWritten: boolean;
  codexMissingIdToken: boolean;
  codexCleared: boolean;
};

export const writeAllAuthFiles = async (payload: OAuthPayload): Promise<WriteAuthResult> => {
  await writeAuthFile(payload);

  if (payload.idToken) {
    await writeCodexAuthFile(payload);
    return { codexWritten: true, codexMissingIdToken: false, codexCleared: false };
  }

  const { codexAuthPath } = getPaths();
  let codexCleared = false;
  if (existsSync(codexAuthPath)) {
    try {
      await rm(codexAuthPath);
      codexCleared = true;
    } catch {
      codexCleared = false;
    }
  }

  return { codexWritten: false, codexMissingIdToken: true, codexCleared };
};
