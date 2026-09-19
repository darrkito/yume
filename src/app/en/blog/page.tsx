import type { Metadata } from "next";
import { blogPostsEn } from "@/content/blog.en";
import { BlogGrid } from "@/components/BlogGrid";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Custom Stationery Blog: Guides and Tips",
  description: "Guides on custom stationery, medical prescription pads, and stickers for businesses in Guadalajara and Jalisco.",
  path: "/en/blog",
  lang: "en",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/en/blog#blog`,
  name: "Yume Blog",
  url: `${SITE.url}/en/blog`,
  publisher: { "@id": `${SITE.url}/#organization` },
  blogPost: blogPostsEn.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE.url}/en/blog/${p.slug}`,
    datePublished: p.publishedAt,
    dateModified: p.modifiedAt ?? p.publishedAt,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
  })),
};

export default function BlogIndexPageEn() {
  const breadcrumb = breadcrumbSchema("/en/blog", [{ name: "Home", url: "/en" }, { name: "Blog" }]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Guides & notes</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Custom creative stationery, medical prescription pads, and stickers for businesses, focused on Guadalajara and Jalisco.
      </p>

      <div className="mt-14">
        <BlogGrid posts={blogPostsEn} lang="en" basePath="/en/blog" allLabel="All" readMoreLabel="Read more" />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    </section>
  );
}
