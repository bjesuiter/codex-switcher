import { generatePKCE } from "@openauthjs/openauth/pkce";
import { randomBytes } from "node:crypto";
import {
  AUTHORIZE_URL,
  CLIENT_ID,
  DEVICE_CODE_URL,
  REDIRECT_URI,
  SCOPE,
  TOKEN_URL,
} from "./constants";

export type PKCEPair = {
  verifier: string;
  challenge: string;
};

export type TokenResult =
  | { type: "success"; access: string; refresh: string; expires: number; idToken?: string }
  | { type: "failed" };

export type JWTPayload = {
  sub?: string;
  email?: string;
  "https://api.openai.com/auth"?: {
    user_id?: string;
  };
  [key: string]: unknown;
};

export type AuthorizationFlow = {
  pkce: PKCEPair;
  state: string;
  url: string;
};

export type DeviceAuthorizationFlow = {
  deviceCode: string;
  userCode: string;
  verificationUri: string;
  verificationUriComplete?: string;
  expiresIn: number;
  interval: number;
};

export type DeviceTokenResult =
  | TokenResult
  | { type: "pending"; interval: number }
  | { type: "slow_down"; interval: number }
  | { type: "access_denied" }
  | { type: "expired" }
  | { type: "failed" };

export const createState = (): string => {
  return randomBytes(16).toString("hex");
};

export const createAuthorizationFlow = async (): Promise<AuthorizationFlow> => {
  const pkce = (await generatePKCE()) as PKCEPair;
  const state = createState();

  const url = new URL(AUTHORIZE_URL);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("code_challenge", pkce.challenge);
  url.searchParams.set("code_challenge_method", "S256");
  url.searchParams.set("state", state);
  url.searchParams.set("id_token_add_organizations", "true");
  url.searchParams.set("codex_cli_simplified_flow", "true");
  url.searchParams.set("originator", "codex_cli_rs");

  return { pkce, state, url: url.toString() };
};

export const startDeviceAuthorizationFlow = async (): Promise<DeviceAuthorizationFlow | null> => {
  try {
    const res = await fetch(DEVICE_CODE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        scope: SCOPE,
      }),
    });

    if (!res.ok) {
      return null;
    }

    const json = (await res.json()) as {
      device_code?: string;
      user_code?: string;
      verification_uri?: string;
      verification_uri_complete?: string;
      expires_in?: number;
      interval?: number;
    };

    if (
      !json?.device_code ||
      !json?.user_code ||
      !json?.verification_uri ||
      typeof json?.expires_in !== "number"
    ) {
      return null;
    }

    return {
      deviceCode: json.device_code,
      userCode: json.user_code,
      verificationUri: json.verification_uri,
      verificationUriComplete: json.verification_uri_complete,
      expiresIn: json.expires_in,
      interval: typeof json.interval === "number" && json.interval > 0 ? json.interval : 5,
    };
  } catch {
    return null;
  }
};

export const pollDeviceAuthorizationToken = async (
  deviceCode: string,
): Promise<DeviceTokenResult> => {
  try {
    const res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
        device_code: deviceCode,
        client_id: CLIENT_ID,
      }),
    });

    if (res.ok) {
      const json = (await res.json()) as {
        access_token?: string;
        refresh_token?: string;
        expires_in?: number;
        id_token?: string;
      };

      if (
        !json?.access_token ||
        !json?.refresh_token ||
        typeof json?.expires_in !== "number"
      ) {
        return { type: "failed" };
      }

      return {
        type: "success",
        access: json.access_token,
        refresh: json.refresh_token,
        expires: Date.now() + json.expires_in * 1000,
        idToken: json.id_token,
      };
    }

    let errorCode: string | undefined;
    let interval: number | undefined;

    try {
      const json = (await res.json()) as { error?: string; interval?: number };
      errorCode = json.error;
      interval = json.interval;
    } catch {
      // Ignore JSON parse errors and fall through to failed.
    }

    if (errorCode === "authorization_pending") {
      return {
        type: "pending",
        interval: typeof interval === "number" && interval > 0 ? interval : 5,
      };
    }

    if (errorCode === "slow_down") {
      return {
        type: "slow_down",
        interval: typeof interval === "number" && interval > 0 ? interval : 10,
      };
    }

    if (errorCode === "access_denied") {
      return { type: "access_denied" };
    }

    if (errorCode === "expired_token") {
      return { type: "expired" };
    }

    return { type: "failed" };
  } catch {
    return { type: "failed" };
  }
};

export const exchangeAuthorizationCode = async (
  code: string,
  verifier: string,
): Promise<TokenResult> => {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code,
      code_verifier: verifier,
      redirect_uri: REDIRECT_URI,
    }),
  });

  if (!res.ok) {
    return { type: "failed" };
  }

  const json = (await res.json()) as {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    id_token?: string;
  };

  if (
    !json?.access_token ||
    !json?.refresh_token ||
    typeof json?.expires_in !== "number"
  ) {
    return { type: "failed" };
  }

  return {
    type: "success",
    access: json.access_token,
    refresh: json.refresh_token,
    expires: Date.now() + json.expires_in * 1000,
    idToken: json.id_token,
  };
};

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<TokenResult> => {
  try {
    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: CLIENT_ID,
      }),
    });

    if (!response.ok) {
      return { type: "failed" };
    }

    const json = (await response.json()) as {
      access_token?: string;
      refresh_token?: string;
      expires_in?: number;
      id_token?: string;
    };

    if (
      !json?.access_token ||
      !json?.refresh_token ||
      typeof json?.expires_in !== "number"
    ) {
      return { type: "failed" };
    }

    return {
      type: "success",
      access: json.access_token,
      refresh: json.refresh_token,
      expires: Date.now() + json.expires_in * 1000,
      idToken: json.id_token,
    };
  } catch {
    return { type: "failed" };
  }
};

export const decodeJWT = (token: string): JWTPayload | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1];
    const decoded = Buffer.from(payload, "base64url").toString("utf-8");
    return JSON.parse(decoded) as JWTPayload;
  } catch {
    return null;
  }
};

export const extractAccountId = (accessToken: string): string | null => {
  const payload = decodeJWT(accessToken);
  if (!payload) return null;

  const authClaim = payload["https://api.openai.com/auth"];
  if (authClaim?.user_id) {
    return authClaim.user_id;
  }

  return payload.sub ?? null;
};
