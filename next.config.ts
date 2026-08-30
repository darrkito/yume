import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project — a stray package-lock.json in
    // the home directory would otherwise make Next.js infer /home/darrkito
    // as the root, which it then refuses to use.
    root: __dirname,
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
          {
            key: "Link",
            value: [
              '<https://studioyume.mx/.well-known/mcp/server-card.json>; rel="mcp-server-card"',
              '<https://studioyume.mx/.well-known/agent-card.json>; rel="agent-card"',
              '<https://studioyume.mx/.well-known/api-catalog>; rel="api-catalog"',
              '<https://studioyume.mx/llms.txt>; rel="llms-txt"',
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
    ];
  },
};

export default nextConfig;
