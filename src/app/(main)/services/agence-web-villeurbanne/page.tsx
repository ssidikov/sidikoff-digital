import { Metadata } from 'next'
import {
  generatePageMetadata,
  generateServiceSchema,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import { LyonVilleurbanneSeoHub } from '@/components/seo/LyonVilleurbanneSeoHub'
import { FounderEEATBlock } from '@/components/seo/FounderEEATBlock'
import { ZonesInterventionBlock } from '@/components/seo/ZonesInterventionBlock'
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
        'refonte site internet Villeurbanne',
        'Agence SEO Villeurbanne',
        'développeur web Villeurbanne',
        'développeur web freelance Villeurbanne',
        'Création logiciel métier',
        'Sites vitrines',
        'E-commerce',
      ],
      ogImage: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
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

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Villeurbanne', url: pageUrl },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le budget pour la création d\u2019un site web à Villeurbanne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un site vitrine professionnel sur mesure démarre à 890€ TTC. Une plateforme multi-pages est proposée à partir de 1 290€, et un site e-commerce performant commence à 1 990€. Nous fournissons un devis clair sous 24 heures, sans aucun frais caché ni abonnement obligatoire.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le délai de livraison pour un projet web ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un site vitrine standard, comptez 5 à 7 jours ouvrés après réception de vos contenus. Les projets plus complexes (boutiques e-commerce ou applications spécifiques) s\u2019étendent de 3 à 6 semaines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des prestations de développeur freelance à Villeurbanne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous intervenons également sous format freelance pour renforcer vos équipes ou piloter un projet spécifique : développement Next.js/React, intégration d\u2019API, refonte technique ou audit de performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment garantissez-vous le bon référencement (SEO) de mon site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chaque site est conçu selon les standards les plus stricts de Google : scores Lighthouse proches de 100, temps de chargement sous la seconde, structure sémantique claire et balisage JSON-LD optimisé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Serai-je autonome pour modifier les textes ou les images ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Nous connectons votre site à un outil de gestion simplifié (comme Sanity ou un WordPress headless). Vous pourrez mettre à jour vos articles, textes et images en quelques clics sans toucher au code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous un accompagnement pour la refonte d\u2019un vieux site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, c\u2019est l\u2019une de nos spécialités. Nous analysons l\u2019existant pour conserver votre historique SEO, puis nous migrons votre contenu vers une architecture Next.js moderne.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceVilleurbanneClient />
      <FounderEEATBlock />
      <LyonVilleurbanneSeoHub currentPath='/services/agence-web-villeurbanne' />
      <ZonesInterventionBlock currentPath='/services/agence-web-villeurbanne' />
    </>
  )
}
