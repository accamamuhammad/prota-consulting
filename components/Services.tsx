"use client";

import { motion } from "motion/react";

const FEATURES = [
  {
    icon: "◆",
    title: "Churn Risk Scoring",
    description:
      "Every account gets a live risk score based on usage drop-off, support tickets, and billing signals — so you know who to call before they cancel.",
  },
  {
    icon: "⚡",
    title: "Real-Time Alerts",
    description:
      "Get pinged in Slack the moment a high-value account's usage drops, instead of finding out at renewal time.",
  },
  {
    icon: "📈",
    title: "NRR & Cohort Dashboards",
    description:
      "See net revenue retention, expansion, and contraction broken down by cohort — the numbers your board actually asks about.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
          <span className="inline-block h-[2px] w-[18px] bg-indigo" />
          What Loopline does
        </div>
        <h2 className="mb-14 max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
          Stop finding out about churn at renewal time.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map((s) => (
            <div
              key={s.title}
              className="relative border border-line bg-white p-7"
              style={{ clipPath: "polygon(0 16px, 16px 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sharp bg-indigo-soft text-lg text-indigo">
                {s.icon}
              </div>
              <h3 className="mb-3 border-b border-dashed border-line pb-3 font-serif text-lg font-medium">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}