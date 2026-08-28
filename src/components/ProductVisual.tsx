import Image from "next/image";
import type { Product } from "@/content/products";
import { NotepadMark } from "@/components/NotepadMark";

// Real product photo when available; falls back to the honest CSS/SVG
// illustration for products that don't have photography yet (never a
// fake stock photo).
export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  if (product.image) {
    const size = compact ? 260 : 380;
    return (
      <Image
        src={product.image}
        alt={product.name}
        width={size}
        height={size}
        className="h-auto w-full max-w-[380px] object-contain"
        priority={!compact}
      />
    );
  }
  return <NotepadMark compact={compact} />;
}
