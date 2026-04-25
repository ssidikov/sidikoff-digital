import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import { Metadata } from 'next'

import ParisLandingContent from '@/components/ParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-paris', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Création Site Internet Paris | Agence Web Île-de-France'

  const description =
    'Agence web Paris & développeur web Île-de-France : sites vitrines dès 690 €, livrés en 7–14 jours. React & Next.js, SEO local Paris, Lighthouse 95+. Devis gratuit sous 24h pour votre projet.'

  return {
    title,
    description,
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
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-paris'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: PAGE_URL,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: '/images/og/creation-sites-web-paris.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/og/creation-sites-web-paris.jpg'],
    },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet à Paris',
  description:
    'Agence web Paris spécialisée en création de sites vitrines et e-commerce. Next.js, React, SEO local optimisé. Livraison en 7–14 jours, devis gratuit sous 24h.',
  url: PAGE_URL,
  serviceType: 'Création de site internet Paris',
  areaServed: [
    'Paris 1er',
    'Paris 6ème',
    'Paris 8ème',
    'Paris 15ème',
    'Paris 16ème',
    'Paris 17ème',
    'Paris 19ème',
    'Boulogne-Billancourt',
    'Neuilly-sur-Seine',
    'Île-de-France',
    'France',
  ],
  image: 'https://www.sidikoff.com/images/og/creation-sites-web-paris.jpg',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte la création d'un site internet à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un site vitrine professionnel à Paris démarre à 690€ TTC, livré en 5 jours ouvrés. Un site multi-pages complet est proposé à partir de 1 290€ — idéal pour les PME, restaurants et professions libérales parisiennes souhaitant un bon référencement local. Un site e-commerce ou application sur mesure est disponible à partir de 1 990€. Tous nos tarifs incluent le SEO de base, le design responsive et la mise en ligne. Devis gratuit personnalisé sous 24h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle agence web choisir à Paris pour la création de mon site internet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour choisir votre agence web à Paris, privilégiez un prestataire maîtrisant les technologies modernes (React, Next.js), proposant un SEO local Paris intégré dès la création, et livrant dans des délais maîtrisés (7 à 14 jours pour un site vitrine). Sidikoff Digital intervient dans tout Paris et en Île-de-France avec un accompagnement personnalisé, des tarifs transparents et une garantie Lighthouse > 95.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mon site Paris sera-t-il référencé sur Google Maps et dans le pack local ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Nous configurons votre fiche Google Business Profile, optimisons vos contenus pour les requêtes géolocalisées (ex. 'création site internet Paris 8', 'agence web Île-de-France') et structurons vos données avec Schema.org pour améliorer votre présence dans le pack local de Google Maps. Le référencement SEO local Paris est inclus dans tous nos projets web.",
      },
    },
  ],
}

export default async function ParisPage() {
  return (
    <div className='min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ParisLandingContent />
    </div>
  )
}
