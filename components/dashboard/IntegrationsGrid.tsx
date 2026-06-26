"use client";

import { motion } from "motion/react";

type Integration = {
  name: string;
  note: string;
  category: string;
  status: "connected" | "available";
};

const INTEGRATIONS: Integration[] = [
  { name: "Stripe", note: "Billing & revenue data", category: "Billing", status: "connected" },
  { name: "Slack", note: "Real-time churn alerts", category: "Notifications", status: "connected" },
  { name: "Segment", note: "Product usage events", category: "Analytics", status: "connected" },
  { name: "HubSpot", note: "Account & CRM sync", category: "CRM", status: "available" },
  { name: "Intercom", note: "Support signal tracking", category: "Support", status: "available" },
  { name: "Salesforce", note: "Pipeline & renewal data", category: "CRM", status: "available" },
];

export default function IntegrationsGrid() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.06 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {INTEGRATIONS.map((integration) => (
        <motion.div
          key={integration.name}
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col rounded-sharp border border-line bg-white p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-sharp bg-indigo-soft font-mono text-xs font-medium text-indigo">
              {integration.name.slice(0, 2).toUpperCase()}
            </div>
            {integration.status === "connected" ? (
              <span className="inline-flex items-center gap-1.5 rounded-sharp bg-[#E7F5EE] px-2.5 py-1 font-mono text-[10px] uppercase text-[#2F9165]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F9165]" />
                Connected
              </span>
            ) : (
              <span className="rounded-sharp border border-line px-2.5 py-1 font-mono text-[10px] uppercase text-ink-soft">
                Not connected
              </span>
            )}
          </div>

          <h3 className="mb-1 font-serif text-base font-medium">{integration.name}</h3>
          <p className="mb-1 font-mono text-[11px] text-ink-soft">{integration.note}</p>
          <span className="mb-4 font-mono text-[10px] uppercase text-ink-soft/60">{integration.category}</span>

          <button
            className={`mt-auto rounded-sharp px-4 py-2 font-mono text-[11px] uppercase tracking-wide ${
              integration.status === "connected"
                ? "border border-line text-ink-soft hover:bg-bg"
                : "bg-ink text-bg"
            }`}
          >
            {integration.status === "connected" ? "Manage" : "Connect"}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}