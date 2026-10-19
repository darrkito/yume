import { checkoutSession, langOf, linesFromBody, linesFromId, ucpRespond } from "@/lib/ucp";

type Ctx = { params: Promise<{ id: string }> };

// UCP Get Checkout.
export async function GET(req: Request, { params }: Ctx) {
  return ucpRespond(async () => checkoutSession(linesFromId((await params).id), langOf(req)));
}

// UCP Update Checkout: PUT replaces the whole session; the response carries the new id.
export async function PUT(req: Request, { params }: Ctx) {
  return ucpRespond(async () => {
    linesFromId((await params).id);
    const body = await req.json();
    return checkoutSession(linesFromBody(body), langOf(req), { buyer: body.buyer });
  });
}
