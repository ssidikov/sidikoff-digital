import { Metadata } from 'next'

export interface LocalContent {
  city: string
  region: string
  title: string
  description: string
  content: {
    title: string
    description: string
    h1: string
    heading: string
    intro: string
    localAdvantages: string[]
    nearbyAreas: string[]
    contactInfo: {
      address: string
      phone: string
      email: string
    }
  }
}

export function generateFrenchSEOMetadata(locale: string): Metadata {
  const localeMap: Record<string, { lang: string; og: string }> = {
    fr: { lang: 'fr', og: 'fr_FR' },
    en: { lang: 'en', og: 'en_US' },
    ru: { lang: 'ru', og: 'ru_RU' },
  }

  const currentLocale = localeMap[locale] || localeMap.fr || { lang: 'fr', og: 'fr_FR' }

  const baseMetadata: Metadata = {
    title: 'SIDIKOFF DIGITAL- Agence Web Paris & Toulouse | Création de Sites Web',
    description:
      'Agence web basée à Paris et Toulouse, spécialisée dans la création de sites internet modernes, applications web et mobiles. Expertise React, Next.js, développement sur mesure pour entreprises françaises.',
    keywords: [
      'agence web Paris',
      'agence web Toulouse',
      'développement web Paris',
      'création site internet Paris',
      'création site internet Toulouse',
      'React Next.js Paris',
      'applications mobiles France',
      'développement sur mesure',
      'agence digitale France',
      'web agency Paris',
      'développeur web Toulouse',
    ],
    openGraph: {
      title: 'SIDIKOFF DIGITAL- Agence Web Paris & Toulouse | Développement Digital',
      description:
        'Agence web basée à Paris et Toulouse, spécialisée dans la création de sites internet modernes, applications web et mobiles.',
      type: 'website',
      locale: currentLocale.og,
      siteName: 'Sidikoff',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SIDIKOFF DIGITAL- Agence Web Paris & Toulouse | Développement Digital',
      description:
        'Agence web basée à Paris et Toulouse, spécialisée dans la création de sites internet modernes.',
    },
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
  }

  return baseMetadata
}

export function generateLocalContent(city: string): LocalContent {
  const localContents: Record<string, LocalContent> = {
    paris: {
      city: 'Paris',
      region: 'Île-de-France',
      title: 'Agence Web Paris - Développement Digital',
      description:
        'Agence web à Paris spécialisée dans la création de sites internet et applications. Expertise locale en développement React, Next.js.',
      content: {
        title: 'Agence Web Paris - Développement Digital',
        description:
          'Agence web à Paris spécialisée dans la création de sites internet et applications. Expertise locale en développement React, Next.js.',
        h1: 'Agence Web à Paris - Expertise Digitale',
        heading: 'Agence Web à Paris - Expertise Digitale',
        intro:
          'Située au cœur de Paris, notre agence web accompagne les entreprises franciliennes dans leur transformation digitale.',
        localAdvantages: [
          'Proximité avec les startups parisiennes',
          'Connaissance du marché francilien',
          'Rendez-vous en présentiel possibles',
          'Réseau de partenaires locaux',
        ],
        nearbyAreas: ['La Défense', 'République', 'Bastille', 'Montparnasse'],
        contactInfo: {
          address: '75 Avenue des Champs-Élysées, 75008 Paris',
          phone: '+33 1 23 45 67 89',
          email: 's.sidikoff@gmail.com',
        },
      },
    },
    toulouse: {
      city: 'Toulouse',
      region: 'Occitanie',
      title: 'Agence Web Toulouse - Développement Digital',
      description:
        'Agence web à Toulouse spécialisée dans la création de sites internet et applications. Expertise locale en développement React, Next.js.',
      content: {
        title: 'Agence Web Toulouse - Développement Digital',
        description:
          'Agence web à Toulouse spécialisée dans la création de sites internet et applications. Expertise locale en développement React, Next.js.',
        h1: 'Agence Web à Toulouse - Ville Rose du Digital',
        heading: 'Agence Web à Toulouse - Ville Rose du Digital',
        intro:
          'Implantée à Toulouse, nous accompagnons les entreprises de la région Occitanie dans leurs projets web et digitaux.',
        localAdvantages: [
          'Écosystème tech toulousain',
          'Proximité avec les industries aéronautiques',
          'Coûts compétitifs',
          'Qualité de vie exceptionnelle',
        ],
        nearbyAreas: ['Capitole', 'Compans-Caffarelli', 'Rangueil', 'Blagnac'],
        contactInfo: {
          address: 'Toulouse, Occitanie',
          phone: '+33 5 12 34 56 78',
          email: 's.sidikoff@gmail.com',
        },
      },
    },
  }

  return (
    localContents[city.toLowerCase()] || {
      city,
      region: 'France',
      title: `Agence Web ${city} - Développement Digital`,
      description: `Agence web à ${city} spécialisée dans la création de sites internet et applications.`,
      content: {
        title: `Agence Web ${city} - Développement Digital`,
        description: `Agence web à ${city} spécialisée dans la création de sites internet et applications.`,
        h1: `Agence Web à ${city}`,
        heading: `Agence Web à ${city}`,
        intro: `Notre agence web accompagne les entreprises de ${city} dans leur transformation digitale.`,
        localAdvantages: [
          'Expertise technique reconnue',
          'Accompagnement personnalisé',
          'Solutions sur mesure',
          'Support local',
        ],
        nearbyAreas: [],
        contactInfo: {
          address: `${city}, France`,
          phone: '+33 1 23 45 67 89',
          email: 's.sidikoff@gmail.com',
        },
      },
    }
  )
}
