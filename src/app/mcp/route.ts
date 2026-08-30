import { NextRequest, NextResponse } from "next/server";
import { products } from "@/content/products";
import { generalFaq } from "@/content/faq";
import { blogPosts, getBlogPost } from "@/content/blog";
import { SITE, waLink } from "@/content/site";

// Hand-rolled minimal MCP server (Streamable HTTP transport, 2025-06-18 spec).
// Stateless, read-only, single POST endpoint returning synchronous JSON —
// no session ID or SSE needed for a tool set that's all fast reads. Every
// tool wraps the same content the site itself already serves (products,
// blog, FAQ) — nothing exists here that isn't real elsewhere on the site.

const TOOLS = [
  {
    name: "get_products",
    description: "List Yume's catalog: papelería y artículos personalizados (recetarios médicos, stickers) with real prices in MXN.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_product",
    description: "Get full detail for one Yume product by slug: price, specs, description, and FAQ.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Product slug, e.g. recetario-medico-personalizado" } },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  {
    name: "search_faq",
    description: "Search Yume's frequently asked questions across all products (customization, file formats, turnaround, etc.).",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Keywords to search for in the FAQ" } },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "get_blog_posts",
    description: "List Yume's blog posts — local commerce guides for Guadalajara/Jalisco (personalized stationery, stickers for small businesses).",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_blog_post_detail",
    description: "Get the full content of one Yume blog post by slug.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string" } },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  {
    name: "request_quote",
    description: "Get a link to request a real quote from Yume via WhatsApp.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
];

function callTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "get_products":
      return products.map((p) => ({
        slug: p.slug,
        name: p.name,
        price: p.price,
        currency: p.currency,
        category: p.category,
        url: `${SITE.url}/productos/${p.slug}`,
      }));

    case "get_product": {
      const slug = String(args.slug ?? "");
      const product = products.find((p) => p.slug === slug);
      if (!product) throw { code: -32602, message: `Unknown product slug: ${slug}` };
      return {
        ...product,
        url: `${SITE.url}/productos/${product.slug}`,
      };
    }

    case "search_faq": {
      const query = String(args.query ?? "").toLowerCase();
      const allFaq = [
        ...generalFaq.map((f) => ({ ...f, product: "General" })),
        ...products.flatMap((p) => p.faq.map((f) => ({ ...f, product: p.name }))),
      ];
      const matches = query ? allFaq.filter((f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)) : allFaq;
      return matches;
    }

    case "get_blog_posts":
      return blogPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        category: p.category,
        publishedAt: p.publishedAt,
        url: `${SITE.url}/blog/${p.slug}`,
      }));

    case "get_blog_post_detail": {
      const slug = String(args.slug ?? "");
      const post = getBlogPost(slug);
      if (!post) throw { code: -32602, message: `Unknown blog post slug: ${slug}` };
      return { ...post, url: `${SITE.url}/blog/${post.slug}` };
    }

    case "request_quote":
      return { whatsappUrl: waLink("Hola, me interesa cotizar un producto de Yume."), whatsappNumber: SITE.whatsappNumber };

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
