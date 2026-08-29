import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { formatBlogDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías sobre papelería personalizada, recetarios médicos y stickers para negocios en Guadalajara y Jalisco.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Blog</p>
      <h1 className="mt-3 font-display text-4xl text-ink text-balance sm:text-5xl">Guías y notas</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Papelería personalizada, recetarios médicos y stickers para negocios — con foco en Guadalajara y Jalisco.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-deep">
                {post.category}
              </span>
              <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
            <h2 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-brand text-balance">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-brand">Leer más →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
