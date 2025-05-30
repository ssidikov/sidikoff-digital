import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { TariffProvider } from '@/context/TariffContext'
import ClientLayout from '@/components/ClientLayout'
import StructuredData from '@/components/StructuredData'
import BrandStructuredData from '@/components/BrandStructuredData'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import Script from 'next/script'
import { Suspense } from 'react'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = generateSEOMetadata({
  title: 'SIDIKOFF DIGITAL - Agence Web Premium à Paris | Sardorbek SIDIKOV',
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
    fr: 'https://www.sidikoff.com/',
    en: 'https://www.sidikoff.com',
    ru: 'https://www.sidikoff.com',
  },
  ogImage: 'https://www.sidikoff.com/images/contact.png',
  canonical: 'https://www.sidikoff.com/',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' dir='ltr' suppressHydrationWarning>      <head>
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//www.googletagmanager.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        {/* Favicon and app icons */}
        <link rel='icon' href='/favicon.svg' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        {/* Meta tags for SEO and branding */}
        <meta name='author' content='SIDIKOFF DIGITAL' />
        <meta name='generator' content='Next.js' />
        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />
        <meta name='application-name' content='SIDIKOFF DIGITAL' />
        <meta name='apple-mobile-web-app-title' content='SIDIKOFF DIGITAL' />
        <meta name='msapplication-tooltip' content='SIDIKOFF DIGITAL - Agence Web Paris' />
        <meta name='msapplication-starturl' content='https://www.sidikoff.com/' />
        <meta name='msapplication-navbutton-color' content='#4f46e5' />
        <meta name='contact' content='contact@sidikoff.com' />
        <meta name='copyright' content='SIDIKOFF DIGITAL' />
        <meta name='og:site_name' content='SIDIKOFF DIGITAL' />
        <meta name='twitter:site' content='@sidikoffdigital' />
        <meta name='twitter:creator' content='@sidikoffdigital' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name='google-site-verification' content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {/* Geolocation meta */}
        <meta name='geo.region' content='FR-75' />
        <meta name='geo.placename' content='Paris' />
        <meta name='geo.position' content='48.8566;2.3522' />
        {/* Performance hints */}
        <link rel='dns-prefetch' href='//vercel.com' />
        <link rel='preload' href='/logo.svg' as='image' type='image/svg+xml' />
        {/* Google Analytics */}
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-KFKPR6DVQ1'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KFKPR6DVQ1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id='gtm-script' strategy='afterInteractive'>
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
        {/* Structured Data */}
        <Suspense fallback={null}>
          <StructuredData type='all' />
          <BrandStructuredData />
        </Suspense>
        {/* Additional Schema for better site name recognition */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SIDIKOFF DIGITAL',
              alternateName: 'SIDIKOFF DIGITAL - Agence Web Paris',
              url: 'https://www.sidikoff.com',
              sameAs: [
                'https://linkedin.com/company/sidikoff-digital',
                'https://twitter.com/sidikoffdigital',
              ],
              publisher: {
                '@type': 'Organization',
                '@id': 'https://www.sidikoff.com/#organization',
                name: 'SIDIKOFF DIGITAL',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM noscript */}
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
