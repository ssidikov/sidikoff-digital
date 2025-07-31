'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PricingCard from '@/components/ui/PricingCard'
import Section, { SectionHeader } from '@/components/ui/Section'

// Simple SVG icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
  </svg>
)

interface Dictionary {
  pricing?: {
    title?: string
    subtitle?: string
    description?: string
    guarantee_badge?: string
    maintenance?: {
      title?: string
      billing?: string
      features?: string[]
      cta?: string
    }
    plans?: {
      essentiel?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
      pro?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
      entreprise?: {
        name?: string
        price?: string
        description?: string
        features?: string[]
        cta?: string
        popular?: boolean
      }
    }
  }
}

interface PricingProps {
  locale: string
}

export default function Pricing({ locale }: PricingProps) {
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dictionary = await import(`../../locales/${locale}/common.json`)
        setDict(dictionary.default)
      } catch {
        // Fallback to French if locale not found
        const dictionary = await import('../../locales/fr/common.json')
        setDict(dictionary.default)
      }
    }
    loadDictionary()
  }, [locale])

  if (!dict) return null

  // Données des plans tarifaires depuis la localisation
  const pricingPlans = [
    {
      name: dict?.pricing?.plans?.essentiel?.name || 'Essentiel',
      price: dict?.pricing?.plans?.essentiel?.price || 'à partir de 590 €',
      period: '',
      description:
        dict?.pricing?.plans?.essentiel?.description ||
        'Parfait pour lancer votre activité ou moderniser votre image en ligne',
      features: (
        dict?.pricing?.plans?.essentiel?.features || [
          'Page unique claire et professionnelle',
          'Design moderne qui rassure',
          'Texte structuré et impactant',
          'Optimisation SEO de base',
          'Formulaire de contact intégré',
          'Compatible mobile/tablette/ordinateur',
          '🧩 Objectif : avoir une présence pro, rapidement, sans complexité',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.essentiel?.cta || 'Commencer',
      isPopular: false,
      isHighlighted: false,
    },
    {
      name: dict?.pricing?.plans?.pro?.name || 'Pro',
      price: dict?.pricing?.plans?.pro?.price || 'à partir de 900 €',
      period: '',
      description:
        dict?.pricing?.plans?.pro?.description ||
        'Solution complète pour les entreprises en croissance avec besoins avancés',
      features: (
        dict?.pricing?.plans?.pro?.features || [
          'Site complet 4 à 6 pages (Accueil, Services, À propos, Contact, etc.)',
          'Rédaction de contenus sur-mesure',
          'Optimisation SEO avancée (Google Business, balises, structure)',
          'Statistiques simples (Google Analytics)',
          'Design premium avec animations modernes',
          'Formation courte pour gérer votre site',
          'Livraison en 14 jours ouvrés',
          '🔥 Recommandé pour créer une vraie autorité en ligne et générer des leads',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.pro?.cta || 'Choisir Pro',
      isPopular: true,
      isHighlighted: true,
    },
    {
      name: dict?.pricing?.plans?.entreprise?.name || 'Entreprise',
      price: dict?.pricing?.plans?.entreprise?.price || 'Sur devis',
      period: '',
      description:
        dict?.pricing?.plans?.entreprise?.description ||
        'Solution haut de gamme adaptée à votre stratégie business',
      features: (
        dict?.pricing?.plans?.entreprise?.features || [
          'Analyse personnalisée de vos objectifs et de votre marché',
          'Développement spécifique (ex : réservation, espace client, boutique en ligne)',
          'Design unique et totalement sur-mesure',
          'Stratégie SEO complète (contenu, technique, sémantique)',
          'Accompagnement digital sur 1 à 3 mois',
          'Fonctionnalités avancées (automatisation, blog, podcast, etc.)',
          'Support continu et conseils personnalisés',
          '🎯 Objectif : transformer votre site en un outil de croissance et de conversion',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.entreprise?.cta || 'Nous contacter',
      isPopular: false,
      isHighlighted: false,
    },
  ]

  const handlePlanSelect = (planName: string) => {
    // Redirection vers la page de contact avec le plan présélectionné
    const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact?plan=${planName.toLowerCase()}`
    window.location.href = contactUrl
  }

  return (
    <Section
      id="pricing"
      background="pattern"
      padding="lg"
      contentWidth="wide"
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#f9f7f7',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y'
      }}
      aria-labelledby="pricing-title"
    >
      <SectionHeader
        title={dict?.pricing?.title || 'Nos Offres'}
        subtitle={dict?.pricing?.subtitle || 'Transparentes & Adaptées'}
        description={dict?.pricing?.description || 'Choisissez la solution qui correspond parfaitement à vos besoins et à votre budget. Tous nos projets incluent un design moderne, un développement professionnel et un support complet.'}
        titleId="pricing-title"
        className="text-left mb-16 mt-6"
      />

      {/* Badges de confiance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-4 mb-8'>
        <div className='px-6 py-3 rounded-full shadow-md flex items-center gap-2 text-green-500 p-4 backdrop-blur-xl bg-white/20 border-2 border-white/30'>
          <CheckIcon className='w-3 h-3 bg-green-200 rounded-full' />
          <span className='text-sm font-medium text-gray-700'>
            {dict?.pricing?.guarantee_badge || 'Résultats garantis • Livraison garantie'}
          </span>
        </div>
      </motion.div>

      {/* Grille des cartes de tarification */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-8xl mx-auto'>
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className='h-full'>
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
                isHighlighted={plan.isHighlighted}
                onSelect={() => handlePlanSelect(plan.name)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Section informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'>
          <div
            className='rounded-2xl p-8 max-w-4xl mx-auto shadow-xl bg-white/20 border-2 border-white/30 '
            style={{
              backdropFilter: 'blur(16px) saturate(100%)',
            }}>
            <h3 className='text-2xl font-bold text-[#112D4E] mb-4'>
              {dict?.pricing?.maintenance?.title || 'Maintenance et Support'}
            </h3>
            <p className='text-gray-600 mb-2 font-semibold'>
              {dict?.pricing?.maintenance?.billing ||
                'Facturation horaire ou forfaitaire selon la demande'}
            </p>
            <div className='text-gray-600 mb-6 leading-relaxed text-left max-w-2xl mx-auto'>
              <ul className='space-y-3'>
                {(
                  dict?.pricing?.maintenance?.features || [
                    'Accompagnement personnalisé après livraison',
                    'Interventions ponctuelles pour modifications et mises à jour',
                    'Support technique réactif par email, téléphone, WhatsApp ou Telegram',
                  ]
                ).map((feature: string, index: number) => (
                  <li key={index} className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600'>
                      <CheckIcon className='w-3 h-3' />
                    </div>
                    <span className='text-base text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CTAButton
              variant='primary'
              size='md'
              onClick={() => handlePlanSelect('custom')}
              ariaLabel={dict?.pricing?.maintenance?.cta || 'Demander un devis'}>
              {dict?.pricing?.maintenance?.cta || 'Demander un devis'}
            </CTAButton>
          </div>
        </motion.div>
    </Section>
  )
}
