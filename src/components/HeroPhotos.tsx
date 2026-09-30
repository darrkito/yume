import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/content/gallery";
import { getGalleryItemsEn } from "@/content/gallery.en";
import { productHrefFor } from "@/lib/gallery-links";
import type { Lang } from "@/lib/i18n";

const SLUGS = ["hello-kitty", "mascotas-perros-gatos", "logo-vanelia"];

// Three real photos of past work under the hero jar: proof of the product
// next to the playful animation, each linking to the matching product.
export function HeroPhotos({ lang }: { lang: Lang }) {
  const items = lang === "en" ? getGalleryItemsEn() : galleryItems;
  const photos = SLUGS.flatMap((s) => items.find((i) => i.slug === s) ?? []);
  return (
    <ul className="flex justify-center gap-4 sm:mt-6 sm:justify-end">
      {photos.map((p, i) => (
        <li key={p.slug}>
          <Link
            href={productHrefFor(p.category, lang)}
            aria-label={p.title}
            className={`card-soft relative block h-36 w-24 overflow-hidden p-0 sm:h-40 sm:w-32 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
          >
            <Image src={p.image} alt={p.alt} fill sizes="128px" priority={i === 0} className="object-cover" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
