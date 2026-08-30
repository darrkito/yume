export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO date
  intro: string;
  sections: BlogSection[];
  relatedProductSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "recetarios-medicos-personalizados-guadalajara",
    title: "Recetarios médicos personalizados en Guadalajara: guía para tu consultorio",
    description:
      "Qué datos incluir en el membrete, qué tamaño usar y cómo funciona el proceso para pedir recetarios médicos personalizados si tienes un consultorio en Guadalajara o cualquier parte de México.",
    category: "Guías",
    publishedAt: "2026-08-28",
    intro:
      "Si tienes un consultorio en Guadalajara, Zapopan o cualquier ciudad de Jalisco, el recetario que usas todos los días también es parte de la imagen de tu consultorio. Uno genérico, comprado en una papelería cualquiera, no comunica lo mismo que uno con tu membrete, tu cédula profesional y el diseño de tu consultorio. Esta guía cubre lo que necesitas saber antes de pedir uno personalizado.",
    sections: [
      {
        heading: "Qué datos lleva tu membrete",
        body: [
          "El membrete de un recetario médico normalmente incluye: nombre completo, especialidad, número de cédula profesional (y cédula de especialidad si aplica), y los datos de contacto del consultorio — dirección, teléfono y, si quieres, horario de consulta.",
          "Si compartes consultorio con otros especialistas o trabajas en más de una dirección, es común usar un membrete distinto por ubicación en vez de intentar meter toda la información en uno solo — se ve más limpio y evita confusiones para el paciente.",
        ],
      },
      {
        heading: "Tamaño y papel: qué es estándar en México",
        body: [
          "El tamaño más usado para recetarios médicos en México es 14 × 21.5 cm, en papel blanco — es el que ocupamos en Yume por default. Es un tamaño práctico: cabe en cualquier folder o expediente sin doblarse y es cómodo de escribir a mano.",
          "Si tu consultorio maneja recetas para trámites específicos (por ejemplo, con folio o código de barras para alguna institución), coméntalo al cotizar — es información que hay que confirmar antes de mandar a imprimir, no algo que se pueda improvisar después.",
        ],
      },
      {
        heading: "El proceso: de la cotización a tener el recetario en mano",
        body: [
          "El proceso no cambia si estás en Guadalajara o en cualquier otra ciudad de México, porque todo el diseño se aprueba a distancia antes de imprimir: cotizas por WhatsApp o desde la tienda en línea, mandas tus datos (o tu logo, si ya tienes uno), te enviamos una prueba digital del membrete, y hasta que la apruebas se manda a producción.",
          "Ese paso de aprobación es el que evita el error más común al personalizar papelería: mandar a imprimir sin haber visto el diseño final y encontrar una errata en la cédula profesional o en el teléfono ya con las 100 hojas impresas.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: "stickers-personalizados-para-negocios-guadalajara",
    title: "Stickers personalizados para tu negocio en Guadalajara: guía rápida",
    description:
      "Cómo usar stickers personalizados si tienes una marca, un emprendimiento o un puesto en bazares de Guadalajara — qué formato pedir y qué archivo enviar para tu logo.",
    category: "Guías",
    publishedAt: "2026-08-28",
    intro:
      "En Guadalajara hay un movimiento fuerte de emprendimientos pequeños — marcas de repostería, ropa, velas, joyería, café — que venden en bazares, mercados sobre ruedas o directo por redes sociales. Un sticker con tu logo es de las formas más baratas de que tu marca se vea consistente en cada pedido que sale, sin necesitar empaque especial.",
    sections: [
      {
        heading: "Para qué sirven realmente",
        body: [
          "Los usos más comunes que vemos: sellar bolsas o cajas de empaque, pegar en el fondo de productos (velas, jabones, frascos), cerrar sobres de envíos, o simplemente regalarlos sueltos como detalle en el pedido — funcionan como una tarjeta de presentación pequeña que además decora.",
          "Si vendes en bazares o mercados de Guadalajara, tener stickers con tu logo en cada bolsa de papel ayuda a que la gente te reconozca la próxima vez, sin gastar en empaque personalizado caro desde el arranque.",
        ],
      },
      {
        heading: "Qué cantidad pedir",
        body: [
          "Vendemos por cantidad de piezas, no por hoja: el mínimo de compra son 50 piezas por $100, y a partir de ahí cada 25 piezas extra tienen 20% de descuento — suficiente para ajustar el pedido al tamaño real de tu emprendimiento sin comprar de más.",
          "Todos nuestros stickers son resistentes al agua, así que aguantan bien en empaques que se pueden mojar o manejar seguido (bolsas, botellas, envíos). Cuéntanos la forma o el tamaño que prefieres al cotizar, y te mandamos una prueba digital antes de imprimir.",
        ],
      },
      {
        heading: "Qué archivo enviar de tu logo",
        body: [
          "Lo ideal es un PNG, PDF, AI o SVG con fondo transparente — así el sticker se ve limpio sin un cuadro blanco alrededor. Si solo tienes tu logo en JPG o una foto, también podemos trabajarlo, pero te avisamos si hace falta vectorizarlo o mejorar la calidad antes de imprimir.",
          "Si todavía no tienes un logo diseñado, dínoslo al cotizar — podemos apoyarte con algo simple basado en tu marca antes de llegar a producción.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado"],
  },
  {
    slug: "papeleria-personalizada-para-negocios-jalisco",
    title: "Papelería personalizada para negocios en Jalisco: por qué vale la pena",
    description:
      "Por qué invertir en papelería con tu marca — recetarios, stickers y otros detalles impresos — hace diferencia para negocios y profesionales en Guadalajara y el resto de Jalisco.",
    category: "Negocio local",
    publishedAt: "2026-08-28",
    intro:
      "Ya sea que tengas un consultorio médico o un emprendimiento que vende en bazares de Guadalajara, la papelería que usas todos los días — recetarios, stickers, etiquetas — es una de las formas más baratas de verse consistente. No es la parte más vistosa de un negocio, pero es la que el cliente o paciente tiene literalmente en la mano.",
    sections: [
      {
        heading: "Consistencia antes que cantidad",
        body: [
          "No hace falta rediseñar todo tu negocio para que se vea más profesional — a veces basta con que el recetario, la bolsa de entrega y el sticker que cierra el paquete usen el mismo logo y los mismos colores. Es más barato que un rebranding completo y el efecto se nota igual.",
          "Por eso en Yume trabajamos sobre pedido y a la medida en vez de vender plantillas genéricas: cada pieza se diseña con tus datos y tu marca real, no con un molde que también está usando otro negocio.",
        ],
      },
      {
        heading: "Producción en Guadalajara, envíos a todo México",
        body: [
          "Estamos en Guadalajara, Jalisco, y aunque no tenemos tienda física para visitar — todo el proceso se hace a distancia, con una prueba digital que apruebas antes de imprimir — sí producimos localmente y enviamos a cualquier parte de México.",
          "Si estás en la zona metropolitana de Guadalajara (Zapopan, Tlaquepaque, Tonalá) el tiempo de entrega suele ser más corto simplemente por cercanía, pero el proceso de cotización, diseño y aprobación es el mismo sin importar en qué ciudad de México estés.",
        ],
      },
      {
        heading: "Por dónde empezar",
        body: [
          "Si tienes un consultorio, el punto de entrada más común es el recetario médico personalizado. Si tienes una marca o emprendimiento, normalmente son los stickers con tu logo.",
          "Puedes cotizar directo por WhatsApp o ver el catálogo completo en la tienda — en ambos casos el siguiente paso es el mismo: mandarnos tus datos o tu logo para armar la prueba digital.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
