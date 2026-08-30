import { NextRequest, NextResponse } from "next/server";
import { products, getProduct } from "@/content/products";
import { productsEn, getProductTranslation } from "@/content/products.en";
import { generalFaq } from "@/content/faq";
import { generalFaqEn } from "@/content/faq.en";
import { blogPosts, getBlogPost } from "@/content/blog";
import { blogPostsEn, getBlogPostEn } from "@/content/blog.en";
import { SITE, waLink } from "@/content/site";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";

// Hand-rolled minimal MCP server (Streamable HTTP transport, 2025-06-18 spec).
// Stateless, read-only, single POST endpoint returning synchronous JSON —
// no session ID or SSE needed for a tool set that's all fast reads. Every
// tool wraps the same content the site itself already serves (products,
// blog, FAQ) — nothing exists here that isn't real elsewhere on the site.
//
// Bilingual: every content tool takes an optional `lang` ("es", default, or
// "en") returning the same real content in that language, with URLs pointed
// at the matching language's real pages — never a fabricated translation.

const LANG_PARAM = { lang: { type: "string", enum: ["es", "en"], description: "Response language, defaults to es" } };

const TOOLS = [
  {
    name: "get_products",
    description: "List Yume's catalog: papelería y artículos personalizados (recetarios médicos, stickers) with real prices in MXN. Available in Spanish or English.",
    inputSchema: { type: "object", properties: { ...LANG_PARAM }, additionalProperties: false },
  },
  {
    name: "get_product",
    description: "Get full detail for one Yume product by slug: price, specs, description, and FAQ. Available in Spanish or English.",
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
    description: "List Yume's blog posts — local commerce guides for Guadalajara/Jalisco (personalized stationery, stickers for small businesses). Available in Spanish or English.",
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
    name: "request_quote",
    description: "Get a link to request a real quote from Yume via WhatsApp.",
    inputSchema: { type: "object", properties: { ...LANG_PARAM }, additionalProperties: false },
  },
];

function asLang(value: unknown): "es" | "en" {
  return value === "en" ? "en" : "es";
}

function callTool(name: string, args: Record<string, unknown>) {
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
        return { ...product, ...t, slug: PRODUCT_SLUG_EN[esSlug], url: `${SITE.url}/en/products/${PRODUCT_SLUG_EN[esSlug]}` };
      }
      return { ...product, url: `${SITE.url}/productos/${product.slug}` };
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

    case "request_quote":
      return {
        whatsappUrl: waLink(lang === "en" ? "Hi, I'm interested in getting a quote for a Yume product." : "Hola, me interesa cotizar un producto de Yume."),
        whatsappNumber: SITE.whatsappNumber,
      };

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
      const result = callTool(toolName, toolArgs);
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
