# Prota Consulting — Home Page Sections

## Where these files go in your project

```
your-project/
├── app/
│   ├── globals.css            ← replace yours with this
│   ├── layout.tsx              ← edit (see below)
│   └── page.tsx                  ← replace with the one provided
├── lib/
│   └── fonts.ts                   ← new
└── components/
    ├── Hero.tsx                    ← new
    ├── About.tsx                    ← new
    ├── Services.tsx                  ← new
    ├── CaseStudies.tsx                ← new
    ├── Booking.tsx                     ← new
    ├── Pricing.tsx                      ← new
    └── Contact.tsx                       ← new
```

If your project uses a `src/` directory, put everything inside `src/`
and make sure `tsconfig.json`'s `@/*` path alias points there.

## Tailwind v4 — no `tailwind.config.ts` needed

Since you're on Tailwind v4, design tokens are no longer defined in a JS/TS
config file — they live directly in `globals.css` using the `@theme`
directive. The `globals.css` provided here defines:

- `--color-bg`, `--color-ink`, `--color-ink-soft`, `--color-indigo`,
  `--color-indigo-soft`, `--color-line` → these auto-generate utilities
  like `bg-bg`, `text-ink`, `border-line`, `bg-indigo`, etc.
- `--font-serif`, `--font-mono` → generate `font-serif` / `font-mono`
- `--radius-sharp` → generates `rounded-sharp`

All the utility class names used across the 7 components (`bg-bg`,
`text-ink-soft`, `border-line`, `bg-indigo`, `rounded-sharp`, `font-serif`,
`font-mono`, etc.) stay exactly the same as before — only *where* they're
defined changed. You shouldn't need to touch any component file for this.

If you had a previous `tailwind.config.ts` from earlier in this project,
delete it — v4 doesn't use it, and leaving a stale one around can cause
confusing overrides.

## 1. Wire up the fonts

In `app/layout.tsx`:

```tsx
import { sourceSerif, plexMono } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${plexMono.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  );
}
```

Note: `next/font`'s generated variables are named `--font-source-serif` and
`--font-plex-mono` (not `--font-serif`/`--font-mono`) — that's intentional,
to avoid colliding with the `--font-serif`/`--font-mono` tokens Tailwind's
`@theme` block defines. `globals.css` already wires one to the other.

## 2. Make sure the `@/` path alias works

Check `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

(or `["./src/*"]` if you're using a `src/` directory)

## 3. Install Motion

```bash
npm install motion
```

All 7 components already import from `"motion/react"` for scroll-triggered
reveals and hover micro-interactions.

## Notes on what's stubbed for now

- **Booking.tsx** — the dark "availability" panel is static mock data.
  When we build the dedicated `/booking` page, we'll swap this for a real
  Calendly embed and the CTA already points to `/booking`.
- **Pricing.tsx** — tier copy/pricing is placeholder (`TIERS` array).
- **Contact.tsx** — form flips to a "sent" state on submit. `handleSubmit`
  has a `TODO` for wiring to Supabase or an API route.
- **CaseStudies.tsx** — placeholder client stories (`CASE_STUDIES` array).

All sections share the same section-label pattern (small indigo dash +
mono eyebrow text) and spacing rhythm (`py-24`, `border-t border-line`),
so new sections will slot in visually without extra work.