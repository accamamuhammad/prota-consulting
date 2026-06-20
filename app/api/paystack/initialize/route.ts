import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

// The price for an intro consultation, in Naira. Paystack expects amounts
// in kobo (smallest unit), so we multiply by 100 when calling their API.
// TODO: once you have multiple service tiers, look this up based on a
// service/tier id passed in from the booking flow instead of hardcoding it.
const INTRO_CONSULTATION_PRICE_NGN = 25000;

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

  const amountInKobo = INTRO_CONSULTATION_PRICE_NGN * 100;

  const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: booking.email,
      amount: amountInKobo,
      currency: "NGN",
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
      amount: amountInKobo,
      currency: "NGN",
    })
    .eq("id", bookingId);

  return NextResponse.json({
    authorizationUrl: paystackData.data.authorization_url,
  });
}