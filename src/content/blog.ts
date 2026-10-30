import { dulceroPosts } from "@/content/blog-dulceros";
import { getProduct, tieredPrice, tierPriceRows } from "@/content/products";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";

// Catalog-derived figures for posts, so copy never drifts from real prices.
export const priceOf = (slug: string, qty: number) => {
  const n = tieredPrice(getProduct(slug)!.tiers!, qty);
  return n % 1 ? n.toFixed(2) : String(n);
};
export const perPiece = (slug: string, qty: number) => (Number(priceOf(slug, qty)) / qty).toFixed(2);
export const recetarioPrice =(variantId: "sin-diseno" | "con-diseno") =>
  getProduct("recetario-medico-personalizado")!.variants!.find((v) => v.id === variantId)!.price;
export const casablancaBranchNames =CASABLANCA_BRANCHES.map((b) => b.name.replace(/ \(matriz\)$/, "")).join(", ");

export interface BlogSection {
  heading: string;
  body: string[];
  /** Optional comparison/price table rendered after the paragraphs. */
  table?: { headers: string[]; rows: string[][] };
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter variant for the <title> tag / OG title when `title` (used as the
   * on-page H1) would push the rendered "<title> | Yume" past ~70 characters
   * and risk truncation in search results. Falls back to `title` when unset. */
  metaTitle?: string;
  description: string;
  category: string;
  publishedAt: string; // ISO date
  /** Real last-edit date (ISO), set by hand when a post's content actually
   * changes. Defaults to publishedAt — never backdated, never build time. */
  modifiedAt?: string;
  intro: string;
  sections: BlogSection[];
  relatedProductSlugs: string[];
  /** Slugs of other posts in this same array worth cross-linking (same-language
   * slugs only — the EN file wires its own EN slugs). Rendered as a "Sigue
   * leyendo" block; keeps topically related guides actually connected instead
   * of relying only on relatedProductSlugs (blog->product, never blog->blog). */
  relatedBlogSlugs?: string[];
  /** Link to the service/product page when the topic is a quote-only service
   * (no entry in products.ts), so the post still passes link equity to it. */
  serviceLink?: { href: string; label: string };
  /** WhatsApp quote message shown as the post's CTA when it has no
   * `relatedProductSlugs` yet: e.g. a topic covering a service that isn't
   * a cataloged product yet (still quote-only, handled case by case). */
  quoteMessage?: string;
  /** Outbound citations to real primary/authoritative sources referenced in
   * the post's content: rendered as a "Fuentes" list at the end. */
  sources?: { label: string; url: string }[];
  /** Free file under public/ offered right after the intro (e.g. a printable PDF). */
  download?: { href: string; label: string };
  /** Visible FAQ after the sections, with matching FAQPage JSON-LD (BlogFaq). Real facts only. */
  faq?: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "recetarios-medicos-personalizados-guadalajara",
    title: "Recetarios médicos personalizados en Guadalajara: guía para tu consultorio",
    metaTitle: "Recetarios médicos en Guadalajara: guía y membrete",
    description:
      `Qué datos lleva el membrete, qué tamaño usar y cuánto cuesta un recetario médico personalizado en Guadalajara: desde $${recetarioPrice("sin-diseno")}, con prueba digital.`,
    category: "Guías",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-10-26",
    intro:
      "Si tienes un consultorio en Guadalajara, Zapopan o cualquier ciudad de Jalisco, el recetario que usas todos los días también es parte de la imagen de tu consultorio. Uno genérico, comprado en una papelería cualquiera, no comunica lo mismo que uno con tu membrete, tu cédula profesional y el diseño de tu consultorio. Esta guía cubre lo que necesitas saber antes de pedir uno personalizado.",
    sections: [
      {
        heading: "Qué datos lleva tu membrete",
        body: [
          "Tu membrete debe incluir tu nombre completo, especialidad, número de cédula profesional (y de especialidad, si aplica), y los datos de contacto del consultorio: dirección, teléfono y, si quieres, horario. Son los datos fijos que se imprimen una sola vez para que no los escribas a mano en cada receta.",
          "Si compartes consultorio con otros especialistas o trabajas en más de una dirección, es común usar un membrete distinto por ubicación en vez de intentar meter toda la información en uno solo: se ve más limpio y evita confusiones para el paciente.",
          "Antes de cotizar, junta tus datos tal como aparecen en tus documentos oficiales: copia el número de cédula sin reescribirlo de memoria y confirma que el teléfono y la dirección sean los que quieres que use el paciente. Si ya tienes un logo, mándalo; si no, puedes pedir la opción con diseño y lo armamos contigo.",
          "Para saber qué datos se llenan después, ya con cada paciente, y cuáles conviene dejar preimpresos, lee la guía sobre el formato de receta médica en México.",
        ],
      },
      {
        heading: "Tamaño y papel: qué es estándar en México",
        body: [
          "En Yume el recetario es Media Carta (14 × 21.5 cm), de 100 hojas, en papel Bond de 90 gr color blanco. Es el tamaño que más se usa en consultorios de México: cabe en cualquier folder o expediente sin doblarse y es cómodo para escribir a mano.",
          "Si tu consultorio maneja recetas para trámites específicos (por ejemplo, con folio o código de barras para alguna institución), coméntalo al cotizar: es información que hay que confirmar antes de mandar a imprimir, no algo que se pueda improvisar después.",
          "Si lo que te hace dudar es si conviene imprimir o pasarte a una receta digital, revisa la comparación entre recetario impreso y digital antes de decidir.",
        ],
      },
      {
        heading: "Cuánto cuesta un recetario médico personalizado",
        body: [
          `Un recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} si ya tienes tu diseño listo y $${recetarioPrice("con-diseno")} si lo diseñamos contigo. En ambos casos recibes una prueba digital del membrete y solo producimos cuando la apruebas. Los precios son en pesos mexicanos y por recetario completo.`,
          "La diferencia entre las dos opciones es el trabajo de diseño: \"sin diseño\" es para cuando ya tienes un archivo editable con tu membrete, y \"con diseño\" incluye que armemos el membrete contigo a partir de tus datos profesionales, con los ajustes que necesites antes de imprimir.",
          "Si necesitas más de un recetario, por ejemplo uno por consultorio, escríbenos por WhatsApp y lo cotizamos juntos. Para decidir entre las dos opciones con calma, la guía de recetario con diseño vs. sin diseño explica qué incluye cada una.",
        ],
        table: {
          headers: ["Opción", "Precio", "Qué incluye"],
          rows: [
            ["Sin diseño", `$${recetarioPrice("sin-diseno")}`, "Imprimimos tu diseño ya listo en 100 hojas Media Carta"],
            ["Con diseño", `$${recetarioPrice("con-diseno")}`, "Diseñamos el membrete contigo y lo imprimimos en 100 hojas Media Carta"],
          ],
        },
      },
      {
        heading: "El proceso: de la cotización a tener el recetario en mano",
        body: [
          "El proceso es igual en Guadalajara que en cualquier ciudad de México, porque el diseño se aprueba a distancia: cotizas por WhatsApp o en la tienda en línea, mandas tus datos o tu logo, revisas la prueba digital y, hasta que la apruebas, se manda a producción.",
          "Ese paso de aprobación es el que evita el error más común al personalizar papelería: mandar a imprimir sin haber visto el diseño final y encontrar una errata en la cédula profesional o en el teléfono ya con las 100 hojas impresas.",
          "Cuando te llegue la prueba digital, revisa con calma cuatro cosas: que tu nombre esté bien escrito, que el número de cédula coincida con tu documento, que el teléfono marque al consultorio correcto y que la dirección esté completa. Si algo no cuadra, pide el ajuste en ese momento, que es cuando corregirlo es más fácil.",
        ],
      },
      {
        heading: "Tiempos y entrega: cuánto tarda y cómo lo recibes",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles una vez aprobada la prueba digital. Si lo recibes por paquetería, suma de ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles de tránsito; si lo recoges en una sucursal Casa Blanca, suma ${PICKUP_EXTRA_DAYS} día hábil. Son estimaciones que pueden variar en días festivos.`,
          `Producimos en Guadalajara y entregamos de dos formas: recolección en una de las ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca de la zona metropolitana ($${CASABLANCA_PRICE}) o envío a domicilio a todo México ($${NATIONAL_SHIPPING_PRICE}). Las sucursales son: ${casablancaBranchNames}.`,
          `Las dos opciones son gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. Un recetario solo no llega a ese monto, así que aplica el cargo de envío o de recolección, salvo que sumes más piezas del catálogo hasta alcanzarlo.`,
        ],
      },
      {
        heading: "Errores comunes al pedir tu primer recetario",
        body: [
          "Los errores más comunes son tres: aprobar la prueba sin revisar la cédula contra tu documento, imprimir datos que cambian seguido y meter demasiada información en un espacio pequeño. Los tres se evitan con una revisión tranquila de la prueba digital antes de mandar a producción.",
          "Si tu teléfono, tu horario o tu dirección cambian seguido, piensa dos veces antes de imprimirlos en las 100 hojas. Un dato estable, como el correo del consultorio, dura más que uno que vas a tener que corregir en unos meses.",
          "También conviene no saturar el membrete: pocos datos y bien legibles se leen mejor que muchos en letra pequeña, y dejan espacio para escribir a mano. Si trabajas bajo un colegio o una institución con requisitos propios, confírmalos con ellos antes de imprimir.",
        ],
      },
      {
        heading: "Un recetario y una tarjeta con el mismo diseño",
        body: [
          "Si además del recetario quieres una tarjeta de presentación, puedes cotizar ambas con el mismo membrete: misma tipografía, mismos colores y mismos datos. Tu consultorio se ve más consistente, no coordinas dos diseños distintos y el paciente reconoce tu imagen desde la receta hasta la tarjeta que se lleva de la consulta.",
          "Las tarjetas se cotizan caso por caso por WhatsApp. En la guía de tarjetas de presentación para tu consultorio vemos qué datos preparar. Y si estás comparando proveedores, la comparación de Yume con otras imprentas de recetarios te ayuda a decidir.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un recetario médico personalizado en Yume?",
        a: `Un recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} si ya tienes tu diseño listo y $${recetarioPrice("con-diseno")} si lo diseñamos contigo.`,
      },
      {
        q: "¿Qué tamaño y papel tiene el recetario?",
        a: "Es Media Carta (14 × 21.5 cm), de 100 hojas, en papel Bond de 90 gr color blanco.",
      },
      {
        q: "¿Veo el diseño antes de que se imprima?",
        a: "Sí. Te enviamos una prueba digital del membrete y solo producimos cuando la apruebas. Revisa ahí tu cédula y tu teléfono.",
      },
      {
        q: "¿Puedo mandar mi propio diseño?",
        a: "Sí. Puedes enviar tu diseño en formato editable (opción sin diseño) o pedir que lo diseñemos contigo desde cero (opción con diseño).",
      },
      {
        q: "¿Cuánto tarda en llegar mi pedido?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles tras aprobar la prueba. Por paquetería suma de ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles; en sucursal Casa Blanca suma ${PICKUP_EXTRA_DAYS} día hábil.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí. Producimos en Guadalajara y enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}. En compras de $${FREE_SHIPPING_THRESHOLD} o más el envío es gratis.`,
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si la necesitas para tu consultorio o clínica, escríbenos por WhatsApp antes de pagar.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetario-medico-impreso-vs-digital", "recetario-medico-con-diseno-vs-sin-diseno", "datos-obligatorios-receta-medica-mexico", "tarjetas-de-presentacion-consultorio", "yume-vs-imprentas-recetarios-medicos", "como-pedir-papeleria-personalizada-en-linea"],
  },
  {
    slug: "stickers-personalizados-para-negocios-guadalajara",
    title: "Etiquetas personalizadas para tu negocio en Guadalajara (GDL): guía rápida",
    metaTitle: "Etiquetas en Guadalajara (GDL) para tu negocio: guía",
    description:
      "Cómo usar etiquetas personalizadas si tienes una marca, un emprendimiento o un puesto en bazares de Guadalajara (GDL): qué formato pedir y qué archivo enviar para tu logo.",
    category: "Guías",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-10-20",
    intro:
      "En Guadalajara (GDL) hay un movimiento fuerte de emprendimientos pequeños (marcas de repostería, ropa, velas, joyería, café) que venden en bazares, mercados sobre ruedas o directo por redes sociales. Una etiqueta con tu logo es de las formas más baratas de que tu marca se vea consistente en cada pedido que sale, sin necesitar empaque especial.",
    sections: [
      {
        heading: "Para qué sirven realmente",
        body: [
          "Los usos más comunes que vemos: sellar bolsas o cajas de empaque, pegar en el fondo de productos (velas, jabones, frascos), cerrar sobres de envíos, o simplemente regalarlas sueltas como detalle en el pedido: funcionan como una tarjeta de presentación pequeña que además decora.",
          "Si vendes en bazares o mercados de Guadalajara (GDL), tener etiquetas con tu logo en cada bolsa de papel ayuda a que la gente te reconozca la próxima vez, sin gastar en empaque personalizado caro desde el arranque.",
        ],
      },
      {
        heading: "Precios de etiquetas personalizadas",
        body: [
          "Vendemos por cantidad de piezas, no por hoja, y hay dos opciones: las Etiquetas con tu Logo, pensadas para el logo de tu negocio (mínimo 50 piezas), y los Stickers de Vinil Personalizados, para cualquier diseño, personaje o foto (mínimo 40 piezas). En las dos, pasando las 100 piezas cada pieza extra va a precio mayoreo, 10% menos.",
          "En ambas eliges el corte (troquelado, a la forma de tu diseño, o semitroquelado) y el acabado: mate, brillante u holográfico (el holográfico suma $0.50 por pieza). Todas son resistentes al agua.",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Qué cantidad pedir",
        body: [
          "Como se vende por pieza, pides la cantidad exacta que necesitas en vez de planillas completas: desde 50 con tu logo, suficiente para ajustar el pedido al tamaño real de tu emprendimiento sin comprar de más.",
          "Todas nuestras etiquetas son resistentes al agua, así que aguantan bien en empaques que se pueden mojar o manejar seguido (bolsas, botellas, envíos). Cuéntanos la forma o el tamaño que prefieres al cotizar, y te mandamos una prueba digital antes de imprimir.",
        ],
      },
      {
        heading: "Recoger en Guadalajara o recibir a domicilio",
        body: [
          `No tenemos tienda física, pero producimos en Guadalajara. Si estás en la zona metropolitana puedes recoger tu pedido en una de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca por $${CASABLANCA_PRICE}: ${casablancaBranchNames}. Eliges la sucursal al pagar.`,
          `Si prefieres que llegue a tu casa o negocio, el envío a cualquier parte de México cuesta $${NATIONAL_SHIPPING_PRICE}. En compras de $${FREE_SHIPPING_THRESHOLD} o más, tanto el envío como la recolección son gratis.`,
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
        ],
      },
      {
        heading: "Qué archivo enviar de tu logo",
        body: [
          "Lo ideal es un PNG, PDF, AI o SVG con fondo transparente: así la etiqueta se ve limpia sin un cuadro blanco alrededor. Si solo tienes tu logo en JPG o una foto, también podemos trabajarlo, pero te avisamos si hace falta vectorizarlo o mejorar la calidad antes de imprimir.",
          "Si todavía no tienes un logo diseñado, dínoslo al cotizar: podemos apoyarte con algo simple basado en tu marca antes de llegar a producción.",
        ],
      },
      {
        heading: "Cómo es el proceso",
        body: [
          "Haces tu pedido en la tienda en línea (eliges cantidad, corte y acabado, y subes tu logo) o cotizas primero por WhatsApp si tienes dudas. Te mandamos una prueba digital con hasta 2 rondas de ajustes, y no imprimimos nada hasta que la apruebas: así evitas encontrar un error ya con todas las etiquetas impresas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Tienen tienda física en Guadalajara?",
        a: `No. Producimos sobre pedido en Guadalajara y entregamos de dos formas: recolección en una de las ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca de la zona metropolitana ($${CASABLANCA_PRICE}) o envío a domicilio ($${NATIONAL_SHIPPING_PRICE} a todo México). Las dos son gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
      {
        q: "¿Cuánto cuestan 100 etiquetas con mi logo?",
        a: `100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo: por ejemplo, 200 piezas son $${priceOf("stickers-logo-personalizado", 200)} y 300 piezas son $${priceOf("stickers-logo-personalizado", 300)}.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "50 piezas en las Etiquetas con tu Logo y 40 piezas en los Stickers de Vinil Personalizados.",
      },
      {
        q: "¿Cuánto tarda mi pedido si estoy en Guadalajara?",
        a: `La prueba digital llega en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles, o llega a tu domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Las etiquetas son resistentes al agua?",
        a: "Sí, todas nuestras etiquetas y stickers son resistentes al agua.",
      },
      {
        q: "¿Hacen envíos fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si tu empresa necesita factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "stickers-para-empaques-de-negocio", "impresion-de-etiquetas-rollo-hoja-o-por-pieza"],
  },
  {
    slug: "papeleria-personalizada-para-negocios-jalisco",
    title: "Papelería personalizada para negocios en Jalisco: por qué vale la pena",
    metaTitle: "Papelería personalizada para negocios en Jalisco",
    description:
      "Papelería personalizada para negocios en Jalisco: recetarios, etiquetas y stickers con tu marca, precios reales, prueba digital y envío a todo México.",
    category: "Negocio local",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-10-26",
    intro:
      "Ya sea que tengas un consultorio médico o un emprendimiento que vende en bazares de Guadalajara, la papelería personalizada que usas todos los días (recetarios, etiquetas) es una de las formas más sencillas de verse consistente. No es la parte más vistosa de un negocio, pero es la que el cliente o paciente tiene literalmente en la mano. Esta guía explica qué piezas puedes personalizar, cuánto cuestan, cómo se trabaja desde Guadalajara y por dónde conviene empezar.",
    sections: [
      {
        heading: "Qué es la papelería personalizada y por qué importa en tu negocio",
        body: [
          "La papelería personalizada es todo impreso que lleva tu nombre, logo y datos reales: recetarios, etiquetas, stickers, menús o invitaciones. Para un negocio en Jalisco sirve porque es lo que tu cliente o paciente tiene en la mano, y bien hecha comunica orden y cuidado sin que tengas que rediseñar tu marca completa.",
          "Piensa en el recorrido de una persona con tu negocio: recibe un recetario, abre una bolsa, pega una etiqueta en un frasco o se lleva un recuerdo de tu evento. Cada una de esas piezas es un momento en el que tu marca se ve (o no se ve). Cuando todas se parecen entre sí, el negocio se percibe como uno solo y bien cuidado.",
        ],
      },
      {
        heading: "Consistencia antes que cantidad",
        body: [
          "No hace falta rediseñar todo tu negocio para que se vea más profesional: a veces basta con que el recetario, la bolsa de entrega y la etiqueta que cierra el paquete usen el mismo logo y los mismos colores. Es más barato que un rebranding completo y el efecto se nota igual.",
          "Por eso en Yume trabajamos sobre pedido y a la medida en vez de vender plantillas genéricas: cada pieza se diseña con tus datos y tu marca real, no con un molde que también está usando otro negocio. Si quieres ver la diferencia con calma, lee nuestra comparación de papelería personalizada vs. plantillas genéricas.",
          "Un buen punto de partida es revisar tres cosas en todo lo que imprimes: que el logo sea el mismo, que los colores coincidan y que el teléfono o WhatsApp de contacto sea el mismo en todas las piezas. Con eso ya tienes una base consistente antes de pedir nada nuevo.",
        ],
      },
      {
        heading: "Qué piezas de papelería puedes pedir en Yume",
        body: [
          "En Yume puedes pedir recetarios médicos, etiquetas con tu logo y stickers de vinil, todos con precio publicado en la tienda. También cotizamos por WhatsApp invitaciones, menús y tatuajes temporales para eventos. Cada pedido pasa por una prueba digital antes de imprimirse.",
          "Recetario médico personalizado: para consultorios en Guadalajara, Zapopan o cualquier ciudad de Jalisco. Lo puedes pedir sin diseño, si ya traes el tuyo, o con diseño, si lo armamos contigo. Hay una guía completa de recetarios médicos personalizados en Guadalajara con los datos que lleva el membrete.",
          "Etiquetas con tu logo y stickers de vinil: sirven para cerrar empaques, identificar productos o dar un detalle de marca a tus clientes. Se venden por cantidad de piezas, no por hoja. Si vendes productos, también tenemos una guía de stickers personalizados para negocios en Guadalajara.",
          "Piezas para eventos: invitaciones, menús y tatuajes temporales no tienen precio fijo en la tienda porque dependen del diseño y la cantidad. Se cotizan por WhatsApp, y el diseño pasa por la misma prueba digital que el resto de los pedidos.",
        ],
      },
      {
        heading: "Cuánto cuesta la papelería personalizada",
        body: [
          `Las primeras 100 piezas de Etiquetas con tu Logo cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN. Pasando las 100 entras a precio mayoreo, 10% menos por pieza extra. El recetario médico de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
          "El mínimo de pedido es de 50 piezas en las Etiquetas con tu Logo y de 40 piezas en los Stickers de Vinil Personalizados. Esta tabla muestra cuánto cuesta cada cantidad, para que pidas lo que de verdad vas a usar:",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Producción en Guadalajara, envíos a todo México",
        body: [
          "Producimos en Guadalajara, Jalisco, y enviamos a todo México. No hay tienda física: cotizas, apruebas la prueba digital y recibes tu pedido por paquetería o lo recoges en una sucursal Casa Blanca de la zona metropolitana. Los plazos cuentan solo días hábiles desde que apruebas.",
          "Si estás en la zona metropolitana de Guadalajara (Zapopan, Tlaquepaque, Tonalá) el tiempo de entrega suele ser más corto simplemente por cercanía, pero el proceso de cotización, diseño y aprobación es el mismo sin importar en qué ciudad de México estés.",
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. El envío cuesta $${NATIONAL_SHIPPING_PRICE} MXN a cualquier parte de México y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
          `Si recoges, tienes ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca para elegir (${casablancaBranchNames}) por $${CASABLANCA_PRICE} MXN, también gratis desde $${FREE_SHIPPING_THRESHOLD} MXN. Eliges la sucursal al pagar.`,
        ],
      },
      {
        heading: "Papelería para los eventos de tu negocio",
        body: [
          "Si tu negocio organiza una posada, un aniversario o un lanzamiento, puedes sumar piezas con el mismo diseño: stickers, invitaciones, menús o tatuajes temporales. Las invitaciones, los menús y los tatuajes se cotizan por WhatsApp según cantidad y diseño, así que escríbenos con la fecha y el número de invitados.",
          "La misma lógica de consistencia aplica a un evento: cuando la invitación, el menú y el detalle que se llevan los invitados comparten diseño, todo se ve planeado. Para ideas y detalles de cada pieza, revisa nuestras guías de invitaciones personalizadas para eventos, menú de boda personalizado y stickers para bodas, eventos y fiestas.",
          "Si eres planner o coordinas eventos para otras personas, cuéntanos por WhatsApp la cantidad por evento y la fecha: así te decimos cómo armar la prueba digital con tiempo suficiente.",
        ],
      },
      {
        heading: "Por dónde empezar",
        body: [
          "Empieza por la pieza que más usas: el recetario si tienes consultorio, las etiquetas con tu logo si vendes un producto. Manda tus datos o tu logo por WhatsApp o desde la tienda, revisa la prueba digital y apruébala. No se imprime nada antes de tu aprobación.",
          "Puedes cotizar directo por WhatsApp o ver el catálogo completo en la tienda: en ambos casos el siguiente paso es el mismo: mandarnos tus datos o tu logo para armar la prueba digital. Si quieres el paso a paso completo, lee cómo hacer un pedido de papelería personalizada en línea.",
          "Si todavía no tienes un logo terminado, dínoslo al cotizar: se puede trabajar en conjunto antes de llegar a la prueba digital, no es necesario llegar con todo resuelto.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué papelería personalizada puedo pedir para mi negocio en Jalisco?",
        a: "Recetarios médicos, etiquetas con tu logo y stickers de vinil, con precio publicado en la tienda. También cotizamos por WhatsApp invitaciones, menús y tatuajes temporales para eventos.",
      },
      {
        q: "¿Cuánto cuestan las etiquetas con mi logo?",
        a: `Las primeras 100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN. Pasando las 100 entras a precio mayoreo: por ejemplo, 200 piezas cuestan $${priceOf("stickers-logo-personalizado", 200)} MXN.`,
      },
      {
        q: "¿Cuánto cuesta un recetario médico personalizado?",
        a: `El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "50 piezas en las Etiquetas con tu Logo y 40 piezas en los Stickers de Vinil Personalizados.",
      },
      {
        q: "¿Tienen tienda física en Guadalajara?",
        a: "No. Producimos en Guadalajara, pero el proceso es en línea: cotizas, apruebas la prueba digital y recibes por paquetería o recoges en una sucursal Casa Blanca de la zona metropolitana.",
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Cuánto cuesta el envío?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN a cualquier parte de México, o $${CASABLANCA_PRICE} MXN si recoges en una sucursal Casa Blanca de la zona metropolitana de Guadalajara. Las dos opciones son gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe el diseño?",
        a: "No. Todo pedido pasa primero por una prueba digital y no se manda a producción hasta que la apruebas.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si tu empresa necesita factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["como-pedir-papeleria-personalizada-en-linea", "papeleria-personalizada-vs-plantillas-genericas", "stickers-personalizados-para-negocios-guadalajara", "recetarios-medicos-personalizados-guadalajara", "como-pedir-invitaciones-personalizadas-para-eventos", "menu-de-boda-personalizado"],
  },
  {
    slug: "como-pedir-papeleria-personalizada-en-linea",
    title: "Cómo hacer un pedido de papelería personalizada en línea",
    metaTitle: "Cómo cotizar y pedir papelería personalizada en línea",
    description:
      "Cómo pedir papelería personalizada en línea en México: qué preparar, cómo funciona la prueba digital, cuánto cuesta y cuánto tarda tu pedido.",
    category: "Guías",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "No necesitas visitar una imprenta física para tener papelería con tu marca: en Yume funcionamos como una imprenta online en Guadalajara, con todo el proceso a distancia y envíos a cualquier ciudad de México. Esta guía explica paso a paso cómo cotizar papelería personalizada y pedirla en línea, para que sepas qué preparar antes de escribirnos.",
    sections: [
      {
        heading: "El proceso paso a paso",
        body: [
          "Pedir papelería personalizada en línea toma cinco pasos y casi todo se hace a distancia: cotizas por WhatsApp o en la tienda, nos mandas tus datos o tu logo, revisas una prueba digital, la apruebas y recibes tu pedido por paquetería o en una sucursal Casa Blanca. No se imprime nada antes de tu aprobación.",
          `1) Cotizas por WhatsApp o desde la tienda en línea, indicando qué producto necesitas y la cantidad. 2) Nos mandas tus datos o tu logo/diseño, según el producto. 3) Te enviamos una prueba digital para que revises que todo esté correcto. 4) Apruebas el diseño y hasta ese momento se manda a producción. 5) Recibes tu pedido por paquetería a la dirección que nos des, en cualquier parte de México, o, si estás en la zona metropolitana de Guadalajara, lo recoges en la sucursal Casa Blanca que elijas ($${CASABLANCA_PRICE} MXN, gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más).`,
          "El único paso presencial que existe es recibir el paquete (o recogerlo en tu sucursal Casa Blanca): todo lo demás, incluida cotizar papelería personalizada y aprobar el diseño, se hace a distancia por WhatsApp o correo.",
        ],
      },
      {
        heading: "Qué necesitas tener listo antes de cotizar",
        body: [
          "Para cotizar rápido, ten a la mano los datos de tu pieza y la cantidad que quieres. En un recetario médico son tu nombre, especialidad, cédula y datos del consultorio; en etiquetas, el archivo de tu logo o diseño. Si algo te falta, dínoslo al cotizar y lo resolvemos juntos.",
          "Para un recetario médico: tu nombre completo, especialidad, número de cédula profesional y los datos de contacto de tu consultorio. Para etiquetas con tu logo: el archivo de tu diseño (idealmente PNG, PDF, AI o SVG con fondo transparente) y la cantidad que quieres.",
          "Si todavía no tienes un logo o diseño terminado, dínoslo al cotizar de todas formas: se puede trabajar en conjunto antes de llegar a la prueba digital, no es necesario llegar con todo resuelto. En el recetario esto se refleja en el precio: tienes la opción sin diseño (ya traes tu diseño listo) y la opción con diseño (lo diseñamos contigo).",
          "Si quieres profundizar en esa decisión, lee nuestra guía de recetario médico con diseño vs. sin diseño.",
        ],
      },
      {
        heading: "Cuánto cuesta pedir papelería personalizada",
        body: [
          `El precio depende del producto. El recetario médico de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo. En etiquetas con tu logo, las primeras 100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN; pasando las 100 entras a precio mayoreo, 10% menos por pieza extra.`,
          "Las etiquetas y los stickers se venden por cantidad de piezas, no por hoja, así que pides la cantidad que de verdad necesitas. El mínimo es de 50 piezas en las Etiquetas con tu Logo y de 40 piezas en los Stickers de Vinil Personalizados. Esta tabla muestra cuánto cuesta cada cantidad:",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cuánto tarda y cómo recibes tu pedido",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. Esos plazos cuentan solo días hábiles.`,
          `El envío a cualquier parte de México cuesta $${NATIONAL_SHIPPING_PRICE} MXN y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más. Si estás en Guadalajara o su zona metropolitana, puedes recoger en una de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca (${casablancaBranchNames}) por $${CASABLANCA_PRICE} MXN, también gratis desde $${FREE_SHIPPING_THRESHOLD} MXN. Eliges la sucursal al pagar.`,
          "Como el tiempo corre desde que apruebas la prueba digital, responder rápido es la forma más efectiva de recibir tu pedido antes. Más detalle sobre plazos en nuestra guía de cuánto tarda un pedido de stickers personalizados.",
        ],
      },
      {
        heading: "Cómo revisar la prueba digital sin errores",
        body: [
          "La prueba digital es tu momento para corregir antes de imprimir. Revisa ortografía, teléfono, número de cédula, colores y tamaño del logo con calma, porque una vez impresa la pieza ya no se puede cambiar. No mandamos nada a producción hasta que la apruebas.",
          "En etiquetas y stickers, la prueba incluye hasta 2 rondas de ajustes. Un buen hábito es pedir que otra persona la lea contigo: los errores en un número de teléfono o en una cédula son los más fáciles de pasar por alto cuando ya llevas rato mirando el diseño.",
        ],
      },
      {
        heading: "Por qué no hace falta una imprenta física en Guadalajara",
        body: [
          "No, no necesitas una imprenta física para pedir papelería personalizada. Yume produce en Guadalajara, pero opera en línea: cotizas, apruebas el diseño y recibes tu pedido sin ir a un mostrador ni llevar archivos en USB, desde cualquier ciudad de México.",
          "Aunque producimos en Guadalajara, Jalisco, no operamos como una imprenta de mostrador: somos una imprenta online en Guadalajara. Tu pedido llega a tu domicilio o, dentro de la zona metropolitana, a la sucursal Casa Blanca que te quede más cerca. Todo el proceso, desde cotizar hasta aprobar el diseño final, pasa por WhatsApp o correo, así que el servicio funciona igual si estás en la ciudad o en cualquier otro estado de México.",
          "Eso sí: si estás en la zona metropolitana de Guadalajara el tiempo de entrega suele ser un poco más corto por cercanía, aunque el proceso de cotización y aprobación es idéntico para todo el país: puedes pedir papelería en línea desde México sin importar en qué ciudad estés.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cómo hago un pedido de papelería personalizada en línea?",
        a: "Cotizas por WhatsApp o en la tienda en línea, nos mandas tus datos o tu logo, revisas la prueba digital y, cuando la apruebas, tu pedido pasa a producción. Después lo recibes por paquetería o lo recoges en una sucursal Casa Blanca.",
      },
      {
        q: "¿Cuánto cuesta un recetario médico personalizado?",
        a: `El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
      },
      {
        q: "¿Cuánto cuestan 100 etiquetas con mi logo?",
        a: `Las primeras 100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN. Pasando las 100 entras a precio mayoreo: por ejemplo, 200 piezas cuestan $${priceOf("stickers-logo-personalizado", 200)} MXN.`,
      },
      {
        q: "¿Cuál es el pedido mínimo de etiquetas y stickers?",
        a: "50 piezas en las Etiquetas con tu Logo y 40 piezas en los Stickers de Vinil Personalizados.",
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Cuánto cuesta el envío?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN a cualquier parte de México, o $${CASABLANCA_PRICE} MXN si recoges en una sucursal Casa Blanca de la zona metropolitana de Guadalajara. Las dos opciones son gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe el diseño?",
        a: "No. Todo pedido pasa primero por una prueba digital y no se manda a producción hasta que la apruebas.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si tu empresa o consultorio necesita factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["papeleria-personalizada-para-negocios-jalisco", "papeleria-personalizada-vs-plantillas-genericas", "cuanto-tarda-un-pedido-de-stickers-personalizados", "recetario-medico-con-diseno-vs-sin-diseno", "donde-imprimir-stickers-personalizados-mexico"],
  },
  {
    slug: "recetario-medico-impreso-vs-digital",
    title: "Recetario médico impreso vs digital: ¿cuál conviene para tu consultorio?",
    metaTitle: "Recetario médico impreso vs digital: cuál te conviene",
    description:
      "Recetario médico impreso vs receta digital en México: ventajas, límites, qué dicen la NOM-004 y la NOM-024, y cuándo conviene usar ambos en tu consultorio.",
    category: "Guías",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "Cada vez hay más consultorios usando algún sistema de receta electrónica, pero el recetario impreso sigue siendo parte del día a día de la mayoría de los médicos en México. Antes de decidir si vale la pena seguir imprimiendo o migrar por completo a digital, conviene ver qué resuelve cada opción y dónde falla. Aquí comparamos las dos, revisamos lo que dicen las normas oficiales del expediente clínico y te explicamos cómo combinarlas sin complicarte.",
    sections: [
      {
        heading: "¿Qué resuelve cada opción, la receta impresa o la digital?",
        body: [
          "La receta digital se reenvía por correo o WhatsApp, queda respaldada y es fácil de buscar en el historial. La impresa no depende de internet, batería ni sistema: el paciente sale de la consulta con el papel en la mano. Cada una resuelve un problema distinto, por eso comparar solo por modernidad no ayuda.",
          "La receta digital (desde una app, un sistema del consultorio o una plataforma de expediente electrónico) tiene ventajas claras para el seguimiento: se puede reenviar al paciente, queda respaldada automáticamente y es más fácil de buscar en un historial. El recetario impreso, en cambio, no depende de que haya internet, batería o que el sistema esté funcionando en ese momento.",
          "Para muchos pacientes, sobre todo de mayor edad o que van a llevar la receta directo a una farmacia física, el papel impreso sigue siendo lo que esperan recibir al final de la consulta.",
        ],
        table: {
          headers: ["Aspecto", "Recetario impreso", "Receta digital"],
          rows: [
            ["Internet, batería o sistema", "No depende de ninguno", "Los necesita para generarse y enviarse"],
            ["Cómo la recibe el paciente", "Papel en la mano al salir de la consulta", "Archivo por correo o WhatsApp"],
            ["Respaldo e historial", "Se archiva aparte si quieres conservar copia", "Queda respaldada y se busca en el sistema"],
            ["Curva de aprendizaje", "Ninguna: se llena a mano", "Hay que aprender la plataforma"],
            ["Imagen del consultorio", "Membrete propio preimpreso", "Depende de lo que permita tu sistema"],
          ],
        },
      },
      {
        heading: "¿Qué dicen las normas oficiales sobre el papel y lo digital?",
        body: [
          "La NOM-004-SSA3-2012 permite usar medios electrónicos de forma opcional y acepta firma autógrafa, electrónica o digital en las notas del expediente. La NOM-024-SSA3-2012 aplica a los establecimientos que adoptan sistemas de registro electrónico y pide que los registros sean inalterables. Son normas del expediente clínico, no una guía de formato de receta.",
          "En la NOM-004, el uso de medios electrónicos, magnéticos u ópticos es \"optativo\", y las firmas electrónica y digital se sujetan a las disposiciones jurídicas aplicables. La misma norma pide que las notas sean legibles, sin abreviaturas, enmendaduras ni tachaduras: un punto a favor de tener tus datos fijos preimpresos en lugar de escribirlos a mano cada vez.",
          "La NOM-024 define la firma electrónica avanzada como la que produce los mismos efectos jurídicos que la firma autógrafa, y pide que los sistemas permitan al profesional de la salud usarla. Lo que tu consultorio debe cumplir en concreto depende de tu institución, tu colegio y tu estado, así que confírmalo con ellos antes de cambiar tu forma de recetar.",
        ],
      },
      {
        heading: "¿Cuándo conviene seguir imprimiendo tu recetario?",
        body: [
          "Conviene seguir imprimiendo si no quieres depender de un sistema, si tus pacientes llevan la receta directo a una farmacia física o si necesitas un respaldo para cuando falle la señal. El papel es la opción con menos fricción: no hay plataforma que aprender ni pasos extra para el paciente.",
          "Si tu consultorio no tiene (o no quiere depender de) un sistema digital instalado, el recetario impreso sigue siendo la opción más simple: no hay que aprender una plataforma nueva, no hay riesgo de que un corte de internet detenga la consulta, y el paciente se va con algo físico.",
          "También es común usarlo como respaldo aunque tu consultorio ya tenga un sistema digital: para el día que el sistema falla, no hay señal, o simplemente prefieres no depender de una pantalla frente al paciente.",
          "Y hay un beneficio práctico: con el membrete preimpreso, tu nombre, tu cédula profesional y los datos del consultorio salen siempre completos y legibles, y a mano solo escribes lo que cambia con cada paciente.",
        ],
      },
      {
        heading: "¿Cuándo conviene pasar a receta digital?",
        body: [
          "Conviene digital cuando necesitas historial consultable, reenviar indicaciones al paciente por correo o WhatsApp, o coordinar a varios médicos en un mismo sistema. Es la mejor opción para seguimiento y expediente. Aun así, requiere internet, energía y que el sistema cumpla lo que pida tu institución.",
          "Antes de migrar, vale la pena hacerte cuatro preguntas: ¿mis pacientes pueden recibir y mostrar la receta en su teléfono?, ¿qué hago si el sistema o el internet fallan en plena consulta?, ¿la farmacia a la que van mis pacientes acepta el formato digital?, ¿mi institución o colegio pide algo específico?",
          "Si alguna respuesta te genera dudas, no tienes que decidir de golpe: puedes empezar a usar el sistema digital para el expediente y seguir entregando la receta impresa mientras te acostumbras.",
        ],
      },
      {
        heading: "¿Tiene que ser todo digital o todo impreso?",
        body: [
          "No. Muchos consultorios usan digital para el expediente y el seguimiento, e impreso para lo que el paciente se lleva el mismo día. Un recetario con tu membrete, tu cédula y los datos del consultorio no compite con tu sistema: lo complementa y te cubre cuando falla.",
          "La mayoría de los consultorios que vemos en Guadalajara y el resto de México no eligen uno solo: usan digital para el expediente y el seguimiento, e impreso para la receta que sale de la consulta. Si quieres ver qué datos conviene preimprimir, revisa la guía de formato de receta médica; si dudas entre pedir el membrete ya hecho o que lo diseñemos contigo, compara las opciones con y sin diseño.",
        ],
      },
      {
        heading: "¿Cuánto cuesta y cómo se pide un recetario impreso en Yume?",
        body: [
          `El recetario de 100 hojas, Media Carta (14 × 21.5 cm) en papel Bond 90 gr blanco, cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo. Cotizas, mandas tus datos, apruebas una prueba digital del membrete y hasta entonces pasa a producción.`,
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en una sucursal Casa Blanca de Guadalajara toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio a cualquier parte de México ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
          "El proceso es el mismo si el recetario es tu única opción o un respaldo de tu sistema digital, y no se imprime nada hasta que apruebas el membrete.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetarios-medicos-personalizados-guadalajara", "recetario-medico-con-diseno-vs-sin-diseno", "datos-obligatorios-receta-medica-mexico", "yume-vs-imprentas-recetarios-medicos"],
    faq: [
      {
        q: "¿La receta digital sustituye por completo al recetario impreso?",
        a: "No necesariamente. La NOM-004-SSA3-2012 establece que el uso de medios electrónicos en el expediente es optativo. Lo que debes cumplir depende de tu institución, tu colegio y tu estado, por eso conviene confirmarlo con ellos.",
      },
      {
        q: "¿Una firma electrónica tiene el mismo valor que la firma a mano?",
        a: "La NOM-024-SSA3-2012 define la firma electrónica avanzada como la que produce los mismos efectos jurídicos que la firma autógrafa. La NOM-004 indica que las firmas electrónica y digital se sujetan a las disposiciones jurídicas aplicables.",
      },
      {
        q: "¿Qué datos lleva el membrete de un recetario?",
        a: "Normalmente tu nombre completo, especialidad, cédula profesional (y de especialidad si aplica), dirección, teléfono y, si quieres, horario de consulta. Son los datos fijos que se preimprimen.",
      },
      {
        q: "¿Cuánto cuesta el recetario médico impreso?",
        a: `El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
      },
      {
        q: "¿Qué tamaño y papel tiene el recetario?",
        a: "Media Carta (14 × 21.5 cm), en papel Bond 90 gr blanco, con 100 hojas por recetario.",
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Cuánto cuesta el envío?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN a cualquier parte de México, o $${CASABLANCA_PRICE} MXN si recoges en una sucursal Casa Blanca de la zona metropolitana de Guadalajara. Las dos opciones son gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe el diseño?",
        a: "No. Todo pedido pasa primero por una prueba digital y no se manda a producción hasta que la apruebas.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si tu consultorio necesita factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Del expediente clínico, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
      {
        label: "NOM-024-SSA3-2012, Sistemas de información de registro electrónico para la salud, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5280847",
      },
    ],
  },
  {
    slug: "tatuajes-temporales-personalizados-para-eventos",
    title: "Tatuajes temporales personalizados para eventos y bodas",
    metaTitle: "Tatuajes temporales personalizados para eventos",
    description:
      "Tatuajes temporales personalizados para eventos: bodas, XV años, posadas y activaciones. Qué necesitamos para cotizar y cómo es la prueba digital.",
    category: "Guías",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-28",
    intro:
      "Un tatuaje temporal con tu logo o con un diseño hecho para la ocasión deja huella en un evento, y literalmente. Los tatuajes temporales personalizados para eventos funcionan igual para una boda, unos XV años o una activación de marca. Aquí te explicamos para qué eventos sirven, cómo diseñarlos, qué necesitamos para cotizar y cómo planear el pedido con tiempo.",
    sections: [
      {
        heading: "¿Cómo pedir tatuajes temporales personalizados para eventos?",
        body: [
          "Los tatuajes temporales personalizados para eventos se piden por WhatsApp, porque no tienen precio fijo publicado: se cotizan con tu diseño, tamaño y cantidad. Te enviamos una prueba digital antes de producir, normalmente en 24 horas, con hasta 2 rondas de ajustes, y no imprimimos nada sin tu aprobación.",
          "Producimos en Guadalajara y enviamos a todo México, así que puedes pedir sin importar en qué estado sea tu evento. No emitimos factura (CFDI); si tu empresa la necesita, avísanos al cotizar.",
          "Para empezar, escríbenos por WhatsApp con la fecha del evento, la cantidad aproximada y tu logo o una referencia del diseño. Con eso te cotizamos y te explicamos los siguientes pasos.",
        ],
      },
      {
        heading: "Para qué eventos sirven los tatuajes temporales",
        body: [
          "Los tatuajes temporales personalizados sirven para bodas y XV años, activaciones de marca, eventos de empresa y eventos deportivos o escolares. La persona se los lleva puestos y los muestra durante toda la celebración, así que funcionan como un detalle que se mueve por todo el salón y se convierte en recuerdo.",
          "Los vemos más seguido en tres contextos. El primero son las activaciones de marca: ferias, lanzamientos, stands en eventos y regalos promocionales. El segundo son las bodas y los XV años, con las iniciales, la fecha o un ícono relacionado con el festejo. El tercero son los eventos deportivos o escolares, con el logo del equipo o de la institución.",
          "A diferencia de una etiqueta, un tatuaje temporal se lo lleva la persona puesto. Funciona como una pieza que la gente usa y muestra durante el resto del evento, no como algo que termina guardado en una bolsa. También sirve para un lanzamiento, un aniversario o un evento con clientes, donde quieres que cada asistente lleve tu marca de una forma ligera y distinta a un folleto.",
        ],
      },
      {
        heading: "Ideas de diseño para bodas, XV años y eventos de empresa",
        body: [
          "Un buen diseño de tatuaje temporal es simple y se lee a primera vista: iniciales, una fecha, un ícono del festejo o tu logo. Entre menos detalle tenga, mejor se entiende en un tamaño pequeño sobre la piel, y más fácil es que combine con la decoración del evento.",
          "Para una boda, lo más práctico es usar las iniciales de la pareja y la fecha, o un ícono sencillo que represente su historia. Si tienes la invitación o la paleta de la decoración, mándanos una foto y adaptamos el diseño para que se vea como parte del mismo evento.",
          "Para XV años o un cumpleaños, funciona el nombre de la festejada o del festejado con un detalle de la temática. Para una empresa, lo más fácil es tu logo limpio, sin textos largos, porque se lee mejor en tamaño chico.",
          "Si ya estás armando la mesa de dulces o los souvenirs, piensa el tatuaje como parte del conjunto: el mismo diseño puede acompañar a los dulceros personalizados y a los stickers de vinil. Así todo el evento se ve planeado.",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar tus tatuajes temporales",
        body: [
          "Para cotizar necesitamos tres datos: tu logo o diseño, el tamaño aproximado que buscas y la cantidad para tu evento. Si el diseño lleva texto, como un nombre, una fecha o una frase, avísanos para confirmar que se vea legible en el tamaño final antes de producir.",
          "Lo ideal es un archivo de tu logo con buena resolución. Si no lo tienes, mándanos lo que tengas y te decimos si se puede usar. Con el tamaño aproximado sabemos cuánto detalle cabe, y con la cantidad podemos cotizar bien.",
          "Una regla práctica para la cantidad: piensa en uno por invitado o asistente y suma unos cuantos de más, por si llega alguien de último momento. Si es la primera vez que pides, escríbenos y te ayudamos a calcularla.",
          "Antes de producir te mandamos una prueba digital del diseño para que la apruebes. Así confirmas cómo se va a ver antes de que se imprima la cantidad completa. Si quieres ver trabajos reales, en la galería hay fotos de tatuajes temporales que hemos producido.",
        ],
      },
      {
        heading: "Por qué personalizarlos en vez de comprar genéricos",
        body: [
          "Un tatuaje temporal genérico, como una carita o una estrella de catálogo, se ve igual en cualquier fiesta y no dice nada de tu evento. Uno personalizado lleva tu logo, tus colores o el nombre del festejo, y quien lo usa queda asociado con tu evento durante el resto del día.",
          "Producimos en Guadalajara y enviamos a cualquier parte de México, así que puedes cotizar tatuajes temporales personalizados sin importar en qué estado sea tu evento.",
          "Además, un diseño propio te permite cuidar el resultado completo: que los colores combinen con tu decoración, que el nombre esté bien escrito y que el logo se vea como debe. Con uno genérico no controlas nada de eso. Si tienes un evento en puerta, escríbenos directo por WhatsApp con los detalles.",
        ],
      },
      {
        heading: "Cómo planear tu pedido con tiempo",
        body: [
          "Lo mejor es escribirnos en cuanto tengas la fecha del evento, aunque el diseño aún no esté definido. Con la fecha, la cantidad aproximada y una referencia de tu logo o tu invitación podemos cotizar, mandarte la prueba digital y confirmar si los tiempos de producción y envío alcanzan.",
          "Si eres wedding planner o event planner, el proceso es el mismo: un pedido por evento, con el diseño de cada cliente y trato directo por WhatsApp. Mándanos la referencia del evento y te cotizamos.",
          "Si es para tu empresa o para una celebración familiar, comparte la fecha, la ciudad de entrega y cuántas personas esperas. Cuanto antes nos escribas, más margen hay para ajustar el diseño y aprobar la prueba sin prisas.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["tatuajes-temporales-para-boda-eventos-y-fiestas", "cuanto-duran-los-tatuajes-temporales-y-como-quitarlos", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Cuánto cuestan los tatuajes temporales personalizados?",
        a: "No tienen precio fijo publicado. Se cotizan por WhatsApp según tu diseño, el tamaño y la cantidad que necesitas para tu evento.",
      },
      {
        q: "¿Mandan una prueba antes de producir?",
        a: "Sí. Te enviamos una prueba digital, normalmente en 24 horas y con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Qué necesito para cotizar?",
        a: "Tu logo o diseño (de preferencia en un archivo con buena resolución), el tamaño aproximado y la cantidad. Si el diseño lleva texto, dínoslo para confirmar que se vea legible.",
      },
      {
        q: "¿Producen en Guadalajara y envían a todo México?",
        a: "Sí. Producimos en Guadalajara y enviamos a todo México.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Si tu empresa la necesita, avísanos al cotizar.",
      },
      {
        q: "¿Sirven para bodas y XV años?",
        a: "Sí. Se pueden hacer con las iniciales, la fecha o un ícono relacionado con el festejo, y también con tu logo en eventos de empresa, deportivos o escolares.",
      },
      {
        q: "¿Puedo ver ejemplos reales?",
        a: "Sí. En la galería del sitio hay fotos de tatuajes temporales que hemos producido.",
      },
    ],
    serviceLink: { href: "/productos/tatuajes-temporales-personalizados", label: "Ver tatuajes temporales personalizados" },
    quoteMessage: "Hola, me interesa cotizar tatuajes temporales personalizados.",
  },
  {
    slug: "como-pedir-invitaciones-personalizadas-para-eventos",
    title: "Cómo pedir invitaciones personalizadas para eventos",
    metaTitle: "Invitaciones personalizadas para eventos en México",
    description:
      "Qué datos preparar para cotizar invitaciones personalizadas de boda, XV años o evento, cómo funciona la prueba digital y envíos a todo México desde Guadalajara.",
    category: "Guías",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "Ya sea una boda, unos XV años, un baby shower o un evento corporativo, la invitación suele ser lo primero que tus invitados ven del evento: vale la pena que se vea a la altura de lo que estás organizando. La invitación es solo una pieza dentro de la papelería para eventos (junto con menús, tarjetas de mesa o agradecimientos), y así funciona el proceso para pedir invitaciones personalizadas en México desde Yume.",
    sections: [
      {
        heading: "Qué información necesitamos para cotizar",
        body: [
          "Para cotizar tus invitaciones necesitamos cinco datos: el tipo de evento y la fecha, la cantidad de invitaciones, el texto completo (nombres, lugar, horario e indicaciones), una referencia de estilo si la tienes y el formato: impresa, digital o ambas. Con eso armamos la cotización por WhatsApp, aunque todavía no tengas todo definido.",
          "La referencia de estilo puede ser una foto, una paleta de colores, la decoración del salón o una invitación que te gustó. No necesitas llegar con el diseño resuelto: justo para eso sirve la propuesta que te enviamos como prueba digital.",
          "Si ya tienes otras piezas del evento, por ejemplo el menú o los detalles de mesa, cuéntanoslo desde el inicio. Así la invitación se diseña pensando en el conjunto y no como una pieza aislada.",
        ],
      },
      {
        heading: "Cómo calcular cuántas invitaciones pedir",
        body: [
          "Cuenta una invitación por hogar o por pareja, no por persona, salvo que quieras una por invitado con su nombre. Suma unas cuantas de reserva para invitados de último momento y para ti y tu familia. Dinos la cifra aproximada y ajustamos la cotización cuando confirmes tu lista.",
          "Si tu lista todavía cambia, empieza con el número que estimas y avísanos cuando se confirme. Es mejor cotizar con una cifra aproximada que esperar semanas a tener la lista final.",
          "Para invitaciones digitales la cantidad pesa menos, porque el mismo archivo se comparte con todos tus invitados. En ese caso lo importante es cuidar que el texto y el diseño queden bien en la pantalla de un celular.",
        ],
      },
      {
        heading: "Cómo redactar el texto de tu invitación",
        body: [
          "Incluye quién invita, qué se celebra, fecha, hora de inicio, lugar con dirección completa y la forma de confirmar asistencia. Si hay código de vestimenta o una indicación especial, añádela en una línea corta. Revisa nombres y números dos veces: un dato equivocado se repite en cada pieza.",
          "Escribe los nombres como quieres que aparezcan, con apellidos, títulos o apodos si es el caso. Para eventos corporativos, confirma la razón social o el nombre comercial tal como lo usa la empresa.",
          "Si no sabes cómo redactar el mensaje, mándanos lo que tengas, aunque sea una idea general, y te ayudamos a ordenarlo en la propuesta. Mientras más claro sea el texto, menos ajustes hacen falta después.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "Con tus datos armamos una propuesta de diseño y te la enviamos como prueba digital. Puedes pedir ajustes antes de aprobarla, y solo cuando apruebas el diseño final pasa a producción. Corregir un color o un texto en esta etapa es mucho más fácil que después de imprimir.",
          "Una vez que apruebas, se manda a producción si pediste invitaciones impresas, o te entregamos el archivo final listo para enviar si son digitales o ambas. Nada se imprime sin tu visto bueno.",
        ],
      },
      {
        heading: "Impresa, digital o ambas",
        body: [
          "Puedes pedir invitación impresa, digital para compartir por WhatsApp, o ambas. El proceso de diseño es el mismo y solo cambia el formato final. Por ejemplo, puedes imprimir para tus invitados más cercanos y enviar la versión digital al resto. Dinos qué prefieres y lo cotizamos así.",
          "La impresa es un detalle que tus invitados pueden conservar. La digital se comparte al instante y es útil cuando la lista crece o cambia cerca de la fecha del evento.",
        ],
      },
      {
        heading: "Que la invitación combine con el resto de tu papelería",
        body: [
          "La invitación funciona mejor cuando comparte línea de diseño con el resto de los detalles. En Yume también cotizamos menús de boda, stickers para bodas y eventos, dulceros y tatuajes temporales, y se pueden coordinar bajo el mismo estilo para que el evento se vea planeado de principio a fin.",
          "Si todavía estás decidiendo qué pedir, en las guías relacionadas al final de esta página encuentras cada pieza explicada: el menú de boda personalizado, los stickers para bodas, eventos y fiestas, y los dulceros para eventos sociales.",
        ],
      },
      {
        heading: "Si eres planner: invitaciones para tus clientes",
        body: [
          "Si organizas eventos para otras personas, puedes trabajar con nosotros evento por evento: cada cliente recibe su propia propuesta con prueba digital, y tú la revisas y apruebas con ellos. La atención es directa por WhatsApp, así que dudas y ajustes se resuelven sin intermediarios.",
          "Para cotizar, manda los mismos datos que para cualquier evento: fecha, cantidad, texto, estilo y formato. Si tu cliente ya tiene paleta o referencias de decoración, compártelas desde el primer mensaje para que la propuesta salga alineada.",
        ],
      },
      {
        heading: "Invitaciones para boda en Guadalajara, envíos a todo México",
        body: [
          "Producimos en Guadalajara y enviamos a todo México, así que puedes pedir invitaciones para una boda en Jalisco o en cualquier otro estado con el mismo proceso de diseño y aprobación de principio a fin. Estar en Guadalajara no es requisito para cotizar con nosotros.",
          "Si tu boda es en Guadalajara o la zona metropolitana, el proceso es el mismo, con la ventaja de un tiempo de entrega un poco más corto por cercanía. Para cualquier otra ciudad, el envío se coordina al cotizar.",
        ],
      },
      {
        heading: "Qué revisar antes de aprobar la prueba digital",
        body: [
          "Los errores más frecuentes son fechas u horarios equivocados, nombres mal escritos y direcciones incompletas. Antes de aprobar, pide a otra persona que lea la prueba completa y confirma cada dato contra tu fuente: el salón, tu lista de invitados o la información de la empresa.",
          "Revisa también cómo se ve el diseño: que el texto se lea con facilidad, que los colores se parezcan a los que tienes en mente y que no falte ninguna indicación importante. Cuando todo esté bien, nos das tu visto bueno y pasamos a producción.",
        ],
      },
      {
        heading: "Cuándo empezar a cotizar",
        body: [
          "Conviene cotizar con tiempo de anticipación al evento: así hay margen para ajustar el diseño sin apurar la producción ni el envío. Si tu evento ya tiene fecha, puedes escribirnos desde ahora aunque todavía no tengas todos los detalles definidos.",
          "Cuéntanos el tipo de evento, la fecha aproximada y la cantidad que estimas necesitar, y armamos la cotización desde ahí. Los tiempos de producción y entrega se confirman al cotizar, según tu pedido.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué datos necesito para cotizar invitaciones personalizadas?",
        a: "El tipo de evento y la fecha, la cantidad de invitaciones, el texto completo (nombres, lugar, horario e indicaciones), una referencia de estilo si la tienes y si las quieres impresas, digitales o ambas.",
      },
      {
        q: "¿Puedo ver la invitación antes de que se imprima?",
        a: "Sí. Te enviamos una propuesta como prueba digital y puedes pedir ajustes antes de aprobarla. Solo cuando apruebas el diseño final se manda a producción.",
      },
      {
        q: "¿Puedo pedir invitaciones solo digitales?",
        a: "Sí. Puedes pedirlas impresas, digitales para compartir por WhatsApp, o ambas. El proceso de diseño es el mismo y solo cambia el formato final.",
      },
      {
        q: "¿Envían invitaciones fuera de Guadalajara?",
        a: "Sí. Producimos en Guadalajara y enviamos a cualquier estado de México, con el mismo proceso de diseño y aprobación sin importar dónde sea tu evento.",
      },
      {
        q: "¿Cuánto cuestan las invitaciones personalizadas?",
        a: "Se cotizan por WhatsApp según la cantidad y el formato. Escríbenos con el tipo de evento, la fecha y el número aproximado de invitaciones y te preparamos la cotización.",
      },
      {
        q: "¿Puedo combinar la invitación con otras piezas del evento?",
        a: "Sí. Si también pides menús de boda, stickers, dulceros o tatuajes temporales, se pueden coordinar bajo la misma línea de diseño para que todo se vea como un solo conjunto.",
      },
      {
        q: "¿Trabajan con wedding planners y organizadoras de eventos?",
        a: "Sí. Puedes cotizar evento por evento: cada cliente recibe su propia propuesta con prueba digital, y la atención es directa por WhatsApp.",
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["menu-de-boda-personalizado", "stickers-para-bodas-eventos-y-fiestas", "dulceros-para-eventos-sociales-boda-xv-baby-shower", "tatuajes-temporales-para-boda-eventos-y-fiestas", "papeleria-personalizada-vs-plantillas-genericas", "como-pedir-papeleria-personalizada-en-linea"],
    quoteMessage: "Hola, me interesa cotizar invitaciones personalizadas para un evento.",
  },
  {
    slug: "stickers-personalizados-para-mascotas",
    title: "Stickers personalizados para mascotas: el sticker de tu perro o gato",
    metaTitle: "Stickers personalizados para mascotas",
    description:
      "Cómo pedir un sticker troquelado con la foto de tu perro o gato: qué imagen enviar, cómo se ve el resultado final y cuánto cuesta en Yume.",
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Una de las peticiones que más vemos en Stickers de Vinil Personalizados no es un logo ni un personaje de caricatura: es la foto de una mascota. Convertir a tu perro o gato en un sticker troquelado con su silueta es de los pedidos más comunes y más sencillos de cotizar. Esta guía te explica qué foto enviar, cómo se ve el resultado, cuánto cuesta, cuánto tarda y qué ideas funcionan para regalar o vender stickers de mascotas.",
    sections: [
      {
        heading: "Qué foto enviar",
        body: [
          "Envía una foto donde la mascota se vea completa, con buena luz y sin que otra cosa le tape el cuerpo. No necesitas una foto profesional: un celular basta. Entre mejor definido el contorno contra el fondo, más limpio sale el corte troquelado alrededor de la silueta.",
          "Si tienes varias fotos de la misma mascota, mándanoslas todas al cotizar: a veces una funciona mejor que otra para el recorte, y así elegimos juntos la mejor antes de armar la prueba digital.",
          "Algunos consejos prácticos: toma la foto a la altura de la mascota y no desde arriba, para que se vea la cara y el cuerpo sin deformarse; evita contraluz fuerte, que oscurece el pelo y borra detalles; y si el pelo es del mismo color que el fondo, busca una pared o piso que contraste. Un perro negro sobre un sillón negro es difícil de recortar bien.",
          "Si la mascota no se queda quieta, haz varias fotos seguidas y escoge la mejor. También sirve una foto donde esté sentada o acostada, porque la silueta es más compacta y el sticker queda más fácil de pegar y de despegar.",
        ],
      },
      {
        heading: "Cómo se ve el resultado",
        body: [
          "El sticker se corta a la forma exacta de la silueta de tu mascota, o de la foto completa si prefieres conservar un fondo o marco. No es un cuadrado ni un círculo genérico: por eso hablamos de vinil troquelado. Antes de imprimir recibes una prueba digital para confirmar corte y colores.",
          "Puedes ver ejemplos reales de mascotas ya convertidas en sticker en nuestra galería. La prueba funciona igual que con cualquier otro diseño que trabajamos: no se imprime hasta que la apruebas.",
          "Al pedir eliges el tipo de corte: troquelado o semitroquelado. Si dudas cuál te conviene para tu mascota, lee nuestra comparación de troquelado vs. semitroquelado.",
          "También eliges el acabado: mate, brillante u holográfico. Para una foto con mucho detalle de pelo, el mate y el brillante son las opciones más directas; el holográfico tiene un costo extra por pieza, que ves al elegirlo en la página del producto.",
        ],
      },
      {
        heading: "Cantidad y precio",
        body: [
          `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Los stickers de vinil se venden por cantidad de piezas, no por planilla, con un mínimo de compra de 40 piezas. Pasando las 100, cada pieza extra va a precio mayoreo (10% menos que el precio base).`,
          `Como referencia: 150 piezas quedan en $${priceOf("stickers-vinil-impermeable", 150)} y 200 en $${priceOf("stickers-vinil-impermeable", 200)}. Pide la cantidad exacta que necesitas: la eliges o la escribes al hacer tu pedido.`,
          "Es el mismo vinil premium resistente al agua, al sol y a rayones que usamos para cualquier otro diseño personalizado, así que aguanta bien en botellas de agua, laptops o donde quieras pegarlo.",
        ],
        table: {
          headers: ["Piezas", "Precio"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cuánto tarda y cómo se entrega",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, el pedido tarda ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en llegar a tu domicilio en cualquier parte de México, o ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles si lo recoges en una sucursal Casa Blanca de Guadalajara.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}. En compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Si es un regalo con fecha, cotiza con tiempo para tener margen de ajustar la prueba.`,
        ],
      },
      {
        heading: "Ideas para usar stickers de mascotas",
        body: [
          "Un sticker de mascota funciona como regalo, como recuerdo y como producto para vender. Lo más práctico es pensar en quién lo va a recibir y dónde lo va a pegar, porque de eso depende el tamaño y la cantidad que te conviene pedir.",
          "Para uso personal, pide pocas piezas con la foto de tu perro o gato y pégalas en tu botella, tu laptop o tu casco. Para regalo, una mascota recortada es un detalle fácil de personalizar para cumpleaños o para quien acaba de adoptar. Si tu mascota ya falleció, un sticker con su silueta es una forma sencilla de conservar su imagen.",
          "Para negocios del ramo, como estéticas caninas, veterinarias, guarderías o tiendas de mascotas, puedes usar la foto de las mascotas de tus clientes (con su permiso) o tu propia mascota como imagen de marca.",
          "Si organizas un evento, como una boda donde la mascota es parte de la familia, también puedes incluir un sticker con su silueta entre los detalles del evento.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo pedir un sticker con la foto de mi perro o gato?",
        a: "Sí. Los stickers de vinil se hacen con tu diseño, personaje o foto, y se cortan a la forma de la silueta de tu mascota. Antes de imprimir recibes una prueba digital para confirmar el corte y los colores.",
      },
      {
        q: "¿Qué tipo de foto funciona mejor?",
        a: "Una donde la mascota se vea completa, con buena luz y con el contorno bien definido contra el fondo. No necesitas una foto profesional. Si tienes varias, mándalas todas al cotizar y elegimos juntos la mejor.",
      },
      {
        q: "¿Cuánto cuestan los stickers de mi mascota?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo: 150 piezas cuestan $${priceOf("stickers-vinil-impermeable", 150)} y 200 piezas $${priceOf("stickers-vinil-impermeable", 200)}. El mínimo de compra es de 40 piezas.`,
      },
      {
        q: "¿Los stickers resisten el agua y el sol?",
        a: "Sí. Se imprimen en vinil premium resistente al agua, al sol y a rayones, según la ficha del producto.",
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "troquelado-vs-semitroquelado-stickers", "stickers-para-bodas-eventos-y-fiestas", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
  },
  {
    slug: "recetario-medico-con-diseno-vs-sin-diseno",
    title: "Recetario médico con diseño vs. sin diseño: ¿cuál te conviene?",
    metaTitle: "Diseño de recetario médico: con o sin diseño",
    description: `Recetario médico con diseño o sin diseño: qué incluye cada opción, cuánto cuesta ($${recetarioPrice("sin-diseno")} sin diseño, $${recetarioPrice("con-diseno")} con diseño) y cuándo conviene cada una.`,
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Al cotizar el recetario médico personalizado en Yume vas a ver dos opciones con precio distinto: \"sin diseño\" y \"con diseño\". No es solo una diferencia de precio: es una diferencia real en el trabajo que hacemos por ti. Aquí te explicamos qué incluye cada una, qué necesitas tener listo, cómo es el proceso y cuánto tarda, para que elijas la que te conviene sin dar vueltas.",
    sections: [
      {
        heading: "Qué incluye cada opción",
        body: [
          `"Sin diseño" ($${recetarioPrice("sin-diseno")}) es para cuando ya tienes el membrete armado (un archivo editable con tu logo, tus datos y el layout que quieres) y solo necesitas que lo imprimamos en las 100 hojas Media Carta con papel Bond 90 gr.`,
          `"Con diseño" ($${recetarioPrice("con-diseno")}) incluye que diseñemos el membrete contigo desde cero: nos das tus datos (nombre, cédula profesional, especialidad, dirección del consultorio) y armamos una propuesta visual, que ajustamos contigo hasta que quede como quieres, antes de imprimir.`,
          `La diferencia de precio entre una y otra es de $${recetarioPrice("con-diseno") - recetarioPrice("sin-diseno")}: es lo que cuesta que alguien arme y afine el diseño de tu membrete en lugar de que tú lo traigas resuelto.`,
        ],
        table: {
          headers: ["", "Sin diseño", "Con diseño"],
          rows: [
            ["Precio", `$${recetarioPrice("sin-diseno")}`, `$${recetarioPrice("con-diseno")}`],
            ["Hojas por recetario", "100", "100"],
            ["Tamaño y papel", "Media Carta (14 × 21.5 cm), Bond 90 gr", "Media Carta (14 × 21.5 cm), Bond 90 gr"],
            ["Membrete", "Tú lo envías en formato editable", "Lo diseñamos contigo desde cero"],
            ["Prueba digital antes de imprimir", "Sí", "Sí"],
          ],
        },
      },
      {
        heading: "Cuándo conviene cada una",
        body: [
          "Elige \"sin diseño\" si ya tienes tu membrete en un archivo editable y solo necesitas imprimirlo; elige \"con diseño\" si es tu primer recetario personalizado, si el que tenías se ve anticuado o si no tienes el archivo a la mano. La decisión depende de qué tan resuelto esté tu membrete hoy, no del tamaño de tu consultorio.",
          "Si ya trabajaste tu membrete con un diseñador o lo tienes de una imprenta anterior en formato editable, \"sin diseño\" es la opción más rápida y económica: nosotros solo producimos lo que ya tienes resuelto.",
          "Si es tu primer recetario personalizado, si el que tenías se ve anticuado, o simplemente no tienes el archivo editable a la mano, \"con diseño\" te ahorra tener que resolver esa parte por tu cuenta o contratar a alguien más antes de poder imprimir.",
          "Un caso intermedio: tienes tu logo pero no el membrete completo armado. Ahí también conviene \"con diseño\", porque el trabajo está en acomodar tu logo y tus datos en la hoja, no solo en imprimirlos.",
        ],
      },
      {
        heading: "Qué necesitas tener listo para empezar",
        body: [
          "Para \"sin diseño\" necesitas tu membrete en un archivo editable; para \"con diseño\" solo necesitas tus datos profesionales y, si lo tienes, tu logo. En ambos casos conviene revisar tus datos antes de cotizar, porque son lo que va a quedar impreso en las 100 hojas.",
          "Los datos que normalmente van en el membrete son tu nombre completo, especialidad, número de cédula profesional (y cédula de especialidad si aplica), dirección del consultorio, teléfono y, si quieres, horario de consulta. Si tienes dudas sobre qué incluir, revisa nuestra guía sobre qué datos lleva una receta médica en México.",
          "Si trabajas en más de un consultorio, dilo desde la cotización: lo más limpio suele ser un membrete por ubicación. Cuéntanos cuántos necesitas por WhatsApp y lo cotizamos contigo.",
        ],
      },
      {
        heading: "El proceso es el mismo en ambos casos",
        body: [
          "Elijas la opción que elijas, el paso de aprobación es igual: antes de mandar a producción te enviamos una prueba digital del membrete final. Nada se imprime hasta que tú la apruebas, así confirmas que la cédula, el teléfono y el resto de tus datos estén correctos.",
          "Puedes cambiar de opción durante la cotización si al ver el proceso decides que prefieres que lo diseñemos nosotros: solo dínoslo por WhatsApp antes de aprobar la prueba digital.",
          "Revisa la prueba con calma y dato por dato: la cédula, el número telefónico y la dirección son los que más importa que salgan exactos, porque después de la aprobación se manda a producción.",
        ],
      },
      {
        heading: "Cuánto tarda y cuánto cuesta el envío",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, el recetario llega a tu domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles. Los plazos son iguales con o sin diseño.`,
          `El envío a cualquier parte de México cuesta $${NATIONAL_SHIPPING_PRICE}, y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. Todo el diseño se aprueba a distancia, así que el proceso es el mismo vivas en Guadalajara o en cualquier otra ciudad de México.`,
        ],
      },
      {
        heading: "Cómo decidir en un minuto",
        body: [
          "Hazte tres preguntas: ¿tengo mi membrete en un archivo que pueda editar?, ¿me gusta cómo se ve?, ¿tengo todos mis datos a la mano? Si respondes sí a las tres, \"sin diseño\" es suficiente. Si alguna respuesta es no, \"con diseño\" te resuelve ese pendiente dentro del mismo pedido.",
          "Y si ya tienes el recetario resuelto, el mismo membrete te sirve de base para otras piezas del consultorio, como tus tarjetas de presentación, sin empezar de cero cada vez.",
          "Si no estás seguro, escríbenos por WhatsApp con tu archivo o tu logo y te decimos cuál opción aplica a tu caso antes de que pagues.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el recetario médico con y sin diseño?",
        a: `El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} si ya tienes tu diseño y $${recetarioPrice("con-diseno")} si lo diseñamos contigo.`,
      },
      {
        q: "¿Qué tamaño y papel tiene el recetario?",
        a: "Es Media Carta (14 × 21.5 cm), de 100 hojas, en papel Bond 90 gr blanco. Es igual en las dos opciones.",
      },
      {
        q: "¿Qué formato de archivo necesito para la opción sin diseño?",
        a: "Un archivo editable de tu membrete, con tu logo, tus datos y el layout que quieres. Si no lo tienes, la opción con diseño lo resuelve.",
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe?",
        a: "No. Antes de producir te enviamos una prueba digital del membrete y nada se manda a producción hasta que la apruebas.",
      },
      {
        q: "¿Puedo cambiar de sin diseño a con diseño?",
        a: "Sí. Avísanos por WhatsApp durante la cotización, antes de aprobar la prueba digital.",
      },
      {
        q: "¿Cuánto tarda en llegar?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetarios-medicos-personalizados-guadalajara", "recetario-medico-impreso-vs-digital", "datos-obligatorios-receta-medica-mexico", "tarjetas-de-presentacion-consultorio", "yume-vs-imprentas-recetarios-medicos"],
  },
  {
    slug: "datos-obligatorios-receta-medica-mexico",
    title: "Formato de receta médica en México: qué debe llevar",
    metaTitle: "Formato de receta médica en México: qué debe llevar",
    description: "Qué datos lleva una receta médica en México: membrete, datos del paciente e indicaciones, qué dice la NOM-004-SSA3-2012 y qué conviene preimprimir.",
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Si estás por pedir tu primer recetario personalizado, es normal preguntarte qué datos debe llevar exactamente. Esta es información general basada en lo que se acostumbra en consultorios de México y en la norma oficial NOM-004-SSA3-2012 del expediente clínico (que enlistamos al final): no sustituye lo que tu colegio de médicos, tu estado o la institución donde trabajas exija de forma específica, así que siempre vale la pena confirmarlo con ellos antes de mandar a imprimir. Aquí separamos lo que va fijo en el membrete de lo que escribes con cada paciente, qué pide la norma sobre lo que escribes y cómo revisar tu diseño antes de producir.",
    sections: [
      {
        heading: "Qué dice la NOM-004-SSA3-2012 sobre lo que escribes",
        body: [
          "La NOM-004-SSA3-2012 regula el expediente clínico, no la receta como formato aparte. Pide que las notas médicas lleven fecha, hora, nombre completo y firma de quien las elabora, que los medicamentos indiquen dosis, vía de administración y periodicidad, y que se escriban con letra legible, sin enmendaduras ni tachaduras.",
          "Esos puntos están en los apartados 5.10, 5.11 y 6.2.6 de la norma. El apartado 5.9 agrega que las notas llevan el nombre completo, la edad y el sexo del paciente. En las partes de la norma que revisamos no hay una sección dedicada a la receta, así que para el formato exacto confirma con tu colegio, tu estado o tu institución.",
        ],
      },
      {
        heading: "Datos de tu membrete",
        body: [
          "El membrete es la parte fija de la receta: tu nombre completo, especialidad, número de cédula profesional (y cédula de especialidad si aplica) y los datos de contacto del consultorio, como dirección, teléfono y, si quieres, horario de consulta. Son datos que no cambian de un paciente a otro.",
          "Estos son justo los datos que van preimpresos en el membrete cuando pides un recetario personalizado: así no tienes que escribirlos a mano en cada receta, solo lo que cambia con cada paciente.",
          "Si trabajas en más de un consultorio, lo más limpio es un membrete por ubicación, cada uno con su dirección y teléfono, en lugar de juntar todo en un solo diseño.",
        ],
      },
      {
        heading: "Datos que se llenan por paciente",
        body: [
          "Con cada paciente se escribe su nombre completo, la fecha de la consulta, el medicamento con dosis y duración del tratamiento y tu firma. El diagnóstico, la edad o el peso dependen de tu forma de trabajar y de la dosis. Son los datos que cambian en cada receta, por eso no se preimprimen.",
          "Algunos consultorios agregan también la edad o el peso del paciente cuando es relevante para la dosis, sobre todo en consultorios pediátricos. Si quieres ahorrarte tiempo, puedes pedir que el diseño deje renglones o espacios marcados para esos datos.",
        ],
        table: {
          headers: ["Dato", "Va preimpreso en el membrete", "Lo escribes con cada paciente"],
          rows: [
            ["Nombre, especialidad y cédula", "Sí", "No"],
            ["Dirección, teléfono y horario del consultorio", "Sí", "No"],
            ["Nombre completo del paciente", "No", "Sí"],
            ["Fecha de la consulta", "No", "Sí"],
            ["Medicamento, dosis y duración", "No", "Sí"],
            ["Firma", "No", "Sí"],
          ],
        },
      },
      {
        heading: "Por qué conviene preimprimir lo fijo",
        body: [
          "Preimprimir el membrete evita errores y letra ilegible en los datos que se repiten en cada receta: tu cédula, tu especialidad y el teléfono del consultorio. Apruebas el diseño una sola vez y cada receta que llenas a mano ya sale con esos datos correctos y legibles.",
          "Cada vez que escribes a mano tu cédula profesional o el teléfono del consultorio hay una oportunidad de error o de que el dato salga ilegible: algo que puede causar problemas si el paciente lleva la receta a una farmacia que valida esos datos.",
          "Además, como la norma pide letra legible y sin tachaduras en las notas médicas, cada dato fijo que ya viene impreso es un dato menos que puede quedar con una enmienda.",
        ],
      },
      {
        heading: "Qué incluye el recetario de Yume y cuánto tarda",
        body: [
          `El Recetario Médico Personalizado trae 100 hojas tamaño Media Carta (14 × 21.5 cm) en papel Bond de 90 gr, color blanco, con tu membrete preimpreso. Cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo, y apruebas una prueba digital antes de imprimir.`,
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en una sucursal Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, en cualquier parte de México.`,
          "Si todavía no tienes logo o membrete, la opción con diseño sirve para armarlo desde cero con tus datos profesionales. Si ya lo tienes en formato editable, la opción sin diseño es suficiente.",
        ],
      },
      {
        heading: "Qué revisar antes de mandar a imprimir",
        body: [
          "Antes de aprobar revisa cuatro cosas: que tu nombre y tu cédula coincidan con tu documento, que el teléfono y la dirección estén vigentes, que tu colegio o institución no pida otro formato, y que todo se lea bien en la prueba digital. Un error preimpreso se repite en las 100 hojas.",
          "Si tus recetas necesitan folio o código de barras para algún trámite o institución, avísalo al cotizar: es información que hay que confirmar antes de imprimir, no algo que se pueda corregir después.",
          "Pídele a alguien más que lea la prueba digital contigo, sobre todo los números de cédula y de teléfono: es fácil no ver un dígito cambiado en tus propios datos.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetarios-medicos-personalizados-guadalajara", "recetario-medico-impreso-vs-digital", "recetario-medico-con-diseno-vs-sin-diseno", "tarjetas-de-presentacion-consultorio", "yume-vs-imprentas-recetarios-medicos"],
    faq: [
      {
        q: "¿La NOM-004-SSA3-2012 dice qué datos lleva una receta?",
        a: "La norma regula el expediente clínico, no la receta como formato aparte. Para las notas médicas pide fecha, hora, nombre completo y firma de quien las elabora, y que los medicamentos indiquen dosis, vía de administración y periodicidad.",
      },
      {
        q: "¿Debo escribir la receta con letra legible?",
        a: "Sí. El apartado 5.11 de la NOM-004-SSA3-2012 pide que las notas se escriban con letra legible, sin abreviaturas, sin enmendaduras ni tachaduras. Preimprimir los datos fijos te deja menos texto que escribir a mano.",
      },
      {
        q: "¿Qué datos van preimpresos y cuáles se escriben a mano?",
        a: "Preimpresos van los datos fijos del membrete: nombre, especialidad, cédula y datos del consultorio. A mano se escribe lo que cambia con cada paciente: su nombre, la fecha, el medicamento con dosis y duración, y tu firma.",
      },
      {
        q: "¿Qué tamaño y cuántas hojas tiene el recetario de Yume?",
        a: "100 hojas tamaño Media Carta (14 × 21.5 cm), en papel Bond de 90 gr, color blanco.",
      },
      {
        q: "¿Cuánto cuesta un recetario médico personalizado?",
        a: `El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
      },
      {
        q: "¿Cuánto tarda mi recetario?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe el diseño?",
        a: "No. Todo pedido pasa primero por una prueba digital y no se manda a producción hasta que la apruebas.",
      },
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
    ],
  },
  {
    slug: "yume-vs-imprentas-online-stickers",
    title: "Yume vs. imprentas online de stickers: qué comparar antes de pedir",
    metaTitle: "Yume vs. imprentas online de stickers",
    description: `Comparamos Yume con imprentas online de stickers en México. Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}, con prueba digital y envío a todo México.`,
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Antes de pedir stickers para tu boda, tu evento o tu negocio vale la pena comparar bien. En septiembre de 2026 revisamos los precios públicos de varias imprentas mexicanas de stickers personalizados y los pusimos junto a los de Yume. Aquí están los números, qué más conviene revisar además del precio por pieza y cómo pedir sin comprar de más.",
    sections: [
      {
        heading: "¿En qué se diferencia Yume de otras imprentas online de stickers?",
        body: [
          "Yume vende por cantidad exacta de piezas, desde 40 en vinil y 50 en etiquetas con logo, con prueba digital antes de imprimir y envío a todo México. Su precio por pieza queda dentro del rango de las imprentas mexicanas que revisamos en septiembre de 2026, y su mínimo de compra es menor que el de todas ellas.",
          "La diferencia que más se nota al pedir es que no tienes que comprar planillas completas: eliges cuántas piezas necesitas, ya sea para los invitados de una boda, las mesas de una fiesta o el empaque de tu marca.",
        ],
      },
      {
        heading: "Cómo comparamos",
        body: [
          "Convertimos el precio público de cada imprenta a precio por pieza y anotamos su mínimo de compra en pesos. Así se pueden comparar negocios que venden por planilla, por rollo o por cantidad de piezas. Todos los precios son los publicados en el sitio de cada competidor en septiembre de 2026, no estimaciones.",
          "Dejamos fuera cualquier dato que no estuviera publicado a la vista. Como los precios cambian, antes de decidir conviene volver a revisar el sitio de cada imprenta: lo que ves aquí es una foto de esa fecha, no una garantía de precios actuales de otros negocios.",
        ],
      },
      {
        heading: "Los números",
        body: [
          `Primeras 100 piezas en Yume: $${priceOf("stickers-vinil-impermeable", 100)} en vinil y $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con logo, con mínimo de compra de $${priceOf("stickers-vinil-impermeable", 40)} MXN en vinil. Las imprentas mexicanas que revisamos cobran de $1.83 a $11.00 MXN por pieza y piden mínimos de $319 a $550 MXN.`,
          "En algunas imprentas el mínimo real solo se alcanza comprando varias planillas completas de una vez, por eso conviene mirar el mínimo en pesos y no solo el precio por pieza.",
        ],
        table: {
          headers: ["", "Precio por pieza", "Mínimo de compra"],
          rows: [
            ["Imprentas mexicanas revisadas (precios públicos, septiembre 2026)", "$1.83 a $11.00 MXN", "$319 a $550 MXN"],
            ["Yume: Stickers y Etiquetas con tu Logo (primeras 100 piezas)", `$${perPiece("stickers-logo-personalizado", 100)} MXN`, `$${priceOf("stickers-logo-personalizado", 50)} MXN (50 piezas)`],
            ["Yume: Stickers de Vinil Personalizados (primeras 100 piezas)", `$${perPiece("stickers-vinil-impermeable", 100)} MXN`, `$${priceOf("stickers-vinil-impermeable", 40)} MXN (40 piezas)`],
          ],
        },
      },
      {
        heading: "Cuánto cuesta pedir más de 100 piezas en Yume",
        body: [
          "Primeras 100 piezas: precio normal por pieza. Pasando las 100, cada pieza extra va a precio mayoreo, 10% menos. Por eso el precio por pieza baja un poco cuando pides más. La tabla muestra el total y el precio por pieza en cantidades comunes para un evento o un negocio.",
          `Como ejemplo, 200 piezas de vinil cuestan $${priceOf("stickers-vinil-impermeable", 200)} ($${perPiece("stickers-vinil-impermeable", 200)} c/u). Pide la cantidad que necesitas: la eliges o la escribes al hacer tu pedido.`,
        ],
        table: {
          headers: ["Piezas", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Qué significa esto para ti",
        body: [
          "Si pides detalles para un evento, el mínimo bajo importa más que el precio por pieza: puedes pedir cerca del número real de invitados o mesas, sin comprar planillas completas. Con Yume pides la cantidad exacta y apruebas una prueba digital antes de que se imprima nada.",
          `Con Yume puedes entrar desde $${priceOf("stickers-vinil-impermeable", 40)} MXN, mientras que las imprentas revisadas piden entre $319 y $550 de mínimo. Si solo quieres probar con poca cantidad, o necesitas pocas piezas para una celebración, puedes hacerlo sin comprometerte a un pedido grande.`,
        ],
      },
      {
        heading: "Qué más comparar además del precio",
        body: [
          "Compara cuatro cosas: si venden por pieza o por planilla, si te muestran una prueba digital antes de imprimir, cuánto tarda el pedido y cuánto cuesta el envío. En Yume, la prueba llega normalmente en máximo 24 horas tras el pago e incluye hasta 2 rondas de ajustes.",
          `Desde que apruebas la prueba, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles. El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
          "Si tu evento tiene fecha fija, pide con margen para poder ajustar la prueba antes de producir. En la guía de cuánto tarda un pedido de stickers personalizados explicamos cada etapa.",
        ],
      },
      {
        heading: "Cómo comparar dos cotizaciones sin equivocarte",
        body: [
          "Pide a cada imprenta el mismo pedido: mismo número de piezas, mismo tamaño, mismo material y mismo acabado. Luego suma envío y revisa si la prueba digital y los ajustes están incluidos. Dos precios por pieza solo se pueden comparar si el pedido es idéntico.",
          "Revisa también el material. Los stickers de Yume son de vinil premium, resistente al agua, al sol y a rayones según la ficha del producto, y puedes elegir corte troquelado o semitroquelado. Si otra imprenta te cotiza papel, no estás comparando lo mismo: te explicamos la diferencia en la guía de stickers de vinil vs. papel.",
          "Por último, confirma cómo se cuenta la cantidad. Algunas imprentas venden por planilla y otras por pieza; en Yume siempre es por pieza, así que 100 stickers son 100 stickers, no el número de hojas.",
        ],
      },
      {
        heading: "Para qué tipo de pedido conviene Yume",
        body: [
          "Yume es buena opción cuando quieres un detalle con nombre, fecha o tema: stickers para sellar bolsitas de regalo, cerrar sobres de invitación, decorar botellas del brindis o acompañar recuerdos de bodas, XV años, baby showers y bautizos. También se usan para el logo o el empaque de un negocio.",
          "Si organizas bodas o eventos de otras personas, puedes pedir por evento la cantidad exacta, mostrar la prueba digital a tu cliente antes de aprobar y coordinar todo por WhatsApp. En la guía de stickers para bodas, eventos y fiestas hay ideas de uso y tamaños.",
          "Si ya tienes invitaciones o un menú de boda personalizado, usar el mismo diseño en los stickers hace que el evento se vea como una sola pieza. También puedes revisar los dulceros personalizados y los tatuajes temporales para fiestas.",
        ],
      },
      {
        heading: "Cómo pedir los tuyos",
        body: [
          "Mándanos tu logo, nombres, fecha, foto o el diseño que tengas, aunque no esté terminado, por WhatsApp o desde la tienda en línea. Armamos una prueba digital y no producimos nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "El proceso es a distancia: cotizas, apruebas el diseño y recibes tu pedido en casa, sin importar en qué ciudad estés. Para ver más opciones de dónde pedir, revisa la guía de dónde imprimir stickers personalizados en México.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Yume es una imprenta online?",
        a: "Puedes pedir en línea o por WhatsApp, apruebas una prueba digital y recibes el pedido en casa. Producimos en Guadalajara y enviamos a todo México.",
      },
      {
        q: "¿Cuál es el mínimo de compra en Yume?",
        a: `40 piezas en Stickers de Vinil Personalizados ($${priceOf("stickers-vinil-impermeable", 40)} MXN) y 50 piezas en Stickers y Etiquetas con tu Logo ($${priceOf("stickers-logo-personalizado", 50)} MXN).`,
      },
      {
        q: "¿Cuánto cuestan los stickers en Yume?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} en vinil y $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con logo. Pasando las 100, cada pieza extra va a precio mayoreo: 200 piezas de vinil cuestan $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "¿Se venden por planilla o por pieza?",
        a: "Por cantidad de piezas, no por planilla. Pides el número exacto que necesitas.",
      },
      {
        q: "¿De dónde salen los precios de las otras imprentas?",
        a: "Son los precios públicos que cada imprenta mexicana mostraba en su sitio en septiembre de 2026. Pueden haber cambiado, así que conviene revisar el sitio de cada una antes de decidir.",
      },
      {
        q: "¿Puedo ver cómo quedará antes de imprimir?",
        a: "Sí. Te enviamos una prueba digital, normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Cuánto tarda el pedido y cuánto cuesta el envío?",
        a: `Desde que apruebas la prueba, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. El envío cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
      {
        q: "¿Puedo pedir pocas piezas para una boda o fiesta?",
        a: "Sí. Desde 40 piezas en vinil y 50 en etiquetas con logo, así que puedes pedir cerca del número de invitados o mesas de tu evento.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "donde-imprimir-stickers-personalizados-mexico", "stickers-para-bodas-eventos-y-fiestas", "cuanto-tarda-un-pedido-de-stickers-personalizados", "troquelado-vs-semitroquelado-stickers", "menu-de-boda-personalizado", "como-pedir-invitaciones-personalizadas-para-eventos"],
  },
  {
    slug: "stickers-vinil-vs-papel-diferencias",
    title: "Stickers de vinil vs papel: cuál elegir para tu evento",
    metaTitle: "Stickers de vinil vs papel: ¿cuál te conviene?",
    description: `Stickers de vinil vs papel para bodas, fiestas y regalos: qué cambia con agua y sol. Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}, con prueba digital.`,
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-29",
    intro:
      "Si vas a regalar o a preparar un detalle para una boda, unos XV años, un bautizo o un baby shower, elegir entre stickers de vinil y de papel cambia cómo aguanta la pieza en la mesa, en la copa o en la bolsita. Aquí te explicamos la diferencia, qué pasa con el agua y el hielo, cuándo conviene cada material, cuánto cuesta y por qué en Yume trabajamos solo vinil.",
    sections: [
      {
        heading: "Stickers de vinil vs papel: la diferencia que importa",
        body: [
          "La diferencia principal entre stickers de vinil y de papel es el material. El vinil es un plástico flexible y, según la ficha de nuestros stickers, resiste el agua, el sol y los rayones. Por eso lo usamos en piezas que se manipulan, se mojan o se exponen a la luz, como botellas y laptops.",
          "Del papel no te damos cifras de duración: Yume no lo produce y no tenemos pruebas propias. Cuando compares cotizaciones, pregunta siempre el material exacto y el acabado, porque ahí está la diferencia real de lo que vas a recibir.",
        ],
      },
      {
        heading: "¿Qué pasa con una copa, un vaso o un frasco con hielo?",
        body: [
          "Los stickers de vinil de Yume son resistentes al agua, según la ficha del producto, así que una copa, un vaso o un frasco con hielo es un uso razonable como detalle de mesa. No los prometemos para remojo prolongado ni lavado intenso. Si tienes un caso especial, escríbenos por WhatsApp y lo revisamos antes de producir.",
          "Para bodas, XV años, bautizos o baby showers, estos stickers suelen ir en copas, vasos, bolsitas o frascos de recuerdo. Cuéntanos dónde va a ir el tuyo, por ejemplo una copa con bebida fría o un frasco con hielo, y te decimos con honestidad qué esperar antes de producir.",
        ],
      },
      {
        heading: "Cuándo conviene vinil y cuándo otro material",
        body: [
          "Conviene vinil cuando el sticker se moja, le da la luz o lo toca mucha gente, como en copas, botellas, laptops o empaques. Si es una invitación interior de un solo uso, otro material puede alcanzar, pero en Yume solo hacemos vinil. Hazte tres preguntas: ¿se moja, le da el sol, lo toca mucha gente?",
          "Si contestas que sí a cualquiera de las tres, pide vinil. Si las tres son no y la pieza es de un solo uso, la decisión es tuya, y te contamos con claridad que nosotros no producimos otro material.",
        ],
        table: {
          headers: ["Situación", "Qué conviene"],
          rows: [
            ["Copa, vaso o frasco de recuerdo", "Vinil, por el contacto con agua o hielo"],
            ["Botella de agua, termo o hielera", "Vinil, por el contacto con agua"],
            ["Laptop, maleta o patineta", "Vinil, por el roce y los rayones"],
            ["Carro o ventana", "Vinil, por la exposición al sol"],
            ["Empaque o bolsita de regalo", "Vinil, para que llegue y dure igual"],
            ["Invitación interior de un solo uso", "Otro material puede alcanzar; en Yume solo hacemos vinil"],
          ],
        },
      },
      {
        heading: "Por qué en Yume trabajamos solo vinil",
        body: [
          "En Yume trabajamos solo vinil porque preferimos ofrecer un material que sabemos que aguanta. Nuestros dos productos de sticker, Stickers de Vinil Personalizados y Stickers y Etiquetas con tu Logo, se hacen en vinil premium con corte troquelado o semitroquelado, y siempre recibes prueba digital antes de producir.",
          "Para un detalle de boda, de XV años o de baby shower, el producto es Stickers de Vinil Personalizados: cualquier diseño, personaje o foto. Si es el logo de tu negocio, es Stickers y Etiquetas con tu Logo. Ambos se venden por cantidad de piezas, no por planilla.",
        ],
      },
      {
        heading: "Corte y acabado: lo que sí puedes elegir",
        body: [
          "Con el vinil eliges dos cosas al pedir: el corte, que puede ser troquelado o semitroquelado, y el acabado, que puede ser mate, brillante u holográfico. El holográfico tiene un costo extra por pieza. El material no cambia: sigue siendo el mismo vinil premium, así que son decisiones de diseño.",
          "Si dudas cuál corte te conviene, lee nuestra comparación de troquelado vs. semitroquelado, donde explicamos cuándo conviene cada uno. Antes de imprimir recibes una prueba digital para confirmar cómo se ve el diseño.",
        ],
      },
      {
        heading: "Cuánto cuestan los stickers de vinil",
        body: [
          `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} en Stickers de Vinil Personalizados y $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo. Pasando las 100 piezas, cada pieza extra va a precio mayoreo, 10% menos. El mínimo es de 40 piezas en vinil y de 50 en etiquetas con logo, y pides la cantidad exacta que necesitas.`,
          `Como referencia, 150 piezas de vinil cuestan $${priceOf("stickers-vinil-impermeable", 150)} y 200 piezas cuestan $${priceOf("stickers-vinil-impermeable", 200)}. Para un evento, cuenta a tus invitados y suma unas cuantas piezas de repuesto.`,
        ],
        table: {
          headers: ["Piezas", "Precio"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 150, 200, 300], "es"),
        },
      },
      {
        heading: "Cómo pedirlos y cuándo llegan",
        body: [
          `Mándanos tu diseño por WhatsApp o desde la tienda y te enviamos una prueba digital, normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. Desde que la apruebas, llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
          `Si estás en Guadalajara, tu pedido puede estar listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles. Puedes enviarnos tu logo, personaje, foto o idea en el formato que tengas, aunque no sea el ideal. Producimos en Guadalajara y enviamos a todo México.`,
          "Si quieres comparar Yume con otras opciones, revisa nuestra comparación con imprentas online o la guía de dónde imprimir stickers en México.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Los stickers de vinil resisten el agua y el sol?",
        a: "Sí. Se imprimen en vinil premium resistente al agua, al sol y a rayones, según la ficha del producto. No los prometemos para remojo prolongado ni lavado intenso.",
      },
      {
        q: "¿Puedo poner un sticker en una copa, un vaso o un frasco con hielo?",
        a: "El vinil de Yume es resistente al agua, según la ficha del producto, así que es un uso razonable como detalle de mesa. Para remojo prolongado o lavado intenso no lo prometemos. Si tienes un caso especial, escríbenos por WhatsApp.",
      },
      {
        q: "¿Yume hace stickers de papel?",
        a: "No. Nuestros dos productos de sticker están hechos en vinil premium. Preferimos ofrecer un solo material que sabemos que aguanta.",
      },
      {
        q: "¿Qué tipos de corte y acabado puedo elegir?",
        a: "Puedes elegir corte troquelado o semitroquelado, y acabado mate, brillante u holográfico. El holográfico tiene un costo extra por pieza que ves al elegirlo en la página del producto.",
      },
      {
        q: "¿Cuánto cuestan los stickers de vinil?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo: 150 piezas cuestan $${priceOf("stickers-vinil-impermeable", 150)} y 200 piezas $${priceOf("stickers-vinil-impermeable", 200)}. El mínimo de compra es de 40 piezas.`,
      },
      {
        q: "¿Se venden por planilla o por pieza?",
        a: "Por cantidad de piezas, no por planilla. Pides la cantidad exacta que necesitas, desde 40 piezas en vinil y desde 50 en etiquetas con tu logo.",
      },
      {
        q: "¿Puedo ver cómo quedará antes de imprimir?",
        a: "Sí. Te enviamos una prueba digital, normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Puedo pedir stickers para una boda o una fiesta?",
        a: "Sí. Puedes pedir stickers de vinil con el diseño de tu evento. Mándanos tu idea por WhatsApp y te enviamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuánto tarda el pedido y cuánto cuesta el envío?",
        a: `Desde que apruebas la prueba, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. El envío cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["troquelado-vs-semitroquelado-stickers", "stickers-para-bodas-eventos-y-fiestas", "yume-vs-imprentas-online-stickers", "donde-imprimir-stickers-personalizados-mexico", "cuanto-tarda-un-pedido-de-stickers-personalizados", "stickers-personalizados-para-mascotas", "stickers-personalizados-para-negocios-guadalajara"],
  },
  {
    slug: "menu-de-boda-personalizado",
    title: "Menú de boda personalizado: cómo pedir el tuyo",
    metaTitle: "Menú de boda personalizado",
    description:
      "Menú de boda personalizado: qué datos tener listos, uno por invitado o por mesa, cómo revisar el texto y cómo funciona la prueba digital antes de imprimir.",
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "El menú es una de esas piezas de la boda que los invitados tienen en la mano toda la cena: vale la pena que combine con el resto de la papelería del evento, en vez de ser genérico. Esta guía te explica qué decidir antes de cotizar, qué texto poner, cómo revisarlo sin errores y cómo funciona el proceso para pedir el tuyo personalizado en Yume.",
    sections: [
      {
        heading: "Qué información necesitamos",
        body: [
          "Para cotizar un menú de boda necesitamos cuatro cosas: la cantidad de menús, el texto exacto de cada uno, la fecha del evento y una idea de estilo. Con eso preparamos la cotización y la propuesta de diseño. Si todavía no tienes todo definido, escríbenos igual y lo vamos completando contigo.",
          "La cantidad suele ser un menú por invitado o por mesa, según cómo lo quieras montar. El texto son los platillos, en el orden en que se sirven. Y la referencia visual importa sobre todo si quieres que combine con las invitaciones u otra papelería que ya estés pidiendo para el mismo evento.",
          "También ayuda saber si el menú va a ir solo (una tarjeta por lugar) o junto con otros elementos como el nombre del invitado o la mesa asignada. Esa decisión cambia el diseño desde el inicio, así que conviene tenerla clara antes de la prueba digital.",
        ],
      },
      {
        heading: "Un menú por invitado o uno por mesa",
        body: [
          "Un menú por invitado se coloca en cada lugar y cada persona lo tiene a la mano; uno por mesa se comparte entre quienes se sientan juntos. La diferencia principal es la cantidad que pides y cuánto texto cabe cómodo. Elige según el tamaño de tu banquete y el estilo de la boda.",
          "Por invitado se ve más personal y permite incluir el nombre de cada persona en el mismo diseño. Por mesa pides menos piezas y funciona bien si el menú es corto o si prefieres un solo elemento decorativo al centro. Si dudas, cuéntanos el número de invitados y de mesas y te orientamos.",
          "Piensa también en las restricciones de tus invitados. Si en el banquete habrá opciones vegetarianas, sin gluten o para niños, decide si van en el mismo menú o en una línea aparte, para que el diseño no se sature y cada invitado encuentre rápido lo suyo.",
        ],
      },
      {
        heading: "Qué texto poner y cómo revisarlo",
        body: [
          "El texto de un menú de boda lleva el título (por ejemplo los nombres de los novios o la fecha), los tiempos de la comida en orden y los platillos de cada uno. Antes de enviarlo, confirma cada nombre con tu banquetero: el texto que mandes es el que se imprime tal cual.",
          "Una estructura que funciona: entrada, sopa o crema, plato fuerte, postre y, si aplica, la bebida o el brindis. No hace falta describir cada ingrediente. Entre más corto y claro, más fácil de leer a media luz en la mesa y más espacio queda para que el diseño respire.",
          "Para revisar sin errores, pide a una segunda persona que lea el texto completo, sobre todo nombres propios, acentos y cantidades. Revisa también que el orden coincida con el que realmente se va a servir. En la prueba digital tienes oportunidad de pedir correcciones antes de que se imprima algo.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "El proceso tiene tres pasos: nos mandas tus datos, te enviamos una propuesta de diseño como prueba digital, y cuando la apruebas pasa a producción. Puedes pedir ajustes antes de aprobar. Este paso existe para que ninguna errata llegue a papel.",
          "Es más fácil corregir el orden de los platillos o un color en esta etapa que después de que los menús ya están impresos.",
          "Una vez que apruebas el diseño final, se manda a producción. Si además estás pidiendo invitaciones u otra papelería para la misma boda, se puede coordinar todo bajo la misma línea de diseño para que se vea como un solo set, no piezas sueltas.",
        ],
      },
      {
        heading: "Cómo combinarlo con el resto de tu papelería",
        body: [
          "Para que el menú se vea como parte del mismo evento, usa la misma línea de diseño que tus invitaciones: mismos colores, misma tipografía y mismos detalles. Así la mesa, el sobre y la bolsita de regalo se leen como un solo conjunto y no como piezas compradas por separado.",
          "Si ya estás pidiendo invitaciones, mira la guía para cotizarlas en el post de invitaciones personalizadas para eventos. Para sellar bolsitas o cerrar sobres con el mismo diseño, revisa los stickers para bodas, y para el detalle que se lleva cada invitado, los dulceros para bodas. Abajo, en Sigue leyendo, tienes los enlaces.",
          "También puedes alinear los detalles del evento con tatuajes temporales para la pista de baile. Cuando tengas el diseño del menú, pídenos que lo adaptemos al resto de piezas: reutilizar la misma línea evita rehacer decisiones de estilo desde cero.",
        ],
      },
      {
        heading: "Cuándo empezar a cotizar",
        body: [
          "Conviene cotizar el menú en cuanto tengas el banquete cerrado, aunque falten ajustes menores. Así hay margen para revisar la prueba digital, corregir el texto y recibir el pedido sin prisas antes de la boda. Cotizar con tiempo es lo que más reduce el estrés.",
          "Como el menú normalmente se confirma cuando ya tienes el banquete cerrado, suele cotizarse un poco después que las invitaciones: pero igual conviene hacerlo con tiempo, para que haya margen de ajustar el diseño sin apurar la producción ni el envío.",
          "Escríbenos con el tipo de evento, la fecha aproximada y la cantidad que estimas necesitar, y armamos la cotización desde ahí. Producimos en Guadalajara y enviamos a cualquier parte de México, así que el proceso es el mismo sin importar dónde sea tu boda.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué datos necesito para cotizar un menú de boda?",
        a: "La cantidad de menús, el texto exacto (los platillos en el orden en que se sirven), la fecha de la boda y, si la tienes, una referencia de estilo. Si ya pides invitaciones u otra papelería, avísanos para alinear el diseño.",
      },
      {
        q: "¿Puedo ver el diseño antes de que se imprima?",
        a: "Sí. Te enviamos una propuesta como prueba digital y puedes pedir ajustes antes de aprobarla. Solo cuando apruebas el diseño final se manda a producción.",
      },
      {
        q: "¿Hago un menú por invitado o por mesa?",
        a: "Las dos opciones son comunes. Por invitado queda en cada lugar y permite incluir el nombre de cada persona; por mesa pides menos piezas. Dinos cuántos invitados y mesas tienes y te orientamos.",
      },
      {
        q: "¿Puedo combinar el menú con mis invitaciones?",
        a: "Sí. Si pides invitaciones u otra papelería para la misma boda, se puede coordinar todo bajo la misma línea de diseño para que se vea como un solo set.",
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: "Sí. Producimos en Guadalajara y enviamos a cualquier parte de México. El proceso de diseño y aprobación es el mismo sin importar dónde sea tu boda.",
      },
      {
        q: "¿Cuánto cuesta el menú de boda personalizado?",
        a: "Se cotiza caso por caso según la cantidad y el diseño. Escríbenos por WhatsApp con tu fecha y número de menús y te preparamos la cotización.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "dulceros-personalizados"],
    relatedBlogSlugs: ["como-pedir-invitaciones-personalizadas-para-eventos", "stickers-para-bodas-eventos-y-fiestas", "papeleria-personalizada-vs-plantillas-genericas", "dulceros-para-eventos-sociales-boda-xv-baby-shower", "tatuajes-temporales-para-boda-eventos-y-fiestas"],
    quoteMessage: "Hola, me interesa cotizar menús de boda personalizados.",
  },
  {
    slug: "tarjetas-de-presentacion-consultorio",
    title: "Tarjetas de presentación para tu consultorio: cómo pedirlas junto con tu recetario",
    metaTitle: "Tarjetas de presentación para tu consultorio",
    description:
      "Qué datos necesitas para cotizar tarjetas de presentación de consultorio, cómo se aprueba la prueba digital y por qué conviene pedirlas con tu recetario.",
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Si ya pediste tu recetario médico personalizado, es común querer una tarjeta de presentación con el mismo diseño: es lo primero que el paciente se lleva de la consulta, junto con la receta. Esta guía te explica qué datos preparar, cómo verificar tu cédula, qué conviene poner en la tarjeta y cómo es el proceso para cotizar la tuya en Yume.",
    sections: [
      {
        heading: "Qué información necesitamos",
        body: [
          "Para cotizar tu tarjeta necesitamos tu nombre completo, especialidad, número de cédula profesional (y de especialidad, si aplica), los datos de contacto del consultorio y la cantidad de tarjetas. Son los mismos datos que lleva tu recetario, así que si ya lo pediste, casi todo está listo.",
          "Los datos de contacto son la dirección del consultorio, el teléfono y, si quieres, redes sociales, correo o sitio web. Si trabajas en más de un consultorio, dinos cuál debe aparecer en la tarjeta o si prefieres una tarjeta distinta por cada lugar.",
          "Si ya tienes tu membrete o logo de una pieza anterior (como el recetario), dínoslo al cotizar: podemos usar el mismo diseño en la tarjeta para que ambas piezas se vean consistentes, en vez de armar algo nuevo desde cero.",
        ],
      },
      {
        heading: "Cómo verificar tu cédula profesional antes de imprimir",
        body: [
          "Antes de mandar a imprimir, copia el número de cédula tal como aparece en tu cédula oficial, sin reescribirlo de memoria. La cédula la tramita la Dirección General de Profesiones de la SEP, y el número exacto es el que debe ir impreso.",
          "Si tramitaste tu cédula en línea, la SEP la entrega en formato digital por correo electrónico. Según el boletín de la SEP, las cédulas físicas mantienen su vigencia, así que cualquiera de las dos sirve para tomar el número exacto. Si tienes cédula de especialidad, es un número distinto y conviene confirmarlo por separado.",
          "Un solo dígito equivocado obliga a reimprimir todo el tiraje. Por eso, cuando te enviemos la prueba digital, revisa el número de cédula contra tu documento antes de aprobar.",
        ],
      },
      {
        heading: "Qué poner en la tarjeta (y qué dejar fuera)",
        body: [
          "Una tarjeta de consultorio funciona mejor con pocos datos y legibles: tu nombre, especialidad, número de cédula, teléfono, dirección y un medio de contacto digital. Es una recomendación de diseño, no una regla: tu colegio, institución o estado pueden pedir otros datos, así que confírmalo con ellos si trabajas bajo alguna.",
          "Deja fuera lo que cambia seguido. Si tu horario, tu teléfono o tus tarifas se actualizan cada pocos meses, no los imprimas en toda una tanda de tarjetas: prefiere un dato estable, como tu correo o un código QR a tu página o tu agenda en línea.",
          "Si usas un QR, pruébalo con tu celular en la prueba digital antes de aprobar. Cuida también que el texto sea de un tamaño cómodo de leer: el paciente suele revisar la tarjeta días después, en casa, no en el consultorio.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "El proceso es: nos mandas tus datos, armamos una propuesta, te enviamos una prueba digital y solo mandamos a producción cuando la apruebas. Puedes pedir ajustes en la prueba, que es el momento más barato para corregir un error.",
          "Con tus datos armamos una propuesta de diseño y te mandamos una prueba digital antes de imprimir. Es más fácil corregir la cédula profesional o el teléfono en esta etapa que después de tener las tarjetas impresas.",
          "Una vez que apruebas el diseño final, se manda a producción. El proceso es el mismo si pides la tarjeta sola o junto con tu recetario en la misma cotización. Producimos en Guadalajara y enviamos a cualquier parte de México; los tiempos y el costo de tu pedido te los confirmamos al cotizar.",
        ],
      },
      {
        heading: "Por qué pedirlas junto con tu recetario",
        body: [
          "Pedirlas juntas te da un solo membrete para las dos piezas: misma tipografía, mismos colores y mismos datos. Tu consultorio se ve más consistente y no pagas ni coordinas dos diseños distintos. Es la misma lógica de imagen profesional que aplica al resto de tu papelería.",
          `Si ya tienes el membrete listo, el recetario de 100 hojas Media Carta cuesta $${recetarioPrice("sin-diseno")}. Si quieres que lo diseñemos contigo, cuesta $${recetarioPrice("con-diseno")}. Ese mismo diseño es la base para tu tarjeta, así no empiezas de cero con cada pieza.`,
          "Si todavía no tienes tu recetario personalizado, puedes cotizar ambos juntos desde cero y armamos un solo diseño de membrete que funcione para las dos piezas. Si quieres entender qué cambia entre las dos opciones de recetario, lee la guía de recetario con diseño vs. sin diseño.",
        ],
      },
      {
        heading: "Cómo cotizar tu tarjeta de presentación",
        body: [
          "Cotizar es sencillo: escríbenos por WhatsApp con tus datos, la cantidad de tarjetas y, si lo tienes, tu logo o membrete. Las tarjetas de presentación se cotizan caso por caso, así que te respondemos con el precio de tu pedido en particular, no con una tarifa genérica.",
          "Para que la cotización salga rápida, ten a la mano: nombre y especialidad como quieres que aparezcan, número(s) de cédula, teléfono, dirección, correo o redes, cantidad y si quieres el mismo diseño de tu recetario. Si aún no hay recetario, dinos y cotizamos ambas piezas juntas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué datos necesito para cotizar mis tarjetas de presentación?",
        a: "Tu nombre completo, especialidad, número de cédula profesional (y de especialidad, si aplica), los datos de contacto del consultorio y la cantidad de tarjetas. Si ya tienes membrete o logo, mándalo para reutilizar el diseño.",
      },
      {
        q: "¿Puedo usar el mismo diseño de mi recetario?",
        a: "Sí. Si ya tienes tu membrete o logo de otra pieza, como el recetario, podemos usar el mismo diseño en la tarjeta para que ambas piezas se vean consistentes.",
      },
      {
        q: "¿Veo la tarjeta antes de que se imprima?",
        a: "Sí. Te mandamos una prueba digital y solo producimos cuando la apruebas. Revisa ahí tu número de cédula y tu teléfono, porque es más fácil corregirlos antes de imprimir.",
      },
      {
        q: "¿Cuánto cuestan las tarjetas de presentación?",
        a: "Se cotizan caso por caso según el diseño y la cantidad. Escríbenos por WhatsApp con tus datos y te preparamos la cotización de tu pedido.",
      },
      {
        q: "¿Cuánto cuesta el recetario que puedo pedir junto con la tarjeta?",
        a: `El recetario de 100 hojas Media Carta cuesta $${recetarioPrice("sin-diseno")} si ya tienes tu diseño y $${recetarioPrice("con-diseno")} si lo diseñamos contigo.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: "Sí. Producimos en Guadalajara y enviamos a cualquier parte de México.",
      },
      {
        q: "¿Sirve mi cédula física o necesito la digital?",
        a: "Según la SEP, las cédulas físicas mantienen su vigencia, y quien prefiere la digital la puede solicitar en línea. Para la tarjeta solo necesitas copiar el número exacto de tu cédula.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetarios-medicos-personalizados-guadalajara", "recetario-medico-impreso-vs-digital", "recetario-medico-con-diseno-vs-sin-diseno", "datos-obligatorios-receta-medica-mexico", "yume-vs-imprentas-recetarios-medicos"],
    sources: [
      {
        label: "SEP: Simplifica SEP el trámite de cédulas profesionales; cédulas físicas mantienen su vigencia (Boletín 142)",
        url: "https://www.gob.mx/sep/prensa/boletin-142-simplifica-sep-el-tramite-de-cedulas-profesionales-cedulas-fisicas-mantienen-su-vigencia-sep",
      },
    ],
    quoteMessage: "Hola, me interesa cotizar tarjetas de presentación para mi consultorio.",
  },
  {
    slug: "yume-vs-imprentas-recetarios-medicos",
    title: "Yume vs. otras imprentas de recetarios médicos: comparación real de precios",
    metaTitle: "Yume vs. otras imprentas de recetarios médicos",
    description: `Recetario médico personalizado de Yume vs. imprentas mexicanas: $${recetarioPrice("sin-diseno")} sin diseño, $${recetarioPrice("con-diseno")} con diseño, qué incluye y qué revisar al cotizar.`,
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Antes de cotizar tu recetario médico personalizado vale la pena saber qué incluye el precio que te dan, y no solo cuánto cuesta. En septiembre de 2026 revisamos los precios públicos de varias imprentas mexicanas de recetarios médicos y los comparamos contra los de Yume. Aquí encuentras los números, lo que incluye cada opción y una lista de qué revisar en cualquier cotización, para que elijas con calma y sin sorpresas.",
    sections: [
      {
        heading: "¿Cómo comparamos los recetarios de otras imprentas con el de Yume?",
        body: [
          "Comparamos lo mismo en todos los casos: el precio público de un recetario médico personalizado de 100 hojas Media Carta y si ese precio incluye el diseño del membrete. Así ves el costo del trabajo completo y no solo el de la impresión. Los datos vienen de los sitios de cada imprenta en septiembre de 2026.",
          "Todos los precios son los publicados directamente en el sitio de cada competidor a esa fecha; no son estimaciones. Pueden cambiar con el tiempo, así que antes de decidir confirma el precio vigente en el sitio de cada imprenta.",
          "Anotamos el diseño del membrete porque es la parte que más se pasa por alto. Un recetario con tu nombre, tu especialidad, tu cédula y la dirección de tu consultorio necesita un diseño antes de imprimirse, y alguien tiene que hacerlo: tú, un diseñador externo o la imprenta.",
        ],
      },
      {
        heading: "¿Cuánto cuestan los recetarios médicos en otras imprentas y en Yume?",
        body: [
          `Entre las imprentas mexicanas que revisamos, los precios públicos van de $300 a $900 MXN por partida, en papel Bond u Opalina. En Yume, el recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN con tu diseño listo o $${recetarioPrice("con-diseno")} MXN con el diseño del membrete incluido, en papel Bond 90 gr.`,
          "Las partidas que revisamos van de 100 hojas a un bloque completo, así que antes de comparar números conviene fijarse en cuántas hojas trae cada una. Ninguna de las opciones revisadas aclara o incluye el diseño del membrete como parte del precio; en algunos casos ni siquiera lo menciona.",
        ],
        table: {
          headers: ["Opción", "Precio", "Diseño del membrete"],
          rows: [
            ["Yume: sin diseño (100 hojas Media Carta)", `$${recetarioPrice("sin-diseno")} MXN`, "No incluido: llevas tu diseño listo"],
            ["Yume: con diseño (100 hojas Media Carta)", `$${recetarioPrice("con-diseno")} MXN`, "Incluido: lo armamos contigo"],
            ["Imprentas mexicanas revisadas (septiembre 2026)", "$300 a $900 MXN por partida", "No aclarado en el precio público"],
          ],
        },
      },
      {
        heading: "¿Qué incluye el recetario de Yume además del precio?",
        body: [
          "Incluye 100 hojas Media Carta (14 × 21.5 cm) en papel Bond 90 gr blanco, tu membrete con nombre, cédula, especialidad y dirección del consultorio, y una prueba digital que apruebas antes de producir. En la opción con diseño, armamos el membrete contigo desde cero.",
          "Producimos sobre pedido, así que tu recetario se hace con tus datos y no sale de un stock genérico. Puedes enviarnos tu diseño en formato editable o pedirnos que lo diseñemos contigo, y en ambos casos el paso de aprobación es el mismo.",
          "Si ya pediste o piensas pedir una tarjeta de presentación para tu consultorio, podemos usar el mismo membrete en las dos piezas. Lo explicamos en la guía de tarjetas de presentación para tu consultorio.",
        ],
      },
      {
        heading: "¿Cuándo conviene la opción sin diseño y cuándo la opción con diseño?",
        body: [
          "Elige sin diseño si ya tienes tu membrete en un archivo editable con logo, datos y distribución. Elige con diseño si es tu primer recetario personalizado, el que usas se ve anticuado o no tienes el archivo a la mano. Puedes cambiar de opción por WhatsApp antes de aprobar la prueba digital.",
          "Con diseño, nos das tus datos (nombre, cédula profesional, especialidad y dirección del consultorio), armamos una propuesta visual y la ajustamos contigo hasta que quede como quieres, antes de imprimir.",
          "Sin diseño es la ruta más directa cuando el trabajo de diseño ya está hecho, por ejemplo con un diseñador o con una imprenta anterior. Tienes el detalle completo de ambas opciones en la guía de recetario con diseño vs. sin diseño.",
        ],
      },
      {
        heading: "¿Qué debes revisar en cualquier cotización de recetarios médicos?",
        body: [
          "Revisa cinco cosas: cuántas hojas trae la partida, el tamaño, el papel, si el diseño del membrete va incluido y si recibes una prueba digital antes de imprimir. Con esos datos comparas cotizaciones equivalentes, aunque el precio final cambie de una imprenta a otra.",
          "Pide ver siempre una prueba antes de producir. Los errores más comunes están en la cédula profesional y en el teléfono, y descubrirlos con las 100 hojas ya impresas obliga a repetir el trabajo. En la prueba, compara cada dato contra tu cédula y tus datos reales.",
          "Sobre el contenido de la receta, la NOM-004-SSA3-2012 pide que las notas del expediente clínico lleven fecha, hora y nombre completo de quien las elabora, con letra legible, y no define un formato específico de receta. Es información general: tu colegio, tu estado o la institución donde trabajas pueden pedir algo más, así que confírmalo antes de imprimir.",
          "Para ver qué datos van preimpresos en el membrete y cuáles se llenan por paciente, lee la guía sobre el formato de receta médica en México.",
        ],
      },
      {
        heading: "¿Cuánto tarda y cuánto cuesta el envío de un recetario?",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. El envío a todo México cuesta $${NATIONAL_SHIPPING_PRICE} MXN.`,
          `Las compras de $${FREE_SHIPPING_THRESHOLD} MXN o más tienen envío y recolección gratis. Si prefieres recoger, tienes ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca en la zona metropolitana de Guadalajara. Esos plazos cuentan solo días hábiles.`,
          "Producimos en Guadalajara y enviamos a cualquier parte de México. Como la aprobación del diseño se hace a distancia, el proceso es el mismo si tu consultorio está en Zapopan, Monterrey o en cualquier otra ciudad.",
        ],
      },
      {
        heading: "¿Qué significa esta comparación para ti?",
        body: [
          "Lo que cambia entre cotizaciones no es solo el precio de impresión, sino quién resuelve el membrete. En las imprentas que revisamos, el diseño no aparece en el precio público; en Yume, la opción de $" + recetarioPrice("con-diseno") + " MXN lo incluye y se aprueba contigo antes de imprimir.",
          "No encontramos ninguna imprenta que anunciara \"diseñamos tu membrete contigo\" dentro del costo, que es justo lo que cubre la opción con diseño de Yume. Si ya tienes tu membrete resuelto, la opción sin diseño te lleva directo a producción.",
          "Si no lo tienes, la opción con diseño te ahorra resolverlo por tu cuenta o contratar a alguien más antes de poder imprimir. Escríbenos por WhatsApp con tus datos y te ayudamos a elegir la opción que te conviene.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el recetario médico personalizado de Yume?",
        a: `El recetario de 100 hojas Media Carta cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo.`,
      },
      {
        q: "¿Qué diferencia hay entre con diseño y sin diseño?",
        a: "Con diseño incluye que armemos tu membrete contigo desde cero. Sin diseño es para cuando ya tienes el membrete en un archivo editable y solo necesitas que lo imprimamos.",
      },
      {
        q: "¿Qué tamaño y qué papel tiene el recetario?",
        a: "Son 100 hojas tamaño Media Carta (14 × 21.5 cm), en papel Bond 90 gr blanco.",
      },
      {
        q: "¿Veo el diseño antes de que se imprima?",
        a: "Sí. Te enviamos una prueba digital y solo mandamos a producción cuando la apruebas. Revisa ahí tu cédula y tu teléfono.",
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, el envío a domicilio toma ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles y la recolección en Casa Blanca ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí. Producimos en Guadalajara y enviamos a todo México por $${NATIONAL_SHIPPING_PRICE} MXN, gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
      {
        q: "¿La NOM-004 define un formato de receta?",
        a: "No. La NOM-004-SSA3-2012 no establece un formato específico de receta. Pide que las notas del expediente clínico lleven fecha, hora y nombre completo de quien las elabora, con letra legible. Confirma con tu colegio o institución si te piden algo más.",
      },
      {
        q: "¿Los precios de las otras imprentas siguen vigentes?",
        a: "Son los precios públicos que revisamos en septiembre de 2026 y pueden cambiar. Confirma el precio actual en el sitio de cada imprenta antes de decidir.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: ["recetarios-medicos-personalizados-guadalajara", "recetario-medico-impreso-vs-digital", "recetario-medico-con-diseno-vs-sin-diseno", "datos-obligatorios-receta-medica-mexico", "tarjetas-de-presentacion-consultorio"],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
    ],
  },
  {
    slug: "como-conseguir-mas-resenas-de-google-nfc-qr",
    title: "Placa de reseñas de Google con NFC: qué es y cuánto cuesta",
    metaTitle: "Placa de reseñas de Google con NFC: qué es y cuánto cuesta",
    description:
      "Qué es una placa de reseñas de Google con NFC y QR, cómo funciona, cuánto cuesta y cómo usarla para pedir más reseñas sin romper las reglas de Google.",
    category: "Guías",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-11-02",
    intro:
      "Pedir una reseña de Google casi siempre es incómodo: le dictas a tu cliente el nombre del negocio, él lo busca, filtra entre varios resultados parecidos y a veces se rinde antes de encontrar el correcto. Una placa con NFC y código QR resuelve justo ese paso: lleva directo a la ficha correcta en dos segundos, sin que el cliente tenga que buscar nada. Aquí tienes qué es una placa de reseñas de Google, cómo funciona, dónde ver cuánto cuesta y el método completo: cuándo pedir la reseña, qué decir, dónde colocar la placa, qué reglas de Google debes respetar y cómo responder cuando lleguen las opiniones.",
    sections: [
      {
        heading: "Qué es una placa de reseñas de Google con NFC",
        body: [
          "Una placa de reseñas de Google es una pieza física que lleva un chip NFC y un código QR, los dos ligados al enlace de reseñas de tu negocio. El cliente toca o escanea con su teléfono y llega directo a la pantalla para escribir su opinión en tu ficha de Google, sin buscarte a mano.",
          "Según quién la venda, la encontrarás como placa NFC, tarjeta de reseñas o «google review stand» cuando va sobre una base. La idea es la misma: acortar el camino entre tu cliente y el formulario de reseña. En Yume tenemos dos formatos, la placa para pegar en un punto fijo y el stand para colocar de pie.",
          "Lo que no hace: no publica reseñas por sí sola ni garantiza una calificación. La reseña siempre la escribe tu cliente, con su cuenta de Google, y lo que diga depende de su experiencia contigo.",
        ],
      },
      {
        heading: "Cómo funciona una placa de reseñas, paso a paso",
        body: [
          "El cliente acerca su teléfono a la placa, o escanea el código QR con la cámara, y se abre la pantalla de reseña de tu ficha de Google. Ahí inicia sesión con su cuenta de Google, escribe su opinión y la publica. Tú no tienes que dictarle el nombre de tu negocio ni guiarlo por resultados.",
          "Visto desde tu lado son tres momentos. Primero, tú mencionas la reseña al terminar la atención. Segundo, el cliente toca o escanea la placa. Tercero, escribe lo que piensa y tú respondes cuando llegue.",
          "El chip NFC guarda el enlace a la pantalla de reseña y se lee al acercar el teléfono, sin abrir ninguna app, siempre que el teléfono tenga NFC y lo tenga activado. Si no, el código QR hace el mismo trabajo con la cámara.",
        ],
      },
      {
        heading: "Cómo conseguir más reseñas de Google: el método en tres pasos",
        body: [
          "Para conseguir más reseñas de Google, pídela al terminar la atención, cuando la experiencia sigue fresca, dale un acceso de un solo paso a tu ficha y responde cada reseña que llegue. Una placa con NFC y código QR resuelve el segundo punto: lleva al cliente directo a tu ficha, sin buscar.",
          "El primer paso es el momento: pide la reseña cuando la experiencia sigue fresca. El segundo es quitar fricción: que el cliente no tenga que escribir el nombre de tu negocio ni elegir entre resultados parecidos. El tercero es la constancia: responder lo que llega y volver a pedir con cada cliente nuevo. Ningún paso por sí solo hace el trabajo, pero juntos convierten una petición incómoda en un hábito sencillo de tu atención diaria.",
          "Una placa no garantiza una cantidad de reseñas ni una calificación determinada: solo facilita el camino. Que el cliente la deje, y qué escriba, depende de su experiencia contigo.",
        ],
      },
      {
        heading: "Por qué el momento importa más que el mensaje",
        body: [
          "El mejor momento para pedir una reseña es cuando el cliente acaba de recibir tu servicio: al pagar, al recoger su pedido o al salir del consultorio. Si en ese instante tiene que buscar tu negocio a mano, muchos lo dejan para después y ya no lo hacen.",
          "No es que no quieran dejarte una reseña: el proceso les toma más de lo que estaban dispuestos a invertir en ese momento. Una placa NFC/QR quita esa fricción: el cliente toca su teléfono o escanea el código y llega directo a la pantalla de «dejar una reseña» de tu ficha de Google, sin escribir nada ni elegir entre resultados parecidos.",
          "Un dato práctico: según la ayuda de Google Business Profile, los clientes deben iniciar sesión en una cuenta de Google para dejar una reseña. Si ves que alguien no puede entrar en ese momento, no insistas: invítalo a hacerlo después con calma, desde su casa.",
        ],
      },
      {
        heading: "NFC y QR juntos, no uno u otro",
        body: [
          "El NFC funciona al acercar el teléfono a la placa, sin abrir ninguna app, siempre que el teléfono tenga NFC y lo tenga activado. El código QR es el respaldo: sirve con la cámara cuando el NFC no está disponible. Tener los dos en una misma placa cubre a más clientes.",
          "El NFC es la misma tecnología de «toca para pagar» que ya usan las tarjetas bancarias, así que muchos clientes lo reconocen sin explicación. El QR cubre los demás casos: teléfonos con el NFC apagado, o personas que prefieren apuntar la cámara. Google mismo menciona el enlace y el código QR como formas de pedir reseñas.",
          "Si quieres ver la comparación a detalle, revisa la guía de placa NFC contra código QR impreso, donde explicamos qué aporta cada opción.",
        ],
      },
      {
        heading: "Dónde colocar la placa para que realmente se use",
        body: [
          "Colócala donde el cliente ya está frente a ti cuando decide si quedó satisfecho: junto a la caja, en el mostrador de recepción, en la mesa al llegar la cuenta o en el escritorio del consultorio. Debe quedar a la vista, a la altura de la mano y sin estorbar el pago.",
          "Piensa en el recorrido de tu cliente: ¿en qué punto ya recibió lo que vino a buscar y todavía no se ha ido? Ahí va la placa. Si la dejas en un rincón, o en un lugar que solo ve al salir con prisa, casi nadie la tocará.",
          "La versión sin base se pega directo en esos puntos (mostrador, caja, pared). La versión con stand se coloca de pie sobre un escritorio o mesa sin necesidad de pegarla, útil si cambias de lugar seguido o no quieres dejar adhesivo permanente.",
        ],
      },
      {
        heading: "Qué decir al pedir la reseña",
        body: [
          "Pide la reseña con una frase corta y en persona, al terminar la atención: «Si quieres contarnos cómo te fue, nos ayudas mucho con una reseña honesta; solo toca tu teléfono aquí». Pide una opinión honesta, sin sugerir calificación ni ofrecer algo a cambio.",
          "La placa no sustituye tu voz: la persona que ve el letrero sin que nadie se lo mencione puede pasar de largo. Una frase amable, dicha con naturalidad, es lo que convierte una placa en una invitación. No necesitas un guion largo ni insistir; basta con mencionarlo una vez y señalar dónde está la placa.",
          "Adapta el tono a tu negocio. En un consultorio puede sonar más sereno y en una cafetería más cercano, pero en ambos casos conviene que la petición sea breve, sincera y que el cliente sienta que puede decir que no sin presión.",
        ],
      },
      {
        heading: "Qué no hacer: las reglas de Google sobre pedir reseñas",
        body: [
          "No ofrezcas descuentos ni productos gratis a cambio de una reseña: según la ayuda de Google Business Profile, ofrecer algo así está estrictamente prohibido y cuenta como interacción falsa. Pide a todos tus clientes reales, no solo a quienes crees que estarán contentos, y acepta lo que escriban.",
          "Si alguien tuvo un mal momento, lo más sano es escuchar, responder con respeto y resolver el problema, no comprar su silencio.",
          "Una reseña honesta, aunque no sea perfecta, le da más confianza a quien te está conociendo que una lista de elogios idénticos. Pide con naturalidad y deja que cada cliente diga lo que piensa.",
        ],
      },
      {
        heading: "Cómo responder las reseñas que lleguen",
        body: [
          "Responde las reseñas que lleguen, las buenas y las malas. Google recomienda responderlas para mostrar que la opinión del cliente importa, con un tono amable y profesional y respuestas breves. Si la reseña es negativa, discúlpate cuando haga falta, responde pronto y no compartas datos privados de quien la escribió.",
          "Una respuesta corta y con nombre propio basta: agradece, menciona algo concreto de lo que el cliente contó y, si hubo un problema, di qué harás al respecto. Firmar con tu nombre o tus iniciales hace la respuesta más humana.",
          "Evita discutir o atacar a la persona: tu respuesta también la leerán otros clientes.",
        ],
      },
      {
        heading: "Placa o stand: cuál te conviene",
        body: [
          "Elige la placa si tienes un punto fijo donde pegarla, como el mostrador, la caja o una pared. Elige el stand si prefieres colocarla de pie sobre un escritorio o una mesa, sin adhesivo permanente, o si cambias de lugar con frecuencia.",
          "Piensa en tu espacio: un consultorio con escritorio y una recepción con mostrador piden cosas distintas. Si dudas, escríbenos por WhatsApp, cuéntanos cómo es tu local y te ayudamos a elegir. Para ver cómo se usa paso a paso, revisa la guía de cómo usar la placa de reseñas de Google.",
          "Si buscabas un «google review stand», es este formato: la misma idea de la placa, pero de pie sobre una base.",
        ],
      },
      {
        heading: "Cuánto cuesta una placa de reseñas de Google",
        body: [
          "Para ver cuánto cuesta una placa de reseñas de Google de Yume, abre la página de la placa o del stand: ahí aparece siempre el precio vigente. Los dos se eligen en blanco o negro y el precio es el mismo en ambos colores.",
          "Si comparas con otras opciones, no mires solo el precio. Revisa si lleva NFC y código QR, si el enlace se puede cambiar y si el soporte aguanta el lugar donde lo vas a poner. Y recuerda que ninguna placa garantiza reseñas: lo que cambia es qué tan fácil se lo pones a tu cliente.",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["placa-nfc-vs-codigo-qr-impreso-resenas", "como-usar-placa-resenas-google-yume"],
    faq: [
      {
        q: "¿Qué es una placa de reseñas de Google?",
        a: "Es una pieza física con un chip NFC y un código QR ligados al enlace de reseñas de tu negocio. El cliente toca o escanea con su teléfono y llega directo a la pantalla para dejar su reseña en tu ficha de Google.",
      },
      {
        q: "¿Cuánto cuesta una placa de reseñas de Google?",
        a: "El precio vigente de la placa y del stand de Yume aparece en la página de cada producto. Se eligen en blanco o negro, con el mismo precio en los dos colores.",
      },
      {
        q: "¿Qué es un google review stand?",
        a: "Es la versión de la placa que se coloca de pie sobre un escritorio o una mesa, sin adhesivo. En Yume es el stand de reseñas de Google con NFC y QR.",
      },
      {
        q: "¿En qué colores viene la placa?",
        a: "La placa y el stand se eligen en blanco o negro. El color no cambia el precio.",
      },
      {
        q: "¿Una placa NFC y QR garantiza más reseñas?",
        a: "No. La placa solo quita fricción: lleva al cliente directo a tu ficha. Que deje la reseña, y qué escriba, depende de su experiencia contigo y de que se lo pidas en el momento adecuado.",
      },
      {
        q: "¿Mis clientes necesitan cuenta de Google para dejar una reseña?",
        a: "Sí. Según la ayuda de Google Business Profile, los clientes deben iniciar sesión en una cuenta de Google para dejar una reseña.",
      },
      {
        q: "¿Puedo dar un descuento a cambio de una reseña?",
        a: "No. Google indica que ofrecer productos o servicios gratis o con descuento a cambio de reseñas está estrictamente prohibido y se considera interacción falsa.",
      },
      {
        q: "¿Por qué la placa lleva NFC y QR?",
        a: "El NFC permite tocar con el teléfono sin abrir ninguna app, siempre que el teléfono tenga NFC activado. El QR es el respaldo para quien prefiere usar la cámara o no tiene NFC disponible.",
      },
      {
        q: "¿Debo responder las reseñas?",
        a: "Sí. Google recomienda responderlas para mostrar que la opinión del cliente importa: con tono amable y profesional, respuestas breves y, en las negativas, disculpas si hacen falta, sin compartir información privada del cliente.",
      },
      {
        q: "¿Qué es mejor, la placa o el stand?",
        a: "La placa se pega en un punto fijo, como mostrador, caja o pared. El stand se coloca de pie sobre un escritorio o mesa sin adhesivo, útil si cambias de lugar con frecuencia.",
      },
      {
        q: "¿Cómo pido reseñas con un enlace o código QR?",
        a: "Google menciona en su ayuda que puedes pedir reseñas compartiendo un enlace de Google o un código QR de tu ficha. La placa NFC y QR de Yume reúne ambos accesos en una sola pieza.",
      },
    ],
    sources: [
      {
        label: "Ayuda de Google Business Profile: Leer y responder reseñas, y pedir reseñas a clientes",
        url: "https://support.google.com/business/answer/3474122?hl=es",
      },
    ],
  },
  {
    slug: "placa-nfc-vs-codigo-qr-impreso-resenas",
    title: "Placa NFC vs. código QR impreso: ¿cuál conviene para pedir reseñas?",
    metaTitle: "Placa NFC vs. código QR impreso para reseñas",
    description:
      "Placa NFC vs. código QR impreso para pedir reseñas de Google: cuándo conviene cada uno, sus límites y por qué lo mejor es una pieza con ambos.",
    category: "Guías",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-10-29",
    intro:
      "Imprimir un código QR en una hoja y ponerlo en el mostrador es gratis y cualquiera lo puede hacer. Entonces, ¿por qué considerar una placa con NFC? La respuesta no es que uno funcione y el otro no: los dos llevan a la misma página de reseñas. La diferencia está en la comodidad, en los teléfonos donde funciona cada uno, en la imagen que proyecta la pieza y en las reglas de Google que aplican a ambos.",
    sections: [
      {
        heading: "Placa NFC vs. código QR: la diferencia en la práctica",
        body: [
          "La diferencia principal es cómo llega el cliente a la reseña. Con el QR abre la cámara y escanea. Con el NFC acerca el teléfono a la placa y toca. Los dos llevan al mismo lugar, así que ninguno garantiza más reseñas por sí solo. Lo que cambia es la comodidad y en qué teléfono funciona.",
          "Un QR impreso es el medio más conocido: casi todo el mundo sabe escanearlo y solo necesita una cámara. Para que se lea bien, debe ser lo bastante grande y tener espacio libre alrededor. El NFC agrega un solo toque, sin apuntar ni enfocar, pero depende de que el cliente tenga NFC activado, y la ubicación y el material de la superficie pueden afectar la lectura.",
          "Estos puntos vienen de una guía de tarjetas de reseña de un proveedor, no de una prueba independiente. Por eso no damos porcentajes ni listas exactas de compatibilidad: depende del modelo y de los ajustes de cada teléfono.",
        ],
      },
      {
        heading: "Cuándo conviene el QR y cuándo el NFC",
        body: [
          "El QR conviene cuando quieres que cualquier teléfono con cámara pueda usarlo, incluso en material impreso. El NFC conviene cuando quieres un toque rápido, siempre que el cliente tenga NFC activado. Como no todos los teléfonos lo tienen activo, lo más seguro es no depender de uno solo.",
          "Piensa en el lugar donde va la pieza y en quién la va a usar. En una recepción o un mostrador, el cliente está cerca y puede elegir entre tocar o escanear. En la mesa de un evento hay invitados con teléfonos distintos, así que un QR visible sirve de respaldo si el toque no funciona. En un kit de bienvenida, la pieza se ve de cerca y puede acompañar una nota amable que invite a contar la experiencia.",
          "Si solo vas a imprimir una hoja con QR, cuida que sea grande, que no tenga adornos encima y que quede en un lugar donde el cliente pueda apuntar con calma.",
        ],
      },
      {
        heading: "Por qué la mejor opción es una placa con NFC y QR",
        body: [
          "La opción más segura es una sola pieza que tenga NFC y QR. Así el cliente que tiene NFC activado toca y el que no lo tiene escanea. La guía de QRCodeChimp recomienda justo ese respaldo y sugiere probar con teléfonos comunes antes de comprar en volumen.",
          "Nuestra [placa de reseñas NFC](/productos/placa-resena-google-nfc) reúne las dos formas de usarla en el mismo objeto, y el [stand de reseñas NFC](/productos/stand-resena-google-nfc) lo hace en versión para colocar sobre una superficie. Ambos se ofrecen en blanco o negro.",
          "Antes de usarla en tu negocio o en un evento, pruébala con dos o tres teléfonos distintos, el tuyo y el de alguien más. Si quieres ver cómo se configura y se presenta al cliente, revisa la guía para [usar la placa de reseñas](/blog/como-usar-placa-resenas-google-yume).",
        ],
      },
      {
        heading: "Imagen y diseño: que la pieza se vea parte de tu marca o evento",
        body: [
          "Una hoja con un QR comunica algo distinto que una placa diseñada para verse como parte de la marca o del evento. Para planners, empresas y quienes cuidan cada detalle, el acabado importa. Nuestras placas y stands se ofrecen en blanco o negro, para combinar con el espacio donde se colocan.",
          "Un consultorio, una cafetería, una tienda o la recepción de un salón de eventos ya cuidan su imagen: una pieza que se integra con la decoración se nota más que un aviso suelto. Si organizas eventos, también puede ser un detalle más de la mesa de bienvenida o del módulo de atención a invitados.",
        ],
      },
      {
        heading: "Reglas de Google que aplican igual al QR y al NFC",
        body: [
          "Google permite pedir reseñas genuinas, pero no ofrecer incentivos a cambio, ni pedir solo reseñas positivas, ni desalentar las negativas. Estas reglas aplican igual a una placa NFC y a un código QR, porque el medio no cambia la política. El texto de la pieza debe ser neutral.",
          "Según la política de contenido de Google Maps, no se debe ofrecer pago, descuentos, bienes o servicios gratis a cambio de una reseña, de modificarla o de quitar una negativa. Tampoco se debe filtrar a quién se le pide la reseña. Por eso la placa no debe decir cosas como 'deja 5 estrellas y te regalamos algo'.",
          "La política también indica no pedir contenido específico ni presionar al personal para que deje calificaciones en el local. Un texto sencillo como 'Cuéntanos tu experiencia' cumple: invita sin dictar qué escribir.",
        ],
      },
      {
        heading: "Qué esperar: una facilidad, no una garantía de más reseñas",
        body: [
          "Ninguna de las dos opciones asegura más reseñas por sí sola. La guía de QRCodeChimp, que es de un proveedor y no un estudio independiente, solo dice que las tarjetas pueden ayudar si están bien ubicadas y van acompañadas de una petición amable. Úsalas como facilitador, no como garantía.",
          "Lo que sí puedes controlar es que la pieza esté a la vista, que funcione al probarla y que la petición sea amable y honesta. Para ideas sobre cómo pedirlas sin salirte de las reglas, lee [cómo conseguir más reseñas de Google](/blog/como-conseguir-mas-resenas-de-google-nfc-qr).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["como-conseguir-mas-resenas-de-google-nfc-qr", "como-usar-placa-resenas-google-yume"],
    faq: [
      {
        q: "¿El NFC reemplaza al código QR?",
        a: "No. Algunos clientes tienen el NFC apagado o un teléfono donde la detección falla, y la guía de QRCodeChimp recomienda agregar un QR de respaldo. Lo más seguro es una pieza con NFC y QR.",
      },
      {
        q: "¿Un código QR impreso sirve para pedir reseñas?",
        a: "Sí. Funciona con cualquier teléfono con cámara y en material impreso. Debe ser lo bastante grande y tener espacio libre alrededor para escanearse bien.",
      },
      {
        q: "¿Puedo dar un descuento o un regalo a cambio de una reseña?",
        a: "No. La política de Google prohíbe ofrecer incentivos como pagos, descuentos, bienes o servicios gratis a cambio de una reseña, y aplica igual a una placa NFC y a un QR.",
      },
      {
        q: "¿Puedo pedir reseñas solo a los clientes satisfechos?",
        a: "No. Google no permite solicitar selectivamente reseñas positivas ni desalentar las negativas. Se permite pedir reseñas genuinas sin influir en la calificación ni en el contenido.",
      },
      {
        q: "¿Qué texto conviene poner en la placa?",
        a: "Uno neutral, por ejemplo 'Cuéntanos tu experiencia'. Google indica no pedir contenido específico en la reseña.",
      },
      {
        q: "¿Con NFC voy a recibir más reseñas?",
        a: "No hay una cifra confiable que lo respalde. La guía consultada solo dice que las tarjetas pueden ayudar si están bien ubicadas y van con una petición amable.",
      },
    ],
    sources: [
      {
        label: "Política de contenido de Google Maps: reseñas",
        url: "https://support.google.com/contributionpolicy/answer/7400114",
      },
      {
        label: "QRCodeChimp: guía de tarjetas de reseñas de Google",
        url: "https://www.qrcodechimp.com/google-review-cards/",
      },
    ],
  },
  {
    slug: "como-usar-placa-resenas-google-yume",
    title: "Cómo usar tu placa de reseñas de Google Yume: no necesitas configurar nada",
    metaTitle: "Cómo usar tu placa de reseñas de Google Yume",
    description:
      "Qué enlace mandarnos, cómo probar tu placa NFC y QR el día que llega y dónde colocarla para que tus clientes dejen su reseña en segundos.",
    category: "Guías",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-10-26",
    intro:
      "A diferencia de otras placas NFC que venden \"en blanco\" y te piden programarlas tú mismo con una app, en Yume el NFC y el QR ya vienen configurados con el enlace de tu negocio desde que la producimos: la sacas de la caja y ya está lista para que tus clientes la usen. Esta guía te explica, paso a paso, qué nos mandas, cómo la pruebas, dónde la pones y qué hacer si algo cambia en tu negocio.",
    sections: [
      {
        heading: "Qué necesitamos de ti antes de producirla",
        body: [
          "Solo necesitamos el enlace de tu reseña de Google o, si no lo tienes a la mano, el nombre exacto de tu negocio tal como aparece en Google. Después de tu compra te lo pedimos por WhatsApp, y con eso programamos el NFC y generamos el código QR antes de producir tu placa.",
          "Mientras más preciso sea el dato, mejor: si tu negocio comparte nombre con otros, mándanos el enlace directo o la dirección de tu ficha para que la placa lleve a la correcta. Para eso existe este paso: tus clientes no tendrán que buscarte entre resultados parecidos.",
          "No tienes que descargar ninguna app, crear una cuenta con nosotros ni pagar una suscripción. Es un pago único y la placa no depende de ningún servicio mensual para funcionar.",
        ],
      },
      {
        heading: "Qué incluye y qué tamaño tiene cada versión",
        body: [
          "Hay dos versiones con la misma configuración: la Placa, de 12 × 12 cm y 0.2 cm de grosor, con adhesivo para pegarla, y el Stand, de 12.75 cm de alto y 7.6 cm de ancho, con base de 5 cm de profundidad para colocarlo de pie. Ambas vienen en blanco o negro y llevan NFC y código QR.",
          "Elige la Placa si tienes un punto fijo donde pegarla, como la pared junto a la caja o el frente del mostrador. Elige el Stand si la vas a cambiar de lugar o prefieres no usar adhesivo, porque se apoya sobre cualquier superficie plana. Las dos se producen sobre pedido.",
        ],
        table: {
          headers: ["", "Placa", "Stand"],
          rows: [
            ["Medidas", "12 × 12 cm, 0.2 cm de grosor", "12.75 cm de alto, 7.6 cm de ancho, base de 5 cm"],
            ["Cómo se coloca", "Con adhesivo incluido", "De pie, sin pegamento ni cinta"],
            ["Colores", "Blanco o negro", "Blanco o negro"],
            ["Tecnología", "NFC + código QR", "NFC + código QR"],
          ],
        },
      },
      {
        heading: "El día que la recibes: cómo probarla",
        body: [
          "La placa llega funcionando: no hay nada que instalar ni escanear para activarla. Antes de dejarla a la vista, acerca tu propio teléfono a la placa y, después, escanea el QR con la cámara. Ambos deben llevarte directo a la pantalla para dejar una reseña de tu negocio.",
          "Si usas la versión sin base, pégala con el adhesivo que ya trae en la parte trasera, en una superficie limpia y seca. Si usas el Stand, solo colócalo en su lugar.",
          "Haz la prueba con tu teléfono y, si puedes, con el de alguien más, por ejemplo un Android y un iPhone. Así confirmas que el recorrido funciona igual para quien no tiene tu configuración. Si algo no te lleva a donde esperabas, escríbenos por WhatsApp con una captura y lo revisamos.",
        ],
      },
      {
        heading: "Cómo lo usa tu cliente",
        body: [
          "Tu cliente tiene dos caminos y ambos terminan en el mismo lugar: acerca su teléfono a la placa (NFC) o escanea el código QR con la cámara. No instala nada. El NFC es la misma tecnología de \"toca para pagar\" que usan las terminales sin contacto.",
          "El QR existe como respaldo: sirve cuando el teléfono tiene el NFC desactivado o cuando la persona prefiere usar la cámara. Por eso conviene que el código quede visible y sin tapar, aunque el NFC sea la vía más rápida.",
          "Un buen momento para mencionarla es cuando tu cliente ya está contento: al pagar, al recoger su pedido o al terminar la consulta. Una frase breve basta: \"Si hoy quedaste a gusto, puedes dejarnos tu reseña tocando aquí con tu teléfono\".",
        ],
      },
      {
        heading: "Dónde colocarla para que se use",
        body: [
          "Colócala donde tu cliente ya esté frente a ti en el momento de decidir si quedó satisfecho: junto a la caja, en el mostrador de recepción, en la mesa al llegar la cuenta o en el escritorio al terminar una consulta. Evita esquinas o paredes alejadas, donde nadie se detiene.",
          "Cuida que el frente de la placa no quede detrás de objetos, tarjeteros o cables, porque el NFC se lee acercando el teléfono y el QR necesita verse completo. Revisa de vez en cuando que siga limpia y a la vista.",
        ],
      },
      {
        heading: "Si tu negocio cambia de nombre o de ficha de Google",
        body: [
          "Escríbenos por WhatsApp y lo revisamos contigo: dependiendo del caso, puede resolverse reprogramando la misma placa o puede requerir una nueva. Cuéntanos qué cambió y cuál es el enlace nuevo, para darte una respuesta concreta.",
          "No es algo que el cliente final pueda cambiar por su cuenta desde el teléfono, precisamente para evitar que alguien más la reconfigure sin que tú lo sepas. Si la placa lleva a una ficha equivocada, avísanos antes de dejarla en uso.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Tengo que programar el NFC yo mismo?",
        a: "No. Nosotros programamos el NFC y generamos el código QR con el enlace de tu reseña de Google antes de enviarte tu placa, así que la recibes lista para usar.",
      },
      {
        q: "¿Qué datos me piden después de comprar?",
        a: "El enlace de tu reseña de Google o el nombre exacto de tu negocio tal como aparece en Google. Te lo pedimos por WhatsApp para configurar tu placa antes de producirla.",
      },
      {
        q: "¿Mis clientes necesitan instalar una app?",
        a: "No. Solo acercan el teléfono para leer el NFC o escanean el QR con la cámara, sin instalar nada.",
      },
      {
        q: "¿Hay suscripción o pagos mensuales?",
        a: "No. Es un pago único y la placa no necesita ninguna aplicación ni suscripción para funcionar.",
      },
      {
        q: "¿Cómo la pego?",
        a: "La Placa trae adhesivo en la parte trasera, lista para pegarse en mostrador, caja o mesa. El Stand no necesita pegamento: tiene base propia y se coloca de pie sobre una superficie plana.",
      },
      {
        q: "¿Qué medidas tienen?",
        a: "La Placa mide 12 × 12 cm con 0.2 cm de grosor. El Stand mide 12.75 cm de alto y 7.6 cm de ancho, con base de 5 cm de profundidad.",
      },
      {
        q: "¿En qué colores viene?",
        a: "En blanco y en negro, con el mismo precio en ambos colores.",
      },
      {
        q: "¿Qué hago si mi negocio cambia de nombre o de ficha?",
        a: "Escríbenos por WhatsApp. Según el caso, se puede reprogramar la misma placa o puede hacer falta una nueva.",
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["como-conseguir-mas-resenas-de-google-nfc-qr", "placa-nfc-vs-codigo-qr-impreso-resenas"],
  },
  {
    slug: "papeleria-personalizada-vs-plantillas-genericas",
    title: "Papelería personalizada vs. plantillas genéricas: qué cambia realmente",
    metaTitle: "Papelería personalizada vs. plantillas genéricas",
    description:
      "Papelería personalizada vs. plantillas genéricas: qué cambia en una boda, un evento o tu marca y cuándo conviene el diseño a medida.",
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-26",
    intro:
      "Cuando cotizas papelería es fácil toparte con dos tipos de proveedor muy distintos: el que te vende una plantilla genérica ya lista, y el que diseña la pieza a la medida de tu evento o de tu marca. Los dos resuelven \"tener papelería impresa\", pero no resuelven lo mismo. Si estás planeando una boda, un bautizo, unos XV años o un detalle para alguien especial, la diferencia se nota en la mesa. Aquí está lo que cambia entre diseño a medida y plantilla, y cuándo cada opción tiene sentido.",
    sections: [
      {
        heading: "Qué es una plantilla genérica (y por qué es tan barata)",
        body: [
          "Una plantilla genérica es un molde de diseño ya hecho en el que solo cambias un dato, como tu nombre o la fecha, sin tocar la composición. La tipografía, los colores y la distribución los define el proveedor, no tú. Es barata porque el mismo molde se reutiliza para muchos clientes distintos.",
          "El problema no es que se vea mal, sino que no se ve tuyo: es común encontrarte con otro negocio usando exactamente la misma plantilla, solo con el nombre cambiado. En un evento pasa igual: si tus invitados ya vieron esa misma invitación en otra fiesta, el detalle pierde el efecto de \"esto lo hicieron para nosotros\".",
        ],
      },
      {
        heading: "Diseño a medida vs. plantilla: qué cambia para tu marca",
        body: [
          "Con diseño a medida, la pieza se arma desde cero con tus colores, tu tipografía si ya tienes una y la información real de tu evento, negocio o consultorio. Con plantilla eliges de un catálogo cerrado y solo rellenas campos. La diferencia está en el control: tú decides cómo se ve, no el molde.",
          "Eso importa más de lo que parece en papelería personalizada: es la pieza que tu invitado, cliente o paciente tiene literalmente en la mano, así que comunica tanto como tu logo en la fachada.",
          "La otra diferencia práctica es el proceso: con diseño a medida te mandamos una prueba digital del diseño final antes de imprimir, para que apruebes (o pidas ajustes) antes de que se produzca una sola pieza.",
        ],
        table: {
          headers: ["", "Plantilla genérica", "Diseño a medida"],
          rows: [
            ["Punto de partida", "Molde ya hecho del proveedor", "Tus datos, tus colores y tu estilo"],
            ["Qué puedes cambiar", "Nombre, fecha o logo", "Composición, tipografía, textos y formato"],
            ["Prueba antes de imprimir", "Depende del proveedor", "Prueba digital que apruebas tú"],
            ["Riesgo de verse igual a otro", "Alto", "Bajo, la pieza se arma contigo"],
          ],
        },
      },
      {
        heading: "Para bodas y eventos: por qué el detalle a medida sí se nota",
        body: [
          "En un evento, la papelería es lo que tus invitados tocan, leen y a veces se llevan a casa. Cuando el menú, la invitación o el sticker comparten estilo y llevan los nombres reales de la ocasión, el evento se ve planeado. Una plantilla suelta rara vez logra esa coherencia entre piezas.",
          "En Yume trabajamos por cotización los menús de boda, las invitaciones, los stickers para bodas y eventos, los tatuajes temporales y los dulceros. Si ya tienes paleta de colores o una referencia visual, la usamos de base para que todas las piezas se vean como una sola familia. Si estás armando una boda, empieza por el menú de boda personalizado, que suele ser la pieza que más se luce en la mesa.",
          "Si eres wedding planner o event planner, el flujo es el mismo: nos mandas los datos del evento por WhatsApp, te enviamos la prueba digital y, cuando tu cliente la aprueba, pasa a producción. Así puedes mostrarle el diseño antes de que se imprima una sola pieza.",
        ],
      },
      {
        heading: "Cuándo sí conviene una plantilla",
        body: [
          "Una plantilla puede bastar si la pieza es temporal, interna o de un solo uso, y no necesitas que se distinga de otras. También funciona para arrancar rápido cuando todavía no defines tu identidad. Si la pieza representa tu marca o tu evento ante otras personas, el diseño a medida suele valer la diferencia.",
          "Una pregunta útil para decidir: ¿alguien más va a ver esta pieza y la va a asociar contigo o con tu evento? Si la respuesta es sí, conviene que sea tuya. Si es un borrador, una prueba o algo que se tira después de usarse, una plantilla es una opción razonable.",
        ],
      },
      {
        heading: "Por qué elegir una imprenta personalizada en Guadalajara",
        body: [
          "Yume opera como una imprenta personalizada en Guadalajara, no como una imprenta de plantillas. Cada recetario, etiqueta o pieza de papelería se diseña con los datos reales de quien la pide, pasa por una prueba digital que tú apruebas y se envía a todo México desde Guadalajara.",
          "Si ya tienes un logo o una identidad de marca, la adaptamos directo a la pieza; si no la tienes, la construimos contigo antes de llegar a la prueba digital. En ambos casos, lo que recibes es una pieza que es tuya, no una plantilla con tu nombre encima.",
          `Para piezas de uso diario, el catálogo tiene precios claros: las primeras 100 piezas de las Etiquetas con tu Logo cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN, y arriba de 100 piezas entras a precio mayoreo. El recetario de 100 hojas cuesta $${recetarioPrice("sin-diseno")} MXN si ya tienes tu diseño y $${recetarioPrice("con-diseno")} MXN si lo diseñamos contigo. Para invitaciones, menús de boda y otras piezas de evento cotizamos por WhatsApp según cantidad y formato.`,
        ],
      },
      {
        heading: "Cómo empezar tu pedido a medida",
        body: [
          "Escríbenos por WhatsApp con el tipo de pieza, la cantidad y, si los tienes, tu logo o referencias de estilo. Te mandamos una prueba digital y no se produce nada hasta que la apruebas. Después recibes tu pedido por paquetería o lo recoges en una sucursal Casa Blanca.",
          `Una vez aprobada la prueba, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. Para un evento con fecha, conviene cotizar con tiempo para que haya margen de ajustes. Para el paso a paso completo, revisa cómo pedir papelería personalizada en línea.`,
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre papelería personalizada y una plantilla genérica?",
        a: "La plantilla es un molde ya hecho donde solo cambias algunos datos. La papelería personalizada se diseña con tus colores, textos y estilo, y pasa por una prueba digital que apruebas antes de producir.",
      },
      {
        q: "¿Se imprime algo antes de que yo apruebe el diseño?",
        a: "No. Todo pedido pasa primero por una prueba digital y no se manda a producción hasta que la apruebas.",
      },
      {
        q: "¿Puedo pedir papelería para una boda o un evento?",
        a: "Sí. Cotizamos por WhatsApp menús de boda, invitaciones, stickers para bodas y eventos, tatuajes temporales y dulceros. Cuéntanos el tipo de evento, la fecha y la cantidad estimada.",
      },
      {
        q: "¿Cuánto cuestan las etiquetas con mi logo?",
        a: `Las primeras 100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)} MXN. Pasando las 100 entras a precio mayoreo: por ejemplo, 200 piezas cuestan $${priceOf("stickers-logo-personalizado", 200)} MXN.`,
      },
      {
        q: "¿Cuánto tarda mi pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, producimos en Guadalajara y enviamos a todo México por $${NATIONAL_SHIPPING_PRICE} MXN, gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: ["papeleria-personalizada-para-negocios-jalisco", "como-pedir-papeleria-personalizada-en-linea", "menu-de-boda-personalizado", "como-pedir-invitaciones-personalizadas-para-eventos", "stickers-para-bodas-eventos-y-fiestas"],
  },
  {
    slug: "stickers-para-empaques-de-negocio",
    title: "Guía de stickers para empaques de negocio: cómo usarlos y qué pedir",
    metaTitle: "Stickers para empaques: etiquetas para tu negocio",
    description:
      "Cómo usar stickers para empaque en tu negocio: sellar bolsas y cajas, etiquetar productos y qué pedir si necesitas etiquetas personalizadas para tu negocio o stickers con logo en Guadalajara.",
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-18",
    intro:
      "El empaque es uno de los puntos de contacto más baratos de mejorar en un negocio: no necesitas cambiar tu caja o tu bolsa, basta con cerrarla o decorarla con un sticker que lleve tu logo. Esta guía cubre los usos más comunes de stickers para empaque y qué pedir según el tipo de empaque que uses.",
    sections: [
      {
        heading: "Los usos más comunes de stickers para empaque",
        body: [
          "Los que más vemos: sellar la solapa de una bolsa de papel o kraft, cerrar una caja de cartón, etiquetar el fondo o la tapa de un frasco, o ir pegado directo en el producto (velas, jabones, cosméticos). En todos los casos, el sticker cumple dos funciones a la vez: cierra el empaque y lo identifica como tuyo.",
          "Si tu empaque se transporta o se puede mojar (envíos, productos refrigerados, bebidas), conviene usar un sticker resistente al agua en vez de una etiqueta de papel común, que se despega o se corre con la humedad.",
        ],
      },
      {
        heading: "Etiquetas personalizadas para negocio: qué formato pedir",
        body: [
          "Para empaque, lo más común es un sticker circular o cuadrado de 3 a 5 cm con el logo centrado, pensado para verse bien en la solapa de una bolsa o el centro de una caja. Si tu empaque es una botella o un frasco, un formato ovalado o rectangular suele ajustarse mejor a la curvatura.",
          "En Yume vendemos las etiquetas personalizadas por cantidad de piezas, no por hoja: puedes pedir la cantidad exacta que tu negocio necesita en un momento dado, sin comprar de más solo para llenar una planilla completa.",
        ],
      },
      {
        heading: "Stickers con logo en Guadalajara: cómo cotizar el tuyo",
        body: [
          "Si tienes tu logo en PNG, PDF, AI o SVG con fondo transparente, lo puedes mandar directo por WhatsApp junto con la cantidad y el tamaño que buscas, y te preparamos una prueba digital antes de imprimir. Si todavía no tienes un logo definido, también podemos ayudarte a construir uno simple para arrancar.",
          "Producimos en Guadalajara y enviamos a cualquier parte de México, así que el mismo proceso aplica sin importar si tu negocio vende en bazares locales o hace envíos a otros estados.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-para-marca-pequena-vs-grande", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
  },
  {
    slug: "stickers-para-marca-pequena-vs-grande",
    title: "Stickers para marca pequeña vs grande: cuántos pedir",
    metaTitle: "Stickers para marca pequeña vs grande",
    description: `Cuántos stickers pedir si tu marca es chica o grande, o si es para un evento. Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)}, con prueba digital.`,
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-26",
    intro:
      "Una marca que recién arranca y una que ya vende seguido no necesitan la misma cantidad de stickers, y un evento tampoco: una boda de 80 invitados, una posada de empresa o un regalo para alguien especial piden otra cuenta. En Yume se vende por cantidad de piezas, no por planilla, así que puedes pedir lo que realmente necesitas. Aquí te explicamos cómo elegir la cantidad correcta según tu etapa, qué cuesta cada opción y qué esperar del proceso.",
    sections: [
      {
        heading: "Si tu marca es pequeña: entra sin comprometerte a un pedido grande",
        body: [
          `Si tu marca es pequeña, pide el mínimo: 50 piezas en Stickers y Etiquetas con tu Logo ($${priceOf("stickers-logo-personalizado", 50)}) o 40 piezas en Stickers de Vinil Personalizados ($${priceOf("stickers-vinil-impermeable", 40)}). Se venden por cantidad de piezas y no por planilla completa, así que no inmovilizas dinero en inventario que tardará meses en usarse.`,
          "Si apenas estás probando tu marca o vendes en bazares de forma ocasional, un pedido chico te deja ver cómo reacciona la gente a tu diseño y ajustar antes de comprometerte a una cantidad mayor.",
          "Un sticker bien hecho también funciona como detalle de marca: sellar una bolsa de regalo, cerrar una caja o acompañar un pedido. Para ver ideas de uso en empaque, revisa nuestra guía de stickers para empaques de negocio.",
        ],
      },
      {
        heading: "Si tu marca ya vende seguido: el precio por pieza baja",
        body: [
          `Si ya vendes seguido, conviene pedir más: las primeras 100 piezas cuestan $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo y $${priceOf("stickers-vinil-impermeable", 100)} en vinil. Pasando las 100 entras a precio mayoreo y cada pieza extra cuesta 10% menos, así que el precio por pieza baja mientras más pides.`,
          "Es el mismo proceso y el mismo proveedor: pagas menos por pieza sin cambiar nada más. Si necesitas una cantidad mayor a la que muestra el selector, cotiza directo por WhatsApp y ajustamos el pedido.",
          "La tabla de abajo muestra el total y el precio por pieza en cantidades típicas, tomados del catálogo.",
        ],
        table: {
          headers: ["Piezas", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Si es para un evento o un regalo: cuenta invitados, no ventas",
        body: [
          "Si el sticker es para una boda, un bautizo, unos XV años o una posada, no cuentes ventas: cuenta personas. Una pieza por invitado si va en bolsitas o botellas, una por sobre si sellas invitaciones, y unas cuantas más para mesas, letreros y fotos. Si tu lista de invitados es menor al mínimo, el mínimo sigue siendo 50 o 40 piezas, y las que sobren sirven para mesas y fotos.",
          "El sticker lleva el nombre, la fecha o el tema de la celebración, así que cada invitado se lleva un recuerdo con su nombre en vez de un detalle genérico. Para ver usos, tamaños y formatos, lee nuestra guía de stickers para bodas, eventos y fiestas.",
          "Si además tienes invitaciones o menú de boda, usa el mismo diseño en todo: el evento se ve planeado y no armado con piezas sueltas.",
        ],
      },
      {
        heading: "Cómo elegir la cantidad correcta para tu etapa",
        body: [
          `Elige según lo que sabes hoy. Si no sabes cuánto vas a usar, empieza con el mínimo (50 o 40 piezas) y repite el pedido conforme se agote. Si ya tienes un ritmo conocido, calcula 2 a 3 meses de uso y pide en el rango donde ya aplica el precio mayoreo (más de 100 piezas). Para un evento, pide cerca del número real de invitados.`,
          "En todos los casos el proceso es idéntico: mandas tu logo o diseño, te enviamos una prueba digital, apruebas y se produce. Lo único que cambia es la cantidad que eliges.",
          "Tampoco necesitas decidir todo de una vez. Puedes pedir una primera tanda, ver cómo se usa y repetir el mismo diseño después sin volver a empezar.",
        ],
      },
      {
        heading: "Qué material y qué corte elegir sin importar el tamaño de tu pedido",
        body: [
          "Elige vinil si el sticker va a mojarse, a estar al sol o a rayarse, y elige corte troquelado si quieres que siga la silueta exacta de tu diseño. El vinil de Yume resiste agua, sol y rayones, según la ficha del producto. Cada producto te deja escoger entre troquelado y semitroquelado al pedir.",
          "También eliges el acabado: mate, brillante u holográfico. El holográfico tiene un costo extra por pieza que ves en la página del producto. Si dudas entre material o corte, estas dos guías te ayudan: stickers de vinil vs. papel y troquelado vs. semitroquelado.",
        ],
      },
      {
        heading: "Cuánto tarda y cómo se entrega según tu pedido",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}; en compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Si tu pedido tiene fecha fija, pide con margen para ajustar la prueba antes de producir. Más detalles en nuestra guía de cuánto tarda un pedido de stickers.`,
        ],
      },
      {
        heading: "Cómo cotizar el tuyo",
        body: [
          "Mándanos por WhatsApp tu logo o diseño (PNG, PDF, AI o SVG con fondo transparente funcionan mejor), la cantidad y el tamaño que buscas. Te preparamos una prueba digital y no se produce nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "Si todavía no tienes un diseño definido, cuéntanos para qué lo quieres y lo vemos juntos. También puedes comparar opciones en nuestra guía de dónde imprimir stickers personalizados en México.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es el pedido mínimo de stickers?",
        a: "50 piezas en Stickers y Etiquetas con tu Logo y 40 piezas en Stickers de Vinil Personalizados. Se venden por cantidad de piezas, no por planilla.",
      },
      {
        q: "¿Cuánto cuestan los stickers si apenas empiezo?",
        a: `El mínimo cuesta $${priceOf("stickers-logo-personalizado", 50)} por 50 piezas en etiquetas con tu logo y $${priceOf("stickers-vinil-impermeable", 40)} por 40 piezas en vinil. Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con logo y $${priceOf("stickers-vinil-impermeable", 100)} en vinil.`,
      },
      {
        q: "¿Qué pasa si pido más de 100 piezas?",
        a: `Pasando las 100 piezas entras a precio mayoreo: cada pieza extra cuesta 10% menos. Por ejemplo, 200 piezas de vinil cuestan $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "¿Puedo usar los stickers para un evento y no para mi negocio?",
        a: "Sí. Puedes pedir stickers con nombres, fecha o el tema de tu boda, XV años, bautizo, baby shower o evento de empresa. Mándanos tu diseño o la idea y te enviamos una prueba digital antes de imprimir.",
      },
      {
        q: "¿Los stickers resisten el agua?",
        a: "Los stickers de vinil son resistentes al agua, al sol y a rayones, y las etiquetas con tu logo son resistentes al agua, según la ficha de cada producto.",
      },
      {
        q: "¿Cuánto tarda el pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-para-bodas-eventos-y-fiestas", "stickers-para-empaques-de-negocio", "stickers-vinil-vs-papel-diferencias", "troquelado-vs-semitroquelado-stickers", "cuanto-tarda-un-pedido-de-stickers-personalizados", "donde-imprimir-stickers-personalizados-mexico"],
  },
  {
    slug: "stickers-para-bodas-eventos-y-fiestas",
    title: "Stickers para bodas, eventos y fiestas: ideas y cómo pedirlos",
    metaTitle: "Stickers para bodas, eventos y fiestas",
    description: `Stickers para bodas, eventos y fiestas: usos, tamaños y formato. Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)}, con prueba digital y envío a todo México.`,
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-26",
    intro:
      "Los stickers personalizados están en tendencia como detalle de celebración: cada vez se ven más en bodas, XV años y fiestas de todo tipo, sellando bolsitas de regalo, decorando la mesa o combinados con el resto de la papelería del evento. Un sticker con el nombre de los novios, la fecha del evento o el tema de la fiesta es uno de los detalles más baratos de personalizar una celebración: no reemplaza la invitación ni el menú, pero sí amarra visualmente todo lo demás. Esta guía cubre los usos más comunes de stickers para bodas, eventos y fiestas, y qué pedir según el tipo de celebración.",
    sections: [
      {
        heading: "Por qué se han vuelto tan populares",
        body: [
          "Los stickers personalizados se han vuelto populares en celebraciones porque son un detalle pequeño que se ve en fotos y en cada regalo que un invitado se lleva a casa, cuestan poco por pieza y se pegan en casi cualquier superficie. Por eso se pueden sumar a cualquier presupuesto o tamaño de evento.",
          "Es una tendencia que vemos crecer en boda tras boda y fiesta tras fiesta. A diferencia de un favor de fiesta genérico, un sticker lleva el nombre, la fecha o el tema de tu celebración, así que se siente hecho para ese evento y no comprado en una tienda.",
        ],
      },
      {
        heading: "Los usos más comunes en una celebración",
        body: [
          "Los usos más comunes son sellar bolsitas de dulces o regalos, cerrar el sobre de las invitaciones, decorar el centro de mesa o el letrero de bienvenida y pegar en botellas o latas para el brindis. En bodas y XV años llevan nombres o fecha; en fiestas temáticas, el diseño del tema.",
          "Por tipo de celebración, estas ideas son las que más se piden:",
          "Boda: iniciales de los novios y fecha para sellar bolsitas de detalle, sobres de invitación o frascos de la mesa de dulces. XV años: el nombre de la festejada o el tema de la fiesta en bolsitas, botellas y recuerdos.",
          "Baby shower, bautizo o primera comunión: el nombre del festejado o un ícono del tema en cajitas y bolsas de recuerdo. Fiesta infantil: el personaje o diseño del tema en dulceros y bolsitas sorpresa. Despedida de soltera o evento de empresa: una frase, un logo o el nombre del evento en botellas y regalos para los asistentes.",
          "Si ya tienes invitaciones o un menú de boda personalizado, usar el mismo diseño en los stickers hace que todo el evento se vea como una sola pieza, no como elementos sueltos comprados por separado.",
        ],
      },
      {
        heading: "Qué formato pedir según el uso",
        body: [
          "Para bolsitas de regalo o sobres, un sticker circular u ovalado de 3 a 5 cm es el tamaño más común. Para botellas o latas conviene uno rectangular o un troquelado a la silueta de tu diseño, y si va a mojarse, pide vinil resistente al agua en vez de papel.",
          "En superficies curvas, como una botella o una lata, el troquelado a la forma exacta de tu diseño se ve más limpio que un cuadrado genérico. Si dudas entre troquelado y semitroquelado, lee nuestra comparación de troquelado vs. semitroquelado.",
          "Si el sticker va a estar en algo que se moja (hielera, botella, exterior), el vinil es la opción segura; para ver la diferencia con el papel, revisa nuestra guía de stickers de vinil vs. papel. Al pedir de vinil también eliges el acabado: mate, brillante u holográfico (el holográfico tiene un costo extra por pieza, que ves en la página del producto).",
          "En Yume se venden por cantidad de piezas, no por planilla: puedes pedir exactamente el número de invitados o mesas que tiene tu evento, sin comprar de más.",
        ],
      },
      {
        heading: "Cuántos stickers pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo y $${priceOf("stickers-vinil-impermeable", 100)} en stickers de vinil. Pasando las 100, cada pieza extra va a precio mayoreo. El mínimo de compra es de 50 piezas en etiquetas con logo y de 40 en vinil, así que pides cerca del número real de invitados o mesas de tu evento.`,
          "Una cuenta simple: una pieza por invitado si van en bolsitas o botellas, una por sobre si sellas invitaciones, y unas cuantas de más para mesas, letreros y fotos. Precio por cantidad:",
        ],
        table: {
          headers: ["Piezas", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cómo combinarlos con el resto de tu papelería",
        body: [
          "Usa la misma paleta, tipografía e iniciales en el sticker, la invitación y el menú, y el evento se ve como una sola pieza. Lo más práctico es definir el diseño una vez y pedir cada pieza con ese mismo archivo, para que los colores y el estilo coincidan en todo.",
          "Si todavía no tienes la papelería, empieza por la invitación y el menú de boda, y deja los stickers para el final: ya tendrás el diseño definido. Para los detalles de los invitados, también puedes revisar los dulceros para bodas, XV años y baby showers y los tatuajes temporales para fiestas.",
        ],
      },
      {
        heading: "Cuánto tarda y cómo se entrega",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}; en compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Si tu evento tiene fecha fija, pide con margen para poder ajustar la prueba antes de producir.`,
        ],
      },
      {
        heading: "Cómo cotizar el tuyo",
        body: [
          "Para cotizar, mándanos nombres, fecha, estilo o colores (o tu diseño ya armado) y la cantidad que necesitas. Te preparamos una prueba digital antes de imprimir, y no se produce nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "Si tu evento ya tiene invitaciones o un menú personalizado, cuéntanos: podemos alinear el sticker al mismo diseño. El proceso es el mismo sin importar dónde sea tu boda, evento o fiesta.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué tamaño de sticker conviene para bolsitas de regalo?",
        a: "Un sticker circular u ovalado de 3 a 5 cm es el tamaño más común para bolsitas de regalo y sobres de invitación.",
      },
      {
        q: "¿Cuánto cuestan los stickers para mi evento?",
        a: `Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo y $${priceOf("stickers-vinil-impermeable", 100)} en stickers de vinil. Pasando las 100, cada pieza extra va a precio mayoreo: 200 piezas de vinil cuestan $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "50 piezas en etiquetas con tu logo y 40 piezas en stickers de vinil. Se venden por cantidad de piezas, no por planilla.",
      },
      {
        q: "¿Puedo pedir stickers con los nombres y la fecha de mi boda?",
        a: "Sí. Mándanos los nombres, la fecha y el estilo o colores que quieres, o tu diseño ya armado, y te enviamos una prueba digital antes de imprimir.",
      },
      {
        q: "¿Resisten el agua los stickers para botellas y hieleras?",
        a: "Los stickers de vinil se imprimen en vinil premium resistente al agua, al sol y a rayones, según la ficha del producto. Para algo que se moja, pídelos en vinil.",
      },
      {
        q: "¿Cuánto tarda el pedido?",
        a: `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["tatuajes-temporales-para-boda-eventos-y-fiestas", "menu-de-boda-personalizado", "como-pedir-invitaciones-personalizadas-para-eventos", "dulceros-para-eventos-sociales-boda-xv-baby-shower", "troquelado-vs-semitroquelado-stickers", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
  },
  {
    slug: "tatuajes-temporales-para-boda-eventos-y-fiestas",
    title: "Tatuajes temporales para boda, eventos y fiestas: cómo usarlos",
    metaTitle: "Tatuajes temporales para boda, XV años y fiestas",
    description: "Cómo usar tatuajes temporales para boda, XV años y fiestas: ideas por evento, duración según la FDA, seguridad y qué necesitamos para cotizar.",
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-29",
    intro:
      "Un tatuaje temporal con las iniciales de los novios, el nombre de la festejada o el tema de la fiesta es un detalle que el invitado se lleva puesto el resto del evento, no uno que se queda guardado en un cajón. Se ponen en el momento, se lucen durante la celebración y terminan en las fotos. Aquí encuentras cuánto duran, qué tipo conviene para una fiesta, ideas por evento y qué necesitamos para cotizar los tuyos. Si buscas la versión para marcas, revisa nuestra guía de [tatuajes temporales para eventos](/blog/tatuajes-temporales-personalizados-para-eventos).",
    sections: [
      {
        heading: "¿Cuánto duran los tatuajes temporales para boda?",
        body: [
          "Depende del tipo de producto. Según la FDA, los tatuajes temporales de calcomanía se van en horas o días, mientras que los de henna pueden durar hasta 3 o 4 semanas. Los de calcomanía son los de duración corta, así que piensa en ellos como un recuerdo para el día del evento.",
          "Por eso no te prometemos una cifra exacta de días: la duración varía según el producto y la piel de cada persona. Si quieres más detalle sobre este tema, revisa [cuánto duran y cómo quitarlos](/blog/cuanto-duran-los-tatuajes-temporales-y-como-quitarlos).",
        ],
      },
      {
        heading: "Calcomanía o henna negra: cuál elegir para una fiesta",
        body: [
          "Para una fiesta con invitados, elige tatuajes de calcomanía. La FDA indica que la henna negra puede llevar tinte para el cabello u otros colorantes para que dure más, y que no ha aprobado la henna ni el tinte para el cabello para uso en la piel. Evita la henna negra de un puesto improvisado.",
          "Si alguien te ofrece henna para tu boda o tu fiesta, pregunta qué lleva antes de aplicarla en la piel de tus invitados. Un tatuaje de calcomanía con diseño propio, además, te deja controlar cómo se ve cada pieza porque lo apruebas antes en una prueba digital.",
        ],
      },
      {
        heading: "Cómo probar los tatuajes temporales antes de la boda",
        body: [
          "La FDA advierte que las tintas o colorantes pueden irritar la piel y causar erupciones. Por eso conviene hacer una prueba en una zona pequeña antes del evento, sobre todo si la novia o algún invitado tiene piel sensible. Esta prueba es una recomendación general, no una norma de la FDA.",
          "Haz la prueba con calma, unos días antes y no en la mañana de la celebración, para que tengas tiempo de decidir si los usarás. Es un detalle pequeño que cuida a tus invitados y que tranquiliza a quien organiza el evento.",
        ],
      },
      {
        heading: "Ideas de tatuajes temporales para boda, XV años y fiestas",
        body: [
          "Para una boda funcionan las iniciales de los novios o la fecha, como detalle en la mesa de bienvenida. En XV años, el nombre o el tema de la fiesta; en una despedida de soltera, una frase, fecha o ícono; en una fiesta infantil, personajes o diseños del tema de la fiesta.",
          "Funcionan especialmente bien como actividad para los invitados más pequeños en una fiesta infantil, o como detalle fotogénico en despedidas de soltera y XV años. Para un baby shower, una posada o un evento de empresa, cuéntanos el nombre del evento, la fecha o tu logo y armamos la propuesta.",
        ],
      },
      {
        heading: "Tatuajes temporales para planners y eventos de empresa",
        body: [
          "Si organizas bodas o eventos, trabajamos por evento: te mandamos una prueba digital antes de producir y hablas directo con nosotros por WhatsApp. La cantidad la defines según el número de invitados. Sirve para wedding planners, event planners y empresas que organizan posadas, aniversarios o lanzamientos.",
          "Cuando el evento ya tiene paleta de colores, invitación o decoración, mándanos una foto o una referencia y adaptamos el diseño a esa línea. Así el detalle se ve planeado y coherente con el resto de la celebración.",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar tatuajes temporales para boda",
        body: [
          "Necesitamos el diseño, nombre o frase que quieres, o una referencia del tema si aún no tienes diseño, el tamaño aproximado y la cantidad según el número de invitados. Con eso te preparamos la cotización y, antes de producir, te mandamos una prueba digital para que apruebes cómo se verá.",
          "Producimos en Guadalajara y enviamos a cualquier parte de México, así que puedes cotizar sin importar dónde sea la celebración. Los tatuajes temporales se cotizan por WhatsApp y no tienen un precio publicado. Entra a la página de [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados) para empezar tu cotización.",
        ],
      },
      {
        heading: "Cómo combinarlos con el resto de tu papelería",
        body: [
          "Si ya personalizas invitaciones, menú de boda o stickers para la celebración, usa el mismo diseño o la misma paleta de colores en los tatuajes temporales. Así se sienten parte del mismo festejo y no un producto aparte. Cuéntanos qué otras piezas tienes en proceso para alinear el diseño.",
          "Si además quieres un detalle que se pueda pegar y guardar, mira nuestros [stickers de vinil personalizados](/productos/stickers-vinil-impermeable). Con el mismo diseño en ambos, tu evento se ve completo y cuidado.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["tatuajes-temporales-personalizados-para-eventos", "cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"],
    serviceLink: { href: "/productos/tatuajes-temporales-personalizados", label: "Ver tatuajes temporales personalizados" },
    quoteMessage: "Hola, me interesa cotizar tatuajes temporales para una boda, evento o fiesta.",
    faq: [
      {
        q: "¿Cuánto duran los tatuajes temporales?",
        a: "Según la FDA, los tatuajes temporales de calcomanía se van en horas o días, y los de henna pueden durar hasta 3 o 4 semanas. La duración depende del tipo de producto.",
      },
      {
        q: "¿Es buena idea usar henna negra en una fiesta?",
        a: "La FDA indica que la henna negra puede llevar tinte para el cabello u otros colorantes para que dure más, y que no ha aprobado la henna ni el tinte para el cabello para uso en la piel. Para una fiesta conviene elegir tatuajes de calcomanía.",
      },
      {
        q: "¿Conviene probar el tatuaje antes del evento?",
        a: "Sí. La FDA advierte que las tintas o colorantes pueden irritar la piel y causar erupciones, así que conviene probar en una zona pequeña, sobre todo si hay piel sensible. Es una recomendación general, no una norma de la FDA.",
      },
      {
        q: "¿Qué necesito para cotizar mis tatuajes temporales?",
        a: "El diseño, nombre o frase (o una referencia del tema), el tamaño aproximado y la cantidad según el número de invitados. Antes de producir te mandamos una prueba digital para que la apruebes.",
      },
      {
        q: "¿Cuánto cuestan los tatuajes temporales?",
        a: "Se cotizan por WhatsApp según tu diseño y la cantidad, porque no tienen un precio publicado en el sitio.",
      },
      {
        q: "¿Envían a todo México?",
        a: "Sí. Producimos en Guadalajara y enviamos a cualquier parte de México.",
      },
    ],
    sources: [
      {
        label: "FDA: Tatuajes y maquillaje permanente (Tattoos and Permanent Makeup)",
        url: "https://www.fda.gov/consumers/free-publications-women/tatuajes-y-maquillaje-permanente-tattoos-and-permanent-makeup",
      },
    ],
  },
  {
    slug: "donde-imprimir-stickers-personalizados-mexico",
    title: "Dónde imprimir stickers personalizados en México: qué necesitas y cómo pedirlos",
    metaTitle: "Dónde imprimir stickers personalizados: precio 2026",
    description: "Dónde imprimir stickers personalizados en México y cuánto cuestan: primeras 100 piezas por $350, qué archivo enviar y envío a todo el país.",
    category: "Guías",
    publishedAt: "2026-09-29",
    modifiedAt: "2026-10-29",
    intro:
      "Si buscas dónde imprimir stickers personalizados en México, la mayoría de las opciones caen en dos grupos: imprimirlos tú mismo en casa (con vinil y una impresora especial) o mandarlos a hacer con una imprenta que ya tiene el equipo de corte troquelado. Esta guía cubre la segunda opción: qué necesitas tener listo, qué archivo enviar y cómo funciona el proceso para mandar a imprimir tus stickers en línea, sea para tu marca, para una boda o para cualquier evento, sin comprar equipo ni ir a una imprenta física.",
    sections: [
      {
        heading: "¿Cuánto cuesta imprimir stickers personalizados en México?",
        body: [
          "Primeras 100 piezas: $350 en stickers de vinil ($3.50 c/u, mínimo 40) y $300 en etiquetas con tu logo ($3.00 c/u, mínimo 50). Pasando de 100 piezas es precio mayoreo y cada pieza extra baja 10%. El envío a todo México es gratis desde $750 MXN.",
          "Se venden por cantidad de piezas, no por planilla, así que pides la cantidad exacta que necesitas. El corte (troquelado o semitroquelado) y los acabados mate y brillante no cambian el precio; el holográfico suma un costo extra por pieza.",
          "Precio por cantidad (el mínimo de compra es 50 piezas en etiquetas con logo y 40 en vinil):",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Stickers para imprimir en casa vs. mandarlos a imprimir",
        body: [
          "Si quieres un sticker troquelado, resistente al agua y en cantidad, lo más práctico es pedirlo ya impreso. Imprimir en casa solo conviene para pocas piezas, si ya tienes impresora, papel adhesivo y tijeras o cortadora, y no te importa que el contorno quede menos exacto.",
          "Muchas búsquedas empiezan con «stickers para imprimir» o «pegatinas personalizadas» (así les dicen en varias partes de México). Quien imprime en casa tiene que recortar pieza por pieza.",
          "Imprimir en casa tiene sentido si ya tienes o quieres invertir en una impresora especial y vinil por rollo, y tu volumen es bajo. Para un pedido de 50 o 100 piezas, lo más simple suele ser mandarlo a hacer con una imprenta que ya tiene el equipo de corte troquelado: no hay que comprar ni aprender a usar una máquina.",
          "La diferencia se nota más en el acabado: un corte troquelado hecho con equipo profesional sigue el contorno exacto del diseño, algo difícil de replicar con tijeras o un cortador casero.",
        ],
      },
      {
        heading: "Cómo elegir dónde imprimir stickers personalizados sin equivocarte",
        body: [
          "Compara cinco cosas antes de elegir: si te mandan prueba digital antes de imprimir, qué tipo de corte ofrecen, el mínimo de piezas, si cobran por pieza o por planilla, y cuánto cuesta el envío. Con eso comparas ofertas parecidas sin fijarte solo en el precio de lista.",
          "Pregunta también qué archivo piden y si te dan una plantilla con el sangrado y la línea de corte, porque cada imprenta tiene su propia especificación.",
          "En Yume te mandamos una prueba digital y no se produce nada hasta que la apruebas. Tú eliges troquelado o semitroquelado, el mínimo es de 40 piezas en vinil y 50 en etiquetas con logo, se vende por pieza y el envío es gratis desde $750 MXN.",
          "Si quieres ver cómo se compara este proceso con otras opciones en línea, lee la comparativa de Yume contra imprentas online de stickers.",
        ],
      },
      {
        heading: "Qué necesitas tener listo antes de cotizar",
        body: [
          "Necesitas tres cosas: tu diseño, logo o foto, el tamaño aproximado que quieres y la cantidad de piezas. No tiene que estar terminado: con una referencia o un boceto ya podemos empezar a cotizar y ajustar antes de la prueba digital.",
          "Lo ideal es un archivo vectorial (AI, PDF o SVG), porque se puede ampliar sin perder nitidez. Un PNG o un JPG también sirve si tiene buena resolución al tamaño final; como referencia, varias imprentas piden 300 PPI. Si solo tienes una foto o un JPG pequeño, también se puede trabajar, pero puede necesitar limpieza antes de imprimir.",
          "Sobre el tamaño, no hace falta que sea exacto: si no estás seguro, dinos dónde lo vas a pegar y lo ajustamos en la prueba digital. Y sobre la cantidad, puedes escribir el número exacto que necesitas desde el mínimo.",
          "Si es para un evento, suma un cuarto dato: la fecha. Con ella revisamos contigo los tiempos antes de que apruebes la prueba digital.",
        ],
      },
      {
        heading: "Qué archivo enviar para imprimir tus stickers: checklist",
        body: [
          "Para que tu sticker salga nítido, envía un archivo vectorial (AI, PDF o SVG) o una imagen de al menos 300 PPI al tamaño final, deja un margen de sangrado alrededor del diseño, evita textos muy pequeños y avisa si el color es importante. Cada imprenta fija su propia especificación, así que confirma la suya.",
          "El sangrado es la parte del diseño que se extiende más allá de la línea de corte, para que no aparezca un borde blanco si el corte se mueve un poco. Varía según la imprenta: las guías van desde unos 1.6 mm hasta unos 3 mm, por eso conviene pedir la plantilla de quien vaya a imprimir.",
          "Si tu diseño tiene una forma especial, el vector es lo más seguro para marcar la línea de corte; un PNG o un JPG no puede llevar esa línea. No te preocupes si no sabes trazarla: mándanos tu diseño y lo revisamos en la prueba digital.",
          "Como regla práctica, usa texto de 6 pt o más y líneas de 1 pt o más. El detalle más fino puede perderse al cortar e imprimir, sobre todo en un sticker pequeño.",
          "El color en pantalla (RGB) puede verse distinto al imprimir, y varias imprentas recomiendan trabajar en CMYK. Si hay un tono clave en tu diseño, como el de la paleta de un evento, avísanos desde el inicio.",
          "Errores que conviene evitar: enviar una captura de pantalla de baja resolución, dejar el texto pegado al borde del corte, usar un fondo de color sin sangrado y pedir sin decir dónde se va a pegar el sticker.",
        ],
      },
      {
        heading: "Corte y acabado: cómo elegir tus stickers personalizados",
        body: [
          "Al pedir eliges el tipo de corte (troquelado o semitroquelado) y el acabado (mate, brillante u holográfico). Los dos cortes y los acabados mate y brillante cuestan lo mismo; el holográfico suma un costo extra por cada pieza. Si dudas cuál te conviene, escríbenos y te orientamos.",
          "El troquelado corta el material y el respaldo siguiendo la silueta del diseño: cada sticker queda individual, ideal para sellar una bolsita o pegarlo en una copa. El semitroquelado corta solo el material y deja el respaldo, útil si los vas a entregar en hoja o los vas a pegar uno por uno.",
          "El vinil es premium y resiste el agua, el sol y los rayones. Las etiquetas con tu logo también son resistentes al agua.",
          "Antes de pegar cualquier sticker, limpia y seca la superficie: no se adhiere bien sobre superficies húmedas, grasosas o con polvo, como una copa recién lavada o una caja polvosa. Si dudas entre vinil y papel, revisa la guía de diferencias entre vinil y papel.",
        ],
      },
      {
        heading: "Cómo funciona pedir stickers personalizados en línea",
        body: [
          "Mandas tu diseño y la cantidad por WhatsApp o desde la tienda en línea, te confirmamos el precio y te enviamos una prueba digital antes de imprimir. Puedes pedir ajustes de tamaño o color; una vez que la apruebas, se produce y se envía a cualquier parte de México.",
          "La prueba digital llega normalmente en un máximo de 24 horas después de tu pago e incluye hasta 2 rondas de ajustes. Para saber cuándo te llega tu pedido, revisa la guía de cuánto tarda un pedido de stickers personalizados.",
        ],
      },
      {
        heading: "Stickers personalizados para bodas, cumpleaños y eventos",
        body: [
          "Sí, puedes pedir stickers personalizados para un evento: con los nombres de los festejados, un diseño de la ocasión o un dibujo propio. Se piden desde 40 piezas, así que cuadras la cantidad al número de invitados. Cuéntanos la fecha de tu evento por WhatsApp y revisamos contigo los tiempos.",
          "Por ejemplo, un diseño con los nombres y la fecha para los recuerdos de una boda o un bautizo, o el personaje favorito del festejado en un cumpleaños. Puedes usarlos para sellar bolsitas o cajas de regalo, o para acompañar un detalle de mesa. Si prefieres una foto, también se puede: la convertimos en sticker troquelado.",
          "Si organizas el evento de otra persona, como wedding planner o planner de eventos, mándanos por WhatsApp el diseño que aprobó tu clienta, la cantidad y la fecha. Trabajamos con prueba digital y trato directo, así cada evento queda con su propio diseño y sin sorpresas.",
          "Antes de producir te mandamos una prueba digital. Como se produce sobre pedido, pide con margen antes de tu fecha y revisa los tiempos en la guía de cuánto tarda un pedido.",
        ],
      },
      {
        heading: "Cuánto antes pedir tus stickers personalizados",
        body: [
          "Pide con margen: el pedido se produce sobre pedido y el reloj empieza cuando apruebas la prueba digital, no cuando pagas. Revisa la guía de cuánto tarda un pedido de stickers personalizados para ver los tiempos de producción y envío, y cuéntanos la fecha de tu evento por WhatsApp.",
          "Un orden que funciona: primero decide el diseño y la cantidad, luego envía el archivo, revisa la prueba digital con calma (incluye hasta 2 rondas de ajustes) y solo entonces apruébala. Si es una boda o una fiesta con invitados confirmados, suma unos cuantos extra por si llega alguien más.",
        ],
      },
      {
        heading: "Dónde imprimir stickers personalizados en Guadalajara y el resto de México",
        body: [
          "Producimos en Guadalajara, Jalisco, y enviamos a todo México; si estás en la zona metropolitana puedes recoger en una de las 11 sucursales Casa Blanca. Todo el proceso es a distancia, así que pedir desde otra ciudad es igual de fácil.",
          "Si recoges en Guadalajara, la entrega en sucursal también es gratis desde $750 MXN. Para el resto del país, el envío es gratis desde esa misma cantidad.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["yume-vs-imprentas-online-stickers", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
    faq: [
      {
        q: "¿Cuántos stickers mínimo puedo pedir?",
        a: "El mínimo es de 40 piezas en stickers de vinil y de 50 piezas en etiquetas con tu logo. Se venden por cantidad de piezas, no por planilla, y puedes escribir la cantidad exacta que necesitas.",
      },
      {
        q: "¿Cuánto cuestan 100 stickers personalizados?",
        a: "Primeras 100 piezas: $350 en stickers de vinil y $300 en etiquetas con tu logo. Pasando de 100 piezas es precio mayoreo y cada pieza extra baja 10%. Por ejemplo, 150 piezas de vinil son $507.50 y 200 piezas son $665.",
      },
      {
        q: "¿Qué archivo debo enviar para imprimir mis stickers?",
        a: "Lo ideal es un archivo vectorial (AI, PDF o SVG). Un PNG o un JPG también sirve si tiene buena resolución al tamaño final. Si solo tienes una foto o un JPG pequeño también se puede trabajar, pero puede necesitar limpieza antes de imprimir.",
      },
      {
        q: "¿Qué resolución necesita la imagen de un sticker?",
        a: "Como referencia, varias imprentas piden al menos 300 PPI al tamaño final de impresión, o un archivo vectorial. Cada imprenta fija su propia especificación, así que confirma la de quien vaya a imprimir.",
      },
      {
        q: "¿Qué es el sangrado en un sticker?",
        a: "Es la parte del diseño que se extiende más allá de la línea de corte para evitar un borde blanco si el corte se mueve un poco. Según la imprenta va desde unos 1.6 mm hasta unos 3 mm, por eso conviene pedir su plantilla.",
      },
      {
        q: "¿Qué diferencia hay entre troquelado y semitroquelado?",
        a: "El troquelado corta el material y el respaldo siguiendo la silueta, y deja cada sticker individual. El semitroquelado corta solo el material y deja el respaldo. En Yume eliges uno u otro al pedir y el precio es el mismo.",
      },
      {
        q: "¿Veo cómo quedan antes de imprimir?",
        a: "Sí. Te mandamos una prueba digital, normalmente en un máximo de 24 horas después de tu pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Los stickers resisten el agua y el sol?",
        a: "Los stickers de vinil son de vinil premium resistente al agua, al sol y a rayones. Las etiquetas con tu logo son resistentes al agua.",
      },
      {
        q: "¿Puedo elegir troquelado o semitroquelado y el acabado?",
        a: "Sí, eliges el tipo de corte (troquelado o semitroquelado) y el acabado (mate, brillante u holográfico) al pedir. El holográfico suma un costo extra por pieza; los demás no.",
      },
      {
        q: "¿Puedo hacer stickers con la foto de mi mascota o un personaje?",
        a: "Sí. Envíanos la foto o la referencia y te preparamos una prueba digital antes de imprimir. También puedes pedirlos con personajes o diseños propios.",
      },
      {
        q: "¿Puedo pedir stickers para una boda o un evento?",
        a: "Sí. Puedes pedirlos con los nombres de los festejados, una fecha o un diseño de la ocasión, desde 40 piezas en vinil. Cuéntanos la fecha de tu evento por WhatsApp y revisamos contigo los tiempos.",
      },
      {
        q: "¿Hacen envíos a todo México y hay recolección en Guadalajara?",
        a: "Sí. El envío a todo México es gratis desde $750 MXN. Si estás en Guadalajara o su zona metropolitana, puedes recoger en una de las 11 sucursales Casa Blanca, también gratis desde $750 MXN.",
      },
    ],
  },
  {
    slug: "cuanto-tarda-un-pedido-de-stickers-personalizados",
    title: "¿Cuánto tarda un pedido de stickers personalizados en llegar? Tiempos reales",
    metaTitle: "Cuánto tarda un pedido de stickers personalizados",
    description:
      "Cuánto tarda un pedido de stickers personalizados en Yume: prueba digital, producción y envío a todo México o recolección en Guadalajara.",
    category: "Guías",
    publishedAt: "2026-10-06",
    modifiedAt: "2026-10-29",
    intro:
      "Si necesitas tus stickers para una fecha, ya sea una boda, un cumpleaños, un baby shower, un evento de tu empresa o un lanzamiento, lo primero es saber cuántos días tarda cada etapa. Estos son los tiempos reales de un pedido en Yume, desde que pagas hasta que lo tienes en tus manos, y cómo contar hacia atrás desde tu fecha para pedir a tiempo.",
    sections: [
      {
        heading: "¿Cuánto tarda en llegar un pedido de stickers personalizados?",
        body: [
          `Desde que apruebas la prueba digital, un pedido tarda ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en llegar a tu domicilio en cualquier parte de México, o ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles si lo recoges en una sucursal Casa Blanca en Guadalajara. La prueba digital llega normalmente en un máximo de 24 horas después del pago.`,
          "La cuenta completa tiene cuatro partes: la prueba digital, tu aprobación, la producción y el envío o la recolección. La tabla muestra el tiempo de cada etapa; el total empieza a contar cuando apruebas la prueba, no cuando pagas.",
        ],
        table: {
          headers: ["Etapa", "Tiempo"],
          rows: [
            ["Prueba digital (incluye hasta 2 rondas de ajustes)", "Normalmente en un máximo de 24 horas después del pago"],
            ["Producción", `${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba`],
            ["Envío a domicilio (todo México)", `${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles`],
            ["Recolección en sucursal Casa Blanca (Guadalajara)", `${PICKUP_EXTRA_DAYS} día hábil`],
            ["Total desde que apruebas la prueba", `${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles a domicilio · ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} en sucursal`],
          ],
        },
      },
      {
        heading: "Las etapas de tu pedido, una por una",
        body: [
          "Un pedido de stickers pasa por la prueba digital, tu aprobación, la producción y la entrega, ya sea a domicilio o en sucursal. La prueba llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. Nada se imprime sin tu aprobación, y el reloj de producción empieza cuando la apruebas.",
          "Prueba digital: es la imagen de cómo quedará tu sticker. Si quieres un cambio, puedes pedirlo, hasta 2 rondas de ajustes.",
          `Producción: cuando apruebas la prueba, tu pedido entra a producción, que toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles.`,
          `Entrega: el envío a domicilio a todo México suma de ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles. Si recoges en una sucursal Casa Blanca de Guadalajara, se suma ${PICKUP_EXTRA_DAYS} día hábil.`,
        ],
      },
      {
        heading: "Qué hace que tarde más o menos",
        body: [
          "Lo que más mueve el plazo es qué tan rápido apruebas la prueba digital, porque el reloj de producción empieza ahí y no cuando pagas. Los días son hábiles: los fines de semana no cuentan, y los festivos tampoco están contados en la estimación, así que es un cálculo aproximado.",
          "Si pides ajustes en la prueba, tu aprobación puede llegar más tarde, y con ella el inicio de la producción. Tener tu logo o diseño listo desde el principio (en PNG, PDF, AI o SVG) evita idas y vueltas.",
          "El pago también importa: la prueba llega normalmente en un máximo de 24 horas después de pagar. Elegir envío a domicilio o recolección en Guadalajara cambia el total, como ves en la tabla.",
        ],
      },
      {
        heading: "Cómo planear hacia atrás desde la fecha de tu evento",
        body: [
          `Parte de la fecha de tu evento y cuenta hacia atrás: primero el envío o la recolección, luego los ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles de producción y, antes de todo, los días que tardes en aprobar la prueba digital. Con esa suma sabes qué día debes pagar, y conviene dejar un margen por si pides un ajuste.`,
          `En un envío a domicilio, la estimación va de ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles desde la aprobación; en recolección, de ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS}. A esa cifra súmale los días que tardes tú en revisar y aprobar la prueba.`,
          "Esta cuenta sirve para una boda, un cumpleaños, un baby shower o un evento de empresa. Si organizas varios eventos, haz la misma cuenta para cada uno, con su propia fecha. Para fechas con mucha demanda, como Navidad o graduaciones, conviene pedir con al menos dos semanas de anticipación.",
          "Cuando tengas la fecha clara, elige entre [stickers de vinil personalizados](/productos/stickers-vinil-impermeable), para cualquier diseño, personaje o foto, y [stickers con tu logo](/productos/stickers-logo-personalizado), para tu marca o tu evento.",
        ],
      },
      {
        heading: "Qué avisarnos si tu pedido es para un evento",
        body: [
          "Si tu pedido es para una boda, un cumpleaños, un baby shower o un evento de tu empresa, avísanos la fecha desde el primer mensaje. Con ese dato revisamos contigo si el calendario alcanza, antes de que pagues. Es la forma más segura de evitar sorpresas cuando el evento no se puede mover.",
          "Si tu fecha es muy justa, escríbenos por WhatsApp antes de pagar y revisamos juntos si alcanza. Cuéntanos también si prefieres envío a domicilio o recolección en Guadalajara, porque cambia la cuenta.",
          "Si todavía estás comparando opciones, revisa [dónde imprimir stickers en México](/blog/donde-imprimir-stickers-personalizados-mexico) y [Yume frente a otras imprentas](/blog/yume-vs-imprentas-online-stickers).",
        ],
      },
      {
        heading: "¿Y si estoy en Guadalajara?",
        body: [
          "Puedes elegir recoger tu pedido en una de las sucursales Casa Blanca de la zona metropolitana: se suma solo 1 día hábil a la producción. La recolección cuesta $20 MXN y es gratis en compras de $750 MXN o más, igual que el envío a domicilio.",
          "Son 11 sucursales Casa Blanca en la zona metropolitana de Guadalajara, así que puedes elegir la que te quede más cerca.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["donde-imprimir-stickers-personalizados-mexico", "yume-vs-imprentas-online-stickers"],
    faq: [
      {
        q: "¿Cuánto tarda un pedido de stickers personalizados?",
        a: `Desde que apruebas la prueba digital, tarda ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles a domicilio en cualquier parte de México, o ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles si recoges en una sucursal Casa Blanca en Guadalajara.`,
      },
      {
        q: "¿Cuándo empieza a contar el tiempo de producción?",
        a: "Empieza cuando apruebas la prueba digital, no cuando pagas. Cuanto más rápido la revises y apruebes, antes entra tu pedido a producción.",
      },
      {
        q: "¿Cuánto tarda la prueba digital?",
        a: "La prueba digital llega normalmente en un máximo de 24 horas después de tu pago, e incluye hasta 2 rondas de ajustes.",
      },
      {
        q: "¿Se imprime algo antes de que apruebe la prueba?",
        a: "No. No imprimimos nada sin tu aprobación de la prueba digital.",
      },
      {
        q: "¿Los fines de semana y los festivos cuentan en los plazos?",
        a: "Los plazos son en días hábiles, así que los fines de semana no cuentan. Los días festivos no están contados en la estimación, por eso es un cálculo aproximado.",
      },
      {
        q: "¿Cuánto tarda si recojo mi pedido en Guadalajara?",
        a: `Se suma ${PICKUP_EXTRA_DAYS} día hábil a la producción si recoges en una sucursal Casa Blanca de la zona metropolitana de Guadalajara. La recolección cuesta $20 MXN y es gratis en compras de $750 MXN o más.`,
      },
      {
        q: "¿Qué hago si mi evento tiene una fecha muy justa?",
        a: "Escríbenos por WhatsApp antes de pagar, con la fecha de tu evento, y revisamos juntos si alcanza.",
      },
    ],
  },
  {
    slug: "troquelado-vs-semitroquelado-stickers",
    title: "Troquelado vs semitroquelado: qué tipo de corte elegir para tus stickers",
    metaTitle: "Troquelado vs semitroquelado: cuál elegir en stickers",
    description:
      "Troquelado vs semitroquelado (die cut y kiss cut): cuál elegir para souvenirs, regalos y eventos, y cómo pedirlo en Yume con prueba digital antes de imprimir.",
    category: "Guías",
    publishedAt: "2026-10-16",
    modifiedAt: "2026-10-26",
    intro:
      "Al pedir stickers personalizados te topas con dos palabras: troquelado y semitroquelado. En Yume hacemos los dos y tú eliges al pedir. Esta guía explica qué es cada uno, en qué se diferencian y cuál te conviene según el uso que le vas a dar, sea un souvenir de boda, un detalle para tus invitados, un regalo o el empaque de tu marca.",
    sections: [
      {
        heading: "¿Qué es un sticker troquelado y qué es uno semitroquelado?",
        body: [
          "El sticker troquelado (die cut) se corta por completo, vinil y base juntos, y lo recibes suelto. El semitroquelado (kiss cut) se corta solo en el vinil y llega pegado a su hoja de respaldo. En los dos, la forma sigue el contorno de tu diseño.",
          "Un sticker troquelado (en inglés, die cut) se corta por completo siguiendo el contorno del diseño: el vinil y su base se cortan juntos, así que recibes cada sticker suelto, con la forma exacta de tu logo, personaje o foto.",
          "Un sticker semitroquelado (en inglés, kiss cut) se corta solo en el vinil, sin atravesar la hoja base. El contorno queda marcado, pero los stickers siguen pegados a su hoja de respaldo y los despegas uno por uno cuando los vas a usar.",
        ],
        table: {
          headers: ["Aspecto", "Troquelado (die cut)", "Semitroquelado (kiss cut)"],
          rows: [
            ["Qué se corta", "Vinil y base, por completo", "Solo el vinil; la base queda entera"],
            ["Cómo lo recibes", "Cada sticker suelto", "Stickers sobre su hoja de respaldo"],
            ["Forma del sticker", "La del diseño", "La del diseño"],
          ],
        },
      },
      {
        heading: "¿Cuál conviene según el uso?",
        body: [
          "Elige troquelado si el sticker se entrega o se pega de uno en uno, y semitroquelado si quieres tenerlos juntos y protegidos hasta usarlos. Los dos usan el mismo vinil premium y la misma forma de tu diseño: lo que cambia es el corte y cómo recibes el pedido.",
          "El troquelado tiene sentido cuando el sticker se va a entregar o pegar de uno en uno: un sello para cerrar una bolsa, una etiqueta para un producto, un regalo para un cliente. Llega listo para despegar, sin hoja de por medio.",
          "El semitroquelado tiene sentido cuando quieres tener tus stickers juntos y protegidos hasta usarlos: para llevarlos a un bazar o una feria, repartirlos en un evento o guardar una cantidad para ir usándola. La hoja de respaldo los mantiene ordenados y limpios.",
          "Si no estás seguro, piensa en cómo vas a usarlos: uno por uno, o en tanda.",
        ],
      },
      {
        heading: "¿Qué corte conviene para souvenirs, bodas y eventos?",
        body: [
          "Para un evento, el troquelado suele ser lo más práctico si cada invitado se lleva su sticker, y el semitroquelado si tú o tu planner van a repartirlos o a colocarlos en la mesa. Es una guía de uso, no una regla: cualquiera de los dos funciona en un evento.",
          "Imagina un sticker con el nombre de los novios y la fecha para cerrar la bolsita de un recuerdo, o uno con el nombre del festejado para la mesa de dulces. En esos casos el troquelado llega listo para pegar, sin que nadie tenga que cortar nada.",
          "Si vas a armar los detalles con calma antes del evento, por ejemplo pegando un sticker en cada caja o bolsa en una tarde, el semitroquelado te los deja ordenados en su hoja mientras trabajas. Para ver más ideas de uso en bodas, XV años y fiestas, lee nuestra guía de stickers para bodas, eventos y fiestas.",
        ],
      },
      {
        heading: "¿Qué corte conviene para tu marca, empaque o regalos?",
        body: [
          "Si vas a sellar empaques o pegar etiquetas una por una, el troquelado te ahorra pasos. Si vas a llevar stickers a una feria o repartirlos en tanda, el semitroquelado los mantiene juntos. En ambos casos eliges el corte en la página del producto antes de pagar.",
          "Para el logo de tu negocio, la opción es Stickers y Etiquetas con tu Logo. Para un personaje, una mascota, una foto o cualquier otro diseño, es Stickers de Vinil Personalizados. Los dos aceptan los dos cortes, así que la decisión del producto y la del corte son independientes.",
          "Si tu duda es entre vinil y papel, revisa la comparación de stickers de vinil vs papel. En Yume trabajamos solo vinil, así que el corte es la decisión de diseño que te queda por tomar.",
        ],
      },
      {
        heading: "Cómo elegir el tipo de corte al pedir",
        body: [
          "Eliges el corte, Troquelado o Semitroquelado, en la página del producto antes de agregar al carrito, junto con el acabado: mate, brillante u holográfico. Lo que elijas queda guardado en tu pedido, y antes de imprimir recibes una prueba digital para confirmar cómo se ve.",
          "Las páginas de producto son Stickers de Vinil Personalizados y Stickers y Etiquetas con tu Logo. El acabado holográfico tiene un costo extra de $0.50 por pieza, que ves al elegirlo.",
          "Si tienes dudas sobre cuál te conviene para tu caso, escríbenos por WhatsApp antes de pagar y lo revisamos contigo.",
        ],
      },
      {
        heading: "¿Cuánto cuestan los stickers troquelados y semitroquelados?",
        body: [
          `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} MXN en Stickers de Vinil Personalizados y $${priceOf("stickers-logo-personalizado", 100)} MXN en Stickers y Etiquetas con tu Logo. Pasando las 100, cada pieza extra va a precio mayoreo. El mínimo de compra es de 40 piezas en vinil y de 50 en etiquetas con logo.`,
          "Elegir troquelado o semitroquelado no cambia el precio base que ves en la tabla. Pide la cantidad exacta que necesitas: la eliges o la escribes al hacer tu pedido.",
        ],
        table: {
          headers: ["Piezas", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "¿Cuánto tarda mi pedido y cómo lo recibo?",
        body: [
          `Desde que apruebas la prueba digital, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles. Producimos en Guadalajara y enviamos a todo México.`,
          `El envío cuesta $${NATIONAL_SHIPPING_PRICE} MXN y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más. Si tu evento tiene fecha, calcula estos días hacia atrás y deja margen para la prueba digital, que llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. Para más detalle, lee cuánto tarda un pedido de stickers personalizados.`,
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre troquelado y semitroquelado?",
        a: "El troquelado se corta por completo, vinil y base, y lo recibes suelto. El semitroquelado se corta solo en el vinil y llega pegado a su hoja de respaldo. En ambos casos la forma sigue el contorno de tu diseño.",
      },
      {
        q: "¿Qué significan die cut y kiss cut?",
        a: "Son los nombres en inglés: die cut es troquelado y kiss cut es semitroquelado.",
      },
      {
        q: "¿Puedo elegir el corte al pedir?",
        a: "Sí. En la página de Stickers de Vinil Personalizados y de Stickers y Etiquetas con tu Logo eliges Troquelado o Semitroquelado antes de agregar al carrito.",
      },
      {
        q: "¿El corte cambia el material o el precio?",
        a: "No. Los dos cortes se hacen en el mismo vinil premium. El corte es una decisión de diseño y uso, no cambia el precio base de la tabla.",
      },
      {
        q: "¿Qué acabados puedo elegir?",
        a: "Mate, brillante u holográfico. El holográfico cuesta $0.50 más por pieza.",
      },
      {
        q: "¿Cuánto cuestan?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} MXN en vinil y $${priceOf("stickers-logo-personalizado", 100)} MXN en etiquetas con logo. Pasando las 100 es precio mayoreo. El mínimo es de 40 piezas en vinil y de 50 en etiquetas con logo.`,
      },
      {
        q: "¿Veo cómo queda antes de imprimir?",
        a: "Sí. Recibes una prueba digital, normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Cuánto tarda y cuánto cuesta el envío?",
        a: `Desde que apruebas la prueba, llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles. El envío cuesta $${NATIONAL_SHIPPING_PRICE} MXN y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} MXN o más.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "stickers-para-bodas-eventos-y-fiestas", "cuanto-tarda-un-pedido-de-stickers-personalizados", "donde-imprimir-stickers-personalizados-mexico"],
  },
  {
    slug: "cuanto-duran-los-tatuajes-temporales-y-como-quitarlos",
    title: "¿Cuánto duran los tatuajes temporales y cómo se quitan?",
    metaTitle: "Cuánto duran los tatuajes temporales y cómo quitarlos",
    description:
      "Cuánto duran los tatuajes temporales, de qué depende, cómo aplicarlos y quitarlos con aceite, y por qué conviene evitar la henna negra.",
    category: "Guías",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-29",
    intro:
      "Cuánto duran los tatuajes temporales es la duda más común antes de una fiesta, una boda o una activación. La respuesta corta: los de transferencia con agua duran de horas a unos días, según la zona del cuerpo y cuánto se froten. Aquí encuentras de qué depende la duración, cómo aplicarlos, cómo quitarlos con calma y una alerta sobre la henna negra.",
    sections: [
      {
        heading: "¿Cuánto duran los tatuajes temporales?",
        body: [
          "Los tatuajes temporales de transferencia con agua duran al menos 48 horas si no se frotan, según la ficha del papel que usamos. Algunas tiendas de tatuajes temporales dan un rango de 3 a 7 días para calcomanías. Es una referencia, no una garantía: depende de la zona del cuerpo y del roce.",
          "Para una fiesta, una boda o una activación de un día sobra tiempo: son tatuajes pensados para celebraciones, no para durar semanas. Lo que más los acorta es el roce constante, la ropa apretada y cualquier aceite, crema o alcohol que toque el tatuaje.",
        ],
      },
      {
        heading: "Qué cambia la duración: zona del cuerpo y tipo de producto",
        body: [
          "La duración cambia sobre todo con la zona del cuerpo y con el tipo de producto. Donde hay roce, sudor o aceite el tatuaje se gasta antes; donde casi no hay fricción aguanta más. Una calcomanía, una tinta semipermanente y la henna no duran lo mismo, así que conviene saber cuál tienes.",
          "En partes que se mueven o se rozan con la ropa, como la muñeca, el cuello o las rodillas, se desgastan antes. En el brazo o la pierna, con menos fricción, aguantan más. Las tiendas mencionan 1 a 3 días en zonas con aceite, sudor o roce, y 5 a 7 días o más en zonas de poco roce.",
          "Según esas mismas tiendas, la calcomanía de agua dura 3 a 7 días, la tinta semipermanente puede llegar a 10 o 14 días o más, y la henna dura más que una calcomanía. Son cifras de vendedores, sin estudio independiente, así que tómalas como orientación.",
        ],
      },
      {
        heading: "Cómo se aplican, paso a paso",
        body: [
          "Se aplican en cuatro pasos: retira la película de plástico, coloca el tatuaje con el diseño hacia la piel limpia y seca, humedece bien el papel con agua y presiona 20 a 30 segundos, y retira el papel con suavidad. Espera unos segundos a que seque antes de tocar el tatuaje.",
          "Ese es el procedimiento de la tarjeta de instrucciones que usamos en Yume. Dos detalles ayudan a que quede mejor: piel limpia, seca y sin crema antes de aplicar, y no mover el papel mientras lo presionas.",
        ],
      },
      {
        heading: "Cómo preparar la piel para que duren más",
        body: [
          "Para que duren más, las guías de tiendas recomiendan lavar la piel con agua y jabón, secarla por completo y no poner crema ni aceite antes, porque funcionan como barrera contra el adhesivo. También sugieren evitar el roce, el sol y el agua después de aplicar. Es consejo de vendedores, no de un estudio.",
          "Si vas a usar el tatuaje en una fiesta, aplícalo con la piel recién lavada y seca, y deja las cremas y los aceites para después, cuando quieras quitarlo.",
        ],
      },
      {
        heading: "Cómo se quitan los tatuajes temporales",
        body: [
          "Para quitarlo, lo habitual es usar aceite de bebé, de coco o de oliva: se aplica sobre el tatuaje, se deja actuar un momento, se frota suave con algodón y se lava con agua y jabón. No hace falta raspar ni usar objetos.",
          "El alcohol isopropílico es más fuerte y reseca la piel. Úsalo con moderación, pruébalo antes en una zona pequeña, no lo acerques a los ojos ni a mucosas y no lo uses sobre piel irritada.",
          "Después de quitar el tatuaje, conviene hidratar la piel. Repite el paso con aceite si todavía queda diseño.",
        ],
      },
      {
        heading: "Henna negra: por qué no es lo mismo que un tatuaje temporal",
        body: [
          "La «henna negra» no es lo mismo que un tatuaje temporal de transferencia. La FDA de Estados Unidos advierte que suele oscurecerse con PPD (parafenilendiamina), un tinte de cabello que la ley de ese país no permite en cosméticos para la piel. Es una advertencia estadounidense, no una norma mexicana.",
          "Las reacciones pueden aparecer de inmediato o hasta 2 a 3 semanas después. Incluyen enrojecimiento, ampollas, lesiones con secreción, pérdida de pigmento, más sensibilidad al sol y cicatrices permanentes; algunos casos necesitaron atención de urgencias. Quien se sensibiliza puede reaccionar también al látex, a tintes de cabello y a colorantes textiles.",
          "La FDA indica además que la henna tradicional está aprobada solo para el cabello, no para la piel.",
        ],
      },
      {
        heading: "Dónde se pueden poner y qué precauciones tener",
        body: [
          "En las fotos de nuestros pedidos se ven aplicados en el brazo, la muñeca, la mano, el cuello y la pierna. Son de uso externo: no se aplican en los ojos ni sobre piel lastimada. Si tienes piel sensible o alergias, prueba primero con uno pequeño; en niños, que un adulto los aplique y supervise.",
          "El fabricante del papel no indica una edad mínima ni publica certificaciones dermatológicas, así que preferimos decirlo tal cual en lugar de prometer lo que no podemos comprobar.",
        ],
      },
      {
        heading: "Tatuajes temporales personalizados para fiestas y eventos",
        body: [
          "En Yume hacemos tatuajes temporales a la medida con tu logo, tu diseño o tus fotos: estampillas, personajes, fotos de pareja o de infancia. Se cotizan por WhatsApp según diseño, tamaño y cantidad. La producción toma 2 a 3 días hábiles después del anticipo del 50% y enviamos a todo México o puedes recogerlos en Guadalajara.",
          "Puedes ver el servicio en [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados).",
          "Más ideas: [tatuajes para eventos](/blog/tatuajes-temporales-personalizados-para-eventos), [tatuajes para bodas](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas) y [stickers de vinil](/productos/stickers-vinil-impermeable) con el mismo diseño.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["tatuajes-temporales-personalizados-para-eventos", "tatuajes-temporales-para-boda-eventos-y-fiestas"],
    faq: [
      {
        q: "¿Cuánto duran los tatuajes temporales?",
        a: "El fabricante del papel de transferencia que usamos indica que duran al menos 48 horas si no se frotan. Algunas tiendas dan un rango de 3 a 7 días para calcomanías. Es una referencia: cambia con la zona del cuerpo y el roce.",
      },
      {
        q: "¿Qué acorta la duración de un tatuaje temporal?",
        a: "El roce constante, la ropa apretada, el sudor y cualquier aceite, crema o alcohol que toque el tatuaje. Las tiendas de tatuajes temporales mencionan 1 a 3 días en zonas con aceite, sudor o roce.",
      },
      {
        q: "¿Cómo se quita un tatuaje temporal?",
        a: "Con aceite corporal, de bebé, de coco o de oliva: se aplica, se deja actuar un momento, se frota suave con algodón y se lava con agua y jabón. No hace falta raspar. Después conviene hidratar la piel.",
      },
      {
        q: "¿Puedo quitarlo con alcohol?",
        a: "El alcohol isopropílico es más fuerte y reseca la piel. Úsalo con moderación, prueba antes en una zona pequeña, no lo acerques a los ojos ni a mucosas y no lo uses sobre piel irritada.",
      },
      {
        q: "¿Qué es la henna negra y por qué se advierte sobre ella?",
        a: "Según la FDA de Estados Unidos, la henna negra suele oscurecerse con PPD, un tinte de cabello que la ley de ese país no permite en cosméticos para la piel. Las reacciones pueden aparecer hasta 2 a 3 semanas después.",
      },
      {
        q: "¿Se pueden poner a niños?",
        a: "Son de uso externo. Si hay piel sensible o alergias, prueba primero con uno pequeño, y en niños que un adulto los aplique y supervise. El fabricante del papel no indica una edad mínima.",
      },
      {
        q: "¿Cuánto tarda un pedido de tatuajes temporales personalizados?",
        a: "La producción toma 2 a 3 días hábiles después del anticipo del 50%. Se cotizan por WhatsApp según diseño, tamaño y cantidad, y enviamos a todo México o puedes recogerlos en Guadalajara.",
      },
    ],
    serviceLink: { href: "/productos/tatuajes-temporales-personalizados", label: "Ver tatuajes temporales personalizados" },
    quoteMessage: "Hola, quiero cotizar tatuajes temporales personalizados.\n\nTamaño:\nCantidad:\n¿Ya tengo diseño? (sí / no):",
    sources: [
      { label: "Ficha del papel de transferencia MECOLOUR en Amazon (duración: al menos 48 horas sin frotar)", url: "https://www.amazon.com/dp/B09C25DL8G" },
      { label: "Practical Dermatology: la FDA advierte sobre los riesgos de los tatuajes de henna negra", url: "https://practicaldermatology.com/news/fda-warns-public-about-black-henna-tattoo-risks/2458159/" },
      { label: "Temporary Tattoos: cuánto dura un tatuaje temporal (referencia de tienda)", url: "https://www.temporarytattoos.com/blogs/news/how-long-does-a-temporary-tattoo-last" },
      { label: "Temporary Tattoos: cuánto duran según la zona del cuerpo (referencia de tienda)", url: "https://www.temporarytattoos.com/blogs/news/how-long-do-temporary-tattoos-last" },
      { label: "Temporary Tattoos: cómo hacer que duren más (guía de tienda)", url: "https://www.temporarytattoos.com/blogs/news/how-to-make-temporary-tattoos-last-longer" },
      { label: "Temporalis: cómo quitar un tatuaje temporal (guía comercial)", url: "https://pro.temporalis.tattoo/blogs/magazine/remove-temporary-tattoo" },
    ],
  },
  {
    slug: "etiquetas-escolares-personalizadas-guadalajara",
    title: "Etiquetas escolares personalizadas en Guadalajara: guía para regreso a clases",
    metaTitle: "Etiquetas escolares personalizadas: guía regreso a clases",
    description: `Etiquetas escolares personalizadas en Guadalajara: qué llevan, dónde pegarlas, cuántas pedir. Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}, prueba digital y envío a todo México.`,
    category: "Guías",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-26",
    intro:
      "Las etiquetas escolares son pegatinas con el nombre del niño (y a veces su grupo o un dibujo) para marcar cuadernos, loncheras, botellas y mochilas, y que nada se pierda ni se confunda en el salón. En Yume las hacemos en vinil resistente al agua, con el diseño que tú elijas. Esta guía explica qué llevan, en qué útiles se pegan, cuántas conviene pedir, cuánto cuestan, cuándo hacer el pedido y cómo llegan a tu casa o a una sucursal en Guadalajara.",
    sections: [
      {
        heading: "Qué se les pone a las etiquetas escolares",
        body: [
          "Una etiqueta escolar lleva, como mínimo, el nombre del niño o la niña en letra grande y fácil de leer. Muchas familias agregan el grado o el grupo, y un dibujo o ícono (una estrella, un animal, un color) para que los más pequeños reconozcan sus cosas aunque todavía no lean.",
          "Para los más grandes funciona mejor algo sencillo: nombre y apellido, con buen contraste entre la letra y el fondo para que se lea de lejos. Si son varios hermanos, pide un color distinto para cada uno: así saben cuál es la suya sin leer.",
          "Si lo prefieres, también puedes poner un teléfono de contacto en las etiquetas de la mochila y la lonchera. Cuéntanos qué quieres incluir y te mandamos una prueba digital antes de imprimir.",
        ],
      },
      {
        heading: "En qué útiles se pegan",
        body: [
          "Las etiquetas escolares se pegan en cuadernos y libros, estuches, loncheras, botellas de agua, termos y mochilas. Como el vinil es resistente al agua, al sol y a los rayones, aguantan bien en objetos que se mojan, se llevan de un lado a otro y se limpian seguido.",
          "Pega la etiqueta sobre una superficie limpia y seca, y mejor en una zona lisa que en una orilla, una costura o una parte con relieve, que es donde se despegan primero. Presiona desde el centro hacia las orillas para sacar el aire y espera un rato antes de mojarla por primera vez.",
          "En la tabla va una guía rápida de dónde conviene poner cada una. Para más detalle sobre botellas, loncheras y mochilas, lee nuestra guía de etiquetas con nombre.",
        ],
        table: {
          headers: ["Útil", "Dónde pegarla"],
          rows: [
            ["Cuadernos y libros", "En la portada, en una zona limpia y plana"],
            ["Estuche", "En una parte lisa por fuera"],
            ["Lonchera", "En la tapa o en un costado liso"],
            ["Botella o termo", "En una parte lisa del cuerpo, lejos de la tapa y de la base"],
            ["Mochila", "En una zona plana por fuera, o por dentro si prefieres que no se vea"],
          ],
        },
      },
      {
        heading: "Etiquetas escolares personalizadas: cómo se piden",
        body: [
          `Se cotizan por WhatsApp: nos mandas el nombre (o los nombres, si son varios hermanos), el diseño que te gusta y cuántas piezas necesitas. Trabajamos con stickers de vinil desde 40 piezas. Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo.`,
          "Te mandamos una prueba digital, normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación. Así se ve el precio por cantidad:",
        ],
        table: {
          headers: ["Piezas", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cuántas etiquetas pedir para el ciclo escolar",
        body: [
          "Una cuenta práctica es contar cada útil de la lista, multiplicarlo por el número de hijos y sumar unas cuantas de repuesto. Como se venden por cantidad de piezas y no por planilla, puedes pedir cerca del número real que necesitas, con un mínimo de 40 piezas.",
          "Un ejemplo de la cuenta: si un niño lleva 10 cuadernos, un estuche, una lonchera, una botella y una mochila, son 14 etiquetas; con dos hermanos, 28, y con unas de repuesto llegas a 40 piezas.",
          "Si ya tienes la lista de útiles, escríbenos con ella y te ayudamos a calcular cuántas etiquetas necesitas. Para entender qué formato te conviene, también puedes revisar la diferencia entre vinil y papel y cómo se piden las etiquetas en rollo, hoja o por pieza.",
        ],
      },
      {
        heading: "Cuándo pedirlas y cómo recibirlas en Guadalajara",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, el pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}; en compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Conviene pedirlas con unas semanas de anticipación al inicio del ciclo escolar: así hay margen para ajustar el diseño, la producción y el envío. Producimos en Guadalajara y puedes elegir la sucursal al pagar.`,
          "Para ver con detalle cada etapa, revisa cuánto tarda un pedido de stickers personalizados.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuestan las etiquetas escolares personalizadas?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo: 150 piezas cuestan $${priceOf("stickers-vinil-impermeable", 150)} y 200 piezas $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "40 piezas. Se venden por cantidad de piezas, no por planilla, así que puedes pedir cerca del número que realmente necesitas.",
      },
      {
        q: "¿Las etiquetas resisten el agua?",
        a: "Se imprimen en vinil premium resistente al agua, al sol y a rayones, según la ficha del producto. Aun así, no las raspes ni las dejes en remojo largo.",
      },
      {
        q: "¿Puedo pedir etiquetas con los nombres de varios hermanos?",
        a: "Sí. Mándanos los nombres, el diseño que te gusta y la cantidad, y te enviamos una prueba digital antes de imprimir.",
      },
      {
        q: "¿Veo la etiqueta antes de que se imprima?",
        a: "Sí. La prueba digital llega normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Cuánto tarda el pedido?",
        a: `Desde que apruebas la prueba, llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. En la zona metropolitana de Guadalajara también puedes recoger en una de las ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca por $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["etiquetas-con-nombre-para-botellas-loncheras-y-mochilas", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados", "impresion-de-etiquetas-rollo-hoja-o-por-pieza", "troquelado-vs-semitroquelado-stickers"],
    serviceLink: { href: "/productos/stickers-vinil-impermeable", label: "Ver stickers de vinil personalizados" },
    quoteMessage: "Hola, quiero cotizar etiquetas escolares personalizadas.\n\nNombre(s):\nCantidad aproximada:\n¿Ya tengo diseño? (sí / no):",
  },
  {
    slug: "etiquetas-con-nombre-para-botellas-loncheras-y-mochilas",
    title: "Etiquetas con nombre para botellas, loncheras y mochilas: dónde pegarlas y cómo cuidarlas",
    metaTitle: "Etiquetas con nombre para botellas, loncheras y mochilas",
    description:
      "Dónde pegar etiquetas con nombre en botellas, loncheras y mochilas, cómo aplicarlas para que duren y qué diseño elegir. Vinil resistente al agua.",
    category: "Guías",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-26",
    intro:
      "Una botella, una lonchera o una mochila sin nombre se pierde más fácil, y en un salón donde todos tienen la misma, se confunde. Una etiqueta con nombre lo resuelve en segundos. Esta guía explica dónde pegarla en cada objeto, cómo aplicarla para que dure, cómo cuidarla durante el ciclo escolar, qué diseño elegir, cuántas pedir y cuánto cuestan. Las hacemos en vinil resistente al agua, en Guadalajara, y enviamos a todo México.",
    sections: [
      {
        heading: "Dónde pegar la etiqueta con nombre en cada objeto",
        body: [
          "Pega la etiqueta en una parte lisa y plana de cada objeto: en el cuerpo de la botella o el termo, lejos de la tapa y de la base; en la tapa o en un costado liso de la lonchera; y en una zona plana por fuera de la mochila. Evita costuras, orillas y relieves, donde se despega primero.",
          "Si no quieres que el nombre se vea a simple vista, en la mochila también puedes pegarla por dentro. En el estuche, igual que en la lonchera, elige una parte lisa por fuera. La tabla resume dónde conviene en cada caso.",
        ],
        table: {
          headers: ["Objeto", "Dónde pegarla", "Evita"],
          rows: [
            ["Botella o termo", "En una parte lisa del cuerpo", "Cerca de la tapa y de la base"],
            ["Lonchera", "En la tapa o en un costado liso", "Costuras y orillas"],
            ["Mochila", "En una zona plana por fuera, o por dentro", "Bolsillos con relieve y costuras"],
            ["Estuche", "En una parte lisa por fuera", "Cierres y orillas"],
          ],
        },
      },
      {
        heading: "Cómo aplicar la etiqueta para que dure",
        body: [
          "Limpia y seca la superficie, despega el respaldo sin tocar el adhesivo y presiona desde el centro hacia las orillas para sacar el aire. Después espera un rato antes de mojarla por primera vez. Con ese cuidado, el vinil resistente al agua, al sol y a los rayones aguanta el uso diario.",
          "Primero, limpia el objeto y déjalo secar por completo. El adhesivo necesita una superficie limpia y seca para pegar bien.",
          "Segundo, despega el respaldo con cuidado y trata de no tocar el lado del adhesivo con los dedos. Coloca primero el centro de la etiqueta en el lugar elegido.",
          "Tercero, presiona con el dedo desde el centro hacia las orillas, para que salga el aire y quede pareja. Si la superficie es curva, como una botella, hazlo con calma y por partes.",
          "Por último, deja pasar un rato antes de mojarla o meterla a la mochila. Así el adhesivo se asienta antes del primer uso.",
        ],
      },
      {
        heading: "Cómo cuidar las etiquetas durante el ciclo escolar",
        body: [
          "El vinil que usamos resiste el agua, el sol y los rayones, según la ficha del producto, pero no es indestructible. Para que dure todo el ciclo, no raspes la etiqueta ni dejes el objeto en remojo largo. Si una orilla se levanta, revisa si quedó sobre una costura o un relieve.",
          "Las botellas y los termos son los objetos que más se mojan y se lavan, así que ahí conviene más el cuidado: lávalos con calma y no talles la etiqueta con una esponja áspera. En loncheras y mochilas, que se arrastran y se golpean, la mejor protección es haberlas pegado en una zona plana, lejos de las orillas.",
          "Si cambias de botella o de lonchera a mitad del ciclo, lo práctico es tener unas etiquetas de repuesto desde el principio.",
        ],
      },
      {
        heading: "Qué diseño elegir para una etiqueta con nombre",
        body: [
          "Elige letra grande y colores con buen contraste entre la letra y el fondo, para que el nombre se lea de lejos. A los más chicos les ayuda un dibujo para reconocer sus cosas; para los más grandes funciona mejor algo sencillo con nombre y apellido.",
          "Si son varios hermanos, pide un color distinto para cada uno: así saben cuál es la suya sin leer. También puedes agregar el grado o el grupo, o un teléfono de contacto en las etiquetas de la mochila y la lonchera.",
          "No necesitas tener el diseño listo. Cuéntanos qué nombre y qué estilo te gustan y te mandamos una prueba digital para aprobar antes de imprimir.",
        ],
      },
      {
        heading: "Cuántas etiquetas con nombre pedir",
        body: [
          "Cuenta cada objeto que quieres marcar, multiplícalo por el número de hijos y suma unas cuantas de repuesto. Se venden por cantidad de piezas, no por planilla, con un mínimo de 40 piezas, así que puedes pedir cerca del número que realmente necesitas.",
          "Un ejemplo: una botella, un termo, una lonchera, una mochila y un estuche son 5 etiquetas por niño; con dos hermanos son 10, y con repuestos para cuadernos y libros llegas a las 40 piezas del mínimo. Si además quieres marcar los útiles, lee nuestra guía de etiquetas escolares personalizadas, que incluye la cuenta completa.",
          "Si no sabes cuántas necesitas, escríbenos con tu lista de objetos y te ayudamos a calcularlo.",
        ],
      },
      {
        heading: "Cuánto cuestan las etiquetas con nombre y cómo cotizarlas",
        body: [
          `Las etiquetas de vinil personalizadas empiezan en 40 piezas. Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo. Mándanos por WhatsApp el nombre, el diseño y la cantidad, y te mandamos una prueba digital antes de imprimir.`,
          "La prueba llega normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación. Así se ve el precio por cantidad:",
        ],
        table: {
          headers: ["Piezas", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cuándo llegan y cuánto cuesta el envío",
        body: [
          `Desde que apruebas la prueba, el pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}; en compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Conviene pedirlas con unas semanas de anticipación al inicio de clases. Para ver cada etapa con detalle, revisa cuánto tarda un pedido de stickers personalizados.`,
          "Si te preguntas por qué usamos vinil y no papel, lo explicamos en la guía de vinil vs. papel. Y si lo que buscas son etiquetas para tu negocio y no para la escuela, mira cómo se piden en rollo, hoja o por pieza.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Dónde conviene pegar la etiqueta en una botella?",
        a: "En una parte lisa del cuerpo, lejos de la tapa y de la base. Evita costuras, orillas y relieves, que es donde la etiqueta se despega primero.",
      },
      {
        q: "¿Las etiquetas aguantan el agua?",
        a: "Se imprimen en vinil resistente al agua, al sol y a los rayones, según la ficha del producto. Aun así, no las raspes ni dejes el objeto en remojo largo.",
      },
      {
        q: "¿Cuánto cuestan las etiquetas con nombre?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100, cada pieza extra va a precio mayoreo: 150 piezas cuestan $${priceOf("stickers-vinil-impermeable", 150)} y 200 piezas $${priceOf("stickers-vinil-impermeable", 200)}.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "40 piezas. Se venden por cantidad de piezas, no por planilla, así que puedes pedir cerca del número que necesitas.",
      },
      {
        q: "¿Puedo ver la etiqueta antes de que se imprima?",
        a: "Sí. La prueba digital llega normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Cuánto tarda el pedido?",
        a: `Desde que apruebas la prueba, llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: `Sí, enviamos a todo México por $${NATIONAL_SHIPPING_PRICE}, gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. En la zona metropolitana de Guadalajara también puedes recoger en una de las ${CASABLANCA_BRANCHES.length} sucursales Casa Blanca por $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["etiquetas-escolares-personalizadas-guadalajara", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados", "impresion-de-etiquetas-rollo-hoja-o-por-pieza", "stickers-personalizados-para-mascotas"],
    serviceLink: { href: "/productos/stickers-vinil-impermeable", label: "Ver stickers de vinil personalizados" },
    quoteMessage: "Hola, quiero cotizar etiquetas con nombre para botellas, loncheras y mochilas.\n\nNombre(s):\nCantidad aproximada:\n¿Ya tengo diseño? (sí / no):",
  },
  {
    slug: "impresion-de-etiquetas-rollo-hoja-o-por-pieza",
    title: "Impresión de etiquetas personalizadas: en rollo, en hoja o por pieza",
    metaTitle: "Impresión de etiquetas: en rollo, en hoja o por pieza",
    description:
      "Impresión de etiquetas en rollo, en hoja o por pieza: cuál te conviene según cuántas necesitas y cómo las vas a pegar, con precios reales desde 50 piezas.",
    category: "Guías",
    publishedAt: "2026-10-20",
    intro:
      "Cuando buscas dónde mandar a hacer etiquetas para tu producto o tu negocio, la primera decisión no es el diseño sino el formato: hay imprentas que trabajan etiquetas en rollo, otras que imprimen hojas completas y otras que te entregan cada etiqueta cortada a su forma. Cada formato tiene sentido para un tipo de negocio distinto, y elegir el equivocado es la forma más común de pagar de más o de terminar con etiquetas que no te sirven.",
    sections: [
      {
        heading: "Etiquetas en rollo: para volumen y máquinas etiquetadoras",
        body: [
          "Las etiquetas en rollo se imprimen una tras otra sobre una tira con respaldo y están pensadas para negocios que etiquetan muchos productos iguales: bebidas, alimentos empacados, cosmética en serie. Su ventaja es que se aplican con una máquina etiquetadora o un despachador, sin despegarlas una por una.",
          "La contraparte es que se suelen trabajar en tirajes grandes del mismo diseño: si apenas estás arrancando o cambias de diseño seguido, terminas comprando más de las que vas a usar. En Yume no tenemos etiquetas en rollo en el catálogo; si tu producción usa etiquetadora, escríbenos por WhatsApp antes de pedir y te decimos si podemos ayudarte.",
        ],
      },
      {
        heading: "Etiquetas en hoja: varias en un mismo pliego",
        body: [
          "En hoja, varias etiquetas se imprimen juntas y las despegas a mano. Es el formato de las hojas de etiquetas para impresora de oficina y de muchas imprentas rápidas: práctico cuando tus etiquetas son rectangulares o redondas y las vas a pegar tú.",
          "El límite está en la forma y el material: en hojas estándar sueles elegir entre medidas ya definidas, y si son de papel no aguantan bien el agua ni el roce. Si estás pensando en imprimirlas en casa, en nuestra guía de dónde imprimir stickers personalizados comparamos imprimir tú mismo contra mandarlas a hacer.",
        ],
      },
      {
        heading: "Etiquetas por pieza: cortadas a la forma de tu diseño",
        body: [
          "La tercera opción es la que trabajamos en Yume: cada etiqueta sigue la forma de tu logo o diseño y la pides por cantidad exacta de piezas, no por hoja ni por rollo. Eliges troquelado (cada etiqueta suelta, cortada por completo a su silueta) o semitroquelado (cortada a la forma, pero sobre su hoja de respaldo para despegarla cuando la uses).",
          "Es el formato que mejor le queda a marcas pequeñas y medianas que etiquetan a mano: empaques, bolsas, frascos, velas o cajas de envío. Pides desde 50 piezas con tu logo, sin comprometerte a un tiraje grande, y antes de imprimir te mandamos una prueba digital para aprobar.",
        ],
      },
      {
        heading: "Material y acabado",
        body: [
          "Nuestras etiquetas son de vinil y resistentes al agua; los Stickers de Vinil Personalizados además resisten el sol y los rayones. La diferencia contra el papel se nota sobre todo en productos que se mojan o se manejan mucho, y la explicamos a detalle en nuestra guía de vinil vs. papel.",
          "En acabado eliges mate, brillante u holográfico (el holográfico suma $0.50 por pieza).",
        ],
      },
      {
        heading: "Cuánto cuesta la impresión de etiquetas por pieza",
        body: [
          `Estos son los precios reales de nuestro catálogo. Pasando las 100 piezas, cada pieza extra va a precio mayoreo, 10% menos. El envío va aparte: $${NATIONAL_SHIPPING_PRICE} a todo México o $${CASABLANCA_PRICE} si recoges en una sucursal Casa Blanca de Guadalajara, y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cómo elegir en 4 preguntas",
        body: [
          "¿Cuántas necesitas? Si son decenas o cientos, por pieza. Si son miles del mismo diseño cada mes, vale la pena cotizar en rollo.",
          "¿Cómo las vas a pegar? A mano: por pieza o en hoja. Con máquina etiquetadora: en rollo.",
          "¿Qué forma tiene tu logo? Si no es un rectángulo o un círculo, una etiqueta cortada a su forma se ve mucho mejor que un cuadro con fondo blanco alrededor.",
          "¿Se va a mojar o a manejar mucho? Entonces vinil, no papel.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es mejor, etiquetas en rollo o en hoja?",
        a: "Depende de cómo las aplicas: en rollo si usas máquina etiquetadora o despachador y pides tirajes grandes del mismo diseño; en hoja o por pieza si las pegas a mano y necesitas cantidades más chicas.",
      },
      {
        q: "¿Cuál es el mínimo para imprimir etiquetas en Yume?",
        a: "50 piezas en las Etiquetas con tu Logo y 40 piezas en los Stickers de Vinil Personalizados.",
      },
      {
        q: "¿Cuánto cuestan 100 etiquetas personalizadas?",
        a: `100 etiquetas con tu logo cuestan $${priceOf("stickers-logo-personalizado", 100)} y 100 stickers de vinil con tu diseño cuestan $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100 piezas, cada pieza extra va a precio mayoreo.`,
      },
      {
        q: "¿Imprimen etiquetas en rollo?",
        a: "No tenemos etiquetas en rollo en el catálogo: trabajamos etiquetas troqueladas o semitroqueladas por pieza. Si tu producción usa etiquetadora, escríbenos por WhatsApp antes de pedir.",
      },
      {
        q: "¿Las etiquetas resisten el agua?",
        a: "Sí, todas nuestras etiquetas y stickers son de vinil resistente al agua.",
      },
      {
        q: "¿Cuánto tarda la impresión de mis etiquetas?",
        a: `La prueba digital llega en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca (Guadalajara) en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "troquelado-vs-semitroquelado-stickers", "donde-imprimir-stickers-personalizados-mexico"],
  },
  {
    slug: "etiquetas-navidenas-personalizadas",
    title: "Etiquetas navideñas personalizadas para regalos y botellas",
    metaTitle: "Etiquetas navideñas personalizadas: PDF gratis o vinil",
    description:
      "Etiquetas navideñas personalizadas en vinil para regalos, botellas y empaques, o descarga gratis el PDF para imprimir. Hechas en Guadalajara.",
    category: "Guías",
    publishedAt: "2026-10-19",
    modifiedAt: "2026-10-29",
    intro:
      "Una etiqueta navideña con el nombre de la familia, un mensaje o el logo de tu negocio convierte cualquier regalo, botella o bolsita de aguinaldo en algo hecho especialmente para quien lo recibe. Las etiquetas navideñas personalizadas de Yume se hacen en vinil, con tu diseño y en la forma que quieras. Aquí va qué se les pone, en qué se usan, qué material elegir, cuánto cuestan y hasta cuándo conviene pedirlas para que lleguen antes de Navidad.",
    sections: [
      {
        heading: "Qué llevan las etiquetas navideñas personalizadas",
        body: [
          "Las etiquetas navideñas personalizadas llevan un mensaje corto y un dibujo de temporada: un pino, una esfera, una estrella o un muñeco de nieve. También puedes sumar el nombre de cada persona, una foto o el logo de tu negocio con un toque navideño. Tú dices qué quieres decir y te mandamos una prueba digital.",
          "Algunos mensajes que funcionan bien son “Feliz Navidad”, “Con cariño de la familia López” o “Felices fiestas 2026”. Si es para una posada o una cena con invitados, el nombre de cada persona en su regalo o en su copa hace que la mesa se vea pensada y que cada quien se lleve un detalle con su nombre.",
          "La prueba digital llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
        ],
      },
      {
        heading: "En qué se usan las etiquetas para regalos y botellas",
        body: [
          "Las etiquetas navideñas se usan sobre todo en regalos, botellas, bolsitas de aguinaldo y dulceros de posada. También sirven para empaques y cajas de pedidos de diciembre. Como son de vinil, resistentes al agua, aguantan botellas que salen del refrigerador o bolsas que se mojan.",
          "Para regalos van en la caja o la bolsa, en vez de la tarjetita de papel que se pierde. Para botellas de vino, ponche o licor que vas a regalar, una etiqueta con el nombre de quien la recibe cambia por completo la presentación. En las bolsitas de aguinaldo y en los dulceros de la posada, la misma etiqueta une todo el set. Si quieres dulceros, revisa los [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
          "Si tienes un negocio, puedes ponerlas en los empaques, bolsas y cajas de tus pedidos de diciembre, o en los regalos para tus clientes. Aquí hay más ideas de [stickers para empaques](/blog/stickers-para-empaques-de-negocio). Si eres planner y organizas varios eventos, te preparamos las piezas de cada evento con prueba digital y trato directo por WhatsApp.",
        ],
      },
      {
        heading: "Qué etiqueta elegir según dónde va a estar",
        body: [
          "Si la etiqueta va en una botella con hielo o refrigerador, en una bolsa que se moja o en algo que se maneja mucho, elige vinil: es resistente al agua, al sol y a rayones. Si es una hoja para pocos regalos en interior, el PDF gratis puede bastar.",
          "Para el logo de tu negocio, usa las [etiquetas con tu logo](/productos/stickers-logo-personalizado). Para nombres, personajes, mascotas o fotos, elige los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable). Es el mismo tipo de vinil, con distinto mínimo y escalón de precio.",
          "Antes de producir verás la prueba digital con tu diseño, con hasta 2 rondas de ajustes, así que puedes revisar mensaje, nombre y colores sin riesgo antes de aprobar.",
        ],
      },
      {
        heading: "Etiquetas navideñas para imprimir gratis",
        body: [
          "Descarga nuestra hoja gratis en PDF: trae 12 etiquetas por hoja con espacio para “Para” y “De”, en una versión a color y otra en blanco y negro para que los niños las coloreen. Imprímela en tamaño carta, en cartulina o en papel adhesivo y recórtala por la línea punteada.",
          "Para muchos regalos, botellas o empaques, las de vinil impreso resisten el agua y llevan tu propio diseño, nombre o logo. Puedes ver trabajos reales en la [galería de trabajos](/galeria).",
        ],
      },
      {
        heading: "Forma, acabado y precio de las etiquetas en vinil",
        body: [
          "El corte sigue la forma de tu diseño: redondas, de esfera, de estrella o cuadradas. Eliges troquelado, cada etiqueta suelta, o semitroquelado, varias en una hoja y fáciles de despegar. El acabado puede ser mate, brillante u holográfico, y el holográfico tiene un costo extra por pieza.",
          `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} en los stickers de vinil personalizados, con mínimo de 40 piezas, y $${priceOf("stickers-logo-personalizado", 100)} en las etiquetas con tu logo, con mínimo de 50 piezas. Arriba de 100 piezas es precio mayoreo en cada pieza extra.`,
        ],
        table: {
          headers: ["Producto", "Mínimo", "Primeras 100 piezas", "Más de 100"],
          rows: [
            ["Stickers de vinil personalizados (cualquier diseño, nombre o foto)", "40 piezas", `$${priceOf("stickers-vinil-impermeable", 100)}`, "Precio mayoreo en cada pieza extra"],
            ["Stickers y etiquetas con tu logo (negocios)", "50 piezas", `$${priceOf("stickers-logo-personalizado", 100)}`, "Precio mayoreo en cada pieza extra"],
          ],
        },
      },
      {
        heading: "Hasta cuándo pedirlas para que lleguen antes de Navidad",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, el pedido tarda ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en llegar a tu domicilio en cualquier parte de México, o ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles si lo recoges en una sucursal Casa Blanca en Guadalajara.`,
          "Con esos tiempos, cuenta hacia atrás desde la fecha en que necesitas las etiquetas y suma los días de la prueba digital. Si también vas a regalar dulceros, puedes pedir todo junto. Para entender cada etapa, revisa [cuánto tarda un pedido](/blog/cuanto-tarda-un-pedido-de-stickers-personalizados).",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["dulceros-navidenos-personalizados", "stickers-para-empaques-de-negocio", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
    faq: [
      {
        q: "¿Cuánto cuestan las etiquetas navideñas personalizadas?",
        a: `Primeras 100 piezas: $${priceOf("stickers-vinil-impermeable", 100)} en stickers de vinil personalizados (mínimo 40 piezas) y $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo (mínimo 50 piezas). Arriba de 100 piezas es precio mayoreo en cada pieza extra.`,
      },
      {
        q: "¿Hay etiquetas navideñas gratis para imprimir?",
        a: "Sí. Puedes descargar una hoja en PDF con 12 etiquetas por hoja, con espacio para Para y De, en versión a color y en blanco y negro. Se imprime en tamaño carta.",
      },
      {
        q: "¿Las etiquetas de vinil resisten el agua?",
        a: "Sí. Los stickers de vinil personalizados son de vinil premium resistente al agua, al sol y a rayones, y las etiquetas con tu logo son resistentes al agua.",
      },
      {
        q: "¿Qué formas y acabados puedo elegir?",
        a: "El corte puede ser troquelado o semitroquelado, y lo eliges al pedir. El acabado puede ser mate, brillante u holográfico; el holográfico tiene un costo extra por pieza.",
      },
      {
        q: "¿Puedo ver el diseño antes de que se imprima?",
        a: "Sí. La prueba digital llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Cuánto tardan en llegar las etiquetas?",
        a: `Desde que apruebas la prueba, el pedido tarda ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en llegar a tu domicilio en México, o ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles si lo recoges en una sucursal Casa Blanca en Guadalajara.`,
      },
    ],
    download: { href: "/descargas/etiquetas-navidenas-para-imprimir.pdf", label: "Descarga gratis: etiquetas navideñas para imprimir (PDF, color y blanco y negro)" },
  },
  {
    slug: "souvenirs-de-boda-personalizados",
    title: "Souvenirs de boda personalizados: ideas con nombre y fecha",
    metaTitle: "Souvenirs de boda personalizados con nombre y fecha",
    description:
      "Souvenirs de boda personalizados con nombre y fecha: ideas con dulceros y stickers, cuántos pedir y cuándo cotizar. Hechos en Guadalajara.",
    category: "Guías",
    publishedAt: "2026-10-28",
    modifiedAt: "2026-10-29",
    intro:
      "Un souvenir con el nombre de los novios y la fecha convierte un detalle de mesa en un recuerdo que tus invitados sí quieren llevarse a casa. Pero hoy el nombre y la fecha solos ya no bastan: lo que se queda es una pieza con diseño propio. Esta guía te explica qué souvenirs de boda personalizados puedes pedir en Yume, cómo darles un diseño elegante, cuántos pedir, cómo combinarlos con el resto de tu papelería y cuándo cotizar para llegar con calma a tu boda.",
    sections: [
      {
        heading: "¿Qué hace especial a un souvenir de boda personalizado?",
        body: [
          "Un souvenir de boda personalizado es un detalle que cada invitado se lleva con el nombre de los novios, la fecha o el diseño de la boda. Sirve para agradecer su presencia y dejar un recuerdo tangible. Lo que lo hace valioso es que tenga un uso o un lugar después de la fiesta.",
          "Crónica reporta, en septiembre de 2026, que la tendencia es la hiperpersonalización: piezas que los invitados usen, exhiban o disfruten, en lugar de imanes, dulces o velas desechables. Publimetro México suma que una ilustración numerada hecha para la boda puede funcionar como decoración, a diferencia de un recuerdo impreso solo con nombres y fecha. Ambos artículos están en Fuentes, al final.",
          "Esas notas citan ejemplos como botellas con etiqueta, arte numerado y fragancias para el hogar. Esas piezas no las hacemos. Lo nuestro es papel y vinil con tu diseño, y la idea de fondo se aplica igual: un detalle pensado para tu boda, con tus colores y tu historia, no uno genérico.",
        ],
      },
      {
        heading: "¿Cómo personalizar souvenirs de boda con nombre y fecha de forma elegante?",
        body: [
          "Para que el nombre y la fecha se vean elegantes, intégralos a un diseño con los colores de la pareja y un detalle de su historia, en lugar de dejarlos como texto suelto. Publimetro apunta que las piezas con colores e ilustraciones propios de la pareja se vuelven conservables. En Yume lo ves antes en prueba digital.",
          "Publimetro también menciona dos ideas: un diseño neutro y funcional con una sola pieza para todos los invitados, y dar menos piezas pero elegidas con más intención. Con nuestro papel y vinil, eso se traduce en un solo diseño para todos, con tus colores, donde el nombre y la fecha son parte de la composición.",
          "Cuando nos escribas, cuéntanos tu paleta y si hay un detalle de su historia que quieran en el diseño, como un lugar, una flor o una ilustración. Lo llevamos a la prueba digital y no producimos nada hasta que la apruebas.",
        ],
      },
      {
        heading: "Ideas de souvenirs de boda personalizados con nombre y fecha",
        body: [
          "Con Yume puedes hacer tres tipos de souvenir de boda: dulceros con los nombres de los novios, stickers con iniciales y fecha para sellar tus detalles, y tatuajes temporales para la pista de baile. Los tres se diseñan contigo y te mostramos una prueba digital antes de producir.",
          "Dulceros: una cajita con asa en cartulina opalina, con el nombre de los novios y la temática de tu boda. Llega armada y vacía, lista para llenar. Puede ir en la mesa de dulces, para que cada invitado arme la suya, o ya llena en cada lugar como recuerdo. Conoce los [dulceros personalizados](/productos/dulceros-personalizados) y la guía de [dulceros para bodas, XV y baby shower](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower).",
          "Stickers: iniciales y fecha en [stickers de vinil](/productos/stickers-vinil-impermeable), resistentes al agua, para sellar bolsitas de detalle, cerrar sobres de invitación o decorar frascos de la mesa de dulces. Si buscas más ideas, revisa los [stickers para bodas y eventos](/blog/stickers-para-bodas-eventos-y-fiestas).",
          "Tatuajes temporales: las iniciales de los novios o la fecha como detalle en la mesa de bienvenida o en la pista. El invitado se lo lleva puesto el resto de la fiesta y aparece en las fotos. Se cotizan según tu diseño y la cantidad. Mira los [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados) y la guía de [tatuajes temporales para boda](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas).",
        ],
      },
      {
        heading: "¿Cuántos souvenirs de boda pedir y cuánto cuestan?",
        body: [
          "Pide un souvenir por invitado o uno por familia o pareja, más unos cuantos extra para la mesa de novios, fotos e imprevistos. Lo importante es partir de tu lista confirmada de asistentes, porque en Yume se vende por pieza exacta y el mínimo cambia según el producto.",
          "El mínimo es de 10 dulceros y de 40 stickers de vinil. Los tatuajes temporales se cotizan por WhatsApp. Una cuenta práctica: si tienes 80 invitados, pide 80 piezas más 5 o 10 de reserva.",
          `Primeras 100 piezas: 100 dulceros cuestan $${priceOf("dulceros-personalizados", 100)} y 100 stickers de vinil cuestan $${priceOf("stickers-vinil-impermeable", 100)}. En stickers, pasando las 100 piezas cada pieza extra va a precio mayoreo. Precio por cantidad:`,
        ],
        table: {
          headers: ["Piezas", "Dulceros personalizados", "Stickers de vinil"],
          rows: tierPriceRows(["dulceros-personalizados", "stickers-vinil-impermeable"], [50, 100, 200], "es"),
        },
      },
      {
        heading: "¿Cómo combinar los souvenirs con tus invitaciones y tu menú?",
        body: [
          "Usa el mismo diseño en todo: mismos colores, misma tipografía y mismas iniciales en la invitación, el menú y el souvenir. Así la boda se lee como un solo conjunto planeado y no como piezas sueltas. Define el diseño una vez, aprueba la prueba digital y pide cada pieza con ese mismo archivo.",
          "Si todavía no tienes la papelería, empieza por las invitaciones y el menú de boda, y deja los souvenirs para después: ya tendrás la línea de diseño definida. Aquí tienes la guía para [pedir invitaciones personalizadas](/blog/como-pedir-invitaciones-personalizadas-para-eventos) y la del [menú de boda personalizado](/blog/menu-de-boda-personalizado).",
          "Si organizas la boda de un cliente como wedding planner, mándanos la paleta, el estilo y la lista de invitados confirmada. El trato es directo por WhatsApp y puedes ver la prueba digital con tu cliente antes de aprobar.",
        ],
      },
      {
        heading: "¿Cuándo pedir los souvenirs de boda?",
        body: [
          "Cotiza en cuanto tengas fecha, lugar y una idea de los colores, y pide en firme cuando la lista de invitados esté casi cerrada. Así queda margen para revisar la prueba digital, hacer ajustes y recibir el pedido sin prisas antes de la boda, sobre todo si tu evento tiene fecha fija.",
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. Si también pides invitaciones o menús, conviene coordinar todo en la misma conversación para que los tiempos de cada pieza se acomoden a tu fecha.`,
        ],
      },
      {
        heading: "Cómo cotizar tus souvenirs de boda",
        body: [
          "Escríbenos por WhatsApp con los nombres de los novios, la fecha, los colores o tu diseño ya armado y el número de invitados. Te preparamos la cotización, y antes de producir te mandamos una prueba digital: no producimos nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "Si tu boda es en Guadalajara, también puedes recoger en una sucursal Casa Blanca. Si es en otra ciudad, el proceso de diseño y aprobación es el mismo.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué souvenirs de boda personalizados puedo pedir en Yume?",
        a: "Dulceros personalizados con el nombre de los novios y la temática de tu boda, stickers de vinil con iniciales y fecha, y tatuajes temporales con tu diseño. No hacemos botellas ni aromas.",
      },
      {
        q: "¿Qué tipo de souvenir de boda está en tendencia?",
        a: "Según Crónica (septiembre de 2026), la tendencia es la hiperpersonalización: piezas que los invitados usen, exhiban o disfruten, en lugar de imanes, dulces o velas desechables. Publimetro suma que los colores e ilustraciones propios de la pareja hacen que la pieza se conserve.",
      },
      {
        q: "¿Puedo ver el diseño antes de que se produzca?",
        a: "Sí. Te enviamos una prueba digital antes de producir y no se fabrica nada hasta que la apruebas. Llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes.",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "10 piezas en dulceros personalizados y 40 piezas en stickers de vinil. Se venden por cantidad exacta de piezas, no por planilla.",
      },
      {
        q: "¿Los dulceros llegan con dulces?",
        a: "No. Los dulceros llegan armados y vacíos, listos para que los llenes con lo que quieras.",
      },
      {
        q: "¿Envían a otras ciudades de México?",
        a: `Sí. Producimos en Guadalajara y enviamos a todo México. El envío cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
      },
      {
        q: "¿Cuánto cuestan los tatuajes temporales para boda?",
        a: "Se cotizan según el diseño y la cantidad. Escríbenos por WhatsApp con la fecha de tu boda y el número de invitados y te preparamos la cotización.",
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-para-eventos-sociales-boda-xv-baby-shower", "stickers-para-bodas-eventos-y-fiestas", "como-pedir-invitaciones-personalizadas-para-eventos", "menu-de-boda-personalizado", "tatuajes-temporales-para-boda-eventos-y-fiestas"],
    serviceLink: { href: "/productos/tatuajes-temporales-personalizados", label: "Ver tatuajes temporales personalizados" },
    quoteMessage: "Hola, me interesa cotizar souvenirs de boda personalizados.",
    sources: [
      { label: "Crónica: Dile adiós a los recuerdos de boda que terminan en la basura, lo que sí se quedan tus invitados en 2026", url: "https://www.cronica.com.mx/tendencias/2026/09/04/dile-adios-a-los-recuerdos-de-boda-que-terminan-en-la-basura-esto-es-lo-que-si-se-quedan-tus-invitados-en-2026/" },
      { label: "Publimetro México: Souvenirs para bodas 2026, las tendencias que ganan terreno", url: "https://www.publimetro.com.mx/virales/2026/10/02/souvenirs-para-bodas-2026-las-tendencias-que-ganan-terreno/" },
    ],
  },
  // Dulceros cluster lives in its own file (blog-dulceros.ts).
  ...dulceroPosts,
  {
    slug: "detalles-posada-empresa-personalizados",
    title: "Detalles para posada de empresa: clientes y equipo",
    description:
      "Ideas de detalles para posada de empresa para clientes y equipo: qué elegir por invitado, cómo contar las fechas y qué consultar al contador.",
    category: "Guías",
    publishedAt: "2026-11-04",
    intro:
      "Las posadas de empresa se acercan y con ellas la pregunta de qué entregar a tu equipo y a tus clientes. Los detalles para posada de empresa con diseño hecho para ese evento son una opción sencilla. Aquí tienes ideas por tipo de invitado, un calendario para contar hacia atrás y lo que conviene consultar con tu contador.",
    sections: [
      {
        heading: "Qué detalles para posada de empresa puedes elegir",
        body: [
          "Para una posada de empresa conviene elegir el detalle según quién lo recibe: el equipo, los clientes o ambos. Un dulcero con nombre y logo, o stickers con el diseño de la posada, son una opción sencilla. Lo importante es que el diseño se sienta hecho para ese evento.",
          "Nuestro [dulcero personalizado](/productos/dulceros-personalizados) es tipo lunch box, con asa, llega armado y vacío, y su personalización incluye nombre, temática y logo de tu marca. Si buscas ideas de relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero); para la temporada, mira los [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
          "Si prefieres algo que no sea comestible, los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) llevan el diseño que tú nos mandes, como el nombre de la posada o la ilustración del evento. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Detalles para tu equipo: un extra que no sustituye el aguinaldo",
        body: [
          "El detalle de posada para tu equipo es un extra y no reemplaza el aguinaldo. La Ley Federal del Trabajo, en su artículo 87, fija el aguinaldo en al menos 15 días de salario, pagado antes del 20 de diciembre. Piensa el detalle como un extra con nombre o diseño del equipo.",
          "Para una posada en la oficina, un dulcero con el nombre de cada persona, o con el nombre del equipo y tu logo, es un detalle sencillo. Antes de entregar cualquier regalo a tu equipo, consulta con tu contador cómo se clasifica: como prestación, ingreso en especie u otro concepto. La forma de entrega y el nombre comercial no lo determinan.",
        ],
      },
      {
        heading: "Detalles para clientes: qué considerar antes de regalar",
        body: [
          "Para clientes, elige un detalle ligado a tu marca y al evento, no un regalo individual. El artículo 28, fracción III de la LISR restringe los obsequios a clientes, con excepciones para gastos ligados a la venta de productos o servicios ofrecidos de forma general. Consulta a tu contador antes de decidir.",
          "Un dulcero con tu logo y el nombre de la posada, o [stickers con tu logo](/productos/stickers-logo-personalizado), son detalles de marca que tus clientes se llevan del evento. Esto no promete que sean deducibles: los regalos individuales suelen quedar sujetos a restricciones de la Ley del Impuesto sobre la Renta (LISR), y tu contador valida cada caso.",
        ],
      },
      {
        heading: "Calendario inverso: cuándo pedir los detalles de tu posada",
        body: [
          "Para que tus detalles lleguen a tiempo, cuenta hacia atrás desde la fecha de tu posada: primero la entrega, luego la producción, después la aprobación de la prueba digital y al inicio el diseño. Así ves cuándo debes escribirnos, sin depender de que los tiempos se junten en diciembre.",
          "La producción empieza cuando apruebas la prueba digital, así que esa aprobación es la fecha que más cuenta. La fecha estimada de entrega aparece en la página del producto y en el carrito.",
          "Enviamos a todo México y, si estás en la zona metropolitana de Guadalajara, puedes recoger en una sucursal Casa Blanca. Si quieres ver opciones desde Jalisco, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Escríbenos por WhatsApp con la fecha de tu posada y contamos hacia atrás contigo.",
        ],
      },
      {
        heading: "Factura y contador: qué consultar antes de cotizar",
        body: [
          "Antes de cotizar, consulta con tu contador si necesitas factura, porque un CFDI válido por sí solo no garantiza la deducción. También hay que acreditar la operación, que el gasto sea estrictamente indispensable y que el pago sea por un medio autorizado. Tu contador es quien decide qué aplica en tu caso.",
          "Cuéntanos por WhatsApp cuántos invitados son y la fecha de la posada, y te cotizamos tus detalles.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["dulceros-navidenos-personalizados", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿El detalle de posada sustituye el aguinaldo?",
        a: "No. El artículo 87 de la Ley Federal del Trabajo fija el aguinaldo en al menos 15 días de salario, pagado antes del 20 de diciembre, y el patrón no puede alegar dificultades económicas para no pagarlo ni reducirlo. El detalle de posada es un extra.",
      },
      {
        q: "¿Los detalles de una posada de empresa son deducibles?",
        a: "No hay una deducción general y automática para posadas ni cenas navideñas. Depende de la finalidad, los beneficiarios y la documentación, y los obsequios a clientes tienen restricciones en el artículo 28 de la LISR. Consulta a tu contador.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización de un dulcero?",
        a: "El nombre (de la persona, del equipo o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuándo debo pedir los detalles de mi posada?",
        a: "Cuenta hacia atrás desde la fecha de la posada: entrega, producción, aprobación de la prueba digital y diseño. La fecha estimada de entrega aparece en la página del producto y en el carrito.",
      },
    ],
    sources: [
      { label: "El Contribuyente: fecha límite para entregar el aguinaldo a los trabajadores", url: "https://www.elcontribuyente.mx/2022/12/cual-es-la-fecha-limite-para-entregar-el-aguinaldo-a-los-trabajadores/" },
      { label: "Siempre al Día: deducibilidad de gastos de fin de año", url: "https://siemprealdia.co/mexico/fiscal/deducibilidad-de-gastos-de-fin-de-ano/" },
    ],
  },
  {
    slug: "guia-planners-proveedor-detalles-personalizados",
    title: "Proveedores de detalles personalizados para wedding planner",
    description:
      "Proveedores de detalles personalizados para wedding planner: brief, prueba digital, aprobación y tiempos para trabajar por WhatsApp.",
    category: "Guías",
    publishedAt: "2026-10-29",
    intro:
      "Si organizas bodas o eventos, tu trabajo es que todo llegue a tiempo y que tu cliente quede feliz. Un proveedor de detalles personalizados puede ayudarte o complicarte la vida. Esta guía explica cómo trabajamos en Yume con planners: qué mandar para cotizar, cómo se aprueba la prueba digital, cuándo conviene empezar y cómo se cuida el trato por WhatsApp.",
    sections: [
      {
        heading: "Qué esperar de proveedores de detalles personalizados para wedding planner",
        body: [
          "Un buen proveedor de detalles personalizados le da a la planner algo claro que mostrar, una prueba digital que la pareja pueda aprobar y un trato directo por WhatsApp. Así la planner no tiene que adivinar ni perseguir a nadie, y el cliente ve el detalle antes de que se produzca nada.",
          "Según Bodas.net, la planner contrata proveedores, supervisa el timing del día y organiza pruebas, pero no decide sin consultar a la pareja. Por eso el proveedor ideal facilita esa aprobación. En Yume trabajamos desde Guadalajara, con envíos a todo México.",
        ],
      },
      {
        heading: "Qué productos puedes pedir para un evento",
        body: [
          "Para un evento puedes pedir dulceros con nombre y temática, stickers con el diseño de la boda, tatuajes temporales, menús de boda e invitaciones. Los stickers y los dulceros tienen precio publicado en el sitio; los menús, las invitaciones y los tatuajes se cotizan por WhatsApp según el evento.",
          "El dulcero llega armado y vacío, con el nombre y la temática que elijas, para que tú decidas qué lleva dentro. Si buscas ideas para la mesa de dulces, revisa nuestra guía de [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Cómo se aprueba una prueba digital sin enredos",
        body: [
          "La prueba digital es el diseño que ves antes de producir. En los stickers de vinil llega normalmente en un máximo de 24 horas después del pago, incluye hasta 2 rondas de ajustes y no se imprime nada sin tu aprobación. Para otros productos, confirma el proceso por WhatsApp.",
          "Como la planner no decide sin consultar a la pareja, conviene enviar la prueba como imagen en el chat y que la aprobación quede escrita en el mismo hilo. Así todos ven la misma versión y nada se produce hasta que se aprueba.",
        ],
      },
      {
        heading: "Qué incluir en el brief para cotizar por WhatsApp",
        body: [
          "Para cotizar rápido, mándanos por WhatsApp la fecha del evento, la cantidad de piezas, la paleta de colores, los textos con nombres y fecha, y las referencias que tengas. Con eso preparamos la prueba digital sin ir y venir de mensajes.",
          "Si todavía no tienes definido el diseño, manda una foto de la invitación o de la decoración y partimos de ahí. Para menús, invitaciones y tatuajes temporales, te damos la cotización y los tiempos por WhatsApp según tu evento.",
        ],
      },
      {
        heading: "Cuándo empezar para que todo llegue a tiempo",
        body: [
          "Empieza en cuanto tengas la fecha y una idea del diseño, porque el tiempo de producción se cuenta desde que se aprueba la prueba digital, no desde que haces el pedido. Mientras más tarde se apruebe, más tarde llega tu pedido.",
          "Los días de producción y envío de los productos de la tienda aparecen en la página de cada uno. Para menús, invitaciones y tatuajes, pregúntanos la fecha por WhatsApp antes de prometer nada a tu cliente. Si buscas ideas para los invitados, mira estos [souvenirs de boda personalizados](/blog/souvenirs-de-boda-personalizados).",
        ],
      },
      {
        heading: "Entrega y trato por WhatsApp para que tu cliente quede contento",
        body: [
          "Yume produce en Guadalajara y envía a todo México; en la zona metropolitana también puedes recoger en una sucursal Casa Blanca. Dinos la sede y la fecha del evento desde el inicio para que la entrega quede planeada junto con tu calendario.",
          "Todo el trato es por WhatsApp: cotización, prueba digital y aprobación en un solo chat. Si manejas varios eventos al año, escríbenos y platicamos cómo acomodar tus pedidos.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["souvenirs-de-boda-personalizados", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Qué productos puedo pedir para un evento?",
        a: "Dulceros, stickers, tatuajes temporales, menús de boda e invitaciones. Los stickers y dulceros tienen precio publicado en el sitio; menús, invitaciones y tatuajes se cotizan por WhatsApp.",
      },
      {
        q: "¿Cuánto tarda la prueba digital?",
        a: "En los stickers de vinil llega normalmente en un máximo de 24 horas después del pago. Para otros productos, confirma el tiempo por WhatsApp.",
      },
      {
        q: "¿Cuántas rondas de ajustes incluye?",
        a: "Los stickers de vinil incluyen hasta 2 rondas de ajustes en la prueba digital. Para otros productos, consúltalo por WhatsApp.",
      },
      {
        q: "¿Se produce algo antes de que yo apruebe?",
        a: "No. En los stickers de vinil no imprimimos nada sin tu aprobación, y el tiempo de producción se cuenta desde que apruebas la prueba digital.",
      },
      {
        q: "¿El dulcero incluye dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con lo que tú elijas.",
      },
      {
        q: "¿Dónde producen y a dónde envían?",
        a: "Producimos en Guadalajara, Jalisco, y enviamos a todo México. En la zona metropolitana de Guadalajara también puedes recoger en una sucursal Casa Blanca.",
      },
    ],
    sources: [
      { label: "Bodas.net: ¿Qué tipo de wedding planner necesitas?", url: "https://www.bodas.net/articulos/que-tipo-de-wedding-planner-necesitas--c3716" },
    ],
  },
  {
    slug: "detalles-de-mesa-boda-personalizados",
    title: "Detalles personalizados para mesa de boda: menú y stickers",
    metaTitle: "Detalles personalizados para mesa de boda: menú y stickers",
    description:
      "Detalles personalizados para mesa de boda: cómo unir menú, dulcero y stickers con un mismo diseño para que la mesa se vea planeada.",
    category: "Guías",
    publishedAt: "2026-10-29",
    intro:
      "Una mesa de boda se ve planeada cuando cada pieza parece parte de lo mismo. Menú, dulcero y stickers pueden llevar el mismo color, la misma letra y el mismo símbolo, y entonces el conjunto se siente cuidado. Aquí tienes cómo combinarlos, en qué orden decidir y qué revisar por invitado y por mesa antes de cotizar.",
    sections: [
      {
        heading: "Qué detalles personalizados para mesa de boda funcionan juntos",
        body: [
          "Los detalles personalizados para mesa de boda se ven planeados cuando comparten un mismo sistema: una paleta, una tipografía y un símbolo o monograma que se repite. El menú, el dulcero y los stickers son piezas distintas, pero con ese hilo conductor la mesa se lee como un solo conjunto y no como compras sueltas.",
          "Los stickers son los que más lugares alcanzan. Un blog de bodas menciona etiquetas para botellas de vino o agua, que también sirven como marcadores de mesa con número, frases o monogramas en cubiertos o platos, velas y frascos de recuerdo. Si tienes una idea distinta, escríbenos por WhatsApp y vemos si se puede hacer.",
        ],
      },
      {
        heading: "El menú de boda como tarjeta de lugar",
        body: [
          "Una forma de simplificar la mesa es usar el menú también como tarjeta de lugar, con el nombre de cada invitado arriba del menú. Así una sola pieza cumple dos funciones y la mesa se ve más limpia. Si quieres ver más ideas, revisa el [menú de boda personalizado](/blog/menu-de-boda-personalizado) de Yume, que se cotiza por WhatsApp.",
          "Una guía de papelería de boda propone además un solo detalle por puesto, por ejemplo un florero pequeño, una galleta de fiesta con etiqueta o una mini botella con etiqueta con el nombre. Menos piezas por lugar, pero todas con el mismo diseño, dan un resultado más elegante que muchas piezas distintas.",
        ],
      },
      {
        heading: "Dulcero y stickers: un detalle por puesto",
        body: [
          "Para que la mesa no se sature, elige un solo detalle por puesto y repite su diseño en lo demás. Puede ser un dulcero con el nombre del invitado o un sticker con el monograma de la boda en una etiqueta. Lo importante es que colores y símbolo coincidan con el menú.",
          "El dulcero llega armado y vacío, así que tú decides qué lleva dentro, y la personalización incluye nombre y temática. Si quieres verlo con calma, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Para el recuerdo que se llevan a casa, mira los [souvenirs de boda personalizados](/blog/souvenirs-de-boda-personalizados). Y para etiquetas y marcadores con tu monograma, están los [stickers con tu logo](/productos/stickers-logo-personalizado).",
        ],
      },
      {
        heading: "Orden de decisiones para una mesa que se vea planeada",
        body: [
          "Decide en este orden: primero la paleta, luego la tipografía y por último el símbolo o monograma que se repetirá. Con esas tres decisiones tomadas, cada pieza se diseña sobre la misma base y no hay que rehacer nada al sumar el menú, el dulcero o los stickers.",
          "Escríbenos por WhatsApp para cotizar y te decimos cómo alinear el diseño con tu paleta. El menú de boda se cotiza por WhatsApp. En stickers y dulceros te enviamos una prueba digital antes de producir, y nada se produce hasta que la apruebas. Si trabajas con una wedding planner, comparte con ella la paleta y la prueba para que las piezas coincidan con el resto de la decoración.",
        ],
      },
      {
        heading: "Checklist por invitado y por mesa",
        body: [
          "Un checklist corto evita olvidos: por invitado, revisa tarjeta o menú con su nombre, un detalle de recuerdo y la etiqueta o sticker que lo acompaña; por mesa, revisa marcador con número, menú o carta y la pieza compartida. Confirma todo contra tu lista de invitados antes de pedir.",
          "Las cantidades dependen de tu lista de invitados y de cuántas mesas tengas. Escríbenos por WhatsApp con esos números y te cotizamos el menú y el resto de las piezas. Estamos en Guadalajara y enviamos a todo México.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["menu-de-boda-personalizado", "souvenirs-de-boda-personalizados", "dulceros-personalizados-guadalajara", "que-poner-en-un-dulcero"],
    faq: [
      {
        q: "¿Cuánto cuesta el menú de boda?",
        a: "El menú de boda se cotiza por WhatsApp según tu diseño y la cantidad que necesites.",
      },
      {
        q: "¿Puedo usar el menú como tarjeta de lugar?",
        a: "Sí. Es una opción que sugiere una guía de papelería de boda: poner el nombre del invitado arriba del menú para que una sola pieza cumpla dos funciones. Cuéntanos cómo lo quieres y lo cotizamos.",
      },
      {
        q: "¿Puedo ver el diseño antes de producir?",
        a: "En stickers y dulceros sí: te mandamos una prueba digital y nada se produce hasta que la apruebas. El menú de boda se cotiza por WhatsApp.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Envían fuera de Guadalajara?",
        a: "Sí. Trabajamos desde Guadalajara y enviamos a todo México.",
      },
    ],
    sources: [
      { label: "The Budget Savvy Bride: cómo los stickers pueden realzar tu boda", url: "https://thebudgetsavvybride.com/how-stickers-can-elevate-your-wedding/" },
      { label: "Mary Hollis Huddleston: tarjetas de lugar, menús, recursos y consejos", url: "https://maryhollishuddleston.squarespace.com/blog/place-cards-menus-resources-and-tips" },
    ],
  },
  {
    slug: "mesa-de-dulces-para-boda",
    title: "Mesa de dulces para boda: cómo armarla y personalizar los dulceros",
    metaTitle: "Mesa de dulces para boda: cómo armarla y personalizarla",
    description:
      "Cómo armar una mesa de dulces para boda: cuántos dulces calcular, qué poner en cada dulcero, cómo montarla y personalizar dulceros con prueba digital.",
    category: "Guías",
    publishedAt: "2026-11-11",
    intro:
      "Una mesa de dulces bien pensada se ve, se fotografía y se disfruta. En esta guía encuentras cómo calcular los dulces, qué poner en cada dulcero, cómo montar la mesa y cómo personalizar los dulceros para que combinen con la paleta de tu boda.",
    sections: [
      {
        heading: "Cuántos dulces calcular para la mesa de dulces de tu boda",
        body: [
          "Como punto de partida, Bodas.net propone unos 150 g de chucherías por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Son cifras orientativas de una guía de España, no una norma. Para 100 invitados, esa guía da unos 10 kg como punto de partida.",
          "Si añades mini brownies, donuts o bombones, puedes reducir la cantidad de dulce suelto. Bodas.net también orienta por tarros medianos: de 4 a 6 para 50 invitados, de 10 a 12 para entre 50 y 150, y 15 o 16 para unos 200. La mesa acompaña al postre y al banquete, no los sustituye.",
          "Crehana recuerda que la cantidad depende de los invitados, la duración, el lugar y el catering, así que conviene afinar la cifra con tu wedding planner o con el salón.",
        ],
      },
      {
        heading: "Qué dulces poner en cada dulcero de la mesa",
        body: [
          "Elige variedad y etiqueta cada dulcero. Crehana sugiere al menos 6 variedades de dulces como referencia, y Bodas.net recomienda etiquetar sabores y alérgenos y separar las opciones sin gluten, sin azúcar o veganas. El dulcero de Yume llega armado y vacío, así que tú decides qué lleva cada uno.",
          "Bodas.net sugiere bolsitas de chuches con etiqueta personalizada como detalle para invitados. Para más ideas de relleno, revisa nuestra guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Cómo armar la mesa de dulces para boda paso a paso",
        body: [
          "Define un concepto y una paleta, elige un punto de atención y acomoda por alturas: lo bajo al frente y lo alto al fondo. Crehana propone 10 pasos que van de la inspiración al diseño gráfico, con cartelitos y banderines, e incluyen un croquis de la mesa.",
          "Bodas.net añade recipientes transparentes, bandejas a distintas alturas o cajas de madera, una línea de estilo coherente y pinzas para servirse. Como alternativa higiénica y sin filas, propone presentaciones individuales.",
          "Los dulceros dan color y un diseño propio a la mesa y, si los personalizas, repiten el diseño de tu boda. Si además buscas detalles para entregar, mira los [souvenirs de boda personalizados](/blog/souvenirs-de-boda-personalizados).",
        ],
      },
      {
        heading: "Cómo personalizar los dulceros para boda",
        body: [
          "Un dulcero de Yume se personaliza con el nombre y la temática que elijas, por ejemplo los nombres de la pareja y los tonos de tu boda. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas. Así la mesa y el recuerdo se ven como un solo diseño.",
          "Nuestro dulcero es tipo lunch box, con asa, y llega armado y vacío. El pedido mínimo es de 10 piezas. Puedes ver los [dulceros personalizados](/productos/dulceros-personalizados) y cotizarlos por WhatsApp.",
          "Mándanos una foto de tu invitación o de la decoración y adaptamos el diseño a esos colores. Si quieres incluir otro dato, como la fecha, escríbenos por WhatsApp y lo confirmamos antes de cotizar. Si estás en la zona, conoce también los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Cuándo pedir los dulceros y cómo coordinarlos con tu planner",
        body: [
          "Pide los dulceros cuando tengas definidos la paleta y el número de invitados, para dar tiempo a la prueba digital y a tu aprobación. Si trabajas con wedding planner, comparte con ella el diseño aprobado y el croquis de la mesa. Escríbenos por WhatsApp con la fecha de tu boda.",
          "Al cotizar, dinos cuántos invitados tienes y cuántos dulceros quieres.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "souvenirs-de-boda-personalizados"],
    serviceLink: { href: "/productos/dulceros-personalizados", label: "Ver dulceros personalizados" },
    quoteMessage: "Hola, me interesa cotizar dulceros personalizados para mi mesa de dulces de boda.",
    faq: [
      {
        q: "¿Cuántos dulces calcular por invitado en una boda?",
        a: "Bodas.net, en una guía de España, orienta con unos 150 g por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Son cifras orientativas, no una norma.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización del dulcero?",
        a: "El nombre y la temática que elijas. Te mandamos una prueba digital antes de producir y nada se produce hasta que la apruebas. Si quieres incluir otro dato, como la fecha, escríbenos por WhatsApp para confirmarlo.",
      },
      {
        q: "¿La mesa de dulces sustituye al postre?",
        a: "No. Según Bodas.net, la mesa de dulces acompaña al postre y al banquete, no los sustituye.",
      },
      {
        q: "¿Cuál es el pedido mínimo de dulceros?",
        a: "El pedido mínimo es de 10 piezas.",
      },
    ],
    sources: [
      { label: "Bodas.net: Todo lo que debéis saber antes de montar una candy bar", url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448" },
      { label: "Crehana: Cómo armar una mesa de dulces", url: "https://www.crehana.com/blog/estilo-vida/como-armar-mesa-dulce/" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
