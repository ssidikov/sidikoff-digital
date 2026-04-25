import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import RefonteSiteVilleurbanneLandingContent from '@/components/RefonteSiteVilleurbanneLandingContent'

const PAGE_URL = createCanonicalUrl('services/refonte-site-villeurbanne', 'fr')

const faqItems = [
  {
    question: 'Combien coûte la refonte d\'un site internet à Villeurbanne ?',
    answer: 'Le budget d\'une refonte dépend de l\'existant : s\'il s\'agit d\'une simple mise à jour graphique ou d\'une refonte technique complète avec migration de données. En général, nos tarifs de refonte démarrent autour de 2 000 € pour un site vitrine standard. Un devis sur-mesure vous sera proposé après l\'audit gratuit.'
  },
  {
    question: 'Vais-je perdre mon référencement sur Google ?',
    answer: 'Non, au contraire ! C\'est notre priorité absolue. Nous réalisons un "plan de redirections 301" méticuleux. Cela indique à Google que vos anciennes pages ont déménagé vers de nouvelles adresses, transférant ainsi toute votre autorité SEO au nouveau site. Une refonte réussie entraîne généralement une hausse du trafic.'
  },
  {
    question: 'Mon site actuel restera-t-il en ligne pendant la refonte ?',
    answer: 'Oui, 100%. Nous développons votre nouveau site sur un serveur caché (environnement de pré-production ou "staging"). Votre ancien site continue de fonctionner normalement. Le basculement ne se fait que le jour du lancement officiel, avec une coupure invisible pour vos visiteurs.'
  },
  {
    question: 'Pouvez-vous refaire un site WordPress, Wix ou Shopify ?',
    answer: 'Absolument. Nous maîtrisons la migration depuis toutes les plateformes du marché (WordPress, Wix, Squarespace, Prestashop...). Nous exportons vos données et les réintégrons dans un système plus performant et adapté à vos nouveaux besoins.'
  },
  {
    question: 'Combien de temps dure une refonte complète ?',
    answer: 'Le délai varie selon le volume de pages à migrer et les validations du design. Pour un site vitrine, comptez en moyenne 4 à 8 semaines. Nous nous engageons sur un planning précis dès la signature du devis.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Refonte Site Web Villeurbanne | Agence Migration & Design'
  const description = 'Agence experte en refonte de site web à Villeurbanne. Modernisez votre design, boostez vos performances (Next.js) et sécurisez votre trafic SEO lors de la migration.'
  
  return {
    title,
    description,
    keywords: 'refonte site web villeurbanne, refonte site internet villeurbanne, agence web villeurbanne, migration seo, moderniser site web lyon',
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
      languages: generateAlternateUrls('services/refonte-site-villeurbanne'),
    },
    robots: { index: true, follow: true },
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sidikoff Digital - Agence Web Villeurbanne",
  "description": "Experts en refonte de site internet à Villeurbanne, spécialisés dans la migration de données et la préservation du référencement naturel.",
  "url": "https://www.sidikoff.com/services/refonte-site-villeurbanne",
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Villeurbanne",
    "addressCountry": "FR"
  },
  "areaServed": "Villeurbanne",
  "priceRange": "€€",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 45.7667,
      "longitude": 4.8833
    },
    "geoRadius": "50000"
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Refonte de Site Web Villeurbanne",
  "description": "Service complet de refonte de site web incluant modernisation du design, audit technique et plan de redirections SEO 301.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital"
  },
  "areaServed": {
    "@type": "City",
    "name": "Villeurbanne"
  }
}

export default function RefonteSiteVilleurbanneLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RefonteSiteVilleurbanneLandingContent />
    </>
  )
}
