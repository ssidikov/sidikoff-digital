import { createCanonicalUrl, generateAlternateUrls, generateFAQStructuredData, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import AvocatLandingContent from '@/components/AvocatLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-avocat', 'fr')

const faqItems = [
  {
    question: 'Le site respecte-t-il les règles du Conseil National des Barreaux (CNB) ?',
    answer: 'Absolument. Nous connaissons les restrictions de la publicité pour les avocats (Art. 10.2 du RIN). Nos sites évitent toute mention comparative, garantissent l\'information objective, et incluent les mentions obligatoires (Barreau d\'appartenance, structure d\'exercice, toque).'
  },
  {
    question: 'Pouvez-vous intégrer Consulto ou un autre système de prise de RDV ?',
    answer: 'Oui, nous pouvons intégrer Consulto, Meetlaw, ou Calendly directement sur votre site web. Vos clients pourront ainsi réserver et payer leur première consultation en ligne, réduisant le secrétariat et les rendez-vous non honorés.'
  },
  {
    question: 'Combien de temps faut-il pour créer le site de notre cabinet ?',
    answer: 'La création d\'un site web pour un avocat indépendant prend généralement entre 3 et 4 semaines. Pour un cabinet pluridisciplinaire nécessitant des portraits professionnels et une architecture complexe, comptez 6 à 8 semaines.'
  },
  {
    question: 'Mon site me permettra-t-il d\'avoir de nouveaux clients ?',
    answer: 'Oui. Grâce à notre stratégie de SEO local, votre site sera optimisé pour apparaître dans les premiers résultats Google lorsque des justiciables chercheront un avocat dans votre ville et votre spécialité (ex: "avocat divorce amiable Lyon").'
  },
  {
    question: 'Les formulaires de contact garantissent-ils le secret professionnel ?',
    answer: 'Tous nos sites utilisent le protocole HTTPS avec des certificats SSL/TLS robustes. Les formulaires de contact sont sécurisés pour protéger les données sensibles de vos clients potentiels (RGPD) avant le premier contact.'
  }
]

export function generateMetadata(): Metadata {
  const title = 'Site Internet Avocat | Web Design Conforme CNB'
  const description = 'Développez votre cabinet d\'avocats avec un site web statutaire et performant. Conception respectueuse de la déontologie (CNB), prise de RDV intégrée, SEO local et RGPD.'
  
  return {
    title,
    description,
    keywords: 'création site internet avocat, site web cabinet avocat, agence web avocat, seo avocat, site internet conforme cnb, web design avocat, référencement avocat',
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
      languages: generateAlternateUrls('services/creation-site-internet-avocat'),
    },
    robots: { index: true, follow: true },
  }
}

export default function AvocatLandingPage() {
  const faqSchema = generateFAQStructuredData(faqItems)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: 'Création Site Internet Avocat & Cabinet',
    description:
      "Création de sites internet statutaires et sécurisés pour les avocats et cabinets d'avocats.",
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${PAGE_URL}#service`,
    },
  }
  const serviceSchema = generateServiceSchema({
    name: 'Création de Site Internet pour Avocats - Sidikoff Digital',
    description:
      "Création de sites internet statutaires et sécurisés pour les avocats et cabinets d'avocats. Respect de la déontologie du CNB, RGPD, et intégration de la prise de rendez-vous.",
    url: PAGE_URL,
    serviceType: 'Création de site internet pour avocats',
    areaServed: ['France', 'Paris', 'Lyon'],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Site Internet Avocat', url: PAGE_URL },
  ])

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
      <AvocatLandingContent />
    </>
  )
}
