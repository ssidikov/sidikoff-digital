import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Analytics from '@/components/analytics'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'),
  title:
    'Création de sites web | SIDIKOFF DIGITAL - Agence Web | Développement Web Paris, Lyon, Toulouse, Strasbourg',
  description:
    'Agence web spécialisée dans la création de sites internet modernes et applications web. Services professionnels à Paris, Lyon, Toulouse, Strasbourg et toute la France. Expertise React, Next.js, SEO et développement sur mesure.',
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
  authors: [{ name: 'Sidikoff', url: 'https://sidikoff.com' }],
  creator: 'SIDIKOFF DIGITAL',
  publisher: 'SIDIKOFF DIGITAL',
  category: 'technology',
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
    url: 'https://sidikoff.com',
    siteName: 'SIDIKOFF DIGITAL',
    title:
      'Création de sites web | SIDIKOFF DIGITAL - Agence Web | Développement Web Paris, Lyon, Toulouse, Strasbourg',
    description:
      'Agence web spécialisée dans la création de sites internet modernes et applications web. Services professionnels à Paris, Lyon, Toulouse, Strasbourg et toute la France. Expertise React, Next.js, SEO et développement sur mesure.',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'SIDIKOFF DIGITAL - Agence Web France | Développement Paris, Lyon, Toulouse, Strasbourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sidikoff',
    creator: '@sidikoff',
    title: 'SIDIKOFF DIGITAL - Agence Web France | Paris, Lyon, Toulouse, Strasbourg',
    description:
      'Agence web française : création sites internet modernes, applications web. Services à Paris, Lyon, Toulouse, Strasbourg. React, Next.js, SEO.',
    images: ['/images/og-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://sidikoff.com',
    languages: {
      'fr-FR': 'https://sidikoff.com/',
      fr: 'https://sidikoff.com/',
      'en-US': 'https://sidikoff.com/en',
      en: 'https://sidikoff.com/en',
      'ru-RU': 'https://sidikoff.com/ru',
      ru: 'https://sidikoff.com/ru',
      'x-default': 'https://sidikoff.com/',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://cdn.sanity.io' />
        <link rel='dns-prefetch' href='https://vitals.vercel-insights.com' />

        {/* Favicon with proper sizes */}
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
