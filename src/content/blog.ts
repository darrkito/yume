export interface BlogSection {
  heading: string;
  body: string[];
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
  intro: string;
  sections: BlogSection[];
  relatedProductSlugs: string[];
  /** WhatsApp quote message shown as the post's CTA when it has no
   * `relatedProductSlugs` yet — e.g. a topic covering a service that isn't
   * a cataloged product yet (still quote-only, handled case by case). */
  quoteMessage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "recetarios-medicos-personalizados-guadalajara",
    title: "Recetarios médicos personalizados en Guadalajara: guía para tu consultorio",
    metaTitle: "Recetarios médicos personalizados en Guadalajara",
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
    metaTitle: "Stickers personalizados para tu negocio en Guadalajara",
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
    metaTitle: "Papelería personalizada para negocios en Jalisco",
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
  {
    slug: "como-pedir-papeleria-personalizada-en-linea",
    title: "Cómo hacer un pedido de papelería personalizada en línea",
    description:
      "El proceso completo para pedir papelería personalizada en línea desde cualquier parte de México: qué información preparar antes de cotizar, cómo funciona la prueba digital y qué esperar entre que apruebas el diseño y recibes tu pedido.",
    category: "Guías",
    publishedAt: "2026-08-31",
    intro:
      "No necesitas visitar una imprenta física para tener papelería con tu marca — todo el proceso en Yume se hace en línea, desde Guadalajara y con envíos a cualquier ciudad de México. Esta guía explica paso a paso cómo cotizar y pedir, para que sepas qué preparar antes de escribirnos.",
    sections: [
      {
        heading: "El proceso paso a paso",
        body: [
          "1) Cotizas por WhatsApp o desde la tienda en línea, indicando qué producto necesitas y la cantidad. 2) Nos mandas tus datos o tu logo/diseño, según el producto. 3) Te enviamos una prueba digital para que revises que todo esté correcto. 4) Apruebas el diseño y hasta ese momento se manda a producción. 5) Recibes tu pedido por paquetería a la dirección que nos des, en cualquier parte de México.",
          "El único paso presencial que existe es recibir el paquete — todo lo demás, incluida la aprobación del diseño, se hace a distancia por WhatsApp o correo.",
        ],
      },
      {
        heading: "Qué necesitas tener listo antes de cotizar",
        body: [
          "Para un recetario médico: tu nombre completo, especialidad, número de cédula profesional y los datos de contacto de tu consultorio. Para stickers con tu logo: el archivo de tu diseño (idealmente PNG, PDF, AI o SVG con fondo transparente) y la cantidad que quieres.",
          "Si todavía no tienes un logo o diseño terminado, dínoslo al cotizar de todas formas — se puede trabajar en conjunto antes de llegar a la prueba digital, no es necesario llegar con todo resuelto.",
        ],
      },
      {
        heading: "Por qué no hace falta una imprenta física en Guadalajara",
        body: [
          "Aunque producimos en Guadalajara, Jalisco, no operamos como una imprenta de mostrador — no necesitas ir a dejar un archivo en USB ni recoger tu pedido en persona. Todo el proceso, desde cotizar hasta aprobar el diseño final, pasa por WhatsApp o correo, así que el servicio funciona igual si estás en la ciudad o en cualquier otro estado de México.",
          "Eso sí: si estás en la zona metropolitana de Guadalajara el tiempo de entrega suele ser un poco más corto por cercanía, aunque el proceso de cotización y aprobación es idéntico para todo el país.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado"],
  },
  {
    slug: "recetario-medico-impreso-vs-digital",
    title: "Recetario médico impreso vs digital: ¿cuál conviene para tu consultorio?",
    metaTitle: "Recetario médico impreso vs. digital",
    description:
      "Ventajas y limitaciones del recetario médico impreso frente a la receta digital, y por qué muchos consultorios en México siguen usando ambos en vez de elegir uno solo.",
    category: "Guías",
    publishedAt: "2026-08-31",
    intro:
      "Cada vez hay más consultorios usando algún sistema de receta electrónica, pero el recetario impreso sigue siendo parte del día a día de la mayoría de los médicos en México. Antes de decidir si vale la pena seguir imprimiendo o migrar por completo a digital, conviene ver qué resuelve cada opción y dónde falla.",
    sections: [
      {
        heading: "Qué resuelve cada opción",
        body: [
          "La receta digital (desde una app, un sistema del consultorio o una plataforma de expediente electrónico) tiene ventajas claras: se puede reenviar por correo o WhatsApp al paciente, queda respaldada automáticamente y es más fácil de buscar en un historial. El recetario impreso, en cambio, no depende de que haya internet, batería o que el sistema esté funcionando en ese momento — el paciente sale de la consulta con el papel en la mano, sin depender de nada más.",
          "Para muchos pacientes, sobre todo de mayor edad o que van a llevar la receta directo a una farmacia física, el papel impreso sigue siendo lo que esperan recibir al final de la consulta.",
        ],
      },
      {
        heading: "Cuándo conviene seguir imprimiendo",
        body: [
          "Si tu consultorio no tiene (o no quiere depender de) un sistema digital instalado, el recetario impreso sigue siendo la opción más simple y sin fricción: no hay que aprender una plataforma nueva, no hay riesgo de que un corte de internet detenga la consulta, y el paciente se va con algo físico sin pasos extra.",
          "También es común usarlo como respaldo aunque tu consultorio ya tenga un sistema digital — para el día que el sistema falla, no hay señal, o simplemente prefieres no depender de una pantalla frente al paciente.",
        ],
      },
      {
        heading: "No es una decisión de todo o nada",
        body: [
          "La mayoría de los consultorios que vemos en Guadalajara y el resto de México no eligen uno solo — usan digital para el expediente y el seguimiento, e impreso para lo que el paciente se lleva ese mismo día. Tener un recetario impreso con tu membrete, tu cédula y los datos de tu consultorio no compite con tu sistema digital, lo complementa.",
          "Si decides pedir uno personalizado, el proceso es el mismo sin importar si es tu único recetario o un respaldo: cotizas, mandas tus datos, apruebas una prueba digital del membrete y se manda a producción.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: "tatuajes-temporales-personalizados-para-eventos",
    title: "Tatuajes temporales personalizados para eventos y marcas",
    description:
      "Para qué se usan los tatuajes temporales personalizados en eventos, activaciones de marca y celebraciones, y qué información necesitamos para cotizar los tuyos con tu diseño o logo.",
    category: "Guías",
    publishedAt: "2026-08-31",
    intro:
      "Un tatuaje temporal con tu logo o un diseño hecho para la ocasión es una forma efectiva y económica de dejar marca en un evento — literalmente. Funcionan tanto para activaciones de negocio como para celebraciones personales, y el proceso para pedirlos personalizados es tan sencillo como el de cualquier otro producto a la medida en Yume.",
    sections: [
      {
        heading: "Para qué se usan realmente",
        body: [
          "Los vemos más seguido en tres contextos: activaciones de marca (ferias, lanzamientos, stands en eventos, regalos promocionales), bodas y XV años (con las iniciales, la fecha o un ícono relacionado al festejo), y eventos deportivos o escolares (con el logo del equipo o la institución).",
          "A diferencia de un sticker, un tatuaje temporal se lo lleva la persona puesto — funciona como una pieza de merchandising que la gente usa y muestra durante el resto del evento, no solo algo que se queda en una bolsa.",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar el tuyo",
        body: [
          "Tu logo o el diseño que quieres convertir en tatuaje (idealmente en un archivo con buena resolución), el tamaño aproximado que buscas, y la cantidad que necesitas para tu evento. Si el diseño tiene texto (nombre, fecha, frase), dínoslo también para confirmar que se vea legible en el tamaño final.",
          "Como con cualquier producto personalizado, antes de producir te mandamos una prueba digital del diseño para que la apruebes — así confirmas cómo se va a ver antes de que se imprima la cantidad completa.",
        ],
      },
      {
        heading: "Por qué personalizarlos en vez de comprar genéricos",
        body: [
          "Un tatuaje temporal genérico (una carita, una estrella, un diseño de catálogo) no comunica nada sobre tu marca o tu evento — se ve igual que el de cualquier otra fiesta o feria. Uno con tu logo, tus colores o el nombre del festejo hace que quien se lo pone quede asociado directamente con tu marca o tu evento el resto del día, que es justo el punto de usarlo.",
          "Si tienes un evento o una activación en puerta y quieres cotizar tatuajes temporales con tu diseño, escríbenos directo por WhatsApp con los detalles.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hola, me interesa cotizar tatuajes temporales personalizados.",
  },
  {
    slug: "como-pedir-invitaciones-personalizadas-para-eventos",
    title: "Cómo pedir invitaciones personalizadas para eventos",
    description:
      "Qué información necesitas tener lista para cotizar invitaciones personalizadas para boda, XV años o un evento corporativo, y cómo funciona el proceso de diseño y aprobación antes de imprimir.",
    category: "Guías",
    publishedAt: "2026-08-31",
    intro:
      "Ya sea una boda, unos XV años, un baby shower o un evento corporativo, la invitación suele ser lo primero que tus invitados ven del evento — vale la pena que se vea a la altura de lo que estás organizando. Así funciona el proceso para pedir las tuyas personalizadas en Yume.",
    sections: [
      {
        heading: "Qué información necesitamos",
        body: [
          "Para cotizar, necesitamos: el tipo de evento y la fecha, la cantidad de invitaciones que necesitas, el texto que quieres incluir (nombres, fecha, lugar, horario, y cualquier indicación como código de vestimenta), y si tienes una idea de estilo o referencia visual en mente.",
          "También necesitamos saber si buscas invitación impresa, digital (para compartir por WhatsApp) o ambas — el proceso de diseño es el mismo, solo cambia el formato final.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "Con tus datos armamos una propuesta de diseño y te la mandamos como prueba digital. Puedes pedir ajustes antes de aprobarla — es más fácil corregir un color o un texto en esta etapa que después de que las invitaciones ya están impresas.",
          "Una vez que apruebas el diseño final, se manda a producción (si pediste impresas) o te entregamos el archivo final listo para enviar (si son digitales o ambas).",
        ],
      },
      {
        heading: "Cuándo empezar a cotizar",
        body: [
          "Como con cualquier pieza impresa, conviene cotizar con tiempo de anticipación al evento — así hay margen para ajustar el diseño sin apurar la producción ni el envío. Si tu evento ya tiene fecha, puedes escribirnos desde ahora aunque todavía no tengas todos los detalles definidos.",
          "Cuéntanos el tipo de evento, la fecha aproximada y la cantidad que estimas necesitar, y armamos la cotización desde ahí.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hola, me interesa cotizar invitaciones personalizadas para un evento.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
