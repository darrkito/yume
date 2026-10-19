import { checkoutSession, langOf, linesFromId, ucpRespond } from "@/lib/ucp";

// UCP Complete Checkout. No payment handler can charge a Mercado Pago order on
// the buyer's behalf, so completion always escalates to continue_url.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  return ucpRespond(async () => checkoutSession(linesFromId((await params).id), langOf(req)));
}
