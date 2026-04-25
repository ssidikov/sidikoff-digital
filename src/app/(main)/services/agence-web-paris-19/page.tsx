import type { Metadata } from 'next'

import ParisArrondissementLanding from '@/components/ParisArrondissementLanding'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'

const PAGE_SLUG = 'services/agence-web-paris-19'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 19 - Création de site internet'
  const pageDescription =
    'Création de site internet à Paris 19 : La Villette, Buttes-Chaumont. Agence web pour artisans, PME et associations. Devis gratuit.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 19',
      'creation site internet paris 19',
      'creation site web paris 19',
      'agence digitale paris 19',
      'site vitrine paris 19',
      'site e-commerce paris 19',
      'refonte site web paris 19',
      'seo local paris 19',
      'creation site internet la villette',
      'creation site internet buttes-chaumont',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence web Paris 19 - Création site web',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function AgenceWebParis19Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Agence web Paris 19',
    description:
      'Agence spécialisée dans la création de sites internet pour les professionnels du 19e arrondissement.',
    url: pageUrl,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.887,
      longitude: 2.3848,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      postalCode: '75019',
      addressRegion: 'Ile-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Paris 19ème' },
      { '@type': 'Place', name: 'La Villette' },
      { '@type': 'Place', name: 'Buttes-Chaumont' },
      { '@type': 'Place', name: 'Pont-de-Flandre' },
      { '@type': 'Place', name: 'Amérique' },
    ],
    serviceType: [
      'Création de site web',
      'Site vitrine',
      'Site e-commerce',
      'Refonte de site internet',
      'Référencement SEO',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sardorbeksidikov',
      'https://github.com/ssidikov',
      'https://twitter.com/sidikoffdigital',
    ],
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 19 - Création site internet',
    description:
      'Votre partenaire digital dans le 19ème arrondissement : conception web, e-commerce et SEO.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 19',
    areaServed: ['Paris 19ème', 'La Villette', 'Buttes-Chaumont', 'Paris'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    provider: {
      name: 'SIDIKOFF DIGITAL',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence web Paris 19', url: pageUrl },
  ])

  return (
    <>
      <script
        id='schema-local-business-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id='schema-service-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="19"
        heroTitle={
          <>
            Agence web Paris 19
            <br />
            pour développer votre activité locale.
          </>
        }
        heroDescription="Du dynamisme de la Villette au charme des Buttes-Chaumont, nous concevons des sites vitrines et plateformes e-commerce pensés pour la visibilité des entreprises, associations et artisans du 19e arrondissement."
        neighborhoods={['La Villette', 'Buttes-Chaumont', 'Pont-de-Flandre', 'Amérique', 'Flandre', 'Ourcq']}
        visionLocaleText="Une approche concrète pour mettre en valeur le savoir-faire des acteurs locaux du 19e."
        faqItems={[
          {
            question: 'Combien coûte un site web dans le 19e ?',
            answer:
              'Nos tarifs sont transparents : à partir de 690 € pour un site vitrine professionnel clé en main. Pour de la vente en ligne, les budgets commencent autour de 1 290 €.',
          },
          {
            question: 'En combien de temps mon site sera prêt ?',
            answer:
              'Notre méthode de production optimisée permet des lancements rapides. Un site vitrine est généralement prêt et en ligne en 7 à 14 jours.',
          },
          {
            question: 'Le site sera-t-il adapté aux smartphones ?',
            answer:
              'Bien sûr. Plus de la moitié du trafic provient des mobiles. Nos créations sont 100% responsive et testées sur tous les appareils.',
          },
          {
            question: 'Proposez-vous une assistance une fois le site en ligne ?',
            answer:
              'Oui, nous offrons des contrats de maintenance et nous restons à votre disposition pour faire évoluer votre site selon vos futurs besoins.',
          },
        ]}
      />
    </>
  )
}
