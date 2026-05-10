'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Code,
  ArrowRight,
  CheckCircle,
  MapPin,
  Smartphone,
  Search,
  Rocket,
  Shield,
  Zap
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence web locale intervenant rapidement à Bron (69500)",
  "Sites internet sur mesure (vitrine, corporate, e-commerce)",
  "Technologies modernes (React, Next.js) pour plus de rapidité",
  "Optimisation SEO incluse pour devancer vos concurrents locaux",
  "Design UX/UI percutant, adapté à la navigation mobile"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Création de Sites Vitrines',
    description: 'Conception de sites internet élégants et professionnels pour présenter votre activité, vos services et générer des contacts (leads) qualifiés sur Bron.'
  },
  {
    icon: ShoppingCart,
    title: 'Boutiques E-Commerce',
    description: 'Développement de plateformes de vente en ligne sécurisées (Shopify, WooCommerce) avec tunnel de conversion optimisé pour maximiser votre chiffre d\'affaires.'
  },
  {
    icon: Search,
    title: 'Stratégie de Référencement (SEO)',
    description: 'Positionnement de votre site en 1ère page de Google sur les requêtes clés de votre secteur (ex: "électricien bron", "agence immobilière bron").'
  },
  {
    icon: Smartphone,
    title: 'Design Mobile-First',
    description: 'Plus de la moitié du trafic web provient des smartphones. Nous créons des interfaces responsives parfaites pour engager vos visiteurs mobiles.'
  },
  {
    icon: Rocket,
    title: 'Refonte & Modernisation',
    description: 'Votre site actuel est obsolète ou pénalisé par Google ? Nous le refondons entièrement pour l\'adapter aux standards techniques d\'aujourd\'hui.'
  },
  {
    icon: Shield,
    title: 'Hébergement & Sécurité',
    description: 'Nous gérons l\'aspect technique : serveurs rapides, certificats SSL (HTTPS), sauvegardes quotidiennes et mises à jour de sécurité.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Rendez-vous Découverte',
    description: 'Analyse de votre marché brondillant, définition de vos cibles et élaboration d\'un cahier des charges précis.'
  },
  {
    number: '02',
    title: 'Création Graphique',
    description: 'Conception de maquettes UI (User Interface) sur mesure, alignées avec votre identité visuelle et validées par vos soins.'
  },
  {
    number: '03',
    title: 'Intégration & Code',
    description: 'Développement technique propre, intégration des contenus et optimisation poussée de la vitesse de chargement.'
  },
  {
    number: '04',
    title: 'Mise en Ligne & Formation',
    description: 'Déploiement sur serveur sécurisé, indexation Google et formation pour vous rendre autonome sur la gestion du site.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir votre agence plutôt qu\'un freelance ?',
    answer: 'Un freelance est souvent spécialisé dans un seul domaine (soit le design, soit le code). Chez Sidikoff Digital, vous bénéficiez de l\'expertise combinée de Web Designers, Développeurs Full-Stack et d\'Experts SEO. Nous livrons des projets complets, sans aucun compromis sur la qualité technique ou le référencement.',
    category: 'agency'
  },
  {
    id: '2',
    question: 'Intervenez-vous physiquement à Bron ?',
    answer: 'Oui, nous accompagnons de nombreuses entreprises de la métropole lyonnaise, dont Bron. La proximité géographique est un atout majeur pour organiser des ateliers de travail, comprendre les spécificités de votre marché local, et tisser une relation de confiance sur le long terme.',
    category: 'local'
  },
  {
    id: '3',
    question: 'Quel budget prévoir pour un site internet professionnel ?',
    answer: 'Chaque projet est unique. Un site vitrine "one-page" très simple peut démarrer autour de 1 500 €, tandis qu\'un site d\'entreprise complexe (plusieurs pages services, module de devis, SEO poussé) ou e-commerce se situe généralement entre 3 000 € et 8 000 €. Nous établissons un devis transparent après notre premier échange.',
    category: 'pricing'
  },
  {
    id: '4',
    question: 'Que se passe-t-il une fois le site en ligne ?',
    answer: 'Vous êtes propriétaire à 100% de votre site internet. Nous vous remettons tous les accès. Si vous le souhaitez, nous proposons des forfaits de maintenance incluant les mises à jour, la sécurité, l\'hébergement et des heures d\'assistance pour faire évoluer votre plateforme.',
    category: 'service'
  },
  {
    id: '5',
    question: 'Le nom de domaine et l\'hébergement sont-ils inclus ?',
    answer: 'Oui, lors de la création de votre site web, nous pouvons nous occuper de la réservation (ou du transfert) de votre nom de domaine (ex: votre-entreprise.fr) et configurer un hébergement professionnel haute performance pour la première année.',
    category: 'tech'
  }
]

// Fix missing icons
import { ShoppingCart, LayoutTemplate } from 'lucide-react'

export default function AgenceWebBronLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-[#0A1128]'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop'
            alt='Création site internet Bron (Rhône)'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/90 to-blue-900/40'></div>
        </div>

        {/* Decorative Blue Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium'>
                <MapPin className='w-4 h-4 mr-2' />
                Agence Web & SEO intervenant à Bron
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de sites web à <span className='text-blue-400'>Bron (69500)</span>
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Attirez de nouveaux clients dans l'Est lyonnais grâce à un site internet moderne, rapide et optimisé pour le référencement naturel sur Google.
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
                    <CheckCircle className='w-5 h-5 text-blue-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-600/20'>
                    Estimer mon projet digital
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Découvrir nos créations
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-square'>
                <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop")] bg-cover bg-center opacity-30 mix-blend-overlay'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center'>
                  <div className='w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl border border-blue-400/30'>
                    <Code className='w-10 h-10 text-white' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>Votre Partenaire Digital</h3>
                  <p className='text-blue-300 font-medium text-lg mb-6'>Design sur mesure & Code propre</p>
                  <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-full shadow-2xl'>
                    <div className='flex justify-between items-center text-sm'>
                       <span className='text-white font-medium'>Performance Google</span>
                       <span className='text-emerald-400 font-bold'>99 / 100</span>
                    </div>
                    <div className='w-full h-2 bg-slate-900 rounded-full mt-3 overflow-hidden'>
                      <div className='h-full bg-emerald-500 w-[99%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]'></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <LayoutTemplate className='w-6 h-6' />
              <span>UX/UI Sur Mesure</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Technologie Next.js</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>Référencement (SEO) Intégré</span>
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
              Pourquoi créer votre site internet avec notre agence web pour cibler Bron ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Située dans l'Est de la métropole de Lyon, <strong>Bron (69500)</strong> est une commune dynamique accueillant de nombreuses entreprises, artisans et pôles économiques (comme les parcs d'activités proches d'Eurexpo ou des hôpitaux Est). Pour les professionnels locaux, disposer d'un site internet qui attire de nouveaux clients n'est pas un luxe, c'est une nécessité stratégique. En tant qu'<strong>agence web partenaire</strong> des entreprises de la région, Sidikoff Digital transforme votre présence en ligne en véritable levier de croissance.
              </p>
              <p>
                La <strong>création d'un site internet à Bron</strong> doit répondre à deux objectifs fondamentaux : séduire vos visiteurs grâce à un design professionnel (UI) intuitif (UX), et convaincre les algorithmes de Google de vous positionner en tête des résultats de recherche. C'est pourquoi nous n'utilisons pas de modèles (templates) génériques préfabriqués. Nous concevons chaque projet sur mesure, en adaptant l'ergonomie à vos objectifs précis : demande de devis, prise de rendez-vous ou achat en ligne.
              </p>
              <p>
                Notre force réside dans notre approche technologique. Finis les sites lents qui font fuir vos visiteurs. Nous utilisons des technologies de pointe comme <strong>React.js, Next.js ou des architectures WordPress hautement optimisées</strong>. Le résultat ? Des temps de chargement immédiats, une fluidité parfaite sur smartphone, et des indicateurs de performance (Core Web Vitals) excellents, ce qui booste significativement votre référencement SEO.
              </p>
              <p>
                Être visible localement est essentiel. Un internaute recherchant un service précis ("entreprise de nettoyage bron", "expert comptable est lyonnais") doit vous trouver immédiatement. Nous intégrons les meilleures pratiques de <strong>SEO Local</strong> dès la conception de l'arborescence du site, en optimisant les balises sémantiques, le maillage interne et en renforçant votre présence sur Google Business Profile (Google Maps).
              </p>
              <p>
                En choisissant notre équipe d'experts, vous profitez d'un accompagnement "clé en main". Nous gérons l'intégralité des aspects techniques : de l'achat de votre nom de domaine à la mise en production sur un serveur sécurisé, jusqu'à la formation de vos équipes pour la gestion courante du contenu. Confiez votre transformation digitale à des professionnels passionnés par le retour sur investissement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos solutions digitales sur mesure</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une gamme complète de services web pour propulser votre entreprise de Bron au niveau supérieur.
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
                  <div className='w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-blue-600' />
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
      <section className='py-20 bg-[#0A1128] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>La méthode de création de votre site</h2>
            <p className='text-xl text-slate-400'>Quatre étapes clés pour un projet livré dans les temps et sans surprise.</p>
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
                className='bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 relative'
              >
                <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-500/20'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes</h2>
            <p className='text-xl text-slate-600'>Vous avez un projet web à Bron ? Voici ce que vous devez savoir.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Donnez un nouvel élan à votre entreprise sur le web</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Nous accompagnons les professionnels de Bron et de l'Est Lyonnais. Contactez-nous pour une analyse gratuite de vos besoins digitaux.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Obtenir mon devis gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
