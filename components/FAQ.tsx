"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type FAQItem = { question: string; answer: string };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FAQ({
  eyebrow = "FAQ",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            {eyebrow}
          </div>
          <h2 className="max-w-[640px] font-serif text-[34px] font-medium leading-[1.15] sm:text-[42px]">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.06 }}
          className="mx-auto max-w-[760px] divide-y divide-line border-y border-line"
        >
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={item.question} variants={fadeUp} transition={{ duration: 0.4 }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-serif text-lg font-medium">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sharp bg-indigo-soft font-mono text-indigo"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-ink-soft">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}