// Universal Commerce Protocol (https://ucp.dev, version 2026-04-08), REST binding
// of dev.ucp.shopping.checkout. Yume charges through Mercado Pago, which has no
// UCP payment handler, so every session ends in the spec's escalation path:
// status "requires_escalation" + continue_url (the pre-filled cart), where the
// buyer pays. Sessions are stateless: the id encodes the line items, so GET
// works on any instance with no database, and each PUT returns the new id.
// ponytail: no platform-profile fetch / signature checks; add them if a UCP
// platform requires negotiation beyond our single version.
import { cartParam, cartUrl, normalizeLine, parseCartParam, priceLines, type AgentLine } from "@/lib/agent-order";
import { FREE_SHIPPING_THRESHOLD } from "@/content/shipping";
import { SITE } from "@/content/site";

export const UCP_VERSION = "2026-04-08";
const CHECKOUT_CAP = "dev.ucp.shopping.checkout";

const envelope = () => ({
  version: UCP_VERSION,
  capabilities: { [CHECKOUT_CAP]: [{ version: UCP_VERSION }] },
  payment_handlers: {},
});

export class UcpError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
  }
}

export const ucpErrorBody = (e: UcpError) => ({ code: e.code, content: e.message });

const toId = (lines: AgentLine[]) => `chk_${Buffer.from(cartParam(lines)).toString("base64url")}`;

/** Lines from a session id; throws 404 for anything we did not issue. */
export function linesFromId(id: string): AgentLine[] {
  if (!id.startsWith("chk_")) throw new UcpError(404, "not_found", "Checkout session not found");
  const lines = parseCartParam(Buffer.from(id.slice(4), "base64url").toString());
  if (!lines.length) throw new UcpError(404, "not_found", "Checkout session not found");
  return lines;
}

/** Line items from a create/update body. item.id = "<slug>" or "<slug>:<variantId>" (see llms-full.txt). */
export function linesFromBody(body: unknown): AgentLine[] {
  const items = (body as { line_items?: unknown })?.line_items;
  if (!Array.isArray(items) || items.length === 0) throw new UcpError(400, "invalid_request", "line_items is required");
  return items.map((li, i) => {
    const raw = li as { item?: { id?: unknown }; quantity?: unknown };
    const id = String(raw.item?.id ?? "");
    const at = id.indexOf(":");
    try {
      return normalizeLine({ slug: at < 0 ? id : id.slice(0, at), variantId: at < 0 ? undefined : id.slice(at + 1), qty: raw.quantity ?? 1 });
    } catch (err) {
      throw new UcpError(400, "invalid_line_item", `line_items[${i}]: ${err instanceof Error ? err.message : "invalid"}`);
    }
  });
}

const cents = (mxn: number) => Math.round(mxn * 100);

export function checkoutSession(lines: AgentLine[], lang: "es" | "en", opts: { buyer?: unknown; canceled?: boolean } = {}) {
  const quote = priceLines(lines, lang);
  const en = lang === "en";
  const continueUrl = cartUrl(lines, lang);
  const lineItems = quote.items.map((l, i) => ({
    id: `li_${i + 1}`,
    item: { id: `${lines[i].slug}${lines[i].variantId ? `:${lines[i].variantId}` : ""}`, title: l.name, price: cents(l.unitPrice) },
    quantity: l.qty,
    totals: [
      { type: "subtotal", amount: cents(l.lineTotal) },
      { type: "total", amount: cents(l.lineTotal) },
    ],
  }));
  return {
    ucp: envelope(),
    id: toId(lines),
    status: opts.canceled ? "canceled" : "requires_escalation",
    currency: "MXN",
    line_items: lineItems,
    totals: [
      { type: "subtotal", amount: cents(quote.subtotal) },
      { type: "total", amount: cents(quote.subtotal) },
    ],
    ...(opts.canceled
      ? {}
      : {
          continue_url: continueUrl,
          messages: [
            {
              type: "error",
              code: "buyer_payment_at_merchant",
              severity: "requires_buyer_input",
              content: en
                ? "Payment is completed by the buyer on Yume's checkout (Mercado Pago: card, OXXO cash, SPEI). Open continue_url: the cart is already filled."
                : "El comprador completa el pago en el checkout de Yume (Mercado Pago: tarjeta, OXXO, SPEI). Abre continue_url: el carrito ya está lleno.",
            },
            {
              type: "info",
              code: "shipping",
              content: en
                ? `Delivery is chosen at checkout: home delivery anywhere in Mexico $199 MXN or pickup in Guadalajara $20 MXN, both free from $${FREE_SHIPPING_THRESHOLD} MXN. Not included in total.`
                : `La entrega se elige en el checkout: envío a todo México $199 MXN o recolección en Guadalajara $20 MXN, ambos gratis desde $${FREE_SHIPPING_THRESHOLD} MXN. No incluido en el total.`,
            },
          ],
        }),
    ...(opts.buyer && typeof opts.buyer === "object" ? { buyer: opts.buyer } : {}),
    links: en
      ? [
          { type: "privacy_policy", url: `${SITE.url}/en/privacy` },
          { type: "refund_policy", url: `${SITE.url}/en/returns-policy` },
          { type: "faq", url: `${SITE.url}/en/faq` },
        ]
      : [
          { type: "privacy_policy", url: `${SITE.url}/privacidad` },
          { type: "refund_policy", url: `${SITE.url}/politica-de-devoluciones` },
          { type: "faq", url: `${SITE.url}/preguntas-frecuentes` },
        ],
  };
}

export const langOf = (req: Request): "es" | "en" => ((req.headers.get("accept-language") ?? "").toLowerCase().startsWith("en") ? "en" : "es");

/** Runs a UCP handler, turning UcpError / bad JSON into the spec's {code, content} error body. */
export async function ucpRespond(fn: () => Promise<unknown> | unknown, status = 200): Promise<Response> {
  try {
    return Response.json(await fn(), { status });
  } catch (err) {
    if (err instanceof UcpError) return Response.json(ucpErrorBody(err), { status: err.status });
    if (err instanceof SyntaxError) return Response.json({ code: "invalid_request", content: "Body must be JSON" }, { status: 400 });
    console.error("[ucp]", err);
    return Response.json({ code: "internal_error", content: "Internal error" }, { status: 500 });
  }
}
