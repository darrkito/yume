import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/content/blog";
import { products } from "@/content/products";
import { SITE, waLink } from "@/content/site";
import { formatBlogDate } from "@/lib/format";
import { topicsFor } from "@/lib/blog-topics";
import { hreflangFor } from "@/lib/i18n";
import { BlogProductCard } from "@/components/BlogProductCard";
import { BlogTable } from "@/components/BlogTable";
import { blogPostingSchema, blogPostMetadata, breadcrumbSchema, notFoundMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFoundMetadata("es");
  return blogPostMetadata(post, { lang: "es", path: `/blog/${slug}`, languages: hreflangFor(`/blog/${slug}`) });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedProducts = products.filter((p) => post.relatedProductSlugs.includes(p.slug));
  const relatedPosts = (post.relatedBlogSlugs ?? [])
    .map((slug) => getBlogPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const path = `/blog/${post.slug}`;
  const articleSchema = blogPostingSchema(post, { lang: "es", path });
  const breadcrumb = breadcrumbSchema(path, [{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title }]);

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs text-ink-soft">
        <Link href="/" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Inicio
        </Link>
        {" / "}
        <Link href="/blog" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Blog
        </Link>
        {" / "}
        <span className="text-ink">{post.title}</span>
      </nav>

      <div className="animate-fade-up flex items-center gap-3">
        <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-deep">
          {topicsFor(post, "es")[0]}
        </span>
        <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
          {formatBlogDate(post.publishedAt)}
        </time>
        {post.modifiedAt && post.modifiedAt !== post.publishedAt && (
          <span className="text-xs text-ink-soft">
            · Actualizado <time dateTime={post.modifiedAt}>{formatBlogDate(post.modifiedAt)}</time>
          </span>
        )}
        {SITE.founder && (
          <span className="text-xs text-ink-soft">
            · Por <Link href="/nosotros" className="underline underline-offset-2 hover:text-brand">{SITE.founder.name}</Link>
          </span>
        )}
      </div>
      <h1 className="animate-fade-up animate-fade-up-1 mt-4 font-display text-3xl text-ink text-balance sm:text-4xl">{post.title}</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm leading-relaxed text-ink-soft">{post.intro}</p>

      <div className="mt-10 space-y-10">
        {post.sections.map((section, i) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.table && <BlogTable table={section.table} caption={section.heading} />}
            {i === 0 && (relatedProducts.length > 0 ? (
              <Link href={`/productos/${relatedProducts[0].slug}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Ver {relatedProducts[0].name} →
              </Link>
            ) : post.quoteMessage ? (
              <a href={waLink(post.quoteMessage)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Cotizar por WhatsApp →
              </a>
            ) : null)}
          </div>
        ))}
      </div>

      {relatedPosts.length > 0 ? (
        <div className="mt-14">
          <p className="text-xs font-semibold text-brand-deep">Sigue leyendo</p>
          <ul className="mt-3 space-y-2">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm text-ink underline underline-offset-2 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {relatedProducts.length > 0 ? (
        <div className="card-soft mt-14 p-6">
          <p className="text-xs font-semibold text-brand-deep">Pídelo ahora</p>
          <div className="mt-3 space-y-3">
            {relatedProducts.map((p) => (
              <BlogProductCard key={p.slug} product={p} name={p.name} href={`/productos/${p.slug}`} lang="es" />
            ))}
          </div>
        </div>
      ) : post.quoteMessage ? (
        <div className="card-soft mt-14 p-6">
          <p className="text-xs font-semibold text-brand-deep">¿Te interesa?</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Este producto se cotiza a la medida: cuéntanos tu evento o proyecto y te confirmamos precio y tiempo de entrega.
          </p>
          <a href={waLink(post.quoteMessage)} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-4">
            Cotizar por WhatsApp
          </a>
        </div>
      ) : null}

      {post.sources && post.sources.length > 0 ? (
        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs font-semibold text-ink-soft">Fuentes</p>
          <ul className="mt-2 space-y-1">
            {post.sources.map((s) => (
              <li key={s.url} className="text-xs text-ink-soft">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-brand-deep">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </article>
  );
}
