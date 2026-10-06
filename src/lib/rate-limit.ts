import type { NextRequest } from "next/server";

// In-memory sliding window per IP. Per serverless instance, so it is a
// speed bump against scripts hammering checkout (each call creates an order
// and an MP preference), not a hard guarantee.
// ponytail: per-instance memory; move to Supabase/Upstash if abuse shows up.
const hits = new Map<string, number[]>();

export function rateLimited(req: NextRequest, bucket: string, max: number, windowMs = 60_000): boolean {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > windowMs) hits.delete(k);
  return recent.length > max;
}
