import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías sobre papelería personalizada, recetarios médicos y stickers para negocios en Guadalajara y Jalisco.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Blog</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Guías y notas</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Papelería personalizada, recetarios médicos y stickers para negocios — con foco en Guadalajara y Jalisco.
      </p>

      <div className="mt-14 space-y-10 border-t border-line pt-10">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b border-line pb-10">
            <p className="text-xs uppercase tracking-[0.15em] text-brand">{post.category}</p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-brand hover:text-brand-deep"
            >
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
