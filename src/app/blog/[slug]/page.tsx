import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/content/blog";
import { products } from "@/content/products";
import { SITE, waLink } from "@/content/site";
import { formatBlogDate } from "@/lib/format";
import { hreflangFor } from "@/lib/i18n";
import { BlogProductCard } from "@/components/BlogProductCard";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}`, languages: hreflangFor(`/blog/${slug}`) },
    openGraph: { title: post.title, description: post.description, type: "article", url: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedProducts = products.filter((p) => post.relatedProductSlugs.includes(p.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs text-ink-soft">
        <Link href="/" className="hover:text-brand transition-colors">
          Inicio
        </Link>
        {" / "}
        <Link href="/blog" className="hover:text-brand transition-colors">
          Blog
        </Link>
        {" / "}
        <span className="text-ink">{post.title}</span>
      </nav>

      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-deep">
          {post.category}
        </span>
        <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
          {formatBlogDate(post.publishedAt)}
        </time>
      </div>
      <h1 className="mt-4 font-display text-3xl text-ink text-balance sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{post.intro}</p>

      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {relatedProducts.length > 0 ? (
        <div className="mt-14 rounded-2xl border-2 border-brand bg-brand-tint/40 p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-brand-deep">Pídelo ahora</p>
          <div className="mt-3 space-y-3">
            {relatedProducts.map((p) => (
              <BlogProductCard key={p.slug} product={p} name={p.name} href={`/productos/${p.slug}`} lang="es" />
            ))}
          </div>
        </div>
      ) : post.quoteMessage ? (
        <div className="mt-14 rounded-2xl border-2 border-brand bg-brand-tint/40 p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-brand-deep">¿Te interesa?</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Este producto se cotiza a la medida — cuéntanos tu evento o proyecto y te confirmamos precio y tiempo de entrega.
          </p>
          <a
            href={waLink(post.quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-deep"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      ) : null}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}
