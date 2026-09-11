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
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Guides & notes</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Custom creative stationery, medical prescription pads, and stickers for businesses — focused on Guadalajara and Jalisco.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {blogPostsEn.map((post, i) => (
          <Link
            key={post.slug}
            href={`/en/blog/${post.slug}`}
            className={`card-soft group flex flex-col p-6 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-tint px-3 py-1 text-[11px] font-semibold text-brand-deep">{post.category}</span>
              <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
            <h2 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-brand text-balance">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            <span className="mt-6 text-xs font-semibold text-brand">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
