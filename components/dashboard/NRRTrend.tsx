"use client";

import { motion } from "motion/react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const NRR = [91.2, 92.8, 94.1, 93.6, 95.0, 96.4];

export default function NRRTrend() {
  const max = 100;
  const min = 85;
  const points = NRR.map((v, i) => {
    const x = (i / (NRR.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min)) * 100;
    return { x, y, v };
  });

  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `0,100 ${linePath} 100,100`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-hidden rounded-sharp border border-line bg-white"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <h2 className="font-serif text-base font-medium">Net revenue retention</h2>
        <span className="font-mono text-[11px] uppercase text-indigo">96.4% this month</span>
      </div>

      <div className="relative h-[220px] p-6">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          <polygon points={areaPath} fill="var(--color-indigo-soft)" opacity="0.6" />
          <motion.polyline
            points={linePath}
            fill="none"
            stroke="var(--color-indigo)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="1.6"
              fill="var(--color-indigo)"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
            />
          ))}
        </svg>

        <div className="mt-3 flex justify-between font-mono text-[10.5px] uppercase text-ink-soft">
          {MONTHS.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}