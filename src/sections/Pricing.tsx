'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import PricingCard from '@/components/ui/PricingCard'
import Section, { SectionHeader } from '@/components/ui/Section'
import { cardStyles } from '@/utils/styles'

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
    website_creation_title?: string
    maintenance?: {
      title?: string
      subtitle?: string
      plans?: {
        basic?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
        advanced?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
        premium?: {
          name?: string
          price?: string
          description?: string
          features?: string[]
          cta?: string
        }
      }
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
  className?: string
}

export default function Pricing({ locale, className }: PricingProps) {
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
      price: dict?.pricing?.plans?.essentiel?.price || '800 €',
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
          'Livraison en 7 jours ouvrés',
          '🧩 Objectif : avoir une présence pro, rapidement, sans complexité',
        ]
      ).map((text: string) => ({ text, included: true })),
      ctaText: dict?.pricing?.plans?.essentiel?.cta || 'Commencer',
      isPopular: false,
      isHighlighted: false,
    },
    {
      name: dict?.pricing?.plans?.pro?.name || 'Pro',
      price: dict?.pricing?.plans?.pro?.price || '1500 €',
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
          'Livraison en 7-14 jours ouvrés',
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
      id='pricing'
      variant='pricing'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      className={className || ''}
      aria-labelledby='pricing-title'>
      <div className='relative z-10'>
        <SectionHeader
          title={dict?.pricing?.title || 'Nos Offres'}
          subtitle={dict?.pricing?.subtitle || 'Transparentes & Adaptées'}
          description={
            dict?.pricing?.description ||
            'Choisissez la solution qui correspond parfaitement à vos besoins et à votre budget. Tous nos projets incluent un design moderne, un développement professionnel et un support complet.'
          }
          titleId='pricing-title'
          className='text-left mb-16'
        />

        {/* Badges de confiance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-4 mb-8'>
          <div className='px-6 py-3 rounded-full flex items-center gap-2 bg-blue-100/60 text-green-500 p-4'>
            <CheckIcon className='w-4 h-4 bg-green-200 rounded-full' />
            <span className='text-sm md:text-base font-medium'>
              {dict?.pricing?.guarantee_badge || 'Résultats garantis • Livraison garantie'}
            </span>
          </div>
        </motion.div>

        {/* Titre pour les tarifs de création de sites web */}
        {dict?.pricing?.website_creation_title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              {dict.pricing.website_creation_title}
            </h3>
          </motion.div>
        )}

        {/* Grille des cartes de tarification */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-8xl mx-auto'>
          {pricingPlans.map((plan, index) => (
            <div key={plan.name}>
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

        {/* Section des plans de maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-20'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              {dict?.pricing?.maintenance?.title || 'Plans de Maintenance'}
            </h3>
            <p className='text-lg max-w-2xl mx-auto'>
              {dict?.pricing?.maintenance?.subtitle ||
                'Choisissez le niveau de support adapté à vos besoins'}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {/* Plan Basic */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border border-gray-200 relative flex flex-col h-full`}>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.basic?.name || 'Basique'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.basic?.price || '100 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.basic?.description ||
                        "L'essentiel pour rester en ligne"}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.basic?.features || [
                          'Hébergement sécurisé',
                          'Nom de domaine',
                          "Mises à jour de contenu mensuelles (jusqu'à 3 changements)",
                          'Vérification SEO de base',
                          'Support technique par email',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='secondary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('basic')}>
                    {dict?.pricing?.maintenance?.plans?.basic?.cta || 'Choisir Basique'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Plan Advanced */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border-2 border-[#667eea] relative flex flex-col h-full`}>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-[#667eea] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                    Populaire
                  </span>
                </div>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.name || 'Avancé'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.price || '200 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.advanced?.description ||
                        'Pour les entreprises qui veulent croître'}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.advanced?.features || [
                          'Tout ce qui est inclus dans Basique',
                          "SEO optimisation jusqu'à 2 nouvelles pages chaque mois",
                          'Surveillance des performances et de la disponibilité du site',
                          'Rapports de trafic mensuels',
                          "Configuration d'analyses des visiteurs",
                          'Configuration de Google Ads',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='primary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('advanced')}>
                    {dict?.pricing?.maintenance?.plans?.advanced?.cta || 'Choisir Avancé'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Plan Premium */}
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${cardStyles.card} border border-yellow-400 relative flex flex-col h-full`}>
                <div className='flex-1'>
                  <div className='p-6'>
                    <h4 className='text-xl font-bold text-primary mb-2'>
                      {dict?.pricing?.maintenance?.plans?.premium?.name || 'Premium'}
                    </h4>
                    <div className='text-3xl font-bold mb-2'>
                      {dict?.pricing?.maintenance?.plans?.premium?.price || '400 €/mois'}
                    </div>
                    <p className='mb-6'>
                      {dict?.pricing?.maintenance?.plans?.premium?.description ||
                        'Solution complète pour entreprises ambitieuses'}
                    </p>
                    <ul className='space-y-3 text-left'>
                      {(
                        dict?.pricing?.maintenance?.plans?.premium?.features || [
                          'Tout ce qui est inclus dans Avancé',
                          'Mises à jour de contenu régulières à la demande',
                          'Intégration de systèmes de paiement (PayPal, Stripe)',
                          'Consultation pour les améliorations du site web',
                          'Support premium et rapide via WhatsApp/Telegram',
                          'Google Analytics, Google Ads, analyses et rapports mensuels',
                        ]
                      ).map((feature: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-200 text-green-600 mt-0.5'>
                            <CheckIcon className='w-3 h-3' />
                          </div>
                          <span className='text-sm'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='p-6 pt-0 mt-auto'>
                  <CTAButton
                    variant='primary'
                    size='md'
                    className='w-full'
                    onClick={() => handlePlanSelect('premium')}>
                    {dict?.pricing?.maintenance?.plans?.premium?.cta || 'Choisir Premium'}
                  </CTAButton>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
