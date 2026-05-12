# Sidikoff Digital - Project Context & Guidelines

## Project Overview
Sidikoff Digital is a professional digital agency website and portfolio for a French web development agency based in Villeurbanne/Lyon. The project is built with a focus on high performance, modern UI/UX, and aggressive SEO optimization.

### Core Technologies
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4, Framer Motion (animations)
- **Blog Content:** Static TypeScript data files (`src/lib/blog-data*.ts`)
- **Icons:** Lucide React
- **Form Handling:** Nodemailer
- **Package Manager:** pnpm

### Architecture
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (buttons, forms, cards).
- `src/sections`: Main sections used to compose pages (Hero, About, Services, etc.).
- `src/lib`: Core logic, including SEO utilities, blog data, and i18n helpers.
- `src/styles`: Global CSS, Tailwind configurations, and critical rendering styles.
- `src/types`: TypeScript definitions.
- `locales/`: JSON translation files (primary focus is French).

## Development Guidelines

### 1. Internationalization & SEO
- **Primary Language:** The project is exclusively in **French (fr)**.
- **Legacy Paths:** Previous `/en` and `/ru` paths are redirected to clean French URLs via `next.config.ts`.
- **SEO Utilities:** Use `@/lib/seo-utils.ts` for all metadata and structured data (JSON-LD) generation. Every page should have high-quality metadata.
- **Landing Pages:** The project uses many localized landing pages for specific cities (Paris, Lyon, Villeurbanne) and services. Maintain consistency in SEO keywords across these pages.

### 2. Styling & UI
- **Design Tokens:** Colors, spacing, and shadows are defined via CSS variables and extended in `tailwind.config.ts`.
- **Animations:** Use `framer-motion` for smooth, high-quality transitions. Components using `framer-motion` MUST have the `'use client'` directive.
- **Client Directive Utility:** Use `node fix_use_client.cjs` to automatically add `'use client'` to components that import `framer-motion` but lack the directive.
- **Critical CSS:** Some critical styles are injected directly in `src/app/layout.tsx` for instant rendering.
- **Accessibility:** Ensure all interactive elements have proper focus states and labels.

### 3. Components & Sections
- **Composition:** Compose pages using components from `src/sections`.
- **Performance:** Utilize `next/image` with `avif` and `webp` formats. Favor server components where possible.
- **Clean Code:** Adhere to the existing pattern of separating logical components (`src/components`) from layout sections (`src/sections`).

### 4. Blog Content
- **Content Source:** Static TypeScript files in `src/lib/blog-data-part1.ts` and `src/lib/blog-data-part2.ts`.
- **Types:** Defined in `src/lib/blog-data-part1.ts` (`BlogPost` interface).
- **Access:** Import `allBlogPosts` or `getPostBySlug` from `@/lib/blog-data`.
- **Adding Posts:** Add to `blog-data-part1.ts` or `blog-data-part2.ts`, then redeploy.

### 5. Architectural Mapping (Graphify)
The project supports codebase visualization via Graphify.
- Run `/graphify .` to build a knowledge graph of the codebase.
- Outputs are saved in `graphify-out/` (Git-ignored).
- View the interactive map in `graphify-out/graph.html`.

## Key Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts development server with Turbopack |
| `pnpm build` | Builds the application for production |
| `pnpm start` | Starts the production server |
| `pnpm lint` | Runs ESLint for code quality |
| `pnpm type-check` | Performs TypeScript type checking |
| `pnpm build:check` | Runs type-check, lint, and build in sequence |
| `pnpm clean` | Cleans build artifacts (`.next`, `out`, `dist`) |
| `node fix_use_client.cjs` | Fixes missing `'use client'` in motion components |

## Environment Variables
Ensure the following variables are configured in your `.env.local`:
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification token.
- `NEXT_PUBLIC_YANDEX_VERIFICATION`: Yandex Webmaster verification token.
- `GMAIL_USER` & `GMAIL_PASS`: For Nodemailer contact form functionality.

## Deployment
- **Platform:** Vercel.
- **Domain:** The project uses `www.sidikoff.com` as the canonical domain.
- **Redirects:** `vercel.json` and `next.config.ts` handle `www`, `https`, and legacy locale redirects.
