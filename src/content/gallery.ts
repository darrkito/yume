export interface GalleryItem {
  slug: string;
  image: string;
  /** Width/height of the source photo — required for next/image to avoid CLS. */
  width: number;
  height: number;
  category: string;
  title: string;
  alt: string;
}

// Real photos of stickers we've printed, from /home/darrkito/YumePhotos —
// no stock or fabricated images. Each photo is a physical printed sheet, so
// one photo can show several designs at once; `title`/`alt` list what's
// actually visible rather than pretending each photo is a single item.
export const galleryCategories = [
  "Sanrio",
  "Videojuegos",
  "Anime y Terror",
  "Mascotas",
  "Ternurines",
  "Logos",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    slug: "hello-kitty",
    image: "/gallery/gallery-sanrio-hello-kitty.webp",
    width: 1280,
    height: 1226,
    category: "Sanrio",
    title: "Stickers de Hello Kitty",
    alt: "Planillas de stickers de Hello Kitty en vinil: boda, Halloween, San Valentín y más diseños",
  },
  {
    slug: "kuromi-pochacco",
    image: "/gallery/gallery-sanrio-kuromi-pochacco.webp",
    width: 1236,
    height: 1280,
    category: "Sanrio",
    title: "Stickers de Kuromi y Pochacco",
    alt: "Stickers de Kuromi, Pochacco y My Melody en vinil resistente al agua",
  },
  {
    slug: "pompompurin-badtzmaru-kuromi",
    image: "/gallery/gallery-sanrio-pompompurin-badtzmaru-kuromi.webp",
    width: 960,
    height: 1280,
    category: "Sanrio",
    title: "Stickers de Pompompurin, Badtz-Maru y Kuromi",
    alt: "Stickers de Pompompurin, Badtz-Maru y Kuromi de Sanrio en vinil",
  },
  {
    slug: "pompompurin-chiikawa",
    image: "/gallery/gallery-sanrio-pompompurin-chiikawa.webp",
    width: 960,
    height: 1280,
    category: "Sanrio",
    title: "Stickers de Pompompurin y Chiikawa",
    alt: "Planillas de stickers de Pompompurin y personajes de Chiikawa en vinil",
  },
  {
    slug: "tuxedosam-vanelia",
    image: "/gallery/gallery-sanrio-tuxedosam-vanelia.webp",
    width: 1200,
    height: 1600,
    category: "Sanrio",
    title: "Stickers de Tuxedosam y logo personalizado Vanelia",
    alt: "Bolsa de stickers de Tuxedosam junto con stickers circulares del logo personalizado Vanelia",
  },
  {
    slug: "pokemon-dragones",
    image: "/gallery/gallery-videojuegos-pokemon.webp",
    width: 900,
    height: 1600,
    category: "Videojuegos",
    title: "Stickers de Pokémon: Dratini, Dragonair y Dragonite",
    alt: "Planilla de stickers de la línea evolutiva de Dragonite y planilla de Pompompurin en vinil",
  },
  {
    slug: "zelda-lucario",
    image: "/gallery/gallery-videojuegos-zelda-lucario.webp",
    width: 960,
    height: 1280,
    category: "Videojuegos",
    title: "Stickers de Zelda y Lucario",
    alt: "Stickers de The Legend of Zelda (Zelda, Link) y Lucario de Pokémon en vinil",
  },
  {
    slug: "coraline-scream-dandadan",
    image: "/gallery/gallery-anime-terror-coraline-scream-dandadan.webp",
    width: 960,
    height: 1280,
    category: "Anime y Terror",
    title: "Stickers de Coraline, Scream, Dan Da Dan, Hangyodon y Keroppi",
    alt: "Cinco planillas de stickers: Hangyodon, Scream, Dan Da Dan, Coraline y Keroppi",
  },
  {
    slug: "mascotas-perros-gatos",
    image: "/gallery/gallery-mascotas-perros-gatos.webp",
    width: 960,
    height: 1280,
    category: "Mascotas",
    title: "Stickers personalizados con fotos de perros y gatos",
    alt: "Stickers troquelados hechos con fotos reales de perros y gatos de clientes",
  },
  {
    slug: "mascotas-schnauzer",
    image: "/gallery/gallery-mascotas-schnauzer.webp",
    width: 960,
    height: 1280,
    category: "Mascotas",
    title: "Stickers personalizados de Schnauzer",
    alt: "Colección de stickers ilustrados y fotográficos de perros Schnauzer",
  },
  {
    slug: "sylvanian-families",
    image: "/gallery/gallery-ternurines-sylvanian-families.webp",
    width: 960,
    height: 1280,
    category: "Ternurines",
    title: "Stickers de Sylvanian Families",
    alt: "Stickers de las figuras de Sylvanian Families (Calico Critters) en vinil",
  },
  {
    slug: "logo-yume",
    image: "/gallery/gallery-logos-yume.webp",
    width: 900,
    height: 1600,
    category: "Logos",
    title: "Stickers con el logo de Yume",
    alt: "Planilla de stickers circulares con el logo de Yume en acabado metalizado",
  },
  {
    slug: "logo-vanelia",
    image: "/gallery/gallery-logos-vanelia.webp",
    width: 900,
    height: 1600,
    category: "Logos",
    title: "Stickers de logo personalizado para negocio (Vanelia)",
    alt: "Stickers circulares con el logo personalizado de la marca Vanelia",
  },
];

export const getGalleryByCategory = (category: string) => galleryItems.filter((i) => i.category === category);
