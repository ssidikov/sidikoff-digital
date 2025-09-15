import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Analytics from '@/components/analytics'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// SEO Configuration
const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com',
  name: 'SIDIKOFF DIGITAL',
  title: 'Création de sites web | SIDIKOFF DIGITAL - Agence Web | Développement Web Paris, Lyon, Toulouse, Strasbourg',
  description: 'Agence web spécialisée dans la création de sites internet modernes et applications web. Services professionnels à Paris, Lyon, Toulouse, Strasbourg et toute la France. Expertise React, Next.js, SEO et développement sur mesure.',
  keywords: [
    'agence web france',
    'développement web',
    'création site internet',
    'agence web paris',
    'agence web lyon',
    'agence web toulouse',
    'agence web strasbourg',
    'développeur web france',
    'React',
    'Next.js',
    'applications web',
    'SEO france',
    'optimisation web',
    'développeur fullstack',
    'sites web professionnels',
    'développement sur mesure',
    'agence digitale france',
    'création site web paris',
    'développeur freelance france',
  ],
  image: '/images/og-homepage.jpg',
  twitter: '@sidikoff',
} as const

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: 'Sidikoff', url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: 'technology',
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
    'theme-color': '#112D4E',
    'msapplication-TileColor': '#112D4E',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ru_RU'],
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: 'SIDIKOFF DIGITAL - Agence Web France | Développement Paris, Lyon, Toulouse, Strasbourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
    title: 'SIDIKOFF DIGITAL - Agence Web France | Paris, Lyon, Toulouse, Strasbourg',
    description:
      'Agence web française : création sites internet modernes, applications web. Services à Paris, Lyon, Toulouse, Strasbourg. React, Next.js, SEO.',
    images: [SITE_CONFIG.image],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'fr-FR': `${SITE_CONFIG.url}/`,
      fr: `${SITE_CONFIG.url}/`,
      'en-US': `${SITE_CONFIG.url}/en`,
      en: `${SITE_CONFIG.url}/en`,
      'ru-RU': `${SITE_CONFIG.url}/ru`,
      ru: `${SITE_CONFIG.url}/ru`,
      'x-default': `${SITE_CONFIG.url}/`,
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://cdn.sanity.io' />
        <link rel='dns-prefetch' href='https://vitals.vercel-insights.com' />

        {/* Favicon configuration */}
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.svg' />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
