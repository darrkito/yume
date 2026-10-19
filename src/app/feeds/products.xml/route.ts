import { feedResponse } from "@/lib/feed";

export const dynamic = "force-static";

export const GET = () => feedResponse("en");
