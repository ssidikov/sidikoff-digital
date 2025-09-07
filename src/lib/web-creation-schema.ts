import { type Locale } from '@/lib/i18n'

interface WebCreationServiceSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  offers: {
    '@type': string
    price: string
    priceCurrency: string
    availability: string
    validFrom: string
  }
  serviceType: string
  areaServed: string
  url: string
}

export function generateWebCreationSchema(locale: Locale): WebCreationServiceSchema {
  const baseUrl = 'https://www.sidikoff.com'
  const serviceUrl =
    locale === 'fr'
      ? `${baseUrl}/services/creation-sites-web`
      : `${baseUrl}/${locale}/services/creation-sites-web`

  const titles = {
    fr: 'Création de Sites Web Sur Mesure',
    en: 'Custom Website Creation',
    ru: 'Создание Сайтов на Заказ',
  }

  const descriptions = {
    fr: 'Service professionnel de création de sites web modernes, rapides et optimisés SEO. De la conception UX/UI à la mise en ligne avec React, Next.js, Tailwind CSS.',
    en: 'Professional service for creating modern, fast and SEO-optimized websites. From UX/UI design to launch with React, Next.js, Tailwind CSS.',
    ru: 'Профессиональный сервис создания современных, быстрых и SEO-оптимизированных сайтов. От UX/UI дизайна до запуска с React, Next.js, Tailwind CSS.',
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: titles[locale],
    description: descriptions[locale],
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '590',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0] || new Date().toISOString(),
    },
    serviceType: 'Web Development',
    areaServed: 'France',
    url: serviceUrl,
  }
}
