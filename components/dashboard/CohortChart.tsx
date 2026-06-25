"use client";

import { motion } from "motion/react";

// Retention % by month-since-signup, one row per signup cohort.
// Values intentionally decay left-to-right with occasional plateau —
// matches the shape of a believable retention curve.
const COHORTS = [
  { label: "Jan '26", values: [100, 88, 81, 76, 74, 73] },
  { label: "Feb '26", values: [100, 91, 85, 80, 78, null] },
  { label: "Mar '26", values: [100, 93, 87, 84, null, null] },
  { label: "Apr '26", values: [100, 95, 90, null, null, null] },
  { label: "May '26", values: [100, 96, null, null, null, null] },
  { label: "Jun '26", values: [100, null, null, null, null, null] },
];

function colorFor(value: number | null) {
  if (value === null) return "bg-line/40";
  if (value >= 90) return "bg-indigo";
  if (value >= 80) return "bg-[#8B85F5]";
  if (value >= 70) return "bg-indigo-soft";
  return "bg-[#F0EEFB]";
}

function textColorFor(value: number | null) {
  if (value === null) return "text-transparent";
  if (value >= 80) return "text-white";
  return "text-indigo";
}

export default function CohortChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-hidden rounded-sharp border border-line bg-white"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <h2 className="font-serif text-base font-medium">Retention by cohort</h2>
        <span className="font-mono text-[11px] uppercase text-ink-soft">% retained, by month since signup</span>
      </div>

      <div className="overflow-x-auto p-6">
        <div className="grid min-w-[560px] grid-cols-[80px_repeat(6,1fr)] gap-1.5">
          <div />
          {["M0", "M1", "M2", "M3", "M4", "M5"].map((m) => (
            <div key={m} className="text-center font-mono text-[10px] uppercase text-ink-soft">
              {m}
            </div>
          ))}

          {COHORTS.map((cohort, rowIndex) => (
            <motion.div
              key={cohort.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: rowIndex * 0.06 }}
              className="contents"
            >
              <div className="flex items-center font-mono text-[11px] text-ink-soft">{cohort.label}</div>
              {cohort.values.map((v, colIndex) => (
                <motion.div
                  key={colIndex}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: rowIndex * 0.06 + colIndex * 0.03, duration: 0.25 }}
                  className={`flex h-9 items-center justify-center rounded-[3px] font-mono text-[11px] font-medium ${colorFor(v)} ${textColorFor(v)}`}
                >
                  {v !== null ? `${v}%` : ""}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 font-mono text-[10.5px] uppercase text-ink-soft">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-indigo" /> 90%+
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#8B85F5]" /> 80–89%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-indigo-soft" /> 70–79%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#F0EEFB]" /> Below 70%
          </span>
        </div>
      </div>
    </motion.div>
  );
}