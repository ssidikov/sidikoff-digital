import { Metadata } from 'next'
import {
  generatePageMetadata,
  generateServiceSchema,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import AgenceVilleurbanneClient from './AgenceVilleurbanneClient'

const PAGE_SLUG = 'services/agence-web-villeurbanne'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Villeurbanne | Sidikoff',
    'Création de site internet à Villeurbanne, expert en SEO Villeurbanne et solutions web sur mesure pour entreprises et indépendants.',
    `/services/agence-web-villeurbanne`,
    'fr',
    {
      keywords: [
        'Agence Web Villeurbanne',
        'Création site internet Villeurbanne',
        'Agence marketing digital Villeurbanne',
        'Développement web sur mesure Villeurbanne',
        'Refonte de site web Villeurbanne',
        'Agence SEO Villeurbanne',
        'Création logiciel métier',
        'Sites vitrines',
        'E-commerce',
      ],
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

export default function AgenceWebVilleurbannePage() {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  const serviceSchema = generateServiceSchema({
    name: 'Agence Web Villeurbanne - Sidikoff Digital',
    description:
      'Expertise en création de sites internet, référencement SEO et génie logiciel à Villeurbanne. Solutions sur-mesure pour entreprises.',
    url: pageUrl,
    serviceType: 'Agence Web & SEO',
    areaServed: [
      'Villeurbanne',
      'Gratte-Ciel',
      'Charpennes',
      'Cusset',
      'La Doua',
      'Tonkin',
      'Lyon',
      'Métropole de Lyon',
      'Grand Lyon',
    ],
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel est le coût d\u2019un site internet à Villeurbanne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un site vitrine professionnel à Villeurbanne démarre à 690€ TTC, livré en 5 à 7 jours ouvrés. Un site multi-pages est proposé à partir de 1 290€, idéal pour les PME, commerces et professions libérales de Gratte-Ciel, Charpennes ou Cusset. Un site e-commerce ou une application sur mesure démarre à 1 990€. Tous nos tarifs incluent le SEO de base, le design responsive et la mise en ligne. Devis gratuit et personnalisé sous 24h.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps pour livrer un site web à Villeurbanne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Entre 5 et 7 jours ouvrés pour un site vitrine standard, 10 à 14 jours pour un site multi-pages, et 4 à 8 semaines pour un e-commerce ou une application sur mesure. Nous respectons les délais convenus par contrat et vous informons à chaque étape de la production.",
        },
      },
      {
        '@type': 'Question',
        name: 'Votre agence web de Villeurbanne fait-elle du SEO local ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le SEO local est au cœur de notre méthode. Nous optimisons chaque page pour les recherches géolocalisées (Villeurbanne, Gratte-Ciel, Charpennes, Grand Lyon), configurons votre fiche Google Business Profile et créons du contenu ancré localement. Nos sites Next.js obtiennent systématiquement des scores Lighthouse supérieurs à 95, ce qui améliore directement votre positionnement dans la Métropole de Lyon.",
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des services de développeur web freelance à Villeurbanne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. En tant que développeur web freelance basé à Villeurbanne, nous intervenons directement chez vous ou à distance pour tous vos projets web : création de site, refonte, intégration d\u2019API, migration Next.js ou développement de fonctionnalités spécifiques. Nous offrons la flexibilité d\u2019un freelance avec les ressources d\u2019une agence structurée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faites-vous de la refonte de site web à Villeurbanne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, la refonte de site web est l\u2019un de nos services phares à Villeurbanne. Nous migrons vos anciens sites (WordPress, Wix, Squarespace) vers Next.js pour un gain de performance immédiat : chargement plus rapide, meilleur SEO, design modernisé et code maintenable. Chaque refonte inclut un audit technique préalable et une stratégie SEO de reconversion.",
        },
      },
    ],
  }

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Villeurbanne', url: pageUrl },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AgenceVilleurbanneClient />
    </>
  )
}
