// Run after each production deploy: npm run indexnow
// Optional: npm run indexnow -- https://studioyume.mx/productos/foo ...  (only those URLs)
//
// Submits the live sitemap's URLs to IndexNow (Bing, Yandex, Seznam, Naver;
// Bing's index also feeds Copilot and ChatGPT search). The key file is
// public/<KEY>.txt, already served at the site root.
const SITE = "https://studioyume.mx";
const KEY = "2c2558cd3ec027ce1923836be4d9fc02";

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urlList = process.argv.length > 2 ? process.argv.slice(2) : await sitemapUrls();
if (urlList.length === 0) throw new Error("No URLs to submit");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});

// 200 = accepted, 202 = accepted, key validation pending.
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
