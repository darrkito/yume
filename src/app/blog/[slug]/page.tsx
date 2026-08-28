import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/content/blog";
import { products } from "@/content/products";
import { SITE } from "@/content/site";

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
    alternates: { canonical: `/blog/${slug}` },
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

      <p className="text-xs uppercase tracking-[0.25em] text-brand">{post.category}</p>
      <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{post.title}</h1>
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

      {relatedProducts.length > 0 && (
        <div className="mt-14 rounded-2xl border border-line bg-paper-raised p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-brand">Productos relacionados</p>
          <ul className="mt-3 space-y-2">
            {relatedProducts.map((p) => (
              <li key={p.slug}>
                <Link href={`/productos/${p.slug}`} className="text-sm font-medium text-ink hover:text-brand transition-colors">
                  {p.name} — ${p.price.toFixed(2)} MXN
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}
