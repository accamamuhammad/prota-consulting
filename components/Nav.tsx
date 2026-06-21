"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-line bg-bg">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-3 py-4 sm:px-4">
        <Link href="/" className="flex items-center gap-2 text-[13px] font-semibold uppercase">
          <span className="relative inline-block h-[15px] w-[15px] rounded-sharp bg-ink">
            <span className="absolute inset-[4px] bg-indigo" />
          </span>
          Prota Consulting
        </Link>

        <div className="hidden items-center gap-7 font-mono text-[11px] uppercase md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink opacity-75 transition-opacity hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <Link href="/contact" className="rounded-sharp border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-ink">
            Contact
          </Link>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/booking"
              className="rounded-sharp bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-bg"
            >
              Book a call
            </Link>
          </motion.div>
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
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-2.5 text-ink"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-sharp bg-ink px-5 py-3 text-center text-bg"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}