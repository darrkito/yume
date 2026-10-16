import Link from "next/link";
import { SITE, waLink } from "@/content/site";
import { breadcrumbSchema, ORG_ID } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ShopCta } from "@/components/ShopCta";
import type { Lang } from "@/lib/i18n";

// Quote-only product page: no price or Offer schema on purpose (price and
// minimum are confirmed per design on WhatsApp), so it is a Service, not a Product.
const COPY = {
  es: {
    path: "/productos/tatuajes-temporales-personalizados",
    home: "Inicio",
    products: "Productos",
    productsHref: "/productos",
    h1: "Tatuajes temporales personalizados en Guadalajara",
    intro:
      "Tatuajes temporales con tu logo o diseño, hechos a la medida para eventos, activaciones de marca, bodas y fiestas. Los producimos en Guadalajara y los enviamos a todo México.",
    specsTitle: "Lo esencial",
    specs: [
      ["Tamaño", "Personalizado: el que necesites"],
      ["Duración", "Unas horas, pensados para un evento o un día"],
      ["Tintas", "Aptas para la piel"],
      ["Producción", "2-3 días hábiles después del anticipo del 50%"],
      ["Precio y mínimo", "Se cotizan por WhatsApp según diseño, tamaño y cantidad"],
      ["Prueba digital", "Antes de producir, con hasta 2 rondas de ajustes"],
    ],
    stepsTitle: "Cómo pedirlos",
    steps: [
      "Escríbenos por WhatsApp con tu logo o diseño, el tamaño que buscas y la cantidad.",
      "Te cotizamos y te mandamos una prueba digital para que la apruebes.",
      "Pagas el 50% de anticipo y entra a producción: 2-3 días hábiles.",
      "Te los enviamos a todo México o los recoges en Casa Blanca, Guadalajara.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Cuánto duran los tatuajes temporales?", "Duran unas horas, por lo que son ideales para un evento, una fiesta o una activación de un día."],
      ["¿Son seguros para la piel?", "Usamos tintas aptas para la piel. Si tienes piel sensible o alergias, prueba primero con uno pequeño."],
      ["¿De qué tamaño pueden ser?", "El tamaño es personalizado: dinos cuál necesitas y confirmamos que tu diseño se vea bien a ese tamaño."],
      ["¿Cuánto cuestan y cuál es el pedido mínimo?", "Se cotizan por WhatsApp porque dependen del diseño, el tamaño y la cantidad. Escríbenos y te respondemos con precio."],
      ["¿Cuánto tardan?", "La producción toma 2-3 días hábiles después del anticipo del 50%, más el envío a tu ciudad o la recolección en Casa Blanca."],
    ],
    cta: "Cotizar por WhatsApp",
    wa: "Hola, quiero cotizar tatuajes temporales personalizados.\n\nTamaño:\nCantidad:\n¿Ya tengo diseño? (sí / no):",
    moreTitle: "Guías relacionadas",
    more: [
      ["Tatuajes temporales para eventos y marcas", "/blog/tatuajes-temporales-personalizados-para-eventos"],
      ["Tatuajes temporales para bodas, eventos y fiestas", "/blog/tatuajes-temporales-para-boda-eventos-y-fiestas"],
    ],
    serviceName: "Tatuajes temporales personalizados",
  },
  en: {
    path: "/en/products/custom-temporary-tattoos",
    home: "Home",
    products: "Products",
    productsHref: "/en/products",
    h1: "Custom temporary tattoos in Guadalajara",
    intro:
      "Temporary tattoos with your logo or design, made to order for events, brand activations, weddings, and parties. We produce them in Guadalajara and ship across Mexico.",
    specsTitle: "The essentials",
    specs: [
      ["Size", "Custom: whatever you need"],
      ["Wear time", "A few hours, made for an event or a day"],
      ["Inks", "Skin-safe"],
      ["Production", "2-3 business days after the 50% deposit"],
      ["Price and minimum", "Quoted on WhatsApp based on design, size, and quantity"],
      ["Digital proof", "Before production, with up to 2 rounds of adjustments"],
    ],
    stepsTitle: "How to order",
    steps: [
      "Message us on WhatsApp with your logo or design, the size you want, and the quantity.",
      "We send a quote and a digital proof for you to approve.",
      "You pay the 50% deposit and it goes into production: 2-3 business days.",
      "We ship them across Mexico, or you pick them up at Casa Blanca, Guadalajara.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["How long do temporary tattoos last?", "They last a few hours, so they are ideal for an event, a party, or a one-day activation."],
      ["Are they safe for skin?", "We use skin-safe inks. If you have sensitive skin or allergies, try a small one first."],
      ["What sizes are available?", "Size is custom: tell us what you need and we will confirm your design looks good at that size."],
      ["How much do they cost and what is the minimum order?", "They are quoted on WhatsApp because they depend on the design, size, and quantity. Message us and we will reply with a price."],
      ["How long do they take?", "Production takes 2-3 business days after the 50% deposit, plus shipping to your city or pickup at Casa Blanca."],
    ],
    cta: "Get a quote on WhatsApp",
    wa: "Hi, I'd like a quote for custom temporary tattoos.\n\nSize:\nQuantity:\nDo I already have a design? (yes / no):",
    moreTitle: "Related guides",
    more: [
      ["Custom temporary tattoos for events and brands", "/en/blog/custom-temporary-tattoos-for-events-and-brands"],
      ["Temporary tattoos for weddings, events, and parties", "/en/blog/temporary-tattoos-for-weddings-events-and-parties"],
    ],
    serviceName: "Custom temporary tattoos",
  },
};

export function TattooPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const url = `${SITE.url}${c.path}`;
  const breadcrumb = breadcrumbSchema(c.path, [
    { name: c.home, url: lang === "en" ? "/en" : "/" },
    { name: c.products, url: c.productsHref },
    { name: c.serviceName },
  ]);
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
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl text-balance">{c.h1}</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">{c.intro}</p>
      <a href={waLink(c.wa)} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-8 gap-2">
        <WhatsAppIcon size={20} />
        {c.cta}
      </a>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.specsTitle}</h2>
      <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
        {c.specs.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-3">
            <dt className="text-ink-soft">{k}</dt>
            <dd className="text-ink">{v}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.stepsTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
        {c.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

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
        {c.more.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="text-brand underline-offset-4 hover:underline">
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
