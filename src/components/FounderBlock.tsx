import Image from "next/image";
import { SITE } from "@/content/site";
import type { Lang } from "@/lib/i18n";

// The person behind Yume, on the about pages. Renders nothing until
// SITE.founder holds a real person (name, role, bio, optional real photo):
// no placeholder name, no stock portrait.
export function FounderBlock({ lang }: { lang: Lang }) {
  const f = SITE.founder;
  if (!f) return null;
  return (
    <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-line bg-paper-raised p-6 sm:flex-row sm:items-start">
      {f.photo && (
        <Image src={f.photo} alt={f.name} width={112} height={112} className="h-28 w-28 shrink-0 rounded-full object-cover" />
      )}
      <div>
        <h2 className="font-display text-xl text-ink">{lang === "en" ? "Who makes your order" : "Quién hace tu pedido"}</h2>
        <p className="mt-1 text-sm font-semibold text-ink">
          {f.name} · <span className="font-normal text-ink-soft">{f.role[lang]}</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.bio[lang]}</p>
      </div>
    </div>
  );
}
