"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { UI } from "@/lib/i18n";
import { productHrefFor } from "@/lib/gallery-links";
import type { GalleryType } from "@/content/gallery";

export interface GalleryGridItem {
  slug: string;
  image: string;
  width: number;
  height: number;
  type: GalleryType;
  category: string;
  title: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryGridItem[];
  categories: readonly string[];
  allLabel: string;
  typeLabels: Record<GalleryType, string>;
  lang?: "es" | "en";
}

// Landscape photos span two columns so the 3:4 thumbnails don't crop them.
const isWide = (i: { width: number; height: number }) => i.width / i.height > 1.2;

export function GalleryGrid({ items, categories, allLabel, typeLabels, lang = "es" }: GalleryGridProps) {
  const t = UI[lang];
  const [type, setType] = useState<GalleryType | null>(null);
  const [active, setActive] = useState<string>(allLabel);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const ofType = type ? items.filter((i) => i.type === type) : items;
  // Only offer the categories that actually have photos for the chosen type.
  const visibleCategories = categories.filter((c) => ofType.some((i) => i.category === c));
  const filtered = active === allLabel ? ofType : ofType.filter((i) => i.category === active);

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
      <div role="group" aria-label={typeLabels.sticker + " / " + typeLabels.tattoo} className="mb-4 flex flex-wrap gap-2">
        {([null, "sticker", "tattoo"] as const).map((tp) => (
          <button
            key={tp ?? "all"}
            type="button"
            aria-pressed={type === tp}
            onClick={() => {
              setType(tp);
              setActive(allLabel);
              setLightboxIndex(null);
            }}
            className={`flex min-h-11 items-center rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              type === tp ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-ink"
            }`}
          >
            {tp ? typeLabels[tp] : allLabel}
          </button>
        ))}
      </div>

      <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        {[allLabel, ...visibleCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActive(cat);
              setLightboxIndex(null);
            }}
            className={`flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              active === cat ? "border-brand bg-brand text-white" : "border-line text-ink-soft hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-flow-dense grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={`group relative overflow-hidden rounded-xl border border-line bg-paper-raised text-left ${
              isWide(item) ? "col-span-2 aspect-[3/2]" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes={isWide(item) ? "(min-width: 768px) 47vw, (min-width: 640px) 64vw, 94vw" : "(min-width: 768px) 23vw, (min-width: 640px) 31vw, 47vw"}
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
          <div className={`relative max-h-[80vh] w-full ${isWide(active_item) ? "max-w-3xl" : "max-w-md"}`} onClick={(e) => e.stopPropagation()}>
            <div
              className="relative max-h-[70vh] w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: `${active_item.width} / ${active_item.height}` }}
            >
              <Image src={active_item.image} alt={active_item.alt} fill sizes="90vw" className="object-contain" loading="eager" />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">{active_item.title}</p>
            <a
              href={productHrefFor(active_item.category, lang, active_item.type)}
              className="btn-soft btn-soft-solid mx-auto mt-4 flex w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {active_item.type === "tattoo" ? t.galleryCtaTattoo : t.galleryCtaButton}
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
