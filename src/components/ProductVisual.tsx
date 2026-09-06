"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/content/products";
import { NotepadMark } from "@/components/NotepadMark";

// Real product photo when available; falls back to the honest CSS/SVG
// illustration for products that don't have photography yet (never a
// fake stock photo).
export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  if (product.image) {
    const size = compact ? 260 : 380;
    return (
      <span className="product-image-wrap">
        {!loaded && <span className="product-image-shimmer" aria-hidden="true" />}
        <Image
          src={product.image}
          alt={product.name}
          width={size}
          height={size}
          className={
            compact
              ? "h-full w-auto max-w-full object-contain"
              : "h-auto w-full max-w-[380px] object-contain"
          }
          priority={!compact}
          onLoad={() => setLoaded(true)}
        />
      </span>
    );
  }
  return <NotepadMark compact={compact} />;
}
