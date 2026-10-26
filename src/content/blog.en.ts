import type { BlogPost } from "@/content/blog";
import { priceOf, casablancaBranchNames, recetarioPrice } from "@/content/blog";
import { tierPriceRows } from "@/content/products";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";
import { BLOG_SLUG_EN } from "@/lib/i18n";
import { dulceroPostsEn } from "@/content/blog-dulceros.en";

export const blogPostsEn: BlogPost[] = [
  {
    slug: BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
    title: "Custom Medical Prescription Pads in Guadalajara: A Guide for Your Practice",
    metaTitle: "Custom Medical Prescription Pads in Guadalajara",
    description:
      "What to include on the letterhead, what size to use, and how the process works for ordering custom medical prescription pads if you run a practice in Guadalajara or anywhere else in Mexico.",
    category: "Guides",
    publishedAt: "2026-08-28",
    intro:
      "If you run a practice in Guadalajara, Zapopan, or anywhere in Jalisco, the prescription pad you use every day is also part of your practice's image. A generic one bought at any stationery store doesn't communicate the same thing as one with your letterhead, your license number, and your practice's own design. This guide covers what you need to know before ordering a custom one.",
    sections: [
      {
        heading: "What goes on your letterhead",
        body: [
          "A medical prescription pad's letterhead usually includes: full name, specialty, professional license number (and specialty license, if applicable), and your practice's contact details: address, phone, and, if you want, office hours.",
          "If you share a practice with other specialists or work out of more than one location, it's common to use a separate letterhead per location instead of trying to fit everything onto one: it looks cleaner and avoids confusing the patient.",
        ],
      },
      {
        heading: "Size and paper: what's standard in Mexico",
        body: [
          "The most commonly used size for medical prescription pads in Mexico is 14 × 21.5 cm, on white paper: it's what we use at Yume by default. It's a practical size: it fits in any folder or file without folding and is comfortable to write on by hand.",
          "If your practice handles prescriptions for specific procedures (for example, with a folio number or barcode for some institution), mention it when requesting a quote: that's information that needs to be confirmed before printing, not something to improvise afterward.",
        ],
      },
      {
        heading: "The process: from quote to prescription pad in hand",
        body: [
          "The process doesn't change whether you're in Guadalajara or any other city in Mexico, because the whole design gets approved remotely before printing: you request a quote via WhatsApp or from the online shop, send us your details (or your logo, if you already have one), we send you a digital proof of the letterhead, and only once you approve it does it go to production.",
          "That approval step is what prevents the most common mistake when customizing stationery: sending something to print without having seen the final design, and finding a typo in the license number or phone number only after all 100 sheets are already printed.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: BLOG_SLUG_EN["stickers-personalizados-para-negocios-guadalajara"],
    title: "Custom Stickers for Your Business in Guadalajara: A Quick Guide",
    metaTitle: "Custom Stickers for Your Business in Guadalajara",
    description:
      "How to use custom stickers if you have a brand, a small business, or a stall at bazaars in Guadalajara: what format to order and what file to send for your logo.",
    category: "Guides",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-10-20",
    intro:
      "Guadalajara has a strong small-business scene (bakeries, clothing brands, candle makers, jewelry, coffee) selling at bazaars, pop-up markets, or directly through social media. A sticker with your logo is one of the cheapest ways to make your brand look consistent on every order that goes out, with no need for special packaging.",
    sections: [
      {
        heading: "What they're actually used for",
        body: [
          "The most common uses we see: sealing packaging bags or boxes, sticking on the bottom of products (candles, soaps, jars), closing shipping envelopes, or simply handing them out loose as a little extra with the order: they work like a small business card that also decorates.",
          "If you sell at bazaars or markets in Guadalajara, having stickers with your logo on every paper bag helps people recognize you next time, without spending on expensive custom packaging from day one.",
        ],
      },
      {
        heading: "Custom sticker and label prices",
        body: [
          "We sell by piece count, not by sheet, and there are two options: Logo Stickers & Labels, made for your business logo (50 pieces minimum), and Custom Vinyl Stickers, for any design, character or photo (40 pieces minimum). On both, past 100 pieces every extra piece is at wholesale price, 10% off.",
          "On both you choose the cut (die-cut to your design's shape, or kiss-cut) and the finish: matte, glossy or holographic (holographic adds $0.50 per piece). All of them are water-resistant.",
        ],
        table: {
          headers: ["Quantity", "Logo stickers & labels", "Vinyl stickers (your design)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "What quantity to order",
        body: [
          "Since we sell by the piece, you order the exact quantity you need instead of full sheets: from 50 with your logo, enough to match the order to your business's actual size without buying more than you need.",
          "All of our stickers are water-resistant, so they hold up well on packaging that gets wet or handled often (bags, bottles, shipments). Let us know the shape or size you prefer when requesting a quote, and we'll send you a digital proof before printing.",
        ],
      },
      {
        heading: "Pick up in Guadalajara or get it delivered",
        body: [
          `We don't have a storefront, but we produce in Guadalajara. If you're in the metro area you can pick up your order at one of ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches for $${CASABLANCA_PRICE} MXN: ${casablancaBranchNames}. You choose the branch at checkout.`,
          `If you'd rather have it delivered to your home or business, shipping anywhere in Mexico is $${NATIONAL_SHIPPING_PRICE} MXN. On orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both shipping and pickup are free.`,
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
        ],
      },
      {
        heading: "What file to send for your logo",
        body: [
          "Ideally a PNG, PDF, AI, or SVG with a transparent background: that way the sticker looks clean without a white box around it. If you only have your logo as a JPG or a photo, we can also work with that, but we'll let you know if it needs to be vectorized or improved in quality before printing.",
          "If you don't have a logo designed yet, let us know when you request a quote: we can help you put together something simple based on your brand before moving to production.",
        ],
      },
      {
        heading: "How the process works",
        body: [
          "You order in the online store (choose quantity, cut and finish, and upload your logo) or ask for a quote on WhatsApp first if you have questions. We send you a digital proof with up to 2 rounds of changes, and we print nothing until you approve it: so you never find a typo with every sticker already printed.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you have a physical store in Guadalajara?",
        a: `No. We produce to order in Guadalajara and deliver two ways: pickup at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the metro area ($${CASABLANCA_PRICE} MXN) or home delivery ($${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico). Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "How much do 100 stickers with my logo cost?",
        a: `100 pieces cost $${priceOf("stickers-logo-personalizado", 100)} MXN. Past 100, every extra piece is at wholesale price: for example, 200 pieces are $${priceOf("stickers-logo-personalizado", 200)} and 300 pieces are $${priceOf("stickers-logo-personalizado", 300)} MXN.`,
      },
      {
        q: "What is the minimum order?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How long does my order take if I'm in Guadalajara?",
        a: `The digital proof arrives within 24 hours of payment. Once you approve it, your order is ready for Casa Blanca pickup in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days, or reaches your home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "Are the stickers water-resistant?",
        a: "Yes, all of our stickers and labels are water-resistant.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your company needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["stickers-para-empaques-de-negocio"], BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"]],
  },
  {
    slug: BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"],
    title: "Custom Stationery for Businesses in Jalisco: Why It's Worth It",
    metaTitle: "Custom Stationery for Businesses in Jalisco",
    description:
      "Why investing in stationery with your brand (prescription pads, stickers, and other printed details) makes a difference for businesses and professionals in Guadalajara and the rest of Jalisco.",
    category: "Local Business",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-10-09",
    intro:
      "Whether you run a medical practice or a small business selling at bazaars in Guadalajara, the stationery you use every day (prescription pads, stickers, labels) is one of the cheapest ways to look consistent. It's not the flashiest part of a business, but it's the part the customer or patient is literally holding in their hand.",
    sections: [
      {
        heading: "Consistency before quantity",
        body: [
          "You don't need to redesign your entire business to look more professional: sometimes it's enough for the prescription pad, the delivery bag, and the sticker that seals the package to use the same logo and the same colors. It's cheaper than a full rebrand and the effect is just as noticeable.",
          "That's why at Yume we work made-to-order and tailored to you instead of selling generic templates: every piece is designed with your real details and your real brand, not a mold some other business is also using.",
        ],
      },
      {
        heading: "Made in Guadalajara, shipped across Mexico",
        body: [
          "We're based in Guadalajara, Jalisco, and although we don't have a physical storefront to visit: the whole process happens remotely, with a digital proof you approve before printing: we do produce locally and ship anywhere in Mexico.",
          "If you're in the Guadalajara metro area (Zapopan, Tlaquepaque, Tonalá) turnaround tends to be a bit faster simply due to proximity, but the quoting, design, and approval process is the same no matter which city in Mexico you're in.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "If you run a medical practice, the most common entry point is the custom medical prescription pad. If you have a brand or small business, it's usually the stickers with your logo.",
          "You can request a quote directly on WhatsApp or browse the full catalog in the shop: either way, the next step is the same: send us your details or your logo so we can put together the digital proof.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado"],
  },
  {
    slug: BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"],
    title: "How to Order Custom Stationery Online",
    metaTitle: "How to Quote and Order Custom Stationery Online",
    description:
      "How to order custom stationery online in Mexico: what to prepare, how the digital proof works, what it costs and how long your order takes.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "You don't need to visit a physical print shop to get stationery with your brand on it: Yume is an online print shop based in Guadalajara, with the whole process handled remotely and shipping to any city in Mexico. This guide walks through how to quote custom stationery online and order it step by step, so you know what to prepare before reaching out.",
    sections: [
      {
        heading: "The process, step by step",
        body: [
          "Ordering custom stationery online takes five steps and almost everything happens remotely: you request a quote on WhatsApp or in the shop, send us your details or your logo, review a digital proof, approve it, and receive your order by courier or at a Casa Blanca branch. Nothing is printed before you approve it.",
          `1) Request a quote via WhatsApp or from the online shop, telling us which product and quantity you need. 2) Send us your details or your logo/design, depending on the product. 3) We send you a digital proof so you can check everything is correct. 4) You approve the design, and only then does it go to production. 5) You receive your order by courier at the address you give us, anywhere in Mexico, or, if you're in the Guadalajara metro area, pick it up at the Casa Blanca branch of your choice ($${CASABLANCA_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more).`,
          "The only in-person step in the whole process is receiving the package (or picking it up at your Casa Blanca branch): everything else, including requesting a quote and design approval, happens remotely over WhatsApp or email.",
        ],
      },
      {
        heading: "What to have ready before requesting a quote",
        body: [
          "To get a quick quote, have your piece's details and the quantity you want at hand. For a prescription pad that means your name, specialty, license number and practice details; for stickers, your logo or design file. If something is missing, tell us when you request the quote and we'll sort it out together.",
          "For a medical prescription pad: your full name, specialty, professional license number, and your practice's contact details. For logo stickers: your design file (ideally a PNG, PDF, AI, or SVG with a transparent background) and the quantity you want.",
          "If you don't have a finished logo or design yet, tell us anyway when requesting a quote: we can work on it together before reaching the digital proof stage; you don't need to arrive with everything already figured out. On the prescription pad this shows up in the price: there is a no-design option (you already have your design ready) and a with-design option (we design it with you).",
          "If you want to dig into that choice, read our guide to prescription pads with design vs. without design.",
        ],
      },
      {
        heading: "How much custom stationery costs",
        body: [
          `Price depends on the product. The 100-sheet medical prescription pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you. For logo stickers, the first 100 pieces cost $${priceOf("stickers-logo-personalizado", 100)} MXN; past 100 you get wholesale price, 10% off each extra piece.`,
          "Stickers and labels are sold by piece count, not by sheet, so you order the quantity you actually need. The minimum is 50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers. This table shows what each quantity costs:",
        ],
        table: {
          headers: ["Quantity", "Logo stickers & labels", "Vinyl stickers (your design)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long it takes and how you receive your order",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. These timeframes count business days only.`,
          `Shipping anywhere in Mexico is $${NATIONAL_SHIPPING_PRICE} MXN and free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. If you're in Guadalajara or the metro area, you can pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches (${casablancaBranchNames}) for $${CASABLANCA_PRICE} MXN, also free from $${FREE_SHIPPING_THRESHOLD} MXN. You choose the branch at checkout.`,
          "Since the clock starts when you approve the digital proof, replying quickly is the most effective way to get your order sooner. More on timing in our guide to how long custom stickers take to arrive.",
        ],
      },
      {
        heading: "How to review the digital proof without mistakes",
        body: [
          "The digital proof is your moment to fix things before printing. Check spelling, phone number, license number, colors and logo size carefully, because once a piece is printed it can't be changed. We don't send anything to production until you approve it.",
          "On stickers and labels, the proof includes up to 2 rounds of changes. A good habit is to have someone else read it with you: typos in a phone number or license number are the easiest to miss once you've been staring at the design for a while.",
        ],
      },
      {
        heading: "Why you don't need a physical print shop in Guadalajara",
        body: [
          "No, you don't need a physical print shop to order custom stationery. Yume produces in Guadalajara but operates online: you request a quote, approve the design and receive your order without visiting a counter or bringing files on a USB drive, from any city in Mexico.",
          "Although we produce in Guadalajara, Jalisco, we don't operate like a walk-in print shop: we're an online print shop. Your order comes to your door or, within the metro area, to the Casa Blanca branch closest to you. The whole process, from quoting to approving the final design, happens over WhatsApp or email, so the service works the same whether you're in the city or in any other state in Mexico.",
          "That said, if you're in the Guadalajara metro area, turnaround tends to be a bit faster simply due to proximity, though the process to order stationery online in Mexico is identical for the whole country.",
        ],
      },
    ],
    faq: [
      {
        q: "How do I order custom stationery online?",
        a: "You request a quote on WhatsApp or in the online shop, send us your details or your logo, review the digital proof and, once you approve it, your order goes to production. Then you receive it by courier or pick it up at a Casa Blanca branch.",
      },
      {
        q: "How much does a custom medical prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "How much do 100 stickers with my logo cost?",
        a: `The first 100 pieces cost $${priceOf("stickers-logo-personalizado", 100)} MXN. Past 100 you get wholesale price: for example, 200 pieces cost $${priceOf("stickers-logo-personalizado", 200)} MXN.`,
      },
      {
        q: "What is the minimum order for stickers and labels?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "How much is shipping?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico, or $${CASABLANCA_PRICE} MXN if you pick up at a Casa Blanca branch in the Guadalajara metro area. Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your company or practice needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"], BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
    title: "Printed vs. Digital Prescription Pads: Which Is Right for Your Practice?",
    metaTitle: "Printed vs. Digital Prescription Pads",
    description:
      "The advantages and limits of printed medical prescription pads versus digital prescriptions, and why many practices in Mexico still use both instead of choosing just one.",
    category: "Guides",
    publishedAt: "2026-08-31",
    intro:
      "More and more practices are using some form of electronic prescription, but the printed prescription pad is still part of daily life for most doctors in Mexico. Before deciding whether it's worth continuing to print or switching entirely to digital, it's worth looking at what each option actually solves and where it falls short.",
    sections: [
      {
        heading: "What each option solves",
        body: [
          "A digital prescription (from an app, a practice-management system, or an electronic-record platform) has clear advantages: it can be resent by email or WhatsApp to the patient, it's automatically backed up, and it's easier to search in a history. A printed prescription pad, on the other hand, doesn't depend on internet access, battery life, or the system working at that exact moment: the patient leaves the appointment with paper in hand, with no other dependency.",
          "For many patients (especially older ones, or those heading straight to a physical pharmacy) printed paper is still what they expect to receive at the end of an appointment.",
        ],
      },
      {
        heading: "When it makes sense to keep printing",
        body: [
          "If your practice doesn't have (or doesn't want to depend on) a digital system, the printed prescription pad is still the simplest, lowest-friction option: no new platform to learn, no risk of an internet outage stopping the appointment, and the patient leaves with something physical with no extra steps.",
          "It's also common to use it as a backup even if your practice already has a digital system: for the day the system fails, there's no signal, or you simply prefer not to depend on a screen in front of the patient.",
        ],
      },
      {
        heading: "It doesn't have to be all-or-nothing",
        body: [
          "Most of the practices we see in Guadalajara and the rest of Mexico don't pick just one: they use digital for records and follow-up, and printed for whatever the patient takes home that same day. Having a printed prescription pad with your letterhead, your license number, and your practice's details doesn't compete with your digital system: it complements it.",
          "If you decide to order a custom one, the process is the same whether it's your only prescription pad or a backup: request a quote, send us your details, approve a digital proof of the letterhead, and it goes to production.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"],
    title: "Custom Temporary Tattoos for Events and Brands",
    metaTitle: "Temporary Tattoos with Your Logo for Events",
    description:
      "Temporary tattoos with your logo for events, brand activations, and celebrations: what they're used for, what we need to quote yours, and how to order custom temporary tattoos in Mexico.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-06",
    intro:
      "A temporary tattoo with your logo or a design made for the occasion is an effective, affordable way to leave a mark at an event: literally. Temporary tattoos for events work just as well for brand activations as for personal celebrations, and ordering custom temporary tattoos in Mexico is as simple as any other made-to-order product at Yume.",
    sections: [
      {
        heading: "What they're actually used for",
        body: [
          "We see them most often in three contexts: brand activations (trade shows, launches, event booths, promotional giveaways), weddings and quinceañeras (with initials, a date, or an icon related to the celebration), and school or sports events (with the team or institution's logo).",
          "Unlike a sticker, a temporary tattoo is worn by the person: it works like a piece of merchandise people wear and show off for the rest of the event, not something that just stays in a bag.",
        ],
      },
      {
        heading: "What we need to quote yours",
        body: [
          "Your logo or the design you want turned into a tattoo (ideally a high-resolution file), the approximate size you're looking for, and the quantity you need for your event. If the design includes text (a name, date, or phrase), let us know so we can confirm it'll be legible at the final size.",
          "As with any custom product, before producing we'll send you a digital proof of the design to approve: so you can confirm exactly how it'll look before the full quantity gets printed.",
        ],
      },
      {
        heading: "Why go custom instead of generic",
        body: [
          "A generic temporary tattoo (a smiley face, a star, a catalog design) doesn't communicate anything about your brand or your event: it looks the same as the one at any other party or fair. Temporary tattoos with your logo, your colors, or the name of the celebration mean whoever wears them stays directly associated with your brand or event for the rest of the day: which is exactly the point of using one.",
          "We produce in Guadalajara and ship anywhere in Mexico, so you can order custom temporary tattoos no matter what state your event is in. If you have an event or activation coming up and want to quote custom temporary tattoos with your own design, message us directly on WhatsApp with the details.",
        ],
      },
    ],
    relatedProductSlugs: [],
    relatedBlogSlugs: ["temporary-tattoos-for-weddings-events-and-parties", "how-long-do-temporary-tattoos-last-and-how-to-remove-them"],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'm interested in getting a quote for custom temporary tattoos.",
  },
  {
    slug: BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"],
    title: "How to Order Custom Event Invitations",
    metaTitle: "Custom Event Stationery in Mexico",
    description:
      "Event stationery at Yume: what information you need ready to quote custom wedding invitations, a quinceañera, or a corporate event, and how the design and approval process works before printing.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-09-23",
    intro:
      "Whether it's a wedding, a quinceañera, a baby shower, or a corporate event, the invitation is usually the first thing your guests see of the event: it's worth having it match what you're putting together. The invitation is just one piece of your event stationery (along with menus, place cards, or thank-you cards), and here's how the process works to order custom event invitations from Yume.",
    sections: [
      {
        heading: "What information we need",
        body: [
          "To quote, we need: the type of event and the date, the number of invitations you need, the text you want included (names, date, place, time, and any notes like a dress code), and whether you have a style or visual reference in mind.",
          "We also need to know whether you're looking for a printed invitation, a digital one (to share via WhatsApp), or both: the design process is the same, only the final format changes.",
        ],
      },
      {
        heading: "The design and approval process",
        body: [
          "With your details, we put together a design proposal and send it to you as a digital proof. You can request adjustments before approving it: it's much easier to fix a color or a line of text at this stage than after the invitations are already printed.",
          "Once you approve the final design, it goes to production (if you ordered printed ones) or we deliver the final file ready to send (if it's digital, or both).",
        ],
      },
      {
        heading: "Wedding invitations in Guadalajara, shipping across Mexico",
        body: [
          "We produce in Guadalajara, so if you're planning a wedding in the city or metro area the process is the same, with the advantage of a slightly faster turnaround thanks to proximity. But you don't need to be in Jalisco: we quote and ship custom invitations to any state in Mexico, with the same design and approval process from start to finish.",
        ],
      },
      {
        heading: "When to start requesting a quote",
        body: [
          "As with any printed piece, it's worth quoting well ahead of the event: that leaves room to adjust the design without rushing production or shipping. If your event already has a date, you can reach out now even if you haven't nailed down every detail yet.",
          "Tell us the type of event, the approximate date, and the quantity you estimate you'll need, and we'll build the quote from there.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hi, I'm interested in getting a quote for custom event invitations.",
  },
  {
    slug: BLOG_SLUG_EN["stickers-personalizados-para-mascotas"],
    title: "Custom Pet Stickers: Turn Your Dog or Cat Into a Sticker",
    metaTitle: "Custom Pet Stickers",
    description:
      "How to order a die-cut sticker from a photo of your dog or cat: what photo to send, what the final result looks like, and how much it costs at Yume.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "One of the most common requests we get for Waterproof Vinyl Stickers isn't a logo or a cartoon character: it's a photo of someone's pet. Turning your dog or cat into a die-cut sticker of its silhouette is one of our most common orders, and one of the easiest to quote. This guide covers what photo to send, what the result looks like, what it costs, how long it takes, and ideas for gifting or selling pet stickers.",
    sections: [
      {
        heading: "What photo to send",
        body: [
          "Send a photo where your pet is fully visible, well lit, and not blocked by anything else. You don't need a professional photo: a phone is enough. The clearer the outline against the background, the cleaner the die cut around the silhouette turns out.",
          "If you have a few photos of the same pet, send us all of them when requesting a quote: sometimes one works better than another for the cutout, so we can pick the best one together before building the digital proof.",
          "A few practical tips: shoot at your pet's eye level rather than from above, so the face and body aren't distorted; avoid strong backlight, which darkens fur and hides detail; and if the fur is the same color as the background, look for a wall or floor that contrasts. A black dog on a black couch is hard to cut out well.",
          "If your pet won't sit still, take several shots in a row and pick the best. A photo of your pet sitting or lying down also works well, because the silhouette is more compact and the sticker is easier to apply and peel.",
        ],
      },
      {
        heading: "What the result looks like",
        body: [
          "The sticker is cut to the exact shape of your pet's silhouette, or to the full photo if you'd rather keep a background or frame. It isn't a generic square or circle, which is what makes it a die-cut vinyl sticker. Before printing you get a digital proof to confirm the cut and colors.",
          "You can see real examples of pets already turned into stickers in our gallery. The proof works the same as with any other design we work on: nothing is printed until you approve it.",
          "When ordering you choose the cut type: die-cut or kiss-cut. If you're unsure which suits your pet, read our die-cut vs. kiss-cut comparison.",
          "You also choose the finish: matte, glossy, or holographic. For a photo with lots of fur detail, matte and glossy are the most straightforward options; holographic has an extra per-piece cost, which you see when you select it on the product page.",
        ],
      },
      {
        heading: "Quantity and price",
        body: [
          `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}. Vinyl stickers are sold by piece count, not by sheet, with a minimum order of 40 pieces. Past 100, every extra piece is at wholesale price (10% off the base price).`,
          `For reference: 150 pieces come out to $${priceOf("stickers-vinil-impermeable", 150)} and 200 to $${priceOf("stickers-vinil-impermeable", 200)} MXN. Order the exact quantity you need: you pick it or type it in when you place your order.`,
          "It's the same premium vinyl, resistant to water, sun, and scratches, that we use for any other custom design, so it holds up well on water bottles, laptops, or wherever you want to stick it.",
        ],
        table: {
          headers: ["Pieces", "Price"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long it takes and how it's delivered",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
          `Home delivery is $${NATIONAL_SHIPPING_PRICE} MXN and branch pickup is $${CASABLANCA_PRICE} MXN. On orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both are free. If it's a gift with a deadline, quote early so there's room to adjust the proof.`,
        ],
      },
      {
        heading: "Ideas for using pet stickers",
        body: [
          "A pet sticker works as a gift, a keepsake, and a product to sell. The practical way to decide is to think about who will receive it and where it will be stuck, because that drives the size and quantity worth ordering.",
          "For personal use, order a few pieces with your dog or cat's photo and stick them on your water bottle, laptop, or helmet. As a gift, a pet cutout is an easy personal touch for a birthday or for someone who just adopted. If your pet has passed away, a sticker of its silhouette is a simple way to keep its image close.",
          "For pet businesses such as groomers, vet clinics, daycares, or pet stores, you can use photos of your clients' pets (with their permission) or your own pet as a brand image.",
          "If you're organizing an event, such as a wedding where the pet is part of the family, you can also include a sticker of its silhouette among the event details.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I order a sticker with a photo of my dog or cat?",
        a: "Yes. Vinyl stickers are made from your design, character, or photo, and cut to the shape of your pet's silhouette. Before printing you get a digital proof to confirm the cut and colors.",
      },
      {
        q: "What kind of photo works best?",
        a: "One where your pet is fully visible, well lit, and with a clear outline against the background. You don't need a professional photo. If you have several, send them all when requesting a quote and we'll pick the best one together.",
      },
      {
        q: "How much do my pet's stickers cost?",
        a: `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)} MXN. Past 100, every extra piece is at wholesale price: 150 pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces $${priceOf("stickers-vinil-impermeable", 200)}. The minimum order is 40 pieces.`,
      },
      {
        q: "Are the stickers water and sun resistant?",
        a: "Yes. They are printed on premium vinyl that resists water, sun, and scratches, per the product page.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]],
  },
  {
    slug: BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
    title: "Prescription Pad With Design vs. Without Design: Which One to Order?",
    metaTitle: "Prescription Pad With vs. Without Design",
    description:
      "The real difference between ordering your custom medical prescription pad with logo and design work included or print-only, their prices, and when each option makes sense.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "When you request a quote for the custom medical prescription pad at Yume, you'll see two options at different prices: \"without design\" and \"with design.\" It's not just a price difference: it's a real difference in the work we do for you. Here's what each one includes, what you need to have ready, how the process works, and how long it takes, so you can pick the right one without going back and forth.",
    sections: [
      {
        heading: "What each option includes",
        body: [
          `"Without design" ($${recetarioPrice("sin-diseno")}) is for when you already have your letterhead put together (an editable file with your logo, your details, and the layout you want) and you just need us to print it on the 100 Half-Letter sheets of 90 gr Bond paper.`,
          `"With design" ($${recetarioPrice("con-diseno")}) includes designing the letterhead with you from scratch: you give us your details (name, professional license number, specialty, practice address) and we put together a visual proposal, which we adjust with you until it looks the way you want, before printing.`,
          `The price gap between the two is $${recetarioPrice("con-diseno") - recetarioPrice("sin-diseno")}: that's what it costs to have someone build and refine your letterhead instead of you bringing it ready.`,
        ],
        table: {
          headers: ["", "Without design", "With design"],
          rows: [
            ["Price", `$${recetarioPrice("sin-diseno")}`, `$${recetarioPrice("con-diseno")}`],
            ["Sheets per pad", "100", "100"],
            ["Size and paper", "Half-Letter (14 × 21.5 cm), 90 gr Bond", "Half-Letter (14 × 21.5 cm), 90 gr Bond"],
            ["Letterhead", "You send it as an editable file", "We design it with you from scratch"],
            ["Digital proof before printing", "Yes", "Yes"],
          ],
        },
      },
      {
        heading: "When each one makes sense",
        body: [
          "Choose \"without design\" if you already have your letterhead as an editable file and only need it printed; choose \"with design\" if this is your first custom pad, your old one looks outdated, or you don't have the file on hand. The deciding factor is how finished your letterhead is today, not the size of your practice.",
          "If you already worked out your letterhead with a designer or have it from a previous print shop in an editable format, \"without design\" is the faster, more affordable option: we're just producing what you've already sorted out.",
          "If this is your first custom prescription pad, your old one looks outdated, or you simply don't have the editable file on hand, \"with design\" saves you from having to sort that part out yourself or hire someone else before you can print.",
          "A middle case: you have your logo but not a finished letterhead. \"With design\" fits there too, because the work is in laying out your logo and details on the page, not just printing them.",
        ],
      },
      {
        heading: "What you need ready to get started",
        body: [
          "For \"without design\" you need your letterhead as an editable file; for \"with design\" you only need your professional details and, if you have it, your logo. Either way, double-check your details before requesting a quote, because they're what ends up printed on all 100 sheets.",
          "The details that usually go on a letterhead are your full name, specialty, professional license number (and specialty license, if applicable), practice address, phone number and, if you want, office hours. If you're unsure what to include, read our guide on what a medical prescription must include in Mexico.",
          "If you work out of more than one practice, say so when you request the quote: the cleanest approach is usually one letterhead per location. Tell us how many you need on WhatsApp and we'll quote it with you.",
        ],
      },
      {
        heading: "The process is the same either way",
        body: [
          "Whichever option you choose, the approval step is the same: before sending it to production, we send you a digital proof of the final letterhead. Nothing is printed until you approve it, so you can confirm your license number, phone number, and every other detail are correct.",
          "You can switch options during the quoting process if, once you see how it works, you'd rather have us design it: just let us know on WhatsApp before approving the digital proof.",
          "Review the proof calmly, detail by detail: license number, phone number, and address matter most to get exactly right, because once you approve, it goes to production.",
        ],
      },
      {
        heading: "How long it takes and what shipping costs",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the pad reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. Timelines are the same with or without design.`,
          `Shipping anywhere in Mexico costs $${NATIONAL_SHIPPING_PRICE} MXN, and it's free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. The whole design is approved remotely, so the process is the same whether you live in Guadalajara or any other city in Mexico.`,
        ],
      },
      {
        heading: "How to decide in a minute",
        body: [
          "Ask yourself three questions: do I have my letterhead in a file I can edit, do I like how it looks, and do I have all my details on hand? If all three are yes, \"without design\" is enough. If any answer is no, \"with design\" solves that gap within the same order.",
          "And once your pad is sorted, the same letterhead works as the base for other pieces for your practice, like your business cards, so you don't start from scratch each time.",
          "If you're not sure, message us on WhatsApp with your file or logo and we'll tell you which option fits your case before you pay.",
        ],
      },
    ],
    faq: [
      {
        q: "How much does the prescription pad cost with and without design?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What size and paper is the pad?",
        a: "Half-Letter (14 × 21.5 cm), 100 sheets, on white 90 gr Bond paper. It's the same in both options.",
      },
      {
        q: "What file do I need for the without-design option?",
        a: "An editable file of your letterhead, with your logo, your details and the layout you want. If you don't have one, the with-design option covers it.",
      },
      {
        q: "Is anything printed before I approve?",
        a: "No. Before production we send you a digital proof of the letterhead and nothing goes to production until you approve it.",
      },
      {
        q: "Can I switch from without design to with design?",
        a: "Yes. Let us know on WhatsApp during the quote, before approving the digital proof.",
      },
      {
        q: "How long does it take to arrive?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, it reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
      BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
      BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    ],
  },
  {
    slug: BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
    title: "What a Medical Prescription Must Include in Mexico: A General Guide",
    metaTitle: "What a Medical Prescription Must Include in Mexico",
    description:
      "What goes on a medical prescription in Mexico: letterhead, patient details and medication, what NOM-004-SSA3-2012 says, and what to preprint on your pad.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "If you're about to order your first custom prescription pad, it's normal to wonder exactly what information it needs to include. This is general information based on common practice at medical offices in Mexico and Mexico's official clinical-record standard NOM-004-SSA3-2012 (listed at the end): it doesn't replace whatever your professional board, state, or institution specifically requires, so it's always worth confirming with them before printing. Here we separate what stays fixed on the letterhead from what you write for each patient, what the standard asks of what you write, and how to check your design before production.",
    sections: [
      {
        heading: "What NOM-004-SSA3-2012 says about what you write",
        body: [
          "NOM-004-SSA3-2012 regulates the clinical record, not the prescription as a separate form. It asks that medical notes carry the date, time, full name and signature of the author, that medications state dose, route of administration and frequency, and that everything be written legibly, without corrections or strike-throughs.",
          "Those points are in sections 5.10, 5.11 and 6.2.6 of the standard. Section 5.9 adds that notes carry the patient's full name, age and sex. In the parts of the standard we reviewed there is no section dedicated to the prescription, so for the exact format confirm with your professional board, your state or your institution.",
        ],
      },
      {
        heading: "What goes on your letterhead",
        body: [
          "The letterhead is the fixed part of the prescription: your full name, specialty, professional license number (and specialty license, if applicable) and your practice's contact details, such as address, phone and, if you want, office hours. None of it changes from one patient to the next.",
          "These are exactly the details that get preprinted on the letterhead when you order a custom pad: so you don't have to write them by hand on every single prescription, only what changes per patient.",
          "If you work out of more than one practice, the cleanest approach is one letterhead per location, each with its own address and phone, instead of squeezing everything into one design.",
        ],
      },
      {
        heading: "What gets filled in per patient",
        body: [
          "For each patient you write their full name, the date of the visit, the medication with dosage and treatment duration, and your signature. The diagnosis, age or weight depend on how you work and on the dosage. These details change on every prescription, which is why they are not preprinted.",
          "Some practices also add the patient's age or weight when it's relevant to dosage, especially in pediatric practices. To save time, you can ask for the design to leave marked lines or spaces for those details.",
        ],
        table: {
          headers: ["Detail", "Preprinted on the letterhead", "You write it for each patient"],
          rows: [
            ["Name, specialty and license number", "Yes", "No"],
            ["Practice address, phone and office hours", "Yes", "No"],
            ["Patient's full name", "No", "Yes"],
            ["Date of the visit", "No", "Yes"],
            ["Medication, dosage and duration", "No", "Yes"],
            ["Signature", "No", "Yes"],
          ],
        },
      },
      {
        heading: "Why it's worth preprinting the fixed details",
        body: [
          "Preprinting the letterhead prevents mistakes and illegible handwriting in the details that repeat on every prescription: your license number, your specialty and the practice's phone. You approve the design once and every prescription you fill by hand already carries those details, correct and legible.",
          "Every time you write your license number or your practice's phone number by hand, there's a chance for a mistake or for it to come out illegible: which can cause problems if the patient takes the prescription to a pharmacy that checks those details.",
          "And since the standard asks for legible writing without strike-throughs in medical notes, every fixed detail that already comes printed is one less detail that can end up with a correction.",
        ],
      },
      {
        heading: "What the Yume pad includes and how long it takes",
        body: [
          `The Custom Medical Prescription Pad has 100 sheets in Half Letter size (14 × 21.5 cm) on 90 gr Bond paper, white, with your letterhead preprinted. It costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you, and you approve a digital proof before printing.`,
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, anywhere in Mexico.`,
          "If you don't have a logo or letterhead yet, the option with design builds one from scratch with your professional details. If you already have it in an editable format, the option without design is enough.",
        ],
      },
      {
        heading: "What to check before sending it to print",
        body: [
          "Before approving, check four things: that your name and license number match your document, that the phone and address are current, that your board or institution doesn't ask for a different format, and that everything reads clearly on the digital proof. A preprinted mistake is repeated on all 100 sheets.",
          "If your prescriptions need a folio number or barcode for a specific process or institution, say so when you request the quote: it's information that has to be confirmed before printing, not something you can fix afterwards.",
          "Ask someone else to read the digital proof with you, especially the license and phone numbers: it's easy to miss a swapped digit in your own details.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
      BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
      BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    ],
    faq: [
      {
        q: "Does NOM-004-SSA3-2012 say what a prescription must include?",
        a: "The standard regulates the clinical record, not the prescription as a separate form. For medical notes it asks for the date, time, full name and signature of the author, and for medications to state dose, route of administration and frequency.",
      },
      {
        q: "Does a prescription have to be written legibly?",
        a: "Yes. Section 5.11 of NOM-004-SSA3-2012 asks that notes be written legibly, without abbreviations, corrections or strike-throughs. Preprinting the fixed details leaves you less text to handwrite.",
      },
      {
        q: "What gets preprinted and what is handwritten?",
        a: "The fixed letterhead details are preprinted: name, specialty, license number and practice details. You handwrite what changes per patient: their name, the date, the medication with dosage and duration, and your signature.",
      },
      {
        q: "What size is the Yume prescription pad and how many sheets does it have?",
        a: "100 sheets in Half Letter size (14 × 21.5 cm), on 90 gr Bond paper, white.",
      },
      {
        q: "How much does a custom prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "How long does my prescription pad take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Diario Oficial de la Federación (Mexico)",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"],
    title: "Yume vs. Other Online Sticker Print Shops: A Real Price Comparison",
    metaTitle: "Yume vs. Other Sticker Print Shops",
    description:
      "We compared the per-piece price and minimum order of Yume against real Mexican custom-sticker print shops: using real public pricing data.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-09",
    intro:
      "Before requesting a quote for stickers, it's worth knowing whether the price you're being offered is actually competitive. In September 2026 we checked the public prices of several Mexican custom-sticker print shops: here are the real numbers, compared against Yume's.",
    sections: [
      {
        heading: "Is Yume cheaper than other online sticker print shops?",
        body: [
          "On a per-piece basis, Yume sits within the range of the Mexican print shops we reviewed in September 2026 ($1.83 to $11.00 MXN), and it has the lowest minimum order: $140 MXN versus $319-$550 MXN for the competitors we checked.",
        ],
      },
      {
        heading: "How we compared",
        body: [
          "We took the public price each print shop lists on its site for custom stickers and converted it to a per-piece price, while also noting the minimum order in pesos: that makes the comparison fair between businesses that sell by sheet, by roll, or by piece count.",
          "Every price is the one published directly on each competitor's site as of that date: none of them are estimates.",
        ],
      },
      {
        heading: "The numbers",
        body: [
          "Among the Mexican custom-sticker print shops we reviewed, per-piece price ranges from $1.83 to $11.00 MXN, with minimum orders ranging from $319 to $550 MXN: in some cases the real minimum is only reached by buying several full sheets at once.",
          "Yume (Custom Logo Stickers: $3.00 to $2.80 per piece, minimum $150 (50 pieces). Yume) Waterproof Vinyl Stickers: $3.50 to $3.40 per piece, minimum $140 (40 pieces).",
        ],
        table: {
          headers: ["", "Price per piece", "Minimum order"],
          rows: [
            ["Mexican print shops reviewed (public prices, September 2026)", "$1.83 to $11.00 MXN", "$319 to $550 MXN"],
            ["Yume: Custom Logo Stickers", "$3.00 to $2.80 MXN", "$150 MXN (50 pieces)"],
            ["Yume: Waterproof Vinyl Stickers", "$3.50 to $3.40 MXN", "$140 MXN (40 pieces)"],
          ],
        },
      },
      {
        heading: "What this means for you",
        body: [
          "On a per-piece basis, Yume sits within the range of what we reviewed, and the clearest difference is the minimum order: you can order a small number of pieces without buying full sheets.",
          "The clearest difference is in minimum order size: with Yume you can get started for $140 MXN, while the competitors we reviewed require a minimum between $319 and $550: so if you just want to try a small batch, Yume lets you do that without committing to a large order.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"],
    title: "Vinyl vs. Paper: Why Your Custom Stickers Should Be Vinyl",
    metaTitle: "Custom Stickers: Vinyl vs. Paper",
    description: `Vinyl vs paper stickers: when each one makes sense. First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)} MXN, with a digital proof and shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "If you've never ordered custom stickers before, it's easy to miss the difference between vinyl and paper until one gets wet, fades in the sun, or tears when you peel it. Here's the real difference, where it matters most, how to choose the cut and finish, and why at Yume we work exclusively with vinyl.",
    sections: [
      {
        heading: "The difference isn't just the material",
        body: [
          "The main difference is durability. A regular paper sticker gets wet, fades in the sun, and tears easily. Vinyl is a flexible plastic that resists water, sun, and scratches, according to the spec sheet of our vinyl stickers. That is why vinyl lasts longer on surfaces that get used or wet.",
          "A paper sticker works fine for short-lived, indoor use, or anywhere the weather won't get to it. Vinyl holds up well on bottles that get washed, laptops that travel with you, skateboards, or any surface that gets wet or spends time outdoors.",
          "Another difference is what happens when you peel and handle it: paper tears easily if you try to reposition it, while vinyl is flexible. If the sticker will be touched a lot, choose the material that can take that treatment.",
        ],
      },
      {
        heading: "Where the difference matters most",
        body: [
          "It matters most when the sticker gets wet, sits in the sun, or is handled often. On a water bottle, refrigerated packaging, a car, a window, a laptop, or a suitcase, vinyl is the option that actually lasts without fading or peeling off.",
          "For something used once, indoors (like a detail inside a gift box that will never touch water or sun) the difference matters less, but even there, vinyl looks and feels more premium to the touch.",
          "A quick way to decide: ask yourself three questions. Will it get wet? Will it sit in the sun? Will many people touch it? If any answer is yes, order vinyl. If all three are no and it's a one-time use, paper could be enough, but at Yume we only work with vinyl.",
        ],
        table: {
          headers: ["Situation", "What fits best"],
          rows: [
            ["Water bottle, tumbler or cooler", "Vinyl, because of water contact"],
            ["Laptop, suitcase or skateboard", "Vinyl, because of rubbing and scratches"],
            ["Car or window", "Vinyl, because of sun exposure"],
            ["Your brand's packaging", "Vinyl, so it arrives and lasts the same"],
            ["Indoor one-time detail", "The difference matters less, but vinyl feels more premium"],
          ],
        },
      },
      {
        heading: "Why at Yume we only work with vinyl",
        body: [
          "At Yume we only work with vinyl because we'd rather offer one material we know holds up. Both of our sticker products (Custom Logo Stickers and Waterproof Vinyl Stickers) are made from premium vinyl with die-cut or kiss-cut cutting, not paper.",
          "We'd rather offer one material that holds up than a cheaper option that looks fine at first and deteriorates fast. That way, whether the sticker ends up on your brand's packaging, your laptop, or a package you're shipping to a customer, you know it'll arrive and hold up in the same condition.",
          "If your design is a logo for your business, the option is Custom Logo Stickers. If it's a character, a pet, a photo, or any other design, it's Waterproof Vinyl Stickers. Both are sold by piece count, not by sheet.",
        ],
      },
      {
        heading: "Cut and finish: what you can choose",
        body: [
          "With vinyl you choose two things when ordering: the type of cut and the finish. The cut can be die-cut or kiss-cut, and the finish matte, glossy or holographic. Holographic costs an extra $0.50 per piece, which you see when you select it on the product page.",
          "If you're unsure which cut fits you, read our die-cut vs. kiss-cut comparison, where we explain when each one makes sense.",
          "Cut and finish are design decisions: the material stays the same premium vinyl. Before printing you receive a digital proof to confirm how the design looks.",
        ],
      },
      {
        heading: "How much vinyl stickers cost",
        body: [
          `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl stickers and $${priceOf("stickers-logo-personalizado", 100)} MXN for logo stickers. Past 100 pieces, every extra piece is at wholesale price (10% off). The minimum order is 40 pieces for vinyl and 50 for logo stickers.`,
          `As a reference, 150 vinyl pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces cost $${priceOf("stickers-vinil-impermeable", 200)} MXN. Order the exact quantity you need: you pick it or type it in when you place your order.`,
        ],
        table: {
          headers: ["Pieces", "Price"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "Where to design and order your stickers online",
        body: [
          "You can order online without a finished design. Send us your logo, character, photo, or pet via WhatsApp or from the online shop, in whatever format you have, even if it's not ideal, and we'll build a digital proof before printing. You can request size or color adjustments at that stage.",
          `The digital proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments. From the moment you approve it, your order arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          "The whole process happens remotely: you request a quote, approve the design, and receive your order at home no matter what city in Mexico you're in, even though we produce in Guadalajara. To see how Yume compares with other options, check our comparison with online print shops or the guide on where to print stickers in Mexico.",
        ],
      },
    ],
    faq: [
      {
        q: "Do vinyl stickers resist water and sun?",
        a: "Yes. They are printed on premium vinyl that resists water, sun and scratches, according to the product spec sheet. They hold up well on bottles, laptops, skateboards or surfaces that get wet or sit in the sun.",
      },
      {
        q: "Does Yume make paper stickers?",
        a: "No. Both of our sticker products are made from premium vinyl. We'd rather offer one material we know holds up.",
      },
      {
        q: "Which cuts and finishes can I choose?",
        a: "You can choose die-cut or kiss-cut, and a matte, glossy or holographic finish. Holographic costs $0.50 more per piece.",
      },
      {
        q: "How much do vinyl stickers cost?",
        a: `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)} MXN. Past 100, every extra piece is at wholesale price: 150 pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces $${priceOf("stickers-vinil-impermeable", 200)}. The minimum order is 40 pieces.`,
      },
      {
        q: "Are they sold by sheet or by piece?",
        a: "By piece count, not by sheet. You order the exact quantity you need, starting at 40 pieces for vinyl and 50 for logo stickers.",
      },
      {
        q: "Can I see how they'll look before printing?",
        a: "Yes. We send a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We don't print anything without your approval.",
      },
      {
        q: "How long does an order take and how much is shipping?",
        a: `From the moment you approve the proof, your order arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["stickers-personalizados-para-mascotas"], BLOG_SLUG_EN["stickers-personalizados-para-negocios-guadalajara"]],
  },
  {
    slug: BLOG_SLUG_EN["menu-de-boda-personalizado"],
    title: "Custom Wedding Menus: How to Order Yours",
    metaTitle: "Custom Wedding Menus",
    description:
      "Custom wedding menu: what details to have ready, one per guest or per table, how to proofread the text, and how the digital proof works before printing.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "The menu is one of those wedding pieces guests hold in their hand through the whole dinner: it's worth having it match the rest of the event's stationery instead of being generic. This guide covers what to decide before requesting a quote, what text to include, how to proofread it without errors, and how the process works to order yours custom at Yume.",
    sections: [
      {
        heading: "What information we need",
        body: [
          "To quote a wedding menu we need four things: the number of menus, the exact text for each one, the wedding date, and a style idea. With that we prepare the quote and the design proposal. If you haven't settled everything yet, message us anyway and we'll fill in the gaps together.",
          "The quantity is usually one menu per guest or per table, depending on how you want to set it up. The text is the dishes, in serving order. And the visual reference matters most if you want it to match the invitations or other stationery you're already ordering for the same event.",
          "It also helps to know whether the menu will stand alone (one card per place setting) or come together with other details, like the guest's name or assigned table. That choice shapes the design from the start, so settle it before the digital proof.",
        ],
      },
      {
        heading: "One menu per guest or one per table",
        body: [
          "A menu per guest sits at each place setting so everyone has it at hand; a menu per table is shared by the people seated together. The main difference is how many pieces you order and how much text fits comfortably. Choose based on your guest count and the style of the wedding.",
          "Per guest feels more personal and lets you add each person's name in the same design. Per table means fewer pieces and works well if the menu is short or you prefer a single decorative item at the center. If you're unsure, tell us your guest and table counts and we'll help you decide.",
          "Think about your guests' dietary needs too. If the catering includes vegetarian, gluten-free or kids' options, decide whether they go on the same menu or on a separate line, so the design doesn't get crowded and each guest finds theirs quickly.",
        ],
      },
      {
        heading: "What text to include and how to proofread it",
        body: [
          "A wedding menu's text has a title (for example the couple's names or the date), the courses in order, and the dishes for each. Before sending it, confirm every dish name with your caterer: the text you send is exactly what gets printed.",
          "A structure that works: starter, soup or cream, main course, dessert and, if it applies, the drink or toast. You don't need to describe every ingredient. The shorter and clearer it is, the easier it reads in dim light at the table, and the more room the design has to breathe.",
          "To proofread without errors, ask a second person to read the full text, especially proper names, accents and quantities. Also check that the order matches what will actually be served. The digital proof is your chance to request corrections before anything is printed.",
        ],
      },
      {
        heading: "The design and approval process",
        body: [
          "The process has three steps: you send us your details, we send a design proposal as a digital proof, and once you approve it, it goes to production. You can request adjustments before approving. This step exists so no typo ever reaches paper.",
          "It's much easier to fix the order of the dishes or a color at the proof stage than after the menus are already printed.",
          "Once you approve the final design, it goes to production. If you're also ordering invitations or other stationery for the same wedding, everything can be coordinated under the same design line so it reads as one set, not separate pieces.",
        ],
      },
      {
        heading: "How to match it with the rest of your stationery",
        body: [
          "For the menu to feel part of the same event, use the same design line as your invitations: same colors, same typeface, same details. That way the table, the envelope and the gift bag read as one set instead of pieces bought separately.",
          "If you're already ordering invitations, see the guide on quoting them in our custom event invitations post. To seal gift bags or close envelopes with the same design, check the stickers for weddings, and for the keepsake each guest takes home, the wedding favor boxes. The links are below, under Keep reading.",
          "You can also tie in the event's details with temporary tattoos for the dance floor. Once the menu design is ready, ask us to adapt it to the other pieces: reusing the same line saves you from remaking style decisions from scratch.",
        ],
      },
      {
        heading: "When to start requesting a quote",
        body: [
          "Request the menu quote as soon as your catering is locked in, even if minor tweaks remain. That leaves room to review the digital proof, fix the text and receive the order without rushing before the wedding. Quoting early is what reduces stress the most.",
          "Since the menu is usually confirmed once your catering is locked in, it tends to get quoted a bit later than invitations: but it's still worth doing with time to spare, so there's room to adjust the design without rushing production or shipping.",
          "Reach out with the type of event, the approximate date, and the quantity you estimate you'll need, and we'll build the quote from there. We produce in Guadalajara and ship anywhere in Mexico, so the process is the same wherever your wedding is.",
        ],
      },
    ],
    faq: [
      {
        q: "What details do I need to quote a wedding menu?",
        a: "The number of menus, the exact text (the dishes in serving order), the wedding date and, if you have one, a style reference. If you're also ordering invitations or other stationery, let us know so we can match the design.",
      },
      {
        q: "Can I see the design before it's printed?",
        a: "Yes. We send a design proposal as a digital proof and you can request adjustments before approving it. Only once you approve the final design does it go to production.",
      },
      {
        q: "Should I order one menu per guest or per table?",
        a: "Both are common. Per guest sits at each place setting and can include each person's name; per table means fewer pieces. Tell us your guest and table counts and we'll help you choose.",
      },
      {
        q: "Can I match the menu with my invitations?",
        a: "Yes. If you order invitations or other stationery for the same wedding, everything can be coordinated under the same design line so it reads as one set.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: "Yes. We produce in Guadalajara and ship anywhere in Mexico. The design and approval process is the same wherever your wedding is.",
      },
      {
        q: "How much does a custom wedding menu cost?",
        a: "It's quoted case by case based on quantity and design. Message us on WhatsApp with your date and number of menus and we'll prepare your quote.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "dulceros-personalizados"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"],
      BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"],
      BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"],
      BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"],
      BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"],
    ],
    quoteMessage: "Hi, I'm interested in getting a quote for custom wedding menus.",
  },
  {
    slug: BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
    title: "Business Cards for Your Practice: How to Order Them Alongside Your Prescription Pad",
    metaTitle: "Business Cards for Your Practice",
    description:
      "What you need to quote business cards for your medical practice, how the digital proof works, and why it pays to order them with your prescription pad.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "If you've already ordered your custom medical prescription pad, it's common to want a matching business card: it's one of the first things a patient takes away from the visit, along with the prescription. This guide covers what to prepare, how to check your license number, what belongs on the card, and how the quote process works at Yume.",
    sections: [
      {
        heading: "What information we need",
        body: [
          "To quote your card we need your full name, specialty, professional license number (and specialty license, if applicable), your practice's contact details, and the quantity of cards. These are the same details your prescription pad uses, so if you've already ordered one, most of it is ready.",
          "Contact details means the practice address, phone and, if you want, social media, email or website. If you work at more than one practice, tell us which one goes on the card or whether you'd like a different card for each location.",
          "If you already have your letterhead or logo from an earlier piece (like the prescription pad), let us know when requesting a quote: we can reuse the same design on the card so both pieces look consistent instead of building something new from scratch.",
        ],
      },
      {
        heading: "How to check your professional license before printing",
        body: [
          "Before printing, copy your license number exactly as it appears on your official cédula, instead of retyping it from memory. In Mexico the cédula profesional is handled by the SEP's Dirección General de Profesiones, and the exact number is the one that must be printed.",
          "If you applied for your cédula online, the SEP delivers it in digital format by email. According to the SEP's announcement, physical cédulas remain valid, so either one works to copy the exact number. A specialty license is a separate number, so confirm it separately.",
          "A single wrong digit means reprinting the whole run. That's why, when we send you the digital proof, you should check the license number against your document before approving.",
        ],
      },
      {
        heading: "What to put on the card (and what to leave off)",
        body: [
          "A practice card works best with a few legible details: your name, specialty, license number, phone, address and one digital contact. That's a design recommendation, not a rule: your medical association, institution or state may ask for other details, so confirm with them if you work under one.",
          "Leave off anything that changes often. If your hours, phone or fees change every few months, don't print them on a whole run of cards: prefer a stable detail, like your email or a QR code to your website or online booking page.",
          "If you use a QR code, test it with your phone on the digital proof before approving. Also make sure the text is a comfortable size: patients often look at the card days later, at home, not in your office.",
        ],
      },
      {
        heading: "The design and approval process",
        body: [
          "The process is: you send your details, we build a proposal, we send you a digital proof, and we only go to production once you approve it. You can request adjustments on the proof, which is the cheapest moment to fix a mistake.",
          "With your details, we put together a design proposal and send you a digital proof before printing. It's much easier to fix your license number or phone number at this stage than after the cards are already printed.",
          "Once you approve the final design, it goes to production. The process is the same whether you order the card on its own or together with your prescription pad in the same quote. We produce in Guadalajara and ship anywhere in Mexico; we confirm timing and cost for your order when we quote.",
        ],
      },
      {
        heading: "Why order it alongside your prescription pad",
        body: [
          "Ordering together gives you a single letterhead for both pieces: same typography, same colors, same details. Your practice looks more consistent and you don't pay for or coordinate two separate designs. It's the same logic behind a consistent look across all your stationery.",
          `If you already have your letterhead ready, the 100-sheet Half-Letter prescription pad costs $${recetarioPrice("sin-diseno")} MXN. If you want us to design it with you, it costs $${recetarioPrice("con-diseno")} MXN. That same design is the base for your card, so you don't start from zero with each piece.`,
          "If you don't have your custom prescription pad yet, you can quote both together from scratch and we'll put together a single letterhead design that works for both pieces. To understand the difference between the two pad options, read our guide on prescription pads with design vs. without design.",
        ],
      },
      {
        heading: "How to quote your business card",
        body: [
          "Quoting is simple: message us on WhatsApp with your details, the number of cards and, if you have it, your logo or letterhead. Business cards are quoted case by case, so we reply with the price for your specific order, not a generic rate.",
          "To speed things up, have these ready: name and specialty as you want them to appear, license number(s), phone, address, email or social media, quantity, and whether you want the same design as your prescription pad. If you don't have a pad yet, tell us and we'll quote both pieces together.",
        ],
      },
    ],
    faq: [
      {
        q: "What details do I need to quote my business cards?",
        a: "Your full name, specialty, professional license number (and specialty license, if applicable), your practice's contact details and the quantity of cards. If you already have a letterhead or logo, send it so we can reuse the design.",
      },
      {
        q: "Can I use the same design as my prescription pad?",
        a: "Yes. If you already have your letterhead or logo from another piece, like the prescription pad, we can use the same design on the card so both pieces look consistent.",
      },
      {
        q: "Do I see the card before it's printed?",
        a: "Yes. We send a digital proof and only produce once you approve it. Check your license number and phone there, since it's easier to fix them before printing.",
      },
      {
        q: "How much do the business cards cost?",
        a: "They're quoted case by case based on design and quantity. Message us on WhatsApp with your details and we'll prepare a quote for your order.",
      },
      {
        q: "How much is the prescription pad I can order with the card?",
        a: `The 100-sheet Half-Letter prescription pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: "Yes. We produce in Guadalajara and ship anywhere in Mexico.",
      },
      {
        q: "Does my physical cédula work, or do I need the digital one?",
        a: "According to the SEP, physical cédulas remain valid, and anyone who prefers a digital one can request it online. For the card you only need to copy the exact number from your cédula.",
      },
    ],
    sources: [
      {
        label: "SEP: Simplifica SEP el trámite de cédulas profesionales; cédulas físicas mantienen su vigencia (Boletín 142)",
        url: "https://www.gob.mx/sep/prensa/boletin-142-simplifica-sep-el-tramite-de-cedulas-profesionales-cedulas-fisicas-mantienen-su-vigencia-sep",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
      BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
      BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    ],
    quoteMessage: "Hi, I'm interested in getting a quote for business cards for my medical practice.",
  },
  {
    slug: BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    title: "Yume vs. Other Medical Prescription Pad Print Shops: A Real Price Comparison",
    metaTitle: "Yume vs. Other Prescription Pad Print Shops",
    description:
      "We compared the price and what's included in Yume's custom medical prescription pad against real Mexican print shops: using real public pricing data.",
    category: "Guides",
    publishedAt: "2026-09-09",
    intro:
      "Before requesting a quote for your custom medical prescription pad, it's worth knowing whether the price you're being offered is actually competitive: and more importantly, what it includes. In September 2026 we checked the public prices of several Mexican medical-prescription-pad print shops: here are the real numbers, compared against Yume's.",
    sections: [
      {
        heading: "How we compared",
        body: [
          "We took the public price each print shop lists on its site for a 100-sheet, Half-Letter custom medical prescription pad, and noted whether the price includes letterhead design work: not just printing.",
          "Every price is the one published directly on each competitor's site as of that date: none of them are estimates.",
        ],
      },
      {
        heading: "The numbers",
        body: [
          "Among the Mexican prescription-pad print shops we reviewed, prices range from $300 to $900 MXN per batch (from 100 sheets to a full block), on Bond or Opalina paper: and none of the options we checked clarifies or includes letterhead design work as part of the price; in some cases it isn't even mentioned.",
          "Yume: $320 MXN without design (if you already have your letterhead ready) or $400 MXN with design included (we build it with you from scratch), on 90 gr Bond paper, with a digital proof approved before printing.",
        ],
      },
      {
        heading: "What this means for you",
        body: [
          "On base price, Yume is among the most affordable options we reviewed: but none of the others offer design work as part of the price. We didn't find a single print shop advertising \"we design your letterhead with you\" included in the cost, which is exactly what Yume's $400 tier covers.",
          "If you already have your letterhead sorted, Yume's price is already among the lowest we reviewed. If you don't, the with-design tier saves you from having to sort that out yourself before you can print: something none of the competitors we reviewed include in their public pricing.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"],
    title: "How to Get More Google Reviews with an NFC and QR Plate",
    metaTitle: "How to Get More Google Reviews with NFC and QR",
    description:
      "Why Google reviews matter for a local business and how a plate with NFC and a QR code makes it easy for customers to leave one on the spot, with zero friction.",
    category: "Guides",
    publishedAt: "2026-09-15",
    intro:
      "Asking for a Google review is almost always awkward: you spell out your business name, the customer searches for it, sifts through several similar-looking results, and sometimes gives up before finding the right one. A plate with NFC and a QR code solves exactly that step: it goes straight to the correct listing in two seconds, with nothing for the customer to search for.",
    sections: [
      {
        heading: "Why timing matters more than the message",
        body: [
          "The best time to ask for a review is right when a customer is satisfied: at checkout, when picking up their order, on their way out of your office. If in that moment they have to pull out their phone, search for your business by hand, and pick it out among similar results, many simply won't, not because they don't want to leave a review, but because the process took more effort than they were willing to spend right then.",
          "An NFC/QR plate removes that friction: the customer taps their phone or scans the code and lands straight on the \"leave a review\" screen for your listing, with nothing to type and no similar results to pick through.",
        ],
      },
      {
        heading: "NFC and QR together, not one or the other",
        body: [
          "NFC (the same \"tap to pay\" technology already used by bank cards) works with nearly any modern phone, Android or iPhone, with no app to open: the customer just taps their phone against the plate. The QR code is the backup for everything else: phones with NFC turned off, or customers who'd rather just use the camera.",
          "Having both on the same plate covers practically any phone without relying on the customer knowing what NFC even is.",
        ],
      },
      {
        heading: "Where to place it so it actually gets used",
        body: [
          "The spots that work best: next to the register, on the front desk, on the table when the bill arrives, or on the desk at the end of an appointment: anywhere the customer is already in front of you at the moment they decide whether they're satisfied.",
          "The version without a stand sticks directly onto those spots (counter, register, wall); the version with a stand sits upright on a desk or table with nothing to stick down, useful if you move it around often or don't want a permanent adhesive.",
        ],
      },
    ],
    relatedProductSlugs: ["stand-resena-google-nfc", "placa-resena-google-nfc"],
  },
  {
    slug: BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"],
    title: "NFC Plate vs. Printed QR Code: Which One Should You Use for Reviews?",
    metaTitle: "NFC Plate vs. Printed QR Code for Reviews",
    description:
      "Real differences between a plate with an NFC chip and a homemade sign with just a printed QR code for collecting Google reviews at your business.",
    category: "Guides",
    publishedAt: "2026-09-15",
    intro:
      "Printing a QR code on a sheet of paper and taping it to the counter is free and anyone can do it. So why pay for a plate with NFC? The difference isn't whether it works (a printed QR also leads to the review), it's durability, how easy it is to use, and the impression it leaves.",
    sections: [
      {
        heading: "Durability: paper vs. a rigid plate",
        body: [
          "A printed sheet with a QR code wears out fast: it bends, gets wet, fades in the window sun, or just starts looking out of place after a few weeks on the counter. A rigid plate holds up to daily use at a business without discoloring or bending, and it reads as part of the counter, not an improvised notice.",
        ],
      },
      {
        heading: "NFC: one more option for the customer, not a QR replacement",
        body: [
          "A homemade sign only has a QR code: it works, but depends on the customer opening their camera and framing the shot correctly. NFC adds a second way to use it: just tap the phone, no aiming or focusing needed, something more people already recognize from contactless payment terminals. Having both on the same plate means no customer is left unable to use it.",
        ],
      },
      {
        heading: "Brand impression",
        body: [
          "A QR code printed on a letter-size sheet communicates something different than a plate designed to match your brand, in white or black, made to stay on the counter permanently. For a business that already cares about its image (a practice, a café, a shop), the difference shows.",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
  },
  {
    slug: BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"],
    title: "How to Use Your Yume Google Review Plate: No Setup Needed",
    metaTitle: "How to Use Your Yume Google Review Plate",
    description:
      "What we need from you so your NFC and QR plate arrives ready to use, and what to do (and not do) the day it arrives.",
    category: "Guides",
    publishedAt: "2026-09-15",
    intro:
      "Unlike other NFC plates sold \"blank\" that ask you to program them yourself with an app, Yume's plates arrive with the NFC and QR already configured with your business's link from the moment we produce them: you take it out of the box and it's already ready for your customers to use.",
    sections: [
      {
        heading: "What we need from you before we produce it",
        body: [
          "After your purchase we ask for your Google review link over WhatsApp (or your business's exact name as it appears on Google, if you don't have the link handy). We use that to program the NFC and generate the QR code before printing and shipping your plate.",
        ],
      },
      {
        heading: "The day it arrives",
        body: [
          "There's no app to install and nothing to scan to \"activate\" it: the plate arrives already working. Just place it where your customers will see it (counter, register, table) and, if it's the no-stand version, stick it down with the adhesive already on the back.",
          "To test that it works before putting it out, just tap your own phone or scan the QR: it should take you straight to the screen for leaving a review for your business.",
        ],
      },
      {
        heading: "If your business changes its name or Google listing",
        body: [
          "Message us on WhatsApp and we'll sort it out with you: depending on the case, it can be solved by reprogramming the same plate or may require a new one. It's not something the end customer can change on their own from their phone, precisely to prevent anyone else from reconfiguring it without you knowing.",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
  },
  {
    slug: BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"],
    title: "Custom Stationery vs. Generic Templates: What Actually Changes",
    metaTitle: "Custom Stationery vs. Generic Templates",
    description:
      "Custom design vs. template: what your brand loses with a generic template and why a custom print shop in Guadalajara is worth it for your custom stationery in Mexico.",
    category: "Guides",
    publishedAt: "2026-09-23",
    intro:
      "When you're quoting stationery, it's easy to run into two very different kinds of supplier: one who sells you a generic template already made, and one who designs the piece around your brand from scratch. Both solve \"having printed stationery,\" but they don't solve the same problem. Here's the real difference between custom design and a template, and when each one makes sense.",
    sections: [
      {
        heading: "What a generic template is (and why it's so cheap)",
        body: [
          "A generic template is a ready-made design mold where only one detail changes (your name, your logo dropped on top) without touching the rest of the layout: the print shop decides the typography, colors, and composition, not your brand. That's why it's cheap: the same mold gets reused across dozens of different businesses.",
          "The problem isn't that it looks bad, it's that it doesn't look like you: it's common to run into another business using the exact same template, just with the name swapped.",
        ],
      },
      {
        heading: "Custom design vs. template: what changes for your brand",
        body: [
          "With custom design, the piece is built from scratch with your colors, your typography (if you already have one), and your business's or practice's real information, not someone else's mold. That matters more than it seems for custom stationery: it's the piece your customer or patient literally holds in their hand, so it communicates as much as your logo on your storefront.",
          "The other practical difference is the process: with a generic template you usually pick from a closed catalog; with custom design, we send you a digital proof of the final design before printing, so you approve it (or ask for changes) before a single piece goes into production.",
        ],
      },
      {
        heading: "Why choose a custom print shop in Guadalajara",
        body: [
          "At Yume we operate as a custom print shop in Guadalajara, not a template shop: every prescription pad, every sticker, and every piece of custom stationery in Mexico we produce is designed around the real details of whoever ordered it, not a recycled mold.",
          "If you already have a logo or brand identity, we adapt it directly into the piece; if you don't, we build it with you before reaching the digital proof stage. Either way, what you get is a piece that's actually yours, not a template with your name stamped on it.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado"],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-empaques-de-negocio"],
    title: "Guide to Stickers for Business Packaging: How to Use Them and What to Order",
    metaTitle: "Stickers for Business Packaging",
    description:
      "How to use stickers for product packaging: sealing bags and boxes, labeling products, and what to order if you need custom labels for your business or stickers with your logo in Guadalajara.",
    category: "Guides",
    publishedAt: "2026-09-23",
    intro:
      "Packaging is one of the cheapest touchpoints to upgrade in a business: you don't need to change your box or bag, just seal or decorate it with a sticker carrying your logo. This guide covers the most common uses for packaging stickers and what to order depending on the type of packaging you use.",
    sections: [
      {
        heading: "The most common uses for packaging stickers",
        body: [
          "The ones we see most: sealing the flap of a paper or kraft bag, closing a cardboard box, labeling the bottom or lid of a jar, or sticking directly onto the product (candles, soaps, cosmetics). In every case, the sticker does two jobs at once: it closes the packaging and marks it as yours.",
          "If your packaging travels or can get wet (shipments, refrigerated products, drinks), it's worth using a water-resistant sticker instead of a regular paper label, which peels or runs with moisture.",
        ],
      },
      {
        heading: "Custom labels for your business: what format to order",
        body: [
          "For packaging, the most common choice is a round or square sticker, 3 to 5 cm, with the logo centered, sized to look good on a bag flap or the center of a box. If your packaging is a bottle or jar, an oval or rectangular format usually fits the curve better.",
          "At Yume we sell custom labels by piece count, not by sheet: you can order the exact quantity your business needs at a given moment, without buying more just to fill a full sheet.",
        ],
      },
      {
        heading: "Stickers with your logo in Guadalajara: how to get a quote",
        body: [
          "If you have your logo as a PNG, PDF, AI, or SVG with a transparent background, you can send it directly over WhatsApp along with the quantity and size you're after, and we'll prepare a digital proof before printing. If you don't have a finished logo yet, we can also help you put together a simple one to start with.",
          "We produce in Guadalajara and ship anywhere in Mexico, so the same process applies whether your business sells at local markets or ships to other states.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-marca-pequena-vs-grande"],
    title: "Best Stickers for Small vs. Large Brands: What to Order Based on Your Size",
    metaTitle: "Stickers for Small vs. Large Brands",
    description:
      "Affordable stickers in Mexico for a small business just starting out, and custom labels for growing brands ordering in volume: how to pick the right quantity for your actual size.",
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-09",
    intro:
      "A business that's just getting started and a brand already selling in volume don't need the same number of stickers, but a lot of print shops charge them the same way: the same high minimum no matter how small or large the real order is. Here's how to choose between stickers for a small business and larger orders, and why the price shouldn't be the same for both.",
    sections: [
      {
        heading: "If your brand is small: get in without committing to a big order",
        body: [
          "If you're just testing your brand or sell at local markets occasionally, buying 500 pieces at once doesn't make sense: it's money tied up in inventory that might take months to use. That's why we sell by piece count instead of full sheets: the minimum is 50 pieces for $150 on Custom Logo Stickers, or 40 pieces for $140 on Waterproof Vinyl Stickers.",
          "These are some of the most affordable stickers in Mexico to get started with: you can test your design, see how people react, and adjust before committing to a bigger volume.",
        ],
      },
      {
        heading: "If your brand already sells in volume: the per-piece price drops",
        body: [
          "Once your business has steady sales, buying more makes sense: from 100 pieces on, every extra block gets a 10% discount, so the per-piece price drops the more you order. It's the same logic as custom labels for a growing business, just applied at a larger scale: you pay less per piece without switching provider or process.",
          "There's no hard cap in the catalog: if you need a larger volume than the quantity selector shows, request a quote directly over WhatsApp and we'll match the order to your real volume.",
        ],
      },
      {
        heading: "How to pick the right quantity for your stage",
        body: [
          "A simple guide: if you don't yet know how much you'll sell per month, start with the minimum (50 or 40 pieces) and reorder as it runs out. If you already have a known sales pace, calculate 2-3 months of inventory and order directly in the range where the volume discount already applies (100 pieces or more).",
          "The process is identical either way: you send your logo, we send you a digital proof, you approve it, and it gets produced. The only thing that changes is the quantity you pick.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"],
    title: "Stickers for Weddings, Events, and Parties: Ideas and How to Order",
    metaTitle: "Stickers for Weddings, Events, and Parties",
    description: `Stickers for weddings, events, and parties: uses, sizes, and formats. First 100 pieces: $${priceOf("stickers-logo-personalizado", 100)} MXN, with a digital proof and shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-26",
    intro:
      "Custom stickers are trending as a celebration detail: they've become a real hit at weddings, quinceañeras, and parties of every kind, sealing favor bags, decorating the table, or matched to the rest of the event's stationery. A sticker with the couple's names, the event date, or the party's theme is one of the cheapest ways to personalize a celebration: it doesn't replace the invitation or the menu, but it ties everything else together visually. This guide covers the most common uses for stickers at weddings, events, and parties, and what to order depending on the type of celebration.",
    sections: [
      {
        heading: "Why they've become so popular",
        body: [
          "Custom stickers have become popular at celebrations because they're a small detail that shows up in photos and on every gift a guest takes home, they cost little per piece, and they stick to almost any surface. That makes them easy to add to any budget or event size.",
          "It's a trend we see grow wedding after wedding, party after party. Unlike a generic party favor, a sticker carries the name, date, or theme of your celebration, so it feels made for that event instead of bought off a shelf.",
        ],
      },
      {
        heading: "The most common uses at a celebration",
        body: [
          "The most common uses are sealing candy or gift bags, closing invitation envelopes, decorating the centerpiece or welcome sign, and sticking on bottles or cans for the toast. At weddings and quinceañeras they carry names or the date; at themed parties, the theme's design.",
          "By type of celebration, these are the ideas requested most:",
          "Wedding: the couple's initials and the date to seal favor bags, invitation envelopes, or jars on the candy table. Quinceañera: the honoree's name or the party theme on bags, bottles, and keepsakes.",
          "Baby shower, baptism, or first communion: the guest of honor's name or a theme icon on small boxes and keepsake bags. Kids' party: the theme's character or design on favor boxes and surprise bags. Bachelorette party or company event: a phrase, a logo, or the event name on bottles and gifts for attendees.",
          "If you're already ordering custom invitations or a custom wedding menu, using the same design on the stickers makes the whole event feel like one cohesive piece, not separate items bought apart from each other.",
        ],
      },
      {
        heading: "What format to order depending on the use",
        body: [
          "For favor bags or envelopes, a round or oval sticker 3 to 5 cm is the most common size. For bottles or cans, a rectangle or a die-cut matching your design's shape works best, and if it will get wet, order water-resistant vinyl instead of paper.",
          "On curved surfaces like a bottle or a can, a die-cut to your design's exact shape looks cleaner than a generic square. If you're unsure between die-cut and kiss-cut, read our die-cut vs. kiss-cut comparison.",
          "If the sticker will be on something that gets wet (a cooler, a bottle, outdoors), vinyl is the safe choice; to see how it differs from paper, check our vinyl vs. paper stickers guide. When ordering vinyl you also pick the finish: matte, glossy, or holographic (holographic has an extra per-piece cost, which you see on the product page).",
          "At Yume these sell by piece count, not by sheet: you can order exactly the number of guests or tables your event has, without buying more than you need.",
        ],
      },
      {
        heading: "How many stickers to order and what they cost",
        body: [
          `First 100 pieces: $${priceOf("stickers-logo-personalizado", 100)} MXN for custom logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl stickers. Past 100, every extra piece is at wholesale price. The minimum order is 50 pieces for logo stickers and 40 for vinyl, so you can order close to your event's real guest or table count.`,
          "A simple way to count: one piece per guest if they go on bags or bottles, one per envelope if you're sealing invitations, plus a few extra for tables, signs, and photos. Price by quantity:",
        ],
        table: {
          headers: ["Pieces", "Custom logo stickers", "Vinyl stickers"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How to match them with the rest of your stationery",
        body: [
          "Use the same palette, typeface, and initials on the sticker, the invitation, and the menu, and the event reads as one piece. The most practical approach is to define the design once and order each piece from that same file, so colors and style match everywhere.",
          "If you don't have your stationery yet, start with the invitation and the wedding menu, and leave the stickers for last: the design will already be set. For guest details you can also look at our favor boxes for weddings, quinceañeras, and baby showers and our temporary tattoos for parties.",
        ],
      },
      {
        heading: "How long it takes and how it's delivered",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} MXN and branch pickup $${CASABLANCA_PRICE} MXN; on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both are free. If your event has a fixed date, order with some margin so you can adjust the proof before production.`,
        ],
      },
      {
        heading: "How to get a quote for yours",
        body: [
          "To get a quote, send us the names, the date, the style or colors (or your finished design), and the quantity you need. We prepare a digital proof before printing, and nothing is produced until you approve it. We produce in Guadalajara and ship across Mexico.",
          "If your event already has invitations or a custom menu, let us know: we can match the sticker to the same design. The process is the same no matter where your wedding, event, or party is.",
        ],
      },
    ],
    faq: [
      {
        q: "What sticker size works for favor bags?",
        a: "A round or oval sticker 3 to 5 cm is the most common size for favor bags and invitation envelopes.",
      },
      {
        q: "How much do stickers for my event cost?",
        a: `First 100 pieces: $${priceOf("stickers-logo-personalizado", 100)} MXN for custom logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl stickers. Past 100, every extra piece is at wholesale price: 200 vinyl pieces cost $${priceOf("stickers-vinil-impermeable", 200)} MXN.`,
      },
      {
        q: "What is the minimum order?",
        a: "50 pieces for custom logo stickers and 40 pieces for vinyl stickers. They sell by piece count, not by sheet.",
      },
      {
        q: "Can I order stickers with my wedding names and date?",
        a: "Yes. Send us the names, the date, and the style or colors you want, or your finished design, and we'll send a digital proof before printing.",
      },
      {
        q: "Do the stickers hold up on bottles and coolers?",
        a: "Vinyl stickers are printed on premium vinyl that resists water, sun, and scratches, according to the product page. For anything that gets wet, order them in vinyl.",
      },
      {
        q: "How long does an order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"],
      BLOG_SLUG_EN["menu-de-boda-personalizado"],
      BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"],
      BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"],
      BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"],
      BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"],
      BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"],
    ],
  },
  {
    slug: BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"],
    title: "Temporary Tattoos for Weddings, Events, and Parties: How to Use Them",
    metaTitle: "Temporary Tattoos for Parties and Celebrations",
    description:
      "Temporary tattoos for weddings, events, and parties as a guest favor: quinceañeras, bachelorette parties, kids' parties, and themed celebrations. What we need to quote yours.",
    category: "Guides",
    publishedAt: "2026-09-23",
    intro:
      "Temporary tattoos are trending as a party detail: they've become a real hit at weddings, quinceañeras, and celebrations of every kind, for the opposite reason a sticker or a keepsake works: the guest wears it for the rest of the event instead of tucking it away. Beyond brand activations (see also our guide to custom temporary tattoos for events and brands), this format is an increasingly popular favor for personal celebrations: weddings, quinceañeras, bachelorette parties, and kids' parties.",
    sections: [
      {
        heading: "Why they've become so popular at parties",
        body: [
          "More and more weddings and parties are building them into the guest experience itself, not just handing them out as a gift: they go on in the moment, stay visible for the rest of the celebration, and end up in the event photos. That mix of low cost and high visual payoff is exactly what's made them so popular at celebrations of every size.",
        ],
      },
      {
        heading: "Which celebrations request them most",
        body: [
          "The most common: bachelorette parties (with a phrase, date, or icon related to the bride-to-be), quinceañeras (with the honoree's name or the party's theme), weddings (the couple's initials or the date, as a detail at the welcome table), and kids' parties (characters or designs matching the party theme).",
          "They work especially well as an activity for the youngest guests at a kids' party, or as a photogenic detail at bachelorette parties and quinceañeras.",
        ],
      },
      {
        heading: "What we need to quote yours",
        body: [
          "The design, name, or phrase you want (or a reference for the party theme if you don't have a design yet), the approximate size, and the quantity you need based on your guest count. Before producing, we send you a digital proof so you can approve how it'll look.",
          "We produce in Guadalajara and ship anywhere in Mexico, so you can quote temporary tattoos for your wedding, event, or party no matter where the celebration is.",
        ],
      },
      {
        heading: "How to match them with the rest of your stationery",
        body: [
          "If you're already customizing invitations, a wedding menu, or stickers for the celebration, using the same design or color palette on the temporary tattoos makes it feel like part of the same event, not a separate product. Let us know if you already have other pieces in progress so we can match the design.",
        ],
      },
    ],
    relatedProductSlugs: [],
    relatedBlogSlugs: ["custom-temporary-tattoos-for-events-and-brands", "how-long-do-temporary-tattoos-last-and-how-to-remove-them"],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'm interested in getting a quote for temporary tattoos for a wedding, event, or party.",
  },
  {
    slug: BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"],
    title: "Where to Print Custom Stickers in Mexico: What You Need and How to Order",
    metaTitle: "Where to Print Custom Stickers in Mexico: 2026 Prices",
    description:
      "What you need ready to get your custom stickers printed in Mexico (file, size, quantity) and how ordering online works, without needing to visit a print shop in person.",
    category: "Guides",
    publishedAt: "2026-09-29",
    modifiedAt: "2026-10-18",
    intro:
      "If you're looking for where to print custom stickers in Mexico, most options fall into two groups: printing them yourself at home (with vinyl and a special printer) or ordering them from a shop that already has die-cutting equipment. This guide covers the second option: what you need ready and how ordering your stickers online works, without buying equipment or visiting a shop in person.",
    sections: [
      {
        heading: "How much does it cost to print custom stickers in Mexico?",
        body: [
          "At Yume, printing custom stickers starts at $140 MXN: 40 pieces of waterproof vinyl stickers ($3.50 each) or 50 pieces of custom logo stickers ($3.00 each). The first 100 pieces are at the regular price and every piece beyond 100 drops 10% (wholesale price). Shipping anywhere in Mexico is free from $750 MXN, and so is pickup in Guadalajara.",
          "Price by quantity (minimum order is 50 pieces for logo stickers and 40 for vinyl):",
        ],
        table: {
          headers: ["Quantity", "Custom logo stickers", "Waterproof vinyl stickers"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "Printing it yourself vs. ordering it done",
        body: [
          "Printing at home makes sense if you already have, or want to invest in, a special printer and vinyl by the roll, and your volume is low. For most businesses and individuals, it's cheaper and simpler to order from a shop that already has die-cutting equipment: no need to buy or learn a machine for an order of 50 or 100 pieces.",
          "The difference shows most in the finish: a die cut made with professional equipment follows the exact outline of the design, something hard to replicate with scissors or a home cutter.",
        ],
      },
      {
        heading: "What to have ready before requesting a quote",
        body: [
          "Your design, logo, character, or photo (ideally PNG, PDF, AI, or SVG with a transparent background; a JPG or photo also works, though it may need cleanup before printing), the approximate size you want, and the quantity of pieces.",
          "Your design doesn't need to be 100% finished: a reference or sketch is enough to start a quote and adjust before the digital proof.",
        ],
      },
      {
        heading: "How ordering online works",
        body: [
          "Send your design and quantity via WhatsApp or from the online shop, we confirm price and send you a digital proof of the sticker before printing: you can request size or color adjustments at that stage. Once you approve it, it goes to production and ships anywhere in Mexico.",
          "The whole process happens remotely, so it works the same whether you're in Guadalajara (where we produce) or any other city in the country.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]],
  },
  {
    slug: BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"],
    title: "How Long Do Custom Stickers Take to Arrive? Real Turnaround Times",
    metaTitle: "How Long Do Custom Stickers Take to Arrive?",
    description:
      "Real turnaround times for a custom sticker order at Yume: digital proof, production, shipping across Mexico or pickup in Guadalajara, and how to order ahead for a deadline.",
    category: "Guides",
    publishedAt: "2026-10-06",
    intro:
      "If you need your stickers by a certain date (a launch, a trade show, a party), the first thing to know is how many days each stage takes. These are the real turnaround times of a Yume order, from payment to having it in your hands.",
    sections: [
      {
        heading: "How long does a custom sticker order take to arrive?",
        body: [
          `From the moment you approve the digital proof, an order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara. The digital proof normally arrives within 24 hours of payment.`,
        ],
        table: {
          headers: ["Stage", "Time"],
          rows: [
            ["Digital proof (up to 2 rounds of changes included)", "Normally within 24 hours of payment"],
            ["Production", `${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof`],
            ["Home delivery (anywhere in Mexico)", `${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days`],
            ["Pickup at a Casa Blanca branch (Guadalajara)", `${PICKUP_EXTRA_DAYS} business day`],
            ["Total from proof approval", `${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to your door · ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} at a branch`],
          ],
        },
      },
      {
        heading: "What makes it faster or slower",
        body: [
          "The production clock starts when you approve the digital proof, not when you pay: the sooner you review and approve it, the sooner your order goes into production. Having your logo or design ready from the start (PNG, PDF, AI or SVG) avoids back-and-forth.",
          "Days are business days, so weekends do not count; public holidays are not counted in the estimate either, which is why it is approximate.",
        ],
      },
      {
        heading: "How to order ahead when you have a deadline",
        body: [
          "Count backwards from your date: add the production and shipping (or pickup) days and leave a margin in case you ask for a change on the proof. For high-demand dates such as Christmas or graduations, order at least two weeks ahead.",
          "If your date is tight, message us on WhatsApp before paying and we will check together whether it fits.",
        ],
      },
      {
        heading: "What if I am in Guadalajara?",
        body: [
          "You can pick your order up at one of the Casa Blanca branches in the metro area: it adds just 1 business day to production. Pickup costs $20 MXN and is free on orders of $750 MXN or more, just like home delivery.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"], BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"]],
  },
  {
    slug: BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"],
    title: "Die Cut vs Kiss Cut Stickers: Which Cut Should You Choose?",
    metaTitle: "Die Cut vs Kiss Cut Stickers",
    description:
      "The difference between die cut and kiss cut stickers (troquelado and semitroquelado): how each looks, when each one fits, and how to choose when you order your stickers at Yume.",
    category: "Guides",
    publishedAt: "2026-10-16",
    intro:
      "When you order custom stickers you run into two terms: die cut and kiss cut (troquelado and semitroquelado in Spanish). Yume makes both and you choose when you order. This guide explains what each one is, how they differ, and which fits your use.",
    sections: [
      {
        heading: "What is a die cut sticker and what is a kiss cut sticker?",
        body: [
          "A die cut sticker (troquelado) is cut all the way through along the outline of your design: the vinyl and its backing are cut together, so you get each sticker loose, in the exact shape of your logo, character, or photo.",
          "A kiss cut sticker (semitroquelado) is cut through the vinyl only, not the backing sheet. The outline is marked, but the stickers stay on their backing and you peel them off one by one when you use them.",
        ],
        table: {
          headers: ["Feature", "Die cut (troquelado)", "Kiss cut (semitroquelado)"],
          rows: [
            ["What is cut", "Vinyl and backing, all the way", "Vinyl only; the backing stays whole"],
            ["How you receive it", "Each sticker loose", "Stickers on their backing sheet"],
            ["Sticker shape", "The shape of your design", "The shape of your design"],
          ],
        },
      },
      {
        heading: "Which one fits your use?",
        body: [
          "Die cut makes sense when stickers are handed out or applied one at a time: a seal to close a bag, a label for a product, a gift for a customer. It arrives ready to peel, with no sheet in between.",
          "Kiss cut makes sense when you want your stickers kept together and protected until you use them: for a market stall or trade show, for handing out at an event, or for holding a stock to use over time. The backing sheet keeps them organized and clean.",
          "Both are made on the same premium vinyl and follow the shape of your design; what changes is the cut and how the order arrives. If you are unsure, think about how you will use them: one at a time, or in batches.",
        ],
      },
      {
        heading: "How to choose the cut type when you order",
        body: [
          "On each sticker product page (Waterproof Vinyl Stickers and Custom Logo Stickers) you pick the cut type, Die cut or Kiss cut, before adding to your cart. You also pick the finish there: matte, glossy, or holographic. What you choose is saved with your order.",
          "If you are not sure which fits your case, message us on WhatsApp before paying and we will go over it with you.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"],
    title: "How long do temporary tattoos last and how do you remove them?",
    metaTitle: "How long temporary tattoos last and how to remove them",
    description:
      "How long temporary tattoos last (a few hours to a couple of days), how to apply them step by step, and how to remove them with body oil, lotion, or alcohol. A Yume guide.",
    category: "Guides",
    publishedAt: "2026-10-17",
    intro:
      "Water-transfer temporary tattoos last from a few hours to a couple of days, depending on the area of the body and how much they are rubbed. This guide covers the most common questions: how long they last, how to apply them, how to remove them, and where they can go, using the instruction card we use at Yume.",
    sections: [
      {
        heading: "How long do temporary tattoos last?",
        body: [
          "It depends on the area and on friction. On parts that move or rub against clothing (wrist, neck, knees) they wear off sooner; on the arm or leg, with less friction, they last longer. The maker of the transfer paper we use states the tattoo lasts at least 48 hours if left untouched.",
          "For a party, a wedding, or a one-day activation that is plenty: they are made for celebrations, not for lasting weeks. What shortens them most is constant rubbing, tight clothing, and any oil, lotion, or alcohol that touches the tattoo.",
        ],
      },
      {
        heading: "How to apply them, step by step",
        body: [
          "1. Pick your tattoo and peel off the protective plastic film. 2. Place it face down, with the design directly on clean, dry skin. 3. Soak the paper well with water and press with your hand for 20 to 30 seconds. 4. Gently peel the paper off and wait a few seconds for it to dry before touching the tattoo.",
          "Two details help: clean, dry skin with no lotion before applying, and not moving the paper while you press.",
        ],
      },
      {
        heading: "How to remove temporary tattoos",
        body: [
          "With body oil, lotion, or rubbing alcohol, rubbing gently until it comes off. There is no need to scrape or use tools: calm rubbing is enough. If you leave them, they simply wear off over the following days.",
        ],
      },
      {
        heading: "Where they can go and what precautions to take",
        body: [
          "In the photos of our orders they are applied on the arm, wrist, hand, neck, and leg. They are for external use only: do not apply them on the eyes or on broken skin. If you have sensitive skin or allergies, try a small one first; for children, an adult should apply and supervise.",
          "The paper maker gives no minimum age and publishes no dermatological certifications, so we would rather say so plainly than promise what we cannot verify.",
        ],
      },
      {
        heading: "Custom temporary tattoos: with your logo, design, or photo",
        body: [
          "At Yume we make custom temporary tattoos with your logo, your design, or your photos: stamps, characters, couple or childhood photos. They are quoted on WhatsApp based on design, size, and quantity; production takes 2 to 3 business days after the 50% deposit, and we ship across Mexico or you can pick them up in Guadalajara.",
        ],
      },
    ],
    relatedProductSlugs: [],
    relatedBlogSlugs: ["custom-temporary-tattoos-for-events-and-brands", "temporary-tattoos-for-weddings-events-and-parties"],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'd like a quote for custom temporary tattoos.\n\nSize:\nQuantity:\nDo I already have a design? (yes / no):",
    sources: [
      { label: "MECOLOUR transfer paper listing on Amazon (lasts at least 48 hours untouched)", url: "https://www.amazon.com/dp/B09C25DL8G" },
    ],
  },
  // Dulceros cluster lives in its own file (blog-dulceros.en.ts).
  ...dulceroPostsEn,
  {
    slug: BLOG_SLUG_EN["etiquetas-escolares-personalizadas-guadalajara"],
    title: "Custom school labels in Guadalajara: back-to-school guide",
    metaTitle: "Custom school labels: back-to-school guide",
    description: `Custom school labels in Guadalajara: what goes on them, where to stick them, how many to order. First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}, digital proof, shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-26",
    intro:
      "School labels are stickers with a child's name (and sometimes their class or a drawing) to mark notebooks, lunch boxes, bottles, and backpacks so nothing gets lost or mixed up in the classroom. At Yume we make them in water-resistant vinyl, with the design you choose. This guide covers what goes on them, which school supplies they suit, how many to order, what they cost, when to place the order, and how they reach your home or a branch in Guadalajara.",
    sections: [
      {
        heading: "What goes on a school label",
        body: [
          "A school label carries, at minimum, the child's name in large, easy-to-read letters. Many families add the grade or class, plus a drawing or icon (a star, an animal, a color) so younger kids recognize their things before they can read.",
          "For older kids, something simple works better: first and last name, with good contrast between the letters and the background so it reads from a distance. For siblings, pick a different color for each so they know which is theirs without reading.",
          "You can also add a phone number to the backpack and lunch box labels. Tell us what you want and we send a digital proof before printing.",
        ],
      },
      {
        heading: "Which school supplies they go on",
        body: [
          "School labels go on notebooks and books, pencil cases, lunch boxes, water bottles, thermoses, and backpacks. Because the vinyl resists water, sun, and scratches, they hold up on items that get wet, travel a lot, and are cleaned often.",
          "Stick the label on a clean, dry, flat surface rather than on an edge, a seam, or a raised area, which is where labels peel first. Press from the center out to push the air out, and wait a while before the first time it gets wet.",
          "The table is a quick guide to where each one fits best. For more on bottles, lunch boxes, and backpacks, read our guide to name labels.",
        ],
        table: {
          headers: ["Item", "Where to stick it"],
          rows: [
            ["Notebooks and books", "On the cover, on a clean, flat area"],
            ["Pencil case", "On a smooth part of the outside"],
            ["Lunch box", "On the lid or a smooth side"],
            ["Bottle or thermos", "On a smooth part of the body, away from the lid and the base"],
            ["Backpack", "On a flat area outside, or inside if you would rather it not show"],
          ],
        },
      },
      {
        heading: "How to order custom school labels",
        body: [
          `They are quoted on WhatsApp: send us the name (or names, for siblings), the design you like, and how many pieces you need. We work with vinyl stickers from 40 pieces. First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}. Above 100 pieces, each extra piece is at wholesale price.`,
          "We send a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval. Here is the price by quantity:",
        ],
        table: {
          headers: ["Pieces", "Vinyl stickers"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How many labels to order for the school year",
        body: [
          "A practical count is to tally every item on the supply list, multiply by the number of kids, and add a few spares. Since they are sold by the piece rather than by the sheet, you can order close to the number you actually need, with a minimum of 40 pieces.",
          "An example of the count: if a child takes 10 notebooks, a pencil case, a lunch box, a bottle, and a backpack, that is 14 labels; with two siblings, 28, and with a few spares you reach 40 pieces.",
          "If you already have the supply list, send it and we will help you work out how many labels you need. To pick the right format, you can also read the difference between vinyl and paper and how labels are ordered on a roll, sheet, or by the piece.",
        ],
      },
      {
        heading: "When to order and how to receive them",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} and branch pickup $${CASABLANCA_PRICE}; on purchases of $${FREE_SHIPPING_THRESHOLD} or more, both are free. Order a few weeks before the school year starts so there is room to adjust the design, production, and shipping. We produce in Guadalajara and you pick the branch at checkout.`,
          "For a stage-by-stage breakdown, see how long custom stickers take to arrive.",
        ],
      },
    ],
    faq: [
      {
        q: "How much do custom school labels cost?",
        a: `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}. Above 100 pieces, each extra piece is at wholesale price: 150 pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "What is the minimum order?",
        a: "40 pieces. They are sold by the piece, not by the sheet, so you can order close to the number you really need.",
      },
      {
        q: "Are the labels water-resistant?",
        a: "They are printed on premium vinyl that resists water, sun, and scratches, per the product page. Even so, do not scrape them or leave them soaking for long.",
      },
      {
        q: "Can I order labels with the names of several siblings?",
        a: "Yes. Send us the names, the design you like, and the quantity, and we send a digital proof before printing.",
      },
      {
        q: "Do I see the label before it is printed?",
        a: "Yes. The digital proof normally arrives within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "How long does the order take?",
        a: `Once you approve the proof, it reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE}, free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. In the Guadalajara metro area you can also pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches for $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["etiquetas-con-nombre-para-botellas-loncheras-y-mochilas"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"]],
    serviceLink: { href: "/en/products/waterproof-vinyl-stickers", label: "See custom vinyl stickers" },
    quoteMessage: "Hi, I'd like a quote for custom school labels.\n\nName(s):\nApproximate quantity:\nDo I already have a design? (yes / no):",
  },
  {
    slug: BLOG_SLUG_EN["etiquetas-con-nombre-para-botellas-loncheras-y-mochilas"],
    title: "Name labels for bottles, lunch boxes, and backpacks: where to stick them and how to care for them",
    metaTitle: "Name labels for bottles, lunch boxes, and backpacks",
    description:
      "Where to stick name labels on bottles, lunch boxes, and backpacks, how to apply them so they last, and which design to pick. Water-resistant vinyl.",
    category: "Guides",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-26",
    intro:
      "A bottle, lunch box, or backpack with no name gets lost more easily, and in a classroom where everyone has the same one, it gets mixed up. A name label fixes that in seconds. This guide covers where to stick it on each item, how to apply it so it lasts, how to care for it during the school year, which design to pick, how many to order, and what they cost. We make them in water-resistant vinyl in Guadalajara and ship across Mexico.",
    sections: [
      {
        heading: "Where to stick a name label on each item",
        body: [
          "Stick the label on a smooth, flat part of each item: on the body of the bottle or thermos, away from the lid and the base; on the lid or a smooth side of the lunch box; and on a flat area outside the backpack. Avoid seams, edges, and raised areas, where a label peels first.",
          "If you would rather the name not show at first glance, you can also stick it inside the backpack. On a pencil case, as on a lunch box, pick a smooth part outside. The table sums up where each one fits best.",
        ],
        table: {
          headers: ["Item", "Where to stick it", "Avoid"],
          rows: [
            ["Bottle or thermos", "On a smooth part of the body", "Near the lid and the base"],
            ["Lunch box", "On the lid or a smooth side", "Seams and edges"],
            ["Backpack", "On a flat area outside, or inside", "Raised pockets and seams"],
            ["Pencil case", "On a smooth part outside", "Zippers and edges"],
          ],
        },
      },
      {
        heading: "How to apply a label so it lasts",
        body: [
          "Clean and dry the surface, peel the backing without touching the adhesive, and press from the center out to push the air out. Then wait a while before the first time it gets wet. With that care, vinyl that resists water, sun, and scratches holds up to daily use.",
          "First, clean the item and let it dry completely. The adhesive needs a clean, dry surface to stick well.",
          "Second, peel the backing carefully and try not to touch the adhesive side with your fingers. Place the center of the label on the spot you picked first.",
          "Third, press with your finger from the center out to the edges so the air escapes and the label lies flat. If the surface is curved, like a bottle, take it slowly and a section at a time.",
          "Finally, let some time pass before it gets wet or goes into the backpack, so the adhesive settles before first use.",
        ],
      },
      {
        heading: "How to care for the labels during the school year",
        body: [
          "The vinyl we use resists water, sun, and scratches, per the product page, but it is not indestructible. To make it last all year, do not scrape the label or leave the item soaking for long. If an edge lifts, check whether it landed on a seam or a raised area.",
          "Bottles and thermoses get wet and washed the most, so they deserve the most care: wash them gently and do not scrub the label with a rough sponge. Lunch boxes and backpacks get dragged and bumped, and the best protection is having stuck the label on a flat area, away from the edges.",
          "If you switch bottles or lunch boxes midway through the year, it is practical to have a few spare labels from the start.",
        ],
      },
      {
        heading: "Which design to choose for a name label",
        body: [
          "Choose large letters and good contrast between the letters and the background so the name reads from a distance. A drawing helps little ones recognize their things; for older kids, something simple with first and last name works better.",
          "For siblings, pick a different color for each so they know which is theirs without reading. You can also add the grade or class, or a contact phone number on the backpack and lunch box labels.",
          "You do not need to have the design ready. Tell us which name and style you like and we send a digital proof to approve before printing.",
        ],
      },
      {
        heading: "How many name labels to order",
        body: [
          "Count each item you want to mark, multiply by the number of kids, and add a few spares. They are sold by the piece, not by the sheet, with a minimum of 40 pieces, so you can order close to the number you actually need.",
          "An example: a bottle, a thermos, a lunch box, a backpack, and a pencil case are 5 labels per child; with two siblings that is 10, and with spares for notebooks and books you reach the 40-piece minimum. If you also want to mark school supplies, read our guide to custom school labels, which includes the full count.",
          "If you are not sure how many you need, send us your list of items and we will help you work it out.",
        ],
      },
      {
        heading: "How much name labels cost and how to get a quote",
        body: [
          `Custom vinyl labels start at 40 pieces. First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}. Above 100 pieces, each extra piece is at wholesale price. Send us the name, the design, and the quantity on WhatsApp, and we send a digital proof before printing.`,
          "The proof normally arrives within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval. Here is the price by quantity:",
        ],
        table: {
          headers: ["Pieces", "Vinyl stickers"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "When they arrive and what shipping costs",
        body: [
          `Once you approve the proof, the order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} and branch pickup $${CASABLANCA_PRICE}; on purchases of $${FREE_SHIPPING_THRESHOLD} or more, both are free. Order a few weeks before school starts. For each stage in detail, see how long custom stickers take to arrive.`,
          "If you wonder why we use vinyl and not paper, we explain it in the vinyl vs. paper guide. And if you are after labels for your business rather than for school, see how they are ordered on a roll, sheet, or by the piece.",
        ],
      },
    ],
    faq: [
      {
        q: "Where is the best place to stick a label on a bottle?",
        a: "On a smooth part of the body, away from the lid and the base. Avoid seams, edges, and raised areas, where a label peels first.",
      },
      {
        q: "Do the labels hold up to water?",
        a: "They are printed on vinyl that resists water, sun, and scratches, per the product page. Even so, do not scrape them or leave the item soaking for long.",
      },
      {
        q: "How much do name labels cost?",
        a: `First 100 pieces: $${priceOf("stickers-vinil-impermeable", 100)}. Above 100 pieces, each extra piece is at wholesale price: 150 pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "What is the minimum order?",
        a: "40 pieces. They are sold by the piece, not by the sheet, so you can order close to the number you need.",
      },
      {
        q: "Can I see the label before it is printed?",
        a: "Yes. The digital proof normally arrives within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "How long does the order take?",
        a: `Once you approve the proof, it reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE}, free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. In the Guadalajara metro area you can also pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches for $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["etiquetas-escolares-personalizadas-guadalajara"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"], BLOG_SLUG_EN["stickers-personalizados-para-mascotas"]],
    serviceLink: { href: "/en/products/waterproof-vinyl-stickers", label: "See custom vinyl stickers" },
    quoteMessage: "Hi, I'd like a quote for name labels for bottles, lunch boxes, and backpacks.\n\nName(s):\nApproximate quantity:\nDo I already have a design? (yes / no):",
  },
  {
    slug: BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"],
    title: "Custom Label Printing: Roll, Sheet or By the Piece",
    metaTitle: "Label Printing: Roll, Sheet or By the Piece",
    description:
      "Label printing on rolls, sheets or by the piece: which one fits depending on how many you need and how you'll apply them, with real prices from 50 pieces.",
    category: "Guides",
    publishedAt: "2026-10-20",
    intro:
      "When you look for somewhere to print labels for your product or business, the first decision isn't the design but the format: some print shops work with roll labels, others print full sheets, and others deliver each label cut to its shape. Each format makes sense for a different kind of business, and picking the wrong one is the most common way to overpay or end up with labels you can't use.",
    sections: [
      {
        heading: "Roll labels: for volume and labeling machines",
        body: [
          "Roll labels are printed one after another on a backed strip and are made for businesses that label lots of identical products: drinks, packaged food, cosmetics made in series. Their advantage is that they're applied with a labeling machine or a dispenser, without peeling them one by one.",
          "The trade-off is that they're usually produced in large runs of the same design: if you're just starting out or change designs often, you end up buying more than you'll use. Yume doesn't offer roll labels in its catalog; if your production uses a labeling machine, message us on WhatsApp before ordering and we'll tell you whether we can help.",
        ],
      },
      {
        heading: "Sheet labels: several on one page",
        body: [
          "On a sheet, several labels are printed together and you peel them off by hand. It's the format of office-printer label sheets and many quick-print shops: practical when your labels are rectangles or circles and you'll apply them yourself.",
          "The limits are shape and material: standard sheets usually come in preset sizes, and paper doesn't hold up well to water or handling. If you're thinking of printing them at home, our guide on where to print custom stickers compares printing yourself with having them made.",
        ],
      },
      {
        heading: "Labels by the piece: cut to your design's shape",
        body: [
          "The third option is the one we work with at Yume: each label follows the shape of your logo or design and you order the exact number of pieces, not by sheet or roll. You choose die-cut (each label loose, cut all the way around its outline) or kiss-cut (cut to shape but left on its backing sheet, to peel when you use it).",
          "It's the format that best fits small and mid-size brands that label by hand: packaging, bags, jars, candles or shipping boxes. You order from 50 pieces with your logo, without committing to a large run, and we send you a digital proof to approve before printing.",
        ],
      },
      {
        heading: "Material and finish",
        body: [
          "Our labels are vinyl and water-resistant; Custom Vinyl Stickers also resist sun and scratches. The difference compared with paper shows most on products that get wet or handled a lot, and we explain it in detail in our vinyl vs. paper guide.",
          "For the finish you choose matte, glossy or holographic (holographic adds $0.50 per piece).",
        ],
      },
      {
        heading: "How much label printing by the piece costs",
        body: [
          `These are the real prices from our catalog. Past 100 pieces, every extra piece is at wholesale price, 10% off. Shipping is separate: $${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico or $${CASABLANCA_PRICE} MXN if you pick up at a Casa Blanca branch in Guadalajara, and it's free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
        ],
        table: {
          headers: ["Quantity", "Logo stickers & labels", "Vinyl stickers (your design)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How to choose in 4 questions",
        body: [
          "How many do you need? Dozens or hundreds: by the piece. Thousands of the same design every month: it's worth getting a roll quote.",
          "How will you apply them? By hand: by the piece or on sheets. With a labeling machine: rolls.",
          "What shape is your logo? If it isn't a rectangle or a circle, a label cut to its shape looks much better than a square with a white background around it.",
          "Will it get wet or handled a lot? Then vinyl, not paper.",
        ],
      },
    ],
    faq: [
      {
        q: "Which is better, roll labels or sheet labels?",
        a: "It depends on how you apply them: rolls if you use a labeling machine or dispenser and order large runs of the same design; sheets or by the piece if you apply them by hand and need smaller quantities.",
      },
      {
        q: "What is the minimum to print labels at Yume?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How much do 100 custom labels cost?",
        a: `100 labels with your logo cost $${priceOf("stickers-logo-personalizado", 100)} MXN and 100 vinyl stickers with your design cost $${priceOf("stickers-vinil-impermeable", 100)} MXN. Past 100 pieces, every extra piece is at wholesale price.`,
      },
      {
        q: "Do you print roll labels?",
        a: "Roll labels aren't in our catalog: we make die-cut or kiss-cut labels by the piece. If your production uses a labeling machine, message us on WhatsApp before ordering.",
      },
      {
        q: "Are the labels water-resistant?",
        a: "Yes, all of our labels and stickers are water-resistant vinyl.",
      },
      {
        q: "How long does printing my labels take?",
        a: `The digital proof arrives within 24 hours of payment. Once you approve it, your order reaches your home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for Casa Blanca pickup (Guadalajara) in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["etiquetas-navidenas-personalizadas"],
    title: "Custom Christmas labels: for gifts, bottles and your business packaging",
    metaTitle: "Christmas gift tags: free printable PDF or custom vinyl",
    description:
      "Christmas gift tags: download the free printable PDF or order custom vinyl labels, 100 pieces for $350 MXN. Made in Guadalajara, shipping across Mexico.",
    category: "Guides",
    publishedAt: "2026-10-19",
    intro:
      "A Christmas label with the family name, a message or your business logo turns any gift, bottle or treat bag into something made for the person who gets it. At Yume we make them in vinyl, with your design and in any shape you want. Here is what goes on them, what they are used for and the latest date to order so they arrive before Christmas.",
    sections: [
      {
        heading: "What goes on Christmas labels",
        body: [
          "The most common choice is a short message (\"Feliz Navidad\", \"With love from the López family\", \"Happy holidays 2026\") next to a Christmas drawing: a tree, an ornament, a star or a snowman. You can also use a photo, each person's name to mark their gifts or, for a business, your logo with a holiday touch.",
          "Tell us what you want to say and the style you like, and we send you a digital proof before printing. Nothing gets printed without your approval.",
        ],
      },
      {
        heading: "What they are used for",
        body: [
          "Gifts: on the box or bag, instead of a paper tag that gets lost. Bottles of wine, ponche or liquor you are giving away. Aguinaldo treat bags and posada party favor boxes. And businesses: on the packaging, bags and boxes of your December orders, or on gifts for your customers.",
          "Because vinyl is water resistant, the labels hold up on bottles that come out of the fridge or bags that get wet.",
        ],
      },
      {
        heading: "Free printable Christmas tags",
        body: [
          "If you only need a few, download our free sheet (above): 12 tags per page with room for \"To\" and \"From\", in a color version and a black and white one for kids to color in. Print it on letter size cardstock or sticker paper and cut along the dotted line.",
          "For lots of gifts, bottles or business packaging, printed vinyl labels last longer, resist water and carry your own design, name or logo.",
        ],
      },
      {
        heading: "Shape, finish and price",
        body: [
          "The cut follows the shape of your design: round, ornament or star shaped, or square. You choose die cut (each label loose) or kiss cut (several on one sheet, easy to peel). The finish can be matte, glossy or holographic; holographic looks very festive and costs $0.50 MXN more per piece.",
        ],
        table: {
          headers: ["Product", "Minimum", "First 100 pieces", "Over 100"],
          rows: [
            ["Custom vinyl stickers (any design, name or photo)", "40 pieces", "$350 MXN", "$3.15 MXN per extra piece"],
            ["Logo stickers and labels (businesses)", "50 pieces", "$300 MXN", "$2.70 MXN per extra piece"],
          ],
        },
      },
      {
        heading: "Latest date to order for Christmas",
        body: [
          `The digital proof usually arrives within 24 hours of payment. Once you approve it, the order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
          "So it is best to order in November or, at the latest, the first week of December: that leaves room to adjust the design and for couriers, which are busier in December. If you are also giving party favor boxes, you can order everything together; shipping is free on orders of $750 MXN or more.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-navidenos-personalizados"], BLOG_SLUG_EN["stickers-para-empaques-de-negocio"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]],
    download: { href: "/descargas/printable-christmas-gift-tags.pdf", label: "Free download: printable Christmas gift tags (PDF, color and black and white)" },
  },
];

export function getBlogPostEn(slug: string) {
  return blogPostsEn.find((p) => p.slug === slug);
}
