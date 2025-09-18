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

## Development Notes

- **TypeScript**: Strict mode with `tsconfig.json`
- **ESLint**: Ignores during builds (`ignoreDuringBuilds: true`)
- **Performance**: Turbopack for dev, component-level code splitting
- **Deployment**: Vercel-optimized with analytics integration

When adding new industries, follow the established pattern of Component + Route + Dictionary content across all three languages.
