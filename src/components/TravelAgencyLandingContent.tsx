'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Globe,
  Map,
  Compass,
  Plane,
  Camera,
  Heart,
  Users,
} from 'lucide-react'

import travelData from '@/locales/fr/travel_agency_landing.json'

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface Solution {
  icon: string
  title: string
  description: string
}

interface Benefit {
  icon: string
  title: string
  description: string
}

interface Step {
  number: string
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
  image?: string
}

interface Question {
  question: string
  answer: string
}

const agencyTypes = [
  {
    icon: '🌍',
    type: 'Tour-Opérateur',
    keywords: 'tour opérateur, voyages organisés, package tout compris',
    description: 'Catalogue de voyages interactif, système de réservation en ligne et moteur de recherche par destination.'
  },
  {
    icon: '👑',
    type: 'Agence Voyage Luxe',
    keywords: 'voyage sur mesure, luxe, voyageurs VIP',
    description: 'Design haut de gamme, galerie de détinations exclusives et suivi personnalisé via espace client sécurisé.'
  },
  {
    icon: '🧗',
    type: 'Voyages Aventure & Sportifs',
    keywords: 'trekking, randonnée, voyage aventure',
    description: 'Galeries photos/vidéos immersives, formulaires de vérification du niveau physique et témoignages voyageurs.'
  },
  {
    icon: '💼',
    type: 'Agence Voyages d\'Affaires',
    keywords: 'voyage corporate, séminaire, incentive',
    description: 'Portail entreprise sécurisé, gestion des notes de frais et système de réservation multi-collaborateurs.'
  },
  {
    icon: '🌿',
    type: 'Écotourisme & Voyages Responsables',
    keywords: 'écotourisme, voyage solidaire, tourisme durable',
    description: 'Labels éco-responsables mis en avant, storytelling des projets solidaires et offres de carbone-neutralité.'
  },
  {
    icon: '👪',
    type: 'Voyages de Groupe & Séniors',
    keywords: 'voyages groupe, circuits séniors, pèlerinages',
    description: 'Calendrier de départs, système d\'inscription de groupe et devis automatisé selon le nombre de participants.'
  }
]

const pricingPlans = [
  {
    name: 'Vitrine Agence',
    price: '1 490 €',
    description: 'Pour une agence indépendante qui modernise sa présence',
    features: [
      '8 pages optimisées SEO',
      'Présentation des destinations',
      'Formulaire de demande de devis',
      'Intégration Google Maps',
      'Hébergement 1 an inclus',
      'Optimisation mobile'
    ],
    isPrimary: false
  },
  {
    name: 'Réservation Pro',
    price: '2 990 €',
    description: 'Pour vendre vos voyages directement en ligne',
    features: [
      '15 pages + catalogue destinations',
      'Système de réservation en ligne',
      'Paiement sécurisé (Stripe)',
      'SEO local avancé + blog voyages',
      'Module avis clients',
      'Rapport mensuel de conversions'
    ],
    isPrimary: true
  },
  {
    name: 'Plateforme Voyage',
    price: '4 990 €',
    description: 'Pour les tour-opérateurs et agences multi-destinations',
    features: [
      'Catalogue interactif multi-destinations',
      'Espace client + gestion réservations',
      'Intégration GDS / API transport',
      'Newsletter automatisée',
      'Optimisation multi-langues',
      'Maintenance 12 mois incluse'
    ],
    isPrimary: false
  }
]

const TravelAgencyLandingContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [activeFeature, setActiveFeature] = useState(0)

  const content = travelData.travel_agency_landing

  const painIcons = {
    globe: Globe,
    map: Map,
    compass: Compass,
    plane: Plane,
    camera: Camera,
  }

  const featureIcons = {
    globe: Globe,
    map: Map,
    compass: Compass,
    plane: Plane,
    camera: Camera,
    heart: Heart,
    users: Users,
    smartphone: Smartphone,
  }

  const solutionIcons = {
    globe: Globe,
    map: Map,
    compass: Compass,
    plane: Plane,
    camera: Camera,
    heart: Heart,
    users: Users,
    smartphone: Smartphone,
  }

  const benefitIcons = {
    globe: Globe,
    map: Map,
    compass: Compass,
    plane: Plane,
    camera: Camera,
    heart: Heart,
    users: Users,
    smartphone: Smartphone,
    trendingDown: TrendingDown,
    checkCircle: CheckCircle,
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-20 md:pt-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center lg:text-left'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                {content.hero.title}
              </h1>
              <p className='text-xl md:text-2xl mb-8 text-blue-100'>{content.hero.subtitle}</p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link
                  href={`/contact`}
                  className='inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                  {content.hero.cta_primary}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <Link
                  href='#portfolio'
                  className='inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-all duration-300'>
                  {content.hero.cta_secondary}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'>
              <div className='relative'>
                <Image
                  src='/images/services/travel/travel-agency-hero.jpg'
                  alt='Création site web agence de voyage'
                  width={600}
                  height={400}
                  quality={95}
                  className='rounded-2xl shadow-2xl'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4'>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='text-center'>
                      <div className='text-blue-600 font-bold text-lg'>24/7</div>
                      <div className='text-gray-600 text-sm'>Réservations</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-blue-600 font-bold text-lg'>100+</div>
                      <div className='text-gray-600 text-sm'>Destinations</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.pain_points.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {content.pain_points.subtitle}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {content.pain_points.points.map((point: PainPoint, index: number) => {
              const IconComponent = painIcons[point.icon as keyof typeof painIcons] || Globe
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-linear-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200'>
                  <div className='bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                    <IconComponent className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{point.title}</h3>
                  <p className='text-gray-600'>{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-indigo-50 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <Image
            src='/images/services/travel/travel-destinations.jpg'
            alt='Background'
            fill
            quality={95}
            className='object-cover'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.solutions.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{content.solutions.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {content.solutions.items.map((solution: Solution, index: number) => {
              const IconComponent =
                solutionIcons[solution.icon as keyof typeof solutionIcons] || Globe
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                    <IconComponent className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{solution.title}</h3>
                  <p className='text-gray-600'>{solution.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.features.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{content.features.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              {content.features.items.map((feature: Feature, index: number) => {
                const IconComponent =
                  featureIcons[feature.icon as keyof typeof featureIcons] || Globe
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setActiveFeature(index)}>
                    <div className='flex items-start space-x-4'>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeFeature === index ? 'bg-blue-500' : 'bg-gray-100'
                        }`}>
                        <IconComponent
                          className={`h-6 w-6 ${
                            activeFeature === index ? 'text-white' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-900 mb-2'>{feature.title}</h3>
                        <p className='text-gray-600'>{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='relative'>
              <div className='relative'>
                <Image
                  src='/images/services/travel/booking-system.jpg'
                  alt='Système de réservation en ligne'
                  width={500}
                  height={400}
                  quality={95}
                  className='rounded-2xl shadow-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <div className='bg-white/95 backdrop-blur-sm rounded-lg p-4'>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {content.features.items[activeFeature]?.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {content.features.items[activeFeature]?.description}
                    </p>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                      <div className='text-center bg-blue-50 rounded-lg p-2'>
                        <div className='text-lg font-bold text-blue-600'>100%</div>
                        <div className='text-xs text-blue-600'>Personnalisable</div>
                      </div>
                      <div className='text-center bg-blue-50 rounded-lg p-2'>
                        <div className='text-lg font-bold text-blue-600'>24/7</div>
                        <div className='text-xs text-blue-600'>Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url("/images/services/travel/travel-destinations.jpg")',
          }}
        />
        <div className='absolute inset-0 bg-linear-to-br from-green-50/90 to-blue-50/90' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.benefits.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{content.benefits.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {content.benefits.items.map((benefit: Benefit, index: number) => {
              const IconComponent =
                benefitIcons[benefit.icon as keyof typeof benefitIcons] || CheckCircle
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow'>
                  <div className='bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconComponent className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                  <p className='text-gray-600 text-sm'>{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-3'>
          <Image
            src='/images/services/travel/travel-planning.jpg'
            alt='Background'
            fill
            quality={95}
            className='object-cover'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.process.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{content.process.subtitle}</p>
          </motion.div>

          <div className='relative'>
            <div className='absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-200 via-blue-500 to-blue-200 transform -translate-y-1/2 hidden lg:block'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {content.process.steps.map((step: Step, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='relative'>
                  <div className='bg-white border-4 border-blue-500 rounded-2xl p-6 text-center relative z-10'>
                    <div className='bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                      {step.number}
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>{step.title}</h3>
                    <p className='text-gray-600 text-sm'>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-linear-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-3'>
          <Image
            src='/images/services/travel/travel-team.jpg'
            alt='Background'
            fill
            quality={95}
            className='object-cover'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {content.testimonials.subtitle}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {content.testimonials.items.map((testimonial: Testimonial, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <blockquote className='text-gray-600 mb-6'>
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className='flex items-center'>
                  <div className='bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-white font-bold text-lg'>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900'>{testimonial.name}</div>
                    <div className='text-gray-500 text-sm'>{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.faq.title}
            </h2>
            <p className='text-xl text-gray-600'>{content.faq.subtitle}</p>
          </motion.div>

          <div className='space-y-4'>
            {content.faq.questions.map((faq: Question, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-gray-50 rounded-2xl overflow-hidden'>
                <button
                  className='w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-100 transition-colors'
                  onClick={() => toggleFaq(index)}>
                  <span className='font-semibold text-gray-900'>{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className='h-5 w-5 text-gray-500' />
                  ) : (
                    <ChevronDown className='h-5 w-5 text-gray-500' />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className='px-8 pb-6'>
                    <p className='text-gray-600'>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Types Section */}
      <section className='py-20 bg-blue-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Tous les types d&apos;agences de voyage</h2>
            <p className='text-xl text-blue-200 max-w-3xl mx-auto'>
              Du tour-opérateur au spécialiste écotourisme, nous créons des sites qui vendent vos voyages.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {agencyTypes.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700 hover:border-orange-400 hover:bg-blue-800 transition-all duration-300'
              >
                <div className='text-4xl mb-4'>{agency.icon}</div>
                <h3 className='text-lg font-bold mb-1'>{agency.type}</h3>
                <p className='text-xs text-orange-400 font-medium mb-3 uppercase tracking-wide'>{agency.keywords}</p>
                <p className='text-blue-200 text-sm leading-relaxed'>{agency.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Tarifs pour votre site agence de voyage</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Des offres adaptées à chaque type d\'agence, pour commencer à vendre en ligne rapidement.
            </p>
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
                    ? 'bg-blue-900 border-blue-700 text-white'
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
              >
                {plan.isPrimary && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full'>Recommandé</span>
                  </div>
                )}
                <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>
                <div className={`text-4xl font-black mb-2 ${plan.isPrimary ? 'text-orange-400' : 'text-blue-600'}`}>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.isPrimary ? 'text-blue-300' : 'text-gray-500'}`}>{plan.description}</p>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPrimary ? 'text-orange-400' : 'text-blue-500'}`} />
                      <span className={`text-sm ${plan.isPrimary ? 'text-blue-200' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href='/contact'>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.isPrimary
                      ? 'bg-orange-500 text-white hover:bg-orange-400'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}>
                    Demander un devis
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className='py-16 bg-gray-50 border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>Nos services pour le tourisme et le commerce local</h2>
            <p className='text-gray-600'>Experts du digital CHR et tourisme à Paris, Lyon et partout en France.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/creation-site-internet-restaurant' className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-700 transition-colors text-sm'>Site Internet Restaurant</Link>
            <Link href='/services/creation-site-ecommerce' className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-700 transition-colors text-sm'>Création Site E-commerce</Link>
            <Link href='/services/agence-web-paris' className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-700 transition-colors text-sm'>Agence Web Paris</Link>
            <Link href='/services/agence-web-lyon' className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-700 transition-colors text-sm'>Agence Web Lyon</Link>
            <Link href='/services/optimisation-seo' className='px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-700 transition-colors text-sm'>Optimisation SEO</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 relative overflow-hidden text-white'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url("/images/services/travel/business-growth.jpg")',
          }}
        />
        <div className='absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-800/85 to-blue-600/85' />
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{content.cta.title}</h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>{content.cta.subtitle}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={`/contact`}
                className='inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                {content.cta.primary}
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link
                href={`/portfolio`}
                className='inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-all duration-300'>
                {content.cta.secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TravelAgencyLandingContent
