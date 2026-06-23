"use client";

import { motion } from "motion/react";

const MILESTONES = [
  { year: "2022", label: "Started as an internal tool, built to track churn risk across a portfolio of SaaS clients." },
  { year: "2023", label: "Rebuilt as a standalone product after three different teams asked to use it directly." },
  { year: "2024", label: "Launched the Stripe and Segment integrations, moving from manual CSV imports to live data." },
  { year: "2025", label: "Crossed 40 SaaS teams using Loopline to track retention and expansion in one place." },
];

const fadeUp = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export default function Timeline() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            How we got here
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Built out of a real problem, not a hackathon idea.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mx-auto max-w-[700px] divide-y divide-line border-y border-line"
        >
          {MILESTONES.map((m) => (
            <motion.div key={m.year} variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }} className="flex gap-8 py-6">
              <div className="w-16 flex-shrink-0 font-serif text-xl font-medium text-indigo">{m.year}</div>
              <p className="text-sm leading-relaxed text-ink-soft">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}