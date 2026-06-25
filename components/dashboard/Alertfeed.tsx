"use client";

import { motion } from "motion/react";
import { Alert, ALERTS, ALERT_SEVERITY_STYLES, ALERT_SEVERITY_LABEL } from "@/lib/dashboard-data";

export default function AlertFeed({
  alerts = ALERTS,
  limit,
  title = "Recent alerts",
}: {
  alerts?: Alert[];
  limit?: number;
  title?: string;
}) {
  const rows = limit ? alerts.slice(0, limit) : alerts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="overflow-hidden rounded-sharp border border-line bg-white"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <h2 className="font-serif text-base font-medium">{title}</h2>
        <span className="font-mono text-[11px] uppercase text-ink-soft">Last 7 days</span>
      </div>

      <div className="divide-y divide-line">
        {rows.length === 0 && (
          <div className="px-6 py-10 text-center font-mono text-xs text-ink-soft">
            No alerts in this category.
          </div>
        )}
        {rows.map((alert, i) => (
          <motion.div
            key={`${alert.account}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i, ease: "easeOut" }}
            className="flex items-start gap-3 px-6 py-4 hover:bg-bg"
          >
            <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-medium text-white ${alert.avatarColor}`}>
              {alert.initials}
            </span>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{alert.account}</span>
                <span className={`inline-flex items-center gap-1 rounded-sharp px-2 py-0.5 font-mono text-[9.5px] uppercase text-white ${ALERT_SEVERITY_STYLES[alert.severity]}`}>
                  {ALERT_SEVERITY_LABEL[alert.severity]}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{alert.message}</p>
            </div>

            <span className="flex-shrink-0 font-mono text-[11px] text-ink-soft/70">{alert.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}