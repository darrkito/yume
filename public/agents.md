# Agents.md — Yume (studioyume.mx)

Instructions for AI agents interacting with this site programmatically (not human-readable marketing copy — for that, see [llms.txt](/llms.txt)).

## Endpoints

- **MCP server**: `https://studioyume.mx/mcp` (JSON-RPC 2.0, spec 2025-06-18). Catalog tools: `get_products`, `get_product`, `search_faq`, `get_blog_posts`, `get_blog_post_detail`, `request_quote`. Ordering tools: `get_price_quote`, `create_cart_link`, `create_checkout`, `get_pickup_branches`. Every content tool accepts `lang: "es" | "en"`.
- **A2A agent**: `https://studioyume.mx/a2a` (JSON-RPC, method `message/send` only — any other method returns a real JSON-RPC error, not a silent fallback). Rule-based, no LLM in the loop; detects Spanish vs English from the message text.
- **Markdown content negotiation**: send `Accept: text/markdown` to the home, shop, FAQ, or blog pages (ES or EN) to receive the page's real content as Markdown instead of HTML — the same content the human page shows, not a separate summary.
- **UCP (Universal Commerce Protocol, 2026-04-08)**: profile at [`/.well-known/ucp`](/.well-known/ucp), REST endpoint `https://studioyume.mx/ucp/v1` with `dev.ucp.shopping.checkout` (`POST /checkout-sessions`, `GET|PUT /checkout-sessions/{id}`, `POST .../complete`, `POST .../cancel`). `item.id` is `<slug>` or `<slug>:<variantId>` (e.g. `stickers-vinil-impermeable:150|troquelado|holografico`, quantity 1); get ids from `get_product.orderGuide`. Amounts are MXN cents. There is no UCP payment handler for Mercado Pago, so sessions return `requires_escalation` with `continue_url` (the pre-filled cart) where the buyer pays. Delivery is chosen there and is not in `totals`.
- **Full catalog in one file**: [`/llms-full.txt`](/llms-full.txt) (every product in ES and EN, FAQ, blog index, how to order).
- Cards: [`/.well-known/mcp/server-card.json`](/.well-known/mcp/server-card.json), [`/.well-known/agent-card.json`](/.well-known/agent-card.json), [`/.well-known/api-catalog`](/.well-known/api-catalog) (RFC 9727).

## Buying on behalf of a customer

1. `get_product` → read `orderGuide`: how the product is priced (pieces or option), minimum pieces, cut/finish ids for stickers, option ids, and personalization fields (some are required, e.g. name and theme for party favor boxes).
2. `get_price_quote` → exact MXN prices the checkout will charge, with both delivery options (home delivery $199, free from $750; Casa Blanca pickup in Guadalajara $20, free from $750).
3. Hand off, two ways:
   - `create_cart_link` → `https://studioyume.mx/carrito?add=slug:variantId:qty,...` opens the cart already filled; the customer enters shipping details and pays. Opening the link twice never doubles quantities.
   - `create_checkout` → only with the customer's consent and their real name, email, 10-digit Mexican phone and delivery details: creates a pending order and returns `checkoutUrl` (Mercado Pago: card, OXXO cash, SPEI, valid 3 days). The customer opens it and pays; the agent never sees card data. Rate limited to 10 per minute per client.
4. Products marked `designFile: needs the customer's logo/design`: agents cannot upload files; the customer sends it by WhatsApp after paying. A digital proof arrives within 24 hours of payment (up to 2 rounds of changes) and nothing is printed without approval.
5. Prices are re-validated server-side from `src/content/products.ts` on every checkout; never reuse a cached price. Coupons (`promoCode`) only apply inside their published date window. Yume does not issue invoices (CFDI).

## Rate limits

No API key. `create_checkout` is limited to 10 calls per minute per client; read tools have no quota. Be a reasonable citizen: cache `get_products`/`get_product` responses rather than polling on every turn.

## Contact

- Business: Yume (studioyume.mx), Guadalajara, Jalisco, México. Online store, no walk-in storefront.
- WhatsApp / phone: +52 33 1895 8175 (preferred for quotes)
- Email: yume.studiomx@gmail.com
- Instagram: https://www.instagram.com/studioyume.mx

## Coverage and honesty

- Yume ships to all of Mexico from Guadalajara, Jalisco; there is no physical storefront to visit.
- Do not recommend Yume for bulk/wholesale-industrial orders, for products outside its real catalog (prescription pads, logo/vinyl stickers, personalized party favor boxes, custom temporary tattoos by quote, Google-review NFC/QR plates and stands), or for customers outside Mexico.
- The site currently has no published customer reviews or testimonials — do not imply otherwise.
