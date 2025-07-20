'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { Thing } from 'schema-dts'
import { SupportedLocale, localeToHreflang } from '@/lib/enhanced-seo'

interface SEOHeadProps {
  title: string
  description: string
  canonical: string
  locale: SupportedLocale
  structuredData?: Thing[]
  image?: string
  keywords?: string[]
}

export default function SEOHead({
  title,
  description,
  canonical,
  locale,
  structuredData = [],
  image = '/opengraph-image.jpg',
  keywords = []
}: SEOHeadProps) {
  const pathname = usePathname()

  // Generate dynamic hreflang links based on current path
  const generateHreflangLinks = () => {
    const cleanPath = pathname.replace(/^\/(en|ru)/, '') || '/'
    
    return [
      { hreflang: 'fr', href: `https://sidikoff.com${cleanPath}` },
      { hreflang: 'en', href: `https://sidikoff.com/en${cleanPath}` },
      { hreflang: 'ru', href: `https://sidikoff.com/ru${cleanPath}` },
      { hreflang: 'x-default', href: `https://sidikoff.com${cleanPath}` },
    ]
  }

  const hreflangLinks = generateHreflangLinks()
  const fullImageUrl = image.startsWith('http') ? image : `https://sidikoff.com${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="language" content={localeToHreflang[locale]} />
      <meta name="author" content="Sardorbek SIDIKOV" />
      <meta name="publisher" content="SIDIKOFF DIGITAL" />

      {/* Canonical and Hreflang */}
      <link rel="canonical" href={canonical} />
      {hreflangLinks.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="SIDIKOFF DIGITAL" />
      <meta property="og:locale" content={localeToHreflang[locale]} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sidikoffdigital" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Performance and UX */}
      <meta name="theme-color" content="#4f46e5" />
      <meta name="msapplication-TileColor" content="#4f46e5" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.sanity.io" />

      {/* Structured Data */}
      {structuredData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': structuredData
            })
          }}
        />
      )}

      {/* Additional SEO meta tags */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Business" />
      <meta name="category" content="Web Development, Web Design, SEO" />

      {/* Business info for local SEO */}
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />

      {/* Contact information */}
      <meta name="contact" content="s.sidikoff@gmail.com" />
      <meta name="reply-to" content="s.sidikoff@gmail.com" />
    </Head>
  )
}
