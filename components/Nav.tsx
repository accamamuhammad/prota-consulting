"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-line bg-bg">
      <div className="mx-auto flex items-center justify-between px-8 py-5">
        <a href="#" className="flex items-center gap-2 pt-2 text-sm font-semibold uppercase">
          <span className="relative inline-block h-4.5 w-4.5 rounded-sharp bg-ink">
            <span className="absolute inset-1.25 bg-indigo" />
          </span>
          Prota Consulting
        </a>

        <div className="hidden items-center gap-9 font-mono text-[0.65rem] pt-2 uppercase md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ink opacity-75 transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3.5 md:flex">
          <a href="#" className="rounded-sharp border border-ink px-5 pt-3 py-2 font-mono text-[0.6rem] uppercase tracking-wide text-ink">
            Log in
          </a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#booking"
            className="rounded-sharp bg-ink px-5 px-5 pt-3 py-2.5  font-mono text-[0.6rem] uppercase tracking-wide text-bg"
          >
            Book a call
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            className="block h-[1.5px] w-5 bg-ink"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            className="block h-[1.5px] w-5 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-8 py-5 font-mono text-sm uppercase">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-sharp bg-ink px-5 py-3 text-center text-bg"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}