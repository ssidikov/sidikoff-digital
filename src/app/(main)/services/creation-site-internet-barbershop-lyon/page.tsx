import { Metadata } from 'next'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  generateFAQStructuredData,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import BarbershopLyonLandingContent from '@/components/BarbershopLyonLandingContent'

// ─── Route constants ─────────────────────────────────────────────────────────

const ROUTE = 'services/creation-site-internet-barbershop-lyon'
const PAGE_URL = `${DEFAULT_SEO.siteUrl}/${ROUTE}`

const TITLE = 'Création Site Web Barbershop à Lyon | Sidikoff Digital'
const DESCRIPTION =
  'Sites internet sur mesure pour barbershops à Lyon. Design cinématique, réservation en ligne, SEO local pour apparaître #1 sur Google. Devis gratuit sous 24h.'

const KEYWORDS = [
  'création site internet barbershop lyon',
  'site web barbier lyon',
  'agence web barbershop lyon',
  'réservation en ligne barbershop lyon',
  'seo local barbier lyon',
  'site vitrine barbershop lyon',
  'création site internet salon coiffure homme lyon',
  'site web barbershop presqu’île lyon',
  'développeur web barbershop croix-rousse',
  'agence digitale barbier rhône',
]

// ─── FAQ content (shared between page schema + client display) ───────────────

const FAQ_ITEMS = [
  {
    question: 'Combien coûte un site internet pour un barbershop à Lyon ?',
    answer:
      'Un site vitrine professionnel pour barbershop démarre à 990 €. Le tarif inclut design sur mesure, réservation en ligne, optimisation SEO local Lyon, mobile-first et livraison en 10-14 jours. Un devis gratuit est établi sous 24h.',
  },
  {
    question: 'Combien de temps pour créer un site barbershop ?',
    answer:
      'Délai moyen : 10 à 14 jours ouvrés. Pour les projets urgents, une option accélérée 7 jours est disponible. Le délai comprend la mise en ligne, les tests mobiles et la configuration SEO local.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google Maps et Google Business ?',
    answer:
      'Oui. L’intégration Google Business Profile fait partie de chaque prestation. Votre barbershop sera optimisé pour apparaître dans le pack local « barbershop à Lyon » et les recherches de proximité sur mobile.',
  },
  {
    question: 'Le système de réservation en ligne est-il inclus ?',
    answer:
      'Oui, à partir de la formule Pro. Le système permet la prise de rendez-vous 24h/24, les rappels automatiques par SMS et email, et la synchronisation avec votre agenda personnel.',
  },
  {
    question: 'Quels quartiers de Lyon couvrez-vous ?',
    answer:
      'Tous les arrondissements de Lyon et communes proches : Presqu’île, Croix-Rousse, Part-Dieu, Confluence, Vieux-Lyon, Villeurbanne, Bron, Vaulx-en-Velin, Caluire-et-Cuire, Saint-Priest et toute la Métropole de Lyon.',
  },
  {
    question: 'Que se passe-t-il après la livraison du site ?',
    answer:
      'Vous recevez une formation vidéo pour gérer vous-même vos photos, horaires et prestations. Un support technique est inclus 3 mois. Des formules de maintenance mensuelle sont disponibles à partir de 49 €/mois.',
  },
]

// ─── Metadata ─────────────────────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    keywords: KEYWORDS,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      type: 'website',
      locale: 'fr_FR',
      url: PAGE_URL,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: TITLE,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(ROUTE, 'fr'),
      languages: generateAlternateUrls(ROUTE),
    },
    robots: { index: true, follow: true },
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function BarbershopLyonPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Création Site Barbershop Lyon', url: PAGE_URL },
  ])

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${DEFAULT_SEO.siteUrl}/#website` },
    about: { '@id': `${PAGE_URL}#service` },
  }

  const serviceSchema = generateServiceSchema({
    name: 'Création de Site Web pour Barbershop à Lyon',
    description:
      'Sites internet modernes et optimisés SEO pour barbershops à Lyon. Design premium, réservation en ligne, galerie photos, horaires et SEO local pour la Métropole de Lyon.',
    url: PAGE_URL,
    serviceType: 'Création de site internet pour barbershop',
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'AdministrativeArea', name: 'Métropole de Lyon' },
      { '@type': 'AdministrativeArea', name: 'Rhône' },
      { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
    ],
    provider: {
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const faqSchema = generateFAQStructuredData(FAQ_ITEMS)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BarbershopLyonLandingContent faqs={FAQ_ITEMS} />
    </>
  )
}
