'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Triangle,
  ArrowRight,
  CheckCircle,
  Zap,
  Server,
  Layers,
  Search,
  Cpu,
  Globe,
  Gauge
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Rendu côté serveur (SSR) natif pour un SEO parfait",
  "Génération de sites statiques (SSG) ultra-rapide",
  "Optimisation automatique des images et polices",
  "Architecture App Router moderne (React Server Components)",
  "Déploiement Vercel fluide (Edge Computing)"
]

const services = [
  {
    icon: Search,
    title: 'Optimisation SEO Avancée',
    description: 'Le rendu SSR permet aux moteurs de recherche de lire instantanément le contenu complet de votre site, garantissant une indexation optimale contrairement aux applications React classiques.'
  },
  {
    icon: Zap,
    title: 'Performances Extrêmes',
    description: 'Temps de chargement réduits à la milliseconde grâce à la génération statique (SSG) et à l\'optimisation automatique des Core Web Vitals (LCP, FID, CLS).'
  },
  {
    icon: Server,
    title: 'React Server Components',
    description: 'Utilisation de la dernière architecture Next.js (App Router) permettant d\'exécuter le code directement sur le serveur, allégeant drastiquement le poids du JavaScript envoyé au client.'
  },
  {
    icon: Layers,
    title: 'Migration vers Next.js',
    description: 'Refonte de vos anciennes applications (WordPress, Create React App) vers l\'écosystème Next.js pour gagner en stabilité, en sécurité et en vitesse d\'affichage.'
  },
  {
    icon: Globe,
    title: 'Internationalisation (i18n)',
    description: 'Création d\'architectures multi-langues natives avec routage optimisé pour chaque zone géographique, essentiel pour une présence SEO mondiale.'
  },
  {
    icon: Cpu,
    title: 'API Routes & Full-Stack',
    description: 'Next.js n\'est pas qu\'un front-end. Nous créons des routes API (Serverless Functions) intégrées directement dans le framework pour construire de véritables applications Full-Stack.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Architecture',
    description: 'Définition de la stratégie de rendu (SSR vs SSG vs ISR) selon les besoins SEO et la fréquence de mise à jour de vos données.'
  },
  {
    number: '02',
    title: 'Design & Intégration',
    description: 'Création d\'interfaces pixel-perfect avec Tailwind CSS et intégration en React Server Components.'
  },
  {
    number: '03',
    title: 'Développement Backend',
    description: 'Connexion aux bases de données (Supabase, Prisma, MongoDB) ou CMS Headless (Sanity, Strapi) via les Server Actions.'
  },
  {
    number: '04',
    title: 'Déploiement Vercel',
    description: 'Mise en production sur le réseau global Edge (Vercel) avec CI/CD automatisé et monitoring des performances en temps réel.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir Next.js plutôt que React classique (CRA ou Vite) ?',
    answer: 'React classique exécute le rendu côté client (CSR), ce qui pose de gros problèmes de SEO et de temps de premier chargement (First Contentful Paint). Next.js résout cela en rendant les pages sur le serveur avant de les envoyer au navigateur. C\'est le standard absolu aujourd\'hui pour toute application web publique.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Qu\'est-ce que le SSR (Server-Side Rendering) et pourquoi est-ce si important ?',
    answer: 'Le SSR signifie que le code HTML est généré sur le serveur à chaque requête. Pour Google, cela veut dire que lorsqu\'il scanne votre page, il voit tout le contenu texte et les balises meta immédiatement, sans avoir à attendre l\'exécution du JavaScript. C\'est indispensable pour dominer les résultats de recherche.',
    category: 'seo'
  },
  {
    id: '3',
    question: 'Êtes-vous familiers avec le nouvel App Router de Next.js ?',
    answer: 'Absolument. Notre agence parisienne maîtrise parfaitement l\'App Router (introduit dans Next.js 13+). Nous utilisons systématiquement les React Server Components (RSC), les Server Actions et les layouts imbriqués pour garantir que votre application utilise les standards technologiques les plus récents.',
    category: 'tech'
  },
  {
    id: '4',
    question: 'Next.js est-il adapté pour le E-commerce ?',
    answer: 'C\'est l\'outil parfait. Les géants du e-commerce (Nike, TikTok, Target) utilisent Next.js. Grâce à l\'Incremental Static Regeneration (ISR), vous pouvez générer des milliers de pages produits statiques très rapides, tout en les mettant à jour en arrière-plan dès que le stock ou le prix change, sans recompiler tout le site.',
    category: 'ecommerce'
  },
  {
    id: '5',
    question: 'Hébergez-vous obligatoirement sur Vercel ?',
    answer: 'Bien que Next.js soit créé par Vercel et que leur infrastructure cloud (Edge) soit la plus optimisée pour ce framework, Next.js peut être déployé n\'importe où (AWS, Google Cloud, serveurs dédiés OVH via Docker ou Node.js). Nous choisissons l\'hébergement en fonction de vos contraintes techniques et budgétaires.',
    category: 'hosting'
  }
]

export default function NextjsParisLandingContent() {
  return (
    <div className='min-h-screen bg-zinc-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-black'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-40'>
          <Image
            src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
            alt='Serveur Edge Cloud Computing'
            fill
            className='object-cover grayscale'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/90 to-zinc-900/40'></div>
        </div>

        {/* Decorative Minimalist Grid */}
        <div className='absolute inset-0 z-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")] opacity-50'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm'>
                <Triangle className='w-4 h-4 mr-2 fill-white' />
                Agence Experte Next.js
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight'>
                  Agence <span className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500'>Next.js</span> Paris
                </h1>
                <p className='text-xl text-zinc-400 leading-relaxed mb-8 font-light'>
                  L'alliance parfaite entre des performances extrêmes et un SEO chirurgical. Construisez l'avenir de votre présence web avec le framework React de référence.
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
                    <span className='text-zinc-300 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center shadow-lg shadow-white/10'>
                    Démarrer un projet Next.js
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm'>
                    Explorer nos cas clients
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 p-1'>
                <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 rounded-2xl pointer-events-none'></div>
                <div className='bg-black rounded-xl p-8 border border-zinc-900'>
                  <div className='flex items-center justify-between mb-8 pb-4 border-b border-zinc-800'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                         <Triangle className='w-4 h-4 text-black fill-black' />
                      </div>
                      <span className='text-white font-mono text-sm'>Vercel Deploy</span>
                    </div>
                    <div className='px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono flex items-center'>
                      <div className='w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse'></div>
                      Ready
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between text-xs font-mono'>
                      <span className='text-zinc-500'>Route</span>
                      <span className='text-zinc-400'>Size</span>
                      <span className='text-zinc-500'>First Load JS</span>
                    </div>
                    <div className='flex items-center justify-between font-mono text-sm bg-zinc-900/50 p-2 rounded'>
                      <div className='flex items-center text-white'>
                         <span className='text-zinc-500 mr-2'>○</span> /
                      </div>
                      <span className='text-zinc-400'>242 B</span>
                      <span className='text-green-400'>76.4 kB</span>
                    </div>
                    <div className='flex items-center justify-between font-mono text-sm bg-zinc-900/50 p-2 rounded'>
                      <div className='flex items-center text-white'>
                         <span className='text-zinc-500 mr-2'>●</span> /services
                      </div>
                      <span className='text-zinc-400'>1.2 kB</span>
                      <span className='text-green-400'>77.5 kB</span>
                    </div>
                    <div className='flex items-center justify-between font-mono text-sm bg-zinc-900/50 p-2 rounded'>
                      <div className='flex items-center text-white'>
                         <span className='text-zinc-500 mr-2'>λ</span> /api/auth
                      </div>
                      <span className='text-zinc-400'>-</span>
                      <span className='text-zinc-500'>-</span>
                    </div>
                    <div className='pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500'>
                      <p>λ  (Server)  server-side renders at runtime</p>
                      <p>○  (Static)  automatically rendered as static HTML</p>
                      <p>●  (SSG)     automatically generated as static HTML</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 border-b border-zinc-200 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-800 font-bold'>
            <div className='flex items-center gap-2'>
              <Gauge className='w-6 h-6' />
              <span>Core Web Vitals Optimisés</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>Indexation Instantanée (SSR)</span>
            </div>
            <div className='flex items-center gap-2'>
              <Server className='w-6 h-6' />
              <span>React Server Components</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion */}
      <section className='py-20 bg-zinc-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-zinc-900 mb-8'>
              Pourquoi Next.js est le standard de l'industrie pour les entreprises exigeantes ?
            </h2>
            <div className='prose prose-lg text-zinc-700 space-y-6'>
              <p>
                Aujourd'hui, avoir un site internet "qui fonctionne" ne suffit plus. Les algorithmes de Google exigent des temps de réponse sous la seconde (Core Web Vitals), et les utilisateurs abandonnent toute navigation sujette à latence. En tant qu'<strong>agence web Next.js experte basée à Paris</strong>, nous utilisons ce framework pour propulser vos applications web à un niveau de performance inégalable.
              </p>
              <p>
                L'avantage majeur de Next.js réside dans sa capacité de rendu. Contrairement aux applications React classiques qui s'exécutent entièrement sur le navigateur du client (Client-Side Rendering), Next.js génère le HTML <strong>directement sur le serveur (SSR) ou au moment de la compilation (SSG)</strong>. Concrètement, lorsque le robot de Google parcourt votre site, il trouve un code source complet, sémantiquement parfait, et instantanément lisible. Le résultat est une augmentation radicale de votre trafic SEO naturel.
              </p>
              <p>
                Créé par Vercel et développé en étroite collaboration avec l'équipe fondatrice de React (Meta), Next.js est devenu l'outil de prédilection des leaders technologiques mondiaux. En confiant votre projet à notre <strong>équipe de développeurs Next.js à Paris</strong>, vous profitez de fonctionnalités d'avant-garde : optimisation automatique des images (WebP/AVIF), pré-chargement intelligent des polices, et Edge Computing pour servir vos données depuis le serveur mondial le plus proche de votre utilisateur.
              </p>
              <p>
                Nous exploitons massivement la nouvelle architecture <strong>App Router et les React Server Components (RSC)</strong>. Cette révolution permet d'exécuter la majorité du code métier en toute sécurité sur le serveur (backend), et d'envoyer aux navigateurs un bundle JavaScript minimaliste. Votre application consomme moins de données, s'affiche plus vite sur les réseaux mobiles, et offre une sécurité accrue (pas d'exposition d'API keys côté client).
              </p>
              <p>
                Que vous soyez une start-up parisienne visant l'hyper-croissance, une marque e-commerce ayant besoin d'actualiser des milliers de fiches produits sans pénaliser sa vitesse (grâce à l'ISR - Incremental Static Regeneration), ou un média gérant un trafic massif, notre <strong>expertise Next.js</strong> sécurise techniquement vos ambitions. Nous créons des fondations digitales robustes, scalables à l'infini, et intrinsèquement conçues pour dominer les moteurs de recherche.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-zinc-900 mb-4'>L'écosystème Next.js maîtrisé de A à Z</h2>
            <p className='text-xl text-zinc-600 max-w-3xl mx-auto'>
              Des architectures complexes simplifiées par un framework puissant.
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
                  className='bg-zinc-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-zinc-100'
                >
                  <div className='w-14 h-14 bg-white shadow-sm border border-zinc-100 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-black' />
                  </div>
                  <h3 className='text-xl font-bold text-zinc-900 mb-3'>{service.title}</h3>
                  <p className='text-zinc-600 leading-relaxed'>{service.description}</p>
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
            <h2 className='text-3xl font-bold mb-4'>Méthodologie de déploiement Next.js</h2>
            <p className='text-xl text-zinc-400'>De la stratégie de cache à la mise en production sur Vercel.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-zinc-950 p-6 rounded-xl border border-zinc-800 relative'
              >
                <div className='w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_15px_rgba(255,255,255,0.2)]'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-zinc-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-zinc-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-zinc-900 mb-4'>Questions Techniques Fréquentes</h2>
            <p className='text-xl text-zinc-600'>Comprendre la valeur ajoutée de Next.js pour votre entreprise.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-white border-t border-zinc-200'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-8'>
            <Triangle className='w-8 h-8 fill-white text-white' />
          </div>
          <h2 className='text-4xl font-bold text-black mb-6 tracking-tight'>Passez à la vitesse supérieure</h2>
          <p className='text-xl text-zinc-600 mb-10 max-w-2xl mx-auto font-medium'>
            Laissez derrière vous les limitations techniques. Discutons de votre migration vers Next.js et propulsez vos Core Web Vitals dans le vert.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-all shadow-xl'>
                Demander un audit d'architecture
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
