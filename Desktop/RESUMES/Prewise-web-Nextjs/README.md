# Prewise Web (Next.js)

Modern marketing site for Prewise built with Next.js, Tailwind CSS v4, and TypeScript.

## What’s inside
- Next.js app router with server components where useful
- Tailwind v4 design tokens (Space Grotesk + Noto Sans) and utility-first styling
- Responsive layouts, CTA flows (schedule consultation, join, partner), and search
- Supabase client stubbed for future data integrations

## Getting started
1) Install dependencies
   ```bash
   npm install
   ```
2) Run dev server
   ```bash
   npm run dev
   ```
   Then open the printed localhost URL.
3) Production build
   ```bash
   npm run build && npm run start
   ```

## Project structure (high level)
- `src/app` – App router pages, layout, and global styles
- `src/components` – Shared UI (header, footer, stats, utilities)
- `src/views` – Page-level view compositions
- `public` / `src/assets` – Static media and brand assets
- `src/lib/supabase.ts` – Supabase client setup stub

## Notes
- Fonts are loaded from Google Fonts in `src/app/layout.tsx` and defined in `src/app/globals.css`.
- `.env` is git-ignored; add your own keys locally as needed.

## License
All rights reserved.
