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
  "Audit SEO complet (Technique, Sémantique, Netlinking)",
  "Stratégie de référencement local spécifique à Caluire-et-Cuire",
  "Optimisation on-page et création de contenu à forte valeur",
  "Suivi des positions et reporting mensuel transparent",
  "Trafic qualifié orienté vers la conversion (Leads/Ventes)"
]

const services = [
  {
    icon: Search,
    title: 'Audit SEO Technique',
    description: 'Analyse approfondie de l\'architecture de votre site, de la vitesse de chargement (Core Web Vitals) et de l\'indexabilité pour lever tous les freins au référencement.'
  },
  {
    icon: MapPin,
    title: 'Référencement Local',
    description: 'Optimisation de votre fiche Google Business Profile et création de citations locales pour dominer les recherches géolocalisées sur Caluire et le Grand Lyon.'
  },
  {
    icon: FileSearch,
    title: 'Stratégie de Contenu',
    description: 'Recherche de mots-clés transactionnels et rédaction de pages sémantiquement riches pour répondre exactement à l\'intention de recherche de vos clients.'
  },
  {
    icon: Target,
    title: 'Campagne de Netlinking',
    description: 'Acquisition de backlinks d\'autorité (liens entrants) depuis des sites thématiques pour renforcer la confiance que Google accorde à votre domaine.'
  },
  {
    icon: BarChart,
    title: 'Suivi & Data Analytics',
    description: 'Mise en place de tableaux de bord (Looker Studio) pour mesurer l\'évolution de votre trafic organique et calculer le retour sur investissement (ROI).'
  },
  {
    icon: Award,
    title: 'Consulting SEO',
    description: 'Accompagnement continu de vos équipes internes (rédacteurs, développeurs) pour infuser la culture SEO dans toutes vos actions digitales.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & État des lieux',
    description: 'Identification des bloqueurs techniques et analyse de la concurrence sur votre marché.'
  },
  {
    number: '02',
    title: 'Feuille de Route SEO',
    description: 'Définition des mots-clés prioritaires et priorisation des actions (Quick Wins).'
  },
  {
    number: '03',
    title: 'Optimisations On-Site',
    description: 'Correction technique, réécriture des balises (Title, H1), et enrichissement sémantique.'
  },
  {
    number: '04',
    title: 'Netlinking & Suivi',
    description: 'Création d\'autorité via l\'acquisition de liens et ajustements basés sur l\'analyse des KPIs.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Combien de temps faut-il pour voir les résultats en SEO ?',
    answer: 'Le SEO est une stratégie à moyen/long terme. Généralement, les premières améliorations de positionnement (surtout suite à des corrections techniques) sont visibles entre 1 et 3 mois. Pour des résultats significatifs sur des requêtes concurrentielles, il faut compter entre 6 et 12 mois de travail régulier.',
    category: 'timing'
  },
  {
    id: '2',
    question: 'Garantissez-vous la 1ère position sur Google ?',
    answer: 'Aucune agence sérieuse ne peut garantir la 1ère position absolue, car les algorithmes de Google changent constamment (et Google l\'interdit dans ses guidelines). Cependant, nous garantissons la mise en œuvre des meilleures pratiques du marché pour maximiser vos chances de dominer le Top 3, avec un historique de succès vérifiable.',
    category: 'results'
  },
  {
    id: '3',
    question: 'Quelle est la différence entre SEO local et SEO national ?',
    answer: 'Le SEO local cible des clients potentiels proches de vous physiquement (ex: "expert comptable caluire"). Il repose fortement sur Google Maps et la fiche Google Business Profile. Le SEO national vise une audience plus large, sans restriction géographique, nécessitant souvent un budget et une autorité de domaine plus importants.',
    category: 'strategy'
  },
  {
    id: '4',
    question: 'Avez-vous besoin de modifier mon site actuel ?',
    answer: 'Oui, dans 99% des cas. Nous devrons intervenir sur le code de votre site (balises metas, structure des titres, vitesse) et sur le contenu. Nous vous demanderons donc un accès temporaire (administrateur ou FTP) pour implémenter nos recommandations techniques.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Quel est le budget mensuel pour une prestation SEO ?',
    answer: 'Pour une entreprise locale à Caluire ciblant une zone géographique restreinte, un forfait SEO démarre généralement autour de 500 € à 1 000 € / mois. Pour des ambitions régionales ou nationales avec un fort besoin en rédaction et netlinking, les budgets peuvent aller de 1 500 € à plus de 4 000 € / mois.',
    category: 'pricing'
  }
]

export default function SeoCaluireLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
            alt='SEO Data Analytics Google'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-rose-900/40'></div>
        </div>

        {/* Decorative Rose Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-rose-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-full text-sm font-medium'>
                <TrendingUp className='w-4 h-4 mr-2' />
                Consultant SEO Caluire-et-Cuire
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Expertise <span className='text-rose-400'>SEO</span> à Caluire : Dominez Google
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Multipliez votre trafic qualifié et vos ventes grâce à une stratégie de référencement naturel pérenne. Audit complet, optimisation locale et netlinking.
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
                    <CheckCircle className='w-5 h-5 text-rose-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-rose-600 text-white rounded-lg font-bold hover:bg-rose-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-rose-600/20'>
                    Demander un audit gratuit
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Estimer mon trafic potentiel
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
                       <span className='text-slate-800 font-medium'>entreprise caluire</span>
                       <div className='ml-auto w-px h-6 bg-slate-200 mr-4'></div>
                       <Search className='w-5 h-5 text-rose-500' />
                     </div>
                  </div>
                  {/* Fake SERP Results */}
                  <div className='p-6 space-y-8'>
                    <div className='relative'>
                      <div className='absolute -left-3 -top-3 w-8 h-8 bg-rose-500 text-white font-bold rounded-full flex items-center justify-center shadow-lg text-sm z-10'>#1</div>
                      <div className='bg-rose-50/50 p-4 rounded-lg border border-rose-100 pl-8'>
                        <div className='text-sm text-slate-500 flex items-center mb-1'>
                          <span className='w-4 h-4 bg-slate-200 rounded-full mr-2'></span>
                          https://www.votre-site.com
                        </div>
                        <div className='text-xl text-blue-800 font-medium hover:underline cursor-pointer mb-2'>
                          Votre Entreprise à Caluire - Le Spécialiste N°1
                        </div>
                        <div className='text-sm text-slate-600 leading-relaxed'>
                          Découvrez nos services professionnels à Caluire-et-Cuire. Devis gratuit, intervention rapide et qualité garantie. Contactez notre équipe dès aujourd'hui.
                        </div>
                      </div>
                    </div>
                    
                    <div className='opacity-60 grayscale pl-4'>
                      <div className='text-sm text-slate-500 flex items-center mb-1'>
                        <span className='w-4 h-4 bg-slate-200 rounded-full mr-2'></span>
                        https://www.concurrent.fr
                      </div>
                      <div className='text-xl text-blue-800 font-medium hover:underline cursor-pointer mb-2'>
                        Concurrent local
                      </div>
                      <div className='text-sm text-slate-600 leading-relaxed'>
                        Description générique non optimisée SEO.
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
      <section className='py-8 bg-rose-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-6 h-6' />
              <span>Croissance Organique</span>
            </div>
            <div className='flex items-center gap-2'>
              <Target className='w-6 h-6' />
              <span>Mots-clés Qualifiés</span>
            </div>
            <div className='flex items-center gap-2'>
              <BarChart className='w-6 h-6' />
              <span>Reporting ROIste</span>
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
              Pourquoi investir dans le référencement naturel (SEO) à Caluire-et-Cuire ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Être visible sur Google n'est plus un avantage concurrentiel, c'est une nécessité vitale. Chaque jour, des milliers d'internautes recherchent des prestataires, des artisans ou des commerçants dans le Grand Lyon. Si votre entreprise basée à <strong>Caluire-et-Cuire</strong> n'apparaît pas dans les trois premiers résultats de la première page, vous laissez mécaniquement ce chiffre d'affaires à vos concurrents.
              </p>
              <p>
                Le SEO (Search Engine Optimization) consiste à optimiser techniquement et sémantiquement votre site internet pour que l'algorithme de Google le considère comme la réponse la plus pertinente à la recherche de l'utilisateur. En tant que <strong>consultant SEO intervenant à Caluire</strong>, notre objectif est clair : capter l'intention d'achat au moment précis où le besoin se fait sentir.
              </p>
              <p>
                Notre approche débute systématiquement par un <strong>Audit Technique</strong>. Un site lent, mal structuré ou non "Mobile-Friendly" sera pénalisé par Google. Nous analysons vos Core Web Vitals, la profondeur de votre maillage interne et la propreté de votre code source. Nous corrigeons ces fondamentaux avant même d'entamer le travail sur le contenu.
              </p>
              <p>
                Le deuxième pilier est la <strong>Sémantique locale</strong>. Positionner votre site sur des mots-clés génériques nationaux coûte très cher et convertit peu. Nous ciblons les "mots-clés de longue traîne" à forte intention d'achat, spécifiques à votre zone (ex: "pose de climatisation caluire", "cabinet avocat croix-rousse"). En optimisant votre fiche <strong>Google Business Profile</strong> (Google Maps), nous vous garantissons une omniprésence au niveau local.
              </p>
              <p>
                Enfin, le SEO est une discipline de confiance. Google doit avoir confiance en votre site pour le propulser en première position. Nous déployons une stratégie de <strong>Netlinking éthique</strong> (acquisition de liens entrants) depuis des sites d'autorité dans votre secteur d'activité ou votre région. C'est ce signal d'autorité qui fera la différence entre la 5ème et la 1ère place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos piliers d'optimisation SEO</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une méthode scientifique pour une croissance pérenne de votre trafic.
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
                  <div className='w-14 h-14 bg-rose-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-rose-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Le cycle de vie d'une campagne SEO</h2>
            <p className='text-xl text-slate-400'>Un accompagnement itératif pour dominer la SERP.</p>
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
                <div className='w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-rose-500/30'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions sur le Référencement</h2>
            <p className='text-xl text-slate-600'>Tout comprendre des algorithmes avant d'investir.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-rose-600 to-rose-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à vous imposer en 1ère page Google ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-rose-100'>
            Confiez-nous l'analyse de votre site. Nous vous fournirons un audit préliminaire gratuit identifiant les freins de votre trafic actuel.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-rose-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un Audit SEO Gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
