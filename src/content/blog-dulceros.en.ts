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
    faq: [
      {
        q: "When should I order personalized party favor boxes?",
        a: "Order at least two weeks before your party, and earlier in busy seasons like Christmas or the end of the school year. Production starts after you approve the proof, and you can get delivery by courier across Mexico or pick up at a Casa Blanca branch in Guadalajara.",
      },
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
    faq: [
      {
        q: "When should I order Christmas treat boxes for a posada?",
        a: "Order in November or, at the latest, the first week of December for posadas from the 16th to the 24th. In December couriers slow down and holidays don't count as business days. If you're in Guadalajara, picking up at a Casa Blanca branch is usually faster than national shipping.",
      },
    ],
    relatedBlogSlugs: [en("etiquetas-navidenas-personalizadas"), en("dulceros-para-eventos-empresariales"), en("que-poner-en-un-dulcero"), en("dulceros-personalizados-guadalajara"), en("buen-fin-2026-stickers-y-dulceros-personalizados")],
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
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days of national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara.`,
      },
    ],
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
      { label: "Parenting guide: baptism keepsake ideas for guests", url: "https://www.guiainfantil.com/galerias/bebes/ideas-para-regalar-en-el-bautizo-del-bebe/" },
      { label: "First communion guide: age, catechism, requirements and godparents", url: "https://www.adn40.mx/mexico/2025-10-24/cual-es-la-mejor-edad-para-hacer-la-primera-comunion/" },
      { label: "Code of Canon Law (Holy See): Book IV, canon 867 on the baptism of infants", url: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann834-878_en.html" },
      { label: "Wedding dessert table guide: quantities, fillings and setup", url: "https://www.bodas.net/articulos/todo-lo-que-debeis-saber-antes-de-montar-una-candy-bar--c2448" },
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
