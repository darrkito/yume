import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsEn } from "@/content/blog.en";
import { formatBlogDate } from "@/lib/format";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Custom Stationery Blog",
  description: "Guides on custom stationery, medical prescription pads, and stickers for businesses in Guadalajara and Jalisco.",
  alternates: { canonical: "/en/blog", languages: hreflangFor("/blog") },
};

export default function BlogIndexPageEn() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl font-black uppercase text-ink text-balance sm:text-5xl">Guides & notes</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Custom creative stationery, medical prescription pads, and stickers for businesses — focused on Guadalajara and Jalisco.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden border-2 border-line-strong bg-line-strong sm:grid-cols-2">
        {blogPostsEn.map((post) => (
          <Link key={post.slug} href={`/en/blog/${post.slug}`} className="group flex flex-col bg-paper-raised p-6">
            <div className="flex items-center gap-3">
              <span className="mono-label border border-line-strong px-3 py-1 text-[11px] font-semibold text-ink">{post.category}</span>
              <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-ink transition-colors group-hover:text-brand text-balance">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            <span className="mono-label mt-6 text-xs text-brand">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
