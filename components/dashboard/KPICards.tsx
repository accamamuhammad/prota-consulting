"use client";

import { motion } from "motion/react";

const KPIS = [
  {
    label: "Net Revenue Retention",
    value: "96.4%",
    delta: "+2.1%",
    deltaPositive: true,
    sparkline: [40, 42, 41, 45, 48, 47, 52, 55, 54, 58],
  },
  {
    label: "Monthly Churn Rate",
    value: "3.1%",
    delta: "−1.8%",
    deltaPositive: true,
    sparkline: [60, 58, 55, 52, 50, 48, 45, 44, 42, 40],
  },
  {
    label: "At-Risk MRR",
    value: "$48,200",
    delta: "+$6,400",
    deltaPositive: false,
    sparkline: [20, 22, 21, 25, 28, 30, 34, 38, 42, 46],
  },
];

function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - ((v - min) / (max - min)) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-10 w-full">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#4F46E5" : "#D14343"}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {KPIS.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          className="rounded-sharp border border-line bg-white p-6"
        >
          <div className="mb-3 font-mono text-[11px] uppercase text-ink-soft">{kpi.label}</div>
          <div className="mb-1 flex items-baseline gap-2">
            <span className="font-serif text-2xl font-medium">{kpi.value}</span>
            <span
              className={`font-mono text-xs ${
                kpi.deltaPositive ? "text-indigo" : "text-[#D14343]"
              }`}
            >
              {kpi.delta}
            </span>
          </div>
          <Sparkline data={kpi.sparkline} positive={kpi.deltaPositive} />
        </motion.div>
      ))}
    </div>
  );
}