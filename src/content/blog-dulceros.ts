import type { BlogPost } from "@/content/blog";
import { getProduct, tieredPrice } from "@/content/products";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";

// Dulceros (party favor boxes) cluster, one post per real Google Trends query
// group from the 2026-10 research (MX, 12 months): "dulceros" is the head
// term (~10x "cajas sorpresa"); top related: navideños, para niños/niña,
// dulces para dulceros, ideas de dulceros, para cumpleaños/fiesta, día del
// niño, bautizo, halloween, cajas/bolsas/vasos dulceros; rising: día del
// niño, graduación, fiesta infantil. Character names are deliberately left
// out of titles and copy (trademarks): themes are described generically.
// Facts only from content/products.ts and content/shipping.ts: $75 c/u,
// mínimo 10, 15.7 × 11.7 × 9.9 cm, cartulina opalina, nombre + temática,
// llegan armados, prueba digital, 3-5 días de producción.
const PUBLISHED = "2026-10-06";
const DULCERO = "dulceros-personalizados";
// Local price helper (blog.ts imports this file, so it can't import priceOf back).
const dulceroTotal = (qty: number) => tieredPrice(getProduct(DULCERO)!.tiers!, qty).toLocaleString("en-US");
const dulceroUnit = tieredPrice(getProduct(DULCERO)!.tiers!, 10) / 10;

export const dulceroPosts: BlogPost[] = [
  {
    slug: "dulceros-personalizados-guadalajara",
    title: "Dulceros personalizados en Guadalajara: precios, medidas y cómo pedirlos",
    metaTitle: "Precio de dulceros personalizados y medidas",
    description: "Cuánto cuestan los dulceros personalizados tipo lunch box ($75 por pieza, mínimo 10), qué medidas tienen y qué incluye la personalización. Envío a todo México.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-17",
    intro:
      "Un dulcero personalizado es la cajita que se lleva cada invitado al terminar la fiesta: con el nombre del festejado y la temática del evento, deja de ser una bolsa genérica y se vuelve parte de la decoración. En Yume los hacemos tipo lunch box, con asa, desde Guadalajara y con envío a todo México. Esta guía reúne todo lo que necesitas saber antes de pedirlos: precio, medidas, material, tiempos y cómo funciona el diseño.",
    sections: [
      {
        heading: "Cuánto cuestan los dulceros personalizados",
        body: [
          "Cada dulcero cuesta $75 MXN y el pedido mínimo es de 10 piezas, así que puedes pedir la cantidad exacta de invitados: 10 dulceros son $750, 12 son $900, 20 son $1,500 y 30 son $2,250. No hay paquetes cerrados de 50 o 100 piezas.",
          "A partir de $750 de compra el envío nacional es gratis, y eso son justo 10 dulceros. Si estás en la zona metropolitana de Guadalajara, también puedes recogerlos por $20 en cualquiera de las 11 sucursales de paquetería Casa Blanca.",
        ],
      },
      {
        heading: "Medidas y material",
        body: [
          "El dulcero mide 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 pulgadas), con asa para cargarlo. Es un tamaño cómodo para niños y adultos: cabe una buena porción de dulces, un juguete pequeño o un detalle, sin que la caja se sienta vacía.",
          "Está hecho de cartulina opalina, una cartulina lisa y firme que da buen acabado a la impresión y aguanta el peso de los dulces. Te llega armado, listo para llenar: no tienes que doblar ni pegar nada la noche antes de la fiesta.",
        ],
      },
      {
        heading: "Qué incluye la personalización",
        body: [
          "Cada dulcero lleva el nombre que nos indiques (el del festejado, los novios, el bebé o tu empresa) y la temática que elijas: el personaje favorito del niño, una paleta de colores, un deporte, un estilo navideño o el logo de tu marca para un evento corporativo.",
          "Antes de producir te mandamos una prueba digital del diseño por WhatsApp o correo. Puedes pedir ajustes en esa etapa, y nada se produce hasta que lo apruebas.",
        ],
      },
      {
        heading: "Tiempos de entrega y cómo pedirlos",
        body: [
          "La producción toma de 3 a 5 días hábiles después de aprobar la prueba. Si los recibes por paquetería, suma de 2 a 5 días; si los recoges en una sucursal Casa Blanca de Guadalajara, suma 1 día hábil. Para no ir con prisas, pídelos al menos dos semanas antes de tu fiesta, y con más anticipación en temporadas fuertes como Navidad o fin de cursos.",
          "Puedes pedirlos desde la tienda en línea eligiendo la cantidad y pagando con tarjeta, OXXO o SPEI, o cotizar primero por WhatsApp si quieres platicar la temática antes de pagar.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["ideas-de-dulceros-para-fiesta-infantil", "que-poner-en-un-dulcero", "dulceros-para-eventos-empresariales"],
  },
  {
    slug: "ideas-de-dulceros-para-fiesta-infantil",
    title: "Ideas de dulceros para cumpleaños y fiesta infantil (niño y niña)",
    metaTitle: "Dulceros para niñas y niños: ideas de fiesta",
    description: "Ideas de dulceros para niñas y niños en cumpleaños y fiestas infantiles: cómo elegir la temática, qué nombre poner, cuántos pedir y cómo combinarlos con la decoración.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-17",
    intro:
      "El dulcero es de lo último que se llevan los niños de la fiesta, y muchas veces lo primero que enseñan en casa. Por eso vale la pena que combine con la temática del cumpleaños y lleve el nombre del festejado. Aquí tienes ideas prácticas para elegir el diseño, calcular cuántos pedir y armar dulceros que se vean parte de la fiesta.",
    sections: [
      {
        heading: "Elige la temática a partir de la fiesta, no al revés",
        body: [
          "La forma más fácil de acertar es usar la misma temática que el pastel, las invitaciones o la decoración: el personaje favorito del niño o la niña, su caricatura del momento, dinosaurios, unicornios, fútbol, el espacio o simplemente sus colores favoritos.",
          "Si la fiesta no tiene un personaje definido, una paleta de dos o tres colores con el nombre grande en el frente funciona muy bien y sirve igual para niño o niña. Mándanos una foto de la invitación o de la decoración y adaptamos el diseño del dulcero a esos colores.",
        ],
      },
      {
        heading: "El nombre: del festejado o de cada invitado",
        body: [
          "Lo más común es que todos los dulceros lleven el nombre del festejado y su edad, por ejemplo, Sofía 7 años: así el dulcero funciona como recuerdo del cumpleaños.",
          "Si quieres algo más especial para un grupo pequeño (primos, el salón de clases), coméntalo al cotizar: podemos revisar contigo si conviene personalizar cada dulcero con el nombre de cada invitado.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir",
        body: [
          "Cuenta a los niños invitados y suma de 2 a 4 extra para hermanos que llegan sin avisar o niños que se suman al último momento. Como el mínimo es de 10 piezas y cada dulcero cuesta $75, puedes pedir exactamente los que necesitas: 15 dulceros son $1,125 y 25 son $1,875.",
          "Si también vas a dar dulceros a los adultos, considera un diseño un poco más sobrio con el mismo nombre, o simplemente la misma temática: se pueden pedir juntos en una sola orden.",
        ],
      },
      {
        heading: "Detalles que hacen la diferencia",
        body: [
          "Unos stickers con el mismo personaje o el nombre del festejado dentro del dulcero son un detalle que a los niños les encanta y que siguen usando días después de la fiesta. También puedes pedirlos con nosotros, en vinil resistente al agua.",
          "Llénalos la noche anterior o la mañana de la fiesta, ya armados, y colócalos juntos en una mesa cerca de la salida: se convierten en parte de la decoración y nadie se va sin el suyo.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "cajas-bolsas-o-vasos-dulceros-cual-elegir"],
  },
  {
    slug: "dulceros-navidenos-personalizados",
    title: "Dulceros navideños personalizados: para posadas, la escuela y el intercambio",
    metaTitle: "Dulceros navideños para posadas: ideas y pedidos",
    description:
      "Ideas de dulceros navideños personalizados para posadas, festivales escolares, intercambios y fiestas de fin de año: diseños, qué poner dentro y cuándo pedirlos para que lleguen a tiempo.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-17",
    intro:
      "Diciembre es la temporada con más búsquedas de dulceros en México: posadas, festivales de la escuela, convivios de la oficina e intercambios. Un dulcero navideño con nombre convierte el clásico aguinaldo de dulces en un detalle que se ve pensado. Esta guía cubre ideas de diseño, qué poner dentro y, lo más importante, con cuánto tiempo pedirlos.",
    sections: [
      {
        heading: "Ideas de diseño para Navidad",
        body: [
          "Los clásicos funcionan: rojo y verde con detalles dorados, nieve y pinos, estilo nórdico en blanco y rojo, o una temática más infantil con Santa, renos y muñecos de nieve. Para un festival escolar, un diseño con el nombre del grupo o del salón queda muy bien; para una posada familiar, el apellido de la familia o el nombre de cada niño.",
          "Si los vas a dar en tu negocio o empresa, usa los colores de tu marca con un detalle navideño y tu logo: se ven festivos sin perder tu imagen.",
        ],
      },
      {
        heading: "Para posadas y aguinaldos",
        body: [
          "En una posada, el dulcero tipo lunch box reemplaza bien la bolsa de aguinaldo tradicional: cabe una buena porción de dulces, cacahuates, colación o mandarinas pequeñas, y el asa facilita que los niños lo carguen mientras rompen la piñata.",
          "Mide 15.7 × 11.7 × 9.9 cm y te llega armado, así que el día de la posada solo tienes que llenarlo.",
        ],
      },
      {
        heading: "Cuándo pedirlos para que lleguen a tiempo",
        body: [
          "La producción toma de 3 a 5 días hábiles desde que apruebas la prueba digital, más el envío. En diciembre las paqueterías van más lentas y los días festivos no cuentan como hábiles, así que lo más seguro es hacer el pedido en noviembre o, a más tardar, la primera semana de diciembre para posadas del 16 al 24.",
          "Si estás en Guadalajara, recogerlo en una sucursal Casa Blanca ($20) suele ser más rápido que el envío nacional: llega 1 día hábil después de terminar la producción.",
        ],
      },
      {
        heading: "Precio para grupos grandes",
        body: [
          "Cada dulcero cuesta $75 con mínimo de 10 piezas, así que un salón de 30 niños son $2,250 y una posada de 20 invitados son $1,500. Desde $750 el envío nacional es gratis.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["etiquetas-navidenas-personalizadas", "dulceros-para-eventos-empresariales", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
  },
  {
    slug: "dulceros-para-dia-del-nino",
    title: "Dulceros para Día del Niño: ideas para el salón, la escuela y la familia",
    metaTitle: "Dulceros para Día del Niño: ideas y cómo pedirlos",
    description:
      "Cómo organizar los dulceros del Día del Niño (30 de abril) para todo el salón o la escuela: diseños, cuántos pedir, qué poner dentro y con cuánta anticipación hacer el pedido.",
    category: "Guías",
    publishedAt: PUBLISHED,
    intro:
      "El 30 de abril, Día del Niño en México, es una de las fechas con más búsquedas de dulceros del año, sobre todo por parte de maestras, mamás del comité y escuelas que quieren darle algo especial a cada alumno. Un dulcero con el nombre de cada niño o del grupo se siente mucho más especial que una bolsa genérica. Aquí tienes cómo organizarlo sin estrés.",
    sections: [
      {
        heading: "Un diseño para todo el salón",
        body: [
          "Para el salón, lo más práctico es un solo diseño para todos con el nombre del grupo o de la escuela y un mensaje como Feliz Día del Niño. Una temática neutra (colores brillantes, juegos, el espacio, animales) funciona igual para niños y niñas.",
          "Si el grupo es pequeño, coméntanos al cotizar si quieres el nombre de cada alumno en su dulcero y revisamos contigo cómo organizar la lista.",
        ],
      },
      {
        heading: "Cuántos pedir y cuánto cuesta",
        body: [
          "Cada dulcero cuesta $75 y el mínimo es de 10, así que pides exactamente el número de alumnos: un grupo de 25 son $1,875 y uno de 32 son $2,400. Pide 1 o 2 de más por si llega un alumno nuevo o alguno se daña al llenarlo.",
          "Si el comité de padres divide el costo, el precio por niño queda claro desde el principio: $75 por dulcero, y desde $750 el envío nacional es gratis.",
        ],
      },
      {
        heading: "Qué poner dentro según la edad",
        body: [
          "Para preescolar, evita dulces duros y juguetes pequeños con piezas que se puedan tragar; mejor gomitas suaves, galletas, un juguete grande o crayolas. Para primaria funcionan bien paletas, chocolates, dulces enchilados, stickers y un juguete pequeño.",
          "Revisa con la escuela si hay alumnos con alergias (cacahuate, chocolate) antes de comprar los dulces: es más fácil adaptar todos los dulceros que hacer uno distinto el mismo día.",
        ],
      },
      {
        heading: "Cuándo pedirlos",
        body: [
          "Como abril se junta con vacaciones de Semana Santa, lo ideal es hacer el pedido a finales de marzo o principios de abril. La producción toma de 3 a 5 días hábiles después de aprobar la prueba digital, más el envío; te llegan armados, listos para llenar.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "ideas-de-dulceros-para-fiesta-infantil", "dulceros-para-graduacion"],
  },
  {
    slug: "dulceros-para-graduacion",
    title: "Dulceros para graduación de kínder, primaria y secundaria",
    metaTitle: "Dulceros para graduación de kínder y primaria",
    description:
      "Dulceros personalizados para graduación de kínder, primaria y secundaria: diseño con la generación, precio, cuántos pedir y cuándo hacer el pedido.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Los dulceros de graduación son de las búsquedas que más crecen en México. Cierran el ciclo escolar con un detalle para cada graduado o para los invitados de la ceremonia, y se quedan como recuerdo de la generación. Esta guía cubre qué dulcero conviene, ideas de diseño para cada nivel, qué poner dentro, cuánto cuesta y cómo organizar el pedido con tiempo, sobre todo si lo coordinas desde el comité de graduación.",
    sections: [
      {
        heading: "Qué dulcero conviene para una graduación",
        body: [
          "Para una graduación conviene un dulcero con el nombre del graduado o de la generación, los colores de la escuela y la fecha. El nuestro es tipo lunch box, con asa, de cartulina opalina y mide 15.7 × 11.7 × 9.9 cm. Llega armado y vacío, así que tú eliges qué lleva dentro.",
          "La personalización incluye nombre y temática, así que el mismo dulcero sirve para un kínder, una primaria o una secundaria: lo que cambia es el diseño. Antes de producir te mandamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Ideas de diseño por nivel",
        body: [
          "Para kínder funciona un diseño alegre con birrete y el nombre del niño; para primaria y secundaria, los colores de la escuela con el nombre de la generación. Si cada dulcero lleva el nombre de un graduado es un recuerdo personal; si es para invitados, basta la generación y la fecha.",
          "Para kínder, un diseño alegre con birrete, el nombre del niño y la frase Me gradué funciona muy bien. Para primaria y secundaria, los colores de la escuela con el nombre de la generación (por ejemplo, Generación 2021-2027) y el escudo o mascota del colegio se sienten más formales.",
          "Si tienes el escudo, el logo o una foto del uniforme, mándanoslo junto con la invitación a la ceremonia y adaptamos el diseño a esos colores. Revisa con calma la ortografía de cada nombre y el año de la generación en la prueba digital, porque es el último paso antes de producir.",
        ],
      },
      {
        heading: "Qué poner dentro de un dulcero de graduación",
        body: [
          "El dulcero llega vacío, así que tú decides el relleno. Para una graduación funcionan chocolates, gomitas, galletas y dulces tradicionales mexicanos, más un detalle que no sea dulce, como stickers con el nombre de la generación. Entre 8 y 12 piezas de dulce se ve completo en esta caja.",
          "En kínder, evita dulces duros, cacahuates enteros y juguetes con piezas pequeñas que se puedan tragar; mejor gomitas suaves, galletas o chocolates pequeños. En primaria y secundaria puedes sumar paletas, dulces enchilados, mazapanes y botanas.",
          "Pregunta a la escuela o a los papás por alergias antes de comprar (cacahuate y chocolate son las más comunes) y arma un dulcero de prueba para calcular cuánto necesitas. Para una lista completa por tipo de dulce y edad, revisa la guía de qué poner en un dulcero. Si quieres un detalle extra, también hacemos stickers en vinil resistente al agua con el nombre o el escudo de la generación.",
        ],
      },
      {
        heading: "Cuántos pedir y cuánto cuesta",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas, así que pides exactamente el número de graduados o invitados. 20 dulceros son $${dulceroTotal(20)} y 40 son $${dulceroTotal(40)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
          "Si el comité de graduación lo organiza, confirma la lista final de alumnos antes de aprobar la prueba digital: es el mejor momento para corregir nombres. Suma 1 o 2 dulceros extra por si se agrega un invitado o un alumno de último momento.",
        ],
      },
      {
        heading: "Cuándo pedirlos para el fin de cursos",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara. Como las graduaciones se concentran en junio y julio, pídelos con tres o cuatro semanas de anticipación.`,
          "Las graduaciones se concentran en junio y julio, y en esas semanas se juntan muchos pedidos. Si la aprobación del diseño pasa por varias personas del comité o de la escuela, empieza todavía antes. Te llegan armados, así que el día del evento solo tienes que llenarlos y acomodarlos.",
        ],
      },
      {
        heading: "Cómo hacer el pedido paso a paso",
        body: [
          "Eliges la cantidad en la tienda en línea o cotizas por WhatsApp, nos das el nombre y la temática, revisas la prueba digital y, cuando la apruebas, empieza la producción. Nada se produce antes de tu aprobación. Puedes pagar con tarjeta, OXXO o SPEI.",
          "Si quieres platicar el diseño antes de pagar, escríbenos por WhatsApp con la fecha de la ceremonia, el nivel y el número aproximado de graduados. Ten en cuenta que no emitimos factura (CFDI); si la escuela o el comité la necesita, escríbenos antes de pedir.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Los dulceros de graduación incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero para graduación?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Qué medidas tiene el dulcero?",
        a: "Mide 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 pulgadas), con asa, y está hecho de cartulina opalina.",
      },
      {
        q: "¿Puedo poner el nombre de la generación y de cada graduado?",
        a: "Sí. La personalización incluye nombre y temática: puede ser la generación y la fecha para todos, o el nombre de cada graduado. Si quieres un nombre distinto por dulcero, coméntalo al cotizar.",
      },
      {
        q: "¿Con cuánta anticipación pido los dulceros?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional. Para el fin de cursos conviene pedirlos con tres o cuatro semanas de anticipación.`,
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Si tu escuela o comité la necesita, escríbenos antes de pedir.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-para-dia-del-nino", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "ideas-de-dulceros-para-fiesta-infantil", "cajas-bolsas-o-vasos-dulceros-cual-elegir"],
  },
  {
    slug: "dulceros-para-bautizo-y-primera-comunion",
    title: "Dulceros y recuerdos para bautizo y primera comunión",
    metaTitle: "Dulceros para bautizo y primera comunión: ideas",
    description:
      "Ideas de dulceros personalizados como recuerdo de bautizo o primera comunión: diseños, qué datos poner, qué meter dentro y cuántos pedir para tus invitados.",
    category: "Guías",
    publishedAt: PUBLISHED,
    intro:
      "En un bautizo o una primera comunión, el recuerdo que se llevan los invitados suele ser parte importante de la celebración. Un dulcero personalizado con el nombre del niño o la niña y la fecha funciona como recuerdo y como detalle de dulces a la vez. Aquí tienes ideas para que se vea a la altura del evento.",
    sections: [
      {
        heading: "Diseños que funcionan",
        body: [
          "Para bautizo, los tonos pastel (azul, rosa, beige, blanco) con una paloma, una cruz o angelitos son los más pedidos. Para primera comunión, el blanco con dorado, un cáliz o una cruz sencilla y el nombre en letra elegante.",
          "Si la fiesta tiene una paleta de colores definida, mándanos la invitación y adaptamos el diseño del dulcero a esos tonos para que combine con la mesa de dulces.",
        ],
      },
      {
        heading: "Qué datos poner",
        body: [
          "Lo más común es el nombre del niño o la niña, el tipo de celebración (Mi bautizo, Mi primera comunión) y la fecha. Algunas familias agregan el nombre de los padrinos o una frase corta de agradecimiento.",
          "Revisa bien la ortografía de los nombres en la prueba digital antes de aprobarla: es el último paso antes de producir.",
        ],
      },
      {
        heading: "Qué poner dentro",
        body: [
          "Para un evento familiar con niños y adultos, funcionan bien los chocolates finos, almendras cubiertas, peladillas, mazapanes o galletas decoradas. Si quieres que dure como recuerdo, agrega un rosario pequeño, una medallita o una vela.",
        ],
      },
      {
        heading: "Cuántos pedir y cuánto cuesta",
        body: [
          "Pide uno por familia o por invitado, según tu presupuesto. Cada dulcero cuesta $75 con mínimo de 10 piezas: 30 dulceros son $2,250 y 50 son $3,750, con envío gratis desde $750. Te llegan armados, listos para llenar.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["dulceros-para-eventos-sociales-boda-xv-baby-shower", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
  },
  {
    slug: "dulceros-para-eventos-empresariales",
    title: "Dulceros para eventos empresariales: detalles con el logo de tu empresa",
    metaTitle: "Dulceros para eventos empresariales con tu logo",
    description:
      "Cómo usar dulceros personalizados con el logo de tu empresa en posadas, aniversarios, kits de bienvenida, lanzamientos y eventos con clientes: diseño, cantidades y tiempos.",
    category: "Guías",
    publishedAt: PUBLISHED,
    intro:
      "Los dulceros no son solo para fiestas infantiles. Con el logo y los colores de tu empresa, una cajita tipo lunch box es un detalle corporativo económico que se ve cuidado: para la posada de fin de año, el aniversario de la empresa, la bienvenida de nuevos empleados o un evento con clientes. Esta guía explica cómo pedirlos para tu negocio.",
    sections: [
      {
        heading: "Ocasiones en las que funcionan",
        body: [
          "Posadas y convivios de fin de año, aniversarios de la empresa, kits de bienvenida para nuevos colaboradores, lanzamientos de producto, eventos con clientes o proveedores, Día del Niño para los hijos de los empleados y stands en ferias o expos.",
          "En todos los casos el dulcero cumple dos funciones: es un detalle para la persona y lleva tu marca a su casa o escritorio.",
        ],
      },
      {
        heading: "Cómo se ve con tu marca",
        body: [
          "Usamos tu logo, los colores de tu identidad y, si quieres, un mensaje corto (Gracias por un gran año, Bienvenido al equipo). Mándanos tu logo en buena calidad (PNG, PDF, AI o SVG) y te enviamos una prueba digital para que la aprueben antes de producir.",
          "Para cerrar o complementar el detalle, también puedes pedir stickers con tu logo y usarlos para sellar bolsitas o decorar lo que va dentro.",
        ],
      },
      {
        heading: "Cantidades y precio",
        body: [
          "Cada dulcero cuesta $75 y el mínimo es de 10 piezas, sin paquetes cerrados: puedes pedir 18 para un equipo pequeño o 120 para toda la empresa. 40 dulceros son $3,000 y 100 son $7,500, con envío nacional gratis desde $750. Ten en cuenta que no emitimos factura (CFDI); si tu empresa la necesita, escríbenos antes de pedir.",
          "Para pedidos grandes, escríbenos por WhatsApp antes de pagar: así confirmamos fechas y cualquier detalle de tu evento.",
        ],
      },
      {
        heading: "Tiempos para eventos corporativos",
        body: [
          "La producción toma de 3 a 5 días hábiles después de aprobar el diseño, más el envío. Como en una empresa la aprobación del diseño suele pasar por más de una persona, lo mejor es iniciar el pedido con dos o tres semanas de anticipación. Te llegan armados, listos para llenar.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-logo-personalizado"],
    relatedBlogSlugs: ["dulceros-navidenos-personalizados", "dulceros-para-eventos-sociales-boda-xv-baby-shower", "que-poner-en-un-dulcero"],
  },
  {
    slug: "dulceros-para-eventos-sociales-boda-xv-baby-shower",
    title: "Dulceros para eventos sociales: boda, XV años y baby shower",
    metaTitle: "Dulceros para boda, XV años y baby shower",
    description:
      "Ideas de dulceros personalizados para bodas, XV años, baby showers y otros eventos sociales: diseños según el evento, qué meter dentro, cuántos pedir y cuándo hacer el pedido.",
    category: "Guías",
    publishedAt: PUBLISHED,
    intro:
      "En bodas, XV años y baby showers, los dulceros suelen formar parte de la mesa de dulces o se entregan como recuerdo al final del evento. Personalizados con los nombres y los colores de la fiesta, se ven como parte de la decoración y no como un detalle de último momento. Aquí tienes ideas para cada tipo de evento.",
    sections: [
      {
        heading: "Boda",
        body: [
          "Para boda funcionan los nombres de los novios con la fecha, en los colores de la boda: blanco con dorado, verde salvia, terracota o el tono de las flores. Pueden ir en la mesa de dulces para que cada invitado llene el suyo, o ya llenos en cada lugar como recuerdo.",
          "Si en la boda hay niños, un dulcero con una temática más divertida para la mesa infantil es un detalle que los papás agradecen.",
        ],
      },
      {
        heading: "XV años",
        body: [
          "Para XV años, el nombre de la quinceañera con el color o la temática de su fiesta (por ejemplo, un estilo elegante, floral o el tema que eligió) y la fecha. Suelen pedirse para todos los invitados o solo para la corte y los chambelanes.",
        ],
      },
      {
        heading: "Baby shower y revelación de género",
        body: [
          "Para baby shower, el nombre del bebé (o Baby + apellido si aún no tiene nombre) en tonos pastel. Para una revelación de género, un diseño neutro con la pregunta niño o niña sirve tanto antes como después de la sorpresa.",
        ],
      },
      {
        heading: "Cuántos pedir, precio y tiempos",
        body: [
          "Cada dulcero cuesta $75 con mínimo de 10 piezas: 50 invitados son $3,750 y 80 son $6,000, con envío nacional gratis desde $750. La producción toma de 3 a 5 días hábiles después de aprobar la prueba digital, más el envío; para eventos grandes conviene pedirlos con tres o cuatro semanas de anticipación. Te llegan armados, listos para llenar.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["dulceros-para-bautizo-y-primera-comunion", "que-poner-en-un-dulcero", "dulceros-para-eventos-empresariales"],
  },
  {
    slug: "que-poner-en-un-dulcero",
    title: "Qué poner en un dulcero: ideas de dulces y detalles según la edad",
    metaTitle: "Qué dulces poner en un dulcero: ideas por edad",
    description: "Qué dulces poner en un dulcero según la edad: ideas para niños de 1 a 12 años, adolescentes y adultos, cuánto llenar la cajita y cómo evitar problemas con alergias.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-28",
    intro:
      "Un dulcero se ve completo con 8 a 12 piezas: un chocolate, una gomita o paleta, un dulce enchilado o ácido, un dulce tradicional mexicano y una botana chica, más un detalle que no sea dulce, como stickers. Abajo tienes la lista por tipo de dulce y por edad, pensada para una cajita tipo lunch box de 15.7 × 11.7 × 9.9 cm.",
    sections: [
      {
        heading: "Qué dulces poner en un dulcero: lista por tipo de dulce",
        body: [
          "Mezcla texturas y sabores en vez de repetir uno solo: algo de chocolate, algo suave, algo enchilado o ácido y algo tradicional. Así cada invitado encuentra algo que le gusta y la caja se ve variada al abrirla.",
          "Chocolates: barritas pequeñas, bolitas o monedas de chocolate. Son los que casi nadie rechaza, aunque en clima caliente conviene guardar los dulceros en un lugar fresco antes de entregarlos.",
          "Gomitas y malvaviscos: suaves, de colores y fáciles de repartir en bolsitas. Son la opción más segura para los más pequeños.",
          "Dulces tradicionales mexicanos: mazapanes, cocadas, tamarindos, palanquetas y dulces de leche. Le dan sabor local al dulcero y a los adultos les gusta recordarlos.",
          "Enchilados y ácidos: paletas con chile, tiras o gomitas enchiladas y dulces de tamarindo. Funcionan sobre todo de los 6 años en adelante.",
          "Paletas y chicles: llenan espacio con poco volumen. Evita las paletas duras en niños muy pequeños.",
          "Botanas saladas: una bolsita de papitas, palomitas o cacahuates japoneses (solo si no hay alergias) equilibra tanto dulce.",
          "Un detalle sin azúcar: stickers, una pulsera, burbujas o una libreta chica. Es lo que el niño conserva cuando el dulce ya se acabó.",
        ],
      },
      {
        heading: "Para niños pequeños (1 a 5 años)",
        body: [
          "Elige dulces suaves y seguros: gomitas, malvaviscos, galletas, chocolates pequeños, pasitas o fruta deshidratada. Evita dulces duros, cacahuates enteros y juguetes con piezas pequeñas, que son un riesgo de asfixia a esta edad.",
          "Como detalle: crayolas, burbujas, una libreta para colorear pequeña o stickers grandes.",
        ],
      },
      {
        heading: "Para niños de primaria (6 a 12 años)",
        body: [
          "Aquí funcionan los clásicos mexicanos: paletas, chicles, dulces enchilados, tamarindos, mazapanes, chocolates, papitas pequeñas y gomitas. Como detalle, un juguete pequeño, una pulsera, una pelota saltarina o stickers del mismo personaje de la fiesta.",
          "Los stickers con el personaje o el nombre del festejado son de los detalles que más duran: se quedan pegados en cuadernos y botellas semanas después de la fiesta.",
        ],
      },
      {
        heading: "Para adolescentes y adultos",
        body: [
          "Chocolates de mejor calidad, botanas, dulces gourmet, mini botellitas de salsa, un llavero o un detalle con el logo si es un evento de empresa. En bodas y XV años, almendras cubiertas o chocolates finos funcionan muy bien.",
        ],
      },
      {
        heading: "Cuánto llenar y cómo evitar problemas",
        body: [
          "No hace falta llenar el dulcero hasta arriba: entre 8 y 12 piezas de dulce más un detalle se ve completo en una caja de este tamaño. Arma uno de prueba antes de comprar todo para calcular cuánto necesitas.",
          "Pregunta por alergias si invitas a niños que no conoces bien (cacahuate y chocolate son las más comunes) y, si hay dudas, ten algunos dulceros sin esos ingredientes marcados por separado.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué dulces se ponen en un dulcero?",
        a: "Una mezcla de chocolate, gomitas o paletas, un dulce enchilado o ácido, un dulce tradicional mexicano y una botana pequeña, más un detalle que no sea dulce. Ajusta la mezcla según la edad de los invitados.",
      },
      {
        q: "¿Cuántos dulces lleva un dulcero?",
        a: "Entre 8 y 12 piezas de dulce más un detalle se ve completo en una caja tipo lunch box de 15.7 × 11.7 × 9.9 cm. Arma uno de prueba antes de comprar todo.",
      },
      {
        q: "¿Qué dulces son seguros para niños de 1 a 5 años?",
        a: "Gomitas suaves, malvaviscos, galletas, chocolates pequeños, pasitas o fruta deshidratada. Evita dulces duros, cacahuates enteros y juguetes con piezas pequeñas.",
      },
      {
        q: "¿Qué pongo en el dulcero además de dulces?",
        a: "Stickers con el nombre o el personaje de la fiesta, crayolas, burbujas, una pulsera o una pelota saltarina. Son detalles que el niño conserva después de la fiesta.",
      },
      {
        q: "¿Cómo evito problemas de alergias en un dulcero?",
        a: "Pregunta a los papás si no conoces bien a los invitados. El cacahuate y el chocolate son de las más comunes: si hay dudas, prepara algunos dulceros sin esos ingredientes y márcalos por separado.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["ideas-de-dulceros-para-fiesta-infantil", "cajas-bolsas-o-vasos-dulceros-cual-elegir", "dulceros-personalizados-guadalajara"],
  },
  {
    slug: "dulceros-de-halloween",
    title: "Dulceros de Halloween personalizados para niños y fiestas",
    metaTitle: "Dulceros de Halloween personalizados para niños",
    description:
      "Ideas de dulceros de Halloween personalizados para fiestas, la escuela o para pedir dulces: diseños, qué poner dentro y con cuánto tiempo pedirlos antes del 31 de octubre.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-17",
    intro:
      "Halloween es una de las fechas en las que más se buscan dulceros en México, junto con Navidad y el Día del Niño. Un dulcero personalizado con el nombre del niño sirve para la fiesta del salón, para repartir en una fiesta de disfraces o incluso para salir a pedir dulces. Aquí tienes ideas y tiempos para que llegue antes del 31 de octubre.",
    sections: [
      {
        heading: "Ideas de diseño",
        body: [
          "Calabazas, fantasmas, murciélagos, gatos negros y telarañas en naranja, morado y negro son los clásicos. Para los más pequeños, una versión tierna (fantasmitas sonrientes, calabazas con cara) funciona mejor que una que dé miedo.",
          "Con el nombre del niño en el frente, el dulcero se vuelve su caja para pedir dulces, y el asa hace que sea fácil de cargar casa por casa.",
        ],
      },
      {
        heading: "Para la fiesta del salón o de la oficina",
        body: [
          "Para la escuela, un mismo diseño con el nombre del grupo; para una oficina o negocio, un diseño de Halloween con tu logo. Cada dulcero cuesta $75 con mínimo de 10 piezas, y desde $750 el envío nacional es gratis.",
        ],
      },
      {
        heading: "Cuándo pedirlos",
        body: [
          "La producción toma de 3 a 5 días hábiles después de aprobar la prueba digital, más 2 a 5 días de envío (o 1 día hábil si lo recoges en una sucursal Casa Blanca de Guadalajara). Para tenerlos a tiempo para el 31 de octubre, pídelos a más tardar a mediados de octubre.",
          "Te llegan armados, listos para llenar con los dulces de la temporada.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "ideas-de-dulceros-para-fiesta-infantil", "dulceros-navidenos-personalizados"],
  },
  {
    slug: "cajas-bolsas-o-vasos-dulceros-cual-elegir",
    title: "Cajas, bolsas o vasos dulceros: cuál conviene para tu fiesta",
    metaTitle: "Bolsas, cajas o vasos para dulceros: cuál elegir",
    description:
      "Comparación práctica entre cajas dulceras tipo lunch box, bolsas para dulceros, vasos dulceros y morralitos: capacidad, presentación, personalización y para qué tipo de fiesta conviene cada uno.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-17",
    intro:
      "Cuando buscas dulceros aparecen muchas opciones: bolsas de celofán o de papel, vasos dulceros de plástico, morralitos de tela y cajitas de cartón. Ninguna es mejor en todo; depende del presupuesto, la edad de los invitados y qué tanto quieres que el dulcero se vea como parte de la decoración. Esta comparación te ayuda a decidir.",
    sections: [
      {
        heading: "Bolsas para dulceros",
        body: [
          "Son la opción más económica y fácil de conseguir. A cambio, se deforman con el peso, no se sostienen solas en la mesa y la personalización suele limitarse a una etiqueta o un sticker pegado al frente.",
          "Funcionan bien para fiestas muy grandes con presupuesto ajustado o como relleno dentro de otro dulcero.",
        ],
      },
      {
        heading: "Vasos dulceros y morralitos",
        body: [
          "Los vasos dulceros de plástico se reutilizan, pero ocupan espacio, son difíciles de personalizar con nombre y la temática suele ser genérica. Los morralitos de tela se ven bien y se pueden volver a usar, aunque cuestan más y personalizarlos con nombre encarece aún más cada pieza.",
        ],
      },
      {
        heading: "Cajas dulceras tipo lunch box",
        body: [
          "La caja con asa se sostiene sola, se ve ordenada en la mesa de dulces y se personaliza completa: el nombre del festejado y la temática ocupan todo el diseño, no solo una etiqueta. El asa facilita que los niños la carguen, y tiene espacio para dulces y un detalle.",
          "En Yume las hacemos de cartulina opalina, de 15.7 × 11.7 × 9.9 cm, con nombre y temática, a $75 por pieza con mínimo de 10, y te llegan armadas.",
        ],
      },
      {
        heading: "Cuál elegir",
        body: [
          "Si buscas lo más económico para muchos invitados, la bolsa. Si quieres algo reutilizable, el vaso o el morralito. Si quieres que el dulcero combine con la fiesta, lleve el nombre del festejado y se vea como parte de la decoración, la caja personalizada es la que más luce por lo que cuesta.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["ideas-de-dulceros-para-fiesta-infantil", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
  },
  {
    slug: "dulceros-dia-de-muertos-noviembre",
    title: "Dulceros para Día de Muertos y noviembre: ideas para el salón y la fiesta",
    metaTitle: "Dulceros para Día de Muertos y noviembre: ideas",
    description:
      "Ideas de dulceros personalizados para Día de Muertos y noviembre: diseños para el salón y la fiesta, qué poner dentro, cuántos pedir y cuándo hacerlo.",
    category: "Guías",
    publishedAt: "2026-10-28",
    intro:
      "Noviembre abre con Día de Muertos y sigue con festivales escolares, cumpleaños y convivios antes de que empiece la temporada de posadas. Un dulcero con nombre y una temática de la temporada convierte los dulces de siempre en un detalle que se ve pensado. Aquí tienes ideas de diseño para el salón y la fiesta, qué poner dentro, cuánto cuesta y, sobre todo, con cuánto tiempo pedirlos.",
    sections: [
      {
        heading: "Qué dulcero conviene para Día de Muertos y noviembre",
        body: [
          "Para Día de Muertos y noviembre conviene un dulcero con el nombre de quien lo recibe y una temática de la temporada, como flores, recortes de papel o calaveritas, en tonos naranja, morado y rosa. Sirve igual para el salón, la fiesta familiar o el convivio de la oficina, y llega armado y vacío para que tú elijas qué lleva dentro.",
          "Si lo vas a dar en un negocio o en la escuela, puedes sumar el nombre del grupo, el de la escuela o tu logo. Nuestro dulcero es tipo lunch box, con asa, y la personalización incluye nombre y temática.",
        ],
      },
      {
        heading: "Una fecha con tradición: qué dice la UNESCO",
        body: [
          "La UNESCO inscribió en 2008 la festividad indígena dedicada a los muertos en México en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad. Según su ficha, se celebra cada año de finales de octubre a principios de noviembre, y las familias preparan los platillos favoritos de sus difuntos y adornan con flores y recortes de papel.",
          "Por eso conviene pensar el diseño con respeto: colores cálidos, flores, papel recortado y el nombre bien visible funcionan mejor que una imagen de miedo. Si el dulcero es para un festival escolar, un diseño amable y colorido es lo más fácil de acertar con niños de todas las edades.",
        ],
      },
      {
        heading: "Ideas de diseño para el salón y la fiesta",
        body: [
          "Para el salón, lo más práctico es un solo diseño para todo el grupo con el nombre de la escuela o del salón y una temática de Día de Muertos en colores vivos. Para una fiesta familiar o un cumpleaños en noviembre, el mismo diseño con el nombre del festejado se siente más personal.",
          "Para el convivio de una oficina o un negocio, usa los colores de tu marca con un detalle de temporada y tu logo, así se ve festivo sin perder tu imagen. Si quieres que el dulcero siga siendo útil después de noviembre, un diseño solo con colores y nombre también sirve para otras fiestas.",
          "Mándanos una foto de la invitación o de la decoración y adaptamos el diseño a esos colores. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Qué poner dentro de un dulcero de noviembre",
        body: [
          "El dulcero llega vacío, sin dulces, así que tú decides el relleno. Para esta temporada funcionan las calaveritas de azúcar o de chocolate, los dulces tradicionales mexicanos, las galletas, las gomitas y un detalle pequeño como stickers del mismo diseño.",
          "Para preescolar, evita dulces duros y piezas pequeñas que se puedan tragar. Pregunta por alergias antes de comprar (cacahuate y chocolate son las más comunes) y arma uno de prueba para calcular cuánto necesitas. Si buscas más ideas por edad, revisa la guía de qué poner en un dulcero.",
        ],
      },
      {
        heading: "Precio y cuántos pedir",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas, así que pides exactamente el número de invitados o alumnos. 10 dulceros son $${dulceroTotal(10)}, 20 son $${dulceroTotal(20)} y 30 son $${dulceroTotal(30)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca. Suma 1 o 2 extra por si llega un invitado de último momento.`,
        ],
      },
      {
        heading: "Cuándo pedirlos para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional (o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara). Con esos tiempos, un pedido hecho a finales de octubre ya no llega para el 1 y 2 de noviembre.`,
          "Si tu evento es en las semanas siguientes, como un festival escolar, un cumpleaños o un convivio de fin de mes, pídelos cuanto antes. Y si ya estás pensando en posadas, el mismo pedido puede cubrir ambas fechas con un diseño de colores neutros; para uno navideño revisa la guía de dulceros navideños.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-de-halloween", "que-poner-en-un-dulcero", "dulceros-navidenos-personalizados", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, del grupo o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Cuándo se celebra el Día de Muertos?",
        a: "Según la ficha de la UNESCO, la festividad indígena dedicada a los muertos se celebra cada año de finales de octubre a principios de noviembre.",
      },
    ],
    sources: [
      {
        label: "UNESCO: Fiesta indígena dedicada a los muertos (Lista Representativa del Patrimonio Cultural Inmaterial, 2008)",
        url: "https://ich.unesco.org/en/RL/indigenous-festivity-dedicated-to-the-dead-00054",
      },
    ],
  },
];
