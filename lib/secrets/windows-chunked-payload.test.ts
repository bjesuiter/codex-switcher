import { describe, expect, it } from "bun:test";
import {
  createWindowsChunkedPayloadPointer,
  isWindowsChunkedPayloadPointer,
  MAX_WINDOWS_PASSWORD_CHUNK_LENGTH,
  parseWindowsChunkedPayloadPointer,
  splitWindowsPayloadIntoChunks,
  WINDOWS_CHUNKED_PAYLOAD_MARKER,
} from "./windows-chunked-payload";

describe("windows chunked payload helpers", () => {
  it("splits payloads into bounded chunks", () => {
    const raw = "x".repeat(MAX_WINDOWS_PASSWORD_CHUNK_LENGTH * 2 + 99);
    const chunks = splitWindowsPayloadIntoChunks(raw);

    expect(chunks.length).toBe(3);
    expect(chunks[0].length).toBe(MAX_WINDOWS_PASSWORD_CHUNK_LENGTH);
    expect(chunks[1].length).toBe(MAX_WINDOWS_PASSWORD_CHUNK_LENGTH);
    expect(chunks[2].length).toBe(99);
    expect(chunks.join("")).toBe(raw);
  });

  it("creates and parses valid chunk pointers", () => {
    const pointer = createWindowsChunkedPayloadPointer(4);
    const parsed = parseWindowsChunkedPayloadPointer(JSON.stringify(pointer));

    expect(parsed).toEqual({ marker: WINDOWS_CHUNKED_PAYLOAD_MARKER, chunks: 4 });
    expect(isWindowsChunkedPayloadPointer(parsed)).toBe(true);
  });

  it("returns null for invalid pointers", () => {
    expect(parseWindowsChunkedPayloadPointer("not-json")).toBeNull();
    expect(
      parseWindowsChunkedPayloadPointer(
        JSON.stringify({ marker: WINDOWS_CHUNKED_PAYLOAD_MARKER, chunks: 0 }),
      ),
    ).toBeNull();
    expect(
      parseWindowsChunkedPayloadPointer(
        JSON.stringify({ marker: "wrong-marker", chunks: 2 }),
      ),
    ).toBeNull();
  });

  it("rejects invalid pointer chunk counts", () => {
    expect(() => createWindowsChunkedPayloadPointer(0)).toThrow(
      /positive integer/,
    );
    expect(() => createWindowsChunkedPayloadPointer(1.5)).toThrow(
      /positive integer/,
    );
  });
});
