import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Code,
  ArrowRight,
  CheckCircle,
  Zap,
  Search,
  Server,
  Smartphone,
  Layers,
  ArrowUpRight
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence experte Next.js basée dans la région lyonnaise",
  "Développement de sites web aux performances extrêmes (Score 100/100)",
  "Génération de pages statiques (SSG) et Server-Side Rendering (SSR)",
  "Architecture technique optimisée pour le SEO à grande échelle",
  "Intégration transparente avec vos CMS Headless (Sanity, Strapi)"
]

const services = [
  {
    icon: Search,
    title: 'Sites Vitrines Orientés SEO',
    description: 'Bénéficiez du Server-Side Rendering (SSR) pour garantir que les robots de Google indexent parfaitement vos contenus dès la première visite.'
  },
  {
    icon: Zap,
    title: 'Portails E-commerce',
    description: 'Développement d\'architectures Headless Commerce ultra-rapides. Le catalogue charge instantanément, maximisant ainsi le taux de conversion.'
  },
  {
    icon: Layers,
    title: 'Intégration CMS Headless',
    description: 'Connectez Next.js à des CMS modernes (Strapi, Sanity, Prismic) pour permettre à vos équipes marketing de gérer le contenu en totale autonomie.'
  },
  {
    icon: Server,
    title: 'Développement d\'APIs',
    description: 'Utilisation des "Route Handlers" de Next.js pour créer des APIs sécurisées directement intégrées à votre application front-end.'
  },
  {
    icon: Smartphone,
    title: 'Refonte d\'Applications',
    description: 'Migration de vos applications React (SPA) classiques vers Next.js pour améliorer le SEO, les performances et l\'expérience utilisateur.'
  },
  {
    icon: ArrowUpRight,
    title: 'Optimisation Web Vitals',
    description: 'Audit et refactoring de votre code Next.js existant pour atteindre l\'excellence sur les métriques "Core Web Vitals" de Google.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Choix de l\'Architecture',
    description: 'Définition de la stratégie de rendu (SSG, SSR, ISR) selon vos besoins de fraîcheur de données et de performance.'
  },
  {
    number: '02',
    title: 'Intégration Front-End',
    description: 'Développement des composants React en utilisant Tailwind CSS pour un design responsive et une interface utilisateur (UI) moderne.'
  },
  {
    number: '03',
    title: 'Connexion aux Données',
    description: 'Branchement de votre Next.js à vos bases de données, APIs externes ou à votre CMS Headless pour dynamiser le contenu.'
  },
  {
    number: '04',
    title: 'Déploiement sur Vercel',
    description: 'Mise en production sécurisée et automatisée sur l\'infrastructure Cloud Vercel (Edge Network) pour une vitesse mondiale.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quelle est la différence entre React.js et Next.js ?',
    answer: 'React.js est une bibliothèque pour créer des interfaces utilisateurs. Next.js est un "framework" complet construit par-dessus React. Là où React charge tout le code dans le navigateur de l\'utilisateur (ce qui est mauvais pour le SEO), Next.js permet de pré-calculer les pages sur le serveur (SSR ou SSG). Cela offre des temps de chargement instantanés et un référencement naturel (SEO) parfait.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Dans quels cas utiliser Next.js pour mon entreprise à Lyon ?',
    answer: 'Next.js est la technologie idéale si vous avez besoin d\'un site web public performant (Site vitrine B2B ambitieux, E-commerce, Blog à fort trafic, Portail média). C\'est l\'arme ultime pour combiner la puissance d\'une application dynamique et les exigences du référencement sur Google.',
    category: 'strategy'
  },
  {
    id: '3',
    question: 'Qu\'est-ce qu\'une architecture "Headless" ?',
    answer: 'Une architecture "Headless" consiste à séparer la gestion du contenu (le Back-End, géré par un CMS comme Strapi ou Sanity) de l\'affichage visuel (le Front-End, développé par nos soins en Next.js). Cela permet une plus grande liberté de design, une sécurité accrue, et surtout, des performances inégalées car l\'interface est découplée de la base de données.',
    category: 'architecture'
  },
  {
    id: '4',
    question: 'Où sera hébergé notre site Next.js ?',
    answer: 'Nous recommandons fortement l\'hébergement sur Vercel (les créateurs de Next.js) ou AWS Amplify. Ces plateformes déploient votre site sur un réseau mondial (CDN/Edge Network), ce qui signifie que vos pages se chargeront en quelques millisecondes, que votre client soit à Lyon, Paris ou New York.',
    category: 'hosting'
  },
  {
    id: '5',
    question: 'Faites-vous la maintenance des projets Next.js ?',
    answer: 'Oui, nous proposons des forfaits de Tierce Maintenance Applicative (TMA). Nous mettons à jour les dépendances de votre projet (React, Next.js, modules NPM), surveillons les performances sur Vercel, et développons de nouvelles fonctionnalités (composants, nouvelles routes) en fonction de vos besoins.',
    category: 'service'
  }
]

export default function NextjsLyonLandingContent() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-black text-white'>
        {/* Subtle Next.js style grid background */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20'></div>
        
        {/* Soft glowing orb */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-full blur-[120px] opacity-[0.05] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium backdrop-blur-sm'>
                <Code className='w-4 h-4 mr-2' />
                Le Futur du Web en Région Lyonnaise
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight'>
                  Agence <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500'>Next.js</span> à Lyon
                </h1>
                <p className='text-xl text-slate-400 leading-relaxed mb-8'>
                  Passez au framework React ultime. Nous concevons des architectures web conçues pour la performance absolue, le SEO technique et les Core Web Vitals.
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
                    <CheckCircle className='w-5 h-5 text-white flex-shrink-0' />
                    <span className='text-slate-300 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-white text-black rounded-md font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center'>
                    Démarrer un projet Next.js
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-white/20 text-white rounded-md font-semibold hover:bg-white/5 transition-all duration-300'>
                    Découvrir nos réalisations
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
              <div className='relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-1 font-mono text-sm shadow-2xl'>
                <div className='bg-[#111111] rounded-lg border border-white/5 h-[450px] flex flex-col'>
                  <div className='flex items-center justify-between px-4 h-12 border-b border-white/5'>
                     <div className='flex gap-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
                     </div>
                     <span className='text-gray-500 text-xs'>app/layout.tsx</span>
                  </div>
                  <div className='p-6 text-gray-300 flex-1 overflow-hidden relative'>
                    <div className='text-gray-500 mb-2'>import <span className='text-blue-400'>type</span> &#123; <span className='text-blue-300'>Metadata</span> &#125; from <span className='text-green-300'>'next'</span>;</div>
                    <div className='text-gray-500 mb-6'>import <span className='text-blue-300'>'@/styles/globals.css'</span>;</div>
                    
                    <div className='text-blue-400 mb-2'>export const <span className='text-white'>metadata</span>: <span className='text-blue-300'>Metadata</span> = &#123;</div>
                    <div className='ml-4 text-gray-300'>title: <span className='text-green-300'>'Sidikoff Digital | Next.js Agency Lyon'</span>,</div>
                    <div className='ml-4 text-gray-300'>description: <span className='text-green-300'>'High performance React architectures'</span>,</div>
                    <div className='ml-4 text-gray-300'>openGraph: &#123;</div>
                    <div className='ml-8 text-gray-300'>type: <span className='text-green-300'>'website'</span>,</div>
                    <div className='ml-8 text-gray-300'>locale: <span className='text-green-300'>'fr_FR'</span>,</div>
                    <div className='ml-4 text-gray-300'>&#125;,</div>
                    <div className='text-blue-400 mb-6'>&#125;;</div>

                    <div className='text-blue-400 mb-2'>export default function <span className='text-yellow-200'>RootLayout</span>(&#123;</div>
                    <div className='ml-4 text-white'>children,</div>
                    <div className='text-blue-400'>&#125;: &#123;</div>
                    <div className='ml-4 text-white'>children: <span className='text-blue-300'>React.ReactNode</span></div>
                    <div className='text-blue-400'>&#125;) &#123;</div>
                    
                    <div className='ml-4 text-blue-400'>return <span className='text-gray-300'>(</span></div>
                    <div className='ml-8 text-gray-300'>&lt;<span className='text-blue-400'>html</span> lang=<span className='text-green-300'>&quot;fr&quot;</span> className=<span className='text-green-300'>&quot;antialiased&quot;</span>&gt;</div>
                    <div className='ml-12 text-gray-300'>&lt;<span className='text-blue-400'>body</span>&gt;</div>
                    <div className='ml-16 text-white'>&#123;children&#125;</div>
                    <div className='ml-12 text-gray-300'>&lt;/<span className='text-blue-400'>body</span>&gt;</div>
                    <div className='ml-8 text-gray-300'>&lt;/<span className='text-blue-400'>html</span>&gt;</div>
                    <div className='ml-4 text-gray-300'>);</div>
                    <div className='text-blue-400'>&#125;</div>
                    
                    <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent'></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-black font-bold'>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Score Lighthouse 100/100</span>
            </div>
            <div className='flex items-center gap-2'>
              <Server className='w-6 h-6' />
              <span>Server-Side Rendering (SSR)</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>Architecture SEO Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-black mb-8 tracking-tight'>
              Pourquoi les leaders technologiques lyonnais choisissent Next.js ?
            </h2>
            <div className='prose prose-lg text-gray-600 space-y-6'>
              <p>
                Pendant des années, le web a été scindé en deux mondes. D'un côté, les sites traditionnels (comme WordPress) qui offraient un bon référencement mais des temps de chargement lents. De l'autre, les "Single Page Applications" construites avec React, qui offraient une navigation instantanée mais étaient très difficiles à indexer pour Google. En tant qu'<strong>agence web basée à Lyon</strong>, nous avons résolu ce dilemme en adoptant <strong>Next.js</strong>.
              </p>
              <p>
                Créé par Vercel et basé sur React, Next.js est devenu le standard absolu (le "framework") pour les entreprises ambitieuses. Sa force réside dans sa capacité à générer le rendu des pages directement sur le serveur (<strong>Server-Side Rendering</strong>) ou au moment de la compilation (<strong>Static Site Generation</strong>). Pour l'utilisateur et pour Google, le code HTML est déjà prêt : l'affichage est immédiat. C'est un avantage concurrentiel massif sur le marché hyper-compétitif du e-commerce et des services B2B à Lyon.
              </p>
              <p>
                La performance n'est plus un luxe, c'est un prérequis. L'algorithme de Google pénalise sévèrement les sites lents (critères <strong>Core Web Vitals</strong>). En confiant votre projet à notre <strong>agence Next.js</strong>, vous investissez dans une architecture technique qui vise l'excellence (Score de 100 sur Lighthouse). Les images sont optimisées dynamiquement, le code JavaScript est divisé pour ne charger que l'essentiel, et la navigation entre les pages se fait sans rechargement visuel.
              </p>
              <p>
                Next.js est également la clé de voûte des architectures <strong>Headless</strong>. Nous construisons le Front-End (le visuel) en Next.js, et nous le connectons via API à un CMS moderne de votre choix (Strapi, Sanity, Contentful). Vos équipes marketing à Lyon conservent une interface intuitive pour rédiger leurs articles ou gérer leur catalogue, tandis que la plateforme bénéficie d'une sécurité maximale (le back-office n'étant pas publiquement exposé).
              </p>
              <p>
                Nous accompagnons les startups de la French Tech, les DSI et les PME industrielles de la région Rhône-Alpes dans leur transformation digitale avec Next.js. De la conception de l'architecture initiale au déploiement sur les infrastructures Cloud "Edge" (Vercel), notre équipe de <strong>développeurs experts Next.js</strong> sécurise votre investissement technologique sur le long terme.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-black mb-4 tracking-tight'>Nos solutions d'ingénierie Next.js</h2>
            <p className='text-xl text-gray-500 max-w-3xl mx-auto'>
              L'excellence technique au service de votre croissance digitale.
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
                  className='bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-black/10 transition-colors'
                >
                  <div className='w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 shadow-sm'>
                    <Icon className='w-6 h-6 text-black' />
                  </div>
                  <h3 className='text-xl font-bold text-black mb-3 tracking-tight'>{service.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-black text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4 tracking-tight'>Notre cycle de développement Next.js</h2>
            <p className='text-xl text-gray-400'>Une approche rigoureuse pour garantir des performances optimales en production.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-[#0a0a0a] p-6 rounded-xl border border-white/10 relative'
              >
                <div className='w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-white/10'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2 tracking-tight'>{step.title}</h3>
                <p className='text-gray-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-black mb-4 tracking-tight'>FAQ Architecture & Next.js</h2>
            <p className='text-xl text-gray-500'>Toutes les réponses à vos questions techniques.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 border-t border-gray-100 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6 tracking-tight text-black'>Prêt à propulser votre entreprise sur Next.js ?</h2>
          <p className='text-xl mb-10 text-gray-600 max-w-2xl mx-auto'>
            Que ce soit pour une refonte complète ou la création d'un projet "from scratch", nos ingénieurs basés à Lyon étudient la faisabilité de votre projet Web.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-black text-white rounded-md font-bold hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center'>
                Discuter avec un expert
                <ArrowRight className='w-5 h-5 ml-2' />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
