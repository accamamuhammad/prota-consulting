"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const TIERS = [
  {
    name: "Starter",
    monthly: 49,
    annual: 39,
    description: "For early-stage teams getting their first retention signal.",
    features: ["Up to 500 tracked accounts", "Churn risk scoring", "Weekly email digest", "1 team seat"],
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 149,
    annual: 119,
    description: "For teams actively working expansion and retention.",
    features: [
      "Up to 5,000 tracked accounts",
      "Real-time churn alerts",
      "Cohort & NRR dashboards",
      "5 team seats",
      "Slack integration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    description: "For larger orgs with custom data and security needs.",
    features: [
      "Unlimited tracked accounts",
      "Custom data pipelines",
      "SSO & audit logs",
      "Dedicated CSM",
    ],
    highlighted: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            Pricing
          </div>
          <h2 className="mb-8 max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Simple pricing that scales with your account base.
          </h2>

          <div className="inline-flex items-center gap-3 rounded-sharp border border-line bg-white p-1 font-mono text-xs uppercase">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-sharp px-4 py-2 transition-colors ${!annual ? "bg-ink text-bg" : "text-ink-soft"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-sharp px-4 py-2 transition-colors ${annual ? "bg-ink text-bg" : "text-ink-soft"}`}
            >
              Annual <span className="text-indigo">— save 20%</span>
            </button>
          </div>
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
                t.highlighted ? "border-indigo bg-white shadow-[0_0_0_1px_theme(colors.indigo)]" : "border-line bg-white"
              }`}
            >
              {t.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-sharp bg-indigo px-2.5 py-1 font-mono text-[10.5px] uppercase text-white">
                  Most popular
                </span>
              )}
              <h3 className="mb-1 font-serif text-xl font-medium">{t.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">{t.description}</p>

              <div className="mb-6 flex items-baseline gap-1.5">
                {t.monthly === null ? (
                  <span className="font-serif text-3xl font-medium">Custom</span>
                ) : (
                  <>
                    <span className="font-serif text-3xl font-medium">
                      ${annual ? t.annual : t.monthly}
                    </span>
                    <span className="font-mono text-xs uppercase text-ink-soft">/ month</span>
                  </>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-2.5 border-t border-dashed border-line pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-0.5 text-indigo">＋</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={t.monthly === null ? "/booking" : "/checkout"}
                  className={`block rounded-sharp px-5 py-3 text-center font-mono text-[12.5px] uppercase tracking-wide ${
                    t.highlighted ? "bg-indigo text-white" : "border border-ink text-ink"
                  }`}
                >
                  {t.monthly === null ? "Talk to sales" : "Start free trial"}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}