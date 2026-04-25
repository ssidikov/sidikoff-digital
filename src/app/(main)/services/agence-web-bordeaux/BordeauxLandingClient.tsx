'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MapPin, Globe, Zap, Users, Code, LineChart, ShieldCheck } from 'lucide-react'
import { FAQAccordion } from '@/components/FAQAccordion'

const services = [
  {
    icon: <Globe className='w-8 h-8 text-white' />,
    title: 'Site Internet Vitrine',
    description: 'Présentez votre entreprise bordelaise avec un site design, rapide et optimisé pour Google.',
  },
  {
    icon: <Code className='w-8 h-8 text-white' />,
    title: 'Développement Sur Mesure',
    description: 'Des applications web et logiciels métiers adaptés à vos processus internes.',
  },
  {
    icon: <LineChart className='w-8 h-8 text-white' />,
    title: 'SEO & Référencement',
    description: 'Atteignez la première page Google sur "agence web bordeaux" et vos mots-clés stratégiques.',
  },
  {
    icon: <ShieldCheck className='w-8 h-8 text-white' />,
    title: 'Maintenance Sécurisée',
    description: 'Hébergement performant, sauvegardes quotidiennes et mises à jour de sécurité de votre site.',
  },
  {
    icon: <Users className='w-8 h-8 text-white' />,
    title: 'UX/UI Design',
    description: 'Des interfaces intuitives conçues pour convertir vos visiteurs en clients fidèles.',
  },
  {
    icon: <Zap className='w-8 h-8 text-white' />,
    title: 'Performances Web',
    description: 'Optimisation de la vitesse de chargement (Core Web Vitals) pour une expérience utilisateur fluide.',
  },
]

const processSteps = [
  {
    title: 'Découverte',
    description: 'Nous analysons votre marché bordelais, vos concurrents et définissons ensemble vos objectifs commerciaux.',
  },
  {
    title: 'Stratégie & Design',
    description: 'Création d\'une arborescence SEO et conception de maquettes UI/UX alignées avec votre image de marque.',
  },
  {
    title: 'Développement',
    description: 'Intégration de votre site web en utilisant des technologies modernes (React, Next.js, Tailwind CSS).',
  },
  {
    title: 'Lancement & Suivi',
    description: 'Mise en ligne, formation à l\'outil de gestion et suivi de vos performances SEO sur le long terme.',
  },
]

const pricingPlans = [
  {
    name: 'Starter Bordeaux',
    price: '990 €',
    description: 'Pour les freelances, artisans et petites entreprises locales.',
    features: [
      'Site vitrine (5 pages)',
      'Design responsive',
      'Optimisation SEO de base',
      'Intégration Google My Business',
      'Formulaire de contact',
      'Hébergement 1 an offert'
    ],
    isPrimary: false
  },
  {
    name: 'Pro Gironde',
    price: '1 990 €',
    description: 'Pour les PME et startups souhaitant générer des leads qualifiés.',
    features: [
      'Site vitrine avancé (10-15 pages)',
      'Design sur mesure (UI/UX)',
      'Stratégie SEO locale avancée',
      'Blog & actualités',
      'Système de prise de RDV',
      'Formation administration'
    ],
    isPrimary: true
  },
  {
    name: 'Expert Aquitaine',
    price: 'Sur devis',
    description: 'Pour les projets complexes, e-commerce ou applications métiers.',
    features: [
      'E-commerce ou App Web',
      'Fonctionnalités sur mesure',
      'Synchronisation ERP/CRM',
      'Stratégie SEO nationale',
      'Maintenance évolutive',
      'Support prioritaire 24/7'
    ],
    isPrimary: false
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir une agence web à Bordeaux (ou ciblant Bordeaux) ?',
    answer: 'Collaborer avec une agence qui comprend le marché bordelais vous assure une stratégie digitale adaptée. Nous connaissons les spécificités locales (startups de La French Tech Bordeaux, écosystème viticole, tourisme) et pouvons optimiser votre site pour le SEO local.',
    category: 'strategy'
  },
  {
    id: '2',
    question: 'Quel est le prix d\'un site internet à Bordeaux ?',
    answer: 'Le tarif varie selon la complexité : comptez environ 990 € pour un site vitrine simple, entre 1 500 € et 3 000 € pour un site plus avancé avec stratégie SEO, et à partir de 5 000 € pour une solution e-commerce sur mesure. Nous proposons des devis transparents adaptés à votre budget.',
    category: 'pricing'
  },
  {
    id: '3',
    question: 'Faites-vous du SEO (Référencement Naturel) à Bordeaux ?',
    answer: 'Oui, l\'optimisation SEO est au cœur de nos créations. Nous optimisons votre site techniquement (vitesse, balises) et sémantiquement pour vous aider à atteindre les premiers résultats sur Google pour les recherches liées à votre activité en Gironde.',
    category: 'seo'
  },
  {
    id: '4',
    question: 'Combien de temps faut-il pour créer mon site web ?',
    answer: 'Un site vitrine classique prend généralement 3 à 4 semaines de la conception à la mise en ligne. Pour un projet e-commerce ou un développement sur mesure, le délai varie entre 6 et 12 semaines selon les fonctionnalités requises.',
    category: 'process'
  },
  {
    id: '5',
    question: 'Pourrai-je modifier mon site moi-même ?',
    answer: 'Absolument. Nous utilisons des CMS (systèmes de gestion de contenu) intuitifs ou des interfaces d\'administration personnalisées. À la livraison, nous vous formons pour que vous soyez autonome sur la mise à jour de vos textes, images et articles de blog.',
    category: 'features'
  },
  {
    id: '6',
    question: 'Mon site sera-t-il adapté aux mobiles (responsive) ?',
    answer: 'Oui, 100% de nos sites sont développés avec une approche "Mobile-First". Votre site s\'affichera parfaitement sur smartphones, tablettes et ordinateurs, ce qui est également crucial pour votre référencement Google.',
    category: 'technical'
  },
  {
    id: '7',
    question: 'Proposez-vous la maintenance et l\'hébergement ?',
    answer: 'Oui, nous proposons des contrats de maintenance incluant l\'hébergement sur des serveurs sécurisés et performants, les sauvegardes régulières, et les mises à jour techniques pour garantir la sécurité et la pérennité de votre site web.',
    category: 'services'
  },
  {
    id: '8',
    question: 'Travaillez-vous avec des clients en dehors de Bordeaux ?',
    answer: 'Bien sûr ! Si nous avons une forte expertise sur le marché bordelais et néo-aquitain, nous accompagnons des clients dans toute la France grâce à des outils collaboratifs efficaces (visioconférence, espaces de suivi de projet sécurisés).',
    category: 'location'
  }
]

export default function BordeauxLandingClient() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sidikoff Digital - Agence Web Bordeaux',
    description: 'Agence web spécialisée dans la création de sites internet, le SEO et le développement sur mesure pour les entreprises de Bordeaux et de la Gironde.',
    url: 'https://www.sidikoff.com/services/agence-web-bordeaux',
    telephone: '+33626932734',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bordeaux',
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.837789,
      longitude: -0.57918
    },
    areaServed: {
      '@type': 'City',
      name: 'Bordeaux'
    },
    priceRange: '€€',
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de site internet'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Optimisation SEO'
        }
      }
    ]
  }

  return (
    <div className='min-h-screen bg-zinc-50'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-950'>
        <div className='absolute inset-0 z-0 opacity-40'>
          {/* We use a generic elegant pattern/gradient instead of a specific bordeaux image to ensure reliability */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#722F37]/80 via-zinc-950 to-zinc-950'></div>
        </div>
        
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/20 border border-[#722F37]/50 text-[#D4AF37] mb-8'>
                <MapPin className='w-4 h-4' />
                <span className='text-sm font-semibold tracking-wide uppercase'>Agence Web Bordeaux & Gironde</span>
              </div>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight'>
                Créez un site web qui <span className='text-[#D4AF37]'>rayonne</span> depuis Bordeaux.
              </h1>
              <p className='text-xl text-zinc-300 mb-10 leading-relaxed'>
                Nous accompagnons les entreprises, startups de la French Tech et domaines viticoles de la région bordelaise dans leur transformation digitale. Création de sites internet premium et stratégies SEO gagnantes.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-zinc-950 font-black rounded-sm transition-colors text-lg'>
                    Parler de mon projet
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-[#D4AF37] text-white font-bold rounded-sm transition-colors text-lg'>
                    Voir nos réalisations
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-[#722F37]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-8 md:gap-16 items-center text-[#D4AF37] font-bold text-sm tracking-widest uppercase'>
            <div className='flex items-center gap-2'><CheckCircle className='w-5 h-5' /> Sites Ultra-Rapides</div>
            <div className='flex items-center gap-2'><CheckCircle className='w-5 h-5' /> SEO Optimisé</div>
            <div className='flex items-center gap-2'><CheckCircle className='w-5 h-5' /> Design Premium</div>
            <div className='flex items-center gap-2'><CheckCircle className='w-5 h-5' /> Support Réactif</div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Text Block */}
      <section className='py-24 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='prose prose-lg prose-zinc max-w-none'
          >
            <h2 className='text-3xl font-black text-zinc-900 mb-6'>L'expertise d'une agence digitale experte du marché bordelais</h2>
            <p>
              Dans une métropole aussi dynamique que <strong>Bordeaux</strong>, se démarquer en ligne nécessite plus qu'une simple présence sur les réseaux sociaux. Que vous soyez une startup innovante aux Chartrons, un commerce de proximité à Saint-Michel, ou un domaine viticole prestigieux en Gironde, votre site internet est souvent le premier point de contact avec vos futurs clients.
            </p>
            <p>
              Notre <strong>agence de création de site internet pour le bassin bordelais</strong> conçoit des plateformes digitales qui allient esthétisme premium et performances techniques hors normes. Nous utilisons les technologies les plus avancées (Next.js, React) pour garantir des temps de chargement ultra-rapides, essentiels tant pour l'expérience utilisateur que pour le référencement Google.
            </p>
            <p>
              La clé de votre croissance locale réside dans le <strong>SEO (Référencement Naturel)</strong>. Être visible sur des requêtes stratégiques comme "agence de communication bordeaux" ou "développeur web gironde" demande une optimisation minutieuse du code, de l'architecture et du contenu sémantique. Nous structurons votre site pour capter le trafic qualifié de la région Nouvelle-Aquitaine et le convertir efficacement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-24 bg-zinc-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-zinc-900 mb-6'>Nos services de <span className='text-[#722F37]'>création web</span></h2>
            <p className='text-xl text-zinc-600 max-w-2xl mx-auto'>Des solutions digitales complètes pour accélérer votre croissance en ligne.</p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-xl hover:border-[#722F37] transition-all group'
              >
                <div className='w-16 h-16 bg-[#722F37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-bold text-zinc-900 mb-3'>{service.title}</h3>
                <p className='text-zinc-600 leading-relaxed'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-zinc-950 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black mb-6'>Notre <span className='text-[#D4AF37]'>Méthodologie</span></h2>
            <p className='text-xl text-zinc-400 max-w-2xl mx-auto'>Un processus éprouvé pour transformer votre vision en réalité digitale.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0'></div>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative z-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center'
              >
                <div className='w-12 h-12 bg-[#D4AF37] text-zinc-950 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4 border-4 border-zinc-950'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-zinc-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-zinc-900 mb-6'>Des tarifs <span className='text-[#722F37]'>transparents</span></h2>
            <p className='text-xl text-zinc-600 max-w-2xl mx-auto'>Investissez dans un outil de croissance qui génère du chiffre d'affaires.</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.isPrimary
                    ? 'border-[#722F37] bg-white shadow-xl scale-105 z-10'
                    : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                {plan.isPrimary && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='px-4 py-1 bg-[#D4AF37] text-zinc-950 text-sm font-bold rounded-full tracking-wide uppercase'>Le plus choisi</span>
                  </div>
                )}
                <h3 className='text-xl font-bold text-zinc-900 mb-2'>{plan.name}</h3>
                <div className={`text-4xl font-black mb-2 ${plan.isPrimary ? 'text-[#722F37]' : 'text-zinc-900'}`}>{plan.price}</div>
                <p className='text-zinc-500 mb-6 text-sm'>{plan.description}</p>
                
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.isPrimary ? 'text-[#722F37]' : 'text-zinc-400'}`} />
                      <span className='text-zinc-700 font-medium'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href='/contact'>
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.isPrimary
                      ? 'bg-[#722F37] text-white hover:bg-[#5a252b]'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}>
                    Demander un devis
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-zinc-50 border-t border-zinc-200'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-zinc-900 mb-6'>Questions <span className='text-[#722F37]'>fréquentes</span></h2>
            <p className='text-xl text-zinc-600'>Tout ce que vous devez savoir sur la création de votre site web.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className='py-16 bg-zinc-950 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl font-bold mb-4'>Nos autres zones d'intervention & expertises</h2>
            <p className='text-zinc-400'>Découvrez nos services spécialisés partout en France.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/agence-web-paris' className='px-4 py-2 border border-zinc-700 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm'>Agence Web Paris</Link>
            <Link href='/services/agence-web-lyon' className='px-4 py-2 border border-zinc-700 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm'>Agence Web Lyon</Link>
            <Link href='/services/optimisation-seo' className='px-4 py-2 border border-zinc-700 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm'>Optimisation SEO</Link>
            <Link href='/services/creation-sites-web' className='px-4 py-2 border border-zinc-700 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm'>Création Site Web</Link>
            <Link href='/services/creation-site-ecommerce' className='px-4 py-2 border border-zinc-700 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm'>Création Site E-commerce</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-32 bg-[#722F37] text-white text-center'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl md:text-6xl font-black mb-8'>Prêt à dominer votre marché local ?</h2>
          <p className='text-xl text-[#D4AF37] mb-10 font-bold'>
            Contactez-nous aujourd'hui pour un audit gratuit de votre projet.
          </p>
          <Link href='/contact'>
            <button className='px-10 py-5 bg-[#D4AF37] text-zinc-950 font-black text-xl rounded-sm hover:bg-white transition-colors inline-flex items-center gap-3'>
              Démarrer mon projet <ArrowRight className='w-6 h-6' />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
