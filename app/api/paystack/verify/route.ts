import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

// GET /api/paystack/verify?reference=xxx
// Fallback check for the callback page — confirms via Paystack's Verify
// Transaction API and updates Supabase if the webhook hasn't landed yet.
export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ error: "reference is required" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  // If the webhook already confirmed it, no need to call Paystack again
  const { data: existing } = await supabase
    .from("bookings")
    .select("status")
    .eq("payment_reference", reference)
    .single();

  if (existing?.status === "confirmed") {
    return NextResponse.json({ status: "confirmed" });
  }

  const verifyRes = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } }
  );
  const verifyData = await verifyRes.json();

  if (verifyData.data?.status === "success") {
    const bookingId = verifyData.data.metadata?.booking_id;
    if (bookingId) {
      await supabase
        .from("bookings")
        .update({ status: "confirmed" })
        .eq("id", bookingId);
    }
    return NextResponse.json({ status: "confirmed" });
  }

  return NextResponse.json({ status: "pending" });
}