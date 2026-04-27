import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import ReactLyonLandingContent from '@/components/ReactLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/react-lyon', 'fr')

const faqItems = [
  {
    question: 'Pourquoi choisir React.js pour notre application web ?',
    answer: 'Créé et maintenu par Meta (Facebook), React est la bibliothèque JavaScript la plus populaire au monde. Elle permet de construire des interfaces utilisateur complexes, interactives et extrêmement rapides grâce à son DOM virtuel (Virtual DOM). Choisir React, c\'est aussi s\'assurer de trouver facilement des développeurs pour maintenir le projet sur le long terme.'
  },
  {
    question: 'React est-il adapté pour le référencement naturel (SEO) ?',
    answer: 'Une application React classique (SPA) exécute le code côté client (dans le navigateur), ce qui complique l\'indexation par les robots de Google. Si le SEO est vital pour votre projet (ex: site vitrine, e-commerce), nous utiliserons le framework Next.js (basé sur React), qui génère le rendu côté serveur (SSR), garantissant ainsi un référencement optimal sur le marché de Lyon.'
  },
  {
    question: 'Développez-vous aussi la partie Back-End (API) ?',
    answer: 'Oui. Nos développeurs sont Full-Stack JavaScript. Nous pouvons développer l\'API (le moteur de votre application) en Node.js (NestJS, Express), qui s\'interfacera parfaitement avec l\'application React côté Front-End. Nous pouvons aussi connecter le front React à une API existante développée par vos équipes internes.'
  },
  {
    question: 'Pouvons-nous récupérer le code pour nos développeurs internes ensuite ?',
    answer: 'Absolument. Une fois la prestation réglée, la propriété intellectuelle du code vous est transférée. Nous documentons le code de manière rigoureuse et nous utilisons des standards (comme TypeScript) pour faciliter la passation à vos équipes techniques.'
  },
  {
    question: 'Proposez-vous des développeurs React en régie à Lyon ?',
    answer: 'Oui, nous proposons une offre de "Délégation de compétences". Si vous avez besoin de renforcer votre équipe de développement existante à Lyon pour une période donnée, nous pouvons mettre à disposition un développeur React senior qui s\'intégrera à vos processus Agile.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence React.js Lyon | Développement Web & Applications'
  const description = 'Développement d\'applications web et Dashboards sur mesure avec React.js à Lyon. Intégration API, architecture de composants et Single Page Applications (SPA).'
  
  return {
    title,
    description,
    keywords: 'react lyon, agence react lyon, developpeur react lyon, developpement spa lyon, expert reactjs, agence web javascript',
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
      languages: generateAlternateUrls('services/react-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const reactServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence React.js Lyon - Sidikoff Digital",
  "description": "Développement d'interfaces utilisateur modernes (UI) et de Single Page Applications (SPA) avec la bibliothèque React.js pour les entreprises de Lyon.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Développement React", "Développement Web", "Création Dashboard B2B", "Refonte Front-End"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function ReactLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'React Lyon', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reactServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReactLyonLandingContent />
    </>
  )
}
