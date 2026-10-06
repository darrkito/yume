// Run: npx tsx scripts/check-ai-source.ts
import assert from "node:assert";
import { classifyAiSource, isAiSource } from "../src/lib/ai-source";

const own = "studioyume.mx";
assert.equal(classifyAiSource("?utm_source=chatgpt.com", "", own), "chatgpt"); // what ChatGPT appends
assert.equal(classifyAiSource("", "https://chatgpt.com/", own), "chatgpt");
assert.equal(classifyAiSource("", "https://www.perplexity.ai/search?q=x", own), "perplexity");
assert.equal(classifyAiSource("", "https://copilot.microsoft.com/", own), "copilot");
assert.equal(classifyAiSource("", "https://gemini.google.com/app", own), "gemini");
assert.equal(classifyAiSource("", "https://claude.ai/chat/1", own), "claude");
assert.equal(classifyAiSource("?utm_source=chatgpt.com", "https://l.instagram.com/", own), "chatgpt"); // utm beats referrer
assert.equal(classifyAiSource("", "https://www.google.com/", own), null);
assert.equal(classifyAiSource("", "https://studioyume.mx/productos", own), null); // internal navigation is not a source
assert.equal(classifyAiSource("?utm_source=newsletter", "", own), null);
assert.equal(classifyAiSource("", "not a url", own), null);
assert.equal(classifyAiSource("", "", own), null);
assert.ok(isAiSource("chatgpt") && !isAiSource("<script>") && !isAiSource(undefined));
console.log("check-ai-source: ok");
