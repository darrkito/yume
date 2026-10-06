// Where an AI-sent visitor came from. ChatGPT appends ?utm_source=chatgpt.com
// to the links it shows; other assistants usually send only a referrer. Pure
// and dependency-free so it can be tested and used on the server for the
// order whitelist.
export const AI_SOURCES = ["chatgpt", "perplexity", "copilot", "gemini", "claude", "other_ai"] as const;
export type AiSource = (typeof AI_SOURCES)[number];

export const isAiSource = (v: unknown): v is AiSource => typeof v === "string" && (AI_SOURCES as readonly string[]).includes(v);

const BY_NAME: [RegExp, AiSource][] = [
  [/chatgpt|openai/i, "chatgpt"],
  [/perplexity/i, "perplexity"],
  [/copilot/i, "copilot"],
  [/gemini|bard/i, "gemini"],
  [/claude|anthropic/i, "claude"],
];
const BY_HOST: Record<string, AiSource> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "copilot.microsoft.com": "copilot",
  "gemini.google.com": "gemini",
  "claude.ai": "claude",
};

/** utm_source wins over the referrer; the site's own host is never a source. */
export function classifyAiSource(search: string, referrer: string, ownHost: string): AiSource | null {
  const utm = new URLSearchParams(search).get("utm_source");
  if (utm) {
    const hit = BY_NAME.find(([re]) => re.test(utm));
    if (hit) return hit[1];
  }
  if (!referrer) return null;
  let host: string;
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
  if (host === ownHost.replace(/^www\./, "")) return null;
  return BY_HOST[host] ?? null;
}

const LABEL: Record<AiSource, string> = { chatgpt: "ChatGPT", perplexity: "Perplexity", copilot: "Copilot", gemini: "Gemini", claude: "Claude", other_ai: "" };

/** Short, human note appended to a prefilled WhatsApp message so the owner
 * can see which leads came from an assistant. */
export function whatsappMarker(src: AiSource, lang: "es" | "en"): string {
  const name = LABEL[src];
  if (lang === "en") return name ? `(Found you via ${name})` : "(Found you via an AI assistant)";
  return name ? `(Vi su sitio en ${name})` : "(Vi su sitio en un asistente de IA)";
}

export const AI_SOURCE_KEY = "yume_ai_src";

/** The AI source stored for this browser session, if any (client only). */
export function readAiSource(): AiSource | null {
  try {
    const v = sessionStorage.getItem(AI_SOURCE_KEY);
    return isAiSource(v) ? v : null;
  } catch {
    return null;
  }
}

export const aiSourceLabel = (src: AiSource) => LABEL[src] || "IA";
