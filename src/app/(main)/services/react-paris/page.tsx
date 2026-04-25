import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import ReactParisLandingContent from '@/components/ReactParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/react-paris', 'fr')

const faqItems = [
  {
    question: 'Pourquoi choisir React.js plutôt qu\'un autre framework JavaScript ?',
    answer: 'Créé et maintenu par Meta (Facebook), React.js est le leader incontesté des bibliothèques front-end. Il offre une approche basée sur des composants réutilisables, un Virtual DOM pour des performances optimales, et possède le plus grand écosystème de développeurs au monde, ce qui garantit la pérennité de votre projet.'
  },
  {
    question: 'Quelle est la différence entre React et Next.js ?',
    answer: 'React est une bibliothèque pour construire des interfaces utilisateur (UI). Next.js est un framework construit au-dessus de React qui ajoute des fonctionnalités essentielles comme le rendu côté serveur (SSR), la génération de sites statiques (SSG) et un système de routage intégré, particulièrement crucial pour le SEO.'
  },
  {
    question: 'Pouvez-vous reprendre une application React existante ?',
    answer: 'Oui, notre agence à Paris réalise régulièrement des audits de code d\'applications React existantes. Nous pouvons optimiser les performances, mettre à jour les dépendances (passage aux Hooks, mise à jour React 18), refactoriser l\'architecture d\'état (Redux vers Zustand par exemple) ou ajouter de nouvelles fonctionnalités.'
  },
  {
    question: 'Combien coûte le développement d\'une application React ?',
    answer: 'Le coût dépend fortement de la complexité de l\'interface, du nombre d\'écrans, des intégrations d\'API et de la gestion de l\'état global. Un projet React sur mesure peut démarrer autour de 10 000 € pour un MVP et dépasser les 50 000 € pour des applications SaaS complexes. Nous proposons un devis précis après le cadrage technique.'
  },
  {
    question: 'React est-il bon pour le référencement naturel (SEO) ?',
    answer: 'De base, React génère des applications côté client (CSR), ce qui peut poser des défis pour les robots d\'indexation de Google. Pour des projets nécessitant un fort référencement (E-commerce, blogs, sites vitrines), nous utilisons systématiquement Next.js, le framework React qui permet le Server-Side Rendering (SSR) pour un SEO parfait.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence React.js Paris | Développement Web Front-End Expert'
  const description = 'Confiez votre projet web à notre agence React à Paris. Création d\'applications Single Page (SPA) performantes, UX/UI optimisé et composants sur mesure.'
  
  return {
    title,
    description,
    keywords: 'react paris, agence react paris, développeur react paris, agence front end paris, développement spa, react js agence',
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
      languages: generateAlternateUrls('services/react-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const reactServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence de Développement React.js Paris",
  "description": "Développement d'applications web ultra-rapides en React.js. Expertise en SPA, composants réutilisables et interfaces performantes.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "serviceType": ["Développement Front-End", "Développement Web", "Création Application Web"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  }
}

export default function ReactParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reactServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReactParisLandingContent />
    </>
  )
}
