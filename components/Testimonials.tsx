"use client";

import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote:
      "We went into the engagement thinking we had a marketing problem. Turned out it was an ops problem wearing a marketing costume.",
    name: "Founder",
    company: "DTC retail brand",
  },
  {
    quote:
      "Most consultants hand you a deck. Prota stayed until our sales team was actually running the new process on their own.",
    name: "VP Sales",
    company: "B2B SaaS, Series A",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
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
            In their words
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            What it's actually like to work with us.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-sharp border border-line bg-white p-8"
            >
              <p className="mb-6 font-serif text-lg leading-relaxed">“{t.quote}”</p>
              <div className="font-mono text-xs uppercase text-ink-soft">
                {t.name} · {t.company}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}