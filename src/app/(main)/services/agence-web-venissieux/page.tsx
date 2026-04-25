import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebVenissieuxLandingContent from '@/components/AgenceWebVenissieuxLandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-venissieux', 'fr')

const faqItems = [
  {
    question: 'Intervenez-vous pour les entreprises basées à Vénissieux ?',
    answer: 'Oui, Sidikoff Digital intervient auprès des PME, artisans et commerçants de toute la métropole lyonnaise, y compris Vénissieux et ses zones d\'activités limitrophes (Corbas, Saint-Fons, Feyzin). Nous privilégions une approche locale pour mieux comprendre votre marché.'
  },
  {
    question: 'Pourquoi la vitesse d\'un site est-elle si importante ?',
    answer: 'La vitesse de chargement (Core Web Vitals) est devenue un critère de classement officiel pour Google. Un site qui met plus de 3 secondes à charger perd environ 53% de ses visiteurs mobiles. En utilisant des technologies comme Next.js, nous garantissons des temps de chargement quasi instantanés.'
  },
  {
    question: 'Je n\'ai pas le temps de rédiger les textes de mon site. Pouvez-vous le faire ?',
    answer: 'Absolument. Nous disposons d\'une équipe de rédacteurs web formés au SEO. Ils se chargeront de rédiger des contenus percutants pour vos pages de présentation et vos services, tout en intégrant les mots-clés nécessaires pour votre référencement sur Google.'
  },
  {
    question: 'Combien de temps faut-il pour créer un site internet vitrine ?',
    answer: 'La création d\'un site vitrine sur mesure prend généralement entre 3 et 6 semaines, selon la réactivité lors des phases de validation du design et la complexité des fonctionnalités demandées.'
  },
  {
    question: 'Serais-je propriétaire de mon site web ?',
    answer: 'Oui, à 100%. Contrairement à certaines solutions en location qui vous rendent captif, une fois la prestation de création réglée, vous êtes le seul propriétaire du code source, du design et du nom de domaine. Nous vous remettons l\'ensemble des accès administrateur.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Web Vénissieux | Création de Site Internet & SEO'
  const description = 'Agence web experte intervenant à Vénissieux (69200). Création de sites vitrines professionnels, e-commerce sur mesure et stratégie de référencement SEO.'
  
  return {
    title,
    description,
    keywords: 'agence web venissieux, création site internet venissieux, agence de communication venissieux, seo venissieux, création e-commerce venissieux, développeur web venissieux, agence digitale rhone',
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
      languages: generateAlternateUrls('services/agence-web-venissieux'),
    },
    robots: { index: true, follow: true },
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence Web Vénissieux - Sidikoff Digital",
  "description": "Création de sites internet performants, boutiques en ligne et optimisation SEO pour les entreprises de Vénissieux (69200).",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Vénissieux"
  },
  "serviceType": ["Création Site Web Vénissieux", "Développement E-commerce", "Agence SEO Vénissieux"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vénissieux",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR",
    "postalCode": "69200"
  }
}

export default function AgenceWebVenissieuxLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceWebVenissieuxLandingContent />
    </>
  )
}
