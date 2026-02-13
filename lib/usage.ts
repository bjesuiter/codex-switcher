import { refreshAccessToken } from "./oauth/auth";
import { getSecretStoreAdapter } from "./secrets/store";
import type { OAuthPayload } from "./types";

export type WindowSnapshot = {
  used_percent: number;
  reset_at: number;
  limit_window_seconds: number;
};

export type RateLimitDetails = {
  primary_window?: WindowSnapshot;
  secondary_window?: WindowSnapshot;
};

export type CreditDetails = {
  has_credits: boolean;
  unlimited: boolean;
  balance?: number;
};

export type UsageResponse = {
  plan_type?: string;
  rate_limit?: RateLimitDetails;
  credits?: CreditDetails;
};

export type UsageError =
  | { type: "auth_failed"; message: string }
  | { type: "network_error"; message: string }
  | { type: "unexpected"; message: string };

export type UsageResult =
  | { ok: true; data: UsageResponse }
  | { ok: false; error: UsageError };

const USAGE_ENDPOINT = "https://chatgpt.com/backend-api/wham/usage";
const USER_AGENT = "cdx-cli";

/**
 * Hits the undocumented OpenAI usage endpoint (may change without notice).
 */
export const fetchUsageRaw = async (
  accessToken: string,
  accountId?: string,
): Promise<Response> => {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${accessToken}`,
    "User-Agent": USER_AGENT,
    Accept: "application/json",
  };
  if (accountId) {
    headers["ChatGPT-Account-Id"] = accountId;
  }
  return fetch(USAGE_ENDPOINT, { headers });
};

/**
 * Fetches usage for an account. On 401, refreshes the token and retries once.
 */
export const fetchUsage = async (
  accountId: string,
): Promise<UsageResult> => {
  const secretStore = getSecretStoreAdapter();

  let payload: OAuthPayload;
  try {
    payload = await secretStore.load(accountId);
  } catch (err) {
    return {
      ok: false,
      error: {
        type: "auth_failed",
        message: err instanceof Error ? err.message : "Failed to load credentials",
      },
    };
  }

  try {
    let response = await fetchUsageRaw(payload.access, payload.accountId);

    if (response.status === 401) {
      const refreshResult = await refreshAccessToken(payload.refresh);
      if (refreshResult.type === "failed") {
        return {
          ok: false,
          error: {
            type: "auth_failed",
            message: "Token expired and refresh failed. Try 'cdx login' to re-authenticate.",
          },
        };
      }

      const updatedPayload: OAuthPayload = {
        ...payload,
        access: refreshResult.access,
        refresh: refreshResult.refresh,
        expires: refreshResult.expires,
        idToken: refreshResult.idToken ?? payload.idToken,
      };
      await secretStore.save(accountId, updatedPayload);

      response = await fetchUsageRaw(updatedPayload.access, updatedPayload.accountId);
      if (!response.ok) {
        return {
          ok: false,
          error: {
            type: "auth_failed",
            message: `Usage API returned ${response.status} after token refresh.`,
          },
        };
      }
    } else if (!response.ok) {
      return {
        ok: false,
        error: {
          type: "unexpected",
          message: `Usage API returned ${response.status}: ${response.statusText}`,
        },
      };
    }

    const data = (await response.json()) as UsageResponse;
    return { ok: true, data };
  } catch (err) {
    return {
      ok: false,
      error: {
        type: "network_error",
        message: err instanceof Error ? err.message : "Network request failed",
      },
    };
  }
};

const formatWindowLabel = (seconds: number): string => {
  const hours = seconds / 3600;
  if (hours >= 24) {
    const days = Math.round(hours / 24);
    return days === 7 ? "weekly" : `${days}d`;
  }
  return `${Math.round(hours)}h`;
};

const formatResetCountdown = (resetAtUnix: number): string => {
  const diff = resetAtUnix * 1000 - Date.now();
  if (diff <= 0) return "now";

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  }
  return `${minutes}m`;
};

const formatPercentageBar = (usedPercent: number): string => {
  const width = 20;
  const filled = Math.round((usedPercent / 100) * width);
  const empty = width - filled;
  return `[${"█".repeat(filled)}${"░".repeat(empty)}] ${usedPercent}% used`;
};

const formatWindow = (label: string, w: WindowSnapshot): string[] => {
  return [
    `${label} (${formatWindowLabel(w.limit_window_seconds)} window):`,
    `  ${formatPercentageBar(w.used_percent)}`,
    `  Resets in: ${formatResetCountdown(w.reset_at)}`,
  ];
};

export const formatUsage = (usage: UsageResponse): string => {
  const lines: string[] = [];

  const plan = usage.plan_type ?? "unknown";
  lines.push(`Plan: ${plan}`);
  lines.push("");

  if (usage.rate_limit?.primary_window) {
    lines.push(...formatWindow("Primary", usage.rate_limit.primary_window));
  }

  if (usage.rate_limit?.secondary_window) {
    lines.push(...formatWindow("Secondary", usage.rate_limit.secondary_window));
  }

  if (usage.credits) {
    lines.push("");
    if (usage.credits.unlimited) {
      lines.push("Credits: unlimited");
    } else if (usage.credits.has_credits && usage.credits.balance !== undefined) {
      lines.push(`Credits: $${Number(usage.credits.balance).toFixed(2)}`);
    } else if (!usage.credits.has_credits) {
      lines.push("Credits: none");
    }
  }

  return lines.join("\n");
};

export const formatUsageCompact = (usage: UsageResponse): string => {
  const plan = usage.plan_type ?? "?";
  const primary = usage.rate_limit?.primary_window;
  if (primary) {
    const label = formatWindowLabel(primary.limit_window_seconds);
    return `${plan} — ${primary.used_percent}% used (${label} window)`;
  }
  return plan;
};

export const formatUsageBars = (usage: UsageResponse, indent = "    "): string[] => {
  const windows: { label: string; window: WindowSnapshot }[] = [];
  if (usage.rate_limit?.primary_window) {
    windows.push({ label: formatWindowLabel(usage.rate_limit.primary_window.limit_window_seconds), window: usage.rate_limit.primary_window });
  }
  if (usage.rate_limit?.secondary_window) {
    windows.push({ label: formatWindowLabel(usage.rate_limit.secondary_window.limit_window_seconds), window: usage.rate_limit.secondary_window });
  }

  const maxLabelLen = Math.max(...windows.map((w) => w.label.length), 0);
  return windows.map(({ label, window: w }) => {
    const paddedLabel = label.padEnd(maxLabelLen);
    return `${indent}${paddedLabel}  ${formatPercentageBar(w.used_percent)}  resets in ${formatResetCountdown(w.reset_at)}`;
  });
};

export type AccountUsageEntry = {
  displayName: string;
  isCurrent: boolean;
  result: UsageResult;
};

export const formatUsageOverview = (entries: AccountUsageEntry[]): string => {
  const lines: string[] = [];

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const marker = entry.isCurrent ? "→ " : "  ";

    if (entry.result.ok) {
      const usage = entry.result.data;
      const plan = usage.plan_type ?? "unknown";
      lines.push(`${marker}${entry.displayName} (${plan})`);
      lines.push(...formatUsageBars(usage));
    } else {
      lines.push(`${marker}${entry.displayName}: [error] ${entry.result.error.message}`);
    }

    if (i < entries.length - 1) {
      lines.push("");
    }
  }

  return lines.join("\n");
};
