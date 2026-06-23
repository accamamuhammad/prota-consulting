"use client";

import { motion } from "motion/react";

const VALUES = [
  {
    number: "01",
    title: "Signal over noise",
    description:
      "Most retention dashboards bury you in charts. We surface the three accounts that actually need attention this week, not forty you'll never act on.",
  },
  {
    number: "02",
    title: "Built from real billing data",
    description:
      "Loopline reads directly from Stripe and your product analytics — not a CSV someone forgot to update last quarter.",
  },
  {
    number: "03",
    title: "Alerts you'll actually see",
    description:
      "A dashboard nobody opens doesn't save an account. That's why every risk signal can land directly in Slack, where your team already lives.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Values() {
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
            How we think about it
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Three principles behind how Loopline is built.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {VALUES.map((v) => (
            <motion.div key={v.number} variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
              <div className="mb-4 font-mono text-sm text-indigo">{v.number}</div>
              <h3 className="mb-3 border-b border-dashed border-line pb-4 font-serif text-lg font-medium">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}