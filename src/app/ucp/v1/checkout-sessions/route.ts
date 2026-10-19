import { checkoutSession, langOf, linesFromBody, ucpRespond } from "@/lib/ucp";

// UCP Create Checkout (POST /checkout-sessions). Deterministic: the same body
// always yields the same session id, so retries are idempotent by construction.
export async function POST(req: Request) {
  return ucpRespond(async () => {
    const body = await req.json();
    return checkoutSession(linesFromBody(body), langOf(req), { buyer: body.buyer });
  }, 201);
}
