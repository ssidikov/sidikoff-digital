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
  "Agence digitale partenaire des entreprises de Vénissieux",
  "Design web moderne, unique et orienté conversion (CRO)",
  "Sites vitrines et boutiques E-commerce sécurisées",
  "Stratégie SEO hyper-locale pour dominer le Sud-Est lyonnais",
  "Développement React/Next.js pour une vitesse maximale"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Création de Sites Vitrines',
    description: 'Conception de sites internet professionnels pour affirmer la crédibilité de votre entreprise à Vénissieux et capter de nouveaux prospects qualifiés.'
  },
  {
    icon: ShoppingCart,
    title: 'Développement E-Commerce',
    description: 'Création de boutiques en ligne (WooCommerce, Shopify) avec des tunnels de vente fluides, optimisés pour maximiser votre taux de conversion.'
  },
  {
    icon: Search,
    title: 'Référencement Naturel (SEO)',
    description: 'Positionnement de vos services en 1ère page de Google sur les requêtes locales stratégiques (ex: "expert comptable vénissieux", "plombier rhône").'
  },
  {
    icon: Smartphone,
    title: 'Interfaces Mobile-First',
    description: 'Une expérience de navigation parfaite sur tous les écrans, essentielle sachant que la majorité de vos futurs clients vous trouveront via leur smartphone.'
  },
  {
    icon: Rocket,
    title: 'Refonte de Site Web',
    description: 'Modernisation de votre ancien site internet pour l\'adapter aux standards techniques actuels, améliorer sa vitesse et son design.'
  },
  {
    icon: Shield,
    title: 'Maintenance & Sécurité',
    description: 'Hébergement haute disponibilité, sauvegardes régulières et mises à jour de sécurité pour protéger les données de votre entreprise.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Stratégie & Cahier des charges',
    description: 'Analyse de votre activité sur Vénissieux et définition précise de vos objectifs (génération de leads, ventes directes, notoriété).'
  },
  {
    number: '02',
    title: 'Web Design (Maquettes UI)',
    description: 'Création d\'une identité visuelle sur mesure qui reflète le professionnalisme de votre marque et engage vos visiteurs.'
  },
  {
    number: '03',
    title: 'Développement & Intégration',
    description: 'Code propre, optimisé pour les performances et respectant les critères techniques exigés par l\'algorithme de Google.'
  },
  {
    number: '04',
    title: 'Livraison & Formation',
    description: 'Mise en ligne de votre site internet et formation à la gestion du contenu pour garantir votre autonomie.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Intervenez-vous pour les entreprises basées à Vénissieux ?',
    answer: 'Oui, Sidikoff Digital intervient auprès des PME, artisans et commerçants de toute la métropole lyonnaise, y compris Vénissieux et ses zones d\'activités limitrophes (Corbas, Saint-Fons, Feyzin). Nous privilégions une approche locale pour mieux comprendre votre marché.',
    category: 'local'
  },
  {
    id: '2',
    question: 'Pourquoi la vitesse d\'un site est-elle si importante ?',
    answer: 'La vitesse de chargement (Core Web Vitals) est devenue un critère de classement officiel pour Google. Un site qui met plus de 3 secondes à charger perd environ 53% de ses visiteurs mobiles. En utilisant des technologies comme Next.js, nous garantissons des temps de chargement quasi instantanés.',
    category: 'tech'
  },
  {
    id: '3',
    question: 'Je n\'ai pas le temps de rédiger les textes de mon site. Pouvez-vous le faire ?',
    answer: 'Absolument. Nous disposons d\'une équipe de rédacteurs web formés au SEO. Ils se chargeront de rédiger des contenus percutants pour vos pages de présentation et vos services, tout en intégrant les mots-clés nécessaires pour votre référencement sur Google.',
    category: 'service'
  },
  {
    id: '4',
    question: 'Combien de temps faut-il pour créer un site internet vitrine ?',
    answer: 'La création d\'un site vitrine sur mesure prend généralement entre 3 et 6 semaines, selon la réactivité lors des phases de validation du design et la complexité des fonctionnalités demandées.',
    category: 'timing'
  },
  {
    id: '5',
    question: 'Serais-je propriétaire de mon site web ?',
    answer: 'Oui, à 100%. Contrairement à certaines solutions en location qui vous rendent captif, une fois la prestation de création réglée, vous êtes le seul propriétaire du code source, du design et du nom de domaine. Nous vous remettons l\'ensemble des accès administrateur.',
    category: 'legal'
  }
]

// Fix missing icons
import { ShoppingCart, LayoutTemplate } from 'lucide-react'

export default function AgenceWebVenissieuxLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop'
            alt='Entreprise Vénissieux'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-900/40'></div>
        </div>

        {/* Decorative Indigo Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-sm font-medium'>
                <MapPin className='w-4 h-4 mr-2' />
                Agence Web Sud-Est Lyonnais
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de sites internet à <span className='text-indigo-400'>Vénissieux</span>
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Dynamisez votre croissance avec un site web sur mesure, rapide et conçu pour dominer la recherche locale dans le bassin économique de Vénissieux.
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
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-indigo-600/20'>
                    Demander un devis
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos références
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
                <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop")] bg-cover bg-center opacity-30 mix-blend-overlay'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center'>
                  <div className='w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl rotate-3'>
                    <Code className='w-10 h-10 text-white' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>Innovation Digitale</h3>
                  <p className='text-indigo-300 font-medium text-lg mb-6'>Design Impactant & Performances SEO</p>
                  <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 w-full'>
                    <div className='flex justify-between items-center text-sm mb-2'>
                       <span className='text-slate-300'>Acquisition Clients</span>
                       <span className='text-indigo-400 font-bold'>+215%</span>
                    </div>
                    <div className='w-full h-2 bg-slate-800 rounded-full overflow-hidden'>
                      <div className='h-full bg-gradient-to-r from-indigo-600 to-indigo-400 w-[85%] rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-indigo-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <LayoutTemplate className='w-6 h-6' />
              <span>Design Sur Mesure</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Code Ultra-Rapide</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>Référencement Naturel</span>
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
              Pourquoi faire appel à notre agence web pour votre entreprise de Vénissieux ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Troisième ville du département du Rhône, <strong>Vénissieux</strong> est un pôle industriel et économique majeur du Sud-Est lyonnais. Dans ce secteur très concurrentiel, les entreprises locales (artisans, prestataires B2B, commerçants) ne peuvent plus se contenter d'un simple site web amateur. Il vous faut une véritable stratégie d'acquisition digitale conçue par une <strong>agence web professionnelle</strong> maîtrisant les enjeux de votre marché local.
              </p>
              <p>
                La philosophie de Sidikoff Digital est claire : un beau site internet ne sert à rien si personne ne le visite. C'est pourquoi la création de votre site web s'accompagne systématiquement d'une <strong>stratégie de référencement naturel (SEO) ciblée</strong>. Nous optimisons chaque page, chaque titre (H1/H2) et chaque balise technique pour que Google associe votre entreprise aux requêtes de vos clients potentiels sur Vénissieux, Corbas et Saint-Fons.
              </p>
              <p>
                D'un point de vue technique, nous ne faisons aucun compromis. Oubliez les thèmes génériques lents qui font fuir vos visiteurs. Nos développeurs utilisent des technologies de pointe comme <strong>React.js et Next.js</strong>, ou développent des thèmes WordPress sur mesure très légers. Cela garantit un temps de chargement éclair, un critère essentiel (Core Web Vitals) pour séduire tant vos utilisateurs sur mobile que les algorithmes des moteurs de recherche.
              </p>
              <p>
                Nous savons également que votre priorité est de gérer votre entreprise, pas de passer des heures à essayer de modifier une image sur votre site. C'est pourquoi nous créons des interfaces d'administration (Back-Office) extrêmement intuitives. Une fois le site livré, nous vous <strong>formons à son utilisation</strong> pour que vous soyez totalement autonome dans la gestion de votre contenu.
              </p>
              <p>
                Confier votre projet à notre <strong>agence digitale intervenant à Vénissieux</strong>, c'est choisir un partenaire réactif, transparent et orienté résultat. De l'audit initial à la création des maquettes graphiques (UI/UX), en passant par le développement, la rédaction des contenus et l'hébergement sécurisé, nous gérons votre projet web de A à Z.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos expertises web pour les PME locales</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des solutions digitales concrètes pour développer votre chiffre d'affaires.
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
                  <div className='w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-indigo-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Notre méthodologie de travail</h2>
            <p className='text-xl text-slate-400'>Un processus carré pour des livraisons de qualité, dans les délais impartis.</p>
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
                <div className='w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-indigo-500/30'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Vos questions, nos réponses</h2>
            <p className='text-xl text-slate-600'>Les interrogations fréquentes avant de lancer la création de votre site.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à accélérer votre croissance à Vénissieux ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-indigo-100'>
            Nos experts sont à votre disposition pour analyser vos besoins et vous proposer la meilleure stratégie digitale (Création web & SEO).
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-indigo-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander mon devis gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
