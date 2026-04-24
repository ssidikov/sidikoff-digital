import {
  primaryBusinessSchema,
  generateSEOMetadata,
  generateLanguageAlternates,
  createCanonicalUrl,
  generateReviewStructuredData,
  generatePersonSchema,
} from '@/lib/seo-utils'
import { getBlogPosts } from '@/lib/sanity'
import { TESTIMONIALS_DATA } from '@/data/testimonials'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  Hero,
  About,
  Services,
  Pricing,
  Portfolio,
  Testimonials,
  FAQ,
  Contact,
  Actualite,
} from '@/sections'

const SEO_CONFIG = {
  title: 'Agence Web Lyon — Création de Sites Internet Sur Mesure',
  keywords: [
    'agence web Lyon',
    'création site internet Lyon',
    'site web professionnel',
    'création site vitrine',
    'création site e-commerce',
    'refonte site web',
    'agence web France',
    'site web PME',
  ],
  ogImage: '/images/opengraph-fr.png',
} as const

export async function generateMetadata() {
  return generateSEOMetadata({
    title: SEO_CONFIG.title,
    description:
      'Agence web Lyon spécialisée en création de sites internet sur mesure, SEO et refonte. Sites modernes, rapides, livrés en 7–14 jours. Devis gratuit sous 24h.',
    locale: 'fr',
    canonicalUrl: createCanonicalUrl('', 'fr'),
    alternateLanguages: generateLanguageAlternates('', ['fr']),
    ogImage: SEO_CONFIG.ogImage,
    keywords: [...SEO_CONFIG.keywords],
  })
}

function generateHomePageSchemas() {
  const reviewsData = TESTIMONIALS_DATA.map((t) => ({
    author: t.author,
    reviewBody: t.text,
    rating: t.rating,
    datePublished: t.date,
  }))

  return [
    // 1. Primary entity — single ProfessionalService (Villeurbanne/Lyon)
    primaryBusinessSchema,

    // 2. WebSite entity — enables Sitelinks & Search Action
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://www.sidikoff.com/#website',
      name: 'SIDIKOFF DIGITAL',
      alternateName: 'Agence Web Lyon',
      url: 'https://www.sidikoff.com',
      description:
        'Agence web à Villeurbanne et Lyon spécialisée en création de sites internet sur mesure, refonte et SEO.',
      inLanguage: 'fr-FR',
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.sidikoff.com/#organization',
      },
      copyrightYear: new Date().getFullYear(),
    },

    // 3. Reviews — generated server-side from testimonials data
    generateReviewStructuredData(reviewsData),

    // 4. Founder / Person schema
    generatePersonSchema({
      name: 'Sardorbek SIDIKOV',
      jobTitle: 'Développeur Web Full Stack',
      url: 'https://www.sidikoff.com',
      image: 'https://www.sidikoff.com/images/sidikov-web.png',
      sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    }),
  ]
}

export default async function HomePage() {
  const posts = await getBlogPosts()
  const latestPosts = posts.slice(0, 3)
  const schemas = generateHomePageSchemas()

  return (
    <div className='min-h-screen'>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
      <Header />
      <main className='m-0 p-0'>
        <Hero />
        <Services isHomePage={true} />
        <About />
        <Portfolio isHomePage={true} />
        <Pricing />
        <Testimonials />
        <Actualite posts={latestPosts} />
        <FAQ isHomePage={true} />
        <Contact isHomePage={true} />
      </main>
      <Footer />
    </div>
  )
}
