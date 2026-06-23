
"use client";

import { motion } from "motion/react";

// Placeholder names — swap for real customer logos once you have them.
// Using text wordmarks here keeps this from claiming a relationship that doesn't exist yet.
const LOGOS = ["Northbeam", "Fluxwave", "Cardinal", "Tendril", "Hatchway", "Driftline"];

export default function LogosBar() {
  return (
    <section className="border-b border-line bg-bg py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1180px] px-8"
      >
        <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-wide text-ink-soft">
          Trusted by retention teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {LOGOS.map((name) => (
            <span key={name} className="font-serif text-lg text-ink-soft/60">
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}