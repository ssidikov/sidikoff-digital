import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SIDIKOFF Digital',
    alternateName: 'SIDIKOFF',
    url: 'https://sidikoff.digital',
    logo: 'https://sidikoff.digital/logo.svg',
    description:
      'Professional web development agency specializing in modern websites and applications using Next.js, React, and TypeScript.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moscow',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-999-123-45-67',
      contactType: 'customer service',
      email: 'contact@sidikoff.digital',
      availableLanguage: ['English', 'Russian', 'French'],
    },
    sameAs: [
      'https://github.com/sidikoff',
      'https://linkedin.com/company/sidikoff-digital',
      'https://twitter.com/sidikoff_digital',
    ],
    founder: {
      '@type': 'Person',
      name: 'Sardorbek Sidikov',
    },
    foundingDate: '2023',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'Web Development',
      'Frontend Development',
      'Full-Stack Development',
      'UI/UX Design',
      'SEO Optimization',
      'Web Applications',
      'E-commerce Development',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SIDIKOFF Digital',
    alternateName: 'SIDIKOFF',
    url: 'https://sidikoff.digital',
    description:
      'Professional web development agency specializing in modern websites and applications.',
    inLanguage: ['en', 'ru', 'fr'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sidikoff.digital/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services',
    description:
      'Professional web development services including modern website creation, web applications, and digital solutions.',
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF Digital',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Frontend Development',
            description: 'Modern frontend development using React, Next.js, and TypeScript',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Development',
            description: 'Complete web application development from frontend to backend',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'Modern and responsive user interface and experience design',
          },
        },
      ],
    },
  }

  return (
    <>
      <Script
        id='organization-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id='website-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id='service-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
