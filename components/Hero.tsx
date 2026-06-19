"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

function GrowthChart() {
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
        <span>client-outcomes.report</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
      </div>

      <div className="relative flex h-[280px] items-end gap-[3px] px-6 pt-12 sm:h-[360px] sm:px-10">
        <div className="absolute bottom-4 left-6 flex items-center gap-2 font-mono text-xs uppercase text-ink-soft sm:left-10">
          <span className="rounded-sharp bg-indigo px-2 py-1 text-[11px] text-white">
            +38%
          </span>
          avg. revenue lift, 6 months post-engagement
        </div>

        <div className="absolute right-6 top-12 hidden rounded-md bg-ink px-3.5 py-2.5 font-mono text-xs leading-relaxed text-bg sm:right-10 sm:block">
          Q1 → Q4
          <br />
          <b className="text-[#8B85F5]">Run-rate +2.4x</b>
        </div>

        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7 + i * 0.012,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "bottom" }}
            className="flex flex-1 flex-col-reverse gap-[3px]"
          >
            {col.map((kind, s) => (
              <i
                key={s}
                className={`block h-1.5 w-full rounded-[1px] ${
                  kind === "on"
                    ? "bg-indigo"
                    : kind === "fade"
                    ? "bg-[#C9C4F7]"
                    : "bg-indigo-soft"
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
          Strategy &nbsp;·&nbsp; Operations &nbsp;·&nbsp; Growth
          <span className="inline-block h-[2px] w-[18px] bg-indigo" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-7 max-w-[880px] text-center font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.01em] sm:text-[56px] lg:text-[72px]"
        >
          Clarity for decisions
          <br />
          that move the business <em className="italic text-indigo">forward</em>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-[540px] text-center font-mono text-[15px] leading-relaxed text-ink-soft"
        >
          Prota Consulting helps founders and operators turn scattered
          priorities into a plan they can actually execute — backed by data,
          not guesswork.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#booking"
            className="rounded-sharp bg-indigo px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-white"
          >
            Book a consultation →
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#services"
            className="rounded-sharp border border-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-ink"
          >
            See services
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="mx-2 px-2">
        <GrowthChart />
      </div>
    </section>
  );
}