import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'À propos - SIDIKOFF DIGITAL | Sardorbek SIDIKOV, Fondateur',
  description:
    'Découvrez SIDIKOFF DIGITAL et son fondateur Sardorbek SIDIKOV. Agence web parisienne spécialisée en création de sites internet, React, Next.js et stratégie digitale.',
  keywords: [
    'SIDIKOFF DIGITAL',
    'Sardorbek SIDIKOV',
    'à propos agence web',
    'fondateur SIDIKOFF',
    'développeur web Paris',
    'expert React Next.js',
    'agence web française',
    'histoire SIDIKOFF DIGITAL',
    'équipe développement web',
    'expertise technique Paris',
  ],
  openGraph: {
    title: 'À propos - SIDIKOFF DIGITAL | Sardorbek SIDIKOV',
    description:
      'Découvrez SIDIKOFF DIGITAL et son fondateur Sardorbek SIDIKOV, expert en développement web à Paris.',
    url: 'https://www.sidikoff.com/about',
    type: 'website',
    images: ['/images/contact.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos - SIDIKOFF DIGITAL | Sardorbek SIDIKOV',
    description:
      'Découvrez SIDIKOFF DIGITAL et son fondateur Sardorbek SIDIKOV, expert en développement web à Paris.',
    images: ['/images/contact.png'],
  },
  alternates: {
    canonical: 'https://www.sidikoff.com/about',
    languages: {
      fr: 'https://www.sidikoff.com/fr/about',
      en: 'https://www.sidikoff.com/en/about',
      ru: 'https://www.sidikoff.com/ru/about',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <Breadcrumbs />
      <main className='pt-20'>
        <About />
      </main>
      <Footer />
    </div>
  )
}
