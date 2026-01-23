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
