"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function BookedBanner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (searchParams.get("booked") === "1") {
      setVisible(true);
      // Clean the query param out of the URL without a full reload
      router.replace(pathname);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, pathname, router]);

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