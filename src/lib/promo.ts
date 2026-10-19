// Buen Fin 2026 coupon. Shared by the checkout UI (preview) and the server
// (validateCartItems), which is the only place that decides the charge.
// Mexico City has been UTC-6 all year since DST ended in 2022.
export const BUEN_FIN = {
  code: "YumeBuenFin",
  pct: 15,
  startsAt: Date.parse("2026-11-13T00:00:00-06:00"),
  endsAt: Date.parse("2026-11-18T00:00:00-06:00"), // exclusive: valid through Nov 17, 23:59 CDMX
};

export type Promo = typeof BUEN_FIN;

export const promoLive = (now = Date.now()) => now >= BUEN_FIN.startsAt && now < BUEN_FIN.endsAt;

/** The promo for this code if it is valid right now, else null. Case and spaces don't matter. */
export function activePromo(code: unknown, now = Date.now()): Promo | null {
  if (typeof code !== "string" || code.trim().toLowerCase() !== BUEN_FIN.code.toLowerCase()) return null;
  return promoLive(now) ? BUEN_FIN : null;
}

/** Unit price after the discount, rounded to cents (what Mercado Pago charges per line). */
export const discountedPrice = (price: number, promo: Promo) => Math.round(price * (100 - promo.pct)) / 100;
