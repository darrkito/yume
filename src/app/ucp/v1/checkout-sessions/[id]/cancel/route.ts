import { checkoutSession, langOf, linesFromId, ucpRespond } from "@/lib/ucp";

// UCP Cancel Checkout. Stateless sessions hold no reservation, so this only reports it.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  return ucpRespond(async () => checkoutSession(linesFromId((await params).id), langOf(req), { canceled: true }));
}
