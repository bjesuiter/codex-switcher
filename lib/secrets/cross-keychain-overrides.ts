const LEGACY_MAX_PASSWORD_LENGTH = 4096;
export const DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH = 16384;

const parseMaxPasswordLength = (value: string | undefined): number | null => {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed <= LEGACY_MAX_PASSWORD_LENGTH) {
    return null;
  }

  return parsed;
};

export const getCrossKeychainBackendOverrides = (): Record<string, unknown> => {
  const override = parseMaxPasswordLength(process.env.CDX_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH);
  return {
    max_password_length: override ?? DEFAULT_CROSS_KEYCHAIN_MAX_PASSWORD_LENGTH,
  };
};
