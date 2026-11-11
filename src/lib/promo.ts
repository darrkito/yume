// Buen Fin 2026 coupon. Shared by the checkout UI (preview) and the server
// (validateCartItems), which is the only place that decides the charge.
// Mexico City has been UTC-6 all year since DST ended in 2022.
export const BUEN_FIN = {
  code: "YumeBuenFin",
  pct: 15,
  teaserFrom: Date.parse("2026-11-03T00:00:00-06:00"),
  startsAt: Date.parse("2026-11-13T00:00:00-06:00"),
  endsAt: Date.parse("2026-11-18T00:00:00-06:00"), // exclusive: valid through Nov 17, 23:59 CDMX
};

export interface Promo {
  code: string;
  pct: number;
  /** Exclusive end (ms). */
  endsAt: number;
  /** Redeemable once: stops working after a paid order uses it (checked server-side). */
  singleUse?: boolean;
}

// One-off personal codes. Valid from `startsAt` until `endsAt` (CDMX, UTC-6).
const ONE_OFF: (Promo & { startsAt: number })[] = [
  { code: "YumeBuenFin11", pct: 15, startsAt: Date.parse("2026-11-10T00:00:00-06:00"), endsAt: Date.parse("2026-11-11T00:00:00-06:00"), singleUse: true }, // through Nov 10, 23:59 CDMX
];
export type PromoPhase = "off" | "teaser" | "live";

export const promoPhase = (now = Date.now()): PromoPhase => now >= BUEN_FIN.endsAt || now < BUEN_FIN.teaserFrom ? "off" : now < BUEN_FIN.startsAt ? "teaser" : "live";

export const promoLive = (now = Date.now()) => now >= BUEN_FIN.startsAt && now < BUEN_FIN.endsAt;

/** The promo for this code if it is valid right now, else null. Case and spaces don't matter. */
export function activePromo(code: unknown, now = Date.now()): Promo | null {
  if (typeof code !== "string") return null;
  const c = code.trim().toLowerCase();
  const oneOff = ONE_OFF.find((p) => p.code.toLowerCase() === c);
  if (oneOff) return now >= oneOff.startsAt && now < oneOff.endsAt ? oneOff : null;
  return c === BUEN_FIN.code.toLowerCase() && promoLive(now) ? BUEN_FIN : null;
}

/** Unit price after the discount, rounded to cents (what Mercado Pago charges per line). */
export const discountedPrice = (price: number, promo: Promo) => Math.round(price * (100 - promo.pct)) / 100;
