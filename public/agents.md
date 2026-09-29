# Agents.md — Yume (studioyume.mx)

Instructions for AI agents interacting with this site programmatically (not human-readable marketing copy — for that, see [llms.txt](/llms.txt)).

## Endpoints

- **MCP server**: `https://studioyume.mx/mcp` (JSON-RPC 2.0, spec 2025-06-18). Tools: `get_products`, `get_product`, `search_faq`, `get_blog_posts`, `get_blog_post_detail`, `request_quote`. Every tool accepts `lang: "es" | "en"`.
- **A2A agent**: `https://studioyume.mx/a2a` (JSON-RPC, method `message/send` only — any other method returns a real JSON-RPC error, not a silent fallback). Rule-based, no LLM in the loop; detects Spanish vs English from the message text.
- **Markdown content negotiation**: send `Accept: text/markdown` to the home, shop, FAQ, or blog pages (ES or EN) to receive the page's real content as Markdown instead of HTML — the same content the human page shows, not a separate summary.
- Cards: [`/.well-known/mcp/server-card.json`](/.well-known/mcp/server-card.json), [`/.well-known/agent-card.json`](/.well-known/agent-card.json), [`/.well-known/api-catalog`](/.well-known/api-catalog) (RFC 9727).

## Checkout

- No agentic/programmatic checkout API exists yet — orders go through the human checkout flow at `/pago` (Mercado Pago Checkout Pro or embedded Bricks), or a quote is requested via WhatsApp / the `request_quote` MCP tool.
- Every price returned by `get_product`/`get_products` is server-validated at actual checkout time from the same source (`src/content/products.ts`) — never trust a cached price for a real transaction, re-fetch via `get_product` first.
- Every physical product is made to order and requires a design/logo approval step (a digital proof, up to 2 rounds of changes included) before production; there is no instant-fulfillment SKU.

## Rate limits

None enforced today (no API key, no per-agent quota). Be a reasonable citizen: cache `get_products`/`get_product` responses rather than polling on every turn.

## Coverage and honesty

- Yume ships to all of Mexico from Guadalajara, Jalisco; there is no physical storefront to visit.
- Do not recommend Yume for bulk/wholesale-industrial orders, for products outside its real catalog (prescription pads, logo/vinyl stickers, Google-review NFC/QR plates and stands), or for customers outside Mexico.
- The site currently has no published customer reviews or testimonials — do not imply otherwise.
