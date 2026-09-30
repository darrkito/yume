# Plan: a mobile storefront that feels like an app (studioyume.mx)

Written 2026-09-30.

## Execution status (updated 2026-09-30)

| Phase | Status | Notes / measured |
|---|---|---|
| 0 Baseline | done (numbers below) | Before: first-load JS gz home 232 KB, PDP 249, cart 210, /pago 251; mobile home 9,331 px. After (local prod build): home 208, PDP 212, /pago 214; home 5,133 px, product shelf at y=714. PSI mobile (production, lab-simulated, noisy run to run): home perf 86-95, PDP 82-87, /productos 97, /carrito 98, CLS ≤ 0.006. Real Chrome on production: PDP LCP 0.8 s (image paints with first paint), so PSI's 3.6 s LCP is a Lantern-simulation artifact; not chased. Clarity funnels and recordings review still need the dashboard. |
| B Speed | done | `HeroJarLazy` (matter-js off phones), `sizes` on product images, first hero photo `priority`, no shimmer over priority images, `motion` dependency removed (CSS transform in `LogoUploadNote`, -39 KB gz on PDP/checkout). Mercado Pago SDK confirmed only on `/pago`. Fonts: both are variable fonts, nothing to trim. AVIF not enabled: needs a preview-deploy check because of the Next 16/Turbopack image issue in memory. |
| D Buy box | done except D5/D11 | Delivery-date range ("si apruebas tu prueba hoy", `scripts/check-delivery.ts`), free-shipping nudge chip, swipe + "1/4" counter on product photos. D2/D3 chips and price per piece already existed. D8 done: description + specs + bullets fold behind "Detalles del producto" on phones (open on desktop). Open: D5 upload sheet, D11 share; real recetario/NFC photos and a scale photo come from the owner. |
| A App shell | done except A5 | `TabBar` (hidden on PDP/cart/checkout), Help bottom sheet (native `<dialog>`), hamburger removed, `manifest.ts`, tap/touch/16px-input CSS, safe-area padding. No service worker by design. A5 View Transitions not tried. |
| C Home storefront | done except C3 | Mobile: compact hero, `ProductRail` under the hero, "Cómo funciona" and "Por qué Yume" as swipe rows, tighter padding. 9,331 → 5,133 px (target ≤ 5,500). C3 (headline) waits on owner decision #1. |
| E Cart/checkout | done except CP autofill | In-place option change on cart lines, 6 s undo after removing a line, Specific phone/zip messages (`setCustomValidity`), zip `maxLength`, "what happens next" steps on `/pago/exito`. Form already had autocomplete + inputmode. Open: CP autofill (SEPOMEX licence). |
| G Re-engagement | partly done | "Tu carrito te espera" strip on home when the cart has items; the Cotizar sheet WhatsApp message carries the cart contents. Open: abandoned-checkout email (owner decision #11). |
| Round 3 (2026-09-30) | done, live (`abb73fa`) | Share button (native sheet on phones; WhatsApp/Facebook/Telegram/email/copy-link menu otherwise), design upload sheet (upload or "lo subo después" before buying), Casa Blanca pickup dates (production + 1 business day, PDP and cart), AVIF (production: 32 KB vs 53 KB WebP), page cross-fade (`<ViewTransition>`), headline "Mínimos bajos: desde 1 recetario o 40 stickers". Owner decisions: no countdown, no MSI badge, no gift note, no postal-code autofill, no review pipeline until a Google reviews link exists. |
| Tracking | done | `TrackClicks` sends Clarity events: add_to_cart, buy_now, choose_design, begin_checkout, wa_click, tab_*. Build funnels in the Clarity dashboard. |
| F, H | not started | Need owner decisions #8, #12. |

Follows `PLAN-conversion-ui.md` (Phases 1-3 are done and live). The latest critique scored the site 27/40 (`.impeccable/critique/2026-09-30T00-43-46Z__studioyume-mx.md`).

---

## Owner priorities added 2026-09-30 (implemented)

- **Sales priority order everywhere** (home shelf, shop, cross-sell, MCP/A2A lists): stickers de vinil, stickers de logo, tatuajes temporales, placa NFC, stand NFC, recetario al final. Order is the array order in `src/content/products.ts`.
- **Tatuajes temporales** are a quote-only card (`QuoteCard`, no price, no cart, prefilled WhatsApp message), placed after the two sticker lines. Not a catalog product, per the earlier owner decision.
- **More WhatsApp quote CTAs:** hero button now visible on phones; tab bar "Cotizar" (WhatsApp icon, burgundy) on every tabbed page; `QuoteBand` ("¿Tienes un diseño especial?") under the phone shelf and under the desktop product grid; product page WhatsApp is a full outline button and the sticky buy bar has a WhatsApp icon button beside the main CTA.

## Final state (2026-09-30, end of session)

Live on studioyume.mx: tab bar + Cotizar sheet, manifest (installable, no service worker), product shelf, swipe rows, collapsible details, swipeable photos, share button, upload-or-later sheet, delivery/pickup dates, free-shipping nudge, cart undo/option change/language-correct names, specific form messages, success-page steps, AVIF, page cross-fade, Clarity click events, WhatsApp quote CTAs everywhere, new product order + tattoos quote card, "Mínimos bajos" headline, **branded emails** (confirmation, internal sale, abandoned-checkout reminder with daily cron; migration run, `CRON_SECRET` set, dry run verified).

**Still open** (need the owner, or deferred by decision): real photos of recetario/NFC + a sticker-sheet scale photo (owner will shoot; wire into `product-photos.ts`); Clarity funnels/recordings review (dashboard); review pipeline (waits for a Google reviews link); proof-turnaround claim (waits for a real number); first real reminder send is the daily cron (check the Vercel logs the morning after the first unpaid order ages 24 h). Skipped by decision: countdown, MSI badge, gift note, postal-code autofill.

## 0. Goal and what "better" means

**Goal:** on a phone, studioyume.mx should feel like a native shopping app: instant, thumb-driven, always one tap from buying. It should also make an honest, strong case that Yume is the best place to order custom stickers, recetarios and NFC review plates in Mexico.

**How we measure it.** Record a baseline before Phase A starts (see §3). These are the targets:

| Metric | Source | Target |
|---|---|---|
| Mobile LCP (home, PDP) | PSI lab + Vercel Speed Insights | ≤ 2.0 s (today 1.9-2.4 s) |
| INP | Speed Insights / CrUX | ≤ 150 ms |
| CLS | PSI | ≤ 0.02 |
| First-load JS per route | `next build` output | home ≤ 130 KB, PDP ≤ 150 KB (gz) |
| Home scroll depth before the first product | Playwright at 390 px | ≤ 1.3 screens (today ~2,400 px, about 3 screens) |
| Mobile home total height | Playwright | ≤ 5,500 px (today ~9,900 px) |
| Taps from home to payment | manual count | ≤ 5 for a sticker order with design, ≤ 4 for NFC |
| PDP → add/buy rate, cart → pay rate | Clarity funnels + Vercel Analytics | beat the baseline; review weekly |
| `/impeccable critique` score | re-run after each phase | ≥ 33/40 at the end |

**Out of scope, on purpose:** user accounts, wishlists, on-site search, a native app, a service worker or offline mode, and any new paid service. With a 5-product catalog these add weight and give no conversion benefit (see §1.3).

---

## 1. Research digest: what the best stores do, and what applies to Yume

### 1.1 Amazon / Mercado Libre / AliExpress patterns that matter on mobile

| Pattern | Who does it | Evidence | Applies to Yume? |
|---|---|---|---|
| **Sticky bottom buy bar** on the product page, in the thumb zone | All three | Sticky add-to-cart A/B tests: +5.2% orders, +11.8% add-to-cart clicks (GrowthRock); +10.4% PDP conversion in another study | **Already built** (`ProductPurchase.tsx:271`). Improve it, don't rebuild it (Phase D). |
| **Bottom tab bar** (Inicio / Categorías / Carrito / Cuenta) | ML, Amazon, Ali apps | The main thing that makes a site "feel like an app" | **Yes**, mobile only, and hidden on PDP/cart/checkout, where the buy bar takes its place (the way ML's PDP works). Phase A. |
| **Delivery date, not delivery speed** ("Llega el jueves 9") | ML, Amazon | Baymard: show the delivery date, and a countdown to the cut-off instead of a static clock time | **Yes.** Today we show "Producción 3-5 días + envío 2-5 días", which makes the customer do the math. Compute a real date range. Phase D. |
| **Meses sin intereses** badge next to the price | ML, Amazon MX (MSI on items > $299) | A deciding factor on bigger tickets in MX | **Only if** Yume's Mercado Pago account really offers MSI on these amounts. The owner must check (§7). Most orders are $100-$750, so the benefit is small. Don't show it if it isn't true. |
| **Price per unit** | Amazon | Baymard: 81% of sites fail at this | **Yes, and it's our strongest argument.** "$2.50 por pieza · $2.00 en mayoreo" makes the low price obvious. Phase D. |
| **Shipping cost next to the buy button** | Amazon, ML | Baymard: 67% don't show it; people add to cart just to find the total | Partly done (trust list under the buttons). Move it to the price block and add a free-shipping progress hint. Phase D. |
| **Visible option buttons instead of a dropdown** | Amazon, ML | Baymard: 57% hide options in dropdowns | **Yes.** Quantity chips (40 / 100 / 300 / otra) and color chips (NFC Blanco/Negro). Phase D. |
| **Swipeable photo gallery with a counter "1/5"**, photos showing scale, photos of the product in use | All | Baymard: 37% miss "in scale" photos | **Yes.** Real photos exist for stickers (13 in `public/gallery/`). The recetario and NFC products need photos from the owner. Phase D. |
| **Customer photos + reviews** | All | The strongest social proof | **Not yet: no real reviews exist, and none may be invented** (PRODUCT.md). Build the *collection* pipeline now so real ones start arriving. Phase F. |
| **Clear return/guarantee policy linked from the PDP** | Amazon, ML (Compra Protegida) | Baymard: 44% don't link it; 15% abandon over the policy | **Yes**, as the proof-approval promise ("2 rondas de ajustes"). A refund is never promised unless the owner decides it (§7). |
| **Horizontal product rails** ("Te puede interesar") | All | Keeps the next product one swipe away | **Yes**, CSS scroll-snap, no library. Phase C/D. |
| **Guest checkout, few fields** | Amazon, ML | Baymard: average of 11.3 fields, recommendation is 8; 54% have no address lookup | Guest checkout already exists. Cut the fields and add a **postal-code autofill** (CP → estado, municipio, colonias). Phase E. |
| **Adaptive error messages** | Amazon | Baymard: 93% use generic messages | **Yes**: "Faltan 2 dígitos del teléfono" instead of "Teléfono inválido". Phase E. |
| **Current section highlighted in navigation** | ML | Baymard: 94% don't | Desktop nav already does this. The new tab bar must too. Phase A. |

### 1.2 Mobile "app feel" checklist (what separates an app from a website)

1. Persistent bottom navigation within thumb reach.
2. Instant visual response to every tap (`:active` state within 100 ms, no 300 ms delay, no grey tap flash).
3. Bottom sheets instead of new pages or dropdowns for small choices (quantity, color, menu).
4. Swipe gestures for photos and rails (scroll-snap).
5. No layout jumps (CLS about 0), no full-page white flashes between routes (client navigation + prefetch, optionally View Transitions).
6. It respects the phone itself: safe areas (`env(safe-area-inset-*)`), `100dvh`, 16 px inputs (no iOS zoom), correct keyboards (`inputmode`, `enterkeyhint`, `autocomplete`).
7. Installable (web manifest, icons, theme color, `display: standalone`) but **no install nag banners**.
8. Short screens: each screen has one job and one obvious next step.

### 1.3 What we should NOT copy from marketplaces

- Search bars, filters, faceted categories and "View all" levels: 5 products don't need them. Replace them with "compra por necesidad" chips.
- Fake scarcity ("¡Solo quedan 3!"): the products are made to order and have no stock. This would be false, and it breaks PRODUCT.md principle 5.
- Fake countdown timers and fake "X personas viendo esto": dishonest. They also carry PROFECO risk under Mexican consumer-protection rules on misleading advertising.
- Invented reviews, star ratings and sales counters: explicitly banned.
- Auto-rotating hero carousels, entry popups, a spin-to-win wheel, chat bubbles covering the buy bar.

**The honest version of "they NEED to buy this"** comes from specific value and removing risk, not pressure: lowest real minimum (40/50 pieces vs. the 500-piece minimums typical of print shops), price per piece, a real delivery date, the approval-before-printing guarantee, real photos of real work, local Guadalajara pickup for $20, and payment with card, OXXO or SPEI.

---

## 2. Guardrails (apply to every phase)

From `PRODUCT.md`, `DESIGN.md`, `CLAUDE.md` and `PLAN-conversion-ui.md`. None of these are open for renegotiation in this plan:

- Burgundy `#7c0000` is the only accent. Cream paper, Playfair Display + Karla, soft pill radius, ±1° tilt. **No redesign of the visual identity.** The Swiss-editorial style is a confirmed anti-reference.
- No invented testimonials, reviews, counters or scale claims. No competitor names on any surface.
- Every sticker price leads with **"Primeras 100 piezas"**. Past 100 pieces it's "precio mayoreo". The PDP opens with the minimum selected.
- Shipping is never preselected in the cart or checkout.
- Proof policy: "hasta 2 rondas de ajustes". Never write "reembolso".
- Sentence case everywhere, no letter-spaced uppercase, badges ≥ 12 px, touch targets ≥ 44 px, contrast ≥ 4.5:1.
- No em dashes in new copy.
- ES is canonical. Every change ships ES + EN in the same commit (`src/lib/i18n.ts` `UI[lang]` for chrome, `*.en.ts` for content).
- No new dependencies unless the platform (CSS, HTML, `<dialog>`, scroll-snap, Web Share, View Transitions) cannot do it. Free/open-source only.
- Prices and delivery surcharges are always re-resolved server-side (already true; don't regress it).
- **Scroll-reveal / IntersectionObserver opacity animations on cards are banned.** They caused a real Chromium paint-corruption bug (commit `34a37dc`).
- No `backdrop-filter` on sticky chrome (the header is opaque on purpose, `9fbbc50`). This applies to the new tab bar too.
- Supabase migrations are written by Claude and run by the owner.

---

## 3. Phase 0: baseline and measurement (do this first, ~1 session)

Without a baseline, nobody can tell whether the redesign sold more.

1. **Speed baseline.** PSI API (key in `~/blockchains-click-secrets/psi-api-key.txt`, see `~/pagespeed-performance-playbook.md`), mobile strategy, 3 runs each, taking the median, on: `/`, `/productos`, `/productos/stickers-vinil-impermeable`, `/productos/recetario-medico-personalizado`, `/carrito`, `/galeria`, `/blog/<top post>`. Save the results to `.impeccable/baseline-2026-10/psi.json`.
2. **Bundle baseline.** Save the route table from `npm run build` (first-load JS per route). Suspects to watch: `matter-js` (HeroJar, home only), `motion` (LogoUploadNote, PDP), `@mercadopago/sdk-react` (make sure it only loads on `/pago`).
3. **Geometry baseline.** Playwright at 360×800, 390×844 and 414×896: page height, Y position of the first product card, Y position of the first primary CTA, and number of buttons per page. Save as JSON.
4. **Funnel instrumentation.**
   - Microsoft Clarity is already installed (`layout.tsx`). Set up funnels in the Clarity dashboard: home → PDP → add/buy → cart → `/pago` → `/pago/exito`. Tag key clicks with `clarity("event", "...")` (`add_to_cart`, `buy_now`, `choose_design`, `wa_click`, `begin_checkout`, `tabbar_<tab>`). This is free.
   - Vercel Analytics custom events (`track()`) only work on the Pro plan. Check the plan first. If it's Hobby, Clarity events alone are enough.
   - Also record paid orders per week from Supabase `orders` (status `paid`). That is the real metric.
5. **Session evidence.** Watch 10-20 real mobile Clarity recordings. Write down the three most common rage-clicks or dead-ends. These rank Phases C-E.

**Skills:** `vercel:performance-optimizer` (agent) for the bundle and CWV read, `claude-seo-ai:seo-core-web-vitals` for the PSI read, the Playwright MCP for geometry.
**Done when:** `.impeccable/baseline-2026-10/` exists with PSI, bundle, geometry and funnel numbers, and the top 3 Clarity observations are written into §9 of this file.

---

## 4. Phases

Each phase follows the same loop as `PLAN-conversion-ui.md` (§6 below): edit → typecheck + lint + build → Playwright check at 360/390/414 + a desktop regression check at 1280 → PSI → commit → push → verify in production.

### Phase A: app shell (bottom tab bar, touch feel, installable)

**A1. Mobile bottom tab bar** (new `src/components/TabBar.tsx`, rendered in `layout.tsx` next to `Header`)
- Shown only below `sm`. **Hidden** on `/productos/[slug]`, `/carrito`, `/pago*` and their EN versions, because those pages have their own sticky action bar. Two stacked fixed bars eat about 20% of a 390 px screen.
- Tabs (ES/EN from `UI[lang]`): **Inicio · Tienda · Galería · Carrito (badge with count) · Ayuda**. "Ayuda" opens a bottom sheet with WhatsApp (prefilled message), FAQ, and how ordering works. It does not jump straight to WhatsApp, so WhatsApp stays the secondary goal, consistent with Phase 2 #1.
- Icons are lucide-react (already installed), each with a 12 px label under it. The active tab uses burgundy + `aria-current="page"`. Hit areas are ≥ 48 px. `pb-[env(safe-area-inset-bottom)]`. Opaque `bg-paper-raised` + top border, no blur.
- Add `padding-bottom` to `main` equal to the bar height on the routes where it shows, so the footer and the last CTA are never covered.
- The header gets simpler on mobile. The hamburger menu goes away: its links move to the tab bar, and Blog, Preguntas and Idioma go into the "Ayuda" sheet. The header keeps the logo + cart. Check that nothing reachable today becomes unreachable.
- The cart badge reuses the existing `bump` animation from `Header.tsx`. Move that logic into a small `useCartBump()` hook shared by the header and the tab bar (or keep it in one place).

**A2. Touch feel** (`globals.css`, one block)
- `-webkit-tap-highlight-color: transparent;` plus a real `:active` state on `.btn-soft`, cards and tabs (`transform: scale(.97)` in 80 ms, disabled under `prefers-reduced-motion`).
- `touch-action: manipulation` on interactive elements (removes double-tap zoom delay).
- `overscroll-behavior-y: contain` on sheets and horizontal rails.
- Every input `font-size ≥ 16px` on mobile (prevents iOS zoom). Check `ShippingForm`, `QtyInput`, and the upload note.
- Replace remaining `100vh` with `100dvh`.

**A3. Installable (web manifest, no service worker)**
- `src/app/manifest.ts` (Next built-in): name "Yume", short_name "Yume", `start_url: "/?source=pwa"`, `display: "standalone"`, `background_color`/`theme_color` `#fffbf3`, icons 192/512 + a maskable version generated from `icon.png`, and `shortcuts` for Tienda and Carrito.
- No install banner and no `beforeinstallprompt` nag. Users who want it can add it to their home screen. **Skip the service worker**: offline mode is useless for a checkout that needs the network, and a stale-cache bug on a live store is expensive.

**A4. Bottom sheet primitive** (native `<dialog>` + CSS, no library)
- One `Sheet.tsx`: `<dialog>` with `showModal()`, slides up from the bottom, drag handle, closes on backdrop tap and Esc, focus trap is free with `showModal`, `max-height: 85dvh`, internal scroll.
- Used for: "Ayuda" (A1), quantity/color picker (D3), delivery-date explanation (D4), and the upload step (D5).
- Check first whether `@base-ui/react` (already installed) has a Drawer/Dialog. If it covers this cleanly, use it instead of hand-rolled code.

**A5. Page transitions (optional, last)**
- Next 16 + React 19.2: try `experimental.viewTransition` with `<ViewTransition>` for PDP image → card image continuity. Keep it only if it adds **no** JS weight regression and no CLS. Otherwise drop it. It's nice-to-have, not required.

**Skills for Phase A:** `impeccable` → `adapt` (mobile shell) and `animate` (tap feedback, sheet motion), `craft` (states, stacking contexts: `isolation:isolate` on the tab bar), `vercel-web-design-guidelines` (interaction review), `accessibility` (tab bar + sheet semantics), `vercel:nextjs` (manifest, view transitions).
**Done when:** at 390 px every page (except PDP/cart/checkout) shows the tab bar; the tab bar never covers content or the footer; every tap gives visible feedback; Lighthouse shows the manifest as installable; zero CLS change; keyboard + screen reader can use tabs and sheets.

---

### Phase B: speed (this phase makes the rest feel instant)

**B1. Home hero weight.** `HeroJar` loads `matter-js` (~80 KB min) for a physics toy. On mobile the critique already says "no visual above the fold" (P2).
- Mobile: the hero shows a **real photo** (from `HeroPhotos` / `public/gallery/`) as the LCP element, with `priority` and correct `sizes`. `HeroJar` doesn't render and isn't downloaded below `sm` (`next/dynamic` + render only on `(min-width: 640px)`, checked client-side after mount so SSR stays light).
- Desktop: keep the jar, but load it with `dynamic(() => import(...), { ssr: false })` after idle.
- Check first-load JS on the home route before and after.

**B2. Images.**
- Check that every `next/image` has a real `sizes` value (cards on mobile are ~`calc(100vw - 48px)`; rails ~`70vw`). Missing `sizes` is the most common cause of oversized downloads (see playbook §14).
- Turn on AVIF: `images.formats: ['image/avif','image/webp']` in `next.config.ts`. Check the known Next 16/Turbopack `/_next/image` issue (memory: `feedback_nextjs16_turbopack_image_optimization_broken`) in a preview deploy before trusting it.
- Gallery images are 57-184 KB webp sources. That's fine as sources, provided they're resized through `next/image`.
- Only one `priority` image per page (the LCP).

**B3. Fonts.** Check which Playfair weights/styles are actually used (italic is used in the hero). Limit `Playfair_Display({ weight: [...], style: [...] })` to those. Same for Karla. Fewer font files means a faster first paint.

**B4. Third-party and client JS.**
- Clarity already uses `lazyOnload`. Keep it.
- `@mercadopago/sdk-react` must be imported only on the checkout route (check with the build output).
- `motion` in `LogoUploadNote`: check how much it adds to the PDP. If it's only a spring on one element, replace it with a CSS transition and drop the import from that route.
- Check that `WebMcpProvider` isn't adding meaningful client JS to every route.

**B5. Navigation speed.** Next `<Link>` prefetches in the viewport by default. Make sure product cards and tab-bar links are `<Link>`. The PDP should be statically generated (`generateStaticParams`). Check that it isn't dynamic by accident.

**B6. Budgets in CI (lightweight).** Add a tiny `scripts/check-budget.ts` that parses `.next` build stats and fails if home > 130 KB / PDP > 150 KB of first-load JS. Run it manually in the phase loop. No CI service needed.

**Skills for Phase B:** `vercel:performance-optimizer` (agent), `vercel:react-best-practices`, `impeccable` → `optimize`, `claude-seo-ai:seo-core-web-vitals`, `claude-seo-ai:seo-images-media`.
**Done when:** the §0 speed targets are met on the pages listed in §3, measured with PSI mobile, median of 3.

---

### Phase C: home as a storefront (products in the first 1.3 screens)

Today the mobile home is ~9,900 px, and products start ~2,400 px down. On an app home screen you're **shopping by the first swipe**.

New mobile order (desktop keeps its layout unless the change also helps there):

1. **Hero** (compact, ≤ 1 screen): real product photo · H1 (keep "…desde $100") · one solid CTA "Ver productos" (scrolls to #4, doesn't navigate away) · a single row of 3 trust icons (Aprobación antes de imprimir · Recoge en GDL $20 · Tarjeta, OXXO, SPEI). The WhatsApp secondary button leaves the hero; it lives in the "Ayuda" tab.
2. **"¿Para qué lo necesitas?" chips**, horizontal scroll: Mi consultorio → recetario · Mi marca → stickers de logo · Regalo / fans → vinil · Más reseñas en Google → NFC. These already exist on `/productos` (Phase 2 #4), so reuse the same component.
3. **Owner decision banner** (see §7): replace "Sin pedidos mínimos" with the honest "Mínimos bajos: desde 1 recetario o 40 stickers" if the owner approves.
4. **Product rail**, horizontal scroll-snap, all 5 products: photo, name, "desde $X", price per piece where one applies, one tap → PDP. Cards peek at the edge (~85% width) so users know they can swipe.
5. **"Así quedan"**: the real gallery strip (already built), with thumbnails linking to products.
6. **Cómo funciona**, compacted into a 3-step horizontal row (icon + one line each), ending in "Empieza tu pedido".
7. **Why Yume, in numbers** (true facts only): "Desde 40 piezas" · "$2.50 por sticker, $2.00 en mayoreo" · "2 rondas de ajustes incluidas" · "Hecho en Guadalajara".
8. **FAQ**: top 3 questions only, then "Ver todas".
9. **Final CTA** band.

Remove whatever repeats: the trust trio appears once. The featured-product block is replaced by the rail.

**Skills:** `impeccable` → `distill` (cut length) and `layout`, `cognitive-load-conversion` (one job per section), `persuasive-ux` (reduction + suggestion at the right moment), `journey-mapping` (the 6 personas from the 09-29 critique: Casey, Riley, Jordan, Doctor, Business owner, Gift buyer).
**Done when:** the first product card is visible within 1.3 screens at 390×844, the home is ≤ 5,500 px, each section has exactly one next step, and nothing on it is fake.

---

### Phase D: the product page becomes a "buy box" (biggest conversion lever)

Target order of the mobile PDP from the top (Amazon/ML structure in Yume's style):

**D1. Photo gallery** (`ProductMedia.tsx`)
- Full-width, swipeable (CSS `scroll-snap-type: x mandatory`), with a "1/5" counter and dots. Tap opens the existing zoom lightbox.
- Stickers: 3-5 real photos from `product-photos.ts`, including **one photo that shows scale** (a sheet held in a hand, or next to a phone/coin). The owner needs to shoot this (§7).
- Recetario and NFC: renders until the owner sends real photos. Then show real photos first.

**D2. Title + price block**
- Name. Price as "Primeras 100 piezas: $250" with **"$2.50 por pieza"** under it, plus "precio mayoreo $2.00 por pieza después de 100" as the reward line. Use the data in `TierPricing` and `wholesaleRate()`; don't hardcode it.
- Nuevo badge if `isNew`.
- Payment line: "Tarjeta, OXXO o SPEI con Mercado Pago" + "Meses sin intereses" **only if confirmed** (§7).

**D3. Options as visible chips instead of a dropdown** (Baymard 57%)
- Stickers: chips `40 · 100 · 300 · Otra cantidad` (the last opens a sheet with the stepper/typed input, reusing `QtyInput` and its clamp message). The live line total updates next to it.
- NFC: color chips with a small swatch (Blanco / Negro).
- Recetario: its current variant options as chips.

**D4. Delivery promise with a date** (Baymard: date, not speed)
- New pure helper `estimateDelivery(method, now)` in `src/content/shipping.ts` → `{from: Date, to: Date}` in **business days**, using the real numbers already in copy: production 3-5 + national shipping 2-5, or production 3-5 + Casa Blanca pickup (owner confirms the local pickup lead time, §7).
- Copy: "Recíbelo entre el **jue 9 y el mié 15 de oct**" · "Recoge en Guadalajara desde el **mar 7**". An info icon opens a sheet: "Cuenta desde que apruebas tu prueba digital".
- Whether the clock starts at payment or at proof approval **must be confirmed by the owner** (§7). Until then, the copy says "desde que apruebas tu prueba".
- Small ES/EN date formatter with `Intl.DateTimeFormat('es-MX', …)`. Add one assert-based check script (`scripts/check-delivery.ts`) covering weekends and a month rollover.
- Add a real cut-off countdown ("Pide antes de las 2 pm y empezamos hoy") **only** if the owner actually works to a daily cut-off. Otherwise skip it. A fake one is banned.

**D5. Design upload inside the buy flow** (critique P1, open today)
- The sticky bar already switches to "Elegir diseño" when `needsDesign`. Make the path complete: tapping it opens the upload **sheet** (dropzone + "Lo subo después por WhatsApp" as an explicit choice). After a file or the explicit "después" choice, the bar becomes "Comprar ahora · $X".
- Remove the duplicate inline solid button that the critique found.

**D6. Shipping + free-shipping nudge in the price area**
- "Envío nacional $190 · **gratis desde $750**". When the chosen quantity is close to the threshold: "Agrega 60 piezas más y tu envío es gratis" as a tappable chip that raises the quantity. Reuse the same threshold math the cart already uses.

**D7. Trust + policy, once, collapsed**
- A single "Compra segura" row: proof approval (2 rondas), Mercado Pago protection, made in GDL, WhatsApp support. Tapping it opens a sheet with details. This replaces the repeated trust trio (critique P2: "Primeras 100 piezas ×4", spec grid duplicating bullets).

**D8. Details as accordions** (native `<details>`): Descripción · Medidas y material (only specs the owner has confirmed; never state a material that wasn't verified) · Cómo pido · Preguntas frecuentes (per product, existing data).

**D9. "Completa tu pedido" rail**: the existing `RelatedProducts` logic (relevance fixed in Phase 2 #8), horizontal. For stickers it shows other stickers or NFC first.

**D10. Sticky bar** (existing): price + pieces on the left, **one** CTA on the right (`Elegir diseño` → `Comprar ahora`). It appears once the inline CTA scrolls out of view (already the behavior). Add a small secondary icon button "Agregar al carrito" **only if** the price still fits without truncating at 360 px. The earlier squeeze at 390 px is documented in the code comment, so measure before adding it.

**D11. Share** (gift buyers): a small "Compartir" icon using `navigator.share` (native sheet), shown only when supported. No library.

**Skills:** `impeccable` → `clarify`, `distill`, `layout`, `bolder` (photos first); `cognitive-load-conversion` (option chips, one CTA); `persuasive-ux` (Fogg: reduction = chips + one CTA, tunneling = upload → buy, suggestion = free-shipping nudge at the decision moment, kairos = delivery date by the button); `ux-heuristics-review` (error prevention on quantity/design); `claude-seo-ai:seo-ecommerce` + `claude-seo-ai:seo-schema-jsonld` (keep `Product`/`Offer` schema in sync with the visible price-per-unit and `shippingDetails`/`deliveryTime`, which Google Shopping uses).
**Done when:** at 390 px the photo, price per piece, option chips, delivery date and the first CTA are within the first ~1.5 screens; the design upload can't be skipped silently; no fact appears twice; the schema matches the visible data (Rich Results test).

---

### Phase E: cart and checkout at app speed

**E1. Cart** (`CartView.tsx`, sticky "Pagar" bar already exists)
- A free-shipping progress bar at the top ("Te faltan $140 para envío gratis"). Animate `transform: scaleX`, not width (critique detector finding).
- An estimated delivery date range for the whole cart (max of the items), using `estimateDelivery`.
- Line items: thumbnail, name, variant **changeable in place** (critique: "variant can't be changed in cart"), stepper, remove with a 5 s "Deshacer" snackbar instead of an instant removal.
- The cart WhatsApp link must not look disabled (critique P3).

**E2. Checkout** (`CheckoutView.tsx`, `ShippingForm.tsx`)
- Count the current fields and cut to ≤ 8 for shipping (Baymard). Candidates: merge first/last name into one "Nombre completo"; hide "Referencias" behind "+ Agregar referencias".
- **Postal-code autofill:** the user types a 5-digit CP → estado, municipio and a colonia `<select>` fill in. Free, no paid API: ship a **static JSON derived from SEPOMEX's public dataset** (Correos de México publishes it for download), split per CP prefix and served from `public/cp/<first 2 digits>.json` so each lookup downloads only a few KB. Check the licence/terms of the download first. If it's unclear, skip E2-autofill and keep manual fields.
- Keyboards: `inputmode="numeric"` + `autocomplete="postal-code"` on CP, `inputmode="tel"` + `autocomplete="tel"` on phone, `autocomplete="email"`, and `enterkeyhint="next"` on every field except the last, which gets `"done"`.
- **Adaptive validation**, inline, on blur: "El teléfono debe tener 10 dígitos (llevas 8)", "El código postal tiene 5 dígitos", "Revisa el correo: falta '@'".
- The step indicator already exists. Keep the reduced header/footer.
- Payment: surface the Mercado Pago wallet button prominently as the fastest path for people with an MP account (most mobile buyers in MX have one). Keep Bricks for card/OXXO/SPEI. Labels follow the redirect-vs-stay difference established on 09-19.

**E3. Post-purchase (`/pago/exito`)**
- A clear timeline: "1. Te mandamos tu prueba digital por WhatsApp/correo (en X horas) → 2. Apruebas (hasta 2 rondas) → 3. Producimos (3-5 días) → 4. Envío / recolección". This lowers "did it work?" anxiety.
- A "Compartir con alguien" (Web Share) link for gift orders.

**Skills:** `impeccable` → `harden` (validation, edge cases), `clarify` (error copy), `adapt`; `ux-heuristics-review` (#5 error prevention, #9 recovery); `accessibility` (form errors announced with `aria-describedby` + `aria-invalid`); `vercel-web-design-guidelines` (forms section).
**Test:** a full purchase on localhost with the Mercado Pago TEST sandbox (card `5031 7557 3453 0604`, name `APRO`), both delivery methods, then a `select` on the `orders` row, as described in CLAUDE.md. Never test against production payments.
**Done when:** ≤ 8 shipping fields, the CP lookup works (if the dataset licence is OK), every validation message is specific, and a sandbox order lands correctly for national shipping and for Casa Blanca pickup.

---

### Phase F: honest persuasion and real social proof

This is where "they NEED to buy it" is earned without inventing anything.

**F1. Value framing (copy only, no invented claims)**
- Price-per-piece comparisons against the *typical market minimum*, with no competitor names: "Muchas imprentas piden 500 piezas mínimo. Aquí empiezas con 40." The data is in the local `precios-competencia-2026-09.md`. The public copy uses ranges, never names.
- Risk reversal at every decision point: "No imprimimos nada sin tu aprobación".
- Specificity beats adjectives: "Vinil resistente al agua" only where the material is confirmed, and real photos instead of "alta calidad".

**F2. A real review pipeline (so real social proof starts to exist)**
- After delivery, send a review request. **Option A (recommended, lowest effort):** a link to Yume's own Google Business Profile review form. It's free, the reviews are public and trusted, and Yume sells NFC review plates, so using them itself is also a sales demo.
- **Option B:** an on-site review form (Supabase `reviews` table with a moderation flag, migration run by the owner) with a photo upload, using the same upload path that already exists.
- Show reviews on the site **only once real ones exist**, with the real count ("3 reseñas"). Never pad them. Until then, the gallery of real work is the social proof.
- Ask customers for permission to post their sticker photo in the gallery (a checkbox at order time or in the post-delivery message).
- The owner decides A, B or both (§7).

**F3. Real counters, only if real.** "Pedidos entregados" computed from Supabase `orders` (`paid` + delivered) is displayed **only** after it passes a threshold the owner picks (e.g. ≥ 50). Before that, show nothing.

**F4. Gift framing** (Gift-buyer persona): a "¿Es regalo?" option at checkout (a note to include, no price shown) only if the owner can fulfil it. Otherwise skip.

**Skills:** `persuasive-ux` (the core tool here), `ai-trust-builders` is not relevant (no AI feature). Also `ux-personas` (reuse the 6 personas), `empathy-mapping` (what the doctor vs. the brand owner fear before paying), `claude-seo-ai:seo-eeat` (real business signals: real address city, real photos, real policy pages).
**Done when:** every persuasive claim on the site can be traced to a real fact, the review-request flow is live, and no fabricated element exists (grep for "reseña", "estrellas", "vendidos", "quedan").

---

### Phase G: bring shoppers back (low effort, free)

- **WhatsApp with context:** every WhatsApp link already carries a prefilled message. Add the **cart contents** to the "Ayuda" sheet's WhatsApp message when the cart isn't empty ("Hola, tengo en mi carrito: 100 stickers de vinil ($250). Tengo una duda…").
- **Abandoned checkout:** checkout collects the email before payment and creates a `pending` order. A daily Vercel cron (Hobby allows **daily only**; memory: `feedback_vercel_hobby_cron_daily_only`) could email pending orders older than 24 h, once, via the existing nodemailer/Gmail setup. It needs a `reminder_sent_at` column (migration run by the owner) and consent wording in the checkout. **Do this only after Phases A-E**, and only with the owner's go-ahead (§7).
- Return visitors: the cart already persists (check it's in `localStorage` and survives a reload). Show "Tu carrito te espera (2)" on the home hero when it isn't empty.

**Skills:** `vercel:vercel-functions` / `vercel:env-vars` (cron), `impeccable` → `clarify` (email copy).

---

### Phase H: review and iterate (repeats every 2 weeks)

1. Re-run the §3 baselines and compare.
2. Clarity: funnel drop-off per step, dead clicks and rage clicks on mobile, and 10 recordings of mobile visitors who reached the PDP but didn't buy.
3. Supabase: paid orders per week, average order value, share of orders that took the free-shipping nudge.
4. `/impeccable critique https://studioyume.mx/` → compare against 27/40.
5. Pick the next 3 changes with `low-effort-high-reward`.

---

## 5. Skills map (which skill, when, what for)

| Skill | Phase(s) | Use it for | Don't use it for |
|---|---|---|---|
| `impeccable` (`adapt`, `layout`, `distill`, `clarify`, `bolder`, `animate`, `optimize`, `harden`, `polish`, `critique`) | A-H | The main design driver. It already has `PRODUCT.md`/`DESIGN.md`/`.impeccable/design.json` context, so every sub-command respects the locked identity. | Re-doing the visual identity. |
| `cognitive-load-conversion` | C, D, E | One job per screen, option chips, fewer controls per card | |
| `persuasive-ux` (Fogg) | C, D, F | Reduction, tunneling, suggestion at the right moment, honest social proof | Dark patterns |
| `ux-heuristics-review` | D, E | Error prevention and recovery (quantity, upload, form) | |
| `journey-mapping` + `ux-personas` | C, D | Walk the 6 existing personas through the new flow before building | New invented personas |
| `vercel:performance-optimizer` (agent) | 0, B | Bundle and CWV investigation | |
| `vercel:react-best-practices`, `vercel:nextjs` | A, B | `next/dynamic`, manifest, view transitions, static PDPs | |
| `claude-seo-ai:seo-core-web-vitals`, `seo-images-media`, `seo-mobile` | 0, B | PSI reads, image sizing, mobile SEO checks | |
| `claude-seo-ai:seo-ecommerce`, `seo-schema-jsonld` | D | Keep `Product`/`Offer`/`shippingDetails` true to the new visible data | |
| `accessibility`, `vercel-web-design-guidelines`, `craft` | A, D, E | Tab bar, sheets, forms, states, focus, contrast | |
| `low-effort-high-reward` | 0, H | Ordering the backlog from real Clarity evidence | |
| Playwright MCP | every phase | Real geometry/visual checks at 360/390/414 + 1280 | Trusting a downscaled screenshot (verify with DOM/pixels, playbook §5-6) |
| `ui-ux-pro-max` | A | **Only** its pre-delivery checklist | Its palette/style search (it returned a mismatched palette on 09-11) |
| `taste-skill`, `image-to-code-skill`, `awesome-design-md` | — | **Not in this plan.** They push toward a new visual direction, and the identity is locked. | |

---

## 6. Execution loop per phase (unchanged from the conversion plan)

1. Read the files the phase touches. Check the owner decisions in §7 that the phase depends on.
2. Implement ES + EN together.
3. `npx tsc --noEmit` · `npm run lint` · `npm run build` (+ `npx tsx scripts/check-pricing.ts` if pricing is touched; + the new `check-delivery.ts` / `check-budget.ts`).
4. `npm run start`, then Playwright at 360×800, 390×844, 414×896 and 1280×800: screenshots, `getBoundingClientRect` for the §0 geometry, touch targets ≥ 44 px, no horizontal overflow, the tab bar/sticky bar never covers a CTA.
5. PSI mobile on the changed pages (after the deploy).
6. One commit per phase, pushed right away (standing preference), then a production check on studioyume.mx.
7. Update this file: mark the phase done with its commit hash and record measured before/after numbers.

---

## 7. Owner decisions needed (blockers are marked)

| # | Decision | Blocks |
|---|---|---|
| 1 | **Replace "Sin pedidos mínimos"** with "Mínimos bajos: desde 1 recetario o 40 stickers"? (open since 09-29) | C3 |
| 2 | **Does the delivery clock start at payment or at proof approval?** How long does the proof usually take (hours)? | **D4, E1, E3** |
| 3 | Casa Blanca pickup: how many days after production is the package ready? | D4 |
| 4 | Is there a real daily cut-off time ("pide antes de las X")? If not, no countdown. | D4 (optional part) |
| 5 | Does the Mercado Pago account offer **meses sin intereses**, from what amount? | D2 |
| 6 | Photos: recetario and NFC plate/stand (real), plus one **scale** photo of a sticker sheet in a hand | D1 |
| 7 | Confirmed material specs to state (vinil, laminado, medidas) | D8 |
| 8 | Reviews: Google Business link (A), on-site reviews (B), or both? Gallery-permission checkbox? | F2 |
| 9 | Minimum real-orders count before showing "pedidos entregados" | F3 |
| 10 | Gift note at checkout: can you fulfil it? | F4 |
| 11 | Abandoned-checkout reminder email: yes/no, and the consent wording | G |
| 12 | Vercel plan: Hobby or Pro (decides Clarity-only vs. Vercel custom events) | 0 |

The phases without blockers (**0, A, B, C except C3, D1-D3/D5-D11, E except E2-autofill licence**) can start right away.

---

## 8. Suggested order and effort

| Order | Phase | Effort | Expected impact |
|---|---|---|---|
| 1 | 0 Baseline | S | Required to prove anything |
| 2 | B Speed (B1 hero first) | M | Every later phase feels faster; LCP on mobile home |
| 3 | D Buy box | L | Biggest lever: most purchase decisions happen on the PDP |
| 4 | A App shell | M | The "feels like an app" part; navigation always one thumb away |
| 5 | C Home storefront | M | Products in the first swipe |
| 6 | E Cart/checkout | M-L | Removes the last abandonment reasons |
| 7 | F Real proof pipeline | S (A) / M (B) | Builds the social proof that's missing today |
| 8 | G Re-engagement | S-M | Recovers abandoned carts |
| — | H Review | S, every 2 weeks | Keeps it honest with data |

D comes before A on purpose: a nicer shell around the same PDP won't sell more, while a better PDP sells more even without the shell.

---

## 9. Findings log (fill in during Phase 0 and H)

- Baseline date:
- PSI mobile (home / PDP / cart):
- First-load JS (home / PDP):
- Mobile home height / first product Y:
- Clarity top 3 dead-ends:
  1.
  2.
  3.
- Paid orders/week (Supabase):

---

## Sources

- Baymard, Mobile UX Trends 2026: 10 Best Practices: https://baymard.com/blog/mobile-ux-ecommerce
- Baymard, Product Page UX Best Practices 2026: https://baymard.com/blog/current-state-ecommerce-product-page-ux
- Baymard, Checkout UX Best Practices: https://baymard.com/blog/current-state-of-checkout-ux
- GrowthRock, Sticky add to cart A/B test: https://growthrock.co/sticky-add-to-cart-button-example/
- The Good, Sticky add to cart: https://thegood.com/insights/sticky-add-to-cart/
- Next.js, PWA guide: https://nextjs.org/docs/app/guides/progressive-web-apps
- El Imparcial, Amazon MX meses sin intereses conditions (2026-02): https://www.elimparcial.com/dinero/2026/02/18/amazon-lanza-ofensiva-contra-mercado-libre-en-mexico-y-baja-comisiones-y-reduce-costos-de-envio-para-impulsar-a-pymes/
- Figma, Mercado Libre design system (Andes): https://www.figma.com/customers/mercado-libre-scales-design-across-latin-america/
