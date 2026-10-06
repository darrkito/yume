import { NextRequest, NextResponse } from "next/server";
import { productsListMarkdown, productMarkdown, faqMarkdown, blogListMarkdown, blogPostMarkdown } from "@/lib/markdown";
import { PRODUCT_SLUG_ES } from "@/lib/i18n";

// Real Markdown content negotiation for agents: when a request prefers
// text/markdown over text/html, serve the same content the human page
// shows, rendered as Markdown, instead of the HTML document. Every
// renderer in lib/markdown.ts reads the exact same content modules the
// pages themselves render from — nothing here is a separate/fabricated
// copy of the site's content.
function prefersMarkdown(req: NextRequest): boolean {
  const accept = req.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) return false;
  const markdownIdx = accept.indexOf("text/markdown");
  const htmlIdx = accept.indexOf("text/html");
  return htmlIdx === -1 || markdownIdx < htmlIdx;
}

function markdownResponse(body: string | null): NextResponse | null {
  if (body === null) return null;
  return new NextResponse(body, { headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" } });
}

// llms.txt is a static file that only changes on deploy: fetch it once per
// server instance instead of on every markdown request to / or /en.
let llmsTxt: Promise<string | null> | undefined;
function getLlmsTxt(origin: string): Promise<string | null> {
  llmsTxt ??= fetch(new URL("/llms.txt", origin))
    .then((res) => (res.ok ? res.text() : null))
    .catch(() => null);
  return llmsTxt.then((text) => {
    if (text === null) llmsTxt = undefined; // retry next time instead of caching a failure
    return text;
  });
}

// Next.js 16 renamed the `middleware` file convention to `proxy`.
export async function proxy(req: NextRequest) {
  if (!prefersMarkdown(req)) return NextResponse.next();

  const { pathname, origin } = req.nextUrl;

  if (pathname === "/" || pathname === "/en") {
    return markdownResponse(await getLlmsTxt(origin)) ?? NextResponse.next();
  }

  if (pathname === "/productos") return markdownResponse(productsListMarkdown("es")) ?? NextResponse.next();
  if (pathname === "/en/products") return markdownResponse(productsListMarkdown("en")) ?? NextResponse.next();

  if (pathname === "/preguntas-frecuentes") return markdownResponse(faqMarkdown("es")) ?? NextResponse.next();
  if (pathname === "/en/faq") return markdownResponse(faqMarkdown("en")) ?? NextResponse.next();

  if (pathname === "/blog") return markdownResponse(blogListMarkdown("es")) ?? NextResponse.next();
  if (pathname === "/en/blog") return markdownResponse(blogListMarkdown("en")) ?? NextResponse.next();

  const esProductMatch = pathname.match(/^\/productos\/([^/]+)$/);
  if (esProductMatch) return markdownResponse(productMarkdown(esProductMatch[1], "es")) ?? NextResponse.next();

  const enProductMatch = pathname.match(/^\/en\/products\/([^/]+)$/);
  if (enProductMatch) {
    const esSlug = PRODUCT_SLUG_ES[enProductMatch[1]] ?? enProductMatch[1];
    return markdownResponse(productMarkdown(esSlug, "en")) ?? NextResponse.next();
  }

  const esBlogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (esBlogMatch) return markdownResponse(blogPostMarkdown(esBlogMatch[1], "es")) ?? NextResponse.next();

  const enBlogMatch = pathname.match(/^\/en\/blog\/([^/]+)$/);
  if (enBlogMatch) return markdownResponse(blogPostMarkdown(enBlogMatch[1], "en")) ?? NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/en",
    "/productos",
    "/productos/:slug",
    "/en/products",
    "/en/products/:slug",
    "/preguntas-frecuentes",
    "/en/faq",
    "/blog",
    "/blog/:slug",
    "/en/blog",
    "/en/blog/:slug",
  ],
};
