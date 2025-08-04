import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

// Types
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  locale: Locale
  alternateLanguages?: Record<Locale, string>
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export interface LocalBusiness {
  name: string
  url: string
  email?: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  geo: {
    latitude: string
    longitude: string
  }
  areaServed: string[]
  hasMap: string
}

// Default SEO configuration
export const DEFAULT_SEO = {
  siteName: 'SIDIKOFF DIGITAL - Développeur Web Full Stack',
  siteUrl: 'https://sidikoff.com',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@sidikoffdigital',
  locale: 'fr' as Locale,
  keywords: [
    'développeur web',
    'création de site web paris 16ème arrondissement',
    'création de site web paris 1er arrondissement',
    'création de site web paris 2ème arrondissement',
    'création de site web paris 3ème arrondissement',
    'création de site web paris 4ème arrondissement',
    'création de site web paris 5ème arrondissement',
    'création de site web paris 6ème arrondissement',
    'création de site web paris 7ème arrondissement',
    'création de site web paris 8ème arrondissement',
    'création de site web paris 9ème arrondissement',
    'création de site web paris 10ème arrondissement',
    'création de site web paris 11ème arrondissement',
    'création de site web paris 12ème arrondissement',
    'création de site web paris 13ème arrondissement',
    'création de site web paris 14ème arrondissement',
    'création de site web paris 15ème arrondissement',
    'création de site web paris 17ème arrondissement',
    'création de site web paris 18ème arrondissement',
    'création de site web paris 19ème arrondissement',
    'création de site web paris 20ème arrondissement',
    'création de site web boulogne billancourt',
    'création de site web neuilly sur seine',
    'création de site web levallois perret',
    'création de site web montreuil',
    'création de site web saint denis',
    'création de site web aubervilliers',
    'création de site web vitry sur seine',
    'création de site web clichy sous bois',
    'création de site web ivry sur seine',
    'création de site web saint ouen',
    'création de site web asnières sur seine',
    'création de site web courbevoie',
    'création de site web pantin',
    'création de site web bobigny',
    'création de site web saint maur des fossés',
    'création de site web champigny sur marne',
    'création de site web alfortville',
    'création de site web ivry sur seine',
    'création de site web vitry sur seine',
    'création de site web le havre',
    'création de site web rouen',
    'création de site web caen',
    'création de site web rennes',
    'création de site web nantes',
    'création de site web bordeaux',
    'création de site web marseille',
    'création de site web nice',
    'création de site web toulon',
    'création de site web montpellier',
    'création de site web villeurbanne',
    'création de site web lyon 1er arrondissement',
    'création de site web lyon 2ème arrondissement',
    'création de site web lyon 3ème arrondissement',
    'création de site web lyon 4ème arrondissement',
    'création de site web lyon 5ème arrondissement',
    'création de site web lyon 6ème arrondissement',
    'création de site web lyon 7ème arrondissement',
    'création de site web lyon 8ème arrondissement',
    'création de site web lyon 9ème arrondissement',
    'création de site web strasbourg 1er arrondissement',
    'création de site web strasbourg 2ème arrondissement',
    'création de site web strasbourg 3ème arrondissement',
    'création de site web strasbourg 4ème arrondissement',
    'création de site web strasbourg 5ème arrondissement',
    'création de site web strasbourg 6ème arrondissement',
    'création de site web strasbourg 7ème arrondissement',
    'création de site web strasbourg 8ème arrondissement',
    'création de site web strasbourg 9ème arrondissement',
    'création de site web toulouse centre ville',
    'création de site web lyon 3ème arrondissement',
    'création de site web strasbourg centre',
    'création de site web mulhouse centre',
    'création de site web colmar centre',
    'création de site web paris',
    'création de site web toulouse',
    'création de site web lyon',
    'création de site web strasbourg',
    'création de site web mulhouse',
    'création de site web colmar',
    'création de site web france',
    'création de site internet paris',
    'création de site internet toulouse',
    'création de site internet lyon',
    'création de site internet villeurbanne',
    'création de site internet strasbourg',
    'création de site internet mulhouse',
    'création de site internet colmar',
    'création de site internet france',
    'développement web paris',
    'développement web toulouse',
    'développement web lyon',
    'développement web villeurbanne',
    'développement web strasbourg',
    'développement web mulhouse',
    'développement web colmar',
    'développement web france',
    'développeur web',
    'développeur web freelance',
    'développeur web paris',
    'développeur web lyon',
    'développeur web villeurbanne',
    'développeur web toulouse',
    'développeur web strasbourg',
    'agence web paris',
    'agence web lyon',
    'agence web villeurbanne',
    'agence web toulouse',
    'agence web strasbourg',
    'agence web france',

    // Autres villes importantes
    'développeur web marseille',
    'développeur web bordeaux',
    'développeur web nice',
    'développeur web nantes',
    'développeur web lille',
    'développeur web montpellier',
    'développeur web rennes',
    'développeur web toulon',
    'développeur web nancy',
    'développeur web metz',
    'développeur web mulhouse',
    'développeur web colmar',
    'développeur web reims',
    'développeur web clermont ferrand',
    'développeur web grenoble',
    'développeur web saint etienne',
    'développeur web annecy',
    'développeur web dijon',
    'développeur web orleans',
    'développeur web tours',

    // Termes géographiques avec qualificatifs
    'développeur web parisien',
    'développeur web toulousain',
    'développeur web lyonnais',
    'développeur web alsacien',
    'développeur web rhône alpes',
    'développeur web ile de france',
    'développeur web occitanie',
    'développeur web grand est',
    'développeur web auvergne rhône alpes',

    // Long tail keywords - Recherches spécifiques par ville
    'création site web paris',
    'création site web lyon',
    'création site web toulouse',
    'création site web strasbourg',
    'refonte site web paris',
    'refonte site web lyon',
    'développement application web paris',
    'développement application web lyon',
    'agence développement web paris',
    'agence développement web lyon',
    'agence création site internet paris',
    'agence création site internet lyon',

    // Services spécialisés par ville
    'développeur react paris',
    'développeur react lyon',
    'développeur nextjs paris',
    'développeur nextjs lyon',
    'expert seo paris',
    'expert seo lyon',
    'consultant web paris',
    'consultant web lyon',
    'freelance développeur paris',
    'freelance développeur lyon',
    'développeur freelance paris',
    'développeur freelance lyon',

    // Termes professionnels
    'développeur web freelance',
    'développeur web indépendant',
    'développeur web expert',
    'développeur web professionnel',
    'développeur web expérimenté',
    'développeur web senior',
    'développeur full stack',
    'développeur full stack france',
    'expert react france',
    'spécialiste next.js',
    'expert typescript',
    'développeur javascript',
    'développeur node.js',

    // Services techniques
    'développement frontend',
    'développement backend',
    'développement fullstack',
    'optimisation seo',
    'audit seo',
    'optimisation performance web',
    'développement responsive',
    'intégration web',
    'maintenance site web',
    'hébergement web',

    // Types de projets
    'site web',
    'site web professionnel',
    'site internet',
    'site internet professionnel',
    'application web',
    'applications web modernes',
    'sites internet professionnels',
    'développement sur mesure',
    'solutions web innovantes',
    'e-commerce',
    'boutique en ligne',
    'site vitrine',
    'portfolio en ligne',
    'blog professionnel',

    // Technologies
    'react developer',
    'next.js developer',
    'typescript expert',
    'javascript developer',
    'node.js developer',
    'mongodb developer',
    'postgresql developer',
    'tailwind css',
    'wordpress developer',
    'prestashop developer',

    // Secteurs d'activité
    'développeur web startup',
    'développeur web pme',
    'développeur web entreprise',
    'développeur web commerce',
    'développeur web restaurant',
    'développeur web médical',
    'développeur web immobilier',
    'développeur web avocat',
    'développeur web artisan',
    'développeur web consultant',
    'full stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'développement frontend',
    'développement backend',
    'freelance développeur',
    'consultant web',
    'applications web',
    'sites internet',
    'développement sur mesure',
  ],
}

// SEO Locations data structure for dynamic pages
export interface SEOLocation {
  slug: string
  city: string
  region: string
  keyword: string
  keywordByLocale?: {
    fr: string
    en: string
    ru: string
  }
  title: {
    fr: string
    en: string
    ru: string
  }
  description: {
    fr: string
    en: string
    ru: string
  }
  badgeText: {
    fr: string
    en: string
    ru: string
  }
}

// French Regions Data
export const FRENCH_REGIONS = [
  { name: 'Île-de-France', slug: 'ile-de-france', capital: 'Paris' },
  { name: 'Auvergne-Rhône-Alpes', slug: 'auvergne-rhone-alpes', capital: 'Lyon' },
  { name: 'Nouvelle-Aquitaine', slug: 'nouvelle-aquitaine', capital: 'Bordeaux' },
  { name: 'Occitanie', slug: 'occitanie', capital: 'Toulouse' },
  { name: 'Hauts-de-France', slug: 'hauts-de-france', capital: 'Lille' },
  { name: 'Grand Est', slug: 'grand-est', capital: 'Strasbourg' },
  { name: "Provence-Alpes-Côte d'Azur", slug: 'provence-alpes-cote-azur', capital: 'Marseille' },
  { name: 'Bretagne', slug: 'bretagne', capital: 'Rennes' },
  { name: 'Pays de la Loire', slug: 'pays-de-la-loire', capital: 'Nantes' },
  { name: 'Normandie', slug: 'normandie', capital: 'Rouen' },
  { name: 'Bourgogne-Franche-Comté', slug: 'bourgogne-franche-comte', capital: 'Dijon' },
  { name: 'Centre-Val de Loire', slug: 'centre-val-de-loire', capital: 'Orléans' },
  { name: 'Corse', slug: 'corse', capital: 'Ajaccio' },
  { name: 'Guadeloupe', slug: 'guadeloupe', capital: 'Basse-Terre' },
  { name: 'Martinique', slug: 'martinique', capital: 'Fort-de-France' },
  { name: 'Guyane', slug: 'guyane', capital: 'Cayenne' },
  { name: 'La Réunion', slug: 'la-reunion', capital: 'Saint-Denis' },
  { name: 'Mayotte', slug: 'mayotte', capital: 'Mamoudzou' },
]

// Major French Cities Data
export const FRENCH_CITIES = [
  // Population > 500k
  { name: 'Paris', slug: 'paris', region: 'Île-de-France', population: 2141000 },
  {
    name: 'Marseille',
    slug: 'marseille',
    region: "Provence-Alpes-Côte d'Azur",
    population: 870000,
  },
  { name: 'Lyon', slug: 'lyon', region: 'Auvergne-Rhône-Alpes', population: 520000 },
  { name: 'Toulouse', slug: 'toulouse', region: 'Occitanie', population: 480000 },
  { name: 'Nice', slug: 'nice', region: "Provence-Alpes-Côte d'Azur", population: 340000 },
  { name: 'Nantes', slug: 'nantes', region: 'Pays de la Loire', population: 320000 },
  { name: 'Montpellier', slug: 'montpellier', region: 'Occitanie', population: 300000 },
  { name: 'Strasbourg', slug: 'strasbourg', region: 'Grand Est', population: 280000 },
  { name: 'Bordeaux', slug: 'bordeaux', region: 'Nouvelle-Aquitaine', population: 260000 },
  { name: 'Lille', slug: 'lille', region: 'Hauts-de-France', population: 235000 },

  // Population 200k-500k
  { name: 'Rennes', slug: 'rennes', region: 'Bretagne', population: 220000 },
  { name: 'Reims', slug: 'reims', region: 'Grand Est', population: 185000 },
  {
    name: 'Saint-Étienne',
    slug: 'saint-etienne',
    region: 'Auvergne-Rhône-Alpes',
    population: 175000,
  },
  { name: 'Toulon', slug: 'toulon', region: "Provence-Alpes-Côte d'Azur", population: 175000 },
  { name: 'Le Havre', slug: 'le-havre', region: 'Normandie', population: 170000 },
  { name: 'Grenoble', slug: 'grenoble', region: 'Auvergne-Rhône-Alpes', population: 160000 },
  { name: 'Dijon', slug: 'dijon', region: 'Bourgogne-Franche-Comté', population: 155000 },
  { name: 'Angers', slug: 'angers', region: 'Pays de la Loire', population: 150000 },
  { name: 'Nîmes', slug: 'nimes', region: 'Occitanie', population: 150000 },
  {
    name: 'Villeurbanne',
    slug: 'villeurbanne',
    region: 'Auvergne-Rhône-Alpes',
    population: 150000,
  },

  // Population 100k-200k
  { name: 'Saint-Denis', slug: 'saint-denis-reunion', region: 'La Réunion', population: 150000 },
  {
    name: 'Aix-en-Provence',
    slug: 'aix-en-provence',
    region: "Provence-Alpes-Côte d'Azur",
    population: 145000,
  },
  {
    name: 'Clermont-Ferrand',
    slug: 'clermont-ferrand',
    region: 'Auvergne-Rhône-Alpes',
    population: 145000,
  },
  { name: 'Brest', slug: 'brest', region: 'Bretagne', population: 140000 },
  { name: 'Limoges', slug: 'limoges', region: 'Nouvelle-Aquitaine', population: 135000 },
  { name: 'Tours', slug: 'tours', region: 'Centre-Val de Loire', population: 135000 },
  { name: 'Amiens', slug: 'amiens', region: 'Hauts-de-France', population: 135000 },
  { name: 'Perpignan', slug: 'perpignan', region: 'Occitanie', population: 120000 },
  { name: 'Metz', slug: 'metz', region: 'Grand Est', population: 120000 },
  { name: 'Besançon', slug: 'besancon', region: 'Bourgogne-Franche-Comté', population: 115000 },
  {
    name: 'Boulogne-Billancourt',
    slug: 'boulogne-billancourt',
    region: 'Île-de-France',
    population: 120000,
  },
  { name: 'Orléans', slug: 'orleans', region: 'Centre-Val de Loire', population: 115000 },
  { name: 'Mulhouse', slug: 'mulhouse', region: 'Grand Est', population: 110000 },
  { name: 'Rouen', slug: 'rouen', region: 'Normandie', population: 110000 },
  { name: 'Caen', slug: 'caen', region: 'Normandie', population: 105000 },
  { name: 'Nancy', slug: 'nancy', region: 'Grand Est', population: 105000 },

  // Additional French cities for comprehensive SEO coverage
  { name: 'Argenteuil', slug: 'argenteuil', region: 'Île-de-France', population: 110000 },
  { name: 'Montreuil', slug: 'montreuil', region: 'Île-de-France', population: 109000 },
  { name: 'Roubaix', slug: 'roubaix', region: 'Hauts-de-France', population: 95000 },
  { name: 'Tourcoing', slug: 'tourcoing', region: 'Hauts-de-France', population: 97000 },
  { name: 'Nanterre', slug: 'nanterre', region: 'Île-de-France', population: 94000 },
  { name: 'Avignon', slug: 'avignon', region: "Provence-Alpes-Côte d'Azur", population: 92000 },
  { name: 'Poitiers', slug: 'poitiers', region: 'Nouvelle-Aquitaine', population: 88000 },
  { name: 'Fort-de-France', slug: 'fort-de-france', region: 'Martinique', population: 80000 },
  { name: 'Courbevoie', slug: 'courbevoie', region: 'Île-de-France', population: 82000 },
  { name: 'Versailles', slug: 'versailles', region: 'Île-de-France', population: 85000 },
  { name: 'Colombes', slug: 'colombes', region: 'Île-de-France', population: 86000 },
  {
    name: 'Aulnay-sous-Bois',
    slug: 'aulnay-sous-bois',
    region: 'Île-de-France',
    population: 84000,
  },
  { name: 'Saint-Paul', slug: 'saint-paul', region: 'La Réunion', population: 104000 },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison', region: 'Île-de-France', population: 79000 },
  {
    name: 'Champigny-sur-Marne',
    slug: 'champigny-sur-marne',
    region: 'Île-de-France',
    population: 76000,
  },
  { name: 'Antibes', slug: 'antibes', region: "Provence-Alpes-Côte d'Azur", population: 75000 },
  { name: 'Dunkerque', slug: 'dunkerque', region: 'Hauts-de-France', population: 88000 },
  { name: 'Pessac', slug: 'pessac', region: 'Nouvelle-Aquitaine', population: 62000 },
  {
    name: 'Levallois-Perret',
    slug: 'levallois-perret',
    region: 'Île-de-France',
    population: 65000,
  },
  { name: 'Noisy-le-Grand', slug: 'noisy-le-grand', region: 'Île-de-France', population: 66000 },
  { name: 'Cergy', slug: 'cergy', region: 'Île-de-France', population: 64000 },
  { name: 'Pau', slug: 'pau', region: 'Nouvelle-Aquitaine', population: 77000 },
  { name: 'Ivry-sur-Seine', slug: 'ivry-sur-seine', region: 'Île-de-France', population: 59000 },
  { name: 'Créteil', slug: 'creteil', region: 'Île-de-France', population: 91000 },
  { name: 'Bourges', slug: 'bourges', region: 'Centre-Val de Loire', population: 65000 },
  { name: 'Cannes', slug: 'cannes', region: "Provence-Alpes-Côte d'Azur", population: 74000 },
  { name: 'Montrouge', slug: 'montrouge', region: 'Île-de-France', population: 49000 },
  {
    name: 'Neuilly-sur-Seine',
    slug: 'neuilly-sur-seine',
    region: 'Île-de-France',
    population: 61000,
  },
  { name: 'Sarcelles', slug: 'sarcelles', region: 'Île-de-France', population: 58000 },
  { name: 'Troyes', slug: 'troyes', region: 'Grand Est', population: 60000 },
  {
    name: 'Issy-les-Moulineaux',
    slug: 'issy-les-moulineaux',
    region: 'Île-de-France',
    population: 68000,
  },
  { name: 'Montauban', slug: 'montauban', region: 'Occitanie', population: 60000 },
  { name: 'Lorient', slug: 'lorient', region: 'Bretagne', population: 57000 },
  { name: 'Beauvais', slug: 'beauvais', region: 'Hauts-de-France', population: 56000 },
  { name: 'Cholet', slug: 'cholet', region: 'Pays de la Loire', population: 54000 },
  { name: 'Vannes', slug: 'vannes', region: 'Bretagne', population: 53000 },
  { name: 'Laval', slug: 'laval', region: 'Pays de la Loire', population: 50000 },
  {
    name: 'Charleville-Mézières',
    slug: 'charleville-mezieres',
    region: 'Grand Est',
    population: 47000,
  },
  { name: 'Allonnes', slug: 'allonnes', region: 'Pays de la Loire', population: 11000 },
  { name: 'Valence', slug: 'valence', region: 'Auvergne-Rhône-Alpes', population: 64000 },
  { name: 'Les Abymes', slug: 'les-abymes', region: 'Guadeloupe', population: 54000 },
  { name: 'Quimper', slug: 'quimper', region: 'Bretagne', population: 63000 },
  { name: 'Meaux', slug: 'meaux', region: 'Île-de-France', population: 55000 },
  { name: 'Biarritz', slug: 'biarritz', region: 'Nouvelle-Aquitaine', population: 25000 },
  { name: 'Auxerre', slug: 'auxerre', region: 'Bourgogne-Franche-Comté', population: 35000 },
  { name: 'La Rochelle', slug: 'la-rochelle', region: 'Nouvelle-Aquitaine', population: 75000 },
  { name: 'Matoury', slug: 'matoury', region: 'Guyane', population: 32000 },
  {
    name: 'Évry-Courcouronnes',
    slug: 'evry-courcouronnes',
    region: 'Île-de-France',
    population: 69000,
  },
  { name: 'Calais', slug: 'calais', region: 'Hauts-de-France', population: 73000 },
  { name: 'Mérignac', slug: 'merignac', region: 'Nouvelle-Aquitaine', population: 69000 },
  { name: 'Saint-Malo', slug: 'saint-malo', region: 'Bretagne', population: 46000 },
  { name: 'Chelles', slug: 'chelles', region: 'Île-de-France', population: 54000 },
  {
    name: 'Bourg-en-Bresse',
    slug: 'bourg-en-bresse',
    region: 'Auvergne-Rhône-Alpes',
    population: 42000,
  },
  { name: 'Blois', slug: 'blois', region: 'Centre-Val de Loire', population: 45000 },
  {
    name: 'Cagnes-sur-Mer',
    slug: 'cagnes-sur-mer',
    region: "Provence-Alpes-Côte d'Azur",
    population: 51000,
  },
  {
    name: 'Salon-de-Provence',
    slug: 'salon-de-provence',
    region: "Provence-Alpes-Côte d'Azur",
    population: 45000,
  },
  { name: 'Saint-Brieuc', slug: 'saint-brieuc', region: 'Bretagne', population: 44000 },
  { name: 'Saint-Nazaire', slug: 'saint-nazaire', region: 'Pays de la Loire', population: 69000 },
  { name: 'Chatou', slug: 'chatou', region: 'Île-de-France', population: 30000 },
  {
    name: 'Garges-lès-Gonesse',
    slug: 'garges-les-gonesse',
    region: 'Île-de-France',
    population: 40000,
  },
  {
    name: 'Savigny-sur-Orge',
    slug: 'savigny-sur-orge',
    region: 'Île-de-France',
    population: 37000,
  },
  { name: 'Pontoise', slug: 'pontoise', region: 'Île-de-France', population: 31000 },
  { name: 'Sens', slug: 'sens', region: 'Bourgogne-Franche-Comté', population: 26000 },
  { name: 'Évreux', slug: 'evreux', region: 'Normandie', population: 49000 },
  { name: 'Choisy-le-Roi', slug: 'choisy-le-roi', region: 'Île-de-France', population: 46000 },
  { name: 'Suresnes', slug: 'suresnes', region: 'Île-de-France', population: 49000 },
  { name: 'Puteaux', slug: 'puteaux', region: 'Île-de-France', population: 44000 },
  { name: 'Clichy', slug: 'clichy', region: 'Île-de-France', population: 61000 },
  {
    name: 'Saint-Germain-en-Laye',
    slug: 'saint-germain-en-laye',
    region: 'Île-de-France',
    population: 40000,
  },
  { name: 'Franconville', slug: 'franconville', region: 'Île-de-France', population: 34000 },
  { name: 'Drancy', slug: 'drancy', region: 'Île-de-France', population: 71000 },
  { name: 'Gagny', slug: 'gagny', region: 'Île-de-France', population: 39000 },
  { name: 'Livry-Gargan', slug: 'livry-gargan', region: 'Île-de-France', population: 44000 },
  { name: 'Sevran', slug: 'sevran', region: 'Île-de-France', population: 50000 },
  { name: 'Vitry-sur-Seine', slug: 'vitry-sur-seine', region: 'Île-de-France', population: 93000 },
  { name: 'Thiais', slug: 'thiais', region: 'Île-de-France', population: 30000 },
  { name: 'Fresnes', slug: 'fresnes', region: 'Île-de-France', population: 26000 },
  {
    name: 'Fontenay-sous-Bois',
    slug: 'fontenay-sous-bois',
    region: 'Île-de-France',
    population: 53000,
  },
  { name: 'Noisy-le-Sec', slug: 'noisy-le-sec', region: 'Île-de-France', population: 41000 },
  { name: 'Maisons-Alfort', slug: 'maisons-alfort', region: 'Île-de-France', population: 55000 },
  {
    name: 'Saint-Maur-des-Fossés',
    slug: 'saint-maur-des-fosses',
    region: 'Île-de-France',
    population: 74000,
  },
  { name: 'Vincennes', slug: 'vincennes', region: 'Île-de-France', population: 49000 },
  {
    name: 'Nogent-sur-Marne',
    slug: 'nogent-sur-marne',
    region: 'Île-de-France',
    population: 31000,
  },
  {
    name: 'Le Perreux-sur-Marne',
    slug: 'le-perreux-sur-marne',
    region: 'Île-de-France',
    population: 33000,
  },
  { name: 'Bry-sur-Marne', slug: 'bry-sur-marne', region: 'Île-de-France', population: 16000 },
  {
    name: 'Joinville-le-Pont',
    slug: 'joinville-le-pont',
    region: 'Île-de-France',
    population: 19000,
  },
  { name: 'Saint-Mandé', slug: 'saint-mande', region: 'Île-de-France', population: 22000 },
  {
    name: 'Charenton-le-Pont',
    slug: 'charenton-le-pont',
    region: 'Île-de-France',
    population: 30000,
  },
  { name: 'Alfortville', slug: 'alfortville', region: 'Île-de-France', population: 44000 },
  {
    name: 'Maisons-Laffitte',
    slug: 'maisons-laffitte',
    region: 'Île-de-France',
    population: 23000,
  },
  { name: 'Le Vésinet', slug: 'le-vesinet', region: 'Île-de-France', population: 16000 },
  { name: 'Sartrouville', slug: 'sartrouville', region: 'Île-de-France', population: 52000 },
  { name: 'Houilles', slug: 'houilles', region: 'Île-de-France', population: 32000 },
  {
    name: 'Carrières-sur-Seine',
    slug: 'carrieres-sur-seine',
    region: 'Île-de-France',
    population: 16000,
  },
  { name: 'Le Port-Marly', slug: 'le-port-marly', region: 'Île-de-France', population: 5000 },
  {
    name: 'Marnes-la-Coquette',
    slug: 'marnes-la-coquette',
    region: 'Île-de-France',
    population: 1700,
  },
  { name: 'Vaucresson', slug: 'vaucresson', region: 'Île-de-France', population: 8500 },
  { name: 'Chaville', slug: 'chaville', region: 'Île-de-France', population: 20000 },
  { name: 'Sèvres', slug: 'sevres', region: 'Île-de-France', population: 23000 },
  { name: 'Vanves', slug: 'vanves', region: 'Île-de-France', population: 27000 },
  { name: 'Malakoff', slug: 'malakoff', region: 'Île-de-France', population: 30000 },
  { name: 'Bagneux', slug: 'bagneux', region: 'Île-de-France', population: 40000 },
  {
    name: 'Fontenay-aux-Roses',
    slug: 'fontenay-aux-roses',
    region: 'Île-de-France',
    population: 24000,
  },
  {
    name: 'Le Plessis-Robinson',
    slug: 'le-plessis-robinson',
    region: 'Île-de-France',
    population: 29000,
  },
  {
    name: 'Châtenay-Malabry',
    slug: 'chatenay-malabry',
    region: 'Île-de-France',
    population: 33000,
  },
  { name: 'Antony', slug: 'antony', region: 'Île-de-France', population: 62000 },
  { name: 'Bourg-la-Reine', slug: 'bourg-la-reine', region: 'Île-de-France', population: 20000 },
  { name: 'Sceaux', slug: 'sceaux', region: 'Île-de-France', population: 20000 },
  { name: 'Rungis', slug: 'rungis', region: 'Île-de-France', population: 5500 },
  { name: 'Chevilly-Larue', slug: 'chevilly-larue', region: 'Île-de-France', population: 20000 },
  { name: "L'Haÿ-les-Roses", slug: 'l-hay-les-roses', region: 'Île-de-France', population: 31000 },
  { name: 'Cachan', slug: 'cachan', region: 'Île-de-France', population: 30000 },
  { name: 'Arcueil', slug: 'arcueil', region: 'Île-de-France', population: 20000 },
  { name: 'Gentilly', slug: 'gentilly', region: 'Île-de-France', population: 18000 },
  {
    name: 'Le Kremlin-Bicêtre',
    slug: 'le-kremlin-bicetre',
    region: 'Île-de-France',
    population: 26000,
  },
  { name: 'Villejuif', slug: 'villejuif', region: 'Île-de-France', population: 60000 },
  { name: 'Saint-Maurice', slug: 'saint-maurice', region: 'Île-de-France', population: 14000 },
  { name: 'Bagnolet', slug: 'bagnolet', region: 'Île-de-France', population: 35000 },
  { name: 'Les Lilas', slug: 'les-lilas', region: 'Île-de-France', population: 23000 },
  {
    name: 'Le Pré-Saint-Gervais',
    slug: 'le-pre-saint-gervais',
    region: 'Île-de-France',
    population: 18000,
  },
  { name: 'Pantin', slug: 'pantin', region: 'Île-de-France', population: 59000 },
  { name: 'Bobigny', slug: 'bobigny', region: 'Île-de-France', population: 54000 },
  { name: 'Bondy', slug: 'bondy', region: 'Île-de-France', population: 54000 },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois', region: 'Île-de-France', population: 45000 },
  { name: 'Villemomble', slug: 'villemomble', region: 'Île-de-France', population: 29000 },
  { name: 'Montfermeil', slug: 'montfermeil', region: 'Île-de-France', population: 26000 },
  {
    name: 'Clichy-sous-Bois',
    slug: 'clichy-sous-bois',
    region: 'Île-de-France',
    population: 30000,
  },
  { name: 'Coubron', slug: 'coubron', region: 'Île-de-France', population: 5000 },
  { name: 'Vaujours', slug: 'vaujours', region: 'Île-de-France', population: 7000 },
  { name: 'Le Blanc-Mesnil', slug: 'le-blanc-mesnil', region: 'Île-de-France', population: 56000 },
  { name: 'Dugny', slug: 'dugny', region: 'Île-de-France', population: 11000 },
  { name: 'Le Bourget', slug: 'le-bourget', region: 'Île-de-France', population: 16000 },
  { name: 'La Courneuve', slug: 'la-courneuve', region: 'Île-de-France', population: 41000 },
  { name: 'Stains', slug: 'stains', region: 'Île-de-France', population: 38000 },
  {
    name: 'Pierrefitte-sur-Seine',
    slug: 'pierrefitte-sur-seine',
    region: 'Île-de-France',
    population: 29000,
  },
  { name: 'Villetaneuse', slug: 'villetaneuse', region: 'Île-de-France', population: 12000 },
  {
    name: 'Épinay-sur-Seine',
    slug: 'epinay-sur-seine',
    region: 'Île-de-France',
    population: 56000,
  },
  { name: 'Saint-Denis', slug: 'saint-denis', region: 'Île-de-France', population: 112000 },
  {
    name: "L'Île-Saint-Denis",
    slug: 'l-ile-saint-denis',
    region: 'Île-de-France',
    population: 8000,
  },
  {
    name: 'Saint-Ouen-sur-Seine',
    slug: 'saint-ouen-sur-seine',
    region: 'Île-de-France',
    population: 51000,
  },
  { name: 'Garches', slug: 'garches', region: 'Île-de-France', population: 18000 },
  { name: 'Saint-Cloud', slug: 'saint-cloud', region: 'Île-de-France', population: 30000 },
  { name: 'Meudon', slug: 'meudon', region: 'Île-de-France', population: 45000 },
  { name: 'Clamart', slug: 'clamart', region: 'Île-de-France', population: 53000 },
  { name: 'Annecy', slug: 'annecy', region: 'Auvergne-Rhône-Alpes', population: 128000 },
  { name: 'Le Mans', slug: 'le-mans', region: 'Pays de la Loire', population: 143000 },
]

// Function to generate SEO location data
function generateSEOLocation(
  type: 'city' | 'region',
  data: { name: string; slug: string; region?: string }
): SEOLocation {
  const isCity = type === 'city'
  const name = data.name
  const slug = data.slug
  const region = isCity ? data.region || 'France' : data.name

  const keyword = isCity
    ? `création de site web ${name.toLowerCase()}`
    : `création de site web région ${name.toLowerCase()}`

  return {
    slug,
    city: name,
    region,
    keyword,
    keywordByLocale: {
      fr: isCity ? `création de site web ${name}` : `création de site web région ${name}`,
      en: isCity ? `website creation ${name}` : `website creation ${name} region`,
      ru: isCity ? `создание сайтов ${name}` : `создание сайтов регион ${name}`,
    },
    title: {
      fr: `Création de site web ${name} | SIDIKOFF DIGITAL`,
      en: `Website creation ${name} | SIDIKOFF DIGITAL`,
      ru: `Создание сайтов ${name} | SIDIKOFF DIGITAL`,
    },
    description: {
      fr: isCity
        ? `Création de site web ${name} : développeur web professionnel pour des sites internet modernes. Solutions React, Next.js, optimisation SEO et développement sur mesure.`
        : `Création de site web région ${name} : agence web experte pour des sites internet professionnels. Développement moderne, responsive et optimisé SEO dans toute la région.`,
      en: isCity
        ? `Website creation ${name}: professional web developer for modern websites. React, Next.js solutions, SEO optimization and custom development.`
        : `Website creation ${name} region: expert web agency for professional websites. Modern, responsive and SEO-optimized development throughout the region.`,
      ru: isCity
        ? `Создание сайтов ${name}: профессиональный веб-разработчик для современных сайтов. Решения React, Next.js, SEO-оптимизация и индивидуальная разработка.`
        : `Создание сайтов регион ${name}: экспертное веб-агентство для профессиональных сайтов. Современная, адаптивная и SEO-оптимизированная разработка по всему региону.`,
    },
    badgeText: {
      fr: isCity ? `Création de site web ${name}` : `Création de site web région ${name}`,
      en: isCity ? `Website creation ${name}` : `Website creation ${name} region`,
      ru: isCity ? `Создание сайтов ${name}` : `Создание сайтов регион ${name}`,
    },
  }
}

// Generate all SEO locations
export const SEO_LOCATIONS: SEOLocation[] = [
  // Paris Districts (1-20)
  {
    slug: 'paris-1',
    city: 'Paris 1er arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 1er arrondissement',
    title: {
      fr: 'Création de site web Paris 1er arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 1st District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 1-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 1er arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 1st district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 1-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 1er arrondissement',
      en: 'Website creation Paris 1st district',
      ru: 'Создание сайтов Париж 1-й округ',
    },
  },
  {
    slug: 'paris-2',
    city: 'Paris 2ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 2ème arrondissement',
    title: {
      fr: 'Création de site web Paris 2ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 2nd District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 2-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 2ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 2nd district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 2-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 2ème arrondissement',
      en: 'Website creation Paris 2nd district',
      ru: 'Создание сайтов Париж 2-й округ',
    },
  },
  {
    slug: 'paris-3',
    city: 'Paris 3ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 3ème arrondissement',
    title: {
      fr: 'Création de site web Paris 3ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 3rd District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 3-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 3ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 3rd district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 3-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 3ème arrondissement',
      en: 'Website creation Paris 3rd district',
      ru: 'Создание сайтов Париж 3-й округ',
    },
  },
  {
    slug: 'paris-4',
    city: 'Paris 4ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 4ème arrondissement',
    title: {
      fr: 'Création de site web Paris 4ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 4th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 4-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 4ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 4th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 4-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 4ème arrondissement',
      en: 'Website creation Paris 4th district',
      ru: 'Создание сайтов Париж 4-й округ',
    },
  },
  {
    slug: 'paris-5',
    city: 'Paris 5ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 5ème arrondissement',
    title: {
      fr: 'Création de site web Paris 5ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 5th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 5-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 5ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 5th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 5-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 5ème arrondissement',
      en: 'Website creation Paris 5th district',
      ru: 'Создание сайтов Париж 5-й округ',
    },
  },
  {
    slug: 'paris-6',
    city: 'Paris 6ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 6ème arrondissement',
    title: {
      fr: 'Création de site web Paris 6ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 6th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 6-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 6ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 6th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 6-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 6ème arrondissement',
      en: 'Website creation Paris 6th district',
      ru: 'Создание сайтов Париж 6-й округ',
    },
  },
  {
    slug: 'paris-7',
    city: 'Paris 7ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 7ème arrondissement',
    title: {
      fr: 'Création de site web Paris 7ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 7th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 7-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 7ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 7th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 7-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 7ème arrondissement',
      en: 'Website creation Paris 7th district',
      ru: 'Создание сайтов Париж 7-й округ',
    },
  },
  {
    slug: 'paris-8',
    city: 'Paris 8ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 8ème arrondissement',
    title: {
      fr: 'Création de site web Paris 8ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 8th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 8-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 8ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 8th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 8-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 8ème arrondissement',
      en: 'Website creation Paris 8th district',
      ru: 'Создание сайтов Париж 8-й округ',
    },
  },
  {
    slug: 'paris-9',
    city: 'Paris 9ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 9ème arrondissement',
    title: {
      fr: 'Création de site web Paris 9ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 9th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 9-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 9ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 9th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 9-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 9ème arrondissement',
      en: 'Website creation Paris 9th district',
      ru: 'Создание сайтов Париж 9-й округ',
    },
  },
  {
    slug: 'paris-10',
    city: 'Paris 10ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 10ème arrondissement',
    title: {
      fr: 'Création de site web Paris 10ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 10th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 10-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 10ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 10th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 10-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 10ème arrondissement',
      en: 'Website creation Paris 10th district',
      ru: 'Создание сайтов Париж 10-й округ',
    },
  },
  {
    slug: 'paris-11',
    city: 'Paris 11ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 11ème arrondissement',
    title: {
      fr: 'Création de site web Paris 11ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 11th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 11-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 11ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 11th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 11-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 11ème arrondissement',
      en: 'Website creation Paris 11th district',
      ru: 'Создание сайтов Париж 11-й округ',
    },
  },
  {
    slug: 'paris-12',
    city: 'Paris 12ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 12ème arrondissement',
    title: {
      fr: 'Création de site web Paris 12ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 12th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 12-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 12ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 12th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 12-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 12ème arrondissement',
      en: 'Website creation Paris 12th district',
      ru: 'Создание сайтов Париж 12-й округ',
    },
  },
  {
    slug: 'paris-13',
    city: 'Paris 13ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 13ème arrondissement',
    title: {
      fr: 'Création de site web Paris 13ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 13th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 13-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 13ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 13th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 13-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 13ème arrondissement',
      en: 'Website creation Paris 13th district',
      ru: 'Создание сайтов Париж 13-й округ',
    },
  },
  {
    slug: 'paris-14',
    city: 'Paris 14ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 14ème arrondissement',
    title: {
      fr: 'Création de site web Paris 14ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 14th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 14-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 14ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 14th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 14-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 14ème arrondissement',
      en: 'Website creation Paris 14th district',
      ru: 'Создание сайтов Париж 14-й округ',
    },
  },
  {
    slug: 'paris-15',
    city: 'Paris 15ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 15ème arrondissement',
    title: {
      fr: 'Création de site web Paris 15ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 15th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 15-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 15ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 15th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 15-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 15ème arrondissement',
      en: 'Website creation Paris 15th district',
      ru: 'Создание сайтов Париж 15-й округ',
    },
  },
  // Custom high-priority locations (existing)
  {
    slug: 'paris-16',
    city: 'Paris 16ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 16ème arrondissement',
    title: {
      fr: 'Création de site web Paris 16ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 16th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 16-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 16ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 16th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 16-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 16ème arrondissement',
      en: 'Website creation Paris 16th district',
      ru: 'Создание сайтов Париж 16-й округ',
    },
  },
  {
    slug: 'paris-17',
    city: 'Paris 17ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 17ème arrondissement',
    title: {
      fr: 'Création de site web Paris 17ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 17th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 17-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 17ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 17th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 17-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 17ème arrondissement',
      en: 'Website creation Paris 17th district',
      ru: 'Создание сайтов Париж 17-й округ',
    },
  },
  {
    slug: 'paris-18',
    city: 'Paris 18ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 18ème arrondissement',
    title: {
      fr: 'Création de site web Paris 18ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 18th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 18-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 18ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 18th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 18-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 18ème arrondissement',
      en: 'Website creation Paris 18th district',
      ru: 'Создание сайтов Париж 18-й округ',
    },
  },
  {
    slug: 'paris-19',
    city: 'Paris 19ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 19ème arrondissement',
    title: {
      fr: 'Création de site web Paris 19ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 19th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 19-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 19ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 19th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 19-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 19ème arrondissement',
      en: 'Website creation Paris 19th district',
      ru: 'Создание сайтов Париж 19-й округ',
    },
  },
  {
    slug: 'paris-20',
    city: 'Paris 20ème arrondissement',
    region: 'Île-de-France',
    keyword: 'création de site web paris 20ème arrondissement',
    title: {
      fr: 'Création de site web Paris 20ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Paris 20th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Париж 20-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Paris 20ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Paris 20th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Париж 20-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Paris 20ème arrondissement',
      en: 'Website creation Paris 20th district',
      ru: 'Создание сайтов Париж 20-й округ',
    },
  },

  // Lyon Districts (1-9)
  {
    slug: 'lyon-1',
    city: 'Lyon 1er arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 1er arrondissement',
    title: {
      fr: 'Création de site web Lyon 1er arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 1st District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 1-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 1er arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 1st district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 1-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 1er arrondissement',
      en: 'Website creation Lyon 1st district',
      ru: 'Создание сайтов Лион 1-й округ',
    },
  },
  {
    slug: 'lyon-2',
    city: 'Lyon 2ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 2ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 2ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 2nd District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 2-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 2ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 2nd district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 2-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 2ème arrondissement',
      en: 'Website creation Lyon 2nd district',
      ru: 'Создание сайтов Лион 2-й округ',
    },
  },
  {
    slug: 'lyon-3',
    city: 'Lyon 3ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 3ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 3ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 3rd District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 3-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 3ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 3rd district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 3-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 3ème arrondissement',
      en: 'Website creation Lyon 3rd district',
      ru: 'Создание сайтов Лион 3-й округ',
    },
  },
  {
    slug: 'lyon-4',
    city: 'Lyon 4ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 4ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 4ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 4th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 4-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 4ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 4th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 4-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 4ème arrondissement',
      en: 'Website creation Lyon 4th district',
      ru: 'Создание сайтов Лион 4-й округ',
    },
  },
  {
    slug: 'lyon-5',
    city: 'Lyon 5ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 5ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 5ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 5th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 5-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 5ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 5th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 5-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 5ème arrondissement',
      en: 'Website creation Lyon 5th district',
      ru: 'Создание сайтов Лион 5-й округ',
    },
  },
  {
    slug: 'lyon-6',
    city: 'Lyon 6ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 6ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 6ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 6th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 6-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 6ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 6th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 6-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 6ème arrondissement',
      en: 'Website creation Lyon 6th district',
      ru: 'Создание сайтов Лион 6-й округ',
    },
  },
  {
    slug: 'lyon-7',
    city: 'Lyon 7ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 7ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 7ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 7th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 7-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 7ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 7th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 7-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 7ème arrondissement',
      en: 'Website creation Lyon 7th district',
      ru: 'Создание сайтов Лион 7-й округ',
    },
  },
  {
    slug: 'lyon-8',
    city: 'Lyon 8ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 8ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 8ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 8th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 8-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 8ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 8th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 8-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 8ème arrondissement',
      en: 'Website creation Lyon 8th district',
      ru: 'Создание сайтов Лион 8-й округ',
    },
  },
  {
    slug: 'lyon-9',
    city: 'Lyon 9ème arrondissement',
    region: 'Auvergne-Rhône-Alpes',
    keyword: 'création de site web lyon 9ème arrondissement',
    title: {
      fr: 'Création de site web Lyon 9ème arrondissement | SIDIKOFF DIGITAL',
      en: 'Website creation Lyon 9th District | SIDIKOFF DIGITAL',
      ru: 'Создание сайтов Лион 9-й округ | SIDIKOFF DIGITAL',
    },
    description: {
      fr: 'Création de site web Lyon 9ème arrondissement : développeur web expert en sites internet modernes. Solutions professionnelles React, Next.js, SEO.',
      en: 'Website creation Lyon 9th district: expert web developer for modern websites. Professional React, Next.js, SEO solutions.',
      ru: 'Создание сайтов Лион 9-й округ: эксперт веб-разработчик по современным сайтам. Профессиональные решения React, Next.js, SEO.',
    },
    badgeText: {
      fr: 'Création de site web Lyon 9ème arrondissement',
      en: 'Website creation Lyon 9th district',
      ru: 'Создание сайтов Лион 9-й округ',
    },
  },

  // Generate all French regions
  ...FRENCH_REGIONS.map((region) => generateSEOLocation('region', region)),

  // Generate all major French cities
  ...FRENCH_CITIES.map((city) => generateSEOLocation('city', city)),
]

// Function to get SEO location by slug
export function getSEOLocationBySlug(slug: string): SEOLocation | undefined {
  return SEO_LOCATIONS.find((location) => location.slug === slug)
}

// Function to generate SEO metadata for location pages
export function generateLocationSEOMetadata(location: SEOLocation, locale: Locale): Metadata {
  return generateSEOMetadata({
    title: location.title[locale],
    description: location.description[locale],
    keywords: [location.keyword, ...DEFAULT_SEO.keywords.slice(0, 50)], // Include primary keyword + top 50 general keywords
    canonicalUrl: createCanonicalUrl(`/seo/${location.slug}`, locale),
    locale,
    alternateLanguages: generateLanguageAlternates(`/seo/${location.slug}`),
    ogImage: '/images/og-seo-location.jpg',
    ogType: 'website',
  })
}

// Business locations - Couverture complète des principales villes françaises
export const businessLocations: LocalBusiness[] = [
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Paris',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '77 Ter Rue Michel Ange',
      addressLocality: 'Paris',
      postalCode: '75016',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '48.8566',
      longitude: '2.3522',
    },
    areaServed: [
      'Paris',
      'Île-de-France',
      'Seine-et-Marne',
      'Yvelines',
      'Essonne',
      'Hauts-de-Seine',
      'Seine-Saint-Denis',
      'Val-de-Marne',
      "Val-d'Oise",
      'Toulouse',
      'Lyon',
      'Strasbourg',
      'Mulhouse',
      'Colmar',
      'Reims',
      'Clermont-Ferrand',
      'Bordeaux',
      'Nice',
      'Nantes',
      'Lille',
      'Montpellier',
      'Rennes',
      'Toulon',
      'Marseille',
      'France',
      'Belgique',
      'Suisse',
      'Luxembourg',
      'Allemagne',
      'Italie',
      'Espagne',
      'Portugal',
    ],
    hasMap: 'https://maps.app.goo.gl/7219cD6xWk5tdYpb6',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Toulouse',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '22 Bd Maréchal Leclerc',
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '43.6047',
      longitude: '1.4442',
    },
    areaServed: [
      'Toulouse',
      'Occitanie',
      'Haute-Garonne',
      'Ariège',
      'Aveyron',
      'Gard',
      'Gers',
      'Hérault',
      'Lot',
      'Lozère',
      'Hautes-Pyrénées',
      'Pyrénées-Orientales',
      'Tarn',
      'Tarn-et-Garonne',
      'Montauban',
      'Narbonne',
      'Perpignan',
      'Limoges',
      'Limousin',
      'Haute-Vienne',
      'Creuse',
      'Corrèze',
      'Dordogne',
      'Gironde',
      'Landes',
      'Pyrénées-Atlantiques',
      'Hautes-Pyrénées',
      'Pyrénées-Orientales',
      'Ariège',
      'Aveyron',
      'Gard',
      'Hérault',
      'Lot',
      'Montastruc-la-Conseillère',
      'Saint-Sulpice-la-Pointe',
      'Saint-Cyprien',
      'Saint-Gaudens',
      'Saint-Jean-Lasselle',
      'Saint-Lys',
      'Saint-Michel-de-Rieufret',
      'Saint-Pé-de-Bigorre',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Toulouse+France',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Lyon',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '25 Rue de la République',
      addressLocality: 'Lyon',
      postalCode: '69002',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7640',
      longitude: '4.8357',
    },
    areaServed: [
      'Lyon',
      'Auvergne-Rhône-Alpes',
      'Rhône',
      'Métropole de Lyon',
      'Ain',
      'Allier',
      'Ardèche',
      'Cantal',
      'Drôme',
      'Isère',
      'Loire',
      'Haute-Loire',
      'Puy-de-Dôme',
      'Savoie',
      'Haute-Savoie',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Lyon+France',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Strasbourg',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '15 Place Kléber',
      addressLocality: 'Strasbourg',
      postalCode: '67000',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '48.5734',
      longitude: '7.7521',
    },
    areaServed: [
      'Strasbourg',
      'Grand Est',
      'Bas-Rhin',
      'Haut-Rhin',
      'Ardennes',
      'Aube',
      'Marne',
      'Haute-Marne',
      'Meurthe-et-Moselle',
      'Meuse',
      'Moselle',
      'Vosges',
      'Mulhouse',
      'Colmar',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Strasbourg+France',
  },
]

// Generate SEO metadata
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    locale,
    alternateLanguages,
    ogImage = DEFAULT_SEO.defaultImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noIndex = false,
    publishedTime,
    modifiedTime,
    authors,
    tags,
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords],
    authors: authors?.map((author) => ({ name: author })),
    creator: 'Sardorbek SIDIKOV',
    publisher: 'Sardorbek SIDIKOV',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: ogType,
      publishedTime,
      modifiedTime,
      tags,
    },

    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
      creator: DEFAULT_SEO.twitterHandle,
    },

    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  }

  return metadata
}

// Generate localized SEO metadata for all languages
export function generateLocalizedSEOMetadata(locale: Locale): Metadata {
  const isHomePage = true

  // Localized titles based on language
  const titles = {
    fr: isHomePage
      ? 'Création de Sites Web Professionnels | SIDIKOFF DIGITAL'
      : 'SIDIKOFF DIGITAL - Agence Web',
    en: isHomePage
      ? 'Professional Website Creation | SIDIKOFF DIGITAL'
      : 'SIDIKOFF DIGITAL - Web Agency',
    ru: isHomePage
      ? 'Создание профессиональных сайтов | SIDIKOFF DIGITAL'
      : 'SIDIKOFF DIGITAL - Веб-агентство',
  }

  // Localized descriptions based on language
  const descriptions = {
    fr: 'Développeur Web Full Stack spécialisé en React, Next.js, TypeScript. Solutions de développement web modernes, applications sur mesure, optimisation SEO et consultation technique à Paris, Lyon, Toulouse, Strasbourg.',
    en: 'Full Stack Web Developer specialized in React, Next.js, TypeScript. Modern web development solutions, custom applications, SEO optimization and technical consulting in Paris, Lyon, Toulouse, Strasbourg.',
    ru: 'Full Stack веб-разработчик, специализирующийся на React, Next.js, TypeScript. Современные решения веб-разработки, индивидуальные приложения, SEO-оптимизация и техническое консультирование в Париже, Лионе, Тулузе, Страсбурге.',
  }

  const seoData = {
    title: titles[locale],
    description: descriptions[locale],
    keywords:
      locale === 'fr'
        ? [
            // French keywords (existing extensive list)
            ...DEFAULT_SEO.keywords,
          ]
        : locale === 'en'
          ? [
              // English keywords
              'web developer',
              'freelance web developer',
              'web development services',
              'website creation',
              'web development Paris',
              'web development Lyon',
              'web development Toulouse',
              'web development Strasbourg',
              'web development France',
              'React developer',
              'Next.js expert',
              'TypeScript developer',
              'full stack developer',
              'frontend development',
              'backend development',
              'website development',
              'web agency',
              'digital agency',
              'web design',
              'responsive design',
              'SEO optimization',
              'web performance',
              'e-commerce development',
              'custom web solutions',
              'web consultation',
              'professional websites',
              'modern web applications',
            ]
          : [
              // Russian keywords
              'веб-разработчик',
              'фриланс веб-разработчик',
              'создание сайтов',
              'веб-разработка',
              'веб-разработка Париж',
              'веб-разработка Лион',
              'веб-разработка Тулуза',
              'веб-разработка Страсбург',
              'веб-разработка Франция',
              'React разработчик',
              'Next.js эксперт',
              'TypeScript разработчик',
              'full stack разработчик',
              'frontend разработка',
              'backend разработка',
              'разработка сайтов',
              'веб-агентство',
              'цифровое агентство',
              'веб-дизайн',
              'адаптивный дизайн',
              'SEO оптимизация',
              'производительность веб-сайтов',
              'разработка электронной коммерции',
              'индивидуальные веб-решения',
              'веб-консультации',
              'профессиональные сайты',
              'современные веб-приложения',
            ],
    canonicalUrl: 'https://sidikoff.com/',
    locale: locale as Locale,
    alternateLanguages: {
      fr: 'https://sidikoff.com/',
      en: 'https://sidikoff.com/en',
      ru: 'https://sidikoff.com/ru',
    },
    ogImage: '/images/og-homepage.jpg',
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
  }

  return generateSEOMetadata(seoData)
}

// Generate language alternates
export function generateLanguageAlternates(
  path: string,
  locales: Locale[] = ['fr', 'en', 'ru']
): Record<string, string> {
  const alternates: Record<string, string> = {}

  locales.forEach((locale) => {
    alternates[locale] = createCanonicalUrl(path, locale)
  })

  return alternates
}

// Create canonical URL
export function createCanonicalUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // French is the default locale, no prefix needed
  if (locale === 'fr') {
    return `${DEFAULT_SEO.siteUrl}${cleanPath ? '/' + cleanPath : ''}`
  }

  // Other locales get prefixes
  return `${DEFAULT_SEO.siteUrl}/${locale}${cleanPath ? '/' + cleanPath : ''}`
}

// Generate local business schema
export function generateLocalBusinessSchema(
  business: LocalBusiness,
  includeRating: boolean = true
) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${business.url}#LocalBusiness`,
    name: business.name,
    description: `Développeur Web Full Stack spécialisé en React, Next.js, TypeScript. Solutions de développement web modernes et performantes pour entreprises et startups.`,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: business.address.addressCountry,
      addressLocality: business.address.addressLocality,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    sameAs: [
      'https://github.com/sidikoff',
      'https://linkedin.com/in/sidikoff',
      'https://twitter.com/sidikoffdigital',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'France',
    },
    priceRange: '€€',
    serviceType: [
      'Développement Web Frontend',
      'Développement Web Backend',
      'Développement Web Full Stack',
      'Optimisation & Performance',
      'Consultation Technique',
    ],
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'React Development',
      'Next.js Development',
      'TypeScript Programming',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'SEO Optimization',
      'Web Performance',
      'Modern Web Applications',
    ],
    slogan: 'Votre transformation digitale commence ici',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Sardorbek SIDIKOV',
      jobTitle: 'Développeur Web Full Stack',
      worksFor: business.name,
      sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    },
  }

  // Only add aggregateRating to the main business location
  if (includeRating) {
    return {
      ...baseSchema,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '20',
      },
    }
  }

  return baseSchema
}

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sidikoff.com#Organization',
  name: 'SIDIKOFF DIGITAL',
  legalName: 'SIDIKOFF DIGITAL - Création de Sites Web | Agence Web',
  url: 'https://sidikoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sidikoff.com/images/logo-sidikoff.svg',
    width: 300,
    height: 100,
  },
  description:
    'Expert en développement web full stack spécialisé en React, Next.js, TypeScript. Services professionnels en France : Paris, Lyon, Toulouse, Strasbourg, Mulhouse, Colmar et toute la France. Création de sites web modernes, applications sur mesure, optimisation SEO.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Sardorbek SIDIKOV',
    jobTitle: 'Développeur Web Full Stack',
    url: 'https://sidikoff.com/',
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33626932734',
      email: 's.sidikoff@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English', 'Russian'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '77 Ter Rue Michel Ange',
    postalCode: '75016',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'Place',
      name: 'Europe',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Île-de-France',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Auvergne-Rhône-Alpes',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Occitanie',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Grand Est',
    },
    {
      '@type': 'City',
      name: 'Paris',
    },
    {
      '@type': 'City',
      name: 'Lyon',
    },
    {
      '@type': 'City',
      name: 'Toulouse',
    },
    {
      '@type': 'City',
      name: 'Strasbourg',
    },
    {
      '@type': 'City',
      name: 'Mulhouse',
    },
    {
      '@type': 'City',
      name: 'Colmar',
    },
  ],
  knowsAbout: [
    'React Development',
    'Next.js Development',
    'TypeScript Programming',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'SEO Optimization',
    'Web Performance Optimization',
    'Modern Web Applications',
    'API Development',
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'France',
  },
  sameAs: [
    'https://github.com/ssidikov',
    'https://linkedin.com/in/sardorbeksidikov',
    'https://twitter.com/sidikoffdigital',
  ],
}

// Structured data generators for better SEO

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate article structured data
export function generateArticleStructuredData(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: {
      '@type': 'ImageObject',
      url: article.image,
    },
    url: article.url,
  }
}
