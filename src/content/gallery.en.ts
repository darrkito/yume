import { galleryItems, type GalleryItem } from "@/content/gallery";

export interface GalleryTranslation {
  category: string;
  title: string;
  alt: string;
}

// Keyed by the same `slug` as gallery.ts: translation-only, image/dimensions
// stay shared from the Spanish source (same pattern as products.en.ts).
const translations: Record<string, GalleryTranslation> = {
  "hello-kitty": {
    category: "Sanrio",
    title: "Hello Kitty stickers",
    alt: "Sheets of Hello Kitty vinyl stickers: wedding, Halloween, Valentine's Day and more designs",
  },
  "kuromi-pochacco": {
    category: "Sanrio",
    title: "Kuromi and Pochacco stickers",
    alt: "Kuromi, Pochacco and My Melody stickers on water-resistant vinyl",
  },
  "pompompurin-badtzmaru-kuromi": {
    category: "Sanrio",
    title: "Pompompurin, Badtz-Maru and Kuromi stickers",
    alt: "Sanrio's Pompompurin, Badtz-Maru and Kuromi stickers on vinyl",
  },
  "pompompurin-chiikawa": {
    category: "Sanrio",
    title: "Pompompurin and Chiikawa stickers",
    alt: "Sheets of Pompompurin and Chiikawa character stickers on vinyl",
  },
  "tuxedosam-vanelia": {
    category: "Sanrio",
    title: "Tuxedosam stickers and a custom logo (Vanelia)",
    alt: "Bag of Tuxedosam stickers next to circular stickers for the custom Vanelia logo",
  },
  "pokemon-dragones": {
    category: "Video Games",
    title: "Pokémon stickers: Dratini, Dragonair and Dragonite",
    alt: "Sheet of Dragonite evolution-line stickers next to a Pompompurin sheet, on vinyl",
  },
  "zelda-lucario": {
    category: "Video Games",
    title: "Zelda and Lucario stickers",
    alt: "The Legend of Zelda (Zelda, Link) and Pokémon's Lucario stickers on vinyl",
  },
  "coraline-scream-dandadan": {
    category: "Anime & Horror",
    title: "Coraline, Scream, Dan Da Dan, Hangyodon and Keroppi stickers",
    alt: "Five sticker sheets: Hangyodon, Scream, Dan Da Dan, Coraline and Keroppi",
  },
  "mascotas-perros-gatos": {
    category: "Pets",
    title: "Custom stickers made from real dog and cat photos",
    alt: "Die-cut stickers made from customers' real dog and cat photos",
  },
  "mascotas-schnauzer": {
    category: "Pets",
    title: "Custom Schnauzer stickers",
    alt: "Collection of illustrated and photo-based Schnauzer dog stickers",
  },
  "sylvanian-families": {
    category: "Ternurines",
    title: "Sylvanian Families stickers",
    alt: "Sylvanian Families (Calico Critters) figure stickers on vinyl",
  },
  "logo-yume": {
    category: "Logos",
    title: "Yume logo stickers",
    alt: "Sheet of circular stickers with the Yume logo in a metallic finish",
  },
  "logo-vanelia": {
    category: "Logos",
    title: "Custom business logo stickers (Vanelia)",
    alt: "Circular stickers with the custom logo for the Vanelia brand",
  },
  "ghibli-snoopy-planilla": {
    category: "Ternurines",
    title: "Snorlax, Totoro, Snoopy, Yoshi stickers and more",
    alt: "Sheet of die-cut stickers: Snorlax, Sprigatito, Snoopy, No-Face and Howl stamps, Totoro, stained-glass Yoshi, Miffy and Pompompurin",
  },
  "en-uso-botella-schnauzer": {
    category: "In use",
    title: "Water bottle decorated with vinyl stickers",
    alt: "Blue water bottle decorated with vinyl stickers: a Schnauzer made from a real photo, Pompompurin, Sprigatito, Jiji and Pochacco",
  },
  "en-uso-botella-owala": {
    category: "In use",
    title: "Tumbler with Snoopy, Pompompurin, Totoro and Yoshi stickers",
    alt: "Blue tumbler covered in die-cut vinyl stickers: Snoopy, Pompompurin, Sprigatito, Totoro, Calcifer, Jiji and stained-glass Yoshi",
  },
  "en-uso-laptop-vertical": {
    category: "In use",
    title: "Laptop decorated with die-cut vinyl stickers",
    alt: "Blue laptop covered in vinyl stickers: Snorlax, Jack Skellington, Hangyodon, Miffy, Sprigatito and Studio Ghibli stamps",
  },
  "en-uso-laptop-horizontal": {
    category: "In use",
    title: "Vinyl stickers applied on a laptop",
    alt: "Top view of a blue laptop with dozens of die-cut vinyl stickers: characters, stamps and logos",
  },
  "logo-bolsas-cafe-detalle": {
    category: "Logos",
    title: "Logo stickers for a café and role-play venue, packed",
    alt: "Clear pouches of die-cut logo stickers for a role-playing café, sealed with the round Yume label",
  },
  "logo-bolsas-cafe-mano": {
    category: "Logos",
    title: "Logo sticker order in pouches",
    alt: "Two clear pouches of business-logo stickers with the Yume label, held in a hand",
  },
  "logo-bolsas-cafe-sello": {
    category: "Logos",
    title: "How your logo stickers arrive: pouch with the Yume label",
    alt: "Clear pouches of logo stickers, a bonus gift sticker and the round burgundy Yume label",
  },
  "religiosos-coleccion-vertical": {
    category: "Religious",
    title: "Sacred art stickers: Saint Michael, Sacred Heart and the Virgin Mary",
    alt: "Collection of die-cut traditional sacred art stickers: Saint Michael the Archangel, Sacred Heart, the Virgin Mary, thurible, cross and Viva Cristo Rey",
  },
  "religiosos-coleccion-horizontal": {
    category: "Religious",
    title: "Full set of die-cut religious stickers",
    alt: "Eight die-cut vinyl sacred art stickers with Latin captions on a white table",
  },
  "religiosos-mano-cruz-corazon": {
    category: "Religious",
    title: "Cross, Thurible, Saint Michael and Sacred Heart stickers",
    alt: "Hand holding four die-cut stickers: Stat Crux, thurible, Saint Michael the Archangel and Cor Jesu miserere nobis",
  },
  "religiosos-mano-virgen-cristero": {
    category: "Religious",
    title: "Virgin Mary, Cristo Rey and Guardians of Tradition stickers",
    alt: "Hand holding die-cut stickers: the Virgin Mary, Viva Cristo Rey, Introibo ad altare Dei and Guardians of Tradition",
  },
  "religiosos-bolsas-sello": {
    category: "Religious",
    title: "Religious stickers packed by design, with the Yume label",
    alt: "Eight clear pouches, one per sacred art design, each with the round Yume label",
  },
  "tatuaje-chococat": {
    category: "Sanrio",
    title: "Chococat temporary tattoo on the wrist",
    alt: "Chococat, Sanrio's black cat, as a temporary tattoo on the wrist",
  },
  "tatuaje-hello-kitty-oso": {
    category: "Sanrio",
    title: "Hello Kitty in a bear costume temporary tattoo",
    alt: "Hello Kitty in a bear costume with a pink bow as a temporary tattoo on the leg",
  },
  "tatuaje-sprigatito": {
    category: "Video Games",
    title: "Sprigatito (Pokémon) temporary tattoo",
    alt: "Full-color Sprigatito Pokémon temporary tattoo on the leg",
  },
  "tatuaje-sin-cara-estampilla": {
    category: "Stamps",
    title: "Stamp-style temporary tattoo: No-Face",
    alt: "Postage-stamp temporary tattoo of No-Face (Spirited Away), applied on the neck",
  },
  "tatuaje-haku-estampilla": {
    category: "Stamps",
    title: "Stamp-style temporary tattoo: Haku",
    alt: "Postage-stamp temporary tattoo of Haku the dragon (Spirited Away), applied on the arm",
  },
  "tatuaje-howl-estampilla": {
    category: "Stamps",
    title: "Stamp-style temporary tattoo: Howl",
    alt: "Postage-stamp temporary tattoo of Howl (Howl's Moving Castle), applied on the leg",
  },
  "tatuaje-ponyo-estampilla": {
    category: "Stamps",
    title: "Stamp-style temporary tattoo: Ponyo",
    alt: "Postage-stamp temporary tattoo of Ponyo, applied on the back of the hand",
  },
  "tatuaje-parejas-recortes": {
    category: "Custom photos",
    title: "Temporary tattoos made from couple photos",
    alt: "Eight temporary tattoos cut to the outline of couple photos, ready to apply",
  },
  "tatuaje-pareja-antebrazo": {
    category: "Custom photos",
    title: "Couple photo temporary tattoo on the forearm",
    alt: "Temporary tattoo of a cut-out couple photo, applied on the forearm",
  },
  "tatuaje-cumpleanos-hoja": {
    category: "Custom photos",
    title: "Birthday tattoo sheet with childhood photos",
    alt: "Sheet of temporary tattoos with childhood photos, a blue party hat and the text Feliz cumpleaños 26",
  },
  "tatuaje-cumpleanos-hoja-mano": {
    category: "Custom photos",
    title: "Custom birthday tattoos, full sheet",
    alt: "Hand holding a sheet of birthday temporary tattoos with childhood photos",
  },
  "tatuaje-cumpleanos-tarjeta": {
    category: "Custom photos",
    title: "Cut-out birthday tattoos with their instruction card",
    alt: "Cut-out birthday temporary tattoos next to the Yume instruction card",
  },
  "tatuaje-cumpleanos-detalle": {
    category: "Custom photos",
    title: "Close-up of custom photo temporary tattoos",
    alt: "Two birthday temporary tattoos with childhood photos, held in a hand",
  },
  "tatuaje-cumpleanos-pila": {
    category: "Custom photos",
    title: "Birthday photo tattoo order",
    alt: "Pile of cut-out birthday temporary tattoos, each with a different childhood photo",
  },
  "tatuajes-tarjeta-instrucciones": {
    category: "Packaging",
    title: "Instruction card for Yume temporary tattoos",
    alt: "Yume card with the 4 steps to apply and remove the temporary tattoos",
  },
  "tatuajes-empaque-sello": {
    category: "Packaging",
    title: "Temporary tattoos packed with the card and Yume label",
    alt: "Clear bag with the instruction card and the round Yume label",
  },
};

export interface GalleryItemEn extends GalleryItem {
  category: string;
  title: string;
  alt: string;
}

export function getGalleryItemsEn(): GalleryItemEn[] {
  return galleryItems.map((item) => ({ ...item, ...translations[item.slug] }));
}

export const galleryCategoriesEn = [
  "Sanrio",
  "Video Games",
  "Anime & Horror",
  "Pets",
  "Ternurines",
  "Logos",
  "Religious",
  "In use",
  "Stamps",
  "Custom photos",
  "Packaging",
] as const;
