"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type SendState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [sendState, setSendState] = useState<SendState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendState("sending");
    setErrorMsg(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setSendState("error");
        return;
      }

      setSendState("sent");
    } catch (err) {
      console.error(err);
      setErrorMsg("Could not reach the server. Check your connection and try again.");
      setSendState("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-bg py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto max-w-[1180px] px-8"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
              <span className="inline-block h-[2px] w-[18px] bg-indigo" />
              Contact
            </div>
            <h2 className="mb-5 font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
              Not ready to book? Just ask.
            </h2>
            <p className="max-w-[380px] text-[15px] leading-relaxed text-ink-soft">
              Send a few lines about what you're working on. We reply within
              one business day.
            </p>

            <div className="mt-10 space-y-3 font-mono text-sm text-ink-soft">
              <div>hello@loopline.app</div>
              <div>Remote team · Global customers</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-sharp border border-line bg-white p-8"
          >
            <AnimatePresence mode="wait">
              {sendState === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex h-full min-h-[260px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-3 font-serif text-2xl font-medium">
                    Message sent.
                  </div>
                  <p className="font-mono text-sm text-ink-soft">
                    We'll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                  <div className="sm:col-span-2">
                    <Field label="Company" name="company" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block font-mono text-[11px] uppercase text-ink-soft">
                      What's going on?
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-sharp border border-line bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                      placeholder="Tell us a little about what you need help with."
                    />
                  </div>

                  {sendState === "error" && errorMsg && (
                    <div className="sm:col-span-2 rounded-sharp border border-red-200 bg-red-50 px-4 py-3 font-mono text-xs text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={sendState === "sending"}
                      className="rounded-sharp bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-bg disabled:opacity-60"
                    >
                      {sendState === "sending" ? "Sending…" : "Send message →"}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase text-ink-soft">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sharp border border-line bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
      />
    </div>
  );
}