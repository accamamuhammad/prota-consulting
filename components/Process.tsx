"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    step: "01",
    title: "Discovery call",
    description: "A free 30-minute call to understand what's going on and whether we're a fit.",
  },
  {
    step: "02",
    title: "Diagnostic",
    description: "We dig into your numbers, process, and team to find the real bottleneck — not just the obvious one.",
  },
  {
    step: "03",
    title: "Plan & execution",
    description: "A working plan with owners and milestones, then hands-on support actually shipping it.",
  },
  {
    step: "04",
    title: "Handoff",
    description: "Documentation and a final review so your team can run it without us once we're done.",
  },
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
            Four steps, start to finish.
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