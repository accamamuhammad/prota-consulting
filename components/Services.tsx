"use client";

import { motion } from "motion/react";

const SERVICES = [
  {
    icon: "◆",
    title: "Strategy & Planning",
    description:
      "Translate a vague direction into a quarterly plan with owners, milestones, and a number to hit.",
  },
  {
    icon: "⚡",
    title: "Operations Review",
    description:
      "Find where time and money leak in the day-to-day, then fix the three things that matter most.",
  },
  {
    icon: "📈",
    title: "Growth Advisory",
    description:
      "Pressure-test your go-to-market and pricing, backed by a model you can defend in the boardroom.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-295 px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-0.5 w-4.5 bg-indigo" />
            What we do
          </div>
          <h2 className="mb-14 max-w-160 font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Stop settling for advice you can&apos;t act on.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="relative border border-line bg-white p-7"
              style={{
                clipPath: "polygon(0 16px, 16px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sharp bg-indigo-soft text-lg text-indigo">
                {s.icon}
              </div>
              <h3 className="mb-3 border-b border-dashed border-line pb-3 font-serif text-lg font-medium">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}