import { createHmac, timingSafeEqual } from "node:crypto";
import { SITE } from "@/content/site";

// Stateless "no more reminders" link: HMAC of the email keyed with CRON_SECRET,
// so nobody can opt out (or probe) other people's addresses.
const sign = (email: string) => createHmac("sha256", process.env.CRON_SECRET ?? "").update(email.toLowerCase()).digest("hex").slice(0, 32);

export function unsubscribeUrl(email: string): string | null {
  if (!process.env.CRON_SECRET) return null;
  return `${SITE.url}/api/unsubscribe?e=${encodeURIComponent(email.toLowerCase())}&t=${sign(email)}`;
}

export function validUnsubscribe(email: string, token: string): boolean {
  if (!process.env.CRON_SECRET) return false;
  const a = Buffer.from(sign(email));
  const b = Buffer.from(token);
  return a.length === b.length && timingSafeEqual(a, b);
}
