import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  // --- Verify this request actually came from Paystack ---
  // Paystack signs the raw request body with your secret key using HMAC SHA512
  // and sends it in the x-paystack-signature header. If it doesn't match what
  // we compute ourselves, reject the request — it's not really from Paystack.
  const signature = req.headers.get("x-paystack-signature");
  const expectedSignature = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.warn("Invalid Paystack webhook signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  if (event.event === "charge.success") {
    const { reference, amount, metadata } = event.data;
    const bookingId = metadata?.booking_id;

    const supabase = getSupabaseServerClient();

    // Double-check the amount matches what we expect before marking it confirmed —
    // protects against a tampered or replayed request changing the price.
    const { data: booking } = await supabase
      .from("bookings")
      .select("amount")
      .eq("id", bookingId)
      .single();

    if (booking && booking.amount === amount) {
      await supabase
        .from("bookings")
        .update({ status: "confirmed", payment_reference: reference })
        .eq("id", bookingId);
    } else {
      console.error("Amount mismatch on webhook for booking", bookingId);
    }
  }

  // Paystack just needs a 200 to know we received it — respond quickly,
  // don't make it wait on slow downstream work.
  return NextResponse.json({ received: true });
}