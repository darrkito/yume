// Identifies an allowed design file from its first bytes (not from the
// client's name/type, which anyone can fake). Returns the content-type to
// store it under, or null if it is not an allowed design. Formats a browser
// could execute or render as a page (SVG) or that have no browser type
// (AI, PSD) are stored as octet-stream.
export function sniffDesignType(b: Uint8Array): string | null {
  const ascii = (from: number, to: number) => String.fromCharCode(...b.slice(from, to));
  if (b.length < 12) return null;
  if (b[0] === 0x89 && ascii(1, 4) === "PNG") return "image/png";
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (ascii(0, 4) === "GIF8") return "image/gif";
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  if (ascii(0, 4) === "%PDF") return "application/pdf";
  if (ascii(0, 4) === "8BPS" || ascii(0, 2) === "%!") return "application/octet-stream"; // PSD / PostScript AI
  if (/<svg[\s>]/i.test(ascii(0, Math.min(b.length, 2048)))) return "application/octet-stream"; // SVG
  return null;
}
