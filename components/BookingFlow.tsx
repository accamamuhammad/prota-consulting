"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Your Calendly event type link from Step 1.
const CALENDLY_EVENT_URL = "https://calendly.com/accamamuhammad/30min";

type Step = "details" | "schedule" | "confirmed";

type LeadInfo = {
  name: string;
  email: string;
};

export default function BookingFlow() {
  const [step, setStep] = useState<Step>("details");
  const [lead, setLead] = useState<LeadInfo>({ name: "", email: "" });
  const [bookingId, setBookingId] = useState<string | null>(null);

  // --- Step A: capture name/email before showing the calendar ---
  async function handleDetailsSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    setLead({ name, email });

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    setBookingId(data.id);

    setStep("schedule");
  }

  // --- Step B: load Calendly's widget script once we reach the schedule step ---
  useEffect(() => {
    if (step !== "schedule") return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [step]);

  // --- Step C: listen for Calendly's postMessage event when a slot is booked ---
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event !== "calendly.event_scheduled") return;

      const calendlyEventUri = e.data?.payload?.event?.uri;
      const calendlyInviteeUri = e.data?.payload?.invitee?.uri;

      fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "booked_pending_payment",
          calendlyEventUri,
          calendlyInviteeUri,
        }),
      }).catch(console.error);

      setStep("confirmed");
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [bookingId]);

  // Build the prefilled Calendly URL once we have the lead's details
  const calendlyUrl = `${CALENDLY_EVENT_URL}?name=${encodeURIComponent(
    lead.name
  )}&email=${encodeURIComponent(lead.email)}&hide_event_type_details=1`;

  return (
    <div>
      <div className="mb-10 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
        <span className="inline-block h-0.5 w-4.5 bg-indigo" />
        Book a consultation
      </div>

      <AnimatePresence mode="wait">
        {step === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-3 font-serif text-3xl font-medium">
              First, tell us who&apos;s joining.
            </h1>
            <p className="mb-8 text-sm text-ink-soft">
              We&apos;ll use this to pre-fill your calendar invite and follow up
              after the call.
            </p>

            <form onSubmit={handleDetailsSubmit} className="grid gap-5">
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase text-ink-soft">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-sharp border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase text-ink-soft">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-sharp border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                />
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-2 w-fit rounded-sharp bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-bg"
              >
                Continue to calendar →
              </motion.button>
            </form>
          </motion.div>
        )}

        {step === "schedule" && (
          <motion.div
            key="schedule"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-3 font-serif text-3xl font-medium">
              Pick a time, {lead.name.split(" ")[0]}.
            </h1>
            <p className="mb-6 text-sm text-ink-soft">
              Choose a slot below — you&apos;ll get a confirmation email from
              Calendly once it&apos;s booked.
            </p>

            <div
              className="calendly-inline-widget rounded-sharp border border-line"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        )}

        {step === "confirmed" && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center rounded-sharp border border-line bg-white px-8 py-16 text-center"
          >
            <h1 className="mb-3 font-serif text-3xl font-medium">
              You&apos;re booked.
            </h1>
            <p className="mb-8 max-w-105 text-sm leading-relaxed text-ink-soft">
              Check your inbox for the calendar invite. Next, let&apos;s confirm
              payment to lock in your slot.
            </p>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/checkout"
              className="rounded-sharp bg-indigo px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-white"
            >
              Continue to payment →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}