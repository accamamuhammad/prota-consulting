"use client";

import { motion } from "motion/react";

const STEPS = [
  { step: "01", title: "Connect your data", description: "Link Stripe and your product analytics — takes about 10 minutes, no engineering ticket required." },
  { step: "02", title: "Loopline scores your accounts", description: "Every account gets a live risk score based on usage, billing, and support signals." },
  { step: "03", title: "Get alerted on risk", description: "Drops in usage or failed payments trigger a Slack alert before renewal, not after." },
  { step: "04", title: "Track the trend", description: "Cohort and NRR dashboards show whether retention is actually improving over time." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            How it works
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Live in an afternoon, not a quarter.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-4"
        >
          {STEPS.map((s) => (
            <motion.div key={s.step} variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }} className="bg-white p-7">
              <div className="mb-6 font-mono text-sm text-indigo">{s.step}</div>
              <h3 className="mb-3 font-serif text-lg font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}