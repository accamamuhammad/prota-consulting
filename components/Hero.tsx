"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";

function DashboardPreview() {
  const columns = useMemo(() => {
    const cols = 48;
    return Array.from({ length: cols }, (_, i) => {
      const progress = i / cols;
      const base = 4 + Math.floor(progress * 26);
      const noise = Math.floor(Math.sin(i * 1.7) * 2);
      const segments = Math.max(2, base + noise);
      return Array.from({ length: segments }, (_, s) => {
        const t = s / segments;
        if (t > 0.82) return "on";
        if (t > 0.55 && (i + s) % 2 === 0) return "fade";
        return "base";
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="rounded-t-2xl border-t border-line bg-white shadow-[0_-1px_0_theme(colors.line)] overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        <span>loopline.app/dashboard</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
      </div>

      <div className="relative flex h-[280px] items-end gap-[3px] px-6 pt-12 sm:h-[360px] sm:px-10">
        <div className="absolute bottom-4 left-6 flex items-center gap-2 font-mono text-xs uppercase text-ink-soft sm:left-10">
          <span className="rounded-sharp bg-indigo px-2 py-1 text-[11px] text-white">96.4%</span>
          net revenue retention, last 90 days
        </div>

        <div className="absolute right-6 top-12 hidden rounded-md bg-ink px-3.5 py-2.5 font-mono text-xs leading-relaxed text-bg sm:right-10 sm:block">
          Churn risk flagged
          <br />
          <b className="text-[#8B85F5]">12 accounts this week</b>
        </div>

        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.012, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
            className="flex flex-1 flex-col-reverse gap-[3px]"
          >
            {col.map((kind, s) => (
              <i
                key={s}
                className={`block h-1.5 w-full rounded-[1px] ${
                  kind === "on" ? "bg-indigo" : kind === "fade" ? "bg-[#C9C4F7]" : "bg-indigo-soft"
                }`}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        className="mx-auto max-w-[1180px] px-8"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-7 flex items-center justify-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft"
        >
          <span className="inline-block h-[2px] w-[18px] bg-indigo" />
          Retention analytics for B2B SaaS
          <span className="inline-block h-[2px] w-[18px] bg-indigo" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-7 max-w-[880px] text-center font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.01em] sm:text-[56px] lg:text-[72px]"
        >
          Know which customers
          <br />
          are about to <em className="italic text-indigo">churn</em>, before they do.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-[540px] text-center font-mono text-[15px] leading-relaxed text-ink-soft"
        >
          Loopline connects to your billing and product data to flag at-risk
          accounts, track expansion revenue, and show you exactly where NRR is
          leaking — before it shows up in the board deck.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/checkout" className="rounded-sharp bg-indigo px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-white">
              Start free trial →
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/booking" className="rounded-sharp border border-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-ink">
              Book a demo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="mb-12 text-center">
          <Link href="/dashboard" className="font-mono text-[12.5px] uppercase text-ink-soft underline-offset-4 hover:text-indigo hover:underline">
            Or explore a live dashboard, no signup needed →
          </Link>
        </motion.div>
      </motion.div>

      <Link href="/dashboard" className="group mx-2 block px-2">
        <div className="relative">
          <DashboardPreview />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-t-2xl bg-ink/0 transition-colors group-hover:bg-ink/5">
            <span className="rounded-sharp bg-ink px-5 py-3 font-mono text-[12px] uppercase tracking-wide text-bg opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              See it in action →
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}