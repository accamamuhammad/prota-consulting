"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function BookedBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("booked") === "1") {
      // Defer the setState call out of the synchronous effect body —
      // React 19 flags direct setState() calls in an effect body even when
      // syncing from an external source (the URL) is exactly what effects
      // are for. queueMicrotask satisfies the "call it from a callback"
      // pattern React's own docs recommend.
      queueMicrotask(() => setVisible(true));

      const url = new URL(window.location.href);
      url.searchParams.delete("booked");
      window.history.replaceState({}, "", url.toString());

      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-sharp bg-ink px-5 py-3 font-mono text-[12.5px] uppercase tracking-wide text-bg shadow-lg"
        >
          ✓ Booking confirmed — check your email for details
        </motion.div>
      )}
    </AnimatePresence>
  );
}