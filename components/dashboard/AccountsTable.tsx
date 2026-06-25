"use client";

import { motion } from "motion/react";
import { Account, ACCOUNTS, RISK_STYLES, RISK_DOT, RISK_LABEL } from "@/lib/dashboard-data";

const COLUMNS = [
  { label: "Account", icon: "▣", color: "bg-[#4FA0E9]" },
  { label: "Plan", icon: "◈", color: "bg-[#9B7FE8]" },
  { label: "MRR", icon: "$", color: "bg-[#5BC29A]" },
  { label: "Owner", icon: "@", color: "bg-[#E9C84C]" },
  { label: "Risk", icon: "●", color: "bg-[#E97A4F]" },
  { label: "Last active", icon: "◷", color: "bg-ink-soft" },
];

export default function AccountsTable({
  accounts = ACCOUNTS,
  limit,
}: {
  accounts?: Account[];
  limit?: number;
}) {
  const rows = limit ? accounts.slice(0, limit) : accounts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-hidden rounded-sharp border border-line bg-white"
    >
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-line">
            <th className="w-10 px-4 py-3">
              <input type="checkbox" className="rounded-sm" />
            </th>
            {COLUMNS.map((col) => (
              <th key={col.label} className="px-4 py-3 font-mono text-[10.5px] uppercase text-ink-soft">
                <span className="flex items-center gap-1.5">
                  <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-[2px] text-[7px] text-white ${col.color}`}>
                    {col.icon}
                  </span>
                  {col.label}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="px-6 py-10 text-center font-mono text-xs text-ink-soft">
                No accounts match this filter.
              </td>
            </tr>
          )}
          {rows.map((a, i) => (
            <motion.tr
              key={a.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.04 * i }}
              className="border-b border-line text-sm last:border-b-0 hover:bg-bg"
            >
              <td className="px-4 py-3">
                <input type="checkbox" className="rounded-sm" />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-medium text-white ${a.avatarColor}`}>
                    {a.initials}
                  </span>
                  <span className="font-medium">{a.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-ink-soft">{a.plan}</td>
              <td className="px-4 py-3 font-mono text-xs">{a.mrr}</td>
              <td className="px-4 py-3 font-mono text-xs text-ink-soft">{a.owner}</td>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center gap-1.5 rounded-sharp px-2.5 py-1 font-mono text-[10.5px] uppercase ${RISK_STYLES[a.risk]}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${RISK_DOT[a.risk]}`} />
                  {RISK_LABEL[a.risk]}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-ink-soft">{a.lastActive}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}