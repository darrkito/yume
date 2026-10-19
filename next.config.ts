import type { NextConfig } from "next";
import { BLOG_SLUG_EN, PRODUCT_SLUG_EN } from "./src/lib/i18n";

// The quote-only tattoo page lives under /productos but is not in products.ts.
const PAGE_SLUG_EN = { ...PRODUCT_SLUG_EN, "tatuajes-temporales-personalizados": "custom-temporary-tattoos" };

const nextConfig: NextConfig = {
  // Two root layouts ((es)/(en), one <html lang> each) need a global 404 for unmatched URLs.
  experimental: { globalNotFound: true },
  images: {
    // AVIF first (smaller than WebP at the same quality); WebP as fallback.
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // Pin the workspace root to this project — a stray package-lock.json in
    // the home directory would otherwise make Next.js infer /home/darrkito
    // as the root, which it then refuses to use.
    root: __dirname,
  },
  // Agents and people often guess the other language's path (/products,
  // /en/productos/<es-slug>, /productos/<en-slug>): send them to the real page
  // instead of a 404.
  async redirects() {
    const pairs = (map: Record<string, string>, es: string, en: string) =>
      Object.entries(map).flatMap(([esSlug, enSlug]) => [
        { source: `/en/${es}/${esSlug}`, destination: `/en/${en}/${enSlug}`, permanent: true },
        { source: `/en/${en}/${esSlug}`, destination: `/en/${en}/${enSlug}`, permanent: true },
        { source: `/${es}/${enSlug}`, destination: `/${es}/${esSlug}`, permanent: true },
      ]);
    return [
      { source: "/products", destination: "/en/products", permanent: true },
      { source: "/en/productos", destination: "/en/products", permanent: true },
      { source: "/cart", destination: "/en/cart", permanent: true },
      { source: "/en/carrito", destination: "/en/cart", permanent: true },
      { source: "/checkout", destination: "/en/checkout", permanent: true },
      { source: "/tienda", destination: "/productos", permanent: true },
      { source: "/shop", destination: "/en/products", permanent: true },
      ...pairs(PAGE_SLUG_EN, "productos", "products"),
      { source: "/products/:slug", destination: "/en/products/:slug", permanent: true },
      ...pairs(BLOG_SLUG_EN, "blog", "blog"),
    ].filter((r, i, all) => r.source !== r.destination && all.findIndex((o) => o.source === r.source) === i);
  },
  async headers() {
    // RFC 8288 Link headers pointing at the site's real agent-discovery
    // surfaces (all of which genuinely exist — MCP server, A2A agent,
    // llms.txt, API catalog) so an agent can find them without first
    // parsing HTML.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Payments run on Mercado Pago's own iframes/redirect, so no
          // device APIs are needed by this origin.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Link",
            value: [
              '<https://studioyume.mx/.well-known/mcp/server-card.json>; rel="mcp-server-card"',
              '<https://studioyume.mx/.well-known/agent-card.json>; rel="agent-card"',
              '<https://studioyume.mx/.well-known/api-catalog>; rel="api-catalog"',
              '<https://studioyume.mx/llms.txt>; rel="llms-txt"',
              '<https://studioyume.mx/llms-full.txt>; rel="llms-full-txt"',
            ].join(", "),
          },
        ],
      },
      {
        // Extensionless static file — Vercel/Next would otherwise serve it
        // as application/octet-stream, which fails RFC 9727 clients that
        // request application/linkset+json.
        source: "/.well-known/api-catalog",
        headers: [{ key: "Content-Type", value: "application/linkset+json" }],
      },
      {
        // UCP business profile: extensionless, and the spec requires public caching (max-age >= 60).
        source: "/.well-known/ucp",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
    ];
  },
};

export default nextConfig;
