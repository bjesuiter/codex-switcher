export type AccountRecord = {
  accountId: string;
  keychainService: string;
  label?: string;
};

export type Config = {
  current: number;
  accounts: AccountRecord[];
};

export type OAuthPayload = {
  refresh: string;
  access: string;
  expires: number;
  accountId: string;
};
