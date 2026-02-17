# Portfolio v3

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.  
The site is designed to present product-focused frontend/full-stack work with a calm, minimal visual system.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (token-based theme system)
- ESLint

## Features

- Light/dark theme with semantic color tokens
- Sticky/fixed top navigation with mobile menu
- Structured homepage narrative:
  - Hero
  - Selected Work
  - Experience
  - Engineering Philosophy
  - Performance Snapshot
  - Contact
- Project case study route:
  - `/projects/ai-code-review-bot`
- SEO essentials:
  - Layout + page metadata
  - Open Graph + Twitter cards
  - `robots.txt` and `sitemap.xml`

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Set site URL (recommended)

Use your production domain so canonical URLs, sitemap, and OG metadata are correct.

```bash
export NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

For local shell convenience, put this in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # start local dev server
npm run lint    # run ESLint
npm run build   # production build
npm run start   # run production server
```

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    projects/
      ai-code-review-bot/
        page.tsx
  components/
    hero/
    layout/
    projects/
    sections/
    ui/
  content/
    portfolio.ts
    projects.ts
  lib/
    site.ts
  styles/
    globals.css
public/
  resume.pdf
  og.png
```

## Design System Notes

- Theme values are semantic CSS variables (`--background`, `--foreground`, etc.).
- Tailwind maps tokens to utility classes (`bg-background`, `text-foreground`, etc.).
- Shared UI primitives are in `src/components/ui` (`Button`, `Container`, `Text`, `Section`, `Navbar`).
- Project card rendering is data-driven from `src/content/projects.ts`.

## Routes

- `/` — homepage
- `/projects/ai-code-review-bot` — case study page
- `/robots.txt` — robots rules
- `/sitemap.xml` — sitemap entries

## Deployment

Deploy on Vercel (recommended) or any Node-compatible platform.

Production checklist:

- Set `NEXT_PUBLIC_SITE_URL` to your real domain
- Verify `public/og.png` exists
- Run:

```bash
npm run lint
npm run build
```

## Content Updates

- Homepage/project data: `src/content/projects.ts`
- Experience and summary: `src/content/portfolio.ts`
- Case study page content: `src/app/projects/ai-code-review-bot/page.tsx`
