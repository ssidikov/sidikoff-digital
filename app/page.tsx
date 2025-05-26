'use client'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Prices from '@/components/Prices'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo'

// Structured data for homepage
const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sidikoff-digital.fr/#webpage',
  url: 'https://sidikoff-digital.fr/',
  name: 'SIDIKOFF DIGITAL - Agence Web à Paris',
  description:
    'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale',
  isPartOf: {
    '@id': 'https://sidikoff-digital.fr/#website',
  },
  about: {
    '@id': 'https://sidikoff-digital.fr/#organization',
  },
  mainEntity: {
    '@id': 'https://sidikoff-digital.fr/#business',
  },
}

// Services structured data
const servicesSchema = [
  generateServiceSchema({
    name: 'Création de Sites Web',
    description: 'Développement de sites internet modernes, responsifs et optimisés SEO',
    price: '500',
    areaServed: 'Paris, France',
  }),
  generateServiceSchema({
    name: 'Applications Web',
    description: "Développement d'applications web sur mesure avec technologies modernes",
    price: '1500',
    areaServed: 'Paris, France',
  }),
  generateServiceSchema({
    name: 'E-commerce',
    description: 'Création de boutiques en ligne performantes et sécurisées',
    price: '1200',
    areaServed: 'Paris, France',
  }),
]

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: "Combien coûte la création d'un site web ?",
    answer:
      'Nos tarifs commencent à 500€ pour un site vitrine simple. Le prix varie selon vos besoins spécifiques : nombre de pages, fonctionnalités, design personnalisé, etc. Nous proposons un devis gratuit et personnalisé.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site web ?',
    answer:
      'Un site vitrine simple prend généralement 2-3 semaines. Pour un site plus complexe avec fonctionnalités avancées, comptez 4-8 semaines. Nous définissons ensemble un planning précis dès le début du projet.',
  },
  {
    question: 'Proposez-vous la maintenance de sites web ?',
    answer:
      'Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et les sauvegardes de votre site. Nous offrons également un support technique et des conseils pour optimiser votre présence en ligne.',
  },
  {
    question: 'Mes sites sont-ils optimisés pour le référencement SEO ?',
    answer:
      'Absolument ! Tous nos sites sont conçus avec les bonnes pratiques SEO : structure optimisée, balises méta, vitesse de chargement, responsive design, contenu structuré. Nous proposons également des prestations SEO avancées.',
  },
  {
    question: 'Travaillez-vous avec des clients en dehors de Paris ?',
    answer:
      'Bien que nous soyons basés à Paris, nous travaillons avec des clients partout en France. Nous organisons des réunions en visioconférence et nous déplaçons si nécessaire pour les projets importants.',
  },
])

export default function Page() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <StructuredData customData={homepageSchema} />
      {/* Structured Data for Services */}
      {servicesSchema.map((schema, index) => (
        <StructuredData key={index} customData={schema} />
      ))}
      <StructuredData customData={faqSchema} />

      <div className='scroll-smooth min-h-screen bg-background text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
        <Header />
        <main>
          <Hero />
          <Expertise />
          <About />
          <Technologies />
          <Portfolio />
          <Services />
          <Prices />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
