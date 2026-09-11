"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { UI } from "@/lib/i18n";

const CATEGORY_PRODUCT: Record<string, "logos" | "stickers"> = {
  Logos: "logos",
};
// Every other category (Sanrio, Videojuegos, Anime y Terror, Mascotas,
// Ternurines) is custom vinyl sticker work.
function productHrefFor(category: string, lang: "es" | "en") {
  const kind = CATEGORY_PRODUCT[category] ?? "stickers";
  if (lang === "en") return kind === "logos" ? "/en/products/custom-logo-stickers" : "/en/products/waterproof-vinyl-stickers";
  return kind === "logos" ? "/productos/stickers-logo-personalizado" : "/productos/stickers-vinil-impermeable";
}

export interface GalleryGridItem {
  slug: string;
  image: string;
  width: number;
  height: number;
  category: string;
  title: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryGridItem[];
  categories: readonly string[];
  allLabel: string;
  lang?: "es" | "en";
}

export function GalleryGrid({ items, categories, allLabel, lang = "es" }: GalleryGridProps) {
  const t = UI[lang];
  const [active, setActive] = useState<string>(allLabel);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === allLabel ? items : items.filter((i) => i.category === active);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // filtered.length only changes when `active` changes, which already closes the lightbox below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  const active_item = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {[allLabel, ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActive(cat);
              setLightboxIndex(null);
            }}
            className={`flex min-h-11 items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              active === cat ? "border-brand bg-brand text-white" : "border-line text-ink-soft hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-paper-raised text-left"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 23vw, (min-width: 640px) 31vw, 47vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {active_item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active_item.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute right-2 top-2 flex size-11 items-center justify-center text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X size={28} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
            }}
            aria-label="Previous"
            className="absolute left-2 flex size-11 items-center justify-center text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
          >
            <ChevronLeft size={32} aria-hidden="true" />
          </button>
          <div className="relative max-h-[80vh] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/4] max-h-[80vh] w-full overflow-hidden rounded-xl">
              <Image src={active_item.image} alt={active_item.alt} fill sizes="90vw" className="object-contain" priority />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">{active_item.title}</p>
            <a
              href={productHrefFor(active_item.category, lang)}
              className="btn-soft btn-soft-solid mx-auto mt-4 flex w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {t.galleryCtaButton}
            </a>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
            aria-label="Next"
            className="absolute right-2 flex size-11 items-center justify-center text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
          >
            <ChevronRight size={32} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
