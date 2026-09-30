import { MessageCircle, Sparkles } from "lucide-react";
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
      <div className={`flex ${sm ? "h-32" : "h-48"} items-center justify-center rounded-xl bg-brand-tint`}>
        <Sparkles size={sm ? 40 : 56} className="text-brand" aria-hidden="true" />
      </div>
      <p className={`font-display text-ink text-balance ${sm ? "mt-4 text-base" : "mt-6 text-xl"}`}>{t.quoteCardName}</p>
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
