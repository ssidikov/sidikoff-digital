import type { Metadata } from 'next'
import '@/polyfills/globals' // Import server polyfills first
import '@/lib/globals'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { TariffProvider } from '@/context/TariffContext'
import ClientLayout from '@/components/ClientLayout'
import { generatePageMetadata, generateOrganizationSchema } from '@/lib/enhanced-seo'
import Script from 'next/script'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import FontOptimizer from '@/components/FontOptimizer'
import ResourcePreloader from '@/components/ResourcePreloader'

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sidikoff.com'),
  ...generatePageMetadata('home', 'fr'),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang='fr' dir='ltr' suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <meta name='category' content='Web Development, Web Design, SEO' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />

        {/* SEO enhancement: Business info and trust signals */}
        <meta name='author' content='Sardorbek SIDIKOV' />
        <meta name='publisher' content='SIDIKOFF DIGITAL' />

        {/* Hreflang tags for multilingual SEO */}
        <link rel='alternate' hrefLang='fr' href='https://sidikoff.com/' />
        <link rel='alternate' hrefLang='en' href='https://sidikoff.com/en' />
        <link rel='alternate' hrefLang='ru' href='https://sidikoff.com/ru' />
        <link rel='alternate' hrefLang='x-default' href='https://sidikoff.com/' />

        {/* Robots & indexing */}
        <meta
          name='robots'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />

        {/* Preload critical resources */}
        <link rel='preload' href='/logo-sidikoff.svg' as='image' />
        <link rel='preload' href='/favicon.svg' as='image' />
        <link rel='preload' href='/opengraph-image.jpg' as='image' type='image/jpeg' />

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
              description:
                'SIDIKOFF DIGITAL, agence web fondée par Sardorbek SIDIKOV. Création de sites internet sur mesure, applications React/Next.js, stratégie SEO et transformation digitale à Paris.',
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
          <PerformanceMonitor showDebugInfo={process.env.NODE_ENV === 'development'} />
          <FontOptimizer />
          <ResourcePreloader />
          <LanguageProvider>
            <TariffProvider>
              <ClientLayout>{children}</ClientLayout>
            </TariffProvider>
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
