import { createHmac, timingSafeEqual } from "node:crypto";

/** Verifies MP's `x-signature` header: HMAC-SHA256 of
 * "id:<data.id>;request-id:<x-request-id>;ts:<ts>;" keyed with the webhook secret. */
export function verifyMpSignature(secret: string, signatureHeader: string, requestId: string, dataId: string | null): boolean {
  const parts = Object.fromEntries(signatureHeader.split(",").map((p) => p.trim().split("=", 2) as [string, string]));
  if (!parts.ts || !parts.v1 || !dataId) return false;
  const manifest = `id:${dataId.toLowerCase()};request-id:${requestId};ts:${parts.ts};`;
  const expected = Buffer.from(createHmac("sha256", secret).update(manifest).digest("hex"));
  const given = Buffer.from(parts.v1);
  return expected.length === given.length && timingSafeEqual(expected, given);
}
