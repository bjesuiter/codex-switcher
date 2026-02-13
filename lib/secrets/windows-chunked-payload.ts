export const MAX_WINDOWS_PASSWORD_CHUNK_LENGTH = 3000;
export const WINDOWS_CHUNKED_PAYLOAD_MARKER = "cdx-oauth-chunked-v1";

export type WindowsChunkedPayloadPointer = {
  marker: typeof WINDOWS_CHUNKED_PAYLOAD_MARKER;
  chunks: number;
};

export const splitWindowsPayloadIntoChunks = (
  value: string,
  chunkSize = MAX_WINDOWS_PASSWORD_CHUNK_LENGTH,
): string[] => {
  if (chunkSize <= 0) {
    throw new Error("chunkSize must be greater than 0");
  }

  const chunks: string[] = [];
  for (let index = 0; index < value.length; index += chunkSize) {
    chunks.push(value.slice(index, index + chunkSize));
  }
  return chunks;
};

export const createWindowsChunkedPayloadPointer = (
  chunks: number,
): WindowsChunkedPayloadPointer => {
  if (!Number.isInteger(chunks) || chunks <= 0) {
    throw new Error("chunks must be a positive integer");
  }

  return {
    marker: WINDOWS_CHUNKED_PAYLOAD_MARKER,
    chunks,
  };
};

export const isWindowsChunkedPayloadPointer = (
  value: unknown,
): value is WindowsChunkedPayloadPointer => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const pointer = value as Partial<WindowsChunkedPayloadPointer>;
  return pointer.marker === WINDOWS_CHUNKED_PAYLOAD_MARKER
    && typeof pointer.chunks === "number"
    && Number.isInteger(pointer.chunks)
    && pointer.chunks > 0;
};

export const parseWindowsChunkedPayloadPointer = (
  raw: string,
): WindowsChunkedPayloadPointer | null => {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return isWindowsChunkedPayloadPointer(parsed) ? parsed : null;
  } catch {
    return null;
  }
};
