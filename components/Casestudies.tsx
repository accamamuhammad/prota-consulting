"use client";

import { motion } from "motion/react";

const CUSTOMERS = [
  {
    client: "Series A vertical SaaS",
    metric: "6% → 3.1%",
    metricLabel: "monthly churn, in 90 days",
    summary: "Used churn risk scores to triage their CS team's outreach instead of calling every account equally.",
  },
  {
    client: "B2B workflow tool",
    metric: "+22%",
    metricLabel: "net revenue retention",
    summary: "Spotted expansion-ready accounts earlier using usage cohort data, fed straight to the sales team.",
  },
  {
    client: "Usage-based analytics platform",
    metric: "−41%",
    metricLabel: "time to flag at-risk accounts",
    summary: "Replaced a manual weekly spreadsheet review with real-time Slack alerts on usage drop-off.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
            <span className="inline-block h-[2px] w-[18px] bg-indigo" />
            Customers
          </div>
          <h2 className="mb-14 max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            Results teams see in their first quarter.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-sharp border border-line bg-line sm:grid-cols-3"
        >
          {CUSTOMERS.map((c) => (
            <motion.div key={c.client} variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }} whileHover={{ backgroundColor: "#FBFBFA" }} className="flex flex-col bg-white p-8">
              <div className="mb-8 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-medium text-indigo">{c.metric}</span>
              </div>
              <div className="mb-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft">{c.metricLabel}</div>
              <p className="mb-6 mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
              <div className="border-t border-dashed border-line pt-4 font-mono text-xs uppercase text-ink">{c.client}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}