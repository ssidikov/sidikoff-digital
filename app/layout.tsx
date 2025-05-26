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
  ],
  locale: 'fr-FR',
  alternateLanguages: {
    fr: 'https://sidikoff-digital.fr/',
    en: 'https://sidikoff-digital.fr/en',
    ru: 'https://sidikoff-digital.fr/ru',
  },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Favicon and app icons */}
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
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

        {/* Structured Data */}
        <StructuredData type='all' />
      </head>
      <body className={inter.className}>
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
