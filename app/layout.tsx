import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { TariffProvider } from '@/context/TariffContext'
import { EcoProvider } from '@/context/EcoContext'
import ClientLayout from '@/components/ClientLayout'
import StructuredData from '@/components/StructuredData'
import BrandStructuredData from '@/components/BrandStructuredData'
import DynamicManifest from '@/components/DynamicManifest'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import Script from 'next/script'

// Critical CSS for LCP optimization - inlined directly
const criticalCSS = `
/* Critical CSS for above-the-fold content */
.hero-title {
  font-size: clamp(1.875rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #111827;
}

@media (prefers-color-scheme: dark) {
  .hero-title {
    color: #ffffff;
  }
}

.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Eco-friendly optimizations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .loading-skeleton {
    animation: none;
    background: #f0f0f0;
  }
}

/* Energy-saving dark mode optimizations */
@media (prefers-color-scheme: dark) {
  * {
    color-scheme: dark;
  }
}

/* Eco mode specific styles */
[data-eco-mode="true"] {
  /* Reduce visual complexity in eco mode */
}

[data-eco-mode="true"] .group:hover {
  /* Disable hover effects in eco mode */
  transform: none !important;
}

[data-eco-mode="true"] * {
  /* Simplify animations in eco mode */
  animation-duration: 0.1s !important;
  transition-duration: 0.1s !important;
}
`

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sidikoff.com'),
  ...generateSEOMetadata({
    title: 'Agence Web - SIDIKOFF DIGITAL',
    description:
      'SIDIKOFF DIGITAL, agence web fondée par Sardorbek SIDIKOV. Création de sites internet sur mesure, applications React/Next.js, stratégie SEO et transformation digitale à Paris.',
    keywords: [
      'SIDIKOFF DIGITAL',
      'Sardorbek SIDIKOV',
      'agence web paris premium',
      'création site internet paris',
      'développement web paris',
      'agence digitale parisienne',
      'site web responsive paris',
      'UX UI design paris',
      'référencement SEO paris',
      'application web react',
      'e-commerce paris',
      'développeur react paris',
      'next.js agence paris',
      'typescript développement',
      'transformation digitale paris',
    ],
    locale: 'fr-FR',
    alternateLanguages: {
      fr: 'https://www.sidikoff.com/fr',
      en: 'https://www.sidikoff.com/en',
      ru: 'https://www.sidikoff.com/ru',
    },
    canonical: 'https://www.sidikoff.com/',
  }),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' dir='ltr' suppressHydrationWarning>
      <head>
        {/* Critical CSS for LCP optimization */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Additional SEO Meta Tags - Non-duplicated */}
        <meta name="language" content="French" />
        <meta name="revisit-after" content="7 days" />
        <meta name="classification" content="Business" />
        <meta name="category" content="Web Development, Web Design, SEO" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Preload critical resources */}
        <link rel='preload' href='/logo-sidikoff.svg' as='image' />
        <link rel='preload' href='/favicon.svg' as='image' />

        {/* Prefetch & Preconnect */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        
        {/* Icons - Manifest handled dynamically */}
        <link rel='icon' href='/favicon.svg' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        
        {/* Additional Meta Tags - Non-duplicated */}
        <meta name='contact' content='s.sidikoff@gmail.com' />
        <meta name='geo.region' content='FR-75' />
        <meta name='geo.placename' content='Paris' />
        <meta name='geo.position' content='48.8566;2.3522' />
        {/* Google Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta
            name='google-site-verification'
            content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
          />
        )}
        {/* Google Analytics - Optimized for performance */}
        <Script
          strategy='lazyOnload'
          src='https://www.googletagmanager.com/gtag/js?id=G-KFKPR6DVQ1'
        />
        <Script id='gtag-init' strategy='lazyOnload'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KFKPR6DVQ1', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `}
        </Script>
        {/* Google Tag Manager - Optimized for performance */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id='gtm-script' strategy='lazyOnload'>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src=\`https://www.googletagmanager.com/gtm.js?id=\${i}\`+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
        {/* LD+JSON schema.org */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://www.sidikoff.com/#website',
              name: 'SIDIKOFF DIGITAL',
              alternateName: 'SIDIKOFF DIGITAL - Agence Web',
              url: 'https://www.sidikoff.com',
              description: 'SIDIKOFF DIGITAL, agence web fondée par Sardorbek SIDIKOV. Création de sites internet sur mesure, applications React/Next.js, stratégie SEO et transformation digitale à Paris.',
              inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.sidikoff.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://linkedin.com/company/sidikoff-digital',
                'https://twitter.com/sidikoffdigital',
              ],
              publisher: {
                '@type': 'Organization',
                '@id': 'https://www.sidikoff.com/#organization',
                name: 'SIDIKOFF DIGITAL',
                url: 'https://www.sidikoff.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.sidikoff.com/logo-sidikoff.svg',
                  width: 600,
                  height: 60,
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+33-6-26-93-27-34',
                  contactType: 'customer service',
                  areaServed: 'FR',
                  availableLanguage: ['French', 'English', 'Russian'],
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Paris',
                  addressCountry: 'FR',
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM NoScript fallback */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <DynamicManifest />
          <EcoProvider>
            <LanguageProvider>
              <TariffProvider>
                <ClientLayout>{children}</ClientLayout>
                {/* Schema components — moved out of <head> */}
                <StructuredData type='all' />
                <BrandStructuredData />
              </TariffProvider>
            </LanguageProvider>
          </EcoProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
