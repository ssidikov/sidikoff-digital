import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'SIDIKOFF DIGITAL - Agence Web Premium | Sardorbek SIDIKOV',
  description:
    "SIDIKOFF DIGITAL, l'agence web fondée par Sardorbek SIDIKOV à Paris. Expert en création de sites internet, applications React/Next.js et stratégie digitale.",
  keywords: [
    'SIDIKOFF DIGITAL',
    'Sardorbek SIDIKOV',
    'agence web paris',
    'création site internet',
    'développement web',
    'expert React',
    'Next.js développeur',
    'agence digitale parisienne',
  ],
  openGraph: {
    title: 'SIDIKOFF DIGITAL - Agence Web Premium | Sardorbek SIDIKOV',
    description: "SIDIKOFF DIGITAL, l'agence web fondée par Sardorbek SIDIKOV à Paris.",
    url: 'https://www.sidikoff.com/brand/sidikoff-digital',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.sidikoff.com/',
  },
  robots: {
    index: false, // No index, just redirect
    follow: false,
  },
}

// This page redirects to homepage to consolidate brand search traffic
export default function BrandPage() {
  redirect('/')
}
