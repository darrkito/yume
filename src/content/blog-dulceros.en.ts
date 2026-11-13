import type { BlogPost } from "@/content/blog";
import { getProduct, tieredPrice } from "@/content/products";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";
import { BLOG_SLUG_EN } from "@/lib/i18n";

// English versions of the dulceros cluster (see blog-dulceros.ts). English
// head terms from the 2026-10 Google Trends research (US, 12 months):
// treat boxes, favor boxes, party favor boxes; rising: custom treat boxes,
// graduation favor boxes, christmas treat boxes. Same facts as the Spanish
// posts, written for English speakers ordering in Mexico.
const PUBLISHED = "2026-10-06";
const DULCERO = "dulceros-personalizados";
const en = (esSlug: string) => BLOG_SLUG_EN[esSlug];
const dulceroTotal = (qty: number) => tieredPrice(getProduct(DULCERO)!.tiers!, qty).toLocaleString("en-US");
const dulceroUnit = tieredPrice(getProduct(DULCERO)!.tiers!, 10) / 10;

export const dulceroPostsEn: BlogPost[] = [
  {
    slug: en("dulceros-personalizados-guadalajara"),
    title: "Personalized Party Favor Boxes in Guadalajara: Price, Size and How to Order",
    metaTitle: "Personalized Party Favor Boxes in Guadalajara",
    description:
      "Personalized favor boxes in Guadalajara: price, minimum order, size, materials, production time and how to order, with delivery across Mexico.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-13",
    intro:
      "A personalized party favor box is the little box each guest takes home when the party ends. With the guest of honor's name and the event theme, it becomes part of the decor. At Yume we make lunch-box-style boxes with a handle, from Guadalajara, with shipping across Mexico. This guide covers what you need to know before ordering for a birthday, baby shower, wedding or company event: price, size, material, timing and how the design works.",
    sections: [
      {
        heading: "How much personalized favor boxes cost in Guadalajara",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10 pieces. You can order the exact number of guests, without fixed packs. Above 100 pieces, wholesale pricing applies and is quoted by message. National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}.`,
          `For example, 10 boxes are $${dulceroTotal(10)}, 12 are $${dulceroTotal(12)}, 20 are $${dulceroTotal(20)} and 30 are $${dulceroTotal(30)}. If you're in the Guadalajara metropolitan area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches.`,
          "This is a per-piece price for custom work: each favor box carries the name and theme of your event, rather than being a generic mass-produced batch.",
        ],
      },
      {
        heading: "Size and material of the lunch-box-style favor box",
        body: [
          "The favor box measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 inches), is lunch-box style and has a handle. It is made of opaline cardstock and arrives assembled and empty, ready to fill with the candy or little gifts you choose, with no folding or gluing.",
          "Opaline cardstock is smooth and sturdy and gives the printing a good finish. Since it arrives without candy, you decide what goes inside.",
        ],
        table: {
          headers: ["Feature", "Detail"],
          rows: [
            ["Size", "15.7 × 11.7 × 9.9 cm"],
            ["Style", "Lunch-box style, with handle"],
            ["Material", "Opaline cardstock"],
            ["How it arrives", "Assembled and empty"],
          ],
        },
      },
      {
        heading: "What favor box customization includes",
        body: [
          "Each favor box carries the name you give us, whether it belongs to the guest of honor, the couple, the baby or your company, and the theme you choose. Before production we send you a digital proof of the design, and nothing is produced until you approve it.",
          "The theme can be a child's favorite character, a color palette, a sport, a Christmas style or your brand logo for a corporate event. If you need it for a wedding or baby shower, tell us the occasion and colors by message and we'll provide a quote.",
        ],
      },
      {
        heading: "How many favor boxes to order and each order total",
        body: [
          `You can order from 10 pieces and choose the exact quantity you need, without fixed packs, so you can match your guest count. For a wedding, the guide to [how many favor boxes to order](/en/blog/${en("cuantos-dulceros-pedir-para-una-boda")}) helps you calculate the quantity. Above 100 pieces, wholesale pricing applies and is quoted by message.`,
          "This table shows the total for some orders within the first 100 pieces, excluding shipping:",
        ],
        table: {
          headers: ["Pieces", "Total in MXN"],
          rows: [
            ["25", `$${dulceroTotal(25)}`],
            ["50", `$${dulceroTotal(50)}`],
            ["75", `$${dulceroTotal(75)}`],
            ["100", `$${dulceroTotal(100)}`],
          ],
        },
      },
      {
        heading: "Favor boxes for weddings, quinceañeras, baptisms and first communions",
        body: [
          "Favor boxes are personalized with the name and theme of each occasion, making them suitable for weddings, quinceañeras, baptisms and first communions. Tell us the date, quantity and colors by message and we'll provide a quote; before production you receive a digital proof and nothing is produced until you approve it.",
          `For ideas by occasion, see favor boxes for [baptisms and first communions](/en/blog/${en("dulceros-para-bautizo-y-primera-comunion")}), [elegant quinceañeras](/en/blog/${en("dulceros-para-xv-anos-elegantes")}) and the [wedding candy table](/en/blog/${en("mesa-de-dulces-para-boda")}).`,
        ],
      },
      {
        heading: "Favor boxes for company events and planners",
        body: [
          "The favor boxes carry your brand's logo and colors, making them suitable for holiday parties, anniversaries and client events. If you organize events for others, communication is direct by message, with a digital proof before production, and you can request a quote for the date, quantity and colors.",
          `For teams and companies, see [favor boxes for corporate events](/en/blog/${en("dulceros-para-eventos-empresariales")}), designed with your logo and brand colors. If you work as a planner, the [wedding planner guide](/en/blog/${en("guia-wedding-planners-detalles-personalizados-guadalajara")}) explains how to coordinate the order, and the article on the [order's digital proof](/en/blog/${en("prueba-digital-pedido-evento-planners")}) details that step.`,
        ],
      },
      {
        heading: "Delivery times: when to order your favor boxes",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof. If you receive them by courier, add ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days for national shipping; if you collect them at a Guadalajara pickup branch, add ${PICKUP_EXTRA_DAYS} business day.`,
          `The clock starts when you approve the proof, so having the name and theme ready from the start helps most. If your party is in November, see [Day of the Dead favor boxes](/en/blog/${en("dulceros-dia-de-muertos-noviembre")}); if it's in December, see [personalized Christmas favor boxes](/en/blog/${en("dulceros-navidenos-personalizados")}).`,
        ],
      },
      {
        heading: "How to order your personalized favor boxes",
        body: [
          "You can order from the online shop: choose a quantity starting at 10 pieces and pay by card or at a convenience store. If you'd rather discuss the theme before paying, request a quote by message. We send you the digital proof, you make your adjustments, and only then does production begin.",
          `Order directly from the [personalized lunch-box-style favor boxes](/en/products/personalized-party-favor-boxes) page. If you need filling ideas, see [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}), and for a children's party, see [kids' party favor box ideas](/en/blog/${en("ideas-de-dulceros-para-fiesta-infantil")}).`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    faq: [
      { q: "How much does a personalized favor box cost?", a: `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10. Above 100 pieces, wholesale pricing applies and is quoted by message. National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}.` },
      { q: "What is the minimum order?", a: "The minimum order is 10 pieces, and you can order the exact quantity you need without fixed packs." },
      { q: "What size is the favor box?", a: "It measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 inches), is lunch-box style with a handle, and is made of opaline cardstock." },
      { q: "Do the favor boxes include candy?", a: "No. The favor box arrives assembled and empty, ready to fill with the candy or little gifts you choose." },
      { q: "What does customization include?", a: "The name (of the guest of honor, the couple, the baby or your company) and the theme you choose, including your brand logo. We send a digital proof before production, and nothing is produced until you approve it." },
      { q: "Can I order favor boxes for a wedding?", a: "Yes. Tell us the date, quantity and colors by message and we'll provide a quote. Each favor box carries the couple's name and the theme you choose." },
      { q: "How is an order of more than 100 pieces quoted?", a: "Above 100 pieces, wholesale pricing applies. Message us with the quantity and your event date and we'll provide a quote." },
      { q: "How long do they take to arrive?", a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you collect at a Guadalajara pickup branch.` },
      { q: "Can I pick them up in Guadalajara?", a: `Yes. In the Guadalajara metropolitan area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches.` },
      { q: "Do you ship outside Guadalajara?", a: "Yes, we ship by courier throughout Mexico." },
    ],
    relatedBlogSlugs: [en("ideas-de-dulceros-para-fiesta-infantil"), en("que-poner-en-un-dulcero"), en("dulceros-para-eventos-empresariales")],
  },
  {
    slug: en("ideas-de-dulceros-para-fiesta-infantil"),
    title: "Party Favor Box Ideas for Kids' Birthday Parties",
    metaTitle: "Party Favor Box Ideas for Kids' Birthdays",
    description:
      "Party favor box ideas for your son's or daughter's birthday: how to choose the theme, which name to put on it, how many to order and how to match the party decor.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-12",
    intro:
      "The favor box is one of the last things guests take from the party, and often the first thing they show off at home. That's why it's worth matching it to the birthday theme and putting the birthday girl's name on it. Here are kids' party and girls' birthday favor box ideas by theme, color palettes, what you can personalize, how many to order, what to put inside and when to order so they arrive on time.",
    sections: [
      {
        heading: "Kids' party favor box ideas: choosing a theme",
        body: [
          "For a kids' party favor box, choose the theme already used at the party: the one on the cake, invitation and decorations. If there is no set theme, use a palette of two or three colors with her name and age on the front. That way the favor box looks like part of the party.",
          "A craft guide from another site suggests using the colors and shapes of the child's favorite theme and letting them take part in the design. It's a reference from another site, but the idea is useful: ask the birthday girl which colors she wants to see.",
          "Send us a photo of the invitation or decorations and we'll adapt the favor box design to those colors. Before production we send you a digital proof, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "Favor box ideas for girls by theme",
        body: [
          "These are design ideas to get you started, not licensed products: princess, unicorn, butterflies, ballerina, mermaid, tea party, garden and boho. Each one translates into a palette, a themed detail and a large name. Choose the one that matches the cake, invitation and birthday girl's age.",
          "For the earliest years, butterflies, a garden or a unicorn in gentle colors look sweet without making the design too busy. For elementary school, ballerina, mermaid or tea party leave room for a large name and more detail.",
          "If the girl has a favorite or popular character, tell us by message and we'll review what can be designed with you before the digital proof.",
        ],
      },
      {
        heading: "Color palettes for girls' favor boxes",
        body: [
          "A palette of two or three colors makes a favor box look planned. Four combinations that work for girls are pastel pink with gold, lilac with white, sage with peach, and red with cream. These are Yume style suggestions, and we adapt them to the colors of your invitation.",
          "Pastel pink with gold feels delicate and festive, and suits a princess or tea party theme. Lilac with white looks fresh and clean, and goes well with unicorns, butterflies or mermaids. Sage with peach is soft and natural, ideal for a garden or boho theme. Red with cream is more classic and striking, and suits a ballerina theme.",
          "If you already have balloons, tablecloths or a photo backdrop, take a photo of everything together and send it when requesting a quote. With that reference, we adjust the favor box colors and show them to you in the digital proof.",
        ],
        table: {
          headers: ["Palette", "Goes well with"],
          rows: [
            ["Pastel pink with gold", "Princess or tea party"],
            ["Lilac with white", "Unicorn, butterflies or mermaid"],
            ["Sage with peach", "Garden or boho"],
            ["Red with cream", "Ballerina"],
          ],
        },
      },
      {
        heading: "What can be personalized on a birthday favor box",
        body: [
          "Our favor box personalization includes the name and theme you choose. For birthdays, the most common choice is the birthday girl's name and age, for example Sofía, 7 years old, together with the party colors. We send you a digital proof before production.",
          `The favor box is lunch-box style, with a handle, and arrives assembled and empty; you provide the candy and filling. It is the same box for girls and boys: the design is what changes. To see and order it, visit [personalized favor boxes](/en/products/personalized-party-favor-boxes), where you choose the quantity starting at 10 pieces.`,
          "As a reference, another craft guide recommends adding the name, date and event details to a card or label. If you want to add something beyond the name and theme, mention it when requesting a quote and we'll tell you what can be included.",
          "If the party is for a group, such as a classroom, the name can be the group's or the school's. If you prefer each guest's name, mention it when requesting a quote and we'll review whether it makes sense.",
        ],
      },
      {
        heading: "Favor boxes for girls and boys: what changes and what stays the same",
        body: [
          "Almost nothing changes about the box: the difference is in the theme and colors, not the product. Choose the design according to the birthday child's taste, not a color rule. For a mixed party, a neutral palette with a large name and a themed detail works for every guest.",
          "For a party with girls and boys, the most practical choice is one design with the main theme and the birthday child's name. If you prefer two different styles, mention it when requesting a quote and we'll review it with you. Remember that the minimum order is 10 pieces.",
        ],
      },
      {
        heading: "How many favor boxes to order for a kids' party",
        body: [
          `Count the children invited to find out how many favor boxes you need. The minimum order is 10 pieces, so you order the quantity you need. First 100 pieces: $${dulceroUnit} MXN per box. For example, 15 are $${dulceroTotal(15)}, 25 are $${dulceroTotal(25)} and 50 are $${dulceroTotal(50)}.`,
          "If you're also giving favor boxes to adults, consider a slightly more understated design with the same name, or simply the same theme: they can be ordered together in one order.",
          "Above 100 pieces, wholesale pricing applies: write to us by message and we'll provide a quote.",
        ],
      },
      {
        heading: "What to put inside favor boxes and how to care for young guests",
        body: [
          "The favor box arrives assembled and empty, without candy, so you choose the filling. Familiar candy, cookies, gummies and a small extra such as stickers in the same design all work well. With young children, avoid hard candy and pieces they could swallow, and ask about allergies before buying.",
          "One craft guide includes glass fishbowls among its homemade ideas, but recommends them for adults because of the risk of breakage. For a kids' party, it is safest to avoid glass.",
          `You can add [personalized vinyl stickers](/en/products/waterproof-vinyl-stickers) with the name or party design, in premium vinyl resistant to water, sun and scratches. For more ideas by age, see the guide to [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}). If you're unsure whether to choose a favor box, box, bag or cup, this comparison of [boxes, bags and cups](/en/blog/${en("cajas-bolsas-o-vasos-dulceros-cual-elegir")}) can help you decide.`,
        ],
      },
      {
        heading: "How to match favor boxes to the table decor",
        body: [
          "Repeat the colors of the cake, balloons or photo backdrop in the design and the favor box becomes part of the decor. Send us a photo of everything together when requesting a quote and we'll adapt the colors. Before production we show you a digital proof so you can see how it matches the candy table.",
          "If the candy table or cake already has a theme, the easiest choice is to repeat it on the favor box with the birthday child's name. Guests will recognize it immediately.",
        ],
      },
      {
        heading: "How to order favor boxes as a party planner",
        body: [
          "If you're a planner or organize kids' parties for clients, order the favor boxes with the birthday child's name and the event theme, and share photos of the invitation and decorations. We'll send you a digital proof for your client to approve before production and discuss everything by message.",
          `Favor boxes can be ordered from 10 pieces, so they work for a small or medium event. For more than 100 pieces, write to us for a quote. If your client is in the area, also see the guide to [personalized favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
      {
        heading: "How to order your birthday favor boxes step by step",
        body: [
          "Count your guests, choose the theme and name, and write to us by message with a photo of the invitation or decorations. We'll send you a digital proof before production, and nothing is produced until you approve it. Once you approve it, your order goes into production.",
          "Have four details ready from the start: the party date, the number of pieces, the name that goes on each favor box and whether you will receive it by shipping or pick it up in Guadalajara. With those details, the quote and digital proof are quick to prepare.",
        ],
      },
      {
        heading: "Price and when to order so they arrive on time",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10 pieces. Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after approving the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping. Order with plenty of time before the party.`,
          `National shipping is free on purchases from $${FREE_SHIPPING_THRESHOLD}. If you're in the Guadalajara metro area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel service branches, with ${PICKUP_EXTRA_DAYS} extra business day.`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir")],
    faq: [
      { q: "Do the favor boxes include candy?", a: "No. The favor box arrives assembled and empty, ready to fill with the candy or small gifts you choose." },
      { q: "How much does a personalized favor box cost?", a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing is quoted by message. National shipping is free from $${FREE_SHIPPING_THRESHOLD}.` },
      { q: "What can I personalize on a girl's birthday favor box?", a: "The name and theme you choose, for example the birthday girl's name and age and the party colors. We send you a digital proof before production." },
      { q: "How many favor boxes should I order for a kids' party?", a: "Count the children invited to find out how many you need. The minimum order is 10 pieces." },
      { q: "Can I put each guest's name on a box?", a: "Mention it when requesting a quote and we'll review with you whether it makes sense to personalize each favor box with each guest's name." },
      { q: "Is the favor box different for girls and boys?", a: "No. It is the same lunch-box-style favor box with a handle. What changes is the design: the theme, colors and name." },
      { q: "What themes can I choose for a girl's favor box?", a: "Unicorn, butterflies, ballerina, princess, garden, tea party, boho or mermaid are design ideas to get started. Choose according to the age and style of the party." },
      { q: "Can I order a favor box with a popular character?", a: "Tell us by message which character you have in mind and we'll review it with you before preparing the digital proof. The themes in this article are design ideas, not licensed products." },
      { q: "Which colors go together for a girl's favor box?", a: "Some combinations we suggest are pastel pink with gold, lilac with white, sage with peach, and red with cream. We can also adapt the design to the colors of your invitation or decorations." },
      { q: "When should I order girls' favor boxes?", a: `Count backwards from the party date: production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after approving the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel service branch in Guadalajara.` },
      { q: "Is a glass favor container a good idea for a kids' party?", a: "It's better to avoid it. A homemade favor guide recommends glass fishbowls for adults because of the risk of breakage." },
      { q: "What should I consider if there are young children at the party?", a: "Check the guests' ages and avoid hard or small pieces with young children. Ask about allergies before buying the filling." },
      { q: "Can I see a proof before production?", a: "Yes. We send you a digital proof before production and nothing is produced until you approve it." },
      { q: "Do you work with planners and event organizers?", a: "Yes. You can order the favor boxes for your client's event, with a digital proof and direct communication by message. The minimum order is 10 pieces." },
      { q: "Can I pick up my order in Guadalajara?", a: `Yes. In the Guadalajara metro area you can pick up at any of the ${CASABLANCA_BRANCHES.length} parcel service branches for $${CASABLANCA_PRICE}.` },
    ],
    sources: [
      {
        label: "Craft guide: six ideas for decorating favor boxes at home",
        url: "https://www.guiainfantil.com/ocio/manualidades/como-decorar-de-forma-original-tu-dulcero-6-ideas-para-hacer-en-casa/",
      },
    ],
  },
  {
    slug: en("dulceros-navidenos-personalizados"),
    title: "Personalized Christmas Treat Boxes for Posadas, School and Gift Exchanges",
    metaTitle: "Personalized Christmas Treat Boxes",
    description:
      "Personalized Christmas treat boxes for posadas, school and gift exchanges: designs, filling ideas, how many to order and when to place your order.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-12",
    intro:
      "Posadas are celebrated from December 16 to 24, and between school holiday shows, office gatherings and gift exchanges, a personalized Christmas treat box becomes a thoughtful detail. With the recipient's name, it turns the classic aguinaldo of candy into a keepsake. This guide covers designs, uses, quantities and, above all, how far ahead to order.",
    sections: [
      {
        heading: "Which personalized Christmas treat box should you choose?",
        body: [
          "A personalized Christmas treat box works best with the recipient's name and a simple seasonal theme, such as red and green with gold, pine trees or snow. It suits posadas, classrooms and gift exchanges, and arrives assembled and empty so you can choose what goes inside.",
          "The classics work: red and green with gold details, snow and pine trees, a Nordic white-and-red style, or a children's theme with Santa, reindeer and snowmen. For school, use the group or classroom name; for a family posada, the family name or each child's name.",
          "Our [personalized favor box](/en/products/personalized-party-favor-boxes) is lunch-box-style, with a handle, and includes a name and theme.",
        ],
      },
      {
        heading: "Christmas treat boxes for posadas and aguinaldos",
        body: [
          "At a posada, the lunch-box-style treat box with a handle replaces the traditional aguinaldo bag: it holds a good portion of candy, peanuts, colación or small tangerines, and children can carry it easily while breaking the piñata. It arrives assembled, so on the day of the posada you only need to fill it.",
          "It measures 15.7 × 11.7 × 9.9 cm. Many offices, schools and families have chosen to simplify their posadas and reduce spending, and a compact detail with a name fits that idea well.",
        ],
      },
      {
        heading: "What to put inside a Christmas treat box",
        body: [
          `The box arrives empty, so you choose the filling. Candy, peanuts, colación and small tangerines work for a posada, and you can add a detail such as stickers in the same design. For more ideas by age, see the guide to [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}).`,
        ],
      },
      {
        heading: "Christmas treat boxes for the classroom",
        body: [
          "For a classroom, the simplest option is one design for the whole group, with the classroom or school name and a Christmas theme. Order one box per student; with a minimum of 10 pieces, the quantity can fit your group.",
          "Before buying the filling, ask the school or parent association whether there are rules about candy or allergies in the group.",
        ],
      },
      {
        heading: "Christmas treat boxes for a gift exchange",
        body: [
          "For a gift exchange, a personalized treat box is a compact detail with the recipient's name. Before ordering, the group should agree on the number of participants and the amount to spend; with a minimum of 10 pieces, it works best for office, family or classroom exchanges with several people.",
        ],
      },
      {
        heading: "Christmas treat boxes for companies and offices",
        body: [
          "For an office or business gathering, use your brand colors with a Christmas detail and your logo. The treat box looks festive while keeping your brand identity, and personalization can include your company name, each guest's name or a year-end theme.",
          `If you are organizing an event with clients or your team, see the guide to [favor boxes for corporate events](/en/blog/${en("dulceros-para-eventos-empresariales")}). For your company's year-end party, see [personalized company posada details](/en/blog/${en("detalles-posada-empresa-personalizados")}). For packaging or bags for the same event, see [personalized Christmas labels](/en/blog/${en("etiquetas-navidenas-personalizadas")}).`,
        ],
      },
      {
        heading: "How many treat boxes to order and what they cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per treat box, with a minimum order of 10 pieces, so you can order the exact number of guests or students. 10 boxes are $${dulceroTotal(10)}, 20 are $${dulceroTotal(20)} and 30 are $${dulceroTotal(30)}. Above 100 pieces, wholesale pricing applies: message us on WhatsApp for a quote.`,
          `A class of 30 students orders 30 boxes; a posada with 20 guests, 20. National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}. If you are in the Guadalajara metropolitan area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches.`,
        ],
      },
      {
        heading: "When to order Christmas treat boxes so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping (or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara). Since posadas run from December 16 to 24, the safest choice is to order in November.`,
          "If you already know the date of your posada or school show, count backward from that day using the timelines above.",
        ],
      },
      {
        heading: "How to order your personalized treat box",
        body: [
          "To order, send us a WhatsApp message with the number of boxes you need, the name for each one, your chosen theme or colors and, if applicable, your logo. We send you a digital proof before production, and nothing is produced until you approve it.",
          `You can see the [personalized favor box](/en/products/personalized-party-favor-boxes) and add [vinyl stickers](/en/products/waterproof-vinyl-stickers) in the same design as a detail inside. If you are in Zapopan or Guadalajara, see [personalized favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    sources: [
      {
        label: "When posadas begin in Mexico and how much a posada costs (InformaBTL)",
        url: "https://www.informabtl.com/cuando-empiezan-las-posadas-2025-en-mexico-cuanto-cuesta-hacer-una-posada/",
      },
    ],
    faq: [
      {
        q: "Do the treat boxes include candy?",
        a: "No. The treat box arrives assembled and empty, ready to fill with the candy or details you choose.",
      },
      {
        q: "How much does a personalized Christmas treat box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing is quoted on WhatsApp. National shipping is free from $${FREE_SHIPPING_THRESHOLD}.`,
      },
      {
        q: "What is the minimum order?",
        a: "The minimum order is 10 pieces, so you can order the exact number of guests, students or gift exchange participants.",
      },
      {
        q: "What does personalization include?",
        a: "The name (of the guest of honor, group or company) and your chosen theme, including your brand logo. We send you a digital proof before production.",
      },
      {
        q: "Can I order one design for the whole classroom?",
        a: "Yes. The simplest option is one design for the whole group, with the classroom or school name and a Christmas theme.",
      },
      {
        q: "What size is the treat box?",
        a: "It is lunch-box-style, with a handle, and measures 15.7 × 11.7 × 9.9 cm. It arrives assembled.",
      },
      {
        q: "How long do they take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara.`,
      },
      {
        q: "When are posadas?",
        a: "Posadas are celebrated from December 16 to 24, so it is a good idea to order in November.",
      },
    ],
    relatedBlogSlugs: [en("etiquetas-navidenas-personalizadas"), en("dulceros-para-eventos-empresariales"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("buen-fin-2026-stickers-y-dulceros-personalizados")],
  },
  {
    slug: en("dulceros-para-dia-del-nino"),
    title: "Children's Day Party Favor Boxes: Ideas for the Classroom, School and Family",
    metaTitle: "Children's Day Party Favor Boxes",
    description:
      "Personalized favor boxes for Children's Day in Mexico (April 30): classroom designs, school rules, filling ideas, quantities and ordering times.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-30",
    intro:
      "April 30 is Children's Day in Mexico, and teachers, parent committee members and families look for something special to give each child. A favor box with each child's name or the group name feels much more special than a generic bag. Here is how to choose the design, what to check with the school, what to put inside, how many to order and when to do it.",
    sections: [
      {
        heading: "Children's Day favor boxes: which design works in the classroom",
        body: [
          "For a classroom, one design for the whole group works well, with the school or group name and a message like Happy Children's Day. A neutral theme, such as bright colors, games or animals, works for boys and girls alike. The box arrives assembled and empty, so you choose what goes inside.",
          "Our [personalized favor box](/en/products/personalized-party-favor-boxes) is lunch-box style with a handle, and personalization includes a name and theme. If the group is small, tell us when requesting a quote if you want each student's name on their box, and we will work out how to organize the list with you.",
          `For a family party, the same design with the guest of honor's name feels more personal; see more [children's party ideas](/en/blog/${en("ideas-de-dulceros-para-fiesta-infantil")}). Before production, we send you a digital proof, and nothing is produced until you approve it.`,
        ],
      },
      {
        heading: "Children's Day and school rules",
        body: [
          "According to a 2025 article, SEP guidelines prohibit selling food and drinks with warning labels on school premises. The rule concerns sales, and the sources consulted do not mention gifts or favor boxes sent by families. That is why it is a good idea to ask the school what it allows before buying candy.",
          "The SEP reiterated that restriction in an April 9, 2025 statement as part of its healthy living strategy, which the statement says covers more than 262,000 public and private schools. On May 24, 2025, President Sheinbaum acknowledged that children were asking for candy to return to schools, but the restriction remained in place because of childhood obesity rates.",
          "If the school prefers less candy, the favor box can contain other things, such as a small toy, stationery or [personalized stickers](/en/products/waterproof-vinyl-stickers) in the same design. Always check with the teacher or school administration before sending the order.",
        ],
      },
      {
        heading: "What to put inside by age",
        body: [
          "Hard candy, gummies and chewing gum are among the foods with the highest choking risk for young children, according to the Spanish Association of Pediatrics, which mentions them for children up to 3 to 6 years old. For preschool, choose a non-candy gift, such as a large toy or crayons.",
          "For elementary school, if the school allows it, lollipops, chocolate, spicy candy, stickers and a small toy work well. Check with the school whether any students have allergies (peanuts, chocolate) before buying the filling: it is easier to adapt all the favor boxes than to make one different box on the day.",
          `For more ideas by age, see the guide to [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}).`,
        ],
      },
      {
        heading: "How many favor boxes to order and what they cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10 pieces, so you can order the exact number of students. 25 boxes are $${dulceroTotal(25)} and 32 are $${dulceroTotal(32)}. Above 100 pieces, wholesale pricing applies: message us on WhatsApp for a quote.`,
          `If the parent committee splits the cost, the price per child is clear from the start: $${dulceroUnit} per favor box. National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}. In the Guadalajara metropolitan area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches; see more details in [personalized favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
      {
        heading: "When to order favor boxes for April 30",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara. Order ahead to leave time to fill the favor boxes before April 30.`,
          `The favor boxes arrive assembled, ready to fill. If you also have a graduation coming up, the same supplier can cover both dates; see the guide to [graduation favor boxes](/en/blog/${en("dulceros-para-graduacion")}).`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    faq: [
      {
        q: "Do the favor boxes include candy?",
        a: "No. The favor box arrives assembled and empty, ready to fill with the candy or treats you choose.",
      },
      {
        q: "How much does a Children's Day favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing is quoted on WhatsApp. National shipping is free from $${FREE_SHIPPING_THRESHOLD}.`,
      },
      {
        q: "When is Children's Day in Mexico?",
        a: "Children's Day in Mexico is April 30.",
      },
      {
        q: "Can I send candy to school?",
        a: "According to a 2025 article, SEP guidelines prohibit selling food and drinks with warning labels on school premises. The source discusses sales and does not mention gifts, so it is safest to ask the school what it allows before sending the order.",
      },
      {
        q: "Which candies should young children avoid?",
        a: "Hard candy, gummies and chewing gum are among the foods with the highest choking risk for young children, according to the Spanish Association of Pediatrics, which mentions them for children up to 3 to 6 years old.",
      },
      {
        q: "Can I put each student's name on a box?",
        a: "Yes. Tell us when requesting a quote if you want each student's name on their favor box, and we will work out how to organize the list with you. We send you a digital proof before production.",
      },
      {
        q: "How long do they take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara.`,
      },
    ],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("ideas-de-dulceros-para-fiesta-infantil"), en("dulceros-para-graduacion")],
    sources: [
      {
        label: "News report: Sheinbaum and SEP maintain the restriction on candy in schools",
        url: "https://zetatijuana.com/2025/07/sheinbaum-y-sep-defienden-chocolate-con-sellos-pero-mantienen-veto-a-golosinas-en-escuelas/",
      },
      {
        label: "Spanish Association of Pediatrics: choking prevention",
        url: "https://aeped.es/sites/default/files/atragantamiento_csvaep_final.pdf",
      },
    ],
  },
  {
    slug: en("dulceros-para-graduacion"),
    title: "Graduation Favor Boxes for Kindergarten, Elementary and Middle School",
    metaTitle: "Graduation Favor Boxes for Kindergarten and School",
    description:
      "Personalized graduation favor boxes for kindergarten, elementary and middle school: designs by level, price, quantities and when to order.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-10",
    intro:
      "A graduation brings gowns, caps, photo packages, dinners and venues, and amid all of that the favor box is the detail each guest gets to hold. Thoughtfully chosen, it closes the school year with a keepsake of the class. This guide explains which box to choose, how the design changes for kindergarten, elementary and middle school, what to put inside, what it costs and when to order according to the 2026-2027 school calendar, whether you are a parent or coordinating the event.",
    sections: [
      {
        heading: "Which favor box suits a graduation",
        body: [
          "For a graduation, choose a favor box with the graduate's or the class's name, the school colors and the date. Ours is lunch-box style, with a handle, made of opaline cardstock and measures 15.7 × 11.7 × 9.9 cm. It arrives assembled and empty, so you choose what goes inside.",
          `Customization includes a name and a theme, so the same [personalized favor box](/en/products/personalized-party-favor-boxes) works for kindergarten, elementary or middle school: only the design changes. We send a digital proof before production, and nothing is produced until you approve it.`,
        ],
      },
      {
        heading: "Design ideas by level",
        body: [
          "For kindergarten, a cheerful design with a graduation cap, the child's name and the phrase I graduated works well. For elementary and middle school, the school colors with the class name feel more formal. If each box carries a name, it is a personal keepsake; for guests, the class and date are enough.",
          "For elementary and middle school, you can use the class name (for example, Class of 2021-2027) and the school crest or mascot. If you have the crest, logo or a photo of the uniform, send it along with the ceremony invitation and we will adapt the design to those colors.",
          "Check the spelling of every name and the class year carefully on the digital proof, because it is the last step before production.",
        ],
      },
      {
        heading: "One graduate or the whole group: how the order changes",
        body: [
          "For one graduate, the favor box carries their name and works as a personal detail. For a group, one design with the class and date keeps the order organized and consistent. If you want a different name on each box, mention it when requesting a quote on WhatsApp.",
          "In both cases the minimum order is 10 pieces, so one graduate celebrating with family and a whole group start from the same minimum; only the quantity changes.",
        ],
      },
      {
        heading: "What to put inside a graduation favor box",
        body: [
          "The box arrives empty, so you choose the filling. Chocolates, gummies, cookies and traditional Mexican candy work for a graduation, along with a non-candy extra such as stickers with the class name. Between 8 and 12 pieces of candy makes this box look full.",
          "For kindergarten, avoid hard candy, whole peanuts and toys with small parts that could be swallowed; choose soft gummies, cookies or small chocolates instead. For elementary and middle school you can add lollipops, spicy candy, mazapanes and snacks.",
          `Ask the school or parents about allergies before buying. For a list by candy type and age, see the guide to [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}). For an extra detail, we also make water-resistant [vinyl stickers](/en/products/waterproof-vinyl-stickers) with the class name or crest.`,
        ],
      },
      {
        heading: "How many favor boxes to order and what they cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10, so you can order exactly the number of graduates or guests. 20 boxes are $${dulceroTotal(20)} and 40 are $${dulceroTotal(40)}. Above 100 pieces, wholesale pricing applies: message us on WhatsApp for a quote.`,
          `National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}. In the Guadalajara metropolitan area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches. Find more options in the guide to [favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
          "If the graduation committee is organizing the order, confirm the final list of students before approving the digital proof: that is the best time to correct names.",
        ],
      },
      {
        heading: "When to order according to the 2026-2027 school calendar",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara. For the 2026-2027 school year, which ends July 9, 2027, it is best to finalize the design before May.`,
          "According to the calendar published by Mexico's education ministry (SEP), the basic education school year begins August 31, 2026, with winter break starting December 21, 2026 and Holy Week break starting March 22, 2027. Those breaks leave fewer school business days to approve names and the design.",
          "Each school decides the ceremony date, so confirm it with yours before counting the time needed. If design approval goes through several people on the committee or at the school, start even earlier.",
        ],
      },
      {
        heading: "For planners, committees and schools",
        body: [
          "If you are coordinating the graduation as a planner, committee or school, we can help on WhatsApp with the design and digital proof before production. One person can gather the list of names, the theme and the quantity, and approve the proof for everyone. That keeps the order moving in a single conversation.",
          "Message us with the school level, ceremony date and approximate number of graduates, and we will prepare the quote with you.",
        ],
      },
      {
        heading: "How to place the order step by step",
        body: [
          "Choose the quantity in the online store or request a quote on WhatsApp, give us the name and theme, review the digital proof and, once you approve it, production begins. Nothing is produced before your approval. You can pay by card, at a convenience store or by SPEI transfer.",
          "If you would like to discuss the design before paying, message us on WhatsApp. Note that we do not issue invoices (CFDI); if the school or committee needs one, message us before ordering.",
        ],
      },
    ],
    faq: [
      {
        q: "Do the graduation favor boxes include candy?",
        a: "No. The favor box arrives assembled and empty, ready to fill with the candy or extras you choose.",
      },
      {
        q: "How much does a graduation favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing applies and is quoted on WhatsApp. National shipping is free on orders from $${FREE_SHIPPING_THRESHOLD}.`,
      },
      {
        q: "Can I add the class name and each graduate's name?",
        a: "Yes. Customization includes a name and a theme: it can be the class and date for everyone, or each graduate's name. If you want a different name on each box, mention it when requesting a quote.",
      },
      {
        q: "When does the 2026-2027 school year end?",
        a: "According to the SEP basic education calendar, the school year begins August 31, 2026 and ends July 9, 2027. Each school decides the date of its ceremony.",
      },
      {
        q: "How long do production and delivery take?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a parcel branch in Guadalajara.`,
      },
      {
        q: "Do you issue invoices?",
        a: "We do not issue invoices (CFDI). If your school or committee needs one, message us before ordering.",
      },
    ],
    sources: [
      { label: "Crónica: SEP 2026-2027 school calendar, official dates", url: "https://www.cronica.com.mx/nacional/2026/07/15/calendario-escolar-sep-2026-2027-estas-son-las-fechas-oficiales-de-regreso-a-clases-puentes-vacaciones-y-fin-de-ciclo/" },
      { label: "Plano Informativo: the graduation business", url: "https://planoinformativo.com/1152385/el-negocio-de-las-graduaciones" },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("dulceros-para-dia-del-nino"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("ideas-de-dulceros-para-fiesta-infantil"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir")],
  },
  {
    slug: en("dulceros-para-bautizo-y-primera-comunion"),
    title: "What to Give Baptism Guests: Favor Boxes",
    metaTitle: "What to Give Baptism Guests: Favor Boxes",
    description:
      "What to give baptism guests: personalized favor boxes and keepsakes, how to choose for each guest, how many to order, prices and timing.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-11",
    intro:
      "If you're wondering what to give baptism guests, here's how to choose between candy, cookies or a candle, and how a personalized favor box can be the keepsake. We also answer questions about first communion favor boxes in Guadalajara: how many to order from your guest list, when to finalize the order, what to put inside, how to design it and what it costs. This guide is for families and planners coordinating the details for their clients.",
    sections: [
      {
        heading: "What to give baptism guests: how to decide",
        body: [
          "A good gift for baptism guests is something they can eat or keep, with the child's name and the date. A personalized favor box does both: it holds candy and the box remains as a keepsake. Decide according to who receives it: close family or general guests.",
          "Ask yourself three questions: who will receive it, whether it will be eaten or kept, and whether it matches the invitation. Those answers narrow the decision down to a few options.",
        ],
      },
      {
        heading: "Guest keepsake ideas from other guides",
        body: [
          "One parenting guide brings together nine baptism keepsake ideas: a photo frame, decorated cookies or cake pops, a figurine photo clip, tulle bags with candy, a box of cookies, a candy cone, a little candy basket, a fabric basket and a personalized candle with the baby's name and date.",
          "It's a general list without quantities or prices. The guide presents boxed cookies wrapped in tissue paper with a large bow as an affordable, attractive option. Cookies and cake pops are edible, so they're likely to be eaten rather than kept.",
        ],
      },
      {
        heading: "Close family or general guests: what to give each",
        body: [
          "For general guests, a shared keepsake with the child's name and date is enough. For close family, godparents and grandparents, you might choose something different with their own names. Define the groups before counting pieces, since each group can have a different design and quantity.",
        ],
      },
      {
        heading: "A favor box and personalized detail as one set",
        body: [
          "The favor box and stickers in the same design carry the name and date, making the keepsake and dessert table look like one coordinated set. The box arrives assembled and empty, you choose the filling, and name stickers can accompany it. You review everything together in the digital proof.",
          `If you're also planning a baby shower, see the [personalized baby shower favors](/en/blog/${en("recuerdos-baby-shower-personalizados")}).`,
        ],
      },
      {
        heading: "First communion favor boxes in Guadalajara: what and when to order",
        body: [
          "For a first communion or baptism in Guadalajara, choose a favor box with the child's name, the celebration and the date, in the party's color palette. It arrives assembled and empty, so you choose the filling, and you review a digital proof before production.",
          "It's a lunch-box style box with a handle. It works both as a keepsake handed out as guests leave the church and on the reception dessert table. With the name and date, it remains a keepsake after the event.",
        ],
      },
      {
        heading: "How many boxes to order for confirmed guests",
        body: [
          "Start with your confirmed guest list, not the invitations sent. Before counting, decide who gets a box: children only, children and adults, godparents and close family. Once you've made that rule, the number of pieces follows directly; the minimum order is 10 pieces.",
          "If you order one per family instead of one per guest, count confirmed families. If godparents or people helping at the event also receive one, add them separately to find the total.",
        ],
      },
      {
        heading: "How much favor boxes for your list cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per [personalized favor box](/en/products/personalized-party-favor-boxes), with a minimum order of 10 pieces. 30 boxes are $${dulceroTotal(30)} and 50 are $${dulceroTotal(50)}. Above 100 pieces it's wholesale pricing: message us and we'll quote you. Multiply the price per piece by your confirmed guests to budget for the boxes.`,
          `Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico, and in the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel pickup branches.`,
        ],
        table: {
          headers: ["First 100 pieces", "Total"],
          rows: [
            ["10 favor boxes", `$${dulceroTotal(10)} MXN`],
            ["30 favor boxes", `$${dulceroTotal(30)} MXN`],
            ["50 favor boxes", `$${dulceroTotal(50)} MXN`],
            ["100 favor boxes", `$${dulceroTotal(100)} MXN`],
          ],
        },
      },
      {
        heading: "When to finalize your order so it arrives on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Guadalajara parcel branch. Those days count from proof approval, so it's best to settle the name, date and quantity early.`,
          "Count backwards from the day you need the boxes in hand and confirm the guest list before approving the digital proof.",
        ],
      },
      {
        heading: "Baptism and communion calendar: count back from the Mass",
        body: [
          "If you hand out the boxes as guests leave the church, count backwards from the Mass date, not the party date. If you only place them on the reception table, the party date is your deadline. First decide where you'll hand them out.",
          "The Code of Canon Law (canon 867) says parents should take care that infants are baptized in the first few weeks of life. So if you already have a parish date, it's a good idea to order the boxes early.",
          "Each parish sets its own calendar: confirm your Mass date with yours before finalizing the order.",
        ],
      },
      {
        heading: "First communion: the date is known months ahead",
        body: [
          "A first communion date is known well in advance because the child first attends catechism, which a published guide says takes at least one or two years depending on the parish. That gives you months to choose a design, settle the list and order without rushing.",
          "The guide says communion requirements include a birth certificate, baptism certificate (original and copy) and completion of catechism. Age also depends on the parish: the Archdiocese of Mexico sets a minimum of nine years, but that's its own rule, not Guadalajara's. Confirm the rules with your parish.",
        ],
      },
      {
        heading: "What to do if the guest list changes at the last minute",
        body: [
          `If the list changes before you approve the digital proof, message us and we'll adjust the order quantity. Within the first 100 pieces, the price per box stays the same ($${dulceroUnit} MXN), with a minimum of 10 pieces. Nothing is produced until you approve the proof.`,
          "After approval, quantity changes depend on the stage of your order: message us as soon as possible and we'll tell you what's possible.",
        ],
      },
      {
        heading: "A detail for baptism and communion godparents",
        body: [
          "A published guide says communion godparents must be Catholic and confirmed, and married godparents must provide a Church marriage certificate. They're central to the ceremony, so decide early whether they'll receive the same box as guests or one with a different name. Message us and we can discuss it.",
          "If you'd like the godparents' box to carry their name or a short phrase, tell us when ordering and review it on the digital proof along with the rest of the design.",
        ],
      },
      {
        heading: "Baptism favors for a girl",
        body: ["For a girl, the box carries her name and the celebration's theme in pink, beige or the family's preferred palette. Add coordinated stickers and review the digital proof before approving it, so the name, date and colors look as you imagined."],
      },
      {
        heading: "Baptism favors for a boy",
        body: ["For a boy, choose blue, neutral or invitation colors and personalize the box with his name and the date. It arrives assembled and empty so the family can choose the filling, and matching stickers can accompany it."],
      },
      {
        heading: "First communion favors",
        body: ["For a first communion, the name and a theme in white or the event colors bring the box and stickers together. Share the child's details and the invitation colors with us, and review the digital proof before production."],
      },
      {
        heading: "What to put inside a baptism favor box",
        body: [
          "A wedding dessert table guide recommends mixing classic candy with a few special options and keeping a consistent style. You can use fine chocolates, coated almonds, Jordan almonds, mazapanes or decorated cookies. The box arrives assembled and empty, so you choose the filling and its budget.",
          "If you want it to last as a keepsake, add a small rosary, a medal or a candle, or some [name stickers](/en/products/waterproof-vinyl-stickers). Ask about allergies before shopping if you're inviting children you don't know well.",
        ],
      },
      {
        heading: "How much candy to calculate per guest: a reference",
        body: [
          "A wedding dessert table guide estimates about 150 g per guest for small events, 100 g for medium events and 80 g for large events. That's a reference for another type of event, not a baptism or communion rule, so use it only as a starting point.",
          `If you give one box per guest, the calculation is per box and what changes is the filling you put inside. For more ideas by age, see the [guide to what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}).`,
        ],
      },
      {
        heading: "Designs and details for the favor box",
        body: [
          "The basics are the child's name, the type of celebration (My Baptism, My First Communion) and the date. Those three details make the box a keepsake; everything else is optional: godparents, a short phrase or the venue.",
          "For a baptism, try pastel tones with a dove, cross or little angels. For first communion, try white and gold, a chalice or simple cross, and the name in an elegant script. If you have the invitation, send it to us and we'll adapt the design to its colors.",
          "Check the spelling of names and the date carefully on the digital proof before approving it: an error there is repeated on every piece. Nothing is produced until you approve it.",
        ],
      },
      {
        heading: "How to order",
        body: [
          "You can order from the online store by choosing the quantity and paying by card, at a convenience store or by bank transfer, or request a quote by message first if you'd like to discuss the design before paying. Either way, you receive a digital proof before anything is produced.",
          `Start at the [personalized favor boxes](/en/products/personalized-party-favor-boxes) page. If you're also organizing a wedding, quinceañera or baby shower, see the [guide to favor boxes for social events](/en/blog/${en("dulceros-para-eventos-sociales-boda-xv-baby-shower")}). To decide how to hand them out, compare [boxes, bags or cups](/en/blog/${en("cajas-bolsas-o-vasos-dulceros-cual-elegir")}). If you're in the area, see [personalized favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
    ],
    faq: [
      { q: "What should I give baptism guests?", a: "Give a detail with the child's name and date that can be eaten or kept. A personalized favor box arrives empty so you can choose the filling. Other guides suggest tulle candy bags, decorated cookies or a personalized candle." },
      { q: "Can the favor box replace a baptism keepsake?", a: "It can be the keepsake: it holds candy to eat and a box with the name and date to keep. If you'd like another detail, such as name stickers, decide according to your guests and budget." },
      { q: "How many baptism keepsakes should I order?", a: "Count confirmed guests and decide who gets one. The minimum favor box order is 10 pieces, and if the list changes before you approve the digital proof, message us to adjust the quantity." },
      { q: "How many first communion favor boxes should I order?", a: "Start with confirmed guests and decide who gets one: children only, children and adults, or godparents and close family too. The minimum order is 10 pieces." },
      { q: "How much does a baptism or first communion favor box cost?", a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces it's wholesale pricing, quoted by message. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico.` },
      { q: "When should I order the favor boxes?", a: "As soon as you have the Mass date and confirmed guest list. Production days count from approval of the digital proof, so settle the name, date and quantity in good time." },
      { q: "How long does delivery take?", a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after proof approval, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day for pickup at a Guadalajara parcel branch.` },
      { q: "Do you deliver in Guadalajara?", a: `Yes. In the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel branches. We also ship across Mexico.` },
      { q: "What if the guest list changes?", a: "If it changes before you approve the digital proof, message us and we'll adjust the quantity. Nothing is produced until you approve the proof." },
      { q: "What does the digital proof include?", a: "It's a preview of your favor box with the name, date and colors you chose. You review it before production, and nothing is produced until you approve it." },
      { q: "Do baptism and communion favor boxes include candy?", a: "No. The box arrives assembled and empty, ready to fill with the candy or keepsakes you choose." },
      { q: "What details go on the box?", a: "The basics are the child's name, the type of celebration (My Baptism, My First Communion) and the date. You can add godparents or a short phrase. We send a digital proof to check spelling before production." },
      { q: "Can a favor box be personalized for godparents?", a: "Yes. Tell us when ordering whether the godparents will have the same design or one with their name, and review it on the digital proof. Message us to discuss it." },
      { q: "At what age is first communion?", a: "It depends on the parish. A published guide says the Archdiocese of Mexico sets nine as the minimum age, and some parishes accept younger children who have attended catechism. That's a rule of that archdiocese, not Guadalajara, so confirm with your parish." },
      { q: "How much candy should I calculate per guest?", a: "As a wedding dessert table reference, about 150 g per guest for small events, 100 g for medium events and 80 g for large events. It's an estimate for another kind of event, not a baptism or communion rule." },
      { q: "When should a child be baptized according to the Code of Canon Law?", a: "Canon 867 says parents should take care that infants are baptized in the first few weeks of life. That's why it helps to order the boxes as soon as you have a parish date." },
    ],
    sources: [
      { label: "Code of Canon Law (Holy See): Book IV, canon 867 on the baptism of infants", url: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann834-878_en.html" },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("dulceros-para-eventos-sociales-boda-xv-baby-shower"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir")],
  },
  {
    slug: en("dulceros-para-eventos-empresariales"),
    title: "Corporate Event Favor Boxes with Your Company Logo",
    metaTitle: "Corporate Event Favor Boxes with Your Logo",
    description:
      "Personalized favor boxes with your company logo for holiday parties, anniversaries and client events: design, quantities, price and delivery times.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Favor boxes aren't just for kids' parties. With your company's logo and colors, a lunch-box-style treat box is a corporate gift that looks well put together: for the year-end posada, the company anniversary, welcome kits for new team members or a client event. This guide explains how to order corporate event favor boxes in Guadalajara or with shipping across Mexico: occasions, design, what to put inside, quantities, price and timing.",
    sections: [
      {
        heading: "Occasions where corporate favor boxes work",
        body: [
          "Personalized favor boxes work at any company event where you want each person to take home a gift with your brand: holiday parties, anniversaries, welcome kits, launches and client events. Every box carries your logo and brand colors, so the keepsake goes home with them or to their desk.",
          "These are the occasions where they make the most sense: the year-end posada or holiday party, the company anniversary, the welcome kit for new team members, a product launch, a client or supplier event, Children's Day for employees' kids, and booths at trade shows or expos.",
          "In every case the box does two jobs: it's a gift for the person, and it takes your brand home or to their desk. Unlike a generic bag, a box with your company's name and your own message makes the event look planned.",
          "For a large team, you can give one box per person. For a dinner with clients, one at each place setting looks like part of the table.",
        ],
      },
      {
        heading: "How the favor box looks with your company logo",
        body: [
          "We design the box with your logo, your brand colors and, if you like, a short message. Before production we send a digital proof, and nothing is produced until you approve it. Send your logo in PNG, PDF, AI or SVG in good quality so we can work with it.",
          "Each box is a lunch-box style box with a handle, made of opalina cardstock, and measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 in). Customization includes the name and theme, which for a company event means your logo and colors, with a message such as Thanks for a great year or Welcome to the team.",
          "When you send the logo, include your brand colors and the exact text you want. Check the spelling, the company name and the event year on the digital proof, because it's the last step before production. If several people approve, name one person to reply so you avoid back and forth.",
          "To seal or complement the gift, you can also order stickers with your logo and use them to close small bags or decorate what goes inside.",
        ],
      },
      {
        heading: "What to put inside a favor box for a company event",
        body: [
          "The box arrives assembled and empty, so you decide what goes inside: candy, a chocolate, cookies or a branded touch like stickers with your logo. It measures 15.7 × 11.7 × 9.9 cm, so it's worth assembling one test box before buying the filling for everyone.",
          "A few ideas: chocolates, cookies, traditional Mexican candy or snacks, plus something that isn't candy, like stickers with your logo or a thank-you card. Between 8 and 12 pieces of candy looks full in this box.",
          "Ask your team or guests about allergies (peanuts and chocolate are the most common) and, if in doubt, prepare an option without those ingredients too. For more ideas by type of candy, see our guide on what to put in a favor box.",
        ],
      },
      {
        heading: "How many favor boxes to order and what they cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10 and no fixed packs. Above 100 pieces it's wholesale pricing: message us on WhatsApp for a quote. Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico. You order the exact number of guests or team members.`,
          `For example, 18 boxes for a small team are $${dulceroTotal(18)}, 40 are $${dulceroTotal(40)} and 100 are $${dulceroTotal(100)}. In the Guadalajara metro area you can pick them up at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches; on orders under $${FREE_SHIPPING_THRESHOLD} pickup costs $${CASABLANCA_PRICE}.`,
          "Count the confirmed attendees and add 2 or 3 extra boxes in case someone is added at the last minute. You can pay by card, OXXO or SPEI. Note that we do not issue invoices (CFDI); if your company needs one, message us before ordering.",
          "For large orders, message us on WhatsApp before paying so we can confirm dates and any details of your event.",
        ],
      },
      {
        heading: "Delivery timing for a corporate event",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara. If approval goes through several people, start the order two or three weeks ahead.`,
          `Adding the maximum of production and national shipping gives ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, not counting the time your team takes to approve the proof. Count backwards from the event date and leave a margin.`,
          "Posadas cluster in December; if your date falls in those weeks, start earlier. The boxes arrive assembled, so on the day of the event you only need to fill and arrange them.",
        ],
      },
      {
        heading: "If you plan events for companies: how to work with us",
        body: [
          "If you plan events for companies or clients, you can order per event: the exact quantity, a design with each client's identity and a digital proof that gets approved before production. To coordinate dates and details, message us on WhatsApp before paying.",
          "A workflow that works: send us the event date, the number of attendees and the logo; review the digital proof with your client; confirm the final quantity; and place the order with a margin for shipping.",
          "Besides favor boxes, we quote stickers with logos, temporary tattoos for events and custom invitations, so the whole event shares one visual style.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I put my company logo on the favor boxes?",
        a: "Yes. Customization includes the name and theme: your logo, your colors and, if you like, a short message. We send a digital proof for you to approve before production.",
      },
      {
        q: "What file format should I send my logo in?",
        a: "PNG, PDF, AI or SVG, in good quality.",
      },
      {
        q: "What is the minimum number of boxes I can order?",
        a: "The minimum order is 10 pieces, with no fixed packs: you order the exact quantity for your event.",
      },
      {
        q: "How much do favor boxes cost for a company?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces it's wholesale pricing and is quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico.`,
      },
      {
        q: "Do the boxes include candy?",
        a: "No. They arrive assembled and empty, ready for you to fill with whatever you choose.",
      },
      {
        q: "How far ahead should I order for a year-end posada?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping. If approval goes through several people, it's best to start two or three weeks ahead.`,
      },
      {
        q: "Do you issue invoices?",
        a: "We do not issue invoices (CFDI). If your company needs one, message us before ordering.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-logo-personalizado"],
    relatedBlogSlugs: [
      en("dulceros-navidenos-personalizados"),
      en("dulceros-para-eventos-sociales-boda-xv-baby-shower"),
      en("que-poner-en-un-dulcero"),
      en("como-pedir-invitaciones-personalizadas-para-eventos"),
      en("tatuajes-temporales-personalizados-para-eventos"),
    ],
  },
  {
    slug: en("dulceros-para-eventos-sociales-boda-xv-baby-shower"),
    title: "Personalized Quinceañera Keepsakes: Favor Boxes and Details",
    metaTitle: "Personalized Quinceañera Keepsakes and Favor Boxes",
    description:
      "Personalized quinceañera keepsakes: how many to order, how to match favor boxes to the candy table, production timing and digital proofs.",
    category: "Guides",
    publishedAt: PUBLISHED,
    intro:
      "Personalized quinceañera keepsakes look best when there are fewer of them, the design is carefully considered and they match the party. At weddings, quinceañeras and baby showers, a favor box can be part of the candy table or the keepsake each family takes home at the end. Here are ideas for each event, how many keepsakes to order, what to put inside and how far ahead to order.",
    sections: [
      {
        heading: "Favor boxes for social events: what they are and when to use them",
        body: [
          "A favor box is a lunch-box-style container with a handle that arrives assembled and empty so you can choose the filling. At social events it serves as a keepsake or as part of the candy table. It is personalized with names, the date and the party colors, and you receive a digital proof before production.",
          "You can put it on the table for each guest to fill, or hand it out already filled at the end of the event. Customization includes the name and theme you choose, so the same format works for an elegant wedding, a quinceañera or a baby shower.",
        ],
      },
      {
        heading: "Weddings: favor boxes with the couple's names",
        body: [
          "For a wedding, a favor box with the couple's names and the date in the celebration's colors works well. It can go on the candy table for each guest to fill, or already filled at each place as a keepsake. Before production we send you a digital proof for approval.",
          "Colors that work well for a wedding include white and gold, sage green, terracotta or the shade of the flowers. To make it part of the decor, use the same palette as the invitation and centerpieces.",
          "If there are children at the wedding, a favor box with a more playful theme for the children's table is a detail parents appreciate.",
        ],
      },
      {
        heading: "Quinceañeras: favor boxes with the birthday girl's name",
        body: [
          "For a quinceañera, the favor box carries the birthday girl's name, the date and her party's color or theme, whether elegant, floral or another theme she chooses. You can order them for all guests or only for the court of honor and escorts, depending on your budget.",
          "If you order only for the court, remember that the minimum order is 10 pieces. If they are for all guests, count the final guest list first and add one or two extras.",
        ],
      },
      {
        heading: "Personalized quinceañera keepsakes: what options are there?",
        body: [
          "Ideas suggested by an article about personalized quinceañera keepsakes include photo magnets, keychains, mini frames, candles, candy bags, fans and bracelets. A favor box with the birthday girl's name offers something different: a keepsake with its own design that can also be part of the candy table.",
          `Yume makes the [personalized favor box](/en/products/personalized-party-favor-boxes) with the name, date and theme of your party. You can get the other details on that list, such as magnets or keychains, from another supplier. If you want to add a small detail inside the box, you can order [personalized vinyl stickers](/en/products/waterproof-vinyl-stickers) with the same design.`,
        ],
      },
      {
        heading: "How many quinceañera keepsakes to order for your guests",
        body: [
          "You do not need one keepsake per person: the article recommends one per family or couple, plus a few extras. Its example is 100 guests, for whom 60 to 70 keepsakes are enough. This is a reference from one article, so count the families and couples on your final list before deciding.",
          `For example, 65 favor boxes cost $${dulceroTotal(65)} MXN at the price for the first 100 pieces. The minimum order is 10 pieces, so you can also order a separate batch for the court, escorts or close family.`,
        ],
      },
      {
        heading: "Fewer pieces, better design: what to personalize",
        body: [
          "The article advises choosing a few attractive, useful pieces over many details nobody will use, and making the keepsake reflect the birthday girl. For a favor box, that means personalizing her name, the date and the party color or theme, which is what our customization includes.",
          "The same article suggests ordering a sample beforehand when the keepsake includes a photo. At Yume, you receive a digital proof before production, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "How to match the favor box to the candy table and party theme",
        body: [
          "Use the same palette from the invitation and decor on the favor box, and place it on the candy table for each guest to fill or hand it out already filled at the end. That way the keepsake looks like part of the planned celebration.",
          `Send us a photo of the invitation or decor and we will adapt the design to those colors. To choose a filling for your event, see [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}).`,
        ],
      },
      {
        heading: "Baby showers and gender reveals",
        body: [
          "For a baby shower, the favor box carries the baby's name, or Baby and the family name if the baby does not have a name yet, in pastel colors. For a gender reveal, a neutral design with the question boy or girl works before and after the surprise.",
          "It is an easy detail to hand out at the end of the party, and guests take home a keepsake with the baby's name.",
        ],
      },
      {
        heading: "What to put inside a favor box for your event",
        body: [
          "The favor box arrives empty, so you decide on the filling. Traditional candies, cookies, chocolates and a small detail such as stickers all work. Ask about allergies before buying and put together a test box to calculate how much of each item you need.",
          `For more ideas by age and type of event, see the guide to [what to put in a favor box](/en/blog/${en("que-poner-en-un-dulcero")}). For a wedding, choose candy that will keep well without refrigeration during the party.`,
        ],
      },
      {
        heading: "For event planners: how to order favor boxes for clients",
        body: [
          "If you organize events, agree on the names, date, colors and quantity with your client before ordering. We send you a digital proof for your client's approval, and nothing is produced until then. You can arrange everything directly by message. The minimum order is 10 pieces, so you can order for each event.",
          `Have the invitation or decor colors handy to request the design in the same palette, and tell us about them by message. If your client has more than one event, such as a baptism and first communion, see also [favor boxes for baptisms and first communions](/en/blog/${en("dulceros-para-bautizo-y-primera-comunion")}).`,
        ],
      },
      {
        heading: "How many favor boxes to order and what they cost",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10 pieces. For 50 guests the cost is $${dulceroTotal(50)} and for 80 it is $${dulceroTotal(80)}. Above 100 pieces, wholesale pricing applies: message us for a quote. National shipping is free from $${FREE_SHIPPING_THRESHOLD}. Add one or two extras in case more guests arrive.`,
          `In the Guadalajara metropolitan area, you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} parcel service branches. For more about local delivery, see [personalized favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping. For a quinceañera, the order is design, digital proof, approval, production and delivery before the event. The article recommends ordering several weeks in advance.`,
          `If you pick up at a parcel branch in Guadalajara, add ${PICKUP_EXTRA_DAYS} business day. For large events, it is best to order three or four weeks ahead. Leave that margin to adjust the design without rushing and confirm the final guest count before approving the proof.`,
        ],
      },
    ],
    faq: [
      {
        q: "Do the favor boxes include candy?",
        a: "No. The favor box arrives assembled and empty, ready to fill with the candy or details you choose.",
      },
      {
        q: "How much does a personalized favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing applies and a quote is available by message. National shipping is free from $${FREE_SHIPPING_THRESHOLD}.`,
      },
      {
        q: "What does the customization include?",
        a: "The name (of the couple, birthday girl, baby or company) and the theme you choose, including your brand logo. We send you a digital proof before production.",
      },
      {
        q: "How many favor boxes should I order for my event?",
        a: "Order for the number of guests who will receive one and add one or two extras. The minimum is 10 pieces, so you can also order just for the court, children's table or a small group.",
      },
      {
        q: "How long do they take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after proof approval, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you collect at a parcel branch in Guadalajara.`,
      },
      {
        q: "How many quinceañera keepsakes do I need for 100 guests?",
        a: "You do not need one per person. One article recommends one per family or couple plus a few extras and gives an example of 60 to 70 keepsakes for 100 guests. This is a reference from one article: count your families and couples before deciding.",
      },
      {
        q: "How far ahead should I order quinceañera keepsakes?",
        a: `One article recommends ordering several weeks ahead. At Yume, production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after digital proof approval, plus shipping or pickup. For large events, order three or four weeks ahead.`,
      },
      {
        q: "What can I personalize on a quinceañera favor box?",
        a: "The birthday girl's name, the date and the party's color or theme. You receive a digital proof before production, and nothing is produced until you approve it.",
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: [en("dulceros-para-bautizo-y-primera-comunion"), en("que-poner-en-un-dulcero"), en("dulceros-para-eventos-empresariales")],
    sources: [
      {
        label: "Quinceañera keepsake ideas with photos",
        url: "https://www.elimparcial.com/locurioso/2026/05/14/recuerdos-para-15-anos-ideas-originales-con-fotos-que-las-quinceaneras-guardaran-para-siempre/",
      },
    ],
  },
  {
    slug: en("que-poner-en-un-dulcero"),
    title: "What to Put in a Party Favor Box: Candy, Quantities and Tips",
    metaTitle: "What to Put in a Favor Box: Candy and Quantities",
    description: "What to put in a favor box: which candy to choose, how many pieces fit per guest, and how to arrange them by height, color and event type.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-11-03",
    intro:
      "A favor box looks full with 8 to 12 pieces: a chocolate, a gummy or lollipop, a spicy or sour candy, a traditional Mexican sweet and a small snack, plus a non-candy extra such as stickers. Below you'll find what to put in a favor box by candy type and age, how many pieces fit by size, how much to serve per guest at a candy table and how to arrange it by height and color.",
    sections: [
      {
        heading: "What to put in a favor box and how many per guest",
        body: [
          "An individual favor box looks full with 8 to 12 pieces of candy plus a non-candy extra, and you give one to each guest. This is a Yume estimate for a 15.7 × 11.7 × 9.9 cm lunch-box-style box, not a standard. An open candy table is calculated differently.",
          `If you don't have the box yet, see our [personalized favor boxes](/en/products/personalized-party-favor-boxes): they arrive assembled and empty, and you choose what goes inside.`,
        ],
      },
      {
        heading: "How many pieces fit in each favor box size",
        body: [
          "As a Yume estimate, a small favor box holds 5 to 7 pieces, a medium one 8 to 12 and a large one 13 to 18. These figures are intended to make the box look full without packing it tightly. They do not come from an external source, so put together a test box before buying everything.",
          "For 30 guests you need 30 favor boxes: in the medium size that means 240 to 360 pieces of candy. Example for a 10-piece medium box: 2 chocolates, 3 gummies, 2 traditional sweets, 2 spicy or sour candies and 1 snack. This is an estimate to guide you, not a fixed rule.",
        ],
        table: {
          headers: ["Size", "Pieces of candy (Yume estimate)", "Types of candy"],
          rows: [
            ["Small", "5 to 7", "3 types, and a sticker if it fits"],
            ["Medium (15.7 × 11.7 × 9.9 cm lunch box)", "8 to 12, plus an extra", "4 or 5 types"],
            ["Large", "13 to 18, plus an extra", "5 types and a snack"],
          ],
        },
      },
      {
        heading: "What to put in a favor box: list by candy type",
        body: [
          "Mix textures and flavors instead of repeating one: some chocolate, something soft, something spicy or sour and something traditional. Each guest finds something they like and the box looks varied when opened, regardless of how many pieces it contains.",
          "Chocolates: small bars, balls or chocolate coins. Almost nobody turns them down.",
          "Gummies and marshmallows: soft, colorful and easy to portion into small bags.",
          "Traditional Mexican sweets: mazapanes, cocadas, tamarind candy, palanquetas and milk candy. They add local flavor to the box.",
          "Spicy and sour candy: chili lollipops, chili-coated strips or gummies and tamarind candy.",
          "Lollipops and gum: they fill space with little bulk.",
          "Salty snacks: a small bag of chips, popcorn or coated peanuts (only if there are no allergies) balances all the sweetness.",
          "A sugar-free extra: stickers, a bracelet, bubbles or a small notebook. It is what guests keep once the candy is gone.",
          "For a more special touch, a candy bar guide recommends combining classic sweets with special items such as gummies, mini donuts, chocolates, decorated cookies, cake pops or mini brownies.",
        ],
      },
      {
        heading: "What to put in a favor box by guest age",
        body: [
          "Adjust the filling to the age: for children ages 1 to 5, soft treats in small portions; for ages 6 to 12, Mexican classics such as lollipops, mazapanes and gummies; for teens and adults, better-quality chocolates, snacks and a logo item for a company event.",
          "Ages 1 to 5: choose soft, safe treats, preferably in small portions, such as gummies, marshmallows, cookies, small chocolates, raisins or dried fruit. Avoid hard candy, whole peanuts and toys with small parts at this age, and ask parents about allergies. For an extra: crayons, bubbles, a small coloring book or large stickers.",
          "Ages 6 to 12: Mexican classics work well, including lollipops, gum, spicy candy, tamarind treats, mazapanes, chocolates, small bags of chips and gummies. For an extra, choose a small toy, a bracelet, a bouncy ball or stickers with the party's character.",
          "Teens and adults: prioritize lighter, better-quality options such as fine chocolates, snacks, gourmet candy, mini bottles of hot sauce, a keychain or a logo item for a company event.",
        ],
      },
      {
        heading: "How many grams of candy per guest at a candy table",
        body: [
          "For a candy table, a wedding guide suggests reducing the grams per guest as the wedding gets larger: about 150 g for small weddings, 100 g for medium weddings and 80 g for large weddings. This is a practical guideline that scales with the guest count, not one fixed figure or a standard.",
          "As an example, the same guide gives about 10 kg of candy as a starting point for 100 guests when the table is mostly candy. You can reduce that amount if you add mini brownies, donuts or chocolates.",
        ],
        table: {
          headers: ["Wedding size", "Grams of candy per guest (wedding guide reference)"],
          rows: [["Small", "About 150 g"], ["Medium", "About 100 g"], ["Large", "About 80 g"]],
        },
      },
      {
        heading: "How many jars do you need for a candy table",
        body: [
          "The wedding guide translates grams into medium jars: 4 to 6 for about 50 guests, 10 to 12 for 50 to 150 guests and 15 to 16 for about 200. These are a visual reference for distributing candy by variety, not an exact measure.",
        ],
        table: {
          headers: ["Guests", "Medium jars (wedding guide reference)"],
          rows: [["About 50", "4 to 6"], ["50 to 150", "10 to 12"], ["About 200", "15 to 16"]],
        },
      },
      {
        heading: "How to arrange candy by height and color",
        body: [
          "To make the table look planned, the wedding guide recommends clear containers, trays at different heights, tiered stands, wooden boxes and risers. These display the candy and add volume without crowding everything onto one level.",
          "Distribute the pieces in similar portions, without letting one candy dominate, and mix textures (creamy, crunchy, fluffy) and colors at each level.",
        ],
      },
      {
        heading: "What to adjust for a wedding, quinceañera or baptism",
        body: [
          "At a wedding, quinceañera or baptism, the favor box becomes a table detail as well as a children's treat. It can carry the name and theme you choose, and the filling deserves attention: coated almonds or fine chocolates work well for weddings and quinceañeras.",
          "If you also set up a candy table, the wedding guide says it is often placed near the dance floor or opened after the banquet. Guests take small amounts during the party because the table complements dessert rather than replacing it.",
        ],
      },
      {
        heading: "Allergies: what to check before filling a favor box",
        body: [
          "If you're inviting children you don't know well, ask about allergies before buying: peanuts and chocolate are among the most common. Keep some boxes free of those ingredients and mark them separately so no guest has to guess what they can eat.",
        ],
      },
      {
        heading: "What the favor box costs and what else to explore",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per personalized favor box, with a minimum order of 10 pieces. It arrives assembled and empty, so you choose what goes inside. Above 100 pieces, wholesale pricing applies: message us on WhatsApp for a quote. Before production we send a digital proof for you to approve the design.`,
          `For a sugar-free extra, add [vinyl stickers](/en/products/waterproof-vinyl-stickers) with the name or party character. For filling ideas for a children's party, see [children's party favor boxes](/en/blog/${en("ideas-de-dulceros-para-fiesta-infantil")}). To choose between a box, bag or cup, compare [boxes, bags and cups](/en/blog/${en("cajas-bolsas-o-vasos-dulceros-cual-elegir")}). And if you're in Guadalajara, see [favor boxes in Guadalajara](/en/blog/${en("dulceros-personalizados-guadalajara")}).`,
        ],
      },
    ],
    faq: [
      { q: "What candy goes in a favor box?", a: "A mix of chocolate, gummies or lollipops, a spicy or sour candy, a traditional Mexican sweet and a small snack, plus one non-candy extra. Adjust the mix to the guests' ages." },
      { q: "How much candy goes in a favor box?", a: "8 to 12 pieces of candy plus one extra looks full in a 15.7 × 11.7 × 9.9 cm lunch-box-style box. This is a Yume estimate: put together a test box before buying everything." },
      { q: "How many pieces fit in a small, medium and large favor box?", a: "This is a Yume estimate, not an external source: 5 to 7 pieces in a small box, 8 to 12 in a medium box and 13 to 18 in a large box." },
      { q: "How many grams of candy per guest should I plan for a candy table?", a: "According to a candy bar guide, about 150 g per guest at small weddings, 100 g at medium weddings and 80 g at large weddings. It is a practical guideline, not a standard." },
      { q: "How many kilograms of candy do I need for 100 guests?", a: "A wedding guide gives about 10 kg as a starting point for 100 guests if the table is mostly candy. You can reduce it if you add mini brownies, donuts or chocolates." },
      { q: "How many jars do I need for a candy table?", a: "As a wedding guide reference, 4 to 6 medium jars for about 50 guests, 10 to 12 for 50 to 150 guests and 15 to 16 for about 200." },
      { q: "Which candy is safe for kids ages 1 to 5?", a: "Soft gummies, marshmallows, cookies, small chocolates, raisins or dried fruit. Avoid hard candy, whole peanuts and toys with small parts." },
      { q: "What can I put in the box besides candy?", a: "Stickers with the name or party character, crayons, bubbles, a bracelet or a bouncy ball." },
      { q: "How do I avoid allergy problems in a favor box?", a: "Ask parents if you don't know the guests well. Peanuts and chocolate are among the most common: if in doubt, prepare a few boxes without those ingredients and mark them separately." },
      { q: "How much does a personalized favor box cost?", a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces, wholesale pricing applies and is quoted on WhatsApp.` },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("ideas-de-dulceros-para-fiesta-infantil"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir"), en("dulceros-personalizados-guadalajara")],
  },
  {
    slug: en("dulceros-de-halloween"),
    title: "Personalized Halloween Treat Boxes for Kids and Parties",
    metaTitle: "Personalized Halloween Treat Boxes",
    description:
      "Ideas for personalized Halloween treat boxes for parties, school or trick-or-treating: designs, what to put inside and how far ahead to order before October 31.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Halloween is one of the busiest dates for treat boxes in Mexico, along with Christmas and Children's Day. A personalized treat box with the child's name works for the class party, for handing out at a costume party or even for trick-or-treating. Here are design ideas, what to put inside, what it costs and the real timing so it arrives before October 31.",
    sections: [
      {
        heading: "Which Halloween treat box to choose",
        body: [
          "For Halloween, choose a treat box with the recipient's name and a seasonal theme in orange, purple and black. It works for the class party, a costume birthday or trick-or-treating, and it arrives assembled and empty so you decide what goes inside.",
          "Our box is lunch-box style, with a handle, and the customization includes name and theme. The handle makes it easy to carry, whether at a party or door to door.",
        ],
      },
      {
        heading: "Design ideas",
        body: [
          "The classics are pumpkins, ghosts, bats, black cats and spiderwebs in orange, purple and black. For little ones, a cute version, like smiling ghosts or pumpkins with faces, works better than a scary one. With the child's name on the front, the box also becomes their trick-or-treat box.",
          "If you already have the costume or the party decor, send us a photo and we will match the design colors. Before production we send you a digital proof, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "For the class or office party",
        body: [
          "For the classroom, use one design with the class or school name; for an office or business, a Halloween design with your logo. Each box is customized with name and theme, and you can order the exact number of students or guests starting at 10 pieces, with no fixed packs.",
          "Add 1 or 2 extra boxes in case a last-minute guest shows up or one gets damaged while filling.",
        ],
      },
      {
        heading: "What to put inside a Halloween treat box",
        body: [
          "The box arrives empty, so you choose the filling. Wrapped seasonal candy, cookies, gummies and a small extra like stickers in the same design all work. For very young children, the FDA recommends removing gum, peanuts, hard candies and small toys, which are choking hazards.",
          "The FDA also says to check the label of packaged treats if a child has a food allergy. If you do not know the guests well, ask their parents before buying, and fill one test box to estimate how much candy you need. For more ideas by age, see our guide on what to put in a party favor box.",
        ],
      },
      {
        heading: "Price and how many to order",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10 pieces, so you order exactly the number of guests or students. 10 boxes are $${dulceroTotal(10)}, 20 are $${dulceroTotal(20)} and 30 are $${dulceroTotal(30)}. Above 100 pieces it is wholesale pricing: message us on WhatsApp for a quote.`,
          `Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico. In the Guadalajara metro area you can pick up for $${CASABLANCA_PRICE} MXN at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca courier branches.`,
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping (or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara). Adding the maximum of both is ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, so an order placed in the last days of October may not arrive by the 31st.`,
          "If your event is after the 31st, such as a school festival or a November get-together, you are still on time: a seasonal design in orange and purple works for those dates too. For November see our Day of the Dead guide, and if you are already thinking about posadas, our Christmas treat box guide.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("ideas-de-dulceros-para-fiesta-infantil"), en("dulceros-dia-de-muertos-noviembre"), en("dulceros-navidenos-personalizados"), en("dulceros-personalizados-guadalajara")],
    faq: [
      {
        q: "Do the Halloween treat boxes come with candy?",
        a: "No. The box arrives assembled and empty, ready to fill with the candy or extras you choose.",
      },
      {
        q: "How much does a personalized Halloween treat box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN each, with a minimum order of 10. Above 100 pieces it is wholesale pricing, quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico.`,
      },
      {
        q: "What does the customization include?",
        a: "The name (of the child, the group or your company) and the theme you choose, including your brand logo. We send a digital proof before producing.",
      },
      {
        q: "How long do they take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara.`,
      },
      {
        q: "What should I leave out of a very young child's treat box?",
        a: "The FDA recommends removing gum, peanuts, hard candies and small toys from the bag of very young children, because they are choking hazards.",
      },
      {
        q: "What if a child has allergies?",
        a: "According to the FDA, if a child has a food allergy, check the label to make sure the allergen is not present. Ask the parents before filling the boxes.",
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
    slug: en("cajas-bolsas-o-vasos-dulceros-cual-elegir"),
    title: "Favor Boxes vs. Goodie Bags vs. Treat Cups: Which Works for Your Party",
    metaTitle: "Favor Boxes vs. Goodie Bags vs. Treat Cups",
    description:
      "Favor boxes, goodie bags, treat cups or fabric pouches: compare presentation, personalization, price and which one suits your party or event.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Look for party favors and you'll find lots of options: cellophane or paper goodie bags, plastic treat cups, fabric pouches and cardstock boxes. None is best at everything; it depends on the occasion, guest age and how much you want the favor to look like part of the decor. This comparison helps you decide, with the price, size and timing of our personalized box so you can compare with real numbers.",
    sections: [
      {
        heading: "What to compare before you decide",
        body: [
          "Compare four things: whether it stands up on the table, how much surface you have to personalize, whether it arrives ready to fill and how many pieces you need. A bag or a cup solves quantity; a box also solves presentation. Settle the occasion and guest count first, then the format.",
          "If the event has a candy table, photos or a set color palette, presentation matters more. If the favor is handed out at the door and goes straight to the car, simple matters more. With small children, also think about whether they can carry it themselves.",
        ],
      },
      {
        heading: "Goodie bags",
        body: [
          "Goodie bags are the easiest option to find, but they sag under the weight, don't stand up on the table and are almost always personalized only with a label or sticker on the front. They work for very large parties or as an inner bag inside another favor.",
          "If you go with bags, a sticker with the name and theme helps them look more polished. You can look at our waterproof vinyl stickers for that touch.",
        ],
      },
      {
        heading: "Treat cups and fabric pouches",
        body: [
          "Plastic treat cups are reusable, but they take up space, are hard to personalize with a name and the theme is usually generic. Fabric pouches look nice and can be reused, though they cost more and adding a name raises the price of each piece. They make sense when a second use matters more than presentation.",
          "What to watch is the table: a cup or a pouch can't carry a full design with the name and theme, so the result depends more on what you put around it.",
        ],
      },
      {
        heading: "Lunch-box-style favor boxes",
        body: [
          "A lunch-box-style favor box stands on its own, looks tidy on the candy table and is fully personalized: the name and the theme cover the whole design, not just a label. It has a handle for kids to carry and room for candy and a small gift.",
          "At Yume we make it in opaline cardstock, 15.7 × 11.7 × 9.9 cm, with the name and theme you choose. It arrives assembled and empty, without candy, ready to fill. Before production we send a digital proof, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "For weddings, baby showers, baptisms and other events",
        body: [
          "For a wedding, a baby shower or a baptism, the personalized box is the better fit: the design takes the event's colors and the name or date, and it looks like part of the candy table. For planners, it's one detail per event, with a digital proof and direct contact on WhatsApp.",
          "Send us a photo of the invitation or the decor and we'll match the design to those colors. For a company, you can add your logo. If your event needs something different from what we describe here, message us on WhatsApp and we'll go over it with you before you decide. For more ideas by occasion, see our guides to favor boxes for social events, for baptisms and first communions, and for graduations.",
        ],
      },
      {
        heading: "Price and how many to order",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10. 10 boxes are $${dulceroTotal(10)}, 20 are $${dulceroTotal(20)} and 30 are $${dulceroTotal(30)}. Above 100 pieces it's wholesale pricing, quoted on WhatsApp. You order the exact number of guests, with no fixed packs.`,
          `Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico. In the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches. Add 1 or 2 extra in case a guest shows up last minute.`,
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping (or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara). Count back from your event date and leave room to review the proof.`,
          "If you're torn between formats, assemble one test box with your candy before ordering everything, to see how the filling fits. Our guide on what to put in a favor box has a list by age.",
        ],
      },
      {
        heading: "Which to choose",
        body: [
          "Pick a goodie bag if you need something simple for lots of guests, a cup or pouch if you want something reusable, and a personalized box if you want the favor to match the party, carry the birthday child's name and look like part of the decor. It's the option that stands out most on the table.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [
      en("ideas-de-dulceros-para-fiesta-infantil"),
      en("que-poner-en-un-dulcero"),
      en("dulceros-personalizados-guadalajara"),
      en("dulceros-para-eventos-sociales-boda-xv-baby-shower"),
      en("dulceros-para-bautizo-y-primera-comunion"),
      en("dulceros-para-graduacion"),
    ],
    faq: [
      {
        q: "Which is better for party favors: a box, a bag or a cup?",
        a: "It depends on the occasion. Bags are simple for big groups, cups and pouches are reusable, and the personalized box stands on its own, carries the name and theme across the whole design and looks like part of the decor.",
      },
      {
        q: "How much does a personalized favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces it's wholesale pricing, quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico.`,
      },
      {
        q: "What size and material is the box?",
        a: "It measures 15.7 × 11.7 × 9.9 cm, has a handle and is made of opaline cardstock. It arrives assembled.",
      },
      {
        q: "Do the favor boxes include candy?",
        a: "No. The box arrives assembled and empty, ready to fill with the candy or extras you choose.",
      },
      {
        q: "What does the customization include?",
        a: "The name (of the birthday child, the group or your company) and the theme you choose, including your logo if it's for a business. We send a digital proof before production.",
      },
      {
        q: "How long does it take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping.`,
      },
    ],
  },
  {
    slug: en("dulceros-dia-de-muertos-noviembre"),
    title: "Party Favor Boxes for Day of the Dead and November: Ideas for the Classroom and the Party",
    metaTitle: "Day of the Dead and November Party Favor Boxes",
    description:
      "Ideas for personalized favor boxes for Day of the Dead and November: designs for the class and the party, what to put inside, how many to order and when.",
    category: "Guides",
    publishedAt: "2026-10-28",
    intro:
      "November opens with Day of the Dead and continues with school festivals, birthdays and get-togethers before the posada season starts. A favor box (a dulcero, in Mexico) with a name and a seasonal theme turns ordinary candy into a gift that looks planned. Here are design ideas for the classroom and the party, what to put inside, what it costs and, most of all, how far ahead to order.",
    sections: [
      {
        heading: "Which favor box suits Day of the Dead and November",
        body: [
          "For Day of the Dead and November, pick a favor box with the recipient's name and a seasonal theme, such as flowers, paper cut-outs or little skulls, in orange, purple and pink. It works for the classroom, a family party or an office get-together, and it arrives assembled and empty so you choose what goes inside.",
          "If you're giving them out at a business or school, you can add the group name, the school name or your logo. Our box is lunch-box style, with a handle, and the customization includes a name and a theme.",
        ],
      },
      {
        heading: "A date with tradition: what UNESCO says",
        body: [
          "In 2008 UNESCO inscribed Mexico's indigenous festivity dedicated to the dead on the Representative List of the Intangible Cultural Heritage of Humanity. According to its entry, it takes place each year from the end of October to the beginning of November, and families prepare the deceased's favorite dishes and decorate with flowers and paper cut-outs.",
          "So it's worth designing with respect: warm colors, flowers, cut paper and a clearly visible name work better than a scary image. For a school festival, a friendly, colorful design is the easiest to get right with kids of any age.",
        ],
      },
      {
        heading: "Design ideas for the classroom and the party",
        body: [
          "For the classroom, the most practical choice is one design for the whole group with the school or class name and a Day of the Dead theme in bright colors. For a family party or a November birthday, the same design with the birthday child's name feels more personal.",
          "For an office or business get-together, use your brand colors with a seasonal touch and your logo, so it feels festive without losing your image. If you want the box to stay useful after November, a design with just colors and a name also works for other parties.",
          "Send us a photo of the invitation or the decor and we'll match the design to those colors. We send a digital proof before production, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "What to put inside a November favor box",
        body: [
          "The box arrives empty, without candy, so you decide the filling. For this season, sugar or chocolate little skulls, traditional Mexican candy, cookies, gummies and a small extra like stickers with the same design all work well.",
          "For preschoolers, avoid hard candy and small pieces they could swallow. Ask about allergies before you buy (peanut and chocolate are the most common) and assemble one as a test to work out how much you need. For more ideas by age, see our guide on what to put in a party favor box.",
        ],
      },
      {
        heading: "Price and how many to order",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10, so you order exactly the number of guests or students. 10 boxes are $${dulceroTotal(10)}, 20 are $${dulceroTotal(20)} and 30 are $${dulceroTotal(30)}. Above 100 pieces it's wholesale pricing: message us on WhatsApp for a quote.`,
          `Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico. In the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches. Add 1 or 2 extra in case a guest shows up last minute.`,
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping (or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara). With those timings, an order placed at the end of October won't arrive for November 1 and 2.`,
          "If your event is in the weeks after, such as a school festival, a birthday or an end-of-month get-together, order as soon as you can. And if you're already thinking about posadas, the same order can cover both dates with a neutral-color design; for a Christmas one, see our Christmas treat boxes guide.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("dulceros-de-halloween"), en("que-poner-en-un-dulcero"), en("dulceros-navidenos-personalizados"), en("dulceros-personalizados-guadalajara")],
    faq: [
      {
        q: "Do the favor boxes include candy?",
        a: "No. The box arrives assembled and empty, ready to fill with the candy or extras you choose.",
      },
      {
        q: "How much does a personalized favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces it's wholesale pricing, quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico.`,
      },
      {
        q: "What does the customization include?",
        a: "The name (of the birthday child, the group or your company) and the theme you choose, including your brand logo. We send a digital proof before production.",
      },
      {
        q: "How long does it take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara.`,
      },
      {
        q: "When is Day of the Dead celebrated?",
        a: "According to UNESCO's entry, the indigenous festivity dedicated to the dead takes place each year from the end of October to the beginning of November.",
      },
    ],
    sources: [
      {
        label: "UNESCO: Indigenous festivity dedicated to the dead (Representative List of the Intangible Cultural Heritage of Humanity, 2008)",
        url: "https://ich.unesco.org/en/RL/indigenous-festivity-dedicated-to-the-dead-00054",
      },
    ],
  },
  {
    slug: en("cuantos-souvenirs-pedir-por-evento"),
    title: "How Many Party Favors to Order per Event: A Guide by Party Type",
    metaTitle: "How Many Party Favors to Order per Event",
    description:
      "How many party favors to order per event: how to count for weddings, quinceañeras, baptisms and kids' parties, what margin to use and when to lock the final number.",
    category: "Guides",
    publishedAt: "2026-11-07",
    modifiedAt: "2026-11-07",
    intro:
      "If you plan an event, or several at once, the question of how many party favors to order always comes up before you close the order. Ordering too few leaves a guest without a keepsake, and ordering too many raises the cost for nothing. Here is how to count by party type, a formula for your spreadsheet and the moment to lock the final number.",
    sections: [
      {
        heading: "How many party favors to order per event: the base rule",
        body: [
          "Start from confirmed guests and add a small margin. The Hacecuentas calculator uses 1.1 favors per guest at adult events, that is 10% extra, to cover an unlisted plus-one or a piece that gets damaged. For kids' birthdays it counts 1 per child and you add two or three by hand.",
          "That calculator covers only two cases: adult events and kids' birthdays. For weddings, quinceañeras, baptisms, baby showers and company events we found no verifiable rule in open sources, so we won't give you an invented figure. In those cases the decision is yours: which unit you count and how much margin gives you peace of mind.",
          "The 10% margin has an easy logic: it covers someone who arrives without notice or a piece that doesn't turn out as expected. If your list is already closed and confirmed, the margin can be small. If answers are still missing, it is better to have them before you calculate.",
        ],
      },
      {
        heading: "Confirmed guests or total guests: which to count",
        body: [
          "Count confirmed guests, not the total number of invitations sent. A total list includes people who may not attend, and producing extra raises the cost for nothing. Keep two separate figures in your sheet: confirmed guests and pieces to produce, and calculate the second from the first.",
          "Imagine a wedding with 120 invitations sent and 90 confirmations. Your starting point is 90, not 120. With the adult reference of 1.1, 90 times 1.1 is 99 pieces. If more confirmations arrive later, you update the first figure and recalculate the second, without touching the rest of your sheet.",
          "Separating the two figures also helps when talking to your client. They think in people and you think in pieces. When both see how many are confirmed and how many pieces that means, it is easier to explain why the order doesn't exactly match the guest list.",
        ],
      },
      {
        heading: "Table by party type: how to count at each event",
        body: [
          "The table shows which unit makes sense to count at each type of event. A margin figure is given only where an open source provides one: adults and kids' birthdays. For weddings, quinceañeras, baptisms, baby showers and company events, you agree the unit and margin with your client before production.",
          "At a kids' birthday the unit is the child. With 25 confirmed children, the reference gives 25 plus two or three, that is between 27 and 28 pieces.",
          "At a wedding, a quinceañera or a baptism, whole families often attend. So the question is not just how many people come, but whether one keepsake covers the whole family or each person gets their own. That decision depends on the style of the event and the budget, and you make it with your client.",
        ],
        table: {
          headers: ["Party type", "How to count", "Reference margin"],
          rows: [
            ["Wedding", "Per guest, couple or family, as agreed with your client", "No verifiable rule. If you count per adult guest, reference of 1.1 (Hacecuentas)"],
            ["Quinceañera", "Per guest, couple or family, as agreed with your client", "No verifiable rule. If you count per adult guest, reference of 1.1 (Hacecuentas)"],
            ["Baptism", "Per guest or per family, depending on the event", "No verifiable rule. If you count per adult guest, reference of 1.1 (Hacecuentas)"],
            ["Baby shower", "Per guest or per family, depending on the event", "No verifiable rule. If you count per adult guest, reference of 1.1 (Hacecuentas)"],
            ["Kids' birthday", "Per child", "1 per child plus 2 or 3 extra by hand (Hacecuentas)"],
            ["Company event", "Per confirmed attendee", "No verifiable rule. If you count per adult attendee, reference of 1.1 (Hacecuentas)"],
          ],
        },
      },
      {
        heading: "Formula for planners: from the confirmed list to pieces to produce",
        body: [
          "Pieces to produce equal the confirmed units times the margin factor. The unit can be guest, couple, family or child. With 80 confirmed adult guests and a factor of 1.1 you get 88 pieces. Use one row per event in your sheet, each with its own party type, unit and factor.",
          "That way every event has its own figure and you don't carry one event's margin into another. The minimum columns are four: party type, counting unit, confirmed and factor. The fifth, pieces to produce, calculates itself.",
          "To decide what goes in each piece, see the guide on [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box). If your client prefers another keepsake, such as [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), the formula is the same: count first and apply the margin after. You can also see [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
      {
        heading: "What to agree with your client before production",
        body: [
          "Agree three things in writing: which unit is counted (guest, couple, family or child), the closing date for the confirmed list and who approves the digital proof. With those three decisions the piece count stops changing and your client knows what to expect.",
          "At a company event, also define whether attendees include client guests and whether there is advance registration, because the confirmed list comes from there. At a wedding or a quinceañera, clarify whether the keepsake is for each person or for each family.",
          "Before production we send you a digital proof, and nothing is produced until you approve it. That is why the final piece count is closed together with that approval and not before.",
        ],
      },
      {
        heading: "When to lock the final number of pieces",
        body: [
          "Lock the final number when your client has the definitive confirmed list and approves the digital proof, because production days are counted from that approval. Before that, keep adjusting your sheet and confirm any doubt on WhatsApp.",
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping. With those timelines, close the confirmed list with room to spare before the event date.`,
        ],
      },
      {
        heading: "Favor box prices by quantity",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per favor box, with a minimum order of 10 pieces, so you can order the quantity you calculated. Above 100 pieces it's wholesale pricing: message us on WhatsApp and we'll quote you. Orders from $${FREE_SHIPPING_THRESHOLD} ship free within Mexico.`,
          `Following the examples above, 88 favor boxes are $${dulceroTotal(88)} and 99 are $${dulceroTotal(99)}. You can see the details of the [personalized favor boxes](/en/products/personalized-party-favor-boxes) and choose the exact quantity from your formula.`,
        ],
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("dulceros-navidenos-personalizados")],
    sources: [
      { label: "Hacecuentas: guest gift calculator (party favors)", url: "https://hacecuentas.com/calculadora-regalos-invitado-souvenir" },
    ],
    faq: [
      {
        q: "How many party favors should I order per guest?",
        a: "Hacecuentas uses 1.1 per guest at adult events, that is 10% extra. For kids' birthdays it uses 1 per child and recommends adding 2 or 3 by hand.",
      },
      {
        q: "Do I count confirmed guests or the total list?",
        a: "Confirmed guests. Calculate the pieces to produce from that figure and update it if more confirmations arrive before you approve the digital proof.",
      },
      {
        q: "Is there a rule for weddings, quinceañeras or baptisms?",
        a: "We found no verifiable rule in open sources for those events. The counting unit and the margin are agreed with your client before production.",
      },
      {
        q: "What is the minimum order for favor boxes and how much do they cost?",
        a: `The minimum order is 10 pieces. First 100 pieces: $${dulceroUnit} MXN per favor box. Above 100 pieces it's wholesale pricing, quoted on WhatsApp.`,
      },
      {
        q: "How long does it take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping.`,
      },
    ],
  },
];
