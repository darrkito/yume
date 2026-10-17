"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export interface ZoomPhoto {
  slug: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}

const LABELS = {
  es: { close: "Cerrar", prev: "Anterior", next: "Siguiente" },
  en: { close: "Close", prev: "Previous", next: "Next" },
};

// Click-to-zoom photo tiles for pages that show real photos outside the
// gallery (same dark lightbox as /galeria and the product photo zoom).
// One lightbox per group, so arrows/keys move within that group.
export function ZoomPhotos({
  photos,
  lang,
  listClassName,
  tileClassName,
  sizes,
  priority,
}: {
  photos: ZoomPhoto[];
  lang: Lang;
  listClassName: string;
  tileClassName: string;
  sizes: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const t = LABELS[lang];
  const n = photos.length;
  const current = index !== null ? photos[index] : null;

  useEffect(() => {
    if (index === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + n) % n));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, n]);

  const arrow = "absolute z-10 flex size-11 items-center justify-center text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <>
      <ul className={listClassName}>
        {photos.map((p, i) => (
          <li key={p.slug}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${tileClassName}`}
            >
              <Image src={p.image} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.alt} className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-10" onClick={() => setIndex(null)}>
          <button type="button" onClick={() => setIndex(null)} aria-label={t.close} className={`${arrow} right-2 top-2`}>
            <X size={28} aria-hidden="true" />
          </button>
          {n > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i - 1 + n) % n));
              }}
              aria-label={t.prev}
              className={`${arrow} left-2 sm:left-6`}
            >
              <ChevronLeft size={32} aria-hidden="true" />
            </button>
          )}
          <div className="relative max-h-[85vh] w-full max-w-2xl" style={{ aspectRatio: `${current.width} / ${current.height}` }} onClick={(e) => e.stopPropagation()}>
            <Image src={current.image} alt={current.alt} fill sizes="90vw" className="object-contain" loading="eager" />
          </div>
          {n > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i + 1) % n));
              }}
              aria-label={t.next}
              className={`${arrow} right-2 sm:right-6`}
            >
              <ChevronRight size={32} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
