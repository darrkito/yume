import { productVideos } from "@/content/product-videos";
import type { Lang } from "@/lib/i18n";

export function ProductVideos({ slug, lang }: { slug: string; lang: Lang }) {
  const videos = productVideos[slug];
  if (!videos) return null;
  return (
    <div className="mt-16">
      <h2 className="font-display text-2xl text-ink">{lang === "es" ? "Míralo en video" : "See it in video"}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {videos.map((v) => (
          <figure key={v.src}>
            <video controls muted playsInline preload="none" poster={v.poster} className="mx-auto max-h-[28rem] w-full rounded-lg bg-line object-contain">
              <source src={v.src} type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-sm text-ink-soft">{v.text[lang].description}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
