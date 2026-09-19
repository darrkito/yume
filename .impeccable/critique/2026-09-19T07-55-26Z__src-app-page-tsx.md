---
target: homepage + purchase funnel (home, product listing/detail, cart, checkout)
total_score: 30.5
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:/home/darrkito/Yume/src/app/page.tsx"
target_fingerprint: "sha256:d784a2dae5b6875591939e4fd9d8d006e149dc710325c1d44591bb8c6418dcdc"
target_path: /home/darrkito/Yume/src/app/page.tsx
timestamp: 2026-09-19T07-55-26Z
slug: src-app-page-tsx
---
# Design Critique: Yume — Homepage & Purchase Funnel

Method: dual-agent (A: design-review sub-agent · B: detector/browser-evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3.5/4 | Live cart badge, "Agregado" pulse, checkout step label, redirect state |
| 2 | Match Between System / Real World | 4/4 | Spanish-first, MXN, Guadalajara specifics, WhatsApp as first-class channel |
| 3 | User Control and Freedom | 3.5/4 | Editar envio, qty controls, variant re-selection all present |
| 4 | Consistency and Standards | 2.5/4 | Same solid-burgundy full-pill used for two unrelated actions (buy vs WhatsApp quote) |
| 5 | Error Prevention | 3/4 | Typed inputs, required fields, radio-card delivery selection |
| 6 | Recognition Rather Than Recall | 3.5/4 | Order summary and variant label persist through every step |
| 7 | Flexibility and Efficiency | 3/4 | Comprar ahora vs Agregar al carrito is a real, used dual-path |
| 8 | Aesthetic and Minimalist Design | 2/4 | Cart inserts a full 3-card cross-sell grid between line items and pay button |
| 9 | Error Recovery | 2.5/4 | Errors render as plain text, not visually distinct |
| 10 | Help and Documentation | 3/4 | FAQ accordions placed near the decision points they answer |
| Total | | 30.5/40 | Good (76%) |

## Design Specificity Verdict

Mostly authored specifically for Yume: tiered per-piece pricing with visible savings math, the
"no minimums" claim tied to a real competitor number, the WhatsApp-quote parallel path, Casa
Blanca pickup branching, digital-proof promise at the right trust moments. Slips toward generic
default behavior in two places: the cart's "you might also like" cross-sell, and the header's
WhatsApp CTA sharing identical visual weight with the real buy button sitewide.

Detector ran clean (exit 0) on 9 core funnel files: only 4 advisory findings, all the same rule
(design-system-font-size) - the "Nuevo" badge and cart-count badge sit at 10px, below DESIGN.md's
smallest documented step (Label, 12px). No contrast/palette/spacing antipatterns fired.

Browser evidence: zero console errors on any page/viewport, no broken images, every touch target
measured >=44x44px, mobile sticky buy bar on PDP verified live and working. One real measured a11y
failure: the selected delivery-method card on /pago computes to 4.09:1 contrast (Soft Ink on Blush
Tint), below the 4.5:1 AA floor.

## Overall Impression

Purchase mechanics are well-built and checkout is more disciplined than the homepage. The real
conversion problem: no single unambiguous "the button" - buy and WhatsApp-quote share identical
visual weight everywhere, including mid-checkout.

## What's Working

1. Trust-before-form sequencing on /pago - security/proof messaging renders above the form fields.
2. Real tier-savings math on the PDP - actual MXN saved and % shown per quantity tier.
3. Progressive disclosure in ShippingForm - address/branch fields only render for their delivery method.

## Priority Issues

[P0] Header WhatsApp CTA competes with the actual buy button on every page, including mid-checkout.
Why it matters: solid burgundy full-pill, identical weight to Comprar ahora/Pagar en linea, present
even on /pago. Gives a committed buyer an equally strong invitation to abandon the paid flow.
Fix: demote header WhatsApp button to the outline/tertiary treatment sitewide.
Command: /impeccable clarify

[P1] Cart page cross-sells with full purchase CTAs before the checkout button.
Why it matters: RelatedProducts renders between line items and pay button. Measured live: primary
CTA requires scrolling past this block on both viewports (1457px desktop, 2179px mobile).
Fix: move RelatedProducts below the CTA/trust list, or drop it from cart entirely.
Command: /impeccable layout

[P1] Homepage front-loads full transactional UI ahead of any trust-building content.
Why it matters: featured-product block and "Mas productos" cards carry live Add to Cart/Buy Now
before trust content (Como funciona, gallery, Por que Yume). Silently commits to a default
quantity tier - a real risk given flexible quantity is the core differentiator.
Fix: keep homepage cards to a single "Ver detalle" CTA; reserve purchase actions for the PDP.
Command: /impeccable distill

[P2] Selected delivery-method card fails WCAG AA contrast (measured).
Why it matters: description text under the selected option computes to 4.09:1 on Blush Tint,
below the 4.5:1 floor, at the exact moment a visitor chooses shipping right before payment.
Fix: use Warm Ink instead of Soft Ink on the selected/tinted state, or darken Blush Tint there.
Command: /impeccable audit

[P2] The two payment-method options at checkout don't explain their real difference.
Why it matters: both options are Mercado Pago; labels don't communicate which supports OXXO/cash
vs card. First-timer has no basis to choose.
Fix: relabel around the real distinction, note both are Mercado Pago-secured.
Command: /impeccable clarify

[P3] No desktop equivalent of the mobile sticky buy bar.
Why it matters: mobile gets a verified persistent buy bar; desktop has none. Low priority given
current page length.
Fix: lightweight sticky summary only if PDP content grows.
Command: /impeccable polish

## Persona Red Flags

Jordan (First-Timer): hero is clear within 5 seconds. Breaks down when the featured-product card's
Agregar al carrito silently adds a default variant - discovers wrong quantity only in cart. At
checkout, two identically-branded Mercado Pago buttons give no basis to choose.

Casey (Distracted Mobile User): mobile header collapses WhatsApp CTA to an icon, less exposed to
the P0 issue than desktop. Worst moment is the cart: must scroll past 3 more purchase decisions
before reaching Pagar en linea (measured 2179px down on an 844px viewport). Sticky buy bar on PDP
is a genuine win.

## Minor Observations

- 4 detector findings (advisory): Nuevo badge and cart-count badge at 10px, below Label (12px).
- Free-shipping progress bar in cart is a legitimate, non-fabricated incentive.
- Floating chat-widget bubble near /pago form content - confirm no overlap with Continuar al pago
  at larger text zoom or shorter viewports.
- Footer trust content duplicates checkout body copy - harmless reinforcement.
- Blanco/Negro variants on NFC stand show identical pricing - confirm intentional.

## Questions to Consider

1. Why is quantity/tier selection (the core differentiator) hidden one click away on the PDP
   instead of visible at the first add-to-cart touchpoint?
2. Has the WhatsApp-quote vs self-serve checkout channel split ever been compared for actual
   conversion, or does "both matter" just mean "both get a big button"?
3. Was cart cross-selling before the pay button deliberately tested against checkout-first?
