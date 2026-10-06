import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPostsEn, getBlogPostEn } from "@/content/blog.en";
import { products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { SITE, waLink } from "@/content/site";
import { formatBlogDate } from "@/lib/format";
import { topicsFor } from "@/lib/blog-topics";
import { hreflangFor, PRODUCT_SLUG_EN, BLOG_SLUG_ES } from "@/lib/i18n";
import { BlogProductCard } from "@/components/BlogProductCard";
import { blogPostingSchema, blogPostMetadata, breadcrumbSchema, notFoundMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPostsEn.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostEn(slug);
  if (!post) return notFoundMetadata("en");
  const esSlug = BLOG_SLUG_ES[slug];
  return blogPostMetadata(post, { lang: "en", path: `/en/blog/${slug}`, languages: esSlug ? hreflangFor(`/blog/${esSlug}`) : undefined });
}

export default async function BlogPostPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostEn(slug);
  if (!post) notFound();

  const relatedProducts = products.filter((p) => post.relatedProductSlugs.includes(p.slug));
  const relatedPosts = (post.relatedBlogSlugs ?? [])
    .map((s) => getBlogPostEn(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const path = `/en/blog/${post.slug}`;
  const articleSchema = blogPostingSchema(post, { lang: "en", path });
  const breadcrumb = breadcrumbSchema(path, [{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: post.title }]);

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs text-ink-soft">
        <Link href="/en" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Home
        </Link>
        {" / "}
        <Link href="/en/blog" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Blog
        </Link>
        {" / "}
        <span className="text-ink">{post.title}</span>
      </nav>

      <div className="animate-fade-up flex items-center gap-3">
        <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-deep">
          {topicsFor(post, "en")[0]}
        </span>
        <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
          {formatBlogDate(post.publishedAt, "en")}
        </time>
        {post.modifiedAt && post.modifiedAt !== post.publishedAt && (
          <span className="text-xs text-ink-soft">
            · Updated <time dateTime={post.modifiedAt}>{formatBlogDate(post.modifiedAt, "en")}</time>
          </span>
        )}
        {SITE.founder && (
          <span className="text-xs text-ink-soft">
            · By <Link href="/en/about" className="underline underline-offset-2 hover:text-brand">{SITE.founder.name}</Link>
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
            {i === 0 && (relatedProducts.length > 0 ? (
              <Link href={`/en/products/${PRODUCT_SLUG_EN[relatedProducts[0].slug]}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                See {productsEn[relatedProducts[0].slug].name} →
              </Link>
            ) : post.quoteMessage ? (
              <a href={waLink(post.quoteMessage)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Get a Quote on WhatsApp →
              </a>
            ) : null)}
          </div>
        ))}
      </div>

      {relatedPosts.length > 0 ? (
        <div className="mt-14">
          <p className="text-xs font-semibold text-brand-deep">Keep reading</p>
          <ul className="mt-3 space-y-2">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/en/blog/${p.slug}`}
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
          <p className="text-xs font-semibold text-brand-deep">Order it now</p>
          <div className="mt-3 space-y-3">
            {relatedProducts.map((p) => (
              <BlogProductCard
                key={p.slug}
                product={p}
                name={productsEn[p.slug].name}
                href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`}
                lang="en"
              />
            ))}
          </div>
        </div>
      ) : post.quoteMessage ? (
        <div className="card-soft mt-14 p-6">
          <p className="text-xs font-semibold text-brand-deep">Interested?</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            This one is quoted per project: tell us about your event or brand and we&apos;ll confirm price and turnaround.
          </p>
          <a
            href={waLink(post.quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-soft btn-soft-solid mt-4"
          >
            Get a Quote on WhatsApp
          </a>
        </div>
      ) : null}

      {post.sources && post.sources.length > 0 ? (
        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs font-semibold text-ink-soft">Sources</p>
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
