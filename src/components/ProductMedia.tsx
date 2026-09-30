"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/content/products";
import type { ProductPhoto } from "@/content/product-photos";
import { ProductVisual } from "@/components/ProductVisual";

// Product-page photo frame. With extra real photos it adds a thumbnail row
// under the frame that swaps the main image (first thumb = the main photo).
export function ProductMedia({
  product,
  photos,
  badge,
  thumbLabel,
}: {
  product: Product;
  photos: ProductPhoto[];
  badge?: string;
  thumbLabel: string;
}) {
  const main: ProductPhoto | undefined = product.image
    ? { src: product.image, width: product.imageWidth ?? 380, height: product.imageHeight ?? 380, alt: product.name }
    : undefined;
  const all = main ? [main, ...photos] : [];
  const [active, setActive] = useState(0);
  // Swipe left/right on the photo to page through them (phones). Only
  // clearly horizontal drags count, so vertical page scroll is untouched.
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || all.length < 2) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    setActive((i) => (dx < 0 ? Math.min(all.length - 1, i + 1) : Math.max(0, i - 1)));
  };

  return (
    <>
      <div
        onTouchStart={(e) => (touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
        onTouchEnd={onTouchEnd}
        className="product-zoom-frame card-soft relative flex items-center justify-center p-4 [&_img]:max-h-44 [&_img]:w-auto [&_img]:object-contain [&_.product-zoom-img]:max-h-44 sm:[&_img]:max-h-none sm:[&_.product-zoom-img]:max-h-none sm:justify-start sm:p-10"
      >
        {all.length > 1 && (
          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-white sm:hidden" aria-hidden="true">
            {active + 1}/{all.length}
          </span>
        )}
        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            {badge}
          </span>
        )}
        <div className="product-zoom-img">
          <ProductVisual product={product} photo={active > 0 ? all[active] : undefined} />
        </div>
      </div>
      {all.length > 1 && (
        <ul className="mt-4 flex gap-3" aria-label={thumbLabel}>
          {all.map((ph, i) => (
            <li key={ph.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={ph.alt}
                aria-pressed={active === i}
                className={`relative block size-16 overflow-hidden rounded-xl border bg-paper-raised transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:size-20 ${
                  active === i ? "border-brand" : "border-line hover:border-brand"
                }`}
              >
                <Image src={ph.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
