// What an AI agent needs to turn "I want 150 holographic stickers" into a real
// order: friendly fields -> the catalog's variantId, an exact price, and a
// cart link the shopper opens to pay. Shared by the MCP server, the A2A agent
// and the cart page (which reads the same link format). No React here.
import { CUT_OPTIONS, FINISH_OPTIONS, cartItemLabel, defaultVariantId, getProduct, hasVariants, isValidVariant, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn } from "@/content/products.en";
import { PERSONALIZATION } from "@/content/personalization";
import { FREE_SHIPPING_THRESHOLD, deliverySurcharge } from "@/content/shipping";
import { SITE } from "@/content/site";
import { PRODUCT_SLUG_EN, PRODUCT_SLUG_ES } from "@/lib/i18n";

export interface AgentLine {
  slug: string;
  variantId?: string;
  qty: number;
}

const MAX_LINES = 20;

/** ES catalog slug for an ES or EN slug. */
export const toEsSlug = (slug: string) => PRODUCT_SLUG_ES[slug] ?? slug;

/** One requested line, in friendly fields or with an explicit variantId. Throws a readable error. */
export function normalizeLine(raw: unknown): AgentLine {
  const r = (raw ?? {}) as Record<string, unknown>;
  const product = getProduct(toEsSlug(String(r.slug ?? "")));
  if (!product) throw new Error(`Unknown product slug: ${String(r.slug ?? "")}`);
  let variantId = typeof r.variantId === "string" ? r.variantId : undefined;
  if (!variantId && product.tiers) {
    const base = String(r.pieces ?? product.tiers.baseQty);
    variantId = product.lineOptions ? `${base}|${String(r.cut ?? CUT_OPTIONS[0].id)}|${String(r.finish ?? FINISH_OPTIONS[0].id)}` : base;
  } else if (!variantId && hasVariants(product)) {
    variantId = typeof r.option === "string" ? r.option : defaultVariantId(product);
  }
  if (!isValidVariant(product, variantId)) {
    const min = product.tiers ? ` Minimum ${product.tiers.baseQty} pieces.` : "";
    throw new Error(`Invalid option for ${product.slug}: ${variantId ?? "(none)"}.${min} See orderGuide in get_product.`);
  }
  const qty = r.qty === undefined ? 1 : Number(r.qty);
  if (!Number.isInteger(qty) || qty < 1 || qty > 999) throw new Error(`qty must be an integer 1-999 (${product.slug})`);
  return { slug: product.slug, variantId, qty };
}

export function normalizeLines(raw: unknown): AgentLine[] {
  if (!Array.isArray(raw) || raw.length === 0) throw new Error("items must be a non-empty array");
  if (raw.length > MAX_LINES) throw new Error(`At most ${MAX_LINES} items`);
  return raw.map(normalizeLine);
}

// Cart link format: ?add=slug:variantId:qty,slug:variantId:qty (variantId never contains ":" or ",").
export const cartParam = (lines: AgentLine[]) => lines.map((l) => `${l.slug}:${l.variantId ?? ""}:${l.qty}`).join(",");

/** Valid lines from a cart link; anything malformed is dropped, not guessed. */
export function parseCartParam(param: string): AgentLine[] {
  const out: AgentLine[] = [];
  for (const part of param.split(",").slice(0, MAX_LINES)) {
    const [slug = "", variantId = "", qty = "1"] = part.split(":");
    try {
      out.push(normalizeLine({ slug, variantId: variantId || undefined, qty: Number(qty) }));
    } catch {}
  }
  return out;
}

export const cartUrl = (lines: AgentLine[], lang: "es" | "en") =>
  `${SITE.url}${lang === "en" ? "/en/cart" : "/carrito"}?add=${encodeURIComponent(cartParam(lines))}`;

/** Exact prices the checkout will charge (before any coupon), plus both delivery options. */
export function priceLines(lines: AgentLine[], lang: "es" | "en") {
  const priced = lines.map((l) => {
    const product = getProduct(l.slug)!;
    const unitPrice = resolvePrice(product, l.variantId);
    return {
      slug: lang === "en" ? PRODUCT_SLUG_EN[l.slug] : l.slug,
      name: lang === "en" ? cartItemLabelEn(product, l.variantId) : cartItemLabel(product, l.variantId),
      variantId: l.variantId,
      unitPrice,
      qty: l.qty,
      lineTotal: Math.round(unitPrice * l.qty * 100) / 100,
    };
  });
  const subtotal = Math.round(priced.reduce((s, l) => s + l.lineTotal, 0) * 100) / 100;
  return {
    currency: "MXN",
    items: priced,
    subtotal,
    delivery: {
      envio_nacional: { price: deliverySurcharge("envio_nacional", subtotal), total: subtotal + deliverySurcharge("envio_nacional", subtotal) },
      recoleccion_casablanca: { price: deliverySurcharge("recoleccion_casablanca", subtotal), total: subtotal + deliverySurcharge("recoleccion_casablanca", subtotal) },
    },
    freeShippingFrom: FREE_SHIPPING_THRESHOLD,
    cartUrl: cartUrl(lines, lang),
  };
}

/** How to express an order for this product: returned by get_product so an agent never guesses ids. */
export function orderGuide(product: Product, lang: "es" | "en") {
  const fields = (PERSONALIZATION[product.slug] ?? []).map((f) => ({
    id: f.id,
    label: f.label[lang],
    type: f.type,
    required: Boolean(f.required),
    ...(f.onlyVariant ? { onlyForOption: f.onlyVariant } : {}),
  }));
  const base = {
    personalizationFields: fields,
    designFile: product.requiresImage
      ? "Needs the customer's logo/design. Agents cannot upload it: after paying, the customer sends it by WhatsApp (+52 33 1895 8175)."
      : "Not needed.",
    example: { slug: product.slug, ...(product.tiers ? { pieces: product.tiers.baseQty * 2 } : {}), qty: 1 },
  };
  if (product.tiers) {
    return {
      pricedBy: "pieces",
      minPieces: product.tiers.baseQty,
      ...(product.lineOptions
        ? {
            cutOptions: CUT_OPTIONS.map((o) => ({ id: o.id, label: o.label[lang] })),
            finishOptions: FINISH_OPTIONS.map((o) => ({ id: o.id, label: o.label[lang], extraPerPiece: o.extraPerPiece ?? 0 })),
            variantIdFormat: "<pieces>|<cut>|<finish>, e.g. 150|troquelado|holografico",
          }
        : { variantIdFormat: "<pieces>, e.g. 20" }),
      ...base,
    };
  }
  if (hasVariants(product)) {
    return { pricedBy: "option", options: product.variants!.map((v) => ({ id: v.id, label: v.label, price: v.price, default: Boolean(v.default) })), ...base };
  }
  return { pricedBy: "unit", ...base };
}
