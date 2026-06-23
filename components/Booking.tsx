"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Booking() {
  return (
    <section id="booking" className="border-t border-line bg-ink py-24 text-bg">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto max-w-[1180px] px-8"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-[#8B85F5]">
              <span className="inline-block h-[2px] w-[18px] bg-[#8B85F5]" />
              Get started
            </div>
            <h2 className="mb-5 max-w-[520px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
              See your own data in Loopline, live.
            </h2>
            <p className="mb-8 max-w-[460px] text-[15px] leading-relaxed text-[#B8B7BD]">
              Book a 30-minute demo and we'll walk through your billing and
              usage data on the call — no generic slide deck, just your
              actual accounts.
            </p>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/booking"
              className="inline-block rounded-sharp bg-[#8B85F5] px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-ink"
            >
              Book a demo →
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-sharp border border-[#2B2B33] bg-[#0E0E10] p-6 font-mono text-xs leading-relaxed text-[#B8B7BD]"
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#2B2B33] pb-3 uppercase text-[10.5px] text-[#7A7980]">
              <span>availability.cal</span>
              <span className="text-[#8B85F5]">● synced with Calendly</span>
            </div>
            <ul className="space-y-2.5">
              {[
                { day: "Tue, Jun 23", time: "10:00 – 10:30" },
                { day: "Wed, Jun 24", time: "14:00 – 14:30" },
                { day: "Thu, Jun 25", time: "09:30 – 10:00" },
              ].map((slot, i) => (
                <motion.li
                  key={slot.day}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  whileHover={{ x: 2 }}
                  className={`flex justify-between pb-2.5 ${
                    i < 2 ? "border-b border-dashed border-[#2B2B33]" : ""
                  }`}
                >
                  <span>{slot.day}</span>
                  <span className="text-bg">{slot.time}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 text-[10.5px] text-[#7A7980]">
              Live availability loads on the booking page.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}