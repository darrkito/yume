import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

// Alias of /.well-known/mcp/server-card.json at <endpoint>/server-card, the
// other location the MCP server-card draft (SEP-2127) names. Same file, no copy.
export async function GET() {
  const card = await readFile(join(process.cwd(), "public/.well-known/mcp/server-card.json"), "utf8");
  return new NextResponse(card, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" } });
}
