"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  
  // 1. Initialize the state directly based on whether bookingId exists
  const [error, setError] = useState<string | null>(
    bookingId ? null : "Missing booking reference. Please book a slot first."
  );

  useEffect(() => {
    // 2. If there's no bookingId, skip the fetch entirely
    if (!bookingId) return;

    async function initializePayment() {
      try {
        const res = await fetch("/api/paystack/initialize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId }),
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Something went wrong starting payment.");
          return;
        }

        window.location.href = data.authorizationUrl;
      } catch (err) {
        console.error(err);
        setError("Could not reach the payment server. Try again.");
      }
    }

    initializePayment();
  }, [bookingId]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="text-center">
        {error ? (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">
              Couldn't start checkout
            </h1>
            <p className="font-mono text-sm text-ink-soft">{error}</p>
          </>
        ) : (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">
              Taking you to payment…
            </h1>
            <p className="font-mono text-sm text-ink-soft">
              Hang tight, this only takes a second.
            </p>
          </>
        )}
      </div>
    </main>
  );
}