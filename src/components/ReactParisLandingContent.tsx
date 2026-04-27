'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Code2,
  ArrowRight,
  CheckCircle,
  Zap,
  Layout,
  Smartphone,
  Gauge,
  Blocks,
  Globe,
  Rocket
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Interfaces ultra-réactives et fluides (SPA)",
  "Architecture modulaire et évolutive",
  "Écosystème riche et open-source (Meta)",
  "Expérience utilisateur (UX) de premier plan",
  "Développement d'applications mobiles facilité (React Native)"
]

const services = [
  {
    icon: Zap,
    title: 'Single Page Applications (SPA)',
    description: 'Développement d\'applications web où la navigation se fait instantanément sans rechargement de page, offrant une fluidité proche d\'une application native.'
  },
  {
    icon: Blocks,
    title: 'Architecture Composants',
    description: 'Création d\'interfaces UI modulaires. Chaque élément est un composant réutilisable, garantissant une cohérence visuelle et facilitant la maintenance du code.'
  },
  {
    icon: Layout,
    title: 'Refonte Front-End',
    description: 'Modernisation de votre interface utilisateur existante en migrant vers React.js, sans nécessairement modifier votre back-end ou vos bases de données actuelles.'
  },
  {
    icon: Smartphone,
    title: 'Applications PWA',
    description: 'Développement de Progressive Web Apps avec React. Utilisables hors-ligne, installables sur mobile, avec notifications push intégrées.'
  },
  {
    icon: Gauge,
    title: 'Optimisation de Performance',
    description: 'Mise en place du Virtual DOM, du code-splitting et du lazy loading pour garantir des temps de réponse instantanés même sur des interfaces complexes.'
  },
  {
    icon: Globe,
    title: 'Intégration d\'APIs',
    description: 'Connexion fluide de votre application React avec n\'importe quelle API REST ou GraphQL (Node.js, Python, PHP) pour une gestion des données en temps réel.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Cadrage Technique',
    description: 'Analyse de votre architecture actuelle et définition des choix technologiques (Redux, Zustand, React Query).'
  },
  {
    number: '02',
    title: 'Prototypage UI/UX',
    description: 'Conception de maquettes interactives orientées utilisateur pour valider les parcours et l\'ergonomie.'
  },
  {
    number: '03',
    title: 'Développement Agile',
    description: 'Intégration des composants React avec des revues de code régulières et des livraisons continues (CI/CD).'
  },
  {
    number: '04',
    title: 'Tests & Déploiement',
    description: 'Tests unitaires (Jest), tests end-to-end (Cypress) et mise en production sécurisée de votre application.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir React.js plutôt qu\'un autre framework JavaScript ?',
    answer: 'Créé et maintenu par Meta (Facebook), React.js est le leader incontesté des bibliothèques front-end. Il offre une approche basée sur des composants réutilisables, un Virtual DOM pour des performances optimales, et possède le plus grand écosystème de développeurs au monde, ce qui garantit la pérennité de votre projet.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Quelle est la différence entre React et Next.js ?',
    answer: 'React est une bibliothèque pour construire des interfaces utilisateur (UI). Next.js est un framework construit au-dessus de React qui ajoute des fonctionnalités essentielles comme le rendu côté serveur (SSR), la génération de sites statiques (SSG) et un système de routage intégré, particulièrement crucial pour le SEO.',
    category: 'tech'
  },
  {
    id: '3',
    question: 'Pouvez-vous reprendre une application React existante ?',
    answer: 'Oui, notre agence à Paris réalise régulièrement des audits de code d\'applications React existantes. Nous pouvons optimiser les performances, mettre à jour les dépendances (passage aux Hooks, mise à jour React 18), refactoriser l\'architecture d\'état (Redux vers Zustand par exemple) ou ajouter de nouvelles fonctionnalités.',
    category: 'service'
  },
  {
    id: '4',
    question: 'Combien coûte le développement d\'une application React ?',
    answer: 'Le coût dépend fortement de la complexité de l\'interface, du nombre d\'écrans, des intégrations d\'API et de la gestion de l\'état global. Un projet React sur mesure peut démarrer autour de 10 000 € pour un MVP et dépasser les 50 000 € pour des applications SaaS complexes. Nous proposons un devis précis après le cadrage technique.',
    category: 'pricing'
  },
  {
    id: '5',
    question: 'React est-il bon pour le référencement naturel (SEO) ?',
    answer: 'De base, React génère des applications côté client (CSR), ce qui peut poser des défis pour les robots d\'indexation de Google. Pour des projets nécessitant un fort référencement (E-commerce, blogs, sites vitrines), nous utilisons systématiquement Next.js, le framework React qui permet le Server-Side Rendering (SSR) pour un SEO parfait.',
    category: 'seo'
  }
]

export default function ReactParisLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop'
            alt='Code React JavaScript'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40'></div>
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
                Agence de Développement Front-End
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Agence <span className='text-cyan-400'>React.js</span> à Paris : Créez des interfaces d'exception
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développement d'applications web sur mesure, rapides et interactives avec le framework JavaScript leader du marché. Experts React basés en Île-de-France.
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
                  <button className='w-full sm:w-auto px-8 py-4 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyan-500/20'>
                    Parler à un expert React
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos réalisations
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/5] bg-slate-800 p-8'>
                <div className='absolute top-4 left-4 flex gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
                <div className='mt-8'>
                  <pre className='text-sm text-cyan-300 font-mono overflow-x-auto p-4 bg-slate-900 rounded-lg'>
                    <code>
{`import React, { useState, useEffect } from 'react';
import { createHighPerformanceApp } from '@sidikoff';

export default function ParisReactAgency() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const launchProject = async () => {
      await createHighPerformanceApp({
        framework: 'React.js',
        architecture: 'Component-Based',
        performance: 'Ultra-Fast',
        location: 'Paris, France'
      });
      setSuccess(true);
    };
    launchProject();
  }, []);

  return (
    <div className="bg-cyan-500 text-white">
      {success ? 'Project Delivered !' : 'Building...'}
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-cyan-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-900 font-bold'>
            <div className='flex items-center gap-2'>
              <Blocks className='w-6 h-6' />
              <span>Composants Réutilisables</span>
            </div>
            <div className='flex items-center gap-2'>
              <Gauge className='w-6 h-6' />
              <span>Performances Extrêmes</span>
            </div>
            <div className='flex items-center gap-2'>
              <Rocket className='w-6 h-6' />
              <span>Écosystème Moderne</span>
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
              Pourquoi confier votre projet à notre agence React à Paris ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Dans un écosystème numérique où l'expérience utilisateur (UX) dicte le succès d'un produit, les temps de chargement lents et les interfaces rigides ne sont plus tolérés. C'est ici que <strong>React.js</strong> s'impose. En tant qu'<strong>agence web spécialisée React à Paris</strong>, Sidikoff Digital accompagne les startups, PME et grands groupes franciliens dans la conception d'applications web de très haut niveau.
              </p>
              <p>
                Créé par les ingénieurs de Facebook (Meta), React a révolutionné le développement front-end grâce à son concept de <strong>Virtual DOM</strong>. Au lieu de recharger la page entière à chaque interaction, React ne met à jour que les composants (boutons, formulaires, listes) qui ont réellement changé. Le résultat ? Des applications Single Page (SPA) d'une fluidité remarquable, offrant une expérience proche des applications mobiles natives directement dans le navigateur.
              </p>
              <p>
                Notre pôle d'expertise technique parisien maîtrise l'ensemble de l'écosystème React. De la gestion d'états complexes avec <strong>Redux Toolkit ou Zustand</strong>, aux appels asynchrones optimisés avec React Query, nous concevons des architectures robustes et scalables. Que vous ayez besoin de développer un dashboard SaaS B2B complexe, une marketplace, ou une plateforme métier interne, nos <strong>développeurs React seniors</strong> écrivent un code propre, typé (avec TypeScript), testé et maintenable.
              </p>
              <p>
                Collaborer avec une <strong>agence React parisienne</strong> vous garantit une proximité stratégique. Nous pouvons nous rencontrer dans vos bureaux à Paris, La Défense ou en proche banlieue pour organiser des ateliers de conception (UX/UI) et des sprints agiles. Nous ne sommes pas de simples exécutants : nous challengeons vos idées et vous conseillons sur les meilleurs choix technologiques pour assurer la pérennité de votre investissement technique.
              </p>
              <p>
                Enfin, si l'enjeu majeur de votre plateforme est l'acquisition de trafic via les moteurs de recherche, notre double expertise en développement front-end et en SEO nous permet d'hybrider React avec <strong>Next.js</strong>. Vous profitez ainsi de la puissance de développement de React tout en garantissant un Server-Side Rendering (SSR) parfaitement lisible par Google, propulsant votre site en tête des résultats de recherche.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos expertises React.js</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des solutions techniques pointues pour répondre aux défis numériques les plus exigeants.
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
            <h2 className='text-3xl font-bold mb-4'>Notre approche d'ingénierie front-end</h2>
            <p className='text-xl text-slate-400'>Une méthodologie rigoureuse pour des livraisons de haute qualité.</p>
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
                <div className='w-12 h-12 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-cyan-500/20'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes sur React</h2>
            <p className='text-xl text-slate-600'>Les réponses aux interrogations techniques de nos clients.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-cyan-500 to-cyan-600 text-slate-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à développer votre application web ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Rencontrez nos développeurs React à Paris ou en visioconférence pour auditer votre projet et estimer les coûts de développement.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl'>
                Planifier une consultation technique
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
