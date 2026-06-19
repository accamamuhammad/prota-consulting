"use client";

import { motion } from "motion/react";

const TIERS = [
  {
    name: "Intro Session",
    price: "$150",
    period: "one-time",
    description: "A single deep-dive session to diagnose the biggest issue.",
    features: ["60-minute working session", "Written summary & next steps", "Async follow-up (1 week)"],
    highlighted: false,
  },
  {
    name: "Growth Sprint",
    price: "$2,400",
    period: "/ 4 weeks",
    description: "Hands-on support to plan and ship one specific outcome.",
    features: [
      "Weekly working sessions",
      "Full strategy document",
      "Slack/email access",
      "Implementation check-ins",
    ],
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "Custom",
    period: "monthly",
    description: "Ongoing advisory for teams that need a steady hand.",
    features: [
      "Everything in Growth Sprint",
      "Monthly board-ready reporting",
      "Priority access",
    ],
    highlighted: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-bg py-24">
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
            Pricing
          </div>
          <h2 className="mb-14 max-w-160 font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Pick the level of involvement you need.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {TIERS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`flex flex-col rounded-sharp border p-7 ${
                t.highlighted
                  ? "border-indigo bg-white shadow-[0_0_0_1px_var(--color-indigo)]"
                  : "border-line bg-white"
              }`}
            >
              {t.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-sharp bg-indigo px-2.5 py-1 font-mono text-[10.5px] uppercase text-white">
                  Most booked
                </span>
              )}
              <h3 className="mb-1 font-serif text-xl font-medium">{t.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">
                {t.description}
              </p>
              <div className="mb-6 flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-medium">
                  {t.price}
                </span>
                <span className="font-mono text-xs uppercase text-ink-soft">
                  {t.period}
                </span>
              </div>
              <ul className="mb-8 flex-1 space-y-2.5 border-t border-dashed border-line pt-6">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span className="mt-0.5 text-indigo">＋</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/booking"
                className={`rounded-sharp px-5 py-3 text-center font-mono text-[12.5px] uppercase tracking-wide ${
                  t.highlighted
                    ? "bg-indigo text-white"
                    : "border border-ink text-ink"
                }`}
              >
                Get started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}