// Brand-specific structured data for better brand recognition in search results
import Script from 'next/script'

export default function BrandStructuredData() {
  const brandData = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'SIDIKOFF DIGITAL',
    alternateName: ['SIDIKOFF', 'SIDIKOFF DIGITAL Paris', 'Agence SIDIKOFF', 'SIDIKOFF Web Agency'],
    url: 'https://www.sidikoff.com',
    logo: 'https://www.sidikoff.com/logo.svg',
    description:
      "Agence web premium spécialisée en création de sites internet et développement d'applications modernes",
    founder: {
      '@type': 'Person',
      name: 'Sardorbek SIDIKOV',
      alternateName: ['Sardorbek SIDIKOV', 'Сардорбек СИДИКОВ'],
      jobTitle: 'Fondateur & Directeur technique',
      url: 'https://www.sidikoff.com/about',
      sameAs: ['https://linkedin.com/in/sardorbek-sidikov', 'https://github.com/sidikoff'],
    },
    parentOrganization: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    sameAs: [
      'https://linkedin.com/company/sidikoff-digital',
      'https://twitter.com/sidikoffdigital',
    ],
  }

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sidikoff.com/#website',
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'SIDIKOFF DIGITAL - Agence Web Paris',
    url: 'https://www.sidikoff.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.sidikoff.com/projects?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
    about: {
      '@type': 'Thing',
      name: 'SIDIKOFF DIGITAL Brand',
      description: "Marque d'agence web premium française spécialisée en développement moderne",
    },
  }

  return (
    <>
      <Script
        id='brand-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandData) }}
      />
      <Script
        id='website-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
    </>
  )
}
