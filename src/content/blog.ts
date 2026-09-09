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
    title: "Etiquetas personalizadas para tu negocio en Guadalajara: guía rápida",
    metaTitle: "Etiquetas personalizadas para tu negocio en Guadalajara",
    description:
      "Cómo usar etiquetas personalizadas si tienes una marca, un emprendimiento o un puesto en bazares de Guadalajara — qué formato pedir y qué archivo enviar para tu logo.",
    category: "Guías",
    publishedAt: "2026-08-28",
    intro:
      "En Guadalajara hay un movimiento fuerte de emprendimientos pequeños — marcas de repostería, ropa, velas, joyería, café — que venden en bazares, mercados sobre ruedas o directo por redes sociales. Una etiqueta con tu logo es de las formas más baratas de que tu marca se vea consistente en cada pedido que sale, sin necesitar empaque especial.",
    sections: [
      {
        heading: "Para qué sirven realmente",
        body: [
          "Los usos más comunes que vemos: sellar bolsas o cajas de empaque, pegar en el fondo de productos (velas, jabones, frascos), cerrar sobres de envíos, o simplemente regalarlas sueltas como detalle en el pedido — funcionan como una tarjeta de presentación pequeña que además decora.",
          "Si vendes en bazares o mercados de Guadalajara, tener etiquetas con tu logo en cada bolsa de papel ayuda a que la gente te reconozca la próxima vez, sin gastar en empaque personalizado caro desde el arranque.",
        ],
      },
      {
        heading: "Qué cantidad pedir",
        body: [
          "Vendemos por cantidad de piezas, no por hoja: el mínimo de compra son 50 piezas por $100, y a partir de ahí cada 25 piezas extra tienen 20% de descuento — suficiente para ajustar el pedido al tamaño real de tu emprendimiento sin comprar de más.",
          "Todas nuestras etiquetas son resistentes al agua, así que aguantan bien en empaques que se pueden mojar o manejar seguido (bolsas, botellas, envíos). Cuéntanos la forma o el tamaño que prefieres al cotizar, y te mandamos una prueba digital antes de imprimir.",
        ],
      },
      {
        heading: "Qué archivo enviar de tu logo",
        body: [
          "Lo ideal es un PNG, PDF, AI o SVG con fondo transparente — así la etiqueta se ve limpia sin un cuadro blanco alrededor. Si solo tienes tu logo en JPG o una foto, también podemos trabajarlo, pero te avisamos si hace falta vectorizarlo o mejorar la calidad antes de imprimir.",
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
      "Por qué invertir en papelería con tu marca — recetarios, etiquetas y otros detalles impresos — hace diferencia para negocios y profesionales en Guadalajara y el resto de Jalisco.",
    category: "Negocio local",
    publishedAt: "2026-08-28",
    intro:
      "Ya sea que tengas un consultorio médico o un emprendimiento que vende en bazares de Guadalajara, la papelería que usas todos los días — recetarios, etiquetas — es una de las formas más baratas de verse consistente. No es la parte más vistosa de un negocio, pero es la que el cliente o paciente tiene literalmente en la mano.",
    sections: [
      {
        heading: "Consistencia antes que cantidad",
        body: [
          "No hace falta rediseñar todo tu negocio para que se vea más profesional — a veces basta con que el recetario, la bolsa de entrega y la etiqueta que cierra el paquete usen el mismo logo y los mismos colores. Es más barato que un rebranding completo y el efecto se nota igual.",
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
          "Si tienes un consultorio, el punto de entrada más común es el recetario médico personalizado. Si tienes una marca o emprendimiento, normalmente son las etiquetas con tu logo.",
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
          "Para un recetario médico: tu nombre completo, especialidad, número de cédula profesional y los datos de contacto de tu consultorio. Para etiquetas con tu logo: el archivo de tu diseño (idealmente PNG, PDF, AI o SVG con fondo transparente) y la cantidad que quieres.",
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
          "A diferencia de una etiqueta, un tatuaje temporal se lo lleva la persona puesto — funciona como una pieza de merchandising que la gente usa y muestra durante el resto del evento, no solo algo que se queda en una bolsa.",
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
  {
    slug: "stickers-personalizados-para-mascotas",
    title: "Stickers personalizados para mascotas: el sticker de tu perro o gato",
    metaTitle: "Stickers personalizados para mascotas",
    description:
      "Cómo pedir un sticker troquelado con la foto de tu perro o gato: qué imagen enviar, cómo se ve el resultado final y cuánto cuesta en Yume.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Una de las peticiones que más vemos en Stickers Vinil Impermeable no es un logo ni un personaje de caricatura — es la foto de una mascota. Convertir a tu perro o gato en un sticker troquelado con su silueta es de los pedidos más comunes y más sencillos de cotizar. Así funciona el proceso.",
    sections: [
      {
        heading: "Qué foto enviar",
        body: [
          "No necesitas una foto profesional — basta con que la mascota se vea completa, con buena luz y sin que otra cosa le tape el cuerpo. Entre mejor definido el contorno, más limpio sale el corte troquelado alrededor de la silueta.",
          "Si tienes varias fotos de la misma mascota, mándanoslas todas al cotizar — a veces una funciona mejor que otra para el recorte, y así elegimos juntos la mejor antes de armar la prueba digital.",
        ],
      },
      {
        heading: "Cómo se ve el resultado",
        body: [
          "El sticker se corta a la forma exacta de la silueta de tu mascota (o de la foto completa, si prefieres mantener un fondo o marco), no en un cuadrado o círculo genérico — por eso hablamos de vinil troquelado. Puedes ver ejemplos reales de mascotas ya convertidas en sticker en nuestra galería.",
          "Antes de imprimir te mandamos una prueba digital del resultado final, para que confirmes que el corte y los colores quedaron como esperabas — igual que con cualquier otro diseño que trabajamos.",
        ],
      },
      {
        heading: "Cantidad y precio",
        body: [
          "Los stickers de vinil se venden por cantidad de piezas, no por planilla: el mínimo son 40 piezas por $100, y cada 10 piezas extra tienen 20% de descuento — 50 piezas quedan en $120, 60 en $140.",
          "Es el mismo vinil premium resistente al agua, al sol y a rayones que usamos para cualquier otro diseño personalizado, así que aguanta bien en botellas de agua, laptops o donde quieras pegarlo.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
  },
  {
    slug: "recetario-medico-con-diseno-vs-sin-diseno",
    title: "Recetario médico con diseño vs. sin diseño: ¿cuál te conviene?",
    metaTitle: "Recetario médico con diseño vs. sin diseño",
    description:
      "La diferencia real entre pedir tu recetario médico personalizado con logo y diseño incluido o solo con impresión, sus precios y cuándo conviene cada opción.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Al cotizar el recetario médico personalizado en Yume vas a ver dos opciones con precio distinto: \"sin diseño\" y \"con diseño\". No es solo una diferencia de precio — es una diferencia real en el trabajo que hacemos por ti. Aquí te explicamos qué incluye cada una para que elijas la que te conviene.",
    sections: [
      {
        heading: "Qué incluye cada opción",
        body: [
          "\"Sin diseño\" ($320) es para cuando ya tienes el membrete armado — un archivo editable con tu logo, tus datos y el layout que quieres — y solo necesitas que lo imprimamos en las 100 hojas Media Carta con papel Bond 90 gr.",
          "\"Con diseño\" ($400) incluye que diseñemos el membrete contigo desde cero: nos das tus datos (nombre, cédula profesional, especialidad, dirección del consultorio) y armamos una propuesta visual, que ajustamos contigo hasta que quede como quieres, antes de imprimir.",
        ],
      },
      {
        heading: "Cuándo conviene cada una",
        body: [
          "Si ya trabajaste tu membrete con un diseñador o lo tienes de una imprenta anterior en formato editable, \"sin diseño\" es la opción más rápida y barata — nosotros solo producimos lo que ya tienes resuelto.",
          "Si es tu primer recetario personalizado, si el que tenías se ve anticuado, o simplemente no tienes el archivo editable a la mano, \"con diseño\" te ahorra tener que resolver esa parte por tu cuenta o contratar a alguien más antes de poder imprimir.",
        ],
      },
      {
        heading: "El proceso es el mismo en ambos casos",
        body: [
          "Elijas la opción que elijas, el paso de aprobación es igual: antes de mandar a producción te enviamos una prueba digital del membrete final, así confirmas que la cédula, el teléfono y el resto de tus datos estén correctos.",
          "Puedes cambiar de opción durante la cotización si al ver el proceso decides que prefieres que lo diseñemos nosotros — solo dínoslo por WhatsApp antes de aprobar la prueba digital.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: "datos-obligatorios-receta-medica-mexico",
    title: "Qué debe llevar una receta médica en México: guía general",
    metaTitle: "Qué debe llevar una receta médica en México",
    description:
      "Los requisitos y datos que normalmente debe incluir una receta médica en México — de tu membrete, del paciente y del medicamento — y por qué conviene tenerlos preimpresos en tu recetario.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Si estás por pedir tu primer recetario personalizado, es normal preguntarte qué datos debe llevar exactamente. Esta es información general basada en lo que se acostumbra en consultorios de México — no sustituye lo que tu colegio de médicos, tu estado o la institución donde trabajas exija de forma específica, así que siempre vale la pena confirmarlo con ellos antes de mandar a imprimir.",
    sections: [
      {
        heading: "Datos de tu membrete",
        body: [
          "En la parte de arriba de la receta normalmente va: tu nombre completo, especialidad, número de cédula profesional (y cédula de especialidad si aplica), y los datos de contacto de tu consultorio — dirección, teléfono y, si quieres, horario de consulta.",
          "Estos son justo los datos que van preimpresos en el membrete cuando pides un recetario personalizado — así no tienes que escribirlos a mano en cada receta, solo lo que cambia con cada paciente.",
        ],
      },
      {
        heading: "Datos que se llenan por paciente",
        body: [
          "En el cuerpo de la receta se agrega, ya con cada paciente: su nombre completo, la fecha de la consulta, el diagnóstico o motivo (si tu forma de trabajar lo incluye), el medicamento indicado con dosis y duración del tratamiento, y tu firma.",
          "Algunos consultorios agregan también la edad o el peso del paciente cuando es relevante para la dosis, sobre todo en consultorios pediátricos.",
        ],
      },
      {
        heading: "Por qué conviene preimprimir lo fijo",
        body: [
          "Cada vez que escribes a mano tu cédula profesional o el teléfono del consultorio hay una oportunidad de error o de que el dato salga ilegible — algo que puede causar problemas si el paciente lleva la receta a una farmacia que valida esos datos.",
          "Tener el membrete preimpreso resuelve eso de una vez: apruebas el diseño una sola vez y, desde ahí, cada receta que llenas a mano ya trae tus datos fijos correctos y legibles.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
  {
    slug: "yume-vs-imprentas-online-stickers",
    title: "Yume vs. otras imprentas online de stickers: comparación real de precios",
    metaTitle: "Yume vs. otras imprentas de stickers",
    description:
      "Comparamos el precio por pieza y el mínimo de compra de Yume contra imprentas mexicanas reales de stickers personalizados — con datos reales de precios públicos.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Antes de cotizar tus stickers vale la pena saber si el precio que te están dando es competitivo. En septiembre de 2026 revisamos los precios públicos de varias imprentas mexicanas de stickers personalizados — aquí están los números reales, comparados contra los de Yume.",
    sections: [
      {
        heading: "Cómo comparamos",
        body: [
          "Tomamos el precio público que cada imprenta muestra en su sitio para stickers personalizados y lo convertimos a precio por pieza, además de anotar el mínimo de compra en pesos — así la comparación es justa entre negocios que venden por planilla, por rollo o por cantidad de piezas.",
          "Todos los precios son los publicados directamente en el sitio de cada competidor a esa fecha; no son estimaciones.",
        ],
      },
      {
        heading: "Los números",
        body: [
          "Entre las imprentas mexicanas de stickers personalizados que revisamos, el precio por pieza va de $1.83 a $11.00 MXN, con mínimos de compra que van de $319 a $550 MXN — en algunos casos el mínimo real solo se alcanza comprando varias planillas completas de una vez.",
          "Yume — Etiquetas Logo Personalizado: de $2.00 a $1.80 por pieza, mínimo $100 (50 piezas). Yume — Stickers Vinil Impermeable: de $2.50 a $2.20 por pieza, mínimo $100 (40 piezas).",
        ],
      },
      {
        heading: "Qué significa esto para ti",
        body: [
          "En precio por pieza, Yume está entre los más bajos del mercado que revisamos — solo una de las opciones revisadas se acerca, y únicamente si compras el equivalente a 2 planillas completas de una vez.",
          "La diferencia más clara está en el mínimo de compra: con Yume puedes entrar desde $100 MXN, mientras que la competencia revisada pide entre $319 y $550 mínimo — así que si solo quieres probar con poca cantidad, Yume te deja hacerlo sin comprometerte a un pedido grande.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
  },
  {
    slug: "stickers-vinil-vs-papel-diferencias",
    title: "Vinil vs. papel: por qué tus stickers deberían ser de vinil",
    metaTitle: "Stickers de vinil vs. de papel",
    description:
      "La diferencia real entre un sticker de vinil y uno de papel — resistencia al agua, al sol y a rayones — y por qué en Yume solo trabajamos vinil premium.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Si nunca has pedido stickers personalizados, es fácil no notar la diferencia entre vinil y papel hasta que uno se moja, se despinta con el sol o se rompe al despegarlo. Aquí te explicamos la diferencia real y por qué en Yume trabajamos exclusivamente con vinil.",
    sections: [
      {
        heading: "La diferencia no es solo el material",
        body: [
          "Un sticker de papel común se puede mojar, decolorar con el sol y rasgar fácilmente al despegarlo o al rozar con algo — funciona bien para uso interior, de corta duración, o donde no le va a dar el clima.",
          "El vinil, en cambio, es un material plástico flexible que resiste el agua, el sol y los rayones — aguanta bien en botellas que se lavan, laptops que viajan contigo, patinetas o cualquier superficie que se moja o se expone al exterior.",
        ],
      },
      {
        heading: "En qué casos se nota más la diferencia",
        body: [
          "Si el sticker va en algo que se moja seguido (una botella de agua, un empaque que se refrigera), que sale al sol (un carro, una ventana) o que se manipula mucho (una laptop, una maleta), el vinil es la opción que realmente dura sin decolorarse ni despegarse.",
          "Para algo que se usa una sola vez y en interior — como un detalle dentro de una caja de regalo que no va a tocar agua ni sol — la diferencia se nota menos, pero incluso ahí el vinil se ve y se siente más premium al tacto.",
        ],
      },
      {
        heading: "Por qué en Yume trabajamos solo vinil",
        body: [
          "Nuestros dos productos de sticker — Etiquetas Logo Personalizado y Stickers Vinil Impermeable — están hechos en vinil premium con corte troquelado, no en papel. Preferimos ofrecer un solo material que sabemos que aguanta, en vez de una opción más barata que se ve bien al inicio pero se deteriora rápido.",
          "Así, sin importar si el sticker va en el empaque de tu marca, en tu laptop o en el paquete que le envías a un cliente, sabes que va a llegar y va a durar en las mismas condiciones.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
  },
  {
    slug: "menu-de-boda-personalizado",
    title: "Menú de boda personalizado: cómo pedir el tuyo",
    metaTitle: "Menú de boda personalizado",
    description:
      "Qué información necesitas tener lista para cotizar el menú de tu boda con diseño personalizado, y cómo funciona el proceso de diseño y aprobación antes de imprimir.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "El menú es una de esas piezas de la boda que los invitados tienen en la mano toda la cena — vale la pena que combine con el resto de la papelería del evento, en vez de ser genérico. Así funciona el proceso para pedir el tuyo personalizado en Yume.",
    sections: [
      {
        heading: "Qué información necesitamos",
        body: [
          "Para cotizar, necesitamos: la cantidad de menús (normalmente uno por invitado o por mesa, según cómo lo quieras montar), el texto exacto que va en cada uno (los platillos, en el orden que se sirven), y si tienes una idea de estilo o referencia visual — sobre todo si quieres que combine con las invitaciones u otra papelería que ya estés pidiendo para el mismo evento.",
          "También ayuda saber la fecha de la boda y si el menú va a ir solo (una tarjeta por lugar) o junto con otros elementos como el nombre del invitado o la mesa asignada.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "Con tus datos armamos una propuesta de diseño y te la mandamos como prueba digital. Puedes pedir ajustes antes de aprobarla — es más fácil corregir el orden de los platillos o un color en esta etapa que después de que los menús ya están impresos.",
          "Una vez que apruebas el diseño final, se manda a producción. Si además estás pidiendo invitaciones u otra papelería para la misma boda, se puede coordinar todo bajo la misma línea de diseño para que se vea como un solo set, no piezas sueltas.",
        ],
      },
      {
        heading: "Cuándo empezar a cotizar",
        body: [
          "Como el menú normalmente se confirma cuando ya tienes el banquete cerrado, suele cotizarse un poco después que las invitaciones — pero igual conviene hacerlo con tiempo, para que haya margen de ajustar el diseño sin apurar la producción ni el envío.",
          "Escríbenos con el tipo de evento, la fecha aproximada y la cantidad que estimas necesitar, y armamos la cotización desde ahí.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hola, me interesa cotizar menús de boda personalizados.",
  },
  {
    slug: "tarjetas-de-presentacion-consultorio",
    title: "Tarjetas de presentación para tu consultorio: cómo pedirlas junto con tu recetario",
    metaTitle: "Tarjetas de presentación para tu consultorio",
    description:
      "Qué información necesitas tener lista para cotizar tarjetas de presentación para tu consultorio médico, y por qué conviene pedirlas junto con tu recetario personalizado.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Si ya pediste tu recetario médico personalizado, es común querer una tarjeta de presentación con el mismo diseño — es lo primero que el paciente se lleva de la consulta, junto con la receta. Así funciona el proceso para cotizar la tuya en Yume.",
    sections: [
      {
        heading: "Qué información necesitamos",
        body: [
          "Los mismos datos que usa tu recetario: nombre completo, especialidad, número de cédula profesional (y de especialidad, si aplica), y los datos de contacto de tu consultorio — dirección, teléfono, y si quieres, redes sociales o correo. También la cantidad de tarjetas que necesitas.",
          "Si ya tienes tu membrete o logo de una pieza anterior (como el recetario), dínoslo al cotizar — podemos usar el mismo diseño en la tarjeta para que ambas piezas se vean consistentes, en vez de armar algo nuevo desde cero.",
        ],
      },
      {
        heading: "El proceso de diseño y aprobación",
        body: [
          "Con tus datos armamos una propuesta de diseño y te mandamos una prueba digital antes de imprimir. Puedes pedir ajustes — es más fácil corregir la cédula profesional o el teléfono en esta etapa que después de tener las tarjetas impresas.",
          "Una vez que apruebas el diseño final, se manda a producción. El proceso es el mismo si pides la tarjeta sola o junto con tu recetario en la misma cotización.",
        ],
      },
      {
        heading: "Por qué pedirlas junto con tu recetario",
        body: [
          "Tener la tarjeta y el recetario con el mismo membrete — misma tipografía, mismos colores, mismos datos — hace que tu consultorio se vea más consistente sin que tengas que rediseñar nada por separado. Es la misma lógica de imagen profesional que ya aplica al resto de tu papelería.",
          "Si todavía no tienes tu recetario personalizado, puedes cotizar ambos juntos desde cero y armamos un solo diseño de membrete que funcione para las dos piezas.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hola, me interesa cotizar tarjetas de presentación para mi consultorio.",
  },
  {
    slug: "yume-vs-imprentas-recetarios-medicos",
    title: "Yume vs. otras imprentas de recetarios médicos: comparación real de precios",
    metaTitle: "Yume vs. otras imprentas de recetarios médicos",
    description:
      "Comparamos el precio y lo que incluye el recetario médico personalizado de Yume contra imprentas mexicanas reales — con datos reales de precios públicos.",
    category: "Guías",
    publishedAt: "2026-09-09",
    intro:
      "Antes de cotizar tu recetario médico personalizado vale la pena saber si el precio que te están dando es competitivo — y sobre todo, qué incluye. En septiembre de 2026 revisamos los precios públicos de varias imprentas mexicanas de recetarios médicos — aquí están los números reales, comparados contra los de Yume.",
    sections: [
      {
        heading: "Cómo comparamos",
        body: [
          "Tomamos el precio público que cada imprenta muestra en su sitio para recetarios médicos personalizados de 100 hojas tamaño Media Carta, y anotamos si el precio incluye o no el servicio de diseño del membrete — no solo el precio de impresión.",
          "Todos los precios son los publicados directamente en el sitio de cada competidor a esa fecha; no son estimaciones.",
        ],
      },
      {
        heading: "Los números",
        body: [
          "Entre las imprentas mexicanas de recetarios médicos que revisamos, los precios van de $300 a $900 MXN por partida (de 100 hojas a un bloque completo), en papel Bond u Opalina — y ninguna de las opciones revisadas aclara o incluye el servicio de diseño del membrete como parte del precio; en algunos casos ni siquiera lo menciona.",
          "Yume: $320 MXN sin diseño (si ya tienes tu membrete listo) o $400 MXN con diseño incluido (lo armamos contigo desde cero), en papel Bond 90 gr, con prueba digital aprobada antes de imprimir.",
        ],
      },
      {
        heading: "Qué significa esto para ti",
        body: [
          "En precio base, Yume está entre las opciones más económicas del mercado que revisamos — pero ninguna de las demás ofrece servicio de diseño como parte del precio. No encontramos ninguna imprenta que anuncie \"diseñamos tu membrete contigo\" incluido en el costo, que es justo lo que cubre el tier de $400 de Yume.",
          "Si ya tienes tu membrete resuelto, el precio de Yume ya es de los más bajos del mercado que revisamos. Si no lo tienes, el tier con diseño te ahorra tener que resolverlo por tu cuenta antes de poder imprimir — algo que ninguno de los competidores revisados incluye en su precio público.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
