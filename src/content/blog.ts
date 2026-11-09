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
    "slug": "placa-resenas-google-para-consultorios",
    "title": "Placa de reseñas de Google para consultorios",
    "metaTitle": "Placa de reseñas Google para consultorios",
    "description": "Cómo usar una placa de reseñas de Google en tu consultorio: dónde ponerla, cómo sacar el QR, qué no ofrecer a pacientes y cómo responder.",
    "category": "Guías",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "Una placa de reseñas de Google para consultorios facilita que cada paciente encuentre el enlace de la ficha, sin obligarlo a escribir. Esta guía explica cómo obtener el enlace y el QR, dónde colocar la placa, cómo invitar sin ofrecer incentivos, qué puede pasar si Google detecta interacción falsa y cómo responder sin exponer datos de salud.",
    "sections": [
      {
        "heading": "¿Qué es una placa de reseñas de Google para consultorios?",
        "body": [
          "Es una pieza física, con NFC y código QR, que lleva al paciente directo al cuadro de reseña de la ficha de tu consultorio en Google. No escribe ni califica por nadie: solo quita pasos para quien decide opinar. Se coloca en recepción o en la sala de espera.",
          "Una placa no garantiza más reseñas: cada persona decide si opina y qué escribe. Lo que sí hace es dejar el enlace a la vista dentro del consultorio, para que quien quiera compartir su experiencia no tenga que buscar tu ficha ni recordar el nombre exacto."
        ]
      },
      {
        "heading": "¿Cómo obtener el enlace y el QR de reseñas de Google?",
        "body": [
          "Entra a tu Perfil de Empresa desde una computadora, abre «Leer reseñas» y elige «Consigue más reseñas». Ahí puedes copiar el enlace o descargar el QR con «Guardar imagen como». Según Google, el QR solo se genera desde un navegador de computadora, no desde el móvil.",
          "Algunos sitios de terceros, no oficiales, señalan que el enlace corto suele terminar en /review y que un QR hecho con el enlace del perfil abre la ficha completa en lugar del cuadro de reseña. Ese formato no está documentado por Google y podría cambiar, por eso conviene probar el enlace antes de producir la placa."
        ]
      },
      {
        "heading": "¿Dónde colocar la placa en un consultorio?",
        "body": [
          "Recepción y sala de espera son lugares prácticos si la pieza queda visible sin obstaculizar el paso. Elige una superficie accesible y comprueba el enlace con un teléfono. La placa incluye adhesivo; el stand puede colocarse de pie sobre un mostrador.",
          "Google sugiere compartir el enlace o el QR en recibos, correos de agradecimiento, chat o en un QR impreso en el local, y también por correo, WhatsApp o Facebook. En un consultorio, eso puede significar la placa en recepción y, si lo prefieres, el mismo enlace enviado por WhatsApp después de la consulta."
        ]
      },
      {
        "heading": "¿Cuándo pedir una opinión a los pacientes?",
        "body": [
          "Al terminar la visita o al salir de recepción puedes ofrecer el enlace con discreción, siempre dejando que la persona decida. Evita interrumpir una conversación privada o insistir cuando alguien no quiera participar; también puede responder más tarde desde su teléfono.",
          "Pide la opinión a todos los pacientes, no solo a quienes parezcan satisfechos, para que las reseñas reflejen la atención real del consultorio. Una invitación breve y amable, repetida con la misma naturalidad para cada persona, funciona mejor que un discurso largo en el mostrador."
        ]
      },
      {
        "heading": "¿Cómo invitar sin presionar ni ofrecer incentivos?",
        "body": [
          "Pide a todos los pacientes una opinión honesta, sin sugerir una calificación ni ofrecer descuentos o regalos. Por ejemplo: «Si lo desea, puede compartir su experiencia en Google». Según Google, los incentivos a cambio de reseñas están prohibidos y cuentan como interacción falsa.",
          "La misma política de Google incluye publicar, cambiar o eliminar reseñas negativas. Si detecta interacción falsa, Google puede restringir el perfil: bloquear nuevas reseñas o calificaciones por un tiempo, despublicar reseñas existentes de forma temporal o mostrar un aviso público. Antes avisa por correo y la restricción se puede apelar."
        ]
      },
      {
        "heading": "¿Cómo responder sin revelar información de salud?",
        "body": [
          "Agradece de manera general y nunca incluyas información de salud del paciente ni detalles de su atención en una respuesta pública. Si hace falta dar seguimiento, ofrece un canal privado apropiado sin confirmar públicamente datos personales o circunstancias de la visita.",
          "La placa solo invita a opinar. No la uses para prometer resultados ni para destacar casos de pacientes: una respuesta corta, cordial y sin detalles clínicos protege la privacidad de quien escribió y la tuya."
        ]
      },
      {
        "heading": "¿Qué formato puede usar un consultorio?",
        "body": [
          "Yume ofrece dos formatos: la placa, con adhesivo, y el stand, que se coloca de pie sobre un mostrador. Ambos tienen NFC y QR, vienen en blanco o negro y se pueden pedir por pieza, sin app ni suscripción. El precio vigente aparece en la página de cada producto.",
          "Si tu recepción tiene poco espacio de pared, el stand sobre el mostrador evita pegar nada. Si prefieres una pieza fija junto a la puerta o la ventanilla, la placa con adhesivo es la opción que se queda en su lugar."
        ]
      },
      {
        "heading": "¿Qué revisar antes de pedir la placa?",
        "body": [
          "Antes de producir, confirma que la ficha pertenece a tu consultorio, que el enlace abre el cuadro de reseña y no solo el perfil, y que lo probaste en iPhone y Android. Después envía el enlace a Yume para configurar el NFC y el QR antes del envío.",
          "Haz la prueba con el teléfono de otra persona, sin tu sesión iniciada, para ver lo mismo que verá un paciente. Si algo no abre como esperabas, corrige el enlace antes de pedir la pieza."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Puedo pedir una sola pieza?",
        "a": "Sí. Puedes pedir una placa o un stand; ambos tienen NFC y QR configurados con tu enlace de reseñas antes del envío."
      },
      {
        "q": "¿La pieza garantiza más reseñas?",
        "a": "No. Facilita el acceso al enlace; cada persona decide si deja una opinión y qué escribe."
      },
      {
        "q": "¿Puedo dar un descuento a cambio de una reseña?",
        "a": "No. Google prohíbe ofrecer productos o servicios gratuitos o con descuento a cambio de reseñas y lo considera interacción falsa."
      },
      {
        "q": "¿Puedo generar el QR desde mi celular?",
        "a": "Según Google, el QR solo se genera desde un navegador de computadora. Desde ahí se descarga con la opción «Guardar imagen como»."
      },
      {
        "q": "¿Qué puede pasar si Google detecta interacción falsa?",
        "a": "Google puede restringir el perfil: bloquear nuevas reseñas o calificaciones por un tiempo, despublicar reseñas existentes de forma temporal o mostrar un aviso al público. Avisa por correo antes y se puede apelar."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "quoteMessage": "Hola, me interesan la placa y el stand NFC para reseñas de Google.",
    "sources": [
      {
        "label": "Google: reseñas, interacción falsa y cómo conseguir más reseñas",
        "url": "https://support.google.com/business/answer/16816815?hl=es"
      },
      {
        "label": "Google: restricciones del perfil por interacción falsa",
        "url": "https://support.google.com/business/answer/14114287"
      }
    ]
  },
  {
    "slug": "placa-resenas-google-para-restaurantes",
    "title": "Placa de reseñas de Google para restaurantes",
    "metaTitle": "Placa de reseñas de Google para restaurantes",
    "description": "Cómo usar una placa de reseñas de Google para restaurantes: dónde ponerla, qué texto lleva, cómo generar el QR y pedir opiniones sin incentivos.",
    "category": "Guías",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "Una placa de reseñas de Google para restaurantes acerca el enlace de tu ficha a quienes visitan un solo local, justo cuando terminan de comer o de recoger su pedido. Esta guía te dice dónde ponerla, cómo generar y probar el QR antes de imprimir, qué texto sí puede llevar, qué elegir entre placa y stand, y cómo responder lo que llegue, siguiendo la ayuda oficial de Google.",
    "sections": [
      {
        "heading": "¿Dónde colocar la placa de reseñas en el restaurante?",
        "body": [
          "Coloca la placa donde el cliente tenga un momento tranquilo al terminar: sobre la mesa, junto a la caja o en el área de entrega para llevar. Google sugiere compartir el enlace o el QR impreso en el local. Elige un sitio visible que no estorbe el servicio y prueba que abra tu ficha.",
          "Cada lugar cumple un papel distinto. En la mesa, la placa acompaña la sobremesa y el cliente decide si la escanea. En la caja, aparece mientras se paga la cuenta. En el área de entrega para llevar, llega a quien no se sienta en el local. Puedes combinar dos puntos si tu servicio lo permite, siempre con el mismo enlace.",
          "Google también sugiere compartir el enlace en recibos, en correos de agradecimiento o al final de un chat, y permite enviar la solicitud por correo, WhatsApp o Facebook. Así, la [placa de reseñas NFC](/productos/placa-resena-google-nfc) es un canal más, no el único, y el mismo enlace sirve en todos."
        ]
      },
      {
        "heading": "¿Cómo generar el QR de reseñas antes de imprimir?",
        "body": [
          "Genera el enlace y el QR desde una computadora, no desde el móvil. Entra a tu perfil de empresa, abre Leer reseñas, elige Obtener más reseñas y copia el enlace o guarda la imagen del QR con clic derecho. Después escanéalo con tu celular y confirma que abre tu restaurante.",
          "Los pasos, en orden: 1) abre tu perfil de empresa en Google desde una computadora; 2) entra a Leer reseñas; 3) elige Obtener más reseñas; 4) copia el enlace, o haz clic derecho sobre el QR y elige Guardar imagen como.",
          "El nombre exacto del botón puede cambiar según el perfil. Si no ves «Obtener más reseñas», busca una opción equivalente dentro de Leer reseñas. Haz la prueba de escaneo antes de mandar a imprimir cualquier placa: es la forma más simple de evitar que quede en la mesa un código que no abre tu ficha."
        ]
      },
      {
        "heading": "¿Qué texto puede llevar la placa de reseñas?",
        "body": [
          "Usa una invitación neutra y amable, como «Si disfrutaste tu visita, cuéntanos tu experiencia». No ofrezcas descuentos, postres ni productos gratis a cambio de una reseña, porque Google prohíbe los incentivos y los trata como contenido engañoso. Tampoco pidas un número de estrellas: pide una opinión honesta.",
          "Otras frases que funcionan sin condicionar: «Tu opinión nos ayuda a mejorar» o «Cuéntanos cómo te fue». Todas invitan sin prometer nada a cambio y sin dirigir lo que la persona va a escribir.",
          "Ofrece el enlace a todos tus clientes reales, no solo a quienes parecen satisfechos."
        ]
      },
      {
        "heading": "¿Conviene una placa o un stand?",
        "body": [
          "La placa incluye adhesivo para fijarla y mide 12 × 12 cm; el stand se coloca de pie sobre una superficie. La placa cuesta $140 MXN y el stand $200 MXN. Ambos tienen NFC y QR, con pago único y desde una pieza.",
          "La [placa de reseñas NFC](/productos/placa-resena-google-nfc) se fija en un punto del local; el [stand de reseñas NFC](/productos/stand-resena-google-nfc) se apoya de pie, por ejemplo en una mesa o en el mostrador. Elige según el lugar donde la quieras y si prefieres fijarla o poder moverla.",
          "Si dudas entre NFC y un QR impreso, revisa la [comparación entre NFC y QR](/blog/placa-nfc-vs-codigo-qr-impreso-resenas). Y si te preocupa el costo, aquí está la guía de [pago único o suscripción](/blog/placas-resenas-google-pago-unico-vs-suscripcion)."
        ]
      },
      {
        "heading": "¿Cómo se prepara la pieza para tu local?",
        "body": [
          "Comparte el enlace de reseñas de tu ficha al hacer el pedido. Yume configura el NFC y el QR con ese enlace antes del envío. Puedes elegir blanco o negro, y la pieza funciona sin app ni suscripción, así que no pagas mensualidad por ella.",
          "Cuando te llegue, escanea el QR y acerca tu celular para comprobar que ambos abren la ficha correcta antes de ponerla frente a tus clientes. Para ver el uso paso a paso, consulta la guía de [cómo usar la placa](/blog/como-usar-placa-resenas-google-yume)."
        ]
      },
      {
        "heading": "¿Cómo responder las reseñas que lleguen?",
        "body": [
          "Responde con mensajes breves, claros y corteses, sin ofertas ni promociones. Evita el agradecimiento genérico, usa el nombre del cliente y responde pronto. Si el problema es complejo, llévalo a un canal privado sin exponer datos del cliente. Una reseña que viole las políticas de Google se puede reportar.",
          "Responder es parte del proceso: la placa ayuda a que lleguen opiniones y tu respuesta muestra cómo atiendes. Si alguien señala un problema, escucha, agradece y ofrece un canal para darle seguimiento sin discutir en público.",
          "Si quieres ampliar el tema de cómo conseguir opiniones de forma constante, lee la guía para [conseguir más reseñas](/blog/como-conseguir-mas-resenas-de-google-nfc-qr). Revisa también que los datos y horarios de tu ficha sigan correctos."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué necesita un cliente para dejar una reseña?",
        "a": "Una cuenta de Google, aunque no sea Gmail. Quien no tenga cuenta no podrá reseñar al escanear la placa."
      },
      {
        "q": "¿Puedo ofrecer algo para que un cliente retire una reseña negativa?",
        "a": "No. Google también prohíbe ofrecer incentivos por cambiar una reseña o por retirar una negativa."
      },
      {
        "q": "¿Puedo pedir una sola pieza?",
        "a": "Sí. Puedes pedir una placa o un stand; ambos tienen NFC y QR configurados con tu enlace de reseñas antes del envío."
      },
      {
        "q": "¿La pieza garantiza más reseñas?",
        "a": "No. Facilita el acceso al enlace; cada persona decide si deja una opinión y qué escribe."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "placas-resenas-google-pago-unico-vs-suscripcion",
      "como-conseguir-mas-resenas-de-google-nfc-qr",
      "placa-nfc-vs-codigo-qr-impreso-resenas",
      "como-usar-placa-resenas-google-yume"
    ],
    "quoteMessage": "Hola, me interesan la placa y el stand NFC para reseñas de Google.",
    "sources": [
      {
        "label": "Google: obtener el enlace y el QR de reseñas",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: responder reseñas y política de incentivos",
        "url": "https://support.google.com/business/answer/7035772"
      },
      {
        "label": "Google: consejos para recibir reseñas",
        "url": "https://support.google.com/business/answer/3474122?hl=es"
      },
      {
        "label": "Google: contenido prohibido y restringido",
        "url": "https://support.google.com/business/answer/7400114?hl=es"
      }
    ]
  },
  {
    "slug": "placa-resenas-google-para-salones-esteticas-y-barberias",
    "title": "Placa de reseñas de Google para salones, estéticas y barberías",
    "metaTitle": "Placa de reseñas de Google para salones y barberías",
    "description": "Cómo obtener el QR oficial de Google, qué puede decir tu placa de reseñas de Google y dónde colocarla en tu salón, estética o barbería.",
    "category": "Guías",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "Una placa de reseñas de Google para salones, estéticas y barberías facilita el acceso a la ficha de un negocio. Puede colocarse cerca de la recepción o caja para ofrecer a cada cliente una forma sencilla de compartir su experiencia. Antes de encargar una pieza conviene saber tres cosas: cómo se obtiene el enlace oficial, qué puede decir la placa según las reglas de Google y dónde ponerla para que se use sin presionar a nadie. Esta guía las resume paso a paso.",
    "sections": [
      {
        "heading": "¿Cómo obtener el enlace o QR oficial de tu placa de reseñas de Google?",
        "body": [
          "Según Google, el enlace y el código QR para pedir reseñas se generan solo desde un navegador de computadora, no desde el móvil. Entras al perfil del negocio, abres Leer reseñas, eliges Obtener más reseñas y tocas el icono de compartir. Ahí copias el enlace o guardas el QR.",
          "Para guardar el QR, haz clic derecho sobre la imagen y elige guardar imagen. Antes de usar el enlace, ábrelo desde tu propio teléfono para confirmar que lleva a la ficha correcta de tu negocio.",
          "Con Yume, el NFC y el QR de la [placa NFC para reseñas](/productos/placa-resena-google-nfc) se configuran con el enlace de reseñas de tu negocio antes del envío."
        ]
      },
      {
        "heading": "¿Qué puede decir la placa y qué debe dejar fuera?",
        "body": [
          "La placa debe invitar a todos los clientes por igual a compartir una opinión honesta, sin incentivos. Google permite pedir reseñas genuinas, pero prohíbe ofrecer bienes o servicios gratis o con descuento a cambio de ellas, desalentar reseñas negativas o solicitar selectivamente reseñas positivas. Por eso el texto debe ser neutro y abierto a cualquier calificación.",
          "Evita textos como «Escanea y recibe 10% de descuento», que ofrece un incentivo, «Solo 5 estrellas», que busca influir en la calificación, o «Menciona a tu barbero», que dicta el contenido de la reseña.",
          "La política de contenido también prohíbe que el comercio pida a su personal solicitar un número determinado de reseñas, o reseñas con contenido específico, como el nombre de un empleado. En salones y barberías es común querer que mencionen a su estilista o barbero, así que la placa no debe incluir nombres ni cuotas.",
          "Google trata el ofrecimiento de bienes o servicios a cambio de reseñas como interacción falsa, y la regla también cubre publicar, modificar o quitar reseñas."
        ]
      },
      {
        "heading": "¿Qué texto corto puedes poner en la placa?",
        "body": [
          "Un texto corto y neutro basta: una invitación a compartir la experiencia en Google, sin promesas ni condiciones. Debe ser igual para todos, no mencionar descuentos, calificaciones ni nombres de personal, y dejar claro que opinar es una decisión libre de cada cliente, que puede escribir lo que quiera sobre su visita.",
          "Ejemplos que respetan las reglas: «Cuéntanos tu experiencia en Google», «Tu opinión honesta nos ayuda» o «Si deseas, comparte tu experiencia en Google»."
        ]
      },
      {
        "heading": "¿Dónde colocar la placa en un salón, estética o barbería?",
        "body": [
          "Google sugiere colocar el código QR o el enlace en recibos, correos de agradecimiento, al final de un chat y como QR impreso en la tienda. Para un salón, estética o barbería, eso respalda una placa física en el mostrador y el envío del mismo enlace por WhatsApp después de la cita.",
          "Dentro del local, la recepción, la caja o una mesa de espera permiten tener la pieza a la vista sin interrumpir el servicio. Comprueba que el cliente pueda acercar su teléfono o escanear el QR con comodidad."
        ]
      },
      {
        "heading": "¿En qué momento pedir una opinión?",
        "body": [
          "Al terminar la cita o al pagar puedes invitar al cliente a compartir su experiencia, con tiempo y sin presionarlo. Ofrece la misma oportunidad a todos los clientes reales; cada persona decide si quiere escribir y qué desea contar sobre su visita. La invitación no debe sugerir una calificación.",
          "No elijas solo a quienes parecen satisfechos: la política de contenido de Google prohíbe solicitar selectivamente reseñas positivas.",
          "Si el cliente prefiere no escribir, no pasa nada. La placa solo le facilita llegar al enlace."
        ]
      },
      {
        "heading": "¿Cuándo usar la placa y cuándo un mensaje de WhatsApp?",
        "body": [
          "La placa sirve para quien todavía está en el local y el mensaje de WhatsApp para quien ya se fue. Ambos usan el mismo enlace de reseñas de tu negocio, así que puedes combinarlos sin duplicar trabajo. Cada canal cumple una función distinta y ninguno requiere ofrecer nada a cambio.",
          "Un mensaje breve puede bastar: agradece la visita y comparte el enlace."
        ]
      },
      {
        "heading": "¿Qué formato de placa de reseñas de Google elegir?",
        "body": [
          "La placa mide 12 × 12 cm e incluye adhesivo; el stand se coloca de pie. La placa cuesta $140 MXN y el stand $200 MXN, con pago único. Ambos llevan NFC y QR, están disponibles en blanco o negro y puedes pedir una sola pieza.",
          "Si prefieres una pieza de pie, revisa el [stand NFC para reseñas](/productos/stand-resena-google-nfc)."
        ]
      },
      {
        "heading": "¿Cómo funcionan el NFC y el QR de la placa?",
        "body": [
          "Yume configura el NFC y el QR con el enlace de reseñas del negocio antes del envío. El cliente puede acercar su teléfono o escanear el código para abrir ese enlace en su propio dispositivo. La pieza no necesita app ni suscripción y no incluye un dashboard para administrar reseñas."
        ]
      },
      {
        "heading": "¿Cómo cuidar la conversación pública?",
        "body": [
          "Agradece las opiniones de manera breve y profesional, sin compartir información privada de quien visitó el negocio. Si surge una queja, escucha con calma y ofrece un canal apropiado para darle seguimiento. Mantén actualizados los horarios y datos de contacto de la ficha para que otros clientes sepan cómo encontrarte."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Puedo enviar el enlace de reseñas por WhatsApp?",
        "a": "Sí. Google indica que el enlace puede enviarse por correo, WhatsApp o una publicación de Facebook."
      },
      {
        "q": "¿Puedo dar un descuento a quien deje una reseña?",
        "a": "No. Google prohíbe ofrecer bienes o servicios gratis o con descuento a cambio de reseñas y lo trata como interacción falsa."
      },
      {
        "q": "¿Puedo pedir reseñas solo a los clientes contentos?",
        "a": "No. La política de contenido de Google prohíbe solicitar selectivamente reseñas positivas o desalentar las negativas. Invita a todos los clientes por igual."
      },
      {
        "q": "¿Puedo pedir que mencionen a su estilista o barbero?",
        "a": "No. La política prohíbe que el comercio pida al personal reseñas con contenido específico, como el nombre de un empleado, o un número determinado de reseñas."
      },
      {
        "q": "¿Puedo pedir una sola pieza?",
        "a": "Sí. Puedes pedir una placa o un stand; ambos tienen NFC y QR configurados con tu enlace de reseñas antes del envío."
      },
      {
        "q": "¿La pieza garantiza más reseñas?",
        "a": "No. Facilita el acceso al enlace; cada persona decide si deja una opinión y qué escribe."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "placas-resenas-google-pago-unico-vs-suscripcion",
      "como-conseguir-mas-resenas-de-google-nfc-qr",
      "placa-nfc-vs-codigo-qr-impreso-resenas",
      "como-usar-placa-resenas-google-yume"
    ],
    "quoteMessage": "Hola, me interesan la placa y el stand NFC para reseñas de Google.",
    "sources": [
      {
        "label": "Google: cómo pedir reseñas con un enlace o código QR",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: política de contenido para reseñas",
        "url": "https://support.google.com/contributionpolicy/answer/7400114?hl=en"
      }
    ]
  },
  {
    "slug": "placa-resenas-google-para-planners-y-eventos",
    "title": "Placa de reseñas de Google para planners y eventos",
    "metaTitle": "Placa de reseñas de Google para planners y eventos",
    "description": "Cómo usar una placa de reseñas de Google en eventos: obtener el enlace oficial, qué texto poner, cuándo pedir la reseña y qué no ofrecer a cambio.",
    "category": "Guías",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "Una placa de reseñas de Google para planners y eventos acerca el enlace de tu ficha a tus clientes. Las opiniones honestas sirven como prueba social para quienes buscan un planner, recinto o proveedor para su celebración. Aquí verás cómo obtener el enlace oficial, dónde mostrar la placa, cuándo pedir la reseña y qué no ofrecer a cambio, para que la invitación sea cuidada y honesta.",
    "sections": [
      {
        "heading": "Placa de reseñas de Google: ¿qué perfil debe recibirlas?",
        "body": [
          "La placa debe llevar al perfil del negocio que prestó el servicio: el planner, el recinto o el proveedor, siempre que cumpla los requisitos de Google para tener ficha. Si una planner coordina y otro proveedor ejecuta, cada quien usa su propio enlace, para que la opinión llegue al negocio correcto.",
          "Antes de producir cualquier pieza, confirma que el enlace sea el de tu propio negocio y que abra la ficha correcta."
        ]
      },
      {
        "heading": "¿Cómo obtener el enlace y el QR oficial de reseñas?",
        "body": [
          "Desde tu Perfil de Negocio de Google entra a «Leer reseñas», elige «Obtener más reseñas» y copia el enlace o descarga el código QR con clic derecho y guardar imagen. Google indica que el QR solo se genera desde un navegador de computadora, no desde el celular.",
          "Copia el enlace tal como lo entrega Google, sin escribirlo a mano, y compártelo con Yume para configurar tu pieza."
        ]
      },
      {
        "heading": "¿Dónde mostrar la placa durante un evento?",
        "body": [
          "Colócala donde las personas la vean sin que interrumpa la celebración: en recepción si eres recinto, o en tu mesa de atención si eres proveedor. Google sugiere mostrar el QR o el enlace en recibos, correos de agradecimiento, al final de un chat o impreso en el local.",
          "Si trabajas con clientes por WhatsApp, también puedes enviar la solicitud por ese medio, por correo o por Facebook, según Google. La placa en el evento y el mensaje posterior se complementan."
        ]
      },
      {
        "heading": "¿Cuándo pedir la reseña sin saturar el evento?",
        "body": [
          "Pídela después del servicio o al cerrar la coordinación, no en medio de los momentos importantes. La participación es voluntaria y cada persona decide qué escribir. Un reporte sobre las políticas de Google señala que no se debe presionar a calificar en el local ni dictar lo que debe decir la reseña.",
          "Ese mismo reporte indica que Google vigila volúmenes o patrones inusuales de reseñas. Si muchos invitados reseñan el mismo día, puede verse atípico, así que conviene espaciar las solicitudes en lugar de concentrarlas en una sola noche."
        ]
      },
      {
        "heading": "¿Cómo pedir reseñas honestas, sin incentivos?",
        "body": [
          "Invita a todos tus clientes reales, no solo a quienes creas satisfechos, y no sugieras una calificación. Google prohíbe ofrecer bienes o servicios gratis o con descuento a cambio de una reseña, y las opiniones deben venir de experiencias reales. Acepta las positivas y las negativas.",
          "Esto aplica también si eres planner y regalas o descuentas parte del evento a cambio de reseñas: no lo hagas. Para el texto cerca de la placa, usa una invitación neutra como «Cuéntanos tu experiencia», sin guion y sin «déjanos 5 estrellas»."
        ]
      },
      {
        "heading": "¿Qué mensaje acompaña a la placa?",
        "body": [
          "Usa un mensaje breve y neutro cerca de la placa, como «Cuéntanos tu experiencia», sin pedir cinco estrellas ni indicar qué escribir. La pieza trae NFC y QR para que el cliente elija: acercar el celular al NFC o escanear el código, ambos con el mismo enlace de reseñas.",
          "Evita textos largos o promesas. La placa facilita el acceso al enlace, pero no garantiza más reseñas: cada persona decide si opina y qué escribe. Si quieres explicar el propósito, basta una frase que invite a compartir la experiencia con honestidad."
        ]
      },
      {
        "heading": "Placa o stand: ¿qué pieza se adapta a tu forma de trabajo?",
        "body": [
          "La placa de 12 × 12 cm incluye adhesivo y cuesta $140 MXN; el stand se coloca de pie y cuesta $200 MXN. Ambos tienen NFC y QR, están disponibles en blanco o negro y se pueden pedir desde una pieza con pago único.",
          "Si buscas un lugar fijo, como una recepción, revisa la [placa de reseñas NFC y QR](/productos/placa-resena-google-nfc). Si prefieres algo que se apoye sobre una mesa, el [stand de reseñas NFC](/productos/stand-resena-google-nfc) se coloca de pie."
        ],
        "table": {
          "headers": ["Pieza", "Formato", "Precio", "Colores"],
          "rows": [
            ["Placa", "12 × 12 cm, con adhesivo", "$140 MXN", "Blanco o negro"],
            ["Stand", "Se coloca de pie", "$200 MXN", "Blanco o negro"]
          ]
        }
      },
      {
        "heading": "¿Cómo prepara Yume tu pieza?",
        "body": [
          "Yume configura el NFC y el QR con el enlace de reseñas de tu negocio antes de enviar la pieza. No requiere app ni suscripción: el pago es único. Si quieres cotizar o resolver dudas, escríbenos por WhatsApp y te ayudamos a definir qué pieza te conviene.",
          "Si además preparas detalles para tus invitados, mira nuestros [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara) para complementar a tu proveedor de detalles."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Puedo pedir una sola pieza?",
        "a": "Sí. Tanto la placa como el stand se pueden pedir desde una pieza, con pago único, y llegan con NFC y QR configurados con tu enlace de reseñas."
      },
      {
        "q": "¿La pieza garantiza más reseñas?",
        "a": "No. Facilita el acceso al enlace; cada persona decide si deja una opinión y qué escribe."
      },
      {
        "q": "¿Puedo generar el QR de reseñas desde mi celular?",
        "a": "Según Google, los QR de reseñas solo se pueden generar desde un navegador de computadora. Desde el celular puedes copiar el enlace, pero no descargar el QR."
      },
      {
        "q": "¿Puedo ofrecer un descuento a cambio de una reseña?",
        "a": "No. Google prohíbe ofrecer bienes o servicios gratis o con descuento a cambio de una reseña, y las reseñas deben venir de experiencias reales."
      },
      {
        "q": "¿Debo pedir reseñas solo a los clientes contentos?",
        "a": "No. Lo correcto es invitar a todos tus clientes reales, sin filtrar y sin sugerir una calificación."
      },
      {
        "q": "¿Necesito app o suscripción para usar la placa?",
        "a": "No. Yume configura el NFC y el QR con tu enlace antes del envío, con pago único y sin suscripción."
      },
      {
        "q": "¿Cuánto cuestan la placa y el stand?",
        "a": "La placa de 12 × 12 cm con adhesivo cuesta $140 MXN y el stand de pie cuesta $200 MXN. Ambos están disponibles en blanco o negro."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "dulceros-personalizados-guadalajara"
    ],
    "quoteMessage": "Hola, me interesan la placa y el stand NFC para reseñas de Google.",
    "sources": [
      {
        "label": "Google: obtener el enlace y el QR de reseñas (en inglés)",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: consejos para recibir reseñas",
        "url": "https://support.google.com/business/answer/3474122?hl=es"
      },
      {
        "label": "Google: contenido prohibido y restringido",
        "url": "https://support.google.com/business/answer/7400114?hl=es"
      },
      {
        "label": "Search Engine Roundtable: políticas de reseñas de Google (en inglés)",
        "url": "https://www.seroundtable.com/google-business-profile-review-policies-updated-40962.html"
      }
    ]
  },
  {
    "slug": "como-hacer-una-encuesta-de-satisfaccion-del-cliente",
    "title": "Cómo hacer una encuesta de satisfacción del cliente",
    "metaTitle": "Encuesta de satisfacción del cliente: guía y preguntas",
    "description": "Aprende a crear una encuesta de satisfacción del cliente, elegir preguntas y compartirla por QR, ticket o WhatsApp.",
    "category": "Guías",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "Una encuesta de satisfacción del cliente te ayuda a escuchar cómo fue la experiencia y a decidir qué mejorar. En esta guía eliges la métrica (CSAT, NPS o CES), armas pocas preguntas claras, decides cuándo enviarla por WhatsApp, QR o ticket y conviertes las respuestas en acciones. Mantén la encuesta separada de cualquier invitación a escribir una reseña pública.",
    "sections": [
      {
        "heading": "¿Qué es una encuesta de satisfacción del cliente y para qué sirve?",
        "body": [
          "Una encuesta de satisfacción del cliente es un conjunto breve de preguntas que mide cómo vivió alguien una compra, una entrega o un servicio. Sirve para detectar qué funcionó y qué falló, y para decidir una mejora concreta. Antes de escribirla, define qué decisión tomarás con las respuestas.",
          "Si vendes piezas personalizadas por encargo, conviene separar dos momentos: una encuesta de entrega, para saber cómo llegó el pedido, y otra de recomendación, para saber si hablarías bien del negocio. Mezclarlas en un solo formulario confunde a quien responde. Y evita pedir datos que no vas a usar."
        ]
      },
      {
        "heading": "¿Qué métrica elegir: CSAT, NPS o CES?",
        "body": [
          "CSAT pregunta qué tan satisfecho quedó la persona con una interacción concreta, en una escala de 1 a 5. NPS pregunta qué tan probable es que te recomiende, de 0 a 10. CES mide el esfuerzo que le costó resolver algo. Elige según lo que quieras saber.",
          "En el NPS, quien responde 9 o 10 es promotor y quien responde de 0 a 6 es detractor; el resultado es el porcentaje de promotores menos el porcentaje de detractores. El CSAT se calcula como el porcentaje de respuestas 4 y 5. Las referencias de la tabla vienen de la guía de un solo proveedor, así que úsalas como orientación y no como estándar del sector."
        ],
        "table": {
          "headers": ["Métrica", "Escala", "Cómo se calcula", "Referencia orientativa"],
          "rows": [
            ["CSAT", "1 a 5", "% de respuestas 4 y 5", "80 a 89%"],
            ["NPS", "0 a 10", "% de promotores menos % de detractores", "+30 a +59"],
            ["CES", "1 a 5", "Promedio de las respuestas", "4.0 a 4.4"]
          ]
        }
      },
      {
        "heading": "¿Cuántas preguntas y de qué tipo conviene usar?",
        "body": [
          "No hay una longitud ideal que sirva para todos los negocios. Lo que sí ayuda es que cada pregunta tenga un propósito: una escala para medir, otra para comparar y una abierta para entender el porqué. Si una pregunta no cambia ninguna decisión, quítala. Por WhatsApp, envía una pregunta por mensaje.",
          "Usa la misma escala en preguntas parecidas y explica los extremos, por ejemplo «1 es muy insatisfecho y 5 es muy satisfecho». Por WhatsApp funciona dar una instrucción simple, como «responde solo con el número», para que las respuestas sean fáciles de comparar."
        ]
      },
      {
        "heading": "¿Qué preguntas para encuesta de satisfacción puedes usar?",
        "body": [
          "Usa preguntas sencillas sobre la atención, el producto y el tiempo de espera, además de una escala de recomendación y un espacio abierto para que expliquen su respuesta. Ajusta cada pregunta a lo que ofreces y explica los extremos de las escalas antes de compartir el formulario con tus clientes.",
          "Prueba estas siete preguntas: 1. ¿Qué tan satisfecho quedaste con la atención, de 1 a 5? 2. ¿Con el producto o servicio, de 1 a 5? 3. ¿Con el tiempo de espera, de 1 a 5? 4. ¿Fue clara la información? 5. ¿Encontraste lo que necesitabas? 6. ¿Qué tan probable es que nos recomiendes, de 0 a 10? 7. ¿Qué podríamos mejorar?",
          "Si la encuesta es para la entrega de un pedido personalizado, puedes cambiar algunas por estas: ¿La pieza se parece al diseño que aprobaste? ¿Llegó en el tiempo acordado? ¿El empaque llegó en buen estado? ¿Cómo fue el trato por WhatsApp?"
        ]
      },
      {
        "heading": "¿Dónde y cuándo aplicar la encuesta con código QR?",
        "body": [
          "Comparte un QR hacia un formulario en el mostrador o en el ticket, o envía las preguntas por WhatsApp después de la compra o el servicio. Explica que responder es voluntario y elige un momento cercano a la experiencia, sin interrumpir al cliente.",
          "Según una guía de un proveedor, el CSAT se envía dentro de los 2 minutos posteriores al cierre de la conversación, el NPS entre 24 y 48 horas después de una interacción importante, como una compra, y el CES justo después de completar el proceso. Esperar más de una hora reduce de forma importante la respuesta. Para un pedido personalizado, esto apoya enviar una encuesta de entrega y, por separado, otra de recomendación.",
          "Sobre la frecuencia, las fuentes no coinciden: unas piden CSAT en cada ticket cerrado y otras prefieren hacerlo de forma periódica para no saturar. La misma guía sugiere como máximo una encuesta CSAT por cliente cada 7 días y el NPS una vez al mes o al trimestre."
        ]
      },
      {
        "heading": "¿Cómo leer y utilizar los resultados?",
        "body": [
          "Revisa las respuestas pregunta por pregunta y busca temas que se repitan en los comentarios abiertos. Considera cuántas personas respondieron antes de sacar conclusiones, porque pocas respuestas no representan necesariamente a todos. Elige una mejora concreta, asigna a alguien su seguimiento y compara los comentarios posteriores con cuidado.",
          "Los errores más comunes que menciona esa guía son enviar la encuesta tarde, juntar varias preguntas en un mensaje, no actuar sobre los resultados y no leer los comentarios abiertos. Cada uno hace que la encuesta pierda utilidad."
        ]
      },
      {
        "heading": "¿Cómo invitar a una reseña sin filtrar clientes?",
        "body": [
          "Mantén la encuesta y la petición de reseña separadas y ofrece ambas a todos los clientes. Enviar solo a clientes satisfechos a Google o desalentar a los insatisfechos va contra su política de reseñas. La placa ofrece a todos la misma vía por NFC o QR para dejar una opinión honesta.",
          "Yume vende la placa y el stand, no una herramienta de encuestas. Yume configura ambas vías con el enlace de reseñas antes del envío; la placa cuesta $140 MXN y el stand $200 MXN, pago único, desde una pieza."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué tasa de respuesta puedo esperar?",
        "a": "No hay una cifra universal. Una guía de un proveedor cita entre 40 y 60% por WhatsApp frente a entre 5 y 15% por correo, pero es una cifra del propio proveedor y no un estudio independiente."
      },
      {
        "q": "¿Qué hago si un cliente da una calificación baja?",
        "a": "Si el CSAT es de 1 a 3, esa guía recomienda agregar una pregunta abierta sobre qué mejorar. Así sabes qué corregir en lugar de ver solo el número."
      },
      {
        "q": "¿Puedo pedir una sola pieza?",
        "a": "Sí. Puedes pedir una placa o un stand; ambos tienen NFC y QR configurados con tu enlace de reseñas antes del envío."
      },
      {
        "q": "¿La pieza garantiza más reseñas?",
        "a": "No. Facilita el acceso al enlace; cada persona decide si deja una opinión y qué escribe."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "como-configurar-perfil-de-google-y-pedir-resenas",
      "placas-resenas-google-pago-unico-vs-suscripcion",
      "como-conseguir-mas-resenas-de-google-nfc-qr",
      "placa-nfc-vs-codigo-qr-impreso-resenas",
      "como-usar-placa-resenas-google-yume",
      "placa-resenas-google-para-consultorios",
      "placa-resenas-google-para-restaurantes",
      "placa-resenas-google-para-salones-esteticas-y-barberias",
      "placa-resenas-google-para-planners-y-eventos"
    ],
    "quoteMessage": "Hola, me interesan la placa y el stand NFC para reseñas de Google.",
    "sources": [
      {
        "label": "Google: consejos para recibir reseñas",
        "url": "https://support.google.com/business/answer/3474122?hl=es"
      },
      {
        "label": "Google: contenido prohibido y restringido",
        "url": "https://support.google.com/business/answer/7400114?hl=es"
      },
      {
        "label": "Aurora Inbox: cómo medir la satisfacción del cliente por WhatsApp",
        "url": "https://www.aurorainbox.com/2026/02/27/medir-satisfaccion-cliente-whatsapp/"
      }
    ]
  },
  {
    slug: "placas-resenas-google-pago-unico-vs-suscripcion",
    title: "Placas de reseñas de Google: pago único vs suscripción mensual",
    metaTitle: "Placas de reseñas Google: pago único vs suscripción",
    description: "Placas de reseñas de Google sin suscripción: compara el costo a 12 y 24 meses, el riesgo del enlace y qué texto usar. Placa Yume desde $140 MXN.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro: "Al elegir placas de reseñas de Google, la pregunta de fondo es si te conviene pagar la pieza una sola vez o contratar una plataforma con mensualidad. Aquí comparas el costo a 12 y 24 meses, ves qué revisar para que el enlace funcione y qué texto poner en la placa para respetar las reglas de Google. Yume ofrece una placa o un stand con pago único y sin mensualidad.",
    sections: [
      { heading: "¿Placa de pago único o suscripción mensual?", body: ["Conviene pagar una sola vez cuando tienes un solo local y solo necesitas que tus clientes lleguen fácil a tu enlace de reseñas. Una suscripción tiene sentido si manejas varias sucursales y quieres monitoreo y respuestas desde un software. Lo que pagas cada mes es el software, no la pieza.", "Según un comparativo de mercado, las suscripciones suelen venderse por cotización y con contratos anuales, y se consideran excesivas para un solo local. También señala que, si más adelante cambias de servicio, pierdes la automatización que habías montado.", "Si tu caso es un local, una cafetería, un salón o un espacio de eventos donde quieres una pieza bien presentada junto a la caja o la recepción, una placa de pago único cubre lo esencial: facilitar el acceso al enlace."] },
      { heading: "Cuánto cuestan las placas de reseñas de Google en 12 y 24 meses", body: ["La placa de Yume cuesta $140 MXN y el stand $200 MXN, pago único, así que a 12 o 24 meses sigues en esa cifra. Un comparativo de mercado ubica las plataformas por suscripción entre $50 y $300 USD al mes (cifras aproximadas).", "La tabla usa rangos aproximados de ese comparativo, que están en dólares, por eso no se convierten a pesos. Los totales de suscripción son simple multiplicación del rango mensual por 12 y por 24 meses."], table: { headers: ["Opción", "Costo aproximado", "12 meses", "24 meses"], rows: [
        ["Placa de Yume", "$140 MXN, pago único", "$140 MXN", "$140 MXN"],
        ["Stand de Yume", "$200 MXN, pago único", "$200 MXN", "$200 MXN"],
        ["NFC + QR de pago único en Etsy", "$13 a $48 USD", "Mismo pago único", "Mismo pago único"],
        ["Genéricos de Amazon o eBay", "$5 a $25 USD", "Mismo pago único", "Mismo pago único"],
        ["Plataforma por suscripción", "$50 a $300 USD al mes", "$600 a $3,600 USD", "$1,200 a $7,200 USD"],
        ["QR impreso casero", "Gratis, con durabilidad muy baja", "Gratis", "Gratis"],
      ] } },
      { heading: "Qué revisar antes de comprar una placa de reseñas de Google", body: ["Revisa que el NFC y el QR abran el enlace directo para dejar una reseña y no solo el perfil del negocio. En placas genéricas, el comprador a veces programa las etiquetas y puede grabar el enlace equivocado. Prueba la pieza con tu celular antes de colocarla.", "La calidad y el soporte posventa varían mucho entre vendedores, así que pregunta quién programa la pieza y quién te atiende si algo falla. Con Yume, la pieza llega con el NFC programado y el QR generado con tu enlace de reseñas.", "Piensa también dónde va a vivir. Una placa permanente es más difícil de reubicar que una tarjeta, así que elige el lugar con calma. Y recuerda que el objeto por sí solo no pide la reseña: alguien del equipo debe mencionarla."] },
      { heading: "Qué texto poner en la placa sin romper las reglas de Google", body: ["Usa un texto que invite a opinar sin ofrecer nada a cambio. Google no permite incentivos, como descuentos o regalos, por publicar reseñas, ni por cambiar o retirar las negativas. Sí permite pedir reseñas que reflejen una experiencia auténtica, siempre sin buscar influir en la valoración.", "Un texto sencillo como “¿Cómo te fue hoy? Escanea y cuéntanos tu experiencia” invita sin prometer premios ni pedir una calificación en particular.", "La misma política prohíbe presionar a los clientes mientras están en el local, y tampoco permite pedir al personal un número determinado de reseñas ni contenido específico, como mencionar a un empleado. Por eso conviene que la placa invite y el trato del equipo siga siendo cordial y sin insistencia."] },
      { heading: "¿Qué recibes con una placa o stand de Yume?", body: ["Yume produce la pieza sobre pedido, programa el NFC y genera el QR con tu enlace de reseñas antes del envío. La placa incluye adhesivo; el stand se coloca de pie. Ambos están disponibles en blanco o negro y funcionan sin app ni suscripción.", "Puedes ver la [placa de reseñas Google NFC](/productos/placa-resena-google-nfc) o el [stand de reseñas Google](/productos/stand-resena-google-nfc) y elegir según el lugar donde la vas a colocar.", "La pieza no incluye dashboard: administras las reseñas en tu propio perfil de Google. Para profundizar, lee [cómo conseguir más reseñas con NFC y QR](/blog/como-conseguir-mas-resenas-de-google-nfc-qr), compara la [placa NFC con un QR impreso](/blog/placa-nfc-vs-codigo-qr-impreso-resenas) y revisa [cómo usar la placa de reseñas](/blog/como-usar-placa-resenas-google-yume)."] },
    ],
    faq: [
      { q: "¿Necesito un dashboard?", a: "No para usar la placa de Yume. La pieza no incluye dashboard; administras las reseñas en tu propio perfil de empresa de Google. Una plataforma para varias sucursales puede ser útil si necesitas reportes y alertas centralizados." },
      { q: "¿Cuánto cuesta una placa sin suscripción?", a: "La placa de Yume cuesta $140 MXN y el stand $200 MXN, con pago único y sin suscripción." },
      { q: "¿Una placa garantiza más reseñas?", a: "No. Facilita el acceso al enlace, pero cada cliente decide si deja una reseña y qué escribe." },
      { q: "¿Quién configura el NFC y el QR?", a: "Yume programa el NFC y genera el QR con tu enlace de reseñas antes del envío." },
      { q: "¿Qué enlace debe abrir la placa?", a: "Según un comparativo de mercado, en placas genéricas puede grabarse el enlace del perfil en vez del enlace directo de reseña. Por eso conviene probar la pieza con tu celular antes de colocarla." },
      { q: "¿Puedo mover la pieza de lugar después?", a: "El stand se coloca de pie, así que puedes cambiarlo de sitio. La placa lleva adhesivo, por lo que conviene elegir bien su ubicación antes de pegarla." },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["como-conseguir-mas-resenas-de-google-nfc-qr", "placa-nfc-vs-codigo-qr-impreso-resenas", "como-usar-placa-resenas-google-yume"],
    quoteMessage: "Hola, me interesan la placa o el stand NFC para reseñas de Google.",
    sources: [
      { label: "Google: política de contribuciones", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
      { label: "Comparativo de placas NFC y plataformas de reseñas", url: "https://onrec.com/node/129063" },
    ],
  },
  {
    slug: "como-configurar-perfil-de-google-y-pedir-resenas",
    title: "Cómo configurar tu perfil de Google y pedir reseñas",
    metaTitle: "Configurar perfil de Google y pedir reseñas",
    description: "Aprende a configurar tu perfil de Google, verificarlo con video y pedir reseñas honestas con enlace, QR o WhatsApp sin romper las reglas.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro: "Un perfil de empresa de Google ayuda a presentar tu negocio a personas que lo buscan. Esta guía reúne los pasos para configurarlo, verificarlo con un video si trabajas desde casa o por cita, y pedir reseñas a tus clientes de forma respetuosa, desde un restaurante o consultorio hasta un servicio para eventos en México.",
    sections: [
      { heading: "¿Qué es el perfil de empresa de Google y por qué importa?", body: ["El perfil de empresa de Google es la ficha con la que un negocio elegible puede presentar información en Google, incluido Maps y la búsqueda. Permite mostrar datos útiles y recibir opiniones de clientes, para que quienes te encuentran puedan conocer tu actividad y decidir cómo contactarte.", "También se conoce por su nombre anterior, Google My Business. Mantener la información correcta ayuda a que las personas sepan qué ofreces y cómo localizarte; no garantiza una posición en los resultados."] },
      { heading: "¿Cómo reclamar o dar de alta tu negocio?", body: ["Busca primero el nombre y la ubicación de tu negocio en Google Maps o en Google Business Profile. Si ya existe una ficha, solicita su administración; si no existe y tu negocio cumple los requisitos de Google, inicia el alta y proporciona los datos que se soliciten.", "Sigue el proceso de verificación indicado por Google para confirmar que puedes administrar el negocio. Las opciones disponibles varían según el perfil y pueden cambiar; revisa las indicaciones que aparezcan en tu caso. Evita crear una ficha duplicada y mantén el acceso a la cuenta que uses para gestionarla."] },
      { heading: "¿Cómo verificar tu perfil de Google con un video?", body: ["Google puede pedir un video de verificación grabado en vivo desde el móvil, sin editar, continuo y de al menos 30 segundos. Si tu negocio atiende desde casa y llevas el servicio al cliente, muestra señales de la calle, tus herramientas o productos y una prueba de gestión, sin enseñar datos sensibles ni rostros de otras personas.", "Según Google, una prueba de gestión puede ser un servicio en curso, un activo con marca o un documento a nombre del negocio, como un recibo de servicio. Si tu negocio no recibe clientes en su domicilio, Google indica no agregar esa dirección al perfil.", "El video se graba y se sube desde el móvil a través del perfil, y no se admiten videos pregrabados. Por eso conviene hacer el recorrido de una sola vez: calle, espacio de trabajo y la prueba de que gestionas el negocio."] },
      { heading: "¿Qué completar en tu perfil de Google para que te encuentren?", body: ["Elige una categoría que describa tu actividad principal y completa el horario, teléfono, fotos y descripción con información fiel y vigente. Revisa los datos como lo haría un cliente: debe poder entender qué haces, cuándo atiendes y cómo comunicarse contigo sin encontrar información contradictoria.", "Actualiza horarios especiales cuando corresponda y usa fotos representativas del local, los servicios o el trabajo realizado. Un proveedor de eventos puede describir su servicio con claridad; un consultorio puede revisar que su teléfono y horario de atención sean correctos."] },
      { heading: "¿Cómo pedir reseñas sin romper las reglas de Google?", body: ["Pide una opinión honesta a tus clientes reales y comparte el enlace directo sin presionar ni sugerir una calificación. No ofrezcas descuentos ni productos gratis a cambio de una reseña: según la ayuda de Google Business Profile, ofrecer algo así está estrictamente prohibido y cuenta como interacción falsa.", "Las reseñas deben reflejar una experiencia auténtica. Pide a todos tus clientes reales, no solo a quienes crees que estarán contentos, y acepta lo que escriban. No publiques ni encargues reseñas falsas."] },
      { heading: "¿Cómo generar el enlace o el QR de reseñas?", body: ["El enlace y el código QR de reseñas se generan desde el perfil de empresa en un navegador de escritorio; no se pueden generar desde el móvil. Abre el perfil, elige «Leer reseñas», luego «Consigue más reseñas», y copia el enlace o descarga el QR con clic derecho y «Guardar imagen como…».", "Después de copiar el enlace, ábrelo desde tu teléfono para comprobar que lleva a tu ficha. Si descargas el QR, guarda la imagen para imprimirla en una tarjeta o usarla en un mensaje."] },
      { heading: "¿Cuándo y cómo pedir la reseña después de una entrega?", body: ["Google permite compartir la solicitud por correo, WhatsApp o Facebook, y sugiere poner el enlace o QR en recibos, correos de agradecimiento, al final de un chat o como código impreso en la tienda. Elige el canal que ya usas con tu cliente.", "Si vendes detalles para mamás, planners o empresas con eventos, un mensaje de WhatsApp tras la entrega o una tarjeta con QR dentro del empaque son dos formas naturales de hacerlo. Por ejemplo: «Gracias por confiar en nosotros para tu evento. Si quieres contarnos cómo te fue, aquí tienes el enlace para una reseña honesta».", "La persona puede responder después o no hacerlo. Pedir con amabilidad y sin condiciones es lo que mantiene la reseña auténtica."] },
      { heading: "¿Cómo facilitar la reseña con un enlace, QR o placa NFC?", body: ["Comparte el enlace directo de reseñas de tu ficha por mensaje o usa un código QR para que el cliente lo escanee. También puedes colocar una placa con NFC y QR en recepción, caja o una mesa: el cliente elige cómo abrir el enlace desde su teléfono.", `La [placa de reseñas NFC](/productos/placa-resena-google-nfc) de Yume cuesta $${getProduct("placa-resena-google-nfc")!.price} MXN e incluye adhesivo; el [stand de reseñas NFC](/productos/stand-resena-google-nfc) de Yume cuesta $${getProduct("stand-resena-google-nfc")!.price} MXN y se coloca de pie. Ambos tienen NFC y QR. Un QR impreso o una placa solo reduce pasos: no sustituye pedir la reseña.`, "Si dudas entre formatos, lee la comparación de [placa NFC contra QR impreso](/blog/placa-nfc-vs-codigo-qr-impreso-resenas). Y si buscas ideas para [conseguir más reseñas](/blog/como-conseguir-mas-resenas-de-google-nfc-qr), empieza por una invitación amable y constante, sin prometer resultados ni condicionar la opinión. Para elegir un formato, escríbenos por WhatsApp."] },
      { heading: "¿Cuándo y cómo responder reseñas?", body: ["Revisa las reseñas con regularidad y responde tanto las positivas como las negativas, procurando hacerlo pronto. Agradece la opinión con un mensaje breve y profesional; si hubo un problema, escucha, discúlpate cuando corresponda y ofrece un canal adecuado para darle seguimiento sin discutir en público.", "No compartas datos privados de la persona ni detalles de su atención, especialmente en un consultorio. Una respuesta respetuosa también ayuda a quienes leen la ficha a entender cómo atiendes los comentarios.", "Si una reseña infringe las políticas de Google, puedes denunciarla desde tu ficha eligiendo el motivo. Una reseña negativa honesta no se denuncia: se responde."] },
    ],
    faq: [
      { q: "¿El perfil de empresa de Google es gratis?", a: "Google permite crear y administrar un perfil de empresa sin costo para negocios elegibles." },
      { q: "¿Necesito verificar mi negocio?", a: "Sigue las indicaciones de Google para verificar el perfil. Las opciones de verificación disponibles pueden variar, y en algunos casos piden un video en vivo grabado desde el móvil." },
      { q: "¿Cuánto tarda la revisión del video de verificación?", a: "Según Google, la revisión puede tardar hasta 5 días hábiles. Si lo rechazan, el perfil muestra los motivos y puedes grabar otro que incluya todo lo del primero más lo que faltaba." },
      { q: "¿Puedo verificar un negocio que solo vende en línea?", a: "Según Google, los negocios solo en línea, sin servicio presencial, no son elegibles para la verificación." },
      { q: "¿Puedo pedir reseñas por WhatsApp?", a: "Sí. Comparte el enlace directo e invita a una opinión honesta, sin incentivos ni presión." },
      { q: "¿Puedo pagar para quitar una reseña negativa?", a: "No. Google prohíbe pagar por publicar, cambiar o quitar reseñas, también las negativas." },
      { q: "¿Una placa garantiza más reseñas?", a: "No. Una placa facilita el acceso al enlace; cada cliente decide si deja una reseña y qué escribe." },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["placas-resenas-google-pago-unico-vs-suscripcion", "como-conseguir-mas-resenas-de-google-nfc-qr", "placa-nfc-vs-codigo-qr-impreso-resenas", "como-usar-placa-resenas-google-yume", "placa-resenas-google-para-consultorios", "placa-resenas-google-para-restaurantes", "placa-resenas-google-para-salones-esteticas-y-barberias", "placa-resenas-google-para-planners-y-eventos", "como-hacer-una-encuesta-de-satisfaccion-del-cliente"],
    quoteMessage: "Hola, me interesa conocer las placas y stands NFC para reseñas de Google.",
    sources: [
      { label: "Google: consejos para recibir reseñas", url: "https://support.google.com/business/answer/3474122?hl=es" },
      { label: "Google: contenido prohibido y restringido", url: "https://support.google.com/business/answer/7400114?hl=es" },
      { label: "Google: pedir reseñas con enlace o código QR", url: "https://support.google.com/business/answer/16816815?hl=es" },
      { label: "Google: verificación de perfil con video", url: "https://support.google.com/business/answer/14271705?hl=en" },
      { label: "Ionos: cómo conseguir reseñas en Google (guía de terceros)", url: "https://www.ionos.com/es-us/digitalguide/online-marketing/vender-en-internet/como-conseguir-resenas-en-google/" },
    ],
  },
  {
    slug: "recuerdos-baby-shower-personalizados",
    title: "Dulceros para baby shower personalizados: qué poner y cuántos pedir",
    metaTitle: "Dulceros para baby shower personalizados: qué poner",
    description: "Dulceros para baby shower personalizados: qué poner dentro, cuántos pedir con un ejemplo de cálculo, precios y tiempos.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro: "Los dulceros para baby shower personalizados son el último detalle que se lleva cada invitado, y por eso conviene pensarlos con la misma calma que la invitación o la mesa. Aquí encuentras qué poner dentro, cómo elegir entre dulcero individual y mesa de dulces, cuántos pedir con un ejemplo de cálculo, cuánto cuestan y con qué tiempo pedirlos, tanto si organizas tú la fiesta como si trabajas con una planner.",
    sections: [
      {
        heading: "Qué recuerdo de baby shower elegir",
        body: [
          "Elige un recuerdo pequeño, igual para cada invitado y fácil de llevar a casa. Un dulcero personalizado cumple con eso: llega armado y vacío, tiene asa y se llena con lo que tú decidas. Lo que lo hace especial es el diseño, no solo el nombre del bebé.",
          "Una guía de checklist para baby showers describe el recuerdo ideal como algo pequeño, igual para todos y colocado cerca de la salida. Sus ejemplos son algo comestible, una planta, una vela o un sobre de semillas. Un [dulcero personalizado](/productos/dulceros-personalizados) entra en esa idea, con la ventaja de que el diseño es propio de tu fiesta y no uno de catálogo.",
          "Una nota de Crónica sobre recuerdos de boda en México en 2026 apunta en la misma dirección: los invitados conservan piezas útiles y con diseño propio, mientras que los recuerdos genéricos suelen acabar olvidados. Aplicado al baby shower, la idea es sumar diseño y utilidad, no solo poner un nombre. Para decidir qué lleva dentro, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Dulceros para baby shower personalizados: qué poner dentro",
        body: [
          "El dulcero llega armado y vacío, así que tú eliges el relleno. Una guía en español sobre baby shower propone como recuerdos comestibles galletas decoradas, chocolates y dulces en empaques que reflejen el tema de la fiesta, y dice que los dulces siempre son un éxito. Tú decides la combinación que va con tu paleta.",
          "La personalización del dulcero incluye el nombre y la temática, así que ahí va lo que une el relleno con el resto de la fiesta: el nombre del bebé o de la mamá y la paleta que elegiste. Puedes pedir tus [dulceros para baby shower](/productos/dulceros-personalizados) con el nombre y la temática de tu fiesta.",
        ],
      },
      {
        heading: "Dulcero individual o mesa de dulces: cuál elegir",
        body: [
          "El dulcero individual es una pieza por invitado con su empaque personalizado, y se lleva a casa. La mesa de dulces es compartida y se queda en la fiesta como parte de la decoración. Si quieres que cada persona se vaya con un recuerdo propio, elige el dulcero; la mesa funciona como complemento.",
          "La misma guía en español menciona cupcakes y galletas para la mesa de dulces, y por separado propone los empaques personalizados como recuerdo comestible. Dos piezas distintas, dos papeles distintos: la mesa se disfruta en la fiesta y el dulcero es lo último que se lleva cada invitado.",
        ],
      },
      {
        heading: "Recuerdos para baby shower de niña, de niño o neutros",
        body: [
          "Para niña, para niño o con paleta neutra, la regla es la misma: usa los colores de la fiesta y repite el diseño en cada pieza. Puedes elegir rosa o crema, azul o verde, y beige, blanco o verde suave. El nombre del bebé o de la mamá va visible.",
          "Para niña, una paleta rosa, crema o la que elija la familia puede acompañar el nombre del bebé. Coordina el diseño del dulcero y del sticker con la invitación o con la mesa, para que todo se vea parte de la misma celebración.",
          "Para niño, prueba azul, verde o los colores de la celebración. El nombre y una ilustración sencilla pueden repetirse en el dulcero y en el sticker, de modo que cada invitado se lleve una pieza que combina con lo que vio en la fiesta.",
          "Si la familia prefiere una propuesta neutral, beige, blanco o verde suave funcionan bien. Elige una temática propia y deja espacio para el nombre; antes de producir recibirás una prueba digital para revisar el resultado.",
        ],
      },
      {
        heading: "Cómo personalizar un recuerdo de baby shower",
        body: [
          "Personalizar bien es más que escribir un nombre. Define qué nombre va (el del bebé o el de la mamá), la paleta del evento y una ilustración sencilla. Antes de producir recibes una prueba digital para revisar el diseño, y nada se produce hasta que la apruebas.",
          "Si ya tienes la invitación o fotos de la decoración, mándalas por WhatsApp y adaptamos el diseño a esos colores. Así el recuerdo no se ve como una pieza aparte, sino como el cierre natural de la fiesta.",
          "Un sticker con el mismo diseño puede decorar o cerrar el recuerdo. Los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) se hacen con tu diseño, personaje o foto y se venden por cantidad de piezas, así que puedes repetir la ilustración del dulcero en cada uno.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir para un baby shower y cuánto cuestan",
        body: [
          "Pide un dulcero por invitado confirmado y suma 10% de margen. El margen cubre a un acompañante que no estaba en la lista, a quien se lleva uno para alguien que no pudo ir y a una pieza dañada. Es la regla de 1.1 por invitado que usa una calculadora de recuerdos para eventos de adultos.",
          `Ejemplo: con 40 invitados confirmados, 40 por 1.1 son 44 dulceros. Primeras 100 piezas: 44 dulceros cuestan $${priceOf("dulceros-personalizados", 44)} MXN. El mínimo es de 10 piezas: 10 dulceros cuestan $${priceOf("dulceros-personalizados", 10)} MXN y 50 cuestan $${priceOf("dulceros-personalizados", 50)} MXN. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp.`,
          `Los stickers de vinil tienen un mínimo de 40 piezas, que cuestan $${priceOf("stickers-vinil-impermeable", 40)} MXN. Cuando cierres la lista de confirmados, aplica la cuenta anterior para los dulceros y decide cuántos stickers sumar.`,
          "Si quieres comparar ideas para otras celebraciones, consulta la [guía de dulceros para eventos sociales](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower).",
        ],
      },
      {
        heading: "Cuándo pedir los recuerdos de baby shower",
        body: [
          `La producción toma ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles desde la aprobación de la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles de envío nacional o ${PICKUP_EXTRA_DAYS} día hábil para recoger en Casa Blanca en Guadalajara. Pídelos con holgura para definir el nombre, la temática y revisar la prueba.`,
          "Como referencia general, la guía de checklist que citamos sugiere empezar a planear unas 8 semanas antes, enviar invitaciones unas 4 semanas antes y fijar la fecha límite de confirmación unas 2 semanas antes. También propone comprar el envoltorio de los recuerdos y los artículos no perecederos unas 2 semanas antes. Puedes usar ese calendario y sumarle el tiempo de producción de arriba.",
          "Comparte la fecha del baby shower y la cantidad por WhatsApp si necesitas confirmar la planificación antes de pedir.",
        ],
      },
      {
        heading: "Baby shower con planner: tiempos y trato directo",
        body: [
          "Si organizas el baby shower con una planner, o eres planner, el flujo es simple: compartes fecha, cantidad, nombre y paleta por WhatsApp, recibes una prueba digital y apruebas antes de producir. Así los tiempos quedan claros desde el inicio y el recuerdo combina con el resto del evento.",
          "Atendemos Guadalajara y Zapopan, y enviamos a todo México. Si el evento es en la zona metropolitana de Guadalajara, puedes recoger en Casa Blanca. Para más detalles de pedidos en tu ciudad, revisa [dulceros en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-para-eventos-sociales-boda-xv-baby-shower", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    sources: [
      { label: "Visu: checklist para baby shower", url: "https://visu.network/es/articulos/checklist-para-baby-shower/" },
      { label: "Crónica: recuerdos de boda que sí se quedan los invitados en 2026", url: "https://www.cronica.com.mx/tendencias/2026/09/04/dile-adios-a-los-recuerdos-de-boda-que-terminan-en-la-basura-esto-es-lo-que-si-se-quedan-tus-invitados-en-2026/" },
      { label: "HaceCuentas: calculadora de regalos y souvenirs por invitado", url: "https://hacecuentas.com/calculadora-regalos-invitado-souvenir" },
      { label: "Guía Infantil: ideas para regalar a los invitados en un baby shower", url: "https://www.guiainfantil.com/bebes/canastilla-ajuar/decoracion-e-ideas-para-regalar-a-los-invitados-en-un-baby-shower/" },
    ],
    faq: [
      {
        q: "¿Qué características tiene un buen recuerdo de baby shower?",
        a: "Según una guía de checklist para baby showers, debe ser pequeño, igual para cada invitado, colocado cerca de la salida y fácil de llevar a casa. Algunos ejemplos son algo comestible, una planta, una vela o un sobre de semillas.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Qué puedo poner dentro de un dulcero de baby shower?",
        a: "Una guía en español sobre baby shower propone galletas decoradas, chocolates y dulces en empaques que reflejen el tema de la fiesta.",
      },
      {
        q: "¿Cuántos dulceros pido si confirman 60 invitados?",
        a: "Con la regla de 1.1 por invitado serían 66 dulceros: uno por persona más 10% de margen.",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "Para dulceros personalizados el mínimo es de 10 piezas. Para stickers de vinil el mínimo es de 40 piezas.",
      },
      {
        q: "¿Puedo ver el diseño antes de que se produzca?",
        a: "Sí. Te enviamos una prueba digital antes de producir, y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Cuánto tardan en llegar los dulceros?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Con cuánta anticipación conviene empezar a planear el baby shower?",
        a: "Una guía de checklist para baby showers sugiere empezar unas 8 semanas antes, enviar invitaciones unas 4 semanas antes y cerrar confirmaciones unas 2 semanas antes. Para el recuerdo personalizado, suma el tiempo de producción y envío.",
      },
    ],
  },
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
    title: "Stickers y etiquetas personalizadas en Guadalajara",
    metaTitle: "Stickers personalizados en Guadalajara: cómo pedir",
    description:
      "Stickers y etiquetas personalizadas en Guadalajara para bodas y eventos: cómo elegir, de qué depende el precio y cómo pedir con prueba digital.",
    category: "Guías",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-11-05",
    intro:
      "Si buscas stickers personalizados en Guadalajara, lo primero es saber qué camino te conviene: un estudio con trato directo, una imprenta industrial o una plataforma en línea. Aquí te explicamos las diferencias, cuándo conviene una etiqueta o un sticker para una boda, un evento o una marca pequeña, de qué depende el precio y cómo pedir paso a paso. Una etiqueta o un sticker con tu diseño hace que un evento o una marca se vean cuidados y consistentes.",
    sections: [
      {
        heading: "Stickers personalizados en Guadalajara: dónde pedirlos",
        body: [
          "En Guadalajara puedes pedir stickers personalizados a un estudio con trato directo, a una imprenta industrial o en una plataforma en línea. Para un evento o una marca pequeña, el estudio suele encajar mejor porque revisas tu diseño con una persona antes de imprimir. Yume produce sobre pedido en Guadalajara y atiende por WhatsApp.",
          "Trabajamos piezas para un evento concreto o una marca pequeña, con prueba digital antes de producir. La producción industrial o en serie no es nuestro enfoque, pero escríbenos por WhatsApp y vemos tu caso.",
        ],
      },
      {
        heading: "Etiqueta o sticker para bodas y eventos: cuál elegir",
        body: [
          "La diferencia es el uso, no el pedido: en ambos eliges corte y acabado y recibes prueba digital. Las etiquetas con logo piden mínimo 50 piezas y van bien con tu logo o un diseño propio. Los stickers de vinil piden mínimo 40 piezas y sirven para cualquier diseño, personaje o foto.",
          "Con las [etiquetas personalizadas con logo](/productos/stickers-logo-personalizado) y los [stickers de vinil](/productos/stickers-vinil-impermeable) puedes cubrir una boda, un bautizo, un baby shower o un cumpleaños. Cuéntanos la ocasión y los colores por WhatsApp y te decimos cuál opción encaja mejor. Si trabajas como planner, puedes pedir por evento la cantidad exacta que necesitas, con prueba digital antes de producir.",
        ],
      },
      {
        heading: "Para qué sirven las etiquetas personalizadas",
        body: [
          "Los usos más comunes son sellar bolsas o cajas de empaque, pegar en el fondo de productos como velas, jabones o frascos, cerrar sobres de envíos o regalarlas sueltas como detalle en el pedido. Funcionan como una tarjeta de presentación pequeña que además decora, y también sirven como detalle para invitados en un evento.",
          "Si vendes en bazares o mercados de Guadalajara, tener etiquetas con tu logo en cada bolsa de papel ayuda a que la gente te reconozca la próxima vez, sin gastar en empaque personalizado caro desde el arranque.",
        ],
      },
      {
        heading: "De qué depende el precio de los stickers personalizados",
        body: [
          "Vendemos por cantidad de piezas, no por hoja. El precio depende de la opción que elijas, de la cantidad y del acabado: mate y brillante cuestan igual y el holográfico tiene un costo extra por pieza. Primeras 100 piezas van a precio de lista; pasando las 100, cada pieza extra va a precio mayoreo, 10% menos.",
          "Hay dos opciones: las Etiquetas con tu Logo, pensadas para el logo de tu negocio o tu evento (mínimo 50 piezas), y los Stickers de Vinil Personalizados, para cualquier diseño, personaje o foto (mínimo 40 piezas). En ambas eliges el corte (troquelado, a la forma de tu diseño, o semitroquelado) y el acabado: mate, brillante u holográfico. Todas son resistentes al agua.",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Qué cantidad pedir",
        body: [
          "Como se vende por pieza, pides la cantidad exacta que necesitas en vez de planillas completas. El mínimo es de 50 piezas con tu logo y de 40 en stickers de vinil, así que puedes ajustar el pedido al tamaño real de tu evento o de tu emprendimiento sin comprar de más.",
          "Cuéntanos la forma o el tamaño que prefieres al cotizar y te mandamos una prueba digital antes de imprimir. Si dudas entre formatos, revisa la guía de [rollo, hoja o por pieza](/blog/impresion-de-etiquetas-rollo-hoja-o-por-pieza).",
        ],
      },
      {
        heading: "Recoger en Guadalajara o recibir a domicilio",
        body: [
          `No tenemos tienda física, pero producimos en Guadalajara. En la zona metropolitana puedes recoger tu pedido en una de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca por $${CASABLANCA_PRICE}, o recibirlo a domicilio en todo México por $${NATIONAL_SHIPPING_PRICE}. Desde $${FREE_SHIPPING_THRESHOLD} de compra, ambas opciones son gratis.`,
          `Las sucursales de recolección son: ${casablancaBranchNames}. Eliges la sucursal al pagar.`,
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, recoger en Casa Blanca toma ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles y el envío a domicilio ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles.`,
        ],
      },
      {
        heading: "Qué datos mandar para cotizar tu pedido",
        body: [
          "Para cotizar, mándanos por WhatsApp tu logo o diseño, la cantidad de piezas, el uso que le darás y la fecha de tu evento. Con eso te decimos qué opción conviene y preparamos la prueba digital. Si todavía no tienes un logo, dínoslo al cotizar y vemos tu caso.",
          "Si tu archivo necesita ajustes, te avisamos al preparar la prueba digital, antes de producir.",
        ],
      },
      {
        heading: "Cómo pedir stickers personalizados paso a paso",
        body: [
          "Pedir es sencillo: eliges la opción y la cantidad, mandas tu logo o diseño y recibes una prueba digital antes de imprimir. Puedes comprar en la tienda en línea o cotizar primero por WhatsApp si tienes dudas. Nada se produce hasta que apruebas la prueba.",
          "Paso 1: elige entre etiquetas con logo o stickers de vinil, el corte (troquelado o semitroquelado) y el acabado (mate, brillante u holográfico). Paso 2: escribe la cantidad exacta, desde 50 piezas con logo o 40 en vinil. Paso 3: sube tu diseño o mándalo por WhatsApp. Paso 4: revisa la prueba digital, con hasta 2 rondas de ajustes, y apruébala. Paso 5: recoge en una sucursal Casa Blanca o recíbelo en casa.",
          "Si no sabes si te conviene vinil o papel, lee la comparación de [stickers de vinil y de papel](/blog/stickers-vinil-vs-papel-diferencias).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Dónde puedo imprimir stickers y etiquetas personalizadas en Guadalajara?",
        a: "Puedes elegir entre un estudio de diseño, una imprenta industrial o una plataforma en línea. Nosotros somos un estudio: producimos sobre pedido en Guadalajara, mandamos prueba digital y atendemos por WhatsApp, sin tienda física.",
      },
      {
        q: "¿Hacen pedidos industriales o en serie?",
        a: "No es nuestro enfoque, pero escríbenos por WhatsApp y vemos tu caso. Trabajamos sobre todo piezas para un evento o una marca pequeña.",
      },
      {
        q: "¿Hacen etiquetas para bodas y eventos?",
        a: "Sí, hacemos stickers y etiquetas para bodas y eventos. Cuéntanos la ocasión y los colores por WhatsApp y te ayudamos a elegir entre etiquetas con logo o stickers de vinil.",
      },
      {
        q: "¿Puedo cotizar por WhatsApp antes de comprar?",
        a: "Sí. Puedes cotizar por WhatsApp o comprar directo en la tienda en línea. En ambos casos recibes una prueba digital y no imprimimos nada hasta que la apruebas.",
      },
      {
        q: "¿Cuántas rondas de ajustes incluye la prueba digital?",
        a: "La prueba digital incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
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
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "stickers-para-empaques-de-negocio", "impresion-de-etiquetas-rollo-hoja-o-por-pieza", "dulceros-personalizados-guadalajara"],
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
    title: "Tatuajes temporales personalizados en Guadalajara para fiestas y eventos",
    metaTitle: "Tatuajes temporales personalizados en Guadalajara",
    description:
      "Tatuajes temporales personalizados en Guadalajara para bodas, XV años y fiestas: cómo cotizar por WhatsApp y recibir prueba digital antes de producir.",
    category: "Guías",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-11-03",
    intro:
      "Un tatuaje temporal con tu logo o con un diseño hecho para la ocasión deja huella en un evento, y literalmente. Si tu fiesta es en Guadalajara o Zapopan, los tatuajes temporales personalizados funcionan igual para una boda, unos XV años, un baby shower, una posada o un evento de empresa. Aquí te explicamos para qué eventos sirven, cómo diseñarlos, qué cuidar si hay piel sensible, qué necesitamos para cotizar y cómo planear el pedido con tiempo.",
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
        heading: "Tatuajes temporales personalizados en Guadalajara y Zapopan",
        body: [
          "Producimos tus tatuajes temporales personalizados en Guadalajara y enviamos a todo México, así que si tu fiesta es en Guadalajara o Zapopan trabajas directo con quien los hace. Cotizas por WhatsApp, apruebas una prueba digital y nos dices la fecha y la ciudad de entrega.",
          "Esto le sirve a quien organiza una celebración para alguien querido, a las wedding planners y event planners que piden un detalle distinto para cada cliente, y a las empresas que preparan una posada o un evento con clientes. En todos los casos el pedido es por evento, con diseño propio y trato directo.",
          "Si quieres ver cómo se ve el trabajo terminado, en la [galería de trabajos](/galeria) hay fotos de tatuajes temporales que hemos producido.",
        ],
      },
      {
        heading: "Para qué eventos sirven los tatuajes temporales",
        body: [
          "Los tatuajes temporales personalizados sirven para bodas y XV años, activaciones de marca, eventos de empresa y eventos deportivos o escolares. La persona se los lleva puestos y los muestra durante toda la celebración, así que funcionan como un detalle que se mueve por todo el salón y se convierte en recuerdo.",
          "Los vemos más seguido en tres contextos. El primero son las bodas y los XV años, con las iniciales, la fecha o un ícono relacionado con el festejo. El segundo son los eventos de empresa, como posadas, lanzamientos y aniversarios, con el logo de la marca. El tercero son los eventos deportivos o escolares, con el logo del equipo o de la institución.",
          "A diferencia de una etiqueta, un tatuaje temporal se lo lleva la persona puesto. Funciona como una pieza que la gente usa y muestra durante el resto del evento, no como algo que termina guardado en una bolsa. Para ver ideas por ocasión, revisa la guía de [tatuajes temporales para bodas y fiestas](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas).",
        ],
      },
      {
        heading: "Ideas de diseño para bodas, XV años y eventos de empresa",
        body: [
          "Un buen diseño de tatuaje temporal es simple y se lee a primera vista: iniciales, una fecha, un ícono del festejo o tu logo. Entre menos detalle tenga, mejor se entiende en un tamaño pequeño sobre la piel, y más fácil es que combine con la decoración del evento.",
          "Para una boda, lo más práctico es usar las iniciales de la pareja y la fecha, o un ícono sencillo que represente su historia. Si tienes la invitación o la paleta de la decoración, mándanos una foto y adaptamos el diseño para que se vea como parte del mismo evento.",
          "Para XV años o un cumpleaños, funciona el nombre de la festejada o del festejado con un detalle de la temática. Para una empresa, lo más fácil es tu logo limpio, sin textos largos, porque se lee mejor en tamaño chico.",
          "Si ya estás armando la mesa de dulces o los souvenirs, piensa el tatuaje como parte del conjunto: el mismo diseño puede acompañar a los [dulceros personalizados](/blog/dulceros-personalizados-guadalajara) y a los [stickers de vinil](/productos/stickers-vinil-impermeable). Así todo el evento se ve planeado.",
        ],
      },
      {
        heading: "¿Son seguros los tatuajes temporales para niños y piel sensible?",
        body: [
          "Depende de las tintas, y por eso conviene preguntar por los ingredientes antes de pedir. La FDA de Estados Unidos recibe reportes de alergias a tintas de tatuaje y dice que una erupción puede indicar reacción alérgica. Si alguien tiene piel sensible, consulta a un profesional de salud ante enrojecimiento, bultos o erupción.",
          "La FDA también explica que el PPD (parafenilendiamina) de algunas tintas puede causar alergia a otros productos, como los tintes para el cabello. Su página trata de tatuajes permanentes, así que la usamos solo como motivo para ser prudentes, no como descripción de las tintas de un tatuaje temporal.",
          "Si en tu evento habrá niños o personas con alergias, escríbenos por WhatsApp antes de pedir y lo revisamos contigo. Sobre la duración, una referencia indica que los tatuajes temporales tipo calcomanía duran de horas a días, según el tipo, la zona del cuerpo y el cuidado. Para ver cómo quitarlos, lee [cuánto duran y cómo quitarlos](/blog/cuanto-duran-los-tatuajes-temporales-y-como-quitarlos).",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar tus tatuajes temporales",
        body: [
          "Para cotizar necesitamos tres datos: tu logo o diseño, el tamaño aproximado que buscas y la cantidad para tu evento. Si el diseño lleva texto, como un nombre, una fecha o una frase, avísanos para confirmar que se vea legible en el tamaño final antes de producir.",
          "Si no tienes tu logo a la mano, mándanos lo que tengas y te decimos si se puede usar. Con el tamaño aproximado sabemos cuánto detalle cabe, y con la cantidad podemos cotizar bien. Si es la primera vez que pides, escríbenos y te ayudamos a calcularla.",
          "Antes de producir te mandamos una prueba digital del diseño para que la apruebes. Así confirmas cómo se va a ver antes de que se imprima la cantidad completa. Puedes empezar desde la página de [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados).",
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
        a: "Tu logo o diseño, el tamaño aproximado y la cantidad. Si el diseño lleva texto, dínoslo para confirmar que se vea legible.",
      },
      {
        q: "¿Producen en Guadalajara y envían a todo México?",
        a: "Sí. Producimos en Guadalajara y enviamos a todo México.",
      },
      {
        q: "¿Atienden eventos en Guadalajara y Zapopan?",
        a: "Sí. Producimos en Guadalajara y enviamos a todo México. Escríbenos por WhatsApp con la fecha y la ciudad de entrega de tu evento y te cotizamos.",
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
        q: "¿Son seguros para niños y piel sensible?",
        a: "Depende de las tintas. La FDA recibe reportes de alergias a tintas de tatuaje y recomienda consultar a un profesional de salud si hay enrojecimiento, bultos o erupción. Si alguien en tu evento tiene piel sensible o alergias, escríbenos antes de pedir.",
      },
      {
        q: "¿Cuánto duran los tatuajes temporales?",
        a: "Una referencia externa indica que los tatuajes temporales tipo calcomanía duran de horas a días, según el tipo, la zona del cuerpo y el cuidado.",
      },
      {
        q: "¿Puedo ver ejemplos reales?",
        a: "Sí. En la galería del sitio hay fotos de tatuajes temporales que hemos producido.",
      },
    ],
    sources: [
      { label: "FDA: Piense antes de tatuarse, la seguridad de los tatuajes", url: "https://www.fda.gov/consumers/articulos-para-el-consumidor-en-espanol/piense-antes-de-tatuarse-la-seguridad-de-los-tatuajes" },
      { label: "Temporary Tattoos: seguridad del producto", url: "https://www.temporarytattoos.com/pages/product-safety" },
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
    title: "Papelería para boda: qué pedir y con cuánta anticipación",
    metaTitle: "Papelería para boda: qué pedir y cuándo",
    description:
      "Papelería para boda: calendario por piezas (save the date, invitaciones, menú y stickers), qué datos necesitas y cuándo cotizar por WhatsApp.",
    category: "Guías",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-03",
    intro:
      "La papelería para boda no es una sola pieza: es un conjunto que va del save the date al menú, y cada pieza se pide en un momento distinto. Esta guía te da un orden de decisiones, rangos de referencia para cada pieza, los datos que necesitas para cotizar y cómo pedir tu menú de boda personalizado en Yume. Para tiempos y precios reales, cotizamos por WhatsApp.",
    sections: [
      {
        heading: "Papelería para boda: qué piezas incluye y en qué orden decidirla",
        body: [
          "La papelería para boda es el conjunto de piezas que acompañan al evento, como save the date, invitación, menú y stickers. Se decide en orden: primero la lista de invitados y el menú definitivo, luego el diseño con prueba digital y al final la producción. Conviene que todas compartan una línea gráfica.",
          "Las piezas dependen unas de otras: la lista de invitados define cuántas necesitas y el banquete define el texto del menú. Por eso el orden importa más que la fecha exacta de cada pedido.",
          "Yume cotiza el menú, las [invitaciones personalizadas para eventos](/blog/como-pedir-invitaciones-personalizadas-para-eventos) y los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) para cerrar sobres o sellar bolsitas. Si necesitas otra pieza, como place cards o programas, pregúntanos por WhatsApp si podemos cotizarla.",
        ],
      },
      {
        heading: "Calendario hacia atrás: cuándo pedir cada pieza",
        body: [
          "No existe un plazo único: según Bodas.net, el save the date se envía entre 10 y 12 meses antes de la boda y las invitaciones unos 3 meses antes, pero otras guías dan rangos distintos. Usa estas cifras como referencia, cuenta hacia atrás desde tu fecha y cotiza por WhatsApp para saber tiempos reales.",
          "Son rangos de referencia de guías, no tiempos de producción de Yume. Si tu boda es pronto, escríbenos cuanto antes con tu fecha.",
        ],
        table: {
          headers: ["Pieza", "Referencia", "Qué debe llevar o qué necesitas"],
          rows: [
            ["Save the date", "Se envía entre 10 y 12 meses antes (Bodas.net)", "Nombres, fecha completa y, si aplica, la ciudad. No necesita sede, mapa, dress code ni RSVP."],
            ["Invitación", "Se envía unos 3 meses antes (Bodas.net); pídela antes de esa fecha", "Los datos que el save the date deja fuera, como sede, mapa, dress code y RSVP"],
            ["Menú", "Después de cerrar el banquete; las guías en español casi no dan fecha de impresión", "Cantidad, texto exacto en orden, fecha del evento y estilo"],
            ["Stickers y detalles", "Sin plazo de referencia en las fuentes; cotiza por WhatsApp", "Cantidad y la misma línea de diseño del resto de la papelería"],
          ],
        },
      },
      {
        heading: "Por qué cerrar el menú antes de pedir el resto",
        body: [
          "El texto del menú sale del banquete, así que depende de que esté confirmado. Si pides invitaciones y menú con un diseño ya aprobado y después cambia un platillo, habría que ajustar piezas ya diseñadas. Por eso conviene fijar primero el menú definitivo y después encargar la papelería que lo acompaña.",
          "En las guías en español que revisamos, el menú casi no aparece en los plazos: la degustación se trata como un paso aparte y sin fecha de impresión. Cierra el banquete, escribe el texto del menú y entonces fija el diseño de toda la papelería, para que cada pieza use la misma línea gráfica.",
        ],
      },
      {
        heading: "¿Cambia el calendario si viajan tus invitados o es temporada alta?",
        body: [
          "Sí. Según guías en inglés, el save the date de una boda local se pide de 6 a 8 meses antes, y el de una boda de destino o en temporada alta, de 12 a 14 meses. Son rangos de referencia, no una regla, y otras guías dan cifras distintas.",
          "Esos rangos vienen de guías en inglés y no de fuentes de México. Si tu boda es en temporada alta o tus invitados viajan, dínoslo al cotizar para tenerlo en cuenta.",
        ],
      },
      {
        heading: "Si eres planner: cómo coordinar la papelería de varias bodas",
        body: [
          "Si coordinas bodas, la papelería es un solo proyecto con varias piezas que dependen unas de otras. Reúne por cliente la lista de invitados, el menú definitivo y la referencia visual, y cotiza el conjunto en un solo mensaje por WhatsApp. Así recibes una propuesta con prueba digital y una línea de diseño común.",
          "Pide la prueba digital de cada pieza y confirma con tu cliente antes de aprobar: solo cuando se aprueba el diseño final pasa a producción. Si trabajas con varias bodas al año, escríbenos por WhatsApp para coordinar cantidades y fechas de cada evento.",
        ],
      },
      {
        heading: "Qué información necesitamos para cotizar tu menú",
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
        heading: "Cómo combinar el menú con el resto de tu papelería",
        body: [
          "Para que el menú se vea como parte del mismo evento, usa la misma línea de diseño que tus invitaciones: mismos colores, misma tipografía y mismos detalles. Así la mesa, el sobre y la bolsita de regalo se leen como un solo conjunto y no como piezas compradas por separado.",
          "Para sellar bolsitas o cerrar sobres con el mismo diseño, revisa los [stickers para bodas](/blog/stickers-para-bodas-eventos-y-fiestas), y para el detalle que se lleva cada invitado, los [dulceros para bodas](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower) o los [dulceros personalizados](/productos/dulceros-personalizados).",
          "También puedes alinear los detalles del evento con [tatuajes temporales para boda](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas) en la pista de baile. Cuando tengas el diseño del menú, pídenos que lo adaptemos al resto de piezas: reutilizar la misma línea evita rehacer decisiones de estilo desde cero.",
        ],
      },
      {
        heading: "Cuándo cotizar tu papelería con Yume",
        body: [
          "Cotiza en cuanto tengas fecha, lista aproximada de invitados y banquete cerrado, aunque falten ajustes menores. Escríbenos por WhatsApp con el tipo de evento, la fecha y las piezas que quieres, y te damos tiempos y precios reales. Producimos en Guadalajara y enviamos a todo México.",
          "Si dudas entre un diseño a medida y algo prediseñado, revisa [papelería personalizada frente a plantillas](/blog/papeleria-personalizada-vs-plantillas-genericas).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Con cuánta anticipación pido la papelería de mi boda?",
        a: "No hay un plazo único. Cuenta hacia atrás desde la fecha de tu boda, cierra primero el menú y cotiza por WhatsApp para conocer los tiempos y precios reales de cada pieza.",
      },
      {
        q: "¿Cuándo se envía el save the date?",
        a: "Según Bodas.net, entre 10 y 12 meses antes de la boda, con los nombres, la fecha completa y, si aplica, la ciudad. Otras guías dan rangos distintos, así que tómalo como referencia.",
      },
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
    quoteMessage: "Hola, me interesa cotizar la papelería de mi boda (menú, invitaciones y stickers).",
    sources: [
      { label: "Bodas.net: anuncia tu boda con un save the date", url: "https://www.bodas.net/articulos/anuncia-tu-boda-con-un-save-the-date--c983" },
    ],
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
    metaTitle: "Placas de reseñas de Google: qué son y cuánto cuestan",
    description:
      "Conoce las placas de reseñas de Google con NFC y QR: cómo funcionan, cuánto cuestan y cómo pedir reseñas respetando las reglas de Google.",
    category: "Guías",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-11-03",
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
    relatedBlogSlugs: ["placas-resenas-google-pago-unico-vs-suscripcion", "placa-nfc-vs-codigo-qr-impreso-resenas", "como-usar-placa-resenas-google-yume", "como-configurar-perfil-de-google-y-pedir-resenas", "placa-resenas-google-para-consultorios", "placa-resenas-google-para-restaurantes", "placa-resenas-google-para-salones-esteticas-y-barberias", "placa-resenas-google-para-planners-y-eventos", "como-hacer-una-encuesta-de-satisfaccion-del-cliente"],
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
    relatedBlogSlugs: ["placas-resenas-google-pago-unico-vs-suscripcion", "como-conseguir-mas-resenas-de-google-nfc-qr", "como-usar-placa-resenas-google-yume", "como-configurar-perfil-de-google-y-pedir-resenas", "placa-resenas-google-para-consultorios", "placa-resenas-google-para-restaurantes", "placa-resenas-google-para-salones-esteticas-y-barberias", "placa-resenas-google-para-planners-y-eventos", "como-hacer-una-encuesta-de-satisfaccion-del-cliente"],
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
    relatedBlogSlugs: ["placas-resenas-google-pago-unico-vs-suscripcion", "como-conseguir-mas-resenas-de-google-nfc-qr", "placa-nfc-vs-codigo-qr-impreso-resenas", "como-configurar-perfil-de-google-y-pedir-resenas", "placa-resenas-google-para-consultorios", "placa-resenas-google-para-restaurantes", "placa-resenas-google-para-salones-esteticas-y-barberias", "placa-resenas-google-para-planners-y-eventos", "como-hacer-una-encuesta-de-satisfaccion-del-cliente"],
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
    metaTitle: "Stickers para empaques de negocio: guía y qué pedir",
    description:
      "Cómo usar stickers para empaques de negocio y de eventos: cierre de cajas y bolsas, qué pedir, qué archivo mandar y cómo pedir tu prueba digital.",
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-05",
    intro:
      "El empaque es uno de los puntos de contacto más fáciles de mejorar: no necesitas cambiar tu caja o tu bolsa, basta con cerrarla o decorarla con un sticker que lleve tu logo, tu nombre o el de los festejados. Esta guía cubre los usos más comunes de los stickers para empaques de negocio y de evento, qué pedir, qué archivo mandar y cómo cotizar.",
    sections: [
      {
        heading: "Para qué sirven los stickers para empaques de negocio",
        body: [
          "Los stickers para empaques de negocio sirven para cerrar una bolsa o una caja, identificar el producto y darle un detalle de marca sin cambiar el empaque. Se colocan en la solapa, la tapa o el frente, y funcionan igual en una tienda, un regalo de boda o un kit de bienvenida.",
          "Los usos que más vemos: sellar la solapa de una bolsa de papel o kraft, cerrar una caja de cartón, etiquetar la tapa de un frasco o pegarlo directo en el producto, como velas, jabones o cosméticos. En todos los casos, el sticker cumple dos funciones a la vez: cierra el empaque y lo identifica como tuyo.",
          "Nuestros stickers y etiquetas con logo son resistentes al agua, según la ficha del producto. Si tu empaque va a viajar o a manipularse mucho, confirma por WhatsApp el material que mejor se ajusta a tu caso antes de decidir."
        ],
      },
      {
        heading: "Cómo colocar el sticker según el tipo de empaque",
        body: [
          "Cada empaque pide un lugar distinto: en una bolsa el sticker va en la solapa para sellarla, en una caja de regalo sobre la tapa o el cierre, y en una tarjeta o un detalle para invitados en una esquina o al centro. Elige el sitio antes de definir el tamaño.",
          "Pensar primero en el lugar te evita pedir un sticker que tape el diseño de la caja o que se quede corto en la solapa. Si tienes el empaque a la mano, mídelo y mándanos la medida junto con tu logo."
        ],
        table: {
          headers: ["Empaque", "Dónde va el sticker", "Qué logra"],
          rows: [
            ["Bolsa de papel o kraft", "Sobre la solapa", "Sella la bolsa y muestra tu marca"],
            ["Caja de cartón o de regalo", "En la tapa o en el cierre", "Cierra la caja y la identifica"],
            ["Frasco o producto", "En la tapa o directo en el producto", "Etiqueta el producto"],
            ["Tarjeta o detalle para invitados", "En una esquina o al centro", "Personaliza el detalle"]
          ],
        },
      },
      {
        heading: "Stickers para empaques de eventos: bodas, regalos y kits",
        body: [
          "En un evento, el sticker convierte un empaque simple en un detalle planeado: sella la bolsa de recuerdos, cierra la caja de regalo o identifica el kit de bienvenida con el nombre de los festejados o el logo de la empresa. Se pide por pieza, así que ajustas la cantidad al número de invitados.",
          "Sirve para bodas, bautizos, XV años, baby showers, posadas y eventos de empresa. Si organizas eventos para otras personas, puedes pedir un diseño distinto para cada evento y aprobarlo en la prueba digital antes de producir.",
          "Si además piensas en un detalle para la mesa de dulces, mira nuestros [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara): puedes repetir los colores y el nombre del sticker para que todo se vea coordinado."
        ],
      },
      {
        heading: "Etiquetas personalizadas para empaques: qué pedir",
        body: [
          "Al pedir define cuatro cosas: la forma de corte, el acabado, la cantidad y el tamaño. En Yume eliges corte troquelado o semitroquelado, y acabado mate, brillante u holográfico. Se venden por pieza, no por planilla, y antes de imprimir recibes una prueba digital para aprobar.",
          "Para el logo de tu negocio o de tu evento, revisa los [stickers con tu logo](/productos/stickers-logo-personalizado), que se piden desde 50 piezas. Si quieres convertir un personaje, una mascota o una foto en sticker, los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) se piden desde 40 piezas. El acabado holográfico tiene un costo extra por pieza.",
          "Como pides la cantidad exacta, no compras de más solo para llenar una planilla. En los stickers de vinil, la prueba digital llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. Si dudas entre materiales, lee la comparación de [vinil contra papel](/blog/stickers-vinil-vs-papel-diferencias)."
        ],
      },
      {
        heading: "Qué archivo mandar y qué revisar antes de imprimir",
        body: [
          "Manda tu logo en el mejor formato que tengas y revisa que nada importante quede pegado al borde. Como referencia de Sticker Mule, piden arte vectorial o imágenes de al menos 300 PPI, y cada taller tiene su propia plantilla. Confirma las medidas con quien imprime tu pedido.",
          "En Yume puedes mandar tu logo en PNG, PDF, AI o SVG con fondo transparente directo por WhatsApp. Si todavía no tienes un logo definido, también podemos ayudarte a construir uno simple para arrancar.",
          "Sangrado: es el margen de diseño que se extiende más allá de la línea de corte. Como referencia, Sticker Mule usa 1/16 de pulgada y Moo recomienda 1/8 de pulgada (3 mm). No es una norma universal: varía según el proveedor.",
          "Márgenes y texto: Moo sugiere dejar logotipos, códigos QR y texto clave al menos 1/8 de pulgada (3 mm) dentro del corte. Como referencia de ese mismo proveedor, el cuerpo de texto debe superar los 6 pt y el nombre de marca o la información importante los 8 pt. Conviene ver el archivo al 100 %, que es el tamaño real de impresión.",
        ],
      },
      {
        heading: "Tiempos y cotización por WhatsApp",
        body: [
          "Para cotizar, escríbenos por WhatsApp con tu logo, la cantidad y el tamaño que buscas. Te preparamos una prueba digital antes de imprimir y nada se produce sin tu aprobación. Producimos en Guadalajara y enviamos a todo México, así que el proceso es igual para un evento local o uno en otro estado.",
          "Si tu empaque lleva fecha, como una boda o una posada, pide con tiempo y revisa cuánto tarda un pedido en la guía de [tiempos de un pedido de stickers](/blog/cuanto-tarda-un-pedido-de-stickers-personalizados).",
          "Si todavía decides si tu marca necesita pocos o muchos stickers, la guía de [stickers para marca pequeña o grande](/blog/stickers-para-marca-pequena-vs-grande) te ayuda a pensar la cantidad."
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-para-marca-pequena-vs-grande", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados", "dulceros-personalizados-guadalajara"],
    sources: [
      { label: "Sticker Mule: requisitos de arte para stickers y etiquetas", url: "https://stickermule.com/support/what-are-your-artwork-requirements-for-stickers-and-labels" },
      { label: "Moo: errores comunes al diseñar stickers", url: "https://www.moo.com/blog/ca/inspiration/sticker-design-mistakes" },
    ],
    faq: [
      {
        q: "¿Los stickers se venden por planilla?",
        a: "No. Se venden por cantidad de piezas, así que pides la cantidad exacta que necesitas.",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "Los stickers y etiquetas con tu logo se piden desde 50 piezas. Los stickers de vinil personalizados, para cualquier diseño, personaje o foto, desde 40 piezas.",
      },
      {
        q: "¿Qué cortes y acabados puedo elegir?",
        a: "Corte troquelado o semitroquelado, y acabado mate, brillante u holográfico. El holográfico tiene un costo extra por pieza.",
      },
      {
        q: "¿Qué formato de archivo puedo mandar?",
        a: "Puedes mandar tu logo en PNG, PDF, AI o SVG con fondo transparente por WhatsApp. Como referencia, Sticker Mule pide arte vectorial o imágenes de al menos 300 PPI.",
      },
      {
        q: "¿Cuánto sangrado necesita el diseño?",
        a: "Depende del proveedor: Sticker Mule usa 1/16 de pulgada y Moo recomienda 1/8 de pulgada (3 mm). Son referencias, no una norma universal, así que confirma con la plantilla de quien imprime.",
      },
      {
        q: "¿Veo el diseño antes de imprimir?",
        a: "Sí. Te mandamos una prueba digital y no imprimimos nada sin tu aprobación. En los stickers de vinil llega normalmente en un máximo de 24 horas después del pago, con hasta 2 rondas de ajustes.",
      },
    ],
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
    title: "Stickers personalizados para bolsitas de recuerdo y cajas",
    metaTitle: "Stickers personalizados para bolsitas de recuerdo",
    description: `Stickers personalizados para bolsitas de recuerdo de boda y fiesta. Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)}, con prueba digital.`,
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-04",
    intro:
      "Un sticker con el nombre de los novios, la fecha o el tema de la fiesta convierte una bolsita o una caja de recuerdo en un detalle que se ve planeado. Esta guía explica cómo usar stickers personalizados para bolsitas de recuerdo, cajas, sobres y botellas, qué formato pedir, cuántos encargar y con qué anticipación hacerlo, para bodas, XV años, bautizos y fiestas.",
    sections: [
      {
        heading: "Por qué el sticker hace especial un recuerdo de boda",
        body: [
          "Un recuerdo de boda se queda en casa cuando se siente propio, y la etiqueta es lo que lo personaliza. Crónica describe una tendencia hacia recuerdos de autor, funcionales y con estética propia, donde una etiqueta sobria personaliza el detalle. Un sticker con nombres o fecha cumple ese papel.",
          "Además es un detalle que se ve en las fotos y en cada regalo que el invitado se lleva. A diferencia de un favor genérico, lleva el nombre, la fecha o el tema de tu celebración, así que se siente hecho para ese evento.",
        ],
      },
      {
        heading: "Stickers personalizados para bolsitas de recuerdo",
        body: [
          "Para sellar una bolsita de recuerdo, pide un sticker con las iniciales de los novios, la fecha o el nombre de la festejada. Se pide por pieza, así que puedes encargar casi el mismo número que invitados, y recibes una prueba digital antes de imprimir.",
          "Por tipo de celebración, estas ideas son las que más se piden:",
          "Boda: iniciales de los novios y fecha para bolsitas de detalle, sobres de invitación o frascos de la mesa de dulces. XV años: el nombre de la festejada o el tema de la fiesta en bolsitas, botellas y recuerdos.",
          "Baby shower, bautizo o primera comunión: el nombre del festejado o un ícono del tema en cajitas y bolsas de recuerdo. Fiesta infantil: el personaje o diseño del tema en dulceros y bolsitas sorpresa. Despedida de soltera o evento de empresa: una frase, un logo o el nombre del evento en botellas y regalos para los asistentes.",
        ],
      },
      {
        heading: "Cajas de recuerdo y otros empaques",
        body: [
          "En una caja de recuerdo, el sticker sirve de sello o de etiqueta con el nombre del evento. También se usa en sobres de invitación, frascos de la mesa de dulces y botellas del brindis. Elige vinil si el empaque puede mojarse, porque el vinil de Yume resiste agua, sol y rayones.",
          "Si dudas entre vinil y papel, revisa la guía de [stickers de vinil vs. papel](/blog/stickers-vinil-vs-papel-diferencias). Y si el recuerdo es un dulcero, mira los [dulceros para bodas](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower), que combinan muy bien con un sticker del mismo diseño.",
        ],
      },
      {
        heading: "Qué formato pedir según el empaque",
        body: [
          "Al pedir eliges el corte: troquelado, que sigue la forma exacta de tu diseño, o semitroquelado. También eliges el acabado: mate, brillante u holográfico, este último con un costo extra por pieza. Mándanos qué vas a sellar y verás el resultado en la prueba digital.",
          "Para un logo o un monograma de los novios, las [etiquetas con tu logo](/productos/stickers-logo-personalizado) son resistentes al agua. Para cualquier otro diseño, personaje o ilustración del tema, pide los [stickers de vinil](/productos/stickers-vinil-impermeable). En Yume se venden por cantidad de piezas, no por planilla.",
        ],
      },
      {
        heading: "Cómo cuadrar el sticker con la paleta del evento",
        body: [
          "Usa la misma paleta, tipografía e iniciales en el sticker, la invitación y el menú, y el evento se ve como una sola pieza. Define el diseño una vez y pídelo con el mismo archivo en cada pieza, así colores y estilo coinciden en toda la papelería del evento.",
          "Si todavía no tienes la papelería, empieza por las [invitaciones personalizadas](/blog/como-pedir-invitaciones-personalizadas-para-eventos) y el [menú de boda personalizado](/blog/menu-de-boda-personalizado), y deja los stickers para el final: ya tendrás el diseño definido. Para los invitados más pequeños, también hay [tatuajes temporales para fiestas](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas).",
          "Si organizas el evento de una clienta, mándanos el diseño del evento y la cantidad: trabajamos con prueba digital y trato directo por WhatsApp.",
        ],
      },
      {
        heading: "Cuántos stickers pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${priceOf("stickers-logo-personalizado", 100)} en etiquetas con tu logo y $${priceOf("stickers-vinil-impermeable", 100)} en stickers de vinil. Pasando las 100, cada pieza extra va a precio mayoreo. El mínimo de compra es de 50 piezas en etiquetas con logo y de 40 en vinil, así que pides cerca del número real de invitados o mesas de tu evento.`,
          "Una cuenta simple: una pieza por invitado si van en bolsitas, cajas o botellas, una por sobre si sellas invitaciones, y unas cuantas de más para mesas, letreros y fotos. Precio por cantidad:",
        ],
        table: {
          headers: ["Piezas", "Etiquetas con tu logo", "Stickers de vinil"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cuánto tarda y con cuánta anticipación pedirlo",
        body: [
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y la recolección en sucursal $${CASABLANCA_PRICE}; en compras de $${FREE_SHIPPING_THRESHOLD} o más, ambos son gratis. Si tu evento tiene fecha fija, pide con margen para poder ajustar la prueba antes de producir.`,
        ],
      },
      {
        heading: "Dónde imprimir tus stickers y cómo cotizar",
        body: [
          "Para cotizar, mándanos nombres, fecha, estilo o colores (o tu diseño ya armado) y la cantidad que necesitas. Te preparamos una prueba digital antes de imprimir, y no se produce nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "Si tu evento ya tiene invitaciones o un menú personalizado, cuéntanos: podemos alinear el sticker al mismo diseño. El proceso es el mismo sin importar dónde sea tu boda, evento o fiesta.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué sticker conviene para sellar bolsitas de recuerdo?",
        a: "Puedes pedirlo troquelado o semitroquelado, en acabado mate, brillante u holográfico. Mándanos el diseño, los nombres y la fecha, y ves la prueba digital antes de imprimir.",
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
    relatedBlogSlugs: ["tatuajes-temporales-para-boda-eventos-y-fiestas", "menu-de-boda-personalizado", "como-pedir-invitaciones-personalizadas-para-eventos", "dulceros-para-eventos-sociales-boda-xv-baby-shower", "stickers-vinil-vs-papel-diferencias", "cuanto-tarda-un-pedido-de-stickers-personalizados"],
    sources: [
      {
        label: "Crónica: recuerdos de boda que sí se quedan tus invitados en 2026",
        url: "https://www.cronica.com.mx/tendencias/2026/09/04/dile-adios-a-los-recuerdos-de-boda-que-terminan-en-la-basura-esto-es-lo-que-si-se-quedan-tus-invitados-en-2026/",
      },
    ],
  },
  {
    slug: "tatuajes-temporales-para-boda-eventos-y-fiestas",
    title: "Tatuajes temporales para fiestas en México: ideas por evento",
    metaTitle: "Tatuajes temporales para fiestas en México: ideas",
    description: "Ideas de tatuajes temporales para fiestas en México por tipo de evento: boda, XV años, baby shower y posada, con cuidados de piel y cómo cotizar.",
    category: "Guías",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-03",
    intro:
      "Un tatuaje temporal con las iniciales de los novios, el nombre de la festejada o el motivo de la fiesta es un detalle que el invitado se lleva puesto el resto del evento. Aquí encuentras tatuajes temporales para fiestas en México ordenados por tipo de evento: boda, despedida, XV años, primera comunión, bautizo, baby shower, cumpleaños, graduación, posada y evento de empresa, con cuidados de piel y lo que necesitamos para cotizar. Si buscas la versión para marcas, revisa nuestra guía de [tatuajes temporales para eventos](/blog/tatuajes-temporales-personalizados-para-eventos).",
    sections: [
      {
        heading: "Tatuajes temporales para fiestas en México: qué tipo conviene",
        body: [
          "Para una fiesta en México conviene elegir tatuajes temporales de calcomanía con un diseño pensado para el evento: nombre, fecha, motivo o paleta de la celebración. Se aplican en el momento, se lucen durante la fiesta y salen en las fotos. Así el detalle se ve planeado y no genérico.",
          "En tiendas y marketplaces suelen aparecer como un producto genérico para cumpleaños o despedidas. Nosotros los trabajamos por evento: nos cuentas la ocasión y adaptamos el diseño.",
        ],
      },
      {
        heading: "Ideas de tatuajes temporales por tipo de evento",
        body: [
          "Cada fiesta pide un detalle distinto. Esta tabla reúne ideas de diseño para diez tipos de evento en México y el momento en que conviene entregarlos. Son ideas de partida: cuéntanos el nombre, la fecha, el motivo y la paleta de tu evento y armamos la propuesta a tu medida.",
        ],
        table: {
          headers: ["Evento", "Idea de diseño", "Cuándo entregarlo"],
          rows: [
            ["Boda", "Iniciales de los novios o fecha, en la paleta de la boda", "Mesa de bienvenida o recuerdo al salir"],
            ["Despedida de soltera", "Frase, fecha o ícono del grupo", "Al inicio, para las fotos"],
            ["XV años", "Nombre de la festejada y motivo de la fiesta", "Durante la recepción"],
            ["Primera comunión", "Nombre del niño o la niña y un símbolo sencillo", "Al llegar los invitados"],
            ["Bautizo", "Nombre y fecha en tonos suaves", "Como recuerdo en la mesa"],
            ["Baby shower", "Nombre del bebé o motivo de la fiesta", "Mesa de bienvenida"],
            ["Cumpleaños", "Nombre y edad, o personajes del tema", "Como actividad para los invitados"],
            ["Graduación", "Nombre, generación o escuela", "Después de la ceremonia"],
            ["Posada", "Motivo navideño y nombre del grupo", "Al llegar"],
            ["Evento corporativo", "Logo y nombre del evento", "En el registro o en el kit de bienvenida"],
          ],
        },
      },
      {
        heading: "¿Cómo se usan los tatuajes temporales durante la fiesta?",
        body: [
          "Se pueden repartir de tres maneras: en la mesa de bienvenida como detalle para cada invitado, como recuerdo al final de la fiesta o en una estación de aplicación donde los invitados se los ponen durante el evento. La opción depende del tipo de fiesta y de cuánto tiempo tengan tus invitados.",
          "En una boda o unos XV años, la mesa de bienvenida puede funcionar bien porque el invitado lo luce desde el inicio. En un cumpleaños o un baby shower, una estación de aplicación se vuelve una actividad. Si organiza una planner, puede incluirlo en el recorrido del evento.",
        ],
      },
      {
        heading: "Cuidados de la piel con tatuajes temporales de fiesta",
        body: [
          "Antes del evento conviene hacer una prueba en una zona pequeña de la piel, sobre todo si hay invitados de piel sensible, y no aplicar el tatuaje sobre piel irritada. La FDA advierte que las tintas o colorantes pueden irritar la piel y causar erupciones. Esta prueba es una recomendación general, no una norma de la FDA.",
          "Según una nota de Voz de América sobre la advertencia de la FDA, los tatuajes temporales deben usar solo colores aprobados para cosméticos en la piel. Y según especialistas citados por Crónica, en una nota sobre maquillaje de temporada, conviene hacer la prueba de alergia al menos 24 horas antes y tener la piel hidratada.",
          "En esa misma nota, COFEPRIS recomienda no comprar maquillaje en establecimientos informales y revisar la etiqueta. Habla de maquillaje, no de tatuajes temporales, así que lo tomamos solo como analogía. No encontramos una norma mexicana específica para tatuajes temporales.",
        ],
      },
      {
        heading: "¿Cuánto duran los tatuajes temporales para fiestas?",
        body: [
          "Depende del tipo de producto. Según la FDA, los tatuajes temporales de calcomanía se van en horas o días, mientras que los de henna pueden durar hasta 3 o 4 semanas. Los de calcomanía son los de duración corta, así que piensa en ellos como un recuerdo para el día del evento.",
          "Por eso no te prometemos una cifra exacta de días: la duración varía según el producto y la piel de cada persona. Si quieres más detalle sobre este tema, revisa [cuánto duran y cómo quitarlos](/blog/cuanto-duran-los-tatuajes-temporales-y-como-quitarlos).",
        ],
      },
      {
        heading: "Calcomanía o henna negra: cuál elegir para una fiesta",
        body: [
          "Para una fiesta con invitados, elige tatuajes de calcomanía. La FDA indica que la henna negra puede llevar tinte para el cabello u otros colorantes para que dure más, y que no ha aprobado la henna ni el tinte para el cabello para uso en la piel. Evita la henna negra de un puesto improvisado.",
          "Si alguien te ofrece henna para tu fiesta, pregunta qué lleva antes de aplicarla en la piel de tus invitados. Un tatuaje de calcomanía con diseño propio, además, te deja controlar cómo se ve cada pieza porque lo apruebas antes en una prueba digital.",
        ],
      },
      {
        heading: "Tatuajes temporales para planners y eventos de empresa",
        body: [
          "Si organizas bodas o eventos, trabajamos por evento: te mandamos una prueba digital antes de producir y hablas directo con nosotros por WhatsApp. La cantidad la defines según el número de invitados. Sirve para wedding planners, event planners y empresas que organizan posadas, aniversarios o lanzamientos.",
          "Cuando el evento ya tiene paleta de colores, invitación o decoración, mándanos una foto o una referencia y adaptamos el diseño a esa línea. En un evento de empresa, el tatuaje puede llevar el logo y el nombre del evento y entregarse en el registro.",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar tatuajes temporales para tu fiesta",
        body: [
          "Necesitamos el diseño, nombre o frase que quieres, o una referencia del tema si aún no tienes diseño, el tamaño aproximado y la cantidad según el número de invitados. Con eso te preparamos la cotización y, antes de producir, te mandamos una prueba digital para que apruebes cómo se verá.",
          "Producimos en Guadalajara y enviamos a cualquier parte de México, así que puedes cotizar sin importar dónde sea la celebración. Escríbenos con la fecha de tu evento y te confirmamos los tiempos. Los tatuajes temporales se cotizan por WhatsApp y no tienen un precio publicado. Entra a la página de [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados) para empezar tu cotización.",
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
        a: "Según la FDA, los tatuajes temporales de calcomanía se van en horas o días, y los de henna pueden durar hasta 3 o 4 semanas. La duración depende del tipo de producto y de la piel de cada persona.",
      },
      {
        q: "¿Son seguros los tatuajes temporales para una fiesta?",
        a: "La FDA advierte que las tintas o colorantes pueden irritar la piel y causar erupciones, así que conviene probar en una zona pequeña antes del evento. No encontramos una norma mexicana específica para tatuajes temporales.",
      },
      {
        q: "¿Con cuánta anticipación debo pedirlos?",
        a: "Depende de tu diseño y de la fecha del evento. Escríbenos por WhatsApp con la fecha y te confirmamos los tiempos. Antes de producir te mandamos una prueba digital para que la apruebes.",
      },
      {
        q: "¿Sirven para fiestas infantiles?",
        a: "Sí, se pueden usar como actividad en una fiesta infantil, con personajes o diseños del tema. Haz antes la prueba en una zona pequeña, sobre todo si algún niño tiene piel sensible.",
      },
      {
        q: "¿Es buena idea usar henna negra en una fiesta?",
        a: "La FDA indica que la henna negra puede llevar tinte para el cabello u otros colorantes para que dure más, y que no ha aprobado la henna ni el tinte para el cabello para uso en la piel. Para una fiesta conviene elegir tatuajes de calcomanía.",
      },
      {
        q: "¿Qué necesito para cotizar mis tatuajes temporales?",
        a: "El diseño, nombre o frase (o una referencia del tema), el tamaño aproximado y la cantidad según el número de invitados.",
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
      {
        label: "Voz de América: La FDA advierte sobre tatuajes temporales y sus consecuencias",
        url: "https://www.vozdeamerica.com/a/fda-advierte-sobre-tatuajes-temporales-y-consecuencias/1916158.html",
      },
      {
        label: "Crónica: Recomendaciones para maquillarte en Halloween o Día de Muertos",
        url: "https://www.cronica.com.mx/tendencias/2026/10/29/te-vas-a-maquillar-para-halloween-o-dia-de-muertos-estas-son-las-mejores-recomendaciones-para-evitar-danos-y-cuidar-tu-piel/",
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
      "Impresión de etiquetas en rollo, en hoja o por pieza: cuál elegir según cantidad, diseños y material, con precios reales desde 50 piezas.",
    category: "Guías",
    publishedAt: "2026-10-20",
    modifiedAt: "2026-11-07",
    intro:
      "Cuando buscas dónde mandar a hacer la impresión de etiquetas, la primera decisión no es el diseño sino el formato: hay imprentas que trabajan etiquetas en rollo, otras que imprimen hojas completas y otras que te entregan cada etiqueta cortada a su forma. Cada formato tiene sentido para una necesidad distinta, ya sea el empaque de tu negocio, los detalles de una boda o el souvenir de un baby shower, y elegir el equivocado es la forma más común de pagar de más o de terminar con etiquetas que no te sirven.",
    sections: [
      {
        heading: "Impresión de etiquetas: qué cambia entre rollo, hoja y pieza",
        body: [
          "La diferencia está en cómo llegan y cómo se aplican. El rollo es una tira continua sobre un respaldo, pensada para tiradas largas y volúmenes altos. La hoja viene precortada y se despega a mano. La pieza se corta a la forma de tu diseño y la pides por cantidad exacta.",
          "Avery presenta la hoja como la opción para pruebas de diseño y tiradas cortas de temporada, y el rollo para pedidos grandes. La pieza cortada a la forma de tu diseño es lo que hacemos en Yume.",
          "Con estas tres ideas claras, el resto de la guía te ayuda a decidir según cantidad, forma de aplicación, número de diseños y material.",
        ],
      },
      {
        heading: "Etiquetas en rollo: para volumen y máquinas etiquetadoras",
        body: [
          "Las etiquetas en rollo convienen cuando repites el mismo diseño muchas veces y las aplicas con una máquina etiquetadora. Se pueden usar también a mano desde un soporte, pero su ventaja real aparece en tiradas largas. En Yume no tenemos rollo en el catálogo, así que escríbenos por WhatsApp antes de pedir si lo necesitas.",
          "Otra diferencia práctica es la impresión: un rollo imprimible necesita una impresora específica. Según Avery, con prensas digitales no hay cargos por placas ni por cuatricromía, y con flexografía es probable que haya cargos extra.",
          "La contraparte es que se suelen trabajar en tirajes grandes del mismo diseño: si apenas estás arrancando o cambias de diseño seguido, terminas comprando más de las que vas a usar.",
        ],
      },
      {
        heading: "Etiquetas en hoja: varias en un mismo pliego",
        body: [
          "La hoja trae varias etiquetas precortadas en un pliego de 8.5 x 11 pulgadas que se despegan a mano. Es práctica para necesidades pequeñas u ocasionales y para probar un diseño, y se imprime en impresoras estándar de inyección de tinta o láser. Su límite son las medidas y formas ya definidas.",
          "Si estás pensando en imprimirlas en casa, en nuestra guía de [dónde imprimir stickers personalizados](/blog/donde-imprimir-stickers-personalizados-mexico) comparamos imprimir tú mismo contra mandarlas a hacer.",
        ],
      },
      {
        heading: "Etiquetas por pieza: cortadas a la forma de tu diseño",
        body: [
          "La etiqueta por pieza sigue la silueta de tu logo o diseño y la pides por cantidad exacta, no por hoja ni por rollo. Puedes elegir troquelado, con cada etiqueta suelta, o semitroquelado, cortada a la forma sobre su respaldo. Es el formato que trabajamos en Yume, desde 50 piezas con tu logo.",
          "Es el formato que mejor le queda a quien pega a mano y necesita variedad: empaques, bolsas, frascos, velas, cajas de envío o detalles de un evento. Pides sin comprometerte a un tiraje grande, y antes de imprimir te mandamos una prueba digital para aprobar.",
          "Puedes ver las [etiquetas con tu logo](/productos/stickers-logo-personalizado) o los [stickers de vinil](/productos/stickers-vinil-impermeable) con tu diseño, personaje o foto.",
        ],
      },
      {
        heading: "Etiquetas para eventos: por qué casi nunca necesitas rollo",
        body: [
          "Un evento suele pedir varios diseños en cantidades pequeñas: una para los souvenirs, otra para la mesa de dulces, otra para las copas. Por eso encaja mejor la hoja o la pieza, y el rollo se queda para repetir el mismo diseño muchas veces.",
          "Si tu boda, baby shower, bautizo o evento de empresa lleva un diseño distinto por cada detalle, con la etiqueta por pieza pides la cantidad exacta de cada uno: desde 50 piezas en las etiquetas con tu logo y desde 40 en los stickers de vinil con tu diseño.",
        ],
      },
      {
        heading: "Material y acabado: el formato no da la resistencia al agua",
        body: [
          "Lo que resiste el agua es el material, no el formato. Una etiqueta de papel no se vuelve impermeable, y los consejos para proteger la impresión funcionan mejor con base de película. Nuestras etiquetas son de vinil y resistentes al agua; si habrá hielo, hieleras o botellas frías, pide siempre un material resistente.",
          "Los Stickers de Vinil Personalizados además resisten el sol y los rayones. En acabado eliges mate, brillante u holográfico (el holográfico suma $0.50 por pieza). La comparación completa está en nuestra guía de [vinil vs. papel](/blog/stickers-vinil-vs-papel-diferencias).",
          "Si imprimes en casa con inyección de tinta, Online Labels recomienda usar el ajuste de papel fotográfico o brillante y dejar secar al menos unas horas, idealmente 24. Para protección extra menciona barniz en spray transparente brillante o una hoja de sobrecapa transparente.",
        ],
      },
      {
        heading: "Cuánto cuesta la impresión de etiquetas por pieza",
        body: [
          `Primeras 100 piezas: precios reales de nuestro catálogo en la tabla. Pasando las 100 piezas, cada pieza extra va a precio mayoreo, 10% menos. El envío va aparte: $${NATIONAL_SHIPPING_PRICE} a todo México o $${CASABLANCA_PRICE} si recoges en una sucursal Casa Blanca de Guadalajara, y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más.`,
          "El pedido mínimo es de 50 piezas en las etiquetas con tu logo y de 40 piezas en los stickers de vinil, así que pides cerca del número que de verdad vas a usar.",
        ],
        table: {
          headers: ["Cantidad", "Etiquetas con tu logo", "Stickers de vinil (tu diseño)"],
          rows: tierPriceRows(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "es"),
        },
      },
      {
        heading: "Cómo elegir en 4 preguntas",
        body: [
          "Cuatro preguntas resuelven casi todo: cuántas necesitas y de cuántos diseños, cómo las vas a pegar, qué forma tiene tu logo y si se van a mojar. Con esas respuestas sabes si te conviene rollo, hoja o pieza, sin comprar de más ni quedarte con etiquetas que no te sirven.",
          "¿Cuántas necesitas? Si son decenas o cientos, por pieza. Si son miles del mismo diseño cada mes, vale la pena cotizar en rollo.",
          "¿Cómo las vas a pegar? A mano: por pieza o en hoja. Con máquina etiquetadora: en rollo.",
          "¿Qué forma tiene tu logo? Si no es un rectángulo o un círculo, una etiqueta cortada a su forma se ve mucho mejor que un cuadro con fondo blanco alrededor.",
          "¿Se va a mojar o a manejar mucho? Entonces pide un material resistente, como el vinil, y no papel.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es mejor, etiquetas en rollo o en hoja?",
        a: "Depende de cómo las aplicas: en rollo si usas máquina etiquetadora o despachador y pides tirajes grandes del mismo diseño; en hoja o por pieza si las pegas a mano y necesitas cantidades más chicas.",
      },
      {
        q: "¿Puedo imprimir etiquetas en hoja con mi impresora de oficina?",
        a: "Según Avery, las hojas de etiquetas se imprimen en impresoras estándar de inyección de tinta o láser, a diferencia de un rollo imprimible, que necesita una impresora específica.",
      },
      {
        q: "¿Cuál es el mínimo para imprimir etiquetas en Yume?",
        a: "50 piezas en las Etiquetas con tu Logo y 40 piezas en los Stickers de Vinil Personalizados.",
      },
      {
        q: "¿Cuánto cuestan 100 etiquetas personalizadas?",
        a: `Primeras 100 piezas: 100 etiquetas con tu logo cuestan $${priceOf("stickers-logo-personalizado", 100)} y 100 stickers de vinil con tu diseño cuestan $${priceOf("stickers-vinil-impermeable", 100)}. Pasando las 100 piezas, cada pieza extra va a precio mayoreo.`,
      },
      {
        q: "¿Imprimen etiquetas en rollo?",
        a: "No tenemos etiquetas en rollo en el catálogo: trabajamos etiquetas troqueladas o semitroqueladas por pieza. Si tu producción usa etiquetadora, escríbenos por WhatsApp antes de pedir.",
      },
      {
        q: "¿Las etiquetas resisten el agua?",
        a: "Sí, todas nuestras etiquetas y stickers son de vinil resistente al agua. Lo que decide la resistencia es el material y no el formato: una etiqueta de papel no se vuelve impermeable.",
      },
      {
        q: "¿Cuánto tarda la impresión de mis etiquetas?",
        a: `La prueba digital llega en un máximo de 24 horas después del pago. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, o está listo para recoger en Casa Blanca (Guadalajara) en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["stickers-vinil-vs-papel-diferencias", "donde-imprimir-stickers-personalizados-mexico"],
    sources: [
      { label: "Avery: ¿etiquetas en rollo o en hoja?", url: "https://www.avery.com/blog/should-you-use-roll-labels-or-sheet-labels/" },
      { label: "Online Labels: cómo hacer etiquetas resistentes al agua", url: "https://www.onlinelabels.com/articles/how-to-make-labels-waterproof" },
    ],
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
    relatedBlogSlugs: ["dulceros-navidenos-personalizados", "stickers-para-empaques-de-negocio", "cuanto-tarda-un-pedido-de-stickers-personalizados", "buen-fin-2026-stickers-y-dulceros-personalizados"],
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
    title: "Qué regalar a los invitados de una boda: ideas con nombre y fecha",
    metaTitle: "Qué regalar a los invitados de una boda: ideas",
    description:
      "Qué regalar a los invitados de una boda: ideas con nombre y fecha en dulceros, stickers y tatuajes temporales, cuántos pedir y cuándo cotizar.",
    category: "Guías",
    publishedAt: "2026-10-28",
    modifiedAt: "2026-11-03",
    intro:
      "¿Qué regalar a los invitados de una boda? Un recuerdo con el nombre de los novios y la fecha convierte un detalle de mesa en algo que tus invitados sí quieren llevarse a casa. Pero hoy el nombre y la fecha solos ya no bastan: lo que se queda es una pieza con diseño propio. Esta guía te explica qué souvenirs de boda personalizados puedes pedir en Yume, cómo darles un diseño elegante, cuántos pedir, cómo combinarlos con el resto de tu papelería y cuándo cotizar para llegar con calma a tu boda.",
    sections: [
      {
        heading: "¿Qué regalar a los invitados de una boda?",
        body: [
          "Para elegir qué regalar a los invitados de una boda, busca un detalle que cada persona pueda llevarse y conservar, con el nombre de los novios y la fecha dentro de un diseño propio. En Yume puedes pedir dulceros, stickers de vinil y tatuajes temporales, y ves el diseño en prueba digital antes de producir.",
          "Más abajo verás cómo funciona cada una de esas tres piezas, cuántas conviene pedir según tu lista de invitados, cuánto cuestan por cantidad y con cuánta anticipación conviene cotizar.",
        ],
      },
      {
        heading: "¿Qué hace especial a un recuerdo de boda personalizado?",
        body: [
          "Un souvenir de boda personalizado es un detalle que cada invitado se lleva con el nombre de los novios, la fecha o el diseño de la boda. Sirve para agradecer su presencia y dejar un recuerdo tangible. Lo que lo hace valioso es que tenga un uso o un lugar después de la fiesta.",
          "Crónica reporta, en septiembre de 2026, que la tendencia es la hiperpersonalización: piezas que los invitados usen, exhiban o disfruten, en lugar de imanes, dulces o velas desechables. Publimetro México suma que una ilustración numerada hecha para la boda puede funcionar como decoración, a diferencia de un recuerdo impreso solo con nombres y fecha. Ambos artículos están en Fuentes, al final.",
          "Esas notas citan ejemplos como botellas con etiqueta, arte numerado y fragancias para el hogar. Esas piezas no las hacemos. Lo nuestro es papel y vinil con tu diseño, y la idea de fondo se aplica igual: un detalle pensado para tu boda, con tus colores y tu historia, no uno genérico.",
        ],
      },
      {
        heading: "¿Cómo personalizar recuerdos de boda con nombre y fecha de forma elegante?",
        body: [
          "Para que el nombre y la fecha se vean elegantes, intégralos a un diseño con los colores de la pareja y un detalle de su historia, en lugar de dejarlos como texto suelto. Publimetro apunta que las piezas con colores e ilustraciones propios de la pareja se vuelven conservables. En Yume lo ves antes en prueba digital.",
          "Publimetro también menciona dos ideas: un diseño neutro y funcional con una sola pieza para todos los invitados, y dar menos piezas pero elegidas con más intención. Con nuestro papel y vinil, eso se traduce en un solo diseño para todos, con tus colores, donde el nombre y la fecha son parte de la composición.",
          "Cuando nos escribas, cuéntanos tu paleta y si hay un detalle de su historia que quieran en el diseño, como un lugar, una flor o una ilustración. Lo llevamos a la prueba digital y no producimos nada hasta que la apruebas.",
        ],
      },
      {
        heading: "Ideas de recuerdos de boda personalizados con nombre y fecha",
        body: [
          "Con Yume puedes hacer tres tipos de souvenir de boda: dulceros con los nombres de los novios, stickers con iniciales y fecha para sellar tus detalles, y tatuajes temporales para la pista de baile. Los tres se diseñan contigo y te mostramos una prueba digital antes de producir.",
          "Dulceros: una cajita con asa en cartulina opalina, con el nombre de los novios y la temática de tu boda. Llega armada y vacía, lista para llenar. Puede ir en la mesa de dulces, para que cada invitado arme la suya, o ya llena en cada lugar como recuerdo. Conoce los [dulceros personalizados](/productos/dulceros-personalizados) y la guía de [dulceros para bodas, XV y baby shower](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower).",
          "Stickers: iniciales y fecha en [stickers de vinil](/productos/stickers-vinil-impermeable), resistentes al agua, para sellar bolsitas de detalle, cerrar sobres de invitación o decorar frascos de la mesa de dulces. Si buscas más ideas, revisa los [stickers para bodas y eventos](/blog/stickers-para-bodas-eventos-y-fiestas).",
          "Tatuajes temporales: las iniciales de los novios o la fecha como detalle en la mesa de bienvenida o en la pista. El invitado se lo lleva puesto el resto de la fiesta y aparece en las fotos. Se cotizan según tu diseño y la cantidad. Mira los [tatuajes temporales personalizados](/productos/tatuajes-temporales-personalizados) y la guía de [tatuajes temporales para boda](/blog/tatuajes-temporales-para-boda-eventos-y-fiestas).",
        ],
      },
      {
        heading: "¿Cuántos recuerdos de boda pedir y cuánto cuestan?",
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
        heading: "¿Cómo combinar los recuerdos con tus invitaciones y tu menú?",
        body: [
          "Usa el mismo diseño en todo: mismos colores, misma tipografía y mismas iniciales en la invitación, el menú y el souvenir. Así la boda se lee como un solo conjunto planeado y no como piezas sueltas. Define el diseño una vez, aprueba la prueba digital y pide cada pieza con ese mismo archivo.",
          "Si todavía no tienes la papelería, empieza por las invitaciones y el menú de boda, y deja los souvenirs para después: ya tendrás la línea de diseño definida. Aquí tienes la guía para [pedir invitaciones personalizadas](/blog/como-pedir-invitaciones-personalizadas-para-eventos) y la del [menú de boda personalizado](/blog/menu-de-boda-personalizado).",
          "Si organizas la boda de un cliente como wedding planner, mándanos la paleta, el estilo y la lista de invitados confirmada. El trato es directo por WhatsApp y puedes ver la prueba digital con tu cliente antes de aprobar.",
        ],
      },
      {
        heading: "¿Cuándo pedir los recuerdos de boda?",
        body: [
          "Cotiza en cuanto tengas fecha, lugar y una idea de los colores, y pide en firme cuando la lista de invitados esté casi cerrada. Así queda margen para revisar la prueba digital, hacer ajustes y recibir el pedido sin prisas antes de la boda, sobre todo si tu evento tiene fecha fija.",
          `La prueba digital llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes. Desde que la apruebas, tu pedido llega a domicilio en ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} a ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles en cualquier parte de México, o está listo para recoger en una sucursal Casa Blanca de Guadalajara en ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} a ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} días hábiles.`,
          `El envío a domicilio cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. Si también pides invitaciones o menús, conviene coordinar todo en la misma conversación para que los tiempos de cada pieza se acomoden a tu fecha.`,
        ],
      },
      {
        heading: "Recuerdos de boda elegantes y sencillos",
        body: [
          "Un diseño sencillo puede reunir los nombres de la pareja, la fecha y los colores de la celebración. Piensa primero en cómo quieres entregar el detalle: un dulcero personalizado ofrece espacio para que elijas su contenido, mientras que un sticker de vinil puede cerrar una bolsita o decorar un frasco.",
          "Los dulceros llegan armados y vacíos, y los stickers llevan el diseño que compartas. Puedes usar la misma idea visual en ambos o elegir una sola pieza para cada invitado. Antes de producir, recibirás una prueba digital para revisar el diseño. Para coordinarlo con los lugares de tus invitados, consulta las ideas de [detalles de mesa para boda](/blog/detalles-de-mesa-boda-personalizados).",
        ],
      },
      {
        heading: "Recuerdos de boda civil y de iglesia",
        body: [
          "Tanto en una boda civil como en una ceremonia de iglesia, el recuerdo puede reflejar el estilo que la pareja eligió para celebrar. Un dulcero con nombre y temática permite preparar un detalle para cada invitado; llega armado y vacío para que ustedes decidan qué poner dentro. También pueden elegir stickers de vinil con su diseño para acompañar la presentación.",
          "Si después de la ceremonia habrá una recepción, consideren en qué momento quieren entregar las piezas y cuántas personas asistirán. Los tatuajes temporales son otra opción para la fiesta y se cotizan por WhatsApp según el diseño y la cantidad. Compartan su fecha al pedir información para organizar el pedido con tiempo.",
        ],
      },
      {
        heading: "Recuerdos de boda para invitados: qué entregar",
        body: [
          "Para elegir qué entregar, parte de tu lista de invitados y del momento de la celebración. Puedes preparar un dulcero por persona y llenarlo con lo que elijas, o colocar los dulceros en una mesa para que cada quien tome uno. La guía de [mesa de dulces para boda](/blog/mesa-de-dulces-para-boda) reúne ideas para organizar ese espacio.",
          "Otra alternativa son los stickers de vinil con el diseño de la boda, solos o para cerrar un detalle que ya tengas. Si prefieres tatuajes temporales, consulta la cotización por WhatsApp con tu diseño y la cantidad. Revisa la prueba digital antes de aprobar para que nombres y fecha estén como los quieres.",
        ],
      },
      {
        heading: "Cómo cotizar tus recuerdos de boda",
        body: [
          "Escríbenos por WhatsApp con los nombres de los novios, la fecha, los colores o tu diseño ya armado y el número de invitados. Te preparamos la cotización, y antes de producir te mandamos una prueba digital: no producimos nada hasta que la apruebas. Producimos en Guadalajara y enviamos a todo México.",
          "Si tu boda es en Guadalajara, también puedes recoger en una sucursal Casa Blanca. Si es en otra ciudad, el proceso de diseño y aprobación es el mismo.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué regalar a los invitados de una boda si quiero algo más que nombre y fecha?",
        a: "Crónica recomienda personalizar según el gusto y la identidad de la pareja, no solo con la fecha o las iniciales. Cuéntanos tu paleta y un detalle de su historia, y lo llevamos a la prueba digital de tu dulcero o tus stickers.",
      },
      {
        q: "¿Qué recuerdos de boda puedo dar a los invitados?",
        a: "Puedes dar dulceros personalizados para llenar, stickers de vinil con tu diseño o tatuajes temporales, que se cotizan por WhatsApp según el diseño y la cantidad.",
      },
      {
        q: "¿Cuáles son recuerdos de boda sencillos?",
        a: "Un dulcero con los nombres y la temática de la boda o un sticker de vinil con iniciales y fecha son opciones sencillas que puedes personalizar.",
      },
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
  {
    slug: "buen-fin-2026-stickers-y-dulceros-personalizados",
    title: "Buen Fin 2026: stickers y dulceros personalizados con 15% de descuento",
    metaTitle: "Buen Fin 2026: stickers y dulceros personalizados",
    description: "Buen Fin 2026, del 13 al 17 de noviembre: 15% en stickers y dulceros personalizados con el cupón YumeBuenFin, sin mínimo de compra. Así se aplica.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-04",
    intro: "El Buen Fin 2026 va del 13 al 17 de noviembre y en Studio Yume tienes 15% de descuento en stickers, dulceros y más productos de la tienda en línea con el cupón YumeBuenFin, sin monto mínimo. Aquí encuentras las fechas, cómo aplicar el cupón, qué productos entran, cómo funciona el envío y cómo comprar un pedido personalizado con calma, ya sea para una boda, un baby shower, unos XV años o la posada de tu empresa.",
    sections: [
      {
        heading: "Buen Fin 2026: fechas reales y descuento en stickers y dulceros",
        body: [
          "El Buen Fin 2026 va del 13 al 17 de noviembre, de viernes a martes, y coincide con el fin de semana largo por la Revolución Mexicana. En Studio Yume el cupón YumeBuenFin da 15% de descuento sobre los productos de la tienda en línea, sin monto mínimo, durante esos mismos cinco días.",
          "El cupón es válido del 13 de noviembre a las 00:00 al 17 de noviembre a las 23:59, hora de Ciudad de México. Fuera de esas fechas la tienda no lo acepta. Aplica igual a un pedido chico que a uno grande.",
          "El Buen Fin lo coordinan la Secretaría de Economía y Concanaco Servytur, y participan cadenas, micro, pequeñas y medianas empresas y comercios digitales. Como cae en puente largo, conviene tener definido tu pedido antes del viernes 13.",
        ],
      },
      {
        heading: "Cómo aplicar el cupón YumeBuenFin en tu pedido",
        body: [
          "Agrega tus productos al carrito, entra a la página de pago y busca el campo «¿Tienes un cupón?» en el resumen del pedido. Escribe YumeBuenFin, sin importar mayúsculas o minúsculas, y toca «Aplicar». El descuento aparece en tu total antes de pagar. Solo funciona del 13 al 17 de noviembre.",
          "Si el cupón no se acepta, revisa la fecha: antes del 13 o después del 17 de noviembre no es válido.",
        ],
      },
      {
        heading: "Qué stickers y dulceros personalizados entran en el Buen Fin",
        body: [
          "El cupón aplica a los productos de la tienda en línea, como [stickers de vinil personalizados](/productos/stickers-vinil-impermeable), [etiquetas con tu logo](/productos/stickers-logo-personalizado) y [dulceros personalizados](/productos/dulceros-personalizados). Los tatuajes temporales se cotizan por WhatsApp según diseño y cantidad, por lo que no se pagan con el cupón en la tienda.",
          "Esto es lo que ofrece cada uno y desde cuántas piezas se pide:",
        ],
        table: {
          headers: ["Producto", "Pedido mínimo", "Para qué sirve"],
          rows: [
            ["Stickers de vinil personalizados", "40 piezas", "Cualquier diseño, personaje, mascota o foto"],
            ["Stickers y etiquetas con tu logo", "50 piezas", "El logo o diseño de tu marca"],
            ["Dulceros personalizados", "10 piezas", "Nombre y temática, incluido el logo de tu marca"],
          ],
        },
      },
      {
        heading: "Cómo comprar tranquilo un pedido personalizado",
        body: [
          "Un pedido personalizado se hace a tu medida, así que conviene comprarlo con calma. Antes de pagar, revisa los términos de entrega, devoluciones y costos de envío, y guarda tus comprobantes y confirmaciones electrónicas, como recomienda Profeco. En Studio Yume recibes una prueba digital antes de imprimir y nada se produce sin tu aprobación.",
          "Antes del Buen Fin también ayuda definir un presupuesto y anotar el precio base de lo que quieres, para compararlo con la oferta. El micrositio «Quién es Quién en los Precios de El Buen Fin», según medios que citan a Profeco, muestra historial de precios de categorías como electrodomésticos, cómputo, televisores y línea blanca. No incluye artículos personalizados, así que en un pedido a la medida compara cotizaciones y condiciones directamente.",
          "Si tienes dudas sobre tu pedido, escríbenos por WhatsApp antes de pagar.",
        ],
      },
      {
        heading: "Envío y recolección durante el Buen Fin",
        body: [
          `El envío a todo México cuesta $${NATIONAL_SHIPPING_PRICE} y es gratis en compras de $${FREE_SHIPPING_THRESHOLD} o más. Esa regla se calcula con el total antes del descuento, así que el cupón no te quita el envío gratis. Si estás en Guadalajara, también puedes recoger en una sucursal Casa Blanca por $${CASABLANCA_PRICE}, gratis desde $${FREE_SHIPPING_THRESHOLD}.`,
          "Como el Buen Fin cae en puente largo, pregúntanos por WhatsApp los tiempos para la fecha de tu evento antes de pagar.",
        ],
      },
      {
        heading: "Buen Fin para bodas, baby showers, XV años y posadas",
        body: [
          "El Buen Fin sirve para adelantar los detalles de eventos que ya tienes en el calendario: bodas, baby showers, bautizos, comuniones, XV años y posadas de empresa. Los dulceros y stickers personalizados con el nombre de quien celebra se pueden pedir con el descuento, siempre que tengas claros el diseño, el texto y la cantidad.",
          "Si eres wedding planner o event planner, puedes aprovechar para pedir las piezas de un evento ya confirmado de tus clientes. Mándanos el diseño, el texto y la cantidad, y te enviamos la prueba digital antes de producir.",
          "Para una posada o un evento de empresa, el dulcero lleva el nombre y el logo de tu marca. Si necesitas ideas de relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero), y si estás en la zona, consulta los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Qué tener listo antes del 13 de noviembre",
        body: [
          "Para pedir sin prisas, ten a la mano tu logo o diseño, el texto exacto que quieres imprimir, como nombres, fechas y mensajes, y la cantidad. Los pedidos mínimos son 10 piezas en dulceros y 40 piezas en stickers de vinil. Con eso listo, aplicas el cupón y pasas directo al pago.",
          "Después de tu pago te enviamos la prueba digital normalmente en un máximo de 24 horas, con hasta 2 rondas de ajustes. No se imprime nada sin tu aprobación.",
          "Si piensas en regalos o posadas de diciembre, revisa las guías de [etiquetas navideñas personalizadas](/blog/etiquetas-navidenas-personalizadas) y de [dulceros navideños](/blog/dulceros-navidenos-personalizados).",
        ],
      },
    ],
    faq: [
      { q: "¿Cuándo es el Buen Fin 2026 en Studio Yume?", a: "Del 13 al 17 de noviembre de 2026, hora de Ciudad de México." },
      { q: "¿Cuántos días dura el Buen Fin 2026?", a: "Son cinco días continuos, de viernes a martes, y coincide con el fin de semana largo por la Revolución Mexicana." },
      { q: "¿Quién coordina el Buen Fin?", a: "La Secretaría de Economía y Concanaco Servytur." },
      { q: "¿Cuál es el cupón del Buen Fin?", a: "YumeBuenFin: 15% de descuento sobre los productos de la tienda en línea, sin monto mínimo." },
      { q: "¿El cupón se puede usar después del 17 de noviembre?", a: "No. Solo es válido durante las fechas del Buen Fin." },
      { q: "¿El cupón quita el envío gratis?", a: `No. El envío gratis desde $${FREE_SHIPPING_THRESHOLD} se calcula con el total antes del descuento.` },
      { q: "¿Aplica a los tatuajes temporales?", a: "Los tatuajes temporales se cotizan por WhatsApp y no se pagan con el cupón de la tienda en línea." },
      { q: "¿Puedo pedir detalles para una boda o un baby shower con el cupón?", a: "Sí, si el producto se compra en la tienda en línea, como los dulceros personalizados o los stickers. Para piezas que se cotizan por WhatsApp, escríbenos y te contestamos." },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: ["etiquetas-navidenas-personalizadas", "dulceros-navidenos-personalizados", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    sources: [
      { label: "El Buen Fin 2026: fechas oficiales y recomendaciones de Profeco (Ruptura 360)", url: "https://ruptura360.mx/periodismo-de-servicio/el-buen-fin-2026-fechas-oficiales-mexico/" },
      { label: "Profeco lanza micrositio para comparar precios en el Buen Fin 2026 (Publimetro)", url: "https://www.publimetro.com.mx/noticias/2026/10/27/profeco-lanza-micrositio-para-comparar-precios-en-el-buen-fin-2026/" },
    ],
  },
  // Dulceros cluster lives in its own file (blog-dulceros.ts).
  ...dulceroPosts,
  {
    slug: "detalles-posada-empresa-personalizados",
    title: "Dulceros para posada de empresa personalizados",
    metaTitle: "Dulceros para posada de empresa personalizados",
    description:
      "Dulceros para posada de empresa personalizados: cuántos pedir, cómo poner tu logo, cuándo pedirlos y qué consultar con tu contador.",
    category: "Guías",
    publishedAt: "2026-11-04",
    modifiedAt: "2026-11-05",
    intro:
      "Las posadas de empresa se acercan y con ellas la pregunta de qué entregar a tu equipo y a tus clientes. Los dulceros para posada de empresa personalizados, con el nombre de cada persona o tu logo, son una opción sencilla y se sienten pensados. Aquí tienes cuántos pedir, cómo se aplica el logo, ideas por tipo de invitado, una referencia de presupuesto por persona, un calendario para contar hacia atrás y lo que conviene consultar con tu contador.",
    sections: [
      {
        heading: "Regalos corporativos de Navidad personalizados: ideas elegantes y originales",
        body: [
          "Para una posada de empresa conviene elegir el detalle según quién lo recibe: el equipo, los clientes o ambos. Un dulcero con nombre y logo, o stickers con el diseño de la posada, son una opción sencilla. Lo importante es que el diseño se sienta hecho para ese evento y no un regalo genérico.",
          "Muchas guías de regalos de fin de año se enfocan en despensas, kits, termos o tarjetas de regalo. Un detalle de evento va por otro lado: lleva el nombre de la persona o el diseño de tu posada, y por eso se siente parte de la celebración y no un obsequio genérico.",
          "Nuestro [dulcero personalizado](/productos/dulceros-personalizados) es tipo lunch box, con asa, llega armado y vacío, y su personalización incluye nombre, temática y logo de tu marca. Si buscas ideas de relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero); para la temporada, mira los [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
          "Si prefieres algo que no sea comestible, los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) llevan el diseño que tú nos mandes, como el nombre de la posada o la ilustración del evento. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Dulceros para posada de empresa personalizados: cuántos pedir",
        body: [
          "Para saber cuántos dulceros pedir, empieza por las personas confirmadas, separa equipo y clientes, y suma un margen para invitados de última hora, personal que se incorpore y reposición. Es una regla práctica de Yume, no un estándar. El pedido mínimo es de 10 piezas, así que puedes ajustar la cantidad a tu lista.",
          "Cuenta cada grupo por separado: el equipo recibe un dulcero con su nombre o con el nombre del equipo, y los clientes uno con tu logo y el nombre de la posada. Si tu equipo está en varias ubicaciones, define la lista por ubicación antes de cotizar, porque enviamos a todo México.",
        ],
      },
      {
        heading: "Cómo poner el logo de tu empresa en un dulcero",
        body: [
          "Nuestro dulcero incluye en su personalización nombre, temática y el logo de tu marca. Envíanos tu logo por WhatsApp junto con el nombre de la posada; antes de producir te mandamos una prueba digital y nada se produce hasta que la apruebas.",
          "Si quieres que el dulcero combine con la decoración o la invitación de tu posada, mándanos una foto y adaptamos el diseño a esos colores. Para el equipo puedes usar el nombre de cada persona y, para clientes, tu logo con el nombre de la posada. Revisa las opciones en la página del [dulcero personalizado](/productos/dulceros-personalizados).",
        ],
      },
      {
        heading: "Un pedido para un evento concreto, no un pedido industrial",
        body: [
          "Tu pedido es para un evento concreto: una posada con su fecha, su lista de invitados y su diseño. El dulcero llega armado y vacío, y tú decides qué lleva dentro. Puedes pedir la cantidad que necesitas para esa celebración, desde 10 piezas.",
          "Para ideas de relleno revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Si tu lista combina equipo y clientes, escríbenos por WhatsApp con el número de invitados de cada grupo y la fecha de la posada.",
        ],
      },
      {
        heading: "Cuánto presupuestar por persona: equipo y clientes",
        body: [
          "Como referencia, la guía de Pluxee, proveedor de tarjetas de regalo, sugiere por persona: de $300 a $700 MXN para equipo operativo o masivo, de $700 a $1,500 para mandos medios y más de $1,500 para ejecutivos o clientes clave. Es una guía comercial, no una norma, y sirve para dividir tu lista.",
          "Con esa referencia, la lista se ordena fácil. Para todo el equipo, piensa en un detalle uniforme con el nombre de cada persona o del equipo, como un dulcero personalizado. Para clientes clave, conviene una pieza con más diseño y tu logo.",
          "El precio de nuestras piezas depende del producto y de la cantidad, y aparece en cada página: revisa el [dulcero personalizado](/productos/dulceros-personalizados) o los [stickers con tu logo](/productos/stickers-logo-personalizado) para ver el precio vigente. Si tu lista combina equipo y clientes, escríbenos por WhatsApp y te ayudamos a cotizar ambos grupos.",
        ],
      },
      {
        heading: "Detalles para tu equipo: un extra que no sustituye el aguinaldo",
        body: [
          "El detalle de posada para tu equipo es un extra y no reemplaza el aguinaldo. La Ley Federal del Trabajo, en su artículo 87, fija el aguinaldo en al menos 15 días de salario, pagado antes del 20 de diciembre. Piensa el detalle como un extra con nombre o diseño del equipo.",
          "Para una posada en la oficina, un dulcero con el nombre de cada persona, o con el nombre del equipo y tu logo, es un detalle sencillo. Si tu equipo trabaja en varias ubicaciones, enviamos a todo México, así que conviene definir la lista de personas antes de cotizar.",
          "Antes de entregar cualquier regalo a tu equipo, consulta con tu contador cómo se clasifica: como prestación, ingreso en especie u otro concepto. La forma de entrega y el nombre comercial no lo determinan.",
        ],
      },
      {
        heading: "La posada no es obligatoria: qué considerar si el costo se reparte",
        body: [
          "La posada laboral no es obligatoria. Según una nota de El Imparcial, la empresa no puede imponer la asistencia ni la cooperación económica, ni descontar dinero, afectar la evaluación o condicionar prestaciones por no participar. Es una nota periodística, no el texto de la ley, así que ante dudas consulta a un especialista.",
          "Si tu empresa paga los dulceros, no hay cooperación forzada del personal y el dulcero funciona como un detalle que da la empresa. Si piensas repartir el costo, la nota recuerda que la cooperación no se puede imponer.",
        ],
      },
      {
        heading: "Detalles para clientes: qué considerar antes de regalar",
        body: [
          "Para clientes, elige un detalle ligado a tu marca y al evento, no un regalo individual. Según Pluxee y ContadorMX, los obsequios a clientes en general no son deducibles, salvo los ligados a la venta de productos o con fin publicitario. Consulta a tu contador antes de decidir.",
          "Un dulcero con tu logo y el nombre de la posada, o [stickers con tu logo](/productos/stickers-logo-personalizado), son detalles de marca que tus clientes se llevan del evento. Esto no promete que sean deducibles: los regalos individuales suelen tener restricciones fiscales, y tu contador valida cada caso.",
          "ContadorMX también recomienda llevar un control de entrega con firma o sello de quien recibe. Pregunta a tu contador si te conviene en tu caso.",
        ],
      },
      {
        heading: "Calendario inverso: cuándo pedir los detalles de tu posada",
        body: [
          "Para que tus detalles lleguen a tiempo, cuenta hacia atrás desde la fecha de tu posada: primero la entrega, luego la producción, después la aprobación de la prueba digital y al inicio el diseño. Así ves cuándo debes escribirnos, sin depender de que los tiempos se junten en diciembre.",
          "Pluxee recomienda planear los regalos varias semanas antes de la entrega, sobre todo si hay personalización, volumen o envíos a varias ubicaciones. Por eso conviene escribirnos cuando ya tengas la fecha y una lista aproximada de invitados, y no la semana de la posada.",
          "La producción empieza cuando apruebas la prueba digital, así que esa aprobación es la fecha que más cuenta. La fecha estimada de entrega aparece en la página del producto y en el carrito.",
          "Enviamos a todo México y, si estás en la zona metropolitana de Guadalajara, puedes recoger en una sucursal Casa Blanca. Si quieres ver opciones desde Jalisco, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Escríbenos por WhatsApp con la fecha de tu posada y contamos hacia atrás contigo.",
        ],
      },
      {
        heading: "Factura y contador: qué consultar antes de cotizar",
        body: [
          "Antes de cotizar, consulta con tu contador si necesitas factura, porque un CFDI válido por sí solo no garantiza la deducción. También hay que acreditar la operación, que el gasto sea estrictamente indispensable y que el pago sea por un medio autorizado. Tu contador es quien decide qué aplica en tu caso.",
          "Como referencia, Pluxee menciona estos puntos de comprobación: pagos de más de $2,000 MXN por transferencia, cheque nominativo o tarjeta, CFDI, registro contable y una lista de beneficiarios como buena práctica. Es la guía de un proveedor, no asesoría fiscal.",
          "Cuéntanos por WhatsApp cuántos invitados son, separando equipo y clientes, y la fecha de la posada, y te cotizamos tus detalles.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["dulceros-navidenos-personalizados", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Cuántos dulceros debo pedir para una posada de empresa?",
        a: "Cuenta las personas confirmadas, separa equipo y clientes y suma un margen para imprevistos. Es una regla práctica de Yume, no un estándar de la industria. El pedido mínimo es de 10 piezas.",
      },
      {
        q: "¿Puedo poner el logo de mi empresa en el dulcero?",
        a: "Sí. Envíanos tu logo por WhatsApp junto con el nombre de la posada y te mandamos una prueba digital antes de producir. Nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Es obligatorio participar o cooperar en la posada de la empresa?",
        a: "Según una nota de El Imparcial, la empresa no puede imponer la asistencia ni la cooperación económica, ni descontar dinero o afectar la evaluación por no participar. Es una nota periodística, no el texto de la ley.",
      },
      {
        q: "¿El detalle de posada sustituye el aguinaldo?",
        a: "No. El artículo 87 de la Ley Federal del Trabajo fija el aguinaldo en al menos 15 días de salario, pagado antes del 20 de diciembre, y el patrón no puede alegar dificultades económicas para no pagarlo ni reducirlo. El detalle de posada es un extra.",
      },
      {
        q: "¿Los detalles de una posada de empresa son deducibles?",
        a: "No hay una deducción general y automática para posadas ni cenas navideñas. Depende de la finalidad, los beneficiarios y la documentación. Pluxee y ContadorMX indican que los obsequios a clientes en general no son deducibles. Consulta a tu contador.",
      },
      {
        q: "¿Cuánto presupuestar por persona en una posada de empresa?",
        a: "Como referencia de Pluxee: de $300 a $700 MXN para equipo operativo o masivo, de $700 a $1,500 para mandos medios y más de $1,500 para ejecutivos o clientes clave. Es una guía comercial de un proveedor, no una norma.",
      },
      {
        q: "¿Cuándo debo pedir los detalles de mi posada?",
        a: "Pluxee recomienda planear varias semanas antes, sobre todo con personalización, volumen o varias ubicaciones. Cuenta hacia atrás desde la fecha de la posada: entrega, producción, aprobación de la prueba digital y diseño. La fecha estimada aparece en la página del producto y en el carrito.",
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
        q: "¿Qué comprobantes conviene guardar de los detalles de la posada?",
        a: "Según Pluxee: CFDI, registro contable, pago por medio autorizado (transferencia, cheque nominativo o tarjeta en pagos de más de $2,000 MXN) y una lista de beneficiarios como buena práctica. Tu contador confirma qué aplica en tu caso.",
      },
      {
        q: "¿Envían los detalles a todo México?",
        a: "Sí, enviamos a todo México. Si estás en la zona metropolitana de Guadalajara, puedes recoger en una sucursal Casa Blanca.",
      },
    ],
    sources: [
      { label: "El Contribuyente: fecha límite para entregar el aguinaldo a los trabajadores", url: "https://www.elcontribuyente.mx/2022/12/cual-es-la-fecha-limite-para-entregar-el-aguinaldo-a-los-trabajadores/" },
      { label: "Siempre al Día: deducibilidad de gastos de fin de año", url: "https://siemprealdia.co/mexico/fiscal/deducibilidad-de-gastos-de-fin-de-ano/" },
      { label: "Pluxee: guía de regalo corporativo ideal", url: "https://www.pluxee.mx/blog/guia-regalo-corporativo-ideal/" },
      { label: "ContadorMX: cómo hacer deducibles regalos a empleados o clientes", url: "https://contadormx.com/como-hacer-deducibles-regalos-a-empleados-o-clientes/" },
      { label: "El Imparcial: ¿pueden obligarme a cooperar para la posada de mi trabajo?", url: "https://www.elimparcial.com/mexico/2025/12/01/pueden-obligarme-a-cooperar-para-la-posada-de-mi-trabajo-esto-dice-la-lft/" },
    ],
  },
  {
    slug: "guia-planners-proveedor-detalles-personalizados",
    title: "Proveedor de detalles personalizados para planners",
    description:
      "Proveedor de detalles personalizados para planners: qué enviar para cotizar, cómo aprobar la prueba digital, cuándo cerrar cantidades y cómo coordinar.",
    category: "Guías",
    publishedAt: "2026-10-29",
    modifiedAt: "2026-11-03",
    intro:
      "Si organizas bodas o eventos, tu trabajo es que todo llegue a tiempo y que tu cliente quede feliz. Un proveedor de detalles personalizados puede ayudarte o complicarte la vida. Esta guía explica cómo trabajamos en Yume con planners: qué mandar para cotizar, cómo se aprueba la prueba digital, qué confirmar por escrito, cuándo conviene empezar y cómo se cuida el trato por WhatsApp.",
    sections: [
      {
        heading: "Qué esperar de un proveedor de detalles personalizados para planners",
        body: [
          "Un buen proveedor de detalles personalizados le da a la planner tres cosas: una prueba digital que la pareja pueda aprobar, fechas claras por escrito y trato directo por WhatsApp. Así no tiene que adivinar ni perseguir a nadie, y su cliente ve el detalle antes de que se produzca nada.",
          "Según Bodas.net, la planner contrata proveedores, supervisa el timing del día y organiza pruebas, pero no decide sin consultar a la pareja. Por eso el proveedor ideal facilita esa aprobación. En Yume trabajamos desde Guadalajara, con envíos a todo México.",
        ],
      },
      {
        heading: "Qué productos puedes pedir para un evento",
        body: [
          "Para un evento puedes pedir dulceros con nombre y temática, stickers con el diseño de la boda, tatuajes temporales, menús de boda e invitaciones. Los stickers y los dulceros tienen precio publicado en el sitio; los menús, las invitaciones y los tatuajes se cotizan por WhatsApp según el evento.",
          "El dulcero llega armado y vacío, con el nombre y la temática que elijas, para que tú decidas qué lleva dentro. Si buscas ideas para la mesa de dulces, revisa nuestra guía de [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Si quieres un detalle con el diseño de la boda, mira los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable).",
        ],
      },
      {
        heading: "Cómo se aprueba una prueba digital sin enredos",
        body: [
          "La prueba digital es el diseño que ves antes de producir. En los stickers de vinil llega normalmente en un máximo de 24 horas después del pago, incluye hasta 2 rondas de ajustes y no se imprime nada sin tu aprobación. Para otros productos, confirma el proceso por WhatsApp.",
          "Como la planner no decide sin consultar a la pareja, conviene enviar la prueba como imagen en el chat y que la aprobación quede escrita en el mismo hilo. Así todos ven la misma versión y nada se produce hasta que se aprueba.",
          "Al aprobar, escribe también la cantidad final de piezas. Esa línea evita dudas si después cambia la lista de invitados.",
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
        heading: "Qué confirmar por escrito antes de prometer una fecha",
        body: [
          "Antes de prometerle una fecha a tu cliente, confirma por escrito tres datos con tu proveedor: la cantidad final de piezas, la fecha límite para aprobar la prueba digital y la fecha de entrega. Con esos tres datos en el mismo chat, cualquier cambio queda registrado y nadie discute después qué se acordó.",
          "Los plazos cambian mucho de un proveedor a otro. Easy Weddings, una guía australiana, muestra proveedores de detalles con mínimos que van de 2 a 3 semanas hasta 12 semanas. No es una referencia para México, pero ilustra por qué conviene pedir el plazo por escrito a cada uno.",
          "Si cada pieza lleva el nombre del invitado, la confirmación de asistencia marca el calendario. YAY! Wedding Favours, citado en esa misma guía de Easy Weddings, recomienda de 4 a 8 semanas para piezas con nombres. Por eso ayuda acordar desde el inicio una fecha de cierre de la lista de invitados.",
        ],
      },
      {
        heading: "Piezas de respaldo y margen por retrasos",
        body: [
          "Antes de fijar la cantidad, define con tu cliente si necesitas piezas de respaldo y cuánto margen de tiempo dejar. La guía australiana de Easy Weddings lo recoge para agradecer a otros proveedores del evento y absorber imprevistos de envío. Es una referencia de fuera, no una regla de Yume.",
          "YAY! Wedding Favours sugiere pedir más piezas que invitados, por ejemplo para agradecer al celebrante o al fotógrafo, y Brand Candy recomienda sumar 2 semanas por posibles retrasos de envío. Cuántas piezas de respaldo te convienen lo defines con tu cliente; escríbenos por WhatsApp y lo cotizamos.",
        ],
      },
      {
        heading: "Cuándo empezar para que todo llegue a tiempo",
        body: [
          "Empieza en cuanto tengas la fecha y una idea del diseño, porque el tiempo de producción se cuenta desde que se aprueba la prueba digital, no desde que haces el pedido. Mientras más tarde se apruebe, más tarde llega tu pedido.",
          "Piensa el calendario hacia atrás desde la fecha del evento: primero la entrega, luego la producción, después la aprobación de la prueba, el cierre de la lista de invitados y el brief. Los días de producción y envío de los productos de la tienda aparecen en la página de cada uno.",
          "Para menús, invitaciones y tatuajes, pregúntanos la fecha por WhatsApp antes de prometer nada a tu cliente. Si buscas ideas para los invitados, mira estos [souvenirs de boda personalizados](/blog/souvenirs-de-boda-personalizados).",
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
        q: "¿Qué debo confirmar por escrito antes de prometer una fecha?",
        a: "La cantidad final de piezas, la fecha límite para aprobar la prueba digital y la fecha de entrega. Para los productos de la tienda, los días de producción y envío aparecen en la página de cada uno; para menús, invitaciones y tatuajes, pregunta por WhatsApp.",
      },
      {
        q: "¿Los plazos de otros proveedores sirven como referencia?",
        a: "Solo como contexto. Una guía australiana de Easy Weddings muestra mínimos que van de 2 a 3 semanas hasta 12 semanas según el proveedor, así que lo más seguro es pedir el plazo por escrito a cada uno.",
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
      { label: "Easy Weddings: plazos de entrega de bomboniere (guía de Australia)", url: "https://easyweddings.com.au/Bomboniere/advice/bomboniere-lead-time" },
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
    modifiedAt: "2026-11-03",
    intro:
      "Una mesa de boda se ve planeada cuando cada pieza parece parte de lo mismo. Menú, dulcero y stickers pueden llevar el mismo color, la misma letra y el mismo símbolo, y entonces el conjunto se siente cuidado. Aquí tienes cómo combinarlos, qué lleva la tarjeta de menú, cómo tratar las alergias, cuándo cerrar el diseño y qué revisar por invitado y por mesa antes de cotizar.",
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
        heading: "Qué lleva la tarjeta de menú de boda",
        body: [
          "Una tarjeta de menú lleva un encabezado con el nombre de la pareja o el monograma, la fecha si quieres, y los platos en orden de servicio con una descripción breve. Los maridajes y la frase de cierre son opcionales. Esa referencia viene de Paperlust, una guía de papelería, y no es una norma.",
          "Mándanos tu menú por WhatsApp y lo cotizamos.",
        ],
      },
      {
        heading: "Alergias y dietas en el menú de boda",
        body: [
          "Si quieres marcar dietas en el menú, una guía de papelería recomienda abreviaturas con letras (V, VE, GF, DF, N, SF) después del nombre del plato, con una leyenda al pie. Para alergias graves sugiere una línea que remita al equipo de catering, porque la tarjeta no es un documento de gestión de alergias.",
          "WeddingWire Canadá propone dejar espacio en el RSVP para alergias y dietas, pedirle al catering la lista de ingredientes de cada plato y compartirla con los invitados que tienen alergias. También sugiere publicar el menú en el sitio web de la boda y, si hay buffet, etiquetar los platos (vegano, vegetariano, sin gluten, sin nueces) y dejar que quien tiene alergias se sirva primero.",
          "Por eso, en la tarjeta conviene poner solo las abreviaturas y la leyenda, y dejar el manejo de alergias en manos del catering. Cuéntanos cuáles quieres marcar y las acomodamos en el diseño.",
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
        heading: "Cuándo cerrar el diseño del menú y pedir las piezas",
        body: [
          "Cierra el diseño del menú cuando el catering ya lo haya confirmado. Paperlust, un proveedor de papelería, indica que eso suele ocurrir entre 6 y 8 semanas antes de la boda, pero es solo su referencia y no un estándar del sector. Para los tiempos de tu pedido con Yume, escríbenos por WhatsApp.",
          "En Yume, el menú de boda se cotiza por WhatsApp. En los [stickers de vinil](/productos/stickers-vinil-impermeable) la prueba digital llega normalmente en un máximo de 24 horas después de tu pago, con hasta 2 rondas de ajustes, y no imprimimos nada sin tu aprobación.",
        ],
      },
      {
        heading: "Checklist por invitado y por mesa",
        body: [
          "Un checklist corto evita olvidos: por invitado, revisa tarjeta o menú con su nombre, un detalle de recuerdo y la etiqueta o sticker que lo acompaña; por mesa, revisa marcador con número, menú o carta y la pieza compartida. Confirma todo contra tu lista de invitados antes de pedir.",
          "Suma a la lista las alergias y dietas que reporten tus invitados en el RSVP y confírmalas con el catering antes de cerrar el texto del menú. Las cantidades dependen de tu lista de invitados y de cuántas mesas tengas. Escríbenos por WhatsApp con esos números y te cotizamos el menú y el resto de las piezas. Estamos en Guadalajara y enviamos a todo México.",
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
      {
        q: "¿Qué lleva una tarjeta de menú de boda?",
        a: "Según una guía de papelería, lleva un encabezado con el nombre de la pareja o el monograma, la fecha (opcional), los platos en orden de servicio con una descripción breve, símbolos dietéticos y una leyenda. Los maridajes y la frase de cierre son opcionales.",
      },
      {
        q: "¿Cómo marco alergias o dietas en el menú?",
        a: "Una guía de papelería recomienda abreviaturas con letras (V, VE, GF, DF, N, SF) tras el nombre del plato, con una leyenda al pie, y una línea que remita al catering en alergias graves, porque la tarjeta no es un documento de gestión de alergias.",
      },
      {
        q: "¿Cuándo debo cerrar el diseño del menú?",
        a: "Cuando el catering ya confirmó el menú. Paperlust, un proveedor de papelería, indica que suele ser entre 6 y 8 semanas antes de la boda, pero es solo su referencia. Para los tiempos de tu pedido con Yume, escríbenos por WhatsApp.",
      },
    ],
    sources: [
      { label: "The Budget Savvy Bride: cómo los stickers pueden realzar tu boda", url: "https://thebudgetsavvybride.com/how-stickers-can-elevate-your-wedding/" },
      { label: "Mary Hollis Huddleston: tarjetas de lugar, menús, recursos y consejos", url: "https://maryhollishuddleston.squarespace.com/blog/place-cards-menus-resources-and-tips" },
      { label: "Paperlust: guía de tarjetas de menú de boda", url: "https://paperlust.co/blog/?p=15638" },
      { label: "WeddingWire Canadá: cómo manejar alergias y restricciones alimentarias de los invitados", url: "https://weddingwire.ca/wedding-ideas/8-ways-to-handle-guests-food-allergies-and-dietary-restrictions--c297" },
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
    modifiedAt: "2026-11-03",
    intro:
      "Una mesa de dulces para boda bien pensada se ve, se fotografía y se disfruta. En esta guía encuentras cuántos dulces calcular, cuántos dulceros necesitas, qué poner en cada uno, cómo montar la mesa, qué debe decir cada etiqueta y cómo personalizar los dulceros para que combinen con la paleta de tu boda. También hay una sección para wedding planners.",
    sections: [
      {
        heading: "Cuántos dulces calcular para la mesa de dulces de tu boda",
        body: [
          "Como punto de partida, Bodas.net propone unos 150 g de dulces por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Para 100 invitados serían unos 10 kg si la mesa es sobre todo de golosinas. Son cifras orientativas de una guía de España, no una norma.",
          "Si añades mini brownies, donuts, bombones o galletas, puedes reducir la cantidad de dulce suelto. La mesa acompaña al postre y al banquete, no los sustituye.",
          "Crehana recuerda que la cantidad depende de los invitados, la duración, el lugar y el catering, así que conviene afinar la cifra con tu wedding planner o con el salón.",
        ],
      },
      {
        heading: "Cuántos dulceros o tarros necesitas en la mesa",
        body: [
          "Bodas.net orienta con tarros medianos: de 4 a 6 para 50 invitados, de 10 a 12 para entre 50 y 150, y unos 15 o 16 para 200. Es una referencia para saber cuántos recipientes llenar, no una regla. Ajústala según cuántos tipos de dulce quieras mostrar y el tamaño de tu mesa.",
          "Por eso conviene empezar por los tipos de dulce que quieres ofrecer y después definir el número de recipientes. Nuestro pedido mínimo de dulceros es de 10 piezas, y en la página de [dulceros personalizados](/productos/dulceros-personalizados) ves el precio vigente.",
        ],
      },
      {
        heading: "Qué dulces poner en cada dulcero de la mesa",
        body: [
          "Elige variedad y etiqueta cada dulcero. Crehana sugiere al menos 6 variedades de dulces como referencia, y Bodas.net recomienda combinar clásicos como gominolas, nubes y bombones con minis, cake pops, brownies o galletas decoradas. El dulcero de Yume llega armado y vacío, así que tú decides qué lleva cada uno.",
          "Para más ideas de relleno, revisa nuestra guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Cómo armar la mesa de dulces para boda paso a paso",
        body: [
          "Define un concepto y una paleta, elige un punto de atención y acomoda por alturas: lo bajo al frente y lo alto al fondo. Bodas.net recomienda recipientes transparentes, bandejas a distintas alturas o cajas de madera para que se vea el contenido, y mantener el orden con una línea de estilo coherente.",
          "Crehana propone 10 pasos que van de la inspiración al diseño gráfico, con cartelitos y banderines, e incluyen un croquis de la mesa. Bodas.net añade pinzas para servirse y, como alternativa higiénica y sin filas, las presentaciones individuales.",
          "Los dulceros dan color y un diseño propio a la mesa y, si los personalizas, repiten el diseño de tu boda. Si además buscas detalles para entregar, mira los [souvenirs de boda personalizados](/blog/souvenirs-de-boda-personalizados).",
        ],
      },
      {
        heading: "Etiquetas para la mesa: sabores, alérgenos y detalles",
        body: [
          "Una etiqueta útil dice qué hay en cada dulcero. Bodas.net aconseja etiquetar los sabores, indicar los alérgenos y señalar las opciones sin gluten, sin azúcar o veganas. Así tus invitados eligen con seguridad y la mesa se ve ordenada, además de bonita. También puedes sumar cartelitos con los nombres de la pareja.",
          "Como detalle personalizado, Bodas.net propone bolsitas cerradas con una etiqueta con la fecha de la boda y los nombres o las iniciales de la pareja. Otra opción es dejar bolsas o tarros al final de la mesa para que cada invitado se sirva.",
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
        heading: "Cuándo pedir los dulceros de tu mesa de dulces",
        body: [
          "Pide los dulceros cuando tengas definidos la paleta y el número de invitados, para dar tiempo a la prueba digital y a tu aprobación. Si trabajas con wedding planner, comparte con ella el diseño aprobado y el croquis de la mesa. Escríbenos por WhatsApp con la fecha de tu boda.",
          "Al cotizar, dinos cuántos invitados tienes y cuántos dulceros quieres.",
        ],
      },
      {
        heading: "Mesa de dulces con wedding planner: qué compartir con nosotros",
        body: [
          "Si eres wedding planner o trabajas con una, lo útil es tener definidos el número de invitados, la paleta y el croquis de la mesa. Con eso cotizamos los dulceros, enviamos una prueba digital para que el diseño se apruebe y coordinamos todo por WhatsApp, con trato directo contigo.",
          "Cada evento se cotiza por separado, así que puedes escribirnos con los datos de cada boda que organices.",
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
        q: "¿Cuántos tarros o dulceros se necesitan en la mesa?",
        a: "Bodas.net orienta con tarros medianos: de 4 a 6 para 50 invitados, de 10 a 12 para entre 50 y 150, y unos 15 o 16 para 200. Es una referencia, no una regla.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces que tú elijas.",
      },
      {
        q: "¿Qué conviene indicar en las etiquetas de la mesa?",
        a: "Bodas.net aconseja etiquetar los sabores, indicar los alérgenos y señalar las opciones sin gluten, sin azúcar o veganas.",
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
        q: "¿Cuándo conviene pedir los dulceros?",
        a: "Cuando ya tengas definidos la paleta y el número de invitados, para dar tiempo a la prueba digital y a tu aprobación. Escríbenos por WhatsApp con la fecha de tu boda.",
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
  {
    slug: "cuando-enviar-invitaciones-de-boda",
    title: "Cuándo enviar invitaciones de boda y qué datos incluir",
    description:
      "Cuándo enviar invitaciones de boda: plazos para el save the date, la invitación y el RSVP según Zola, Ceci y Greenvelope, y qué datos incluir.",
    category: "Guías",
    publishedAt: "2026-11-02",
    modifiedAt: "2026-11-04",
    intro:
      "Las guías no coinciden en una sola cifra para saber cuándo enviar invitaciones de boda: los plazos cambian si la boda es local o de destino y si hay invitados que viajan. Aquí tienes los rangos de cada fuente, con su nombre, una tabla para ordenar tu calendario de atrás hacia adelante y lo que debe llevar la invitación para que tus invitados respondan a tiempo.",
    sections: [
      {
        heading: "Cuándo enviar invitaciones de boda: el plazo según cada fuente",
        body: [
          "Para una boda local, Zola indica en su resumen que las invitaciones formales suelen enviarse de 6 a 8 semanas antes, pero su propio detalle habla de 3 a 4 meses. Como la misma fuente se contradice, toma un rango y no una cifra única, y adelántalo si hay invitados que viajan.",
          "Para una boda de destino, una síntesis de guías de Paperlust, Joy, Greenvelope y 4over4 propone enviar la invitación de 10 a 12 semanas antes, o de 3 a 4 meses antes si no hubo save the date. Zola también recomienda sumar unas semanas cuando hay invitados que vienen del extranjero.",
        ],
      },
      {
        heading: "Cuándo enviar el save the date",
        body: [
          "Zola recomienda enviar el save the date de 7 a 10 meses antes de la boda, y de 10 a 12 meses si cae en fin de semana largo o es de destino. Ceci New York pide como mínimo 6 meses, siempre con fecha y lugar confirmados para que los invitados planeen sus vuelos.",
          "En bodas de destino, la síntesis de guías antes citada sube el rango a 8 a 12 meses antes, y algunas guías llegan hasta 14. Greenvelope sugiere omitir el save the date cuando faltan menos de unas 8 semanas y enviar directamente la invitación formal.",
        ],
      },
      {
        heading: "Qué fecha límite de confirmación poner",
        body: [
          "Zola ubica la fecha límite de confirmación aproximadamente un mes antes de la boda, y suma unas semanas si hay invitados que viajan del extranjero. Greenvelope recomienda dejar al menos 3 semanas entre esa fecha y el evento, para poder cerrar con tus proveedores.",
          "Ceci New York da 4 a 6 semanas antes en bodas locales y 6 a 8 en bodas de destino. La síntesis de guías de destino sugiere de 5 a 8 semanas, porque vuelos, bloqueo de hotel y lista final necesitan más margen. En su detalle para bodas locales, Zola habla de 3 a 4 semanas.",
        ],
      },
      {
        heading: "Un cronograma hacia atrás para planear el envío",
        body: [
          "Parte de la fecha de la boda y retrocede: primero la fecha límite de confirmación, luego el envío de la invitación y, antes, el save the date. Con los rangos de Zola, una boda local con envío 8 semanas antes pide confirmar 3 o 4 semanas antes.",
          "Esta tabla junta los rangos de cada fuente. No coinciden entre sí, así que elige un punto dentro de ellos según tu lista de invitados.",
        ],
        table: {
          headers: ["Pieza", "Boda local", "Boda de destino"],
          rows: [
            ["Save the date", "7 a 10 meses antes (Zola); mínimo 6 meses (Ceci New York)", "8 a 12 meses antes, algunas guías hasta 14 (síntesis de guías de destino)"],
            ["Invitación", "6 a 8 semanas antes (resumen de Zola)", "10 a 12 semanas antes, o 3 a 4 meses si no hubo save the date (síntesis de guías de destino)"],
            ["Confirmación", "3 a 4 semanas antes (Zola); 4 a 6 semanas antes (Ceci New York)", "5 a 8 semanas antes (síntesis de guías de destino); 6 a 8 semanas antes (Ceci New York)"],
          ],
        },
      },
      {
        heading: "Qué debe llevar la invitación para recibir respuestas",
        body: [
          "Según Zola, la invitación debe incluir una forma de responder, ya sea el sitio web de la boda o una tarjeta RSVP con sobre prepagado o con dirección, y una fecha límite de confirmación explícita. Sin esos dos elementos, tus invitados no sabrán cómo ni cuándo contestar.",
          "Si solo unos pocos invitados vienen de otro país, Zola sugiere avisarles antes por mensaje o correo, aunque la invitación formal salga en el calendario normal. El save the date, según Ceci New York, se manda solo cuando la fecha y el lugar ya están confirmados.",
          "Cuando tengas el calendario, define el diseño de tus invitaciones. En Yume te enviamos una prueba digital antes de producir, y nada se produce hasta que la apruebas. Si estás armando otros detalles de la misma boda, revisa nuestra guía de [mesa de dulces para boda](/blog/mesa-de-dulces-para-boda).",
        ],
      },
      {
        heading: "Un cronograma para wedding planners",
        body: [
          "Si eres wedding planner, arma por cliente una línea de tiempo con tres fechas: save the date, envío de la invitación y límite de confirmación. Marca aparte las bodas con invitados que viajan, porque las guías dan plazos más amplios para ellas.",
          "En Yume trabajamos con wedding planners: diseño con prueba digital y trato directo por WhatsApp. Para los detalles de mesa de tu cliente, revisa la guía de [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Escríbenos por WhatsApp para cotizar las invitaciones de tu boda o las de tu cliente.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["mesa-de-dulces-para-boda", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Con cuánto tiempo se envían las invitaciones de boda?",
        a: "Depende de la fuente. Zola da 6 a 8 semanas en su resumen para una boda local, pero su detalle habla de 3 a 4 meses. Para bodas de destino, una síntesis de guías propone de 10 a 12 semanas.",
      },
      {
        q: "¿Se puede omitir el save the date?",
        a: "Sí. Greenvelope sugiere omitirlo cuando faltan menos de unas 8 semanas para la boda y enviar directamente la invitación formal.",
      },
      {
        q: "¿Cuándo debe vencer la confirmación de asistencia?",
        a: "Zola la ubica aproximadamente un mes antes de la boda. Greenvelope recomienda dejar al menos 3 semanas entre esa fecha y la boda para cerrar con los proveedores.",
      },
      {
        q: "¿Qué necesita la invitación para que respondan?",
        a: "Según Zola, una forma de responder (sitio web de la boda o tarjeta RSVP con sobre prepagado o con dirección) y una fecha límite de confirmación explícita.",
      },
      {
        q: "¿Cómo cotizo mis invitaciones de boda con Yume?",
        a: "Escríbenos por WhatsApp con tiempo y te cotizamos. Te mandamos una prueba digital antes de producir, y nada se produce hasta que la apruebas.",
      },
    ],
    sources: [
      { label: "Zola: When should you send out your wedding invitations", url: "https://zola.com/expert-advice/when-should-you-send-out-your-wedding-invitations" },
      { label: "Greenvelope: When to send wedding invitations and save the dates", url: "https://www.greenvelope.com/resources/when-to-send-wedding-invitations-and-save-the-dates" },
      { label: "Ceci New York: A timeline for mailing save the dates, invitations and requesting RSVPs", url: "https://www.cecinewyork.com/blogs/ceci-style/ceci-tip-a-timeline-for-mailing-save-the-dates-invitations-and-requesting-rsvps" },
      { label: "Paperlust: guía de bodas de destino", url: "https://paperlust.co/blog/?p=11511" },
    ],
  },
  {
    slug: "dulceros-para-xv-anos-elegantes",
    title: "Qué dulces poner en un dulcero para XV años",
    description:
      "Qué dulces poner en un dulcero para XV años: clásicos y un detalle sorpresa, cómo combinarlos con la paleta, montar y rotular la mesa y pedir tus dulceros.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro:
      "Qué dulces poner en un dulcero para XV años es la duda que más pesa cuando quieres una mesa que se vea planeada. Aquí tienes qué combinar, cómo coordinarlo con la paleta de la fiesta, cuántos dulceros pedir, cómo montar y rotular la mesa de dulces y cómo pedirlos con prueba digital. Está pensado para mamás, papás y planners que cuidan el detalle.",
    sections: [
      {
        heading: "Qué dulces poner en un dulcero para XV años",
        body: [
          "Para un dulcero de XV años combina clásicos como gomitas, galletas decoradas, mini brownies y bombones con un detalle sorpresa. Bodas.net recomienda esa mezcla y añadir opciones sin gluten, veganas o sin azúcar. El dulcero llega vacío, así que tú eliges el relleno.",
          "En una mesa de bodas, Bodas.net recomienda de 5 a 7 variedades de postre, una pauta que se puede adaptar a un XV. Si quieres más ideas de relleno, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero), y consulta los [dulceros personalizados](/productos/dulceros-personalizados) que preparamos con el nombre de la quinceañera.",
        ],
      },
      {
        heading: "¿Qué dulces combinan con una fiesta elegante de XV años?",
        body: [
          "Los que siguen la paleta de la fiesta. Bodas.net aconseja elegir 2 o 3 colores protagonistas y repetirlos en dulces, flores, cintas, carteles y recipientes. Así el dulcero, la mesa y la decoración se ven como un solo conjunto, y la mesa luce planeada en lugar de una suma de dulces sueltos.",
          "La misma guía explica que la paleta se adapta al estilo del evento: dorado y espejos para uno glam, crema y verde para uno rústico. Elige los dulces por su color antes que por su marca, y deja que el dulcero con los colores de la fiesta cierre el conjunto.",
        ],
      },
      {
        heading: "Dulceros para XV años elegantes: qué los hace finos",
        body: [
          "Un dulcero de XV años se ve elegante cuando usa pocos colores, un nombre legible y una tipografía discreta, y cuando combina con la invitación, el pastel y la decoración de la mesa. La elegancia viene de la coordinación y del detalle personalizado, no de llenarlo de adornos ni de usar un kit genérico.",
          "Al buscar mesas de dulces para XV años en un marketplace aparecen sobre todo kits de mesa vintage en MDF, de precio bajo y para armar, y cajitas transparentes que se venden en paquetes de 20, 40 o 50 piezas. Son opciones de volumen. Un dulcero con el nombre de la quinceañera y los colores de su fiesta es otro tipo de detalle.",
        ],
      },
      {
        heading: "Paleta, nombre y tipografía para recuerdos de XV años modernos",
        body: [
          "Elige una paleta corta tomada de la invitación o del vestido, pon el nombre de la quinceañera en una tipografía clara y deja espacio vacío alrededor. Si nos mandas una foto de la invitación o de la decoración, adaptamos el diseño a esos colores, y antes de producir recibes una prueba digital.",
          "Nuestro dulcero es tipo lunch box, con asa, y la personalización incluye el nombre y la temática. Para un XV, la temática puede ser tan sencilla como los colores de la fiesta con el nombre de la quinceañera, sin más elementos.",
          "Si coordinas el evento como planner, puedes mandarnos la paleta y la invitación de tu cliente y revisar la prueba digital directo por WhatsApp, sin intermediarios.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cuántos dulces calcular",
        body: [
          "Pide un dulcero por cada persona que quieras que se lleve el detalle: toda la lista de invitados, solo la familia cercana o solo la mesa principal. El pedido mínimo es de 10 piezas y puedes escribir la cantidad exacta que necesitas.",
          "Para calcular los dulces, Bodas.net, en su guía de buffets de dulces para bodas, sugiere de 3 a 4 raciones por persona si no hay pastel y unas 2 si lo hay. Son cifras de una mesa de postres de boda, no de lo que cabe en una caja, así que tómalas solo como orden de magnitud, sobre todo en un XV con baile y vals.",
          "La misma guía señala que los niños suelen consumir más dulces que los adultos y que las cenas generan más consumo que los banquetes del mediodía. Úsalo para ajustar tus cálculos si tu lista tiene muchos niños o si la fiesta es de noche.",
        ],
      },
      {
        heading: "Montaje de la mesa de dulces: mesa, alturas y color",
        body: [
          "Una mesa de unos 80 por 120 a 160 centímetros alcanza para 30 a 40 personas, según una guía de montaje de La Fiesta de Olivia. Cúbrela con un mantel hasta el piso, pon las piezas altas al centro y al fondo, y usa cajas o bases para crear niveles.",
          "Bodas.net recomienda repartir los dulces a distintas alturas, usar recipientes variados como frascos de cristal, cajas de madera o soportes de varios pisos, ordenarlos por bloques de color y cuidar que ningún elemento tape a otro.",
          "Mantén una paleta de color coherente con la de tus [dulceros personalizados](/productos/dulceros-personalizados) y combina formas y sabores. La guía de La Fiesta de Olivia sugiere tener en cuenta a los invitados celíacos, por ejemplo con malvaviscos sin gluten, y marcar cada dulce para que todos sepan qué toman.",
        ],
      },
      {
        heading: "Cómo rotular los dulces y qué dejar a la mano",
        body: [
          "Coloca carteles que indiquen sabores, alérgenos u opciones veganas, y que combinen con la papelería de la fiesta. Bodas.net también recomienda dejar servilletas, pinzas o cucharitas a mano y preparar bolsitas o tarros para que los invitados se lleven dulces. Así cada persona sabe qué dulce toma.",
        ],
      },
      {
        heading: "Cómo pedir tus dulceros para XV años con prueba digital",
        body: [
          "Cuéntanos por WhatsApp el nombre de la quinceañera, los colores de la fiesta y cuántos dulceros necesitas. Te enviamos una prueba digital del diseño antes de producir, y nada se produce hasta que la apruebas. Puedes ver los [dulceros personalizados](/productos/dulceros-personalizados) en la tienda y mandarnos una foto de la invitación como referencia.",
          "Trabajamos por pedido desde Guadalajara, Jalisco, con envío a todo México. El plazo de producción cuenta desde que apruebas la prueba digital, así que pide con tiempo antes de la fiesta y confirma por WhatsApp la fecha que necesitas. Si buscas otra opción cerca de ti, mira los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "dulceros-navidenos-personalizados"],
    faq: [
      {
        q: "¿Qué dulces poner en un dulcero para XV años?",
        a: "Combina clásicos como gomitas, galletas decoradas, mini brownies y bombones con un detalle sorpresa, siguiendo la guía de Bodas.net adaptada a un XV.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización de un dulcero?",
        a: "El nombre y la temática que elijas. Te mandamos una prueba digital antes de producir y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Cuál es el pedido mínimo de dulceros?",
        a: "El pedido mínimo es de 10 piezas, y puedes escribir la cantidad exacta que necesitas a partir de ahí.",
      },
      {
        q: "¿Cuántos colores conviene usar en la mesa de dulces?",
        a: "Bodas.net aconseja elegir 2 o 3 colores protagonistas y repetirlos en dulces, flores, cintas, carteles y recipientes.",
      },
      {
        q: "¿Conviene poner carteles en los dulces?",
        a: "Sí. Bodas.net indica que los carteles pueden señalar sabores, alérgenos u opciones veganas, y que deben combinar con la papelería de la fiesta.",
      },
      {
        q: "¿Cuántas variedades de dulce conviene poner?",
        a: "Bodas.net recomienda de 5 a 7 variedades de postre en una mesa de bodas. Es una guía de boda que se puede adaptar a un XV.",
      },
      {
        q: "¿Qué tamaño de mesa necesito para la mesa de dulces?",
        a: "Una guía de montaje de La Fiesta de Olivia menciona una mesa de unos 80 por 120 a 160 centímetros para 30 a 40 personas, con mantel hasta el piso y niveles con cajas o bases.",
      },
      {
        q: "¿Hacen envíos a todo México?",
        a: "Sí. Producimos por pedido desde Guadalajara, Jalisco, y enviamos a todo México.",
      },
    ],
    sources: [
      { label: "Bodas.net: Cómo decorar la mesa de dulces de la boda", url: "https://www.bodas.net/articulos/como-decorar-la-mesa-de-dulces-de-la-boda--c960" },
      { label: "Bodas.net: Buffets de dulces para bodas", url: "https://www.bodas.net/articulos/buffets-de-dulces-para-bodas--c733" },
      { label: "La Fiesta de Olivia: Cómo montar tu candy bar", url: "https://shop.lafiestadeolivia.com/blogs/blog/17973332-como-montar-tu-misma-un-candy-bar-y-no-morir-en-el-intento" },
      { label: "Mercado Libre: Mesa de dulces vintage (listado)", url: "https://listado.mercadolibre.com.mx/mesa-de-dulces-vintage" },
      { label: "Mercado Libre: Cajitas de acetato (listado)", url: "https://listado.mercadolibre.com.mx/cajitas-de-acetato" },
    ],
  },
  {
    slug: "detalles-cumpleanos-adultos-personalizados",
    title: "Recuerdos personalizados para cumpleaños de adultos",
    description:
      "Recuerdos personalizados para cumpleaños de adultos: qué elegir para los 30, 40, 50 y 60, qué personalizar, cuándo pedir y cómo evitar errores.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "Cumplir 30, 40, 50 o 60 años merece un detalle que se sienta pensado, no una broma de cotillón. Si preparas una sorpresa para tu mamá, tu papá o tu pareja, o el festejo de un cliente, aquí tienes una línea visual por década, qué personalizar, cuándo pedir y cómo evitar errores con la prueba digital.",
    sections: [
      {
        heading: "Qué recuerdos personalizados para cumpleaños de adultos elegir por hito",
        body: [
          "Para un cumpleaños de adulto conviene elegir un recuerdo sobrio que lleve el nombre y el año del festejado, y repetir el mismo diseño en todas las piezas. En Yume puedes combinar dulceros, stickers de vinil y tatuajes temporales para eventos, todos con prueba digital antes de producir.",
          "Muchas ofertas para estas edades son de novedad: tazas, camisetas o tatuajes con frases como '50 y fabuloso', o plantillas estándar de tiendas en línea. Si organizas una sorpresa para tu mamá, tu papá o tu pareja, conviene pensar el conjunto completo antes de elegir piezas sueltas.",
          "Un blog de producto personalizado de EE. UU. (Imprint) da ejemplos como abridores, vasos reutilizables y tote bags con la edad del hito. Son ideas de ese mercado. Aquí te proponemos piezas que Yume sí produce y que se ven bien en una mesa de fiesta.",
        ],
      },
      {
        heading: "Una línea visual elegante para cada década",
        body: [
          "Una forma sencilla de acertar es darle una personalidad a cada década. Para los 40 conviene un diseño moderno y limpio, para los 50 uno sofisticado con pocos elementos, y para los 60 uno cálido que cuente una historia con fotos o recuerdos. Es una guía de diseño, no una regla.",
          "La tabla resume una idea de estilo para cada edad. Úsala como punto de partida y ajústala a los gustos de quien cumple años. Si el hito es de 30 años, puedes partir de la línea de los 40 y darle más color.",
        ],
        table: {
          headers: ["Década", "Línea visual", "Qué personalizar"],
          rows: [
            ["40 años", "Moderna y limpia", "Nombre y año en una tipografía sencilla, con dos colores"],
            ["50 años", "Sofisticada", "Nombre y año con pocos elementos y colores sobrios"],
            ["60 años", "Cálida y con historia", "Una foto o un detalle familiar, con una paleta cálida"],
          ],
        },
      },
      {
        heading: "Qué personalizar: nombre, año, foto o paleta",
        body: [
          "Cada pieza puede llevar uno o varios de estos elementos: el nombre del festejado, el año que cumple, una foto o los colores de la fiesta. Lo importante es repetir los mismos elementos en todas las piezas para que se vea como un solo conjunto y no como detalles de distintas tiendas.",
          "Imprint también sugiere incluir el nombre, la fecha o una broma interna, y coordinar colores, tipografía y gráficos con la invitación y la decoración. Si ya tienes la invitación, úsala como referencia para que todo se vea de la misma fiesta.",
          "En Yume puedes pedir [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara) con nombre y temática, [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) con tu diseño o foto, y tatuajes temporales para eventos por cotización. Todo con prueba digital antes de producir.",
        ],
      },
      {
        heading: "Cómo combinar dulceros, stickers y tatuajes temporales",
        body: [
          "Piensa en tres piezas con el mismo diseño: el dulcero como detalle principal, un sticker como recuerdo adicional y un tatuaje temporal para animar la fiesta. Si repiten nombre, año y paleta, los tres se leen como un conjunto cuidado y no como cotillón.",
          "El dulcero llega armado y vacío, así que tú eliges qué lleva dentro. Si necesitas ideas, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Ten en cuenta los mínimos: el dulcero se pide desde 10 piezas y los stickers de vinil desde 40.",
        ],
      },
      {
        heading: "Cuándo pedir y cómo evitar errores con la prueba digital",
        body: [
          "Como regla general, un blog estadounidense de producto personalizado recomienda pedir recuerdos de cumpleaños para adultos con 2 a 4 semanas de anticipación. Es una referencia externa, no un plazo de Yume. Para tus tiempos exactos, escríbenos por WhatsApp, y revisa siempre la prueba digital antes de aprobar.",
          "El mismo blog señala errores comunes: escribir mal nombres o fechas, no revisar la prueba digital antes de producir, ignorar el pedido mínimo y comprar a última hora. En Yume la prueba digital te llega antes de producir, así que revisa con calma el nombre y el año del festejado antes de aprobar.",
        ],
      },
      {
        heading: "Cumpleaños de adultos para planners y empresas: piezas por evento",
        body: [
          "Si organizas el festejo de un cliente o de tu empresa, piensa en piezas por evento: un mismo diseño con nombre, año y paleta para todos los invitados. Yume trabaja con prueba digital y trato directo por WhatsApp, así que puedes ajustar el diseño antes de producir.",
          "Para planners, el cumpleaños de un adulto se resuelve como cualquier evento: defines nombre, año y paleta con tu cliente, nos mandas esa referencia y te enviamos la prueba digital para que la apruebe. Para una empresa, aplica lo mismo con el nombre del grupo o tu logo. Si quieres ver cómo se arma un pedido por evento, revisa estas [ideas de dulceros para noviembre](/blog/dulceros-dia-de-muertos-noviembre). Si la cantidad es grande, escríbenos por WhatsApp y te cotizamos.",
        ],
      },
      {
        heading: "Cómo pedirlo: diseño, prueba digital y WhatsApp",
        body: [
          "El proceso es directo: nos escribes por WhatsApp, nos cuentas para quién es y qué estilo imaginas, y preparamos el diseño. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas. Así llegas a la fiesta con un detalle que ya viste y aprobaste.",
          "Para precios y tiempos, escríbenos por WhatsApp y te cotizamos según las piezas que elijas.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-personalizados-guadalajara", "que-poner-en-un-dulcero"],
    faq: [
      {
        q: "¿Qué piezas puedo combinar para un cumpleaños de adulto?",
        a: "Puedes combinar dulceros con nombre y temática, stickers de vinil con tu diseño o foto y tatuajes temporales para eventos, todos con el mismo diseño.",
      },
      {
        q: "¿Veré el diseño antes de que se produzca?",
        a: "Sí. Te enviamos una prueba digital antes de producir y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con lo que tú elijas.",
      },
      {
        q: "¿Puedo usar una foto del festejado?",
        a: "Sí. Los stickers de vinil se pueden hacer con tu diseño, personaje o foto.",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "El dulcero se pide desde 10 piezas y los stickers de vinil personalizados desde 40 piezas.",
      },
      {
        q: "¿Qué pongo si quiero un diseño minimalista?",
        a: "Según Imprint, para un estilo minimalista basta con el nombre y la fecha. Puedes sumar los colores de la fiesta si quieres que combine con la invitación.",
      },
    ],
    sources: [
      { label: "Imprint: Custom birthday party favors ideas", url: "https://imprint.com/blog/2026/02/26/custom-birthday-party-favors-ideas/" },
    ],
  },
  {
    slug: "dulceros-para-ninos-invitados-boda",
    title: "Dulceros para niños en una boda: ideas y cómo entregarlos",
    description:
      "Ideas de dulceros para niños en una boda: qué poner según la edad, cómo combinarlos con la boda y cuándo entregarlos a cada niño.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "Los niños también son invitados, y un detalle con su nombre los hace sentir parte del día. Un dulcero individual, pensado con los colores de la boda, se ve planeado y le da a cada niño algo propio. Aquí tienes qué elegir, qué poner dentro según la edad, cómo cuidar las alergias, cómo personalizarlo, cuándo y quién lo entrega, y cuántos pedir.",
    sections: [
      {
        heading: "Dulceros para niños en una boda: qué conviene elegir",
        body: [
          "Para los niños de una boda conviene un dulcero individual con su nombre y los colores de la boda. Así cada niño recibe algo propio, que se ve como parte del diseño y no como un detalle suelto. Llega armado y vacío, y tú eliges qué lleva dentro.",
          "Nuestro dulcero es tipo lunch box, con asa, y la personalización incluye nombre y temática. Aquí hablamos de una pieza por niño, distinta de una mesa de dulces compartida por todos los invitados.",
          "Una guía de Bodas.net (de 2012, así que puede estar algo desactualizada) recomienda dejar un detalle sobre el plato de cada niño, como una bolsa de caramelos, un juguete o un cuento, para que lo encuentren al sentarse. Un dulcero con nombre cumple esa misma función y se ve como parte de la decoración.",
        ],
      },
      {
        heading: "Qué poner dentro según la edad de cada niño",
        body: [
          "Una guía de bolsas de actividades para bodas en Italia propone ajustar el contenido por edad: de 2 a 5 años, libro para colorear, crayones, marionetas de dedo y plastilina; de 6 a 10, lápices, origami, coches de madera y un rompecabezas; de 11 a 13, rompecabezas 3D y origami.",
          "Esas ideas son un punto de partida para llenar un dulcero que llega vacío. La misma guía aconseja evitar lo que manche, como lápices en lugar de rotuladores. Un resultado de búsqueda en español advierte evitar objetos pequeños que los niños puedan tragar. Para más ideas de relleno, lee [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Alergias e intolerancias: pregunta antes de llenar el dulcero",
        body: [
          "Antes de elegir el relleno, pregunta a los padres por intolerancias o alergias de cada niño. Bodas.net hace esa recomendación para la comida infantil, y aplica igual a los dulces: puedes incluir la pregunta al confirmar asistencia o dejársela a tu planner, y avisar del contenido en una etiqueta.",
          "Como el dulcero llega vacío, tú decides qué lleva dentro y puedes ajustar el relleno de cada niño.",
        ],
      },
      {
        heading: "Cómo personalizar el dulcero para que combine con la boda",
        body: [
          "Cada dulcero lleva el nombre del niño y una temática. Para que combine con la boda, mándanos una foto de la invitación o de la decoración y adaptamos el diseño a esos colores. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
          "La guía de Italia también sugiere un libro de actividades imprimible con los nombres de los novios en la portada y baberos bordados con la fecha de la boda para los más pequeños. Son ideas de esa guía, no de nuestro catálogo: nuestro dulcero se personaliza con nombre y temática.",
        ],
      },
      {
        heading: "Cuándo y cómo entregar los dulceros a los niños",
        body: [
          "Una guía de bodas en Italia prepara con antelación las bolsas de los niños, las monta en el lugar de la boda, las etiqueta con el nombre de cada niño y las reparte. También recomienda una mesa solo para niños. Sirve como referencia de logística.",
          "Con un dulcero con nombre ese orden se simplifica: cada niño encuentra el suyo.",
          "Hay tres momentos posibles: sobre el plato para que lo encuentren al sentarse, en mano durante la fiesta o al final para llevar a casa. Elige el que mejor encaje con el programa de tu boda.",
        ],
      },
      {
        heading: "Quién reparte los dulceros: monitora, planner o salón",
        body: [
          "Alguien debe encargarse de entregar cada dulcero a su niño. Bodas.net propone una monitora por cada cuatro niños para acompañarlos, ayudarlos a comer y entretenerlos; es una guía española de 2012. Esa persona, tu wedding planner o el personal del salón pueden repartirlos, según lo que acuerdes con ellos.",
          "Si trabajas con una planner, compártele la lista de nombres y la hora en que quieres que se entreguen. Como cada dulcero lleva un nombre, quien los reparta no tiene que adivinar para quién es cada uno.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cómo cotizarlos",
        body: [
          "El pedido mínimo es de 10 piezas. Cuenta los niños confirmados en tu lista de invitados, escríbenos por WhatsApp con sus nombres y una foto de la invitación, y te cotizamos. Si tu boda es en Guadalajara, Zapopan o en cualquier parte de México, te los enviamos.",
          "Conoce los [dulceros personalizados](/productos/dulceros-personalizados) para ver el producto y, si la boda es cerca de casa, revisa la guía de [dulceros en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre y la temática que elijas. Te mandamos una prueba digital antes de producir y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Cuántos dulceros pido para una boda?",
        a: "Uno por cada niño confirmado en tu lista, con un pedido mínimo de 10 piezas.",
      },
      {
        q: "¿En qué momento se entrega el dulcero a cada niño?",
        a: "Puede ser sobre el plato al sentarse, en mano durante la fiesta o al final para llevar a casa. Bodas.net sugiere dejar un detalle sobre el plato de cada niño; define el momento con tu planner o con el salón.",
      },
      {
        q: "¿Cómo cuido las alergias de los niños invitados?",
        a: "Pregunta a los padres por intolerancias o alergias antes de elegir el relleno, como sugiere Bodas.net para la comida infantil. El dulcero llega vacío, así que tú decides qué lleva dentro.",
      },
      {
        q: "¿Quién puede repartir los dulceros en la boda?",
        a: "Quien acompañe a los niños, tu wedding planner o el personal del salón. Bodas.net propone una monitora por cada cuatro niños en su guía de 2012.",
      },
    ],
    sources: [
      { label: "Exclusive Italy Weddings: bolsas de actividades para niños en bodas (en inglés)", url: "https://www.exclusiveitalyweddings.com/blog/wedding-party-ideas-children-activity-bags" },
      { label: "Bodas.net: la mesa de los niños (guía de 2012)", url: "https://www.bodas.net/articulos/la-mesa-de-los-ninos--c1194" },
    ],
  },
  {
    slug: "aniversario-empresa-detalles-personalizados",
    title: "Detalles personalizados de aniversario para tu empresa",
    metaTitle: "Detalles personalizados de aniversario para empresa",
    description:
      "Cómo elegir detalles personalizados de aniversario para tu empresa: según el hito, el destinatario, con logo y prueba digital. Para empresas y planners.",
    category: "Guías",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "Un aniversario de empresa se recuerda por detalles pequeños que llevan el nombre correcto: la cifra de los años, el logo y un mensaje breve. Aquí verás cómo elegir el detalle según el hito (5, 10, 20, 30, 40 o 50 años) y según quién lo recibe, cuándo conviene un dulcero con logo o un sticker, qué revisar con tu contador y cómo planear un pedido pequeño por evento, con prueba digital antes de producir. Está pensado para la empresa que organiza y para la planner que coordina.",
    sections: [
      {
        heading: "Detalles personalizados de aniversario para empresa: cómo elegir",
        body: [
          "Elige el detalle según el hito del aniversario y quién lo recibe. Los hitos habituales son 5, 10, 20, 30, 40 y 50 años o más, y los destinatarios suelen ser el equipo, los clientes y los aliados. Un detalle con el nombre de la empresa y la cifra del aniversario se siente hecho para la ocasión.",
          "Según la guía de MOO, añadir nombre, fecha o mensaje convierte un objeto funcional en algo que se conserva. Un dulcero o un sticker con logo cumplen con eso. MOO apunta además que el momento oportuno importa más que un gran gesto al año y que cada regalo debe sentirse dirigido a esa persona. Por eso conviene diseñar el detalle para un evento concreto, no escoger uno de catálogo.",
        ],
      },
      {
        heading: "Qué personalizar según el hito del aniversario",
        body: [
          "Los hitos de aniversario más habituales son 5, 10, 20, 30, 40 y 50 años. En cada uno, lo que cambia es la cifra y el mensaje; el logo y los colores de marca se mantienen. Así el detalle queda ligado a esa fecha concreta.",
          "Los regalos con logotipo ayudan a afianzar la relación con empleados y clientes, según una guía de ideas de aniversario empresarial. Para tu pedido, define tres datos: la cifra o fecha del aniversario, el mensaje breve y el nombre del evento. Con eso, el diseño con tu logo queda listo para la prueba digital.",
        ],
      },
      {
        heading: "Qué detalle dar al equipo, a los clientes y a los aliados",
        body: [
          "Piensa primero en quién lo recibe. Al equipo le habla un detalle del aniversario con la cifra y el nombre de la empresa. A los clientes, uno con su nombre o el del evento. A los aliados, uno con tu logo y un mensaje breve de agradecimiento. Cambia el mensaje, no la identidad de marca.",
          "MOO sugiere, por ejemplo, libretas con el nombre y la fecha de un proyecto compartido, o una caja con nota a mano para los clientes principales. La misma lógica aplica a un dulcero o a un sticker: el nombre del cliente o del evento hace que se sienta dirigido a esa persona.",
        ],
      },
      {
        heading: "Dulcero personalizado con logo para el aniversario de tu empresa",
        body: [
          "El dulcero personalizado es una opción concreta para un evento de empresa. Es tipo lunch box, con asa, llega armado y vacío para que tú elijas qué lleva dentro, y la personalización incluye el nombre y la temática, además del logo de tu empresa. El pedido mínimo es de 10 piezas.",
          "Como llega vacío, el relleno lo decides tú. Pon en el diseño el nombre del evento, la cifra del aniversario y los colores de tu marca, y tendrás una pieza que se ve planeada para esa ocasión. Para ideas de relleno, lee [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Si tu evento es en Guadalajara, mira [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Stickers con logo para acompañar el detalle de aniversario",
        body: [
          "Los stickers con logo sirven para acompañar el dulcero o decorar una botella de bienvenida. Puedes pedirlos con el logo de tu empresa o un diseño del aniversario. Los [stickers con tu logo](/productos/stickers-logo-personalizado) tienen mínimo de 50 piezas, se cortan troquelados o semitroquelados y se imprimen en mate, brillante u holográfico.",
          "Si prefieres una ilustración del evento en lugar del logo, existen los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable), con mínimo de 40 piezas. Los de vinil pasan por prueba digital antes de imprimir.",
        ],
      },
      {
        heading: "¿Es deducible un detalle de aniversario? Qué consultar con tu contador",
        body: [
          "Depende de a quién se lo des y de cómo lo documentes. Según una nota fiscal, el artículo 28, fracción III de la Ley del ISR establece que los obsequios y atenciones no son deducibles en general, salvo los relacionados con la venta o el servicio y ofrecidos a los clientes en forma general. Confirma tu caso con tu contador.",
          "Por eso un detalle de aniversario entregado a todos los clientes encaja mejor en esa excepción que un regalo a un cliente en particular. Para empleados, varias fuentes de despachos contables indican que podrían ser deducibles como previsión social (artículo 7 de la LISR) si cumplen requisitos como CFDI, registro contable y pago bancarizado, y que los regalos en dinero se tratan como ingreso para el trabajador. Las fuentes no coinciden del todo sobre los regalos en especie. Esto es orientación general, no asesoría fiscal.",
        ],
      },
      {
        heading: "Cómo planear el pedido del aniversario con tu planner",
        body: [
          "Planea el pedido desde la lista de invitados y el mínimo de cada pieza: 10 dulceros, 50 stickers con logo o 40 stickers de vinil. Define el nombre del evento, la cifra o fecha del aniversario y el mensaje breve. Antes de producir recibes una prueba digital, y nada se imprime sin tu aprobación.",
          "Si coordinas el evento como planner, mándanos por WhatsApp una foto de la invitación o de la decoración y adaptamos el diseño a esos colores. Para confirmar fechas de producción y envío, escríbenos antes de fijar el día del evento. Si tu aniversario cae en temporada de posadas, revisa los [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "dulceros-navidenos-personalizados"],
    faq: [
      {
        q: "¿Puedo poner el logo de mi empresa en el dulcero?",
        a: "Sí. La personalización incluye el nombre y la temática que elijas, incluido el logo de tu marca, y te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con lo que tú elijas.",
      },
      {
        q: "¿Cuánto tarda la prueba digital de los stickers de vinil?",
        a: "Llega normalmente en un máximo de 24 horas después de tu pago e incluye hasta 2 rondas de ajustes.",
      },
      {
        q: "¿En qué se diferencian los stickers con logo y los de vinil?",
        a: "Los stickers con tu logo están pensados para el logo de tu negocio y piden mínimo 50 piezas. Los de vinil sirven para cualquier diseño, personaje o foto y piden mínimo 40 piezas.",
      },
      {
        q: "¿Hay un monto máximo deducible para regalos de aniversario?",
        a: "Las fuentes que revisamos no dan límites de monto ni los requisitos exactos de CFDI para regalos a clientes. Pregunta a tu contador antes de comprar.",
      },
    ],
    sources: [
      { label: "MOO: ideas de obsequios a clientes", url: "https://www.moo.com/blog/es/inspiracion/ideas-para-obsequios-a-clientes" },
      { label: "El Contribuyente: cuándo son deducibles los regalos y muestras para clientes", url: "https://www.elcontribuyente.mx/2024/07/cuando-son-deducibles-los-regalos-y-muestras-para-clientes/" },
      { label: "ContadorMX: cómo hacer deducibles regalos a empleados o clientes", url: "https://contadormx.com/como-hacer-deducibles-regalos-a-empleados-o-clientes/" },
      { label: "Asest: ideas de aniversario empresarial", url: "https://asest.es/story/aniversario-empresarial-ideas/" },
    ],
  },
  {
    slug: "guia-wedding-planners-detalles-personalizados-guadalajara",
    title: "Proveedor de detalles personalizados para wedding planners en Guadalajara",
    metaTitle: "Proveedor de detalles personalizados para wedding planners",
    description:
      "Guía para wedding planners en Guadalajara: cómo cotizar detalles personalizados por evento, aprobar pruebas digitales y coordinar piezas para bodas.",
    category: "Guías",
    publishedAt: "2026-11-05",
    modifiedAt: "2026-11-07",
    intro:
      "Coordinas varias bodas y necesitas un proveedor que entregue la misma calidad en cada una. Esta guía te explica cómo pedir cotización, aprobar pruebas digitales, fijar fechas y reunir dulceros, stickers y tatuajes temporales en una misma línea visual para tus clientes en Guadalajara, Zapopan y todo México.",
    sections: [
      {
        heading: "Qué debe ofrecer un proveedor de detalles personalizados para wedding planners",
        body: [
          "Un proveedor de detalles personalizados para wedding planners debe darte un proceso claro: cotización por evento, diseño con prueba digital antes de producir, comunicación directa y piezas coherentes entre sí. Tu volumen es por boda, no industrial, así que lo importante es que cada evento se vea planeado y que sepas qué esperar en cada paso.",
          "El directorio de detalles de bodas de Bodas.net en Guadalajara reúne talleres de regalos personalizados, pero está pensado como directorio de pareja a proveedor. Esta guía es para ti, que coordinas varias bodas. Si quieres ver primero una de las piezas, revisa nuestros [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Cómo pedir una cotización por evento",
        body: [
          "Para cotizar una boda escríbenos por WhatsApp con los datos básicos del evento: fecha, ciudad, número de invitados, paleta de colores, las piezas que te interesan y los textos o nombres que llevarán. Con eso podemos orientarte sobre cantidades y mínimos, y avisarte si algo necesita confirmarse antes de producir.",
          "Los mínimos publicados son de 10 piezas para dulceros, de 40 piezas para [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) y de 50 piezas para etiquetas con logo. Cuéntanos tu evento completo y cotizamos las piezas juntas.",
        ],
        table: {
          headers: ["Dato del brief", "Qué nos permite definir"],
          rows: [
            ["Fecha y ciudad", "Cómo coordinar la entrega"],
            ["Número de invitados", "Cantidades y mínimos"],
            ["Paleta de colores", "Un diseño coherente con la decoración"],
            ["Piezas de interés", "Qué se cotiza junto"],
            ["Textos y nombres", "Una prueba digital correcta desde el inicio"],
          ],
        },
      },
      {
        heading: "Cómo se maneja un pedido por boda",
        body: [
          "Cada boda se cotiza como un pedido aparte: tú nos mandas el brief por WhatsApp con fecha, ciudad, invitados, paleta, piezas y textos, y cotizamos las piezas del evento juntas. Así cada boda tiene su propia cotización y puedes mantener una línea visual constante entre las bodas que coordinas.",
        ],
      },
      {
        heading: "Pruebas digitales y aprobación de textos",
        body: [
          "Para los stickers de vinil te enviamos una prueba digital antes de imprimir, y no se imprime nada sin tu aprobación. Revisa en ella nombres, fechas, ortografía y colores con la pareja, porque ese es el punto de control del pedido. Conviene que una sola persona, tú o la pareja, tenga la última palabra.",
          "En los stickers de vinil, la prueba llega normalmente en un máximo de 24 horas después del pago e incluye hasta 2 rondas de ajustes.",
        ],
      },
      {
        heading: "Fechas límite: cuándo cerrar textos y cambios",
        body: [
          "Cierra los textos y la aprobación con margen, no la semana de la boda. Una guía de planificación de La Bastilla recomienda repasar los detalles con todos los proveedores aproximadamente un mes antes del evento. Usa ese punto como fecha de referencia para que ningún cambio de última hora te comprometa la entrega.",
          "Los plazos de producción y envío de cada pieza te los confirmamos por WhatsApp al cotizar, una vez que conocemos la fecha de tu evento.",
        ],
      },
      {
        heading: "Un paquete coherente: dulceros, stickers y tatuajes temporales",
        body: [
          "Cuando los dulceros, los stickers y los tatuajes temporales comparten paleta, tipografía y textos, la boda se ve planeada de principio a fin. Diseñarlos juntos para un mismo evento te da una identidad visual consistente, y tú coordinas un solo proveedor en lugar de varios.",
          "El dulcero llega armado y vacío, con nombre y temática; tú o la pareja deciden qué lleva dentro. Para ideas de relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Los tatuajes temporales para eventos se cotizan por WhatsApp.",
          "Los stickers de vinil se pueden pedir con corte troquelado o semitroquelado, y con acabado mate, brillante u holográfico. Si además quieres marcar tus propios entregables, tenemos [etiquetas con tu logo](/productos/stickers-logo-personalizado).",
        ],
      },
      {
        heading: "Qué pedir por escrito a tu proveedor",
        body: [
          "Pide por escrito lo que acordaron: piezas y cantidades, textos finales, número de pruebas digitales incluidas, fecha límite de cambios, forma de pago, plazo de producción y forma de entrega. Un resumen por WhatsApp o correo evita malentendidos y te sirve de respaldo cuando la pareja cambia de opinión.",
          "Una reseña de un proveedor de detalles de boda en Bodas.net elogia la entrega puntual y el empaque cuidado, dos puntos que conviene acordar de antemano.",
        ],
        table: {
          headers: ["Qué confirmar", "Para qué sirve"],
          rows: [
            ["Piezas y cantidades", "Que el pedido cubra a todos los invitados"],
            ["Textos finales", "Evitar errores en nombres y fechas"],
            ["Pruebas digitales y ajustes", "Saber cuántas revisiones hay"],
            ["Fecha límite de cambios", "Proteger la entrega"],
            ["Pago, plazo y entrega", "Coordinar tu calendario del evento"],
          ],
        },
      },
      {
        heading: "Cómo empezar con tu próxima boda",
        body: [
          "Cuéntanos la fecha, el número de invitados y la paleta de tu próxima boda, y armamos una cotización de las piezas que necesites. Si trabajas varias bodas al año, podemos mantener un criterio de diseño y comunicación constante contigo. Escríbenos por WhatsApp desde el botón de cotización al final de esta página.",
        ],
      },
    ],
    relatedProductSlugs: [],
    relatedBlogSlugs: ["dulceros-personalizados-guadalajara", "que-poner-en-un-dulcero"],
    quoteMessage:
      "Hola, soy wedding planner y quiero cotizar detalles personalizados para una boda: dulceros, stickers y tatuajes temporales.",
    sources: [
      { label: "Bodas.net: detalles de bodas en Guadalajara", url: "https://www.bodas.net/bodas/proveedores/detalles-de-bodas/guadalajara" },
      { label: "Bodas.net: reseña de Detalle & Memoria", url: "https://www.bodas.net/detalles-de-bodas/detalle&memoria--e256961" },
      { label: "La Bastilla: libro de planificación de bodas", url: "https://miboda.labastilla.com/sites/all/themes/personalizado/img/Libro_Bodas_La_Bastilla.pdf" },
    ],
    faq: [
      {
        q: "¿Envían las piezas fuera de Guadalajara?",
        a: "Sí, enviamos a todo México. Cuéntanos la ciudad de tu evento por WhatsApp y te confirmamos la entrega.",
      },
      {
        q: "¿Se pueden cotizar tatuajes temporales para una boda?",
        a: "Sí. Los tatuajes temporales para eventos se cotizan por WhatsApp junto con las demás piezas de tu evento.",
      },
      {
        q: "¿Puedo combinar dulceros y stickers en un mismo pedido?",
        a: "Sí. Cuéntanos tu evento completo por WhatsApp y cotizamos las piezas juntas.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, con nombre y temática, para que tú o la pareja decidan qué lleva dentro.",
      },
    ],
  },
  {
    slug: "regalo-sorpresa-personalizado-ideas-con-dulceros",
    title: "Regalo sorpresa personalizado: ideas con dulceros",
    description:
      "Ideas de regalo sorpresa personalizado con dulceros para mamá, pareja o boda: qué poner dentro, qué personalizar y cómo planear la entrega.",
    category: "Guías",
    publishedAt: "2026-11-05",
    modifiedAt: "2026-11-07",
    intro:
      "Regalar dulces es fácil; lograr que se sientan como un regalo sorpresa personalizado es lo difícil. Un dulcero con nombre y temática convierte los dulces favoritos de mamá, de tu pareja o de tus invitados en un detalle que se ve pensado. Aquí van ideas por ocasión y por persona, dulces regionales de México para darle historia, qué personalizar, qué poner dentro y cómo pedirlo con tiempo.",
    sections: [
      {
        heading: "¿Qué es un regalo sorpresa personalizado con dulcero?",
        body: [
          "Un dulcero personalizado es un contenedor tipo lunch box, con asa, que lleva el nombre y la temática que elijas y llega armado y vacío para que tú lo llenes. Sirve de regalo sorpresa en cumpleaños, aniversarios y bodas, y también como detalle de mesa para un evento.",
          "Un regalo sorpresa personalizado funciona cuando lleva algo que solo tiene sentido para esa persona: su nombre, una temática o un detalle que le encante. En México, según YouGov, el 56% de quienes compran regalo para su mamá elige comida y bebida y el 37% elige algo personalizado. Un dulcero une las dos ideas.",
          "Una guía de regalos para mamá de Odin Lake separa los regalos personalizados (álbumes, joyas con nombres o fechas) de los de comida, donde la personalización se limita a una nota escrita a mano y al envoltorio. Un dulcero con nombre y temática junta ambas ideas: es comida y es un diseño hecho para una persona.",
        ],
      },
      {
        heading: "Ideas de regalo sorpresa con dulces para mamá",
        body: [
          "Para mamá funciona un dulcero con su nombre y una temática que ella reconozca, como flores o sus colores favoritos. Tú eliges qué lleva dentro: sus dulces de siempre, chocolates o galletas. Así el regalo se ve cuidado y sabe a lo que a ella le gusta.",
          "Si la sorpresa es de parte de varios hijos, puedes pedir un dulcero para cada hermana, tía o abuela, cada uno con su nombre. El pedido mínimo es de 10 piezas, así que esta idea encaja mejor cuando el regalo se reparte entre varias personas. Si no sabes qué llevar dentro, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Ideas para tu pareja: aniversario, cumpleaños y San Valentín",
        body: [
          "Para tu pareja, el dulcero puede llevar sus nombres juntos y una temática que recuerde algo de ustedes, como un viaje o un color. Funciona para un aniversario, un cumpleaños o San Valentín. Adentro van sus dulces favoritos, y el diseño es lo que lo vuelve un regalo y no solo una caja de dulces.",
          "Para un aniversario, un dulcero con los dos nombres y los colores que los representan se ve como un detalle planeado.",
        ],
      },
      {
        heading: "Ideas rápidas por ocasión: una tabla para decidir",
        body: [
          "Si buscas una idea rápida, piensa en tres cosas: a quién va dirigida la sorpresa, qué ocasión celebra y qué dulces le gustan. Con esas tres respuestas ya puedes definir el nombre, la temática y el relleno del dulcero, y pedir la prueba digital.",
          "La tabla resume ideas de diseño y relleno. Son sugerencias: la temática final la defines tú y la adaptamos a tus referencias.",
        ],
        table: {
          headers: ["Ocasión", "Nombre y temática", "Relleno"],
          rows: [
            ["Cumpleaños de mamá", "Su nombre y flores o sus colores favoritos", "Sus dulces de siempre"],
            ["Aniversario", "Los dos nombres y los colores que los representan", "Los dulces favoritos de ambos"],
            ["San Valentín", "Sus nombres y un detalle de ustedes, como un viaje", "Chocolates o galletas"],
            ["Sorpresa de varios hijos", "Un nombre por cada hermana, tía o abuela", "Dulces tradicionales mexicanos"],
            ["Boda o evento", "El nombre del evento y su temática", "Dulces regionales mexicanos"],
          ],
        },
      },
      {
        heading: "Dulces regionales de México: un detalle con historia",
        body: [
          "Los dulces típicos mexicanos tienen origen prehispánico: se endulzaban con miel de maguey, hormiga mielera, caña de maíz y abeja pipiola, y después el piloncillo los sustituyó. Por eso un relleno de dulces tradicionales le da historia al dulcero, más allá del sabor.",
          "Según BBVA, cada dulce se asocia a una región: muéganos de Huamantla, Tlaxcala; alegrías de Xochimilco, CDMX; cocadas de Veracruz; camote de Puebla; glorias de Linares, Nuevo León; jamoncillo de Axochiapan, Morelos; y dulce de leche o manjar de Celaya, Guanajuato. Si la persona homenajeada es de uno de esos lugares, puedes rellenar el dulcero con dulces de su estado.",
          "El mismo artículo presenta el dulce artesanal como portador de recuerdos, experiencias y emociones, y esa es justo la idea de un regalo sorpresa: que el relleno le recuerde algo a quien lo recibe.",
        ],
      },
      {
        heading: "Qué personalizar: nombre, temática y detalles",
        body: [
          "La personalización de nuestro dulcero incluye el nombre y la temática que elijas. Con eso puedes armar un regalo para una persona concreta, con un tema que le guste. Cualquier otro detalle, como una fecha o una frase, se consulta por WhatsApp al cotizar, porque depende del diseño.",
          "Nuestro dulcero es tipo lunch box, con asa. Mándanos una referencia de los colores o del estilo que le gusta a esa persona y adaptamos el diseño. Si quieres sumar un detalle pequeño con el mismo diseño, también puedes pedir [stickers de vinil personalizados](/productos/stickers-vinil-impermeable).",
        ],
      },
      {
        heading: "Qué poner dentro del dulcero de regalo",
        body: [
          "El dulcero llega armado y vacío, así que tú decides el relleno y ahí está la sorpresa. Elige los dulces favoritos de quien lo recibe: chocolates, galletas, gomitas o dulces tradicionales mexicanos. Lo importante es que el relleno se parezca a esa persona y que el diseño del dulcero haga el resto.",
          "Sobre el presupuesto: en la misma encuesta de YouGov, el rango de gasto más común para un regalo a mamá en México es de $201 a $1,000 (58%), y un 9% gasta entre $1,001 y $1,900. Piensa este regalo como un detalle de valor medio, donde pesan el diseño y lo que pones dentro, no el precio más bajo.",
        ],
      },
      {
        heading: "Para bodas, planners y eventos de empresa",
        body: [
          "Un dulcero también funciona como detalle de mesa o recuerdo para una boda, un cumpleaños o un evento de empresa. Si eres planner o organizas un evento, puedes pedir varios con el nombre y la temática del evento, siempre con prueba digital antes de producir.",
          "El pedido mínimo es de 10 piezas y la cantidad exacta y los tiempos de tu evento se confirman por WhatsApp al cotizar. Si tu fecha cae en temporada, revisa las ideas de [dulceros para Día de Muertos y noviembre](/blog/dulceros-dia-de-muertos-noviembre) o de [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
        ],
      },
      {
        heading: "Cómo coordinar la sorpresa y pedirlo con anticipación",
        body: [
          "Pide el dulcero con anticipación: primero cotizas por WhatsApp, te enviamos una prueba digital del diseño y nada se produce hasta que la apruebas. Para fechas concretas, como un aniversario o San Valentín, pregunta por los tiempos de producción y envío antes de decidir.",
          "Un orden sencillo: define a quién va dirigida la sorpresa y la ocasión, elige el nombre y la temática, manda una referencia de colores, cotiza por WhatsApp, aprueba la prueba digital y, cuando llegue, rellena el dulcero con los dulces que elegiste.",
          "Atendemos Guadalajara, Zapopan y enviamos a todo México. Si estás en la zona, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara). Escríbenos por WhatsApp con la ocasión, el nombre y la fecha en que lo necesitas, y te decimos qué se puede hacer.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "dulceros-dia-de-muertos-noviembre", "dulceros-navidenos-personalizados"],
    sources: [
      { label: "Emprendedor: regalos del Día de las Madres 2026 y presupuesto de los mexicanos (YouGov)", url: "https://emprendedor.com/dia-madres-2026-regalos-presupuesto-mexicanos/" },
      { label: "Odin Lake: regalos con significado para mamá", url: "https://odinlake.com/es/blogs/all-blogs/thoughtful-gifts-to-make-mom-feel-special-on-mothers-day" },
      { label: "BBVA: los dulces típicos, una tradición artesanal de México", url: "https://www.bbva.com/es/mx/los-dulces-tipicos-una-tradicion-artesanal-de-mexico/" },
    ],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para que lo llenes con los dulces que elijas.",
      },
      {
        q: "¿Qué se puede personalizar en el dulcero?",
        a: "El nombre y la temática que elijas. Si quieres sumar una fecha o una frase, escríbenos por WhatsApp al cotizar y te confirmamos.",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "El pedido mínimo es de 10 piezas, así que conviene cuando el regalo se reparte entre varias personas o cubre un evento.",
      },
      {
        q: "¿Veo el diseño antes de que se produzca?",
        a: "Sí. Te enviamos una prueba digital del diseño y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Con cuánto tiempo debo pedirlo para una fecha especial?",
        a: "Depende de la fecha. Escríbenos por WhatsApp con el día en que lo necesitas y te confirmamos los tiempos de producción y envío.",
      },
      {
        q: "¿De dónde son los muéganos y las cocadas?",
        a: "Según BBVA, los muéganos se asocian a Huamantla, Tlaxcala, y las cocadas a Veracruz. Puedes usar dulces de la región de la persona homenajeada como relleno.",
      },
    ],
  },
  {
    slug: "cuantos-dulceros-pedir-para-una-boda",
    title: "Cuántos dulceros pedir para una boda",
    description:
      "Cuántos dulceros pedir para una boda: cómo pasar de invitados confirmados a piezas, cuánto reservar y cuándo cerrar el número con tu planner.",
    category: "Guías",
    publishedAt: "2026-11-07",
    modifiedAt: "2026-11-09",
    intro:
      "Antes de pedir los dulceros de tu boda conviene tener claro cuántos necesitas: uno por invitado alcanza para entregar, pero no cubre a los novios, la mesa de dulces ni los cambios de última hora. Esta guía te muestra cómo pasar de la lista de invitados al número final de piezas, con ejemplos por tamaño de boda, pensada para novias y para wedding planners.",
    sections: [
      {
        heading: "Cuántos dulceros pedir para una boda: la regla simple",
        body: [
          "Pide un dulcero por cada invitado confirmado, o uno por pareja o familia si los entregas así, y suma una reserva para los novios, la mesa de dulces y cualquier cambio de último momento. La cuenta se cierra después de recibir las confirmaciones, no antes, porque el número de invitados puede cambiar hasta el final.",
          "Esta regla es distinta a la de una candy bar. Las guías de candy bar, como la de Bodas.net, calculan por peso de golosinas o por número de tarros, porque el dulce va a granel. Un dulcero es una pieza individual, así que se cuenta por persona.",
        ],
      },
      {
        heading: "Por persona o por pareja: cómo contar los dulceros",
        body: [
          "Cuenta por persona si cada invitado se lleva su propio dulcero con su nombre o con el diseño de la boda. Cuenta por pareja o por familia si dejas uno por cada grupo que llega junto. Decide esto primero, porque cambia el total y también cómo tu planner organiza la entrega.",
          "Los niños también cuentan si les corresponde su propio detalle. Anótalos en la lista antes de sumar, y decide con la pareja o con la familia si un invitado que va acompañado recibe uno o dos.",
        ],
      },
      {
        heading: "De invitados a piezas: un ejemplo paso a paso",
        body: [
          "Suma tus invitados confirmados, agrega las piezas para los novios y la mesa, y termina con una reserva. Con 120 invitados confirmados, un dulcero por persona, 2 para los novios, 4 para la mesa de dulces y una reserva de 6, el pedido sería de 132 piezas. Es un ejemplo ilustrativo, no una cifra de un tercero.",
          "Los números del cuadro solo muestran la suma; cambia cada línea según tu lista. El pedido mínimo de dulceros es de 10 piezas, y puedes pedir cualquier cantidad desde ahí.",
        ],
        table: {
          headers: ["Concepto", "Piezas", "Cómo se cuenta"],
          rows: [
            ["Invitados confirmados", "120", "Uno por persona"],
            ["Novios", "2", "Uno para cada uno"],
            ["Mesa de dulces", "4", "Para exhibir en la mesa"],
            ["Reserva", "6", "Cambios de último momento y piezas dañadas"],
            ["Total del pedido", "132", "Suma de todo"],
          ],
        },
      },
      {
        heading: "Ejemplos de cuántos dulceros pedir según el tamaño de la boda",
        body: [
          "Entregar por persona sigue la lista de invitados; entregar por pareja o familia sigue el número de grupos. Por eso la misma boda de 120 invitados puede pedir 132 piezas por persona u 80 por grupo, según el ejemplo de abajo. Elige cómo entregarás antes de contar y pide a tu planner la lista en ese formato.",
          "Los extras de cada fila son supuestos de ejemplo, no una recomendación: cambia novios, mesa y reserva según tu boda. Recuerda que el pedido mínimo es de 10 piezas.",
        ],
        table: {
          headers: ["Boda de ejemplo", "Cómo se entrega", "Cuenta", "Total"],
          rows: [
            ["50 invitados", "Por persona", "50 + 2 novios + 2 mesa + 2 reserva", "56"],
            ["120 invitados", "Por persona", "120 + 2 novios + 4 mesa + 6 reserva", "132"],
            ["120 invitados en 70 grupos", "Por pareja o familia", "70 + 2 novios + 4 mesa + 4 reserva", "80"],
            ["200 invitados", "Por persona", "200 + 2 novios + 6 mesa + 10 reserva", "218"],
          ],
        },
      },
      {
        heading: "Cuántos dulceros extra reservar",
        body: [
          "No hay una cantidad fija de extras que sirva para todas las bodas. Zola explica que depende del precio de cada pieza: con detalles baratos sobrar casi no pesa, con piezas caras quizá no compense. Reserva más si hay invitados que pueden pasar de No a Sí, o si la boda es de destino.",
          "Los dulceros se piden por pieza desde 10, así que la reserva se ajusta al número que tú decidas.",
        ],
      },
      {
        heading: "Candy bar o dulcero: por qué no se cuentan igual",
        body: [
          "Una candy bar se calcula por peso de golosinas o por tarros porque el dulce va a granel; un dulcero individual se cuenta por pieza. Bodas.net da cifras para la candy bar, no para dulceros, así que no sirven para decidir cuántas piezas pedir.",
          "Como referencia de esa guía, pensada para una candy bar de golosinas: unos 150 g por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Propone 4 a 6 tarros medianos para 50 invitados, 10 o 12 para 50 a 150 y 15 o 16 para unos 200, y da como ejemplo unos 10 kg de golosinas para 100 personas.",
          "Lo que sí te sirve de esas cifras es la idea de fondo: la cantidad por persona baja cuando hay más invitados. Con dulceros la lógica es otra, porque cada pieza ya lleva su porción dentro.",
        ],
      },
      {
        heading: "Dulceros para la mesa de dulces y para cada lugar",
        body: [
          "Separa tres usos antes de contar: el dulcero que se entrega a cada invitado, los que se exhiben llenos en la mesa de dulces y la reserva. Así no mezclas piezas de entrega con piezas de decoración, y puedes cerrar cada cifra por separado cuando tengas la lista final.",
          "Según Bodas.net, la candy bar acompaña al postre y al banquete, no los sustituye, y suele ponerse cerca de la pista de baile o abrirse después de comer. Para el diseño y el armado de esa mesa, revisa nuestra guía de [mesa de dulces para boda](/blog/mesa-de-dulces-para-boda).",
          "El dulcero llega armado y vacío, así que lo que va dentro lo eliges tú. Si necesitas ideas, mira [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Cuándo cerrar el número y cómo coordinarlo con tu planner",
        body: [
          "Cierra la cantidad cuando ya tengas las confirmaciones de asistencia, y avisa a tu proveedor con la fecha de tu boda. Si trabajas con una wedding planner, pídele la lista final por persona o por pareja, así el pedido, la prueba digital y la entrega salen con el mismo número.",
          "Antes de producir te enviamos una prueba digital del diseño, y nada se produce hasta que la apruebas. Los tiempos de producción y envío dependen de tu fecha: escríbenos por WhatsApp con el día de tu boda y te los confirmamos.",
          "Si quieres ver cómo trabajamos, conoce nuestros [dulceros personalizados](/blog/dulceros-personalizados-guadalajara) en Guadalajara, con envío a todo México.",
        ],
      },
    ],
    relatedProductSlugs: [],
    relatedBlogSlugs: ["mesa-de-dulces-para-boda", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    quoteMessage: "Hola, quiero cotizar dulceros personalizados para mi boda.",
    sources: [
      {
        label: "Bodas.net: todo lo que debéis saber antes de montar una candy bar",
        url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448",
      },
      {
        label: "Zola: ¿conviene comprar recuerdos de boda extra?",
        url: "https://www.zola.com/expert-advice/should-you-buy-extra-wedding-favors",
      },
    ],
    faq: [
      {
        q: "¿Cuántos dulceros pedir para una boda de 100 invitados?",
        a: "Parte de un dulcero por invitado confirmado, es decir 100 piezas, y suma las de los novios, la mesa de dulces y la reserva que decidas.",
      },
      {
        q: "¿Cuántos dulceros pedir si entrego uno por pareja o familia?",
        a: "Cuenta los grupos que llegan juntos en lugar de los invitados, y suma después los de los novios, la mesa de dulces y tu reserva.",
      },
      {
        q: "¿Cuál es la diferencia entre una candy bar y un dulcero?",
        a: "La candy bar se calcula por peso de golosinas o por tarros. El dulcero es una pieza individual y se cuenta por persona o por grupo.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con lo que tú elijas.",
      },
      {
        q: "¿Cuál es el pedido mínimo de dulceros?",
        a: "El pedido mínimo es de 10 piezas, y desde ahí puedes pedir la cantidad exacta que necesitas.",
      },
    ],
  },
  {
    slug: "que-dulces-poner-en-dulcero-de-boda",
    title: "Qué dulces poner en un dulcero de boda: ideas para adultos",
    description:
      "Qué dulces poner en un dulcero de boda para invitados adultos: ideas por perfil, cuántos tipos elegir, cantidades orientativas y cómo presentarlos.",
    category: "Guías",
    publishedAt: "2026-11-09",
    intro:
      "Un dulcero de boda no necesita ser una mesa enorme de chuches. Si tus invitados son adultos, lo que cuenta es una selección corta, bien presentada y coordinada con el resto del banquete. Esta guía es para ti, para tu pareja y para la wedding planner: qué dulces poner, cuántos tipos elegir, cuánto por invitado y cómo presentarlos.",
    sections: [
      {
        heading: "Qué dulces poner en un dulcero de boda para adultos",
        body: [
          "Para invitados adultos conviene elegir pocos dulces y bien escogidos, en vez de una montaña de chuches de colores. Bodas.net agrupa los dulces en clásicos, bocados pequeños y opciones elegantes, y para adultos el grupo elegante, con macarons, trufas y mini pastelería, es el más relevante para tu dulcero.",
          "Un dulcero es más pequeño que una mesa de dulces completa, así que no necesitas cubrir los tres grupos: escoge una o dos piezas de cada uno según el estilo de tu boda. Si quieres más ideas de relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Ideas por perfil: clásico, chocolate, frutal y salado-dulce",
        body: [
          "Una forma sencilla de decidir es armar el dulcero por perfiles: clásico, chocolate, frutal, salado-dulce y una opción sin azúcar o vegana. Con una pieza de cada perfil, cada invitado encuentra algo a su gusto y el dulcero se ve variado sin llenarse de opciones que nadie termina.",
        ],
        table: {
          headers: ["Perfil", "Ideas"],
          rows: [
            ["Clásico", "Nubes, caramelos blandos, regaliz y gominolas"],
            ["Chocolate", "Trufas, mini brownies y galletas decoradas"],
            ["Frutal", "Gominolas y fruta deshidratada"],
            ["Salado-dulce", "Nueces junto a un dulce"],
            ["Sin azúcar o vegano", "Una opción bien rotulada, como sugieren Bodas.net y Butter Be Mine"],
          ],
        },
      },
      {
        heading: "Cuántos tipos de dulce elegir y cuánto por invitado",
        body: [
          "Una guía de dulces de EE. UU. recomienda de 7 a 10 tipos de dulce para un buffet completo, así que un dulcero pequeño necesita menos opciones. Para las cantidades, Bodas.net propone unos 150 g por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes.",
          "Para 100 invitados, Bodas.net sugiere partir de unos 10 kg si casi todo es dulce, y reducirlo si añades brownies, donuts u otra repostería. Butter Be Mine da entre 90 y 113 g por invitado. Son referencias de esos sitios para una mesa completa, no una regla para tu dulcero.",
        ],
      },
      {
        heading: "Cómo presentar el dulcero: frascos, alturas y rotulado",
        body: [
          "Usa recipientes transparentes con alturas variadas, pinzas o cucharas y rótulos con el nombre de cada dulce y sus alérgenos. Así los invitados ven lo que hay y la mesa se ve ordenada. Bodas.net también recomienda marcar las opciones sin gluten, sin azúcar o veganas.",
          "Butter Be Mine sugiere una paleta de un color principal y uno de acento.",
        ],
      },
      {
        heading: "Dietas, alérgenos y opciones para quien no come dulce",
        body: [
          "Rotula sabores y alérgenos, y marca con claridad las opciones sin gluten, sin azúcar, veganas o sin lácteos. Butter Be Mine propone, además, fruta deshidratada y nueces para quien no come dulce. Así nadie se queda sin nada que elegir y cada invitado sabe qué puede comer sin preguntar.",
        ],
      },
      {
        heading: "Dónde colocarlo y cómo darlo para llevar",
        body: [
          "Bodas.net aconseja ubicar la candy bar cerca de la pista de baile o abrirla después del banquete. Para un dulcero pequeño puedes seguir la misma idea. Y si quieres que el detalle continúe en casa, Butter Be Mine sugiere ofrecer bolsitas para que los invitados se lleven dulces.",
          "Si quieres que el dulcero lleve el nombre de los novios y la temática de tu boda, conoce nuestros [dulceros personalizados](/blog/dulceros-personalizados-guadalajara) y escríbenos por WhatsApp para cotizar. También puedes sumar [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) con tu diseño.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    sources: [
      { label: "Bodas.net: todo lo que debéis saber antes de montar una candy bar", url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448" },
      { label: "Butter Be Mine: how to design a wedding candy buffet", url: "https://www.butterbemine.com/blogs/wedding-food/14777569-how-to-design-a-wedding-candy-buffet" },
    ],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, así que tú eliges lo que lleva dentro.",
      },
      {
        q: "¿Qué incluye la personalización del dulcero?",
        a: "El nombre y la temática que elijas. Te mandamos una prueba digital antes de producir.",
      },
    ],
  },
  {
    slug: "prueba-digital-pedido-evento-planners",
    title: "Prueba digital en pedidos de evento para planners",
    description:
      "Cómo aprobar la prueba digital de un diseño personalizado para evento sin retrasos: qué entregar, qué revisar y cómo calcular tu calendario.",
    category: "Guías",
    publishedAt: "2026-11-09",
    intro:
      "Para una planner, la prueba digital es el último filtro antes de producir. Si llega con datos completos y comentarios ordenados, hay menos vueltas; si no, puede mover toda la fecha del evento. Aquí tienes qué entregar, qué revisar, cómo reunir las opiniones de todos y cómo calcular tu calendario hacia atrás.",
    sections: [
      {
        heading: "Prueba digital para planners: qué es y por qué marca el calendario",
        body: [
          "La prueba digital es una imagen de tu diseño personalizado que revisas antes de producir. Para una planner es el punto de arranque de la producción: nada se imprime sin tu aprobación, y en varias tiendas que consultamos un cambio posterior implica rehacer la pieza. Por eso conviene tratarla como una entrega formal.",
          "En Yume trabajamos con prueba digital antes de producir, por ejemplo en los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable). Para otras piezas del evento, pregunta por WhatsApp cuántas rondas de ajustes incluye tu pedido.",
        ],
      },
      {
        heading: "Qué datos entregar antes de que llegue la prueba",
        body: [
          "Entrega todo en un solo mensaje: textos finales ya corregidos, nombres completos, fecha y hora del evento, cantidades, paleta de colores y la referencia de la invitación o la decoración. Si el diseño parte de información incompleta, la prueba se repite y puedes gastar las rondas de ajustes incluidas.",
          "Como referencia, Reverie Paper Co. empieza a contar el plazo de su prueba cuando recibe el texto final. Es la política de esa tienda, no un estándar del sector ni un plazo de Yume.",
        ],
      },
      {
        heading: "Qué revisar en la prueba antes de aprobarla",
        body: [
          "Revisa primero lo que no se puede corregir después: ortografía de los nombres, fechas, horarios, cantidades, medidas y ubicación del diseño en la pieza. Compara cada dato con la información final del cliente. Made & True, una tienda de letreros para bodas, pide revisar también el formato de las fechas.",
          "Forever Fiances, otra tienda, explica que después de la aprobación final no vuelve a revisar ortografía, puntuación ni contenido, porque la prueba aprobada se usa directamente para fabricar. Es su política, pero muestra por qué conviene revisar con calma.",
        ],
        table: {
          headers: ["Qué revisar", "Pregunta para confirmar"],
          rows: [
            ["Nombres", "¿Están escritos como los quiere el cliente?"],
            ["Fecha y horario", "¿Coinciden con la invitación final?"],
            ["Cantidades", "¿Es el número de piezas que pediste?"],
            ["Medidas y ubicación", "¿El diseño está donde debe y con el tamaño acordado?"],
            ["Colores", "¿Siguen la paleta del evento? Recuerda que la pantalla puede variar."],
          ],
        },
      },
      {
        heading: "Cómo reunir los comentarios de todos sin gastar rondas",
        body: [
          "Nombra a una sola persona que reciba los comentarios de la planner, el cliente, la familia o la empresa, y manda a tu proveedor un único mensaje con todos los cambios juntos. Así una ronda de ajustes cubre todas las opiniones. Reverie Paper Co. pide comentarios concisos justamente para no gastar rondas.",
          "Si trabajas por WhatsApp con Yume, reenvía la prueba al grupo de decisores, junta las respuestas y contesta una sola vez con una lista numerada, por ejemplo para unos [stickers con tu logo](/productos/stickers-logo-personalizado) del evento. Cuando todos estén de acuerdo, escribe un 'aprobado' claro.",
        ],
      },
      {
        heading: "Por qué el color en pantalla puede variar del impreso",
        body: [
          "La prueba digital se ve en una pantalla, y el color y el tamaño pueden verse distintos que en el impreso. Forever Fiances lo advierte y explica que el papel y el método de impresión, offset o digital, también afectan el color. Si el color es crítico, coméntalo antes de aprobar.",
          "Para que varias piezas del mismo evento combinen, Forever Fiances recomienda usar el mismo papel y pedir e imprimir todo al mismo tiempo. Consulta con Yume por WhatsApp qué conviene en tu caso: no prometemos que la pantalla muestre el color exacto del impreso.",
        ],
      },
      {
        heading: "Cómo calcular tu calendario hacia atrás desde la fecha del evento",
        body: [
          "Parte de la fecha del evento y resta, en este orden: el tiempo de envío, el de producción, el de la aprobación y el de diseño. El resultado es tu fecha límite para entregar los datos finales. Pregunta por WhatsApp los plazos de tu pedido y de tu ciudad antes de fijar fechas con el cliente.",
          "Como referencia de otras tiendas: Made & True pide enviar los detalles finales unas 4 semanas antes de la boda, y Reverie Paper Co. suma de 4 a 6 semanas de diseño si hay artwork personalizado. Son sus plazos, no los de Yume. Cuando tengas tu fecha límite, cotiza tus [stickers personalizados para eventos](/productos/stickers-vinil-impermeable) por WhatsApp.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    faq: [
      {
        q: "¿Cuánto tarda la prueba digital de los stickers de vinil?",
        a: "Normalmente llega en un máximo de 24 horas después de tu pago e incluye hasta 2 rondas de ajustes.",
      },
      {
        q: "¿La prueba siempre viene incluida en el pedido?",
        a: "Depende del proveedor. Made & True, por ejemplo, la incluye gratis en algunos letreros y la cobra aparte en otros. En Yume, confirma por WhatsApp qué incluye tu pedido.",
      },
      {
        q: "¿Las rondas extra se cobran?",
        a: "En las tiendas que consultamos, las rondas incluidas son pocas y las extra tienen costo, pero son políticas individuales de cada tienda. Pregunta por WhatsApp cómo funciona en tu pedido.",
      },
    ],
    sources: [
      { label: "Forever Fiances: proceso de aprobación", url: "https://foreverfiances.helpscoutdocs.com/article/36-what-is-the-approval-process" },
      { label: "Made & True: cómo pedir letreros personalizados para boda", url: "https://madeandtrue.com/blogs/news/how-to-order-custom-wedding-signage" },
      { label: "Reverie Paper Co.: preguntas frecuentes", url: "https://reverie-paper-co.squarespace.com/faqs" },
    ],
  },
  {
    slug: "cuando-pedir-souvenirs-de-boda",
    title: "Cuándo pedir souvenirs de boda: calendario por etapas",
    description:
      "Cuándo pedir souvenirs de boda: calendario por etapas desde la fecha del evento, qué decidir primero y qué hacer si tu boda es en menos de un mes.",
    category: "Guías",
    publishedAt: "2026-11-09",
    intro:
      "Los souvenirs de boda se piden antes de lo que parece. Este calendario va de la fecha de tu boda hacia atrás: qué decidir, cuándo y qué hacer si el tiempo ya es corto. Está pensado para novias y wedding planners que quieren que cada detalle llegue sin prisas.",
    sections: [
      {
        heading: "Cuándo pedir souvenirs de boda: el calendario de referencia",
        body: [
          "Como referencia, empieza a buscar ideas y pedir muestras unos 6 meses antes de la boda, haz el pedido entre 2 y 3 meses antes y llama al proveedor una semana antes para confirmar entrega y cantidades. Es el calendario que propone Easy Weddings. El plazo real depende del taller y de si la pieza es personalizada.",
          "Estas fechas son una referencia de una guía extranjera. Antes de fijar tu calendario, pregunta a tu proveedor cuánto tarda su pieza.",
        ],
        table: {
          headers: ["Etapa", "Cuándo (referencia)", "Qué haces"],
          rows: [
            ["Buscar y probar", "Unos 6 meses antes", "Ver ideas y pedir muestras"],
            ["Elegir y pedir", "2 a 3 meses antes", "Decidir la pieza y hacer el pedido"],
            ["Confirmar", "1 semana antes", "Llamar al proveedor para confirmar entrega y cantidades"],
          ],
        },
      },
      {
        heading: "Qué decidir primero y qué dejar para después",
        body: [
          "Fija primero la idea y el diseño de la pieza, y deja la cifra final de invitados para más tarde. Según Easy Weddings, es más fácil aumentar el número de recuerdos que reducirlo, así que conviene partir de una cantidad estimada y subirla si hace falta, en lugar de pedir de más desde el inicio.",
          "Easy Weddings también aconseja pedir unos extras, pensando en invitados que no asistan y en recuerdos para los novios. Si tu pieza lleva nombres, fechas o fotos, esa guía recomienda enviarlos y pedir una muestra para revisarla antes del pedido.",
        ],
      },
      {
        heading: "Piezas personalizadas y prueba digital: cuánto margen dejar",
        body: [
          "Una pieza personalizada pasa por una revisión del diseño antes de producirse. En Yume, los stickers de vinil llevan prueba digital antes de imprimir, con hasta 2 rondas de ajustes, y no se imprime nada sin tu aprobación. Por eso conviene dejar margen en tu calendario para esa revisión.",
          "Si tus souvenirs son stickers, mira los [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) o las [etiquetas con tu logo](/productos/stickers-logo-personalizado). Para saber cuánto tarda tu pieza concreta, escríbenos por WhatsApp con la fecha de tu boda. Si eres wedding planner, comparte con nosotros la fecha del evento y la pieza para que te digamos el plazo antes de comprometerlo con tu clienta.",
        ],
      },
      {
        heading: "¿Qué hago si mi boda es en menos de un mes?",
        body: [
          "Escríbenos por WhatsApp cuanto antes con la fecha de tu boda, la pieza que imaginas y la cantidad aproximada, y te decimos si llegamos a tiempo. Un plazo corto no siempre es imposible, pero depende de la pieza y del taller, por eso conviene confirmarlo antes de decidir.",
        ],
      },
      {
        heading: "Dónde recibirlos: en el lugar de la boda o en tu casa",
        body: [
          "Decide con tiempo si los souvenirs llegarán al lugar de la boda el día anterior o a tu casa. Easy Weddings plantea esta decisión para que puedas revisarlos antes del evento. Si trabajas con una wedding planner, pídele que coordine contigo la recepción del paquete.",
          "Mira el [catálogo de productos](/productos) y, si organizas varias bodas, escríbenos por WhatsApp con las fechas de cada una.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    faq: [
      {
        q: "¿Hacen prueba digital antes de imprimir?",
        a: "Sí, en los stickers de vinil la prueba digital llega normalmente en un máximo de 24 horas después de tu pago e incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Los plazos de esta guía son los de Yume?",
        a: "No. Son una referencia de Easy Weddings. El plazo de tu pieza depende del producto y del taller: pregúntanos por WhatsApp.",
      },
    ],
    sources: [
      { label: "Easy Weddings: When to order your bombonieres", url: "https://www.easyweddings.com.au/articles/when-to-order-your-bombonieres/" },
    ],
  },
  {
    slug: "presupuesto-recuerdos-de-boda-por-invitado",
    title: "Cuánto cuestan los recuerdos de boda por invitado",
    description:
      "Aprende a calcular cuánto cuestan los recuerdos de boda por invitado: fórmula, ejemplo y qué mueve el costo, sin inventar precios. Luego cotiza.",
    category: "Guías",
    publishedAt: "2026-11-09",
    intro:
      "Los recuerdos de boda no tienen un precio fijo, y casi ninguna guía explica cómo calcular el tuyo. Aquí tienes un método en pasos: fijar un tope por invitado, multiplicarlo por tus piezas y llevar un número claro a cotizar.",
    sections: [
      {
        heading: "¿Cuánto cuestan los recuerdos de boda por invitado en México?",
        body: [
          "No existe un precio único. Una guía de costos de bodas en México, Cronoshare, indica que el presupuesto para recuerdos puede ir desde los $50 MXN por invitado en adelante, sin dar tope ni promedio. Por eso conviene calcular tu propio tope según tu boda, no copiar una cifra ajena.",
          "Ese piso de $50 MXN viene de una guía general, no del precio de un detalle personalizado. Tampoco encontramos un promedio nacional confiable de gasto en recuerdos por invitado, así que lo más útil es un método de cálculo.",
        ],
      },
      {
        heading: "Paso 1: fija un tope con el gasto por invitado",
        body: [
          "Divide el costo total de tu boda entre tus invitados y obtendrás el gasto por invitado. Con la cifra de Cronoshare, unos $180,000 MXN para unos 100 invitados, salen cerca de $1,800 MXN por invitado, y un recuerdo de $50 sería alrededor del 3% de eso. Úsalo solo como referencia ilustrativa.",
          "La misma página da un rango total de $180,000 a $350,000 MXN, pero no dice para cuántos invitados es la cifra alta, así que esta división solo aplica a la cifra de 100 invitados.",
        ],
      },
      {
        heading: "Paso 2: cuenta piezas, no solo invitados",
        body: [
          "Multiplica tu tope por el número de piezas, no siempre por el número de invitados. Si entregas un recuerdo por pareja o por familia en lugar de uno por persona, la cantidad baja y puedes destinar más presupuesto a cada pieza. Define esto antes de pedir cotización.",
        ],
      },
      {
        heading: "Paso 3: suma lo que mueve el precio de cada pieza",
        body: [
          "El precio final de un recuerdo depende de varios factores, no solo del objeto: el material, el nivel de personalización, el empaque y el envío. Súmalos en una sola cifra por pieza antes de comparar opciones, para no descubrir costos extra cuando ya hayas elegido el diseño.",
          "Estas son las preguntas que conviene hacer a cada proveedor para comparar en igualdad de condiciones.",
        ],
        table: {
          headers: ["Concepto", "Qué preguntar"],
          rows: [
            ["Material", "¿Qué material es y cuánto cuesta por pieza?"],
            ["Personalización", "¿El nombre, la fecha o un diseño propio cambian el precio?"],
            ["Empaque", "¿Va incluido o se cobra aparte?"],
            ["Envío", "¿Se entrega en tu zona o se envía, y cuánto cuesta?"],
          ],
        },
      },
      {
        heading: "Detalle y diseño antes que el precio más bajo",
        body: [
          "Si buscas un recuerdo que se vea planeado, conviene comparar por detalle y diseño, no por el precio más bajo. Un recuerdo con el nombre de tus invitados o con el estilo de tu boda se siente pensado, y ese es el valor que pagas.",
          "En Yume trabajamos dulceros personalizados, que llegan armados y vacíos para que tú elijas qué lleva dentro, y [stickers de vinil personalizados](/productos/stickers-vinil-impermeable), con prueba digital antes de imprimir. Si te inclinas por dulceros, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero) y [dulceros personalizados](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Fórmula y ejemplo con cifras hipotéticas",
        body: [
          "La fórmula es: tope por pieza × número de piezas + empaque y envío = presupuesto total de recuerdos. Aquí tienes un ejemplo con cifras inventadas solo para practicar, no son precios reales ni de Yume. Cambia los números por los de tu boda y por las cotizaciones que recibas.",
          "Con una pieza por invitado, el mismo presupuesto da $60 MXN por pieza; con 70 piezas (parejas y familias comparten), da unos $85 MXN por pieza. Ese tope por pieza es el que llevas a cotizar.",
        ],
        table: {
          headers: ["Dato (cifras hipotéticas)", "Valor"],
          rows: [
            ["Gasto total por invitado", "$2,000 MXN"],
            ["Porcentaje para recuerdos", "3%"],
            ["Tope por invitado", "$60 MXN"],
            ["Invitados", "100"],
            ["Presupuesto para recuerdos", "$6,000 MXN"],
            ["Piezas (una por pareja o familia)", "70"],
            ["Tope por pieza", "unos $85 MXN"],
          ],
        },
      },
      {
        heading: "Cómo pedir una cotización de recuerdos de boda",
        body: [
          "Para cotizar bien, lleva tres datos: número de invitados o de piezas, fecha de tu boda y estilo que buscas. Con eso podemos orientarte sobre qué opción de nuestro catálogo cabe en tu tope por pieza. Escríbenos por WhatsApp y cotizamos tu caso.",
          "Si eres wedding planner, cotizamos por evento, con el número de piezas que necesite cada boda.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-personalizados-guadalajara", "que-poner-en-un-dulcero"],
    sources: [
      { label: "Cronoshare: cuánto cuesta una boda en México", url: "https://www.cronoshare.com.mx/cuanto-cuesta/boda-mexico" },
    ],
    faq: [
      {
        q: "¿Hay un promedio de gasto en recuerdos de boda en México?",
        a: "No encontramos un promedio nacional confiable. Cronoshare solo da un piso orientativo de $50 MXN por invitado en adelante, por eso conviene calcular tu propio tope.",
      },
      {
        q: "¿Qué porcentaje del presupuesto va a los recuerdos?",
        a: "No hay una norma. Con las cifras de Cronoshare, un recuerdo de $50 sería cerca del 3% de unos $1,800 MXN por invitado, y es solo una referencia ilustrativa.",
      },
      {
        q: "¿Cotizan por evento para wedding planners?",
        a: "Sí, cotizamos por evento, con el número de piezas que necesite cada boda. Escríbenos por WhatsApp.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
