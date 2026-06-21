"use client";

import { motion } from "motion/react";

const MILESTONES = [
  { year: "2013", label: "Started as an in-house operator role, leading growth at a Lagos-based retail group." },
  { year: "2017", label: "Took on first independent advisory clients alongside full-time operating work." },
  { year: "2020", label: "Went full-time as an independent consultant, focused on strategy and operations." },
  { year: "2024", label: "Founded Prota Consulting to formalize the practice and bring on a small team." },
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
            The path here
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            A decade of being on the inside, not just advising from it.
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
            <motion.div
              key={m.year}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-8 py-6"
            >
              <div className="w-16 flex-shrink-0 font-serif text-xl font-medium text-indigo">
                {m.year}
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}