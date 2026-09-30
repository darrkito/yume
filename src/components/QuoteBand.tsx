import { MessageCircle } from "lucide-react";
import { waLink } from "@/content/site";
import { UI, type Lang } from "@/lib/i18n";

// A "not sure? ask us" strip: personalized products sell through
// conversation as much as through the cart, so WhatsApp gets its own
// solid CTA next to the shopping paths.
export function QuoteBand({ lang = "es", className = "" }: { lang?: Lang; className?: string }) {
  const t = UI[lang];
  const msg = lang === "en" ? "Hi, I'm interested in getting a quote for a Yume product." : "Hola, me interesa cotizar un producto de Yume.";
  return (
    <div className={`rounded-2xl bg-brand-tint px-6 py-6 text-center ${className}`}>
      <h3 className="font-display text-xl text-ink text-balance">{t.quoteBandTitle}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.quoteBandBody}</p>
      <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-4 w-full sm:w-auto">
        <MessageCircle size={18} aria-hidden="true" /> {t.quoteWhatsapp}
      </a>
    </div>
  );
}
