# GitHub Copilot Instructions for SIDIKOFF DIGITAL

## Project Overview

This is a **multi-language Next.js 15 digital agency website** specializing in industry-specific landing pages for web creation services. The project uses the App Router with dynamic locale routing, Sanity CMS for blog content, and Tailwind CSS with Framer Motion for animations.

## Architecture Patterns

### Multi-Language Structure

- **Dynamic locale routing**: `src/app/[locale]/` with French as default (`defaultLocale: 'fr'`)
- **Supported locales**: `fr`, `en`, `ru` defined in `src/lib/i18n.ts`
- **Dictionary system**: JSON files in `locales/{locale}/` with fallback handling in `src/lib/dictionaries.ts`
- **Middleware**: `src/middleware.ts` handles locale detection, redirects, and security headers

### Industry-Specific Landing Pages

The core business model is **niche landing pages** for different industries:

```
src/components/
├── WebCreationLandingContent.tsx     # Main service page
├── TravelAgencyLandingContent.tsx    # Travel agencies
├── RestaurantLandingContent.tsx      # Restaurants
├── BarbershopLandingContent.tsx      # Barbershops
├── DoctorLandingContent.tsx          # Medical practices
└── [Industry]LandingContent.tsx      # Pattern for new industries
```

### Content Management

- **Sanity CMS**: Blog posts only (`sanity/` directory, config in `sanity.config.ts`)
- **Static content**: JSON dictionaries for all landing page content
- **Images**: Optimized with Next.js Image component, stored in `public/images/`

## Development Workflow

### Key Commands

```bash
npm run dev              # Development with Turbopack
npm run dev:mobile       # Mobile testing (0.0.0.0:3000)
npm run build:check      # Full validation (type-check + lint + build)
npm run sanity           # Start Sanity Studio
npm run postbuild        # Auto-generates sitemap
```

### Creating New Industry Landing Pages

1. **Component**: Create `src/components/[Industry]LandingContent.tsx` following the pattern:

   ```tsx
   interface [Industry]LandingContentProps {
     dictionary: Dictionary
     locale: string
   }
   ```

2. **Route**: Add `src/app/[locale]/services/creation-site-internet-[industry]/page.tsx`:

   ```tsx
   import { getDictionary } from '@/lib/dictionaries'
   import [Industry]LandingContent from '@/components/[Industry]LandingContent'

   export async function generateMetadata({ params }: Props): Promise<Metadata> {
     const dict = await getDictionary(params.locale)
     return {
       title: dict.[industry]_landing.meta_title,
       description: dict.[industry]_landing.meta_description,
       // ... SEO metadata
     }
   }
   ```

3. **Content**: Add `[industry]_landing` object to all locale files in `locales/{locale}/`

### Component Patterns

- **Icon mapping**: Use `lucide-react` with icon maps for dynamic icon rendering
- **Motion components**: Import from `src/components/ui/MotionWrapper.tsx` for SSR-safe animations
- **SEO**: Always implement `generateMetadata()` with OpenGraph and Twitter cards
- **Responsive**: Mobile-first Tailwind classes, use `ViewportHeightProvider` for mobile height issues

## Critical Integration Points

### Dictionary System

- Main dictionary loader: `src/lib/dictionaries.ts` with complex fallback logic
- Always add new content to ALL three locales (`fr`, `en`, `ru`)
- Fallback dictionary: `src/lib/fallback-dictionary.ts` prevents crashes

### Middleware Configuration

- Locale detection via `Accept-Language` header and pathname
- Security headers applied to all routes
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
- Canonical URLs with locale alternatives
- Structured data via `generateWebCreationSchema()` for rich snippets
- Native Next.js sitemap generation via `src/app/sitemap.ts`

---

## Technical SEO — Mandatory Checklist for Every New Page

> All patterns below were established and validated across a 5-phase SEO audit.
> Deviating from any of these rules will cause broken OG previews, duplicate brand names, or invalid schema.

### 1. `generateStaticParams` — FR-only, always sync

The site is **French-only**. Never use `locales.map()`. This converts the route from `ƒ` (SSR) to `●` (SSG):

```ts
// ✅ CORRECT — always this exact form
export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

// ❌ WRONG — do not map locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
```

### 2. Page `title` — no brand suffix

The root layout applies the template `'%s | SIDIKOFF DIGITAL'` automatically.
**Never** include `| SIDIKOFF DIGITAL` or `– SIDIKOFF DIGITAL` in the title string itself.

```ts
// ✅ CORRECT
title: 'Création de site internet pour médecins'

// ❌ WRONG — produces "Création de site internet pour médecins | SIDIKOFF DIGITAL | SIDIKOFF DIGITAL"
title: 'Création de site internet pour médecins | SIDIKOFF DIGITAL'
```

### 3. `openGraph.locale` — hardcoded `'fr_FR'`

OG/Facebook requires the `language_TERRITORY` format. The locale route param is `'fr'` (URL format) — never pass it directly.

```ts
// ✅ CORRECT
openGraph: {
  locale: 'fr_FR',
}

// ❌ WRONG
openGraph: {
  locale: locale,       // 'fr' — invalid OG format
  locale: params.locale, // same problem
}
```

### 4. `openGraph.siteName` — exact casing

```ts
// ✅ CORRECT
siteName: 'SIDIKOFF DIGITAL'

// ❌ WRONG
siteName: 'Sidikoff Digital'
siteName: 'SIDIKOFF Digital'
siteName: 'SIDIKOFF DIGITAL - Développeur Web Full Stack'
```

### 5. `openGraph.url` — no locale prefix

The canonical URL is the French URL **without** the `/fr/` segment.

```ts
// ✅ CORRECT
url: 'https://www.sidikoff.com/services/creation-site-internet-medecin'
// or using helper:
url: createCanonicalUrl('services/creation-site-internet-medecin', locale)

// ❌ WRONG
url: `https://www.sidikoff.com/${locale}/services/creation-site-internet-medecin`
url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/...`  // env var may be undefined at build
```

### 6. OG image — single canonical path

One image exists on disk. Always use it.

```ts
// ✅ CORRECT
images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: pageTitle }]

// ❌ WRONG — these paths do not exist
images: ['/images/og/creation-site-barbershop.jpg']
images: ['/images/og-creation-sites-web.jpg']
images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/...`]
```

### 7. `twitter.creator` — always required

```ts
twitter: {
  card: 'summary_large_image',
  title: pageTitle,
  description: pageDescription,
  creator: '@sidikoffdigital',   // ← mandatory
  images: ['/images/opengraph-fr.png'],
}
```

### 8. `alternates` — canonical + languages

```ts
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'

alternates: {
  canonical: createCanonicalUrl('services/your-page-slug', locale),
  languages: generateAlternateUrls('services/your-page-slug'),
}
```

`createCanonicalUrl` drops the locale prefix. `generateAlternateUrls` builds `{ fr: '...', 'x-default': '...' }`.

### 9. JSON-LD `@id` — page-specific URI fragment

```ts
import { DEFAULT_SEO } from '@/lib/seo-utils'

// ✅ CORRECT — fragment anchored to this page's URL
'@id': `${DEFAULT_SEO.siteUrl}/services/creation-site-web-caluire-et-cuire#LocalBusiness`

// ❌ WRONG — anchored to site root (schema validator error)
'@id': `${DEFAULT_SEO.siteUrl}#LocalBusiness-caluire`
```

### 10. ISR / Revalidation for data-driven pages

Pages that fetch from Sanity or other APIs should declare revalidation:

```ts
export const revalidate = 3600 // 1 hour — use for blog, project listings, etc.
```

Static service/landing pages do **not** need `revalidate` (they are fully static).

---

## Complete Page Template

Use this as the starting point for any new service or location landing page:

```tsx
import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls, DEFAULT_SEO } from '@/lib/seo-utils'
import { getDictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import YourLandingContent from '@/components/YourLandingContent'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

const PAGE_SLUG = 'services/your-page-slug' // no leading slash

export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.your_section // adjust to your dictionary key

  return {
    title: t.meta_title,           // NO '| SIDIKOFF DIGITAL' suffix
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',             // hardcoded — never use locale variable
      siteName: 'SIDIKOFF DIGITAL', // exact caps
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: t.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function YourPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return <YourLandingContent dictionary={dict} locale={locale} />
}
```

## JSON-LD Schema Template (LocalBusiness)

When adding structured data for a location or service page:

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`, // page-specific @id
  name: 'SIDIKOFF DIGITAL',
  description: t.meta_description,
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
  // ...additional schema fields
}

// Inject in JSX:
return (
  <>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <YourLandingContent ... />
  </>
)
```

## Available SEO Helper Functions (`@/lib/seo-utils`)

| Function | Use |
|---|---|
| `createCanonicalUrl(path, locale)` | Canonical URL without locale prefix |
| `generateAlternateUrls(path)` | `{ fr: '...', 'x-default': '...' }` object |
| `generateSEOMetadata(config)` | Full Metadata from SEOConfig object |
| `generatePageMetadata(path, locale, config)` | Convenience wrapper for service pages |
| `generateLocalBusinessSchema(location)` | JSON-LD LocalBusiness schema |
| `generateBreadcrumbSchema(items)` | JSON-LD BreadcrumbList |
| `generateFAQStructuredData(faqs)` | JSON-LD FAQPage |
| `generateArticleStructuredData(article)` | JSON-LD Article |
| `DEFAULT_SEO` | Central constants: `siteUrl`, `siteName`, `twitterHandle`, `keywords` |

## Pre-Commit SEO Validation

Before committing a new page, verify:

- [ ] `generateStaticParams` returns `[{ locale: 'fr' }]` (not `locales.map()`)
- [ ] `title` has no `| SIDIKOFF DIGITAL` or `– SIDIKOFF DIGITAL` suffix
- [ ] `openGraph.locale` is `'fr_FR'` (not the `locale` variable)
- [ ] `openGraph.siteName` is `'SIDIKOFF DIGITAL'` (exact)
- [ ] `openGraph.url` has no `/fr/` prefix
- [ ] OG image path is `/images/opengraph-fr.png`
- [ ] `twitter.creator` is `'@sidikoffdigital'`
- [ ] `alternates.canonical` is set via `createCanonicalUrl`
- [ ] JSON-LD `@id` ends with `#LocalBusiness` anchored to the page URL (not root)
- [ ] `pnpm type-check` passes with 0 errors
- [ ] `pnpm build` completes — new page shows as `●` (static), not `ƒ` (dynamic)

## Development Notes

- **TypeScript**: Strict mode with `tsconfig.json`
- **ESLint**: Ignores during builds (`ignoreDuringBuilds: true`)
- **Performance**: Turbopack for dev, component-level code splitting
- **Deployment**: Vercel-optimized with analytics integration

When adding new industries, follow the established pattern of Component + Route + Dictionary content across all three languages.
