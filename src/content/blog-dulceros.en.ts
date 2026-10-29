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
      "How much personalized lunch-box-style party favor boxes cost, what size they are, what the customization includes, and how to order them in Guadalajara or anywhere in Mexico.",
    category: "Guides",
    publishedAt: PUBLISHED,
    intro:
      "A party favor box (in Mexico, a dulcero) is the little box every guest takes home when the party ends. With the birthday child's name and the party theme on it, it stops being a generic bag and becomes part of the decor. At Yume we make them lunch-box style, with a handle, from Guadalajara with shipping across Mexico. This guide covers everything you need to know before ordering: price, size, material, timing and how the design works.",
    sections: [
      {
        heading: "How much personalized favor boxes cost",
        body: [
          "Each box is $75 MXN with a minimum order of 10, so you can order the exact number of guests: 10 boxes are $750, 12 are $900, 20 are $1,500 and 30 are $2,250. There are no fixed packs of 50 or 100.",
          "Orders from $750 MXN ship free across Mexico, and that's exactly 10 boxes. If you're in the Guadalajara metro area, you can also pick them up for $20 at any of the 11 Casa Blanca parcel branches.",
        ],
      },
      {
        heading: "Size and material",
        body: [
          "The box measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 inches), with a handle. It's a comfortable size for kids and adults: it fits a good handful of candy, a small toy or a little gift without looking empty.",
          "It's made of opaline cardstock, a smooth, sturdy cardstock that gives the print a clean finish and holds the weight of the candy. It arrives assembled and ready to fill, so there's no folding or gluing the night before the party.",
        ],
      },
      {
        heading: "What the customization includes",
        body: [
          "Each box carries the name you tell us (the birthday child, the couple, the baby or your company) and the theme you choose: the child's favorite character, a color palette, a sport, a Christmas style or your brand logo for a corporate event.",
          "Before production we send you a digital proof of the design by WhatsApp or email. You can ask for changes at that stage, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "Turnaround and how to order",
        body: [
          "Production takes 3 to 5 business days after you approve the proof. Add 2 to 5 days for courier shipping, or 1 business day if you pick up at a Casa Blanca branch in Guadalajara. To avoid a rush, order at least two weeks before your party, and earlier in busy seasons like Christmas or the end of the school year.",
          "You can order from the online shop by choosing the quantity and paying by card, OXXO or SPEI, or get a quote on WhatsApp first if you want to talk through the theme before paying.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
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
    intro:
      "The favor box is one of the last things kids take from the party, and often the first thing they show off at home. That's why it's worth matching it to the birthday theme and putting the birthday child's name on it. Here are practical ideas for choosing the design, working out how many to order, and making favor boxes that look like part of the party.",
    sections: [
      {
        heading: "Pick the theme from the party, not the other way around",
        body: [
          "The easiest way to get it right is to use the same theme as the cake, the invitations or the decorations: the child's favorite character or show, dinosaurs, unicorns, soccer, outer space, or simply their favorite colors.",
          "If the party has no set character, a two- or three-color palette with the name big on the front works great for boys and girls alike. Send us a photo of the invitation or the decor and we'll match the box design to those colors.",
        ],
      },
      {
        heading: "The name: the birthday child or each guest",
        body: [
          "Most often every box carries the birthday child's name and age, for example Sofia 7: that way the box doubles as a keepsake of the birthday.",
          "If you want something extra for a small group (cousins, a classroom), mention it when you request a quote and we'll go over whether it makes sense to put each guest's name on their own box.",
        ],
      },
      {
        heading: "How many to order",
        body: [
          "Count the invited kids and add 2 to 4 extra for siblings who show up unannounced or last-minute guests. With a minimum of 10 and a price of $75 MXN each, you can order exactly what you need: 15 boxes are $1,125 and 25 are $1,875.",
          "If you're also giving favors to the adults, consider a slightly more understated design with the same name, or just the same theme: they can go in a single order.",
        ],
      },
      {
        heading: "Small touches that make a difference",
        body: [
          "Stickers with the same character or the birthday child's name inside the box are a detail kids love and keep using long after the party. You can order those from us too, in waterproof vinyl.",
          "Fill the boxes the night before or the morning of the party, already assembled, and set them out together on a table near the exit: they become part of the decor and nobody leaves without theirs.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I add stickers with the birthday child's name to the favor boxes?",
        a: "Yes. Stickers with the same character or the birthday child's name are something we can make for you too, in waterproof vinyl.",
      },
      {
        q: "When should I fill the favor boxes?",
        a: "The night before or the morning of the party, already assembled, set out together on a table near the exit.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir")],
  },
  {
    slug: en("dulceros-navidenos-personalizados"),
    title: "Personalized Christmas Treat Boxes for Posadas, School and Gift Exchanges",
    metaTitle: "Personalized Christmas Treat Boxes",
    description:
      "Ideas for personalized Christmas treat boxes for posadas, school holiday shows, gift exchanges and year-end parties: designs, what to put inside and when to order so they arrive on time.",
    category: "Guides",
    publishedAt: PUBLISHED,
    intro:
      "December is the busiest season for treat boxes in Mexico: posadas, school holiday shows, office parties and gift exchanges. A Christmas treat box with a name turns the classic bag of holiday candy into a gift that looks thought-out. This guide covers design ideas, what to put inside and, most importantly, how far ahead to order.",
    sections: [
      {
        heading: "Christmas design ideas",
        body: [
          "The classics work: red and green with gold details, snow and pine trees, a Nordic red-and-white style, or a more kid-friendly theme with Santa, reindeer and snowmen. For a school show, a design with the class or group name looks great; for a family posada, the family name or each child's name.",
          "If you're giving them at your business or company, use your brand colors with a Christmas touch and your logo: festive without losing your look.",
        ],
      },
      {
        heading: "For posadas and holiday candy",
        body: [
          "At a posada, the lunch-box-style treat box is a great replacement for the traditional aguinaldo candy bag: it holds a good handful of candy, peanuts, colación or small tangerines, and the handle makes it easy for kids to carry while they take turns at the piñata.",
          "It measures 15.7 × 11.7 × 9.9 cm and arrives assembled, so on the day of the posada you only need to fill it.",
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          "Production takes 3 to 5 business days after you approve the digital proof, plus shipping. In December couriers slow down and holidays don't count as business days, so the safest bet is to order in November or, at the latest, the first week of December for posadas from the 16th to the 24th.",
          "If you're in Guadalajara, picking up at a Casa Blanca branch ($20 MXN) is usually faster than national shipping: it arrives 1 business day after production ends.",
        ],
      },
      {
        heading: "Pricing for large groups",
        body: ["Each box is $75 MXN with a minimum of 10, so a class of 30 kids is $2,250 and a posada for 20 guests is $1,500. Orders from $750 MXN ship free across Mexico."],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: [en("etiquetas-navidenas-personalizadas"), en("dulceros-para-eventos-empresariales"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara")],
  },
  {
    slug: en("dulceros-para-dia-del-nino"),
    title: "Children's Day Party Favor Boxes: Ideas for the Classroom, School and Family",
    metaTitle: "Children's Day Party Favor Boxes",
    description:
      "How to organize favor boxes for Children's Day in Mexico (April 30) for a whole class or school: designs, how many to order, what to put inside and how far ahead to place the order.",
    category: "Guides",
    publishedAt: PUBLISHED,
    intro:
      "April 30, Children's Day (Día del Niño) in Mexico, is one of the busiest dates of the year for favor boxes, especially for teachers, parent committees and schools that want to give each student something special. A box with each child's name or the class name feels much more special than a generic bag. Here's how to organize it without the stress.",
    sections: [
      {
        heading: "One design for the whole class",
        body: [
          "For a classroom, the most practical option is one design for everyone with the class or school name and a message like Happy Children's Day. A neutral theme (bright colors, games, outer space, animals) works for boys and girls alike.",
          "If the group is small, tell us when you request a quote if you'd like each student's name on their box and we'll work out the list with you.",
        ],
      },
      {
        heading: "How many to order and what it costs",
        body: [
          "Each box is $75 MXN with a minimum of 10, so you order exactly the number of students: a class of 25 is $1,875 and a class of 32 is $2,400. Order 1 or 2 extra in case a new student joins or one gets damaged while filling.",
          "If the parent committee splits the cost, the per-child price is clear from the start: $75 MXN per box, with free national shipping from $750.",
        ],
      },
      {
        heading: "What to put inside by age",
        body: [
          "For preschoolers, avoid hard candy and small toys with parts that could be swallowed; go for soft gummies, cookies, a larger toy or crayons. For elementary school, lollipops, chocolate, spicy Mexican candy, stickers and a small toy all work well.",
          "Check with the school whether any students have allergies (peanuts, chocolate) before buying the candy: it's easier to adapt every box than to make a different one on the day.",
        ],
      },
      {
        heading: "When to order",
        body: [
          "Since April often overlaps with the Easter break, it's best to order in late March or early April. Production takes 3 to 5 business days after you approve the digital proof, plus shipping; they arrive assembled, ready to fill.",
        ],
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: [en("que-poner-en-un-dulcero"), en("ideas-de-dulceros-para-fiesta-infantil"), en("dulceros-para-graduacion")],
  },
  {
    slug: en("dulceros-para-graduacion"),
    title: "Graduation Favor Boxes for Kindergarten, Elementary and Middle School",
    metaTitle: "Graduation Favor Boxes for Kindergarten and School",
    description:
      "Personalized graduation favor box ideas for kindergarten, elementary and middle school: designs with the class year, how many to order and when to order for the end of the school year.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "Graduation favor boxes are one of the fastest-growing searches in this category. They close out the school year with a gift for each graduate or for the ceremony guests, and they stay as a keepsake of the class. This guide covers which box to choose, design ideas for each level, what to put inside, what it costs and how to organize the order in time, especially if you are coordinating from the graduation committee.",
    sections: [
      {
        heading: "Which favor box suits a graduation",
        body: [
          "For a graduation, pick a box with the graduate's or the class's name, the school colors and the date. Ours is lunch-box style, with a handle, made of opaline cardstock and measures 15.7 × 11.7 × 9.9 cm. It arrives assembled and empty, so you choose what goes inside.",
          "Customization includes a name and a theme, so the same box works for kindergarten, elementary or middle school: only the design changes. We send a digital proof before production, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "Design ideas by level",
        body: [
          "For kindergarten, a cheerful design with a graduation cap and the child's name works; for elementary and middle school, the school colors with the class year. A box with a graduate's name is a personal keepsake; for ceremony guests, the class year and date are enough.",
          "For kindergarten, a cheerful design with a graduation cap, the child's name and I graduated! works great. For elementary and middle school, the school colors with the class year (for example, Class of 2021-2027) and the school crest or mascot feel more formal.",
          "If you have the crest, the logo or a photo of the uniform, send it along with the ceremony invitation and we'll match the design to those colors. Check the spelling of every name and the class year on the digital proof carefully, since it's the last step before production.",
        ],
      },
      {
        heading: "What to put inside a graduation favor box",
        body: [
          "The box arrives empty, so you decide the filling. For a graduation, chocolates, gummies, cookies and traditional Mexican candy work well, plus a non-candy extra such as stickers with the class name. Between 8 and 12 pieces of candy looks full in this box.",
          "For kindergarten, avoid hard candy, whole peanuts and toys with small parts that could be swallowed; go for soft gummies, cookies or small chocolates. For elementary and middle school you can add lollipops, spicy candy, mazapanes and snacks.",
          "Ask the school or the parents about allergies before buying (peanuts and chocolate are the most common) and put together a test box to work out how much you need. For a full list by type of candy and age, see our guide on what to put in a party favor box. If you want an extra touch, we also make water-resistant vinyl stickers with the name or crest of the class.",
        ],
      },
      {
        heading: "How many to order and what it costs",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10, so you order exactly the number of graduates or guests. 20 boxes are $${dulceroTotal(20)} and 40 are $${dulceroTotal(40)}. Above 100 pieces it's wholesale pricing: message us on WhatsApp for a quote.`,
          `Orders from $${FREE_SHIPPING_THRESHOLD} MXN ship free across Mexico. In the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches.`,
          "If a graduation committee is organizing, confirm the final list of students before approving the digital proof: that's the best moment to fix names. Add 1 or 2 extra boxes in case a guest or a student is added at the last minute.",
        ],
      },
      {
        heading: "When to order for the end of the school year",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara. Since graduations cluster in June and July, order three or four weeks ahead.`,
          "Graduations in Mexico cluster in June and July, and lots of orders come in during those weeks. If design approval goes through several people on the committee or at the school, start even earlier. They arrive assembled, so on the day of the event you only need to fill and arrange them.",
        ],
      },
      {
        heading: "How to place the order step by step",
        body: [
          "You choose the quantity in the online store or ask for a quote on WhatsApp, send us the name and theme, review the digital proof and, once you approve it, production starts. Nothing is produced before your approval. You can pay by card, OXXO or SPEI.",
          "If you'd like to talk through the design before paying, message us on WhatsApp with the ceremony date, the school level and the approximate number of graduates. Note that we do not issue invoices (CFDI); if the school or committee needs one, message us before ordering.",
        ],
      },
    ],
    faq: [
      {
        q: "Do the graduation favor boxes include candy?",
        a: "No. The box arrives assembled and empty, ready to fill with the candy or extras you choose.",
      },
      {
        q: "How much does a graduation favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN per piece, with a minimum order of 10. Above 100 pieces it's wholesale pricing, quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico.`,
      },
      {
        q: "What size is the box?",
        a: "It measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 inches), has a handle and is made of opaline cardstock.",
      },
      {
        q: "Can I put the class name and each graduate's name?",
        a: "Yes. Customization includes a name and a theme: it can be the class year and date for everyone, or each graduate's name. If you want a different name on each box, mention it when you ask for a quote.",
      },
      {
        q: "How far ahead should I order?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping. For the end of the school year, order three or four weeks ahead.`,
      },
      {
        q: "Do you issue invoices?",
        a: "We do not issue invoices (CFDI). If your school or committee needs one, message us before ordering.",
      },
    ],
    relatedProductSlugs: [DULCERO, "stickers-vinil-impermeable"],
    relatedBlogSlugs: [en("dulceros-para-dia-del-nino"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("ideas-de-dulceros-para-fiesta-infantil"), en("cajas-bolsas-o-vasos-dulceros-cual-elegir")],
  },
  {
    slug: en("dulceros-para-bautizo-y-primera-comunion"),
    title: "Favor Boxes for Baptisms and First Communions",
    metaTitle: "Baptism and First Communion Favor Boxes",
    description:
      "Personalized favor boxes for baptisms and first communions: designs, what details to include, what to put inside, how many to order, price and delivery times.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-26",
    intro:
      "At a baptism or first communion, the keepsake guests take home is often an important part of the celebration. A personalized favor box with the child's name and the date works as both a keepsake and a treat. Here are ideas for design, which details to include, what to put inside, how many to order, what it costs and how far ahead to order so it looks worthy of the occasion.",
    sections: [
      {
        heading: "Which favor box suits a baptism or first communion",
        body: [
          "Choose a box with the child's name, the type of celebration and the date, in the party's color palette. It's lunch-box style with a handle, measures 15.7 × 11.7 × 9.9 cm and arrives assembled and empty, so you decide what goes inside.",
          "It works as the keepsake you hand out as guests leave the church and as part of the dessert table at the reception. The handle makes it easy to carry, and the name and date turn it into a keepsake after the event.",
        ],
      },
      {
        heading: "Designs that work",
        body: [
          "For baptisms, pastel tones (blue, pink, beige, white) with a dove, a cross or little angels are the most requested. For first communions, white with gold, a chalice or a simple cross, and the name in an elegant script. Our customization includes the name and the theme you choose.",
          "If the party has a set color palette, send us the invitation and we'll match the box design to those colors so it fits the dessert table. Before production we send a digital proof, and nothing is produced until you approve it.",
          "A practical tip: if the event has a lot of decoration, pick a simple design with the name nice and big. If the decor is understated, you can afford more detail on the box.",
        ],
      },
      {
        heading: "What details to put on the box",
        body: [
          "The most common are the child's name, the type of celebration (My Baptism, My First Communion) and the date. With those three details the box already works as a keepsake, and everything else is optional: godparents, a short line or the venue.",
          "Some families add the godparents' names or a short thank-you line. If siblings are celebrating together, you can put both names on the same design.",
          "Check the spelling of every name and the date on the digital proof before approving it: it's the last step before production, and a mistake there is repeated on every box.",
        ],
      },
      {
        heading: "What to put inside a baptism or communion favor box",
        body: [
          "For a family event with kids and adults, fine chocolates, candied almonds, Jordan almonds, mazapanes or decorated cookies all work well. The box arrives empty, without candy, so you decide the filling and the budget.",
          "If you want it to last as a keepsake, add a small rosary, a medal or a candle. Stickers with the name or the party design are also a good sugar-free extra.",
          "Ask about allergies (peanut and chocolate are the most common) if you're inviting kids you don't know well, and fill one test box before buying everything to work out how much you need. For more ideas by age, see our guide on what to put in a party favor box.",
        ],
      },
      {
        heading: "How many to order and what it costs",
        body: [
          `First 100 pieces: $${dulceroUnit} MXN per box, with a minimum order of 10. 30 boxes are $${dulceroTotal(30)} and 50 are $${dulceroTotal(50)}. Above 100 pieces it's wholesale pricing: message us on WhatsApp and we'll quote you.`,
          `Order one per family or one per guest, depending on your budget. If it's per family, count the confirmed families and add 2 or 3 extra for people who show up unannounced. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico, and in the Guadalajara metro area you can pick them up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches.`,
          "If the party pairs a baptism with a big meal for many guests, you can order some with the full design for the main table and some with a simpler design for everyone else, all in the same order.",
        ],
      },
      {
        heading: "When to order so they arrive on time",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping (or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara). To avoid rushing, start the order about three weeks ahead.`,
          "The Code of Canon Law (canon 867) says parents are obliged to take care that infants are baptized in the first few weeks. So if you already have a date at the parish, order the boxes early instead of waiting until everything else is settled.",
          "Confirm the list of children, the names and the date before approving the design so you don't lose days on corrections. If the event falls in a season with a lot of celebrations, order further ahead.",
        ],
      },
      {
        heading: "How to order",
        body: [
          "You can order from the online store by choosing the quantity and paying by card, OXXO or SPEI, or get a quote on WhatsApp first if you'd like to talk through the design before paying. Either way you get a digital proof before anything is produced.",
          "If your event includes other keepsakes, such as stickers to seal little bags or decorate what goes inside, they can go in the same order. And if you're also planning a wedding, quinceañera or baby shower, see our guide to favor boxes for social events.",
        ],
      },
    ],
    faq: [
      {
        q: "Do the baptism and communion favor boxes come with candy?",
        a: "No. The box arrives assembled and empty, ready to fill with whatever candy or keepsakes you choose.",
      },
      {
        q: "How much does a baptism or first communion favor box cost?",
        a: `First 100 pieces: $${dulceroUnit} MXN each, with a minimum order of 10. Above 100 pieces it's wholesale pricing, quoted on WhatsApp. Orders from $${FREE_SHIPPING_THRESHOLD} ship free across Mexico.`,
      },
      {
        q: "What size is the box?",
        a: "It measures 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 inches), is made of opaline cardstock, has a handle and arrives assembled.",
      },
      {
        q: "What details go on the box?",
        a: "The most common are the child's name, the type of celebration (My Baptism, My First Communion) and the date. You can add godparents or a short line. We send a digital proof so you can check the spelling before production.",
      },
      {
        q: "How long does delivery take?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara.`,
      },
      {
        q: "When should a child be baptized according to the Code of Canon Law?",
        a: "Canon 867 says parents are obliged to take care that infants are baptized in the first few weeks. That's why it helps to order the boxes as soon as you have a date at the parish.",
      },
    ],
    sources: [
      {
        label: "Code of Canon Law (Holy See): Book IV, canon 867 on the baptism of infants",
        url: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann834-878_en.html",
      },
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
    title: "Favor Boxes for Weddings, Quinceañeras and Baby Showers",
    metaTitle: "Wedding, Quinceañera and Baby Shower Favor Boxes",
    description:
      "Personalized favor box ideas for weddings, quinceañeras, baby showers and other social events: designs for each event, what to put inside, how many to order and when.",
    category: "Guides",
    publishedAt: PUBLISHED,
    intro:
      "At weddings, quinceañeras and baby showers, favor boxes are usually part of the candy table or handed out as a keepsake at the end of the event. Personalized with the names and colors of the celebration, they look like part of the decor rather than a last-minute detail. Here are ideas for each type of event.",
    sections: [
      {
        heading: "Weddings",
        body: [
          "For weddings, the couple's names and the date in the wedding colors work well: white with gold, sage green, terracotta or the color of the flowers. They can go on the candy table so each guest fills their own, or be filled and placed at each seat as a keepsake.",
          "If there are kids at the wedding, a box with a more playful theme for the kids' table is a touch parents appreciate.",
        ],
      },
      {
        heading: "Quinceañeras",
        body: [
          "For a quinceañera, the birthday girl's name with the color or theme of her party (an elegant style, a floral look or the theme she chose) and the date. They're usually ordered for all guests or just for the court of honor.",
        ],
      },
      {
        heading: "Baby showers and gender reveals",
        body: [
          "For a baby shower, the baby's name (or Baby + last name if there's no name yet) in pastel tones. For a gender reveal, a neutral design with boy or girl? works both before and after the surprise.",
        ],
      },
      {
        heading: "How many to order, price and timing",
        body: [
          "Each box is $75 MXN with a minimum of 10: 50 guests is $3,750 and 80 is $6,000, with free national shipping from $750. Production takes 3 to 5 business days after you approve the digital proof, plus shipping; for large events, order three or four weeks ahead. They arrive assembled, ready to fill.",
        ],
      },
    ],
    faq: [
      {
        q: "Do the favor boxes arrive assembled?",
        a: "Yes. They arrive assembled, ready to fill.",
      },
      {
        q: "How far ahead should I order favor boxes for a large event?",
        a: "For large events, order three or four weeks ahead. Production takes 3 to 5 business days after you approve the digital proof, plus shipping time.",
      },
    ],
    relatedProductSlugs: [DULCERO],
    relatedBlogSlugs: [en("dulceros-para-bautizo-y-primera-comunion"), en("que-poner-en-un-dulcero"), en("dulceros-para-eventos-empresariales")],
  },
  {
    slug: en("que-poner-en-un-dulcero"),
    title: "What to Put in a Party Favor Box: Candy and Small Gift Ideas by Age",
    metaTitle: "What to Put in a Party Favor Box",
    description:
      "Candy and small gift ideas that fit a lunch-box-style favor box: what to include by guest age, how much to fill it and how to avoid allergy problems.",
    category: "Guides",
    publishedAt: PUBLISHED,
    modifiedAt: "2026-10-28",
    intro:
      "A favor box looks full with 8 to 12 pieces: a chocolate, a gummy or lollipop, a spicy or sour candy, a traditional Mexican sweet and a small snack, plus one non-candy extra such as stickers. Below is the list by type of candy and by age, sized for a 15.7 × 11.7 × 9.9 cm lunch-box-style treat box.",
    sections: [
      {
        heading: "What candy to put in a favor box: list by type",
        body: [
          "Mix textures and flavors instead of repeating one: some chocolate, something soft, something spicy or sour and something traditional. Every guest finds something they like and the box looks varied when opened.",
          "Chocolates: small bars, balls or coins. Almost nobody turns them down, though in hot weather keep the boxes somewhere cool before handing them out.",
          "Gummies and marshmallows: soft, colorful and easy to portion into small bags. They are the safest option for the youngest kids.",
          "Traditional Mexican sweets: mazapanes, cocadas, tamarind candy, palanquetas and milk candy. They add local flavor and adults enjoy remembering them.",
          "Spicy and sour candy: chili lollipops, chili-coated strips or gummies and tamarind candy. They work best from age 6 up.",
          "Lollipops and gum: they fill space with little bulk. Skip hard lollipops for very young kids.",
          "Salty snacks: a small bag of chips, popcorn or coated peanuts (only if there are no allergies) balances all the sweetness.",
          "A sugar-free extra: stickers, a bracelet, bubbles or a small notebook. It is what the child keeps once the candy is gone.",
        ],
      },
      {
        heading: "For little kids (ages 1 to 5)",
        body: [
          "Choose soft, safe treats: gummies, marshmallows, cookies, small chocolates, raisins or dried fruit. Avoid hard candy, whole peanuts and toys with small parts, which are a choking hazard at this age.",
          "As a little extra: crayons, bubbles, a small coloring book or large stickers.",
        ],
      },
      {
        heading: "For school-age kids (ages 6 to 12)",
        body: [
          "This is where Mexican classics shine: lollipops, gum, spicy candy, tamarind treats, mazapanes, chocolate, small bags of chips and gummies. As an extra, a small toy, a bracelet, a bouncy ball or stickers with the party's character.",
          "Stickers with the character or the birthday child's name are one of the longest-lasting extras: they stay on notebooks and water bottles for weeks after the party.",
        ],
      },
      {
        heading: "For teens and adults",
        body: [
          "Better chocolates, snacks, gourmet candy, mini bottles of hot sauce, a keychain or a logo item for a company event. At weddings and quinceañeras, candied almonds or fine chocolates work very well.",
        ],
      },
      {
        heading: "How much to fill and how to avoid problems",
        body: [
          "There's no need to fill the box to the top: 8 to 12 pieces of candy plus one extra looks full in a box this size. Put together a test box before buying everything so you know how much you need.",
          "Ask about allergies if you're inviting kids you don't know well (peanuts and chocolate are the most common) and, if in doubt, keep a few boxes without those ingredients marked separately.",
        ],
      },
    ],
    faq: [
      {
        q: "What candy goes in a favor box?",
        a: "A mix of chocolate, gummies or lollipops, a spicy or sour candy, a traditional Mexican sweet and a small snack, plus one non-candy extra. Adjust the mix to the guests' ages.",
      },
      {
        q: "How much candy goes in a favor box?",
        a: "8 to 12 pieces of candy plus one extra looks full in a 15.7 × 11.7 × 9.9 cm lunch-box-style box. Put together a test box before buying everything.",
      },
      {
        q: "Which candy is safe for kids ages 1 to 5?",
        a: "Soft gummies, marshmallows, cookies, small chocolates, raisins or dried fruit. Avoid hard candy, whole peanuts and toys with small parts.",
      },
      {
        q: "What can I put in the box besides candy?",
        a: "Stickers with the party's character or the child's name, crayons, bubbles, a bracelet or a bouncy ball. These are extras the child keeps after the party.",
      },
      {
        q: "How do I avoid allergy problems in a favor box?",
        a: "Ask the parents if you don't know the guests well. Peanuts and chocolate are among the most common: if in doubt, prepare a few boxes without those ingredients and mark them separately.",
      },
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
];
