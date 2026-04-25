import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import BlogIndexContent from '@/components/BlogIndexContent'

const PAGE_URL = createCanonicalUrl('blog', 'fr')

export function generateMetadata(): Metadata {
  const title = 'Blog Sidikoff Digital | Expertises Web, SEO & Stratégie'
  const description = 'Découvrez nos articles sur la création de site internet, le référencement naturel (SEO) et les tendances technologiques (Next.js, React, WordPress).'
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('blog'),
    },
    robots: { index: true, follow: true },
  }
}

export default function BlogIndexPage() {
  return <BlogIndexContent />
}
