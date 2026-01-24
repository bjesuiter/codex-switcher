import { writeAllAuthFiles, type WriteAuthResult } from "./auth";
import { configExists, loadConfig } from "./config";
import { loadKeychainPayload } from "./keychain";

export const writeActiveAuthFilesIfCurrent = async (
  accountId: string,
): Promise<WriteAuthResult | null> => {
  if (!configExists()) return null;

  const config = await loadConfig();
  const current = config.accounts[config.current];
  if (!current || current.accountId !== accountId) return null;

  const payload = loadKeychainPayload(accountId);
  return writeAllAuthFiles(payload);
};
