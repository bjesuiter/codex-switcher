export type AccountRecord = {
  accountId: string;
  keychainService: string;
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
