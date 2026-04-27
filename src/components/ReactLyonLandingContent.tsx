'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Code2,
  ArrowRight,
  CheckCircle,
  LayoutDashboard,
  Smartphone,
  Zap,
  Globe,
  Settings,
  ShieldCheck
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence experte React.js implantée dans la métropole lyonnaise",
  "Développement de Single Page Applications (SPA) ultra-rapides",
  "Architecture orientée composants pour une maintenabilité parfaite",
  "Intégration d'APIs complexes (REST, GraphQL, WebSockets)",
  "Interfaces utilisateur (UI) interactives et animations fluides"
]

const services = [
  {
    icon: LayoutDashboard,
    title: 'Développement de Dashboards',
    description: 'Création d\'interfaces d\'administration (back-office) sur mesure pour visualiser vos données métiers complexes en temps réel.'
  },
  {
    icon: Globe,
    title: 'Single Page Applications (SPA)',
    description: 'Développement d\'applications web fluides où la page ne se recharge jamais, offrant une expérience utilisateur similaire à une application native.'
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps (PWA)',
    description: 'Transformez votre site web React en une application installable sur mobile, avec fonctionnement hors-ligne et notifications push.'
  },
  {
    icon: Zap,
    title: 'Migration vers React',
    description: 'Refonte de votre ancienne application (jQuery, Angular legacy) vers l\'écosystème React moderne pour accélérer son évolution technique.'
  },
  {
    icon: Settings,
    title: 'Intégration d\'APIs B2B',
    description: 'Connexion de votre application Front-End avec vos systèmes d\'information existants (ERP, CRM, Systèmes de paiement) de manière sécurisée.'
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Optimisation',
    description: 'Analyse de votre base de code React existante, résolution des problèmes de re-rendus (re-renders) et mise à jour de la stack technique.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Design System & UI',
    description: 'Création des maquettes et définition de la bibliothèque de composants réutilisables (Design System) avant de coder.'
  },
  {
    number: '02',
    title: 'Architecture d\'État (State)',
    description: 'Mise en place de la gestion des données globales de l\'application (Redux, Zustand ou React Context).'
  },
  {
    number: '03',
    title: 'Développement des Vues',
    description: 'Codage des composants React en intégrant la logique métier et en connectant les données via votre API (Axios/Fetch).'
  },
  {
    number: '04',
    title: 'Tests & Recette',
    description: 'Écriture de tests unitaires sur les composants critiques, validation de l\'interface avec vos équipes, puis mise en production.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir React.js pour notre application web ?',
    answer: 'Créé et maintenu par Meta (Facebook), React est la bibliothèque JavaScript la plus populaire au monde. Elle permet de construire des interfaces utilisateur complexes, interactives et extrêmement rapides grâce à son DOM virtuel (Virtual DOM). Choisir React, c\'est aussi s\'assurer de trouver facilement des développeurs pour maintenir le projet sur le long terme.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'React est-il adapté pour le référencement naturel (SEO) ?',
    answer: 'Une application React classique (SPA) exécute le code côté client (dans le navigateur), ce qui complique l\'indexation par les robots de Google. Si le SEO est vital pour votre projet (ex: site vitrine, e-commerce), nous utiliserons le framework Next.js (basé sur React), qui génère le rendu côté serveur (SSR), garantissant ainsi un référencement optimal sur le marché de Lyon.',
    category: 'seo'
  },
  {
    id: '3',
    question: 'Développez-vous aussi la partie Back-End (API) ?',
    answer: 'Oui. Nos développeurs sont Full-Stack JavaScript. Nous pouvons développer l\'API (le moteur de votre application) en Node.js (NestJS, Express), qui s\'interfacera parfaitement avec l\'application React côté Front-End. Nous pouvons aussi connecter le front React à une API existante développée par vos équipes internes.',
    category: 'service'
  },
  {
    id: '4',
    question: 'Pouvons-nous récupérer le code pour nos développeurs internes ensuite ?',
    answer: 'Absolument. Une fois la prestation réglée, la propriété intellectuelle du code vous est transférée. Nous documentons le code de manière rigoureuse et nous utilisons des standards (comme TypeScript) pour faciliter la passation à vos équipes techniques.',
    category: 'legal'
  },
  {
    id: '5',
    question: 'Proposez-vous des développeurs React en régie à Lyon ?',
    answer: 'Oui, nous proposons une offre de "Délégation de compétences". Si vous avez besoin de renforcer votre équipe de développement existante à Lyon pour une période donnée, nous pouvons mettre à disposition un développeur React senior qui s\'intégrera à vos processus Agile.',
    category: 'team'
  }
]

export default function ReactLyonLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop'
            alt='Code ReactJS'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-cyan-900/40'></div>
        </div>

        {/* Decorative Cyan Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium'>
                <Code2 className='w-4 h-4 mr-2' />
                Agence Experte React.js
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Développement <span className='text-cyan-400'>React</span> à Lyon : Créez l'Exceptionnel
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Applications métiers, Dashboards et interfaces web de nouvelle génération. Nous construisons vos projets les plus ambitieux avec la bibliothèque UI la plus puissante au monde.
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
                    <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyan-600/20'>
                    Parler de votre projet React
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos applications
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-[#1E1E1E] p-4 font-mono text-sm'>
                <div className='flex gap-2 mb-4 px-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
                <div className='p-2'>
                  <div className='text-purple-400 mb-2'>import <span className='text-blue-300'>React</span>, &#123; <span className='text-blue-300'>useState</span>, <span className='text-blue-300'>useEffect</span> &#125; from <span className='text-green-300'>'react'</span>;</div>
                  <div className='text-purple-400 mb-4'>import <span className='text-blue-300'>DashboardData</span> from <span className='text-green-300'>'@/components/DashboardData'</span>;</div>
                  
                  <div className='text-blue-400 mb-2'>export default function <span className='text-yellow-200'>LyonAnalyticsDashboard</span>() &#123;</div>
                  <div className='ml-4 text-slate-300 mb-2'>const [data, setData] = <span className='text-blue-300'>useState</span>&lt;<span className='text-emerald-300'>Metrics</span>&gt;(null);</div>
                  <div className='ml-4 text-slate-300 mb-4'>const [loading, setLoading] = <span className='text-blue-300'>useState</span>(<span className='text-purple-400'>true</span>);</div>
                  
                  <div className='ml-4 text-blue-300 mb-2'>useEffect<span className='text-slate-300'>(() =&gt; &#123;</span></div>
                  <div className='ml-8 text-slate-300'>async function <span className='text-yellow-200'>fetchLyonMarketData</span>() &#123;</div>
                  <div className='ml-12 text-slate-300'>const response = await <span className='text-yellow-200'>fetch</span>(<span className='text-green-300'>'/api/v1/lyon/analytics'</span>);</div>
                  <div className='ml-12 text-slate-300'>const result = await response.<span className='text-yellow-200'>json</span>();</div>
                  <div className='ml-12 text-slate-300'><span className='text-blue-300'>setData</span>(result);</div>
                  <div className='ml-12 text-slate-300'><span className='text-blue-300'>setLoading</span>(<span className='text-purple-400'>false</span>);</div>
                  <div className='ml-8 text-slate-300'>&#125;</div>
                  <div className='ml-8 text-slate-300'><span className='text-yellow-200'>fetchLyonMarketData</span>();</div>
                  <div className='ml-4 text-slate-300 mb-4'>&#125;, []);</div>

                  <div className='ml-4 text-purple-400'>return <span className='text-slate-300'>(</span></div>
                  <div className='ml-8 text-slate-300'>&lt;<span className='text-blue-400'>div</span> className=<span className='text-green-300'>&quot;lyon-tech-hub-dashboard&quot;</span>&gt;</div>
                  <div className='ml-12 text-slate-300'>&#123;loading ? &lt;<span className='text-blue-400'>Spinner</span> /&gt; : &lt;<span className='text-blue-400'>DashboardData</span> metrics=&#123;data&#125; /&gt;&#125;</div>
                  <div className='ml-8 text-slate-300'>&lt;/<span className='text-blue-400'>div</span>&gt;</div>
                  <div className='ml-4 text-slate-300'>);</div>
                  <div className='text-blue-400'>&#125;</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-cyan-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-900 font-bold'>
            <div className='flex items-center gap-2'>
              <Globe className='w-6 h-6' />
              <span>Applications Single-Page</span>
            </div>
            <div className='flex items-center gap-2'>
              <LayoutDashboard className='w-6 h-6' />
              <span>Composants Réutilisables</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Interface Ultra-Réactive</span>
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
              Pourquoi choisir notre agence experte React.js pour votre entreprise lyonnaise ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Aujourd'hui, les attentes des utilisateurs sont calquées sur les standards imposés par les géants de la Tech : navigation sans temps de chargement, interfaces dynamiques et interactivité immédiate. Pour créer des plateformes répondant à ces exigences, notre <strong>pôle technologique lyonnais a fait le choix de React.js</strong>, la bibliothèque JavaScript leader développée par Meta.
              </p>
              <p>
                Plutôt que de développer des pages web traditionnelles où le navigateur se fige à chaque clic, <strong>React</strong> permet de concevoir des "Single Page Applications" (SPA). Seules les données changent en temps réel, offrant une expérience fluide, similaire à celle d'une application native téléchargée sur l'App Store. C'est la technologie idéale pour la création de portails B2B, de tableaux de bord complexes (dashboards) ou de logiciels SaaS innovants nés dans la métropole de Lyon.
              </p>
              <p>
                L'un des avantages majeurs de React réside dans son architecture orientée <strong>composants</strong>. Nous divisons votre interface en briques indépendantes et réutilisables (un bouton, une carte produit, un formulaire de recherche). Cette approche nous permet de créer un véritable "Design System" pour votre marque. Votre code devient ainsi beaucoup plus maintenable, les bugs sont isolés et les futures évolutions du produit sont développées deux fois plus vite.
              </p>
              <p>
                La connexion entre votre interface et vos données doit être irréprochable. Nos développeurs <strong>Full-Stack JavaScript</strong> maîtrisent la gestion d'état complexe (State Management via Redux ou Zustand) et l'interrogation d'APIs (REST ou GraphQL). Que votre base de données soit hébergée chez AWS, ou que vous deviez vous connecter à l'ERP de votre entreprise, nous garantissons un transit sécurisé et optimisé de l'information.
              </p>
              <p>
                Faire appel à notre <strong>agence React.js intervenant à Lyon</strong>, c'est s'assurer d'une ingénierie de pointe. Nous imposons le typage strict via TypeScript pour éviter les erreurs en production, et mettons en place des pipelines de tests automatisés. Que vous souhaitiez nous confier le développement complet de votre projet au forfait, ou que vous recherchiez l'intégration d'un développeur freelance (régie) dans votre équipe technique locale, nous avons la solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos cas d'usage React</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des interfaces exigeantes pour des métiers complexes.
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
                  <div className='w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-cyan-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Le Workflow de notre équipe Tech</h2>
            <p className='text-xl text-slate-400'>De l'idéation de l'interface jusqu'au déploiement continu.</p>
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
                <div className='w-12 h-12 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-cyan-500/30'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions sur le développement React</h2>
            <p className='text-xl text-slate-600'>Les éclaircissements techniques pour votre DSI.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à développer l'interface de vos rêves ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-cyan-50'>
            Que ce soit pour un SaaS ambitieux ou un extranet sécurisé, rencontrons-nous à Lyon pour chiffrer l'intégration de vos maquettes sous React.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-cyan-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un devis React
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
