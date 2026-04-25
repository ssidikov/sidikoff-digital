import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData } from '@/lib/seo-utils'
import { Metadata } from 'next'
import DeveloppeurWebLyonLandingContent from '@/components/DeveloppeurWebLyonLandingContent'

const PAGE_URL = createCanonicalUrl('services/developpeur-web-lyon', 'fr')

const faqItems = [
  {
    question: 'Quelles sont les technologies maîtrisées par vos développeurs ?',
    answer: 'Notre pôle d\'ingénierie web est hyper-spécialisé sur l\'écosystème JavaScript et TypeScript. En Front-End, nous excellons sur React.js et Next.js. En Back-End, nous concevons des APIs sous Node.js (NestJS, Express). Nous maîtrisons également la gestion de bases de données relationnelles (PostgreSQL) et NoSQL (MongoDB).'
  },
  {
    question: 'Quelle est la différence entre un projet au "forfait" et en "régie" ?',
    answer: 'Le forfait est idéal pour un projet avec un cahier des charges fixe : nous nous engageons sur un prix et un délai de livraison. La régie (ou assistance technique) consiste à mettre un ou plusieurs de nos développeurs à votre disposition (temps plein ou partiel) pour intégrer votre équipe existante et travailler sur votre backlog.'
  },
  {
    question: 'Où sont basées vos équipes de développement ?',
    answer: 'Contrairement aux agences qui externalisent en offshore, tous nos développeurs logiciels sont basés en France, avec une forte présence dans la région lyonnaise (Rhône-Alpes). Cela garantit une communication fluide, l\'absence de barrière linguistique et de décalage horaire, ainsi qu\'une sécurité juridique de vos données.'
  },
  {
    question: 'Comment garantissez-vous la sécurité et la qualité du code ?',
    answer: 'La qualité est assurée par un processus strict : typage fort avec TypeScript, revues de code (Code Review) obligatoires entre développeurs avant toute fusion (Merge), et exécution de tests automatisés via des pipelines CI/CD. Nous appliquons les principes du Clean Code et du SOLID.'
  },
  {
    question: 'À qui appartient le code source une fois le développement terminé ?',
    answer: 'La propriété intellectuelle vous appartient à 100%. Une fois la facture finale réglée, nous vous transférons l\'intégralité des droits sur le code source développé. Le code est hébergé sur vos propres dépôts Git (GitHub/GitLab) dont vous êtes le propriétaire administrateur exclusif.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Développeur Web Lyon | Freelance & Agence d\'Ingénierie Logicielle'
  const description = 'Besoin d\'un développeur web senior à Lyon ? Confiez votre projet à notre équipe d\'experts Full-Stack (React, Node.js). Forfait SaaS ou délégation en régie.'
  
  return {
    title,
    description,
    keywords: 'développeur web lyon, developpeur full stack lyon, freelance web lyon, ingénieur logiciel lyon, agence developpement lyon, développeur react lyon',
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
      languages: generateAlternateUrls('services/developpeur-web-lyon'),
    },
    robots: { index: true, follow: true },
  }
}

const developerServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agence de Développement Web Lyon - Sidikoff Digital",
  "description": "Développement logiciel sur mesure, création d'applications SaaS et délégation de développeurs en régie à Lyon. Experts React et Node.js.",
  "provider": {
    "@type": "Organization",
    "name": "Sidikoff Digital",
    "url": "https://www.sidikoff.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceType": ["Développement Logiciel", "Délégation en Régie", "Développement SaaS B2B", "Refonte Technique"],
  "image": "https://www.sidikoff.com/images/opengraph-fr.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  }
}

export default function DeveloppeurWebLyonLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DeveloppeurWebLyonLandingContent />
    </>
  )
}
