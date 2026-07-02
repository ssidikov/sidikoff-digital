import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import DeveloppeurWebParisLandingContent from '@/components/DeveloppeurWebParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/developpeur-web-paris', 'fr')

const faqItems = [
  {
    question: 'Quelles sont vos technologies (stack) de prédilection ?',
    answer: 'Notre pôle de développement web à Paris est spécialisé sur l\'écosystème JavaScript/TypeScript moderne : React, Next.js, Node.js (NestJS/Express), et des bases de données relationnelles (PostgreSQL) ou NoSQL (MongoDB). Nous maîtrisons également Python et PHP pour des besoins spécifiques ou la reprise de code existant.'
  },
  {
    question: 'Proposez-vous du développement au forfait ou en régie ?',
    answer: 'Nous proposons les deux. Le "Forfait" est idéal pour un projet dont le cahier des charges est figé et maîtrisé. La "Régie" (ou intégration en équipe agile) est recommandée pour des projets SaaS ou e-commerce évolutifs, où vous avez besoin d\'un développeur senior à temps plein pour renforcer vos effectifs.'
  },
  {
    question: 'Où sont basés vos développeurs ?',
    answer: 'Tous nos développeurs web et ingénieurs logiciels sont basés en France, avec un noyau dur à Paris et en Île-de-France. Nous ne faisons pas d\'offshore. Cela garantit une communication fluide, l\'absence de décalage horaire, et la possibilité d\'organiser des réunions physiques dans vos locaux.'
  },
  {
    question: 'Comment garantissez-vous la qualité du code ?',
    answer: 'La qualité est non négociable. Nous appliquons des standards stricts : typage fort avec TypeScript, linters (ESLint), revues de code systématiques (Code Reviews) entre pairs, et couverture de tests automatisés (Jest, Cypress) intégrés dans un pipeline CI/CD.'
  },
  {
    question: 'Qui est propriétaire du code source à la fin du projet ?',
    answer: 'Vous l\'êtes à 100%. Dès le paiement intégral de la prestation, tous les droits de propriété intellectuelle sur le code source vous sont transférés. Nous hébergeons le code sur un dépôt Git (GitHub ou GitLab) auquel vous avez un accès complet en tant qu\'administrateur.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Développeur Web Paris | Agence d\'Ingénierie Logicielle'
  const description = 'Besoin d\'un développeur web senior à Paris ? Confiez votre projet à notre équipe d\'experts Full-Stack (React, Node.js). Forfait ou régie, code de haute qualité.'
  
  return {
    title,
    description,
    keywords: 'développeur web paris, agence développement web paris, developpeur full stack paris, ingénieur logiciel paris, développeur react paris, freelance web paris, agence web technique',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [{ url: 'https://cdn.sidikoff.com/images/opengraph-fr.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/developpeur-web-paris'),
    },
    robots: { index: true, follow: true },
  }
}

const developerWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Développeur Web Paris | Ingénierie Logicielle',
  description:
    "Développement web sur mesure, création de SaaS et renfort d'équipe en régie à Paris. Spécialistes React, Next.js, Node.js et TypeScript.",
  isPartOf: { '@id': `${DEFAULT_SEO.siteUrl}/#website` },
  about: { '@id': `${PAGE_URL}#service` },
}

const developerServiceSchema = generateServiceSchema({
  name: 'Développeur Web Paris | Ingénierie Logicielle',
  description:
    "Développement web sur mesure, création de SaaS et renfort d'équipe en régie à Paris. Spécialistes React, Next.js, Node.js et TypeScript.",
  url: PAGE_URL,
  serviceType: 'Développement logiciel',
  areaServed: ['Paris', 'Île-de-France'],
  image: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
})

export default function DeveloppeurWebParisLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Developpeur Web Paris', url: PAGE_URL },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerWebPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerServiceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DeveloppeurWebParisLandingContent />
    </>
  )
}
