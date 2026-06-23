"use client";

import { motion } from "motion/react";

const INTEGRATIONS = [
  { name: "Stripe", note: "Billing & revenue data" },
  { name: "Slack", note: "Real-time churn alerts" },
  { name: "Segment", note: "Product usage events" },
  { name: "HubSpot", note: "Account & CRM sync" },
  { name: "Intercom", note: "Support signal tracking" },
  { name: "Salesforce", note: "Pipeline & renewal data" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Integrations() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            Integrations
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Plugs into the tools you already use.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-3"
        >
          {INTEGRATIONS.map((i) => (
            <motion.div
              key={i.name}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ backgroundColor: "#FBFBFA" }}
              className="flex flex-col gap-1 bg-white p-7"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sharp bg-indigo-soft font-mono text-xs font-medium text-indigo">
                {i.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-serif text-base font-medium">{i.name}</span>
              <span className="font-mono text-xs text-ink-soft">{i.note}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}