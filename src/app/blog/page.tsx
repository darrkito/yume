import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { formatBlogDate } from "@/lib/format";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog de papelería personalizada",
  description: "Guías sobre papelería personalizada, recetarios médicos y etiquetas para negocios en Guadalajara y Jalisco.",
  alternates: { canonical: "/blog", languages: hreflangFor("/blog") },
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Guías y notas</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Papelería Creativa Personalizada, recetarios médicos y etiquetas para negocios — con foco en Guadalajara y Jalisco.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
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
            <span className="mt-6 text-xs font-semibold text-brand">Leer más →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
