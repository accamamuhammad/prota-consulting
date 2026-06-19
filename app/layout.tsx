import { sourceSerif, plexMono } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${plexMono.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  );
}