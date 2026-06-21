"use client";

import { motion } from "motion/react";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-bg pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-[1180px] px-8"
      >
        <div className="mb-6 flex items-center gap-2.5 font-mono text-[12.5px] uppercase text-ink-soft">
          <span className="inline-block h-[2px] w-[18px] bg-indigo" />
          {eyebrow}
        </div>
        <h1 className="max-w-[700px] font-serif text-[36px] font-medium leading-[1.12] sm:text-[48px]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}