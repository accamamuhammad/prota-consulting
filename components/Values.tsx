"use client";

import { motion } from "motion/react";

const VALUES = [
  {
    number: "01",
    title: "Diagnose before prescribing",
    description:
      "We don't sell a framework before understanding your actual numbers. Every engagement starts with a real look at what's happening.",
  },
  {
    number: "02",
    title: "Plans you can run, not just read",
    description:
      "If a recommendation needs a 40-page deck to explain, it's too complicated to execute. We aim for clarity over cleverness.",
  },
  {
    number: "03",
    title: "Stay until it moves",
    description:
      "We don't hand off a strategy and disappear. We're in the room for implementation, not just the planning session.",
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
            How we operate
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Three principles behind every engagement.
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