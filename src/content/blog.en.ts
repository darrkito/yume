import type { BlogPost } from "@/content/blog";
import { priceOf, perPiece, casablancaBranchNames, recetarioPrice } from "@/content/blog";
import { getProduct, sizeTable } from "@/content/products";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";
import { BLOG_SLUG_EN } from "@/lib/i18n";
import { dulceroPostsEn } from "@/content/blog-dulceros.en";

export const blogPostsEn: BlogPost[] = [
  {
    "slug": "google-review-plate-for-medical-practices",
    "title": "Google review plate for medical practices",
    "metaTitle": "Google review plate for medical practices",
    "description": "How to use a Google review plate in your medical practice: where to place it, how to get the QR, what not to offer patients and how to reply.",
    "category": "Guides",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "A Google review plate for medical practices makes the listing easier for each patient to find, without requiring anyone to write. This guide explains how to get the link and QR, where to place the plate, how to invite reviews without incentives, what Google may do if it detects fake engagement and how to reply without exposing health information.",
    "sections": [
      {
        "heading": "What is a Google review plate for medical practices?",
        "body": [
          "It is a physical piece with NFC and a QR code that takes the patient straight to the review box on your practice's Google listing. It does not write or rate for anyone: it only removes steps for people who choose to comment. It goes at reception or in the waiting room.",
          "A plate does not guarantee more reviews: each person decides whether to comment and what to write. What it does is keep the link in sight inside your practice, so anyone who wants to share their experience does not have to search for your listing or remember its exact name."
        ]
      },
      {
        "heading": "How do you get the Google review link and QR?",
        "body": [
          "Sign in to your Business Profile on a computer, open “Read reviews” and choose “Get more reviews”. There you can copy the link or download the QR with “Save image as”. According to Google, the QR can only be generated from a desktop browser, not from a phone.",
          "Some third-party sites, not official ones, say the short link usually ends in /review and that a QR made with the profile link opens the full listing instead of the review box. Google does not document that format and it could change, so test the link before producing the plate."
        ]
      },
      {
        "heading": "Where can a practice place the plate?",
        "body": [
          "Reception and the waiting room are practical places if the piece is clearly visible without blocking access. Choose a surface patients can reach and test the link with a phone. The plate includes adhesive; the stand sits upright on a counter.",
          "Google suggests sharing the link or QR on receipts, thank-you emails, chat or a QR printed at your location, and also by email, WhatsApp or Facebook. In a practice, that can mean the plate at reception and, if you prefer, the same link sent by WhatsApp after the appointment."
        ]
      },
      {
        "heading": "When should you invite patients to review?",
        "body": [
          "At the end of a visit or on leaving reception, offer the link discreetly and politely, and let each person decide. Avoid interrupting a private conversation or insisting if someone declines. Patients can also choose to respond later on their own phone.",
          "Ask all patients, not only those who seem satisfied, so the reviews reflect the real care your practice provides. A short, friendly invitation, repeated with the same ease for everyone, works better than a long speech at the counter."
        ]
      },
      {
        "heading": "How can you ask without pressure or incentives?",
        "body": [
          "Ask all patients for an honest opinion, without suggesting a rating or offering discounts or gifts. For example: “If you wish, you can share your experience on Google.” According to Google, incentives in exchange for reviews are prohibited and count as fake engagement.",
          "The same Google policy covers posting, changing or deleting negative reviews. If Google detects fake engagement, it may restrict the profile: block new reviews or ratings for a time, temporarily unpublish existing reviews or show a public notice. It emails you first and the restriction can be appealed."
        ]
      },
      {
        "heading": "How should you respond while protecting privacy?",
        "body": [
          "Thank the person in general terms and never disclose patient health information or details of their care in a public reply. If follow-up is needed, offer an appropriate private channel without publicly confirming personal information or the circumstances of a visit.",
          "The plate only invites feedback. Do not use it to promise results or to highlight patient cases: a short, courteous reply without clinical details protects the privacy of the person who wrote and your own."
        ]
      },
      {
        "heading": "Which format can a practice use?",
        "body": [
          "Yume offers two formats: the plate, with adhesive, and the stand, which sits upright on a counter. Both have NFC and QR, come in white or black and can be ordered one piece at a time, with no app or subscription. The current price is on each product page.",
          "If your reception has little wall space, the stand on the counter means nothing needs to be stuck on. If you prefer a fixed piece next to the door or the front desk window, the plate with adhesive is the one that stays in place."
        ]
      },
      {
        "heading": "What should you check before ordering the plate?",
        "body": [
          "Before production, confirm that the listing belongs to your practice, that the link opens the review box and not just the profile, and that you tested it on an iPhone and an Android. Then send the link to Yume so the NFC and QR are configured before shipping.",
          "Run the test on someone else's phone, without your account signed in, to see what a patient will see. If something does not open as expected, fix the link before ordering the piece."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can I order one piece?",
        "a": "Yes. You can order one plate or stand; both have NFC and QR configured with your review link before shipping."
      },
      {
        "q": "Does the piece guarantee more reviews?",
        "a": "No. It makes the link easier to reach; each person decides whether to leave feedback and what to write."
      },
      {
        "q": "Can I give a discount in exchange for a review?",
        "a": "No. Google prohibits offering free or discounted products or services in exchange for reviews and treats it as fake engagement."
      },
      {
        "q": "Can I generate the QR from my phone?",
        "a": "According to Google, the QR can only be generated from a desktop browser. From there you download it with the “Save image as” option."
      },
      {
        "q": "What can happen if Google detects fake engagement?",
        "a": "Google may restrict the profile: block new reviews or ratings for a time, temporarily unpublish existing reviews or show a notice to the public. It emails you first and you can appeal."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "quoteMessage": "Hi, I am interested in the NFC plate and stand for Google reviews.",
    "sources": [
      {
        "label": "Google: reviews, fake engagement and how to get more reviews",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: profile restrictions for fake engagement",
        "url": "https://support.google.com/business/answer/14114287"
      }
    ]
  },
  {
    "slug": "google-review-plate-for-restaurants",
    "title": "Google review plate for restaurants",
    "metaTitle": "Google review plate for restaurants",
    "description": "How to use a Google review plate for restaurants: where to place it, what the text can say, how to make the QR and ask without incentives.",
    "category": "Guides",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "A Google review plate for restaurants brings your listing link closer to customers at a single location, right when they finish eating or pick up an order. This guide covers where to place it, how to generate and test the QR before printing, what text it can carry, how to choose between a plate and a stand, and how to reply to what comes in, following Google’s official help pages.",
    "sections": [
      {
        "heading": "Where should a restaurant place the review plate?",
        "body": [
          "Place the plate where customers have a calm moment at the end of the visit: on the table, next to the register or at the takeout pickup area. Google suggests sharing the link or QR printed in the venue. Choose a visible spot that does not block service and test that it opens your listing.",
          "Each spot plays a different role. On the table, the plate sits with customers while they linger and they decide whether to scan it. At the register, it is visible while the bill is paid. At the takeout pickup area, it reaches people who never sat down. You can combine two spots if your service allows it, always using the same link.",
          "Google also suggests sharing the link on receipts, in thank-you emails or at the end of a chat, and lets you send the request by email or WhatsApp. So the [NFC review plate](/en/products/google-review-nfc-plate) is one channel among several, not the only one, and the same link works in all of them."
        ]
      },
      {
        "heading": "How do you generate the review QR before printing?",
        "body": [
          "Generate the link and QR code from a computer, not from your phone. Open your business profile, choose Read reviews, then Get more reviews, and copy the link or save the QR image with a right click. Then scan it with your phone and confirm it opens your restaurant.",
          "The steps, in order: 1) open your Google business profile from a computer; 2) go to Read reviews; 3) choose Get more reviews; 4) copy the link, or right-click the QR and choose Save image as.",
          "The exact button name can change depending on the profile. If you do not see “Get more reviews”, look for an equivalent option inside Read reviews. Run the scan test before sending anything to print: it is the simplest way to avoid leaving a code on the table that does not open your listing."
        ]
      },
      {
        "heading": "What text can the review plate carry?",
        "body": [
          "Use a neutral, friendly invitation, such as “If you enjoyed your visit, tell us about your experience.” Do not offer discounts, desserts or free products in exchange for a review, because Google prohibits incentives and treats them as deceptive content. Do not ask for a number of stars either: ask for an honest opinion.",
          "Other phrases that work without conditions: “Your opinion helps us improve” or “Tell us how it went.” All of them invite without promising anything in return and without steering what the person writes.",
          "Offer the link to all your real customers, not only those who seem happy."
        ]
      },
      {
        "heading": "Should you choose a plate or a stand?",
        "body": [
          "The plate includes adhesive and measures 12 × 12 cm; the stand sits upright on a surface. The plate costs MXN $140 and the stand MXN $200. Both have NFC and QR, with a one-time payment and orders from one piece.",
          "The [NFC review plate](/en/products/google-review-nfc-plate) is fixed at one spot in the venue; the [NFC review stand](/en/products/google-review-nfc-stand) stands upright, for example on a table or at the counter. Choose based on where you want it and whether you prefer to fix it or move it.",
          "If you are unsure about NFC and a printed QR code, read the [comparison of NFC and QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews). If cost is your concern, see the guide on [one-time price versus subscription](/en/blog/google-review-plates-one-time-price-vs-subscription)."
        ]
      },
      {
        "heading": "How is the piece prepared for your restaurant?",
        "body": [
          "Share your restaurant listing’s review link when placing the order. Yume configures the NFC and QR with that link before shipping. Choose white or black, and use the piece without an app or subscription, so you pay no monthly fee for it.",
          "When it arrives, scan the QR and tap your phone to confirm that both open the correct listing before placing it in front of customers. For a step-by-step guide, see [how to use the plate](/en/blog/how-to-use-your-yume-google-review-plate)."
        ]
      },
      {
        "heading": "How should you reply to the reviews you receive?",
        "body": [
          "Reply with brief, clear and polite messages, without offers or promotions. Avoid generic thanks, use the customer’s name and respond quickly. If the issue is complex, move it to a private channel without exposing customer data. A review that violates Google’s policies can be reported.",
          "Replying is part of the process: the plate helps opinions arrive and your answer shows how you serve customers. If someone points out a problem, listen, say thanks and offer a channel for follow-up without arguing in public.",
          "For more on getting feedback consistently, read the guide to [getting more reviews](/en/blog/how-to-get-more-google-reviews-nfc-qr). Check also that your listing’s contact details and opening hours are still accurate."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does a customer need to leave a review?",
        "a": "A Google account, even if it is not Gmail. Someone without an account will not be able to leave a review after scanning the plate."
      },
      {
        "q": "Can I offer something so a customer removes a negative review?",
        "a": "No. Google also prohibits offering incentives to change a review or to remove a negative one."
      },
      {
        "q": "Can I order one piece?",
        "a": "Yes. You can order one plate or stand; both have NFC and QR configured with your review link before shipping."
      },
      {
        "q": "Does the piece guarantee more reviews?",
        "a": "No. It makes the link easier to reach; each person decides whether to leave feedback and what to write."
      }
    ],
    "relatedProductSlugs": ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    "relatedBlogSlugs": [BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"], BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"], BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"]],
    "quoteMessage": "Hi, I am interested in the NFC plate and stand for Google reviews.",
    "sources": [
      {
        "label": "Google: get your review link and QR code",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: reply to reviews and incentives policy",
        "url": "https://support.google.com/business/answer/7035772"
      },
      {
        "label": "Google: tips to get reviews",
        "url": "https://support.google.com/business/answer/3474122?hl=en"
      },
      {
        "label": "Google: prohibited and restricted content",
        "url": "https://support.google.com/business/answer/7400114?hl=en"
      }
    ]
  },
  {
    "slug": "google-review-plate-for-salons-and-barbershops",
    "title": "Google review plate for salons and barbershops",
    "metaTitle": "Google review plate for salons and barbershops",
    "description": "How to get Google’s official review QR, what your Google review plate can say and where to place it in your salon or barbershop.",
    "category": "Guides",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "A Google review plate for salons and barbershops makes a single business’s listing easier to reach. Place it near reception or the register to offer each customer a simple way to share their experience if they choose. Before ordering a piece, it helps to know three things: how to get the official link, what the plate can say under Google’s rules, and where to put it so it gets used without pressuring anyone. This guide covers them step by step.",
    "sections": [
      {
        "heading": "How do you get the official link or QR for your Google review plate?",
        "body": [
          "According to Google, the link and QR code for requesting reviews can only be generated from a desktop browser, not from a phone. Open your business profile, choose Read reviews, select Get more reviews and click the share icon. There you copy the link or save the QR code.",
          "To save the QR code, right-click the image and choose save image. Before using the link, open it on your own phone to confirm it leads to your business’s listing.",
          "With Yume, the NFC and QR on the [NFC review plate](/productos/placa-resena-google-nfc) are set up with your business’s review link before shipping."
        ]
      },
      {
        "heading": "What can your plate say, and what should it leave out?",
        "body": [
          "The plate should invite every customer equally to share an honest opinion, without incentives. Google allows asking for genuine reviews, but prohibits offering free or discounted goods or services in exchange for them, discouraging negative reviews, or selectively asking for positive ones. So the wording should be neutral and open to any rating.",
          "Avoid text like “Scan and get 10% off”, which offers an incentive, “5 stars only”, which tries to influence the rating, or “Mention your barber”, which dictates what the review says.",
          "The content policy also prohibits a business from asking its staff to request a set number of reviews, or reviews with specific content, such as an employee’s name. In salons and barbershops it is common to want clients to mention their stylist or barber, so the plate should include no names and no quotas.",
          "Google treats offering goods or services in exchange for reviews as fake engagement, and the rule also covers posting, editing or removing reviews."
        ]
      },
      {
        "heading": "What short text can you put on the plate?",
        "body": [
          "A short, neutral text is enough: an invitation to share their experience on Google, with no promises or conditions. It should be the same for everyone, mention no discounts, ratings or staff names, and make clear that reviewing is each customer’s free choice, and that they can write whatever they want about their visit.",
          "Examples that respect the rules: “Share your experience on Google”, “Your honest opinion helps us” or “If you wish, share your experience on Google”."
        ]
      },
      {
        "heading": "Where should you place the plate in a salon or barbershop?",
        "body": [
          "Google suggests placing the QR code or link on receipts, thank-you emails, at the end of a chat and as a printed QR in the store. For a salon or barbershop, that supports a physical plate at the register and sending the same link by WhatsApp after the appointment.",
          "Inside the shop, reception, the register or a waiting table can keep the piece visible without interrupting service. Check that customers can comfortably tap their phone or scan the QR code."
        ]
      },
      {
        "heading": "When is the right moment to ask for an opinion?",
        "body": [
          "At the end of an appointment or during payment, invite customers to share their experience without pressure. Offer the same opportunity to all real customers; each person decides whether they want to write and what they want to say about their visit. The invitation should not suggest a rating.",
          "Do not pick only customers who seem satisfied: Google’s content policy prohibits selectively asking for positive reviews.",
          "If a customer prefers not to write, that is fine. The plate only makes it easier to reach the link."
        ]
      },
      {
        "heading": "When should you use the plate and when a WhatsApp message?",
        "body": [
          "The plate works for customers who are still at the shop, and a WhatsApp message works for those who have already left. Both use your business’s review link, so you can combine them without duplicating work. Each channel has a different role and neither requires offering anything in return.",
          "A short message can be enough: thank them for the visit and share the link."
        ]
      },
      {
        "heading": "Which Google review plate format fits your space?",
        "body": [
          "The plate measures 12 × 12 cm and includes adhesive; the stand sits upright. The plate costs MXN $140 and the stand MXN $200, with a one-time payment. Both carry NFC and QR, come in white or black, and you can order a single piece.",
          "If you prefer a freestanding piece, see the [NFC review stand](/productos/stand-resena-google-nfc)."
        ]
      },
      {
        "heading": "How do the NFC and QR on the plate work?",
        "body": [
          "Yume configures the NFC and QR with the business’s review link before shipping. Customers can tap their phone or scan the code to open that link on their own device. The piece needs no app or subscription and does not include a dashboard for managing reviews."
        ]
      },
      {
        "heading": "How should you handle public feedback?",
        "body": [
          "Thank customers briefly and professionally without sharing private information about their visit. If a complaint arises, listen calmly and offer an appropriate channel for follow-up. Keep your listing’s opening hours and contact details accurate so other customers know how to reach you."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can I send the review link by WhatsApp?",
        "a": "Yes. Google says the link can be sent by email, WhatsApp or a Facebook post."
      },
      {
        "q": "Can I give a discount to anyone who leaves a review?",
        "a": "No. Google prohibits offering free or discounted goods or services in exchange for reviews and treats it as fake engagement."
      },
      {
        "q": "Can I ask only happy customers for reviews?",
        "a": "No. Google’s content policy prohibits selectively asking for positive reviews or discouraging negative ones. Invite all customers equally."
      },
      {
        "q": "Can I ask clients to mention their stylist or barber?",
        "a": "No. The policy prohibits a business from asking staff to request reviews with specific content, such as an employee’s name, or a set number of reviews."
      },
      {
        "q": "Can I order one piece?",
        "a": "Yes. You can order one plate or stand; both have NFC and QR configured with your review link before shipping."
      },
      {
        "q": "Does the piece guarantee more reviews?",
        "a": "No. It makes the link easier to reach; each person decides whether to leave feedback and what to write."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "google-review-plates-one-time-price-vs-subscription",
      "how-to-get-more-google-reviews-nfc-qr",
      "nfc-plate-vs-printed-qr-code-for-reviews",
      "how-to-use-your-yume-google-review-plate"
    ],
    "quoteMessage": "Hi, I am interested in the NFC plate and stand for Google reviews.",
    "sources": [
      {
        "label": "Google: ask for reviews with a link or QR code",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: content policy for reviews",
        "url": "https://support.google.com/contributionpolicy/answer/7400114?hl=en"
      }
    ]
  },
  {
    "slug": "google-review-plate-for-event-planners-and-venues",
    "title": "Google review plate for event planners and venues",
    "metaTitle": "Google review plate for event planners and venues",
    "description": "How to use a Google review plate at events: get the official link, what text to print, when to ask for reviews and what not to offer in return.",
    "category": "Guides",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "A Google review plate for event planners and venues makes your business listing easier for clients to reach. Honest reviews provide social proof for people looking for a planner, venue or vendor for their own celebration. Here is how to get the official link, where to display the plate, when to ask for a review and what not to offer in return, so the invitation stays careful and honest.",
    "sections": [
      {
        "heading": "Google review plate: which profile should receive the reviews?",
        "body": [
          "The plate should lead to the profile of the business that provided the service: the planner, the venue or the vendor, as long as it meets Google’s requirements for a listing. If one planner coordinates and another vendor delivers, each uses their own link so the review reaches the right business.",
          "Before producing any piece, confirm that the link belongs to your own business and opens the right listing."
        ]
      },
      {
        "heading": "How do you get the official review link and QR code?",
        "body": [
          "From your Google Business Profile, go to “Read reviews”, choose “Get more reviews” and copy the link or download the QR code by right-clicking and saving the image. Google states that review QR codes can only be generated from a desktop browser, not from a phone.",
          "Copy the link exactly as Google provides it instead of typing it by hand, and share it with Yume so the piece can be configured."
        ]
      },
      {
        "heading": "Where should you display the plate during an event?",
        "body": [
          "Place it where people can see it without interrupting the celebration: at reception if you run a venue, or at your service table if you are a vendor. Google suggests showing the QR code or link on receipts, thank-you emails, at the end of a chat or printed in your location.",
          "If you work with clients over WhatsApp, Google also lets you send the request by that channel or by email. The plate at the event and a later message work together."
        ]
      },
      {
        "heading": "When should you ask for a review without crowding the event?",
        "body": [
          "Ask after the service or when wrapping up coordination, not during key moments. Participation is voluntary and each person decides what to write. A report on Google’s policies says you should not pressure people to rate while on site or dictate what the review should say.",
          "The same report notes that Google watches for unusual volumes or patterns of reviews. If many guests review on the same day it may look atypical, so it is better to space requests out than to concentrate them on a single night."
        ]
      },
      {
        "heading": "How do you ask for honest reviews without incentives?",
        "body": [
          "Invite all your real clients, not just those you think are satisfied, and do not suggest a rating. Google prohibits offering free or discounted goods or services in exchange for a review, and reviews must come from real experiences. Accept both positive and negative ones.",
          "This also applies if you are a planner who gifts or discounts part of an event in exchange for reviews: do not do it. For the text near the plate, use a neutral invitation such as “Tell us about your experience”, with no script and no “give us 5 stars”."
        ]
      },
      {
        "heading": "What message should go with the plate?",
        "body": [
          "Use a short, neutral message near the plate, such as “Tell us about your experience”, without asking for five stars or telling people what to write. The piece has NFC and QR so the client can choose: tap the phone on the NFC or scan the code, both with the same review link.",
          "Avoid long texts or promises. The plate makes the link easier to reach, but it does not guarantee more reviews: each person decides whether to leave feedback and what to write. If you want to explain the purpose, one sentence inviting people to share their experience honestly is enough."
        ]
      },
      {
        "heading": "Plate or stand: which piece fits the way you work?",
        "body": [
          "The 12 × 12 cm plate includes adhesive and costs MXN $140; the stand sits upright and costs MXN $200. Both have NFC and QR, are available in white or black and can be ordered from one piece with one-time payment.",
          "If you need a fixed spot, such as a reception desk, consider the [NFC and QR review plate](/en/products/google-review-nfc-plate). If you prefer something that stands on a table, the [NFC review stand](/en/products/google-review-nfc-stand) sits upright."
        ],
        "table": {
          "headers": ["Piece", "Format", "Price", "Colors"],
          "rows": [
            ["Plate", "12 × 12 cm, with adhesive", "MXN $140", "White or black"],
            ["Stand", "Sits upright", "MXN $200", "White or black"]
          ]
        }
      },
      {
        "heading": "How does Yume prepare your piece?",
        "body": [
          "Yume configures the NFC and QR with your business’s review link before shipping the piece. It requires no app or subscription: payment is one-time. If you want a quote or have questions, message us on WhatsApp and we will help you choose the right piece.",
          "If you are also preparing favors for your guests, see our [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara) to complement your favor supplier."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can I order one piece?",
        "a": "Yes. Both the plate and the stand can be ordered from one piece, with one-time payment, and arrive with NFC and QR configured with your review link."
      },
      {
        "q": "Does the piece guarantee more reviews?",
        "a": "No. It makes the link easier to reach; each person decides whether to leave feedback and what to write."
      },
      {
        "q": "Can I generate the review QR code from my phone?",
        "a": "According to Google, review QR codes can only be generated from a desktop browser. From a phone you can copy the link, but not download the QR code."
      },
      {
        "q": "Can I offer a discount in exchange for a review?",
        "a": "No. Google prohibits offering free or discounted goods or services in exchange for a review, and reviews must come from real experiences."
      },
      {
        "q": "Should I only ask happy clients for reviews?",
        "a": "No. The right approach is to invite all your real clients, without filtering and without suggesting a rating."
      },
      {
        "q": "Do I need an app or subscription to use the plate?",
        "a": "No. Yume configures the NFC and QR with your link before shipping, with one-time payment and no subscription."
      },
      {
        "q": "How much do the plate and the stand cost?",
        "a": "The 12 × 12 cm plate with adhesive costs MXN $140 and the upright stand costs MXN $200. Both are available in white or black."
      }
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    "relatedProductSlugs": ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    "quoteMessage": "Hi, I am interested in the NFC plate and stand for Google reviews.",
    "sources": [
      {
        "label": "Google: get your review link and QR code",
        "url": "https://support.google.com/business/answer/16816815?hl=en"
      },
      {
        "label": "Google: tips to get reviews",
        "url": "https://support.google.com/business/answer/3474122?hl=en"
      },
      {
        "label": "Google: prohibited and restricted content",
        "url": "https://support.google.com/business/answer/7400114?hl=en"
      }
    ]
  },
  {
    "slug": "how-to-run-a-customer-satisfaction-survey",
    "title": "How to run a customer satisfaction survey",
    "metaTitle": "Customer satisfaction survey: questions and guide",
    "description": "Create a customer satisfaction survey, choose useful questions and share it by QR code, receipt or WhatsApp.",
    "category": "Guides",
    "publishedAt": "2026-11-03",
    "modifiedAt": "2026-11-05",
    "intro": "A customer satisfaction survey helps you hear how the experience went and decide what to improve. In this guide you choose the metric (CSAT, NPS or CES), write a few clear questions, decide when to send it by WhatsApp, QR code or receipt and turn the answers into actions. Keep the survey separate from any invitation to post a public review.",
    "sections": [
      {
        "heading": "What is a customer satisfaction survey for?",
        "body": [
          "A customer satisfaction survey is a short set of questions that measures how someone experienced a purchase, a delivery or a service. It shows what worked and what failed, and helps you choose one concrete improvement. Before writing it, define which decision you will make with the answers.",
          "If you sell custom pieces made to order, it helps to separate two moments: a delivery survey, to learn how the order arrived, and a recommendation survey, to learn whether people would speak well of the business. Mixing them in one form confuses the person answering. And avoid asking for information you will not use."
        ]
      },
      {
        "heading": "Which metric should you choose: CSAT, NPS or CES?",
        "body": [
          "CSAT asks how satisfied someone was with a specific interaction, on a scale from 1 to 5. NPS asks how likely they are to recommend you, from 0 to 10. CES measures how much effort it took to get something done. Choose the one that matches what you want to learn.",
          "In NPS, a 9 or 10 makes someone a promoter and a score from 0 to 6 makes them a detractor; the result is the percentage of promoters minus the percentage of detractors. CSAT is calculated as the percentage of 4 and 5 answers. The references in the table come from one provider's guide, so use them as orientation, not as an industry standard."
        ],
        "table": {
          "headers": ["Metric", "Scale", "How it is calculated", "Orientative reference"],
          "rows": [
            ["CSAT", "1 to 5", "% of 4 and 5 answers", "80 to 89%"],
            ["NPS", "0 to 10", "% of promoters minus % of detractors", "+30 to +59"],
            ["CES", "1 to 5", "Average of the answers", "4.0 to 4.4"]
          ]
        }
      },
      {
        "heading": "How many questions and what types should you use?",
        "body": [
          "There is no single ideal length that works for every business. What helps is giving each question a purpose: one scale to measure, one to compare and one open question to understand why. If a question will not change any decision, remove it. On WhatsApp, send one question per message.",
          "Use the same scale for similar questions and explain the endpoints, for example \"1 is very dissatisfied and 5 is very satisfied\". On WhatsApp it works to give a simple instruction, such as \"reply with the number only\", so answers are easy to compare."
        ]
      },
      {
        "heading": "What customer satisfaction survey questions can you ask?",
        "body": [
          "Use simple questions about service, the product and waiting time, plus a recommendation scale and an open response so people can explain their answer. Adapt each question to what your business offers and explain the endpoints of the scales before you share the form with customers.",
          "Try these seven questions: 1. How satisfied were you with the service, from 1 to 5? 2. With the product or service, from 1 to 5? 3. With the wait, from 1 to 5? 4. Was the information clear? 5. Did you find what you needed? 6. How likely are you to recommend us, from 0 to 10? 7. What could we improve?",
          "If the survey is for the delivery of a custom order, you can swap in some of these: Does the piece look like the design you approved? Did it arrive in the agreed time? Did the packaging arrive in good condition? How was the service over WhatsApp?"
        ]
      },
      {
        "heading": "Where and when can you use a QR survey?",
        "body": [
          "Share a QR code leading to a form at the counter or on a receipt, or send the questions by WhatsApp after the purchase or service. Explain that responding is voluntary and choose a moment close to the experience, without interrupting the customer.",
          "According to one provider's guide, CSAT is sent within 2 minutes after the conversation closes, NPS between 24 and 48 hours after an important interaction such as a purchase, and CES right after the process is completed. Waiting more than an hour significantly reduces responses. For a custom order, this supports sending a delivery survey and, separately, a recommendation survey.",
          "On frequency, sources disagree: some ask for CSAT on every closed ticket and others prefer doing it periodically to avoid overloading people. The same guide suggests at most one CSAT survey per customer every 7 days and NPS once a month or once a quarter."
        ]
      },
      {
        "heading": "How should you read and use the results?",
        "body": [
          "Review the answers question by question and look for themes that repeat in the open comments. Consider how many people responded before drawing conclusions, because a few answers may not represent everyone. Choose one concrete improvement, assign someone to follow up and compare later feedback with care.",
          "The most common mistakes that guide mentions are sending the survey late, combining several questions in one message, not acting on the results and not reading the open comments. Each one makes the survey less useful."
        ]
      },
      {
        "heading": "How can you invite reviews without filtering customers?",
        "body": [
          "Keep the survey and the review request separate and offer both to all customers. Sending only happy customers to Google or discouraging unhappy ones goes against its review policy. The plate gives everyone the same NFC or QR path to leave an honest review.",
          "Yume sells the plate and stand, not a survey tool. Yume configures both paths with the review link before shipping; the plate costs MXN $140 and the stand MXN $200, one-time, from one piece."
        ]
      }
    ],
    "faq": [
      {
        "q": "What response rate can I expect?",
        "a": "There is no universal figure. One provider's guide cites 40 to 60% on WhatsApp versus 5 to 15% by email, but that is the provider's own figure, not an independent study."
      },
      {
        "q": "What should I do if a customer gives a low score?",
        "a": "If CSAT is 1 to 3, that guide recommends adding an open question about what to improve. That way you learn what to fix instead of only seeing the number."
      },
      {
        "q": "Can I order one piece?",
        "a": "Yes. You can order one plate or stand; both have NFC and QR configured with your review link before shipping."
      },
      {
        "q": "Does the piece guarantee more reviews?",
        "a": "No. It makes the link easier to reach; each person decides whether to leave feedback and what to write."
      }
    ],
    "relatedProductSlugs": [
      "placa-resena-google-nfc",
      "stand-resena-google-nfc"
    ],
    "relatedBlogSlugs": [
      "set-up-google-business-profile-and-ask-for-reviews",
      "google-review-plates-one-time-price-vs-subscription",
      "how-to-get-more-google-reviews-nfc-qr",
      "nfc-plate-vs-printed-qr-code-for-reviews",
      "how-to-use-your-yume-google-review-plate",
      "google-review-plate-for-medical-practices",
      "google-review-plate-for-restaurants",
      "google-review-plate-for-salons-and-barbershops",
      "google-review-plate-for-event-planners-and-venues"
    ],
    "quoteMessage": "Hi, I am interested in the NFC plate and stand for Google reviews.",
    "sources": [
      {
        "label": "Google: tips to get reviews",
        "url": "https://support.google.com/business/answer/3474122?hl=en"
      },
      {
        "label": "Google: prohibited and restricted content",
        "url": "https://support.google.com/business/answer/7400114?hl=en"
      },
      {
        "label": "Aurora Inbox: how to measure customer satisfaction on WhatsApp",
        "url": "https://www.aurorainbox.com/2026/02/27/medir-satisfaccion-cliente-whatsapp/"
      }
    ]
  },
  {
    slug: BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"],
    title: "Google review plates: one-time price vs monthly subscription",
    metaTitle: "Google review plates: one-time price vs subscription",
    description: "Compare Google review plates without subscriptions over 12 and 24 months, check the link and wording. Yume plates start at $140 MXN.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro: "When choosing Google review plates, the key question is whether to pay for the piece once or subscribe to a platform with a monthly fee. Here you can compare costs over 12 and 24 months, see what to check so the link works, and choose wording that respects Google’s rules. Yume offers a plate or stand for a one-time payment with no monthly fee.",
    sections: [
      { heading: "One-time payment or monthly subscription?", body: ["A one-time payment is useful when you have one location and only need to make it easy for customers to reach your review link. A subscription can make sense if you manage several locations and want monitoring and responses through software. The monthly payment is for the software, not the piece.", "According to a market comparison, subscriptions are often sold by quote with annual contracts and are considered excessive for a single location. It also notes that if you change services later, you lose the automation you had set up.", "For a shop, café, salon, or event venue that wants a well-presented piece beside the checkout or reception, a one-time purchase covers the essential need: making the link easy to access."] },
      { heading: "How much do Google review plates cost over 12 and 24 months?", body: ["The Yume plate costs $140 MXN and the stand costs $200 MXN as a one-time payment, so the cost remains the same after 12 or 24 months. A market comparison places subscription platforms between $50 and $300 USD per month, approximately.", "The table uses approximate ranges from that comparison, which are in dollars, so they are not converted to pesos. Subscription totals simply multiply the monthly range by 12 and 24 months."], table: { headers: ["Option", "Approximate cost", "12 months", "24 months"], rows: [
        ["Yume plate", "$140 MXN, one-time payment", "$140 MXN", "$140 MXN"],
        ["Yume stand", "$200 MXN, one-time payment", "$200 MXN", "$200 MXN"],
        ["One-time NFC + QR from a marketplace", "$13 to $48 USD", "Same one-time payment", "Same one-time payment"],
        ["Generic marketplace options", "$5 to $25 USD", "Same one-time payment", "Same one-time payment"],
        ["Subscription platform", "$50 to $300 USD per month", "$600 to $3,600 USD", "$1,200 to $7,200 USD"],
        ["Homemade printed QR", "Free, with very low durability", "Free", "Free"],
      ] } },
      { heading: "What to check before buying a Google review plate", body: ["Check that both the NFC and QR open the direct link for leaving a review, not just the business profile. With generic plates, the buyer sometimes programs the tags and may save the wrong link. Test the piece with your phone before putting it in place.", "Quality and after-sales support vary greatly between sellers, so ask who programs the piece and who will help if something goes wrong. With Yume, the piece arrives with the NFC programmed and the QR generated using your review link.", "Also think about where it will live. A permanent plate is harder to relocate than a card, so take time to choose its position. Remember that the object alone does not ask for a review: someone on the team needs to mention it."] },
      { heading: "What wording can you put on the plate under Google’s rules?", body: ["Use wording that invites feedback without offering anything in return. Google does not allow incentives such as discounts or gifts for posting reviews, or for changing or removing negative ones. It does allow requests for reviews that reflect an authentic experience, provided you do not try to influence the rating.", "A simple message such as ‘How was your visit today? Scan and tell us about your experience’ invites feedback without promising prizes or asking for a particular rating.", "The same policy prohibits pressuring customers while they are on the premises. It also does not allow asking staff for a specific number of reviews or specific content, such as mentioning an employee. The plate can invite feedback while the team remains cordial and avoids being insistent."] },
      { heading: "What do you receive with a Yume plate or stand?", body: ["Yume makes the piece to order, programs the NFC and generates the QR with your review link before shipping. The plate includes adhesive; the stand sits upright. Both are available in white or black and work without an app or subscription.", "See the [Google review NFC plate](/en/products/google-review-nfc-plate) or the [Google review stand](/en/products/google-review-nfc-stand) and choose according to where you plan to place it.", `The piece does not include a dashboard: you manage reviews in your own Google profile. To learn more, read [how to get more reviews with NFC and QR](/en/blog/${BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"]}), compare an [NFC plate with a printed QR](/en/blog/${BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"]}), and see [how to use the review plate](/en/blog/${BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"]}).`] },
    ],
    faq: [
      { q: "Do I need a dashboard?", a: "Not to use a Yume plate. The piece has no dashboard; you manage reviews in your own Google Business Profile. A multi-location platform may be useful if you need centralized reports and alerts." },
      { q: "How much does a plate without a subscription cost?", a: "The Yume plate costs $140 MXN and the stand $200 MXN, with a one-time payment and no subscription." },
      { q: "Does a plate guarantee more reviews?", a: "No. It makes the link easier to reach, but each customer decides whether to leave a review and what to write." },
      { q: "Who sets up the NFC and QR?", a: "Yume programs the NFC and generates the QR with your review link before shipping." },
      { q: "Which link should the plate open?", a: "According to a market comparison, generic plates can be programmed with the profile link instead of the direct review link. Test the piece with your phone before putting it in place." },
      { q: "Can I move the piece later?", a: "The stand sits upright, so you can move it. The plate uses adhesive, so choose its location carefully before attaching it." },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: [BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"], BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"]],
    quoteMessage: "Hi, I am interested in an NFC plate or stand for Google reviews.",
    sources: [
      { label: "Google: contribution policy", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    ],
  },
  {
    slug: BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"],
    title: "How to Set Up Your Google Business Profile and Ask for Reviews",
    metaTitle: "Google Business Profile: Setup and Reviews",
    description: "Learn to set up your Google Business Profile, verify it by video and ask for honest reviews with a link, QR code or WhatsApp while following the rules.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro: "A Google Business Profile helps introduce your business to people searching for it. This guide brings together the steps to set it up, verify it with a video if you work from home or by appointment, and ask customers for reviews respectfully, whether you run a restaurant, a practice or an event service in Mexico.",
    sections: [
      { heading: "What is a Google Business Profile and why does it matter?", body: ["A Google Business Profile is a listing an eligible business can use to present information on Google, including Maps and Search. It can show useful details and receive customer reviews, so people who find you can learn about your business and decide how to contact you.", "It is also known by its former name, Google My Business. Keeping information accurate helps people understand what you offer and how to find you; it does not guarantee a position in search results."] },
      { heading: "How do you claim or create a business profile?", body: ["First search for your business name and location on Google Maps or Google Business Profile. If a listing already exists, request access to manage it; if there is no listing and your business meets Google's requirements, start creating a profile and provide the requested details.", "Follow Google's verification process to confirm you can manage the business. Available options vary by profile and may change, so check the instructions shown in your case. Avoid creating a duplicate listing and keep access to the account you use to manage it."] },
      { heading: "How do you verify your Google profile with a video?", body: ["Google may request a verification video recorded live on your phone, unedited, in one continuous recording and at least 30 seconds long. If your business operates from home and you take your service to the customer, show street signs, your tools or products, and proof of management without showing sensitive information or other people's faces.", "According to Google, proof of management can be a service in progress, a branded asset or a document in the business's name, such as a utility bill. If your business does not receive customers at its address, Google says not to add that address to the profile.", "The video is recorded and uploaded from your phone through the profile, and prerecorded videos are not accepted. It helps to make the tour in one take: the street, your workspace and proof that you manage the business."] },
      { heading: "What should you complete so customers can find you?", body: ["Choose a category that describes your main activity and complete your hours, phone number, photos and description with accurate, current information. Look at the details as a customer would: they should understand what you do, when you are open and how to contact you without finding conflicting information.", "Update special hours when needed and use representative photos of your premises, services or completed work. An event vendor can describe their service clearly; a practice can check that its phone number and office hours are correct."] },
      { heading: "How can you ask for reviews while following Google's rules?", body: ["Ask your real customers for an honest opinion and share the direct link without pressure or suggesting a rating. Do not offer discounts or free products in exchange for a review: according to Google Business Profile Help, offering something like this is strictly prohibited and counts as fake engagement.", "Reviews should reflect an authentic experience. Ask all your real customers, not just those you think will be happy, and accept what they write. Do not post or commission fake reviews."] },
      { heading: "How do you generate a review link or QR code?", body: ["The review link and QR code are generated from the Business Profile in a desktop browser; they cannot be generated on a phone. Open the profile, choose ‘Read reviews’, then ‘Get more reviews’, and copy the link or download the QR code by right-clicking and choosing ‘Save image as…’.", "After copying the link, open it on your phone to check that it leads to your listing. If you download the QR code, save the image to print on a card or use in a message."] },
      { heading: "When and how should you ask for a review after delivery?", body: ["Google allows you to share the request by email, WhatsApp or Facebook, and suggests putting the link or QR code on receipts, in thank-you emails, at the end of a chat or as a printed code in the store. Choose the channel you already use with your customer.", "If you sell gifts for moms, planners or businesses with events, a WhatsApp message after delivery or a card with a QR code inside the package are two natural ways to ask. For example: ‘Thank you for trusting us with your event. If you would like to tell us how it went, here is the link for an honest review.’", "The person may respond later or choose not to. Asking kindly and without conditions is what keeps the review authentic."] },
      { heading: "How can a link, QR code or NFC plate make reviews easier?", body: ["Share your listing's direct review link in a message or use a QR code customers can scan. You can also place an NFC and QR plate at reception, the register or a table: the customer chooses how to open the link on their phone.", `The Yume [NFC review plate](/en/products/google-review-nfc-plate) costs $${getProduct("placa-resena-google-nfc")!.price} MXN and includes adhesive; the Yume [NFC review stand](/en/products/google-review-nfc-stand) costs $${getProduct("stand-resena-google-nfc")!.price} MXN and sits upright. Both have NFC and QR. A printed QR code or plate only removes steps: it does not replace asking for a review.`, `If you are unsure which format to choose, read the comparison of an [NFC plate and a printed QR code](/en/blog/${BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"]}). And if you are looking for ideas to [get more reviews](/en/blog/${BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"]}), start with a kind, consistent invitation, without promising results or placing conditions on the opinion. To choose a format, contact us on WhatsApp.`] },
      { heading: "When and how should you respond to reviews?", body: ["Check reviews regularly and respond to both positive and negative feedback, aiming to reply promptly. Thank the customer in a brief, professional message; if something went wrong, listen, apologize when appropriate and offer a suitable channel for follow-up without arguing in public.", "Do not share the person's private information or details of their care, especially at a medical practice. A respectful response also helps people reading the listing understand how you handle feedback.", "If a review violates Google's policies, you can report it from your listing by selecting the reason. An honest negative review should be answered, not reported."] },
    ],
    faq: [
      { q: "Is a Google Business Profile free?", a: "Google lets eligible businesses create and manage a Business Profile at no charge." },
      { q: "Do I need to verify my business?", a: "Follow Google's instructions to verify the profile. Available verification options can vary, and in some cases Google asks for a video recorded live on a phone." },
      { q: "How long does verification video review take?", a: "According to Google, review can take up to 5 business days. If it is rejected, the profile shows the reasons and you can record another video that includes everything from the first one plus what was missing." },
      { q: "Can I verify an online-only business?", a: "According to Google, online-only businesses without in-person service are not eligible for verification." },
      { q: "Can I ask for reviews over WhatsApp?", a: "Yes. Share the direct link and invite an honest opinion without incentives or pressure." },
      { q: "Can I pay to remove a negative review?", a: "No. Google prohibits paying to post, change or remove reviews, including negative ones." },
      { q: "Does a plate guarantee more reviews?", a: "No. A plate makes the link easier to reach; each customer decides whether to leave a review and what to write." },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: [BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"], BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"], BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"], BLOG_SLUG_EN["placa-resenas-google-para-consultorios"], BLOG_SLUG_EN["placa-resenas-google-para-restaurantes"], BLOG_SLUG_EN["placa-resenas-google-para-salones-esteticas-y-barberias"], BLOG_SLUG_EN["placa-resenas-google-para-planners-y-eventos"], BLOG_SLUG_EN["como-hacer-una-encuesta-de-satisfaccion-del-cliente"]],
    quoteMessage: "Hi, I would like to learn about NFC plates and stands for Google reviews.",
    sources: [
      { label: "Google: tips to get reviews", url: "https://support.google.com/business/answer/3474122?hl=en" },
      { label: "Google: prohibited and restricted content", url: "https://support.google.com/business/answer/7400114?hl=en" },
      { label: "Google: ask for reviews with a link or QR code", url: "https://support.google.com/business/answer/16816815?hl=en" },
      { label: "Google: verify your profile with a video", url: "https://support.google.com/business/answer/14271705?hl=en" },
    ],
  },
  {
    slug: BLOG_SLUG_EN["recuerdos-baby-shower-personalizados"],
    title: "What to Give Baby Shower Guests",
    metaTitle: "What to Give Baby Shower Guests",
    description: "What to give baby shower guests besides candy: favor boxes, stickers and temporary tattoos, how to combine them and when to order them.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-11",
    intro: "If you're wondering what to give baby shower guests besides candy, Yume produces three options with your party design: a favor box, a sticker and a temporary tattoo. Here you can compare them, see which suits each guest, calculate how many to order with an example, and decide when to order, whether you're organizing the party yourself or working with a planner.",
    sections: [
      {
        heading: "Which baby shower favor to choose",
        body: [
          "Choose a small favor, the same for each guest and easy to take home. A personalized favor box fits: it arrives assembled and empty, has a handle, and you fill it with whatever you choose. What makes it special is the design, not just the baby's name.",
          "Baby shower guides describe the ideal favor as something small, the same for everyone and placed near the exit. Examples include something edible, a plant, a candle or a packet of seeds. A [personalized favor box](/en/products/personalized-party-favor-boxes) fits that idea, with the advantage of a design made for your party instead of one from a catalog.",
          "A 2026 article on wedding favors in Mexico points in the same direction: guests keep useful pieces with their own design, while generic favors tend to be forgotten. Applied to a baby shower, the idea is to combine design and usefulness, not just add a name. To decide what goes inside, see [what to put in a favor box](/en/blog/what-to-put-in-a-party-favor-box).",
        ],
      },
      {
        heading: "What to give baby shower guests besides candy",
        body: [
          "Besides candy, you can give a sticker with the party design or a temporary tattoo with the baby's name, on their own or inside a favor box. Yume produces all three pieces in the same palette, so they match the invitation and decorations.",
          "The criterion guides repeat most often is to connect the favor to the party theme or the baby's name. Baby shower guides give jungle, fairy tales, and clouds and stars as examples of themes. A [vinyl sticker](/en/products/waterproof-vinyl-stickers) or temporary tattoo with that theme meets the criterion with a piece made just for your party.",
          "If you want to see the tattoo option, visit [custom temporary tattoos](/en/products/custom-temporary-tattoos) to review the purchase conditions.",
        ],
      },
      {
        heading: "Candy, stickers or tattoos: what gets consumed and what gets kept",
        body: [
          "Edible items get consumed, while plants are mostly decorative. That's why it helps to add a piece guests can keep or use, with your own design instead of a generic catalog design.",
          "Soap, mugs and bookmarks can be useful in everyday life. The table compares the three pieces Yume produces.",
        ],
        table: {
          headers: ["Favor", "What it is", "Personalization", "Consumed or kept"],
          rows: [
            ["Personalized favor box", "Lunch box-style packaging with a handle, arriving assembled and empty", "Name and theme", "You choose the filling, which gets consumed"],
            ["Vinyl sticker", "Premium vinyl with your design, character or photo", "Your design, character or photo", "Resistant to water, sun and scratches"],
            ["Temporary tattoo", "Custom temporary tattoo for the party", "Your design", "Temporary by definition"],
          ],
        },
      },
      {
        heading: "Personalized baby shower favor boxes: what to put inside",
        body: [
          "The favor box arrives assembled and empty, so you choose the filling. A Spanish-language baby shower guide suggests decorated cookies, chocolates and candy in packaging that reflects the party theme as edible favors, and says candy is always a hit. You choose the combination that goes with your palette.",
          "The box personalization includes the name and theme, bringing the filling together with the rest of the party: the baby's or mother's name and your chosen palette. You can order your [baby shower favor boxes](/en/products/personalized-party-favor-boxes) with your party's name and theme.",
        ],
      },
      {
        heading: "Individual favor box or candy table: which to choose",
        body: [
          "An individual favor box is one piece per guest in personalized packaging that they take home. A candy table is shared and stays at the party as part of the decorations. If you want each person to leave with their own favor, choose the box; the table works as a complement.",
          "The same Spanish-language guide mentions cupcakes and cookies for the candy table, and separately suggests personalized packaging as an edible favor. They serve different roles: the table is enjoyed at the party and the box is the last thing each guest takes home.",
        ],
      },
      {
        heading: "Baby shower favors for a girl, a boy or a neutral palette",
        body: [
          "For a girl, a boy or a neutral palette, the rule is the same: use the party colors and repeat the design on each piece. You can choose pink or cream, blue or green, and beige, white or soft green. Make the baby's or mother's name visible.",
          "For a girl, pink, cream or the family's chosen palette can accompany the baby's name. Coordinate the box and sticker designs with the invitation or table so everything looks like part of the same celebration.",
          "For a boy, try blue, green or the celebration's colors. The name and a simple illustration can be repeated on the box and sticker, so each guest takes home a piece that matches what they saw at the party.",
          "If the family prefers a neutral look, beige, white or soft green work well. Choose your own theme and leave room for the name; before production you'll receive a digital proof to review the result.",
        ],
      },
      {
        heading: "Which favor suits each type of guest",
        body: [
          "For adults and grandmothers, a favor box with a sticker in the same design works well because it combines something edible with something to keep. For children, a box with a temporary tattoo adds something to play with. If you have a mix of guests, repeat the same design across all pieces.",
          "A baby shower guide recommends preparing small prizes if there will be games. A sticker or [temporary tattoo](/en/products/custom-temporary-tattoos) with the party design can serve that purpose.",
          "For more tattoo ideas, see [temporary tattoos for parties](/en/blog/temporary-tattoos-for-weddings-events-and-parties) and [how long temporary tattoos last](/en/blog/how-long-do-temporary-tattoos-last-and-how-to-remove-them).",
        ],
      },
      {
        heading: "How to personalize a baby shower favor",
        body: [
          "Good personalization means more than writing a name. Decide whose name to use, the baby's or the mother's, along with the event palette and a simple illustration. Before production you receive a digital proof to review the design, and nothing is produced until you approve it.",
          "If you already have the invitation or photos of the decorations, send them by WhatsApp and we'll adapt the design to those colors. That way the favor feels like a natural finish to the party instead of a separate piece.",
          "A sticker in the same design can decorate or seal the favor. [Custom vinyl stickers](/en/products/waterproof-vinyl-stickers) are made with your design, character or photo and sold by piece count, so you can repeat the box illustration on each one.",
        ],
      },
      {
        heading: "How to combine a favor box, sticker and tattoo without an improvised look",
        body: [
          "The simplest combination is a favor box with a sticker in the same design. For children, add a temporary tattoo. Repeat the name, illustration and palette on each piece and match them to the invitation, so the favor looks like part of the party rather than a last-minute addition.",
          "A DIY option is to print a label for a generic product. With Yume, the design is adapted to your palette and you receive a digital proof before production.",
          "If you're working with a planner, send them the same invitation and decoration photos so the designs for all three pieces start from the same base.",
        ],
      },
      {
        heading: "How many baby shower favor boxes to order and what they cost",
        body: [
          "Order one favor box per confirmed guest and add a 10% margin. The margin covers an unlisted companion, someone taking one for a person who couldn't attend, and a damaged piece. This 1.1-per-guest rule is a general planning reference.",
          `Example: with 40 confirmed guests, 40 times 1.1 makes 44 favor boxes. For the first 100 pieces, 44 boxes cost $${priceOf("dulceros-personalizados", 44)} MXN. The minimum is 10 pieces: 10 boxes cost $${priceOf("dulceros-personalizados", 10)} MXN and 50 cost $${priceOf("dulceros-personalizados", 50)} MXN. Above 100 pieces, wholesale pricing is quoted on WhatsApp.`,
          `Vinyl stickers have a minimum of 40 pieces, which cost $${priceOf("stickers-vinil-impermeable", 40)} MXN. Once your confirmed guest list is final, use the calculation above for the boxes and decide how many stickers to add.`,
          "To compare ideas for other celebrations, see the [social event favor box guide](/en/blog/wedding-quinceanera-baby-shower-favor-boxes).",
        ],
      },
      {
        heading: "When to order baby shower favors",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days from approval of the digital proof, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days for national shipping or ${PICKUP_EXTRA_DAYS} business day for pickup at Casa Blanca in Guadalajara. Order with time to spare to decide on the name and theme and review the proof.`,
          "As a general reference, baby shower guides suggest starting to plan about 8 weeks ahead, sending invitations about 4 weeks ahead and setting the RSVP deadline about 2 weeks ahead. They also suggest buying favor wrapping and nonperishable items about 2 weeks ahead. You can use that schedule and add the production time above.",
          "Another baby shower guide also recommends organizing the event several weeks in advance. For stickers and temporary tattoos, share the baby shower date and quantity on WhatsApp and we'll confirm the schedule before you order.",
        ],
      },
      {
        heading: "Baby shower with a planner: timing and direct contact",
        body: [
          "If you're organizing the baby shower with a planner, or you're a planner yourself, the process is simple: share the date, quantity, name and palette on WhatsApp, receive a digital proof and approve it before production. That makes the timing clear from the start and helps the favor match the rest of the event.",
          "We serve Guadalajara and Zapopan and ship throughout Mexico. If the event is in the Guadalajara metropolitan area, you can pick up at Casa Blanca. For more details about ordering in your city, see [favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable", "tatuajes-temporales-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"], BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]],
    faq: [
      { q: "What can I give baby shower guests besides candy?", a: "At Yume you can choose a personalized favor box, a vinyl sticker with your party design or a custom temporary tattoo, on their own or combined with the same design." },
      { q: "What favors appear in shopping guides?", a: "One shopping guide lists bags of candy, handmade soaps, scented items and personalized pencils. Another guide adds succulents, candles, bookmarks, instant photos and mugs with the baby's name." },
      { q: "Can I combine a favor box with a sticker?", a: "Yes. You can repeat the same design on both. Favor boxes start at 10 pieces and vinyl stickers at 40." },
      { q: "What makes a good baby shower favor?", a: "According to baby shower guides, it should be small, the same for each guest, placed near the exit and easy to take home. Examples include something edible, a plant, a candle or a packet of seeds." },
      { q: "Do the favor boxes include candy?", a: "No. The box arrives assembled and empty, ready to fill with the candy or details you choose." },
      { q: "What can I put inside a baby shower favor box?", a: "A Spanish-language baby shower guide suggests decorated cookies, chocolates and candy in packaging that reflects the party theme." },
      { q: "How many favor boxes should I order if 60 guests confirm?", a: "Using the rule of 1.1 per guest, that's 66 boxes: one per person plus a 10% margin." },
      { q: "What is the minimum order?", a: "The minimum for personalized favor boxes is 10 pieces. For vinyl stickers, the minimum is 40 pieces." },
      { q: "Can I see the design before production?", a: "Yes. We send you a digital proof before production, and nothing is produced until you approve it." },
      { q: "How long do favor boxes take to arrive?", a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after proof approval, plus ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} days for national shipping, or ${PICKUP_EXTRA_DAYS} business day if you pick up at a Casa Blanca branch in Guadalajara.` },
      { q: "How far ahead should I start planning the baby shower?", a: "Baby shower guides suggest starting about 8 weeks ahead, sending invitations about 4 weeks ahead and closing RSVPs about 2 weeks ahead. For the personalized favor, add production and shipping time." },
    ],
  },
  {
    slug: BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
    title: "Custom Medical Prescription Pads in Guadalajara: A Guide for Your Practice",
    metaTitle: "Custom Medical Prescription Pads in Guadalajara",
    description:
      `What goes on the letterhead, what size to use, and what a custom medical prescription pad costs in Guadalajara: from $${recetarioPrice("sin-diseno")}, with a digital proof.`,
    category: "Guides",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-11-11",
    intro:
      "If you run a practice in Guadalajara, Zapopan, or anywhere in Jalisco, the prescription pad you use every day is also part of your practice's image. A generic one bought at any stationery store doesn't communicate the same thing as one with your letterhead, your license number, and your practice's own design. This guide covers what you need to know before ordering a [custom medical prescription pad](/en/products/medical-prescription-pads).",
    sections: [
      {
        heading: "What goes on your letterhead",
        body: [
          "Your letterhead should include your full name, specialty, professional license number (and specialty license, if applicable), and your practice's contact details: address, phone and, if you want, office hours. These are the fixed details printed once so you don't handwrite them on every prescription.",
          "If you share a practice with other specialists or work out of more than one location, it's common to use a separate letterhead per location instead of trying to fit everything onto one: it looks cleaner and avoids confusing the patient.",
          "Before requesting a quote, gather your details exactly as they appear on your official documents: copy your license number instead of retyping it from memory, and confirm that the phone and address are the ones you want patients to use. If you already have a logo, send it; if not, you can choose the option with design and we'll build it with you.",
          "To see which details get filled in later, for each patient, and which are better left preprinted, read the guide on [medical prescription information in Mexico](/en/blog/required-information-medical-prescription-mexico).",
        ],
      },
      {
        heading: "Medical prescription pad size and paper",
        body: [
          "At Yume the prescription pad is Half Letter (14 × 21.5 cm), 100 sheets, on white 90 gsm Bond paper. This is the format we produce for the custom medical prescription pad: it fits in a folder or file without folding and leaves room to handwrite each prescription.",
          "If your practice handles prescriptions for specific procedures (for example, with a folio number or barcode for some institution), mention it when requesting a quote: that's information that needs to be confirmed before printing, not something to improvise afterward.",
          "If you're unsure whether to print or move to a digital prescription, check the comparison between [printed and digital prescription pads](/en/blog/printed-vs-digital-prescription-pads) before deciding.",
        ],
      },
      {
        heading: "How much a custom prescription pad costs",
        body: [
          `A 100-sheet prescription pad costs $${recetarioPrice("sin-diseno")} if you already have your design ready and $${recetarioPrice("con-diseno")} if we design it with you. Either way you get a digital proof of the letterhead and we only produce once you approve it. Prices are in Mexican pesos and per complete pad.`,
          "The difference between the two options is the design work: \"without design\" is for when you already have an editable file with your letterhead, and \"with design\" includes us building the letterhead with you from your professional details, with the adjustments you need before printing.",
          "If you need more than one pad, for example one per practice location, message us on WhatsApp and we'll quote them together. To choose between the two options calmly, the guide on [prescription pads with or without design](/en/blog/prescription-pad-with-design-vs-without-design) explains what each includes.",
        ],
        table: {
          headers: ["Option", "Price", "What it includes"],
          rows: [
            ["Without design", `$${recetarioPrice("sin-diseno")}`, "We print your ready design on 100 Half Letter sheets"],
            ["With design", `$${recetarioPrice("con-diseno")}`, "We design the letterhead with you and print it on 100 Half Letter sheets"],
          ],
        },
      },
      {
        heading: "The process: from quote to prescription pad in hand",
        body: [
          "The process is the same in Guadalajara as in any other city in Mexico, because the design is approved remotely: you request a quote via WhatsApp or the online shop, send your details or logo, review the digital proof, and only once you approve it does it go to production.",
          "That approval step is what prevents the most common mistake when customizing stationery: sending something to print without having seen the final design, and finding a typo in the license number or phone number only after all 100 sheets are already printed.",
          "When the digital proof arrives, calmly check four things: your name is spelled correctly, the license number matches your document, the phone number reaches the right practice, and the address is complete. If something is off, ask for the change right then, when it's easiest to fix.",
          "For the general steps to order stationery remotely, read [how to order custom stationery online](/en/blog/how-to-order-custom-stationery-online).",
        ],
      },
      {
        heading: "Timing and delivery: how long it takes and how you receive it",
        body: [
          `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days once the digital proof is approved. If it ships by courier, add ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days in transit; if you pick it up at a Casa Blanca branch, add ${PICKUP_EXTRA_DAYS} business day. These are estimates and can vary around holidays.`,
          `We produce in Guadalajara and deliver two ways: pickup at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the metropolitan area ($${CASABLANCA_PRICE}) or home delivery anywhere in Mexico ($${NATIONAL_SHIPPING_PRICE}). The branches are: ${casablancaBranchNames}.`,
          `Both options are free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. A single prescription pad doesn't reach that amount, so the shipping or pickup fee applies, unless you add more catalog pieces to reach it.`,
        ],
      },
      {
        heading: "Common mistakes when ordering your first pad",
        body: [
          "The most common mistakes are three: approving the proof without checking the license number against your document, printing details that change often, and cramming too much information into a small space. All three are avoided by calmly reviewing the digital proof before production.",
          "If your phone, hours or address change often, think twice before printing them on all 100 sheets. A stable detail, like the practice's email, lasts longer than one you'll have to correct in a few months.",
          "It also helps not to overcrowd the letterhead: a few legible details read better than many in small print, and leave room for handwriting. If you work under a medical association or an institution with its own requirements, confirm them with them before printing.",
        ],
      },
      {
        heading: "A prescription pad and a business card with the same design",
        body: [
          "If you also want a business card, you can quote both with the same letterhead: same typography, same colors and same details. Your practice looks more consistent, you don't coordinate two separate designs, and patients recognize your image from the prescription to the card they take home from the visit.",
          "Business cards are quoted case by case on WhatsApp. The guide on [business cards for your practice](/en/blog/business-cards-for-your-practice) covers which details to prepare. And if you're comparing providers, see [Yume compared with other print shops](/en/blog/yume-vs-online-prescription-pad-print-shops).",
        ],
      },
      {
        heading: "Three questions to answer before requesting a quote",
        body: [
          "To decide at your own pace, start with three questions: whether you will print prescriptions or use digital ones, whether you already have a design ready, and which details will be preprinted. Each has its own guide. With the answers clear, ordering your custom medical prescription pad in Guadalajara is easier, and you arrive at the digital proof with your details ready.",
          "Print or digital: the comparison of [printed and digital prescription pads](/en/blog/printed-vs-digital-prescription-pads) helps you choose the format.",
          "Your own design or a design made with you: the guide to [with or without design](/en/blog/prescription-pad-with-design-vs-without-design) explains the difference between the two options.",
          "Once everything is clear, you can order your [custom medical prescription pad](/en/products/medical-prescription-pads) in the online shop or request a quote on WhatsApp.",
        ],
      },
    ],
    faq: [
      {
        q: "How much does a custom medical prescription pad cost at Yume?",
        a: `A 100-sheet prescription pad costs $${recetarioPrice("sin-diseno")} if you already have your design ready and $${recetarioPrice("con-diseno")} if we design it with you.`,
      },
      {
        q: "What size and paper is the prescription pad?",
        a: "It's Half Letter (14 × 21.5 cm), 100 sheets, on white 90 gsm Bond paper.",
      },
      {
        q: "Do I see the design before it's printed?",
        a: "Yes. We send you a digital proof of the letterhead and only produce once you approve it. Check your license number and phone there.",
      },
      {
        q: "Can I send my own design?",
        a: "Yes. You can send your design in an editable format (the without-design option) or ask us to design it from scratch with you (the with-design option).",
      },
      {
        q: "What does the option with design include?",
        a: "It includes building the letterhead with you from your professional details, with the adjustments you need before printing.",
      },
      {
        q: "How long does my order take to arrive?",
        a: `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after the proof is approved. By courier, add ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days; at a Casa Blanca branch, add ${PICKUP_EXTRA_DAYS} business day.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes. We produce in Guadalajara and ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE}. On purchases of $${FREE_SHIPPING_THRESHOLD} or more, shipping is free.`,
      },
      {
        q: "Where can I pick up my prescription pad in Guadalajara?",
        a: `At one of the ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the metropolitan area, for $${CASABLANCA_PRICE}. The branches are: ${casablancaBranchNames}.`,
      },
      {
        q: "Can I order more than one prescription pad?",
        a: "Yes. If you need more than one, for example one per practice location, message us on WhatsApp and we will quote them together.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If you need one for your practice or clinic, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"], BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"], BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"], BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"], BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"], BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"]],
  },
  {
    slug: BLOG_SLUG_EN["stickers-personalizados-para-negocios-guadalajara"],
    title: "Custom Stickers and Labels in Guadalajara",
    metaTitle: "Custom Stickers in Guadalajara: How to Order",
    description:
      "Custom stickers and labels in Guadalajara for weddings and events: how to choose, what affects the price, and how to order with a digital proof.",
    category: "Guides",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-11-05",
    intro:
      "If you're looking for custom stickers in Guadalajara, the first step is to decide which option suits you: a studio with personal service, an industrial printer, or an online platform. Here we explain the differences, when to choose a label or sticker for a wedding, event, or small brand, what affects the price, and how to order step by step. A label or sticker with your design gives an event or brand a polished, consistent look.",
    sections: [
      {
        heading: "Custom stickers in Guadalajara: where to order",
        body: [
          "In Guadalajara, you can order custom stickers from a studio with personal service, an industrial printer, or an online platform. For an event or small brand, a studio is often a better fit because you can review your design with a person before printing. Yume produces to order in Guadalajara and provides service through WhatsApp.",
          "We make pieces for individual events or small brands, with a digital proof before production. Industrial or mass production isn't our focus, but message us on WhatsApp and we'll discuss your needs.",
        ],
      },
      {
        heading: "Labels or stickers for weddings and events: which to choose",
        body: [
          "The difference is in how you use them, not how you order: for both, you choose a cut and finish and receive a digital proof. Logo labels have a 50-piece minimum and work well with your logo or your own design. Vinyl stickers have a 40-piece minimum and can feature any design, character, or photo.",
          "Our [custom logo labels](/en/products/custom-logo-stickers) and [vinyl stickers](/en/products/waterproof-vinyl-stickers) can be used for a wedding, christening, baby shower, or birthday. Tell us the occasion and colors on WhatsApp and we'll help you choose the best option. If you're a planner, you can order the exact quantity you need for each event, with a digital proof before production.",
        ],
      },
      {
        heading: "What custom labels are used for",
        body: [
          "Common uses include sealing packaging bags or boxes, placing them on the bottom of products such as candles, soaps, or jars, closing shipping envelopes, or giving them out loose as a little extra with an order. They work like a small business card that also decorates, and can also be a favor for event guests.",
          "If you sell at bazaars or markets in Guadalajara, having labels with your logo on every paper bag helps people recognize you next time, without spending on expensive custom packaging from the start.",
        ],
      },
      {
        heading: "What affects the price of custom stickers",
        body: [
          "We sell by piece count, not by sheet. The price depends on the option, quantity, and finish you choose: matte and glossy cost the same, while holographic has an extra cost per piece.",
          "There are two options: Logo Stickers & Labels, designed for your business or event logo (50 pieces minimum), and Custom Vinyl Stickers, for any design, character, or photo (40 pieces minimum). For both, you choose the cut (die-cut to your design's shape, or kiss-cut) and the finish: matte, glossy, or holographic. All our stickers have high-quality BOPP lamination. They are all water-resistant.",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "What quantity to order",
        body: [
          "Because we sell by the piece, you can order the exact quantity you need instead of full sheets. The minimum is 50 pieces with your logo and 40 vinyl stickers, so you can match the order to the actual size of your event or small business without buying more than you need.",
          "Tell us your preferred shape or size when requesting a quote and we'll send you a digital proof before printing. If you're unsure which format to choose, see our guide to [rolls, sheets, or individual pieces](/en/blog/label-printing-roll-sheet-or-by-the-piece).",
        ],
      },
      {
        heading: "Pick up in Guadalajara or get it delivered",
        body: [
          `We don't have a storefront, but we produce in Guadalajara. In the metro area, you can pick up your order at one of ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches for $${CASABLANCA_PRICE} MXN, or have it delivered anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN. Both options are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
          `The pickup branches are: ${casablancaBranchNames}. You choose the branch at checkout.`,
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
        ],
      },
      {
        heading: "What information to send for a quote",
        body: [
          "To request a quote, send us your logo or design, the number of pieces, how you'll use them, and your event date on WhatsApp. We'll tell you which option suits you and prepare a digital proof. If you don't have a logo yet, let us know when requesting a quote and we'll discuss your needs.",
          "If your file needs adjustments, we'll let you know while preparing the digital proof, before production.",
        ],
      },
      {
        heading: "How to order custom stickers step by step",
        body: [
          "Ordering is simple: choose the option and quantity, send your logo or design, and receive a digital proof before printing. You can buy in the online store or request a quote on WhatsApp first if you have questions. Nothing is produced until you approve the proof.",
          "Step 1: choose logo labels or vinyl stickers, the cut (die-cut or kiss-cut), and the finish (matte, glossy, or holographic). Step 2: enter the exact quantity, starting at 50 pieces with a logo or 40 in vinyl. Step 3: upload your design or send it on WhatsApp. Step 4: review the digital proof, with up to 2 rounds of adjustments, and approve it. Step 5: pick up at a Casa Blanca branch or receive it at home.",
          "If you're unsure whether vinyl or paper is right for you, read our comparison of [vinyl and paper stickers](/en/blog/vinyl-vs-paper-stickers-differences).",
        ],
      },
    ],
    faq: [
      {
        q: "Where can I print custom stickers and labels in Guadalajara?",
        a: "You can choose a design studio, an industrial printer, or an online platform. We're a studio: we produce to order in Guadalajara, send a digital proof, and provide service through WhatsApp, without a storefront.",
      },
      {
        q: "Do you take industrial or mass-production orders?",
        a: "That isn't our focus, but message us on WhatsApp and we'll discuss your needs. We mainly make pieces for an event or a small brand.",
      },
      {
        q: "Do you make labels for weddings and events?",
        a: "Yes, we make stickers and labels for weddings and events. Tell us the occasion and colors on WhatsApp and we'll help you choose between logo labels and vinyl stickers.",
      },
      {
        q: "Can I request a quote on WhatsApp before buying?",
        a: "Yes. You can request a quote on WhatsApp or buy directly from the online store. In both cases, you receive a digital proof and we print nothing until you approve it.",
      },
      {
        q: "How many rounds of adjustments are included in the digital proof?",
        a: "The digital proof includes up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "Do you have a physical store in Guadalajara?",
        a: `No. We produce to order in Guadalajara and deliver two ways: pickup at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the metro area ($${CASABLANCA_PRICE} MXN) or home delivery ($${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico). Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "How much do 100 labels with my logo cost?",
        a: `100 pieces cost $${priceOf("stickers-logo-personalizado", 100)} MXN.`,
      },
      {
        q: "What is the minimum order?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How long does my order take if I'm in Guadalajara?",
        a: `The digital proof arrives within 24 hours of payment. Once you approve it, your order is ready for Casa Blanca pickup in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days, or reaches your home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "Are the labels water-resistant?",
        a: "Yes, all of our labels and stickers are water-resistant.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your company needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["stickers-para-empaques-de-negocio"], BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
  },
  {
    slug: BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"],
    title: "Custom Stationery for Businesses in Jalisco: Why It's Worth It",
    metaTitle: "Custom Stationery for Businesses in Jalisco",
    description:
      "Custom stationery for businesses in Jalisco: prescription pads, labels and stickers with your brand, real prices, a digital proof and shipping across Mexico.",
    category: "Local Business",
    publishedAt: "2026-08-28",
    modifiedAt: "2026-11-12",
    intro:
      "Whether you run a medical practice or a small business selling at bazaars in Guadalajara, the custom stationery you use every day (prescription pads, stickers, labels) is one of the simplest ways to look consistent. It's not the flashiest part of a business, but it's the part the customer or patient is literally holding in their hand. This guide covers which pieces you can customize, what they cost, how we work from Guadalajara and where it makes sense to start.",
    sections: [
      {
        heading: "What custom stationery for businesses in Jalisco is",
        body: [
          "Custom stationery is any printed piece that carries your name, logo and real details: prescription pads, labels, stickers, menus or invitations. For a business in Jalisco it matters because it's what your customer or patient holds in their hand, and done well it signals order and care without a full rebrand.",
          "Think about a person's path through your business: they get a prescription, open a bag, see a label on a jar or take home a keepsake from your event. Each piece is a moment where your brand shows up (or doesn't). When they all look alike, the business reads as one well-kept whole.",
        ],
      },
      {
        heading: "Consistency before quantity",
        body: [
          "You don't need to redesign your entire business to look more professional: sometimes it's enough for the prescription pad, the delivery bag, and the sticker that seals the package to use the same logo and the same colors. That way, each piece is recognizable as part of one brand.",
          "That's why at Yume we work made-to-order and tailored to you instead of selling generic templates: every piece is designed with your real details and your real brand, not a mold some other business is also using. If you want to compare calmly, read our comparison of [custom stationery vs. generic templates](/en/blog/custom-stationery-vs-generic-templates).",
          "A good starting point is to check three things on everything you print: the logo is the same, the colors match, and the phone or WhatsApp number is the same on every piece. That gives you a consistent base before you order anything new.",
        ],
      },
      {
        heading: "Which stationery pieces you can order at Yume",
        body: [
          "At Yume you can order medical prescription pads, logo stickers and labels, and vinyl stickers, all with prices published in the shop. All of our stickers come with high-quality BOPP lamination. We also quote invitations, menus and temporary tattoos for events on WhatsApp. Every order goes through a digital proof before it is printed.",
          "For practices in Guadalajara, Zapopan or anywhere in Jalisco, you can order a [custom medical prescription pad](/en/products/medical-prescription-pads) without design, if you already have yours, or with design, if we build it with you. There is a full guide to [custom medical prescription pads in Guadalajara](/en/blog/custom-medical-prescription-pads-guadalajara) covering what goes on the letterhead.",
          "[Logo Stickers & Labels](/en/products/custom-logo-stickers) and [vinyl stickers](/en/products/waterproof-vinyl-stickers) work for sealing packaging, identifying products or giving customers a branded detail. They're sold by piece count, not by sheet. If you sell products, we also have a guide to [custom stickers for businesses in Guadalajara](/en/blog/custom-stickers-for-businesses-guadalajara).",
          "Event pieces: invitations, menus and temporary tattoos don't have a fixed shop price because they depend on the design and quantity. They are quoted on WhatsApp, and the design goes through the same digital proof as every other order.",
        ],
      },
      {
        heading: "Vinyl stickers: choose your size, cut and finish",
        body: [
          "When ordering Custom Vinyl Stickers, you choose the size, cut and finish. Sizes are small (up to 4 cm), medium (5 to 6 cm) and large (7 to 8 cm). The cut can be die-cut or kiss-cut, and the finish matte, glossy or holographic. All have BOPP lamination.",
          "If you are deciding between the two cuts, see the guide to [die-cut vs. kiss-cut stickers](/en/blog/die-cut-vs-kiss-cut-stickers). If you need a size larger than 8 cm or something more specific, request a quote on WhatsApp.",
        ],
      },
      {
        heading: "How much custom stationery costs",
        body: [
          `100 pieces (small size) of Logo Stickers & Labels cost $${priceOf("stickers-logo-personalizado", 100)} MXN. The 100-sheet medical prescription pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
          "The minimum order is 50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers. This table shows what each quantity costs, so you order what you will really use:",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "Made in Guadalajara, shipped across Mexico",
        body: [
          "We produce in Guadalajara, Jalisco, and ship anywhere in Mexico. There is no storefront: you request a quote, approve the digital proof and receive your order by courier or pick it up at a Casa Blanca branch in the metro area. Timeframes count business days only, starting when you approve.",
          "The quoting, design and approval process is the same no matter which city in Mexico you're in, including Zapopan, Tlaquepaque and Tonalá.",
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping is $${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico and free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
          `If you pick up, you can choose from ${CASABLANCA_BRANCHES.length} Casa Blanca branches (${casablancaBranchNames}) for $${CASABLANCA_PRICE} MXN, also free from $${FREE_SHIPPING_THRESHOLD} MXN. You choose the branch at checkout.`,
        ],
      },
      {
        heading: "Stationery for your business events",
        body: [
          "If your business hosts a holiday party, an anniversary or a launch, you can add pieces with the same design: stickers, invitations, menus or temporary tattoos. Invitations, menus and tattoos are quoted on WhatsApp based on quantity and design, so message us with the date and guest count.",
          "The same consistency logic applies to an event: when the invitation, the menu and the keepsake guests take home share a design, everything looks planned. For ideas on each piece, see our guides to [custom event invitations](/en/blog/how-to-order-custom-event-invitations), [custom wedding menus](/en/blog/custom-wedding-menus) and [stickers for weddings and events](/en/blog/stickers-for-weddings-events-and-parties).",
          "If it is a company holiday party or anniversary, see our guides to [company posada favors](/en/blog/personalized-company-posada-favors) and [company anniversary details](/en/blog/company-anniversary-custom-details).",
          "If you're a planner or coordinate events for other people, tell us on WhatsApp the quantity per event and the date, and we'll tell you how to schedule the digital proof with enough time. Here is a [guide for planners](/en/blog/guide-for-planners-working-with-custom-favors-supplier).",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Start with the piece you use most: the prescription pad if you run a practice, the logo stickers if you sell a product. Send your details or your logo on WhatsApp or from the shop, review the digital proof and approve it. Nothing is printed before you approve it.",
          "You can request a quote directly on WhatsApp or browse the full [product catalog](/en/products): either way, the next step is the same: send us your details or your logo so we can put together the digital proof. For the full step-by-step, read how to [order custom stationery online](/en/blog/how-to-order-custom-stationery-online).",
          "If you don't have a finished logo yet, tell us when you request the quote: we can work on it together before the digital proof stage; you don't need to arrive with everything figured out.",
        ],
      },
    ],
    faq: [
      {
        q: "What custom stationery can I order for my business in Jalisco?",
        a: "Medical prescription pads, logo stickers and labels, and vinyl stickers, with prices published in the shop. We also quote invitations, menus and temporary tattoos for events on WhatsApp.",
      },
      {
        q: "How much do stickers with my logo cost?",
        a: `100 pieces (small size) cost $${priceOf("stickers-logo-personalizado", 100)} MXN.`,
      },
      {
        q: "How much does a custom medical prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What is the minimum order?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "Can I choose the finish and cut of the vinyl stickers?",
        a: "Yes. The finish can be matte, glossy or holographic, and the cut die-cut or kiss-cut. All have BOPP lamination.",
      },
      {
        q: "Do you have a physical store in Guadalajara?",
        a: "No. We produce in Guadalajara, but the process is online: you request a quote, approve the digital proof and receive your order by courier or pick it up at a Casa Blanca branch in the metro area.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "How much is shipping?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico, or $${CASABLANCA_PRICE} MXN if you pick up at a Casa Blanca branch in the Guadalajara metro area. Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your company needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"], BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"], BLOG_SLUG_EN["stickers-personalizados-para-negocios-guadalajara"], BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"], BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"], BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["guia-planners-proveedor-detalles-personalizados"]],
  },
  {
    slug: BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"],
    title: "How to Order Custom Stationery Online",
    metaTitle: "How to Quote and Order Custom Stationery Online",
    description:
      "How to order custom stationery online in Mexico: what to prepare, how the digital proof works, what it costs and how long your order takes.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "You don't need to visit a physical print shop to get stationery with your brand on it: Yume is an online print shop based in Guadalajara, with the whole process handled remotely and shipping to any city in Mexico. This guide walks through how to quote custom stationery online and order it step by step, so you know what to prepare before reaching out.",
    sections: [
      {
        heading: "The process, step by step",
        body: [
          "Ordering custom stationery online takes five steps and almost everything happens remotely: you request a quote on WhatsApp or in the shop, send us your details or your logo, review a digital proof, approve it, and receive your order by courier or at a Casa Blanca branch. Nothing is printed before you approve it.",
          `1) Request a quote via WhatsApp or from the online shop, telling us which product and quantity you need. 2) Send us your details or your logo/design, depending on the product. 3) We send you a digital proof so you can check everything is correct. 4) You approve the design, and only then does it go to production. 5) You receive your order by courier at the address you give us, anywhere in Mexico, or, if you're in the Guadalajara metro area, pick it up at the Casa Blanca branch of your choice ($${CASABLANCA_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more).`,
          "The only in-person step in the whole process is receiving the package (or picking it up at your Casa Blanca branch): everything else, including requesting a quote and design approval, happens remotely over WhatsApp or email.",
        ],
      },
      {
        heading: "What to have ready before requesting a quote",
        body: [
          "To get a quick quote, have your piece's details and the quantity you want at hand. For a prescription pad that means your name, specialty, license number and practice details; for stickers, your logo or design file. If something is missing, tell us when you request the quote and we'll sort it out together.",
          "For a medical prescription pad: your full name, specialty, professional license number, and your practice's contact details. For logo stickers: your design file (ideally a PNG, PDF, AI, or SVG with a transparent background) and the quantity you want.",
          "If you don't have a finished logo or design yet, tell us anyway when requesting a quote: we can work on it together before reaching the digital proof stage; you don't need to arrive with everything already figured out. On the prescription pad this shows up in the price: there is a no-design option (you already have your design ready) and a with-design option (we design it with you).",
          "If you want to dig into that choice, read our guide to prescription pads with design vs. without design.",
        ],
      },
      {
        heading: "How much custom stationery costs",
        body: [
          `Price depends on the product. The 100-sheet medical prescription pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
          "Stickers and labels are sold by piece count, not by sheet, so you order the quantity you actually need. The minimum is 50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers. All of our stickers come with high-quality BOPP lamination. This table shows what each quantity costs:",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long it takes and how you receive your order",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. These timeframes count business days only.`,
          `Shipping anywhere in Mexico is $${NATIONAL_SHIPPING_PRICE} MXN and free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. If you're in Guadalajara or the metro area, you can pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches (${casablancaBranchNames}) for $${CASABLANCA_PRICE} MXN, also free from $${FREE_SHIPPING_THRESHOLD} MXN. You choose the branch at checkout.`,
          "Since the clock starts when you approve the digital proof, replying quickly is the most effective way to get your order sooner. More on timing in our guide to how long custom stickers take to arrive.",
        ],
      },
      {
        heading: "How to review the digital proof without mistakes",
        body: [
          "The digital proof is your moment to fix things before printing. Check spelling, phone number, license number, colors and logo size carefully, because once a piece is printed it can't be changed. We don't send anything to production until you approve it.",
          "On stickers and labels, the proof includes up to 2 rounds of changes. A good habit is to have someone else read it with you: typos in a phone number or license number are the easiest to miss once you've been staring at the design for a while.",
        ],
      },
      {
        heading: "Why you don't need a physical print shop in Guadalajara",
        body: [
          "No, you don't need a physical print shop to order custom stationery. Yume produces in Guadalajara but operates online: you request a quote, approve the design and receive your order without visiting a counter or bringing files on a USB drive, from any city in Mexico.",
          "Although we produce in Guadalajara, Jalisco, we don't operate like a walk-in print shop: we're an online print shop. Your order comes to your door or, within the metro area, to the Casa Blanca branch closest to you. The whole process, from quoting to approving the final design, happens over WhatsApp or email, so the service works the same whether you're in the city or in any other state in Mexico.",
          "That said, if you're in the Guadalajara metro area, turnaround tends to be a bit faster simply due to proximity, though the process to order stationery online in Mexico is identical for the whole country.",
        ],
      },
    ],
    faq: [
      {
        q: "How do I order custom stationery online?",
        a: "You request a quote on WhatsApp or in the online shop, send us your details or your logo, review the digital proof and, once you approve it, your order goes to production. Then you receive it by courier or pick it up at a Casa Blanca branch.",
      },
      {
        q: "How much does a custom medical prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "How much do 100 stickers with my logo cost?",
        a: `100 pieces (small size) cost $${priceOf("stickers-logo-personalizado", 100)} MXN.`,
      },
      {
        q: "What is the minimum order for stickers and labels?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "How much is shipping?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico, or $${CASABLANCA_PRICE} MXN if you pick up at a Casa Blanca branch in the Guadalajara metro area. Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your company or practice needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"], BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
    title: "Printed vs. Digital Prescription Pads: Which Is Right for Your Practice?",
    metaTitle: "Printed vs. Digital Prescription Pads",
    description:
      "Printed prescription pads vs digital prescriptions in Mexico: pros, limits, what NOM-004 and NOM-024 say, and when it makes sense to use both in your practice.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-10-26",
    intro:
      "More and more practices are using some form of electronic prescription, but the printed prescription pad is still part of daily life for most doctors in Mexico. Before deciding whether it's worth continuing to print or switching entirely to digital, it's worth looking at what each option actually solves and where it falls short. Here we compare both, review what the official clinical-record standards say, and explain how to combine them without complicating your day.",
    sections: [
      {
        heading: "What does each option solve, the printed or the digital prescription?",
        body: [
          "A digital prescription can be resent by email or WhatsApp, is backed up, and is easy to search in a history. A printed one doesn't depend on internet, battery, or a system: the patient leaves the appointment with paper in hand. Each solves a different problem, so comparing them only on how modern they are doesn't help.",
          "A digital prescription (from an app, a practice-management system, or an electronic-record platform) has clear advantages for follow-up: it can be resent to the patient, it's automatically backed up, and it's easier to search in a history. A printed prescription pad, on the other hand, doesn't depend on internet access, battery life, or the system working at that exact moment.",
          "For many patients (especially older ones, or those heading straight to a physical pharmacy) printed paper is still what they expect to receive at the end of an appointment.",
        ],
        table: {
          headers: ["Aspect", "Printed pad", "Digital prescription"],
          rows: [
            ["Internet, battery, or system", "Depends on none of them", "Needs them to be created and sent"],
            ["How the patient receives it", "Paper in hand when leaving", "File by email or WhatsApp"],
            ["Backup and history", "Filed separately if you want a copy", "Backed up and searchable in the system"],
            ["Learning curve", "None: filled in by hand", "You have to learn the platform"],
            ["Practice image", "Your own preprinted letterhead", "Depends on what your system allows"],
          ],
        },
      },
      {
        heading: "What do the official standards say about paper and digital?",
        body: [
          "NOM-004-SSA3-2012 makes electronic media optional and accepts handwritten, electronic, or digital signatures on record notes. NOM-024-SSA3-2012 applies to establishments that adopt electronic health-record systems and asks that records be unalterable. They are clinical-record standards, not a prescription layout guide.",
          "In NOM-004, using electronic, magnetic, or optical media is \"optional\", and electronic and digital signatures are subject to the applicable legal provisions. The same standard asks that notes be legible, without abbreviations, corrections, or crossed-out text: a point in favor of preprinting your fixed details instead of handwriting them every time.",
          "NOM-024 defines the advanced electronic signature as one that produces the same legal effects as a handwritten signature, and asks that systems let the health professional use it. What your practice must meet specifically depends on your institution, your medical association, and your state, so confirm with them before changing how you prescribe.",
        ],
      },
      {
        heading: "When does it make sense to keep printing your pad?",
        body: [
          "Keep printing if you don't want to depend on a system, if your patients take the prescription straight to a physical pharmacy, or if you need a backup for when the signal drops. Paper is the lowest-friction option: no platform to learn and no extra steps for the patient.",
          "If your practice doesn't have (or doesn't want to depend on) a digital system, the printed prescription pad is still the simplest option: no new platform to learn, no risk of an internet outage stopping the appointment, and the patient leaves with something physical.",
          "It's also common to use it as a backup even if your practice already has a digital system: for the day the system fails, there's no signal, or you simply prefer not to depend on a screen in front of the patient.",
          "There's also a practical benefit: with a preprinted letterhead, your name, license number, and practice details always come out complete and legible, and you only handwrite what changes with each patient.",
        ],
      },
      {
        heading: "When does it make sense to move to digital prescriptions?",
        body: [
          "Go digital when you need a searchable history, want to resend instructions to the patient by email or WhatsApp, or need several doctors working in one system. It's the best option for follow-up and records. It still requires internet, power, and a system that meets what your institution asks for.",
          "Before migrating, ask yourself four questions: can my patients receive and show the prescription on their phone? What do I do if the system or the internet fails mid-appointment? Does the pharmacy my patients use accept the digital format? Does my institution or medical association require anything specific?",
          "If any answer leaves you unsure, you don't have to decide all at once: you can start using the digital system for records and keep handing out the printed prescription while you get used to it.",
        ],
      },
      {
        heading: "Does it have to be all digital or all printed?",
        body: [
          "No. Many practices use digital for records and follow-up, and printed for what the patient takes home that same day. A pad with your letterhead, license number, and practice details doesn't compete with your system: it complements it and covers you when it fails.",
          "Most of the practices we see in Guadalajara and the rest of Mexico don't pick just one: they use digital for records and follow-up, and printed for the prescription that leaves the appointment. To see which details are worth preprinting, read the prescription format guide; if you're unsure whether to order a ready letterhead or have us design it with you, compare the with-design and without-design options.",
        ],
      },
      {
        heading: "How much does a printed prescription pad cost at Yume, and how do you order one?",
        body: [
          `The 100-sheet pad, half-letter (14 × 21.5 cm) on white 90 gr Bond paper, costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you. You request a quote, send your details, approve a digital proof of the letterhead, and only then does it go to production.`,
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, pickup at a Casa Blanca branch in Guadalajara takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery anywhere in Mexico ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
          "The process is the same whether the pad is your only option or a backup to your digital system, and nothing is printed until you approve the letterhead.",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"], BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"], BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"], BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"]],
    faq: [
      {
        q: "Does a digital prescription fully replace the printed pad?",
        a: "Not necessarily. NOM-004-SSA3-2012 states that using electronic media in the clinical record is optional. What you must meet depends on your institution, your medical association, and your state, so it's worth confirming with them.",
      },
      {
        q: "Does an electronic signature carry the same weight as a handwritten one?",
        a: "NOM-024-SSA3-2012 defines the advanced electronic signature as one that produces the same legal effects as a handwritten signature. NOM-004 says electronic and digital signatures are subject to the applicable legal provisions.",
      },
      {
        q: "What details go on a prescription pad letterhead?",
        a: "Usually your full name, specialty, professional license number (and specialty license if applicable), address, phone, and, if you want, office hours. These are the fixed details that get preprinted.",
      },
      {
        q: "How much does the printed prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What size and paper is the pad?",
        a: "Half-letter (14 × 21.5 cm), on white 90 gr Bond paper, with 100 sheets per pad.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "How much is shipping?",
        a: `$${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico, or $${CASABLANCA_PRICE} MXN if you pick up at a Casa Blanca branch in the Guadalajara metro area. Both are free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). Your receipt is the order confirmation email. If your practice needs an invoice, message us on WhatsApp before paying.",
      },
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Clinical record, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
      {
        label: "NOM-024-SSA3-2012, Electronic health-record information systems, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5280847",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"],
    title: "Custom Temporary Tattoos in Guadalajara for Parties and Events",
    metaTitle: "Custom Temporary Tattoos in Guadalajara",
    description:
      "Custom temporary tattoos in Guadalajara for weddings, quinceañeras, and parties: how to get a quote on WhatsApp and receive a digital proof before production.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-11-03",
    intro:
      "A temporary tattoo with your logo or a design made for the occasion leaves a mark at an event, literally. If your party is in Guadalajara or Zapopan, custom temporary tattoos work just as well for a wedding, quinceañera, baby shower, posada, or company event. Here we explain which events they're suited to, how to design them, what to consider for sensitive skin, what we need for a quote, and how to plan your order in advance.",
    sections: [
      {
        heading: "How to order custom temporary tattoos for events",
        body: [
          "Custom temporary tattoos for events are ordered through WhatsApp because they don't have a published fixed price: we quote them based on your design, size, and quantity. We send you a digital proof before production, usually within 24 hours, with up to 2 rounds of adjustments, and we don't print anything without your approval.",
          "We produce in Guadalajara and ship throughout Mexico, so you can order no matter what state your event is in. We don't issue invoices (CFDI); if your company needs one, let us know when requesting a quote.",
          "To get started, message us on WhatsApp with the event date, approximate quantity, and your logo or a design reference. With that, we'll prepare a quote and explain the next steps.",
        ],
      },
      {
        heading: "Custom temporary tattoos in Guadalajara and Zapopan",
        body: [
          "We produce your custom temporary tattoos in Guadalajara and ship throughout Mexico, so if your party is in Guadalajara or Zapopan, you work directly with the people who make them. Request a quote on WhatsApp, approve a digital proof, and tell us the delivery date and city.",
          "This works for people organizing a celebration for a loved one, wedding and event planners ordering a different detail for each client, and companies planning a posada or a client event. In every case, each order is for a specific event, with its own design and direct communication.",
          "If you'd like to see the finished work, our [work gallery](/en/gallery) has photos of temporary tattoos we've produced.",
        ],
      },
      {
        heading: "What events are temporary tattoos suited to?",
        body: [
          "Custom temporary tattoos work for weddings and quinceañeras, brand activations, company events, and sports or school events. Guests wear and show them throughout the celebration, so they become a detail that travels around the room and turns into a keepsake.",
          "We see them most often in three contexts. The first is weddings and quinceañeras, with initials, the date, or an icon related to the celebration. The second is company events, such as posadas, launches, and anniversaries, with the brand's logo. The third is sports or school events, with the team or institution's logo.",
          "Unlike a label, a temporary tattoo is worn by the person. It's a piece people wear and show for the rest of the event, rather than something that ends up in a bag. For ideas by occasion, see the guide to [temporary tattoos for weddings and parties](/en/blog/temporary-tattoos-for-weddings-events-and-parties).",
        ],
      },
      {
        heading: "Design ideas for weddings, quinceañeras, and company events",
        body: [
          "A good temporary tattoo design is simple and easy to read at a glance: initials, a date, a celebration icon, or your logo. The less detail it has, the easier it is to make out at a small size on skin and to match with the event decor.",
          "For a wedding, the most practical choice is the couple's initials and the date, or a simple icon that represents their story. If you have the invitation or the decor's color palette, send us a photo and we'll adapt the design so it looks like part of the same event.",
          "For a quinceañera or birthday, the guest of honor's name with a detail from the theme works well. For a company, a clean logo without long text is the easiest option because it reads better at a small size.",
          "If you're already putting together the candy table or favors, think of the tattoo as part of the set: the same design can accompany [custom favor boxes](/en/blog/personalized-party-favor-boxes-guadalajara) and [vinyl stickers](/en/products/waterproof-vinyl-stickers). That way the whole event looks coordinated.",
        ],
      },
      {
        heading: "Are temporary tattoos safe for children and sensitive skin?",
        body: [
          "It depends on the inks, which is why it's a good idea to ask about the ingredients before ordering. The US FDA receives reports of allergies to tattoo inks and says a rash may indicate an allergic reaction. If someone has sensitive skin, consult a health professional about redness, bumps, or a rash.",
          "The FDA also explains that PPD (paraphenylenediamine) in some inks can cause an allergy to other products, such as hair dyes. Its page is about permanent tattoos, so we use it only as a reason to be cautious, not as a description of temporary tattoo inks.",
          "If children or people with allergies will attend your event, message us on WhatsApp before ordering and we'll discuss it with you. As for duration, one reference says decal-style temporary tattoos last from hours to days, depending on the type, body area, and care. To learn how to remove them, read [how long they last and how to remove them](/en/blog/how-long-do-temporary-tattoos-last-and-how-to-remove-them).",
        ],
      },
      {
        heading: "What we need to quote your temporary tattoos",
        body: [
          "We need three things for a quote: your logo or design, the approximate size you want, and the quantity for your event. If the design includes text, such as a name, date, or phrase, let us know so we can confirm it's legible at the final size before production.",
          "If you don't have your logo handy, send us what you have and we'll tell you whether it can be used. The approximate size tells us how much detail will fit, and the quantity lets us prepare an accurate quote. If it's your first order, message us and we'll help you work out how many you need.",
          "Before production, we send you a digital proof of the design for approval. That way you can confirm how it will look before the full quantity is printed. You can start from the [custom temporary tattoos](/en/products/custom-temporary-tattoos) page.",
        ],
      },
      {
        heading: "Why customize them instead of buying generic tattoos",
        body: [
          "A generic temporary tattoo, such as a smiley face or a star from a catalog, looks the same at any party and says nothing about your event. A custom one carries your logo, colors, or the name of the celebration, and the person wearing it stays associated with your event for the rest of the day.",
          "We produce in Guadalajara and ship anywhere in Mexico, so you can request a quote for custom temporary tattoos no matter what state your event is in.",
          "Your own design also lets you control the overall result: making sure the colors match your decor, the name is spelled correctly, and the logo looks as it should. With a generic design, you can't control any of that. If you have an event coming up, message us directly on WhatsApp with the details.",
        ],
      },
      {
        heading: "How to plan your order in advance",
        body: [
          "It's best to message us as soon as you have the event date, even if the design isn't settled yet. With the date, approximate quantity, and a reference for your logo or invitation, we can prepare a quote, send you the digital proof, and confirm whether production and shipping can be completed in time.",
          "If you're a wedding or event planner, the process is the same: one order per event, with each client's design and direct communication on WhatsApp. Send us the event reference and we'll prepare a quote.",
          "If it's for your company or a family celebration, share the date, delivery city, and how many people you expect. The sooner you message us, the more time there is to adjust the design and approve the proof without rushing.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"], BLOG_SLUG_EN["cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'm interested in getting a quote for custom temporary tattoos.",
    faq: [
      {
        q: "How much do custom temporary tattoos cost?",
        a: "They don't have a published fixed price. They are quoted on WhatsApp based on your design, size, and the quantity you need for your event.",
      },
      {
        q: "Do you send a proof before production?",
        a: "Yes. We send you a digital proof, usually within 24 hours, with up to 2 rounds of adjustments. We don't print anything without your approval.",
      },
      {
        q: "What do I need for a quote?",
        a: "Your logo or design, the approximate size, and the quantity. If the design includes text, let us know so we can confirm it's legible.",
      },
      {
        q: "Do you produce in Guadalajara and ship throughout Mexico?",
        a: "Yes. We produce in Guadalajara and ship throughout Mexico.",
      },
      {
        q: "Do you serve events in Guadalajara and Zapopan?",
        a: "Yes. We produce in Guadalajara and ship throughout Mexico. Message us on WhatsApp with your event date and delivery city and we'll prepare a quote.",
      },
      {
        q: "Do you issue invoices?",
        a: "We don't issue invoices (CFDI). If your company needs one, let us know when requesting a quote.",
      },
      {
        q: "Are they suitable for weddings and quinceañeras?",
        a: "Yes. They can feature initials, a date, or an icon related to the celebration, as well as your logo for company, sports, or school events.",
      },
      {
        q: "Are they safe for children and sensitive skin?",
        a: "It depends on the inks. The FDA receives reports of allergies to tattoo inks and recommends consulting a health professional if there is redness, bumps, or a rash. If someone at your event has sensitive skin or allergies, message us before ordering.",
      },
      {
        q: "How long do temporary tattoos last?",
        a: "An external reference says decal-style temporary tattoos last from hours to days, depending on the type, body area, and care.",
      },
      {
        q: "Can I see real examples?",
        a: "Yes. The site's gallery has photos of temporary tattoos we've produced.",
      },
    ],
    sources: [
      { label: "FDA: Think before you ink, tattoo safety", url: "https://www.fda.gov/consumers/articulos-para-el-consumidor-en-espanol/piense-antes-de-tatuarse-la-seguridad-de-los-tatuajes" },
    ],
  },
  {
    slug: BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"],
    title: "How to Order Custom Event Invitations",
    metaTitle: "Custom Event Stationery in Mexico",
    description:
      "What to prepare to quote custom invitations for a wedding, quinceañera, or event, how the digital proof works, and shipping across Mexico from Guadalajara.",
    category: "Guides",
    publishedAt: "2026-08-31",
    modifiedAt: "2026-11-11",
    intro:
      "Whether it's a wedding, a quinceañera, a baby shower, or a corporate event, the invitation is usually the first thing your guests see of the event: it's worth having it match what you're putting together. The invitation is just one piece of your event stationery (along with menus, place cards, or thank-you cards), and here's how the process works to order custom event invitations from Yume.",
    sections: [
      {
        heading: "What information we need to quote",
        body: [
          "To quote your invitations we need five things: the type of event and the date, the number of invitations, the full text (names, place, time, and notes), a style reference if you have one, and the format: printed, digital, or both. With that we build the quote over WhatsApp, even if you haven't nailed everything down yet.",
          "A style reference can be a photo, a color palette, the venue's decor, or an invitation you liked. You don't need to arrive with the design solved: that's exactly what the digital proof we send you is for.",
          "If you already have other pieces for the event, such as the menu or table details, tell us from the start. That way the invitation is designed with the whole set in mind rather than as an isolated piece.",
        ],
      },
      {
        heading: "How many invitations to order",
        body: [
          "Count one invitation per household or couple, not per person, unless you want one per guest with their name on it. Tell us the approximate number on your list and we will prepare the quote with that number, then adjust it when you confirm your guests.",
          "If your list is still changing, start with the number you estimate and let us know when it's confirmed. It's better to quote with an approximate figure than to wait weeks for the final list.",
          "For digital invitations, quantity matters less, because the same file is shared with all your guests. In that case what matters is making sure the text and design look good on a phone screen.",
        ],
      },
      {
        heading: "How to word your invitation",
        body: [
          "Include who is inviting, what is being celebrated, the date, start time, the venue with its full address, and how to confirm attendance. If there is a dress code or a special note, add it in one short line. Check names and numbers twice: a wrong detail is repeated on every piece.",
          "Write names the way you want them to appear, with surnames, titles, or nicknames if that applies. For corporate events, confirm the company name exactly as the company uses it.",
          "If you don't know how to word the message, send us whatever you have, even a general idea, and we'll help you organize it in the proposal. The clearer the text, the fewer adjustments are needed later.",
        ],
      },
      {
        heading: "The design and approval process",
        body: [
          "With your details we put together a design proposal and send it to you as a digital proof. You can request adjustments before approving it, and only once you approve the final design does it go to production. Fixing a color or a line of text at this stage is much easier than after printing.",
          `Once you approve, it goes to production if you ordered printed invitations, or we deliver the final file ready to send if they are digital or both. Nothing is printed without your approval. To see how review works for other event orders, read the guide to [digital proofs for planners](/en/blog/${BLOG_SLUG_EN["prueba-digital-pedido-evento-planners"]}).`,
        ],
      },
      {
        heading: "Printed, digital, or both",
        body: [
          "You can order a printed invitation, a digital one to share over WhatsApp, or both. The design process is the same and only the final format changes. For example, you can print for your closest guests and send the digital version to everyone else. Tell us what you prefer and we'll quote it that way.",
          "A printed invitation is a keepsake your guests can hold on to. A digital one is shared instantly and is useful when the list grows or changes close to the event date.",
        ],
      },
      {
        heading: "Matching your invitation to the rest of your stationery",
        body: [
          `An invitation works best when it shares a design line with the rest of your details. At Yume we also quote [wedding menus](/en/blog/${BLOG_SLUG_EN["menu-de-boda-personalizado"]}), [stickers for weddings and events](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}), favor boxes, and temporary tattoos, and they can be coordinated under the same style so the event looks planned from start to finish.`,
          `If you need table details, see [custom favor boxes](/en/products/personalized-party-favor-boxes) and [vinyl stickers](/en/products/waterproof-vinyl-stickers), or the guide to [temporary tattoos for weddings and events](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]}). To see favor boxes in the context of a complete celebration, read the guide to [favor boxes for social events](/en/blog/${BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"]}).`,
        ],
      },
      {
        heading: "If you're a planner: invitations for your clients",
        body: [
          "If you organize events for other people, you can work with us event by event: each client gets their own proposal with a digital proof, and you review and approve it with them. Service is direct over WhatsApp, so questions and adjustments are settled without middlemen.",
          "To quote, send the same details as for any event: date, quantity, text, style, and format. If your client already has a palette or decor references, share them in your first message so the proposal comes out aligned.",
        ],
      },
      {
        heading: "Wedding invitations in Guadalajara, shipping across Mexico",
        body: [
          "We produce in Guadalajara and ship across Mexico, so you can order invitations for a wedding in Jalisco or in any other state with the same design and approval process from start to finish. You don't need to be in Guadalajara to quote with us.",
          `If your wedding is in Guadalajara or the metro area, the process is the same. For any other city, shipping is arranged when we quote. If you are still deciding on dates, see [when to send wedding invitations](/en/blog/${BLOG_SLUG_EN["cuando-enviar-invitaciones-de-boda"]}).`,
        ],
      },
      {
        heading: "What to check before approving the digital proof",
        body: [
          "Before approving the proof, check dates, times, names, and addresses one by one. Ask someone else to read the whole proof and confirm every detail against your source: the venue, your guest list, or the company's information.",
          "Also check how the design looks: that the text is easy to read, that the colors resemble what you have in mind, and that no important note is missing. When everything is right, give us your go-ahead and we move to production.",
        ],
      },
      {
        heading: "When to start requesting a quote",
        body: [
          "It's worth quoting well ahead of the event: that leaves room to adjust the design without rushing production or shipping. If your event already has a date, you can reach out now even if you haven't nailed down every detail yet.",
          "Tell us the type of event, the approximate date, and the quantity you estimate you'll need, and we'll build the quote from there. Production and delivery times are confirmed when we quote, based on your order.",
        ],
      },
    ],
    faq: [
      {
        q: "What information do I need to quote custom invitations?",
        a: "The type of event and the date, the number of invitations, the full text (names, place, time, and notes), a style reference if you have one, and whether you want them printed, digital, or both.",
      },
      {
        q: "Can I see the invitation before it is printed?",
        a: "Yes. We send you a proposal as a digital proof and you can request adjustments before approving it. Only once you approve the final design does it go to production.",
      },
      {
        q: "Can I order digital-only invitations?",
        a: "Yes. You can order them printed, digital to share over WhatsApp, or both. The design process is the same and only the final format changes.",
      },
      {
        q: "Do you ship invitations outside Guadalajara?",
        a: "Yes. We produce in Guadalajara and ship to any state in Mexico, with the same design and approval process no matter where your event is.",
      },
      {
        q: "How much do custom invitations cost?",
        a: "They are quoted over WhatsApp based on quantity and format. Write to us with the type of event, the date, and the approximate number of invitations and we'll prepare your quote.",
      },
      {
        q: "Can I match the invitation with other event pieces?",
        a: "Yes. If you also order wedding menus, stickers, favor boxes, or temporary tattoos, they can be coordinated under the same design line so everything looks like one set.",
      },
      {
        q: "Do you work with wedding planners and event organizers?",
        a: "Yes. You can quote event by event: each client gets their own proposal with a digital proof, and service is direct over WhatsApp.",
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"], BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"], BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"], BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"], BLOG_SLUG_EN["prueba-digital-pedido-evento-planners"], BLOG_SLUG_EN["cuando-enviar-invitaciones-de-boda"]],
    quoteMessage: "Hi, I'm interested in getting a quote for custom event invitations.",
  },
  {
    slug: BLOG_SLUG_EN["stickers-personalizados-para-mascotas"],
    title: "Custom Pet Stickers: Turn Your Dog or Cat Into a Sticker",
    metaTitle: "Custom Pet Stickers",
    description:
      "How to order a die-cut sticker from a photo of your dog or cat: what photo to send, what the final result looks like, and how much it costs at Yume.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-10",
    intro:
      "One of the most common requests we get for Waterproof Vinyl Stickers isn't a logo or a cartoon character: it's a photo of someone's pet. Turning your dog or cat into a die-cut sticker of its silhouette is one of our most common orders, and one of the easiest to quote. This guide covers what photo to send, what the result looks like, what it costs, how long it takes, and ideas for gifting or selling pet stickers.",
    sections: [
      {
        heading: "What photo to send for custom pet stickers",
        body: [
          "Send a photo where your pet is fully visible, well lit, and not blocked by anything else. You don't need a professional photo: a phone is enough. The clearer the outline against the background, the cleaner the die cut around the silhouette turns out.",
          "If you have a few photos of the same pet, send us all of them when requesting a quote: sometimes one works better than another for the cutout, so we can pick the best one together before building the digital proof.",
        ],
      },
      {
        heading: "What the result looks like",
        body: [
          "The sticker is cut to the exact shape of your pet's silhouette, or to the full photo if you'd rather keep a background or frame. It isn't a generic square or circle, which is what makes it a die-cut vinyl sticker. Before printing you get a digital proof to confirm the cut and colors.",
          "You can see real examples of pets already turned into stickers in [our gallery](/en/gallery). The proof works the same as with any other design we work on: nothing is printed until you approve it.",
          `When ordering you choose the cut type: die-cut or kiss-cut. If you're unsure which suits your pet, read our [die-cut vs. kiss-cut comparison](/en/blog/${BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"]}).`,
          "You also choose the finish: matte, glossy, or holographic. All of our stickers come with high-quality BOPP lamination. Holographic has an extra per-piece cost, which you see when you select it on the product page.",
        ],
      },
      {
        heading: "Quantity and price of your pet stickers",
        body: [
          `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}. Vinyl stickers are sold by piece count, not by sheet, with a minimum order of 40 pieces.`,
          `For reference: 150 pieces come out to $${priceOf("stickers-vinil-impermeable", 150)} and 200 to $${priceOf("stickers-vinil-impermeable", 200)} MXN. Order the exact quantity you need: you pick it or type it in when you place your order. See all the options on the [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) page.`,
          `It's the same premium vinyl, resistant to water, sun, and scratches, that we use for any other custom design, so it holds up well on water bottles, laptops, or wherever you want to stick it. To compare materials, read [vinyl vs. paper](/en/blog/${BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"]}).`,
        ],
        table: {
          ...sizeTable(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long it takes and how it's delivered",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
          `Home delivery is $${NATIONAL_SHIPPING_PRICE} MXN and branch pickup is $${CASABLANCA_PRICE} MXN. On orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both are free.`,
          `If it's a gift with a deadline, quote early so there's room to adjust the proof. For all the timelines, see [how long an order takes](/en/blog/${BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]}).`,
        ],
      },
      {
        heading: "Ideas for using pet stickers",
        body: [
          "A pet sticker works as a gift, a keepsake, and a product to sell. The practical way to decide is to think about who will receive it and where it will be stuck, because that drives the size and quantity worth ordering.",
          "For personal use, order a few pieces with your dog or cat's photo and stick them on your water bottle, laptop, or helmet. As a gift, a pet cutout is an easy personal touch for a birthday or for someone who just adopted. If your pet has passed away, a sticker of its silhouette is a simple way to keep its image close.",
          "For pet businesses such as groomers, vet clinics, daycares, or pet stores, you can use photos of your clients' pets (with their permission) or your own pet as a brand image.",
          `If you're organizing an event, such as a wedding where the pet is part of the family, you can also include a sticker of its silhouette among the event details. See more ideas in [stickers for weddings and events](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "Can I order a sticker with a photo of my dog or cat?",
        a: "Yes. Vinyl stickers are made from your design, character, or photo, and cut to the shape of your pet's silhouette. Before printing you get a digital proof to confirm the cut and colors.",
      },
      {
        q: "What kind of photo works best?",
        a: "One where your pet is fully visible, well lit, and with a clear outline against the background. You don't need a professional photo. If you have several, send them all when requesting a quote and we'll pick the best one together.",
      },
      {
        q: "How much do my pet's stickers cost?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} MXN. The minimum order is 40 pieces.`,
      },
      {
        q: "What cut and finish can I choose?",
        a: "You can choose a die-cut or kiss-cut, and a matte, glossy, or holographic finish. Holographic has an extra per-piece cost, shown when you select it on the product page.",
      },
      {
        q: "Are the stickers water and sun resistant?",
        a: "Yes. They are printed on premium vinyl that resists water, sun, and scratches, per the product page.",
      },
      {
        q: "Can I request adjustments to the digital proof?",
        a: "Yes. The proof includes up to 2 rounds of adjustments, and we print nothing without your approval.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]],
  },
  {
    slug: BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
    title: "Prescription Pad With Design vs. Without Design: Which One to Order?",
    metaTitle: "Prescription Pad With vs. Without Design",
    description:
      "The real difference between ordering your custom medical prescription pad with logo and design work included or print-only, their prices, and when each option makes sense.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-11",
    intro:
      "When you request a quote for the custom medical prescription pad at Yume, you'll see two options at different prices: \"without design\" and \"with design.\" It's not just a price difference: it's a real difference in the work we do for you. Here's what each one includes, what you need to have ready, how the process works, and how long it takes, so you can pick the right one without going back and forth.",
    sections: [
      {
        heading: "Prescription pad with design vs. without design: what each option includes",
        body: [
          `"Without design" ($${recetarioPrice("sin-diseno")}) is for when you already have your letterhead put together (an editable file with your logo, your details, and the layout you want) and you just need us to print it. Both options include a 100-sheet Half-Letter pad on 90 gr Bond paper, with a digital proof before printing.`,
          `"With design" ($${recetarioPrice("con-diseno")}) includes designing the letterhead with you from scratch: you give us your details (name, professional license number, specialty, practice address) and we put together a visual proposal, which we adjust with you until it looks the way you want, before printing.`,
          `The price gap between the two is $${recetarioPrice("con-diseno") - recetarioPrice("sin-diseno")}: that's what it costs to have someone build and refine your letterhead instead of you bringing it ready.`,
        ],
        table: {
          headers: ["", "Without design", "With design"],
          rows: [
            ["Price", `$${recetarioPrice("sin-diseno")}`, `$${recetarioPrice("con-diseno")}`],
            ["Sheets per pad", "100", "100"],
            ["Size and paper", "Half-Letter (14 × 21.5 cm), 90 gr Bond", "Half-Letter (14 × 21.5 cm), 90 gr Bond"],
            ["Letterhead", "You send it as an editable file", "We design it with you from scratch"],
            ["Digital proof before printing", "Yes", "Yes"],
          ],
        },
      },
      {
        heading: "When to choose a prescription pad with or without design",
        body: [
          "Choose \"without design\" if you already have your letterhead as an editable file and only need it printed; choose \"with design\" if this is your first custom pad, your old one looks outdated, or you don't have the file on hand. The deciding factor is how finished your letterhead is today, not the size of your practice.",
          "If you already worked out your letterhead with a designer or have it from a previous print shop in an editable format, \"without design\" is the faster, more affordable option: we're just producing what you've already sorted out.",
          "If this is your first custom prescription pad, your old one looks outdated, or you simply don't have the editable file on hand, \"with design\" saves you from having to sort that part out yourself or hire someone else before you can print.",
          "A middle case: you have your logo but not a finished letterhead. \"With design\" fits there too, because the work is in laying out your logo and details on the page, not just printing them.",
        ],
      },
      {
        heading: "What you need ready to get started",
        body: [
          "For \"without design\" you need your letterhead as an editable file; for \"with design\" you only need your professional details and, if you have it, your logo. Either way, double-check your details before requesting a quote, because they're what ends up printed on all 100 sheets.",
          "The details that usually go on a letterhead are your full name, specialty, professional license number (and specialty license, if applicable), practice address, phone number and, if you want, office hours. If you're unsure what to include, read our guide on [what a medical prescription must include in Mexico](/en/blog/required-information-medical-prescription-mexico).",
          "If you work out of more than one practice, say so when you request the quote: the cleanest approach is usually one letterhead per location. Tell us how many you need on WhatsApp and we'll quote it with you.",
        ],
      },
      {
        heading: "The process is the same either way",
        body: [
          "Whichever option you choose, the approval step is the same: before sending it to production, we send you a digital proof of the final letterhead. Nothing is printed until you approve it, so you can confirm your license number, phone number, and every other detail are correct.",
          "You can switch options during the quoting process if, once you see how it works, you'd rather have us design it: just let us know on WhatsApp before approving the digital proof.",
          "Review the proof calmly, detail by detail: license number, phone number, and address matter most to get exactly right, because once you approve, it goes to production.",
        ],
      },
      {
        heading: "How long it takes and what shipping costs",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the pad reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. Timelines are the same with or without design.`,
          `Shipping anywhere in Mexico costs $${NATIONAL_SHIPPING_PRICE} MXN, and it's free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. The whole design is approved remotely, so the process is the same whether you live in Guadalajara or any other city in Mexico.`,
        ],
      },
      {
        heading: "How to decide in a minute",
        body: [
          "Ask yourself three questions: do I have my letterhead in a file I can edit, do I like how it looks, and do I have all my details on hand? If all three are yes, \"without design\" is enough. If any answer is no, \"with design\" solves that gap within the same order.",
          "And once your pad is sorted, the same letterhead works as the base for other pieces for your practice, like your [business cards for your practice](/en/blog/business-cards-for-your-practice), so you don't start from scratch each time.",
          "If you're not sure, message us on WhatsApp with your file or logo and we'll tell you which option fits your case before you pay. When you're ready, choose your option on the [custom medical prescription pad](/en/products/medical-prescription-pads).",
        ],
      },
      {
        heading: "More guides for your custom medical prescription pad",
        body: [
          "If you're still comparing options for your practice, these guides can help you decide before you pay: see the [custom medical prescription pad](/en/products/medical-prescription-pads) with its price and options, compare [printed vs. digital prescription pads](/en/blog/printed-vs-digital-prescription-pads), and see how [Yume compares with other prescription pad print shops](/en/blog/yume-vs-online-prescription-pad-print-shops).",
          "If your practice is in Guadalajara, see the guide to [custom medical prescription pads in Guadalajara](/en/blog/custom-medical-prescription-pads-guadalajara).",
        ],
      },
    ],
    faq: [
      {
        q: "How much does the prescription pad cost with and without design?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What size and paper is the pad?",
        a: "Half-Letter (14 × 21.5 cm), 100 sheets, on white 90 gr Bond paper. It's the same in both options.",
      },
      {
        q: "What file do I need for the without-design option?",
        a: "An editable file of your letterhead, with your logo, your details and the layout you want. If you don't have one, the with-design option covers it.",
      },
      {
        q: "Is anything printed before I approve?",
        a: "No. Before production we send you a digital proof of the letterhead and nothing goes to production until you approve it.",
      },
      {
        q: "Can I switch from without design to with design?",
        a: "Yes. Let us know on WhatsApp during the quote, before approving the digital proof.",
      },
      {
        q: "Can I order a different letterhead for each practice?",
        a: "Yes. Mention it when requesting your quote and tell us on WhatsApp how many you need: one letterhead per location is usually the cleanest approach.",
      },
      {
        q: "How long does it take to arrive?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, it reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
      BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
      BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    ],
  },
  {
    slug: BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
    title: "Required Information on a Medical Prescription in Mexico",
    metaTitle: "What a Medical Prescription Must Include in Mexico",
    description:
      "What a medical prescription in Mexico includes, the prescription types under Article 226 of the General Health Law, their validity, and what to preprint on your pad.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-10",
    intro:
      "If you're about to order your first custom prescription pad, it's normal to wonder what information a medical prescription in Mexico must include. This is general information based on the General Health Law, NOM-004-SSA3-2012 on clinical records, and common practice in medical offices (sources are at the end). It doesn't replace what your medical board, state, or institution requires, so confirm with them before sending your pad to print. Here we separate prescription types, what stays fixed on the letterhead, and what you write for each patient.",
    sections: [
      {
        heading: "What a medical prescription in Mexico must include",
        body: [
          "A medical prescription in Mexico includes the prescriber's details (name, full address, and professional license number), the date, a handwritten signature, and treatment instructions: dose, formulation, route, frequency, and duration. These requirements are attributed to health regulations and are worth confirming with your board or institution.",
          "The prescriber's details are their name, full address, and professional license number. The treatment details are the dose, formulation, route, frequency, and duration. The date and handwritten signature complete the prescription. On a custom pad, the fixed details go on the letterhead and you write in the rest.",
        ],
      },
      {
        heading: "Prescription types under Article 226 of the General Health Law",
        body: [
          "Article 226 of the General Health Law divides medications into six categories according to the prescription they require: a special prescription, a retained prescription, a prescription that can be filled up to three times, a refillable prescription, and two groups sold without a prescription. That's why prescriptions don't all work the same way or remain valid for the same length of time.",
          "A medication's category doesn't depend on your pad's design. To find out which category applies to a particular medication, ask your doctor or pharmacy.",
        ],
        table: {
          headers: ["Category", "Prescription required", "How it is filled"],
          rows: [
            ["I", "Special prescription or permit", "Ask your doctor or pharmacy"],
            ["II", "Retained prescription", "Retained; valid for 30 days from the date written"],
            ["III", "Prescription stamped each time it is filled", "Up to 3 times; retained on the third fill"],
            ["IV", "Prescription", "Refilled as many times as the doctor specifies"],
            ["V", "No prescription", "Only at pharmacies"],
            ["VI", "No prescription", "No prescription required"],
          ],
        },
      },
      {
        heading: "How long a prescription lasts: validity and fills",
        body: [
          "The frequently mentioned 30-day validity period applies to retained prescriptions in category II of Article 226, not to all prescriptions. It runs from the date the doctor writes the prescription. For other prescription types and particular cases, ask your doctor or pharmacy.",
          "A category II prescription may include up to two presentations of the same product. A category III prescription can be filled up to 3 times, is stamped each time, and is retained by the pharmacy on the third fill.",
        ],
      },
      {
        heading: "Generic name or brand: how medication is specified",
        body: [
          "Article 226 of the General Health Law says that doctors prescribe using the generic name. They may add a preferred brand, provided they inform the patient about therapeutic options. If you have questions about the prescribed medication, ask your doctor or pharmacy.",
          "This applies to what the prescriber writes on each prescription; it doesn't change what is preprinted on the letterhead.",
        ],
      },
      {
        heading: "Narcotic prescriptions: a separate case",
        body: [
          "Narcotics are not prescribed on an ordinary prescription. Special prescription pads are used, with a barcode assigned by the Ministry of Health or state health authorities; authorized professionals write them for treatments lasting no more than 30 days. Confirm the procedure with the health authority.",
          "Yume's custom prescription pad is for ordinary prescriptions. If you need a serial number or barcode for a procedure or institution, let us know when requesting a quote.",
        ],
      },
      {
        heading: "What NOM-004-SSA3-2012 says about what you write",
        body: [
          "NOM-004-SSA3-2012 regulates the clinical record, not the prescription as a separate form. It asks that medical notes carry the date, time, full name and signature of the author, that medications state dose, route of administration and frequency, and that everything be written legibly, without corrections or strike-throughs.",
          "Those points are in sections 5.10, 5.11 and 6.2.6 of the standard. Section 5.9 adds that notes carry the patient's full name, age and sex. In the parts of the standard we reviewed there is no section dedicated to the prescription, so for the exact format confirm with your professional board, your state or your institution.",
        ],
      },
      {
        heading: "What goes on your letterhead",
        body: [
          "The letterhead is the fixed part of the prescription: your full name, specialty, professional license number (and specialty license, if applicable) and your practice's contact details, such as address, phone and, if you want, office hours. None of it changes from one patient to the next.",
          "These are exactly the details that get preprinted on the letterhead when you order a custom pad: so you don't have to write them by hand on every single prescription, only what changes per patient.",
          "If you work out of more than one practice, the cleanest approach is one letterhead per location, each with its own address and phone, instead of squeezing everything into one design.",
        ],
      },
      {
        heading: "What gets filled in per patient",
        body: [
          "For each patient you write their full name, the date of the visit, the medication with dosage and treatment duration, and your signature. The diagnosis, age or weight depend on how you work and on the dosage. These details change on every prescription, which is why they are not preprinted.",
          "Some practices also add the patient's age or weight when it's relevant to dosage, especially in pediatric practices. To save time, you can ask for the design to leave marked lines or spaces for those details.",
        ],
        table: {
          headers: ["Detail", "Preprinted on the letterhead", "You write it for each patient"],
          rows: [
            ["Name, specialty and license number", "Yes", "No"],
            ["Practice address, phone and office hours", "Yes", "No"],
            ["Patient's full name", "No", "Yes"],
            ["Date of the visit", "No", "Yes"],
            ["Medication, dosage and duration", "No", "Yes"],
            ["Signature", "No", "Yes"],
          ],
        },
      },
      {
        heading: "Why it's worth preprinting the fixed details",
        body: [
          "Preprinting the letterhead prevents mistakes and illegible handwriting in the details that repeat on every prescription: your license number, your specialty and the practice's phone. You approve the design once and every prescription you fill by hand already carries those details, correct and legible.",
          "Every time you write your license number or your practice's phone number by hand, there's a chance for a mistake or for it to come out illegible: which can cause problems if the patient takes the prescription to a pharmacy that checks those details.",
          "And since the standard asks for legible writing without strike-throughs in medical notes, every fixed detail that already comes printed is one less detail that can end up with a correction.",
        ],
      },
      {
        heading: "What the Yume pad includes and how long it takes",
        body: [
          `The [Custom Medical Prescription Pad](/en/products/medical-prescription-pads) has 100 sheets in Half Letter size (14 × 21.5 cm) on 90 gr Bond paper, white, with your letterhead preprinted. It costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you, and you approve a digital proof before printing.`,
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, anywhere in Mexico.`,
          "If you don't have a logo or letterhead yet, the option with design builds one from scratch with your professional details. If you already have it in an editable format, the option without design is enough.",
        ],
      },
      {
        heading: "What to check before sending it to print",
        body: [
          "Before approving, check four things: that your name and license number match your document, that the phone and address are current, that your board or institution doesn't ask for a different format, and that everything reads clearly on the digital proof. A preprinted mistake is repeated on all 100 sheets.",
          "Ask someone else to read the digital proof with you, especially the license and phone numbers: it's easy to miss a swapped digit in your own details.",
        ],
      },
      {
        heading: "What to check on a prescription before going to the pharmacy",
        body: [
          "Before leaving the office, check that the prescription includes the prescriber's details, the date, signature, and medication with dose, route, frequency, and duration, all written legibly. If anything is missing or unclear, ask your doctor to clarify it before going to the pharmacy.",
          "If you're about to order your pad, compare [printed and digital prescription pads](/en/blog/printed-vs-digital-prescription-pads) and [pads with and without design](/en/blog/prescription-pad-with-design-vs-without-design). If you work in Guadalajara, see [custom medical prescription pads in Guadalajara](/en/blog/custom-medical-prescription-pads-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
      BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
      BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    ],
    faq: [
      {
        q: "Does NOM-004-SSA3-2012 say what a prescription must include?",
        a: "The standard regulates the clinical record, not the prescription as a separate form. For medical notes it asks for the date, time, full name and signature of the author, and for medications to state dose, route of administration and frequency.",
      },
      {
        q: "Does a prescription have to be written legibly?",
        a: "Yes. Section 5.11 of NOM-004-SSA3-2012 asks that notes be written legibly, without abbreviations, corrections or strike-throughs. Preprinting the fixed details leaves you less text to handwrite.",
      },
      {
        q: "What gets preprinted and what is handwritten?",
        a: "The fixed letterhead details are preprinted: name, specialty, license number and practice details. You handwrite what changes per patient: their name, the date, the medication with dosage and duration, and your signature.",
      },
      {
        q: "Is every medical prescription valid for 30 days?",
        a: "No. Under Article 226 of the General Health Law, the 30 days from the date written apply to retained category II prescriptions. For other cases, ask your doctor or pharmacy.",
      },
      {
        q: "How many times can a prescription be filled?",
        a: "It depends on the medication's category. A category III prescription can be filled up to 3 times, is stamped each time, and is retained on the third fill; a category IV prescription can be refilled as many times as the doctor specifies.",
      },
      {
        q: "Must the prescription use the medication's generic name?",
        a: "Yes. Article 226 of the General Health Law says prescriptions use the generic name, and the doctor may specify a preferred brand while informing the patient about therapeutic options.",
      },
      {
        q: "What size is the Yume prescription pad and how many sheets does it have?",
        a: "100 sheets in Half Letter size (14 × 21.5 cm), on 90 gr Bond paper, white.",
      },
      {
        q: "How much does a custom prescription pad cost?",
        a: `The 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "How long does my prescription pad take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes to production until you approve it.",
      },
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Diario Oficial de la Federación (Mexico)",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
      {
        label: "General Health Law, Article 226",
        url: "https://mley.mx/LGS/articulo/226/",
      },
      {
        label: "General Health Law, Article 241",
        url: "https://mley.mx/LGS/articulo/241/",
      },
      {
        label: "Academic article on medical prescriptions, SciELO Mexico",
        url: "https://www.scielo.org.mx/pdf/prh/v38n2/2524-1710-prh-38-2-60.pdf",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"],
    title: "Yume vs. Online Sticker Print Shops: What to Compare Before You Order",
    metaTitle: "Yume vs. Online Sticker Print Shops",
    description: `We compare Yume with online sticker print shops in Mexico. 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} MXN, with a digital proof and shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Before ordering stickers for your wedding, your event or your business, it's worth comparing carefully. In September 2026 we checked the public prices of several Mexican custom-sticker print shops and put them next to Yume's. Here are the numbers, what else is worth checking besides the per-piece price, and how to order without buying more than you need.",
    sections: [
      {
        heading: "How is Yume different from other online sticker print shops?",
        body: [
          "Yume sells by the exact number of pieces, from 40 in vinyl and 50 in logo labels, with a digital proof before printing and shipping across Mexico. All of our stickers come with high-quality BOPP lamination, and you choose the finish. Its per-piece price sits within the range of the Mexican print shops we reviewed in September 2026, and its minimum order is lower than all of theirs.",
          "The difference you notice most when ordering is that you don't have to buy full sheets: you choose how many pieces you need, whether for the guests at a wedding, the tables at a party or your brand's packaging.",
        ],
      },
      {
        heading: "How we compared",
        body: [
          "We converted each print shop's public price to a per-piece price and noted its minimum order in pesos. That makes it possible to compare businesses that sell by sheet, by roll, or by piece count. Every price is the one published on each competitor's site in September 2026, not an estimate.",
          "We left out any data that wasn't published in plain view. Prices change, so before deciding it's worth checking each print shop's site again: what you see here is a snapshot of that date, not a guarantee of other businesses' current prices.",
        ],
      },
      {
        heading: "The numbers",
        body: [
          `100 pieces (small size) at Yume: $${priceOf("stickers-vinil-impermeable", 100)} MXN in vinyl and $${priceOf("stickers-logo-personalizado", 100)} MXN in logo labels, with a minimum order of $${priceOf("stickers-vinil-impermeable", 40)} MXN in vinyl. The Mexican print shops we reviewed charge $1.83 to $11.00 MXN per piece and require minimums of $319 to $550 MXN.`,
          "At some print shops the real minimum is only reached by buying several full sheets at once, which is why it's worth looking at the minimum in pesos and not just the per-piece price.",
        ],
        table: {
          headers: ["", "Price per piece", "Minimum order"],
          rows: [
            ["Mexican print shops reviewed (public prices, September 2026)", "$1.83 to $11.00 MXN", "$319 to $550 MXN"],
            ["Yume: Custom Logo Stickers (100 pieces, small size)", `$${perPiece("stickers-logo-personalizado", 100)} MXN`, `$${priceOf("stickers-logo-personalizado", 50)} MXN (50 pieces)`],
            ["Yume: Waterproof Vinyl Stickers (100 pieces, small size)", `$${perPiece("stickers-vinil-impermeable", 100)} MXN`, `$${priceOf("stickers-vinil-impermeable", 40)} MXN (40 pieces)`],
          ],
        },
      },
      {
        heading: "What each size costs at Yume",
        body: [
          "100 pieces (small size): regular per-piece price. That's why the per-piece price drops a little when you order more. The table shows the total and the per-piece price at common quantities for an event or a business.",
          `For example, 200 vinyl pieces cost $${priceOf("stickers-vinil-impermeable", 200)} MXN ($${perPiece("stickers-vinil-impermeable", 200)} each). Order the quantity you need: you pick it or type it when you place your order.`,
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "What this means for you",
        body: [
          "If you're ordering details for an event, a low minimum matters more than the per-piece price: you can order close to the real number of guests or tables without buying full sheets. With Yume you order the exact quantity and approve a digital proof before anything is printed.",
          `With Yume you can start from $${priceOf("stickers-vinil-impermeable", 40)} MXN, while the print shops we reviewed ask for a minimum between $319 and $550. If you just want to try a small batch, or need only a few pieces for a celebration, you can do it without committing to a large order.`,
        ],
      },
      {
        heading: "What else to compare besides price",
        body: [
          "Compare four things: whether they sell by piece or by sheet, whether they show you a digital proof before printing, how long the order takes and how much shipping costs. At Yume, the proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments.",
          `From the moment you approve the proof, your order arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. Home delivery costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
          "If your event has a fixed date, order with some margin so you can adjust the proof before production. Our guide on how long custom stickers take to arrive explains each stage.",
        ],
      },
      {
        heading: "How to compare two quotes without getting it wrong",
        body: [
          "Ask each print shop for the same order: same number of pieces, same size, same material and same finish. Then add shipping and check whether the digital proof and revisions are included. Two per-piece prices can only be compared if the order is identical.",
          "Check the material too. Yume stickers are premium vinyl, resistant to water, sun and scratches according to the product sheet, and you can choose die-cut or kiss-cut. If another print shop quotes you paper, you're not comparing the same thing: we explain the difference in our guide to vinyl vs. paper stickers.",
          "Finally, confirm how the quantity is counted. Some print shops sell by sheet and others by piece; at Yume it's always by piece, so 100 stickers means 100 stickers, not a number of sheets.",
        ],
      },
      {
        heading: "What kind of order suits Yume",
        body: [
          "Yume is a good fit when you want a detail with a name, date or theme: stickers to seal gift bags, close invitation envelopes, dress up toast bottles or go with keepsakes for weddings, quinceañeras, baby showers and baptisms. They're also used for a business's logo or packaging.",
          "If you plan weddings or events for other people, you can order the exact quantity per event, show the digital proof to your client before approving, and coordinate everything over WhatsApp. Our guide to stickers for weddings, events and parties has ideas for uses and sizes.",
          "If you already have invitations or a custom wedding menu, using the same design on the stickers makes the whole event look like one piece. You can also look at our personalized party favor boxes and temporary tattoos for parties.",
        ],
      },
      {
        heading: "How to order yours",
        body: [
          "Send us your logo, names, date, photo or whatever design you have, even if it isn't finished, by WhatsApp or from the online store. We prepare a digital proof and produce nothing until you approve it. We produce in Guadalajara and ship across Mexico.",
          "The whole process is remote: you get a quote, approve the design and receive your order at home, no matter which city you're in. For more options on where to order, see our guide to where to print custom stickers in Mexico.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Yume an online print shop?",
        a: "You can order online or by WhatsApp, approve a digital proof and receive the order at home. We produce in Guadalajara and ship across Mexico.",
      },
      {
        q: "What is Yume's minimum order?",
        a: `40 pieces for Custom Vinyl Stickers ($${priceOf("stickers-vinil-impermeable", 40)} MXN) and 50 pieces for Logo Stickers & Labels ($${priceOf("stickers-logo-personalizado", 50)} MXN).`,
      },
      {
        q: "How much do stickers cost at Yume?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} MXN in vinyl and $${priceOf("stickers-logo-personalizado", 100)} MXN in logo labels.`,
      },
      {
        q: "Are they sold by sheet or by piece?",
        a: "By number of pieces, not by sheet. You order the exact quantity you need.",
      },
      {
        q: "Where do the other print shops' prices come from?",
        a: "They are the public prices each Mexican print shop showed on its site in September 2026. They may have changed, so check each site before deciding.",
      },
      {
        q: "Can I see how it will look before printing?",
        a: "Yes. We send a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We don't print anything without your approval.",
      },
      {
        q: "How long does the order take and how much is shipping?",
        a: `From the moment you approve the proof, your order arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Can I order a small quantity for a wedding or party?",
        a: "Yes. From 40 pieces in vinyl and 50 in logo labels, so you can order close to the number of guests or tables at your event.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"]],
  },
  {
    slug: BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"],
    title: "Vinyl vs. Paper Stickers: Which to Choose for Your Event",
    metaTitle: "Vinyl vs. Paper Stickers: Which Is Right for You?",
    description: `Vinyl vs. paper stickers for weddings, parties and gifts: what changes with water and sun. 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}, with a digital proof.`,
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-29",
    intro:
      "If you're giving a gift or preparing a detail for a wedding, quinceañera, baptism or baby shower, choosing between vinyl and paper stickers changes how the piece holds up on the table, on a glass or on a small bag. Here we explain the difference, what happens with water and ice, when each material makes sense, how much it costs and why Yume works only with vinyl.",
    sections: [
      {
        heading: "Vinyl vs. paper stickers: the difference that matters",
        body: [
          "The main difference between vinyl and paper stickers is the material. Vinyl is a flexible plastic and, according to our sticker specifications, resists water, sun and scratches. That's why we use it for pieces that are handled, get wet or are exposed to light, such as bottles and laptops.",
          "We don't give durability figures for paper: Yume doesn't produce it and we don't have our own test results. When comparing quotes, always ask about the exact material and finish, because that's where the real difference in what you'll receive lies.",
        ],
      },
      {
        heading: "What happens on a glass, cup or jar with ice?",
        body: [
          "Yume's vinyl stickers are water-resistant according to the product specifications, so a glass, cup or jar with ice is a reasonable use as a table detail. We don't promise they'll withstand prolonged soaking or intense washing. If you have a special case, message us on WhatsApp and we'll review it before production.",
          "For weddings, quinceañeras, baptisms or baby showers, these stickers often go on glasses, cups, bags or souvenir jars. Tell us where yours will go, for example on a glass with a cold drink or a jar with ice, and we'll honestly tell you what to expect before production.",
        ],
      },
      {
        heading: "When to choose vinyl and when to choose another material",
        body: [
          "Vinyl makes sense when the sticker gets wet, is exposed to light or is touched by many people, as on glasses, bottles, laptops or packaging. For a one-time indoor invitation, another material may be enough, but at Yume we only make vinyl. Ask yourself three questions: will it get wet, get sun or be touched by many people?",
          "If you answer yes to any of the three, order vinyl. If all three answers are no and the piece is for one-time use, the decision is yours, and we'll clearly tell you that we don't produce another material.",
        ],
        table: {
          headers: ["Situation", "What makes sense"],
          rows: [
            ["Souvenir glass, cup or jar", "Vinyl, because of contact with water or ice"],
            ["Water bottle, tumbler or cooler", "Vinyl, because of water contact"],
            ["Laptop, suitcase or skateboard", "Vinyl, because of rubbing and scratches"],
            ["Car or window", "Vinyl, because of sun exposure"],
            ["Packaging or gift bag", "Vinyl, so it arrives and lasts the same"],
            ["One-time indoor invitation", "Another material may be enough; at Yume we only make vinyl"],
          ],
        },
      },
      {
        heading: "Why Yume works only with vinyl",
        body: [
          "At Yume we only work with vinyl because we prefer to offer a material we know holds up. Both of our sticker products, Custom Vinyl Stickers and Stickers and Labels with Your Logo, are made from premium vinyl with die-cut or kiss-cut cutting, and you always receive a digital proof before production.",
          "For a wedding, quinceañera or baby shower detail, the product is Custom Vinyl Stickers: any design, character or photo. For your business logo, it's Stickers and Labels with Your Logo. Both are sold by piece count, not by sheet.",
        ],
      },
      {
        heading: "Cut and finish: what you can choose",
        body: [
          "With vinyl you choose two things when ordering: the cut, which can be die-cut or kiss-cut, and the finish, which can be matte, glossy or holographic. All our stickers have high-quality BOPP lamination. Holographic has an extra cost per piece. The material doesn't change: it's still the same premium vinyl, so these are design decisions.",
          "If you're unsure which cut suits you, read our die-cut vs. kiss-cut comparison, where we explain when each makes sense. Before printing you receive a digital proof to confirm how the design looks.",
        ],
      },
      {
        heading: "How much vinyl stickers cost",
        body: [
          `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} for Custom Vinyl Stickers and $${priceOf("stickers-logo-personalizado", 100)} for labels with your logo. The minimum is 40 vinyl pieces and 50 logo labels, and you order the exact quantity you need.`,
          `As a reference, 150 vinyl pieces cost $${priceOf("stickers-vinil-impermeable", 150)} and 200 pieces cost $${priceOf("stickers-vinil-impermeable", 200)}. For an event, count your guests and add a few spare pieces.`,
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 150, 200, 300], "en"),
        },
      },
      {
        heading: "How to order and when they arrive",
        body: [
          `Send us your design through WhatsApp or the shop and we'll send you a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. From approval, it arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
          `If you're in Guadalajara, your order can be ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. You can send us your logo, character, photo or idea in whatever format you have, even if it isn't ideal. We produce in Guadalajara and ship throughout Mexico.`,
          "If you want to compare Yume with other options, check our comparison with online print shops or the guide to where to print stickers in Mexico.",
        ],
      },
    ],
    faq: [
      {
        q: "Do vinyl stickers resist water and sun?",
        a: "Yes. They are printed on premium vinyl that resists water, sun and scratches, according to the product specifications. We don't promise they'll withstand prolonged soaking or intense washing.",
      },
      {
        q: "Can I put a sticker on a glass, cup or jar with ice?",
        a: "Yume's vinyl is water-resistant according to the product specifications, so this is a reasonable use as a table detail. We don't promise it will withstand prolonged soaking or intense washing. If you have a special case, message us on WhatsApp.",
      },
      {
        q: "Does Yume make paper stickers?",
        a: "No. Both of our sticker products are made from premium vinyl. We prefer to offer one material we know holds up.",
      },
      {
        q: "Which cuts and finishes can I choose?",
        a: "You can choose die-cut or kiss-cut, and a matte, glossy or holographic finish. Holographic has an extra cost per piece that you see when selecting it on the product page.",
      },
      {
        q: "How much do vinyl stickers cost?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}. The minimum order is 40 pieces.`,
      },
      {
        q: "Are they sold by sheet or by piece?",
        a: "By piece count, not by sheet. You order the exact quantity you need, starting at 40 vinyl pieces and 50 labels with your logo.",
      },
      {
        q: "Can I see how they'll look before printing?",
        a: "Yes. We send a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We don't print anything without your approval.",
      },
      {
        q: "Can I order stickers for a wedding or party?",
        a: "Yes. You can order vinyl stickers with your event design. Send us your idea on WhatsApp and we'll send you a digital proof before production.",
      },
      {
        q: "How long does an order take and how much is shipping?",
        a: `From the moment you approve the proof, your order arrives at your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping costs $${NATIONAL_SHIPPING_PRICE} and is free on orders of $${FREE_SHIPPING_THRESHOLD} or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["stickers-personalizados-para-mascotas"], BLOG_SLUG_EN["stickers-personalizados-para-negocios-guadalajara"]],
  },
  {
    slug: BLOG_SLUG_EN["menu-de-boda-personalizado"],
    title: "Custom Wedding Menus: How to Order Yours",
    metaTitle: "Custom Wedding Menus: How and When to Order",
    description:
      "Custom wedding menu: what text to include, one per guest or table, how to approve the design and when to request a quote on WhatsApp.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-11",
    intro:
      "A custom wedding menu is one piece of your event stationery, chosen alongside the save the date, invitation and stickers. This guide gives you an order for decisions, timeline references, the details needed for a quote and how to order from Yume. For actual timing and prices, request a quote on WhatsApp.",
    sections: [
      {
        heading: "Custom wedding menus and the pieces that accompany them",
        body: [
          "A custom wedding menu is a card listing the dishes at your reception, designed with the couple's names, the date and the style of your event. It is part of the wedding stationery, alongside the save the date, invitation and stickers, and it helps if all of them share the same visual style.",
          "The pieces depend on one another: your guest list determines how many you need and the catering determines the menu text. That is why the order of decisions matters more than the exact date of each order.",
          `Yume quotes menus, [custom event invitations](/en/blog/${BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"]}) and [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) for closing envelopes or sealing bags. If you need another piece, such as place cards or programs, ask us on WhatsApp whether we can quote it.`,
        ],
      },
      {
        heading: "Working backward: when to order each piece",
        body: [
          "There is no single timeline: one wedding guide recommends sending the save the date 10 to 12 months before the wedding and invitations about 3 months before, but other guides give different ranges. Use these figures as a reference, count backward from your date and request a quote on WhatsApp for actual timing.",
          "These are reference ranges from guides, not Yume production times. If your wedding is soon, message us as early as possible with your date.",
        ],
        table: {
          headers: ["Piece", "Reference", "What to include or prepare"],
          rows: [
            ["Save the date", "Send 10 to 12 months before (wedding guide)", "Names, full date and, if applicable, the city. It does not need the venue, map, dress code or RSVP."],
            ["Invitation", "Send about 3 months before (wedding guide); order it before then", "The details omitted from the save the date, such as venue, map, dress code and RSVP"],
            ["Menu", "After confirming the catering; Spanish-language guides rarely give a printing date", "Quantity, exact text in order, event date and style"],
            ["Stickers and details", "No reference timeline in the guides; request a quote on WhatsApp", "Quantity and the same design style as the rest of the stationery"],
          ],
        },
      },
      {
        heading: "Why finalize the menu before ordering the rest",
        body: [
          "The menu text comes from the catering, so it depends on the meal being confirmed. If you order invitations and menus with an approved design and a dish changes afterward, already designed pieces would need adjustment. That is why it helps to settle the final menu first and then order the stationery that accompanies it.",
          "In the Spanish-language guides we reviewed, the menu rarely appears in the timelines: the tasting is treated as a separate step without a printing date. Confirm the catering, write the menu text and then settle the design for all the stationery so every piece shares the same visual style.",
        ],
      },
      {
        heading: "Does the timeline change for traveling guests or peak season?",
        body: [
          "It can, so let us know. If your wedding is in peak season or your guests are traveling, tell us when requesting a quote so we can take that into account when setting the schedule. Guides give different ranges for these cases, so there is no single figure: count backward from your date and confirm the actual timing for each piece on WhatsApp.",
        ],
      },
      {
        heading: "For planners: coordinating stationery for several weddings",
        body: [
          "If you coordinate weddings, stationery is one project with several interdependent pieces. Gather each client's guest list, final menu and visual reference, and request a quote for the whole set in one WhatsApp message. You will receive a proposal with a digital proof and a shared design style.",
          "Request a digital proof for each piece and confirm it with your client before approving: only when the final design is approved does it go to production. If you work on several weddings a year, message us on WhatsApp to coordinate quantities and dates for each event.",
          `For more detail, read the [Guadalajara wedding planner guide](/en/blog/${BLOG_SLUG_EN["guia-wedding-planners-detalles-personalizados-guadalajara"]}) and how the [digital proof for planners](/en/blog/${BLOG_SLUG_EN["prueba-digital-pedido-evento-planners"]}) works.`,
        ],
      },
      {
        heading: "What information we need",
        body: [
          "To quote a wedding menu we need four things: the number of menus, the exact text for each one, the wedding date, and a style idea. With that we prepare the quote and the design proposal. If you haven't settled everything yet, message us anyway and we'll fill in the gaps together.",
          "The quantity is usually one menu per guest or per table, depending on how you want to set it up. The text is the dishes, in serving order. And the visual reference matters most if you want it to match the invitations or other stationery you're already ordering for the same event.",
          "It also helps to know whether the menu will stand alone (one card per place setting) or come together with other details, like the guest's name or assigned table. That choice shapes the design from the start, so settle it before the digital proof.",
        ],
      },
      {
        heading: "One menu per guest or one per table",
        body: [
          "A menu per guest sits at each place setting so everyone has it at hand; a menu per table is shared by the people seated together. The main difference is how many pieces you order and how much text fits comfortably. Choose based on your guest count and the style of the wedding.",
          "Per guest feels more personal and lets you add each person's name in the same design. Per table means fewer pieces and works well if the menu is short or you prefer a single decorative item at the center. If you're unsure, tell us your guest and table counts and we'll help you decide.",
          "Think about your guests' dietary needs too. If the catering includes vegetarian, gluten-free or kids' options, decide whether they go on the same menu or on a separate line, so the design doesn't get crowded and each guest finds theirs quickly.",
        ],
      },
      {
        heading: "What text to include and how to proofread it",
        body: [
          "A wedding menu's text has a title (for example the couple's names or the date), the courses in order, and the dishes for each. Before sending it, confirm every dish name with your caterer: the text you send is exactly what gets printed.",
          "One possible structure: starter, soup or cream, main course, dessert and, if applicable, the drink or toast. The shorter and clearer the text, the more room remains for the design.",
          "To proofread without errors, ask a second person to read the full text, especially proper names, accents and quantities. Also check that the order matches what will actually be served. The digital proof is your chance to request corrections before anything is printed.",
        ],
      },
      {
        heading: "The design and approval process",
        body: [
          "The process has three steps: you send us your details, we send a design proposal as a digital proof, and once you approve it, it goes to production. You can request adjustments before approving. This step exists so no typo ever reaches paper.",
          "It's much easier to fix the order of the dishes or a color at the proof stage than after the menus are already printed.",
          "Once you approve the final design, it goes to production. If you're also ordering invitations or other stationery for the same wedding, everything can be coordinated under the same design line so it reads as one set, not separate pieces.",
        ],
      },
      {
        heading: "How to match it with the rest of your stationery",
        body: [
          "For the menu to feel part of the same event, use the same design line as your invitations: same colors, same typeface, same details. That way the table, the envelope and the gift bag read as one set instead of pieces bought separately.",
          `To seal bags or close envelopes with the same design, see [wedding stickers](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}), and for the detail each guest takes home, [wedding favor boxes](/en/blog/${BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"]}) or [personalized favor boxes](/en/products/personalized-party-favor-boxes).`,
          `You can also coordinate the event details with [temporary wedding tattoos](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]}) on the dance floor. For the rest of the table, see [wedding table details](/en/blog/${BLOG_SLUG_EN["detalles-de-mesa-boda-personalizados"]}). Once you have the menu design, ask us to adapt it to the other pieces: reusing the same style saves you from making those decisions again from scratch.`,
        ],
      },
      {
        heading: "When to request a stationery quote from Yume",
        body: [
          "Request a quote as soon as you have a date, an approximate guest list and confirmed catering, even if minor adjustments remain. Message us on WhatsApp with the event type, date and pieces you want, and we will give you actual timing and prices. We produce in Guadalajara and ship throughout Mexico.",
          `If you are deciding between a custom design and a ready-made one, see [custom stationery versus templates](/en/blog/${BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "How far in advance should I order my wedding stationery?",
        a: "There is no single timeline. Count backward from your wedding date, finalize the menu first and request a quote on WhatsApp for the actual timing and prices of each piece.",
      },
      {
        q: "When should the save the date be sent?",
        a: "One wedding guide recommends 10 to 12 months before the wedding, with the names, full date and, if applicable, the city. Other guides give different ranges, so treat this as a reference.",
      },
      {
        q: "What details do I need to quote a wedding menu?",
        a: "The number of menus, the exact text (the dishes in serving order), the wedding date and, if you have one, a style reference. If you're also ordering invitations or other stationery, let us know so we can match the design.",
      },
      {
        q: "Can I see the design before it's printed?",
        a: "Yes. We send a design proposal as a digital proof and you can request adjustments before approving it. Only once you approve the final design does it go to production.",
      },
      {
        q: "Should I order one menu per guest or per table?",
        a: "Both are common. Per guest sits at each place setting and can include each person's name; per table means fewer pieces. Tell us your guest and table counts and we'll help you choose.",
      },
      {
        q: "Can I match the menu with my invitations?",
        a: "Yes. If you order invitations or other stationery for the same wedding, everything can be coordinated under the same design line so it reads as one set.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: "Yes. We produce in Guadalajara and ship anywhere in Mexico. The design and approval process is the same wherever your wedding is.",
      },
      {
        q: "How much does a custom wedding menu cost?",
        a: "It's quoted case by case based on quantity and design. Message us on WhatsApp with your date and number of menus and we'll prepare your quote.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"], BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"], BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"], BLOG_SLUG_EN["detalles-de-mesa-boda-personalizados"], BLOG_SLUG_EN["guia-wedding-planners-detalles-personalizados-guadalajara"]],
    quoteMessage: "Hi, I'm interested in getting a quote for custom wedding menus.",
  },
  {
    slug: BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
    title: "Business Cards for Your Practice: How to Order Them Alongside Your Prescription Pad",
    metaTitle: "Business Cards for Your Practice",
    description:
      "What you need to quote business cards for your medical practice, how the digital proof works, and why it pays to order them with your prescription pad.",
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-11-10",
    intro:
      "If you've already ordered your custom medical prescription pad, it's common to want a matching business card: it's one of the first things a patient takes away from the visit, along with the prescription. This guide covers what to prepare, how to check your license number, what belongs on the card, and how the quote process works at Yume.",
    sections: [
      {
        heading: "What information you need to request a quote for your practice business cards",
        body: [
          "To quote your card we need your full name, specialty, professional license number (and specialty license, if applicable), your practice's contact details, and the quantity of cards. These are the same details your prescription pad uses, so if you've already ordered one, most of it is ready.",
          "Contact details means the practice address, phone and, if you want, social media, email or website. If you work at more than one practice, tell us which one goes on the card or whether you'd like a different card for each location.",
          "If you already have your letterhead or logo from an earlier piece (like the prescription pad), let us know when requesting a quote: we can reuse the same design on the card so both pieces look consistent instead of building something new from scratch.",
        ],
      },
      {
        heading: "How to check your professional license before printing",
        body: [
          "Before printing, copy your license number exactly as it appears on your official cédula, instead of retyping it from memory. In Mexico the cédula profesional is handled by the SEP's Dirección General de Profesiones, and the exact number is the one that must be printed.",
          "If you applied for your cédula online, the SEP delivers it in digital format by email. According to the SEP's announcement, physical cédulas remain valid, so either one works to copy the exact number. A specialty license is a separate number, so confirm it separately.",
          "A single wrong digit means reprinting the whole run. That's why, when we send you the digital proof, you should check the license number against your document before approving. To learn what information a prescription needs, see [the required information on a medical prescription in Mexico](/en/blog/required-information-medical-prescription-mexico).",
        ],
      },
      {
        heading: "What to put on the card (and what to leave off)",
        body: [
          "A practice card works best with a few legible details: your name, specialty, license number, phone, address and one digital contact. That's a design recommendation, not a rule: your medical association, institution or state may ask for other details, so confirm with them if you work under one.",
          "Leave off anything that changes often. If your hours, phone or fees change every few months, don't print them on a whole run of cards: prefer a stable detail, like your email or a QR code to your website or online booking page.",
          "If you use a QR code, test it with your phone on the digital proof before approving. Also make sure the text is a comfortable size: patients often look at the card days later, at home, not in your office.",
          "If you also want patients to leave you reviews, see the [review plate for medical practices](/en/blog/google-review-plate-for-medical-practices).",
        ],
      },
      {
        heading: "The design and approval process for your card",
        body: [
          "The process is: you send your details, we build a proposal, we send you a digital proof, and we only go to production once you approve it. You can request adjustments on the proof, which is the cheapest moment to fix a mistake, such as your license or phone number.",
          "Once you approve the final design, it goes to production. The process is the same whether you order the card on its own or together with your prescription pad in the same quote. We produce in Guadalajara and ship anywhere in Mexico; we confirm timing and cost for your order when we quote.",
        ],
      },
      {
        heading: "Why order your cards alongside your prescription pad",
        body: [
          "Ordering together gives you a single letterhead for both pieces: same typography, same colors, same details. Your practice looks more consistent and you don't pay for or coordinate two separate designs. It's the same logic behind a consistent look across all your stationery.",
          `If you already have your letterhead ready, the 100-sheet Half-Letter [custom medical prescription pad](/en/products/medical-prescription-pads) costs $${recetarioPrice("sin-diseno")} MXN. If you want us to design it with you, it costs $${recetarioPrice("con-diseno")} MXN. That same design is the base for your card, so you don't start from zero with each piece.`,
          "If you don't have your custom prescription pad yet, you can quote both together from scratch and we'll put together a single letterhead design that works for both pieces. To understand the difference between the two pad options, read [prescription pads with design vs. without design](/en/blog/prescription-pad-with-design-vs-without-design). If you are in Guadalajara, see also [custom medical prescription pads in Guadalajara](/en/blog/custom-medical-prescription-pads-guadalajara).",
        ],
      },
      {
        heading: "How to request a quote for your business cards on WhatsApp",
        body: [
          "Quoting is simple: message us on WhatsApp with your details, the number of cards and, if you have it, your logo or letterhead. Business cards are quoted case by case, so we reply with the price for your specific order, not a generic rate.",
          "To speed up your quote, have the information in this table ready. If you don't have a prescription pad yet, tell us and we'll quote both pieces together.",
        ],
        table: {
          headers: ["Information", "How to prepare it"],
          rows: [
            ["Name and specialty", "As you want them to appear"],
            ["License number(s)", "Copied from your official document"],
            ["Contact details", "Phone, address, email or social media"],
            ["Quantity", "How many cards you need"],
            ["Design", "Logo or letterhead, or the same as your prescription pad"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "What details do I need to quote my business cards?",
        a: "Your full name, specialty, professional license number (and specialty license, if applicable), your practice's contact details and the quantity of cards. If you already have a letterhead or logo, send it so we can reuse the design.",
      },
      {
        q: "Can I use the same design as my prescription pad?",
        a: "Yes. If you already have your letterhead or logo from another piece, like the prescription pad, we can use the same design on the card so both pieces look consistent.",
      },
      {
        q: "Do I see the card before it's printed?",
        a: "Yes. We send a digital proof and only produce once you approve it. Check your license number and phone there, since it's easier to fix them before printing.",
      },
      {
        q: "How much do the business cards cost?",
        a: "They're quoted case by case based on design and quantity. Message us on WhatsApp with your details and we'll prepare a quote for your order.",
      },
      {
        q: "How much is the prescription pad I can order with the card?",
        a: `The 100-sheet Half-Letter prescription pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What if I work at more than one practice?",
        a: "When requesting a quote, tell us which practice should appear on the card or whether you would prefer a different card for each location.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: "Yes. We produce in Guadalajara and ship anywhere in Mexico.",
      },
      {
        q: "Does my physical cédula work, or do I need the digital one?",
        a: "According to the SEP, physical cédulas remain valid, and anyone who prefers a digital one can request it online. For the card you only need to copy the exact number from your cédula.",
      },
    ],
    sources: [
      {
        label: "SEP: Simplifica SEP el trámite de cédulas profesionales; cédulas físicas mantienen su vigencia (Boletín 142)",
        url: "https://www.gob.mx/sep/prensa/boletin-142-simplifica-sep-el-tramite-de-cedulas-profesionales-cedulas-fisicas-mantienen-su-vigencia-sep",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"], BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"], BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"], BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"], BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"], BLOG_SLUG_EN["placa-resenas-google-para-consultorios"]],
    quoteMessage: "Hi, I'm interested in getting a quote for business cards for my medical practice.",
  },
  {
    slug: BLOG_SLUG_EN["yume-vs-imprentas-recetarios-medicos"],
    title: "Yume vs. Other Medical Prescription Pad Print Shops: A Real Price Comparison",
    metaTitle: "Yume vs. Other Prescription Pad Print Shops",
    description: `Yume's custom medical prescription pad vs. Mexican print shops: $${recetarioPrice("sin-diseno")} without design, $${recetarioPrice("con-diseno")} with design, what's included and what to check.`,
    category: "Guides",
    publishedAt: "2026-09-09",
    modifiedAt: "2026-10-26",
    intro:
      "Before requesting a quote for your custom medical prescription pad, it's worth knowing what the price includes, not just what it costs. In September 2026 we checked the public prices of several Mexican prescription-pad print shops and compared them against Yume's. Here you'll find the numbers, what each option includes, and a checklist of what to review in any quote, so you can choose calmly and without surprises.",
    sections: [
      {
        heading: "How do we compare other print shops' prescription pads with Yume's?",
        body: [
          "We compared the same thing every time: the public price of a 100-sheet, Half-Letter custom medical prescription pad, and whether that price includes the letterhead design. That way you see the cost of the whole job, not just printing. The data comes from each print shop's own site in September 2026.",
          "Every price is the one published directly on each competitor's site as of that date: none of them are estimates. Prices can change over time, so confirm the current price on each print shop's site before deciding.",
          "We noted the letterhead design because it's the part most often overlooked. A pad with your name, specialty, license number and practice address needs a design before it's printed, and someone has to make it: you, an outside designer, or the print shop.",
        ],
      },
      {
        heading: "How much do prescription pads cost at other print shops and at Yume?",
        body: [
          `Among the Mexican print shops we reviewed, public prices range from $300 to $900 MXN per batch, on Bond or Opalina paper. At Yume, the 100-sheet pad costs $${recetarioPrice("sin-diseno")} MXN with your design ready or $${recetarioPrice("con-diseno")} MXN with letterhead design included, on 90 gr Bond paper.`,
          "The batches we reviewed run from 100 sheets to a full block, so before comparing numbers it helps to check how many sheets each one includes. None of the options we checked clarifies or includes letterhead design as part of the price; in some cases it isn't even mentioned.",
        ],
        table: {
          headers: ["Option", "Price", "Letterhead design"],
          rows: [
            ["Yume: without design (100 Half-Letter sheets)", `$${recetarioPrice("sin-diseno")} MXN`, "Not included: you bring your design"],
            ["Yume: with design (100 Half-Letter sheets)", `$${recetarioPrice("con-diseno")} MXN`, "Included: we build it with you"],
            ["Mexican print shops reviewed (September 2026)", "$300 to $900 MXN per batch", "Not stated in the public price"],
          ],
        },
      },
      {
        heading: "What does Yume's prescription pad include besides the price?",
        body: [
          "It includes 100 Half-Letter sheets (14 × 21.5 cm) on white 90 gr Bond paper, your letterhead with name, license number, specialty and practice address, and a digital proof you approve before we produce. With the design option, we build the letterhead with you from scratch.",
          "We produce to order, so your pad is made with your details and doesn't come from generic stock. You can send us your design in an editable format or ask us to design it with you, and the approval step is the same either way.",
          "If you've ordered or plan to order a business card for your practice, we can use the same letterhead on both pieces. We explain it in the guide to business cards for your practice.",
        ],
      },
      {
        heading: "When does the without-design option make sense, and when the with-design one?",
        body: [
          "Choose without design if you already have your letterhead as an editable file with logo, details and layout. Choose with design if it's your first custom pad, the one you use looks dated, or you don't have the file handy. You can switch options over WhatsApp before approving the digital proof.",
          "With design, you give us your details (name, professional license number, specialty and practice address), we build a visual proposal and adjust it with you until it looks the way you want, before printing.",
          "Without design is the most direct route when the design work is already done, for example with a designer or a previous print shop. You'll find the full detail of both options in the guide to prescription pad with design vs. without design.",
        ],
      },
      {
        heading: "What should you check in any prescription pad quote?",
        body: [
          "Check five things: how many sheets the batch includes, the size, the paper, whether the letterhead design is included, and whether you get a digital proof before printing. With those you compare equivalent quotes, even if the final price differs from one print shop to another.",
          "Always ask to see a proof before production. The most common mistakes are in the professional license number and the phone number, and finding them after all 100 sheets are printed means redoing the job. On the proof, compare every detail against your license and your real information.",
          "On the content of the prescription, NOM-004-SSA3-2012 requires clinical record notes to carry the date, time and full name of the person who writes them, in legible handwriting, and it does not define a specific prescription format. This is general information: your medical association, your state or the institution where you work may ask for more, so confirm before printing.",
          "To see which details are preprinted on the letterhead and which are filled in per patient, read the guide to the medical prescription format in Mexico.",
        ],
      },
      {
        heading: "How long does it take and how much is shipping for a prescription pad?",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping anywhere in Mexico is $${NATIONAL_SHIPPING_PRICE} MXN.`,
          `Orders of $${FREE_SHIPPING_THRESHOLD} MXN or more get free shipping and pickup. If you prefer to pick up, there are ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the Guadalajara metro area. These timeframes count business days only.`,
          "We produce in Guadalajara and ship anywhere in Mexico. Since design approval happens remotely, the process is the same whether your practice is in Zapopan, Monterrey or any other city.",
        ],
      },
      {
        heading: "What does this comparison mean for you?",
        body: [
          `What changes between quotes isn't just the printing price, but who takes care of the letterhead. At the print shops we reviewed, design doesn't appear in the public price; at Yume, the $${recetarioPrice("con-diseno")} MXN option includes it and you approve it before printing.`,
          "We didn't find a single print shop advertising \"we design your letterhead with you\" included in the cost, which is exactly what Yume's with-design option covers. If your letterhead is already sorted, the without-design option takes you straight to production.",
          "If it isn't, the with-design option saves you from sorting it out yourself or hiring someone else before you can print. Message us on WhatsApp with your details and we'll help you pick the option that suits you.",
        ],
      },
    ],
    faq: [
      {
        q: "How much does Yume's custom medical prescription pad cost?",
        a: `The 100-sheet Half-Letter pad costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you.`,
      },
      {
        q: "What's the difference between with design and without design?",
        a: "With design means we build your letterhead with you from scratch. Without design is for when you already have the letterhead as an editable file and only need us to print it.",
      },
      {
        q: "What size and paper is the pad?",
        a: "It's 100 sheets, Half-Letter size (14 × 21.5 cm), on white 90 gr Bond paper.",
      },
      {
        q: "Do I see the design before it's printed?",
        a: "Yes. We send you a digital proof and only send it to production once you approve it. Check your license number and phone number there.",
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, home delivery takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days and Casa Blanca pickup ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes. We produce in Guadalajara and ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "Does NOM-004 define a prescription format?",
        a: "No. NOM-004-SSA3-2012 does not establish a specific prescription format. It requires clinical record notes to carry the date, time and full name of the person who writes them, in legible handwriting. Confirm with your association or institution if they ask for more.",
      },
      {
        q: "Are the other print shops' prices still current?",
        a: "They're the public prices we reviewed in September 2026 and can change. Confirm the current price on each print shop's site before deciding.",
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["recetarios-medicos-personalizados-guadalajara"],
      BLOG_SLUG_EN["recetario-medico-impreso-vs-digital"],
      BLOG_SLUG_EN["recetario-medico-con-diseno-vs-sin-diseno"],
      BLOG_SLUG_EN["datos-obligatorios-receta-medica-mexico"],
      BLOG_SLUG_EN["tarjetas-de-presentacion-consultorio"],
    ],
    sources: [
      {
        label: "NOM-004-SSA3-2012, Diario Oficial de la Federación",
        url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"],
    title: "Google Review Plate with NFC: What It Is and What It Costs",
    metaTitle: "Google Review Plates: What They Are and What They Cost",
    description:
      "Learn about Google review plates with NFC and QR: how they work, what they cost, and how to ask for reviews while following Google's rules.",
    category: "Guides",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-11-03",
    intro:
      "Asking for a Google review is almost always awkward: you give your customer the business name, they search for it, sift through similar results, and sometimes give up before finding the right one. A plate with NFC and a QR code solves that step: it takes them straight to the correct listing in two seconds, with nothing to search for. Here is what a Google review plate is, how it works, where to see its price, and the full method: when to ask, what to say, where to put the plate, which Google rules to follow, and how to respond when reviews arrive.",
    sections: [
      { heading: "What is a Google review plate with NFC?", body: [
        "A Google review plate is a physical piece with an NFC chip and a QR code, both linked to your business's review link. The customer taps or scans it with their phone and goes straight to the screen for writing a review on your Google listing, without searching for you manually.",
        "Depending on who sells it, you may find it called an NFC plate, a review card, or a Google review stand when it sits on a base. The idea is the same: shorten the path between your customer and the review form. At Yume we have two formats: a plate that sticks to a fixed spot and a stand that sits upright.",
        "What it does not do: it does not publish reviews on its own or guarantee a rating. Your customer always writes the review using their Google account, and what they say depends on their experience with you."
      ] },
      { heading: "How a review plate works, step by step", body: [
        "The customer brings their phone close to the plate or scans the QR code with the camera, and the review screen for your Google listing opens. They sign in to their Google account, write their opinion, and publish it. You do not need to dictate your business name or guide them through search results.",
        "From your side, there are three moments. First, you mention the review at the end of the service. Second, the customer taps or scans the plate. Third, they write what they think, and you respond when it arrives.",
        "The NFC chip stores the link to the review screen and is read when a phone is brought close, without opening an app, provided the phone has NFC and it is enabled. Otherwise, the QR code does the same job using the camera."
      ] },
      { heading: "How to get more Google reviews: the three-step method", body: [
        "To get more Google reviews, ask at the end of the service while the experience is fresh, give the customer one-step access to your listing, and respond to every review that arrives. A plate with NFC and a QR code takes care of the second point: it takes the customer straight to your listing without searching.",
        "The first step is timing: ask while the experience is fresh. The second is removing friction: customers should not have to type your business name or choose between similar results. The third is consistency: respond to the reviews you receive and ask again with each new customer. No step does the job alone, but together they turn an awkward request into a simple part of your daily service.",
        "A plate does not guarantee a number of reviews or a particular rating: it only makes the path easier. Whether customers leave a review and what they write depend on their experience with you."
      ] },
      { heading: "Why timing matters more than the message", body: [
        "The best time to ask for a review is just after the customer receives your service: at checkout, when picking up an order, or on the way out of the office. If they have to search for your business by hand at that moment, many put it off and never get around to it.",
        "It is not necessarily that they do not want to leave a review: the process takes more time than they were willing to spend at that moment. An NFC/QR plate removes that friction: the customer taps their phone or scans the code and goes straight to the leave-a-review screen on your Google listing, without typing anything or choosing between similar results.",
        "A practical detail: according to Google Business Profile Help, customers must sign in to a Google account to leave a review. If someone cannot sign in at that moment, do not insist: invite them to do it later at their leisure, from home."
      ] },
      { heading: "NFC and QR together", body: [
        "NFC works by bringing the phone close to the plate, without opening an app, provided the phone has NFC and it is enabled. The QR code is the backup: it works with the camera when NFC is unavailable. Having both on one plate covers more customers.",
        "NFC is the same tap-to-pay technology already used by bank cards, so many customers recognize it without an explanation. QR covers the other cases: phones with NFC turned off, or people who prefer to point their camera. Google itself mentions a link and a QR code as ways to ask for reviews.",
        "For a detailed comparison, see the guide to an NFC plate versus a printed QR code, where we explain what each option offers."
      ] },
      { heading: "Where to place the plate so it actually gets used", body: [
        "Place it where the customer is already in front of you when they decide whether they are satisfied: next to the register, on the reception counter, on the table when the bill arrives, or on the office desk. It should be visible, within reach, and out of the way of payment.",
        "Think about your customer's journey: at what point have they received what they came for but have not yet left? That is where the plate belongs. If you leave it in a corner, or somewhere they only see as they hurry out, almost nobody will tap it.",
        "The version without a base sticks directly to those spots (counter, register, wall). The stand version sits upright on a desk or table without adhesive, useful if you move it often or do not want to leave permanent adhesive."
      ] },
      { heading: "What to say when asking for a review", body: [
        "Ask in person with a short sentence at the end of the service: 'If you would like to tell us how it went, an honest review would help us a lot; just tap your phone here.' Ask for an honest opinion without suggesting a rating or offering anything in return.",
        "The plate does not replace your voice: someone who sees the sign without anyone mentioning it may walk right past. A kind phrase, said naturally, turns a plate into an invitation. You do not need a long script or repeated requests; mentioning it once and pointing to the plate is enough.",
        "Adapt the tone to your business. It might sound calmer in an office and warmer in a cafe, but in either case keep the request brief and sincere, and let the customer feel free to say no without pressure."
      ] },
      { heading: "What not to do: Google's rules on asking for reviews", body: [
        "Do not offer discounts or free products in exchange for a review: according to Google Business Profile Help, offering something like that is strictly prohibited and counts as fake engagement. Ask all your real customers, not just those you think will be happy, and accept what they write.",
        "If someone had a bad experience, the healthiest response is to listen, respond respectfully, and solve the problem, rather than buy their silence.",
        "An honest review, even an imperfect one, gives someone getting to know your business more confidence than a list of identical compliments. Ask naturally and let each customer say what they think."
      ] },
      { heading: "How to respond to reviews", body: [
        "Respond to the reviews you receive, both good and bad. Google recommends responding to show that customer feedback matters, using a friendly, professional tone and brief replies. If the review is negative, apologize when appropriate, respond promptly, and do not share private details about the person who wrote it.",
        "A short, personal response is enough: say thank you, mention something specific the customer shared, and, if there was a problem, say what you will do about it. Signing with your name or initials makes the response more human.",
        "Avoid arguing with or attacking the person: other customers will read your response too."
      ] },
      { heading: "Plate or stand: which suits you?", body: [
        "Choose the plate if you have a fixed spot to stick it, such as a counter, register, or wall. Choose the stand if you prefer to place it upright on a desk or table without permanent adhesive, or if you move it frequently.",
        "Think about your space: an office with a desk and a reception area with a counter have different needs. If you are unsure, write to us on WhatsApp, tell us about your premises, and we will help you choose. To see how it works step by step, check the guide to using the Google review plate.",
        "If you were looking for a Google review stand, this is the format: the same idea as the plate, standing upright on a base."
      ] },
      { heading: "How much does a Google review plate cost?", body: [
        "To see how much a Yume Google review plate costs, open the plate or stand product page: the current price is always shown there. Both come in your choice of white or black, and the price is the same for both colors.",
        "If you compare other options, do not look at price alone. Check whether it has NFC and a QR code, whether the link can be changed, and whether the support will hold up where you plan to place it. Remember that no plate guarantees reviews: what changes is how easy you make it for your customer."
      ] },
    ],
    faq: [
      { q: "What is a Google review plate?", a: "It is a physical piece with an NFC chip and a QR code linked to your business's review link. The customer taps or scans it with their phone and goes straight to the screen for leaving a review on your Google listing." },
      { q: "How much does a Google review plate cost?", a: "The current price of the Yume plate and stand appears on each product page. Both come in white or black, at the same price in either color." },
      { q: "What is a Google review stand?", a: "It is the version of the plate that stands upright on a desk or table without adhesive. At Yume, it is the Google review stand with NFC and QR." },
      { q: "What colors does the plate come in?", a: "The plate and stand come in white or black. The color does not change the price." },
      { q: "Does an NFC and QR plate guarantee more reviews?", a: "No. The plate only removes friction: it takes the customer straight to your listing. Whether they leave a review and what they write depend on their experience with you and on your asking at the right time." },
      { q: "Do my customers need a Google account to leave a review?", a: "Yes. According to Google Business Profile Help, customers must sign in to a Google account to leave a review." },
      { q: "Can I give a discount in exchange for a review?", a: "No. Google says offering free or discounted products or services in exchange for reviews is strictly prohibited and considered fake engagement." },
      { q: "Why does the plate have NFC and QR?", a: "NFC lets customers tap with their phone without opening an app, provided NFC is enabled on the phone. QR is the backup for anyone who prefers the camera or does not have NFC available." },
      { q: "Should I respond to reviews?", a: "Yes. Google recommends responding to show customer feedback matters: use a friendly, professional tone and brief replies, and apologize when appropriate for negative experiences without sharing the customer's private information." },
      { q: "Which is better, the plate or the stand?", a: "The plate sticks to a fixed spot, such as a counter, register, or wall. The stand sits upright on a desk or table without adhesive, useful if you move it often." },
      { q: "How do I ask for reviews with a link or QR code?", a: "Google's help says you can ask for reviews by sharing a Google link or a QR code for your listing. The Yume NFC and QR plate brings both access methods together in one piece." },
    ],
    sources: [
      { label: "Google Business Profile Help: Read and reply to reviews, and ask customers for reviews", url: "https://support.google.com/business/answer/3474122?hl=en" },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"], BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"], BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"], BLOG_SLUG_EN["placa-resenas-google-para-consultorios"], BLOG_SLUG_EN["placa-resenas-google-para-restaurantes"], BLOG_SLUG_EN["placa-resenas-google-para-salones-esteticas-y-barberias"], BLOG_SLUG_EN["placa-resenas-google-para-planners-y-eventos"], BLOG_SLUG_EN["como-hacer-una-encuesta-de-satisfaccion-del-cliente"]],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
  },
  {
    slug: BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"],
    title: "NFC Plate vs. Printed QR Code: Which One Should You Use for Reviews?",
    metaTitle: "NFC Plate vs. Printed QR Code for Reviews",
    description:
      "Real differences between a plate with an NFC chip and a homemade sign with just a printed QR code for collecting Google reviews at your business.",
    category: "Guides",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-10-29",
    intro: "Printing a QR code on a sheet of paper and placing it on the counter is free and anyone can do it. So why consider an NFC plate? Both lead to the same review page. The difference is in convenience, which phones can use each option, the impression the piece makes, and the Google rules that apply to both.",
    sections: [
      { heading: "NFC plate vs. QR code: the practical difference", body: [
        "The main difference is how the customer reaches the review page. With QR, they open the camera and scan. With NFC, they bring their phone close to the plate and tap. Both lead to the same place, so neither guarantees more reviews on its own. What changes is convenience and which phones can use it.",
        "A printed QR code is the more familiar option: almost everyone knows how to scan one and only needs a camera. To scan well, it must be large enough and have clear space around it. NFC adds a single tap without aiming or focusing, but the customer needs NFC turned on, and the location and surface material can affect the reading.",
        "These points come from a review card supplier's guide, not an independent test. That is why we do not give percentages or exact compatibility lists: it depends on each phone model and its settings."
      ] },
      { heading: "When to use QR and when to use NFC", body: [
        "QR is useful when you want any phone with a camera to be able to use it, including on printed material. NFC is useful for a quick tap, provided the customer has NFC enabled. Since not every phone has it enabled, it is safer not to rely on just one.",
        "Think about where the piece will go and who will use it. At reception or a counter, the customer is close enough to choose between tapping and scanning. At an event table, guests have different phones, so a visible QR code is a backup if tapping does not work. In a welcome kit, the piece is seen up close and can accompany a friendly note inviting guests to share their experience.",
        "If you are only printing a QR code on a sheet of paper, make it large, keep decorations off the code and place it somewhere customers can take their time aiming the camera."
      ] },
      { heading: "Why a plate with NFC and QR is the best option", body: [
        "The safest option is one piece with both NFC and QR. Customers with NFC enabled can tap, and those without it can scan. It is useful to have that backup and test with common phones before buying in volume.",
        "Our [NFC review plate](/en/products/google-review-nfc-plate) combines both ways to use it in one object, and the [NFC review stand](/en/products/google-review-nfc-stand) does the same in a version that sits on a surface. Both are available in white or black.",
        "Before using it at your business or an event, test it with two or three different phones, including yours and someone else's. To see how it is set up and presented to customers, read the guide to [using the review plate](/en/blog/how-to-use-your-yume-google-review-plate)."
      ] },
      { heading: "Image and design: make the piece fit your brand or event", body: [
        "A sheet with a QR code sends a different message from a plate designed to look like part of a brand or event. For planners, businesses and anyone who cares about details, the finish matters. Our plates and stands come in white or black to match the space where they are placed.",
        "A practice, café, store or event venue reception already pays attention to its image: a piece that fits the décor stands out more than a loose notice. If you organize events, it can also be another detail on the welcome table or guest service desk."
      ] },
      { heading: "Google rules that apply equally to QR and NFC", body: [
        "Google allows businesses to ask for genuine reviews, but not to offer incentives, request only positive reviews or discourage negative ones. These rules apply equally to an NFC plate and a QR code because the method does not change the policy. The text on the piece should be neutral.",
        "According to Google Maps content policy, businesses must not offer payment, discounts, free goods or services in exchange for a review, a change to one or the removal of a negative review. Nor should they select who is asked for a review. That is why the plate should not say things like 'leave 5 stars and get a gift.'",
        "The policy also says not to request specific content or pressure staff to leave ratings at the business. A simple phrase like 'Tell us about your experience' invites feedback without dictating what to write."
      ] },
      { heading: "What to expect: convenience, not a guarantee of more reviews", body: [
        "Neither option ensures more reviews on its own. There is no reliable figure to support that claim: a well-placed piece and a friendly request may help, nothing more. Use them to make the process easier, not as a guarantee.",
        "What you can control is whether the piece is visible, whether it works when tested and whether the request is friendly and honest. For ideas on asking within the rules, read [how to get more Google reviews](/en/blog/how-to-get-more-google-reviews-nfc-qr)."
      ] },
    ],
    faq: [
      { q: "Does NFC replace the QR code?", a: "No. Some customers have NFC turned off or a phone that does not detect it reliably, so it is useful to add a QR code as backup. A piece with NFC and QR is the safest choice." },
      { q: "Can a printed QR code be used to ask for reviews?", a: "Yes. It works with any phone with a camera and on printed material. It must be large enough and have clear space around it to scan well." },
      { q: "Can I offer a discount or gift in exchange for a review?", a: "No. Google policy prohibits incentives such as payments, discounts, free goods or services in exchange for a review, whether you use an NFC plate or a QR code." },
      { q: "Can I ask only satisfied customers for reviews?", a: "No. Google does not allow selectively requesting positive reviews or discouraging negative ones. You may ask for genuine reviews without influencing the rating or content." },
      { q: "What text should I put on the plate?", a: "Use neutral wording, such as 'Tell us about your experience.' Google says not to request specific content in a review." },
      { q: "Will NFC get me more reviews?", a: "There is no reliable figure to support that claim." },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"], BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"], BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"], BLOG_SLUG_EN["placa-resenas-google-para-consultorios"], BLOG_SLUG_EN["placa-resenas-google-para-restaurantes"], BLOG_SLUG_EN["placa-resenas-google-para-salones-esteticas-y-barberias"], BLOG_SLUG_EN["placa-resenas-google-para-planners-y-eventos"], BLOG_SLUG_EN["como-hacer-una-encuesta-de-satisfaccion-del-cliente"]],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    sources: [
      { label: "Google Maps content policy: reviews", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    ],
  },
  {
    slug: BLOG_SLUG_EN["como-usar-placa-resenas-google-yume"],
    title: "How to Use Your Yume Google Review Plate: No Setup Needed",
    metaTitle: "How to Use Your Yume Google Review Plate",
    description:
      "Which link to send us, how to test your NFC and QR plate the day it arrives, and where to place it so customers leave a Google review in seconds.",
    category: "Guides",
    publishedAt: "2026-09-15",
    modifiedAt: "2026-11-11",
    intro:
      "Unlike other NFC plates sold \"blank\" that ask you to program them yourself with an app, Yume's plates arrive with the NFC and QR already configured with your business's link from the moment we produce them: you take it out of the box and it's already ready for your customers to use. This guide walks you through what to send us, how to test it, where to put it, and what to do if something changes at your business.",
    sections: [
      {
        heading: "What we need from you before producing your Google review plate",
        body: [
          "We only need your Google review link or, if you don't have it handy, your business's exact name as it appears on Google. After your purchase we ask for it over WhatsApp, and we use it to program the NFC and generate the QR code before producing your plate.",
          "The more precise the detail, the better: if your business shares a name with others, send the direct link or your listing's address so the plate leads to the right one. That's the point of this step: your customers won't have to search for you among similar results.",
          "You don't have to download an app, create an account with us, or pay a subscription. It's a one-time payment and the plate doesn't depend on any monthly service to work.",
        ],
      },
      {
        heading: "What's included and how big each version is",
        body: [
          "There are two versions with the same setup: the Plate, 12 × 12 cm and 0.2 cm thick, with adhesive to stick it down, and the Stand, 12.75 cm tall and 7.6 cm wide, with a 5 cm deep base so it stands upright. Both come in white or black and carry NFC and a QR code.",
          "Choose the Plate if you have a fixed spot to stick it, like the wall next to the register or the front of the counter. Choose the Stand if you'll move it around or prefer no adhesive, since it rests on any flat surface. Both are made to order.",
          "See the details of the [Google review Plate](/en/products/google-review-nfc-plate) and [Google review Stand](/en/products/google-review-nfc-stand) on their product pages.",
        ],
        table: {
          headers: ["", "Plate", "Stand"],
          rows: [
            ["Size", "12 × 12 cm, 0.2 cm thick", "12.75 cm tall, 7.6 cm wide, 5 cm deep base"],
            ["How it's placed", "Adhesive included", "Upright, no glue or tape"],
            ["Colors", "White or black", "White or black"],
            ["Technology", "NFC + QR code", "NFC + QR code"],
          ],
        },
      },
      {
        heading: "The day it arrives: how to test your plate",
        body: [
          "The plate arrives working: there's nothing to install or scan to activate it. Before putting it out, tap your own phone against the plate and then scan the QR with the camera. Both should take you straight to the screen for leaving a review for your business.",
          "If you have the no-stand version, stick it down with the adhesive already on the back, on a clean, dry surface. If you have the Stand, just set it in place.",
          "Run the test with your phone and, if you can, someone else's, for example an Android and an iPhone. That confirms the flow works the same for someone without your setup. If something doesn't take you where you expected, message us on WhatsApp with a screenshot and we'll look into it.",
        ],
      },
      {
        heading: "How your customer uses it to leave a review",
        body: [
          "Your customer has two paths and both end in the same place: tap their phone against the plate (NFC) or scan the QR code with the camera. They do not install anything or need to create an account with us. They simply reach the screen to leave a review of your business.",
          `The QR is the backup: it works when the phone has NFC turned off or when the person would rather use the camera. That's why the code should stay visible and uncovered, even though NFC is the quickest route. To compare both options, see [NFC plate vs. printed QR](/en/blog/${BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"]}).`,
          "A good moment to mention it is when your customer is already happy: at checkout, when picking up an order, or at the end of an appointment. One short sentence is enough: \"If you were happy today, you can leave us a review by tapping your phone here\".",
        ],
      },
      {
        heading: "Where to place it so it gets used",
        body: [
          "Place it where your customer is already in front of you when deciding whether they were satisfied: next to the register, on the front desk, on the table when the bill arrives, or on the desk at the end of an appointment. Avoid corners or far-off walls where nobody stops.",
          "Make sure the front of the plate isn't hidden behind objects, card holders, or cables, because NFC is read by bringing the phone close and the QR needs to be fully visible. Check once in a while that it's clean and in plain sight.",
          `We have placement guides for [medical practices](/en/blog/${BLOG_SLUG_EN["placa-resenas-google-para-consultorios"]}), [restaurants](/en/blog/${BLOG_SLUG_EN["placa-resenas-google-para-restaurantes"]}), [salons and barbershops](/en/blog/${BLOG_SLUG_EN["placa-resenas-google-para-salones-esteticas-y-barberias"]}), and [events](/en/blog/${BLOG_SLUG_EN["placa-resenas-google-para-planners-y-eventos"]}).`,
        ],
      },
      {
        heading: "If your business changes its name or Google listing",
        body: [
          "Message us on WhatsApp and we'll sort it out with you: depending on the case, it can be solved by reprogramming the same plate or may require a new one. Tell us what changed and what the new link is so we can give you a concrete answer. If the plate leads to the wrong listing, tell us before putting it into use.",
        ],
      },
      {
        heading: "After placing it: how to get more reviews",
        body: [
          `Putting the plate in place is the first step; next, get into the habit of mentioning it when your customer is happy. If your business listing is not ready yet, see how to [set up your Google profile](/en/blog/${BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"]}) and ask for reviews. For ideas on when and how to ask, read about [getting more reviews](/en/blog/${BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"]}) with NFC and QR.`,
          `If you are unsure between a one-time payment and a subscription, compare [one-time payment vs. subscription](/en/blog/${BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"]}). To get to know your customers better, you can also [create a customer satisfaction survey](/en/blog/${BLOG_SLUG_EN["como-hacer-una-encuesta-de-satisfaccion-del-cliente"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "Do I have to program the NFC myself?",
        a: "No. We program the NFC and generate the QR code with your Google review link before shipping your plate, so it arrives ready to use.",
      },
      {
        q: "What details do you ask for after I buy?",
        a: "Your Google review link or your business's exact name as it appears on Google. We ask over WhatsApp to configure your plate before producing it.",
      },
      {
        q: "Do my customers need to install an app?",
        a: "No. They just tap their phone to read the NFC or scan the QR with the camera, with nothing to install.",
      },
      {
        q: "Is there a subscription or monthly fee?",
        a: "No. It's a one-time payment and the plate needs no app or subscription to work.",
      },
      {
        q: "How do I stick it down?",
        a: "The Plate has adhesive on the back, ready to stick on a counter, register, or table. The Stand needs no glue: it has its own base and stands upright on a flat surface.",
      },
      {
        q: "What are the sizes?",
        a: "The Plate is 12 × 12 cm and 0.2 cm thick. The Stand is 12.75 cm tall and 7.6 cm wide, with a 5 cm deep base.",
      },
      {
        q: "What colors does it come in?",
        a: "White and black, at the same price in both.",
      },
      {
        q: "What if my business changes its name or listing?",
        a: "Message us on WhatsApp. Depending on the case, the same plate can be reprogrammed or a new one may be needed.",
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: [BLOG_SLUG_EN["placas-resenas-google-pago-unico-vs-suscripcion"], BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"], BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"], BLOG_SLUG_EN["placa-resenas-google-para-consultorios"], BLOG_SLUG_EN["placa-resenas-google-para-restaurantes"], BLOG_SLUG_EN["placa-resenas-google-para-salones-esteticas-y-barberias"], BLOG_SLUG_EN["placa-resenas-google-para-planners-y-eventos"], BLOG_SLUG_EN["como-hacer-una-encuesta-de-satisfaccion-del-cliente"]],
  },
  {
    slug: BLOG_SLUG_EN["papeleria-personalizada-vs-plantillas-genericas"],
    title: "Custom Stationery vs. Generic Templates: What Actually Changes",
    metaTitle: "Custom Stationery vs. Generic Templates",
    description:
      "Custom stationery vs. generic templates: what changes for a wedding, an event or your brand, and when custom design is worth it.",
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-11",
    intro:
      "When you're quoting stationery, it's easy to run into two very different kinds of supplier: one who sells you a generic template already made, and one who designs the piece around your event or brand from scratch. Both solve \"having printed stationery,\" but they don't solve the same problem. If you're planning a wedding, a baptism, a quinceañera or a gift for someone special, the difference shows on the table. Here's what changes between custom design and a template, and when each one makes sense.",
    sections: [
      {
        heading: "What a generic template is (and why it's so cheap)",
        body: [
          "A generic template is a ready-made design mold where you only change a detail, like your name or the date, without touching the composition. The print shop decides the typography, colors and layout, not you. It's cheap because the same mold is reused across many different customers.",
          "The problem isn't that it looks bad, it's that it doesn't look like you: it's common to run into another business using the exact same template, just with the name swapped. Events work the same way: if your guests already saw that invitation at another party, the detail loses its \"this was made for us\" effect.",
        ],
      },
      {
        heading: "Custom design vs. template: what changes for your brand",
        body: [
          "With custom design, the piece is built from scratch with your colors, your typography if you already have one, and the real details of your event, business or practice. With a template you pick from a closed catalog and fill in fields. The difference is control: you decide how it looks, not the mold.",
          `That matters more than it seems for custom stationery: it's the piece your guest, customer or patient literally holds in their hand, so it communicates as much as your logo on your storefront. For your business, see the guide to [custom stationery for businesses](/en/blog/${BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"]}).`,
          "The other practical difference is the process: with custom design we send you a digital proof of the final design before printing, so you approve it (or ask for changes) before a single piece goes into production.",
        ],
        table: {
          headers: ["", "Generic template", "Custom design"],
          rows: [
            ["Starting point", "The supplier's ready-made mold", "Your details, colors and style"],
            ["What you can change", "Name, date or logo", "Layout, typography, copy and format"],
            ["Proof before printing", "Depends on the supplier", "Digital proof you approve"],
            ["Risk of looking like someone else's", "High", "Low, the piece is built with you"],
          ],
        },
      },
      {
        heading: "For weddings and events: why custom detail shows",
        body: [
          "At an event, stationery is what your guests touch, read and sometimes take home. When the menu, the invitation and the sticker share a style and carry the real names for the occasion, the event looks planned. A loose template rarely achieves that coherence across pieces.",
          `At Yume we handle wedding menus, invitations, stickers for weddings and events, temporary tattoos and candy boxes by quote. If you already have a color palette or a visual reference, we use it as the base so every piece looks like one family. If you're putting a wedding together, start with the [custom wedding menu](/en/blog/${BLOG_SLUG_EN["menu-de-boda-personalizado"]}), usually the piece that shines most on the table. You can also see how to [order custom invitations](/en/blog/${BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"]}) and ideas for [wedding stickers](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}).`,
          "If you're a wedding or event planner, the flow is the same: send us the event details on WhatsApp, we send the digital proof and, once your client approves it, it goes into production. That way you can show the design before a single piece is printed.",
        ],
      },
      {
        heading: "When a template does make sense",
        body: [
          "A template can be enough if the piece is temporary, internal or single-use, and doesn't need to stand out. It also works for a quick start when you haven't defined your identity yet. If the piece represents your brand or your event to other people, custom design is usually worth the difference.",
          "A useful question: will anyone else see this piece and associate it with you or your event? If yes, it should be yours. If it's a draft, a test or something thrown away after use, a template is a reasonable option.",
        ],
      },
      {
        heading: "Why choose a custom print shop in Guadalajara",
        body: [
          "Yume operates as a custom print shop in Guadalajara, not a template shop. Every prescription pad, label or piece of stationery is designed around the real details of whoever orders it, goes through a digital proof you approve, and ships across Mexico from Guadalajara.",
          "If you already have a logo or brand identity, we adapt it directly into the piece; if you don't, we build it with you before reaching the digital proof stage. Either way, what you get is a piece that's actually yours, not a template with your name stamped on it.",
          `The 100-sheet [custom medical prescription pad](/en/products/medical-prescription-pads) costs $${recetarioPrice("sin-diseno")} MXN if you already have your design and $${recetarioPrice("con-diseno")} MXN if we design it with you. For invitations, wedding menus and other event pieces we quote on WhatsApp based on quantity and format.`,
        ],
      },
      {
        heading: "How to start your custom order",
        body: [
          "Message us on WhatsApp with the type of piece, the quantity and, if you have them, your logo or style references. We send a digital proof and nothing is produced until you approve it. Then you receive your order by parcel or pick it up at a Casa Blanca branch.",
          `Once the proof is approved, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. For an event with a date, quote early so there's room for adjustments. For the full step by step, see how to [order custom stationery online](/en/blog/${BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between custom stationery and a generic template?",
        a: "A template is a ready-made mold where you only change a few details. Custom stationery is designed around your colors, copy and style, and goes through a digital proof you approve before production.",
      },
      {
        q: "Is anything printed before I approve the design?",
        a: "No. Every order goes through a digital proof first and nothing goes into production until you approve it.",
      },
      {
        q: "Can I order stationery for a wedding or event?",
        a: "Yes. We quote wedding menus, invitations, stickers for weddings and events, temporary tattoos and candy boxes on WhatsApp. Tell us the type of event, the date and the estimated quantity.",
      },
      {
        q: "How much do labels with my logo cost?",
        a: `100 pieces (small size) cost $${priceOf("stickers-logo-personalizado", 100)} MXN.`,
      },
      {
        q: "How long does my order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, Casa Blanca pickup takes ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days and home delivery ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we produce in Guadalajara and ship anywhere in Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["recetario-medico-personalizado", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["papeleria-personalizada-para-negocios-jalisco"], BLOG_SLUG_EN["como-pedir-papeleria-personalizada-en-linea"], BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-empaques-de-negocio"],
    title: "Guide to Stickers for Business Packaging: How to Use Them and What to Order",
    metaTitle: "Stickers for Business Packaging: What to Order",
    description:
      "How to use stickers for business and event packaging: sealing boxes and bags, what to order, what file to send, and how to request your digital proof.",
    category: "Guides",
    publishedAt: "2026-09-23",
    intro:
      "Packaging is one of the easiest touchpoints to improve: you don't need to change your box or bag, just seal or decorate it with a sticker bearing your logo, your name, or the names of the people being celebrated. This guide covers the most common uses for business and event packaging stickers, what to order, what file to send, and how to get a quote.",
    sections: [
      {
        heading: "What business packaging stickers are used for",
        body: [
          "Business packaging stickers can seal a bag or box, identify the product, and add a branded detail without changing the packaging. They go on the flap, lid, or front and work just as well for a shop, a wedding gift, or a welcome kit.",
          "The uses we see most often are sealing the flap of a paper or kraft bag, closing a cardboard box, labeling a jar lid, or sticking one directly onto a product such as a candle, soap, or cosmetic. In each case, the sticker does two jobs at once: it seals the packaging and identifies it as yours.",
          "Our logo stickers and labels are water-resistant, according to the product page. If your packaging will travel or be handled a lot, confirm over WhatsApp which material best suits your needs before deciding.",
        ],
      },
      {
        heading: "Where to place a sticker on each type of packaging",
        body: [
          "Each package calls for a different placement: on a bag, the sticker goes on the flap to seal it; on a gift box, on the lid or closure; and on a card or guest favor, in a corner or in the center. Choose the spot before deciding on the size.",
          "Thinking about placement first helps you avoid ordering a sticker that covers the box design or is too small for the flap. If you have the packaging on hand, measure it and send us the measurement along with your logo.",
        ],
        table: {
          headers: ["Packaging", "Where the sticker goes", "What it does"],
          rows: [
            ["Paper or kraft bag", "On the flap", "Seals the bag and displays your brand"],
            ["Cardboard or gift box", "On the lid or closure", "Closes and identifies the box"],
            ["Jar or product", "On the lid or directly on the product", "Labels the product"],
            ["Card or guest favor", "In a corner or in the center", "Personalizes the favor"],
          ],
        },
      },
      {
        heading: "Stickers for event packaging: weddings, gifts, and kits",
        body: [
          "At an event, a sticker turns simple packaging into a thoughtful detail: it seals a favor bag, closes a gift box, or identifies a welcome kit with the names of the people being celebrated or the company logo. Stickers are ordered by piece, so you can match the quantity to your guest count.",
          "They work for weddings, baptisms, quinceañeras, baby showers, posadas, and company events. If you organize events for other people, you can order a different design for each event and approve it in the digital proof before production.",
          "If you're also considering a detail for the candy table, see our [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara): you can repeat the sticker's colors and name so everything looks coordinated.",
        ],
      },
      {
        heading: "Custom packaging labels: what to order",
        body: [
          "When ordering, decide on four things: the cut, finish, quantity, and size. At Yume you can choose die-cut or kiss-cut, with a matte, glossy, or holographic finish. All our stickers have high-quality BOPP lamination. They are sold by piece, not by sheet, and you receive a digital proof to approve before printing.",
          "For your business or event logo, see [stickers with your logo](/en/products/custom-logo-stickers), available from 50 pieces. If you want to turn a character, pet, or photo into a sticker, [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) are available from 40 pieces. The holographic finish has an extra cost per piece.",
          "Because you order the exact quantity, you don't buy extras just to fill a sheet. For vinyl stickers, the digital proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments. If you're unsure about materials, read the comparison of [vinyl versus paper](/en/blog/vinyl-vs-paper-stickers-differences).",
        ],
      },
      {
        heading: "What file to send and what to check before printing",
        body: [
          "Send your logo in the best format you have and check that nothing important is too close to the edge. As a general reference, some print shops ask for vector artwork or images of at least 300 PPI, and each shop has its own template. Confirm the measurements with the person printing your order.",
          "At Yume, you can send your logo as a PNG, PDF, AI, or SVG with a transparent background directly over WhatsApp. If you don't have a finished logo yet, we can also help you create a simple one to get started.",
          "Bleed: this is the design margin that extends beyond the cut line. As general references, some providers use 1/16 inch and others recommend 1/8 inch (3 mm). This is not a universal standard: it varies by provider.",
          "Margins and text: as a general reference, logos, QR codes, and key text should be at least 1/8 inch (3 mm) inside the cut line. Another reference suggests body text should exceed 6 pt and the brand name or important information should exceed 8 pt. It's helpful to view the file at 100%, its actual print size.",
        ],
      },
      {
        heading: "Timing and quotes over WhatsApp",
        body: [
          "For a quote, message us over WhatsApp with your logo and the quantity and size you want. We'll prepare a digital proof before printing, and nothing is produced without your approval. We produce in Guadalajara and ship throughout Mexico, so the process is the same for a local event or one in another state.",
          "If your packaging is for a specific date, such as a wedding or posada, order ahead and check the guide to [sticker order timelines](/en/blog/how-long-do-custom-stickers-take-to-arrive).",
          "If you're still deciding whether your brand needs a few or many stickers, the guide to [stickers for small or large brands](/en/blog/stickers-for-small-vs-large-brands) can help you consider the quantity.",
        ],
      },
    ],
    faq: [
      {
        q: "Are stickers sold by the sheet?",
        a: "No. They are sold by piece count, so you order the exact quantity you need.",
      },
      {
        q: "What is the minimum order?",
        a: "Stickers and labels with your logo start at 50 pieces. Custom vinyl stickers, for any design, character, or photo, start at 40 pieces.",
      },
      {
        q: "Which cuts and finishes can I choose?",
        a: "Die-cut or kiss-cut, with a matte, glossy, or holographic finish. Holographic has an extra cost per piece.",
      },
      {
        q: "What file format can I send?",
        a: "You can send your logo as a PNG, PDF, AI, or SVG with a transparent background over WhatsApp. As a general reference, some providers ask for vector artwork or images of at least 300 PPI.",
      },
      {
        q: "How much bleed does the design need?",
        a: "It depends on the provider: as general references, some use 1/16 inch and others recommend 1/8 inch (3 mm). These are not universal standards, so confirm with the printer's template.",
      },
      {
        q: "Will I see the design before printing?",
        a: "Yes. We send you a digital proof and print nothing without your approval. For vinyl stickers, it normally arrives within 24 hours of payment, with up to 2 rounds of adjustments.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-para-marca-pequena-vs-grande"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-marca-pequena-vs-grande"],
    title: "Stickers for Small vs. Large Brands: How Many to Order",
    metaTitle: "Stickers for Small vs. Large Brands",
    description: `How many stickers to order if your brand is small or large, or for an event. 100 pieces (small size): $${priceOf("stickers-logo-personalizado", 100)} MXN, with a digital proof.`,
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-10-26",
    intro:
      "A brand that's just starting and one that already sells often don't need the same number of stickers, and an event doesn't either: a wedding with 80 guests, a company holiday party, or a gift for someone special calls for a different count. At Yume stickers sell by piece count, not by sheet, so you can order what you actually need. Here's how to pick the right quantity for your stage, what each option costs, and what to expect from the process.",
    sections: [
      {
        heading: "If your brand is small: get in without committing to a big order",
        body: [
          `If your brand is small, order the minimum: 50 pieces of Custom Logo Stickers ($${priceOf("stickers-logo-personalizado", 50)} MXN) or 40 pieces of Custom Vinyl Stickers ($${priceOf("stickers-vinil-impermeable", 40)} MXN). They sell by piece count, not by full sheet, so you don't tie up money in inventory that will take months to use.`,
          "If you're just testing your brand or sell at local markets now and then, a small order lets you see how people react to your design and adjust before committing to a larger quantity.",
          "A well-made sticker also works as a brand detail: sealing a gift bag, closing a box, or going along with an order. For packaging ideas, see our guide to stickers for business packaging.",
        ],
      },
      {
        heading: "If your brand already sells often: the per-piece price drops",
        body: [
          `If you already sell often, ordering more makes sense: 100 pieces (small size) cost $${priceOf("stickers-logo-personalizado", 100)} MXN for custom logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl.`,
          "It's the same process and the same provider: you pay less per piece and nothing else changes. If you need more than the quantity selector shows, request a quote over WhatsApp and we'll adjust the order.",
          "The table below shows the total and the per-piece price at typical quantities, taken from the catalog.",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "If it's for an event or a gift: count guests, not sales",
        body: [
          "If the sticker is for a wedding, baptism, quinceañera, or company holiday party, don't count sales: count people. One piece per guest if they go on bags or bottles, one per envelope if you're sealing invitations, plus a few extra for tables, signs, and photos. If your guest list is under the minimum, the minimum is still 50 or 40 pieces, and the extras work for tables and photos.",
          "The sticker carries the name, date, or theme of the celebration, so each guest takes home a keepsake with their name instead of a generic favor. For uses, sizes, and formats, read our guide to stickers for weddings, events, and parties.",
          "If you also have invitations or a wedding menu, use the same design on everything: the event looks planned, not put together from loose pieces.",
        ],
      },
      {
        heading: "How to pick the right quantity for your stage",
        body: [
          "Choose based on what you know today. If you don't know how many you'll use, start with the minimum (50 or 40 pieces) and reorder as it runs out. For an event, order close to your real guest count.",
          "The process is identical in every case: you send your logo or design, we send a digital proof, you approve it, and it gets produced. The only thing that changes is the quantity you pick.",
          "You also don't have to decide everything at once. You can order a first batch, see how it gets used, and repeat the same design later without starting over.",
        ],
      },
      {
        heading: "Which material and cut to choose, whatever your order size",
        body: [
          "Choose vinyl if the sticker will get wet, sit in the sun, or get scratched, and choose die-cut if you want it to follow the exact outline of your design. Yume's vinyl resists water, sun, and scratches, according to the product page. Each product lets you pick between die-cut and kiss-cut when you order.",
          "You also pick the finish: matte, glossy, or holographic. All of our stickers come with high-quality BOPP lamination. Holographic has an extra per-piece cost you see on the product page. If you're unsure about material or cut, these two guides help: vinyl vs. paper stickers and die-cut vs. kiss-cut.",
        ],
      },
      {
        heading: "How long it takes and how it's delivered",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} MXN and branch pickup $${CASABLANCA_PRICE} MXN; on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both are free. If your order has a fixed date, order with some margin to adjust the proof before production. More details in our guide to how long a sticker order takes.`,
        ],
      },
      {
        heading: "How to get a quote for yours",
        body: [
          "Send us your logo or design over WhatsApp (PNG, PDF, AI, or SVG with a transparent background work best), the quantity, and the size you want. We prepare a digital proof, and nothing is produced until you approve it. We produce in Guadalajara and ship across Mexico.",
          "If you don't have a finished design yet, tell us what it's for and we'll work it out together. You can also compare options in our guide to where to print custom stickers in Mexico.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the minimum sticker order?",
        a: "50 pieces for Custom Logo Stickers and 40 pieces for Custom Vinyl Stickers. They sell by piece count, not by sheet.",
      },
      {
        q: "How much do stickers cost if I'm just starting?",
        a: `The minimum costs $${priceOf("stickers-logo-personalizado", 50)} MXN for 50 custom logo stickers and $${priceOf("stickers-vinil-impermeable", 40)} MXN for 40 vinyl stickers. 100 pieces (small size): $${priceOf("stickers-logo-personalizado", 100)} MXN for logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl.`,
      },
      {
        q: "Does the price change with size?",
        a: `Yes: the per-piece price depends on size. Small (up to 4 cm) is the base price, medium (5 to 6 cm) adds $1.50 per piece and large (7 to 8 cm) adds $3. For example, 200 small vinyl pieces cost $${priceOf("stickers-vinil-impermeable", 200)} MXN.`,
      },
      {
        q: "Can I use the stickers for an event instead of a business?",
        a: "Yes. You can order stickers with names, a date, or the theme of your wedding, quinceañera, baptism, baby shower, or company event. Send us your design or idea and we'll send a digital proof before printing.",
      },
      {
        q: "Are the stickers water-resistant?",
        a: "Vinyl stickers resist water, sun, and scratches, and the logo stickers are water-resistant, according to each product page.",
      },
      {
        q: "How long does an order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [
      BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"],
      BLOG_SLUG_EN["stickers-para-empaques-de-negocio"],
      BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"],
      BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"],
      BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"],
      BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"],
    ],
  },
  {
    slug: BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"],
    title: "Stickers for Weddings, Events, and Parties: Ideas and How to Order",
    metaTitle: "Stickers for Weddings, Events, and Parties",
    description: `Stickers for weddings, events, and parties: uses, sizes, and formats. 100 pieces (small size): $${priceOf("stickers-logo-personalizado", 100)} MXN, with a digital proof and shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-11",
    intro:
      "A sticker with the couple's names, the date, or the party theme turns a favor bag or box into a detail that looks planned. This guide explains how to use stickers for weddings, events, and parties on favor bags, boxes, envelopes, and bottles, which format to order, how many to buy, and how far in advance to order for weddings, quinceañeras, baptisms, and parties.",
    sections: [
      {
        heading: "Stickers for weddings, events, and parties: why they make a favor special",
        body: [
          "A custom sticker with names, a date, or a theme turns a generic favor into a detail made for your event. It appears in photos, seals bags, boxes, and bottles, and keeps a consistent look across the table. It works for weddings, quinceañeras, baptisms, and children's parties.",
          "A trend toward distinctive, functional favors with their own aesthetic makes a simple label a way to personalize the detail. A sticker with names or a date serves that purpose.",
        ],
      },
      {
        heading: "Custom stickers for favor bags",
        body: [
          "To seal a favor bag, order a sticker with the couple's initials, the date, or the guest of honor's name. Stickers are sold by the piece, so you can order close to the number of guests, and you receive a digital proof before printing.",
          "These ideas work for different celebrations:",
          "Wedding: the couple's initials and the date for favor bags, invitation envelopes, or jars on the candy table. Quinceañera: the honoree's name or the party theme on bags, bottles, and keepsakes.",
          "Baby shower, baptism, or first communion: the guest of honor's name or a theme icon on small boxes and favor bags. Kids' party: the theme's character or design on favor boxes and surprise bags. Bachelorette party or company event: a phrase, a logo, or the event name on bottles and gifts for attendees.",
        ],
      },
      {
        heading: "Favor boxes and other packaging",
        body: [
          "On a favor box, the sticker serves as a seal or a label with the event name. It can also go on invitation envelopes, candy table jars, and bottles for the toast. Choose vinyl if the packaging might get wet: Yume's vinyl resists water, sun, and scratches.",
          `If you're unsure between vinyl and paper, see [vinyl vs. paper stickers](/en/blog/${BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"]}). If the favor is a candy box, see [wedding favor boxes](/en/blog/${BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"]}), which pair well with a matching sticker.`,
        ],
      },
      {
        heading: "What format to order for your packaging",
        body: [
          "When ordering, choose the cut: die-cut, which follows the exact shape of your design, or kiss-cut. You also choose a matte, glossy, or holographic finish; holographic costs extra per piece. All our stickers have high-quality BOPP lamination. Send us what you plan to seal and see the result in the digital proof.",
          `For more on the difference between cuts, read [die-cut vs. kiss-cut](/en/blog/${BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"]}).`,
          "For a logo or the couple's monogram, [custom logo stickers](/en/products/custom-logo-stickers) resist water. For any other design, character, or themed illustration, order [vinyl stickers](/en/products/waterproof-vinyl-stickers). At Yume they are sold by piece count, not by sheet.",
        ],
      },
      {
        heading: "How to match the sticker to the event palette",
        body: [
          "Use the same palette, typeface, and initials on the sticker, invitation, and menu, and the event reads as one piece. Define the design once and order each piece using the same file, so colors and style match across the event stationery.",
          `If you don't have your stationery yet, start with [custom invitations](/en/blog/${BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"]}) and the [custom wedding menu](/en/blog/${BLOG_SLUG_EN["menu-de-boda-personalizado"]}), and leave the stickers for last: the design will already be set. For younger guests, there are also [temporary tattoos for parties](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]}).`,
          "If you're organizing a client's event, send us the event design and quantity: we work with a digital proof and direct communication on WhatsApp.",
        ],
      },
      {
        heading: "How many stickers to order and what they cost",
        body: [
          `100 pieces (small size): $${priceOf("stickers-logo-personalizado", 100)} MXN for custom logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl stickers. The minimum order is 50 pieces for logo stickers and 40 for vinyl, so you can order close to your event's real guest or table count.`,
          "Price by quantity:",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long it takes and how far in advance to order",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} MXN and branch pickup $${CASABLANCA_PRICE} MXN; on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more, both are free. For the full process, read [how long a sticker order takes](/en/blog/${BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]}).`,
        ],
      },
      {
        heading: "Where to print your stickers and how to request a quote",
        body: [
          "To get a quote, send us the names, the date, the style or colors (or your finished design), and the quantity you need. We prepare a digital proof before printing, and nothing is produced until you approve it. We produce in Guadalajara and ship across Mexico.",
          `If you're comparing options, see [where to print custom stickers](/en/blog/${BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]}). If your event already has invitations or a custom menu, let us know: we can match the sticker to the same design. The process is the same no matter where your wedding, event, or party is.`,
        ],
      },
    ],
    faq: [
      {
        q: "What sticker works for sealing favor bags?",
        a: "You can order it die-cut or kiss-cut, with a matte, glossy, or holographic finish. Send us the design, names, and date, and see the digital proof before printing.",
      },
      {
        q: "How much do stickers for my event cost?",
        a: `100 pieces (small size): $${priceOf("stickers-logo-personalizado", 100)} MXN for custom logo stickers and $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl stickers.`,
      },
      {
        q: "What is the minimum order?",
        a: "50 pieces for custom logo stickers and 40 pieces for vinyl stickers. They sell by piece count, not by sheet.",
      },
      {
        q: "Can I order stickers with my wedding names and date?",
        a: "Yes. Send us the names, the date, and the style or colors you want, or your finished design, and we'll send a digital proof before printing.",
      },
      {
        q: "Can I match the sticker to my invitations or menu?",
        a: "Yes. If your event already has invitations or a custom menu, let us know and we can match the sticker to the same design.",
      },
      {
        q: "Do the stickers hold up on bottles and coolers?",
        a: "Vinyl stickers are printed on premium vinyl that resists water, sun, and scratches, according to the product page. For anything that gets wet, order them in vinyl.",
      },
      {
        q: "How long does an order take?",
        a: `The digital proof normally arrives within 24 hours of payment. Once you approve it, your order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE} MXN, free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"], BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"], BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"],
    title: "Temporary Tattoos for Parties in Mexico: Ideas by Event",
    metaTitle: "Temporary Tattoos for Parties in Mexico: Ideas",
    description:
      "Temporary tattoo ideas for parties in Mexico, from weddings and quinceañeras to baby showers and posadas, with skin care tips and how to request a quote.",
    category: "Guides",
    publishedAt: "2026-09-23",
    modifiedAt: "2026-11-03",
    intro:
      `A temporary tattoo with the couple's initials, the guest of honor's name or the party theme is a detail guests wear for the rest of the event. Here are temporary tattoo ideas for parties in Mexico, organized by event: weddings, bachelorette parties, quinceañeras, first communions, baptisms, baby showers, birthdays, graduations, posadas and company events, plus skin care tips and what we need to prepare a quote. If you are looking for the version for brands, see our guide to [temporary tattoos for events](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"]}).`,
    sections: [
      {
        heading: "Temporary tattoos for parties in Mexico: which type to choose",
        body: [
          "For a party in Mexico, choose decal temporary tattoos with a design made for the event: the name, date, theme or color palette of the celebration. They are applied on the spot, worn during the party and appear in photos. That makes the detail feel planned for your celebration.",
          "In stores and marketplaces, they often appear as a generic product for birthdays or bachelorette parties. We make them for each event: tell us the occasion and we adapt the design.",
        ],
      },
      {
        heading: "Temporary tattoo ideas by event type",
        body: [
          "Each party calls for a different detail. This table brings together design ideas for ten types of event in Mexico and when to hand them out. These are starting points: tell us your event's name, date, theme and color palette and we will put together a proposal for you.",
        ],
        table: {
          headers: ["Event", "Design idea", "When to hand them out"],
          rows: [
            ["Wedding", "The couple's initials or date, in the wedding palette", "Welcome table or favor as guests leave"],
            ["Bachelorette party", "A phrase, date or group icon", "At the beginning, for photos"],
            ["Quinceañera", "The guest of honor's name and the party theme", "During the reception"],
            ["First communion", "The child's name and a simple symbol", "As guests arrive"],
            ["Baptism", "Name and date in soft colors", "As a favor on the table"],
            ["Baby shower", "The baby's name or the party theme", "Welcome table"],
            ["Birthday", "Name and age, or characters from the theme", "As an activity for guests"],
            ["Graduation", "Name, graduating class or school", "After the ceremony"],
            ["Posada", "A Christmas motif and the group's name", "On arrival"],
            ["Corporate event", "Logo and event name", "At registration or in the welcome kit"],
          ],
        },
      },
      {
        heading: "How are temporary tattoos used during the party?",
        body: [
          "You can hand them out in three ways: at the welcome table as a detail for each guest, as a favor at the end of the party, or at an application station where guests put them on during the event. The choice depends on the type of party and how much time your guests have.",
          "At a wedding or quinceañera, the welcome table can work well because guests wear them from the start. At a birthday or baby shower, an application station becomes an activity. If a planner is organizing the celebration, they can include it in the event flow.",
        ],
      },
      {
        heading: "Skin care with temporary party tattoos",
        body: [
          "Before the event, consider testing a small area of skin, especially for guests with sensitive skin, and do not apply the tattoo to irritated skin. The FDA warns that inks or colorants can irritate skin and cause rashes. This test is a general recommendation, not an FDA rule.",
          "According to a news report on the FDA warning, temporary tattoos should use only colors approved for cosmetics on the skin. Specialists cited in an article about seasonal makeup recommend testing for allergies at least 24 hours beforehand and keeping skin moisturized.",
          "In that same article, COFEPRIS recommends avoiding makeup from informal establishments and checking the label. It discusses makeup, not temporary tattoos, so we use it only as an analogy. We did not find a specific Mexican standard for temporary tattoos.",
        ],
      },
      {
        heading: "How long do temporary tattoos for parties last?",
        body: [
          "It depends on the type of product. According to the FDA, temporary decal tattoos fade in hours or days, while henna tattoos can last up to 3 or 4 weeks. Decals are the shorter-lived option, so think of them as a keepsake for the day of the event.",
          `That is why we do not promise an exact number of days: duration varies by product and each person's skin. For more detail, read [how long they last and how to remove them](/en/blog/${BLOG_SLUG_EN["cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"]}).`,
        ],
      },
      {
        heading: "Decal or black henna: which to choose for a party",
        body: [
          "For a party with guests, choose decal tattoos. The FDA says black henna may contain hair dye or other colorants to make it last longer, and that it has not approved henna or hair dye for use on skin. Avoid black henna from an improvised stand.",
          "If someone offers henna for your party, ask what it contains before applying it to your guests' skin. A decal tattoo with your own design also lets you control how each piece looks because you approve it beforehand in a digital proof.",
        ],
      },
      {
        heading: "Temporary tattoos for planners and company events",
        body: [
          "If you organize weddings or events, we work on an event-by-event basis: we send a digital proof before production and you speak directly with us by message. You decide the quantity based on the number of guests. This works for wedding planners, event planners and companies organizing posadas, anniversaries or launches.",
          "When the event already has a color palette, invitation or decorations, send us a photo or reference and we will adapt the design to match. At a company event, the tattoo can carry the logo and event name and be handed out at registration.",
        ],
      },
      {
        heading: "What we need to quote temporary tattoos for your party",
        body: [
          "We need the design, name or phrase you want, or a reference to the theme if you do not have a design yet, the approximate size and the quantity based on your guest count. With those details we prepare your quote and, before production, send a digital proof for you to approve how it will look.",
          "We produce in Guadalajara and ship anywhere in Mexico, so you can request a quote wherever the celebration takes place. Write to us with your event date and we will confirm the timing. Temporary tattoos are quoted by message and do not have a published price. Visit the [custom temporary tattoos](/en/products/custom-temporary-tattoos) page to start your quote.",
        ],
      },
      {
        heading: "How to match them with the rest of your stationery",
        body: [
          "If you are already customizing invitations, a wedding menu or stickers for the celebration, use the same design or color palette on the temporary tattoos. That makes them feel part of the same celebration. Tell us which other pieces you have in progress so we can coordinate the design.",
          "If you also want a detail that can be stuck on and kept, see our [custom vinyl stickers](/en/products/waterproof-vinyl-stickers). Using the same design on both gives your event a coordinated, carefully considered look.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    faq: [
      { q: "How long do temporary tattoos last?", a: "According to the FDA, temporary decal tattoos fade in hours or days, and henna tattoos can last up to 3 or 4 weeks. Duration depends on the type of product and each person's skin." },
      { q: "Are temporary tattoos safe for a party?", a: "The FDA warns that inks or colorants can irritate skin and cause rashes, so consider testing a small area before the event. We did not find a specific Mexican standard for temporary tattoos." },
      { q: "How far in advance should I order them?", a: "It depends on your design and event date. Write to us by message with the date and we will confirm the timing. Before production we send you a digital proof to approve." },
      { q: "Can they be used at children's parties?", a: "Yes, they can be an activity at a children's party, with characters or designs from the theme. Test a small area first, especially if a child has sensitive skin." },
      { q: "Is black henna a good idea for a party?", a: "The FDA says black henna may contain hair dye or other colorants to make it last longer, and has not approved henna or hair dye for use on skin. For a party, choose decal tattoos." },
      { q: "What do I need to request a quote for temporary tattoos?", a: "The design, name or phrase (or a reference to the theme), the approximate size and the quantity based on the number of guests." },
      { q: "How much do temporary tattoos cost?", a: "They are quoted by message based on your design and quantity, because there is no published price on the site." },
      { q: "Do you ship throughout Mexico?", a: "Yes. We produce in Guadalajara and ship anywhere in Mexico." },
    ],
    sources: [
      { label: "FDA: Tattoos and Permanent Makeup", url: "https://www.fda.gov/consumers/free-publications-women/tatuajes-y-maquillaje-permanente-tattoos-and-permanent-makeup" },
      { label: "News report: FDA warning on temporary tattoos and their effects", url: "https://www.vozdeamerica.com/a/fda-advierte-sobre-tatuajes-temporales-y-consecuencias/1916158.html" },
      { label: "Skin care recommendations for Halloween or Day of the Dead makeup", url: "https://www.cronica.com.mx/tendencias/2026/10/29/te-vas-a-maquillar-para-halloween-o-dia-de-muertos-estas-son-las-mejores-recomendaciones-para-evitar-danos-y-cuidar-tu-piel/" },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"], BLOG_SLUG_EN["cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"]],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'm interested in getting a quote for temporary tattoos for a wedding, event, or party.",
  },
  {
    slug: BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"],
    title: "Where to Print Custom Stickers in Mexico: What You Need and How to Order",
    metaTitle: "Where to Print Custom Stickers: 2026 Prices",
    description: "Where to print custom stickers in Mexico and how much they cost: from $3 per piece depending on size, what file to send, and shipping nationwide.",
    category: "Guides",
    publishedAt: "2026-09-29",
    modifiedAt: "2026-11-12",
    intro:
      "If you're looking for where to print custom stickers in Mexico, most options fall into two groups: printing them yourself at home (with vinyl and a special printer) or ordering them from a print shop that already has die-cutting equipment. This guide covers the second option: what to have ready, what to send, and how to order your stickers online, whether for your brand, a wedding, or any event, without buying equipment or visiting a print shop in person.",
    sections: [
      {
        heading: "How much does it cost to print custom stickers in Mexico?",
        body: [
          "Vinyl stickers start at $3.50 each (minimum 40) and labels with your logo start at $3 each (minimum 50), depending on size: small up to 4 cm, medium from 5 to 6 cm, and large from 7 to 8 cm. Shipping throughout Mexico is free on orders of $750 MXN or more.",
          "They are sold by piece, not by sheet, so you can order the exact quantity you need. Both cuts and the matte and glossy finishes cost the same; holographic adds $0.50 per piece. For example, 100 small vinyl stickers cost $350 and 100 medium ones cost $500.",
          "Price by quantity (minimum order is 50 pieces for logo labels and 40 for vinyl):",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "Printing stickers at home vs. ordering them printed",
        body: [
          "If you want die-cut, water-resistant stickers in the quantity you need, the most practical option is to order them printed. Ordering them saves you from buying cutting equipment and cutting each piece yourself. Printing at home only makes sense for a few pieces if you already have a printer and tools.",
          "Many searches start with phrases like ‘stickers to print’ or ‘custom stickers.’ Anyone printing at home has to cut each piece individually.",
          "For an order of 40, 50, or 100 pieces, ordering them is usually simplest: there's no need to buy a machine or learn how to use it. See the product at [custom vinyl stickers](/en/products/waterproof-vinyl-stickers).",
        ],
      },
      {
        heading: "How to choose where to print custom stickers",
        body: [
          "Compare five things before choosing: whether they send a digital proof before printing, the cuts they offer, the minimum number of pieces, whether they charge per piece or per sheet, and the shipping cost. This helps you compare similar offers without focusing only on the listed price.",
          "At Yume, we send you a digital proof and nothing is produced until you approve it. You choose die cut or kiss cut, the minimum is 40 vinyl pieces and 50 logo labels, they are sold per piece, and shipping is free from $750 MXN.",
          "To see how this process compares with other online options, read [Yume vs. online print shops](/en/blog/yume-vs-online-sticker-print-shops).",
        ],
      },
      {
        heading: "Vinyl stickers or logo labels: which should you order?",
        body: [
          "Stickers and Labels with Your Logo are designed for your business logo and start at 50 pieces. Custom Vinyl Stickers work for any design, character, pet, or photo and start at 40 pieces. They use the same type of vinyl, with different minimums and prices per piece.",
          "For your own design, a character, or a photo of your pet, see [custom vinyl stickers](/en/products/waterproof-vinyl-stickers). If you want to seal or identify items with your brand, see [labels with your logo](/en/products/custom-logo-stickers).",
        ],
      },
      {
        heading: "What to have ready before requesting a quote",
        body: [
          "You need three things: your design, logo, or photo; the approximate size you want; and the number of pieces. It doesn't have to be finished: a reference or sketch is enough for us to start a quote and make adjustments before the digital proof. If it's for an event, include the date.",
          "The size doesn't have to be exact: if you're unsure, tell us where you'll stick it and we'll adjust it in the digital proof. For quantity, you can specify the exact number you need from the minimum upward.",
          "If your design has a special shape or a key color, such as one from an event palette, let us know from the start and we'll review it with you before production. With your event date, we can review the timing with you before you approve the digital proof.",
        ],
      },
      {
        heading: "Cut and finish: how to choose your custom stickers",
        body: [
          "When ordering, you choose the cut (die cut or kiss cut) and finish (matte, glossy, or holographic). All our stickers have high-quality BOPP lamination. Both cuts and the matte and glossy finishes cost the same; holographic adds $0.50 per piece.",
          "Die cutting cuts the material and backing along the design's outline, leaving each sticker separate, ideal for sealing a small bag or sticking on a glass. Kiss cutting cuts only the material and leaves the backing intact, useful if you plan to hand them out on a sheet or apply them one by one. Find more detail in [die cut vs. kiss cut](/en/blog/die-cut-vs-kiss-cut-stickers).",
          "The vinyl is premium and resists water, sun, and scratches. Labels with your logo are also water-resistant. If you're choosing between vinyl and paper, read about the [differences between vinyl and paper](/en/blog/vinyl-vs-paper-stickers-differences).",
        ],
      },
      {
        heading: "How ordering custom stickers online works",
        body: [
          "Send your design and quantity by WhatsApp or through the online store, and we'll confirm the price and send you a digital proof before printing. You can request size or color adjustments; once you approve it, your order is produced and shipped anywhere in Mexico.",
          "The digital proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments. To find out when your order will arrive, see [how long an order takes](/en/blog/how-long-do-custom-stickers-take-to-arrive).",
        ],
      },
      {
        heading: "Custom stickers for weddings, birthdays, and events",
        body: [
          "Yes, you can order custom stickers for an event, with the names of the people being celebrated, a design for the occasion, or your own drawing. Orders start at 40 pieces, so you can match the quantity to your guest count. Tell us your event date via WhatsApp and we'll review the timing with you.",
          "For example, use a design with names and the date on wedding or christening favors, or the guest of honor's favorite character at a birthday party. You can use them to seal small bags or gift boxes, or accompany a table favor. If you prefer a photo, that's possible too: we'll turn it into a die-cut sticker. Find more ideas in [stickers for weddings and events](/en/blog/stickers-for-weddings-events-and-parties) and [pet stickers](/en/blog/custom-pet-stickers).",
          "If you're organizing someone else's event as a wedding or event planner, send us the design your client approved, the quantity, and the date via WhatsApp. We work with a digital proof and direct communication, so each event gets its own design without surprises.",
        ],
      },
      {
        heading: "How far ahead to order your custom stickers",
        body: [
          "Order with time to spare: each order is made to order, and the clock starts when you approve the digital proof, not when you pay. Tell us your event date via WhatsApp and we'll review production and shipping times with you before you approve it.",
          "A useful order of steps: first decide on the design and quantity, then send your design, take your time reviewing the digital proof (which includes up to 2 rounds of adjustments), and only then approve it.",
        ],
      },
      {
        heading: "Where to print custom stickers in Guadalajara and the rest of Mexico",
        body: [
          "We produce in Guadalajara, Jalisco, and ship throughout Mexico; if you're in the metropolitan area, you can pick up at one of 11 Casa Blanca branches. The whole process is remote, so ordering from another city is just as easy.",
          "Home delivery costs $199 MXN and pickup at a Casa Blanca branch costs $20 MXN; both are free on orders of $750 MXN or more.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the minimum number of stickers I can order?",
        a: "The minimum is 40 vinyl stickers and 50 labels with your logo. They are sold by piece, not by sheet, and you can specify the exact quantity you need.",
      },
      {
        q: "How much do 100 custom stickers cost?",
        a: "Vinyl stickers start at $3.50 each and labels with your logo at $3 each, depending on size (small up to 4 cm, medium 5 to 6 cm, large 7 to 8 cm). For example, 100 small vinyl stickers cost $350 and 100 medium ones cost $500.",
      },
      {
        q: "What should I send to order my stickers?",
        a: "Your design, logo, photo, or a reference, the approximate size, and the quantity. It doesn't have to be finished: a reference or sketch is enough to start a quote and make adjustments in the digital proof.",
      },
      {
        q: "What is the difference between die cut and kiss cut?",
        a: "Die cutting cuts the material and backing along the outline, leaving each sticker separate. Kiss cutting cuts only the material and leaves the backing. At Yume, you choose either when ordering, and the price is the same.",
      },
      {
        q: "Can I see how they look before printing?",
        a: "Yes. We send you a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "Do the stickers resist water and sun?",
        a: "Vinyl stickers are made from premium vinyl resistant to water, sun, and scratches. Labels with your logo are water-resistant.",
      },
      {
        q: "Can I choose die cut or kiss cut and the finish?",
        a: "Yes, you choose the cut (die cut or kiss cut) and finish (matte, glossy, or holographic) when ordering. Holographic adds $0.50 per piece; the others do not.",
      },
      {
        q: "Can I make stickers with a photo of my pet or a character?",
        a: "Yes. Send us the photo or reference and we'll prepare a digital proof before printing. You can also order them with characters or your own designs.",
      },
      {
        q: "Can I order stickers for a wedding or event?",
        a: "Yes. You can order them with the names of the people being celebrated, a date, or a design for the occasion, starting at 40 vinyl pieces. Tell us your event date via WhatsApp and we'll review the timing with you.",
      },
      {
        q: "How much is shipping, and is pickup available in Guadalajara?",
        a: "Home delivery throughout Mexico costs $199 MXN and is free from $750 MXN. If you're in Guadalajara or its metropolitan area, you can pick up at one of 11 Casa Blanca branches for $20 MXN, also free from $750 MXN.",
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]],
  },
  {
    slug: BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"],
    title: "How Long Do Custom Stickers Take to Arrive? Real Turnaround Times",
    metaTitle: "How Long Does a Custom Sticker Order Take?",
    description:
      "How long a custom sticker order takes at Yume: digital proof, production, and shipping across Mexico or pickup in Guadalajara.",
    category: "Guides",
    publishedAt: "2026-10-06",
    intro:
      "If you need your stickers by a certain date, whether for a wedding, birthday, baby shower, company event, or launch, the first thing to know is how many days each stage takes. These are the real turnaround times for a Yume order, from payment to having it in your hands, and how to count backwards from your date so you can order on time.",
    sections: [
      {
        heading: "How long does a custom sticker order take to arrive?",
        body: [
          `From the moment you approve the digital proof, an order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara. The digital proof normally arrives within 24 hours of payment.`,
          "The full timeline has four parts: the digital proof, your approval, production, and shipping or pickup. The table shows how long each stage takes; the total starts when you approve the proof, not when you pay.",
        ],
        table: {
          headers: ["Stage", "Time"],
          rows: [
            ["Digital proof (up to 2 rounds of changes included)", "Normally within 24 hours of payment"],
            ["Production", `${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve the proof`],
            ["Home delivery (anywhere in Mexico)", `${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days`],
            ["Pickup at a Casa Blanca branch (Guadalajara)", `${PICKUP_EXTRA_DAYS} business day`],
            ["Total from proof approval", `${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to your door · ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} at a branch`],
          ],
        },
      },
      {
        heading: "The stages of your order, one by one",
        body: [
          "A sticker order goes through the digital proof, your approval, production, and delivery, either to your door or at a branch. The proof normally arrives within 24 hours of payment and includes up to 2 rounds of changes. Nothing is printed without your approval, and the production clock starts when you approve it.",
          "Digital proof: this is an image of how your sticker will look. If you want a change, you can request up to 2 rounds of changes.",
          `Production: once you approve the proof, your order goes into production, which takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days.`,
          `Delivery: home delivery anywhere in Mexico adds ${NATIONAL_TRANSIT_DAYS.min} to ${NATIONAL_TRANSIT_DAYS.max} business days. If you pick up at a Casa Blanca branch in Guadalajara, it adds ${PICKUP_EXTRA_DAYS} business day.`,
        ],
      },
      {
        heading: "What makes it faster or slower",
        body: [
          "The biggest factor is how quickly you approve the digital proof, because the production clock starts then, not when you pay. The days are business days: weekends do not count, and public holidays are not included in the estimate either, so it is approximate.",
          "If you request changes to the proof, your approval may come later, delaying the start of production. Having your logo or design ready from the start (in PNG, PDF, AI, or SVG) avoids back-and-forth.",
          "Payment matters too: the proof normally arrives within 24 hours after you pay. Choosing home delivery or pickup in Guadalajara changes the total, as shown in the table.",
        ],
      },
      {
        heading: "How to plan backwards from your event date",
        body: [
          `Start with your event date and count backwards: first shipping or pickup, then the ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days for production and, before all that, the days you take to approve the digital proof. Add them up to find the day you need to pay, and leave a margin in case you request a change.`,
          `For home delivery, the estimate is ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days from approval; for pickup, it is ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS}. Add the days you take to review and approve the proof to that figure.`,
          "This calculation works for a wedding, birthday, baby shower, or company event. If you organize several events, make the same calculation for each one using its own date. For high-demand dates such as Christmas or graduations, it is best to order at least two weeks ahead.",
          "Once you know your date, choose between [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), for any design, character, or photo, and [stickers with your logo](/en/products/custom-logo-stickers), for your brand or event. All our stickers have high-quality BOPP lamination, and you choose the finish.",
        ],
      },
      {
        heading: "What to tell us if your order is for an event",
        body: [
          "If your order is for a wedding, birthday, baby shower, or company event, tell us the date in your first message. With that information, we can check the timeline with you before you pay. It is the safest way to avoid surprises when the event cannot be moved.",
          "If your deadline is very tight, message us on WhatsApp before paying and we will check together whether there is enough time. Also tell us whether you prefer home delivery or pickup in Guadalajara, because it changes the calculation.",
          `If you are still comparing options, see [where to print stickers in Mexico](/en/blog/${BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]}) and [Yume compared with other print shops](/en/blog/${BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"]}).`,
        ],
      },
      {
        heading: "What if I am in Guadalajara?",
        body: [
          "You can pick your order up at one of the Casa Blanca branches in the metro area: it adds just 1 business day to production. Pickup costs $20 MXN and is free on orders of $750 MXN or more, just like home delivery.",
          "There are 11 Casa Blanca branches in the Guadalajara metro area, so you can choose the one closest to you.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"], BLOG_SLUG_EN["yume-vs-imprentas-online-stickers"]],
    faq: [
      {
        q: "How long does a custom sticker order take?",
        a: `From the moment you approve the digital proof, it takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days for home delivery anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
      },
      {
        q: "When does production time start?",
        a: "It starts when you approve the digital proof, not when you pay. The sooner you review and approve it, the sooner your order goes into production.",
      },
      {
        q: "How long does the digital proof take?",
        a: "The digital proof normally arrives within 24 hours after your payment and includes up to 2 rounds of changes.",
      },
      {
        q: "Is anything printed before I approve the proof?",
        a: "No. We do not print anything without your approval of the digital proof.",
      },
      {
        q: "Do weekends and public holidays count towards the timeline?",
        a: "The timeline is in business days, so weekends do not count. Public holidays are not included in the estimate, which is why it is approximate.",
      },
      {
        q: "How long does it take if I pick up my order in Guadalajara?",
        a: `Pickup at a Casa Blanca branch in the Guadalajara metro area adds ${PICKUP_EXTRA_DAYS} business day to production. Pickup costs $20 MXN and is free on orders of $750 MXN or more.`,
      },
      {
        q: "What if my event deadline is very tight?",
        a: "Message us on WhatsApp before paying with your event date, and we will check together whether there is enough time.",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"],
    title: "Die Cut vs Kiss Cut Stickers: Which Cut Should You Choose?",
    metaTitle: "Die Cut vs Kiss Cut Stickers: Which to Choose",
    description:
      "Die cut vs kiss cut stickers (troquelado and semitroquelado): which to choose for favors, gifts and events, and how to order at Yume with a digital proof first.",
    category: "Guides",
    publishedAt: "2026-10-16",
    modifiedAt: "2026-11-10",
    intro:
      "When you order custom stickers you run into two terms: die cut and kiss cut (troquelado and semitroquelado in Spanish). Yume makes both and you choose when you order. This guide explains what each one is, how they differ, and which fits your use, whether it is a wedding favor, a detail for your guests, a gift, or your brand's packaging.",
    sections: [
      {
        heading: "What is a die cut sticker and what is a kiss cut sticker?",
        body: [
          "A die cut sticker (troquelado) is cut all the way through, vinyl and backing together, and you get it loose. A kiss cut sticker (semitroquelado) is cut through the vinyl only and stays on its backing sheet. Both follow the outline of your design.",
          "A die cut sticker (troquelado) is cut all the way through along the outline of your design: the vinyl and its backing are cut together, so you get each sticker loose, in the exact shape of your logo, character, or photo.",
          "A kiss cut sticker (semitroquelado) is cut through the vinyl only, not the backing sheet. The outline is marked, but the backing sheet stays whole. You peel the stickers off one by one when you use them, and the whole sheet makes them easier to peel and handle.",
        ],
        table: {
          headers: ["Feature", "Die cut (troquelado)", "Kiss cut (semitroquelado)"],
          rows: [
            ["What is cut", "Vinyl and backing, all the way", "Vinyl only; the backing stays whole"],
            ["How you receive it", "Each sticker loose", "Stickers on their backing sheet"],
            ["Sticker shape", "The shape of your design", "The shape of your design"],
          ],
        },
      },
      {
        heading: "Which one fits your use?",
        body: [
          "Choose die cut if each sticker is handed out or applied one at a time, and kiss cut if you want them kept together and protected until you use them. Both use the same premium vinyl and the same shape of your design: what changes is the cut and how the order arrives.",
          "Die cut is especially useful when the sticker shape is part of the design, because each piece arrives cut out and ready to use: a seal for a bag, a gift for a customer, or a detail for each guest.",
          "Kiss cut makes sense when you want your stickers kept together and protected until you use them: for a market stall or trade show, for handing out at an event, or for holding a stock to use over time. The backing sheet keeps them organized and clean.",
          "If you are unsure, think about how you will use them: one at a time, or in batches.",
        ],
        table: {
          headers: ["If your situation is...", "Choose"],
          rows: [
            ["Each person receives a loose sticker", "Die cut"],
            ["You will hand out or apply stickers from a sheet", "Kiss cut"],
            ["The cut-out shape is part of the design", "Die cut"],
            ["You want to peel them more easily", "Kiss cut"],
          ],
        },
      },
      {
        heading: "Which cut fits favors, weddings, and events?",
        body: [
          "For an event, die cut is usually the most practical if each guest takes home their own sticker, and kiss cut if you or your planner will hand them out or place them on tables. It is a usage guide, not a rule: either one works at an event.",
          "Picture a sticker with the couple's names and the date sealing a small favor bag, or one with the guest of honor's name on the dessert table. In those cases die cut arrives ready to stick, with nobody having to cut anything.",
          "If you will assemble the details calmly before the event, for example putting a sticker on each box or bag over an afternoon, kiss cut keeps them organized on their sheet while you work.",
          `For reference, an industry source notes that the extra backing on a kiss cut sticker can carry additional information, such as a logo or care instructions. If you are interested in using the backing this way, message us on WhatsApp before paying and we will check. For more ideas, read our [guide to stickers for weddings and events](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}).`,
        ],
      },
      {
        heading: "Which cut fits your brand, packaging, or gifts?",
        body: [
          "If you seal packages or apply labels one by one, die cut saves you steps. If you take stickers to a fair or hand them out in batches, kiss cut keeps them together. Either way, you pick the cut on the product page before paying.",
          "For your business logo, the option is [Custom Logo Stickers](/en/products/custom-logo-stickers). For a character, a pet, a photo, or any other design, it is [Waterproof Vinyl Stickers](/en/products/waterproof-vinyl-stickers). Both accept both cuts, so the product choice and the cut choice are independent.",
          `At Yume stickers are sold by piece count, not by sheet. If you are deciding between vinyl and paper, see our [vinyl vs paper stickers comparison](/en/blog/${BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"]}).`,
        ],
      },
      {
        heading: "How to choose the cut type when you order",
        body: [
          "You pick the cut, Die cut or Kiss cut, on the product page before adding to your cart, together with the finish: matte, glossy, or holographic. All of our stickers come with high-quality BOPP lamination. What you choose is saved with your order, and before printing you receive a digital proof to confirm how it looks.",
          "The holographic finish has an extra cost of $0.50 per piece, which you see when you select it. The cut does not add a cost per piece.",
          "The digital proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments. Nothing is printed without your approval, so if you are buying for a client, you can show them the design before production.",
          "If you are not sure which fits your case, message us on WhatsApp before paying and we will go over it with you.",
        ],
      },
      {
        heading: "How much do die cut and kiss cut stickers cost?",
        body: [
          `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} MXN for Waterproof Vinyl Stickers and $${priceOf("stickers-logo-personalizado", 100)} MXN for Custom Logo Stickers. The minimum order is 40 pieces for vinyl and 50 for logo stickers.`,
          "Choosing die cut or kiss cut does not change the base price in the table. Order the exact quantity you need: you pick or type it when you place your order.",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How long does my order take and how do I receive it?",
        body: [
          `From the moment you approve the digital proof, your order arrives at home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. We produce in Guadalajara and ship across Mexico, and the days are counted from your proof approval.`,
          `Shipping costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. If your event has a date, count these days backward and leave room for the digital proof. For more detail, read [how long a custom sticker order takes](/en/blog/${BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between die cut and kiss cut?",
        a: "Die cut (troquelado) is cut all the way through, vinyl and backing, and you get it loose. Kiss cut (semitroquelado) is cut through the vinyl only and arrives on its backing sheet. In both cases the shape follows your design outline.",
      },
      {
        q: "What do die cut and kiss cut mean?",
        a: "They are the English names: die cut means troquelado and kiss cut means semitroquelado.",
      },
      {
        q: "Which is easier to peel?",
        a: "Kiss cut. Because the backing stays whole, this cut is easier to peel and handle.",
      },
      {
        q: "What can the backing of a kiss cut sticker be used for?",
        a: "According to an industry source, the extra backing can carry information such as a logo or care instructions. If you want to use it this way at Yume, message us on WhatsApp before paying to confirm.",
      },
      {
        q: "Can I choose the cut when I order?",
        a: "Yes. On the Waterproof Vinyl Stickers and Custom Logo Stickers pages you pick Die cut or Kiss cut before adding to your cart.",
      },
      {
        q: "Does the cut change the material or the price?",
        a: "No. Both cuts are made on the same premium vinyl. The cut is a design and usage decision and does not change the base price in the table.",
      },
      {
        q: "Which finishes can I choose?",
        a: "Matte, glossy, or holographic. Holographic costs $0.50 more per piece.",
      },
      {
        q: "How much do they cost?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} MXN for vinyl and $${priceOf("stickers-logo-personalizado", 100)} MXN for logo stickers. The minimum is 40 pieces for vinyl and 50 for logo stickers.`,
      },
      {
        q: "Can I see it before it is printed?",
        a: "Yes. You receive a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "How long does it take and how much is shipping?",
        a: `From proof approval, it arrives at home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days. Shipping costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["cuanto-duran-los-tatuajes-temporales-y-como-quitarlos"],
    title: "How long do temporary tattoos last and how do you remove them?",
    metaTitle: "How long temporary tattoos last and how to remove them",
    description:
      "How long temporary tattoos last, what affects their duration, how to apply and remove them with oil, and why to avoid black henna.",
    category: "Guides",
    publishedAt: "2026-10-17",
    intro:
      "How long temporary tattoos last is the most common question before a party, wedding, or activation. The short answer: water-transfer tattoos last from hours to a few days, depending on the area of the body and how much they are rubbed. Here is what affects their duration, how to apply them, how to remove them gently, and a warning about black henna.",
    sections: [
      {
        heading: "How long do temporary tattoos last?",
        body: [
          "Water-transfer temporary tattoos last at least 48 hours if they are not rubbed, according to the specifications for the paper we use. Some temporary tattoo shops give a range of 3 to 7 days for decals. This is a reference, not a guarantee: it depends on the area of the body and friction.",
          "For a party, a wedding, or a one-day activation that is plenty: these tattoos are made for celebrations, not to last for weeks. Constant rubbing, tight clothing, and any oil, lotion, or alcohol that touches the tattoo shorten its life the most.",
        ],
      },
      {
        heading: "What affects duration: body area and product type",
        body: [
          "Duration depends mainly on the area of the body and the type of product. Where there is friction, sweat, or oil, the tattoo wears off sooner; where there is little friction, it lasts longer. A decal, semipermanent ink, and henna do not last the same amount of time, so it helps to know which one you have.",
          "On parts that move or rub against clothing, such as the wrist, neck, or knees, they wear off sooner. On the arm or leg, with less friction, they last longer. Shops mention 1 to 3 days in areas with oil, sweat, or friction, and 5 to 7 days or more in areas with little friction.",
          "According to those same shops, water-transfer decals last 3 to 7 days, semipermanent ink can last 10 to 14 days or longer, and henna lasts longer than a decal. These figures come from sellers, without an independent study, so use them as a guide.",
        ],
      },
      {
        heading: "How to apply them, step by step",
        body: [
          "Apply them in four steps: remove the plastic film, place the tattoo design-side down on clean, dry skin, wet the paper thoroughly with water and press for 20 to 30 seconds, then gently remove the paper. Wait a few seconds for the tattoo to dry before touching it.",
          "That is the procedure on the instruction card we use at Yume. Two details help it turn out better: clean, dry skin with no lotion before application, and keeping the paper still while you press it.",
        ],
      },
      {
        heading: "How to prepare your skin so they last longer",
        body: [
          "To help them last longer, shop guides recommend washing the skin with soap and water, drying it completely, and avoiding lotion or oil beforehand because they form a barrier against the adhesive. They also suggest avoiding friction, sun, and water after application. This is advice from sellers, not from a study.",
          "If you are wearing the tattoo to a party, apply it to freshly washed, dry skin and save lotions and oils for later, when you want to remove it.",
        ],
      },
      {
        heading: "How to remove temporary tattoos",
        body: [
          "The usual way to remove one is with baby, coconut, or olive oil: apply it to the tattoo, leave it on for a moment, rub gently with cotton, and wash with soap and water. There is no need to scrape or use objects.",
          "Isopropyl alcohol is stronger and dries out the skin. Use it sparingly, test it on a small area first, keep it away from the eyes and mucous membranes, and do not use it on irritated skin.",
          "After removing the tattoo, moisturize the skin. Repeat the oil step if any of the design remains.",
        ],
      },
      {
        heading: "Black henna: why it is not the same as a temporary tattoo",
        body: [
          "Black henna is not the same as a water-transfer temporary tattoo. The US FDA warns that it is often darkened with PPD (paraphenylenediamine), a hair dye that US law does not permit in cosmetics for the skin. This is a US warning, not a Mexican regulation.",
          "Reactions can appear immediately or up to 2 to 3 weeks later. They include redness, blisters, weeping lesions, loss of pigment, increased sensitivity to sunlight, and permanent scars; some cases required emergency care. Someone who becomes sensitized may also react to latex, hair dyes, and textile dyes.",
          "The FDA also states that traditional henna is approved only for hair, not for skin.",
        ],
      },
      {
        heading: "Where they can go and what precautions to take",
        body: [
          "In the photos of our orders they are applied on the arm, wrist, hand, neck, and leg. They are for external use only: do not apply them on the eyes or on broken skin. If you have sensitive skin or allergies, try a small one first; for children, an adult should apply and supervise.",
          "The paper maker gives no minimum age and publishes no dermatological certifications, so we would rather say so plainly than promise what we cannot verify.",
        ],
      },
      {
        heading: "Custom temporary tattoos for parties and events",
        body: [
          "At Yume we make custom temporary tattoos with your logo, your design, or your photos: stamps, characters, couple or childhood photos. They are quoted on WhatsApp based on design, size, and quantity. Production takes 2 to 3 business days after the 50% deposit, and we ship across Mexico or you can pick them up in Guadalajara.",
          "See the service at [custom temporary tattoos](/en/products/custom-temporary-tattoos).",
          `More ideas: [tattoos for events](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"]}), [tattoos for weddings](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]}), and [vinyl stickers](/en/products/waterproof-vinyl-stickers) with the same design.`,
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    faq: [
      {
        q: "How long do temporary tattoos last?",
        a: "The maker of the transfer paper we use says they last at least 48 hours if they are not rubbed. Some shops give a range of 3 to 7 days for decals. This is a reference: it varies with the area of the body and friction.",
      },
      {
        q: "What shortens the life of a temporary tattoo?",
        a: "Constant rubbing, tight clothing, sweat, and any oil, lotion, or alcohol that touches the tattoo. Temporary tattoo shops mention 1 to 3 days in areas with oil, sweat, or friction.",
      },
      {
        q: "How do you remove a temporary tattoo?",
        a: "With body, baby, coconut, or olive oil: apply it, leave it on for a moment, rub gently with cotton, and wash with soap and water. There is no need to scrape. Moisturize the skin afterward.",
      },
      {
        q: "Can I remove it with alcohol?",
        a: "Isopropyl alcohol is stronger and dries out the skin. Use it sparingly, test it on a small area first, keep it away from the eyes and mucous membranes, and do not use it on irritated skin.",
      },
      {
        q: "What is black henna and why is there a warning about it?",
        a: "According to the US FDA, black henna is often darkened with PPD, a hair dye that US law does not permit in cosmetics for the skin. Reactions can appear up to 2 to 3 weeks later.",
      },
      {
        q: "Can children wear them?",
        a: "They are for external use. If there is sensitive skin or an allergy, try a small one first; for children, an adult should apply and supervise. The paper maker gives no minimum age.",
      },
      {
        q: "How long does an order of custom temporary tattoos take?",
        a: "Production takes 2 to 3 business days after the 50% deposit. They are quoted on WhatsApp based on design, size, and quantity, and we ship across Mexico or you can pick them up in Guadalajara.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["tatuajes-temporales-personalizados-para-eventos"], BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'd like a quote for custom temporary tattoos.\n\nSize:\nQuantity:\nDo I already have a design? (yes / no):",
  },
  // Dulceros cluster lives in its own file (blog-dulceros.en.ts).
  ...dulceroPostsEn,
  {
    slug: BLOG_SLUG_EN["etiquetas-escolares-personalizadas-guadalajara"],
    title: "Custom school labels in Guadalajara: back-to-school guide",
    metaTitle: "Custom school labels: back-to-school guide",
    description: `Custom school labels in Guadalajara: what goes on them, where to stick them, how many to order. 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}, digital proof, shipping across Mexico.`,
    category: "Guides",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-11-10",
    intro:
      "School labels are stickers with a child's name (and sometimes their class or a drawing) to mark notebooks, lunch boxes, bottles, and backpacks so nothing gets lost or mixed up in the classroom. At Yume we make them in water-resistant vinyl, with the design you choose. All of our stickers come with high-quality BOPP lamination, and you choose the finish. This guide covers what goes on them, which school supplies they suit, how many to order, what they cost, when to order during the 2026-2027 school year, and how they reach your home or a branch in Guadalajara.",
    sections: [
      {
        heading: "Custom school labels: what goes on them",
        body: [
          "A school label carries, at minimum, the child's name in large, easy-to-read letters. Many families add the grade or class, plus a drawing or icon so younger kids recognize their things before they can read.",
          "For older kids, something simple works better: first and last name, with good contrast between the letters and the background. For siblings, pick a different color for each so they know which is theirs without reading.",
          "If you prefer, you can also add a contact phone number to backpack and lunch box labels. Tell us what you want to include and we will prepare it with you before printing.",
        ],
      },
      {
        heading: "Which school supplies can you put labels on?",
        body: [
          "School labels go on notebooks, books, pencil cases, lunch boxes, water bottles, thermoses, and backpacks. According to the product page, Yume vinyl resists water, sun, and scratches, so it is intended for items that get wet, travel around, and are cleaned often.",
          "For names and designs, use [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), available from 40 pieces. For school or class kits with a logo, there are [labels with your logo](/en/products/custom-logo-stickers), available from 50 pieces.",
        ],
      },
      {
        heading: "How to order custom school labels",
        body: [
          `They are quoted on WhatsApp: send us the name (or names, for siblings), the design you like, and how many pieces you need. We work with vinyl stickers from 40 pieces. 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}.`,
          "We send a digital proof, normally within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval. Here is the price by quantity:",
        ],
        table: {
          ...sizeTable(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How many labels should you order for the school year?",
        body: [
          "Count every item on the supply list and multiply by the number of children. Since labels are sold by the piece rather than by the sheet, you can order close to the number you actually need, with a minimum of 40 pieces.",
          `If you already have the supply list, send it to us on WhatsApp and we will help you work out how many labels you need. To choose the material, see the difference between [vinyl and paper](/en/blog/${BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"]}).`,
        ],
      },
      {
        heading: "When should you order labels during the 2026-2027 school year?",
        body: [
          "The 2026-2027 basic education school year started on August 31, 2026 and ends on July 9, 2027. With the school year underway, back-to-school orders have already passed, but there is time to plan new or replacement labels before classes resume on January 7, 2027.",
          "These dates from the SEP calendar can help you plan an order:",
        ],
        table: {
          headers: ["Date", "Event"],
          rows: [
            ["August 31, 2026", "Start of the 2026-2027 school year"],
            ["December 21, 2026 to January 5, 2027", "Winter break"],
            ["January 7, 2027", "Classes resume"],
            ["March 22 to April 3, 2027", "Holy Week"],
            ["July 9, 2027", "End of the school year"],
          ],
        },
      },
      {
        heading: "How can you receive labels in Guadalajara or across Mexico?",
        body: [
          `Once you approve the digital proof, the order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days. The digital proof normally arrives within 24 hours of payment.`,
          `We produce in Guadalajara and you can choose the branch at checkout. For each stage, see [how long a custom sticker order takes](/en/blog/${BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]}).`,
        ],
      },
    ],
    faq: [
      {
        q: "How much do custom school labels cost?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}.`,
      },
      {
        q: "What is the minimum order?",
        a: "40 pieces. They are sold by the piece, not by the sheet, so you can order close to the number you really need.",
      },
      {
        q: "Are the labels water-resistant?",
        a: "They are printed on premium vinyl that resists water, sun, and scratches, per the product page.",
      },
      {
        q: "Can I order labels with the names of several siblings?",
        a: "Yes. Send us the names, the design you like, and the quantity, and we send a digital proof before printing.",
      },
      {
        q: "When do classes resume after winter break?",
        a: "According to the SEP calendar for the 2026-2027 school year, winter break runs from December 21, 2026 to January 5, 2027, and classes resume on January 7, 2027.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE}, free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. In the Guadalajara metro area you can also pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches for $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]],
    serviceLink: { href: "/en/products/waterproof-vinyl-stickers", label: "See custom vinyl stickers" },
    quoteMessage: "Hi, I'd like a quote for custom school labels.\n\nName(s):\nApproximate quantity:\nDo I already have a design? (yes / no):",
  },
  {
    slug: BLOG_SLUG_EN["etiquetas-con-nombre-para-botellas-loncheras-y-mochilas"],
    title: "Name labels for bottles, lunch boxes, and backpacks: where to stick them and how to care for them",
    metaTitle: "Name labels for bottles, lunch boxes, and backpacks",
    description:
      "Where to stick name labels on bottles, lunch boxes, and backpacks, how to apply them so they last, and which design to pick. Water-resistant vinyl. All of our stickers come with high-quality BOPP lamination, and you choose the finish.",
    category: "Guides",
    publishedAt: "2026-10-17",
    modifiedAt: "2026-10-26",
    intro:
      "A bottle, lunch box, or backpack with no name gets lost more easily, and in a classroom where everyone has the same one, it gets mixed up. A name label fixes that in seconds. This guide covers where to stick it on each item, how to apply it so it lasts, how to care for it during the school year, which design to pick, how many to order, and what they cost. We make them in water-resistant vinyl in Guadalajara and ship across Mexico.",
    sections: [
      {
        heading: "Where to stick a name label on each item",
        body: [
          "Stick the label on a smooth, flat part of each item: on the body of the bottle or thermos, away from the lid and the base; on the lid or a smooth side of the lunch box; and on a flat area outside the backpack. Avoid seams, edges, and raised areas, where a label peels first.",
          "If you would rather the name not show at first glance, you can also stick it inside the backpack. On a pencil case, as on a lunch box, pick a smooth part outside. The table sums up where each one fits best.",
        ],
        table: {
          headers: ["Item", "Where to stick it", "Avoid"],
          rows: [
            ["Bottle or thermos", "On a smooth part of the body", "Near the lid and the base"],
            ["Lunch box", "On the lid or a smooth side", "Seams and edges"],
            ["Backpack", "On a flat area outside, or inside", "Raised pockets and seams"],
            ["Pencil case", "On a smooth part outside", "Zippers and edges"],
          ],
        },
      },
      {
        heading: "How to apply a label so it lasts",
        body: [
          "Clean and dry the surface, peel the backing without touching the adhesive, and press from the center out to push the air out. Then wait a while before the first time it gets wet. With that care, vinyl that resists water, sun, and scratches holds up to daily use.",
          "First, clean the item and let it dry completely. The adhesive needs a clean, dry surface to stick well.",
          "Second, peel the backing carefully and try not to touch the adhesive side with your fingers. Place the center of the label on the spot you picked first.",
          "Third, press with your finger from the center out to the edges so the air escapes and the label lies flat. If the surface is curved, like a bottle, take it slowly and a section at a time.",
          "Finally, let some time pass before it gets wet or goes into the backpack, so the adhesive settles before first use.",
        ],
      },
      {
        heading: "How to care for the labels during the school year",
        body: [
          "The vinyl we use resists water, sun, and scratches, per the product page, but it is not indestructible. To make it last all year, do not scrape the label or leave the item soaking for long. If an edge lifts, check whether it landed on a seam or a raised area.",
          "Bottles and thermoses get wet and washed the most, so they deserve the most care: wash them gently and do not scrub the label with a rough sponge. Lunch boxes and backpacks get dragged and bumped, and the best protection is having stuck the label on a flat area, away from the edges.",
          "If you switch bottles or lunch boxes midway through the year, it is practical to have a few spare labels from the start.",
        ],
      },
      {
        heading: "Which design to choose for a name label",
        body: [
          "Choose large letters and good contrast between the letters and the background so the name reads from a distance. A drawing helps little ones recognize their things; for older kids, something simple with first and last name works better.",
          "For siblings, pick a different color for each so they know which is theirs without reading. You can also add the grade or class, or a contact phone number on the backpack and lunch box labels.",
          "You do not need to have the design ready. Tell us which name and style you like and we send a digital proof to approve before printing.",
        ],
      },
      {
        heading: "How many name labels to order",
        body: [
          "Count each item you want to mark, multiply by the number of kids, and add a few spares. They are sold by the piece, not by the sheet, with a minimum of 40 pieces, so you can order close to the number you actually need.",
          "An example: a bottle, a thermos, a lunch box, a backpack, and a pencil case are 5 labels per child; with two siblings that is 10, and with spares for notebooks and books you reach the 40-piece minimum. If you also want to mark school supplies, read our guide to custom school labels, which includes the full count.",
          "If you are not sure how many you need, send us your list of items and we will help you work it out.",
        ],
      },
      {
        heading: "How much name labels cost and how to get a quote",
        body: [
          `Custom vinyl labels start at 40 pieces. 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}. Send us the name, the design, and the quantity on WhatsApp, and we send a digital proof before printing.`,
          "The proof normally arrives within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval. Here is the price by quantity:",
        ],
        table: {
          ...sizeTable(["stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "When they arrive and what shipping costs",
        body: [
          `Once you approve the proof, the order reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days anywhere in Mexico, or is ready for pickup at a Casa Blanca branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} and branch pickup $${CASABLANCA_PRICE}; on purchases of $${FREE_SHIPPING_THRESHOLD} or more, both are free. Order a few weeks before school starts. For each stage in detail, see how long custom stickers take to arrive.`,
          "If you wonder why we use vinyl and not paper, we explain it in the vinyl vs. paper guide. And if you are after labels for your business rather than for school, see how they are ordered on a roll, sheet, or by the piece.",
        ],
      },
    ],
    faq: [
      {
        q: "Where is the best place to stick a label on a bottle?",
        a: "On a smooth part of the body, away from the lid and the base. Avoid seams, edges, and raised areas, where a label peels first.",
      },
      {
        q: "Do the labels hold up to water?",
        a: "They are printed on vinyl that resists water, sun, and scratches, per the product page. Even so, do not scrape them or leave the item soaking for long.",
      },
      {
        q: "How much do name labels cost?",
        a: `100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)}.`,
      },
      {
        q: "What is the minimum order?",
        a: "40 pieces. They are sold by the piece, not by the sheet, so you can order close to the number you need.",
      },
      {
        q: "Can I see the label before it is printed?",
        a: "Yes. The digital proof normally arrives within 24 hours of payment, with up to 2 rounds of adjustments. We print nothing without your approval.",
      },
      {
        q: "How long does the order take?",
        a: `Once you approve the proof, it reaches your door in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at Casa Blanca in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: `Yes, we ship across Mexico for $${NATIONAL_SHIPPING_PRICE}, free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. In the Guadalajara metro area you can also pick up at one of ${CASABLANCA_BRANCHES.length} Casa Blanca branches for $${CASABLANCA_PRICE}.`,
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["etiquetas-escolares-personalizadas-guadalajara"], BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"], BLOG_SLUG_EN["stickers-personalizados-para-mascotas"]],
    serviceLink: { href: "/en/products/waterproof-vinyl-stickers", label: "See custom vinyl stickers" },
    quoteMessage: "Hi, I'd like a quote for name labels for bottles, lunch boxes, and backpacks.\n\nName(s):\nApproximate quantity:\nDo I already have a design? (yes / no):",
  },
  {
    slug: BLOG_SLUG_EN["impresion-de-etiquetas-rollo-hoja-o-por-pieza"],
    title: "Custom Label Printing: Roll, Sheet or By the Piece",
    metaTitle: "Label Printing: Roll, Sheet or By the Piece",
    description:
      "Label printing on rolls, sheets or by the piece: which to choose based on quantity, designs and material, with real prices from 50 pieces.",
    category: "Guides",
    publishedAt: "2026-10-20",
    intro:
      "When you're looking for somewhere to print labels, the first decision isn't the design but the format: some print shops work with roll labels, others print full sheets, and others deliver each label cut to its shape. Each format suits a different need, whether it's your business packaging, wedding details or baby shower favors, and choosing the wrong one is the most common way to overpay or end up with labels you can't use.",
    sections: [
      {
        heading: "Label printing: what changes between rolls, sheets and individual pieces",
        body: [
          "The difference is how they arrive and how you apply them. A roll is a continuous strip on a backing, intended for long runs and high volumes. Sheets come precut and are peeled by hand. Individual labels are cut to your design's shape and ordered in the exact quantity you need.",
          "Sheets are an option for testing designs and short seasonal runs, while rolls suit large orders. Labels cut to your design's shape are what we make at Yume.",
          "With those three ideas in mind, the rest of this guide helps you decide based on quantity, application method, number of designs and material.",
        ],
      },
      {
        heading: "Roll labels: for volume and labeling machines",
        body: [
          "Roll labels are useful when you repeat the same design many times and apply them with a labeling machine. You can also apply them by hand from a dispenser, but their real advantage appears in long runs. Yume doesn't have rolls in its catalog, so message us on WhatsApp before ordering if you need them.",
          "Another practical difference is printing: a printable roll needs a dedicated printer. As a general reference, digital presses have no plate or four-color printing charges, while flexography is likely to involve extra charges.",
          "The trade-off is that rolls are usually produced in large runs of the same design: if you're just starting out or change designs often, you end up buying more than you'll use.",
        ],
      },
      {
        heading: "Sheet labels: several on one page",
        body: [
          "A sheet has several precut labels on an 8.5 x 11-inch page that you peel by hand. It's practical for small or occasional needs and for testing a design, and can be printed on standard inkjet or laser printers. Its limitation is the preset sizes and shapes.",
          "If you're thinking of printing at home, our guide on [where to print custom stickers](/en/blog/where-to-print-custom-stickers-mexico) compares printing them yourself with having them made.",
        ],
      },
      {
        heading: "Labels by the piece: cut to your design's shape",
        body: [
          "An individual label follows the outline of your logo or design, and you order an exact quantity rather than a sheet or roll. You can choose die-cut, with each label separate, or kiss-cut, cut to shape on its backing. This is the format we make at Yume, starting at 50 pieces with your logo.",
          "It's the best fit for anyone applying labels by hand who needs variety: packaging, bags, jars, candles, shipping boxes or event details. You can order without committing to a large run, and we'll send you a digital proof to approve before printing.",
          "You can see our [labels with your logo](/en/products/custom-logo-stickers) or [vinyl stickers](/en/products/waterproof-vinyl-stickers) with your design, character or photo.",
        ],
      },
      {
        heading: "Event labels: why you rarely need a roll",
        body: [
          "An event often calls for several designs in small quantities: one for the favors, another for the candy table and another for the glasses. That's why sheets or individual pieces are a better fit, while rolls are suited to repeating the same design many times.",
          "If your wedding, baby shower, christening or company event has a different design for each detail, ordering by the piece lets you get the exact quantity of each: from 50 labels with your logo and from 40 vinyl stickers with your design.",
        ],
      },
      {
        heading: "Material and finish: the format doesn't make labels water-resistant",
        body: [
          "Water resistance comes from the material, not the format. A paper label doesn't become waterproof, and tips for protecting the print work best on a film base. Our labels are vinyl and water-resistant; if there will be ice, coolers or cold bottles, always ask for a resistant material.",
          "Custom Vinyl Stickers also resist sun and scratches. For the finish, choose matte, glossy or holographic (holographic adds $0.50 per piece). All our stickers have high-quality BOPP lamination. See the full comparison in our [vinyl vs. paper](/en/blog/vinyl-vs-paper-stickers-differences) guide.",
          "If you print at home with an inkjet printer, one guide recommends using the photo or glossy paper setting and letting the print dry for at least a few hours, ideally 24. For extra protection, it mentions clear glossy spray varnish or a clear overlay sheet.",
        ],
      },
      {
        heading: "How much label printing by the piece costs",
        body: [
          `100 pieces (small size): see the table for real prices from our catalog. Shipping is separate: $${NATIONAL_SHIPPING_PRICE} MXN anywhere in Mexico or $${CASABLANCA_PRICE} MXN for pickup at a branch in Guadalajara, and it's free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
          "The minimum order is 50 labels with your logo and 40 vinyl stickers, so you can order close to the number you'll actually use.",
        ],
        table: {
          ...sizeTable(["stickers-logo-personalizado", "stickers-vinil-impermeable"], [50, 100, 200, 300], "en"),
        },
      },
      {
        heading: "How to choose in 4 questions",
        body: [
          "Four questions resolve almost everything: how many you need and how many designs, how you'll apply them, what shape your logo is and whether they'll get wet. With those answers, you can decide whether rolls, sheets or individual pieces suit you without buying too many or ending up with labels you can't use.",
          "How many do you need? If it's dozens or hundreds, order by the piece. If it's thousands of the same design every month, it's worth getting a roll quote.",
          "How will you apply them? By hand: by the piece or on sheets. With a labeling machine: on a roll.",
          "What shape is your logo? If it isn't a rectangle or a circle, a label cut to its shape looks much better than a square with a white background around it.",
          "Will it get wet or handled a lot? Then ask for a resistant material such as vinyl, not paper.",
        ],
      },
    ],
    faq: [
      {
        q: "Which is better, roll labels or sheet labels?",
        a: "It depends on how you apply them: rolls if you use a labeling machine or dispenser and order large runs of the same design; sheets or individual pieces if you apply them by hand and need smaller quantities.",
      },
      {
        q: "Can I print sheet labels with my office printer?",
        a: "As a general reference, label sheets can be printed on standard inkjet or laser printers, unlike a printable roll, which needs a dedicated printer.",
      },
      {
        q: "What is the minimum to print labels at Yume?",
        a: "50 pieces for Logo Stickers & Labels and 40 pieces for Custom Vinyl Stickers.",
      },
      {
        q: "How much do 100 custom labels cost?",
        a: `100 pieces (small size): 100 labels with your logo cost $${priceOf("stickers-logo-personalizado", 100)} MXN and 100 vinyl stickers with your design cost $${priceOf("stickers-vinil-impermeable", 100)} MXN.`,
      },
      {
        q: "Do you print roll labels?",
        a: "Roll labels aren't in our catalog: we make die-cut or kiss-cut labels by the piece. If your production uses a labeling machine, message us on WhatsApp before ordering.",
      },
      {
        q: "Are the labels water-resistant?",
        a: "Yes, all our labels and stickers are water-resistant vinyl. The material, not the format, determines resistance: a paper label doesn't become waterproof.",
      },
      {
        q: "How long does printing my labels take?",
        a: `The digital proof arrives within 24 hours of payment. Once you approve it, your order reaches your home in ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days, or is ready for pickup at a branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["stickers-vinil-vs-papel-diferencias"], BLOG_SLUG_EN["donde-imprimir-stickers-personalizados-mexico"]],
  },
  {
    slug: BLOG_SLUG_EN["etiquetas-navidenas-personalizadas"],
    title: "Custom Christmas Labels for Gifts and Bottles",
    metaTitle: "Custom Christmas Labels: Free PDF or Vinyl",
    description:
      "Custom vinyl Christmas labels for gifts, bottles and packaging, or download the free printable PDF. Made in Guadalajara.",
    category: "Guides",
    publishedAt: "2026-10-19",
    intro:
      "A Christmas label with your family name, a message or your business logo turns any gift, bottle or holiday treat bag into something made especially for the person receiving it. Yume's custom Christmas labels are made in vinyl, with your design and in any shape you want. Here's what to put on them, how to use them, which material to choose, what they cost and when to order so they arrive before Christmas.",
    sections: [
      {
        heading: "What goes on custom Christmas labels",
        body: [
          "Custom Christmas labels feature a short message and a seasonal illustration: a tree, an ornament, a star or a snowman. You can also add each person's name, a photo or your business logo with a Christmas touch. Tell us what you want to say and we'll send you a digital proof.",
          "Some messages that work well are ‘Merry Christmas’, ‘With love from the López family’ or ‘Happy holidays 2026’.",
          "The digital proof normally arrives within 24 hours of payment and includes up to 2 rounds of adjustments. We print nothing without your approval.",
        ],
      },
      {
        heading: "How labels for gifts and bottles are used",
        body: [
          "Christmas labels are mainly used on gifts, bottles, holiday treat bags and posada favor boxes. They also work on packaging and boxes for December orders. Because they are water-resistant vinyl, they hold up on bottles coming out of the fridge or bags that get wet.",
          `For gifts, put one on the box or bag instead of a paper tag that can get lost. For bottles of wine, ponche or liquor you're giving away, a label with the recipient's name completely changes the presentation. On holiday treat bags and posada favor boxes, the same label ties the whole set together. For favor boxes, see [custom Christmas favor boxes](/en/blog/${BLOG_SLUG_EN["dulceros-navidenos-personalizados"]}).`,
          `If you have a business, put them on the packaging, bags and boxes for your December orders, or on gifts for your customers. Here are more ideas for [packaging stickers](/en/blog/${BLOG_SLUG_EN["stickers-para-empaques-de-negocio"]}).`,
        ],
      },
      {
        heading: "Christmas labels for posadas and dinners with guests",
        body: [
          "For a posada or dinner with guests, custom Christmas labels can carry each person's name on their gift or glass, while the same design ties the whole table together. For a company event, add your logo and a seasonal message.",
          `If you're organizing your company's posada, see [personalized company posada details](/en/blog/${BLOG_SLUG_EN["detalles-posada-empresa-personalizados"]}). If you're a planner organizing several events, we'll prepare the pieces for each event with a digital proof and direct service via WhatsApp.`,
        ],
      },
      {
        heading: "Which label to choose for each use",
        body: [
          "If the label will go on a bottle in ice or in the fridge, on a bag that gets wet or on something handled often, choose vinyl: it resists water, sunlight and scratches. If you need a sheet for a few indoor gifts, the free PDF may be enough.",
          "For your business logo, use [custom logo labels](/en/products/custom-logo-stickers). For names, characters, pets or photos, choose [custom vinyl stickers](/en/products/waterproof-vinyl-stickers). They use the same type of vinyl, with different minimum quantities and price tiers.",
        ],
      },
      {
        heading: "Free printable Christmas labels",
        body: [
          "Download our free PDF sheet: it has 12 labels per page with space for ‘To’ and ‘From’, in a color version and a black and white version for children to color. Print it at letter size on cardstock or adhesive paper and cut along the dotted line.",
          "For lots of gifts, bottles or packages, printed vinyl labels resist water and carry your own design, name or logo. See real examples in the [work gallery](/en/gallery).",
        ],
      },
      {
        heading: "Shape, finish and price of vinyl labels",
        body: [
          "The cut follows your design's shape: round, ornament-shaped, star-shaped or square. Choose die-cut or kiss-cut when ordering. The finish can be matte, glossy or holographic, with an extra cost per piece for holographic. All our stickers have high-quality BOPP lamination.",
          `First 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} for [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), with a 40-piece minimum, and $${priceOf("stickers-logo-personalizado", 100)} for [custom logo labels](/en/products/custom-logo-stickers), with a 50-piece minimum.`,
          `If you're unsure which cut to choose, compare [die-cut and kiss-cut stickers](/en/blog/${BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"]}).`,
        ],
        table: {
          ...sizeTable(["stickers-vinil-impermeable", "stickers-logo-personalizado"], [100], "en"),
        },
      },
      {
        heading: "When to order for delivery before Christmas",
        body: [
          `The digital proof normally arrives within 24 hours of payment. Once you approve it, the order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your home anywhere in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
          `Using those times, count backward from the date you need the labels and add time for the digital proof. If you're also giving favor boxes, you can order everything together. To understand each stage, see [how long an order takes](/en/blog/${BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"]}).`,
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    faq: [
      {
        q: "How much do custom Christmas labels cost?",
        a: `First 100 pieces (small size): $${priceOf("stickers-vinil-impermeable", 100)} for custom vinyl stickers (40-piece minimum) and $${priceOf("stickers-logo-personalizado", 100)} for custom logo labels (50-piece minimum).`,
      },
      {
        q: "Are there free printable Christmas labels?",
        a: "Yes. You can download a PDF sheet with 12 labels per page and space for To and From, in color and black and white. Print it at letter size.",
      },
      {
        q: "Are vinyl labels water-resistant?",
        a: "Yes. Custom vinyl stickers are made from premium vinyl that resists water, sunlight and scratches, and custom logo labels are water-resistant.",
      },
      {
        q: "What shapes and finishes can I choose?",
        a: "You can choose die-cut or kiss-cut when ordering. The finish can be matte, glossy or holographic; holographic has an extra cost per piece.",
      },
      {
        q: "What's the difference between vinyl stickers and logo labels?",
        a: "They use the same type of vinyl, with different minimum quantities and price tiers. Logo labels are designed for your business logo (from 50 pieces); custom vinyl stickers work for any design, character, pet or photo (from 40 pieces).",
      },
      {
        q: "Can I see the design before it's printed?",
        a: "Yes. You receive a digital proof with up to 2 rounds of adjustments, and we print nothing without your approval.",
      },
      {
        q: "How long do the labels take to arrive?",
        a: `Once you approve the proof, the order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your home in Mexico, or ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days if you pick it up at a Casa Blanca branch in Guadalajara.`,
      },
      {
        q: "Is free shipping or pickup available in Guadalajara?",
        a: `National shipping is free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. In the Guadalajara metro area, you can pick up for $${CASABLANCA_PRICE} at any of the ${CASABLANCA_BRANCHES.length} Casa Blanca parcel branches.`,
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-navidenos-personalizados"], BLOG_SLUG_EN["detalles-posada-empresa-personalizados"], BLOG_SLUG_EN["stickers-para-empaques-de-negocio"], BLOG_SLUG_EN["cuanto-tarda-un-pedido-de-stickers-personalizados"], BLOG_SLUG_EN["troquelado-vs-semitroquelado-stickers"], BLOG_SLUG_EN["buen-fin-2026-stickers-y-dulceros-personalizados"]],
    download: { href: "/descargas/printable-christmas-gift-tags.pdf", label: "Free download: printable Christmas gift tags (PDF, color and black and white)" },
  },
  {
    slug: BLOG_SLUG_EN["souvenirs-de-boda-personalizados"],
    title: "Personalized Wedding Favors: Ideas with Name and Date",
    metaTitle: "Personalized Wedding Favors with Name and Date",
    description:
      "Personalized wedding favors with names and date: favor boxes, stickers and temporary tattoos, how many to order, quantity prices and when to request a quote.",
    category: "Guides",
    publishedAt: "2026-10-28",
    modifiedAt: "2026-11-13",
    intro:
      "Personalized wedding favors turn a table detail into something your guests will want to take home: a keepsake with the couple's names and date in a unique design. Names and date alone are no longer enough; what lasts is a piece designed for your wedding. This guide explains what you can order at Yume, how to give it an elegant design, how many to order, how to match your stationery and when to request a quote so you can prepare without rushing.",
    sections: [
      {
        heading: "What should you give wedding guests?",
        body: [
          "Choose a favor each guest can take home and keep, with the couple's names and date in a unique design. At Yume you can order favor boxes, vinyl stickers and temporary tattoos, and see the design in a digital proof before production.",
          "Below you will see how each of these three pieces works, how many to order based on your guest list, what they cost by quantity and how far ahead to request a quote.",
        ],
      },
      {
        heading: "What makes a personalized wedding favor special?",
        body: [
          "A personalized wedding favor is a small gift each guest takes home with the couple's names, the date or the wedding's design. It thanks them for coming and leaves a tangible keepsake. What makes it valuable is that it has a use, or a place, after the party.",
          "An article published in September 2026 reports a trend toward hyperpersonalization: pieces guests use, display or enjoy instead of disposable magnets, candy or candles. Another suggests a numbered illustration made for the wedding can become decoration, unlike a keepsake printed only with names and date. Both articles are listed under Sources at the end.",
          "Those articles cite examples such as labeled bottles, numbered art and home fragrances. We do not make those. What we make is paper and vinyl with your design, and the idea still applies: a detail made for your wedding, with your colors and your story, not a generic one.",
        ],
      },
      {
        heading: "How do you personalize wedding favors with names and date elegantly?",
        body: [
          "For an elegant result, integrate the names and date into a design using the couple's colors and a detail from their story, instead of leaving them as standalone text. An article suggests pieces with the couple's own colors and illustrations become keepsakes. At Yume you see it first in a digital proof.",
          "The article also mentions two ideas: a neutral, functional design with one piece for every guest, and giving fewer pieces chosen more intentionally. With our paper and vinyl, that means one design for everyone, in your colors, with the names and date integrated into the composition.",
          "When you contact us, tell us your palette and whether there is a detail from your story you want in the design, such as a place, a flower or an illustration. We include it in the digital proof and produce nothing until you approve it.",
        ],
      },
      {
        heading: "Personalized wedding favor ideas with name and date",
        body: [
          "At Yume you can make three kinds of wedding favor: favor boxes with the couple's names, stickers with initials and date to seal your details, and temporary tattoos for the dance floor. All three are designed with you and we show you a digital proof before producing.",
          `Favor boxes: a small handled box in opalina cardstock, with the couple's names and your wedding's theme. It arrives assembled and empty, ready to fill. It can go on the candy table so each guest builds their own, or be placed already filled at each place setting. Explore [personalized favor boxes](/en/products/personalized-party-favor-boxes) and the guide to [favor boxes for weddings, quinceañeras and baby showers](/en/blog/${BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"]}).`,
          `Stickers: initials and date on water-resistant [vinyl stickers](/en/products/waterproof-vinyl-stickers) to seal gift bags, close invitation envelopes or decorate candy table jars. For more ideas, see [stickers for weddings and events](/en/blog/${BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"]}).`,
          `Temporary tattoos: the couple's initials or the date as a detail at the welcome table or on the dance floor. Guests wear them for the rest of the party and they show up in photos. They are quoted by design and quantity. See [custom temporary tattoos](/en/products/custom-temporary-tattoos) and the guide to [temporary tattoos for weddings](/en/blog/${BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"]}).`,
        ],
      },
      {
        heading: "How many wedding favors to order and what do they cost?",
        body: [
          "Order one favor per confirmed guest. At Yume pieces are sold in exact quantities, so start with your guest list: the minimum is 10 favor boxes and 40 vinyl stickers, and temporary tattoos are quoted over WhatsApp by design and quantity.",
          `To decide on quantities and budget, see [how many favors to order per event](/en/blog/${BLOG_SLUG_EN["cuantos-souvenirs-pedir-por-evento"]}) and the [wedding favor budget per guest](/en/blog/${BLOG_SLUG_EN["presupuesto-recuerdos-de-boda-por-invitado"]}).`,
          `100 favor boxes cost $${priceOf("dulceros-personalizados", 100)} and 100 small vinyl stickers (up to 4 cm) cost $${priceOf("stickers-vinil-impermeable", 100)}. Price by quantity:`,
        ],
        table: {
          ...sizeTable(["dulceros-personalizados", "stickers-vinil-impermeable"], [50, 100, 200], "en"),
        },
      },
      {
        heading: "How do you match favors with your invitations and menu?",
        body: [
          "Use the same design everywhere: same colors, same typography and same initials on the invitation, the menu and the favor. The wedding then reads as one planned set instead of loose pieces. Define the design once, approve the digital proof and order each piece with that same file.",
          `If you do not have your stationery yet, start with the invitations and wedding menu and leave the favors for later: you will already have your design line. See the guides to [ordering personalized invitations](/en/blog/${BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"]}) and the [personalized wedding menu](/en/blog/${BLOG_SLUG_EN["menu-de-boda-personalizado"]}).`,
          "If you are a wedding planner organizing a client's wedding, send us the palette, the style and the confirmed guest list. We deal with you directly over WhatsApp and you can review the digital proof with your client before approving.",
        ],
      },
      {
        heading: "When should you order wedding favors?",
        body: [
          "Request a quote as soon as you have a date, a venue and an idea of your colors, and order for real when the guest list is nearly final. That leaves room to review the digital proof, make adjustments and receive the order without rushing, especially if your event has a fixed date.",
          `The digital proof usually arrives within 24 hours of payment and includes up to 2 rounds of adjustments. Once you approve it, your order takes ${PRODUCTION_DAYS.min + NATIONAL_TRANSIT_DAYS.min} to ${PRODUCTION_DAYS.max + NATIONAL_TRANSIT_DAYS.max} business days to reach your door anywhere in Mexico, or is ready for pickup at a pickup branch in Guadalajara in ${PRODUCTION_DAYS.min + PICKUP_EXTRA_DAYS} to ${PRODUCTION_DAYS.max + PICKUP_EXTRA_DAYS} business days.`,
          `Home delivery costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more. If you are also ordering invitations or menus, it helps to coordinate everything in one conversation so each piece's timing fits your date. For the full schedule, see [when to order wedding favors](/en/blog/${BLOG_SLUG_EN["cuando-pedir-souvenirs-de-boda"]}).`,
        ],
      },
      {
        heading: "Elegant and simple wedding favors",
        body: [
          "A simple design can bring together the couple's names, the date and the colors of the celebration. Start by thinking about how you want to hand out the favor: a personalized favor box gives you space to choose what goes inside, while a vinyl sticker can close a bag or decorate a jar. The boxes arrive assembled and empty, and the stickers carry the design you share.",
          `You can use the same visual idea on both or choose one piece for each guest. Before production, you receive a digital proof to review the design. To coordinate it with your guests' places, explore these [personalized wedding table details](/en/blog/${BLOG_SLUG_EN["detalles-de-mesa-boda-personalizados"]}).`,
        ],
      },
      {
        heading: "Wedding favors for civil and church ceremonies",
        body: [
          "For a civil wedding or a church ceremony, the favor can reflect the style the couple chose for their celebration. A favor box with a name and theme lets you prepare a detail for each guest; it arrives assembled and empty so you can decide what to put inside. You can also choose vinyl stickers with your design to complete the presentation.",
          "If a reception follows the ceremony, consider when you want to hand out the pieces and how many people will attend. Temporary tattoos are another option for the party and are quoted over WhatsApp by design and quantity. Share your date when you get in touch so you can organize your order in advance.",
        ],
      },
      {
        heading: "Wedding favors for guests: what to give",
        body: [
          `To choose what to give, start with your guest list and the moment in the celebration. You can prepare one favor box per person and fill it with what you choose, or place the boxes on a table for guests to pick up. The [wedding candy table guide](/en/blog/${BLOG_SLUG_EN["mesa-de-dulces-para-boda"]}) offers ideas for organizing that space.`,
          "Another option is vinyl stickers with your wedding design, on their own or to close a detail you already have. If you prefer temporary tattoos, request a quote over WhatsApp with your design and quantity. Review the digital proof before approving it so the names and date appear as you want them.",
        ],
      },
      {
        heading: "How to request a quote for your wedding favors",
        body: [
          "Message us on WhatsApp with the couple's names, the date, your colors or your finished design, and your guest count. We prepare the quote, and before producing we send a digital proof: nothing is produced until you approve it. We produce in Guadalajara and ship across Mexico.",
          "If your wedding is in Guadalajara, you can also pick up at a pickup branch. If it is in another city, the design and approval process is the same.",
        ],
      },
    ],
    faq: [
      {
        q: "What can I give wedding guests if I want more than names and date?",
        a: "One article recommends personalizing to reflect the couple's taste and identity, beyond the date or initials. Tell us your palette and a detail from your story, and we will include it in the digital proof for your favor boxes or stickers.",
      },
      {
        q: "What wedding favors can I give my guests?",
        a: "You can give personalized favor boxes to fill, vinyl stickers with your design or temporary tattoos, which are quoted over WhatsApp by design and quantity.",
      },
      {
        q: "What are some simple wedding favors?",
        a: "A favor box with the couple's names and wedding theme or a vinyl sticker with initials and the date are simple options you can personalize.",
      },
      {
        q: "Which personalized wedding favors can I order at Yume?",
        a: "Personalized favor boxes with the couple's names and your wedding's theme, vinyl stickers with initials and date, and temporary tattoos with your design. We do not make bottles or fragrances.",
      },
      {
        q: "What kind of wedding favor is trending?",
        a: "According to an article from September 2026, the trend is hyperpersonalization: pieces guests use, display or enjoy instead of disposable magnets, candy or candles. Another adds that the couple's own colors and illustrations make the piece a keepsake.",
      },
      {
        q: "Can I see the design before it is produced?",
        a: "Yes. We send a digital proof before producing and nothing is made until you approve it. It usually arrives within 24 hours of payment and includes up to 2 rounds of adjustments.",
      },
      {
        q: "What is the minimum order?",
        a: "10 pieces for personalized favor boxes and 40 pieces for vinyl stickers. They are sold by exact piece count, not by sheet.",
      },
      {
        q: "Do the favor boxes come with candy?",
        a: "No. Favor boxes arrive assembled and empty, ready for you to fill with whatever you like.",
      },
      {
        q: "Do you ship to other cities in Mexico?",
        a: `Yes. We produce in Guadalajara and ship across Mexico. Shipping costs $${NATIONAL_SHIPPING_PRICE} MXN and is free on orders of $${FREE_SHIPPING_THRESHOLD} MXN or more.`,
      },
      {
        q: "How much do temporary tattoos for a wedding cost?",
        a: "They are quoted by design and quantity. Message us on WhatsApp with your wedding date and guest count and we will prepare the quote.",
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-para-eventos-sociales-boda-xv-baby-shower"], BLOG_SLUG_EN["stickers-para-bodas-eventos-y-fiestas"], BLOG_SLUG_EN["como-pedir-invitaciones-personalizadas-para-eventos"], BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["tatuajes-temporales-para-boda-eventos-y-fiestas"], BLOG_SLUG_EN["cuando-pedir-souvenirs-de-boda"], BLOG_SLUG_EN["cuantos-souvenirs-pedir-por-evento"], BLOG_SLUG_EN["presupuesto-recuerdos-de-boda-por-invitado"]],
    serviceLink: { href: "/en/products/custom-temporary-tattoos", label: "See custom temporary tattoos" },
    quoteMessage: "Hi, I'd like a quote for personalized wedding favors.",
    sources: [
      { label: "Publimetro México: Souvenirs para bodas 2026, las tendencias que ganan terreno", url: "https://www.publimetro.com.mx/virales/2026/10/02/souvenirs-para-bodas-2026-las-tendencias-que-ganan-terreno/" },
      { label: "Crónica: Dile adiós a los recuerdos de boda que terminan en la basura, lo que sí se quedan tus invitados en 2026", url: "https://www.cronica.com.mx/tendencias/2026/09/04/dile-adios-a-los-recuerdos-de-boda-que-terminan-en-la-basura-esto-es-lo-que-si-se-quedan-tus-invitados-en-2026/" },
    ],
  },
  {
    slug: "personalized-company-posada-favors",
    title: "Personalized candy boxes for company posadas",
    metaTitle: "Personalized candy boxes for company posadas",
    description:
      "Personalized candy boxes for company posadas: how many to order, how to add your logo, when to order and what to check with your accountant.",
    category: "Guías",
    publishedAt: "2026-11-04",
    modifiedAt: "2026-11-05",
    intro:
      "Company posadas are coming, and with them the question of what to give your team and your clients. Personalized candy boxes for company posadas, with each person's name or your logo, are a simple option and feel thought out. Here is how many to order, how the logo is applied, ideas by type of guest, a budget reference per person, a calendar to count back from the date and what to check with your accountant.",
    sections: [
      {
        heading: "Personalized corporate Christmas gifts: elegant and original ideas",
        body: [
          "For a company posada, choose the favor by who receives it: your team, your clients or both. A personalized candy box with a name and logo, or stickers with the posada design, are a simple option. What matters is that the design feels made for that event, not a generic gift.",
          "Many year-end gift guides focus on grocery baskets, kits, tumblers or gift cards. An event favor goes another way: it carries the person's name or your posada design, so it feels like part of the celebration and not a generic present.",
          "Our [personalized candy box](/en/products) is a lunch box style with a handle, arrives assembled and empty, and its personalization includes a name, a theme and your brand logo. For filling ideas, see [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box); for the season, see [personalized Christmas treat boxes](/en/blog/personalized-christmas-treat-boxes).",
          "If you prefer something that is not edible, [personalized vinyl stickers](/en/products) carry the design you send us, such as the posada name or the event illustration. Before production we send you a digital proof, and nothing is produced until you approve it.",
        ],
      },
      {
        heading: "Personalized candy boxes for company posadas: how many to order",
        body: [
          "To know how many candy boxes to order, start with the confirmed people, split team and clients, and add a margin for last-minute guests, new hires and replacements. It is a practical Yume rule, not a standard. The minimum order is 10 pieces, so you can fit the quantity to your list.",
          "Count each group separately: the team gets a candy box with their name or the team name, and clients get one with your logo and the posada name. If your team works in several locations, define the list by location before quoting, because we ship across Mexico.",
        ],
      },
      {
        heading: "How to put your company logo on a candy box",
        body: [
          "Our candy box personalization includes a name, a theme and your brand logo. Send us your logo on WhatsApp along with the posada name; before production we send you a digital proof, and nothing is produced until you approve it.",
          "If you want the candy box to match the decoration or invitation of your posada, send us a photo and we adapt the design to those colors. For the team you can use each person's name and, for clients, your logo with the posada name. See the options on the [personalized candy box](/en/products) page.",
        ],
      },
      {
        heading: "An order for a specific event, not an industrial order",
        body: [
          "Your order is for a specific event: a posada with its date, its guest list and its design. The candy box arrives assembled and empty, and you decide what goes inside. You can order the quantity you need for that celebration, starting at 10 pieces.",
          "For filling ideas, see [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box). If your list mixes team and clients, message us on WhatsApp with the number of guests in each group and the posada date.",
        ],
      },
      {
        heading: "Budget per person: team and client company posada favors",
        body: [
          "As a reference, an industry guide suggests per person: $300 to $700 MXN for operational or large-group staff, $700 to $1,500 for middle managers and over $1,500 for executives or key clients. It is a commercial guide, not a rule, and it helps you split your list.",
          "With that reference, the list sorts itself out. For the whole team, think of a uniform favor with each person's name or the team name, such as a personalized candy box. For key clients, a piece with more design and your logo fits there.",
          "The price of our pieces depends on the product and the quantity, and it appears on each page: see the [personalized candy box](/en/products) or [stickers with your logo](/en/products) for the current price. If your list mixes team and clients, message us on WhatsApp and we help you quote both groups.",
        ],
      },
      {
        heading: "Favors for your team: an extra, not a replacement for the aguinaldo",
        body: [
          "The posada favor for your team is an extra and does not replace the aguinaldo. Article 87 of Mexico's Federal Labor Law sets the aguinaldo at no less than 15 days of salary, paid before December 20. Think of the favor as an extra with a name or team design.",
          "For an office posada, a candy box with each person's name, or with the team name and your logo, is a simple favor. If your team works in several locations, we ship across Mexico, so it helps to define the list of people before quoting.",
          "Before giving any gift to your team, check with your accountant how it is classified: as a benefit, income in kind or another concept. The way it is delivered and its commercial name do not determine it.",
        ],
      },
      {
        heading: "The posada is not mandatory: what to consider if the cost is shared",
        body: [
          "A workplace posada is not mandatory. According to a note from El Imparcial, the company cannot impose attendance or financial contributions, nor deduct money, affect the evaluation or condition benefits for not taking part. It is a press note, not the text of the law, so ask a specialist if in doubt.",
          "If your company pays for the candy boxes, there is no forced contribution from staff and the candy box works as a favor given by the company. If you plan to share the cost, the note reminds that a contribution cannot be imposed.",
        ],
      },
      {
        heading: "Favors for clients: what to consider before gifting",
        body: [
          "For clients, choose a favor tied to your brand and the event, not an individual gift. According to external tax guides, gifts to clients in general are not deductible, except those tied to selling products or made for advertising. Check with your accountant before deciding.",
          "A candy box with your logo and the posada name, or [stickers with your logo](/en/products), are brand favors your clients take home from the event. This does not promise they are deductible: individual gifts usually face tax restrictions, and your accountant validates each case.",
          "An external tax guide also recommends keeping a delivery record signed or stamped by the person who receives the gift. Ask your accountant whether it suits your case.",
        ],
      },
      {
        heading: "Count back from the date: when to order your posada favors",
        body: [
          "To get your favors on time, count back from the date of your posada: first delivery, then production, then approval of the digital proof, and at the start the design. That shows you when to write to us, instead of everything piling up in December.",
          "An industry guide recommends planning gifts several weeks before delivery, especially with personalization, volume or shipments to several locations. That is why it helps to write to us once you have the date and a rough guest list, and not the week of the posada.",
          "Production starts when you approve the digital proof, so that approval is the date that matters most. The estimated delivery date appears on the product page and in the cart.",
          "We ship across Mexico and, if you are in the Guadalajara metro area, you can arrange pickup. For options from Jalisco, see [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara). Message us on WhatsApp with your posada date and we count back with you.",
        ],
      },
      {
        heading: "Invoice and accountant: what to check before quoting",
        body: [
          "Before quoting, check with your accountant whether you need an invoice, because a valid CFDI alone does not guarantee the deduction. You also have to prove the transaction, that the expense is strictly necessary and that payment uses an authorized method. Your accountant decides what applies in your case.",
          "As a general reference, an external guide lists these proof points: payments over $2,000 MXN by bank transfer, nominative check or card, a CFDI, accounting records and a list of recipients as good practice. It is a provider's guide, not tax advice.",
          "Tell us on WhatsApp how many guests there are, splitting team and clients, and the posada date, and we will quote your favors.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-navidenos-personalizados"], BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    faq: [
      {
        q: "How many candy boxes should I order for a company posada?",
        a: "Count the confirmed people, split team and clients and add a margin for surprises. It is a practical Yume rule, not an industry standard. The minimum order is 10 pieces.",
      },
      {
        q: "Can I put my company logo on the candy box?",
        a: "Yes. Send us your logo on WhatsApp along with the posada name and we send you a digital proof before production. Nothing is produced until you approve it.",
      },
      {
        q: "Is it mandatory to take part or contribute to the company posada?",
        a: "According to a note from El Imparcial, the company cannot impose attendance or financial contributions, nor deduct money or affect the evaluation for not taking part. It is a press note, not the text of the law.",
      },
      {
        q: "Does a posada favor replace the aguinaldo?",
        a: "No. Article 87 of Mexico's Federal Labor Law sets the aguinaldo at no less than 15 days of salary, paid before December 20, and the employer cannot cite economic difficulties to skip or reduce it. The posada favor is an extra.",
      },
      {
        q: "Are company posada favors deductible?",
        a: "There is no general, automatic deduction for posadas or Christmas dinners. It depends on the purpose, the recipients and the documentation. External tax guides indicate that gifts to clients in general are not deductible. Check with your accountant.",
      },
      {
        q: "How much should I budget per person for a company posada?",
        a: "As a general reference: $300 to $700 MXN for operational or large-group staff, $700 to $1,500 for middle managers and over $1,500 for executives or key clients. It is a provider's commercial guide, not a rule.",
      },
      {
        q: "When should I order my posada favors?",
        a: "An industry guide recommends planning several weeks ahead, especially with personalization, volume or several locations. Count back from the posada date: delivery, production, digital proof approval and design. The estimated delivery date appears on the product page and in the cart.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with the candy or favors you choose.",
      },
      {
        q: "What does candy box personalization include?",
        a: "The name (of the person, the team or your company) and the theme you choose, including your brand logo. We send you a digital proof before production.",
      },
      {
        q: "Which receipts should I keep for the posada favors?",
        a: "As a general reference: a CFDI, accounting records, payment by an authorized method (bank transfer, nominative check or card for payments over $2,000 MXN) and a list of recipients as good practice. Your accountant confirms what applies in your case.",
      },
      {
        q: "Do you ship the favors across Mexico?",
        a: "Yes, we ship across Mexico. If you are in the Guadalajara metro area, you can arrange pickup.",
      },
    ],
    sources: [
      { label: "El Contribuyente: deadline to pay the aguinaldo to workers", url: "https://www.elcontribuyente.mx/2022/12/cual-es-la-fecha-limite-para-entregar-el-aguinaldo-a-los-trabajadores/" },
      { label: "El Imparcial: can they force me to chip in for my workplace posada?", url: "https://www.elimparcial.com/mexico/2025/12/01/pueden-obligarme-a-cooperar-para-la-posada-de-mi-trabajo-esto-dice-la-lft/" },
    ],
  },
  {
    slug: "guide-for-planners-working-with-custom-favors-supplier",
    title: "Custom Favors Supplier for Wedding Planners in Guadalajara",
    description:
      "How wedding planners in Guadalajara work with a custom favors supplier: brief, digital proof, written approval and a backwards calendar.",
    category: "Guides",
    publishedAt: "2026-10-29",
    modifiedAt: "2026-11-11",
    intro:
      "If you plan weddings in Guadalajara, your job is to have everything arrive on time and the couple happy. A custom favors supplier can make that easier or harder. This guide explains how we work with wedding planners at Yume: what details to gather, how the order flows, how the digital proof is approved and how everything is coordinated on WhatsApp, event by event.",
    sections: [
      {
        heading: "What to expect from a custom favors supplier for wedding planners in Guadalajara",
        body: [
          "A good custom favors supplier gives the planner three things: a digital proof the couple can approve, clear dates in writing, and direct contact on WhatsApp. That way the planner does not have to guess or chase anyone, and the client sees the favor before anything is produced.",
          "According to industry guides, the planner hires vendors, oversees the timing of the day and organizes trials, but does not decide without consulting the couple. That is why the ideal supplier makes approval easy. At Yume we work from Guadalajara and ship across Mexico.",
        ],
      },
      {
        heading: "Which products you can order for an event",
        body: [
          "For an event you can order candy boxes with a name and theme, stickers with the wedding design, temporary tattoos, wedding menus and invitations. Stickers and candy boxes have prices listed on the site; menus, invitations and tattoos are quoted on WhatsApp based on the event.",
          "The candy box arrives assembled and empty, with the name and theme you choose, so you decide what goes inside. See the [personalized party favor boxes](/en/products/personalized-party-favor-boxes) or read our guide to [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara). For a detail with the wedding design, look at the [waterproof vinyl stickers](/en/products/waterproof-vinyl-stickers).",
        ],
      },
      {
        heading: "What to gather before you place the order",
        body: [
          "Before writing to us, gather five details: the couple's names, the wedding date, the color palette, the number of guests and any references you have, such as a photo of the invitation or the decor. With that we build the digital proof without long message threads, and each piece is made for that event.",
          "If the design is not defined yet, send a photo of the invitation or the decor and we start from there. For menus, invitations and temporary tattoos, we give you the quote and timing on WhatsApp based on your event. To organize your information, use this [planner checklist for custom favors](/en/blog/planner-checklist-custom-favors-order-event).",
        ],
      },
      {
        heading: "How an order flows from quote to delivery",
        body: [
          "The flow is straightforward: the planner sends the brief on WhatsApp, we prepare the digital proof, the couple reviews it, approval is given in writing, then the order is produced and delivered. For store products, production time counts from the approval of the digital proof.",
          "For menus, invitations and temporary tattoos, which are quoted case by case, the process and timing are confirmed on WhatsApp based on your event.",
        ],
      },
      {
        heading: "How a digital proof gets approved without back and forth",
        body: [
          "A digital proof is the design you see before production. For vinyl stickers it normally arrives within 24 hours of payment, includes up to 2 rounds of changes, and nothing is printed without your approval. For other products, confirm the process on WhatsApp.",
          "Since the planner does not decide without consulting the couple, it helps to send the proof as an image in the chat and keep the approval written in the same thread. Everyone sees the same version, and nothing is produced until it is approved. Before producing the full batch, it helps to confirm the color on the approved proof.",
          "When approving, also write the final piece count. That line avoids doubts if the guest list changes later. For more detail, read how the [digital proof works for event orders](/en/blog/digital-proof-event-order-planners).",
        ],
      },
      {
        heading: "What to confirm in writing before promising a date",
        body: [
          "Before promising your client a date, confirm three things in writing with your supplier: the final piece count, the deadline to approve the digital proof, and the delivery date. With all three in the same chat, any change is on record and nobody argues later about what was agreed.",
          "If each piece carries the guest's name, RSVPs set the calendar, so it helps to agree from the start on a closing date for the guest list.",
        ],
      },
      {
        heading: "When to start: the calendar backwards from the wedding",
        body: [
          "Start as soon as you have the date and a rough idea of the design, because production time counts from the moment the digital proof is approved, not from when you place the order. The later the approval, the later your order arrives.",
          "Plan the calendar backwards from the wedding date: delivery first, then production, then proof approval, the guest list closing and the brief. Production and shipping days for store products appear on each product page.",
          "As an outside reference, a favors supplier in Guadalajara, Spain, recommends starting 6 to 9 months ahead because it works to order. That is that supplier's reference, not a Yume rule. For menus, invitations and tattoos, ask us for the date on WhatsApp before promising anything to your client. For guest gift ideas, read [when to order wedding favors](/en/blog/when-to-order-wedding-favors) or see these [personalized wedding favors](/en/blog/personalized-wedding-favors-with-name-and-date).",
        ],
      },
      {
        heading: "Orders by event, not in series",
        body: [
          "Yume works event by event, not in industrial volume. Every wedding has its own names, date and palette, so each order is prepared separately. If you handle several weddings a year, you can write to us for each one and talk through how to organize your orders, always using the same path of brief, proof and approval.",
          "If you work with us on a recurring basis, see the page for [Yume for planners](/en/planners).",
        ],
      },
      {
        heading: "Delivery and WhatsApp contact so your client is happy",
        body: [
          "Yume produces in Guadalajara and ships across Mexico; in the Guadalajara metro area you can also arrange pickup. Tell us the venue and event date from the start so delivery can be planned around your calendar.",
          "All contact happens on WhatsApp: quote, digital proof and approval in a single chat.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [BLOG_SLUG_EN["souvenirs-de-boda-personalizados"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], "digital-proof-event-order-planners", "planner-checklist-custom-favors-order-event"],
    faq: [
      {
        q: "Which products can I order for an event?",
        a: "Candy boxes, stickers, temporary tattoos, wedding menus and invitations. Stickers and candy boxes have prices listed on the site; menus, invitations and tattoos are quoted on WhatsApp.",
      },
      {
        q: "How long does the digital proof take and how many rounds of changes are included?",
        a: "For vinyl stickers it normally arrives within 24 hours of payment and includes up to 2 rounds of changes. For other products, confirm the timing and rounds on WhatsApp.",
      },
      {
        q: "Is anything produced before I approve?",
        a: "No. For vinyl stickers we print nothing without your approval, and production time counts from the moment you approve the digital proof.",
      },
      {
        q: "What details do I need to order a personalized wedding favor?",
        a: "The couple's names, the wedding date, the color palette, the number of guests and any references you have, such as a photo of the invitation or the decor.",
      },
      {
        q: "What should I confirm in writing before promising a date?",
        a: "The final piece count, the deadline to approve the digital proof and the delivery date. For store products, production and shipping days appear on each product page; for menus, invitations and tattoos, ask on WhatsApp.",
      },
      {
        q: "How far ahead should I start?",
        a: "It depends on the product and on when you approve the digital proof. As an outside reference, a supplier in Guadalajara, Spain, recommends 6 to 9 months because it works to order, but that is not a Yume rule.",
      },
      {
        q: "Do you work by event or by volume?",
        a: "By event. Each wedding is prepared separately, with its own brief, digital proof and approval, and contact is direct on WhatsApp.",
      },
      {
        q: "Does the candy box include candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with whatever you choose.",
      },
      {
        q: "Where do you produce and where do you ship?",
        a: "We produce in Guadalajara, Jalisco, and ship across Mexico. In the Guadalajara metro area you can also arrange pickup.",
      },
    ],
  },
  {
    slug: "personalized-wedding-table-details",
    title: "Personalized Wedding Table Details: Menu and Stickers",
    metaTitle: "Personalized Wedding Table Details: Menu and Stickers",
    description:
      "Personalized wedding table details: how to match menu, favor box and stickers in one design so the table looks planned.",
    category: "Guides",
    publishedAt: "2026-10-29",
    modifiedAt: "2026-11-03",
    intro:
      "A wedding table looks planned when every piece seems to belong to the same set. Menu, favor box and stickers can share the same color, the same lettering and the same symbol, and the whole table feels cared for. Here is how to combine them, what goes on the menu card, how to handle allergies, when to lock the design, and what to check per guest and per table before asking for a quote.",
    sections: [
      {
        heading: "Which personalized wedding table details work together",
        body: [
          "Personalized wedding table details look planned when they share one system: a palette, a typeface and a symbol or monogram that repeats. The menu, the favor box and the stickers are different pieces, but with that common thread the table reads as one set and not as separate purchases.",
          "Stickers reach the most places. A wedding blog mentions labels for wine or water bottles, which can also work as numbered table markers, phrases or monograms on cutlery or plates, candles and favor jars. If you have a different idea, message us on WhatsApp and we will see if it can be done.",
        ],
      },
      {
        heading: "The wedding menu as a place card",
        body: [
          `One way to simplify the table is to use the menu as the place card too, with each guest's name above the menu. That way a single piece does two jobs and the table looks cleaner. For more ideas, see the Yume [personalized wedding menu](/en/blog/${BLOG_SLUG_EN["menu-de-boda-personalizado"]}), which is quoted over WhatsApp.`,
          "A wedding stationery guide also suggests one detail per place setting, such as a small vase, a party cookie with a label or a mini bottle with a name label. Fewer pieces per seat, all with the same design, give a more elegant result than many different pieces.",
        ],
      },
      {
        heading: "What goes on a wedding menu card",
        body: [
          "A menu card carries a header with the couple's names or monogram, an optional date, and the dishes in serving order with a short description. Pairings and a closing line are optional. A stationery guide offers this as a reference, not a rule.",
          "Send us your menu on WhatsApp and we will quote it.",
        ],
      },
      {
        heading: "Allergies and diets on the wedding menu",
        body: [
          "To mark diets on the menu, a stationery guide recommends letter abbreviations (V, VE, GF, DF, N, SF) after the dish name, with a key at the bottom. For serious allergies it suggests a line that points guests to the catering team, because the card is not an allergy management document.",
          "A wedding guide proposes leaving room on the RSVP for allergies and diets, asking the caterer for the ingredient list of each dish and sharing it with guests who have allergies. It also suggests posting the menu on the wedding website and, for buffets, labeling dishes (vegan, vegetarian, gluten-free, nut-free) and letting guests with allergies serve themselves first.",
          "So on the card, it is best to put only the abbreviations and the key, and leave allergy handling to the caterer. Tell us which ones you want to mark and we will place them in the design.",
        ],
      },
      {
        heading: "Favor box and stickers: one detail per place",
        body: [
          "To keep the table from feeling crowded, pick one detail per place and repeat its design everywhere else. It can be a favor box with the guest's name or a sticker with the wedding monogram on a label. What matters is that colors and symbol match the menu.",
          "The favor box arrives assembled and empty, so you decide what goes inside, and personalization includes name and theme. To see it in more detail, read about [personalized favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara). For the keepsake guests take home, see [personalized wedding favors](/en/blog/personalized-wedding-favors-with-name-and-date).",
        ],
      },
      {
        heading: "The order of decisions for a table that looks planned",
        body: [
          "Decide in this order: first the palette, then the typeface and finally the symbol or monogram that will repeat. With those three decisions made, every piece is designed on the same base and nothing has to be redone when you add the menu, the favor box or the stickers.",
          "Message us on WhatsApp to get a quote and we will tell you how to align the design with your palette. The wedding menu is quoted over WhatsApp. For stickers and favor boxes we send you a digital proof before production, and nothing is produced until you approve it. If you work with a wedding planner, share the palette and the proof with her so the pieces match the rest of the decor.",
        ],
      },
      {
        heading: "When to lock the menu design and order the pieces",
        body: [
          "Close the menu design once the caterer has confirmed the menu. One stationery guide says that usually happens 6 to 8 weeks before the wedding, but that is only a general reference, not an industry standard. For your own order timing with Yume, message us on WhatsApp.",
          "At Yume, the wedding menu is quoted over WhatsApp. For [vinyl stickers](/en/products/waterproof-vinyl-stickers), the digital proof usually arrives within 24 hours at most after your payment, with up to 2 rounds of adjustments, and we print nothing without your approval.",
        ],
      },
      {
        heading: "Checklist per guest and per table",
        body: [
          "A short checklist avoids forgotten items: per guest, check a card or menu with their name, a keepsake and the label or sticker that goes with it; per table, check the numbered marker, menu or card and the shared piece. Confirm everything against your guest list before ordering.",
          "Add to the list the allergies and diets your guests report on the RSVP and confirm them with the caterer before locking the menu text. Quantities depend on your guest list and how many tables you have. Message us on WhatsApp with those numbers and we will quote the menu and the other pieces. We are in Guadalajara and ship across Mexico.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["menu-de-boda-personalizado"], BLOG_SLUG_EN["souvenirs-de-boda-personalizados"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["que-poner-en-un-dulcero"]],
    faq: [
      {
        q: "How much does the wedding menu cost?",
        a: "The wedding menu is quoted over WhatsApp based on your design and the quantity you need.",
      },
      {
        q: "Can I use the menu as a place card?",
        a: "Yes. A wedding stationery guide suggests it: put the guest's name above the menu so one piece does two jobs. Tell us how you want it and we will quote it.",
      },
      {
        q: "Can I see the design before production?",
        a: "For stickers and favor boxes, yes: we send you a digital proof and nothing is produced until you approve it. The wedding menu is quoted over WhatsApp.",
      },
      {
        q: "Do the favor boxes come with candy?",
        a: "No. The favor box arrives assembled and empty, ready to fill with the candy or details you choose.",
      },
      {
        q: "Do you ship outside Guadalajara?",
        a: "Yes. We work from Guadalajara and ship across Mexico.",
      },
      {
        q: "What goes on a wedding menu card?",
        a: "According to a stationery guide, a header with the couple's names or monogram, an optional date, the dishes in serving order with a short description, dietary symbols and a key. Pairings and a closing line are optional.",
      },
      {
        q: "How do I mark allergies or diets on the menu?",
        a: "A stationery guide recommends letter abbreviations (V, VE, GF, DF, N, SF) after the dish name, with a key at the bottom, and a line pointing to the caterer for serious allergies, because the card is not an allergy management document.",
      },
      {
        q: "When should I lock the menu design?",
        a: "Once the caterer has confirmed the menu. One stationery guide suggests 6 to 8 weeks before the wedding as a general reference. For your timing with Yume, message us on WhatsApp.",
      },
    ],

  },
  {
    slug: "wedding-candy-table-custom-candy-boxes",
    title: "Wedding candy table: how to set it up and personalize the candy boxes",
    metaTitle: "Wedding candy table: how to set it up and personalize it",
    description:
      "How to set up a wedding candy table: how many sweets to plan, what to put in each candy box and how to personalize them with a digital proof.",
    category: "Guides",
    publishedAt: "2026-11-10",
    modifiedAt: "2026-11-03",
    intro:
      "A well-planned wedding candy table looks good, photographs well and gets enjoyed. This guide covers how many sweets to estimate, how many candy boxes you need, what to put in each one, how to set up the table, what each label should say and how to personalize the candy boxes so they match your wedding palette. There is also a section for wedding planners.",
    sections: [
      {
        heading: "How many sweets to plan per guest for your wedding candy table",
        body: [
          "As a starting point, an industry guide suggests about 150 g of sweets per guest at small weddings, about 100 g at medium ones and about 80 g at large ones. For 100 guests that is about 10 kg if the table is mostly candy. These are rough figures from a guide in Spain, not a rule.",
          "If you add mini brownies, donuts, chocolates or cookies, you can reduce the loose sweets. The candy table complements dessert and the banquet, it does not replace them.",
          "An industry guide notes that the amount depends on the guests, the duration, the venue and the catering, so it is worth fine-tuning the number with your wedding planner or the venue.",
        ],
      },
      {
        heading: "How many candy boxes or jars you need on the table",
        body: [
          "An industry guide suggests using medium jars: 4 to 6 for 50 guests, 10 to 12 for 50 to 150, and about 15 or 16 for 200. It is a reference for how many containers to fill, not a rule. Adjust it to how many kinds of sweets you want to show and the size of your table.",
          "So it helps to start with the kinds of sweets you want to offer and then set the number of containers. Our minimum order for candy boxes is 10 pieces, and our guide to [personalized candy boxes](/en/blog/wedding-quinceanera-baby-shower-favor-boxes) shows what they are like.",
        ],
      },
      {
        heading: "What sweets to put in each candy box",
        body: [
          "Choose variety and label every candy box. An industry guide suggests at least 6 kinds of sweets as a reference, and another recommends mixing classics such as gummies, marshmallows and chocolates with minis, cake pops, brownies or decorated cookies. The Yume candy box arrives assembled and empty, so you decide what goes in each one.",
          "For more filling ideas, see our guide on [what to put in a candy box](/en/blog/what-to-put-in-a-party-favor-box).",
        ],
      },
      {
        heading: "How to set up a wedding candy table step by step",
        body: [
          "Define a concept and a palette, choose a focal point and arrange by height: low items in front, tall ones at the back. An industry guide recommends clear containers, trays at different heights or wooden crates so the contents show, and keeping order with a coherent style line.",
          "One industry guide proposes 10 steps from inspiration to graphic design, with signs and bunting, and they include a sketch of the table. another guide adds tongs for serving and, as a hygienic option without lines, individual servings.",
          "Candy boxes bring color and a design of your own to the table and, once personalized, repeat the design of your wedding. If you also want favors to hand out, see our [personalized wedding favors](/en/blog/personalized-wedding-favors-with-name-and-date).",
        ],
      },
      {
        heading: "Table labels: flavors, allergens and finishing touches",
        body: [
          "A useful label says what is in each candy box. An industry guide advises labeling flavors, listing allergens and marking gluten-free, sugar-free or vegan options. That way guests choose with confidence and the table looks tidy as well as pretty. You can also add small signs with the couple's names.",
          "As a personalized touch, an industry guide suggests sealed bags with a label showing the wedding date and the couple's names or initials. Another option is to leave bags or jars at the end of the table so each guest serves themselves.",
        ],
      },
      {
        heading: "How to personalize candy boxes for a wedding",
        body: [
          "A Yume candy box is personalized with the name and theme you choose, for example the couple's names and your wedding colors. Before producing, we send you a digital proof, and nothing is produced until you approve it. That way the table and the keepsake look like one design.",
          "Our candy box is lunch box style, with a handle, and arrives assembled and empty. The minimum order is 10 pieces. You can request a quote on WhatsApp.",
          "Send us a photo of your invitation or the decor and we adapt the design to those colors. If you want to include another detail, such as the date, message us on WhatsApp and we will confirm it before quoting. If you are in the area, also see our [candy boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
      {
        heading: "When to order the candy boxes for your candy table",
        body: [
          "Order the candy boxes once you have settled the palette and the guest count, to leave time for the digital proof and your approval. If you work with a wedding planner, share the approved design and the table sketch with her. Message us on WhatsApp with your wedding date.",
          "When you request a quote, tell us how many guests you have and how many candy boxes you want.",
        ],
      },
      {
        heading: "Wedding candy table with a planner: what to share with us",
        body: [
          "If you are a wedding planner or work with one, what helps most is having the guest count, the palette and the table sketch defined. With that we quote the candy boxes, send a digital proof for approval and coordinate everything on WhatsApp, with direct contact with you.",
          "Each event is quoted separately, so you can message us with the details of every wedding you organize.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["souvenirs-de-boda-personalizados"]],
    serviceLink: { href: "/en/blog/wedding-quinceanera-baby-shower-favor-boxes", label: "See personalized candy boxes" },
    quoteMessage: "Hi, I'd like a quote for personalized candy boxes for my wedding candy table.",
    faq: [
      {
        q: "How many sweets should I plan per guest at a wedding?",
        a: "An industry guide from Spain suggests about 150 g per guest at small weddings, about 100 g at medium ones and about 80 g at large ones. These are rough figures, not a rule.",
      },
      {
        q: "How many jars or candy boxes do I need on the table?",
        a: "An industry guide suggests using medium jars: 4 to 6 for 50 guests, 10 to 12 for 50 to 150, and about 15 or 16 for 200. It is a reference, not a rule.",
      },
      {
        q: "Do the candy boxes include sweets?",
        a: "No. The candy box arrives assembled and empty, ready to fill with the sweets you choose.",
      },
      {
        q: "What should the table labels say?",
        a: "An industry guide advises labeling flavors, listing allergens and marking gluten-free, sugar-free or vegan options.",
      },
      {
        q: "What does candy box personalization include?",
        a: "The name and the theme you choose. We send you a digital proof before producing and nothing is produced until you approve it. If you want to include another detail, such as the date, message us on WhatsApp to confirm.",
      },
      {
        q: "Does the candy table replace dessert?",
        a: "No. According to an industry guide, the candy table complements dessert and the banquet, it does not replace them.",
      },
      {
        q: "When should I order the candy boxes?",
        a: "Once you have settled the palette and the guest count, to leave time for the digital proof and your approval. Message us on WhatsApp with your wedding date.",
      },
      {
        q: "What is the minimum order for candy boxes?",
        a: "The minimum order is 10 pieces.",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["cuando-enviar-invitaciones-de-boda"],
    title: "When to Send Wedding Invitations and What to Include",
    description:
      "When to send wedding invitations: guiding timelines for the save the date, the invitation and the RSVP, plus the details each piece should carry.",
    category: "Guides",
    publishedAt: "2026-11-02",
    intro:
      "Guides do not agree on a single answer to when to send wedding invitations: the timing changes for local and destination weddings and when guests are traveling. Here are guiding ranges, a table to work backward from your wedding date and the details your invitation needs so guests can reply on time.",
    sections: [
      {
        heading: "When to send wedding invitations: the timeline according to each source",
        body: [
          "For a local wedding, one industry guide places the formal invitation send date 6 to 8 weeks ahead, although it also mentions 3 to 4 months. Use these timelines as a reference and send earlier if guests are traveling.",
          "For a destination wedding, a synthesis of industry guides suggests sending invitations 10 to 12 weeks ahead, or 3 to 4 months ahead if there was no save the date. Another guide recommends adding a few weeks when guests are coming from abroad.",
        ],
      },
      {
        heading: "When to send the save the date",
        body: [
          "One industry guide recommends sending the save the date 7 to 10 months before the wedding, or 10 to 12 months ahead if it falls on a long weekend or is a destination wedding. Another guide suggests at least 6 months, always with the date and venue confirmed so guests can plan their flights.",
          "For destination weddings, the synthesis of guides cited above raises the range to 8 to 12 months ahead, and some guides go as far as 14. One industry guide suggests skipping the save the date when there are fewer than about 8 weeks left and sending the formal invitation directly.",
        ],
      },
      {
        heading: "What RSVP deadline to set",
        body: [
          "One industry guide places the RSVP deadline about a month before the wedding and adds a few weeks if guests are traveling from abroad. Another guide recommends leaving at least 3 weeks between that date and the event so you can finalize arrangements with your vendors.",
          "One industry guide suggests 4 to 6 weeks ahead for local weddings and 6 to 8 for destination weddings. The synthesis of destination wedding guides suggests 5 to 8 weeks, because flights, hotel blocks and the final guest list need more time. Another guide suggests 3 to 4 weeks for local weddings.",
        ],
      },
      {
        heading: "A backward timeline to plan your send date",
        body: [
          "Start with the wedding date and work backward: first the RSVP deadline, then the invitation send date and, before that, the save the date. As a reference, a local wedding with invitations sent 8 weeks ahead calls for replies 3 or 4 weeks before the wedding.",
          "This table brings together the ranges from each source. They do not all agree, so choose a point within them based on your guest list.",
        ],
        table: {
          headers: ["Piece", "Local wedding", "Destination wedding"],
          rows: [
            ["Save the date", "7 to 10 months ahead; at least 6 months according to another guide", "8 to 12 months ahead, some guides up to 14 (synthesis of destination wedding guides)"],
            ["Invitation", "6 to 8 weeks ahead according to one industry guide", "10 to 12 weeks ahead, or 3 to 4 months if there was no save the date (synthesis of destination wedding guides)"],
            ["RSVP", "3 to 4 weeks ahead; 4 to 6 weeks according to another guide", "5 to 8 weeks ahead (synthesis of destination wedding guides); 6 to 8 weeks ahead according to another guide"],
          ],
        },
      },
      {
        heading: "What the invitation needs to receive replies",
        body: [
          "According to one industry guide, the invitation should include a way to reply, either the wedding website or an RSVP card with a prepaid or addressed envelope, and an explicit RSVP deadline. Without those two elements, your guests will not know how or when to respond.",
          "If only a few guests are coming from another country, one industry guide suggests letting them know earlier by message or email, even if the formal invitation goes out on the normal schedule. According to another guide, the save the date is sent only once the date and venue are confirmed.",
          "Once you have the timeline, decide on your invitation design. At Yume we send you a digital proof before producing, and nothing is produced until you approve it. If you are putting together other details for the same wedding, see our guide to the [wedding candy table](/en/blog/wedding-candy-table-custom-candy-boxes).",
        ],
      },
      {
        heading: "A timeline for wedding planners",
        body: [
          "If you are a wedding planner, make a timeline for each client with three dates: the save the date, invitation send date and RSVP deadline. Mark weddings with traveling guests separately, because guides give them longer timelines.",
          "At Yume we work with wedding planners: design with a digital proof and direct contact on WhatsApp. For your client's table details, see our guide to [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara). Write to us on WhatsApp to get a quote for your wedding invitations or your client's.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["mesa-de-dulces-para-boda"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    faq: [
      {
        q: "How far ahead should wedding invitations be sent?",
        a: "It depends on the source. One industry guide gives 6 to 8 weeks for a local wedding but also mentions 3 to 4 months. For destination weddings, a synthesis of guides suggests 10 to 12 weeks.",
      },
      {
        q: "Can the save the date be skipped?",
        a: "Yes. One industry guide suggests skipping it when there are fewer than about 8 weeks until the wedding and sending the formal invitation directly.",
      },
      {
        q: "When should the RSVP deadline fall?",
        a: "One industry guide places it about a month before the wedding. Another recommends leaving at least 3 weeks between that date and the wedding to finalize arrangements with vendors.",
      },
      {
        q: "What does the invitation need so guests can reply?",
        a: "According to one industry guide, a way to reply (the wedding website or an RSVP card with a prepaid or addressed envelope) and an explicit RSVP deadline.",
      },
      {
        q: "How do I get a quote for my wedding invitations from Yume?",
        a: "Write to us on WhatsApp early and we will quote you. We send a digital proof before producing, and nothing is produced until you approve it.",
      },
    ],
  },
  {
    slug: BLOG_SLUG_EN["buen-fin-2026-stickers-y-dulceros-personalizados"],
    title: "Buen Fin 2026: 15% off custom stickers and party favor boxes",
    metaTitle: "Buen Fin 2026: 15% off stickers and favor boxes",
    description: "Buen Fin 2026, November 13-17: 15% off custom stickers and party favor boxes with code YumeBuenFin, no minimum. Here is how to apply it.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-04",
    intro: "Buen Fin 2026 runs November 13 to 17, and at Studio Yume you get 15% off stickers, party favor boxes and more products in the online store with code YumeBuenFin, with no minimum order. Here are the dates, how to apply the code, which products are included, how shipping works and how to take your time ordering custom pieces for a wedding, baby shower, quinceañera or company posada.",
    sections: [
      {
        heading: "Buen Fin 2026: dates and discounts on stickers and favor boxes",
        body: [
          "Buen Fin 2026 runs from Friday, November 13 to Tuesday, November 17, coinciding with the long weekend for the Mexican Revolution. At Studio Yume, code YumeBuenFin gives 15% off products in the online store, with no minimum order, during those same five days.",
          "The code is valid from November 13 at 00:00 to November 17 at 23:59, Mexico City time. Outside those dates the store will not accept it. It applies equally to small and large orders.",
          "Buen Fin is coordinated by the Ministry of Economy and Concanaco Servytur, with chains, micro, small and medium businesses and online stores taking part. Since it falls on a long weekend, it helps to have your order planned before Friday the 13th.",
        ],
      },
      {
        heading: "How to apply code YumeBuenFin to your order",
        body: [
          "Add your products to the cart, go to checkout and find the 'Have a coupon?' field in the order summary. Enter YumeBuenFin, in uppercase or lowercase, and tap 'Apply'. The discount appears in your total before you pay. It only works from November 13 to 17.",
          "If the code is not accepted, check the date: it is not valid before November 13 or after November 17.",
        ],
      },
      {
        heading: "Which custom stickers and favor boxes are included in Buen Fin",
        body: [
          "The code applies to products in the online store, such as [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), [labels with your logo](/en/products/custom-logo-stickers) and [personalized party favor boxes](/en/products/personalized-party-favor-boxes). All our stickers have high-quality BOPP lamination, and you choose the finish. Temporary tattoos are quoted through our messaging service according to design and quantity, so they are not paid for with the store code.",
          "Here is what each product offers and the minimum number of pieces you can order:",
        ],
        table: {
          headers: ["Product", "Minimum order", "What it is for"],
          rows: [
            ["Custom vinyl stickers", "40 pieces", "Any design, character, pet or photo"],
            ["Stickers and labels with your logo", "50 pieces", "Your brand logo or design"],
            ["Personalized party favor boxes", "10 pieces", "Name and theme, including your brand logo"],
          ],
        },
      },
      {
        heading: "How to shop confidently for a custom order",
        body: [
          "A custom order is made to your specifications, so take your time when buying. Before paying, check delivery terms, returns and shipping costs, and keep your receipts and electronic confirmations, as Profeco recommends. At Studio Yume you receive a digital proof before printing, and nothing is produced without your approval.",
          "Before Buen Fin, it also helps to set a budget and note the base price of what you want so you can compare it with the offer. According to media reports citing Profeco, its Buen Fin price comparison microsite shows price histories for categories such as appliances, computers, televisions and major appliances. It does not include personalized items, so compare quotes and conditions directly for a custom order.",
          "If you have questions about your order, message us before paying.",
        ],
      },
      {
        heading: "Shipping and pickup during Buen Fin",
        body: [
          `Shipping anywhere in Mexico costs $${NATIONAL_SHIPPING_PRICE} and is free on purchases of $${FREE_SHIPPING_THRESHOLD} or more. This is calculated using the total before the discount, so the code does not take away free shipping. If you are in Guadalajara, you can also pick up at a local branch for $${CASABLANCA_PRICE}, free from $${FREE_SHIPPING_THRESHOLD}.`,
          "Since Buen Fin falls on a long weekend, ask us through our messaging service about timing for your event date before paying.",
        ],
      },
      {
        heading: "Buen Fin for weddings, baby showers, quinceañeras and posadas",
        body: [
          "Buen Fin is a chance to plan details for events already on your calendar: weddings, baby showers, baptisms, communions, quinceañeras and company posadas. You can order personalized favor boxes and stickers with the name of the person being celebrated at the discount, provided you have the design, text and quantity ready.",
          "If you are a wedding or event planner, you can order pieces for a client's already confirmed event. Send us the design, text and quantity, and we will send a digital proof before production.",
          "For a posada or company event, the favor box includes your brand name and logo. For filling ideas, see [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box), and if you are nearby, explore [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
      {
        heading: "What to have ready before November 13",
        body: [
          "To order without rushing, have your logo or design, the exact text you want printed, such as names, dates and messages, and the quantity ready. Minimum orders are 10 party favor boxes and 40 vinyl stickers. Once you have those details, apply the code and proceed to payment.",
          "After payment we normally send your digital proof within a maximum of 24 hours, with up to 2 rounds of adjustments. Nothing is printed without your approval.",
          "If you are planning gifts or December posadas, see the guides to [custom Christmas labels](/en/blog/custom-christmas-labels) and [Christmas treat boxes](/en/blog/personalized-christmas-treat-boxes).",
        ],
      },
    ],
    faq: [
      { q: "When is Buen Fin 2026 at Studio Yume?", a: "November 13 to 17, 2026, Mexico City time." },
      { q: "How many days does Buen Fin 2026 last?", a: "Five consecutive days, from Friday to Tuesday, coinciding with the long weekend for the Mexican Revolution." },
      { q: "Who coordinates Buen Fin?", a: "The Ministry of Economy and Concanaco Servytur." },
      { q: "What is the Buen Fin code?", a: "YumeBuenFin: 15% off products in the online store, with no minimum." },
      { q: "Can the code be used after November 17?", a: "No. It is only valid during the Buen Fin dates." },
      { q: "Does the code take away free shipping?", a: `No. Free shipping from $${FREE_SHIPPING_THRESHOLD} is calculated using the total before the discount.` },
      { q: "Does it apply to temporary tattoos?", a: "Temporary tattoos are quoted through our messaging service and are not paid for with the online store code." },
      { q: "Can I order wedding or baby shower details with the code?", a: "Yes, if the product is purchased in the online store, such as personalized favor boxes or stickers. For pieces quoted through our messaging service, write to us and we will reply." },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado", "dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["etiquetas-navidenas-personalizadas"], BLOG_SLUG_EN["dulceros-navidenos-personalizados"], BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],
    sources: [
      { label: "Buen Fin 2026: official dates and Profeco recommendations", url: "https://ruptura360.mx/periodismo-de-servicio/el-buen-fin-2026-fechas-oficiales-mexico/" },
      { label: "Profeco launches a price comparison microsite for Buen Fin 2026", url: "https://www.publimetro.com.mx/noticias/2026/10/27/profeco-lanza-micrositio-para-comparar-precios-en-el-buen-fin-2026/" },
    ],
  },
  {
    slug: BLOG_SLUG_EN["dulceros-para-xv-anos-elegantes"],
    title: "What Candy to Put in a Quinceañera Favor Box",
    metaTitle: "What Candy to Put in a Quinceañera Favor Box",
    description:
      "What candy to put in a quinceañera favor box: mix classics and a surprise, match the palette, set up and label the table, and order your boxes.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-07",
    intro:
      "What candy to put in a quinceañera favor box is a big question when you want a table that looks thoughtfully planned. Here is what to combine, how to coordinate it with the party palette, how many boxes to order, how to set up and label the candy table, and how to order with a digital proof. It is for moms, dads and planners who care about the details.",
    sections: [
      {
        heading: "What candy to put in a quinceañera favor box",
        body: [
          "For a quinceañera favor box, combine classics such as gummies, decorated cookies, mini brownies and marshmallows with a surprise. A wedding guide recommends that mix and adding gluten-free, vegan or sugar-free options. The box arrives empty, so you choose the filling.",
          "For a wedding table, a wedding guide recommends 5 to 7 dessert varieties, a guideline that can be adapted to a quinceañera. For more filling ideas, read [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box), and see the [personalized party favor boxes](/en/products/personalized-party-favor-boxes) we make with the quinceañera's name.",
        ],
      },
      {
        heading: "What candy goes with an elegant quinceañera?",
        body: [
          "Choose candy that follows the party palette. A wedding guide advises choosing 2 or 3 main colors and repeating them in the candy, flowers, ribbons, signs and containers. That makes the favor box, table and decor look like one set, and the table looks planned rather than like a collection of separate sweets.",
          "The same guide explains that the palette can suit the event style: gold and mirrors for a glam event, cream and green for a rustic one. Choose candy by color before brand, and let a box in the party colors bring the set together.",
        ],
      },
      {
        heading: "Elegant quinceañera candy boxes: what makes them refined",
        body: [
          "A quinceañera candy box looks elegant when it uses a few colors, a readable name and a discreet typeface, and when it matches the invitation, cake and table decor. Elegance comes from coordination and a personalized detail, rather than lots of ornaments or a generic kit.",
          "A marketplace search for quinceañera candy tables mainly shows low-priced vintage MDF table kits to assemble and clear boxes sold in packs of 20, 40 or 50 pieces. These are volume options. A box with the quinceañera's name and her party colors is a different kind of detail.",
        ],
      },
      {
        heading: "Palette, name and typeface for modern quinceañera favors",
        body: [
          "Choose a short palette from the invitation or dress, put the quinceañera's name in a clear typeface and leave empty space around it. If you send us a photo of the invitation or decor, we adapt the design to those colors, and you receive a digital proof before production.",
          "Our candy box is a lunch box style with a handle, and personalization includes the name and theme. For a quinceañera, the theme can be as simple as the party colors and the quinceañera's name, with nothing else added.",
          "If you are planning the event for a client, you can send us their palette and invitation and review the digital proof directly with us, without intermediaries.",
        ],
      },
      {
        heading: "How many candy boxes to order and how many sweets to plan",
        body: [
          "Order one candy box for each person you want to take the favor home: everyone on the guest list, only close family or only the main table. The minimum order is 10 pieces and you can enter the exact quantity you need.",
          "To estimate the sweets, a wedding candy buffet guide suggests 3 to 4 servings per person if there is no cake and about 2 if there is one. Those figures are for a wedding dessert table, not what fits in a box, so use them only as an order of magnitude, especially at a quinceañera with dancing and a waltz.",
          "The same guide notes that children tend to eat more sweets than adults and that dinners generate more consumption than midday banquets. Use that to adjust your estimate if your guest list has many children or the party is at night.",
        ],
      },
      {
        heading: "Setting up the candy table: table, heights and color",
        body: [
          "According to a setup guide, a table about 80 by 120 to 160 centimeters is enough for 30 to 40 people. Cover it with a floor-length tablecloth, place tall pieces in the center and at the back, and use boxes or stands to create levels.",
          "A wedding guide recommends arranging sweets at different heights, using varied containers such as glass jars, wooden boxes or tiered stands, grouping them in blocks of color and making sure nothing hides another item.",
          "Keep the palette consistent with your [personalized party favor boxes](/en/products/personalized-party-favor-boxes) and combine shapes and flavors. The setup guide suggests considering guests with celiac disease, for example with gluten-free marshmallows, and labeling each sweet so everyone knows what they are taking.",
        ],
      },
      {
        heading: "How to label the sweets and what to keep handy",
        body: [
          "Put up signs showing flavors, allergens or vegan options, coordinated with the party stationery. A wedding guide also recommends keeping napkins, tongs or small spoons handy and preparing bags or jars for guests to take sweets home. That way everyone knows what they are taking.",
        ],
      },
      {
        heading: "How to order quinceañera candy boxes with a digital proof",
        body: [
          "Send us the quinceañera's name, the party colors and how many candy boxes you need. We send a digital proof of the design before production, and nothing is produced until you approve it. You can see the [personalized party favor boxes](/en/products/personalized-party-favor-boxes) in the shop and send us a photo of the invitation for reference.",
          "We work to order from Guadalajara, Jalisco, with shipping across Mexico. Production time starts when you approve the digital proof, so order ahead of the party and message us to confirm the date you need. For another option near you, see [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    relatedBlogSlugs: [BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["dulceros-navidenos-personalizados"]],
    faq: [
      { q: "What candy should I put in a quinceañera favor box?", a: "Combine classics such as gummies, decorated cookies, mini brownies and marshmallows with a surprise, following a wedding guide adapted to a quinceañera." },
      { q: "Do the candy boxes come with candy?", a: "No. The candy box arrives assembled and empty, ready to fill with the candy you choose." },
      { q: "What does personalization include?", a: "The name and the theme you choose. We send a digital proof before production and nothing is produced until you approve it." },
      { q: "What is the minimum order for candy boxes?", a: "The minimum order is 10 pieces, and from there you can enter the exact quantity you need." },
      { q: "How many colors should I use on the candy table?", a: "A wedding guide advises choosing 2 or 3 main colors and repeating them in the candy, flowers, ribbons, signs and containers." },
      { q: "Should I put signs by the sweets?", a: "Yes. A wedding guide says signs can show flavors, allergens or vegan options and should match the party stationery." },
      { q: "How many candy varieties should I include?", a: "A wedding guide recommends 5 to 7 dessert varieties for a wedding table. This guideline can be adapted to a quinceañera." },
      { q: "What size table do I need for the candy display?", a: "A setup guide mentions a table about 80 by 120 to 160 centimeters for 30 to 40 people, with a floor-length tablecloth and levels made with boxes or stands." },
      { q: "Do you ship across Mexico?", a: "Yes. We produce to order from Guadalajara, Jalisco, and ship across Mexico." },
    ],
  },
  {
    slug: "personalized-adult-birthday-favors",
    title: "Personalized Birthday Favors for Adults",
    description:
      "Personalized birthday favors for adults turning 30, 40, 50 or 60: what to choose, what to personalize, when to order and how to avoid mistakes.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "Turning 30, 40, 50 or 60 deserves a detail that feels thought out, not a party-store joke. If you are planning a surprise for your mom, dad or partner, or a client's celebration, here is a visual style for each decade, what to personalize, when to order and how to avoid mistakes with the digital proof.",
    sections: [
      {
        heading: "Which personalized birthday favors for adults to choose by milestone",
        body: [
          "For an adult birthday, choose an understated favor that carries the guest of honor's name and the year, and repeat the same design on every piece. At Yume you can combine candy boxes, vinyl stickers and temporary tattoos for events, all with a digital proof before production.",
          "Many offers for these ages are novelty items: mugs, shirts or temporary tattoos with phrases like '50 and fabulous', or standard templates from online shops. If you are planning a surprise for your mom, dad or partner, think about the whole set before choosing separate pieces.",
          "A custom-product guide gives examples such as bottle openers, reusable cups and tote bags with the milestone age. Those are ideas from that market. Here we suggest pieces that Yume does produce and that look good on a party table.",
        ],
      },
      {
        heading: "A refined visual style for each decade",
        body: [
          "A simple way to get it right is to give each decade its own personality. For 40, choose a modern, clean design. For 50, a sophisticated one with few elements. For 60, a warm one that tells a story with photos or keepsakes. It is a design guide, not a rule.",
          "The table sums up one style idea for each age. Use it as a starting point and adjust it to the taste of the birthday guest. For a 30th birthday, you can start from the 40 style and add more color.",
        ],
        table: {
          headers: ["Decade", "Visual style", "What to personalize"],
          rows: [
            ["40 years", "Modern and clean", "Name and year in a simple typeface, with two colors"],
            ["50 years", "Sophisticated", "Name and year with few elements and understated colors"],
            ["60 years", "Warm, with a story", "A photo or a family detail, with a warm palette"],
          ],
        },
      },
      {
        heading: "What to personalize: name, year, photo or palette",
        body: [
          "Each piece can carry one or more of these elements: the guest of honor's name, the age they are turning, a photo or the party colors. What matters is repeating the same elements on every piece, so it reads as one set and not as favors from different shops.",
          "An industry guide also suggests including the name, the date or an inside joke, and coordinating colors, typeface and graphics with the invitation and the decor. If you already have the invitation, use it as a reference so everything looks like it belongs to the same party.",
          "At Yume you can order [personalized candy boxes in Guadalajara](/blog/dulceros-personalizados-guadalajara) (in Spanish) with a name and theme, [custom vinyl stickers](/productos/stickers-vinil-impermeable) with your design or photo, and temporary tattoos for events by quote. Everything comes with a digital proof before production.",
        ],
      },
      {
        heading: "How to combine candy boxes, stickers and temporary tattoos",
        body: [
          "Think of three pieces with the same design: the candy box as the main favor, a sticker as an extra keepsake and a temporary tattoo to liven up the party. If they repeat the name, year and palette, the three read as a polished set and not as party filler.",
          "The candy box arrives assembled and empty, so you choose what goes inside. For ideas, see [what to put in a candy box](/blog/que-poner-en-un-dulcero) (in Spanish). Keep the minimums in mind: candy boxes start at 10 pieces and vinyl stickers at 40.",
        ],
      },
      {
        heading: "When to order and how to avoid mistakes with the digital proof",
        body: [
          "As a general rule, a US custom-product blog recommends ordering adult birthday favors 2 to 4 weeks ahead. That is an outside reference, not a Yume deadline. For your exact dates, message us on WhatsApp, and always review the digital proof before you approve it.",
          "The same blog points out common mistakes: misspelling names or dates, not reviewing the digital proof before production, ignoring the minimum order and buying at the last minute. At Yume the digital proof reaches you before production, so check the guest of honor's name and year carefully before approving.",
        ],
      },
      {
        heading: "Adult birthdays for planners and companies: pieces per event",
        body: [
          "If you organize a client's celebration or your company's event, think in pieces per event: one design with name, year and palette for every guest. Yume works with a digital proof and direct contact on WhatsApp, so you can adjust the design before production.",
          "For planners, an adult birthday works like any other event: you define the name, year and palette with your client, send us that reference and we send the digital proof for them to approve. For a company, the same applies with the group name or your logo. To see how an event order comes together, read these [candy box ideas for November](/blog/dulceros-dia-de-muertos-noviembre) (in Spanish). For larger quantities, message us on WhatsApp and we will quote it.",
        ],
      },
      {
        heading: "How to order: design, digital proof and WhatsApp",
        body: [
          "The process is simple: you message us on WhatsApp, tell us who it is for and the style you imagine, and we prepare the design. Before producing, we send you a digital proof, and nothing is produced until you approve it. You arrive at the party with a favor you have already seen and approved.",
          "For prices and timing, message us on WhatsApp and we will quote the pieces you choose.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    faq: [
      {
        q: "Which pieces can I combine for an adult birthday?",
        a: "You can combine candy boxes with a name and theme, vinyl stickers with your design or photo, and temporary tattoos for events, all with the same design.",
      },
      {
        q: "Will I see the design before it is produced?",
        a: "Yes. We send you a digital proof before production and nothing is produced until you approve it.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with whatever you choose.",
      },
      {
        q: "Can I use a photo of the birthday guest?",
        a: "Yes. Vinyl stickers can be made with your design, character or photo.",
      },
      {
        q: "What is the minimum order?",
        a: "Candy boxes start at 10 pieces and custom vinyl stickers at 40 pieces.",
      },
      {
        q: "What should I include for a minimalist design?",
        a: "According to an industry guide, a minimalist style only needs the name and the date. You can add the party colors if you want it to match the invitation.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["que-poner-en-un-dulcero"]],
    sources: [],
  },
  {
    slug: "wedding-candy-boxes-for-kids",
    title: "Candy Boxes for Kids at a Wedding: Ideas and How to Hand Them Out",
    metaTitle: "Candy Boxes for Kids at a Wedding: Ideas",
    description:
      "Candy box ideas for kids at a wedding: what to put inside by age, how to match them to the wedding and when to hand them out.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "Children are guests too, and a gift with their name makes them feel part of the day. An individual candy box, designed with the wedding colors, looks planned and gives each child something of their own. Here is what to choose, what to put inside by age, how to handle allergies, how to personalize it, when and who hands it out, and how many to order.",
    sections: [
      {
        heading: "Candy boxes for kids at a wedding: what to choose",
        body: [
          "For the children at a wedding, choose an individual candy box with each child's name and the wedding colors. Every child gets something of their own that looks like part of the design, not an afterthought. It arrives assembled and empty, so you decide what goes inside.",
          "Our candy box is a lunch box style with a handle, and personalization includes the name and a theme. This is one piece per child, different from a candy table shared by all the guests.",
          "A wedding guide from 2012, which may be somewhat dated, recommends leaving a small gift on each child's plate, such as a bag of candy, a toy or a storybook, so they find it when they sit down. A named candy box serves the same purpose and looks like part of the decor.",
        ],
      },
      {
        heading: "What to put inside by each child's age",
        body: [
          "A guide to children's activity bags for weddings in Italy adjusts the contents by age: for ages 2 to 5, a coloring book, crayons, finger puppets and modeling clay; for 6 to 10, pencils, origami, wooden cars and a puzzle; for 11 to 13, 3D puzzles and origami.",
          "Those ideas are a starting point for filling a candy box that arrives empty. The same guide advises avoiding anything that stains, such as pencils instead of markers. A Spanish-language search result also warns against small objects children could swallow. For more filling ideas, read [what to put in a candy box](/blog/que-poner-en-un-dulcero).",
        ],
      },
      {
        heading: "Allergies and intolerances: ask before filling the box",
        body: [
          "Before choosing the filling, ask parents about intolerances or allergies for each child. A wedding guide makes that recommendation for children's meals, and it applies to candy too: you can add the question when guests confirm attendance, or leave it to your planner, and flag the contents on a label.",
          "Because the candy box arrives empty, you decide what goes inside and can adjust the filling for each child.",
        ],
      },
      {
        heading: "How to personalize the box to match the wedding",
        body: [
          "Each candy box carries the child's name and a theme. To match the wedding, send us a photo of the invitation or the decoration and we adapt the design to those colors. Before producing, we send a digital proof, and nothing is produced until you approve it.",
          "The Italian guide also suggests a printable activity book with the couple's names on the cover, and embroidered bibs with the wedding date for the youngest. Those are ideas from that guide, not from our catalog: our candy box is personalized with name and theme.",
        ],
      },
      {
        heading: "When and how to hand them out to the children",
        body: [
          "A wedding guide from Italy prepares the children's bags ahead of time, sets them up at the venue, labels each with the child's name and hands them out. It also recommends a table just for children. Use it as a logistics reference.",
          "With a named candy box that order gets simpler: each child finds their own.",
          "There are three possible moments: on the plate so they find it when they sit down, in hand during the party, or at the end to take home. Pick the one that fits your wedding schedule.",
        ],
      },
      {
        heading: "Who hands out the candy boxes: monitor, planner or venue",
        body: [
          "Someone has to hand each candy box to the right child. A Spanish wedding guide from 2012 proposes one monitor for every four children to accompany them, help them eat and keep them entertained. That person, your wedding planner or the venue staff can hand them out, depending on what you agree with them.",
          "If you work with a planner, share the list of names and the time you want them handed out. Since every candy box carries a name, whoever hands them out does not have to guess who each one is for.",
        ],
      },
      {
        heading: "How many candy boxes to order and how to get a quote",
        body: [
          "The minimum order is 10 pieces. Count the confirmed children on your guest list, message us on WhatsApp with their names and a photo of the invitation, and we will quote it. If your wedding is in Guadalajara, Zapopan or anywhere in Mexico, we ship to you.",
          "See the [personalized candy boxes](/productos/dulceros-personalizados) page for the product and, if the wedding is close to home, read the guide to [candy boxes in Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados"],
    faq: [
      {
        q: "Do the candy boxes include candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with the candy or gifts you choose.",
      },
      {
        q: "What does personalization include?",
        a: "The name and the theme you choose. We send a digital proof before producing and nothing is produced until you approve it.",
      },
      {
        q: "How many candy boxes should I order for a wedding?",
        a: "One for each confirmed child on your list, with a minimum order of 10 pieces.",
      },
      {
        q: "When should each child get their candy box?",
        a: "It can be on the plate when they sit down, in hand during the party, or at the end to take home. A wedding guide suggests leaving a small gift on each child's plate; set the moment with your planner or the venue.",
      },
      {
        q: "How do I look after guests' allergies?",
        a: "Ask parents about intolerances or allergies before choosing the filling, as a wedding guide suggests for children's meals. The candy box arrives empty, so you decide what goes inside.",
      },
      {
        q: "Who can hand out the candy boxes at the wedding?",
        a: "Whoever accompanies the children, your wedding planner or the venue staff. A wedding guide from 2012 proposes one monitor for every four children.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],

  },
  {
    slug: "company-anniversary-custom-details",
    title: "Custom details for your company anniversary",
    metaTitle: "Custom company anniversary details by milestone",
    description:
      "How to choose custom company anniversary details by milestone and recipient, with your logo and a digital proof. For companies and planners.",
    category: "Guides",
    publishedAt: "2026-11-03",
    modifiedAt: "2026-11-05",
    intro:
      "A company anniversary is remembered through small details that carry the right name: the number of years, the logo and a short message. Here you will see how to choose the detail by milestone (5, 10, 20, 30, 40 or 50 years) and by who receives it, when a candy box with your logo or a sticker makes sense, what to check with your accountant, and how to plan a small order per event, with a digital proof before production. It is written for the company that hosts and for the planner who coordinates.",
    sections: [
      {
        heading: "Custom company anniversary details: how to choose",
        body: [
          "Choose the detail by the anniversary milestone and by who receives it. Common milestones are 5, 10, 20, 30, 40 and 50 years or more, and recipients are usually the team, clients and partners. A detail with the company name and the anniversary number feels made for the occasion.",
          "An industry guide says adding a name, date or message turns a functional object into something people keep. A candy box or a logo sticker can do that. The guide also notes that timing matters more than one big gesture a year and that each gift should feel meant for that person. That is why it helps to design the detail for one specific event instead of picking one from a catalog.",
        ],
      },
      {
        heading: "What to personalize for each anniversary milestone",
        body: [
          "The most common anniversary milestones are 5, 10, 20, 30, 40 and 50 years. At each one, what changes is the number and the message; the logo and brand colors stay the same. That way the detail is tied to that specific date.",
          "Gifts with a logo help strengthen the relationship with employees and clients, according to a guide to company anniversary ideas. For your order, define three things: the anniversary number or date, a short message and the event name. With that, the design with your logo is ready for the digital proof.",
        ],
      },
      {
        heading: "Which detail to give the team, clients and partners",
        body: [
          "Think first about who receives it. For the team, a detail with the anniversary number and the company name. For clients, one with their name or the event's name. For partners, one with your logo and a short thank-you message. The message changes, not the brand identity.",
          "An industry guide suggests, for example, notebooks with the name and date of a shared project, or a box with a handwritten note for key clients. The same logic applies to a candy box or a sticker: the client's or the event's name makes it feel meant for that person.",
        ],
      },
      {
        heading: "Custom candy box with your logo for your company anniversary",
        body: [
          "The custom candy box is a concrete option for a company event. It is a lunch box style with a handle, arrives assembled and empty so you choose what goes inside, and the personalization includes the name and theme, plus your company logo. The minimum order is 10 pieces.",
          "Because it arrives empty, the filling is up to you. Add the event name, the anniversary number and your brand colors in the design, and you get a piece that looks planned for that occasion. For filling ideas, read [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box). If your event is in Guadalajara, see [personalized party favor boxes in Guadalajara](/en/blog/personalized-party-favor-boxes-guadalajara).",
        ],
      },
      {
        heading: "Logo stickers to go with the anniversary detail",
        body: [
          "Logo stickers can go alongside the candy box or decorate a welcome bottle. You can order them with your company logo or an anniversary design. [Custom logo stickers](/en/products/custom-logo-stickers) have a 50-piece minimum, come die cut or kiss cut, and are printed in matte, glossy or holographic.",
          "If you prefer an illustration for the event instead of the logo, there are [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) with a 40-piece minimum. All our stickers have high-quality BOPP laminate. Vinyl stickers go through a digital proof before printing.",
        ],
      },
      {
        heading: "Is an anniversary gift deductible? What to ask your accountant",
        body: [
          "It depends on who receives it and how you document it. According to a tax article, Article 28, section III of Mexico's Income Tax Law (LISR) makes gifts non-deductible in general, except those tied to sales or services and offered to clients in a general way. Confirm your case with your accountant.",
          "That is why an anniversary detail given to all clients fits that exception better than a gift to one particular client. For employees, several accounting firm sources say gifts could be deductible as social benefits (Article 7 of the LISR) if they meet requirements such as an invoice (CFDI), accounting records and bank payment, and that cash gifts count as income for the worker. The sources do not fully agree on in-kind gifts. This is general guidance, not tax advice.",
        ],
      },
      {
        heading: "How to plan the anniversary order with your planner",
        body: [
          "Plan the order from the guest list and each piece's minimum: 10 candy boxes, 50 logo stickers or 40 vinyl stickers. Define the event name, the anniversary date or number and a short message. Before production you receive a digital proof, and nothing is printed without your approval.",
          "If you coordinate the event as a planner, send us a photo of the invitation or the decoration on WhatsApp and we will adapt the design to those colors. To confirm production and shipping dates, write to us before you set the event day. If your anniversary falls during posada season, see [personalized Christmas treat boxes](/en/blog/personalized-christmas-treat-boxes).",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-logo-personalizado", "stickers-vinil-impermeable"],
    faq: [
      {
        q: "Can I put my company logo on the candy box?",
        a: "Yes. The personalization includes the name and theme you choose, including your brand's logo, and we send a digital proof before producing.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with whatever you choose.",
      },
      {
        q: "How long does the digital proof take for vinyl stickers?",
        a: "It normally arrives within 24 hours after your payment and includes up to 2 rounds of adjustments.",
      },
      {
        q: "What is the difference between logo stickers and vinyl stickers?",
        a: "Logo stickers are meant for your business logo and have a 50-piece minimum. Vinyl stickers work for any design, character or photo and have a 40-piece minimum.",
      },
      {
        q: "Is there a maximum deductible amount for anniversary gifts?",
        a: "The sources we reviewed give no amount limits or exact invoice (CFDI) requirements for client gifts. Ask your accountant before buying.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["dulceros-navidenos-personalizados"]],

  },
  {
    slug: "wedding-planner-custom-details-guadalajara",
    title: "Custom details supplier for wedding planners in Guadalajara",
    metaTitle: "Custom details supplier for wedding planners",
    description:
      "A guide for wedding planners in Guadalajara: how to quote custom details per event, approve digital proofs and coordinate matching wedding pieces.",
    category: "Guides",
    publishedAt: "2026-11-05",
    modifiedAt: "2026-11-07",
    intro:
      "You coordinate several weddings and need a supplier who delivers the same quality every time. This guide explains how to request a quote, approve digital proofs, set deadlines and bring candy boxes, stickers and temporary tattoos together in one visual line for your clients in Guadalajara, Zapopan and all of Mexico.",
    sections: [
      {
        heading: "What a custom details supplier for wedding planners should offer",
        body: [
          "A custom details supplier for wedding planners should give you a clear process: a quote per event, a design with a digital proof before production, direct communication and pieces that match each other. Your volume is per wedding, not industrial, so what matters is that every event looks planned and you know what to expect at each step.",
          "This guide is for you, the planner who coordinates several weddings. To see one of the pieces first, check our [custom candy boxes in Guadalajara](/blog/dulceros-personalizados-guadalajara).",
        ],
      },
      {
        heading: "How to request a quote per event",
        body: [
          "To quote a wedding, message us on WhatsApp with the basics of the event: date, city, number of guests, color palette, the pieces you are interested in and the texts or names they will carry. With that we can guide you on quantities and minimums, and tell you if anything needs confirming before production.",
          "Published minimums are 10 pieces for candy boxes, 40 pieces for [custom vinyl stickers](/productos/stickers-vinil-impermeable) and 50 pieces for logo labels. Tell us about your whole event and we quote the pieces together.",
        ],
        table: {
          headers: ["Brief detail", "What it lets us define"],
          rows: [
            ["Date and city", "How to coordinate delivery"],
            ["Number of guests", "Quantities and minimums"],
            ["Color palette", "A design that matches the decor"],
            ["Pieces of interest", "What is quoted together"],
            ["Texts and names", "A correct digital proof from the start"],
          ],
        },
      },
      {
        heading: "How a per-wedding order works",
        body: [
          "Each wedding is quoted as a separate order: you send us the brief over WhatsApp with date, city, guests, palette, pieces and texts, and we quote the event's pieces together. That way each wedding has its own quote and you can keep a consistent visual line across the weddings you coordinate.",
        ],
      },
      {
        heading: "Digital proofs and text approval",
        body: [
          "For vinyl stickers we send a digital proof before printing, and nothing is printed without your approval. Check names, dates, spelling and colors with the couple, because that is the control point of the order. It helps if one person, you or the couple, has the final say.",
          "For vinyl stickers, the proof normally arrives within 24 hours after payment and includes up to 2 rounds of adjustments.",
        ],
      },
      {
        heading: "Deadlines: when to lock texts and changes",
        body: [
          "Lock texts and approval with room to spare, not the week of the wedding. A planning guide recommends reviewing details with all suppliers about one month before the event. Use that as a reference date so a last-minute change does not put your delivery at risk.",
          "We confirm production and shipping times for each piece over WhatsApp when we quote, once we know your event date.",
        ],
      },
      {
        heading: "A matching set: candy boxes, stickers and temporary tattoos",
        body: [
          "When candy boxes, stickers and temporary tattoos share a palette, typography and texts, the wedding looks planned from start to finish. Designing them together for one event gives you a consistent visual identity, and you coordinate a single supplier instead of several.",
          "The candy box arrives assembled and empty, with a name and theme; you or the couple decide what goes inside. For filling ideas, see [what to put in a candy box](/blog/que-poner-en-un-dulcero). Temporary tattoos for events are quoted over WhatsApp.",
          "Vinyl stickers can be ordered with a die cut or kiss cut, and with a matte, glossy or holographic finish. If you also want to brand your own deliverables, we have [labels with your logo](/productos/stickers-logo-personalizado).",
        ],
      },
      {
        heading: "What to ask your supplier to put in writing",
        body: [
          "Ask for what you agreed in writing: pieces and quantities, final texts, number of digital proofs included, change deadline, payment method, production time and delivery method. A summary over WhatsApp or email prevents misunderstandings and gives you backup when the couple changes their mind.",
          "It is worth agreeing on punctual delivery and careful packaging in advance.",
        ],
        table: {
          headers: ["What to confirm", "Why it matters"],
          rows: [
            ["Pieces and quantities", "The order covers every guest"],
            ["Final texts", "Avoid mistakes in names and dates"],
            ["Digital proofs and adjustments", "Know how many revisions there are"],
            ["Change deadline", "Protect the delivery"],
            ["Payment, timing and delivery", "Fit your event calendar"],
          ],
        },
      },
      {
        heading: "How to start with your next wedding",
        body: [
          "Tell us the date, the number of guests and the palette of your next wedding, and we will put together a quote for the pieces you need. If you work several weddings a year, we can keep a consistent design and communication approach with you. Message us on WhatsApp from the quote button at the end of this page.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage:
      "Hi, I'm a wedding planner and I'd like a quote for custom wedding details: candy boxes, stickers and temporary tattoos.",
    sources: [],
    faq: [
      {
        q: "Do you ship pieces outside Guadalajara?",
        a: "Yes, we ship all over Mexico. Tell us your event city over WhatsApp and we confirm delivery.",
      },
      {
        q: "Can I get a quote for temporary tattoos for a wedding?",
        a: "Yes. Temporary tattoos for events are quoted over WhatsApp together with the rest of your event pieces.",
      },
      {
        q: "Can I combine candy boxes and stickers in one order?",
        a: "Yes. Tell us about your whole event over WhatsApp and we quote the pieces together.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, with a name and theme, so you or the couple decide what goes inside.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["que-poner-en-un-dulcero"]],

  },
  {
    slug: "personalized-surprise-gift-ideas-candy-boxes",
    title: "Personalized Surprise Gift Ideas with Candy Boxes",
    description:
      "Personalized surprise gift ideas with candy boxes for mom, your partner or a wedding: what goes inside, what to personalize and how to plan delivery.",
    category: "Guides",
    publishedAt: "2026-11-05",
    modifiedAt: "2026-11-07",
    intro:
      "Giving candy is easy; making it feel like a personalized surprise gift is the hard part. A candy box (dulcero) with a name and a theme turns the favorite sweets of your mom, your partner or your guests into a gift that looks planned. Here are ideas by occasion and by person, regional Mexican sweets to add some history, what to personalize, what to put inside and how to order with time to spare.",
    sections: [
      {
        heading: "What is a personalized surprise gift with a candy box?",
        body: [
          "A personalized candy box (dulcero) is a lunch box style container with a handle that carries the name and theme you choose and arrives assembled and empty for you to fill. It works as a surprise gift for birthdays, anniversaries and weddings, and also as a table detail for an event.",
          "A personalized surprise gift works when it carries something that only makes sense for that person: a name, a theme or a detail they love. In Mexico, according to a survey, 56% of people buying a gift for their mom choose food and drinks and 37% choose something personalized. A candy box brings both together.",
          "A gift guide for mom separates personalized gifts (albums, jewelry with names or dates) from food gifts, where personalization is limited to a handwritten note and the wrapping. A candy box with a name and a theme joins both ideas: it is food and it is a design made for one person.",
        ],
      },
      {
        heading: "Surprise gift ideas with candy for mom",
        body: [
          "For mom, a candy box with her name and a theme she recognizes, like flowers or her favorite colors, works well. You choose what goes inside: her usual sweets, chocolates or cookies. That way the gift looks cared for and tastes like what she loves.",
          `If the surprise comes from several children, you can order one candy box for each sister, aunt or grandmother, each with her own name. The minimum order is 10 pieces, so this idea fits best when the gift is shared among several people. If you are unsure what to put inside, see the guide to [what to put in a candy box](/en/blog/${BLOG_SLUG_EN["que-poner-en-un-dulcero"]}).`,
        ],
      },
      {
        heading: "Ideas for your partner: anniversary, birthday and Valentine's Day",
        body: [
          "For your partner, the candy box can carry both your names and a theme that recalls something about you two, like a trip or a color. It works for an anniversary, a birthday or Valentine's Day. The sweets inside are their favorites, and the design is what turns it into a gift and not just a box of candy.",
          "For an anniversary, a candy box with both names and the colors that represent you two looks like a planned detail.",
        ],
      },
      {
        heading: "Quick ideas by occasion: a table to decide",
        body: [
          "If you want a quick idea, think of three things: who the surprise is for, which occasion it celebrates and which sweets they like. With those three answers you can define the name, the theme and the filling of the candy box, and ask for the digital proof.",
          "The table sums up design and filling ideas. They are suggestions: you define the final theme and we adapt it to your references.",
        ],
        table: {
          headers: ["Occasion", "Name and theme", "Filling"],
          rows: [
            ["Mom's birthday", "Her name and flowers or her favorite colors", "Her usual sweets"],
            ["Anniversary", "Both names and the colors that represent you", "Both of your favorite sweets"],
            ["Valentine's Day", "Your names and a detail about you two, like a trip", "Chocolates or cookies"],
            ["Surprise from several children", "One name for each sister, aunt or grandmother", "Traditional Mexican candy"],
            ["Wedding or event", "The event's name and its theme", "Regional Mexican sweets"],
          ],
        },
      },
      {
        heading: "Regional Mexican sweets: a detail with history",
        body: [
          "Traditional Mexican sweets have pre-Hispanic origins: they were sweetened with maguey honey, honey ants, corn cane and pipiola bee honey, and later piloncillo replaced them. That is why traditional candy as filling gives the candy box some history, beyond the flavor.",
          "According to a regional guide, each sweet is tied to a region: muéganos from Huamantla, Tlaxcala; alegrías from Xochimilco, Mexico City; cocadas from Veracruz; camote from Puebla; glorias from Linares, Nuevo León; jamoncillo from Axochiapan, Morelos; and dulce de leche or manjar from Celaya, Guanajuato. If the person comes from one of those places, you can fill the candy box with sweets from their state.",
          "The same article presents artisanal candy as a carrier of memories, experiences and emotions, which is exactly the idea of a surprise gift: the filling reminds the recipient of something.",
        ],
      },
      {
        heading: "What to personalize: name, theme and details",
        body: [
          "The personalization of our candy box includes the name and the theme you choose. With that you can build a gift for one person, with a theme they like. Any other detail, like a date or a phrase, is checked over WhatsApp when you request a quote, because it depends on the design.",
          "Our candy box is lunch box style, with a handle. Send us a reference of the colors or the style that person likes and we adapt the design. If you want to add a small detail with the same design, you can also order [personalized vinyl stickers](/en/products/waterproof-vinyl-stickers).",
        ],
      },
      {
        heading: "What to put inside the gift candy box",
        body: [
          "The candy box arrives assembled and empty, so you decide what goes inside, and that is where the surprise is. Pick the recipient's favorite sweets: chocolates, cookies, gummies or traditional Mexican candy. What matters is that the filling feels like that person and the design of the candy box does the rest.",
          "On budget: in the same survey, the most common spending range for a gift for mom in Mexico is $201 to $1,000 pesos (58%), and 9% spend between $1,001 and $1,900. Think of this gift as a thoughtful mid-range detail, where the design and what goes inside matter more than the lowest price.",
        ],
      },
      {
        heading: "For weddings, planners and company events",
        body: [
          "A candy box can also work as a table detail or keepsake for a wedding, a birthday or a company event. If you are a planner or you organize an event, you can order several with the event's name and theme, always with a digital proof before production.",
          `The minimum order is 10 pieces, and the exact quantity and the timing for your event are confirmed over WhatsApp when you request a quote. If your date falls in season, see ideas for [Day of the Dead and November candy boxes](/en/blog/${BLOG_SLUG_EN["dulceros-dia-de-muertos-noviembre"]}) or [personalized Christmas candy boxes](/en/blog/${BLOG_SLUG_EN["dulceros-navidenos-personalizados"]}).`,
        ],
      },
      {
        heading: "How to coordinate the surprise and order ahead",
        body: [
          "Order the candy box ahead of time: you quote over WhatsApp, we send a digital proof of the design, and nothing is produced until you approve it. For a specific date, like an anniversary or Valentine's Day, ask about production and shipping times before you decide.",
          "A simple order: define who the surprise is for and the occasion, choose the name and the theme, send a color reference, quote over WhatsApp, approve the digital proof and, when it arrives, fill the candy box with the sweets you chose.",
          `We serve Guadalajara, Zapopan and ship across Mexico. If you are in the area, see [personalized candy boxes in Guadalajara](/en/blog/${BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]}). Write to us on WhatsApp with the occasion, the name and the date you need it, and we will tell you what is possible.`,
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    sources: [
    ],
    faq: [
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready for you to fill with the sweets you choose.",
      },
      {
        q: "What can be personalized on the candy box?",
        a: "The name and the theme you choose. If you want to add a date or a phrase, write to us on WhatsApp when you quote and we will confirm.",
      },
      {
        q: "What is the minimum order?",
        a: "The minimum order is 10 pieces, so it fits when the gift is shared among several people or covers an event.",
      },
      {
        q: "Do I see the design before it is produced?",
        a: "Yes. We send a digital proof of the design and nothing is produced until you approve it.",
      },
      {
        q: "How far ahead should I order for a special date?",
        a: "It depends on the date. Write to us on WhatsApp with the day you need it and we will confirm production and shipping times.",
      },
      {
        q: "Where are muéganos and cocadas from?",
        a: "According to a regional guide, muéganos are tied to Huamantla, Tlaxcala, and cocadas to Veracruz. You can use sweets from the honoree's region as filling.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["dulceros-dia-de-muertos-noviembre"], BLOG_SLUG_EN["dulceros-navidenos-personalizados"]],

  },
  {
    slug: "how-many-candy-boxes-to-order-for-a-wedding",
    title: "How many candy boxes to order for a wedding",
    description:
      "How many candy boxes to order for a wedding: turn confirmed guests into pieces, plan a reserve and know when to lock the count with your planner.",
    category: "Guides",
    publishedAt: "2026-11-07",
    modifiedAt: "2026-11-09",
    intro:
      "Before ordering your wedding candy boxes it helps to know how many you need: one per guest covers the handout, but not the couple, the candy table or last-minute changes. This guide shows you how to go from the guest list to the final number of pieces, with examples by wedding size, written for brides and for wedding planners.",
    sections: [
      {
        heading: "How many candy boxes to order for a wedding: the simple rule",
        body: [
          "Order one candy box per confirmed guest, or one per couple or family if you hand them out that way, then add a reserve for the couple, the candy table and any last-minute changes. Close the count after RSVPs arrive, because the guest list can change right up to the end.",
          "This differs from a candy bar. Candy bar guides calculate by weight of sweets or by number of jars, because the candy is served loose. A candy box is an individual piece, so it is counted per person.",
        ],
      },
      {
        heading: "Per person or per couple: how to count candy boxes",
        body: [
          "Count per person if every guest takes home their own candy box with their name or the wedding design. Count per couple or family if you leave one for each group that arrives together. Decide this first, because it changes the total and how your planner organizes the handout.",
          "Children count too if they get their own favor. Write them on the list before adding up, and decide with the couple or family whether a guest who comes with a plus-one gets one box or two.",
        ],
      },
      {
        heading: "From guests to pieces: a step-by-step example",
        body: [
          "Add your confirmed guests, add pieces for the couple and the candy table, and finish with a reserve. With 120 confirmed guests, one candy box per person, 2 for the couple, 4 for the candy table and a reserve of 6, the order would be 132 pieces. This is an illustrative example, not a third-party figure.",
          "The numbers in the table only show the sum; change each line to fit your list. The minimum order for candy boxes is 10 pieces, and you can order any quantity from there.",
        ],
        table: {
          headers: ["Item", "Pieces", "How it is counted"],
          rows: [
            ["Confirmed guests", "120", "One per person"],
            ["Couple", "2", "One for each"],
            ["Candy table", "4", "To display on the table"],
            ["Reserve", "6", "Last-minute changes and damaged pieces"],
            ["Order total", "132", "Sum of everything"],
          ],
        },
      },
      {
        heading: "Examples of how many candy boxes to order by wedding size",
        body: [
          "Delivering per person follows your guest list; delivering per couple or family follows the number of groups. That is why the same 120-guest wedding can order 132 pieces per person or 80 per group, based on the example below. Choose how you will hand them out before counting, and ask your planner for the list in that format.",
          "The extras in each row are example assumptions, not a recommendation: change the couple, table and reserve to fit your wedding. Remember that the minimum order is 10 pieces.",
        ],
        table: {
          headers: ["Example wedding", "How they are handed out", "Count", "Total"],
          rows: [
            ["50 guests", "Per person", "50 + 2 couple + 2 table + 2 reserve", "56"],
            ["120 guests", "Per person", "120 + 2 couple + 4 table + 6 reserve", "132"],
            ["120 guests in 70 groups", "Per couple or family", "70 + 2 couple + 4 table + 4 reserve", "80"],
            ["200 guests", "Per person", "200 + 2 couple + 6 table + 10 reserve", "218"],
          ],
        },
      },
      {
        heading: "How many extra candy boxes to reserve",
        body: [
          "There is no fixed number of extras that works for every wedding. A general guideline is that it depends on the price of each piece: with cheap favors, having spares costs little, and with expensive ones it may not be worth it. Reserve more if guests may switch from No to Yes, or if the wedding is a destination wedding.",
          "Candy boxes are ordered by the piece from 10, so the reserve adjusts to whatever number you decide.",
        ],
      },
      {
        heading: "Candy bar or candy box: why they are not counted the same way",
        body: [
          "A candy bar is calculated by weight of sweets or by number of jars because the candy is served loose; an individual candy box is counted by the piece. Industry guides give figures for the candy bar, not for candy boxes, so they do not tell you how many pieces to order.",
          "As a reference from that guide, written for a candy bar of sweets: about 150 g per guest at small weddings, about 100 g at medium ones and about 80 g at large ones. It suggests 4 to 6 medium jars for 50 guests, 10 or 12 for 50 to 150 and 15 or 16 for about 200, and gives about 10 kg of sweets for 100 people as an example.",
          "What is useful from those figures is the underlying idea: the amount per person goes down when there are more guests. With candy boxes the logic is different, because each piece already holds its own portion.",
        ],
      },
      {
        heading: "Candy boxes for the candy table and for each place setting",
        body: [
          "Separate three uses before counting: the candy box handed to each guest, the ones displayed filled on the candy table, and the reserve. This way you do not mix handout pieces with decoration pieces, and you can close each figure separately once you have the final list.",
          "According to industry guides, a candy bar accompanies dessert and the banquet rather than replacing them, and is usually placed near the dance floor or opened after the meal. For the design and setup of the table, see our guide to a [wedding candy table](/en/blog/wedding-candy-table-custom-candy-boxes).",
          "The candy box arrives assembled and empty, so you choose what goes inside. If you need ideas, see [what to put in a candy box](/en/blog/what-to-put-in-a-party-favor-box).",
        ],
      },
      {
        heading: "When to lock the number and how to coordinate with your planner",
        body: [
          "Lock the quantity once you have attendance confirmations, and tell your supplier your wedding date. If you work with a wedding planner, ask for the final list per person or per couple, so the order, the digital proof and the delivery all use the same number.",
          "Before production we send you a digital proof of the design, and nothing is produced until you approve it. Production and shipping times depend on your date: write to us on WhatsApp with your wedding day and we will confirm them.",
          "If you want to see how we work, discover our [personalized candy boxes](/en/blog/personalized-party-favor-boxes-guadalajara) in Guadalajara, with shipping throughout Mexico.",
        ],
      },
    ],
    relatedProductSlugs: [],
    quoteMessage: "Hi, I would like a quote for personalized candy boxes for my wedding.",
    sources: [],
    faq: [
      {
        q: "How many candy boxes should I order for a wedding of 100 guests?",
        a: "Start from one candy box per confirmed guest, which is 100 pieces, and add those for the couple, the candy table and the reserve you decide.",
      },
      {
        q: "How many candy boxes should I order if I give one per couple or family?",
        a: "Count the groups that arrive together instead of the guests, then add those for the couple, the candy table and your reserve.",
      },
      {
        q: "What is the difference between a candy bar and a candy box?",
        a: "A candy bar is calculated by weight of sweets or by number of jars. A candy box is an individual piece and is counted per person or per group.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with whatever you choose.",
      },
      {
        q: "What is the minimum order for candy boxes?",
        a: "The minimum order is 10 pieces, and from there you can order the exact quantity you need.",
      },
    ],
    relatedBlogSlugs: [BLOG_SLUG_EN["mesa-de-dulces-para-boda"], BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["dulceros-personalizados-guadalajara"]],

  },
  {
    slug: "what-sweets-to-put-in-a-wedding-candy-dish",
    title: "What sweets to put in a wedding candy dish: ideas for adults",
    description:
      "What sweets to put in a wedding candy dish for adults: ideas by profile, how many kinds to pick, grams per guest and how to present them.",
    category: "Guides",
    publishedAt: "2026-11-09",
    modifiedAt: "2026-11-10",
    intro:
      "A wedding candy dish does not need to be a huge table of candy. With adult guests, what counts is a short selection, with well-chosen flavors and coordinated with the rest of the banquet. This guide is for you, your partner and the wedding planner: which sweets to put, how many kinds to pick, how many grams to plan per guest and how to present them.",
    sections: [
      {
        heading: "What sweets to put in a wedding candy dish for adults",
        body: [
          "For adult guests, a short selection with character works best: dark chocolate, nuts, citrus, a touch of liqueur and one classic sweet for anyone who prefers something simple. Pick pieces that can be eaten in one bite and that go with the menu, instead of filling the table with children's candy.",
          "A candy dish is smaller than a full candy table. If you want a large table, see our guide to the [wedding candy table](/en/blog/wedding-candy-table-custom-candy-boxes). For more filling ideas, see [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box).",
        ],
      },
      {
        heading: "Ideas by profile: classic, chocolate, fruity and sweet-and-salty",
        body: [
          "Build the dish by flavor profile and take one or two pieces from each: classic, chocolate, fruity, sweet-and-salty and one sugar-free or vegan option. That way every adult guest finds something they like, the selection looks varied and it does not fill up with options nobody finishes.",
        ],
        table: {
          headers: ["Profile", "Ideas for adults"],
          rows: [
            ["Classic", "Marshmallows, soft candies, licorice and gummies"],
            ["Chocolate", "Truffles, dark chocolate and mini brownies"],
            ["Fruity", "Gummies, dried fruit and candied citrus"],
            ["Sweet-and-salty", "Walnuts or almonds next to a sweet"],
            ["With liqueur", "Liqueur-filled chocolates, for adults only"],
            ["Sugar-free or vegan", "One well-labeled option"],
          ],
        },
      },
      {
        heading: "How many kinds of sweets and how many grams per guest",
        body: [
          "Choose four to seven kinds of sweets: variety, not quantity. As a starting point, plan 150 to 200 g per guest if there are other desserts. These are approximate references from calculators and guides, not an official rule, and they change with the time of day, the menu and whether guests take sweets home.",
          "An Argentine calculator drops to 80 to 100 g if the table is only decorative and rises to about 300 g if it replaces the dessert table. In English, another calculator suggests 2 to 4 oz (about 50 to 113 g) per guest if there are other desserts, and 4 to 6 oz (113 to 170 g) if the sweets are the main event. A candy retailer's guide speaks of one third to half a pound per guest and recommends going a little over rather than falling short.",
          "These are seller guides and calculators, not measured data. As simple math on those references: for 100 guests with other desserts, 150 to 200 g per guest adds up to 15 to 20 kg in total.",
        ],
        table: {
          headers: ["Role of the candy dish", "Approximate reference"],
          rows: [
            ["Decorative only", "80 to 100 g per guest"],
            ["With other desserts", "150 to 200 g per guest"],
            ["Replaces the dessert table", "About 300 g per guest"],
            ["English reference, with other desserts", "2 to 4 oz (about 50 to 113 g) per guest"],
          ],
        },
      },
      {
        heading: "How to match the candy dish to the menu and the time of day",
        body: [
          "Think of the candy dish as part of the banquet, not an add-on. If there is already dessert, the sweets become a small touch and smaller amounts are enough; if they replace dessert, you need more. According to an industry guide, less sweet is eaten at midday than at a lighter wedding dinner.",
          "The same guide notes that a classic banquet serves one dessert portion per guest and that it is wise to keep something extra in reserve. With that in mind, define the role of the candy dish first and then pick the amount from the table above.",
          "Ask your caterer or planner whether there is already dessert and what time the candy dish will open.",
        ],
      },
      {
        heading: "How to present the candy dish: labels and personalization",
        body: [
          "Present a few well-kept options: a short selection looks tidy rather than crowded. Group the sweets by profile, label each one with its name and let the candy dish carry the couple's names and your wedding theme, so the table feels coordinated with the rest of the event.",
          "Our [custom candy boxes](/en/products/personalized-party-favor-boxes) arrive assembled and empty, so you choose what goes inside. Personalization includes the name and the theme you choose, and we send a digital proof before production. To work out how many you need, see [how many candy boxes to order for a wedding](/en/blog/how-many-candy-boxes-to-order-for-a-wedding) and message us on WhatsApp for a quote.",
        ],
      },
      {
        heading: "Sweets to take home: how many small bags per guest",
        body: [
          "If guests take sweets home, plan one to one and a half small bags per guest, according to an Argentine calculator. Container size limits how much candy fits per person, and if the wedding is mostly adults, smaller bags save money.",
          "If you want the gift to look just as polished at home, you can add [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) with your design. We send a digital proof before printing.",
        ],
      },
      {
        heading: "How to decide on your candy dish in four questions",
        body: [
          "Before buying, answer four questions: do the sweets replace dessert or go with it, will guests eat them at the wedding or take them home, what time does the table open, and how many adults are attending? With those answers, the gram range and the variety almost decide themselves.",
          "As simple math on those references: for 100 guests with a decorative-only table, 80 to 100 g adds up to 8 to 10 kg. These are calculations on approximate references, not a guaranteed amount.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable"],
    relatedBlogSlugs: ["what-to-put-in-a-party-favor-box", "personalized-party-favor-boxes-guadalajara", "wedding-candy-table-custom-candy-boxes", "how-many-candy-boxes-to-order-for-a-wedding"],
    faq: [
      {
        q: "How many grams of sweets should I plan per guest?",
        a: "As a starting point, 150 to 200 g per guest if there are other desserts, according to an Argentine calculator. It is an approximate reference, not an official rule.",
      },
      {
        q: "How many kinds of sweets should I put out?",
        a: "A Spanish newspaper recommends four to seven different options: variety, not quantity.",
      },
      {
        q: "How many small bags to take home should I plan per guest?",
        a: "An Argentine calculator recommends 1 to 1.5 small bags per guest.",
      },
      {
        q: "Do the candy dishes come with sweets?",
        a: "No. The candy dish arrives assembled and empty, so you choose what goes inside.",
      },
      {
        q: "What does personalization of the candy dish include?",
        a: "The name and the theme you choose. We send a digital proof before production.",
      },
    ],
  },
  {
    slug: "digital-proof-event-order-planners",
    title: "Digital proof for event orders: a guide for planners",
    description:
      "How to approve a digital proof for an event order without delays: what to send, change rounds, screen color and a timeline for planners.",
    category: "Guides",
    publishedAt: "2026-11-09",
    modifiedAt: "2026-11-11",
    intro:
      "For a planner, the digital proof is the last filter before production. If it arrives with complete details and organized comments, there are fewer rounds; if not, it can move the whole event date. Here is what to send, how to protect your change rounds, what to check, what to expect from screen color and how to plan your timeline backwards from the event date.",
    sections: [
      {
        heading: "Digital proof for planners: what it is and why it sets the calendar",
        body: [
          "A digital proof is an image of your custom design that you review before production. For a planner it is the starting point of production: print shops often start only once the client approves, and some do not fix errors that were already in the approved proof. Treat it as a formal handoff.",
          "At Yume we work with a digital proof before printing. For our [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) the proof normally arrives within 24 hours after your payment, includes up to 2 rounds of adjustments and nothing is printed without your approval. For other event pieces, ask on WhatsApp what your order includes.",
          "If you coordinate several suppliers, the proof date is the first one to tie to the event calendar, because everything that follows depends on it. Below we explain how to calculate it.",
        ],
      },
      {
        heading: "What details to send before the proof arrives",
        body: [
          "Send everything in a single message: final proofread texts, full names, event date and time, quantities, color palette and a reference of the invitation or decor. With incomplete details the proof gets repeated and you may use up the included adjustment rounds, so wait until you have the final version.",
          "As a reference, one stationery supplier starts counting its proof timeline when it receives the final text, and another counts its timeline from the moment it receives the contract, payment and final text. Those are individual suppliers' policies, not an industry standard or a Yume lead time. If your client is still deciding the text, wait until it is settled before asking for the proof.",
          "To keep everything you need to gather per event in one place, see the [planner checklist for custom favors orders](/en/blog/planner-checklist-custom-favors-order-event).",
        ],
      },
      {
        heading: "How to gather everyone's comments without using up rounds",
        body: [
          "Name one person to collect comments from the planner, the client, the family or the company, and send your supplier a single message with all changes together. That way one adjustment round covers every opinion. Yume's vinyl stickers include up to 2 adjustment rounds.",
          "Many suppliers limit rounds. One wedding stationery studio includes two rounds of revision, and another allows two rounds plus a final proof, with a charge for each extra proof. These are examples from individual suppliers, not a market rule. One supplier asks for concise comments to avoid using up rounds.",
          "If you work on WhatsApp with Yume, forward the proof to the group of decision makers, collect their answers and reply once with a numbered list, for example for [stickers with your logo](/en/products/custom-logo-stickers) for the event. When everyone agrees, write a clear 'approved'.",
        ],
      },
      {
        heading: "What to check in the proof before approving it",
        body: [
          "Check first what cannot be fixed later: spelling of names, dates, times, quantities, measurements and where the design sits on the piece. Compare each detail with the client's final information. Some print shops are not responsible for errors that were already in the approved proof.",
          "One wedding signage supplier also asks you to check date formatting. Another supplier explains that after final approval it does not review spelling, punctuation or content again, because the approved proof is used directly to manufacture. Another states that once an order is in production, changes can no longer be made. Those are their policies, but they show why a calm review matters before you sign off.",
        ],
        table: {
          headers: ["What to check", "Question to confirm"],
          rows: [
            ["Names", "Are they spelled the way the client wants?"],
            ["Date and time", "Do they match the final invitation?"],
            ["Addresses", "Are the address and venue correct?"],
            ["Quantities", "Is it the number of pieces you ordered?"],
            ["Measurements and placement", "Is the design where it should be and at the agreed size?"],
            ["Colors", "Do they follow the event palette? Remember that screens can vary."],
          ],
        },
      },
      {
        heading: "Why screen color can differ from the printed piece",
        body: [
          "Screens emit light (RGB) while paper reflects light off ink (CMYK), so very bright or saturated tones often look duller when printed. A digital proof is only a simulation and depends on a calibrated monitor: it does not guarantee the exact color you see on your phone screen.",
          "One printing guide recommends ordering a printed copy to test color before a large order. Another supplier notes that the paper and the printing method, offset or digital, also affect color, and that for several pieces to match it helps to use the same paper and order and print everything at the same time.",
          "If the wedding or client color is critical, say so before approving and ask on WhatsApp what options exist for your order. We do not promise that the screen shows the exact printed color.",
        ],
      },
      {
        heading: "How to plan your timeline backwards from the event date",
        body: [
          "Start from the event date and subtract, in this order: shipping time, production time, approval time and design time. The result is your deadline to deliver final details. Ask on WhatsApp for the lead times of your order and your city before setting dates with the client.",
          "As a reference from other stores: one supplier asks for final details about 4 weeks before the wedding, another adds 4 to 6 weeks of design when there is custom artwork, and a semi-custom supplier sends the full stationery proof about 2 to 3 weeks after receiving the final text. Those are their lead times, not Yume's, and they vary a lot from one studio to another.",
          "To see how timing works on a sticker order, read [how long custom stickers take to arrive](/en/blog/how-long-do-custom-stickers-take-to-arrive). If you work with Yume regularly, see the [planners page](/en/planners) and the [guide for working with a favors supplier](/en/blog/guide-for-planners-working-with-custom-favors-supplier). Once you have your deadline, request a quote for your [custom stickers for events](/en/products/waterproof-vinyl-stickers) on WhatsApp.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: ["planner-checklist-custom-favors-order-event", "guide-for-planners-working-with-custom-favors-supplier", "how-long-do-custom-stickers-take-to-arrive"],
    faq: [
      {
        q: "How long does the digital proof take for vinyl stickers?",
        a: "It normally arrives within 24 hours after your payment and includes up to 2 rounds of adjustments.",
      },
      {
        q: "Is the proof always included in the order?",
        a: "It depends on the supplier. One supplier, for example, includes it free on some signs and charges for it on others. At Yume, confirm on WhatsApp what your order includes.",
      },
      {
        q: "Do extra rounds cost money?",
        a: "At the stores we checked, included rounds are few and extra ones have a cost, but these are individual store policies. Ask on WhatsApp how it works for your order.",
      },
      {
        q: "Does the digital proof guarantee the exact printed color?",
        a: "No. It is a simulation on a screen and depends on a calibrated monitor. If color is critical, tell us before approving.",
      },
      {
        q: "What happens after I approve the proof?",
        a: "Nothing is printed without your approval, and approving gives the green light to production. Check names, dates and addresses before approving and confirm on WhatsApp what changes your order accepts afterwards.",
      },
    ],

  },
  {
    slug: "when-to-order-wedding-favors",
    title: "When to Order Wedding Favors: A Step-by-Step Calendar",
    description:
      "When to order wedding favors: a calendar counted back from your wedding date, what to decide first, and what to do if time is short.",
    category: "Guides",
    publishedAt: "2026-11-09",
    modifiedAt: "2026-11-10",
    intro:
      "Wedding favors need to be ordered earlier than it seems, but there is no single date: it depends on the supplier and on how much you personalize the piece. This guide breaks the process into stages: what to decide, when to reserve with an estimated quantity, when to close the final count and which delivery date to mark. It is designed for brides and wedding planners who want every detail to arrive without rushing.",
    sections: [
      {
        heading: "When to order wedding favors: reference lead times",
        body: [
          "There is no single lead time. In answers from Australian suppliers, the most common advice is to order 3 to 6 weeks before the wedding, but one asks for at least 12 weeks and another prefers 3 months. These are references from another country, not Mexico: the real lead time depends on your supplier and how much you personalize.",
          "Another supplier suggests 1 to 3 months depending on whether the piece is personalized or from a catalog. These answers come from an Australian industry reference published in 2021. Use them to get your bearings, and confirm the lead time with whoever will make your piece.",
        ],
        table: {
          headers: ["Stage", "When", "What you do"],
          rows: [
            ["Choose the piece", "First", "Define the idea, design and level of personalization"],
            ["Reserve", "With an estimated quantity", "Hold the order without waiting for every confirmation"],
            ["Close the final count", "Once you have the confirmations", "Confirm quantity and names with your supplier"],
            ["Approve the digital proof", "Before printing, if your piece has one", "Review the design before production"],
            ["Delivery", "Before the wedding, with a margin", "Mark the delivery deadline"],
          ],
        },
      },
      {
        heading: "When to reserve and when to close the guest count",
        body: [
          "Reserve with an estimated quantity and close the final count once you have the attendance confirmations. One Australian supplier allows this: the order is held, and the final guest number and names are confirmed about 3 to 4 weeks before the shipping date. Ask your supplier whether they offer something similar.",
          "If your favor carries each guest's name, another supplier suggests ordering it 4 to 8 weeks ahead, so you do not depend on every attendance confirmation arriving. That is why it makes sense to set the idea and design first and leave the final count for later.",
        ],
      },
      {
        heading: "How many pieces to order and what margin to leave",
        body: [
          "Start from the number of confirmed guests and add a small margin. One supplier recommends ordering a few extra units to give to the people who work at the wedding, for example the celebrant, the photographer or the hairdresser. How many extras you need depends on your wedding, so settle it with your supplier.",
        ],
      },
      {
        heading: "Digital proof and delivery: the date you should mark",
        body: [
          "Mark the delivery deadline on your calendar, not just the order date. Shipping or pickup counts separately from production, and the lead time depends on the delivery method and the shipping date you need. For personalized pieces, also add time for the design review.",
          "At Yume, vinyl stickers get a digital proof before printing, with up to 2 rounds of adjustments, and nothing is printed without your approval. If your favors are stickers, see the [custom vinyl stickers](/productos/stickers-vinil-impermeable) or the [stickers with your logo](/productos/stickers-logo-personalizado). To know how long your specific piece takes, message us on WhatsApp with your wedding date.",
        ],
      },
      {
        heading: "A milestone calendar for wedding planners",
        body: [
          "If you coordinate several weddings, keep a milestone table for each event with the key dates: reservation with an estimated quantity, final count, digital proof approval if your piece has one, and delivery with a margin. Ask each supplier for their lead time before you set them.",
          "At Yume we work with wedding planners through direct WhatsApp contact. Share the event date and the piece with us so we can tell you the lead time before you commit it to your client.",
        ],
        table: {
          headers: ["Milestone", "What you define"],
          rows: [
            ["Reservation", "Piece and estimated quantity"],
            ["Final count", "Quantity based on confirmed guests"],
            ["Digital proof", "Design, if your piece has a proof"],
            ["Delivery", "Place and deadline"],
          ],
        },
      },
      {
        heading: "What if my wedding is less than a month away?",
        body: [
          "Message us on WhatsApp as soon as possible with your wedding date, the piece you have in mind and the approximate quantity, and we will tell you whether we can make it in time. A short deadline is not always impossible, but it depends on the piece and the workshop, so confirm it before deciding.",
        ],
      },
      {
        heading: "Where to receive them: at the wedding venue or at home",
        body: [
          "Decide early whether the favors will arrive at the wedding venue or at your home, because the delivery method affects the lead time. If you work with a wedding planner, ask them to coordinate with you how the package is received and the delivery deadline.",
          "Browse the [product catalog](/productos) and, if you organize several weddings, message us on WhatsApp with the dates for each one.",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    faq: [
      {
        q: "When should I order my wedding favors?",
        a: "It depends on the supplier and on how much you personalize. The most common answer in the Australian reference is 3 to 6 weeks before, but confirm the lead time with whoever makes your piece.",
      },
      {
        q: "Do you send a digital proof before printing?",
        a: "Yes, for vinyl stickers the digital proof usually arrives within 24 hours after your payment and includes up to 2 rounds of adjustments. We do not print anything without your approval.",
      },
      {
        q: "Does shipping count inside the production lead time?",
        a: "No, shipping or pickup counts separately. That is why it makes sense to mark the delivery deadline and not just the order date.",
      },
      {
        q: "Are the lead times in this guide Yume's?",
        a: "No. They are references from Australian suppliers, published in an industry guide with answers from 2021. The lead time for your piece depends on the product: ask us on WhatsApp with your wedding date.",
      },
    ],
  },
  {
    slug: "wedding-favor-budget-per-guest",
    title: "How Much Wedding Favors Cost per Guest",
    description:
      "Learn how to calculate how much wedding favors cost per guest: a simple formula, a sample budget and what moves the price, with no invented prices.",
    category: "Guides",
    publishedAt: "2026-11-09",
    modifiedAt: "2026-11-10",
    intro:
      "Wedding favors have no fixed price, and almost no guide explains how to work out yours. Here is a step-by-step method: set a limit per guest, decide how many pieces you need, add up what moves the price of each one and bring a clear number to request a quote.",
    sections: [
      {
        heading: "How much do wedding favors cost per guest in Mexico?",
        body: [
          "There is no single price per guest, because it depends on the piece, the personalization and the packaging. We did not find a reliable national average of what is spent on favors in Mexico, so the most useful step is to calculate your own limit per guest with a simple method instead of copying someone else's number.",
          "For context, a 2024 estimate puts an average wedding in Mexico at about $155,000 MXN for 146 guests, close to $1,062 MXN per guest for the whole event. That is the cost of the full wedding, not of the favor.",
        ],
      },
      {
        heading: "Step 1: set a limit from the spend per guest",
        body: [
          "Divide the total cost of your wedding by your guest count to get the spend per guest. That number is your reference ceiling: the favor is only one part of that total. Decide what share you want to give it before asking for quotes, because without a limit per guest any quote looks reasonable.",
          "Using the 2024 estimate of about $1,062 MXN per guest, a hypothetical $50 favor would be close to 5% of that spend. It is only an illustration, not a recommendation.",
        ],
      },
      {
        heading: "Step 2: count pieces, not only guests",
        body: [
          "Multiply your limit by the number of pieces, not always by the number of guests. If you give one favor per couple or family instead of one per person, the quantity drops and you can put more budget into each piece. Decide this before asking for a quote.",
          "If you are unsure about quantity, the guide on [how many party favors to order per event](/en/blog/how-many-party-favors-to-order-per-event) can help you decide.",
        ],
      },
      {
        heading: "Step 3: add what moves the price of each piece",
        body: [
          "The final price of a favor depends on several factors, not only the object: the material, the level of personalization, the packaging and the shipping. Add them into one per-piece figure before comparing options, so you do not find extra costs after you have already chosen a design.",
          "These are the questions worth asking every supplier so you can compare on equal terms.",
        ],
        table: {
          headers: ["Item", "What to ask"],
          rows: [
            ["Material", "What material is it and what does it cost per piece?"],
            ["Personalization", "Do names, dates or a custom design change the price?"],
            ["Packaging", "Is it included or charged separately?"],
            ["Extra pieces", "How many additional pieces do I need and what do they cost?"],
            ["Shipping", "Is it delivered in your area or shipped, and what does it cost?"],
          ],
        },
      },
      {
        heading: "How to work out the real cost per guest of your favors",
        body: [
          "The real cost per guest is the total you pay for the favors divided by your guest count. It includes the cost of each piece, the packaging, the personalization, the shipping and any extra pieces you order. That way you can check whether the quote total fits your limit per guest.",
          "Extra pieces add to the total and raise the cost per guest. In symbols: (cost per piece × number of pieces + packaging and shipping) ÷ number of guests = real cost per guest. The example with hypothetical numbers is further below.",
        ],
      },
      {
        heading: "Personalized favor or generic keepsake: what changes the cost",
        body: [
          "A personalized favor carries your names, your date or your wedding style, which is why it feels planned; a generic keepsake is the same for any event. Compare them by what they add to your table, not only by price, and ask for the full cost per piece in each case.",
          "At Yume we make [personalized candy boxes](/en/products/personalized-party-favor-boxes), which arrive assembled and empty so you choose what goes inside, and [custom vinyl stickers](/en/products/waterproof-vinyl-stickers), with a digital proof before printing. For current prices, see each product page.",
          "For ideas on what goes inside, read [what to put in a party favor box](/en/blog/what-to-put-in-a-party-favor-box) and [personalized wedding favors with name and date](/en/blog/personalized-wedding-favors-with-name-and-date).",
        ],
      },
      {
        heading: "Formula and example with hypothetical numbers",
        body: [
          "The formula is: limit per piece × number of pieces + packaging and shipping = total favors budget. Below is an example with made-up figures, only to practice: they are not real prices and not Yume prices. Swap in your own numbers and the quotes you receive.",
          "With one piece per guest, the same budget gives $60 MXN per piece; with 70 pieces (couples and families share), it gives about $85 MXN per piece. That limit per piece is the one you take to get quotes.",
        ],
        table: {
          headers: ["Item (hypothetical numbers)", "Value"],
          rows: [
            ["Total spend per guest", "$2,000 MXN"],
            ["Share for favors", "3%"],
            ["Limit per guest", "$60 MXN"],
            ["Guests", "100"],
            ["Favors budget", "$6,000 MXN"],
            ["Pieces (one per couple or family)", "70"],
            ["Limit per piece", "about $85 MXN"],
          ],
        },
      },
      {
        heading: "How to request a quote for wedding favors",
        body: [
          "To get a useful quote, bring three details: the number of guests or pieces, your wedding date and the style you want. With that we can guide you on which option from our catalog fits your limit per piece. Message us on WhatsApp and we will quote your case.",
          "If you are a wedding planner, we quote per event, with the number of pieces each wedding needs. To know how early to order, see [when to order wedding favors](/en/blog/when-to-order-wedding-favors).",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: [BLOG_SLUG_EN["dulceros-personalizados-guadalajara"], BLOG_SLUG_EN["que-poner-en-un-dulcero"], BLOG_SLUG_EN["cuantos-souvenirs-pedir-por-evento"], BLOG_SLUG_EN["souvenirs-de-boda-personalizados"], BLOG_SLUG_EN["cuando-pedir-souvenirs-de-boda"]],
    sources: [],
    faq: [
      {
        q: "Is there an average spend on wedding favors in Mexico?",
        a: "We did not find a reliable national average of spend on favors alone. That is why it helps to calculate your own limit per guest.",
      },
      {
        q: "What share of the budget should go to favors?",
        a: "We did not find a source that sets a percentage. The figures in the example table are hypothetical, only for practice, and are not a rule.",
      },
      {
        q: "One favor per guest or one per couple?",
        a: "You can give one per couple or family. The quantity drops and you can put more budget into each piece.",
      },
      {
        q: "Do the candy boxes come with candy?",
        a: "No. The candy box arrives assembled and empty, ready to fill with the sweets or details you choose.",
      },
      {
        q: "Do you quote per event for wedding planners?",
        a: "Yes, we quote per event, with the number of pieces each wedding needs. Message us on WhatsApp.",
      },
    ],
  },
  {
    slug: "planner-checklist-custom-favors-order-event",
    title: "Planner checklist: ordering custom event favors",
    description:
      "Planner checklist with the details a supplier needs to quote and produce custom event favors: quantity, texts, colors, proof and delivery.",
    category: "Guides",
    publishedAt: "2026-11-10",
    modifiedAt: "2026-11-11",
    intro:
      "An order of custom favors moves faster when the supplier has every detail from the start. This checklist gathers what a planner should have ready before asking for a quote: quantity, texts, design, a timeline by type of piece, digital proof, the deadline to lock the order and delivery.",
    sections: [
      {
        heading: "Planner checklist for ordering custom event favors",
        body: [
          "A supplier needs nine details to quote and produce well: event date and place, confirmed quantity, how it was counted, buffer, texts and names, palette and references, digital proof, the deadline to lock the quantity, and delivery with a direct contact. Gather them before you write and the order moves forward without back and forth.",
          "Below we go through each point. If this is your first order with a new supplier, start with the [guide for planners](/en/blog/guide-for-planners-working-with-custom-favors-supplier).",
        ],
        table: {
          headers: ["Detail", "What the supplier needs to know"],
          rows: [
            ["Date and place", "When and where the event is"],
            ["Quantity", "Confirmed total and how it was counted"],
            ["Buffer", "Whether extras are ordered and how many the budget can hold"],
            ["Texts", "Names, date and phrase with exact spelling"],
            ["Design", "Palette, references and logo"],
            ["Digital proof", "Who approves it"],
            ["Cutoff", "Deadline to confirm the quantity"],
            ["Delivery", "Where and when it is received, and a WhatsApp contact"],
          ],
        },
      },
      {
        heading: "Quantity: how to count it and how much buffer to leave",
        body: [
          "Give the confirmed quantity and say how you counted it: per guest, per couple or per table. On the buffer, a general guideline suggests a small margin when the favor is inexpensive and, when it is costly or personalized, limiting extras to what the budget can hold. There is no fixed number.",
          "Reasons for extras include pieces damaged, broken or lost in shipping (worse for destination weddings), fragile pieces, guests added at the last minute and guests who go from no to yes. Some couples accept that a few guests go without a favor.",
          "If your order is [personalized party favor boxes](/en/products/personalized-party-favor-boxes), the minimum order is 10 pieces. For other calculations by event type, see [how many favors to order](/en/blog/how-many-party-favors-to-order-per-event).",
        ],
      },
      {
        heading: "Timeline: what to order first and what waits for the final count",
        body: [
          "Order the generic pieces first, the ones without guest names, and leave for last the pieces that depend on the final count and the seating chart. As a general reference, a general timeline suggests an order by weeks before the event.",
          "A general timeline suggests ordering menus 8 to 10 weeks before the event, ceremony programs and signs 6 to 8 weeks before, and place cards and table numbers 4 to 6 weeks before. All of them are used on the day of the event. The same timeline suggests closing RSVPs 4 to 6 weeks before.",
          "Yume's own lead times are the ones that apply to your order: confirm them with us when you request a quote on WhatsApp. For menus, see [custom wedding menus](/en/blog/custom-wedding-menus). For invitations, read [how to order event invitations](/en/blog/how-to-order-custom-event-invitations). For keepsakes, see [when to order wedding favors](/en/blog/when-to-order-wedding-favors).",
        ],
        table: {
          headers: ["Piece", "General reference"],
          rows: [
            ["Menus", "8 to 10 weeks before"],
            ["Ceremony programs and signs", "6 to 8 weeks before"],
            ["Place cards and table numbers", "4 to 6 weeks before"],
            ["RSVP deadline", "4 to 6 weeks before"],
          ],
        },
      },
      {
        heading: "Generic pieces and named pieces: how to split them",
        body: [
          "Split your order into two groups. Generic pieces, like signs, can be ordered early. Pieces with names, like place cards, depend on the final count and the seating chart. As a general reference, caterers may ask for the confirmed guest count 2 to 4 weeks before the event.",
          "Close the seating chart before ordering place cards. For a wedding, see [how many candy boxes to order for a wedding](/en/blog/how-many-candy-boxes-to-order-for-a-wedding) to work out the quantity from your count.",
        ],
      },
      {
        heading: "Texts, names and who approves them",
        body: [
          "Hand the supplier the final texts already written: names, date, phrase and any detail that will be printed, with exact spelling. Name one person to approve them, either your client or you. That way the digital proof is reviewed once and not corrected with different versions from several people.",
          "Ask what the personalization includes. For the favor boxes, for example, it includes the name and the theme you choose, with your brand logo if you need it.",
        ],
      },
      {
        heading: "Palette, references and logos",
        body: [
          "Share the event color palette and visual references: a photo of the invitation, the decor or the setup. If your client has a logo or monogram, send that too. With this the supplier adapts the design to the event, not to a generic design, before preparing the digital proof.",
          "If you are unsure what to send, tell us from the [contact page](/en/contact) and we will guide you on WhatsApp.",
        ],
      },
      {
        heading: "Digital proof and the deadline to lock the quantity",
        body: [
          "Before production we send a digital proof, and nothing is produced until you approve it. Decide who approves it and ask the supplier until when you can change the quantity and what can be adjusted after approval. Those rules depend on each supplier, so keep them in writing.",
          "To see how the review works step by step, read about the [digital proof for planners](/en/blog/digital-proof-event-order-planners).",
        ],
      },
      {
        heading: "Delivery and direct contact",
        body: [
          "Tell the supplier where and when you need the pieces: the event date is not the delivery date. Give the city and address, and whether you receive them in Guadalajara or in another city in the country. Leave a direct WhatsApp contact, of whoever decides, to settle questions on the spot.",
          "As a reference, a general guideline recommends delivering the stationery to the event venue during the last week.",
          "If you organize events often, visit the [page for planners](/en/planners) and request a quote on WhatsApp with your details at hand.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-vinil-impermeable"],
    relatedBlogSlugs: ["guide-for-planners-working-with-custom-favors-supplier", "digital-proof-event-order-planners", "how-many-party-favors-to-order-per-event", "when-to-order-wedding-favors"],
    faq: [
      {
        q: "How many extra pieces should I order?",
        a: "There is no fixed number. A general guideline suggests a small buffer when the favor is inexpensive (for example, about 10 extra) and, when it is costly or personalized, limiting extras to what the budget can hold.",
      },
      {
        q: "What is the minimum order for personalized favor boxes?",
        a: "The minimum order is 10 pieces.",
      },
      {
        q: "Do you quote per event?",
        a: "Yes, we quote per event, with the number of pieces you need. Message us on WhatsApp.",
      },
      {
        q: "How long does the digital proof take for vinyl stickers?",
        a: "The digital proof usually arrives within 24 hours after payment and includes up to 2 rounds of adjustments. We print nothing without your approval.",
      },
    ],
  },
  {
    slug: "custom-details-for-client-events",
    title: "Custom details for a client event",
    description:
      "Custom details for a client event: what to hand out by event type, how many to order and how to plan the calendar with a digital proof.",
    category: "Guides",
    publishedAt: "2026-11-11",
    modifiedAt: "2026-11-12",
    intro:
      "A client event is a chance to say thank you, and a detail with your logo or company name helps the event look planned. This guide helps you choose the detail by event type, work out how many to order, decide how to hand it out and plan the calendar backward from your event date.",
    sections: [
      {
        heading: "Custom details for a client event: what to choose",
        body: [
          "For a client event, choose a detail that works as a thank-you gesture, with your company's logo or name, and not as a hook to get people to attend. Pick the piece by event type: launch, anniversary with clients, dinner or open house.",
          "For a launch or a dinner you can use [personalized party favor boxes](/en/products/personalized-party-favor-boxes), which arrive assembled and empty so you choose what goes inside. If you prefer something lighter, [custom logo stickers](/en/products/custom-logo-stickers) also work. For other cases, see [corporate event favor boxes](/en/blog/corporate-event-favor-boxes-with-logo) and [company anniversary custom details](/en/blog/company-anniversary-custom-details). If your event is a holiday party, see [company posada favors](/en/blog/personalized-company-posada-favors).",
          "ASI (Advertising Specialty Institute) studies from 2012 to 2015 report that about 85 to 87% of people who receive a promotional item remember the advertiser. These are figures from years ago and from another context, so take them as a general idea: a well-chosen detail gets remembered.",
          "If you need variants within the same event, message us on WhatsApp and we will review it with you.",
        ],
        table: {
          headers: ["Event type", "Possible detail", "How to hand it out"],
          rows: [
            ["Launch", "Personalized favor box with your logo", "At the exit or at the check-in table"],
            ["Anniversary with clients", "Favor box with the anniversary theme and your logo", "At each seat, with a card"],
            ["Dinner", "Favor box with your company name", "On the table"],
            ["Open house", "Stickers with your logo", "At the exit"],
          ],
        },
      },
      {
        heading: "How many custom details to order for a client event",
        body: [
          "A practical rule: order for the confirmed guests plus a few extra pieces for surprise guests, sponsors and your team. This is our own rule, not a figure from any source. Do not subtract the expected no-show: it tells you how many pieces will likely be left over, because it varies a lot between events.",
          "A report on more than 1,070 in-person events with check-in gives a median no-show of about 20% and an average of 29%. In free events the median rises to about 28%, versus about 17% in paid ones. An invitation-only event is usually free for the guest.",
          "With small groups, absence weighs more. The report does not say how many events fall in each size range, so treat it as guidance.",
          "Example with the 32% median for 10 to 49 expected guests: with 40 confirmed, about 27 people would arrive and about 13 pieces would be left over if you order for all 40. It is only a calculation example, not a prediction.",
          "This data comes from general in-person events, not from Mexico or corporate gifts. No-show is calculated as 1 minus check-ins divided by expected, and it includes speakers and unregistered people. Use it as a reference and rely on the history of your own events.",
          "For personalized favor boxes the minimum order is 10 pieces, so you can adjust the quantity to the number you need.",
        ],
        table: {
          headers: ["Expected guests", "Median no-show"],
          rows: [
            ["10 to 49", "~32%"],
            ["50 to 149", "~23%"],
            ["150 to 499", "~19%"],
            ["500 to 999", "~18%"],
            ["1,000 or more", "~19%"],
          ],
        },
      },
      {
        heading: "How to hand out the detail without waste",
        body: [
          "There are three ways to hand out the detail: at each guest's seat, at the exit or together with a personalized card. Each one changes how many pieces get used. At the seat, pieces are set out even if someone does not show; at the exit they go only to those who attended, so spare pieces are kept.",
          "To work out quantities by event type, see [how many party favors to order](/en/blog/how-many-party-favors-to-order-per-event).",
        ],
      },
      {
        heading: "Plan the calendar backward from the event date",
        body: [
          "Start from the event date and work backward: delivery, production, digital proof approval, brief with your design and the confirmed guest list. Yume's production and shipping times are confirmed over WhatsApp with your date, so message us before you promise a delivery date to your clients.",
          "Close the quantity first with your confirmed guest list, then approve the design. We send a digital proof before producing, and nothing is produced until you approve it.",
          "If the list changes after you approve the design, tell us on WhatsApp as soon as possible so we can review what can be adjusted.",
          "To see how the process works for events, read about the [digital proof for events](/en/blog/digital-proof-event-order-planners). If you organize events for others, the [planner checklist for favor orders](/en/blog/planner-checklist-custom-favors-order-event) helps you cover everything.",
        ],
        table: {
          headers: ["Stage (from last to first)", "What happens"],
          rows: [
            ["Event date", "Starting point to count backward"],
            ["Delivery", "The order arrives before the event"],
            ["Production", "Starts when you approve the digital proof"],
            ["Approval", "You review the digital proof and approve it"],
            ["Brief and quantity", "You close the confirmed guest list and send us your logo or idea"],
          ],
        },
      },
      {
        heading: "Client gifts and tax deductibility: what to confirm",
        body: [
          "Whether a corporate gift is tax deductible in Mexico depends on who receives it, how it is delivered and its tax treatment. We give no rules or amounts here: confirm your case with your accountant before setting a budget.",
          "This is not tax advice; it is only a reminder to check before you decide.",
        ],
      },
    ],
    relatedProductSlugs: ["dulceros-personalizados", "stickers-logo-personalizado"],
    relatedBlogSlugs: [
      "how-many-party-favors-to-order-per-event",
      "company-anniversary-custom-details",
      "personalized-company-posada-favors",
      "corporate-event-favor-boxes-with-logo",
      "digital-proof-event-order-planners",
      "planner-checklist-custom-favors-order-event",
    ],
    faq: [
      {
        q: "Do the favor boxes come with candy?",
        a: "No. The favor box arrives assembled and empty, ready to fill with whatever you choose.",
      },
      {
        q: "Can I add my company logo?",
        a: "Yes. Personalization includes the name and the theme you choose, including your brand logo. We send a digital proof before producing.",
      },
      {
        q: "What is the minimum order for personalized favor boxes?",
        a: "The minimum order is 10 pieces.",
      },
      {
        q: "How far ahead should I order for my client event?",
        a: "It depends on your date. Production and shipping times are confirmed over WhatsApp: message us with your event date and the quantity you need.",
      },
      {
        q: "Do you work with planners and companies?",
        a: "Yes. We work with planners and companies that organize events, with a design and digital proof before production and direct contact over WhatsApp.",
      },
      {
        q: "Are the no-show figures from Mexico?",
        a: "No. They come from an industry report on general in-person events, not from Mexico or corporate gifts. Use them only as a reference.",
      },
    ],
  },
  {
    slug: "does-nfc-plate-work-iphone-android",
    title: "NFC Plate on iPhone and Android: What to Know",
    description:
      "Does an NFC plate work with iPhone and Android? iPhone XS or later and Android with NFC on read it without an app. What to do if it fails.",
    category: "Guides",
    publishedAt: "2026-11-13",
    modifiedAt: "2026-11-13",
    intro:
      "Before buying an NFC plate, the most honest question is whether it will work with your guests' or customers' phones. The short answer: an iPhone XS or later and Android phones with NFC on read it without an app, but with conditions few people explain. Here they are, with a checklist for when it does not read and the test worth running before you put it on display.",
    sections: [
      {
        heading: "Does an NFC plate work with iPhone and Android without an app?",
        body: [
          "Yes. An iPhone XS or later reads the plate in the background without opening any app, as long as it carries an https link. On Android, the plate reads with the screen on and NFC turned on. No method covers every phone, so the plate also carries a backup QR.",
          "This is exactly what many sellers simplify with the line works on every phone. The real answer has conditions, and knowing them saves you surprises on the day the plate is already on display.",
        ],
      },
      {
        heading: "What happens on an iPhone when you tap the plate",
        body: [
          "On an iPhone, a notification appears on the screen and the person has to tap it to open the link; it does not open by itself. Apple documents this background reading from the iPhone XS onward, and it only processes NDEF tags with a URL record. If the link has no associated app, it opens in Safari.",
          "Apple reads only the first URL record in the message and does not support custom URL schemes, so regular https links are the safe choice. If your plate points to Instagram, WhatsApp, Maps or a photo album, make it an https link.",
        ],
      },
      {
        heading: "What an Android phone needs to read the plate",
        body: [
          "An Android phone with NFC reads the plate when the screen is on and NFC is turned on in settings. If the person sees no response, first check that NFC is active. For the broadest compatibility across devices, the Android documentation recommends the NDEF format.",
          "There are many Android brands and models, so we do not give reading distances or promise exact models. The most useful step is to test the plate with the phones your audience actually uses.",
        ],
      },
      {
        heading: "Why an iPhone does not read the plate: a checklist",
        body: [
          "If an iPhone does not read the plate, check five things: that it is an XS or later, that it has been unlocked at least once since it was turned on, that airplane mode is off, that the camera is not in use, and that no Apple Pay payment is in progress.",
          "It also will not work if another app has an NFC scan in progress. With an iPhone older than the XS you cannot assume the plate works without an app, so we do not promise compatibility with every model. To retry, bring the top of the iPhone to the center of the plate. If it still does not respond, the person scans the QR.",
        ],
      },
      {
        heading: "Metal and phone cases: what can interfere with the plate",
        body: [
          "Nearby metal distorts the NFC field, and a standard plate stuck on a metal surface may stop reading. Plates made for metal include a ferrite layer that shields them, which is why they are thicker. Before sticking yours down, test it on the real surface.",
          "Cases with metal rings, plates or card slots can interfere, and very thick ones can reduce the reading range. This is practical advice, not a measurement: on your first test keep the case on, and if there is no response, remove it and try again.",
          "If you were planning to place it on metal, [ask us on WhatsApp](/en/contact) before ordering and we will look at your case.",
        ],
      },
      {
        heading: "Why the plate has a backup QR",
        body: [
          "Because no reading method works on every phone. Apple notes that not all devices support background tag reading and recommends offering an alternative. That is why the Yume plate comes with the QR already printed: if NFC does not respond, the person opens the camera and scans.",
          "The [Google review NFC plate](/en/products/google-review-nfc-plate) arrives already programmed with your business's review link, with no app and no subscription. For the full comparison, read [NFC plate vs printed QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews).",
        ],
      },
      {
        heading: "A quick test before you put it on display",
        body: [
          "Test with the real phone and in the real spot where the plate will live: the table, the counter or the stand. Hold the back of the phone to it with the screen on; on an iPhone, tap the notification. If nothing happens within a few seconds, scan the QR with the camera.",
          "For an event, test with the plate already mounted in its holder, not loose on a table. Suppliers recommend testing before ordering in volume. To decide where to place it, read [how to use your plate](/en/blog/how-to-use-your-yume-google-review-plate) and [where to put your plate](/en/blog/where-to-put-your-google-review-plate). If you work in events, see the [plate for planners and venues](/en/blog/google-review-plate-for-event-planners-and-venues). If you prefer something free-standing with no sticking, see the [Google review NFC stand](/en/products/google-review-nfc-stand).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["nfc-plate-vs-printed-qr-code-for-reviews", "how-to-use-your-yume-google-review-plate", "where-to-put-your-google-review-plate", "google-review-plate-for-event-planners-and-venues", "google-review-plates-one-time-price-vs-subscription", "how-to-get-more-google-reviews-nfc-qr"],
    sources: [
      { label: "Apple Developer: Adding support for background tag reading", url: "https://developer.apple.com/documentation/corenfc/adding-support-for-background-tag-reading.md" },
      { label: "Android Developers: NFC basics", url: "https://developer.android.com/develop/connectivity/nfc/nfc?hl=es" },
      { label: "GoToTags: Background tag reading on iOS", url: "https://gototags.com/help/ios/nfc/reading/background" },
      { label: "IoT For All: NFC, metallic interference and ferrite", url: "https://www.iotforall.com/nfc-metallic-interference-ferrite-solutions" },
    ],
    faq: [
      {
        q: "Does my customer need to install an app to use the plate?",
        a: "Not on iPhone XS and later, nor on Android phones with NFC on. For a web link, the phone's own reading is enough, and the Yume plate needs no app or subscription.",
      },
      {
        q: "From which iPhone does background reading work?",
        a: "Apple documents background tag reading from the iPhone XS onward. It only processes NDEF tags with a URL record.",
      },
      {
        q: "What if the iPhone is very old?",
        a: "With an iPhone older than the XS you cannot assume the plate works without an app. In that case, the person scans the QR that is already printed on it.",
      },
      {
        q: "What if an Android phone does not read the plate?",
        a: "Check that NFC is turned on in settings and that the screen is on. If it still does not respond, scan the QR with the camera.",
      },
      {
        q: "Does the phone case affect reading?",
        a: "Cases with metal rings, plates or card slots can interfere, and very thick ones can reduce the range. If there is no response, remove the case and try again, or use the QR.",
      },
      {
        q: "Does the plate work stuck on metal?",
        a: "It can fail: nearby metal distorts the NFC field, and a standard plate on a metal surface may stop reading. Always test on the real surface.",
      },
      {
        q: "Why does the iPhone ask me to tap a notification?",
        a: "Because that is how Apple documents background reading: a notification appears and the person taps it to open the content.",
      },
    ],
  },
  {
    slug: "where-to-put-your-google-review-plate",
    title: "Where to Put Your Google Review QR: Checkout, Table or Reception",
    metaTitle: "Where to put your Google review QR: checkout or table",
    description:
      "Where to put your Google review QR plate: checkout, table or reception, at what height, what text to add and which mistakes to avoid.",
    category: "Guides",
    publishedAt: "2026-11-13",
    modifiedAt: "2026-11-13",
    intro:
      "A review plate only works if the customer sees it and knows what to do: a hidden QR does not get used. This guide tells you where to put it depending on your type of business (checkout, table or reception), how to place it at eye level, what text to add and which mistakes to avoid. It is written for a business with a single plate.",
    sections: [
      {
        heading: "Where to put your Google review QR if you only have one plate",
        body: [
          "Put the plate where the customer already is, standing or seated, at eye level: next to the card terminal, on the table or at reception after the service. Choose one main spot and add a second only if you need it.",
          "The table sums up the rule: the right spot depends on when the service ends in your business.",
          "If you do not have a plate yet, see Yume's [NFC review plate](/en/products/google-review-nfc-plate).",
        ],
        table: {
          headers: ["Type of business", "Best spot", "When the customer sees it"],
          rows: [
            ["Shop or store with a register", "Next to the card terminal", "When paying"],
            ["Restaurant or cafe", "Table, with checkout as a second option", "During the visit and when paying"],
            ["Clinic, salon or barbershop", "Reception or counter", "When the service ends"],
          ],
        },
      },
      {
        heading: "Checkout: next to the card terminal",
        body: [
          "Checkout is one of the spots that QR vendor guides single out as top performing. Place the plate next to the card terminal, at eye level, facing the customer and with nothing covering it. One of those guides suggests a holder slightly above the card reader.",
          "As a general reference, a guide cites a figure of 15 to 20% for the payment area. Treat it as a rough reference: it comes from a QR vendor, not an independent study, and your result depends on your customer flow. A QR hidden behind the register or below counter level does not get scanned.",
        ],
      },
      {
        heading: "Table: in view during the visit",
        body: [
          "At restaurants and cafes, a table plate works when it sits in the line of sight of whoever is seated, without getting in the way of conversation or food. If the customer has to move plates or glasses to see it, it is in the wrong spot. For tables, a free-standing stand means nothing gets stuck down.",
          "As a general reference, the same guide attributes 12% to table holders at restaurants, also a rough figure. If your business is a restaurant, see our guide to the [Google review plate for restaurants](/en/blog/google-review-plate-for-restaurants).",
        ],
      },
      {
        heading: "Reception: after the service, never before",
        body: [
          "At clinics, salons and other businesses with a front desk, the plate goes on the counter or in the waiting area after the service, once the customer has lived the experience. Asking for a review before the service is premature, according to the vendor guide consulted, and there is nothing to review yet.",
          "If you run a practice, we have a specific guide for the [Google review plate for medical practices](/en/blog/google-review-plate-for-medical-practices), and for salons or barbershops, the one on [salons and barbershops](/en/blog/google-review-plate-for-salons-and-barbershops). In both cases the plate goes in view of everyone, not only of those who seem satisfied.",
        ],
      },
      {
        heading: "What text to put next to the plate",
        body: [
          "Add one short line that says what to do. Without explanatory text, one vendor guide reports that scanning drops from 73% to 39%. Customers need to know it is for leaving a review and that they only need to tap their phone or scan.",
          "Two short texts that guide suggests: at the counter, “How was your visit? Scan to leave a quick review”, and at the exit, “Thanks for coming. Scan and tell us how we did”. If you also mention the plate out loud, the guide estimates up to 40% more scans, another vendor figure.",
        ],
      },
      {
        heading: "Mistakes that make nobody use it",
        body: [
          "The most common mistakes are hiding the plate behind the register or below counter level, leaving it without text, filling the place with different codes, and asking for the review before serving. Any of them is enough for the customer to not see it or not know what to do with it.",
          "More plates is not better: several codes in the same place confuse people, and two or three spots are enough. To choose between NFC and a printed QR, see the comparison of an [NFC plate vs printed QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews).",
        ],
      },
      {
        heading: "How to ask without incentives and from every customer",
        body: [
          "Google prohibits offering payments, discounts, or free goods and services in exchange for reviews, and also asking only certain customers for positive reviews. So the plate should be visible to everyone, with neutral text and no promotion tied to the review. Asking for authentic reviews without an incentive is allowed.",
          "A fixed plate in a visible spot helps reviews arrive steadily instead of all in one day. To see how to prepare your profile, read [how to ask for Google reviews](/en/blog/set-up-google-business-profile-and-ask-for-reviews).",
        ],
      },
      {
        heading: "Plate or stand: which one fits each spot",
        body: [
          "If the spot is a counter or register where you can stick things, the plate with adhesive is the natural choice. If it is a table where you do not want to stick anything, the stand stands on its own. Both arrive programmed with your business's review link, so you choose by surface, not by function.",
          "See the [NFC review plate](/en/products/google-review-nfc-plate) for checkout or reception and the [NFC review stand](/en/products/google-review-nfc-stand) for tables.",
        ],
      },
      {
        heading: "After choosing the spot: what Yume's plate includes",
        body: [
          "Yume's plate arrives already programmed with your business's review link and with the backup QR printed on it, so the customer can tap their phone or scan the QR from the same spot. It is a one-time payment, with no subscription and no app.",
          "To compare the cost with other options, read [one-time price vs subscription](/en/blog/google-review-plates-one-time-price-vs-subscription). If you wonder whether your customers' phones can read it, see [whether an NFC plate works on iPhone and Android](/en/blog/does-nfc-plate-work-iphone-android). When yours arrives, follow [how to use your Yume plate](/en/blog/how-to-use-your-yume-google-review-plate).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["how-to-use-your-yume-google-review-plate", "google-review-plate-for-restaurants", "google-review-plate-for-medical-practices", "nfc-plate-vs-printed-qr-code-for-reviews", "google-review-plates-one-time-price-vs-subscription", "does-nfc-plate-work-iphone-android"],
    sources: [
      { label: "Google: contribution content policy (reviews)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
    ],
    faq: [
      {
        q: "Where do I put the plate if I only have one?",
        a: "Where the customer already is, standing or seated, at eye level: next to the card terminal in a shop, on the table in a restaurant, or at reception in a clinic, salon or barbershop.",
      },
      {
        q: "Can I ask for the review before the service?",
        a: "It is not a good idea: there is nothing to review yet. It is better for the customer to see the plate when the service ends.",
      },
      {
        q: "Plate or stand for a table?",
        a: "For tables, the stand: it stands on its own and nothing gets stuck down. The plate has adhesive and fits better at a register or counter.",
      },
      {
        q: "Can I give a discount to anyone who leaves a review?",
        a: "No. Under Google's policy, offering payments, discounts or free goods and services in exchange for reviews is prohibited. You also cannot ask only selected customers.",
      },
      {
        q: "Are the performance figures by location reliable?",
        a: "No. They come from a QR vendor's guide, not from an independent study. Use them only as a reference.",
      },
      {
        q: "Does Yume's plate need a subscription?",
        a: "No. It is a one-time payment, with no subscription and no app, and it arrives programmed with your business's review link.",
      },
    ],
  },
  {
    slug: "google-review-policies-what-you-can-and-cannot-do",
    title: "Google review policies: what you can and can't ask for",
    description:
      "Google review policies made clear: what you can do when asking for reviews, what is prohibited, and how to ask all your customers equally.",
    category: "Guides",
    publishedAt: "2026-11-13",
    modifiedAt: "2026-11-13",
    intro:
      "Asking for reviews on Google is allowed, but several common practices go against the Google Maps policy: giving discounts for reviewing, filtering out unhappy customers, or trying to influence what they write. This guide separates what you can do from what you can't, based on the official text, and closes with an example of asking everyone equally.",
    sections: [
      {
        heading: "Google review policies at a glance",
        body: [
          "Google's Maps content policy lets you ask for reviews that reflect an authentic experience. What it prohibits is offering incentives, such as payments, discounts or free goods, asking for positive reviews selectively, discouraging negative ones, or trying to influence the rating and the content. Everything else in this guide builds on that.",
          "Rules can change, so before building your process check the official page listed under Sources at the end.",
        ],
      },
      {
        heading: "What you can do when asking for Google reviews",
        body: [
          "You can ask your customers for reviews and encourage them to describe their real experience. The policy accepts this as long as you offer nothing in return and do not try to influence the rating or what they write. Asking everyone equally, with a link or QR code to your profile, is an easy way to do it.",
          "In practice, that includes asking all your real customers, sharing the link to your profile, showing a QR code, and letting each person write in their own words and choose their own rating. If your profile is not ready yet, start with the guide to [setting up your Google Business Profile and asking for reviews](/en/blog/set-up-google-business-profile-and-ask-for-reviews).",
        ],
      },
      {
        heading: "What is prohibited when asking for Google reviews",
        body: [
          "Offering payments, discounts or free goods and services in exchange for reviews is prohibited, and so is offering something to change or remove a negative review. You also cannot discourage negative reviews or ask only certain customers for positive ones. These practices go against Google Maps' content policy.",
          "The table summarizes what the official text says, applied to common situations in a business.",
        ],
        table: {
          headers: ["Practice", "Allowed?", "Why"],
          rows: [
            ["Asking all your customers for a review", "Yes", "The policy accepts requesting content that represents an authentic experience"],
            ["Sharing a link or QR code to your profile", "Yes, offering nothing in return", "It only changes how the request arrives"],
            ["Discount, gift or payment for reviewing", "No", "It is an incentive"],
            ["Offering something to change or remove a negative review", "No", "Also covered by the incentives prohibition"],
            ["Asking only happy customers for a review", "No", "It is asking for positive reviews selectively"],
            ["Asking for five stars or dictating what to write", "No", "It tries to influence the rating or the content"],
          ],
        },
      },
      {
        heading: "Filtering only happy customers: why not",
        body: [
          "Gating means first asking whether the customer is happy and sending only those who say yes to Google. That is asking for positive reviews selectively, and the Google Maps policy prohibits it. Even if it seems to protect your reputation, it leaves out the real experience of your other customers.",
          "Asking everyone equally avoids the problem at the root: there is no first question deciding who gets the link. If a customer complains in person, you can help them, but the invitation to review should not depend on their answer.",
        ],
      },
      {
        heading: "In-store pressure, paid reviews and reviewing yourself",
        body: [
          "The policy we reviewed covers incentives, influencing the rating and conflicts of interest, such as an employment or contractual relationship with the business. It does not mention in-store pressure or reviewing yourself in those words, but both try to influence what gets published, so the prudent choice is to avoid them.",
          "Paying someone to review falls under the prohibition on payments in exchange for reviews. And if the reviewer has an employment or contractual relationship with the business, the policy treats it as a possible conflict of interest. The safest path is to let real customers who lived the experience write the reviews.",
        ],
      },
      {
        heading: "Quick checklist to review your review process",
        body: [
          "Before you put up a QR code or a plate, check four things: you ask all your real customers, you offer nothing in return, you do not ask first whether they were happy, and you do not suggest a rating or text. If all four hold, your way of asking matches what the policy says.",
          "Once that is clear, choose the spot with the guide on [where to put your plate](/en/blog/where-to-put-your-google-review-plate). If your business serves food or health, see how it applies to [restaurants](/en/blog/google-review-plate-for-restaurants) and [medical practices](/en/blog/google-review-plate-for-medical-practices). And if you prefer a countertop piece, see the [Google review NFC stand](/en/products/google-review-nfc-stand).",
        ],
      },
      {
        heading: "How to ask everyone equally with an NFC plate or QR",
        body: [
          "Ask every customer the same way and let each person write what they think. The NFC plate or QR code is only the path to your profile's review link: it does not change the rules. What matters is that you offer nothing in return and do not choose whom to ask.",
          "A neutral message that works for everyone: “If you like, a review of your experience helps us a lot. Hold your phone near the plate or scan the QR.” It mentions no discounts, does not ask whether they were happy and does not request a specific rating.",
          "Our [Google review NFC plate](/en/products/google-review-nfc-plate) arrives already programmed with your business's review link and with the backup QR printed on it. You pay once, with no subscription and no app. It does not promise more reviews: it makes the step easier, and the rules in this guide stay the same.",
          "To choose between the two options, read [NFC plate or printed QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews), and for placing and using it, [how to use your plate](/en/blog/how-to-use-your-yume-google-review-plate).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["set-up-google-business-profile-and-ask-for-reviews", "how-to-get-more-google-reviews-nfc-qr", "nfc-plate-vs-printed-qr-code-for-reviews", "how-to-use-your-yume-google-review-plate", "where-to-put-your-google-review-plate"],
    sources: [
      { label: "Google: Maps content policy (user-contributed content, in Spanish)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
    ],
    faq: [
      {
        q: "Can I ask my customers for reviews on Google?",
        a: "Yes, as long as the review reflects an authentic experience and you offer nothing in return.",
      },
      {
        q: "Can I give a discount or a gift for a review?",
        a: "No. Payments, discounts and free goods or services in exchange for reviews are incentives the policy prohibits.",
      },
      {
        q: "Can I ask only happy customers for a review?",
        a: "No. Requesting positive reviews selectively, or discouraging negative ones, goes against the Google Maps policy.",
      },
      {
        q: "Does an NFC plate or a QR code break the rules?",
        a: "Not by themselves. The policy we reviewed does not mention NFC or QR: it regulates what you offer and whom you ask. The plate only leads to your profile's review link.",
      },
      {
        q: "Does the plate guarantee more reviews?",
        a: "No. It makes the step easier for someone who already wants to leave an opinion, but it does not guarantee a number of reviews.",
      },
      {
        q: "What do I do if a customer complains in person?",
        a: "You can help them, but the invitation to review should not depend on their answer.",
      },
      {
        q: "Can Google's rules change?",
        a: "Yes. Before building your process, check the official page listed under Sources at the end.",
      },
    ],
  },
  {
    slug: "google-reviews-for-dentists-how-to-ask",
    title: "Google Reviews for Dentists: How to Ask the Right Way",
    description:
      "How to ask for Google reviews at your dental practice with no incentives, no pressure and no clinical details: when, what to say and how to reply.",
    category: "Guides",
    publishedAt: "2026-11-13",
    intro:
      "Asking for Google reviews at a dental practice is not like asking in a cafe: patient trust and privacy come first. This guide explains what you can do, what you cannot, when to offer the plate at reception and how to reply without revealing anyone's details.",
    sections: [
      {
        heading: "How to ask patients for Google reviews without breaking the rules",
        body: [
          "You can ask your patients for Google reviews as long as they are genuine, free of incentives and not scripted. Invite everyone equally, do not offer discounts or gifts, and do not pressure anyone in the office. The invitation is an open door, not a task the patient has to complete.",
          "Before asking, make sure your profile is complete. Here is how to [set up your Google profile](/en/blog/set-up-google-business-profile-and-ask-for-reviews) so it is ready to receive reviews.",
        ],
      },
      {
        heading: "What you should never offer or ask a patient",
        body: [
          "Google prohibits payments, discounts or free services in exchange for a review, and also in exchange for changing or removing a negative one. It also does not allow asking only happy patients, or requesting specific content such as naming a team member. Content obtained with an incentive is removed.",
          "Google also does not allow review quotas for staff. If someone on your team makes the invitation, it should be the same for every patient, with no targets or prizes, and without discouraging anyone who wants to leave criticism.",
        ],
      },
      {
        heading: "When and how to offer the NFC plate at reception",
        body: [
          "Offer the plate when saying goodbye, as a discreet invitation, without insisting and without a fixed script. Leave it in view at reception so patients can tap their phone whenever they like. Google does not allow pressuring anyone to review while they are on the premises, so if they skip it, that is fine.",
          "A short, neutral line could be: \"If you like, you can share your opinion about the care you received; tap your phone on the plate.\" Say it the same way to every patient.",
          "The Yume [NFC review plate](/en/products/google-review-nfc-plate) arrives already programmed with your practice's review link and with the backup QR printed on it. You can buy from 1 piece, with a one-time payment, no subscription and no app. There is also a standing stand that does not need sticking. To see how it fits your field, read the [review plate for medical practices](/en/blog/google-review-plate-for-medical-practices).",
        ],
      },
      {
        heading: "What to ask for in the review: experience, not clinical details",
        body: [
          "Invite patients to describe their experience: the service, punctuality and how clearly things were explained. Do not suggest text about diagnoses or treatment results. Google prohibits sharing personal or medical information without consent and treats misleading health content as misinformation, and you cannot promise clinical results.",
          "Avoid asking them to name a team member or a specific treatment. If a patient decides to write about their own case, that is their choice, but your invitation should not lead them there.",
        ],
      },
      {
        heading: "How to reply to a review without revealing the person is your patient",
        body: [
          "Reply with thanks and without confirming that the person was a patient or mentioning their treatment. As a precaution, your reply is public and patient privacy comes first. Invite them to continue by a private channel, such as the office phone, and answer both positive and negative reviews.",
          "Do not repeat a name, reason for the visit or appointment date in your reply. A message such as \"Thank you for your comment, your opinion matters to us. Contact the office so we can help you personally\" confirms nothing about anyone.",
        ],
      },
      {
        heading: "Why patient trust matters more than the stars",
        body: [
          "For a practice, a review helps another person decide whether to trust you, and that depends on it being honest. So ask everyone, accept criticism and do not filter. A perfect rating earned through tricks can cost you removed reviews and your patients' trust.",
          "To make it a habit, compare the [NFC plate and printed QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews) and see how to [get more reviews with NFC](/en/blog/how-to-get-more-google-reviews-nfc-qr).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: [BLOG_SLUG_EN["placa-resenas-google-para-consultorios"], BLOG_SLUG_EN["como-conseguir-mas-resenas-de-google-nfc-qr"], BLOG_SLUG_EN["como-configurar-perfil-de-google-y-pedir-resenas"], BLOG_SLUG_EN["placa-nfc-vs-codigo-qr-impreso-resenas"]],
    sources: [
      { label: "Google: contribution content policies (reviews)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
    ],
    faq: [
      {
        q: "Can I give a discount to anyone who leaves a review?",
        a: "No. Google prohibits offering payments, discounts or free goods and services in exchange for a review, and content published for an incentive is removed.",
      },
      {
        q: "Can I ask for the review only from patients who left happy?",
        a: "No. Google does not allow discouraging negative reviews or asking only happy customers for positive ones. Everyone is invited equally.",
      },
      {
        q: "What should I suggest the patient write?",
        a: "Nothing specific. Google does not allow requesting specific content and prohibits sharing someone's medical information without their consent. You can invite them to talk about their experience, with no script.",
      },
      {
        q: "Does the NFC plate guarantee more reviews?",
        a: "No. It makes it easier to reach the review link, but leaving a review is each patient's decision.",
      },
    ],
  },
  {
    slug: "how-to-get-google-reviews-restaurant-cafe",
    title: "Google Reviews for Restaurants and Cafés: Practical Guide",
    description:
      "How to get Google reviews for your restaurant or café: where to ask at the table and register, what Google prohibits and how to reply.",
    category: "Guides",
    publishedAt: "2026-11-13",
    modifiedAt: "2026-11-13",
    intro:
      "If you run a restaurant or a café, your customers already have opinions about you: the question is whether those opinions reach Google. Here is how to ask for reviews at the table and the register, with a short script for your team, what Google prohibits so you do not put your profile at risk, and how to reply when a negative review arrives.",
    sections: [
      {
        heading: "Google reviews for your restaurant: where to start",
        body: [
          "To get Google reviews for a restaurant or café, ask at the right moment, make it easy with a link or QR code from your Business Profile, and never offer anything in return. Google recommends reminding customers they can leave reviews, and it lets you create that link and QR code.",
          "This guide covers why reviews matter, where to ask at the table and the register, what to say, when an NFC plate makes sense, what Google prohibits and how to reply.",
        ],
      },
      {
        heading: "Why reviews matter before anyone books a table",
        body: [
          "Many diners check reviews before choosing where to eat. In a TheFork survey of more than 6,000 users, 62% of diners in Spain rule out a restaurant if they find bad reviews before booking. It is a Spanish figure, not a Mexican one, but it shows how much weight your public reputation carries.",
          "The figure comes from a booking platform, so treat it as a reference and not as a promise of results. What does depend on you is giving visitors an easy way to share their experience.",
        ],
      },
      {
        heading: "Where to ask for reviews: table and register",
        body: [
          "The two natural spots are the register and the table. At the register, put the plate at eye level, next to the card terminal. At the table, use it once the customer has finished eating. A code hidden under the counter does not get used, so place it where customers look.",
          "Other spots we suggest are the exit and the receipt or takeout packaging. For common placement mistakes, read [where to put your review plate](/en/blog/where-to-put-your-google-review-plate).",
        ],
      },
      {
        heading: "What to say: a short script for waiters and cashiers",
        body: [
          "A good script is short, neutral and pressure-free. What matters is thanking, inviting and pointing to the plate, without insisting or asking for a particular rating. For example: “Thanks for coming. If you would like to tell us how it went, a Google review helps us; hold your phone near the plate.”",
          "To leave a review, the customer must sign in to a Google account. They can create one with an email address that is not Gmail. This is real friction: if someone has no account handy, do not pressure them; they can do it later.",
        ],
      },
      {
        heading: "Direct link, NFC plate or QR: which one to use",
        body: [
          "Asking in person works, but it depends on the customer remembering your business name and searching for it. A direct link, a QR code or an NFC plate saves that step: it opens your review form with a tap or a scan. Google lets you create the link and the QR code from your Business Profile.",
          "The Yume [NFC review plate](/en/products/google-review-nfc-plate) arrives already programmed with your business review link and with a backup QR printed on it. It is a one-time payment, with no subscription and no app. It comes with adhesive; if you prefer something freestanding, the [NFC review stand](/en/products/google-review-nfc-stand) does not need to be stuck down.",
          "Not every phone reads NFC the same way, which is why the backup QR is there. To compare both options, read [NFC versus printed QR](/en/blog/nfc-plate-vs-printed-qr-code-for-reviews). If you wonder about your customers' phones, check whether the [NFC plate works with iPhone and Android](/en/blog/does-nfc-plate-work-iphone-android).",
        ],
      },
      {
        heading: "What Google prohibits when you ask for restaurant reviews",
        body: [
          "Google prohibits offering free or discounted products or services in exchange for reviews, for changing them or for removing negative ones. In a restaurant, that includes giving away a dessert, a coffee or a discount for reviewing. Google treats it as fake engagement and it is strictly prohibited.",
          "Reviews must reflect an authentic experience, and violations can lead to restrictions on your Business Profile. The legitimate alternative is to thank customers, ask naturally and reply.",
          "According to specialized media that follow the policy, Google can remove incentivized reviews, and restrictions can stack up if violations repeat. They also say Google asks to be told about signs, flyers or QR codes that offer incentives, so your QR can invite a review, but it must not promise anything in return.",
          "For a broader look at what is allowed, read [Google review policies](/en/blog/google-review-policies-what-you-can-and-cannot-do).",
        ],
      },
      {
        heading: "How to reply to reviews, including negative ones",
        body: [
          "Several review guides recommend replying to all of them, not only the positive ones. To a good review, say thanks in a sentence. To a negative one, reply calmly and without arguing. Never offer anything in exchange for changing it, because Google prohibits that.",
          "A short protocol for a negative review: read it calmly before answering, thank the customer for taking the time, acknowledge what they went through without debating details in public, and invite them to continue the conversation through a direct channel. Do not promise compensation in exchange for changing their opinion.",
          "To set up your profile and link step by step, see [set up your Google profile](/en/blog/set-up-google-business-profile-and-ask-for-reviews).",
        ],
      },
      {
        heading: "Ask every customer, not only the happy ones",
        body: [
          "It is best to ask every customer for a review, not only those who leave happy. According to third-party blogs that cite Google's policy, asking only satisfied customers or discouraging negative reviews is also prohibited. Choosing who to ask would be cherry-picking.",
          "That is a reading of secondary sources, not literal Google text. To see how this applies to your business type, read [review plate for restaurants](/en/blog/google-review-plate-for-restaurants).",
        ],
      },
    ],
    relatedProductSlugs: ["placa-resena-google-nfc", "stand-resena-google-nfc"],
    relatedBlogSlugs: ["google-review-plate-for-restaurants", "nfc-plate-vs-printed-qr-code-for-reviews", "set-up-google-business-profile-and-ask-for-reviews", "google-review-policies-what-you-can-and-cannot-do", "where-to-put-your-google-review-plate"],
    sources: [
      { label: "Google Business Profile Help: review policy", url: "https://support.google.com/business/answer/3474122?hl=es" },
      { label: "Vinetur: TheFork survey on reviews and bookings in Spain", url: "https://www.vinetur.com/20260715104301/el-62-de-los-espanoles-descarta-un-restaurante-por-sus-malas-resenas-antes-de-reservar.html" },
      { label: "PinMeto: incentivized reviews and Google (secondary source)", url: "https://www.pinmeto.com/news/google-incentivized-reviews-penalty-2026/" },
      { label: "PinMeto: stacking restrictions for repeat violations (secondary source)", url: "https://www.pinmeto.com/news/google-review-restrictions-stack-repeat-violations-2026/" },
      { label: "Search Engine Roundtable: Business Profile restrictions for review violations", url: "https://seroundtable.com/google-reviews-restrictions-business-profile-violations-38068.html" },
    ],
    faq: [
      {
        q: "Does a plate guarantee more reviews?",
        a: "No. The plate makes the step easier for the customer, but it does not guarantee reviews. Whether someone reviews depends on their experience and their choice to do it.",
      },
      {
        q: "Can asking for reviews with a QR code get me in trouble with Google?",
        a: "Google recommends reminding customers they can leave reviews and lets you create a link and a QR code in your Business Profile. What is prohibited is offering something in return. Violations can lead to restrictions on the profile.",
      },
      {
        q: "Can I give a free dessert to anyone who leaves a review?",
        a: "No. Google prohibits offering free products, services or discounts in exchange for reviews. Thank customers in person and let each one decide.",
      },
      {
        q: "Can I ask for reviews only from customers who left happy?",
        a: "Better not to. According to third-party blogs that cite Google's policy (not official text), asking only satisfied customers is not allowed. Use the same script with everyone.",
      },
      {
        q: "Does the TheFork 62% figure apply to Mexico?",
        a: "This article has no figure for Mexico. The 62% comes from a TheFork survey in Spain and is cited only as a reference.",
      },
    ],
  },
  {
    slug: "sticker-printing-for-events",
    title: "Sticker Printing for Events and Weddings",
    description:
      "A guide to sticker printing for events and weddings: where to use them, vinyl or paper, readable sizes, quantities and how to order with a digital proof.",
    category: "Guides",
    publishedAt: "2026-11-13",
    modifiedAt: "2026-11-13",
    intro:
      "Sticker printing for events and weddings is not a catalog decision: what matters is where each sticker goes, which material, which size stays readable and how many you need. This guide helps you decide calmly and order with the digital proof in hand.",
    sections: [
      {
        heading: "Sticker printing for events: where they go",
        body: [
          "Sticker printing for events lets you finish and personalize pieces you already have: invitation envelopes, favor bags, boxes, bottles, cups, thank-you cards and welcome kits. One design across all of them makes the wedding or event look planned, without ordering each piece separately.",
          "For ideas by occasion, read the guide to [stickers for weddings, events and parties](/en/blog/stickers-for-weddings-events-and-parties). If the sticker will go with a keepsake for your guests, pair it with [personalized wedding favors](/en/blog/personalized-wedding-favors-with-name-and-date). Here we focus on how to decide and order.",
        ],
      },
      {
        heading: "Stickers with purpose: from loose souvenir to useful detail",
        body: [
          "The wedding keepsakes gaining ground in 2026 are personalized ones with a reason to exist after the party. So think of the sticker as the label on a useful detail, such as welcome kits, bottles or packaging, not as a loose sticker with initials.",
          "According to Publimetro México, generic objects, single-use ones and those that only carry names and a date are losing ground. A sticker that seals a package or identifies a bottle inside a welcome kit has a job to do, which makes more sense as a keepsake. If your detail is a treat, see our [personalized candy boxes](/en/products/personalized-party-favor-boxes).",
        ],
      },
      {
        heading: "Vinyl or paper? How to choose the material for the use",
        body: [
          "Choose based on where the sticker will live. If it goes on bottles with ice or in a humid place, vinyl is the better fit. If it is a dry piece, like an envelope, a box or a card, the material matters less. We work with premium vinyl with BOPP lamination, water, sun and scratch resistant.",
          "The finish can be matte, glossy or holographic, and the cut die cut or kiss cut: you choose them when you order. To compare in depth, read [vinyl vs paper stickers](/en/blog/vinyl-vs-paper-stickers-differences) and check [die cut vs kiss cut](/en/blog/die-cut-vs-kiss-cut-stickers) to choose the cut.",
        ],
      },
      {
        heading: "What sticker size keeps names and dates readable",
        body: [
          "Our vinyl stickers come in three sizes: small up to 4 cm, medium from 5 to 6 cm and large from 7 to 8 cm. If the design has names, a date or a phrase, choose medium or large so the text reads comfortably. For larger sizes, we quote by WhatsApp.",
          "You choose the size on the product page along with the cut and the finish, and it sets the price per piece. If you are unsure which size fits your piece, send us a photo on WhatsApp.",
        ],
        table: {
          headers: ["Size", "Measure"],
          rows: [
            ["Small", "Up to 4 cm"],
            ["Medium", "5 to 6 cm"],
            ["Large", "7 to 8 cm"],
            ["Larger", "Quoted by WhatsApp"],
          ],
        },
      },
      {
        heading: "How to match stickers to your stationery and color palette",
        body: [
          "Start from the colors and typography of the invitation or menu, and repeat them on the sticker. That way the envelope seal, the favor bag label and the thank-you card look like one family. If you already have your stationery, send us a photo by WhatsApp so we can work the design with that palette.",
          "If you do not have stationery yet, start with [how to order custom stationery online](/en/blog/how-to-order-custom-stationery-online) or [custom event invitations](/en/blog/how-to-order-custom-event-invitations), and then order the stickers in the same colors. For the table, see [personalized wedding table details](/en/blog/personalized-wedding-table-details) and [custom wedding menus](/en/blog/custom-wedding-menus). If you want a different name on each sticker, ask on WhatsApp whether it is possible for your order.",
        ],
      },
      {
        heading: "What to check in the digital proof before printing",
        body: [
          "Before printing, we send a digital proof so you can review names, dates and colors. It is the moment to confirm every word is spelled right, the colors match your stationery, and the cut and finish you chose are the ones you want. You can send us your design, a character or a photo.",
          "If you have questions about your file, confirm it with us on WhatsApp before sending it.",
        ],
      },
      {
        heading: "How many stickers to order for your event",
        body: [
          "First count how many pieces you will decorate: guests, tables and gifts. Our minimum order for vinyl stickers is 40 pieces and you can type the exact quantity you need, not just the menu options. That lets you order exactly the number of pieces your event needs.",
          "The price per piece depends on the size and you can see it on the [custom vinyl stickers](/en/products/waterproof-vinyl-stickers) page. If the sticker carries your brand or company logo, see the [custom logo stickers](/en/products/custom-logo-stickers). To count the pieces for other event details, use the guide on [how many party favors to order per event](/en/blog/how-many-party-favors-to-order-per-event).",
        ],
      },
      {
        heading: "How to work with planners and family members who organize the order",
        body: [
          "If you organize the event for someone else, decide who approves the design and who receives the order, and use the digital proof as the point of agreement. That way the bride, the planner or the relative sees names, date and colors before printing, and contact stays direct on WhatsApp.",
          "If you work with clients, read the [digital proof for planners](/en/blog/digital-proof-event-order-planners), the [planner checklist for custom favors](/en/blog/planner-checklist-custom-favors-order-event) and the page for [planners](/en/planners).",
        ],
      },
      {
        heading: "How to order: digital proof and direct WhatsApp contact",
        body: [
          "You send your design, photo or idea and we send a digital proof before printing. You choose the cut type, finish and size, and we answer questions directly on WhatsApp. The process is built for brides, family members, planners and companies organizing a specific event.",
          "We explain production and shipping times in [how long custom stickers take to arrive](/en/blog/how-long-do-custom-stickers-take-to-arrive). To compare printing options, see [where to print custom stickers in Mexico](/en/blog/where-to-print-custom-stickers-mexico).",
        ],
      },
    ],
    relatedProductSlugs: ["stickers-vinil-impermeable", "stickers-logo-personalizado"],
    relatedBlogSlugs: [
      "stickers-for-weddings-events-and-parties",
      "vinyl-vs-paper-stickers-differences",
      "personalized-wedding-favors-with-name-and-date",
      "how-long-do-custom-stickers-take-to-arrive",
      "digital-proof-event-order-planners",
    ],
    sources: [
      {
        label: "Publimetro México: wedding souvenirs 2026, the trends gaining ground",
        url: "https://www.publimetro.com.mx/virales/2026/10/02/souvenirs-para-bodas-2026-las-tendencias-que-ganan-terreno/",
      },
    ],
    faq: [
      {
        q: "Do the stickers hold up on bottles with water?",
        a: "Yes. They are premium vinyl, resistant to water, sun and scratches, and hold up well on bottles or surfaces that get wet.",
      },
      {
        q: "Can I order a size larger than 8 cm?",
        a: "Yes. Write to us on WhatsApp with the size and quantity and we quote it separately.",
      },
      {
        q: "Can I use my own design or a photo?",
        a: "Yes. You can send us your design, a character or a photo, and we prepare a digital proof before printing.",
      },
      {
        q: "Which finishes and cut types are available?",
        a: "The cut can be die cut or kiss cut, and the finish matte, glossy or holographic. You choose them when you place your order.",
      },
      {
        q: "What if the sticker is for my business logo?",
        a: "For your business or brand logo there are logo stickers starting at 50 pieces. For any design, character or photo, custom vinyl stickers start at 40 pieces.",
      },
    ],
  },
];

export function getBlogPostEn(slug: string) {
  return blogPostsEn.find((p) => p.slug === slug);
}
