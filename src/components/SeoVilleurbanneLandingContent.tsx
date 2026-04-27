'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  BarChart,
  Search,
  MapPin,
  Target,
  Globe,
  Settings,
  Star
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Audit SEO gratuit et détaillé de votre site",
  "Stratégie de référencement local ciblée sur Villeurbanne",
  "Optimisation Google Business Profile (Maps)",
  "Amélioration des Core Web Vitals (vitesse de chargement)",
  "Rapports de positionnement mensuels transparents"
]

const services = [
  {
    icon: Search,
    title: 'Audit Technique & Sémantique',
    description: 'Analyse complète de votre site web pour identifier les points de blocage (vitesse, balises, architecture) et les opportunités de mots-clés sur Villeurbanne.'
  },
  {
    icon: MapPin,
    title: 'SEO Local Villeurbanne',
    description: 'Dominez le pack local de Google Maps pour des requêtes ciblées comme "artisan Villeurbanne" ou "restaurant Gratte-Ciel".'
  },
  {
    icon: Settings,
    title: 'Optimisation On-Page',
    description: 'Refonte de vos balises Meta, structuration H1/H2, intégration de données structurées (Schema.org) et maillage interne.'
  },
  {
    icon: Target,
    title: 'Création de Contenu SEO',
    description: 'Rédaction d\'articles de blog et de pages de services optimisés sémantiquement pour répondre aux intentions de recherche de vos clients.'
  },
  {
    icon: Globe,
    title: 'Netlinking Stratégique',
    description: 'Acquisition de backlinks de qualité depuis des sites d\'autorité locaux et thématiques pour renforcer la puissance de votre nom de domaine.'
  },
  {
    icon: BarChart,
    title: 'Suivi & Reporting',
    description: 'Tableaux de bord sur mesure (Google Looker Studio) pour suivre l\'évolution de votre trafic organique et de vos positions sur Google.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Objectifs',
    description: 'Nous analysons votre existant et définissons les KPIs (visites, leads) à atteindre sur la région lyonnaise.'
  },
  {
    number: '02',
    title: 'Stratégie Mots-Clés',
    description: 'Identification des requêtes à fort volume et faible concurrence spécifiques à Villeurbanne et ses quartiers.'
  },
  {
    number: '03',
    title: 'Optimisations Techniques',
    description: 'Correction des erreurs bloquantes, accélération du temps de chargement et structuration du code.'
  },
  {
    number: '04',
    title: 'Déploiement Continu',
    description: 'Création de contenus mensuels et acquisition de liens pour pérenniser votre 1ère place sur Google.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Combien de temps faut-il pour voir les résultats du SEO ?',
    answer: 'Le SEO est une stratégie sur le moyen/long terme. Généralement, les premiers frémissements (montée dans les positions, augmentation du trafic) sont visibles entre 3 et 6 mois après le début des optimisations, selon la concurrence de votre secteur à Villeurbanne.',
    category: 'strategy'
  },
  {
    id: '2',
    question: 'Le SEO local est-il vraiment important pour une entreprise de Villeurbanne ?',
    answer: 'Absolument. Plus de 46% des recherches Google ont une intention locale. Si vous êtes plombier, avocat ou commerçant à Villeurbanne, vos futurs clients cherchent "votre métier + Villeurbanne". Ne pas être présent sur ces requêtes, c\'est laisser ces clients à vos concurrents.',
    category: 'local'
  },
  {
    id: '3',
    question: 'Pouvez-vous optimiser un site qui n\'a pas été créé par vous ?',
    answer: 'Oui. Que votre site soit sur WordPress, Shopify, Wix ou développé sur-mesure, nous pouvons réaliser un audit et implémenter les recommandations SEO. Si les limites techniques de la plateforme sont trop bloquantes (cas fréquents sur Wix/Squarespace), nous vous proposerons une refonte sous Next.js.',
    category: 'technical'
  },
  {
    id: '4',
    question: 'Quelle est la différence entre SEO (Référencement Naturel) et SEA (Google Ads) ?',
    answer: 'Le SEA (Ads) est payant au clic : vous êtes visible immédiatement, mais vous disparaissez dès que vous arrêtez de payer. Le SEO est organique : il demande plus de temps pour s\'installer, mais il génère du trafic qualifié gratuitement et de façon pérenne, offrant un meilleur ROI sur le long terme.',
    category: 'strategy'
  },
  {
    id: '5',
    question: 'Fournissez-vous des rapports mensuels ?',
    answer: 'Oui, la transparence est au cœur de notre approche. Vous recevez chaque mois un rapport détaillé (Trafic, Positions des mots-clés, Conversions) ainsi que la liste des actions réalisées et celles prévues pour le mois suivant.',
    category: 'reporting'
  }
]

export default function SeoVilleurbanneLandingContent() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-indigo-950'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-[url("/images/grid.svg")] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20'></div>
          <div className='absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/20 to-transparent blur-3xl'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm'>
                <TrendingUp className='w-4 h-4 mr-2' />
                Consultant SEO Villeurbanne
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Générez plus de clients à <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300'>Villeurbanne</span> via Google.
                </h1>
                <p className='text-xl text-indigo-100/80 leading-relaxed mb-8 max-w-lg'>
                  Propulsez votre site web en 1ère page des résultats de recherche. Expert SEO local intervenant sur Villeurbanne (69100) et la Métropole de Lyon.
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
                    <CheckCircle className='w-5 h-5 text-indigo-400 flex-shrink-0' />
                    <span className='text-white font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-indigo-600/30'>
                    Demander mon audit SEO
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/services/agence-web-villeurbanne'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-transparent border border-indigo-400/30 text-indigo-200 rounded-lg font-bold hover:bg-indigo-900/50 transition-all duration-300'>
                    Création de site web
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='hidden lg:flex justify-center relative'
            >
              <div className='relative w-full max-w-md'>
                <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2rem] blur opacity-30'></div>
                <div className='relative bg-indigo-900/50 backdrop-blur-xl border border-indigo-700/50 p-8 rounded-[2rem] shadow-2xl'>
                  <div className='space-y-6'>
                    <div className='flex items-center justify-between border-b border-indigo-800/50 pb-4'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-3 h-3 rounded-full bg-red-400'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                        <div className='w-3 h-3 rounded-full bg-green-400'></div>
                      </div>
                      <div className='text-indigo-300 text-xs font-mono'>google.fr</div>
                    </div>
                    
                    <div className='bg-indigo-950/80 rounded-xl p-4 border border-indigo-800/50'>
                      <div className='flex items-center space-x-3 text-white mb-2'>
                        <Search className='w-5 h-5 text-indigo-400' />
                        <span className='font-medium'>votre métier villeurbanne</span>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <div className='bg-indigo-600/20 p-4 rounded-xl border border-indigo-500/30'>
                        <div className='text-xs text-indigo-300 mb-1'>Ad · concurrent-A.com</div>
                        <div className='text-lg font-bold text-indigo-400 mb-2'>Concurrent A (Payant)</div>
                        <div className='h-2 bg-indigo-800/50 rounded w-3/4'></div>
                      </div>
                      
                      <div className='bg-gradient-to-r from-indigo-500/40 to-blue-600/20 p-5 rounded-xl border-l-4 border-l-indigo-400 border-t border-r border-b border-indigo-500/30 shadow-lg transform -translate-x-2'>
                        <div className='text-xs text-indigo-200 mb-1 flex items-center'><Star className='w-3 h-3 text-yellow-400 mr-1 inline'/> Votre Entreprise</div>
                        <div className='text-xl font-bold text-white mb-2'>Votre Site Internet (N°1 Organique)</div>
                        <div className='text-sm text-indigo-200 leading-relaxed'>Attirez des clients gratuitement tous les jours grâce à un référencement naturel optimisé pour Villeurbanne.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Semantic Content */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight'>
              Pourquoi investir dans le <span className='text-indigo-600'>référencement naturel à Villeurbanne</span> ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Villeurbanne (69100) est l'une des communes les plus dynamiques de la Métropole de Lyon. Que vous soyez installé aux Gratte-Ciel, à Charpennes, Tonkin ou Grandclément, la concurrence locale est de plus en plus rude. Pour un commerce, un artisan ou une entreprise B2B, avoir un site internet ne suffit plus : <strong>il faut qu'il soit trouvé par vos futurs clients</strong>.
              </p>
              <p>
                C'est là qu'intervient l'<strong>optimisation SEO</strong> (Search Engine Optimization). Contrairement à la publicité payante (Google Ads) qui s'arrête net dès que vous coupez votre budget, le référencement naturel est un investissement durable. Une fois positionné dans le Top 3 de Google sur des mots-clés stratégiques comme "plombier Villeurbanne" ou "expert comptable 69100", vous recevez un flux continu de prospects qualifiés, sans payer le moindre clic.
              </p>
              <p>
                Notre approche en tant qu'<strong>agence SEO sur Villeurbanne</strong> repose sur trois piliers fondamentaux. D'abord, l'<strong>optimisation technique</strong> : nous nous assurons que votre site est rapide (Core Web Vitals), sécurisé et parfaitement indexable par les robots de Google. Ensuite, l'<strong>optimisation sémantique</strong> : nous créons des contenus pertinents qui répondent exactement aux questions que se posent vos clients. Enfin, la <strong>popularité</strong> : nous acquérons des liens entrants (backlinks) de qualité pour prouver à Google que votre site fait autorité dans son domaine.
              </p>
              <p>
                Nous attachons également une importance vitale au <strong>SEO Local via Google Business Profile</strong>. L'apparition de votre fiche d'établissement dans le "Pack Local" (la carte Google avec les 3 premiers résultats) est souvent la première source de contacts téléphoniques et de visites physiques pour les commerces de proximité villeurbannais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white border-t border-slate-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Notre expertise SEO</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une méthodologie complète pour dominer les résultats de recherche.
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
                  className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200 group hover:-translate-y-1'
                >
                  <div className='w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors'>
                    <Icon className='w-7 h-7 text-indigo-600 group-hover:text-white transition-colors' />
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
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Le déroulement d'une prestation</h2>
            <p className='text-xl text-slate-400'>Une approche rigoureuse et transparente, étape par étape.</p>
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
                className='bg-slate-800 p-6 rounded-2xl border border-slate-700 relative'
              >
                <div className='w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-600/20'>
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
      <section className='py-20 bg-slate-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Questions Fréquentes sur le SEO</h2>
            <p className='text-xl text-slate-600'>Comprenez comment fonctionne le référencement naturel.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-indigo-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Prêt à dominer Google à Villeurbanne ?</h2>
          <p className='text-xl mb-10 text-indigo-100 max-w-2xl mx-auto'>
            Contactez-nous pour obtenir un pré-audit SEO gratuit de votre site et découvrir vos opportunités de croissance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl'>
                Demander un audit gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
