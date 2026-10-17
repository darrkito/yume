import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/content/site";
import { UI, type Lang } from "@/lib/i18n";

// Quote-only listing entry (temporary tattoos): not in the catalog, so no
// price and no cart, just a prefilled WhatsApp quote. Same shell as
// ProductCard so it sits naturally in the grids.
export function QuoteCard({ lang = "es", index = 0, size = "md" }: { lang?: Lang; index?: number; size?: "md" | "sm" }) {
  const t = UI[lang];
  const sm = size === "sm";
  return (
    <div className={`card-soft flex flex-col ${sm ? "p-5" : "p-6"} ${index % 2 === 0 ? "tilt-a" : "tilt-b"}`}>
      <div className={`relative ${sm ? "h-32" : "h-48"} overflow-hidden rounded-xl bg-brand-tint`}>
        <Image
          src="/gallery/gallery-tatuajes-sanrio-chococat-muneca.webp"
          alt={t.quoteCardImgAlt}
          fill
          sizes={sm ? "(min-width: 640px) 260px, 70vw" : "(min-width: 640px) 360px, 90vw"}
          className="object-cover object-[50%_62%]"
        />
      </div>
      <p className={`font-display text-ink text-balance ${sm ? "mt-4 text-base" : "mt-6 text-xl"}`}>
        <Link href={lang === "en" ? "/en/products/custom-temporary-tattoos" : "/productos/tatuajes-temporales-personalizados"} className="transition-colors hover:text-brand">
          {t.quoteCardName}
        </Link>
      </p>
      <p className="mb-auto mt-1 text-sm leading-relaxed text-ink-soft">{t.quoteCardBody}</p>
      <a
        href={waLink(t.quoteCardMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-soft btn-soft-solid mt-4 w-full whitespace-nowrap self-end px-4"
      >
        <MessageCircle size={16} aria-hidden="true" /> {t.quoteWhatsapp}
      </a>
    </div>
  );
}
