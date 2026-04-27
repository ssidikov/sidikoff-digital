'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Search,
  MapPin,
  BarChart,
  Target,
  FileSearch,
  Award
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Expertise SEO locale ciblée sur Bron et sa périphérie",
  "Audit technique approfondi et résolution des freins Google",
  "Stratégie de contenu (Mots-clés de longue traîne)",
  "Acquisition de backlinks ciblés (Netlinking) pour l'autorité",
  "Augmentation mesurable du trafic organique et des leads"
]

const services = [
  {
    icon: MapPin,
    title: 'SEO Local Bron & Grand Lyon',
    description: 'Optimisation de votre fiche Google Business Profile (Maps) pour écraser la concurrence sur les requêtes de proximité à Bron et alentours.'
  },
  {
    icon: Search,
    title: 'Audit Technique & Sémantique',
    description: 'Détection et correction des erreurs d\'indexation, balises dupliquées, lenteurs serveur et architecture de l\'information.'
  },
  {
    icon: FileSearch,
    title: 'Rédaction Web Optimisée',
    description: 'Création de pages de services et d\'articles de blog enrichis sémantiquement pour répondre à l\'intention de recherche (Search Intent).'
  },
  {
    icon: Target,
    title: 'Stratégie de Netlinking',
    description: 'Campagnes d\'acquisition de liens entrants depuis des sites d\'autorité pour augmenter le "Trust Flow" de votre nom de domaine.'
  },
  {
    icon: BarChart,
    title: 'Analyse & Suivi des KPI',
    description: 'Fourniture de tableaux de bord mensuels (Looker Studio) détaillant les positions acquises, le trafic généré et le ROI.'
  },
  {
    icon: Award,
    title: 'Refonte SEO (Migration)',
    description: 'Accompagnement lors d\'une refonte de site pour garantir qu\'aucune perte de trafic organique ne survienne (Redirections 301 massives).'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Analyse Concurrentielle',
    description: 'Étude des mots-clés sur lesquels vos concurrents brondillants se positionnent et détection des opportunités.'
  },
  {
    number: '02',
    title: 'Optimisation Technique',
    description: 'Correction de la vitesse (Core Web Vitals), structure H1/H2, et maillage interne (Siloing).'
  },
  {
    number: '03',
    title: 'Déploiement de Contenu',
    description: 'Création et intégration de nouvelles pages stratégiques ciblées sur des intentions transactionnelles.'
  },
  {
    number: '04',
    title: 'Autorité & Ajustements',
    description: 'Création de backlinks qualitatifs et ajustement de la stratégie selon les évolutions de l\'algorithme Google.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi le SEO est-il indispensable pour mon entreprise à Bron ?',
    answer: 'Aujourd\'hui, 80% des consommateurs effectuent une recherche sur Google avant de choisir un prestataire ou un commerce de proximité. Si votre entreprise n\'apparaît pas dans les premiers résultats (ou sur la carte Google Maps) pour les recherches à Bron, vous perdez des clients potentiels tous les jours au profit de vos concurrents.',
    category: 'strategy'
  },
  {
    id: '2',
    question: 'En combien de temps mon site sera-t-il sur la première page ?',
    answer: 'Le référencement naturel prend du temps car il repose sur la confiance que Google accorde à votre site. Les premières améliorations techniques peuvent donner des résultats en 1 à 3 mois, mais pour s\'installer durablement en 1ère page sur des requêtes très concurrentielles, il faut généralement 6 à 12 mois de travail régulier.',
    category: 'timing'
  },
  {
    id: '3',
    question: 'Faites-vous uniquement du SEO ou aussi de la publicité (Google Ads) ?',
    answer: 'Nous sommes spécialisés en SEO (trafic gratuit et pérenne), mais nous gérons également des campagnes Google Ads (SEA) pour nos clients. L\'idéal est souvent de combiner les deux : le SEA pour avoir des clients immédiats, et le SEO pour construire une rentabilité à long terme.',
    category: 'service'
  },
  {
    id: '4',
    question: 'Aurez-vous besoin de modifier mon site actuel ?',
    answer: 'Oui. Le SEO nécessite des optimisations techniques (vitesse de chargement, propreté du code, balises sémantiques) et éditoriales (ajout de textes optimisés). Nous interviendrons donc directement sur votre site internet pour implémenter nos recommandations.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Comment mesurez-vous le succès d\'une campagne SEO ?',
    answer: 'Nous ne nous arrêtons pas au simple "volume de trafic". Nous mesurons l\'évolution de vos positions sur les mots-clés stratégiques, l\'augmentation du trafic organique, et surtout, les conversions (nombre d\'appels, demandes de devis, ventes e-commerce générées par le SEO).',
    category: 'results'
  }
]

export default function SeoBronLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop'
            alt='Analyse SEO Data'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-teal-900/40'></div>
        </div>

        {/* Decorative Teal Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-teal-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-full text-sm font-medium'>
                <TrendingUp className='w-4 h-4 mr-2' />
                Agence SEO Local (Bron)
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Consultant <span className='text-teal-400'>SEO</span> à Bron : Attirez plus de clients
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développez votre visibilité sur Google. Nous propulsons les entreprises brondillantes en 1ère page grâce à des stratégies de référencement naturel éprouvées.
                </p>
              </div>

              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-5 h-5 text-teal-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-teal-500 text-slate-900 rounded-lg font-bold hover:bg-teal-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-teal-500/20'>
                    Demander un Audit Gratuit
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Parler à un consultant
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='hidden lg:block relative'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 p-6'>
                <div className='bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200'>
                  {/* Fake Search Bar */}
                  <div className='p-6 border-b border-slate-100 flex items-center bg-slate-50'>
                     <div className='flex-1 h-12 bg-white border border-slate-200 rounded-full flex items-center px-6 shadow-sm'>
                       <span className='text-slate-800 font-medium'>votre service bron</span>
                       <div className='ml-auto w-px h-6 bg-slate-200 mr-4'></div>
                       <Search className='w-5 h-5 text-teal-500' />
                     </div>
                  </div>
                  {/* Fake SERP Results */}
                  <div className='p-6 space-y-8'>
                    {/* Maps Snippet */}
                    <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
                      <div className='flex items-center mb-3'>
                        <MapPin className='w-5 h-5 text-red-500 mr-2' />
                        <span className='font-bold text-slate-900'>Pack Local (Google Maps)</span>
                      </div>
                      <div className='space-y-3'>
                        <div className='flex items-center justify-between bg-white p-2 border rounded shadow-sm relative overflow-hidden'>
                           <div className='absolute left-0 top-0 bottom-0 w-1 bg-teal-500'></div>
                           <span className='font-bold text-blue-800 ml-2'>Votre Entreprise (Bron)</span>
                           <span className='text-yellow-500 text-sm'>★ 4.9 (124 avis)</span>
                        </div>
                        <div className='flex items-center justify-between bg-white p-2 border rounded opacity-60'>
                           <span className='text-blue-800 ml-2'>Concurrent 1</span>
                           <span className='text-yellow-500 text-sm'>★ 4.1 (12 avis)</span>
                        </div>
                      </div>
                    </div>

                    <div className='relative'>
                      <div className='absolute -left-3 -top-3 w-8 h-8 bg-teal-500 text-white font-bold rounded-full flex items-center justify-center shadow-lg text-sm z-10'>#1</div>
                      <div className='bg-teal-50/50 p-4 rounded-lg border border-teal-100 pl-8'>
                        <div className='text-sm text-slate-500 flex items-center mb-1'>
                          <span className='w-4 h-4 bg-slate-200 rounded-full mr-2'></span>
                          https://www.votre-site.fr
                        </div>
                        <div className='text-xl text-blue-800 font-medium hover:underline cursor-pointer mb-2'>
                          Votre Expertise à Bron - Devis Gratuit
                        </div>
                        <div className='text-sm text-slate-600 leading-relaxed'>
                          Page optimisée sémantiquement répondant parfaitement à l'intention de recherche locale. Temps de chargement ultra-rapide.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-teal-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-900 font-bold'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-6 h-6' />
              <span>Trafic Qualifié</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='w-6 h-6' />
              <span>Domination Locale</span>
            </div>
            <div className='flex items-center gap-2'>
              <BarChart className='w-6 h-6' />
              <span>ROI Mesurable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-8'>
              Pourquoi investir massivement dans le SEO à Bron (69500) ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Bron est une commune stratégique au sein de la métropole lyonnaise. Que vous soyez artisan, profession libérale, commerçant ou une entreprise B2B, vos clients potentiels locaux utilisent tous Google pour trouver un prestataire. Une stratégie de <strong>référencement naturel (SEO) locale ciblée sur Bron</strong> est le moyen le plus rentable et le plus durable d'acquérir de nouveaux clients sans dépendre perpétuellement de l'achat publicitaire.
              </p>
              <p>
                En tant que <strong>consultant SEO expert</strong> de la région lyonnaise, Sidikoff Digital met en place des stratégies d'acquisition agressives et pérennes. Le SEO local ne consiste pas simplement à répéter le mot "Bron" sur votre page d'accueil. Il s'agit d'une science rigoureuse qui mêle technique pure, sémantique avancée et autorité de domaine.
              </p>
              <p>
                La première étape de notre intervention est un <strong>audit SEO technique approfondi</strong>. Nous passons votre site au crible pour vérifier sa vitesse (Core Web Vitals), son adaptabilité mobile, l'indexabilité de ses pages et la propreté de son code (balises Title, H1, Meta Description). Un site techniquement sain est la fondation indispensable pour séduire les algorithmes de Google.
              </p>
              <p>
                Le second axe majeur est l'<strong>optimisation de la fiche Google Business Profile (Maps)</strong> et la création de citations locales (annuaires spécialisés). Lorsqu'un internaute tape "Avocat Bron" ou "Plombier Bron", Google affiche un "Pack Local" (la carte avec 3 résultats) avant même les résultats naturels classiques. Notre mission est de faire apparaître votre établissement dans ce Top 3 hyper-lucratif.
              </p>
              <p>
                Enfin, pour les requêtes plus concurrentielles, nous mettons en place des campagnes de <strong>Netlinking ciblées</strong>. Nous acquérons pour vous des liens retour (backlinks) depuis des sites internet d'autorité (presse locale, blogs thématiques), ce qui indique à Google que votre entreprise est la référence absolue de votre secteur d'activité dans l'Est lyonnais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos piliers d'acquisition SEO</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une méthode transparente pour transformer votre site en apporteur d'affaires.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100'
                >
                  <div className='w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-teal-600' />
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3>
                  <p className='text-slate-600 leading-relaxed'>{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-slate-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Le déroulement d'une prestation SEO</h2>
            <p className='text-xl text-slate-400'>Un accompagnement sur plusieurs mois pour des résultats durables.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-6 rounded-xl border border-slate-700 relative'
              >
                <div className='w-12 h-12 bg-teal-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-teal-500/30'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-slate-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes sur le SEO</h2>
            <p className='text-xl text-slate-600'>Comprendre le fonctionnement des moteurs de recherche.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-teal-500 to-teal-700 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6 text-slate-900'>Combien de clients perdez-vous chaque jour ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-teal-50'>
            Vos concurrents à Bron investissent déjà dans leur référencement. Demandez un pré-audit gratuit pour découvrir le trafic que vous pourriez générer.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl'>
                Demander une analyse SEO Gratuite
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
