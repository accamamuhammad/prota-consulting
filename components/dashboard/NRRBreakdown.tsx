"use client";

import { motion } from "motion/react";

// Starting at 100% (last period's revenue), how this period's revenue
// from the same accounts broke down: expansion adds, contraction and
// churn subtract, landing on the net 96.4% NRR figure.
const SEGMENTS = [
  { label: "Retained", value: 78, color: "bg-indigo" },
  { label: "Expansion", value: 18.4, color: "bg-[#5BC29A]" },
  { label: "Contraction", value: -4.8, color: "bg-[#E9C84C]" },
  { label: "Churned", value: -7.6, color: "bg-[#D14343]" },
];

export default function NRRBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      className="overflow-hidden rounded-sharp border border-line bg-white"
    >
      <div className="border-b border-line px-6 py-4">
        <h2 className="font-serif text-base font-medium">What's driving NRR</h2>
        <p className="font-mono text-[11px] text-ink-soft">Relative to last period's revenue base</p>
      </div>

      <div className="space-y-5 p-6">
        {SEGMENTS.map((s, i) => {
          const width = Math.min(Math.abs(s.value) * 2.2, 100);
          return (
            <div key={s.label}>
              <div className="mb-1.5 flex items-center justify-between font-mono text-[11px]">
                <span className="text-ink-soft">{s.label}</span>
                <span className={s.value < 0 ? "text-[#D14343]" : "text-ink"}>
                  {s.value > 0 ? "+" : ""}
                  {s.value}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-bg">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${s.color}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}