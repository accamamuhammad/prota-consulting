"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-bg py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="mb-6 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            Why Loopline
          </div>
          <h2 className="font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Built because <em className="italic text-indigo">churn dashboards</em> shouldn't be a spreadsheet.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-8">
          <p className="max-w-[520px] text-[17px] leading-relaxed text-ink-soft">
            Most retention data lives scattered across Stripe, your product
            analytics, and a support inbox nobody checks until renewal week.
            Loopline pulls it into one place — so a drop in usage shows up as
            a flag in Slack, not a surprise on a board slide.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
            className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-3"
          >
            <Stat value="40+" label="SaaS teams onboard" />
            <Stat value="$2.1M" label="At-risk MRR flagged" />
            <Stat value="96%" label="Avg. weekly active usage" />
          </motion.div>

          <blockquote className="border-l-2 border-indigo pl-5 font-mono text-sm leading-relaxed text-ink-soft">
            "We built the first version after watching three different teams
            lose the same kind of account for the same reason — too late to
            act on data they already had."
            <footer className="mt-2 text-ink">— Loopline founding team</footer>
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
      <div className="font-serif text-3xl font-medium text-ink">{value}</div>
      <div className="mt-1 font-mono text-[11px] uppercase leading-snug text-ink-soft">{label}</div>
    </motion.div>
  );
}