import type { WriteAuthResult } from "../auth";

type CodexStatus = Pick<WriteAuthResult, "codexWritten" | "codexCleared">;

export const formatCodexMark = (result: CodexStatus): string => {
  if (result.codexWritten) return "✓";
  if (result.codexCleared) return "⚠ missing id_token (cleared)";
  return "⚠ missing id_token";
};

export const writeSwitchSummary = (
  displayName: string,
  result: Pick<WriteAuthResult, "piWritten" | "codexWritten" | "codexCleared">,
): void => {
  const piMark = result.piWritten ? "✓" : "✗";
  const codexMark = formatCodexMark(result);

  process.stdout.write(`Switched to account ${displayName}\n`);
  process.stdout.write("  OpenCode:  ✓\n");
  process.stdout.write(`  Pi Agent:  ${piMark}\n`);
  process.stdout.write(`  Codex CLI: ${codexMark}\n`);
};

export const writeUpdatedAuthSummary = (
  result: Pick<WriteAuthResult, "piWritten" | "codexWritten" | "codexCleared">,
): void => {
  const piMark = result.piWritten ? "✓" : "✗";
  const codexMark = formatCodexMark(result);
  process.stdout.write("Updated active auth files:\n");
  process.stdout.write("  OpenCode:  ✓\n");
  process.stdout.write(`  Pi Agent:  ${piMark}\n`);
  process.stdout.write(`  Codex CLI: ${codexMark}\n`);
};
