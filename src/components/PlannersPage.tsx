import Image from "next/image";
import Link from "next/link";
import { getProduct, tieredPrice } from "@/content/products";
import { FREE_SHIPPING_THRESHOLD, NATIONAL_TRANSIT_DAYS, PRODUCTION_DAYS } from "@/content/shipping";
import { SITE, waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { esPathToEnPath, type Lang } from "@/lib/i18n";
import { breadcrumbSchema, ORG_ID } from "@/lib/seo";
import { ShopCta } from "@/components/ShopCta";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Every figure below comes from the catalog and shipping constants, so the page cannot drift from real prices.
// Planner-specific discounts or commissions are NOT offered anywhere on this page on purpose: the owner has not defined any.
const dulcero = getProduct("dulceros-personalizados")!;
const vinyl = getProduct("stickers-vinil-impermeable")!;
const DULCERO_MIN = dulcero.tiers!.baseQty;
const DULCERO_UNIT = tieredPrice(dulcero.tiers!, DULCERO_MIN) / DULCERO_MIN;
const VINYL_MIN = vinyl.tiers!.baseQty;
const VINYL_100 = tieredPrice(vinyl.tiers!, 100);

const COPY = {
  es: {
    path: "/planners",
    home: "Inicio",
    homeHref: "/",
    name: "Detalles personalizados para planners",
    h1: "Detalles personalizados para wedding planners y event planners en Guadalajara",
    intro:
      "Si organizas bodas y eventos, necesitas un proveedor que cuide el detalle y cumpla fechas. En Yume diseñamos y producimos en Guadalajara piezas con el nombre y la temática de cada evento, y las enviamos a todo México.",
    cta: "Cotizar un evento por WhatsApp",
    wa: "Hola, soy planner y quiero cotizar detalles para un evento.\n\nFecha del evento:\nTipo de evento (boda, XV años, empresa...):\nPiezas aproximadas:\nTemática o colores:\nCiudad de entrega:",
    offerTitle: "Lo que puedes pedir para tus eventos",
    offers: [
      {
        title: "Dulceros personalizados",
        body: `Cajita tipo lunch box con asa, de cartulina opalina, con el nombre y la temática del evento. Llega armada y vacía, lista para llenar. ${formatMXN(DULCERO_UNIT)} por pieza, mínimo ${DULCERO_MIN} piezas: pides exactamente los invitados que tienes.`,
        href: "/productos/dulceros-personalizados",
        link: "Ver dulceros y precios",
      },
      {
        title: "Stickers de vinil",
        body: `Para sellar bolsitas de regalo, decorar el detalle de la mesa o combinar con tu papelería. Vinil resistente al agua y al sol, con tu diseño o el de la pareja. Mínimo ${VINYL_MIN} piezas; las primeras 100 piezas cuestan ${formatMXN(VINYL_100)}.`,
        href: "/productos/stickers-vinil-impermeable",
        link: "Ver stickers y precios",
      },
      {
        title: "Tatuajes temporales",
        body: "Un detalle para los invitados con el diseño del evento, o con fotos de la pareja convertidas en tatuaje. Se cotizan por WhatsApp según diseño, tamaño y cantidad.",
        href: "/productos/tatuajes-temporales-personalizados",
        link: "Ver tatuajes temporales",
      },
      {
        title: "Menús e invitaciones de boda",
        body: "Diseño personalizado con aprobación antes de imprimir. Se cotizan caso por caso: dinos qué necesitas y qué información ya tienes lista.",
        href: "/blog/menu-de-boda-personalizado",
        link: "Cómo pedir un menú de boda",
      },
    ],
    flowTitle: "Cómo trabajamos contigo",
    steps: [
      "Escríbenos por WhatsApp con la fecha del evento, el tipo de evento, las piezas aproximadas, la temática o los colores y la ciudad de entrega.",
      "Te cotizamos. Los dulceros y los stickers tienen precio publicado en la tienda; lo demás lo cotizamos según tu pedido.",
      "Te enviamos una prueba digital del diseño. No imprimimos nada sin tu aprobación, y puedes mostrársela a tu cliente antes de aprobar.",
      `Producimos en ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba (los tatuajes temporales, en 2 a 3 días hábiles después del anticipo del 50%). Después va el envío, de ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles, o recoges en Casa Blanca, Guadalajara.`,
    ],
    knowTitle: "Lo que conviene saber antes de pedir",
    know: [
      "Pide con tiempo: el reloj de producción empieza cuando apruebas la prueba digital, no cuando escribes.",
      `Pide la cantidad exacta de invitados más unas piezas extra por si algo cambia. El envío es gratis desde ${formatMXN(FREE_SHIPPING_THRESHOLD)}.`,
      "No emitimos factura (CFDI). Si tu agencia la necesita, escríbenos antes de pagar para revisarlo.",
      "Somos una tienda en línea con taller en Guadalajara: no tenemos mostrador. Todo se trata por WhatsApp y por la tienda.",
    ],
    faqTitle: "Preguntas frecuentes de planners",
    faq: [
      ["¿Cuál es el pedido mínimo?", `Depende de la pieza: ${DULCERO_MIN} dulceros, ${VINYL_MIN} stickers de vinil. Los tatuajes temporales, los menús y las invitaciones se cotizan por WhatsApp.`],
      ["¿Puedo mostrar el diseño a mi cliente antes de producir?", "Sí. Antes de producir te mandamos una prueba digital del diseño y no imprimimos nada hasta que la apruebes, así que puedes compartirla con la pareja o con el cliente."],
      ["¿Cuánto tardan los pedidos?", `La producción toma ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más el envío o la recolección. Los tatuajes temporales, 2 a 3 días hábiles después del anticipo del 50%.`],
      ["¿Envían a otra ciudad?", "Sí, enviamos a todo México. También puedes recoger en sucursales Casa Blanca de la zona metropolitana de Guadalajara."],
      ["¿Emiten factura?", "No emitimos factura (CFDI). Si tu agencia necesita una, escríbenos por WhatsApp antes de pagar."],
      ["¿Tienen precios especiales para planners?", `Los precios son los publicados en la tienda: los dulceros cuestan ${formatMXN(DULCERO_UNIT)} por pieza y los stickers tienen precio mayoreo desde 100 piezas. Si manejas varios eventos al año, cuéntanos tu volumen por evento al cotizar.`],
      ["¿Hacen piezas para bodas que no están en la tienda?", "Cotizamos menús, invitaciones y tatuajes temporales para bodas por WhatsApp. Escríbenos qué necesitas y te decimos si podemos hacerlo antes de que pagues nada."],
    ],
    moreTitle: "Guías para planners y parejas",
    more: [
      ["Menú de boda personalizado: cómo pedir el tuyo", "/blog/menu-de-boda-personalizado"],
      ["Invitaciones personalizadas para eventos", "/blog/como-pedir-invitaciones-personalizadas-para-eventos"],
      ["Stickers para bodas, eventos y fiestas", "/blog/stickers-para-bodas-eventos-y-fiestas"],
      ["Tatuajes temporales para bodas, eventos y fiestas", "/blog/tatuajes-temporales-para-boda-eventos-y-fiestas"],
    ],
    imgAlt: "Dulcero personalizado tipo lunch box de Yume con nombre y temática",
    serviceName: "Detalles personalizados para eventos y bodas",
  },
  en: {
    path: "/en/planners",
    home: "Home",
    homeHref: "/en",
    name: "Custom event details for planners",
    h1: "Custom event details for wedding and event planners in Guadalajara",
    intro:
      "If you organize weddings and events, you need a supplier who cares about detail and keeps dates. At Yume we design and produce in Guadalajara pieces with the name and theme of each event, and ship them across Mexico.",
    cta: "Get an event quote on WhatsApp",
    wa: "Hi, I'm a planner and I'd like a quote for event details.\n\nEvent date:\nEvent type (wedding, quinceañera, corporate...):\nApproximate pieces:\nTheme or colors:\nDelivery city:",
    offerTitle: "What you can order for your events",
    offers: [
      {
        title: "Personalized favor boxes",
        body: `A lunch-box style box with a handle, in opalina cardstock, with the name and theme of the event. It arrives assembled and empty, ready to fill. ${formatMXN(DULCERO_UNIT)} per piece, minimum ${DULCERO_MIN} pieces: you order exactly the guests you have.`,
        href: "/productos/dulceros-personalizados",
        link: "See favor boxes and prices",
      },
      {
        title: "Vinyl stickers",
        body: `To seal gift bags, decorate the table favor, or match your stationery. Water- and sun-resistant vinyl, with your design or the couple's. Minimum ${VINYL_MIN} pieces; the first 100 pieces are ${formatMXN(VINYL_100)}.`,
        href: "/productos/stickers-vinil-impermeable",
        link: "See stickers and prices",
      },
      {
        title: "Temporary tattoos",
        body: "A favor for guests with the event's design, or with photos of the couple turned into tattoos. Quoted on WhatsApp based on design, size, and quantity.",
        href: "/productos/tatuajes-temporales-personalizados",
        link: "See temporary tattoos",
      },
      {
        title: "Wedding menus and invitations",
        body: "Custom design with approval before printing. Quoted case by case: tell us what you need and what information you already have ready.",
        href: "/blog/menu-de-boda-personalizado",
        link: "How to order a wedding menu",
      },
    ],
    flowTitle: "How we work with you",
    steps: [
      "Message us on WhatsApp with the event date, the event type, the approximate pieces, the theme or colors, and the delivery city.",
      "We send you a quote. Favor boxes and stickers have a published price in the store; everything else we quote based on your order.",
      "We send a digital proof of the design. Nothing is printed without your approval, and you can show it to your client before approving.",
      `We produce in ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof (temporary tattoos in 2 to 3 business days after the 50% deposit). Then shipping takes ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days, or you pick up at Casa Blanca, Guadalajara.`,
    ],
    knowTitle: "What to know before ordering",
    know: [
      "Order early: the production clock starts when you approve the digital proof, not when you write to us.",
      `Order the exact guest count plus a few extra pieces in case something changes. Shipping is free from ${formatMXN(FREE_SHIPPING_THRESHOLD)}.`,
      "We do not issue invoices (CFDI). If your agency needs one, message us before paying so we can look into it.",
      "We are an online store with a workshop in Guadalajara: there is no walk-in counter. Everything is handled over WhatsApp and the store.",
    ],
    faqTitle: "Planner FAQ",
    faq: [
      ["What is the minimum order?", `It depends on the piece: ${DULCERO_MIN} favor boxes, ${VINYL_MIN} vinyl stickers. Temporary tattoos, menus, and invitations are quoted on WhatsApp.`],
      ["Can I show the design to my client before production?", "Yes. Before production we send a digital proof of the design and nothing is printed until you approve it, so you can share it with the couple or the client."],
      ["How long do orders take?", `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus shipping or pickup. Temporary tattoos take 2 to 3 business days after the 50% deposit.`],
      ["Do you ship to other cities?", "Yes, we ship across Mexico. You can also pick up at Casa Blanca branches in the Guadalajara metro area."],
      ["Do you issue invoices?", "We do not issue invoices (CFDI). If your agency needs one, message us on WhatsApp before paying."],
      ["Do you have special prices for planners?", `Prices are the ones published in the store: favor boxes are ${formatMXN(DULCERO_UNIT)} per piece and stickers have wholesale pricing from 100 pieces. If you handle several events a year, tell us your volume per event when you ask for a quote.`],
      ["Do you make wedding pieces that are not in the store?", "We quote wedding menus, invitations, and temporary tattoos on WhatsApp. Tell us what you need and we will say whether we can do it before you pay anything."],
    ],
    moreTitle: "Guides for planners and couples",
    more: [
      ["Custom wedding menu: how to order yours", "/blog/menu-de-boda-personalizado"],
      ["Custom invitations for events", "/blog/como-pedir-invitaciones-personalizadas-para-eventos"],
      ["Stickers for weddings, events, and parties", "/blog/stickers-para-bodas-eventos-y-fiestas"],
      ["Temporary tattoos for weddings, events, and parties", "/blog/tatuajes-temporales-para-boda-eventos-y-fiestas"],
    ],
    imgAlt: "Yume personalized lunch-box favor box with name and theme",
    serviceName: "Custom event and wedding details",
  },
};

export function PlannersPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const href = (esPath: string) => (lang === "en" ? esPathToEnPath(esPath) : esPath);
  const url = `${SITE.url}${c.path}`;
  const breadcrumb = breadcrumbSchema(c.path, [{ name: c.home, url: c.homeHref }, { name: c.name }]);
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: c.serviceName,
    serviceType: c.serviceName,
    description: c.intro,
    url,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Guadalajara" },
      { "@type": "Country", name: lang === "en" ? "Mexico" : "México" },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-8 sm:grid-cols-[1fr_14rem]">
        <div>
          <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl text-balance">{c.h1}</h1>
          <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">{c.intro}</p>
          <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-8 gap-2">
            <WhatsAppIcon size={20} />
            {c.cta}
          </a>
        </div>
        <div className="mx-auto w-full max-w-56 sm:max-w-none">
          <Image
            src={dulcero.image!}
            alt={c.imgAlt}
            width={dulcero.imageWidth!}
            height={dulcero.imageHeight!}
            sizes="224px"
            priority
            className="aspect-[3/4] w-full rounded-2xl border border-line bg-paper-raised object-cover"
          />
        </div>
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.offerTitle}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {c.offers.map((o) => (
          <div key={o.title} className="card-soft flex flex-col p-5">
            <h3 className="font-display text-lg text-ink">{o.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{o.body}</p>
            <Link href={href(o.href)} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              {o.link} →
            </Link>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.flowTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
        {c.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.knowTitle}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
        {c.know.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.faqTitle}</h2>
      <div className="mt-4 space-y-5">
        {c.faq.map(([q, a]) => (
          <div key={q}>
            <h3 className="text-sm font-semibold text-ink">{q}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.moreTitle}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {c.more.map(([label, to]) => (
          <li key={to}>
            <Link href={href(to)} className="text-brand underline-offset-4 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ShopCta lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
