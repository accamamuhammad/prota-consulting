"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";

type Status = "checking" | "success" | "pending" | "failed";

export default function CheckoutCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    if (!reference) {
      setStatus("failed");
      return;
    }

    fetch(`/api/paystack/verify?reference=${reference}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status === "confirmed" ? "success" : "pending");
      })
      .catch(() => setStatus("pending"));
  }, [reference]);

  // Once confirmed, give them a moment to read the message, then send them home.
  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      router.push("/?booked=1");
    }, 2500);
    return () => clearTimeout(timer);
  }, [status, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[420px] rounded-sharp border border-line bg-white px-8 py-14 text-center"
      >
        {status === "checking" && (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">Confirming payment…</h1>
            <p className="font-mono text-sm text-ink-soft">One moment.</p>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">You're all set.</h1>
            <p className="mb-1 font-mono text-sm leading-relaxed text-ink-soft">
              Payment confirmed and your slot is locked in. Check your email
              for the calendar invite and receipt.
            </p>
            <p className="font-mono text-xs text-ink-soft/70">
              Taking you back to the homepage…
            </p>
          </>
        )}
        {status === "pending" && (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">Almost there.</h1>
            <p className="font-mono text-sm leading-relaxed text-ink-soft">
              We're still confirming your payment — this can take a minute.
              Refresh this page shortly, or check your email for confirmation.
            </p>
          </>
        )}
        {status === "failed" && (
          <>
            <h1 className="mb-3 font-serif text-2xl font-medium">Something went wrong.</h1>
            <p className="font-mono text-sm leading-relaxed text-ink-soft">
              We couldn't find that payment reference. If you were charged,
              contact us and we'll sort it out.
            </p>
          </>
        )}
      </motion.div>
    </main>
  );
}