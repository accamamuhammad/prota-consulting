import type { Metadata } from "next";
import { sourceSerif, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopline — Retention analytics for B2B SaaS",
  description:
    "Loopline connects to your billing and product data to flag at-risk accounts, track expansion revenue, and show you exactly where NRR is leaking — before it shows up in the board deck.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-serif">{children}</body>
    </html>
  );
}