import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const content = common.agence_web_paris_landing

  const url = createCanonicalUrl('services/agence-web-paris', 'fr')

  return {
    title: 'Agence Web Paris - Création de Sites Internet Sur Mesure',
    description: 'Votre agence web à Paris experte en création de sites internet, vitrine et e-commerce. Next.js, SEO local, design premium. Devis gratuit sous 24h.',
    keywords: [
      'agence web paris',
      'agence web ile de france',
      'agence communication paris',
      'agence digitale paris',
      'agence web wordpress paris',
      'creation site web paris',
      'next.js paris',
      'react paris',
      'développement web paris',
    ],
    authors: [{ name: 'SIDIKOFF DIGITAL' }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',
    alternates: {
      canonical: createCanonicalUrl('services/agence-web-paris', 'fr'),
      languages: generateAlternateUrls('services/agence-web-paris'),
    },
    openGraph: {
      title: 'Agence Web Paris - Création de Sites Internet Sur Mesure',
      description: 'Votre agence web à Paris experte en création de sites internet, vitrine et e-commerce. Next.js, SEO local, design premium. Devis gratuit sous 24h.',
      url: url,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: content.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agence Web Paris - Création de Sites Internet Sur Mesure',
      description: 'Votre agence web à Paris experte en création de sites internet, vitrine et e-commerce. Next.js, SEO local, design premium. Devis gratuit sous 24h.',
      images: ['/images/opengraph-fr.png'],
      creator: '@sidikoffdigital',
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
    category: 'technology',
  }
}

import { generateFAQStructuredData, generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'

export default function AgenceWebParisLandingPage() {
  const pageUrl = createCanonicalUrl('services/agence-web-paris', 'fr')

  const faqSchema = generateFAQStructuredData([
    {
      question: 'Combien coûte un site internet à Paris ?',
      answer: 'Le tarif dépend de vos besoins. Un site vitrine de base commence généralement à partir de 690€, tandis qu\'un site e-commerce plus complexe ou un site sur mesure peut démarrer autour de 1500€. Nous fournissons un devis détaillé après un premier appel.',
    },
    {
      question: 'Combien de temps faut-il pour créer un site internet ?',
      answer: 'En moyenne, la création d\'un site internet professionnel prend entre 7 et 14 jours pour un site vitrine, et de 4 à 8 semaines pour un site e-commerce ou sur mesure.',
    },
    {
      question: 'Votre agence web propose-t-elle l\'optimisation SEO ?',
      answer: 'Oui, tous nos sites sont optimisés pour le référencement naturel (SEO) dès leur conception (structure technique, balises meta, vitesse de chargement) pour vous aider à être visible sur Google à Paris et ailleurs.',
    },
    {
      question: 'Puis-je gérer mon site moi-même après sa mise en ligne ?',
      answer: 'Absolument ! Nous utilisons des systèmes de gestion de contenu (CMS) ou des back-offices intuitifs qui vous permettent de modifier vos textes, images et articles de blog facilement et sans compétences techniques.',
    }
  ])

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Paris', url: pageUrl },
  ])

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/services/agence-web-paris#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL - Agence Web Paris',
    alternateName: 'Agence web Paris',
    description: 'Création et redesign de sites internet sur mesure pour les entreprises à Paris.',
    url: pageUrl,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'AdministrativeArea', name: 'Île-de-France' }
    ],
    serviceType: [
      'Création de site web',
      'Site vitrine',
      'Site e-commerce',
      'Redesign web',
      'SEO local',
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AgenceWebParisLandingContent />
    </>
  )
}
