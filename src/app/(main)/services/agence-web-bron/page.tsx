import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebBronLandingContent from '@/components/AgenceWebBronLandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-bron', 'fr')

const faqItems = [
  {
    question: 'Pourquoi choisir votre agence plutôt qu\'un freelance ?',
    answer: 'Un freelance est souvent spécialisé dans un seul domaine (soit le design, soit le code). Chez Sidikoff Digital, vous bénéficiez de l\'expertise combinée de Web Designers, Développeurs Full-Stack et d\'Experts SEO. Nous livrons des projets complets, sans aucun compromis sur la qualité technique ou le référencement.'
  },
  {
    question: 'Intervenez-vous physiquement à Bron ?',
    answer: 'Oui, nous accompagnons de nombreuses entreprises de la métropole lyonnaise, dont Bron. La proximité géographique est un atout majeur pour organiser des ateliers de travail, comprendre les spécificités de votre marché local, et tisser une relation de confiance sur le long terme.'
  },
  {
    question: 'Quel budget prévoir pour un site internet professionnel ?',
    answer: 'Chaque projet est unique. Un site vitrine "one-page" très simple peut démarrer autour de 1 500 €, tandis qu\'un site d\'entreprise complexe (plusieurs pages services, module de devis, SEO poussé) ou e-commerce se situe généralement entre 3 000 € et 8 000 €. Nous établissons un devis transparent après notre premier échange.'
  },
  {
    question: 'Que se passe-t-il une fois le site en ligne ?',
    answer: 'Vous êtes propriétaire à 100% de votre site internet. Nous vous remettons tous les accès. Si vous le souhaitez, nous proposons des forfaits de maintenance incluant les mises à jour, la sécurité, l\'hébergement et des heures d\'assistance pour faire évoluer votre plateforme.'
  },
  {
    question: 'Le nom de domaine et l\'hébergement sont-ils inclus ?',
    answer: 'Oui, lors de la création de votre site web, nous pouvons nous occuper de la réservation (ou du transfert) de votre nom de domaine (ex: votre-entreprise.fr) et configurer un hébergement professionnel haute performance pour la première année.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Web Bron (69500) | Création de Site Internet & SEO'
  const description = 'Confiez la création de votre site internet à notre agence web intervenant à Bron. Solutions vitrines, e-commerce sur mesure, design UX/UI et SEO local.'
  
  return {
    title,
    description,
    keywords: 'agence web bron, création site internet bron, agence digitale bron, seo bron, refonte site web bron, développeur web bron, webmaster bron',
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
      languages: generateAlternateUrls('services/agence-web-bron'),
    },
    robots: { index: true, follow: true },
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence Web Bron - Sidikoff Digital",
  "description": "Création de sites internet performants, boutiques e-commerce et stratégie SEO pour les PME et artisans de Bron (69500).",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bron"
  },
  "serviceType": ["Création de Site Internet", "Design UI/UX", "Agence SEO Bron"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bron",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR",
    "postalCode": "69500"
  }
}

export default function AgenceWebBronLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Bron', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceWebBronLandingContent />
    </>
  )
}
