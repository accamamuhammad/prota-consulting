"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FAVORITES = [{ label: "Retention Overview", icon: "S", color: "bg-[#E9C84C]", href: "/dashboard" }];

const WORKSPACE_ITEMS = [
  { label: "Overview", icon: "◆", color: "bg-indigo", href: "/dashboard" },
  { label: "Accounts", icon: "▣", color: "bg-[#4FA0E9]", href: "/dashboard/accounts" },
  { label: "Cohorts", icon: "▦", color: "bg-[#5BC29A]", href: "/dashboard/cohorts" },
  { label: "Alerts", icon: "▲", color: "bg-[#E97A4F]", href: "/dashboard/alerts" },
  { label: "Integrations", icon: "◈", color: "bg-[#9B7FE8]", href: "/dashboard/integrations" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[230px] flex-shrink-0 flex-col border-r border-line bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between border-b border-line px-4 py-4"
      >
        <div className="flex items-center gap-2">
          <span className="relative inline-block h-[16px] w-[16px] rounded-sharp bg-ink">
            <span className="absolute inset-[4px] bg-indigo" />
          </span>
          <span className="text-[13px] font-semibold uppercase">Loopline</span>
        </div>
        <span className="font-mono text-xs text-ink-soft">⌄</span>
      </button>

      <div className="flex items-center gap-2 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-sharp border border-line bg-bg px-2.5 py-1.5 font-mono text-[11px] text-ink-soft">
          🔍 Search
          <span className="ml-auto text-[10px]">⌘K</span>
        </div>
      </div>
      <div className="px-4 pb-2">
        <button className="flex w-full items-center justify-center gap-1.5 rounded-sharp bg-ink py-2 font-mono text-[11px] uppercase text-bg">
          + New account
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3">
        <div className="mb-1 px-3 font-mono text-[10px] uppercase tracking-wide text-ink-soft/70">
          Favorites
        </div>
        {FAVORITES.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="mb-1 flex w-full items-center gap-2.5 rounded-sharp px-3 py-2 text-left font-mono text-[12px] text-ink-soft hover:bg-bg"
          >
            <span className={`flex h-4 w-4 items-center justify-center rounded-[3px] text-[9px] text-white ${item.color}`}>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}

        <div className="mb-1 mt-5 px-3 font-mono text-[10px] uppercase tracking-wide text-ink-soft/70">
          Workspace
        </div>
        {WORKSPACE_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`mb-1 flex w-full items-center gap-2.5 rounded-sharp px-3 py-2 text-left font-mono text-[12px] transition-colors ${
                isActive ? "bg-indigo-soft text-indigo" : "text-ink-soft hover:bg-bg"
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-[3px] text-[9px] text-white ${item.color}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-line p-4">
        <Link
          href="/"
          className="block rounded-sharp border border-line px-3 py-2.5 text-center font-mono text-[11px] uppercase text-ink-soft hover:bg-bg"
        >
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}