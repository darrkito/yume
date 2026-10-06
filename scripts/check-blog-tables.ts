// Run: npx tsx scripts/check-blog-tables.ts
// Blog tables must come from the catalog (never typed by hand) and every
// post with a table must carry a modifiedAt.
import assert from "node:assert";
import { blogPosts } from "../src/content/blog";
import { blogPostsEn } from "../src/content/blog.en";
import { getProduct, tieredPrice } from "../src/content/products";

for (const [lang, posts] of [["es", blogPosts], ["en", blogPostsEn]] as const) {
  const where = posts.find((p) => p.sections.some((s) => /stickers/i.test(s.heading) && s.table && s.table.headers.length === 3 && /\d/.test(s.table.rows[0][1])));
  assert.ok(where, `${lang}: price table post present`);
  assert.ok(where!.modifiedAt, `${lang}: modifiedAt set`);
  const table = where!.sections.find((s) => s.table)!.table!;
  const logo = getProduct("stickers-logo-personalizado")!.tiers!;
  const vinyl = getProduct("stickers-vinil-impermeable")!.tiers!;
  for (const row of table.rows) {
    const q = Number(row[0].split(" ")[0]);
    assert.ok(row[1].startsWith(`$${tieredPrice(logo, q).toLocaleString("en-US", { minimumFractionDigits: 2 })}`), `${lang}: logo ${q}`);
    assert.ok(row[2].startsWith(`$${tieredPrice(vinyl, q).toLocaleString("en-US", { minimumFractionDigits: 2 })}`), `${lang}: vinyl ${q}`);
  }
  for (const p of posts) if (p.sections.some((s) => s.table)) assert.ok(p.modifiedAt, `${lang}/${p.slug}: table post needs modifiedAt`);
}
console.log("check-blog-tables: ok");
