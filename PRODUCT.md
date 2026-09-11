# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two real customer types, dual priority (neither leads):

- **Individuals** ordering custom stickers and personalized goods for themselves or as gifts: characters, pets, personal designs.
- **Businesses and professionals**: medical offices ordering personalized recetarios (prescription pads), and companies/small businesses ordering custom logo stickers for packaging or branding.

## Product Purpose

Yume designs and produces custom stationery and personalized goods made to order in Guadalajara, Jalisco, shipping across all of Mexico. Every piece is approved by the customer via a digital proof before it goes to print.

## Positioning

Flexible purchase quantities instead of rigid large minimums. A customer can order a single personalized recetario, or as few as 40 stickers, rather than the 500-piece (or similarly large) minimums typical of print shops and competitors in this market. Real competitor research put comparable minimums at $319-550 MXN; Yume's tiered pricing starts at $100 MXN.

## Operating Context

Orders are placed either through the website (cart + Mercado Pago checkout, Checkout Pro and Bricks) or via a WhatsApp quote flow for custom/one-off requests. Every order gets a digital proof that the customer approves before production starts. Fulfillment is either national shipping or Casa Blanca local pickup (Guadalajara metro area, 11 branches).

## Capabilities and Constraints

- Real Next.js e-commerce site, not a mockup: Mercado Pago payments (Checkout Pro + Bricks), Supabase order storage, real webhook-verified payment confirmation, transactional emails.
- Fully bilingual (ES canonical, EN at real translated slugs under `/en`), not a machine-translated mirror.
- Current catalog: 3 products (recetario médico personalizado, etiquetas/stickers de logo, stickers de vinil de uso general), each with real tiered-quantity pricing via a `variants` mechanism.
- Real gallery of past sticker work (13 real production photos), including licensed-character fan art (Sanrio, Pokémon, Zelda, etc.) — an informed, deliberate choice by the business owner to include and SEO-target by character name, made with awareness of the IP-enforcement risk.
- No fabricated testimonials, case studies, reviews, or social proof anywhere on the site — explicit standing policy. The business launched 2026-08-27 and has no real customer testimonials yet; none should be invented to fill that gap.

## Brand Commitments

- Name: **Yume**. Tagline: "Papelería creativa y artículos personalizados."
- Fixed color anchors: burgundy accent (`#7c0000` / deep `#560000`) and warm cream paper tones — this is Yume's own original brand identity, not a placeholder to be redesigned away.
- Typography: Playfair Display (display/headlines) + Inter (body) — Playfair is Yume's own pre-existing brand typeface.
- Real wordmark logo with a burgundy dot mark (`logo-yume-wordmark.webp`).
- Real contact channels: WhatsApp `3334005135`, Instagram `@studioyume.mx`, email `yume.studiomx@gmail.com`.
- Voice: warm, specific, honest about being a small real business in Guadalajara — never corporate-generic, never overstating scale.

## Evidence on Hand

- Real product photography for all 3 catalog products.
- Real gallery photography: 13 phone photos of physical sticker sheets (`public/gallery/`), catalogued into 6 categories.
- Real competitor pricing research (local file, not committed to the repo: business-sensitive).
- No real customer testimonials, case studies, press, or review data exists yet. State this openly in any work that would otherwise want social proof; do not fabricate it.

## Product Principles

1. Every piece is made to order and approved via a digital proof before printing. No surprises, no guessing at what the customer wanted.
2. Flexible purchase quantities over rigid minimums, so small businesses and individuals can order realistic amounts, not warehouse-scale minimums.
3. Real local craft, produced in Guadalajara, not a faceless print-on-demand pipeline — the brand voice should read like a real small business, not a generic global storefront.
4. Ships nationally and reads bilingually, but stays rooted in a real Jalisco identity rather than a generic international tone.
5. Honest content only: no fabricated social proof, reviews, case studies, or scale claims.

## Accessibility & Inclusion

No formal accessibility standard is required. Hold to normal good practice (contrast, visible focus states, alt text, keyboard navigation) as already implemented across the site.
