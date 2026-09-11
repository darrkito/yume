"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/content/products";
import { NotepadMark } from "@/components/NotepadMark";

// Real product photo when available; falls back to the honest CSS/SVG
// illustration for products that don't have photography yet (never a
// fake stock photo).
export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (product.image) {
    // Real aspect ratio when known, so the frame around the photo matches
    // the photo instead of an arbitrary square — falls back to a square
    // only for the rare case a product image ships without dimensions.
    const width = product.imageWidth ?? 380;
    const height = product.imageHeight ?? 380;

    return (
      <>
        <span
          // `self-stretch` (compact only) makes this flex item actually fill
          // the card thumbnail's fixed height — the parent uses
          // `items-center`, so without it the wrap's `height: 100%` (see
          // .product-image-wrap in globals.css) never resolves to a real
          // value, and the image falls back to filling the container's
          // width instead and scales its height by the real aspect ratio,
          // overflowing tall/portrait photos past the thumbnail box.
          className={compact ? "product-image-wrap self-stretch" : "product-image-wrap"}
          style={compact ? undefined : { aspectRatio: `${width} / ${height}`, height: "auto", width: "100%" }}
        >
          {!loaded && <span className="product-image-shimmer" aria-hidden="true" />}
          <Image
            src={product.image}
            alt={product.name}
            width={width}
            height={height}
            className={compact ? "h-full w-auto max-w-full object-contain" : "h-auto max-h-full w-auto max-w-full object-contain"}
            priority={!compact}
            onLoad={() => setLoaded(true)}
            onClick={compact ? undefined : () => setOpen(true)}
          />
        </span>
        {open && !compact && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-10"
            onClick={() => setOpen(false)}
          >
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar" className="absolute right-4 top-4 text-white/80 hover:text-white">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative max-h-[85vh] w-full max-w-2xl" style={{ aspectRatio: `${width} / ${height}` }}>
              <Image src={product.image} alt={product.name} fill sizes="90vw" className="object-contain" />
            </div>
          </div>
        )}
      </>
    );
  }
  return <NotepadMark compact={compact} />;
}
