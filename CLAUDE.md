@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Mission

Yume (studioyume.mx) is a real, live custom-stationery/stickers e-commerce store — papelería y artículos personalizados, hecho por pedido desde Guadalajara, Jalisco, con envíos a todo México. Not a demo. Real customers, real Mercado Pago charges, real Supabase orders.

## Stack

Next.js 16 App Router, TypeScript, Tailwind v4 (CSS-first, no `tailwind.config.js`), Playfair Display + Inter. Deployed on Vercel. Supabase for the `orders` table (service-role key, bypasses RLS). Mercado Pago for payment (Checkout Pro redirect + embedded Payment Bricks). Gmail/nodemailer for order emails.

## Commands

```bash
npm run dev          # localhost:3000 — ALWAYS uses .env.local's Mercado Pago TEST- sandbox credentials
npm run build
npx tsc --noEmit     # typecheck
npx biome check src  # lint
npx biome check --write <file>  # auto-fix formatting
```

**Testing checkout locally**: `.env.local` holds TEST- Mercado Pago keys, completely separate from the real production credentials on Vercel — payment testing on localhost never touches real money. Test card: `5031 7557 3453 0604`, exp `11/30`, CVV `123`. The cardholder-name field is a special sandbox trigger: `APRO` = approved, `OTHE` = rejected, `CONT` = pending — a real name gives unpredictable results. **Known sandbox quirk**: card payments can land on `status: "pending"` / `status_detail: "pending_contingency"` even with `APRO` — this is Mercado Pago's own test-mode review simulation, not an app bug. Don't chase it; verify the order row and email content directly instead (see below).

## Content layer (`src/content/`)

Bilingual pattern used throughout: Spanish is canonical/unprefixed (`/productos`, `/galeria`) and the priority market; English lives at `/en/...` with real translated slugs, not just a prefix mirror. Every ES content file (`products.ts`, `blog.ts`, `faq.ts`, `gallery.ts`) has an `.en.ts` sibling that imports the ES source for shared data (slugs, prices, images, dimensions) and supplies only the translated strings — never duplicates the shared data. `src/lib/i18n.ts` is the single source of truth for every ES↔EN path pair (`PRODUCT_SLUG_EN`, `BLOG_SLUG_EN`, static paths) and the shared UI-chrome dictionary (`UI[lang]`) — nav labels, form labels, buttons. Content-specific text never goes in `UI`; it lives in its own per-language content file.

- **`products.ts`** / **`products.en.ts`** — catalog. Tiered/quantity-based pricing (stickers) uses a generated `ProductVariant[]` array (base qty/price + step qty/price, e.g. `stickerVariants`/`vinylStickerVariants`) — each sticker-type product has its **own** tier constants, don't assume two sticker products share pricing. `resolvePrice()`/`cartItemLabel()` are the shared helpers; price is always re-resolved server-side from `slug`+`variantId`, never trusted from the client. `showGallery: true` puts the infinite gallery strip on a product's page. `imageWidth`/`imageHeight` on a product's `image` give the photo frame its real aspect ratio (see ProductVisual below).
- **`gallery.ts`** / **`gallery.en.ts`** — real photos of stickers produced (`public/gallery/*.webp`), categorized, shown at `/galeria` (`GalleryGrid.tsx`, filterable + lightbox) and as an `InfiniteGalleryStrip` (pure CSS marquee, gated behind `prefers-reduced-motion`) on product pages and the homepage.
- **`shipping.ts`** / **`shipping.en.ts`** — delivery methods and pricing (see Checkout below). `deliverySurcharge()` lives here (not in `orders.ts`) specifically so client components can import it without pulling the server-only Supabase client into the browser bundle.
- **`faq.ts`** / **`faq.en.ts`** — `generalFaq` (site-wide) + each product's own `faq` array, assembled into categories by `getFaqCategories()`. `getFeaturedFaq()` picks fixed indices for the homepage teaser — appending new FAQ entries at the end of an array is safe, inserting in the middle isn't.

## Checkout & delivery (`src/components/{ShippingForm,CheckoutView,MercadoPagoBrick}.tsx`, `src/lib/orders.ts`, `src/app/api/checkout-{pro,payment}/`)

Two delivery methods, both **actually charged** at checkout (not left as an after-the-fact WhatsApp negotiation):
- **`envio_nacional`** — national paquetería, $150 MXN flat, requires full `shipping_address`.
- **`recoleccion_casablanca`** — local pickup at one of 11 real Casa Blanca branches in the Guadalajara metro area, $20 MXN, no address needed (just name/email/phone + branch id). Real branch addresses/hours in `shipping.ts`.

`ShippingForm` lets the customer pick the method; address fields are entirely unmounted (not just hidden) when pickup is chosen. `DeliveryInfo` (`orders.ts`) is the discriminated shape passed through: `{ method, shippingAddress: ShippingAddress | null, casablancaBranch: string | null }`. `deliverySurcharge(method)` (in `shipping.ts`) is **always recomputed server-side** in both `/api/checkout-pro` and `/api/checkout-payment` — the client-sent method is validated (`validateDelivery`) but never trusted for the amount, same rule as product prices. The surcharge shows as its own line item in the Mercado Pago preference/description, not silently folded into the total.

`shipping_address` is nullable in the `orders` table (see SQL migrations below) — always check for `null` before rendering it (email templates, admin views).

### Two payment paths
- **Checkout Pro** (`/api/checkout-pro`): creates a Mercado Pago Preference, redirects to their hosted page.
- **Payment Brick** (`/api/checkout-payment`, `MercadoPagoBrick.tsx`): card entry + OXXO cash embedded in `/pago`, resolves synchronously — the route finalizes the order itself (`markOrderAsPaid` + send emails) on `status === "approved"`, but the webhook (`/api/mercadopago/webhook`) still fires too and is the idempotent source of truth (`emails_sent` guards a duplicate send if both race). `"pending"` (OXXO voucher, or a sandbox contingency hold) is left as-is for the webhook to resolve later.

### Verifying a checkout change without a live "approved" payment
The sandbox's `pending_contingency` behavior can make it hard to reach the `approved` email-sending branch on demand. Two read-only/side-effect-safe ways to verify without needing a real approved payment:
1. **Order row correctness** — query Supabase directly (service-role key, read-only): `supabase.from("orders").select("*").order("created_at",{ascending:false}).limit(1)` and check `total`/`delivery_method`/`casablanca_branch`/`shipping_address` match what the checkout UI showed.
2. **Email content correctness** — render the templates directly against a fake `Order` object via `npx tsx -e "..."` importing `businessNotificationEmail`/`customerConfirmationEmail` from `src/lib/email-templates.ts` (pure functions, no network/DB calls) and assert on the returned HTML string. This verifies template logic (branch name vs. address, correct copy per delivery method) independent of Mercado Pago's sandbox mood.

## Supabase (`src/lib/supabase.ts`, `src/lib/orders.ts`)

`getSupabaseClient()` uses the **service_role key** (bypasses RLS) — never import it, or anything that imports it (`orders.ts`), from a `"use client"` component. If a client component needs a pure helper that happens to live near order logic (e.g. `deliverySurcharge`), put the pure function in a content file instead (`shipping.ts`), not in `orders.ts`.

### SQL migrations (`sql/*.sql`)
Migrations are **never run automatically or by Claude** — write the `.sql` file, then ask the user to paste it into the Supabase Dashboard → SQL Editor → Run. This is a deliberate boundary (direct writes to the production database aren't something to do unattended), not a limitation to work around. All migrations so far:
- `schema.sql` — base `orders` table.
- `add-design-files.sql` — `design_file_urls JSONB` column (+ manually-created private Storage bucket `order-designs`).
- `add-delivery-method.sql` — `delivery_method`, `casablanca_branch` columns, drops `shipping_address`'s `NOT NULL`.

**Before assuming a migration ran**: a quick read-only check (`supabase.from("orders").select("<column>").limit(1)`) tells you immediately via the error code (`42703`/`PGRST204` = column doesn't exist) whether it's actually been applied — don't trust "I ran it earlier" from memory across sessions without checking, migrations have been found silently un-run before.

## Agent-readiness

`/mcp` (MCP server, hand-rolled, no SDK), `/a2a` (rule-based agent, JSON-RPC `message/send`), `/llms.txt`, `.well-known/*` manifests. Both are bilingual and pull from the same `products.ts`/`faq.ts`/`gallery.ts` data the human pages render — never a separate/fabricated copy. Markdown content negotiation (`src/middleware.ts` + `src/lib/markdown.ts`) serves the same content as Markdown when `Accept: text/markdown` is preferred over `text/html`, for home/shop/FAQ/blog/product pages.

## Env vars (`.env.local` locally, Vercel for production — never shared between them)

`MERCADOPAGO_ACCESS_TOKEN`, `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY`, `Supa_Store_Stor_SUPABASE_URL`, `Supa_Store_Stor_SUPABASE_SERVICE_ROLE_KEY` (names match Vercel's Supabase integration exactly — never rename), `GMAIL_USER`, `GMAIL_APP_PASSWORD` (an app password, not the regular account password), `BUSINESS_NOTIFICATION_EMAIL`, `BUSINESS_WHATSAPP_NUMBER`.
