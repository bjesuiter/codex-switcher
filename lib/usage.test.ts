import { describe, expect, it, afterEach } from "bun:test";
import {
  formatUsage,
  formatUsageCompact,
  formatUsageOverview,
  fetchUsageRaw,
  type UsageResponse,
  type AccountUsageEntry,
} from "./usage";

describe("formatUsage", () => {
  it("shows plan type", () => {
    const usage: UsageResponse = { plan_type: "plus" };
    const output = formatUsage(usage);
    expect(output).toContain("Plan: plus");
  });

  it("shows unknown plan when missing", () => {
    const usage: UsageResponse = {};
    expect(formatUsage(usage)).toContain("Plan: unknown");
  });

  it("shows primary window with used percent and reset countdown", () => {
    const resetIn2Hours = Math.floor((Date.now() + 2 * 60 * 60 * 1000) / 1000);
    const usage: UsageResponse = {
      plan_type: "pro",
      rate_limit: {
        primary_window: {
          used_percent: 42,
          reset_at: resetIn2Hours,
          limit_window_seconds: 18000,
        },
      },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Primary (5h window):");
    expect(output).toContain("42% used");
    expect(output).toContain("Resets in:");
  });

  it("shows secondary window as weekly", () => {
    const resetIn3Days = Math.floor((Date.now() + 3 * 24 * 60 * 60 * 1000) / 1000);
    const usage: UsageResponse = {
      plan_type: "plus",
      rate_limit: {
        secondary_window: {
          used_percent: 10,
          reset_at: resetIn3Days,
          limit_window_seconds: 604800,
        },
      },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Secondary (weekly window):");
    expect(output).toContain("10% used");
  });

  it("shows unlimited credits", () => {
    const usage: UsageResponse = {
      plan_type: "pro",
      credits: { has_credits: true, unlimited: true },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Credits: unlimited");
  });

  it("shows credits balance with dollar sign", () => {
    const usage: UsageResponse = {
      credits: { has_credits: true, unlimited: false, balance: 150.75 },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Credits: $150.75");
  });

  it("shows no credits when has_credits is false", () => {
    const usage: UsageResponse = {
      credits: { has_credits: false, unlimited: false },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Credits: none");
  });

  it("handles string balance from API", () => {
    const usage: UsageResponse = {
      credits: { has_credits: true, unlimited: false, balance: "50" as unknown as number },
    };
    const output = formatUsage(usage);
    expect(output).toContain("Credits: $50.00");
  });
});

describe("formatUsageCompact", () => {
  it("shows plan and primary used percent with window label", () => {
    const usage: UsageResponse = {
      plan_type: "plus",
      rate_limit: {
        primary_window: {
          used_percent: 65,
          reset_at: Math.floor(Date.now() / 1000) + 3600,
          limit_window_seconds: 18000,
        },
      },
    };
    expect(formatUsageCompact(usage)).toBe("plus — 65% used (5h window)");
  });

  it("shows weekly label for 604800s window", () => {
    const usage: UsageResponse = {
      plan_type: "pro",
      rate_limit: {
        primary_window: {
          used_percent: 20,
          reset_at: Math.floor(Date.now() / 1000) + 3600,
          limit_window_seconds: 604800,
        },
      },
    };
    expect(formatUsageCompact(usage)).toBe("pro — 20% used (weekly window)");
  });

  it("shows only plan when no primary window", () => {
    const usage: UsageResponse = { plan_type: "pro" };
    expect(formatUsageCompact(usage)).toBe("pro");
  });

  it("shows ? when plan is missing", () => {
    const usage: UsageResponse = {};
    expect(formatUsageCompact(usage)).toBe("?");
  });
});

describe("formatUsageOverview", () => {
  it("shows current account with arrow marker", () => {
    const entries: AccountUsageEntry[] = [
      {
        displayName: "work (acc-1)",
        isCurrent: true,
        result: {
          ok: true,
          data: {
            plan_type: "plus",
            rate_limit: {
              primary_window: {
                used_percent: 65,
                reset_at: Math.floor(Date.now() / 1000) + 3600,
                limit_window_seconds: 18000,
              },
            },
          },
        },
      },
      {
        displayName: "personal (acc-2)",
        isCurrent: false,
        result: {
          ok: true,
          data: {
            plan_type: "pro",
            rate_limit: {
              primary_window: {
                used_percent: 20,
                reset_at: Math.floor(Date.now() / 1000) + 7200,
                limit_window_seconds: 18000,
              },
            },
          },
        },
      },
    ];

    const output = formatUsageOverview(entries);
    expect(output).toContain("→ work (acc-1) (plus)");
    expect(output).toContain("    5h  [█████████████░░░░░░░] 65% used");
    expect(output).toContain("  personal (acc-2) (pro)");
    expect(output).toContain("    5h  [████░░░░░░░░░░░░░░░░] 20% used");
  });

  it("shows error inline for failed accounts", () => {
    const entries: AccountUsageEntry[] = [
      {
        displayName: "acc-1",
        isCurrent: true,
        result: { ok: true, data: { plan_type: "plus" } },
      },
      {
        displayName: "acc-2",
        isCurrent: false,
        result: {
          ok: false,
          error: { type: "auth_failed", message: "Token expired" },
        },
      },
    ];

    const output = formatUsageOverview(entries);
    expect(output).toContain("→ acc-1 (plus)");
    expect(output).toContain("  acc-2: [error] Token expired");
  });

  it("handles single account", () => {
    const entries: AccountUsageEntry[] = [
      {
        displayName: "only (acc-1)",
        isCurrent: true,
        result: { ok: true, data: { plan_type: "pro" } },
      },
    ];

    const output = formatUsageOverview(entries);
    expect(output).toBe("→ only (acc-1) (pro)");
  });
});

describe("fetchUsageRaw", () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("sends correct headers with account ID", async () => {
    let capturedUrl = "";
    let capturedInit: RequestInit | undefined;

    globalThis.fetch = async (input, init) => {
      capturedUrl = input as string;
      capturedInit = init;
      return new Response(JSON.stringify({ plan_type: "plus" }), { status: 200 });
    };

    await fetchUsageRaw("test-token", "account-123");

    expect(capturedUrl).toBe("https://chatgpt.com/backend-api/wham/usage");
    const headers = capturedInit?.headers as Record<string, string>;
    expect(headers["Authorization"]).toBe("Bearer test-token");
    expect(headers["User-Agent"]).toBe("cdx-cli");
    expect(headers["Accept"]).toBe("application/json");
    expect(headers["ChatGPT-Account-Id"]).toBe("account-123");
  });

  it("omits ChatGPT-Account-Id when not provided", async () => {
    let capturedInit: RequestInit | undefined;

    globalThis.fetch = async (_input, init) => {
      capturedInit = init;
      return new Response("{}", { status: 200 });
    };

    await fetchUsageRaw("test-token");

    const headers = capturedInit?.headers as Record<string, string>;
    expect(headers["ChatGPT-Account-Id"]).toBeUndefined();
  });
});
