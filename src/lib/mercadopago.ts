import { MercadoPagoConfig } from "mercadopago";
import { SITE } from "@/content/site";
import { ORDER_NOTE_LABEL, validateNote, validatePersonalization, type PersonalizationEntry } from "@/content/personalization";
import { getProduct, cartItemLabel, isValidVariant, resolvePrice } from "@/content/products";

// Server-only client — never import this from a "use client" component.
// Throws at request time (not at module load) so `next build` doesn't fail
// before the real token is set in Vercel env vars.
export function getMpClient() {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("MERCADOPAGO_ACCESS_TOKEN no está configurado.");
  }
  // TEST credentials must never charge on production, and the token and the
  // public key (used by the Brick in the browser) must be the same mode.
  const testToken = accessToken.startsWith("TEST-");
  const publicKey = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
  if (publicKey && publicKey.startsWith("TEST-") !== testToken) {
    throw new Error("Mercado Pago: el access token y la llave pública no son del mismo modo (TEST/PROD).");
  }
  if (testToken && process.env.VERCEL_ENV === "production") {
    throw new Error("Mercado Pago: credenciales TEST en producción; se bloquea el cobro.");
  }
  return new MercadoPagoConfig({ accessToken });
}

/** Base URL for MP back_urls / notification_url. CHECKOUT_BASE_URL lets local
 * and preview runs point somewhere other than production. */
export function checkoutBaseUrl(): string {
  return process.env.CHECKOUT_BASE_URL?.replace(/\/$/, "") || SITE.url;
}

/** MP rejects non-public notification URLs; omit it for localhost runs. */
export function notificationUrl(): string | undefined {
  const base = checkoutBaseUrl();
  return /localhost|127\.0\.0\.1/.test(base) ? undefined : `${base}/api/mercadopago/webhook`;
}

// Units per cart line (piece counts live in variantId, not here).
const MAX_LINE_QTY = 999;

export interface CheckoutItem {
  slug: string;
  name: string;
  price: number;
  qty: number;
  variantId?: string;
  /** Language the order was placed in (set on the first line only; no schema change needed). */
  locale?: "es" | "en";
  /** Buyer-provided details (name on the box, license no...), see content/personalization.ts. */
  personalization?: PersonalizationEntry[];
}

// Trusts only `slug`, `qty`, and `variantId` from the client — `name`/`price`
// are always re-resolved from the server-side product catalog so a tampered
// request body can never change what actually gets charged.
export function validateCartItems(items: unknown, extras: { personalization?: unknown; note?: unknown; lang?: unknown } = {}): CheckoutItem[] {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("El carrito está vacío.");
  }
  const checked: CheckoutItem[] = items.map((raw) => {
    const { slug, qty, variantId } = raw as { slug?: unknown; qty?: unknown; variantId?: unknown };
    if (typeof slug !== "string" || typeof qty !== "number" || !Number.isInteger(qty) || qty < 1 || qty > MAX_LINE_QTY) {
      throw new Error("Producto inválido en el carrito.");
    }
    const product = getProduct(slug);
    if (!product) {
      throw new Error(`Producto no encontrado: ${slug}`);
    }
    const vId = typeof variantId === "string" ? variantId : undefined;
    if (!isValidVariant(product, vId)) {
      throw new Error(`Selecciona una opción válida para ${product.name}.`);
    }
    return {
      slug: product.slug,
      name: cartItemLabel(product, vId),
      price: resolvePrice(product, vId),
      qty: Math.floor(qty),
      variantId: vId,
    };
  });

  // Personalization is stored once per product (on its first line); the
  // order note rides on the very first line.
  const byProduct = validatePersonalization(checked, extras.personalization);
  const seen = new Set<string>();
  for (const line of checked) {
    if (seen.has(line.slug)) continue;
    seen.add(line.slug);
    if (byProduct[line.slug]) line.personalization = byProduct[line.slug];
  }
  const note = validateNote(extras.note);
  if (note) checked[0].personalization = [...(checked[0].personalization ?? []), { label: ORDER_NOTE_LABEL, value: note }];
  if (extras.lang === "en") checked[0].locale = "en";
  return checked;
}
