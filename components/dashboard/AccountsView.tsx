"use client";

import { useState } from "react";
import AccountsTable from "@/components/dashboard/AccountsTable";
import { ACCOUNTS, RiskLevel } from "@/lib/dashboard-data";

type FilterKey = "all" | RiskLevel;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "low", label: "Healthy" },
  { key: "medium", label: "Watch" },
  { key: "high", label: "At risk" },
];

export default function AccountsView() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = filter === "all" ? ACCOUNTS : ACCOUNTS.filter((a) => a.risk === filter);

  return (
    <main className="flex-1 space-y-5 overflow-y-auto p-8">
      <div className="flex items-center gap-2">
        {FILTERS.map((f) => {
          const count = f.key === "all" ? ACCOUNTS.length : ACCOUNTS.filter((a) => a.risk === f.key).length;
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

      <AccountsTable accounts={filtered} />
    </main>
  );
}