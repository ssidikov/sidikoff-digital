import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import DoctorLandingContent from '@/components/DoctorLandingContent'

const t = common.doctor_landing
const PAGE_URL = createCanonicalUrl('services/creation-site-internet-medecin', 'fr')

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      url: PAGE_URL,
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-medecin'),
    },
    robots: { index: true, follow: true },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet pour Médecins et Professionnels de Santé',
  description:
    'Sites web professionnels pour médecins et professionnels de santé : prise de rendez-vous en ligne, design rassurant, conformité RGPD et HDS. SEO local inclus. Devis gratuit.',
  url: PAGE_URL,
  serviceType: 'Création de site internet médical',
  areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
  image: 'https://www.sidikoff.com/images/opengraph-fr.png',
})

export default function DoctorLandingPage() {
  const faqSchema = generateFAQStructuredData(
    t.faq.questions.map((q: any) => ({
      question: q.question,
      answer: q.answer
    }))
  )

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DoctorLandingContent />
    </>
  )
}
