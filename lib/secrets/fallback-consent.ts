import { createInterface } from "node:readline/promises";
import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { getPaths } from "../paths";

const CONSENT_FILE = "secure-store-fallback-consent.json";
const CONSENT_ENV_BYPASS = "CDX_ALLOW_SECURE_STORE_FALLBACK";

type ConsentMap = Record<string, { acceptedAt: string }>;

type ConsentFileShape = {
  accepted: ConsentMap;
};

const isBypassEnabled = (): boolean => {
  const value = process.env[CONSENT_ENV_BYPASS];
  if (!value) return false;
  return ["1", "true", "yes", "y"].includes(value.trim().toLowerCase());
};

const consentFilePath = (): string => path.join(getPaths().configDir, CONSENT_FILE);

const loadConsentMap = async (): Promise<ConsentMap> => {
  try {
    const raw = await readFile(consentFilePath(), "utf8");
    const parsed = JSON.parse(raw) as Partial<ConsentFileShape>;
    return parsed.accepted ?? {};
  } catch {
    return {};
  }
};

const saveConsentMap = async (accepted: ConsentMap): Promise<void> => {
  const { configDir } = getPaths();
  await mkdir(configDir, { recursive: true });
  const payload: ConsentFileShape = { accepted };
  await writeFile(consentFilePath(), JSON.stringify(payload, null, 2), "utf8");
};

const promptConsent = async (message: string): Promise<boolean> => {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return false;
  }

  process.stdout.write(`\n${message}\n\n`);

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = await rl.question("Do you want to continue with this fallback? [y/N]: ");
    const normalized = answer.trim().toLowerCase();
    return normalized === "y" || normalized === "yes";
  } finally {
    rl.close();
  }
};

export const ensureFallbackConsent = async (
  scope: string,
  warningMessage: string,
): Promise<void> => {
  if (isBypassEnabled()) {
    return;
  }

  const accepted = await loadConsentMap();
  if (accepted[scope]) {
    return;
  }

  const approved = await promptConsent(warningMessage);
  if (!approved) {
    throw new Error(
      `Secure-store fallback usage was not approved for '${scope}'. Re-run in an interactive terminal to confirm, ` +
        `or set ${CONSENT_ENV_BYPASS}=1 if you accept the fallback risk.`,
    );
  }

  accepted[scope] = { acceptedAt: new Date().toISOString() };
  await saveConsentMap(accepted);
};
