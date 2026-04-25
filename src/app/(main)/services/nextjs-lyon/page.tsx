import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import NextjsLyonLandingContent from '@/components/NextjsLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/nextjs-lyon', 'fr')

const faqItems = [
  {
    question: 'Quelle est la différence entre React.js et Next.js ?',
    answer: 'React.js est une bibliothèque pour créer des interfaces utilisateurs. Next.js est un "framework" complet construit par-dessus React. Là où React charge tout le code dans le navigateur de l\'utilisateur (ce qui est mauvais pour le SEO), Next.js permet de pré-calculer les pages sur le serveur (SSR ou SSG). Cela offre des temps de chargement instantanés et un référencement naturel (SEO) parfait.'
  },
  {
    question: 'Dans quels cas utiliser Next.js pour mon entreprise à Lyon ?',
    answer: 'Next.js est la technologie idéale si vous avez besoin d\'un site web public performant (Site vitrine B2B ambitieux, E-commerce, Blog à fort trafic, Portail média). C\'est l\'arme ultime pour combiner la puissance d\'une application dynamique et les exigences du référencement sur Google.'
  },
  {
    question: 'Qu\'est-ce qu\'une architecture "Headless" ?',
    answer: 'Une architecture "Headless" consiste à séparer la gestion du contenu (le Back-End, géré par un CMS comme Strapi ou Sanity) de l\'affichage visuel (le Front-End, développé par nos soins en Next.js). Cela permet une plus grande liberté de design, une sécurité accrue, et surtout, des performances inégalées car l\'interface est découplée de la base de données.'
  },
  {
    question: 'Où sera hébergé notre site Next.js ?',
    answer: 'Nous recommandons fortement l\'hébergement sur Vercel (les créateurs de Next.js) ou AWS Amplify. Ces plateformes déploient votre site sur un réseau mondial (CDN/Edge Network), ce qui signifie que vos pages se chargeront en quelques millisecondes, que votre client soit à Lyon, Paris ou New York.'
  },
  {
    question: 'Faites-vous la maintenance des projets Next.js ?',
    answer: 'Oui, nous proposons des forfaits de Tierce Maintenance Applicative (TMA). Nous mettons à jour les dépendances de votre projet (React, Next.js, modules NPM), surveillons les performances sur Vercel, et développons de nouvelles fonctionnalités (composants, nouvelles routes) en fonction de vos besoins.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Agence Next.js Lyon | Développement Web Haute Performance'
  const description = 'Confiez la création de votre site web à notre agence experte Next.js basée à Lyon. Server-Side Rendering (SSR), performances extrêmes et optimisation SEO Google.'
  
  return {
    title,
    description,
    keywords: 'nextjs lyon, agence nextjs lyon, developpeur nextjs lyon, création site nextjs, expert next js, développement ssr lyon',
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
      languages: generateAlternateUrls('services/nextjs-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const nextjsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence Next.js Lyon - Sidikoff Digital",
  "description": "Développement d'applications et de sites web ultra-performants sous Next.js. Expertise en SSR, SSG et intégration de CMS Headless à Lyon.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Développement Next.js", "Création de Site SSR", "Architecture Headless", "Optimisation Core Web Vitals"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function NextjsLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nextjsServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NextjsLyonLandingContent />
    </>
  )
}
