"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTABanner({
  title,
  description,
  buttonLabel = "Book a consultation →",
  buttonHref = "/booking",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="border-t border-line bg-ink py-20 text-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-[1180px] flex-col items-center px-8 text-center"
      >
        <h2 className="mb-4 max-w-[560px] font-serif text-[32px] font-medium leading-[1.15] sm:text-[38px]">
          {title}
        </h2>
        <p className="mb-8 max-w-[460px] text-[15px] leading-relaxed text-[#B8B7BD]">
          {description}
        </p>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link
            href={buttonHref}
            className="inline-block rounded-sharp bg-[#8B85F5] px-6 py-3.5 font-mono text-[13px] uppercase tracking-wide text-ink"
          >
            {buttonLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}