"use client";

import { useState } from "react";
import AlertFeed from "@/components/dashboard/Alertfeed";
import { ALERTS, AlertSeverity } from "@/lib/dashboard-data";

type FilterKey = "all" | AlertSeverity;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "high", label: "Risk" },
  { key: "medium", label: "Watch" },
  { key: "info", label: "Updates" },
];

export default function AlertsView() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = filter === "all" ? ALERTS : ALERTS.filter((a) => a.severity === filter);

  return (
    <main className="flex-1 space-y-5 overflow-y-auto p-8">
      <div className="flex items-center gap-2">
        {FILTERS.map((f) => {
          const count = f.key === "all" ? ALERTS.length : ALERTS.filter((a) => a.severity === f.key).length;
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-sharp px-3.5 py-1.5 font-mono text-[11px] uppercase transition-colors ${
                isActive ? "bg-ink text-bg" : "border border-line text-ink-soft hover:bg-white"
              }`}
            >
              {f.label} <span className={isActive ? "text-bg/70" : "text-ink-soft/60"}>({count})</span>
            </button>
          );
        })}
      </div>

      <AlertFeed alerts={filtered} title="All alerts" />
    </main>
  );
}