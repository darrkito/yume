"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { formatBlogDate } from "@/lib/format";
import type { Lang } from "@/lib/i18n";
import { TOPIC_ORDER, topicsFor } from "@/lib/blog-topics";

export function BlogGrid({
  posts,
  lang = "es",
  basePath,
  allLabel,
  readMoreLabel,
}: {
  posts: BlogPost[];
  lang?: Lang;
  basePath: string;
  allLabel: string;
  readMoreLabel: string;
}) {
  const [active, setActive] = useState(allLabel);
  const newestFirst = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const filtered = active === allLabel ? newestFirst : newestFirst.filter((p) => topicsFor(p, lang).includes(active));

  return (
    <div>
      <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        {[allLabel, ...TOPIC_ORDER[lang]].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              active === cat ? "border-brand bg-brand text-white" : "border-line text-ink-soft hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {filtered.map((post, i) => (
          <Link key={post.slug} href={`${basePath}/${post.slug}`} className={`card-soft group flex flex-col p-6 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-deep">{topicsFor(post, lang)[0]}</span>
              <time dateTime={post.publishedAt} className="text-xs text-ink-soft">
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
            <h2 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-brand text-balance">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.description}</p>
            <span className="mt-6 text-xs font-semibold text-brand">{readMoreLabel} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
