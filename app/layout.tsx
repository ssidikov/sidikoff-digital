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
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = generateSEOMetadata({
  title: 'SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites & Apps',
  description:
    'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
  keywords: [
    'agence web paris',
    'création site internet',
    'développement web',
    'agence digitale paris',
    'site web responsive',
    'UX UI design',
    'référencement SEO',
    'application web',
    'e-commerce',
    'développeur paris',
    'react développeur',
    'next.js agence',
    'typescript développement',
    'agence web française',
    'site internet professionnel',
  ],
  locale: 'fr-FR',
  alternateLanguages: {
    fr: 'https://sidikoff.com/',
    en: 'https://sidikoff.com/en',
    ru: 'https://sidikoff.com/ru',
  },
  ogImage: 'https://sidikoff.com/images/contact.png',
  canonical: 'https://sidikoff.com/',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//www.googletagmanager.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Favicon and app icons */}
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />

        {/* Additional meta tags for better SEO */}
        <meta name='author' content='SIDIKOFF DIGITAL' />
        <meta name='generator' content='Next.js' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='revisit-after' content='7 days' />
        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />

        {/* Language and region meta tags */}
        <meta name='geo.region' content='FR-75' />
        <meta name='geo.placename' content='Paris' />
        <meta name='geo.position' content='48.8566;2.3522' />
        <meta name='ICBM' content='48.8566, 2.3522' />

        {/* Business information */}
        <meta name='contact' content='contact@sidikoff.com' />
        <meta name='copyright' content='SIDIKOFF DIGITAL' />

        {/* Performance hints */}
        <link rel='dns-prefetch' href='//vercel.com' />
        <link rel='preload' href='/logo.svg' as='image' type='image/svg+xml' />
        <Script
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-KFKPR6DVQ1'
        />
        {/* Google Analytics */}
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

        {/* GTM script */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id='gtm-script' strategy='afterInteractive'>
            {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}'+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
    `}
          </Script>
        )}

        {/* Structured Data */}
        <StructuredData type='all' />
      </head>
      <body className={inter.className}>
        {/* GTM noscript */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
        )}{' '}
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
