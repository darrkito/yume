import Link from "next/link";
import { esPathToEnPath, type Lang } from "@/lib/i18n";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const cls = "text-brand underline underline-offset-2 hover:text-brand-deep";

/** Renders a blog paragraph, turning inline `[label](href)` into links. In EN, ES-style internal paths are mapped to their /en sibling. */
export function BlogParagraph({ text, lang }: { text: string; lang: Lang }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    out.push(text.slice(last, m.index));
    const [, label, raw] = m;
    if (/^https?:/.test(raw)) {
      out.push(<a key={m.index} href={raw} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>);
    } else {
      const href = lang === "en" && !raw.startsWith("/en") ? esPathToEnPath(raw) : raw;
      out.push(<Link key={m.index} href={href} className={cls}>{label}</Link>);
    }
    last = m.index! + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out}</>;
}
