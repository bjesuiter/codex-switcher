import http from "node:http";
import { CALLBACK_PORT } from "./constants";

const AUTH_TIMEOUT_MS = 5 * 60 * 1000;

const SUCCESS_HTML = `<!DOCTYPE html>
<html>
<head>
  <title>cdx - Login Successful</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #1a1a1a; color: #fff; }
    .container { text-align: center; padding: 2rem; }
    h1 { color: #10b981; margin-bottom: 1rem; }
    p { color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Login Successful!</h1>
    <p>You can close this window and return to the terminal.</p>
  </div>
</body>
</html>`;

export type OAuthServerResult = {
  code: string;
};

export type OAuthServerStartupReason = "port_in_use" | "listen_failed";

export type OAuthServer = {
  port: number;
  ready: boolean;
  reason?: OAuthServerStartupReason;
  error?: string;
  errorCode?: string;
  close: () => void;
  waitForCode: () => Promise<OAuthServerResult | null>;
};

export const startOAuthServer = (state: string): Promise<OAuthServer> => {
  let resolveCode: ((result: OAuthServerResult | null) => void) | null = null;
  let hasResolved = false;
  const codePromise = new Promise<OAuthServerResult | null>((resolve) => {
    resolveCode = resolve;
  });

  let server: http.Server;
  const finalize = (result: OAuthServerResult | null) => {
    if (hasResolved) {
      return;
    }
    hasResolved = true;
    if (resolveCode) {
      resolveCode(result);
    }
    try {
      server.close();
    } catch {
      // Server may already be closing.
    }
  };

  server = http.createServer((req, res) => {
    try {
      const url = new URL(req.url || "", "http://localhost");

      if (url.pathname !== "/auth/callback") {
        res.statusCode = 404;
        res.end("Not found");
        return;
      }

      if (url.searchParams.get("state") !== state) {
        res.statusCode = 400;
        res.end("State mismatch");
        finalize(null);
        return;
      }

      const code = url.searchParams.get("code");
      if (!code) {
        res.statusCode = 400;
        res.end("Missing authorization code");
        finalize(null);
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(SUCCESS_HTML);

      finalize({ code });
    } catch {
      res.statusCode = 500;
      res.end("Internal error");
      finalize(null);
    }
  });

  return new Promise((resolve) => {
    server
      .listen(CALLBACK_PORT, "127.0.0.1", () => {
        const timeout = setTimeout(() => finalize(null), AUTH_TIMEOUT_MS);
        resolve({
          port: CALLBACK_PORT,
          ready: true,
          close: () => {
            clearTimeout(timeout);
            server.close();
          },
          waitForCode: () => codePromise,
        });
      })
      .on("error", (error: unknown) => {
        const err = error as NodeJS.ErrnoException;
        const reason: OAuthServerStartupReason = err?.code === "EADDRINUSE"
          ? "port_in_use"
          : "listen_failed";

        resolve({
          port: CALLBACK_PORT,
          ready: false,
          reason,
          ...(typeof err?.message === "string" ? { error: err.message } : {}),
          ...(typeof err?.code === "string" ? { errorCode: err.code } : {}),
          close: () => {
            try {
              server.close();
            } catch {
              // Server may not be running
            }
          },
          waitForCode: async () => null,
        });
      });
  });
};
