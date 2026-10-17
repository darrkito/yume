import Image from "next/image";
import Link from "next/link";
import { tattooItems } from "@/content/gallery";
import { getGalleryItemsEn } from "@/content/gallery.en";
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
      ["Duración", "De unas horas a un par de días, según la zona y cuánto se frote. El fabricante del papel indica 48 horas o más sin frotar"],
      ["Tintas", "Aptas para la piel, de uso externo"],
      ["Dónde se aplican", "Brazo, muñeca, mano, cuello y pierna (fotos reales abajo). No en ojos ni sobre piel lastimada"],
      ["Edad", "El fabricante no marca edad mínima. En menores, con supervisión de un adulto y una prueba previa en un área pequeña"],
      ["Producción", "2-3 días hábiles después del anticipo del 50%"],
      ["Precio y mínimo", "Se cotizan por WhatsApp según diseño, tamaño y cantidad"],
      ["Prueba digital", "Después del anticipo y antes de producir, con hasta 2 rondas de ajustes"],
    ],
    stepsTitle: "Cómo pedirlos",
    steps: [
      "Escríbenos por WhatsApp con tu logo o diseño, el tamaño que buscas y la cantidad, y te cotizamos.",
      "Pagas el 50% de anticipo: es el primer paso antes de producir.",
      "Te mandamos la prueba digital y la apruebas (hasta 2 rondas de ajustes).",
      "Producimos en 2-3 días hábiles y te lo enviamos a todo México o lo recoges en Casa Blanca, Guadalajara.",
    ],
    galleryTitle: "Tatuajes que hemos hecho",
    galleryBody: "Fotos reales de pedidos recientes, aplicados en piel: estampillas, personajes y fotos personalizadas.",
    photosTitle: "Tu foto, hecha tatuaje",
    photosBody: "Recortamos la silueta de tus fotos de pareja o de infancia. Así se ven las hojas y ya aplicados.",
    galleryAll: "Ver toda la galería",
    careTitle: "Cómo se aplican y se retiran",
    care: [
      "Elige tu tatuaje y retira la película de plástico protectora.",
      "Colócalo hacia abajo, con el diseño directamente sobre la piel limpia y seca.",
      "Humedece muy bien el papel con agua y presiona con tu mano durante 20-30 segundos.",
      "Retira suavemente el papel y espera unos segundos a que seque bien antes de tocar el tatuaje.",
    ],
    careRemove: "Para retirarlo: usa aceite corporal, crema o alcohol y frota suavemente. Se entregan con una tarjeta de instrucciones como esta.",
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Cuánto duran los tatuajes temporales?", "Depende de la zona y de cuánto se frote: de unas horas a un par de días. El fabricante del papel indica 48 horas o más si no se frotan, así que son ideales para un evento, una fiesta o una activación."],
      ["¿Son seguros para la piel?", "Usamos tintas aptas para la piel y son de uso externo. No los apliques en los ojos ni sobre piel lastimada. Si tienes piel sensible o alergias, prueba primero con uno pequeño."],
      ["¿Se pueden usar en niños? ¿Desde qué edad?", "El fabricante del papel no indica una edad mínima. Como precaución, que un adulto los aplique y supervise, haz primero una prueba en un área pequeña y evita ojos, boca y piel lastimada."],
      ["¿En qué partes del cuerpo se pueden poner?", "Las fotos de esta página son en brazo, muñeca, mano, cuello y pierna. Si lo quieres en la cara, evita la zona de los ojos y la piel lastimada, y haz una prueba pequeña antes."],
      ["¿Tienen certificaciones dermatológicas?", "El fabricante del papel no publica certificaciones dermatológicas ni de normas específicas. Si tu evento o marca las necesita, escríbenos antes de cotizar para revisarlo."],
      ["¿Cómo se quitan?", "Con aceite corporal, crema o alcohol, frotando suavemente. También se van solos con el paso de los días."],
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
      ["Wear time", "A few hours to a couple of days, depending on the area and how much it is rubbed. The paper maker states 48 hours or more if left untouched"],
      ["Inks", "Skin-safe, for external use"],
      ["Where to apply", "Arm, wrist, hand, neck, and leg (real photos below). Not on eyes or broken skin"],
      ["Age", "The maker gives no minimum age. For children, an adult should supervise and do a small patch test first"],
      ["Production", "2-3 business days after the 50% deposit"],
      ["Price and minimum", "Quoted on WhatsApp based on design, size, and quantity"],
      ["Digital proof", "After the deposit and before production, with up to 2 rounds of adjustments"],
    ],
    stepsTitle: "How to order",
    steps: [
      "Message us on WhatsApp with your logo or design, the size you want, and the quantity, and we send you a quote.",
      "You pay the 50% deposit: it is the first step before production.",
      "We send the digital proof and you approve it (up to 2 rounds of adjustments).",
      "We produce in 2-3 business days and ship across Mexico, or you pick up at Casa Blanca, Guadalajara.",
    ],
    galleryTitle: "Tattoos we have made",
    galleryBody: "Real photos of recent orders, applied on skin: stamps, characters, and custom photos.",
    photosTitle: "Your photo, as a tattoo",
    photosBody: "We cut out the outline of your couple or childhood photos. Here are the sheets and the applied result.",
    galleryAll: "See the full gallery",
    careTitle: "How to apply and remove them",
    care: [
      "Pick your tattoo and peel off the protective plastic film.",
      "Place it face down, with the design directly on clean, dry skin.",
      "Soak the paper well with water and press with your hand for 20-30 seconds.",
      "Gently peel the paper off and wait a few seconds for it to dry before touching the tattoo.",
    ],
    careRemove: "To remove: use body oil, lotion, or rubbing alcohol and rub gently. They come with an instruction card like this one.",
    faqTitle: "Frequently asked questions",
    faq: [
      ["How long do temporary tattoos last?", "It depends on the area and how much they are rubbed: a few hours to a couple of days. The paper maker states 48 hours or more if left untouched, so they suit an event, a party, or an activation."],
      ["Are they safe for skin?", "We use skin-safe inks and they are for external use. Do not apply them on the eyes or on broken skin. If you have sensitive skin or allergies, try a small one first."],
      ["Can children use them? From what age?", "The paper maker gives no minimum age. As a precaution, have an adult apply and supervise them, do a small patch test first, and avoid eyes, mouth, and broken skin."],
      ["Where on the body can they go?", "The photos on this page show arm, wrist, hand, neck, and leg. If you want one on the face, avoid the eye area and broken skin, and do a small test first."],
      ["Do they have dermatological certifications?", "The paper maker does not publish dermatological or specific standards certifications. If your event or brand needs them, message us before quoting so we can check."],
      ["How do you remove them?", "With body oil, lotion, or rubbing alcohol, rubbing gently. They also fade on their own over a few days."],
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

const SKIN = ["tatuaje-chococat", "tatuaje-sin-cara-estampilla", "tatuaje-haku-estampilla", "tatuaje-sprigatito", "tatuaje-hello-kitty-oso", "tatuaje-howl-estampilla", "tatuaje-ponyo-estampilla", "tatuajes-tarjeta-instrucciones"];
const PHOTOS = ["tatuaje-pareja-antebrazo", "tatuaje-parejas-recortes", "tatuaje-cumpleanos-tarjeta"];

export function TattooPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const all = lang === "en" ? getGalleryItemsEn().filter((i) => i.type === "tattoo") : tattooItems;
  const pick = (slugs: string[]) => slugs.flatMap((s) => all.find((i) => i.slug === s) ?? []);
  const skin = pick(SKIN);
  const photos = pick(PHOTOS);
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
    image: [...skin, ...photos].map((i) => `${SITE.url}${i.image}`),
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

      <h2 className="mt-14 font-display text-2xl text-ink">{c.galleryTitle}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{c.galleryBody}</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {skin.map((i, n) => (
          <li key={i.slug} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-paper-raised">
            <Image src={i.image} alt={i.alt} fill sizes="(min-width: 768px) 170px, 47vw" className="object-cover" priority={n < 2} />
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl text-ink">{c.photosTitle}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{c.photosBody}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {photos.map((i) => (
          <li key={i.slug} className="relative aspect-[3/2] overflow-hidden rounded-xl border border-line bg-paper-raised">
            <Image src={i.image} alt={i.alt} fill sizes="(min-width: 768px) 230px, 94vw" className="object-cover" />
          </li>
        ))}
      </ul>
      <Link href={lang === "en" ? "/en/gallery" : "/galeria"} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
        {c.galleryAll} →
      </Link>

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

      <h2 className="mt-14 font-display text-2xl text-ink">{c.careTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
        {c.care.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.careRemove}</p>

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
