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

export type DeviceOAuthFailureReason = "cloudflare_challenge";

export type DeviceAuthorizationFlowResult =
  | { type: "success"; flow: DeviceAuthorizationFlow }
  | {
      type: "failed";
      error: string;
      status?: number;
      oauthError?: string;
      responseBody?: string;
      failureReason?: DeviceOAuthFailureReason;
    };

export type DeviceTokenResult =
  | TokenResult
  | { type: "pending"; interval: number }
  | { type: "slow_down"; interval: number }
  | { type: "access_denied" }
  | { type: "expired" }
  | {
      type: "failed";
      error?: string;
      status?: number;
      oauthError?: string;
      responseBody?: string;
      failureReason?: DeviceOAuthFailureReason;
    };

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

const truncateForLog = (value: string, maxLength = 300): string => {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}…`;
};

const isCloudflareChallengeResponse = (
  headers: Headers,
  bodyText?: string,
): boolean => {
  const mitigated = headers.get("cf-mitigated")?.toLowerCase();
  if (mitigated === "challenge") {
    return true;
  }

  if (!bodyText) {
    return false;
  }

  return [
    /<title>Just a moment\.\.\.<\/title>/i,
    /Enable JavaScript and cookies to continue/i,
    /challenge-platform/i,
    /_cf_chl_opt/i,
  ].some((pattern) => pattern.test(bodyText));
};

const parseOAuthErrorResponse = async (
  res: Response,
): Promise<{
  oauthError?: string;
  interval?: number;
  responseBody?: string;
  failureReason?: DeviceOAuthFailureReason;
}> => {
  let rawBody: string | undefined;

  try {
    rawBody = await res.text();
  } catch {
    rawBody = undefined;
  }

  const failureReason = isCloudflareChallengeResponse(res.headers, rawBody)
    ? "cloudflare_challenge"
    : undefined;

  if (!rawBody) {
    return {
      ...(failureReason ? { failureReason } : {}),
    };
  }

  const trimmed = rawBody.trim();
  if (!trimmed) {
    return {
      ...(failureReason ? { failureReason } : {}),
    };
  }

  try {
    const json = JSON.parse(trimmed) as {
      error?: string;
      interval?: number;
      error_description?: string;
    };

    return {
      ...(json.error ? { oauthError: json.error } : {}),
      ...(typeof json.interval === "number" ? { interval: json.interval } : {}),
      responseBody: truncateForLog(
        JSON.stringify({
          ...(json.error ? { error: json.error } : {}),
          ...(json.error_description ? { error_description: json.error_description } : {}),
          ...(typeof json.interval === "number" ? { interval: json.interval } : {}),
        }),
      ),
      ...(failureReason ? { failureReason } : {}),
    };
  } catch {
    return {
      responseBody:
        failureReason === "cloudflare_challenge"
          ? "Cloudflare challenge response detected (HTML page)"
          : truncateForLog(trimmed),
      ...(failureReason ? { failureReason } : {}),
    };
  }
};

export const startDeviceAuthorizationFlow = async (): Promise<DeviceAuthorizationFlowResult> => {
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
      const { oauthError, responseBody, failureReason } = await parseOAuthErrorResponse(res);

      return {
        type: "failed",
        error:
          failureReason === "cloudflare_challenge"
            ? "Device code request was blocked by a Cloudflare challenge response."
            : `Device code request failed with HTTP ${res.status} ${res.statusText}`,
        status: res.status,
        ...(oauthError ? { oauthError } : {}),
        ...(responseBody ? { responseBody } : {}),
        ...(failureReason ? { failureReason } : {}),
      };
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
      return {
        type: "failed",
        error: "Device code response is missing required fields.",
        responseBody: truncateForLog(JSON.stringify(json)),
      };
    }

    return {
      type: "success",
      flow: {
        deviceCode: json.device_code,
        userCode: json.user_code,
        verificationUri: json.verification_uri,
        verificationUriComplete: json.verification_uri_complete,
        expiresIn: json.expires_in,
        interval: typeof json.interval === "number" && json.interval > 0 ? json.interval : 5,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      type: "failed",
      error: `Device code request failed: ${message}`,
    };
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
        return {
          type: "failed",
          error: "Device token response is missing access_token/refresh_token/expires_in.",
          responseBody: truncateForLog(JSON.stringify(json)),
        };
      }

      return {
        type: "success",
        access: json.access_token,
        refresh: json.refresh_token,
        expires: Date.now() + json.expires_in * 1000,
        idToken: json.id_token,
      };
    }

    const {
      oauthError: errorCode,
      interval,
      responseBody,
      failureReason,
    } = await parseOAuthErrorResponse(res);

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

    return {
      type: "failed",
      error:
        failureReason === "cloudflare_challenge"
          ? "Device token polling was blocked by a Cloudflare challenge response."
          : `Device token polling failed with HTTP ${res.status} ${res.statusText}`,
      status: res.status,
      ...(errorCode ? { oauthError: errorCode } : {}),
      ...(responseBody ? { responseBody } : {}),
      ...(failureReason ? { failureReason } : {}),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      type: "failed",
      error: `Device token polling request failed: ${message}`,
    };
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
