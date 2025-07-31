import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Analytics from '@/components/analytics'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'),
  title: 'SIDIKOFF DIGITAL- Agence Web & Développement',
  description:
    'Agence web spécialisée dans la création de sites internet, applications web et mobiles. Expertise en React, Next.js, et développement sur mesure.',
  keywords: [
    'agence web',
    'développement web', 
    'création site internet',
    'React',
    'Next.js',
    'applications mobiles',
    'SEO',
    'optimisation web',
    'développeur fullstack'
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
    title: 'SIDIKOFF DIGITAL- Agence Web & Développement',
    description:
      'Agence web spécialisée dans la création de sites internet, applications web et mobiles.',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'SIDIKOFF DIGITAL - Agence Web & Développement'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sidikoff',
    creator: '@sidikoff',
    title: 'SIDIKOFF DIGITAL- Agence Web & Développement',
    description:
      'Agence web spécialisée dans la création de sites internet, applications web et mobiles.',
    images: ['/images/og-homepage.jpg']
  },
  alternates: {
    canonical: 'https://sidikoff.com',
    languages: {
      'fr': 'https://sidikoff.com/fr',
      'en': 'https://sidikoff.com/en', 
      'ru': 'https://sidikoff.com/ru',
      'x-default': 'https://sidikoff.com/fr'
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.svg' />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
