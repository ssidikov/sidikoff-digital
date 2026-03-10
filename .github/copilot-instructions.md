# GitHub Copilot Instructions for SIDIKOFF DIGITAL

## Project Overview

This is a **French-only Next.js 16 digital agency website** specializing in industry-specific landing pages for web creation services. The project uses the App Router with a `(main)` route group, Sanity CMS for blog content, and Tailwind CSS with Framer Motion for animations.

## Architecture Patterns

### Route Structure

- **Route group**: `src/app/(main)/` — all pages except home; the `(main)` name is invisible in URLs
- **French only**: `defaultLocale = 'fr'` is the only locale; no locale segment in URLs
- **Dictionary system**: JSON files in `locales/fr/` loaded via `src/lib/dictionaries.ts`
- **Request proxy**: `src/proxy.ts` handles redirects and security headers (no locale rewriting)

```
src/app/
├── page.tsx                    # Home page (/)
├── layout.tsx                  # Root layout (html/body, Analytics)
├── (main)/
│   ├── layout.tsx              # Shared layout: Header + Footer + LocaleProvider
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [service-slug]/page.tsx
│   ├── blog/
│   ├── faq/
│   ├── tarifs/
│   ├── projects/
│   └── ...
```

### Industry-Specific Landing Pages

The core business model is **niche landing pages** for different industries:

```
src/components/
├── WebCreationLandingContent.tsx     # Main service page
├── TravelAgencyLandingContent.tsx    # Travel agencies
├── RestaurantLandingContent.tsx      # Restaurants
├── BarbershopLandingContent.tsx      # Barbershops
├── DoctorLandingContent.tsx          # Medical practices
├── VilleurbanneLandingContent.tsx    # Location pages
└── [Industry]LandingContent.tsx      # Pattern for new industries
```

### Content Management

- **Sanity CMS**: Blog posts only (`sanity/` directory, config in `sanity.config.ts`)
- **Static content**: JSON dictionaries (`locales/fr/common.json`) for landing page content
- **Images**: Optimized with Next.js Image component, stored in `public/images/`

## Development Workflow

### Key Commands

```bash
npm run dev              # Development with Turbopack
npm run build:check      # Full validation (type-check + lint + build)
npm run sanity           # Start Sanity Studio
```

### Creating New Industry Landing Pages

1. **Component**: Create `src/components/[Industry]LandingContent.tsx`:

   ```tsx
   'use client'
   import { VilleurbannContent } from './VilleurbanneLandingContent' // reference type pattern

   interface Props {
     content: YourContentType
     locale: string
   }

   export default function YourLandingContent({ content, locale }: Props) { ... }
   ```

2. **Route**: Add `src/app/(main)/services/creation-site-internet-[industry]/page.tsx` — see complete template below.

3. **Content**: Add content directly in the page file as a `getPageContent()` function (French only — no locale JSON needed for location pages).

### Component Patterns

- **Icon mapping**: Use `lucide-react` with icon maps for dynamic icon rendering
- **Motion components**: Import from `src/components/ui/MotionWrapper.tsx` for SSR-safe animations
- **SEO**: Always implement `generateMetadata()` with OpenGraph and Twitter cards
- **Responsive**: Mobile-first Tailwind classes

## Critical Integration Points

### Dictionary System

- Main dictionary loader: `src/lib/dictionaries.ts` with fallback logic
- **French only**: Only `locales/fr/common.json` — do not create `en` or `ru` files
- Fallback dictionary: `src/lib/fallback-dictionary.ts` prevents crashes

### Request Proxy

- `src/proxy.ts` handles `/fr/:path*` → `/:path*` redirects and security headers
- **Does NOT rewrite locale paths** — all pages live at clean URLs (e.g., `/services/creation-site-internet-lyon`)
- Static paths bypass: `/_next`, `/api`, `/studio`, etc.

### Image Optimization

- Remote patterns configured for `images.unsplash.com` and `cdn.sanity.io`
- WebP/AVIF formats, 1-year cache TTL
- Industry-specific images in `public/images/[category]/`

## Project-Specific Conventions

### File Naming

- Components: PascalCase with descriptive suffixes (`LandingContent`, `PageContent`)
- Routes: kebab-case matching URL structure
- Dictionaries: snake_case keys matching component prop expectations

### SEO Strategy

- Industry-specific meta titles/descriptions
- Canonical URLs (no locale prefix)
- Structured data (JSON-LD) for rich snippets
- Native Next.js sitemap generation via `src/app/sitemap.ts`

---

## Technical SEO — Mandatory Checklist for Every New Page

> All patterns below were established and validated across a multi-phase SEO audit.
> Deviating from any of these rules will cause broken OG previews, duplicate brand names, or invalid schema.

### 1. No `generateStaticParams` needed

The site uses a `(main)` route group — no `[locale]` dynamic segment exists. Pages are statically rendered without `generateStaticParams`. The build outputs `○ (Static)` automatically.

```ts
// ✅ CORRECT — no generateStaticParams needed at all

// ❌ WRONG — do not add this
export function generateStaticParams() {
  return [{ locale: 'fr' }]
}
```

### 2. Use `defaultLocale` instead of route params

```ts
import { defaultLocale } from '@/lib/i18n'

// ✅ CORRECT
export default async function MyPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)
  ...
}

// ❌ WRONG — no [locale] segment exists
export default async function MyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  ...
}
```

### 3. Page `title` — no brand suffix

The root layout applies the template `'%s | SIDIKOFF DIGITAL'` automatically.
**Never** include `| SIDIKOFF DIGITAL` or `– SIDIKOFF DIGITAL` in the title string itself.

```ts
// ✅ CORRECT
title: 'Création de site internet pour médecins'

// ❌ WRONG — produces "... | SIDIKOFF DIGITAL | SIDIKOFF DIGITAL"
title: 'Création de site internet pour médecins | SIDIKOFF DIGITAL'
```

### 4. `openGraph.locale` — hardcoded `'fr_FR'`

OG/Facebook requires the `language_TERRITORY` format.

```ts
// ✅ CORRECT
openGraph: {
  locale: 'fr_FR',
}

// ❌ WRONG
openGraph: {
  locale: locale, // 'fr' — invalid OG format
}
```

### 5. `openGraph.siteName` — exact casing

```ts
// ✅ CORRECT
siteName: 'SIDIKOFF DIGITAL'

// ❌ WRONG
siteName: 'Sidikoff Digital'
siteName: 'SIDIKOFF Digital'
```

### 6. `openGraph.url` — no locale prefix

The canonical URL has no `/fr/` segment.

```ts
// ✅ CORRECT
url: createCanonicalUrl('services/creation-site-internet-medecin', locale)

// ❌ WRONG
url: `https://www.sidikoff.com/fr/services/...`
url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/...` // env var may be undefined at build
```

### 7. OG image — single canonical path

One image exists on disk. Always use it.

```ts
// ✅ CORRECT
images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: pageTitle }]

// ❌ WRONG — these paths do not exist
images: ['/images/og/creation-site-barbershop.jpg']
images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/...`]
```

### 8. `twitter.creator` — always required

```ts
twitter: {
  card: 'summary_large_image',
  title: pageTitle,
  description: pageDescription,
  creator: '@sidikoffdigital', // ← mandatory
  images: ['/images/opengraph-fr.png'],
}
```

### 9. `alternates` — canonical + languages

```ts
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'

alternates: {
  canonical: createCanonicalUrl('services/your-page-slug', locale),
  languages: generateAlternateUrls('services/your-page-slug'),
}
```

`createCanonicalUrl` produces the clean URL without locale prefix. `generateAlternateUrls` builds `{ fr: '...', 'x-default': '...' }`.

### 10. JSON-LD `@id` — page-specific URI fragment

```ts
import { DEFAULT_SEO } from '@/lib/seo-utils'

// ✅ CORRECT — fragment anchored to this page's URL
'@id': `${DEFAULT_SEO.siteUrl}/services/creation-site-web-villeurbanne#LocalBusiness`

// ❌ WRONG — anchored to site root (schema validator error)
'@id': `${DEFAULT_SEO.siteUrl}#LocalBusiness-villeurbanne`
```

### 11. ISR / Revalidation for data-driven pages

Pages that fetch from Sanity should declare revalidation:

```ts
export const revalidate = 3600 // 1 hour — use for blog, project listings, etc.
```

Static service/landing pages do **not** need `revalidate` (fully static).

---

## Complete Page Template

Use this as the starting point for any new service or location landing page:

```tsx
import { Metadata } from 'next'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import YourLandingContent from '@/components/YourLandingContent'

const PAGE_SLUG = 'services/your-page-slug' // no leading slash

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Your Page Title' // NO '| SIDIKOFF DIGITAL' suffix
  const pageDescription = 'Your page description.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: ['keyword 1', 'keyword 2'],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'fr_FR', // hardcoded — never use locale variable
      siteName: 'SIDIKOFF DIGITAL', // exact caps
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function YourPage() {
  const locale = defaultLocale

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    url: `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}`,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Villeurbanne',
      postalCode: '69100',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    areaServed: { '@type': 'Country', name: 'France' },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YourLandingContent locale={locale} />
    </>
  )
}
```

## JSON-LD Schema Template (LocalBusiness)

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`, // page-specific @id
  name: 'SIDIKOFF DIGITAL',
  description: pageDescription,
  url: `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}`,
  telephone: '+33626932734',
  email: 's.sidikoff@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '69100 Villeurbanne',
    addressLocality: 'Villeurbanne',
    addressRegion: 'Auvergne-Rhône-Alpes',
    postalCode: '69100',
    addressCountry: 'FR',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  inLanguage: 'fr-FR',
}
```

## Available SEO Helper Functions (`@/lib/seo-utils`)

| Function | Use |
| --- | --- |
| `createCanonicalUrl(path, locale)` | Canonical URL without locale prefix |
| `generateAlternateUrls(path)` | `{ fr: '...', 'x-default': '...' }` object |
| `generatePageMetadata(title, desc, path, locale, opts)` | Convenience wrapper for service pages |
| `generateLocalBusinessSchema(location)` | JSON-LD LocalBusiness schema |
| `generateBreadcrumbStructuredData(items)` | JSON-LD BreadcrumbList |
| `generateFAQStructuredData(faqs)` | JSON-LD FAQPage |
| `generateArticleStructuredData(article)` | JSON-LD Article |
| `DEFAULT_SEO` | Central constants: `siteUrl`, `siteName`, `twitterHandle`, `keywords` |

## Pre-Commit SEO Validation

Before committing a new page, verify:

- [ ] No `generateStaticParams` (not needed — `(main)` group, no `[locale]` segment)
- [ ] `title` has no `| SIDIKOFF DIGITAL` or `– SIDIKOFF DIGITAL` suffix
- [ ] `openGraph.locale` is `'fr_FR'` (hardcoded, not a variable)
- [ ] `openGraph.siteName` is `'SIDIKOFF DIGITAL'` (exact)
- [ ] `openGraph.url` has no `/fr/` prefix (use `createCanonicalUrl`)
- [ ] OG image path is `/images/opengraph-fr.png`
- [ ] `twitter.creator` is `'@sidikoffdigital'`
- [ ] `alternates.canonical` set via `createCanonicalUrl`
- [ ] JSON-LD `@id` ends with `#LocalBusiness` anchored to the page URL (not site root)
- [ ] `pnpm type-check` passes with 0 errors
- [ ] `pnpm build` shows page as `○ (Static)`, not `ƒ (Dynamic)`

## Development Notes

- **TypeScript**: Strict mode with `tsconfig.json`
- **ESLint**: Ignores during builds (`ignoreDuringBuilds: true`)
- **Performance**: Turbopack for dev, component-level code splitting
- **Deployment**: Vercel-optimized with analytics integration
- **French only**: Do not add `en` or `ru` content — the site is FR-only

When adding new industries, follow the established pattern: Component + Route page (no dictionary JSON needed for self-contained landing pages).
