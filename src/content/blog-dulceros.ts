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
    title: "Dulceros personalizados en Guadalajara: precios y medidas",
    metaTitle: "Dulceros personalizados en Guadalajara: precio y medidas",
    description: `Dulceros personalizados en Guadalajara: primeras 100 piezas a $${dulceroUnit} c/u, mínimo 10. Medidas, material, tiempos y cómo pedirlos. Envío a todo México.`,
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-29",
    intro:
      "Un dulcero personalizado es la cajita que se lleva cada invitado al terminar la fiesta: con el nombre del festejado y la temática del evento, deja de ser una bolsa genérica y se vuelve parte de la decoración. En Yume los hacemos tipo lunch box, con asa, desde Guadalajara y con envío a todo México. Esta guía reúne lo que necesitas saber antes de pedirlos para un cumpleaños, un baby shower, una boda o un evento de tu empresa: precio, medidas, material, tiempos y cómo funciona el diseño.",
    sections: [
      {
        heading: "Cuánto cuestan los dulceros personalizados en Guadalajara",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas. Puedes pedir la cantidad exacta de invitados, sin paquetes cerrados. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
          `Por ejemplo, 10 dulceros son $${dulceroTotal(10)}, 12 son $${dulceroTotal(12)}, 20 son $${dulceroTotal(20)} y 30 son $${dulceroTotal(30)}. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
          "Es un precio por pieza de trabajo a medida: cada dulcero lleva el nombre y la temática de tu evento, no es un lote genérico de producción en serie.",
        ],
      },
      {
        heading: "Medidas y material del dulcero tipo lunch box",
        body: [
          "El dulcero mide 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 pulgadas), es tipo lunch box y tiene asa. Está hecho de cartulina opalina y te llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas, sin doblar ni pegar nada.",
          "La cartulina opalina es lisa y firme, y da buen acabado a la impresión. Como llega sin dulces, tú decides el relleno.",
        ],
      },
      {
        heading: "Qué incluye la personalización del dulcero",
        body: [
          "Cada dulcero lleva el nombre que nos indiques, ya sea el del festejado, los novios, el bebé o tu empresa, y la temática que elijas. Antes de producir te enviamos una prueba digital del diseño, y nada se produce hasta que la apruebas.",
          "La temática puede ser el personaje favorito del niño, una paleta de colores, un deporte, un estilo navideño o el logo de tu marca para un evento corporativo. Si lo necesitas para una boda o un baby shower, cuéntanos la ocasión y los colores por WhatsApp y te cotizamos.",
        ],
      },
      {
        heading: "Tiempos de entrega: cuándo pedir tu dulcero",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital. Si los recibes por paquetería, suma ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles de envío nacional; si los recoges en una sucursal Casa Blanca de Guadalajara, suma ${PICKUP_EXTRA_DAYS} día hábil.`,
          "El reloj empieza cuando apruebas la prueba, así que tener definidos el nombre y la temática desde el inicio es lo que más ayuda. Si tu fiesta es en noviembre, mira los [dulceros para Día de Muertos](/blog/dulceros-dia-de-muertos-noviembre); si es en diciembre, los [dulceros navideños personalizados](/blog/dulceros-navidenos-personalizados).",
        ],
      },
      {
        heading: "Cómo pedir tus dulceros personalizados",
        body: [
          "Puedes pedirlos en la tienda en línea: eliges la cantidad desde 10 piezas y pagas con tarjeta u OXXO. Si prefieres platicar la temática antes de pagar, cotiza por WhatsApp. Te mandamos la prueba digital, haces tus ajustes y solo entonces entra a producción.",
          `Pídelos directamente en la página de [dulceros personalizados tipo lunch box](/productos/${DULCERO}). Si necesitas ideas para el relleno, revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero), y para una fiesta de niños, las [ideas de dulceros para fiesta infantil](/blog/ideas-de-dulceros-para-fiesta-infantil).`,
        ],
      },
      {
        heading: "Dulceros para bodas, fiestas y eventos de empresa",
        body: [
          "Los dulceros funcionan para cumpleaños, baby showers, bautizos, bodas y eventos de empresa, porque cada uno lleva el nombre y la temática del evento. Cuéntanos la fecha, la cantidad y los colores por WhatsApp y te cotizamos. Si organizas eventos para otras personas, el trato es directo por WhatsApp y con prueba digital.",
          "Para equipos y empresas, revisa los [dulceros para eventos empresariales](/blog/dulceros-para-eventos-empresariales), donde el diseño lleva tu logo y los colores de tu marca.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: ["ideas-de-dulceros-para-fiesta-infantil", "que-poner-en-un-dulcero", "dulceros-para-eventos-empresariales", "dulceros-dia-de-muertos-noviembre", "dulceros-navidenos-personalizados"],
    faq: [
      {
        q: "¿Cuánto cuesta un dulcero personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "El pedido mínimo es de 10 piezas, y puedes pedir la cantidad exacta que necesitas, sin paquetes cerrados.",
      },
      {
        q: "¿Qué medidas tiene el dulcero?",
        a: "Mide 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 pulgadas), es tipo lunch box, con asa, y está hecho de cartulina opalina.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, los novios, el bebé o tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Puedo recogerlos en Guadalajara?",
        a: `Sí. En la zona metropolitana de Guadalajara puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
      },
    ],
  },
  {
    slug: "ideas-de-dulceros-para-fiesta-infantil",
    title: "Dulceros para niña y fiesta infantil: ideas de temas y colores",
    metaTitle: "Dulceros para niña y fiesta infantil: ideas",
    description:
      "Dulceros para niña: ideas de temas por edad, paletas de color y detalles con nombre, cuántos pedir y cuándo pedirlos.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-30",
    intro:
      "El dulcero es de lo último que se llevan los niños de la fiesta, y muchas veces lo primero que enseñan en casa. Por eso vale la pena que combine con la temática del cumpleaños y lleve el nombre de la festejada o del festejado. Aquí tienes ideas de dulceros para niña y para fiesta infantil: temas según la edad, paletas de color, detalles que hacen que se vea cuidado, cuántos pedir, qué llevan dentro, cómo cuidar a los invitados más pequeños y cuándo pedirlos para que lleguen a tiempo.",
    sections: [
      {
        heading: "Ideas de dulceros para fiesta infantil: parte de la temática",
        body: [
          "Para acertar, usa la misma temática del pastel, las invitaciones y la decoración: el personaje favorito del festejado, dinosaurios, unicornios, fútbol, el espacio o sus colores favoritos. Si no hay personaje definido, una paleta de dos o tres colores con el nombre grande al frente funciona para cualquier niño o niña.",
          "Mándanos una foto de la invitación o de la decoración y adaptamos el diseño del dulcero a esos colores. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
          "Los gustos infantiles cambian rápido. Si faltan semanas para la fiesta, un diseño con sus colores favoritos y su nombre suele envejecer mejor que uno basado solo en la caricatura del momento.",
        ],
      },
      {
        heading: "Qué incluye un dulcero personalizado para fiesta infantil",
        body: [
          "El dulcero es tipo lunch box, con asa, y llega armado y vacío. La personalización incluye el nombre del festejado y la temática que elijas, y te mandamos una prueba digital antes de producir. Los dulces y el relleno los pones tú.",
          `Es el mismo dulcero para niña y para niño: lo que cambia es el diseño. Si quieres ver el producto y pedirlo, entra a la página de [dulceros personalizados](/productos/${DULCERO}), donde eliges la cantidad desde 10 piezas.`,
          "Si la fiesta es de un grupo, como un salón, el nombre puede ser el del grupo o el de la escuela. También puedes sumar tu logo si el festejo es de una empresa o un negocio.",
        ],
      },
      {
        heading: "El nombre: del festejado o de cada invitado",
        body: [
          "Lo más común es que todos los dulceros lleven el nombre del festejado y su edad, por ejemplo, Sofía 7 años. Así cada dulcero funciona como recuerdo del cumpleaños. Si prefieres algo especial para un grupo pequeño, como primos o un salón, coméntalo al cotizar y revisamos si conviene personalizar cada uno con el nombre de cada invitado.",
          "Un consejo práctico: pide el nombre con letra grande y clara, para que los niños encuentren el suyo a la distancia entre varios dulceros iguales.",
        ],
      },
      {
        heading: "Dulceros para niña y para niño: qué cambia y qué no",
        body: [
          "Casi nada cambia en el dulcero: la diferencia está en la temática y los colores, no en el producto. Elige el diseño por el gusto del festejado, no por una regla de color. Si la fiesta es mixta, una paleta neutra con el nombre grande y un detalle del tema sirve para todos los invitados.",
          "Para una fiesta con niñas y niños, lo más práctico es un solo diseño con la temática central y el nombre del festejado, en lugar de dos versiones. La mesa se ve ordenada y todos reciben un detalle que se siente parte de la misma fiesta.",
          "Si prefieres dos estilos distintos, coméntalo al cotizar y lo revisamos contigo. Recuerda que el pedido mínimo es de 10 piezas.",
        ],
      },
      {
        heading: "Dulceros para niña: temas según la edad",
        body: [
          "Para un dulcero de niña, elige el tema según la edad y el estilo de la fiesta: unicornio, mariposas, bailarina, princesa, jardín, tea party, boho o sirena. Lo importante es que el tema combine con el pastel, la invitación y el resto de la decoración.",
          "Para los primeros años, un tema suave como mariposas, jardín o un unicornio en colores tranquilos se ve dulce y no recarga el diseño. Para primaria, bailarina, sirena o tea party dejan espacio para un nombre grande y más detalle.",
          "Son ideas para arrancar, no reglas. Si la niña ya tiene un personaje o un tema favorito, mándanos la referencia y lo revisamos contigo en la prueba digital antes de producir.",
        ],
      },
      {
        heading: "Paletas de color para dulceros de niña",
        body: [
          "Una paleta de dos o tres colores hace que el dulcero se vea planeado. Cuatro combinaciones que sirven para niña: rosa pastel con dorado, lila con blanco, salvia con durazno y rojo con crema. Son sugerencias de estilo de Yume, y las adaptamos a los colores de tu invitación.",
          "Rosa pastel con dorado se siente delicado y festivo, y va con princesa o tea party. Lila con blanco se ve fresco y limpio, y acompaña bien a unicornio, mariposas o sirena. Salvia con durazno es suave y natural, ideal para jardín o boho. Rojo con crema es más clásico y llamativo, y va con bailarina.",
          "Si ya tienes globos, manteles o el fondo de fotos, toma una foto con todo junto y mándala al cotizar. Con esa referencia ajustamos los colores del dulcero y te lo mostramos en la prueba digital.",
        ],
      },
      {
        heading: "Detalles que elevan un dulcero de niña",
        body: [
          "Tres detalles cambian cómo se ve un dulcero de niña: el nombre grande con la edad, un tema y una paleta que repitan la fiesta, y un recuerdo dentro que combine con el diseño. Nuestro dulcero es tipo lunch box, con asa, y la personalización incluye nombre y temática.",
          `El nombre con la edad, por ejemplo Sofía 7 años, convierte el dulcero en recuerdo del cumpleaños. Dentro puedes sumar [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) con el mismo diseño, el nombre o el personaje favorito, para que la pieza se sienta completa. Y si quieres que todo salga con el mismo estilo, pide los [dulceros personalizados](/productos/${DULCERO}) junto con ellos.`,
        ],
      },
      {
        heading: "Cuántos dulceros pedir para una fiesta infantil",
        body: [
          `Cuenta a los niños invitados y suma unos extra por si llega alguien de último momento. El mínimo es de 10 piezas, así que pides exactamente los que necesitas. Primeras 100 piezas: $${dulceroUnit} MXN por dulcero. 15 son $${dulceroTotal(15)} y 25 son $${dulceroTotal(25)}.`,
          "Una regla simple es contar a los invitados y sumar unos extra. Si también vas a dar dulceros a los adultos, considera un diseño un poco más sobrio con el mismo nombre, o simplemente la misma temática: se pueden pedir juntos en una sola orden.",
          "Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.",
        ],
      },
      {
        heading: "Qué poner dentro de los dulceros",
        body: [
          "El dulcero llega armado y vacío, sin dulces, así que tú decides el relleno. Funcionan bien los dulces de siempre, galletas, gomitas y un detalle pequeño como unos stickers del mismo diseño. Para niños pequeños, evita dulces duros y piezas que se puedan tragar, y pregunta por alergias antes de comprar.",
          "Arma uno de prueba antes de comprar para todos: así calculas cuánto necesitas y confirmas que todo cabe. Si buscas más ideas por edad, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Y si dudas entre dulcero, caja, bolsa o vaso, esta comparativa de [cajas, bolsas o vasos dulceros](/blog/cajas-bolsas-o-vasos-dulceros-cual-elegir) te ayuda a decidir.",
        ],
      },
      {
        heading: "Seguridad y alergias: cómo cuidar a los invitados pequeños",
        body: [
          "Revisa la edad de los invitados antes de elegir el relleno: con niños pequeños evita piezas duras o pequeñas que se puedan tragar. Pregunta a las familias por alergias antes de comprar los dulces. Como el dulcero llega vacío, tú controlas cada ingrediente que entra.",
          "La edad de los invitados manda: una fiesta de preescolar pide un relleno distinto al de una fiesta de primaria. Si tienes dudas sobre alguna alergia, consulta a la familia del niño antes de decidir qué llevará dentro.",
        ],
      },
      {
        heading: "Detalles que hacen la diferencia en el dulcero",
        body: [
          "Un detalle extra convierte el dulcero en recuerdo: unos stickers con el mismo personaje o el nombre del festejado dentro de cada uno. Puedes pedirlos con nosotros en vinil premium, resistente al agua, al sol y a rayones, con tu diseño, personaje o foto.",
          "Puedes pedir tus [stickers de vinil personalizados](/productos/stickers-vinil-impermeable) junto con los dulceros. Llena los dulceros la noche anterior o la mañana de la fiesta, ya armados, y colócalos juntos en una mesa cerca de la salida: se convierten en parte de la decoración y nadie se va sin el suyo.",
        ],
      },
      {
        heading: "Cómo combinar los dulceros con la decoración de la mesa",
        body: [
          "Colócalos juntos en una mesa o repisa cerca de la salida, con el nombre hacia el frente y a la vista. Repite los colores del pastel o del fondo de fotos en el diseño, y los dulceros se vuelven parte de la decoración en lugar de un detalle suelto que aparece al final de la fiesta.",
          "Si ya tienes globos, manteles o vajilla de la misma paleta, toma una foto con todo junto y mándala al cotizar. Con esa referencia adaptamos el diseño del dulcero a esos colores y te lo mostramos en la prueba digital antes de producir.",
          "Si la mesa de dulces o el pastel ya tienen un personaje, lo más sencillo es repetirlo en el dulcero con el nombre del festejado. Así los invitados lo reconocen de inmediato.",
        ],
      },
      {
        heading: "Si organizas la fiesta como planner: cómo pedir dulceros",
        body: [
          "Si eres planner u organizas fiestas infantiles para clientes, pide los dulceros con el nombre del festejado y la temática del evento, y compártenos fotos de la invitación y la decoración. Te mandamos una prueba digital para que tu cliente la apruebe antes de producir, y platicamos todo por WhatsApp.",
          "Los dulceros se piden desde 10 piezas, así que sirven para un evento pequeño o mediano. Para más de 100 piezas, escríbenos y te cotizamos. Si tu cliente está en la zona, revisa también la guía de [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "Cómo pedir tus dulceros personalizados paso a paso",
        body: [
          "Cuenta a tus invitados y suma extras, elige la temática y el nombre, y escríbenos por WhatsApp con una foto de la invitación o la decoración. Te enviamos una prueba digital antes de producir, y nada se produce hasta que la apruebas. Cuando la apruebas, tu pedido pasa a producción.",
          "Tenlo claro desde el inicio: la fecha de la fiesta, el número de piezas, el nombre que va en cada dulcero y si lo recibirás por envío o lo recogerás en Guadalajara. Con esos cuatro datos, la cotización y la prueba digital son rápidas de preparar.",
        ],
      },
      {
        heading: "Precio y cuándo pedirlos para que lleguen a tiempo",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas. La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional. Pídelos con holgura antes de la fecha de la fiesta.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca, y el tiempo extra es de ${PICKUP_EXTRA_DAYS} día hábil.`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "cajas-bolsas-o-vasos-dulceros-cual-elegir"],
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
        q: "¿Cuántos dulceros pido para una fiesta infantil?",
        a: "Cuenta a los niños invitados y suma unos extra por si llega alguien de último momento. El pedido mínimo es de 10 piezas.",
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, del grupo o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Puedo poner el nombre de cada invitado?",
        a: "Coméntalo al cotizar y revisamos contigo si conviene personalizar cada dulcero con el nombre de cada invitado.",
      },
      {
        q: "¿El dulcero es distinto para niña y para niño?",
        a: "No. Es el mismo dulcero, tipo lunch box con asa. Lo que cambia es el diseño: la temática, los colores y el nombre.",
      },
      {
        q: "¿Qué temas puedo elegir para un dulcero de niña?",
        a: "Unicornio, mariposas, bailarina, princesa, jardín, tea party, boho o sirena son ideas de diseño para arrancar. Elige según la edad y el estilo de la fiesta, y si ya tiene un personaje favorito, mándanos la referencia.",
      },
      {
        q: "¿Qué colores combinan para un dulcero de niña?",
        a: "Algunas combinaciones que sugerimos son rosa pastel con dorado, lila con blanco, salvia con durazno y rojo con crema. También podemos adaptar el diseño a los colores de tu invitación o decoración.",
      },
      {
        q: "¿Cuándo debo ordenar los dulceros de niña?",
        a: `Cuenta desde la fecha de la fiesta hacia atrás: la producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días hábiles de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Cómo coordino el dulcero con la mesa de dulces?",
        a: "Mándanos una foto de la invitación, los globos o la mesa de dulces y adaptamos los colores y la temática del dulcero. Antes de producir te enviamos una prueba digital para que veas cómo combina.",
      },
      {
        q: "¿Qué debo cuidar si hay niños pequeños en la fiesta?",
        a: "Revisa la edad de los invitados y evita piezas duras o pequeñas con niños pequeños. Pregunta por alergias antes de comprar el relleno.",
      },
      {
        q: "¿Puedo ver una prueba antes de que se produzca?",
        a: "Sí. Te enviamos una prueba digital antes de producir y nada se produce hasta que la apruebas.",
      },
      {
        q: "¿Trabajan con planners y organizadoras de eventos?",
        a: "Sí. Puedes pedir los dulceros para el evento de tu cliente, con prueba digital y trato directo por WhatsApp. El pedido mínimo es de 10 piezas.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Puedo recoger mi pedido en Guadalajara?",
        a: `Sí. En la zona metropolitana de Guadalajara puedes recoger en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca por $${CASABLANCA_PRICE}.`,
      },
    ],
  },
  {
    slug: "dulceros-navidenos-personalizados",
    title: "Dulceros navideños personalizados: para posadas, la escuela y el intercambio",
    metaTitle: "Dulceros navideños personalizados para posadas",
    description:
      "Dulceros navideños personalizados para posadas, la escuela y el intercambio: diseños, qué poner dentro, cuántos pedir y cuándo ordenarlos.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-29",
    intro:
      "Las posadas se celebran del 16 al 24 de diciembre, y entre festivales de la escuela, convivios de la oficina e intercambios, el dulcero navideño personalizado se vuelve el detalle que se ve pensado. Con el nombre de quien lo recibe, convierte el clásico aguinaldo de dulces en un recuerdo. Esta guía cubre diseño, usos, cantidades y, sobre todo, con cuánto tiempo pedirlos.",
    sections: [
      {
        heading: "Qué dulcero navideño personalizado elegir",
        body: [
          "Un dulcero navideño personalizado funciona mejor con el nombre de quien lo recibe y una temática sencilla de la temporada, como rojo y verde con dorado, pinos o nieve. Sirve para posadas, el salón de clases o un intercambio, y llega armado y vacío para que tú elijas qué lleva dentro.",
          "Los clásicos funcionan: rojo y verde con detalles dorados, nieve y pinos, estilo nórdico en blanco y rojo, o una temática infantil con Santa, renos y muñecos de nieve. Para la escuela va el nombre del grupo o del salón; para una posada familiar, el apellido de la familia o el nombre de cada niño.",
          `Nuestro [dulcero personalizado](/productos/${DULCERO}) es tipo lunch box, con asa, e incluye nombre y temática.`,
        ],
      },
      {
        heading: "Dulceros navideños para posadas y aguinaldos",
        body: [
          "En una posada, el dulcero tipo lunch box con asa reemplaza la bolsa de aguinaldo tradicional: cabe una buena porción de dulces, cacahuates, colación o mandarinas pequeñas y los niños lo cargan fácil mientras rompen la piñata. Llega armado, así que el día de la posada solo lo llenas.",
          "Mide 15.7 × 11.7 × 9.9 cm. Muchas oficinas, escuelas y familias han optado por simplificar sus posadas y reducir el gasto, y un detalle compacto con nombre encaja bien con esa idea.",
        ],
      },
      {
        heading: "Dulceros navideños para el salón de clases",
        body: [
          "Para un salón, lo más sencillo es un solo diseño para todo el grupo, con el nombre del salón o de la escuela y una temática navideña. Pides un dulcero por alumno, y como el mínimo es de 10 piezas, el número se ajusta a la medida de tu grupo.",
          "Antes de comprar el relleno, pregunta a la escuela o a la asociación de padres si hay reglas sobre dulces o alergias en el grupo. Para ideas de relleno por edad, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Dulceros navideños para un intercambio",
        body: [
          "Para un intercambio, el dulcero personalizado es un detalle compacto con el nombre de quien lo recibe. Antes de pedir, el grupo debe acordar cuántos participantes hay y qué monto se maneja; como el mínimo es de 10 piezas, funciona mejor en intercambios de oficina, familia o salón con varias personas.",
        ],
      },
      {
        heading: "Dulceros navideños para empresas y oficinas",
        body: [
          "Para el convivio de una oficina o un negocio, usa los colores de tu marca con un detalle navideño y tu logo. El dulcero se ve festivo sin perder tu imagen, y la personalización puede incluir el nombre de tu empresa, el de cada invitado o una temática de fin de año.",
          "Si organizas un evento con clientes o equipo, revisa la guía de [dulceros para eventos empresariales](/blog/dulceros-para-eventos-empresariales). Para empaques o bolsas del mismo evento, mira las [etiquetas navideñas personalizadas](/blog/etiquetas-navidenas-personalizadas).",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas, así que pides el número exacto de invitados o alumnos. 10 dulceros son $${dulceroTotal(10)}, 20 son $${dulceroTotal(20)} y 30 son $${dulceroTotal(30)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.`,
          `Un salón de 30 alumnos pide 30 dulceros; una posada de 20 invitados, 20. Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
        ],
      },
      {
        heading: "Cuándo pedir dulceros navideños para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional (o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara). Como las posadas son del 16 al 24 de diciembre, lo más seguro es pedir en noviembre.`,
          "Si ya tienes la fecha de tu posada o de tu festival, cuenta hacia atrás desde ese día con los plazos de arriba.",
        ],
      },
      {
        heading: "Cómo pedir tu dulcero personalizado",
        body: [
          "Para pedir, mándanos por WhatsApp cuántos dulceros necesitas, el nombre que llevará cada uno, la temática o los colores que quieres y, si aplica, tu logo. Te enviamos una prueba digital antes de producir, y nada se produce hasta que la apruebas.",
          `Puedes ver el [dulcero personalizado](/productos/${DULCERO}) y sumar [stickers de vinil](/productos/stickers-vinil-impermeable) del mismo diseño como detalle dentro. Si estás en Zapopan o Guadalajara, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["etiquetas-navidenas-personalizadas", "dulceros-para-eventos-empresariales", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "buen-fin-2026-stickers-y-dulceros-personalizados"],
    sources: [
      {
        label: "Cuándo empiezan las posadas 2025 en México y cuánto cuesta hacer una posada (InformaBTL)",
        url: "https://www.informabtl.com/cuando-empiezan-las-posadas-2025-en-mexico-cuanto-cuesta-hacer-una-posada/",
      },
    ],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero navideño personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, del grupo o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuánto mide el dulcero?",
        a: "Es tipo lunch box, con asa, y mide 15.7 × 11.7 × 9.9 cm. Te llega armado.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Cuándo son las posadas?",
        a: "Las posadas se celebran del 16 al 24 de diciembre, por eso conviene hacer el pedido en noviembre.",
      },
    ],
  },
  {
    slug: "dulceros-para-dia-del-nino",
    title: "Dulceros para Día del Niño: ideas para el salón, la escuela y la familia",
    metaTitle: "Dulceros para Día del Niño: ideas y cómo pedirlos",
    description:
      "Dulceros personalizados para el Día del Niño (30 de abril): diseños para el salón, reglas escolares, qué poner dentro, cuántos pedir y cuándo.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-30",
    intro:
      "El 30 de abril es el Día del Niño en México, y maestras, mamás del comité y familias buscan darle algo especial a cada niño. Un dulcero con el nombre de cada niño o del grupo se siente mucho más especial que una bolsa genérica. Aquí tienes cómo elegir el diseño, qué revisar con la escuela, qué poner dentro, cuántos pedir y cuándo hacerlo.",
    sections: [
      {
        heading: "Dulceros para Día del Niño: qué diseño funciona en el salón",
        body: [
          "Para el salón funciona un solo diseño para todo el grupo, con el nombre de la escuela o del grupo y un mensaje como Feliz Día del Niño. Una temática neutra, como colores brillantes, juegos o animales, sirve igual para niños y niñas. Llega armado y vacío, para que tú elijas qué lleva dentro.",
          `Nuestro [dulcero personalizado](/productos/${DULCERO}) es tipo lunch box, con asa, y la personalización incluye nombre y temática. Si el grupo es pequeño, coméntanos al cotizar si quieres el nombre de cada alumno en su dulcero y revisamos contigo cómo organizar la lista.`,
          "Para una fiesta familiar, el mismo diseño con el nombre del festejado se siente más personal; mira más [ideas para fiesta infantil](/blog/ideas-de-dulceros-para-fiesta-infantil). Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "El Día del Niño y las reglas de la escuela",
        body: [
          "Según una nota de 2025, los lineamientos de la SEP prohíben vender dentro de los planteles alimentos y bebidas con sellos de advertencia. La regla habla de venta, y las fuentes consultadas no mencionan regalos ni dulceros enviados por las familias. Por eso conviene preguntar a la escuela qué permite antes de comprar los dulces.",
          "La SEP reiteró esa restricción en un comunicado del 9 de abril de 2025, dentro de la estrategia Vida saludable, vive feliz, que según el texto abarca más de 262 mil escuelas públicas y privadas. El 24 de mayo de 2025, la presidenta Sheinbaum reconoció que niñas y niños piden que regresen los dulces a las escuelas, y aun así se mantuvo la restricción por los índices de obesidad infantil.",
          "Si la escuela prefiere menos dulces, el dulcero puede llevar otras cosas, como un juguete pequeño, artículos de papelería o [stickers personalizados](/productos/stickers-vinil-impermeable) del mismo diseño. Confirma siempre con la maestra o la dirección antes de enviar el pedido.",
        ],
      },
      {
        heading: "Qué poner dentro según la edad",
        body: [
          "Los dulces duros, las gomitas y los chicles figuran entre los alimentos con mayor riesgo de atragantamiento en niños pequeños, según la Asociación Española de Pediatría, que los menciona hasta los 3 a 6 años. Para preescolar, elige un detalle que no sea dulce, como un juguete grande o crayolas.",
          "Para primaria, si la escuela lo permite, funcionan bien paletas, chocolates, dulces enchilados, stickers y un juguete pequeño. Revisa con la escuela si hay alumnos con alergias (cacahuate, chocolate) antes de comprar el relleno: es más fácil adaptar todos los dulceros que hacer uno distinto el mismo día.",
          "Si buscas más ideas por edad, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas, así que pides el número exacto de alumnos. 25 dulceros son $${dulceroTotal(25)} y 32 son $${dulceroTotal(32)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.`,
          `Si el comité de padres divide el costo, el precio por niño queda claro desde el principio: $${dulceroUnit} por dulcero. Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca; más detalles en [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).`,
        ],
      },
      {
        heading: "Cuándo pedir los dulceros para el 30 de abril",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara. Pide con tiempo para tener margen de llenar los dulceros antes del 30 de abril.`,
          "Los dulceros te llegan armados, listos para llenar. Si además tienes una graduación cerca, el mismo proveedor puede cubrir ambas fechas; revisa la guía de [dulceros para graduación](/blog/dulceros-para-graduacion).",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "ideas-de-dulceros-para-fiesta-infantil", "dulceros-para-graduacion", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero para el Día del Niño?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Cuándo es el Día del Niño en México?",
        a: "El Día del Niño en México es el 30 de abril.",
      },
      {
        q: "¿Puedo mandar dulces a la escuela?",
        a: "Según una nota de 2025, los lineamientos de la SEP prohíben vender alimentos y bebidas con sellos de advertencia dentro de los planteles. La fuente habla de venta y no menciona regalos, así que lo más seguro es preguntar a la escuela qué permite antes de enviar el pedido.",
      },
      {
        q: "¿Qué dulces no conviene dar a niños pequeños?",
        a: "Los dulces duros, las gomitas y los chicles figuran entre los alimentos con mayor riesgo de atragantamiento en niños pequeños, según la Asociación Española de Pediatría, que los menciona hasta los 3 a 6 años.",
      },
      {
        q: "¿Puedo poner el nombre de cada alumno?",
        a: "Sí. Coméntanos al cotizar si quieres el nombre de cada alumno en su dulcero y revisamos contigo cómo organizar la lista. Antes de producir te enviamos una prueba digital.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
    ],
    sources: [
      {
        label: "Zeta Tijuana: Sheinbaum y SEP mantienen veto a golosinas en escuelas",
        url: "https://zetatijuana.com/2025/07/sheinbaum-y-sep-defienden-chocolate-con-sellos-pero-mantienen-veto-a-golosinas-en-escuelas/",
      },
      {
        label: "Asociación Española de Pediatría: prevención del atragantamiento",
        url: "https://aeped.es/sites/default/files/atragantamiento_csvaep_final.pdf",
      },
    ],
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
    title: "Dulceros para primera comunión Guadalajara y bautizo",
    description:
      "Dulceros para primera comunión Guadalajara y bautizo: cuántos pedir según tus invitados confirmados y cuándo cerrar el pedido, con prueba digital.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-05",
    intro:
      "En un bautizo o una primera comunión, el recuerdo que se llevan los invitados suele ser parte importante de la celebración. Si buscas dulceros para primera comunión en Guadalajara, aquí respondemos cuántos pedir según tu lista, cuándo cerrar el pedido y qué hacer si la lista cambia, además de qué poner dentro, cómo diseñarlo y cuánto cuesta. Es una guía para familias y también para planners que coordinan el detalle de sus clientes.",
    sections: [
      {
        heading: "Dulceros para primera comunión Guadalajara: qué pedir y cuándo",
        body: [
          "Para una primera comunión o un bautizo en Guadalajara conviene un dulcero con el nombre del niño o la niña, el tipo de celebración y la fecha, en la paleta de colores de la fiesta. Llega armado y vacío, así que tú eliges el relleno, y antes de producir revisas una prueba digital.",
          "Es tipo lunch box, con asa. Funciona igual para el recuerdo que se entrega al salir de la iglesia que para la mesa de dulces del salón, y como lleva nombre y fecha, se queda como recuerdo después del evento.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir según tus invitados confirmados",
        body: [
          "Parte de la lista de invitados confirmados, no de la lista de invitaciones enviadas. Antes de contar, decide a quién le toca un dulcero: solo niños, niños y adultos, padrinos y familia cercana. Con esa regla definida, el número de piezas sale directo y el pedido mínimo es de 10 piezas.",
          "Si pides uno por familia en lugar de uno por invitado, cuenta familias confirmadas. Si los padrinos o quienes ayudan en el evento también reciben uno, súmalos aparte para ver el total.",
        ],
      },
      {
        heading: "Cuánto cuesta pedir dulceros para tu lista",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por [dulcero personalizado](/productos/${DULCERO}), con pedido mínimo de 10 piezas. 30 dulceros son $${dulceroTotal(30)} y 50 son $${dulceroTotal(50)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos. Multiplica el precio por pieza por tus invitados confirmados y tendrás el presupuesto de dulceros.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis, y en la zona metropolitana de Guadalajara puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
        ],
        table: {
          headers: ["Primeras 100 piezas", "Total"],
          rows: [
            ["10 dulceros", `$${dulceroTotal(10)} MXN`],
            ["30 dulceros", `$${dulceroTotal(30)} MXN`],
            ["50 dulceros", `$${dulceroTotal(50)} MXN`],
            ["100 dulceros", `$${dulceroTotal(100)} MXN`],
          ],
        },
      },
      {
        heading: "Cuándo cerrar el pedido para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara. Esos días se cuentan desde que apruebas la prueba, así que conviene cerrar pronto nombre, fecha y cantidad.`,
          "Cuenta hacia atrás desde el día en que necesitas los dulceros en la mano y ten confirmada la lista de invitados antes de aprobar la prueba digital.",
        ],
      },
      {
        heading: "Calendario de bautizo y comunión: cuenta desde la misa",
        body: [
          "Si entregas los dulceros al salir de la iglesia, el plazo se cuenta hacia atrás desde la fecha de la misa, no desde la de la fiesta. Si solo los pones en la mesa del salón, tu fecha límite es la de la fiesta. Define primero dónde los entregas.",
          "El Código de Derecho Canónico (canon 867) dice que los padres deben procurar que los niños sean bautizados en las primeras semanas de vida. Por eso, si ya tienes fecha en la parroquia, conviene pedir los dulceros pronto.",
          "Cada parroquia fija su calendario: confirma tu fecha de misa con la tuya antes de cerrar el pedido.",
        ],
      },
      {
        heading: "Qué hacer si la lista de invitados cambia a última hora",
        body: [
          `Si la lista cambia antes de aprobar la prueba digital, escríbenos por WhatsApp y ajustamos la cantidad del pedido. Dentro de las primeras 100 piezas el precio por dulcero es el mismo ($${dulceroUnit} MXN), con mínimo de 10 piezas. Nada se produce hasta que apruebas la prueba.`,
          "Después de aprobarla, los cambios de cantidad dependen del paso en que va tu pedido: escríbenos por WhatsApp cuanto antes y te decimos qué es posible.",
        ],
      },
      {
        heading: "Recuerdos de bautizo para niña",
        body: [
          "Para una niña, el dulcero lleva su nombre y la temática de la celebración en una paleta rosa, beige o la que prefiera la familia. Complementa el detalle con stickers coordinados y revisa la prueba digital antes de aprobarla, para que nombre, fecha y colores queden como los imaginaste.",
        ],
      },
      {
        heading: "Recuerdos de bautizo para niño",
        body: [
          "Para un niño, elige una paleta azul, neutra o del color de la invitación y personaliza el dulcero con su nombre y la fecha. Llega armado y vacío para que la familia elija el relleno, y los stickers del mismo diseño pueden acompañarlo.",
        ],
      },
      {
        heading: "Recuerdos de primera comunión",
        body: [
          "Para primera comunión, el nombre y una temática en blanco o en los colores del evento dan unidad al dulcero y a los stickers. Comparte con nosotros los datos del niño o la niña y los colores de la invitación, y revisa la prueba digital antes de que se produzca.",
        ],
      },
      {
        heading: "Qué poner dentro de un dulcero de bautizo",
        body: [
          "Una guía de mesas de dulces para bodas recomienda mezclar dulces clásicos con algunas opciones especiales y mantener un estilo coherente. Puedes usar chocolates finos, almendras cubiertas, peladillas, mazapanes o galletas decoradas. El dulcero llega armado y vacío, así que tú eliges el relleno y su presupuesto.",
          "Si quieres que dure como recuerdo, agrega un rosario pequeño, una medallita o una vela, o unos [stickers con el nombre](/productos/stickers-vinil-impermeable). Pregunta por alergias antes de comprar si invitas a niños que no conoces bien.",
        ],
      },
      {
        heading: "Cuántos dulces calcular por invitado: una referencia",
        body: [
          "Una guía de mesas de dulces para bodas calcula unos 150 g por invitado en eventos pequeños, unos 100 g en medianos y unos 80 g en grandes. Es una referencia de otro tipo de evento, no una norma de bautizo ni de comunión, así que úsala solo como punto de partida.",
          "Si entregas un dulcero por invitado, el cálculo es por caja y lo que cambia es el relleno que pones dentro. Para más ideas por edad, revisa la [guía de qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Diseños y datos que lleva el dulcero",
        body: [
          "Lo básico es el nombre del niño o la niña, el tipo de celebración (Mi bautizo, Mi primera comunión) y la fecha. Con esos tres datos el dulcero ya funciona como recuerdo, y todo lo demás es opcional: padrinos, una frase corta o el lugar.",
          "Para bautizo, puedes usar tonos pastel con una paloma, una cruz o angelitos. Para primera comunión, blanco con dorado, un cáliz o una cruz sencilla y el nombre en letra elegante. Si tienes la invitación, mándanosla y adaptamos el diseño a esos tonos.",
          "Revisa bien la ortografía de los nombres y la fecha en la prueba digital antes de aprobarla: un error ahí se repite en todas las piezas. Nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Cómo pedirlos",
        body: [
          "Puedes pedirlos desde la tienda en línea eligiendo la cantidad y pagando con tarjeta, OXXO o SPEI, o cotizar primero por WhatsApp si quieres platicar el diseño antes de pagar. En ambos casos recibes una prueba digital antes de que se produzca nada.",
          "Si organizas también una boda, XV años o baby shower, tienes la [guía de dulceros para eventos sociales](/blog/dulceros-para-eventos-sociales-boda-xv-baby-shower). Para decidir cómo entregarlos, compara [cajas, bolsas o vasos](/blog/cajas-bolsas-o-vasos-dulceros-cual-elegir). Si estás en la zona, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuántos dulceros debo pedir para una primera comunión?",
        a: "Parte de los invitados confirmados y define a quién le toca uno: solo niños, niños y adultos, o también padrinos y familia cercana. El pedido mínimo es de 10 piezas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero para bautizo o primera comunión?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Qué pasa si cambia la lista de invitados?",
        a: "Si el cambio llega antes de aprobar la prueba digital, escríbenos por WhatsApp y ajustamos la cantidad. Nada se produce hasta que apruebas la prueba.",
      },
      {
        q: "¿Los dulceros para bautizo y comunión incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o recuerdos que tú elijas.",
      },
      {
        q: "¿Qué datos lleva el dulcero?",
        a: "Lo básico es el nombre del niño o la niña, el tipo de celebración (Mi bautizo, Mi primera comunión) y la fecha. Puedes agregar padrinos o una frase corta. Te mandamos una prueba digital para revisar la ortografía antes de producir.",
      },
      {
        q: "¿Cuántos dulces calcular por invitado?",
        a: "Como referencia de mesas de dulces en bodas, unos 150 g por invitado en eventos pequeños, unos 100 g en medianos y unos 80 g en grandes. Es una estimación de otro tipo de evento, no una norma de bautizo ni de comunión.",
      },
      {
        q: "¿Cuándo se bautiza a un niño según el Código de Derecho Canónico?",
        a: "El canon 867 dice que los padres deben procurar que los niños sean bautizados en las primeras semanas de vida. Por eso conviene pedir los dulceros en cuanto tengas fecha en la parroquia.",
      },
    ],
    sources: [
      {
        label: "Código de Derecho Canónico (Santa Sede): libro IV, canon 867 sobre el bautismo de los niños",
        url: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann834-878_en.html",
      },
      {
        label: "Bodas.net: todo lo que debéis saber antes de montar una candy bar (cantidades, qué poner y montaje)",
        url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-para-eventos-sociales-boda-xv-baby-shower", "que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara", "cajas-bolsas-o-vasos-dulceros-cual-elegir"],
  },
  {
    slug: "dulceros-para-eventos-empresariales",
    title: "Dulceros para eventos empresariales: detalles con el logo de tu empresa",
    metaTitle: "Dulceros para eventos empresariales con tu logo",
    description:
      "Dulceros personalizados con el logo de tu empresa para posadas, aniversarios y eventos con clientes: diseño, cantidades, precio y tiempos de entrega.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Los dulceros no son solo para fiestas infantiles. Con el logo y los colores de tu empresa, una cajita tipo lunch box es un detalle corporativo que se ve cuidado: para la posada de fin de año, el aniversario de la empresa, la bienvenida de nuevos colaboradores o un evento con clientes. Esta guía explica cómo pedir dulceros para eventos empresariales en Guadalajara o con envío a todo México: ocasiones, diseño, qué meter dentro, cantidades, precio y tiempos.",
    sections: [
      {
        heading: "Ocasiones en las que funcionan los dulceros corporativos",
        body: [
          "Los dulceros personalizados funcionan en cualquier evento de empresa donde quieras que cada persona se lleve un detalle con tu marca: posadas, aniversarios, kits de bienvenida, lanzamientos y eventos con clientes. Cada caja lleva el logo y los colores de tu empresa, así que el recuerdo llega a casa o al escritorio.",
          "Estas son las ocasiones donde más sentido tienen: la posada o el convivio de fin de año, el aniversario de la empresa, el kit de bienvenida para nuevos colaboradores, un lanzamiento de producto, un evento con clientes o proveedores, el Día del Niño para los hijos de los empleados y los stands en ferias o expos.",
          "En todos los casos el dulcero cumple dos funciones: es un detalle para la persona y lleva tu marca a su casa o escritorio. A diferencia de una bolsa genérica, una caja con el nombre de tu empresa y un mensaje propio hace que el evento se vea planeado.",
          "Si el evento es para un equipo grande, puedes dar un dulcero por persona. Si es una cena con clientes, uno por lugar en la mesa se ve como parte del montaje.",
        ],
      },
      {
        heading: "Cómo se ve el dulcero con el logo de tu empresa",
        body: [
          "Diseñamos el dulcero con tu logo, los colores de tu identidad y, si quieres, un mensaje corto. Antes de producir te mandamos una prueba digital y nada se produce hasta que la apruebas. Envía tu logo en PNG, PDF, AI o SVG en buena calidad para trabajar con él.",
          "Cada dulcero es una caja tipo lunch box con asa, de cartulina opalina, y mide 15.7 × 11.7 × 9.9 cm. La personalización incluye el nombre y la temática, que en un evento de empresa son tu logo y tus colores, con un mensaje como Gracias por un gran año o Bienvenido al equipo.",
          "Cuando mandes el logo, incluye también los colores de la marca y el texto exacto que quieres. Revisa en la prueba digital la ortografía, el nombre de la empresa y el año del evento, porque es el último paso antes de producir. Si varias personas aprueban, designa a una sola para responder y evitar idas y vueltas.",
          "Para cerrar o complementar el detalle, también puedes pedir stickers con tu logo y usarlos para sellar bolsitas o decorar lo que va dentro.",
        ],
      },
      {
        heading: "Qué meter en un dulcero para un evento de empresa",
        body: [
          "El dulcero llega armado y vacío, así que tú decides qué lleva dentro: dulces, un chocolate, galletas o un detalle de tu marca, como unos stickers con tu logo. Mide 15.7 × 11.7 × 9.9 cm, por lo que conviene armar uno de prueba antes de comprar el relleno de todos.",
          "Algunas ideas: chocolates, galletas, dulces tradicionales mexicanos o botanas, más algo que no sea dulce, como stickers con tu logo o una tarjeta de agradecimiento. Entre 8 y 12 piezas de dulce se ve completo en esta caja.",
          "Pregunta por alergias al equipo o a los invitados (cacahuate y chocolate son las más comunes) y, si hay dudas, prepara también una opción sin esos ingredientes. Para más ideas por tipo de dulce, revisa la guía de qué poner en un dulcero.",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas y sin paquetes cerrados. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Pides el número exacto de invitados o colaboradores.`,
          `Por ejemplo, 18 dulceros para un equipo pequeño son $${dulceroTotal(18)}, 40 son $${dulceroTotal(40)} y 100 son $${dulceroTotal(100)}. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca; en pedidos menores a $${FREE_SHIPPING_THRESHOLD} la recolección cuesta $${CASABLANCA_PRICE}.`,
          "Cuenta a los asistentes confirmados y suma 2 o 3 dulceros extra por si se agrega alguien de último momento. Puedes pagar con tarjeta, OXXO o SPEI. Ten en cuenta que no emitimos factura (CFDI); si tu empresa la necesita, escríbenos antes de pedir.",
          "Para pedidos grandes, escríbenos por WhatsApp antes de pagar: así confirmamos fechas y cualquier detalle de tu evento.",
        ],
      },
      {
        heading: "Tiempos de entrega para un evento corporativo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara. Si la aprobación pasa por varias personas, empieza el pedido con dos o tres semanas de anticipación.`,
          `Sumando el máximo de producción y envío nacional son ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, sin contar lo que tarde tu equipo en aprobar la prueba. Cuenta hacia atrás desde la fecha del evento y deja margen.`,
          "Las posadas se concentran en diciembre; si tu fecha cae en esas semanas, empieza antes. Los dulceros te llegan armados, así que el día del evento solo tienes que llenarlos y acomodarlos.",
        ],
      },
      {
        heading: "Si organizas eventos para empresas: cómo trabajar con nosotros",
        body: [
          "Si organizas eventos para empresas o clientes, puedes pedir por evento: la cantidad exacta, un diseño con la identidad de cada cliente y una prueba digital que se aprueba antes de producir. Para coordinar fechas y detalles, escríbenos por WhatsApp antes de pagar.",
          "Un flujo que funciona: mándanos la fecha del evento, el número de asistentes y el logo; revisa la prueba digital con tu cliente; confirma la cantidad final; y haz el pedido con margen para el envío.",
          "Además de dulceros, cotizamos stickers con logo, tatuajes temporales para eventos e invitaciones personalizadas, para que todo el evento tenga un mismo estilo visual.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo poner el logo de mi empresa en los dulceros?",
        a: "Sí. La personalización incluye nombre y temática: tu logo, tus colores y, si quieres, un mensaje corto. Te mandamos una prueba digital para que la apruebes antes de producir.",
      },
      {
        q: "¿En qué formato mando mi logo?",
        a: "En PNG, PDF, AI o SVG, en buena calidad.",
      },
      {
        q: "¿Cuántos dulceros mínimo puedo pedir?",
        a: "El pedido mínimo es de 10 piezas, sin paquetes cerrados: pides la cantidad exacta de tu evento.",
      },
      {
        q: "¿Cuánto cuestan los dulceros para una empresa?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. Llegan armados y vacíos, listos para que los llenes con lo que elijas.",
      },
      {
        q: "¿Con cuánta anticipación pido los dulceros para una posada?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional. Si la aprobación pasa por varias personas, conviene empezar con dos o tres semanas de anticipación.`,
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Si tu empresa la necesita, escríbenos antes de pedir.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-logo-personalizado"],
    relatedBlogSlugs: [
      "dulceros-navidenos-personalizados",
      "dulceros-para-eventos-sociales-boda-xv-baby-shower",
      "que-poner-en-un-dulcero",
      "como-pedir-invitaciones-personalizadas-para-eventos",
      "tatuajes-temporales-personalizados-para-eventos",
    ],
  },
  {
    slug: "dulceros-para-eventos-sociales-boda-xv-baby-shower",
    title: "Recuerdos para XV años personalizados: dulceros y detalles",
    metaTitle: "Recuerdos para XV años personalizados: dulceros y detalles",
    description:
      "Recuerdos para XV años personalizados: cuántos pedir, cómo combinar el dulcero con la mesa de dulces, tiempos y prueba digital.",
    category: "Guías",
    publishedAt: PUBLISHED,
    intro:
      "Los recuerdos para XV años personalizados se ven mejor cuando son pocos, tienen diseño cuidado y combinan con la fiesta. En bodas, XV años y baby showers, el dulcero puede ser parte de la mesa de dulces o el recuerdo que cada familia se lleva al final. Aquí tienes ideas por evento, cuántos recuerdos pedir, qué poner dentro y con cuánto tiempo hacerlo.",
    sections: [
      {
        heading: "Dulceros para eventos sociales: qué son y cuándo usarlos",
        body: [
          "Un dulcero es un contenedor tipo lunch box, con asa, que llega armado y vacío para que tú elijas el relleno. En eventos sociales sirve de recuerdo o de parte de la mesa de dulces. Va personalizado con nombres, fecha y los colores de la fiesta, y antes de producir recibes una prueba digital.",
          "Lo puedes poner en la mesa para que cada invitado llene el suyo, o entregarlo ya lleno al final del evento. La personalización incluye el nombre y la temática que elijas, así que el mismo formato sirve para una boda elegante, una fiesta de XV años o un baby shower.",
        ],
      },
      {
        heading: "Boda: dulceros con los nombres de los novios",
        body: [
          "Para una boda funciona el dulcero con los nombres de los novios y la fecha, en los colores de la celebración. Puede ir en la mesa de dulces para que cada invitado llene el suyo, o ya lleno en cada lugar como recuerdo. Antes de producir te enviamos una prueba digital para que la apruebes.",
          "Los colores que más combinan con una boda son blanco con dorado, verde salvia, terracota o el tono de las flores. Si quieres que se vea parte de la decoración, usa la misma paleta de la invitación y de los centros de mesa.",
          "Si en la boda hay niños, un dulcero con una temática más divertida para la mesa infantil es un detalle que los papás agradecen.",
        ],
      },
      {
        heading: "XV años: dulceros con el nombre de la quinceañera",
        body: [
          "Para XV años, el dulcero lleva el nombre de la quinceañera, la fecha y el color o la temática de su fiesta, sea elegante, floral o el tema que elija. Puedes pedirlo para todos los invitados o solo para la corte y los chambelanes, según tu presupuesto.",
          "Si pides solo para la corte, recuerda que el pedido mínimo es de 10 piezas. Si es para todos los invitados, cuenta primero la lista final y suma uno o dos extra.",
        ],
      },
      {
        heading: "Recuerdos para XV años personalizados: qué opciones hay",
        body: [
          "Para recuerdos de XV años personalizados, las ideas que propone El Imparcial son imanes con foto, llaveros, mini marcos, velas, bolsitas de dulces, abanicos y pulseras. El dulcero con el nombre de la quinceañera aporta algo distinto: es un recuerdo con diseño propio, que además puede formar parte de la mesa de dulces.",
          `Yume produce el [dulcero personalizado](/productos/${DULCERO}) con nombre, fecha y temática de tu fiesta. Los otros detalles de esa lista, como imanes o llaveros, los resuelves con otro proveedor. Si quieres sumar un detalle pequeño dentro del dulcero, puedes pedir [stickers personalizados de vinil](/productos/stickers-vinil-impermeable) con el mismo diseño.`,
        ],
      },
      {
        heading: "Cuántos recuerdos pedir para tus invitados de XV años",
        body: [
          "No hace falta un recuerdo por persona: El Imparcial recomienda uno por familia o pareja, más algunos extras. Su ejemplo es de 100 invitados, para los que bastan entre 60 y 70 recuerdos. Es una referencia de un solo artículo, así que cuenta tu lista final por familias y parejas antes de decidir.",
          `Como ejemplo, 65 dulceros son $${dulceroTotal(65)} MXN con el precio de las primeras 100 piezas. El pedido mínimo es de 10 piezas, así que también puedes pedir un lote aparte para la corte, los chambelanes o la familia cercana.`,
        ],
      },
      {
        heading: "Menos piezas, mejor diseño: qué personalizar",
        body: [
          "El Imparcial aconseja pocas piezas bonitas y útiles antes que muchos detalles que nadie usará, y que el recuerdo represente a la quinceañera. En un dulcero eso se traduce en personalizar su nombre, la fecha y el color o temática de la fiesta, que es lo que incluye nuestra personalización.",
          "Ese mismo artículo sugiere pedir una muestra antes cuando el recuerdo lleva foto. En Yume, antes de producir recibes una prueba digital y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Cómo combinar el dulcero con la mesa de dulces y el tema de la fiesta",
        body: [
          "Usa en el dulcero la misma paleta de la invitación y de la decoración, y colócalo en la mesa de dulces para que cada invitado llene el suyo o entrégalo ya lleno al final. Así el recuerdo se ve como parte de la fiesta planeada, no como un detalle aparte.",
          "Mándanos una foto de la invitación o de la decoración y adaptamos el diseño a esos colores. Para elegir el relleno según el tipo de evento, revisa qué poner en un dulcero.".replace("revisa qué poner en un dulcero", "revisa [qué poner en un dulcero](/blog/que-poner-en-un-dulcero)"),
        ],
      },
      {
        heading: "Baby shower y revelación de género",
        body: [
          "Para baby shower, el dulcero lleva el nombre del bebé, o Baby y el apellido si aún no tiene nombre, en tonos pastel. Para una revelación de género sirve un diseño neutro con la pregunta niño o niña, que funciona antes y después de la sorpresa.",
          "Es un detalle fácil de repartir al final de la fiesta, y los invitados se llevan un recuerdo con el nombre del bebé.",
        ],
      },
      {
        heading: "Qué poner dentro de un dulcero para tu evento",
        body: [
          "El dulcero llega vacío, así que tú decides el relleno. Funcionan los dulces tradicionales, galletas, chocolates y un detalle pequeño como stickers. Pregunta por alergias antes de comprar y arma uno de prueba para calcular cuánto necesitas de cada cosa.",
          "Si buscas más ideas por edad y por tipo de evento, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero). Para boda conviene elegir dulces que aguanten bien fuera del refrigerador durante la fiesta.",
        ],
      },
      {
        heading: "Si organizas eventos: cómo pedir dulceros para tus clientes",
        body: [
          "Si organizas eventos, define con tu cliente nombres, fecha, colores y cantidad antes de pedir. Te enviamos una prueba digital para que la apruebe, y nada se produce hasta entonces. Puedes tratar todo directo por WhatsApp. El pedido mínimo es de 10 piezas, así que puedes pedir por evento.",
          "Lo más útil es tener a la mano los colores de la invitación o de la decoración para pedir el diseño en la misma paleta, y comentárnoslo por WhatsApp. Si tu cliente tiene más de un evento, como bautizo y primera comunión, revisa también los [dulceros para bautizo y primera comunión](/blog/dulceros-para-bautizo-y-primera-comunion).",
        ],
      },
      {
        heading: "Cuántos dulceros pedir y cuánto cuestan",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas. 50 invitados son $${dulceroTotal(50)} y 80 son $${dulceroTotal(80)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis. Suma uno o dos extra por si llega alguien más.`,
          `Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca. Para saber más sobre entregas en la ciudad, revisa los [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).`,
        ],
      },
      {
        heading: "Cuándo hacer el pedido para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional. Para XV años, el orden es: diseño, prueba digital, aprobación, producción y entrega antes del evento. El Imparcial recomienda encargar con varias semanas de anticipación.`,
          `Si recoges en una sucursal Casa Blanca de Guadalajara, se suma ${PICKUP_EXTRA_DAYS} día hábil. Para eventos grandes conviene pedirlos con tres o cuatro semanas de anticipación. Deja ese margen para ajustar el diseño con calma y confirmar la cantidad final de invitados antes de aprobar la prueba.`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["dulceros-para-bautizo-y-primera-comunion", "que-poner-en-un-dulcero", "dulceros-para-eventos-empresariales", "dulceros-personalizados-guadalajara"],
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
        a: "El nombre (de los novios, de la quinceañera, del bebé o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuántos dulceros debo pedir para mi evento?",
        a: "Pide el número de invitados que recibirán uno y suma uno o dos extra. El pedido mínimo es de 10 piezas, así que también puedes pedir solo para la corte, la mesa infantil o un grupo pequeño.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Cuántos recuerdos necesito para 100 invitados de XV años?",
        a: "No hace falta uno por persona. El Imparcial recomienda uno por familia o pareja más algunos extras y da el ejemplo de 60 a 70 recuerdos para 100 invitados. Es una referencia de un solo artículo: cuenta tus familias y parejas antes de decidir.",
      },
      {
        q: "¿Con cuánta anticipación pido los recuerdos de XV años?",
        a: `El Imparcial recomienda encargar con varias semanas de anticipación. En Yume, la producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más el envío o la recolección. Para eventos grandes conviene pedir con tres o cuatro semanas.`,
      },
      {
        q: "¿Qué puedo personalizar en un dulcero para XV años?",
        a: "El nombre de la quinceañera, la fecha y el color o la temática de la fiesta. Antes de producir recibes una prueba digital y nada se produce hasta que la apruebas.",
      },
    ],
    sources: [
      {
        label: "El Imparcial: Recuerdos para 15 años, ideas originales con fotos",
        url: "https://www.elimparcial.com/locurioso/2026/05/14/recuerdos-para-15-anos-ideas-originales-con-fotos-que-las-quinceaneras-guardaran-para-siempre/",
      },
    ],
  },
  {
    slug: "que-poner-en-un-dulcero",
    title: "Qué poner en un dulcero: dulces, cuántos y cómo",
    metaTitle: "Qué poner en un dulcero: dulces y cuántos por invitado",
    description: "Qué poner en un dulcero: qué dulces elegir, cuántos por invitado, cuántas piezas caben y cómo repartirlos por altura, color y tipo de evento.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-03",
    intro:
      "Un dulcero se ve completo con 8 a 12 piezas: un chocolate, una gomita o paleta, un dulce enchilado o ácido, un dulce tradicional mexicano y una botana chica, más un detalle que no sea dulce, como stickers. Abajo tienes qué poner en un dulcero por tipo de dulce y por edad, cuántas piezas caben según el tamaño, cuánto repartir por invitado en una mesa de dulces y cómo acomodarlo por altura y color.",
    sections: [
      {
        heading: "Qué poner en un dulcero y cuántos por invitado",
        body: [
          "Un dulcero individual se ve completo con 8 a 12 piezas de dulce más un detalle que no sea dulce, y se entrega uno por invitado. Es una estimación de Yume para una caja tipo lunch box de 15.7 × 11.7 × 9.9 cm, no una norma. Una mesa de dulces abierta se calcula distinto.",
          `Si aún no tienes la caja, mira nuestros [dulceros personalizados](/productos/${DULCERO}): llegan armados y vacíos, y tú eliges qué lleva dentro.`,
        ],
      },
      {
        heading: "Cuántas piezas caben según el tamaño del dulcero",
        body: [
          "Como estimación de Yume, un dulcero chico lleva de 5 a 7 piezas, uno mediano de 8 a 12 y uno grande de 13 a 18. Son cifras pensadas para que la caja se vea llena sin apretarse. No vienen de una fuente externa, así que arma uno de prueba antes de comprar todo.",
          "Con 30 invitados necesitas 30 dulceros: en el tamaño mediano son entre 240 y 360 piezas de dulce. Ejemplo para un dulcero mediano de 10 piezas: 2 chocolates, 3 gomitas, 2 dulces tradicionales, 2 enchilados o ácidos y 1 botana. Es una estimación para guiarte, no una regla fija.",
        ],
        table: {
          headers: ["Tamaño", "Piezas de dulce (estimación de Yume)", "Tipos de dulce"],
          rows: [
            ["Chico", "5 a 7", "3 tipos, y un sticker si cabe"],
            ["Mediano (lunch box de 15.7 × 11.7 × 9.9 cm)", "8 a 12, más un detalle", "4 o 5 tipos"],
            ["Grande", "13 a 18, más un detalle", "5 tipos y una botana"],
          ],
        },
      },
      {
        heading: "Qué poner en un dulcero: lista por tipo de dulce",
        body: [
          "Mezcla texturas y sabores en vez de repetir uno solo: algo de chocolate, algo suave, algo enchilado o ácido y algo tradicional. Así cada invitado encuentra algo que le gusta y la caja se ve variada al abrirla, sin importar cuántas piezas lleve.",
          "Chocolates: barritas pequeñas, bolitas o monedas de chocolate. Son los que casi nadie rechaza.",
          "Gomitas y malvaviscos: suaves, de colores y fáciles de repartir en bolsitas.",
          "Dulces tradicionales mexicanos: mazapanes, cocadas, tamarindos, palanquetas y dulces de leche. Le dan sabor local al dulcero.",
          "Enchilados y ácidos: paletas con chile, tiras o gomitas enchiladas y dulces de tamarindo.",
          "Paletas y chicles: llenan espacio con poco volumen.",
          "Botanas saladas: una bolsita de papitas, palomitas o cacahuates japoneses (solo si no hay alergias) equilibra tanto dulce.",
          "Un detalle sin azúcar: stickers, una pulsera, burbujas o una libreta chica. Es lo que se conserva cuando el dulce ya se acabó.",
          "Si quieres un toque más especial, la guía de candy bar de Bodas.net recomienda combinar los dulces clásicos con algunos especiales, como gomitas, mini donas, chocolates, galletas decoradas, cake pops o mini brownies.",
        ],
      },
      {
        heading: "Qué poner en un dulcero según la edad de los invitados",
        body: [
          "Ajusta el relleno a la edad: para niños de 1 a 5 años, dulces suaves en porciones chicas; para 6 a 12, clásicos mexicanos como paletas, mazapanes y gomitas; para adolescentes y adultos, chocolates de mejor calidad, botanas y un detalle con logo si es evento de empresa.",
          "De 1 a 5 años: elige dulces suaves y seguros, de preferencia en porciones chicas, como gomitas, malvaviscos, galletas, chocolates pequeños, pasitas o fruta deshidratada. Evita a esta edad los dulces duros, los cacahuates enteros y los juguetes con piezas pequeñas, y pregunta a los papás si hay alergias. Como detalle: crayolas, burbujas, una libreta para colorear pequeña o stickers grandes.",
          "De 6 a 12 años: funcionan muy bien los clásicos mexicanos como paletas, chicles, dulces enchilados, tamarindos, mazapanes, chocolates, papitas pequeñas y gomitas. Como detalle, un juguete pequeño, una pulsera, una pelota saltarina o stickers del mismo personaje de la fiesta.",
          "Adolescentes y adultos: conviene priorizar opciones ligeras y de mejor calidad, como chocolates finos, botanas, dulces gourmet, mini botellitas de salsa, un llavero o un detalle con el logo si es un evento de empresa.",
        ],
      },
      {
        heading: "Cuántos gramos de dulce por invitado en una mesa de dulces",
        body: [
          "Para una mesa de dulces, Bodas.net propone bajar los gramos por invitado según crece la boda: unos 150 g en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Es una regla práctica que escala con los invitados, no una cifra única ni una norma.",
          "Como ejemplo, la misma guía da unos 10 kg de dulces como punto de partida para 100 invitados cuando la mesa es sobre todo de dulces. Esa cantidad se puede reducir si añades mini brownies, donas o chocolates.",
        ],
        table: {
          headers: ["Tamaño de la boda", "Gramos de dulce por invitado (referencia de Bodas.net)"],
          rows: [
            ["Pequeña", "Unos 150 g"],
            ["Mediana", "Unos 100 g"],
            ["Grande", "Unos 80 g"],
          ],
        },
      },
      {
        heading: "Cuántos frascos necesitas para una mesa de dulces",
        body: [
          "Bodas.net traduce los gramos a contenedores con frascos medianos: de 4 a 6 para unos 50 invitados, de 10 a 12 para 50 a 150 invitados y de 15 a 16 para unos 200. Sirven como referencia visual para repartir los dulces por variedad, no como medida exacta.",
        ],
        table: {
          headers: ["Invitados", "Frascos medianos (referencia de Bodas.net)"],
          rows: [
            ["Unos 50", "4 a 6"],
            ["50 a 150", "10 a 12"],
            ["Unos 200", "15 a 16"],
          ],
        },
      },
      {
        heading: "Cómo repartir los dulces por altura y color",
        body: [
          "Para que la mesa se vea planeada, la guía de Bodas.net recomienda recipientes transparentes, charolas a distintas alturas, bases escalonadas, cajas de madera y elevadores. Así los dulces se lucen mejor y la mesa gana volumen sin amontonar todo en un solo nivel.",
          "Reparte las piezas en partes parecidas, sin dejar que un solo dulce domine, y mezcla texturas (cremoso, crujiente, esponjoso) y colores en cada nivel.",
        ],
      },
      {
        heading: "Qué ajustar si es boda, XV o bautizo",
        body: [
          "En una boda, un XV o un bautizo, el dulcero se vuelve un detalle de mesa y no solo un relleno infantil. Puede llevar el nombre y la temática que elijas, y conviene cuidar el relleno: en bodas y XV años funcionan bien las almendras cubiertas o los chocolates finos.",
          "Si además armas una mesa de dulces, la guía de Bodas.net indica que suele ir cerca de la pista de baile o abrirse después del banquete. Los invitados toman pequeñas cantidades durante la fiesta, porque la mesa complementa el postre y no lo sustituye.",
        ],
      },
      {
        heading: "Alergias: qué cuidar antes de llenar el dulcero",
        body: [
          "Si invitas a niños que no conoces bien, pregunta por alergias antes de comprar: el cacahuate y el chocolate son de las más comunes. Ten algunos dulceros sin esos ingredientes y márcalos por separado, para que ningún invitado tenga que adivinar qué puede comer.",
        ],
      },
      {
        heading: "Cuánto cuesta el dulcero y qué más puedes revisar",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero personalizado, con pedido mínimo de 10 piezas. Llega armado y vacío, así que tú eliges qué lleva dentro. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos. Antes de producir te enviamos una prueba digital para que apruebes el diseño.`,
          "Como detalle sin azúcar, puedes sumar [stickers de vinil](/productos/stickers-vinil-impermeable) con el nombre o el personaje de la fiesta. Para ideas de relleno en una fiesta de niños, revisa [dulceros para fiesta infantil](/blog/ideas-de-dulceros-para-fiesta-infantil). Para decidir entre caja, bolsa o vaso, compara [cajas, bolsas o vasos](/blog/cajas-bolsas-o-vasos-dulceros-cual-elegir). Y si estás en Guadalajara, mira los [dulceros en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
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
        a: "Entre 8 y 12 piezas de dulce más un detalle se ve completo en una caja tipo lunch box de 15.7 × 11.7 × 9.9 cm. Es una estimación de Yume: arma uno de prueba antes de comprar todo.",
      },
      {
        q: "¿Cuántas piezas caben en un dulcero chico, mediano y grande?",
        a: "Es una estimación de Yume, no una fuente externa: de 5 a 7 piezas en uno chico, de 8 a 12 en uno mediano y de 13 a 18 en uno grande.",
      },
      {
        q: "¿Cuántos gramos de dulce calculo por invitado en una mesa de dulces?",
        a: "Según la guía de candy bar de Bodas.net, unos 150 g por invitado en bodas pequeñas, unos 100 g en medianas y unos 80 g en grandes. Es una regla práctica, no una norma.",
      },
      {
        q: "¿Cuántos kilos de dulce necesito para 100 invitados?",
        a: "Bodas.net da unos 10 kg como punto de partida para 100 invitados si la mesa es sobre todo de dulces. Puedes reducirlo si añades mini brownies, donas o chocolates.",
      },
      {
        q: "¿Cuántos frascos necesito para una mesa de dulces?",
        a: "Como referencia de Bodas.net, de 4 a 6 frascos medianos para unos 50 invitados, de 10 a 12 para 50 a 150 invitados y de 15 a 16 para unos 200.",
      },
      {
        q: "¿Qué dulces son seguros para niños de 1 a 5 años?",
        a: "Gomitas suaves, malvaviscos, galletas, chocolates pequeños, pasitas o fruta deshidratada. Evita dulces duros, cacahuates enteros y juguetes con piezas pequeñas.",
      },
      {
        q: "¿Qué pongo en el dulcero además de dulces?",
        a: "Stickers con el nombre o el personaje de la fiesta, crayolas, burbujas, una pulsera o una pelota saltarina.",
      },
      {
        q: "¿Cómo evito problemas de alergias en un dulcero?",
        a: "Pregunta a los papás si no conoces bien a los invitados. El cacahuate y el chocolate son de las más comunes: si hay dudas, prepara algunos dulceros sin esos ingredientes y márcalos por separado.",
      },
      {
        q: "¿Cuánto cuesta un dulcero personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp.`,
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["ideas-de-dulceros-para-fiesta-infantil", "cajas-bolsas-o-vasos-dulceros-cual-elegir", "dulceros-personalizados-guadalajara"],
    sources: [
      {
        label: "Bodas.net: todo lo que debéis saber antes de montar una candy bar",
        url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448",
      },
    ],
  },
  {
    slug: "dulceros-de-halloween",
    title: "Dulceros de Halloween personalizados para niños y fiestas",
    metaTitle: "Dulceros de Halloween personalizados para niños",
    description:
      "Dulceros de Halloween personalizados para fiesta, salón o pedir dulces: ideas de diseño, qué poner dentro, precio y cuánto tardan en llegar antes del 31 de octubre.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Halloween es una de las fechas en las que más se buscan dulceros en México, junto con Navidad y el Día del Niño. Un dulcero personalizado con el nombre del niño sirve para la fiesta del salón, para repartir en una fiesta de disfraces o incluso para salir a pedir dulces. Aquí tienes ideas de diseño, qué poner dentro, cuánto cuesta y los tiempos reales para que llegue antes del 31 de octubre.",
    sections: [
      {
        heading: "Qué dulcero de Halloween conviene",
        body: [
          "Para Halloween conviene un dulcero con el nombre de quien lo recibe y una temática de la temporada, en naranja, morado y negro. Sirve para la fiesta del salón, un cumpleaños de disfraces o salir a pedir dulces, y llega armado y vacío para que tú elijas qué lleva dentro.",
          "Nuestro dulcero es tipo lunch box, con asa, y la personalización incluye nombre y temática. El asa lo hace fácil de cargar, sea en una fiesta o de casa en casa.",
        ],
      },
      {
        heading: "Ideas de diseño",
        body: [
          "Los clásicos son calabazas, fantasmas, murciélagos, gatos negros y telarañas en naranja, morado y negro. Para los más pequeños funciona mejor una versión tierna, como fantasmitas sonrientes o calabazas con cara, que una que dé miedo. Si el dulcero lleva el nombre del niño, además se vuelve su caja para pedir dulces.",
          "Si ya tienes el disfraz o la decoración de la fiesta, mándanos una foto y adaptamos los colores del diseño. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Para la fiesta del salón o de la oficina",
        body: [
          "Para el salón, un mismo diseño con el nombre del grupo o de la escuela; para una oficina o negocio, un diseño de Halloween con tu logo. Cada uno se personaliza con nombre y temática, y puedes pedir la cantidad exacta de alumnos o invitados desde 10 piezas, sin paquetes cerrados.",
          "Suma 1 o 2 dulceros extra por si llega un invitado de último momento o se echa a perder alguno al llenarlos.",
        ],
      },
      {
        heading: "Qué poner dentro de un dulcero de Halloween",
        body: [
          "El dulcero llega vacío, así que tú decides el relleno. Funcionan los dulces envueltos de la temporada, galletas, gomitas y un detalle pequeño, como stickers del mismo diseño. Para niños muy pequeños, la FDA recomienda quitar chicles, cacahuates, dulces duros y juguetes pequeños, que son riesgo de asfixia.",
          "La FDA también indica revisar la etiqueta de los dulces envueltos si el niño tiene alguna alergia alimentaria. Si no conoces bien a los invitados, pregunta a los papás antes de comprar y arma un dulcero de prueba para calcular cuántos dulces necesitas. Para más ideas por edad, revisa la guía de qué poner en un dulcero.",
        ],
      },
      {
        heading: "Precio y cuántos pedir",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas, así que pides exactamente el número de invitados o alumnos. 10 dulceros son $${dulceroTotal(10)}, 20 son $${dulceroTotal(20)} y 30 son $${dulceroTotal(30)}. Arriba de 100 piezas es precio mayoreo: escríbenos por WhatsApp y te cotizamos.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca.`,
        ],
      },
      {
        heading: "Cuándo pedirlos para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional (o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara). Sumando el máximo de ambos son ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} días hábiles, así que un pedido de los últimos días de octubre puede no llegar al 31.`,
          "Si tu evento es después del 31, por ejemplo un festival escolar o un convivio de noviembre, todavía estás a tiempo: un diseño de temporada en naranja y morado también sirve para esas fechas. Para noviembre revisa la guía de dulceros para Día de Muertos, y si ya piensas en posadas, la de dulceros navideños.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "ideas-de-dulceros-para-fiesta-infantil", "dulceros-dia-de-muertos-noviembre", "dulceros-navidenos-personalizados", "dulceros-personalizados-guadalajara"],
    faq: [
      {
        q: "¿Los dulceros de Halloween incluyen dulces?",
        a: "No. El dulcero llega armado y vacío, listo para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Cuánto cuesta un dulcero de Halloween personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del niño, del grupo o de tu empresa) y la temática que elijas, incluido el logo de tu marca. Te mandamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional, o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara.`,
      },
      {
        q: "¿Qué no debo poner en el dulcero de un niño muy pequeño?",
        a: "La FDA recomienda quitar chicles, cacahuates, dulces duros y juguetes pequeños de la bolsa de los niños muy pequeños, porque son riesgo de asfixia.",
      },
      {
        q: "¿Qué hago si un niño tiene alergias?",
        a: "Según la FDA, si un niño tiene alergia alimentaria hay que revisar la etiqueta para confirmar que el alérgeno no esté presente. Pregunta a los papás antes de armar los dulceros.",
      },
    ],
    sources: [
      {
        label: "FDA: Halloween Food Safety Tips for Parents",
        url: "https://www.fda.gov/food/buy-store-serve-safe-food/halloween-food-safety-tips-parents",
      },
    ],
  },
  {
    slug: "cajas-bolsas-o-vasos-dulceros-cual-elegir",
    title: "Cajas, bolsas o vasos dulceros: cuál conviene para tu fiesta",
    metaTitle: "Bolsas, cajas o vasos para dulceros: cuál elegir",
    description:
      "Cajas, bolsas, vasos o morralitos para dulceros: compara presentación, personalización, precio y qué conviene según tu fiesta o evento.",
    category: "Guías",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Cuando buscas dulceros aparecen muchas opciones: bolsas de celofán o de papel, vasos dulceros de plástico, morralitos de tela y cajitas de cartón. Ninguna es mejor en todo; depende de la ocasión, la edad de los invitados y qué tanto quieres que el dulcero se vea como parte de la decoración. Esta comparación te ayuda a decidir, con el precio, las medidas y los tiempos de nuestra caja personalizada para que compares con datos reales.",
    sections: [
      {
        heading: "Qué comparar antes de decidir",
        body: [
          "Compara cuatro cosas: si se sostiene sola en la mesa, cuánta superficie tienes para personalizar, si llega lista para llenar y cuántas piezas necesitas. Una bolsa o un vaso resuelven la cantidad; una caja resuelve además la presentación. Define primero la ocasión y el número de invitados, y después el formato.",
          "Si el evento tiene mesa de dulces, fotos o una paleta de colores definida, la presentación pesa más. Si el dulcero se entrega en la puerta y se va directo al coche, pesa más que sea sencillo. Con niños pequeños, piensa también en que puedan cargarlo solos.",
        ],
      },
      {
        heading: "Bolsas para dulceros",
        body: [
          "Las bolsas para dulceros son la opción más fácil de conseguir, pero se deforman con el peso, no se sostienen solas en la mesa y casi siempre se personalizan solo con una etiqueta o un sticker al frente. Funcionan para fiestas muy grandes o como relleno dentro de otro dulcero.",
          "Si te quedas con bolsas, un sticker con el nombre y la temática ayuda a que se vean más cuidadas. Puedes revisar nuestros stickers de vinil impermeable para ese detalle.",
        ],
      },
      {
        heading: "Vasos dulceros y morralitos",
        body: [
          "Los vasos dulceros de plástico se reutilizan, pero ocupan espacio, son difíciles de personalizar con nombre y su temática suele ser genérica. Los morralitos de tela se ven bien y se vuelven a usar, aunque cuestan más y ponerles nombre encarece cada pieza. Tiene sentido elegirlos cuando el segundo uso importa más que la presentación.",
          "El punto a vigilar es la mesa: un vaso o un morralito no cubre un diseño completo con el nombre y la temática, así que el resultado depende más de lo que pongas alrededor.",
        ],
      },
      {
        heading: "Cajas dulceras tipo lunch box",
        body: [
          "La caja dulcera tipo lunch box se sostiene sola, se ve ordenada en la mesa de dulces y se personaliza completa: el nombre y la temática ocupan todo el diseño, no solo una etiqueta. Tiene asa para que los niños la carguen y espacio para dulces y un detalle.",
          "En Yume la hacemos de cartulina opalina, de 15.7 × 11.7 × 9.9 cm, con el nombre y la temática que elijas. Te llega armada y vacía, sin dulces, lista para llenar. Antes de producir te enviamos una prueba digital, y nada se produce hasta que la apruebas.",
        ],
      },
      {
        heading: "Para bodas, baby showers, bautizos y otros eventos",
        body: [
          "Para una boda, un baby shower o un bautizo conviene la caja personalizada: el diseño toma los colores del evento y el nombre o la fecha, y se ve como parte de la mesa de dulces. Para planners, es un detalle por evento con prueba digital y trato directo por WhatsApp.",
          "Mándanos una foto de la invitación o de la decoración y adaptamos el diseño a esos colores. Si es para una empresa, puedes sumar tu logo. Si tu evento pide algo distinto a lo que describimos aquí, escríbenos por WhatsApp y lo revisamos contigo antes de que decidas. Para más ideas por ocasión, revisa las guías de dulceros para eventos sociales, para bautizo y primera comunión y para graduación.",
        ],
      },
      {
        heading: "Precio y cuántos pedir",
        body: [
          `Primeras 100 piezas: $${dulceroUnit} MXN por dulcero, con pedido mínimo de 10 piezas. 10 dulceros son $${dulceroTotal(10)}, 20 son $${dulceroTotal(20)} y 30 son $${dulceroTotal(30)}. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Pides el número exacto de invitados, sin paquetes cerrados.`,
          `Desde $${FREE_SHIPPING_THRESHOLD} de compra el envío nacional es gratis. Si estás en la zona metropolitana de Guadalajara, puedes recogerlos por $${CASABLANCA_PRICE} en cualquiera de las ${CASABLANCA_BRANCHES.length} sucursales de paquetería Casa Blanca. Suma 1 o 2 extra por si llega un invitado de último momento.`,
        ],
      },
      {
        heading: "Cuándo pedirlos para que lleguen a tiempo",
        body: [
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional (o ${PICKUP_EXTRA_DAYS} día hábil si recoges en una sucursal Casa Blanca de Guadalajara). Cuenta hacia atrás desde la fecha de tu evento y deja margen para revisar la prueba.`,
          "Si dudas entre formatos, arma un dulcero de prueba con tus dulces antes de pedir todo, para ver cómo se acomoda el relleno. En la guía de qué poner en un dulcero hay una lista por edad.",
        ],
      },
      {
        heading: "Cuál elegir",
        body: [
          "Elige bolsa si necesitas algo sencillo para muchos invitados, vaso o morralito si buscas algo reutilizable, y caja personalizada si quieres que el dulcero combine con la fiesta, lleve el nombre del festejado y se vea como parte de la decoración. Es la opción que más luce en la mesa.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [
      "ideas-de-dulceros-para-fiesta-infantil",
      "que-poner-en-un-dulcero",
      "dulceros-personalizados-guadalajara",
      "dulceros-para-eventos-sociales-boda-xv-baby-shower",
      "dulceros-para-bautizo-y-primera-comunion",
      "dulceros-para-graduacion",
    ],
    faq: [
      {
        q: "¿Qué es mejor para dulceros: caja, bolsa o vaso?",
        a: "Depende de la ocasión. La bolsa es sencilla para grupos grandes, el vaso y el morralito se reutilizan, y la caja personalizada se sostiene sola, lleva nombre y temática en todo el diseño y se ve como parte de la decoración.",
      },
      {
        q: "¿Cuánto cuesta un dulcero personalizado?",
        a: `Primeras 100 piezas: $${dulceroUnit} MXN por pieza, con pedido mínimo de 10. Arriba de 100 piezas es precio mayoreo y se cotiza por WhatsApp. Desde $${FREE_SHIPPING_THRESHOLD} el envío nacional es gratis.`,
      },
      {
        q: "¿Qué medidas y material tiene la caja?",
        a: "Mide 15.7 × 11.7 × 9.9 cm, tiene asa y es de cartulina opalina. Llega armada.",
      },
      {
        q: "¿Los dulceros incluyen dulces?",
        a: "No. La caja llega armada y vacía, lista para llenar con los dulces o detalles que tú elijas.",
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, del grupo o de tu empresa) y la temática que elijas, incluido tu logo si es para un negocio. Te enviamos una prueba digital antes de producir.",
      },
      {
        q: "¿Cuánto tardan en llegar?",
        a: `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional.`,
      },
    ],
  },
  {
    slug: "cuantos-souvenirs-pedir-por-evento",
    title: "Cuántos detalles pedir por evento según el tipo de fiesta",
    description:
      "Cuántos detalles pedir por evento: tabla por tipo de fiesta, fórmula para planners y cuándo cerrar la cifra final de piezas.",
    category: "Guías",
    publishedAt: "2026-11-07",
    modifiedAt: "2026-11-07",
    intro:
      "Si manejas varios eventos a la vez, la pregunta de cuántos detalles pedir por evento aparece en cada uno. Las fuentes abiertas no coinciden: unas cuentan un detalle por invitado y otras uno por pareja o familia. Aquí tienes una tabla por tipo de fiesta, una fórmula que puedes copiar a tu hoja de cálculo y un criterio para cerrar la cifra final.",
    sections: [
      {
        heading: "Cuántos detalles pedir por evento: la regla base",
        body: [
          "La regla base es partir de los invitados confirmados y sumar un margen según el tipo de fiesta. Hacecuentas usa 1,1 detalles por invitado en eventos de adultos, es decir, 10% extra. Otras fuentes cuentan por pareja o familia, así que primero decide cómo contarás y después aplica el margen.",
          "Las fuentes divergen. Una nota de El Imparcial sobre recuerdos para XV años dice que no hace falta uno por persona: sugiere uno por familia o pareja, más algunos extras. Su ejemplo es que para 100 invitados bastan unos 60 o 70 recuerdos. Es un ejemplo de esa nota, no una regla para todos los eventos.",
        ],
      },
      {
        heading: "Tabla por tipo de fiesta: cómo contar y qué margen usar",
        body: [
          "La tabla resume cómo contar y qué margen usar en seis tipos de evento. Solo hay cifras de margen donde una fuente abierta las da: adultos y cumpleaños infantil. En el resto, el margen es criterio tuyo y de tu cliente, y lo confirmas antes de cerrar el pedido.",
          "El margen cubre confirmaciones tardías, piezas dañadas y el reproceso de la prueba digital. Son cifras de referencia de fuentes abiertas, no una norma del sector.",
        ],
        table: {
          headers: ["Tipo de fiesta", "Cómo contar", "Margen de referencia"],
          rows: [
            ["Boda", "Por invitado o por pareja, según lo acuerdes con tu cliente", "Referencia de adultos: 1,1 por invitado (Hacecuentas)"],
            ["XV años", "Por persona, o por familia o pareja (El Imparcial)", "Algunos extras, sin porcentaje en la fuente. Ejemplo de El Imparcial: 60 o 70 para 100 invitados"],
            ["Bautizo", "Por invitado o por familia, según el evento", "Referencia de adultos: 1,1 por invitado (Hacecuentas). Sin cifra propia para este tipo"],
            ["Baby shower", "Por invitado o por familia, según el evento", "Referencia de adultos: 1,1 por invitado (Hacecuentas). Sin cifra propia para este tipo"],
            ["Cumpleaños infantil", "Por niño", "1 por niño y 2 o 3 extra a mano (Hacecuentas)"],
            ["Corporativo", "Por asistente confirmado", "Referencia de adultos: 1,1 por invitado (Hacecuentas). Sin cifra propia para este tipo"],
          ],
        },
      },
      {
        heading: "Fórmula para planners: invitados confirmados y piezas a producir",
        body: [
          "Copia esta fórmula: piezas a producir es igual a las unidades de conteo confirmadas por el factor del margen. La unidad puede ser invitado, pareja o familia. Con 80 invitados adultos y la referencia de 1,1, salen 88 piezas. Guarda dos cifras separadas: invitados confirmados y piezas a producir.",
          "Si llevas varios eventos, usa una fila por evento con su tipo de fiesta, su unidad de conteo y su factor. Así cada evento tiene su propia cifra y no arrastras el margen de uno a otro. Para ver ideas de qué poner en cada pieza, revisa la guía de [qué poner en un dulcero](/blog/que-poner-en-un-dulcero).",
          "Si tu cliente quiere un detalle distinto al dulcero, como [stickers de vinil personalizados](/productos/stickers-vinil-impermeable), la fórmula es la misma: cuenta primero y aplica el margen después. También puedes revisar [dulceros personalizados en Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "¿Cuándo cerrar la cifra final de piezas?",
        body: [
          "Cierra la cifra final cuando tu cliente tenga la lista de confirmados definitiva y apruebe la prueba digital, porque los días de producción se cuentan desde esa aprobación. Antes de eso, sigue ajustando tu hoja y confirma por WhatsApp cualquier duda.",
          `La producción toma de ${PRODUCTION_DAYS.min} a ${PRODUCTION_DAYS.max} días hábiles después de aprobar la prueba digital, más ${NATIONAL_TRANSIT_DAYS.min} a ${NATIONAL_TRANSIT_DAYS.max} días de envío nacional. Con esos plazos, deja la lista de confirmados cerrada con margen antes de la fecha del evento.`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["que-poner-en-un-dulcero", "dulceros-personalizados-guadalajara"],
    sources: [
      { label: "Hacecuentas: calculadora de regalos por invitado (souvenirs)", url: "https://hacecuentas.com/calculadora-regalos-invitado-souvenir" },
      { label: "El Imparcial: recuerdos para 15 años", url: "https://www.elimparcial.com/locurioso/2026/05/14/recuerdos-para-15-anos-ideas-originales-con-fotos-que-las-quinceaneras-guardaran-para-siempre/" },
    ],
    faq: [
      {
        q: "¿Cuántos detalles pedir por invitado?",
        a: "Hacecuentas usa 1,1 por invitado en eventos de adultos, es decir, 10% extra. En cumpleaños infantiles usa 1 por niño y recomienda sumar 2 o 3 a mano.",
      },
      {
        q: "¿Un detalle por persona o uno por pareja?",
        a: "Las fuentes no coinciden. Hacecuentas cuenta por invitado y El Imparcial sugiere uno por familia o pareja en XV años. Decide con tu cliente cómo contar antes de aplicar el margen.",
      },
      {
        q: "¿Bastan 60 o 70 recuerdos para 100 invitados?",
        a: "Es el ejemplo que da El Imparcial en una nota sobre XV años, contando por familia o pareja. No es una regla general para todos los eventos.",
      },
    ],
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
