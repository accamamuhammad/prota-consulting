import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

// Starter plan price, in USD — matches the price shown on /pricing.
// Paystack expects amounts in the smallest currency unit (cents for USD),
// so we multiply by 100. Note: charging in USD requires your Paystack
// account to be enabled for USD settlement — if it isn't, switch currency
// to "NGN" and convert this to Naira at your current rate instead.
// TODO: once checkout supports multiple plans, accept a `plan` field in
// the request body and look up the right price instead of hardcoding Starter.
const STARTER_PLAN_PRICE_USD = 49;

export async function POST(req: NextRequest) {
  const { bookingId } = await req.json();

  if (!bookingId) {
    return NextResponse.json({ error: "bookingId is required" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  // Look up the booking so we know who's paying and can attach the email
  const { data: booking, error: fetchError } = await supabase
    .from("bookings")
    .select("id, name, email, status")
    .eq("id", bookingId)
    .single();

  if (fetchError || !booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  const amountInCents = STARTER_PLAN_PRICE_USD * 100;

  const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: booking.email,
      amount: amountInCents,
      currency: "USD",
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/callback`,
      metadata: {
        booking_id: booking.id,
        name: booking.name,
      },
    }),
  });

  const paystackData = await paystackRes.json();

  if (!paystackData.status) {
    console.error("Paystack initialize failed:", paystackData);
    return NextResponse.json(
      { error: paystackData.message || "Could not initialize payment" },
      { status: 500 }
    );
  }

  // Save the reference now so the webhook can match it back to this booking
  await supabase
    .from("bookings")
    .update({
      payment_reference: paystackData.data.reference,
      amount: amountInCents,
      currency: "USD",
    })
    .eq("id", bookingId);

  return NextResponse.json({
    authorizationUrl: paystackData.data.authorization_url,
  });
}