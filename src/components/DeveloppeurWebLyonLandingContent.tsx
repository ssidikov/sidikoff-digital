import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Terminal,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Cpu,
  GitBranch,
  Laptop,
  Users
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Pôle technique Full-Stack basé au cœur de la région lyonnaise",
  "Spécialistes JavaScript / TypeScript (React, Next.js, Node.js)",
  "Développement de plateformes SaaS et Web Apps complexes",
  "Méthodologie Agile et qualité de code irréprochable (CI/CD)",
  "Intervention au forfait ou délégation en régie (Freelance)"
]

const services = [
  {
    icon: Code,
    title: 'Développement Front-End',
    description: 'Création d\'interfaces interactives et de Single Page Applications (SPA) ultra-rapides avec React.js, Next.js et Vue.js. Intégration pixel-perfect.'
  },
  {
    icon: Database,
    title: 'Ingénierie Back-End',
    description: 'Conception d\'architectures de données robustes et d\'APIs sécurisées (REST/GraphQL) via Node.js (NestJS, Express), Python ou PHP.'
  },
  {
    icon: GitBranch,
    title: 'Architecture & DevOps',
    description: 'Mise en place d\'infrastructures Cloud scalables (AWS, Vercel) et de pipelines d\'intégration et déploiement continus (GitHub Actions).'
  },
  {
    icon: Laptop,
    title: 'Création de SaaS B2B',
    description: 'De l\'idée à la production : développement de votre logiciel en tant que service, avec gestion des abonnements (Stripe) et tableaux de bord complexes.'
  },
  {
    icon: Users,
    title: 'Délégation en Régie',
    description: 'Besoin d\'un développeur senior rapidement ? Nous intégrons nos experts au sein de votre DSI ou équipe tech lyonnaise pour accélérer vos sprints.'
  },
  {
    icon: Cpu,
    title: 'Audit & Refactoring Code',
    description: 'Analyse approfondie de votre dette technique (code legacy), résolution des goulots d\'étranglement de performance et sécurisation des failles.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Cadrage & Architecture',
    description: 'Ateliers techniques à Lyon pour définir les spécifications, le modèle de données (MCD) et le choix de la stack technologique.'
  },
  {
    number: '02',
    title: 'Développement Agile',
    description: 'Cycles de développement courts (Sprints) avec des livraisons fréquentes pour vous permettre de tester les nouvelles fonctionnalités.'
  },
  {
    number: '03',
    title: 'Tests Automatisés (QA)',
    description: 'Garantie de non-régression grâce à l\'écriture de tests unitaires (Jest) et de tests end-to-end (Cypress).'
  },
  {
    number: '04',
    title: 'Mise en Production',
    description: 'Déploiement sur vos serveurs et mise en place d\'une Tierce Maintenance Applicative (TMA) pour les évolutions futures.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quelles sont les technologies maîtrisées par vos développeurs ?',
    answer: 'Notre pôle d\'ingénierie web est hyper-spécialisé sur l\'écosystème JavaScript et TypeScript. En Front-End, nous excellons sur React.js et Next.js. En Back-End, nous concevons des APIs sous Node.js (NestJS, Express). Nous maîtrisons également la gestion de bases de données relationnelles (PostgreSQL) et NoSQL (MongoDB).',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Quelle est la différence entre un projet au "forfait" et en "régie" ?',
    answer: 'Le forfait est idéal pour un projet avec un cahier des charges fixe : nous nous engageons sur un prix et un délai de livraison. La régie (ou assistance technique) consiste à mettre un ou plusieurs de nos développeurs à votre disposition (temps plein ou partiel) pour intégrer votre équipe existante et travailler sur votre backlog.',
    category: 'service'
  },
  {
    id: '3',
    question: 'Où sont basées vos équipes de développement ?',
    answer: 'Contrairement aux agences qui externalisent en offshore, tous nos développeurs logiciels sont basés en France, avec une forte présence dans la région lyonnaise (Rhône-Alpes). Cela garantit une communication fluide, l\'absence de barrière linguistique et de décalage horaire, ainsi qu\'une sécurité juridique de vos données.',
    category: 'location'
  },
  {
    id: '4',
    question: 'Comment garantissez-vous la sécurité et la qualité du code ?',
    answer: 'La qualité est assurée par un processus strict : typage fort avec TypeScript, revues de code (Code Review) obligatoires entre développeurs avant toute fusion (Merge), et exécution de tests automatisés via des pipelines CI/CD. Nous appliquons les principes du Clean Code et du SOLID.',
    category: 'quality'
  },
  {
    id: '5',
    question: 'À qui appartient le code source une fois le développement terminé ?',
    answer: 'La propriété intellectuelle vous appartient à 100%. Une fois la facture finale réglée, nous vous transférons l\'intégralité des droits sur le code source développé. Le code est hébergé sur vos propres dépôts Git (GitHub/GitLab) dont vous êtes le propriétaire administrateur exclusif.',
    category: 'legal'
  }
]

export default function DeveloppeurWebLyonLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-[#0F172A]'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop'
            alt='Développeur Web Lyon Code'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-emerald-900/40'></div>
        </div>

        {/* Decorative Emerald Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-medium'>
                <Terminal className='w-4 h-4 mr-2' />
                Ingénierie Logicielle en Rhône-Alpes
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  <span className='text-emerald-400'>Développeur Web</span> Lyon : Ingénierie & Code Sur Mesure
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développement d'applications complexes, création d'APIs et conception de plateformes SaaS. Renforcez vos équipes avec des ingénieurs Full-Stack de haut niveau.
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
                    <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-emerald-600/20'>
                    Parler de votre stack tech
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos cas clients tech
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
                <div className='space-y-2 text-slate-300'>
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>~</span>
                    <span className='text-blue-400'>pnpm</span>
                    <span className='ml-2 text-slate-300'>run start:prod</span>
                  </div>
                  <div className='text-slate-500'>&gt; api-core-service@1.4.2 start:prod</div>
                  <div className='text-slate-500'>&gt; nest start --cors --production</div>
                  <br />
                  <div className='text-emerald-400 font-bold'>[NestFactory] Starting application...</div>
                  <div className='text-blue-400'>[InstanceLoader] AppModule dependencies initialized</div>
                  <div className='text-blue-400'>[RoutesResolver] AuthController {"/api/auth"}</div>
                  <div className='text-blue-400'>[RoutesResolver] UsersController {"/api/users"}</div>
                  <div className='text-blue-400'>[RoutesResolver] BillingController {"/api/billing"}</div>
                  <br />
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>PostgreSQL Database connected [SSL/TLS]</span>
                  </div>
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>Redis Cache initialized (Latency: 2ms)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>Application successfully started on port 8080</span>
                  </div>
                  <div className='animate-pulse mt-4'>_</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-emerald-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <Code className='w-6 h-6' />
              <span>Stack JavaScript/TypeScript</span>
            </div>
            <div className='flex items-center gap-2'>
              <GitBranch className='w-6 h-6' />
              <span>Clean Code & Tests (TDD)</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='w-6 h-6' />
              <span>Équipe Locale (Lyon)</span>
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
              Développeur web à Lyon : Pourquoi choisir une ingénierie logicielle d'excellence ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                La région lyonnaise est un véritable carrefour d'innovation technologique en France. Les startups, les DSI de grands groupes et les PME industrielles sont toutes confrontées au même défi : trouver un bon <strong>développeur web à Lyon</strong> ou une équipe capable de concevoir des applications web complexes, stables et évolutives. Bricoler une application avec des outils "No-Code" atteint vite ses limites lorsqu'il s'agit de gérer des données sensibles ou des pics de trafic.
              </p>
              <p>
                Chez Sidikoff Digital, notre pôle technologique ne fait pas d'intégration basique. Nous sommes des <strong>Software Engineers (Ingénieurs Logiciels) Full-Stack</strong>. Avant même d'écrire la première ligne de code, nous nous concentrons sur la conception de l'architecture. Choix des protocoles de communication (API REST ou GraphQL), structuration de la base de données relationnelle (PostgreSQL), et déploiement d'une infrastructure Cloud résiliente (AWS, Google Cloud ou Vercel).
              </p>
              <p>
                Notre cœur d'expertise gravite autour de l'écosystème <strong>JavaScript et TypeScript</strong>. Cette stack unifiée permet de partager la logique métier entre le Front-End (développé avec <strong>React ou Next.js</strong> pour une réactivité extrême côté client) et le Back-End (motorisé par <strong>Node.js et NestJS</strong>). Cette maîtrise totale de l'environnement JS accélère drastiquement les temps de développement et facilite la maintenance.
              </p>
              <p>
                La dette technique est le pire ennemi d'un produit digital. Une base de code mal structurée finit toujours par freiner, voire stopper l'ajout de nouvelles fonctionnalités. C'est pourquoi nous sommes intransigeants sur la qualité : règles de typage strictes (TypeScript), linters agressifs, et surtout, implémentation de <strong>tests automatisés (Jest, Cypress) intégrés dans un pipeline CI/CD</strong>. Vos déploiements en production se font en un clic et sans stress.
              </p>
              <p>
                Notre offre est flexible pour s'adapter à la réalité de votre entreprise lyonnaise. Vous avez un cahier des charges précis ? Nous réalisons le <strong>développement de votre SaaS au forfait</strong>. Votre équipe tech a besoin de renfort immédiat ? Nos développeurs interviennent en <strong>régie (Freelance)</strong>, directement dans vos locaux (Part-Dieu, Confluence, Gerland) ou en télétravail, pour accélérer vos sprints de développement en méthode Agile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos expertises en développement web</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des compétences avancées pour répondre aux défis techniques des entreprises modernes.
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
                  <div className='w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-emerald-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Le cycle de vie de votre application</h2>
            <p className='text-xl text-slate-400'>Une méthodologie Agile basée sur la transparence et la livraison continue.</p>
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
                <div className='w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-emerald-500/30'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Foire Aux Questions Code & Tech</h2>
            <p className='text-xl text-slate-600'>Les interrogations fréquentes de nos clients techniques.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Besoin de muscler votre équipe ou de développer un MVP ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-emerald-50'>
            Rencontrez nos ingénieurs basés à Lyon. Nous auditons gratuitement votre architecture actuelle et vous proposons une feuille de route technique claire.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-emerald-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Planifier un RDV Technique
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
