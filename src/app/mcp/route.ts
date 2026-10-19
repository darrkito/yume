import { shippingFacts } from "@/content/shipping-facts";
import { CASABLANCA_BRANCHES } from "@/content/shipping";
import { NextRequest, NextResponse } from "next/server";
import { products, getProduct } from "@/content/products";
import { productsEn, getProductTranslation } from "@/content/products.en";
import { generalFaq } from "@/content/faq";
import { generalFaqEn } from "@/content/faq.en";
import { blogPosts, getBlogPost } from "@/content/blog";
import { blogPostsEn, getBlogPostEn } from "@/content/blog.en";
import { SITE, waLink } from "@/content/site";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";
import { normalizeLines, orderGuide, priceLines } from "@/lib/agent-order";
import { createCheckoutPro } from "@/lib/checkout-pro";
import { localizeError } from "@/lib/errors";
import { rateLimited } from "@/lib/rate-limit";

// Hand-rolled minimal MCP server (Streamable HTTP transport, 2025-06-18 spec).
// Stateless, single POST endpoint returning synchronous JSON —
// no session ID or SSE needed for a tool set that's all fast reads. Every
// tool wraps the same content the site itself already serves (products,
// blog, FAQ) — nothing exists here that isn't real elsewhere on the site.
// Ordering tools reuse the real checkout: prices from products.ts, orders via
// createCheckoutPro, payment always completed by the customer on Mercado Pago.
//
// Bilingual: every content tool takes an optional `lang` ("es", default, or
// "en") returning the same real content in that language, with URLs pointed
// at the matching language's real pages — never a fabricated translation.

const LANG_PARAM = { lang: { type: "string", enum: ["es", "en"], description: "Response language, defaults to es" } };

const ITEMS_PARAM = {
  items: {
    type: "array",
    description: "Lines to order. Per-piece products (stickers, party favor boxes): pieces (+ cut/finish for stickers). Option products (plates, stands, prescription pads): option. See get_product.orderGuide.",
    items: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Product slug, ES or EN" },
        pieces: { type: "integer", description: "Piece count for per-piece products (at least orderGuide.minPieces)" },
        cut: { type: "string", enum: ["troquelado", "semitroquelado"], description: "Stickers only: die cut or kiss cut (default troquelado)" },
        finish: { type: "string", enum: ["mate", "brillante", "holografico"], description: "Stickers only (default mate; holografico +0.50 MXN per piece)" },
        option: { type: "string", description: "Option id for option products, e.g. negro, con-diseno" },
        variantId: { type: "string", description: "Raw variant id instead of the fields above" },
        qty: { type: "integer", description: "Units of this line, default 1" },
      },
      required: ["slug"],
    },
  },
};

const TOOLS = [
  {
    name: "get_products",
    description: "List Yume's full catalog (vinyl stickers, logo stickers/labels, personalized party favor boxes, Google-review NFC plates and stands, medical prescription pads) with real starting prices in MXN. Available in Spanish or English.",
    inputSchema: { type: "object", properties: { ...LANG_PARAM }, additionalProperties: false },
  },
  {
    name: "get_product",
    description: "Get full detail for one Yume product by slug (ES or EN): price tiers, specs, description, FAQ, shipping, and orderGuide (exact option ids, piece minimums, personalization fields) needed by get_price_quote, create_cart_link and create_checkout.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Product slug, e.g. recetario-medico-personalizado" }, ...LANG_PARAM },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  {
    name: "search_faq",
    description: "Search Yume's frequently asked questions across all products (customization, file formats, turnaround, etc.). Available in Spanish or English.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Keywords to search for in the FAQ" }, ...LANG_PARAM },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "get_blog_posts",
    description: "List Yume's blog posts: local commerce guides for Guadalajara/Jalisco (personalized stationery, stickers for small businesses). Available in Spanish or English.",
    inputSchema: { type: "object", properties: { ...LANG_PARAM }, additionalProperties: false },
  },
  {
    name: "get_blog_post_detail",
    description: "Get the full content of one Yume blog post by slug (use the slug from get_blog_posts in the matching language).",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string" }, ...LANG_PARAM },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  {
    name: "get_price_quote",
    description: "Exact price Yume's checkout will charge for a set of items (MXN), with home-delivery and Guadalajara pickup totals and a ready cart link. Use before telling a customer a price.",
    inputSchema: { type: "object", properties: { ...ITEMS_PARAM, ...LANG_PARAM }, required: ["items"], additionalProperties: false },
  },
  {
    name: "create_cart_link",
    description: "Link that opens Yume's cart already filled with these items; the customer then enters shipping details and pays on the site (Mercado Pago: card, OXXO cash, SPEI). Best default for agents that hand off to the human.",
    inputSchema: { type: "object", properties: { ...ITEMS_PARAM, ...LANG_PARAM }, required: ["items"], additionalProperties: false },
  },
  {
    name: "create_checkout",
    description:
      "Create a real pending order for the customer and return a Mercado Pago payment link (checkoutUrl) the customer must open to pay; nothing is charged by this call and the agent never handles card data. Requires the customer's consent and real contact + delivery details. Required personalization fields come from get_product.orderGuide.",
    inputSchema: {
      type: "object",
      properties: {
        ...ITEMS_PARAM,
        customer: {
          type: "object",
          properties: { name: { type: "string" }, email: { type: "string" }, phone: { type: "string", description: "10-digit Mexican phone" } },
          required: ["name", "email", "phone"],
        },
        delivery: {
          type: "object",
          description: "method envio_nacional (needs shippingAddress) or recoleccion_casablanca (needs casablancaBranch id; Guadalajara metro only)",
          properties: {
            method: { type: "string", enum: ["envio_nacional", "recoleccion_casablanca"] },
            shippingAddress: {
              type: "object",
              properties: {
                street: { type: "string" }, number: { type: "string" }, neighborhood: { type: "string" }, city: { type: "string" },
                state: { type: "string" }, zip: { type: "string", description: "5 digits" }, references: { type: "string" },
              },
            },
            casablancaBranch: { type: "string", description: "Branch id from get_pickup_branches" },
          },
          required: ["method"],
        },
        personalization: { type: "object", description: "Per product slug (ES): { fieldId: value }, e.g. { \"dulceros-personalizados\": { \"name\": \"Sofía\", \"theme\": \"Unicornios\" } }" },
        note: { type: "string", description: "Order note for Yume (max 500 chars)" },
        promoCode: { type: "string", description: "Coupon code, only if the customer gave one" },
        ...LANG_PARAM,
      },
      required: ["items", "customer", "delivery"],
      additionalProperties: false,
    },
  },
  {
    name: "get_pickup_branches",
    description: "Casa Blanca branches in the Guadalajara metro area where an order can be picked up (ids for create_checkout).",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "request_quote",
    description:
      "Get a link to request a real quote from Yume via WhatsApp. Pass productSlug or blogSlug to personalize the message to that specific product/topic (same pattern the site's own quote buttons use); omit both only when no product or post is in context.",
    inputSchema: {
      type: "object",
      properties: {
        productSlug: { type: "string", description: "Product slug (ES or EN) to personalize the quote message, e.g. recetario-medico-personalizado" },
        blogSlug: { type: "string", description: "Blog post slug (ES or EN) for quote-only topics (e.g. custom tattoos, invitations) to personalize the message" },
        ...LANG_PARAM,
      },
      additionalProperties: false,
    },
  },
];

function asLines(raw: unknown) {
  try {
    return normalizeLines(raw);
  } catch (err) {
    throw { code: -32602, message: err instanceof Error ? err.message : "Invalid items" };
  }
}

function asLang(value: unknown): "es" | "en" {
  return value === "en" ? "en" : "es";
}

async function callTool(name: string, args: Record<string, unknown>, req: NextRequest) {
  const lang = asLang(args.lang);

  switch (name) {
    case "get_products":
      return products.map((p) => ({
        slug: lang === "en" ? PRODUCT_SLUG_EN[p.slug] : p.slug,
        name: lang === "en" ? (productsEn[p.slug]?.name ?? p.name) : p.name,
        price: p.price,
        currency: p.currency,
        category: lang === "en" ? (productsEn[p.slug]?.category ?? p.category) : p.category,
        url: lang === "en" ? `${SITE.url}/en/products/${PRODUCT_SLUG_EN[p.slug]}` : `${SITE.url}/productos/${p.slug}`,
      }));

    case "get_product": {
      const rawSlug = String(args.slug ?? "");
      // Accept either language's slug for the same product.
      const esSlug = PRODUCT_SLUG_EN[rawSlug] ? rawSlug : (Object.keys(PRODUCT_SLUG_EN).find((k) => PRODUCT_SLUG_EN[k] === rawSlug) ?? rawSlug);
      const product = getProduct(esSlug);
      if (!product) throw { code: -32602, message: `Unknown product slug: ${rawSlug}` };
      if (lang === "en") {
        const t = getProductTranslation(esSlug);
        return { ...product, ...t, slug: PRODUCT_SLUG_EN[esSlug], url: `${SITE.url}/en/products/${PRODUCT_SLUG_EN[esSlug]}`, shipping: shippingFacts("en"), orderGuide: orderGuide(product, "en") };
      }
      return { ...product, url: `${SITE.url}/productos/${product.slug}`, shipping: shippingFacts("es"), orderGuide: orderGuide(product, "es") };
    }

    case "search_faq": {
      const query = String(args.query ?? "").toLowerCase();
      const allFaq =
        lang === "en"
          ? [
              ...generalFaqEn.map((f) => ({ ...f, product: "General" })),
              ...products.flatMap((p) => (getProductTranslation(p.slug)?.faq ?? []).map((f) => ({ ...f, product: productsEn[p.slug]?.name ?? p.name }))),
            ]
          : [
              ...generalFaq.map((f) => ({ ...f, product: "General" })),
              ...products.flatMap((p) => p.faq.map((f) => ({ ...f, product: p.name }))),
            ];
      const matches = query ? allFaq.filter((f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)) : allFaq;
      return matches;
    }

    case "get_blog_posts": {
      const posts = lang === "en" ? blogPostsEn : blogPosts;
      return posts.map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        category: p.category,
        publishedAt: p.publishedAt,
        url: lang === "en" ? `${SITE.url}/en/blog/${p.slug}` : `${SITE.url}/blog/${p.slug}`,
      }));
    }

    case "get_blog_post_detail": {
      const slug = String(args.slug ?? "");
      const post = lang === "en" ? getBlogPostEn(slug) : getBlogPost(slug);
      if (!post) throw { code: -32602, message: `Unknown blog post slug: ${slug}` };
      return { ...post, url: lang === "en" ? `${SITE.url}/en/blog/${post.slug}` : `${SITE.url}/blog/${post.slug}` };
    }

    case "get_price_quote":
      return priceLines(asLines(args.items), lang);

    case "create_cart_link":
      return { ...priceLines(asLines(args.items), lang), next: "Send cartUrl to the customer: they review the cart, add shipping details and pay on studioyume.mx." };

    case "create_checkout": {
      if (rateLimited(req, "checkout", 10)) throw { code: -32000, message: "Too many checkouts from this client, retry in a minute." };
      const lines = asLines(args.items);
      try {
        const { initPoint, orderId, total } = await createCheckoutPro({
          items: lines,
          customer: args.customer,
          delivery: args.delivery,
          personalization: args.personalization,
          note: args.note,
          promoCode: args.promoCode,
          lang,
        });
        return {
          orderId,
          total,
          currency: "MXN",
          checkoutUrl: initPoint,
          next: "The customer must open checkoutUrl to pay (link valid 3 days). After payment Yume emails a confirmation; the digital proof arrives within 24 h by WhatsApp.",
        };
      } catch (err) {
        // Keep the original (Spanish) detail: it names the exact field, e.g. "Falta: Temática."
        const raw = err instanceof Error ? err.message : "Checkout failed";
        throw { code: -32602, message: `${localizeError(raw, "en")} (${raw})` };
      }
    }

    case "get_pickup_branches":
      return CASABLANCA_BRANCHES;

    case "request_quote": {
      const productSlugRaw = args.productSlug ? String(args.productSlug) : undefined;
      if (productSlugRaw) {
        const esSlug = PRODUCT_SLUG_EN[productSlugRaw] ? productSlugRaw : (Object.keys(PRODUCT_SLUG_EN).find((k) => PRODUCT_SLUG_EN[k] === productSlugRaw) ?? productSlugRaw);
        const product = getProduct(esSlug);
        if (product) {
          const name = lang === "en" ? (productsEn[esSlug]?.name ?? product.name) : product.name;
          const message =
            lang === "en"
              ? `Hi, I'm interested in getting a quote for: ${name} ($${product.price.toFixed(2)} MXN). Could you give me more information?`
              : `Hola, me interesa cotizar: ${name} ($${product.price.toFixed(2)} MXN). ¿Podrían darme más información?`;
          return { whatsappUrl: waLink(message), whatsappNumber: SITE.whatsappNumber };
        }
      }

      const blogSlugRaw = args.blogSlug ? String(args.blogSlug) : undefined;
      if (blogSlugRaw) {
        const post = lang === "en" ? getBlogPostEn(blogSlugRaw) : getBlogPost(blogSlugRaw);
        if (post?.quoteMessage) {
          return { whatsappUrl: waLink(post.quoteMessage), whatsappNumber: SITE.whatsappNumber };
        }
      }

      return {
        whatsappUrl: waLink(lang === "en" ? "Hi, I'm interested in getting a quote for a Yume product." : "Hola, me interesa cotizar un producto de Yume."),
        whatsappNumber: SITE.whatsappNumber,
      };
    }

    default:
      throw { code: -32602, message: `Unknown tool: ${name}` };
  }
}

function jsonRpcResult(id: unknown, result: unknown) {
  return NextResponse.json({ jsonrpc: "2.0", id, result });
}

function jsonRpcError(id: unknown, code: number, message: string) {
  return NextResponse.json({ jsonrpc: "2.0", id, error: { code, message } });
}

export async function POST(req: NextRequest) {
  let body: { jsonrpc?: string; id?: unknown; method?: string; params?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return jsonRpcError(null, -32700, "Parse error");
  }

  const { id = null, method, params = {} } = body;

  if (method === "notifications/initialized") {
    return new NextResponse(null, { status: 202 });
  }

  if (method === "initialize") {
    return jsonRpcResult(id, {
      protocolVersion: "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "yume-mcp", title: SITE.name, version: "1.0.0" },
    });
  }

  if (method === "tools/list") {
    return jsonRpcResult(id, { tools: TOOLS });
  }

  if (method === "tools/call") {
    const toolName = String(params.name ?? "");
    const toolArgs = (params.arguments as Record<string, unknown>) ?? {};
    try {
      const result = await callTool(toolName, toolArgs, req);
      return jsonRpcResult(id, { content: [{ type: "text", text: JSON.stringify(result) }] });
    } catch (err) {
      const e = err as { code?: number; message?: string };
      return jsonRpcError(id, e.code ?? -32603, e.message ?? "Internal error");
    }
  }

  return jsonRpcError(id, -32601, `Method not found: ${method}`);
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed. This is a POST-only MCP endpoint (Streamable HTTP)." }, { status: 405 });
}
