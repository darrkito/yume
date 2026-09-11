---
name: Yume
description: Warm, handmade custom-stationery brand from Guadalajara, Jalisco
colors:
  paper: "#fffbf3"
  paper-raised: "#fffdf8"
  ink: "#2b211d"
  ink-soft: "#7d6d63"
  brand: "#7c0000"
  brand-deep: "#560000"
  brand-tint: "#f7e6e0"
  line: "#ecdfd0"
  line-strong: "#d8c3ae"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  pill: "999px"
  card: "1.25rem"
  input: "0.75rem"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
  button-outline:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
  button-outline-hover:
    textColor: "{colors.brand}"
  card:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.card}"
---

# Design System: Yume

## Overview

**Creative North Star: "The Desk Drawer"**

Yume's visual system reads like a real desk drawer of a small stationery studio: pieces of paper, stickers, and printed samples set down slightly askew, not squared to a grid. Warmth comes first, precision second, order a distant third. The palette stays close to the material it sells (paper, warm cream, a single deep burgundy ink), typography leans on a real serif rather than a system sans, and the layout tolerates gentle imperfection (a card tilted a degree or two) rather than enforcing machined alignment. This is a deliberate reversal of an earlier Swiss-editorial pass on this same project (bold grotesk display type, mono-caps chrome, sharp 0-radius corners, numbered index cards, a black inversion block) — that direction is a confirmed anti-reference: nothing in this system should drift back toward it.

**Key Characteristics:**
- Warm cream paper background, never stark white or pure black
- One accent color only (burgundy), used deliberately and sparingly
- Soft, generous corner radius everywhere; no sharp rectangles
- Warm-tinted low-alpha shadows instead of hard borders on content surfaces
- A subtle, consistent tilt on card grids for a handmade, non-machined feel
- Serif display type (Playfair Display) paired with a warm, slightly quirky sans body (Karla)
- A single soft "desk lamp" glow on the homepage hero — the site's only background wash, never repeated more than once per page

## Colors

A warm, narrow palette: cream paper, a warm near-black ink, and a single burgundy accent — this is Yume's own original brand identity (predates this design pass), restored and warmed further, not an invented "artisan" palette.

### Primary
- **Yume Burgundy** (`#7c0000`): the one accent color. Primary CTAs, category labels, links, small accent dots. Used deliberately, not decoratively — see the One Accent Rule below.
- **Yume Burgundy Deep** (`#560000`): hover/active state for burgundy surfaces (buttons, links).

### Neutral
- **Warm Paper** (`#fffbf3`): page background everywhere. Never pure white.
- **Paper Raised** (`#fffdf8`): card and raised-surface background, barely lighter than the page so cards read as "sitting on" the paper rather than punched out of it.
- **Warm Ink** (`#2b211d`): primary text color. Warm near-black, never pure `#000`.
- **Soft Ink** (`#7d6d63`): secondary text (body copy, captions, metadata).
- **Blush Tint** (`#f7e6e0`): soft dusty-pink section backgrounds (the featured-product block) and category-tag fills. A tint of the primary, not a second hue.
- **Warm Line** (`#ecdfd0`): hairline dividers and structural borders.
- **Warm Line Strong** (`#d8c3ae`): the slightly stronger border used on outline buttons and product-detail frames.

### Named Rules
**The One Accent Rule.** Burgundy is the only saturated color on the page. Every other surface is warm neutral (paper, ink, blush tint). A second accent hue is never introduced.

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Karla (with system-ui, sans-serif fallback)

**Character:** A warm editorial serif for anything that should feel like it was actually written or printed (headlines, product names), paired with a plain, quiet sans for everything functional (body copy, labels, prices). The pairing reads as "a real stationery shop's signage," not a tech product.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.1): page and section headlines. Mixed case, never uppercase. An italic word in the brand color is the one permitted emphasis device inside a headline (e.g. "hechas con *intención*.").
- **Title** (400/serif, `text-2xl`–`text-3xl`): sub-section headings (values, FAQ, product names on cards).
- **Body** (400, `1rem`, line-height 1.6): all prose copy, max width ~65ch.
- **Label** (600, `0.75rem`, letter-spacing `0.1em`, uppercase): category tags, form labels, small metadata. Used sparingly — this system has no mono-caps chrome layer; a label is a small functional tag, never a persistent decorative strip.

### Named Rules
**The One Emphasis Rule.** To emphasize a word inside a serif headline, use italic of the same family in the brand color. Never mix in a second typeface for emphasis.

## Layout

Standard content container `max-w-6xl` (product/marketing pages) or `max-w-5xl`/`max-w-2xl` (product detail / article reading width), centered with `px-6` side padding. Section rhythm is generous: `py-16` to `py-24` vertical padding per section, matching an "art gallery" density rather than a dense app. Card grids are 2-column on desktop (`sm:grid-cols-2`), collapsing to a single column below `sm`. Product-detail and article layouts use a simple two-column split (image/text) that collapses to a stacked single column on mobile.

## Backgrounds

Flat warm paper (`--paper`) is the default everywhere — most of the site should stay that way. One deliberate exception: the homepage hero (and, if a future page needs the same lift, another single above-the-fold moment per page, never more than one) carries `.desk-lamp-wash`, a soft radial warmth rising from the bottom of the viewport toward the top, like light falling across a desk from a lamp just out of frame. It reads as atmosphere, not decoration — a single soft-edged glow, no visible gradient bands, no second hue (it stays inside the brand-tint family, `hsl(14 55% 90%)`), and never applied to a card, button, or anything that already carries a shadow.

### Named Rules
**The Desk Lamp Rule.** At most one soft radial warmth per page, reserved for a genuine above-the-fold moment (a hero, never a card/button/tag). It never stacks with the Shadow Vocabulary below — a background wash and a surface shadow are two different jobs (page atmosphere vs. object elevation) and never sit on the same element. Never a multi-stop "mesh" gradient, never a second hue.

## Elevation & Depth

Hybrid: soft warm-tinted shadows carry elevation for content (cards, photo frames, buttons); hairline borders carry structure (header bottom edge, footer top edge, section dividers, breadcrumbs separators). The two never stack on the same element — a card either has a shadow or a hairline, not both.

### Shadow Vocabulary
- **Card ambient** (`0 1px 2px hsl(43 25% 20% / 0.06), 0 12px 28px -14px hsl(43 25% 20% / 0.22)`): the resting elevation for `card-soft` — product photo frames, blog cards, product listing cards. Warm-tinted (not neutral gray) so it reads as a paper shadow, not a UI-chrome shadow.
- **Button ambient** (`0 8px 20px -10px hsl(43 25% 20% / 0.55)`, deepening to `0 10px 24px -8px hsl(43 25% 20% / 0.6)` on hover): solid burgundy CTAs.

### Named Rules
**The No-Stack Rule.** A surface is either shadow-elevated (content: cards, photos, buttons) or hairline-structural (chrome: header, footer, dividers). Never both on the same element.

## Shapes

Soft, generous radius everywhere; the system has no sharp corners left. Buttons are full pill (`999px`). Cards, photo frames, and product-detail frames use a large `1.25rem` radius. Form inputs and small tags use a smaller `0.75rem` radius. The cart-count badge and category tag pills are the only genuinely circular/pill elements outside buttons, which is consistent with the pill-button convention rather than an exception to it.

A signature secondary-grid device: alternating cards in a listing (product grids, blog grids) are rotated a subtle `-1.1deg` / `+0.9deg` at rest ("tilt-a" / "tilt-b"), straightening to `0deg` with a small lift on hover/focus. This is the system's one deliberate departure from a machined grid — it should stay subtle (roughly one degree) and never appear on a single, isolated element (only in a grid of 2+ cards, where the scatter reads as intentional rather than accidental).

## Components

Soft and a little imperfect: rounded, warm-shadowed, gently tilted where it fits a grid — buttons and cards should feel handmade rather than machined, never perfectly rigid.

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary** (`btn-soft btn-soft-solid`): burgundy background, white text, warm ambient shadow that deepens on hover; background shifts to Burgundy Deep on hover. `active` state scales to 0.97.
- **Outline** (`btn-soft btn-soft-outline`): paper-raised background, warm-line-strong border, ink text; on hover the border and text both shift to burgundy. The WhatsApp CTA additionally uses a cursor-aware fill sweep (`cta-fill`) that fills the button with burgundy and flips text to white from whichever side the cursor entered.

### Cards / Containers
- **Corner style:** `1.25rem` radius (`card-soft`).
- **Background:** Paper Raised.
- **Shadow strategy:** Card ambient shadow (see Elevation & Depth). No border.
- **Tilt:** alternating `tilt-a`/`tilt-b` in any grid of 2+ (see Shapes), straightening on hover.
- **Internal padding:** `1.5rem`–`2rem` depending on card size.

### Inputs / Fields
- **Style:** `0.75rem` radius, warm-line border, paper background.
- **Variant selection (radio-style option cards):** selected state fills with Blush Tint and a burgundy border; unselected state uses a plain warm-line border.

### Navigation
- Sticky header, warm-paper background at 95% opacity with a light backdrop blur, single hairline bottom border (Warm Line). Nav links are plain-weight Karla, no uppercase, no letter-spacing chrome — the previous mono-caps nav treatment is retired. Active/hover state is a simple color shift to burgundy, no underline or background change.

### Tags / Labels
- Category tags render as small pill badges: Blush Tint background, Burgundy Deep text, no border. Metadata labels (spec names, form labels) are plain uppercase Karla at small size and soft-ink color, not pill-shaped.

## Do's and Don'ts

### Do:
- **Do** use warm-tinted shadows (`hsl(43 25% 20% / …)`) for every card/button shadow — never a neutral or pure-black shadow.
- **Do** keep burgundy as the only saturated accent color on any page.
- **Do** use full-pill radius for every button and small tag, `1.25rem` for cards/frames.
- **Do** apply the tilt-a/tilt-b alternation to any new card grid with 2+ items.
- **Do** keep body copy in Karla and any headline/product-name in Playfair Display.
- **Do** keep `.desk-lamp-wash` to at most one per page, on a genuine above-the-fold moment.

### Don't:
- **Don't** reintroduce sharp (0-radius) corners, mono-caps uppercase chrome strips, numbered index cards, or a black/inverted section — all confirmed anti-references from the Swiss-editorial pass this system replaced.
- **Don't** stack a border and a shadow on the same card or frame.
- **Don't** introduce a second accent hue (no blue, no green, no purple) even for a single small element.
- **Don't** use pure `#000000` or pure `#ffffff` anywhere.
- **Don't** make the tilt effect stronger than about a degree, or apply it to a single isolated card outside a grid.
- **Don't** put a background wash on a card, button, or any surface that already carries a shadow, or use a multi-stop "mesh" gradient anywhere.
