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
  "Expertise Full-Stack : React, Node.js, Next.js, TypeScript",
  "Code propre, documenté et testé (TDD / CI-CD)",
  "Architectures scalables (Microservices, Serverless)",
  "Méthodologie Agile (Scrum/Kanban) avec sprints réguliers",
  "Régie, forfait ou intégration dans vos équipes parisiennes"
]

const services = [
  {
    icon: Code,
    title: 'Développement Front-End',
    description: 'Création d\'interfaces utilisateur dynamiques et complexes avec React.js, Next.js, et Vue.js. Intégration pixel-perfect et animations fluides.'
  },
  {
    icon: Database,
    title: 'Ingénierie Back-End',
    description: 'Conception d\'APIs REST ou GraphQL robustes et sécurisées avec Node.js (NestJS, Express), Python (Django/FastAPI) ou PHP (Laravel).'
  },
  {
    icon: GitBranch,
    title: 'Architecture & DevOps',
    description: 'Mise en place d\'infrastructures Cloud (AWS, Vercel, Docker), pipelines d\'intégration continue (GitHub Actions) et bases de données scalables.'
  },
  {
    icon: Laptop,
    title: 'Création de SaaS B2B',
    description: 'Développement complet de votre logiciel en tant que service, de la gestion des abonnements (Stripe) au dashboard multi-tenants complexe.'
  },
  {
    icon: Users,
    title: 'Renfort d\'Équipe (Régie)',
    description: 'Délégation de développeurs web seniors parisiens pour accélérer la livraison de votre roadmap technique au sein de votre DSI.'
  },
  {
    icon: Cpu,
    title: 'Audit & Refactoring',
    description: 'Analyse de code legacy, résolution de la dette technique, optimisation des performances (temps de réponse) et sécurisation des failles.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Expression du Besoin',
    description: 'Ateliers de conception technique pour définir les specs, l\'architecture (stack) et le modèle de données (MCD).'
  },
  {
    number: '02',
    title: 'Sprints de Développement',
    description: 'Développement en méthode Agile. Livraisons régulières (toutes les 2 semaines) pour validation des fonctionnalités.'
  },
  {
    number: '03',
    title: 'Assurance Qualité (QA)',
    description: 'Tests automatisés (unitaires, e2e) et tests de montée en charge pour garantir la robustesse de l\'application.'
  },
  {
    number: '04',
    title: 'Déploiement & TMA',
    description: 'Mise en production sécurisée et Tierce Maintenance Applicative (TMA) pour faire évoluer votre produit.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quelles sont vos technologies (stack) de prédilection ?',
    answer: 'Notre pôle de développement web à Paris est spécialisé sur l\'écosystème JavaScript/TypeScript moderne : React, Next.js, Node.js (NestJS/Express), et des bases de données relationnelles (PostgreSQL) ou NoSQL (MongoDB). Nous maîtrisons également Python et PHP pour des besoins spécifiques ou la reprise de code existant.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Proposez-vous du développement au forfait ou en régie ?',
    answer: 'Nous proposons les deux. Le "Forfait" est idéal pour un projet dont le cahier des charges est figé et maîtrisé. La "Régie" (ou intégration en équipe agile) est recommandée pour des projets SaaS ou e-commerce évolutifs, où vous avez besoin d\'un développeur senior à temps plein pour renforcer vos effectifs.',
    category: 'service'
  },
  {
    id: '3',
    question: 'Où sont basés vos développeurs ?',
    answer: 'Tous nos développeurs web et ingénieurs logiciels sont basés en France, avec un noyau dur à Paris et en Île-de-France. Nous ne faisons pas d\'offshore. Cela garantit une communication fluide, l\'absence de décalage horaire, et la possibilité d\'organiser des réunions physiques dans vos locaux.',
    category: 'location'
  },
  {
    id: '4',
    question: 'Comment garantissez-vous la qualité du code ?',
    answer: 'La qualité est non négociable. Nous appliquons des standards stricts : typage fort avec TypeScript, linters (ESLint), revues de code systématiques (Code Reviews) entre pairs, et couverture de tests automatisés (Jest, Cypress) intégrés dans un pipeline CI/CD.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Qui est propriétaire du code source à la fin du projet ?',
    answer: 'Vous l\'êtes à 100%. Dès le paiement intégral de la prestation, tous les droits de propriété intellectuelle sur le code source vous sont transférés. Nous hébergeons le code sur un dépôt Git (GitHub ou GitLab) auquel vous avez un accès complet en tant qu\'administrateur.',
    category: 'legal'
  }
]

export default function DeveloppeurWebParisLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop'
            alt='Équipe de développeurs web'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-900/40'></div>
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
                Pôle d'Ingénierie Logicielle
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  <span className='text-emerald-400'>Développeur Web</span> Paris : Ingénierie & Applications sur mesure
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Conception, développement et architecture de plateformes web complexes, SaaS et APIs. Une équipe tech senior basée en Île-de-France pour propulser votre produit.
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
                    Briefer notre équipe tech
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Découvrir notre portfolio
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
                    <span className='text-blue-400'>npm</span>
                    <span className='ml-2 text-slate-300'>run dev</span>
                  </div>
                  <div className='text-slate-500'>&gt; sidikoff-digital@2.0.0 dev</div>
                  <div className='text-slate-500'>&gt; next dev -p 3000</div>
                  <br />
                  <div className='text-emerald-400 font-bold'>ready - started server on 0.0.0.0:3000, url: http://localhost:3000</div>
                  <div className='text-blue-400'>info  - using webpack 5</div>
                  <div className='text-emerald-400'>event - compiled client and server successfully in 1250 ms (145 modules)</div>
                  <div className='text-slate-400'>wait  - compiling /api/users...</div>
                  <div className='text-emerald-400'>event - compiled client and server successfully in 210 ms (154 modules)</div>
                  <br />
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>Connected to PostgreSQL Database (Production)</span>
                  </div>
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>API Routes Initialized</span>
                  </div>
                  <div className='flex'>
                    <span className='text-emerald-500 mr-2'>✓</span>
                    <span className='text-slate-300'>WebSocket Server Ready</span>
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
              <span>CI/CD & Tests Automatisés</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='w-6 h-6' />
              <span>Équipe 100% Locale</span>
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
              Développeur web à Paris : Pourquoi choisir l'excellence technique ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Dans la capitale de la French Tech, trouver un bon <strong>développeur web à Paris</strong> est un défi majeur pour les porteurs de projets, les startups et les directeurs des systèmes d'information (DSI). Face à la complexification des standards du web, bricoler un site avec des outils grand public ne suffit plus pour les entreprises ambitieuses. Vous avez besoin d'une véritable ingénierie logicielle pour construire des plateformes capables de scaler, de résister aux failles de sécurité, et d'offrir une expérience utilisateur irréprochable.
              </p>
              <p>
                Chez Sidikoff Digital, notre pôle tech se compose exclusivement de <strong>développeurs Full-Stack seniors et de Software Engineers</strong> confirmés. Nous ne sommes pas de simples "codeurs" exécutants. Nous agissons comme de véritables partenaires techniques (CTO as a Service). Avant d'écrire la moindre ligne de code, nous challengeons votre modèle de données, concevons l'architecture cloud la plus rentable (AWS, Vercel, Supabase), et sécurisons les spécifications fonctionnelles pour éviter toute dérive budgétaire.
              </p>
              <p>
                Notre cœur de métier repose sur la maîtrise absolue de la stack <strong>JavaScript / TypeScript</strong> moderne. Pour le Front-End, nous excellons dans la création d'applications réactives (SPA) avec <strong>React.js et Next.js</strong>, permettant de lier performances d'affichage et excellence SEO. Côté Back-End, nous concevons des APIs (REST ou GraphQL) robustes avec <strong>Node.js</strong> (NestJS), interagissant avec des bases de données relationnelles complexes (PostgreSQL, MySQL) ou NoSQL.
              </p>
              <p>
                La dette technique est le pire ennemi de la rentabilité de votre produit. C'est pourquoi nous appliquons des standards de développement drastiques. Tous nos projets incluent une couverture de <strong>tests automatisés</strong> (unitaires et end-to-end), l'intégration de linters, et un déploiement continu via des pipelines CI/CD (GitHub Actions). Ce niveau de rigueur garantit qu'une nouvelle fonctionnalité n'entraînera pas de régression sur votre application existante en production.
              </p>
              <p>
                Enfin, la flexibilité est clé. Que vous cherchiez à externaliser le développement complet d'un SaaS B2B, ou que vous ayez besoin du renfort d'un <strong>développeur web freelance à Paris</strong> en délégation (régie) pour épauler votre équipe en interne, nous adaptons notre format de collaboration. Nos locaux et nos développeurs étant situés en Île-de-France, nous privilégions la proximité, la transparence et l'agilité.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos expertises en ingénierie logicielle</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des compétences pointues pour résoudre vos défis techniques les plus complexes.
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
            <h2 className='text-3xl font-bold mb-4'>Notre cycle de développement Agile</h2>
            <p className='text-xl text-slate-400'>Transparence, itération rapide et qualité de code irréprochable.</p>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Foire Aux Questions Tech</h2>
            <p className='text-xl text-slate-600'>Modalités de collaboration et choix technologiques.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Un projet applicatif complexe à réaliser ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-emerald-50'>
            Rencontrez nos développeurs Full-Stack à Paris ou en visio. Audits d'architecture technique, chiffrage de MVP ou renfort d'équipe.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-emerald-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Planifier un point technique
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
