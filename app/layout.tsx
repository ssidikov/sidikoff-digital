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
import DynamicManifest from '@/components/DynamicManifest'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import Script from 'next/script'

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
        {/* Prefetch & Preconnect */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        {/* Icons - Manifest handled dynamically */}
        <link rel='icon' href='/favicon.svg' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        {/* Meta */}
        <meta name='author' content='SIDIKOFF DIGITAL' />
        <meta name='generator' content='Next.js' />
        <meta name='application-name' content='SIDIKOFF DIGITAL' />
        <meta name='apple-mobile-web-app-title' content='SIDIKOFF DIGITAL' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='msapplication-navbutton-color' content='#4f46e5' />
        <meta name='contact' content='s.sidikoff@gmail.com' />
        <meta name='copyright' content='SIDIKOFF DIGITAL' />
        <meta name='og:site_name' content='SIDIKOFF DIGITAL' />
        <meta name='twitter:site' content='@sidikoffdigital' />
        <meta name='twitter:creator' content='@sidikoffdigital' />
        <meta name='geo.region' content='FR-75' />
        <meta name='geo.placename' content='Paris' />
        <meta name='geo.position' content='48.8566;2.3522' />
        {/* Explicit Open Graph Tags for better social media sharing */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='SIDIKOFF DIGITAL' />
        <meta property='og:locale' content='fr_FR' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='SIDIKOFF DIGITAL - Agence Web Parisienne' />
        {/* Twitter Card specific tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:domain' content='sidikoff.com' />
        <meta name='twitter:url' content='https://www.sidikoff.com' />
        {/* SEO titles */}
        <meta property='og:title' content='Agence Web - SIDIKOFF DIGITAL' />
        <meta name='twitter:title' content='SIDIKOFF DIGITAL | Agence Web' />
        {/* Google Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta
            name='google-site-verification'
            content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
          />
        )}
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
        {/* LD+JSON schema.org */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SIDIKOFF DIGITAL',
              alternateName: 'SIDIKOFF DIGITAL - Agence Web',
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
          <LanguageProvider>
            <TariffProvider>
              <ClientLayout>{children}</ClientLayout>
              {/* Schema components — moved out of <head> */}
              <StructuredData type='all' />
              <BrandStructuredData />
            </TariffProvider>
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
