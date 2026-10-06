import { NextRequest, NextResponse } from "next/server";
import { claimReminder, getAbandonedOrders, markRemindedWithoutSending, releaseReminder } from "@/lib/orders";
import { sendAbandonedReminder } from "@/lib/email";

// Vercel Cron (see vercel.json, once a day: Hobby allows no more) calls this
// with `Authorization: Bearer $CRON_SECRET`. Anything else gets a 401, and if
// CRON_SECRET is not configured the endpoint refuses to run at all.
// `?dry=1` reports who WOULD get the reminder without sending or marking anything.
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) console.error("[ALERT] CRON_SECRET no está configurado: el recordatorio de carrito abandonado no corre.");
  if (!secret) return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 503 });
  if (req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { send, skipped } = await getAbandonedOrders();

    if (req.nextUrl.searchParams.get("dry") === "1") {
      return NextResponse.json({
        dryRun: true,
        wouldSend: send.map((o) => ({ id: o.id.slice(0, 8), createdAt: o.created_at, total: o.total })),
        skipped: skipped.length,
      });
    }

    let sent = 0;
    let failed = 0;
    for (const order of send) {
      if (!(await claimReminder(order.id))) continue; // another run got it first
      if (await sendAbandonedReminder(order)) {
        sent++;
      } else {
        failed++;
        await releaseReminder(order.id);
      }
    }
    await markRemindedWithoutSending(skipped.map((o) => o.id));

    return NextResponse.json({ sent, failed, skipped: skipped.length });
  } catch (err) {
    console.error("[cron] abandoned-checkout falló:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
