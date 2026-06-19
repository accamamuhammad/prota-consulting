# Prota Consulting — Home Page Sections

## Where these files go in your project

```
your-project/
├── tailwind.config.ts        ← replace/merge with yours
├── lib/
│   └── fonts.ts               ← new
├── components/
│   ├── Hero.tsx                ← new
│   ├── About.tsx                ← new
│   ├── Services.tsx              ← new
│   ├── CaseStudies.tsx            ← new
│   ├── Booking.tsx                ← new
│   ├── Pricing.tsx                 ← new
│   └── Contact.tsx                  ← new
└── app/
    ├── layout.tsx              ← edit (see below)
    └── page.tsx                 ← replace with the one provided
```

If your project uses a `src/` directory, put `components/` and `lib/`
inside `src/` and update the `content` paths in `tailwind.config.ts`
accordingly (already set up for `src/`, adjust if you're not using it).

## 1. Wire up the fonts

In `app/layout.tsx`, import and apply the font variables:

```tsx
import { sourceSerif, plexMono } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-serif">{children}</body>
    </html>
  );
}
```

## 2. Make sure `@/` path alias works

Check `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

(or `["./*"]` if you're not using `src/`)

## 3. Drop in `tailwind.config.ts`

This adds the `bg`, `ink`, `ink-soft`, `indigo`, `indigo-soft`, `line`
colors and the `font-serif` / `font-mono` families used throughout every
section. Merge it with your existing config if you've already customized
anything.

## Notes on what's stubbed for now

- **Booking.tsx** — the dark "availability" panel is static mock data.
  When we build the dedicated `/booking` page, we'll swap this for a real
  Calendly embed and the CTA already points to `/booking`.
- **Pricing.tsx** — tier copy/pricing is placeholder, easy to edit at the
  top of the file (`TIERS` array).
- **Contact.tsx** — form currently just flips to a "sent" state on submit.
  The `handleSubmit` function has a `TODO` where we'll wire it to a
  Supabase insert or an API route.
- **CaseStudies.tsx** — placeholder client stories; swap in real ones
  whenever you have them (`CASE_STUDIES` array at the top).

All sections share the same section-label pattern (small indigo dash +
mono eyebrow text) and spacing rhythm (`py-24`, `border-t border-line`)
so new sections you add later will slot in visually without extra work.