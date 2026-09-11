import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/content/gallery";

interface InfiniteGalleryStripProps {
  items: (GalleryItem & { title: string; alt: string })[];
  heading: string;
  body: string;
  viewAllLabel: string;
  viewAllHref: string;
}

// Decorative "trabajos realizados" strip for sticker product pages — an
// infinite CSS-only horizontal loop (see .gallery-marquee in globals.css).
// The track is the item list rendered twice back to back so translateX(-50%)
// loops seamlessly; aria-hidden on the duplicate half keeps screen readers
// from hearing every photo twice.
export function InfiniteGalleryStrip({ items, heading, body, viewAllLabel, viewAllHref }: InfiniteGalleryStripProps) {
  return (
    <div className="mt-20 border-t border-line pt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl text-ink">{heading}</h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
        <Link href={viewAllHref} className="text-xs font-semibold uppercase tracking-[0.15em] text-brand hover:text-brand-deep transition-colors">
          {viewAllLabel} →
        </Link>
      </div>

      <div className="gallery-marquee mt-8 -mx-6 sm:mx-0">
        <div className="gallery-marquee-track">
          {[items, items].map((group, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0" aria-hidden={groupIndex === 1}>
              {group.map((item, i) => (
                <Link
                  key={`${groupIndex}-${item.slug}-${i}`}
                  href={viewAllHref}
                  tabIndex={groupIndex === 1 ? -1 : undefined}
                  className="group relative mx-2 block h-40 w-32 shrink-0 overflow-hidden border border-line bg-paper-raised sm:h-48 sm:w-40"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 160px, 128px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
