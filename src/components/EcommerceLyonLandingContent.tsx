'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  CreditCard,
  TrendingUp,
  Package,
  Zap,
  BarChart,
  ShieldCheck
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence E-commerce experte intervenant à Lyon et alentours",
  "Création de boutiques sous Shopify, WooCommerce et Headless",
  "Optimisation du taux de conversion (CRO) et de l'UX",
  "Synchronisation avec vos flux logistiques (ERP/PIM)",
  "Référencement naturel (SEO) e-commerce ultra-performant"
]

const services = [
  {
    icon: ShoppingCart,
    title: 'Développement Shopify',
    description: 'Création de boutiques Shopify sur mesure pour les D2C et marques lyonnaises. Des thèmes performants, sans applications lourdes qui ralentissent la vitesse.'
  },
  {
    icon: Package,
    title: 'WooCommerce Sur Mesure',
    description: 'Développement de catalogues complexes sous WordPress/WooCommerce pour une flexibilité totale et une propriété absolue de vos données (sans abonnement).'
  },
  {
    icon: Zap,
    title: 'Headless Commerce',
    description: 'L\'architecture ultime pour les gros volumes : un front-end ultra-rapide en Next.js couplé à un back-end e-commerce robuste (Shopify Plus, Medusa).'
  },
  {
    icon: TrendingUp,
    title: 'Optimisation CRO',
    description: 'Analyse comportementale et A/B testing sur vos fiches produits et votre tunnel de paiement (Checkout) pour maximiser votre taux de conversion.'
  },
  {
    icon: BarChart,
    title: 'SEO E-Commerce',
    description: 'Stratégie de référencement avancée : maillage interne en silo, optimisation des filtres à facettes et des balises Schema.org pour les produits.'
  },
  {
    icon: CreditCard,
    title: 'Intégration Paiement & ERP',
    description: 'Connexion sécurisée avec vos prestataires de paiement (Stripe, Alma) et synchronisation des stocks avec vos logiciels logistiques en temps réel.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Cadrage Fonctionnel',
    description: 'Définition de l\'arborescence du catalogue, des moyens de paiement, des règles de livraison et des connexions externes (ERP).'
  },
  {
    number: '02',
    title: 'UX/UI & Design',
    description: 'Création de maquettes axées sur la vente : parcours client fluide, rassurance, et fiches produits persuasives.'
  },
  {
    number: '03',
    title: 'Développement Technique',
    description: 'Intégration du thème e-commerce, configuration du back-office, et import sécurisé de votre catalogue produits.'
  },
  {
    number: '04',
    title: 'Tests & Déploiement',
    description: 'Tests de charge, vérification des tunnels d\'achat (QA), formation de vos équipes e-commerce, puis mise en production.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Shopify ou WooCommerce : quelle plateforme e-commerce choisir ?',
    answer: 'Le choix dépend de votre modèle économique. Shopify est idéal pour les marques D2C (Direct to Consumer) qui veulent lancer rapidement, avec une gestion d\'hébergement infogérée et des outils marketing puissants. WooCommerce est préférable si vous avez un catalogue très complexe, si vous voulez éviter les commissions sur vente, et si vous souhaitez une flexibilité totale de code via WordPress.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Qu\'est-ce que le Headless Commerce ?',
    answer: 'Le Headless Commerce sépare le "front-end" (l\'interface que le client voit) du "back-end" (la gestion des stocks/commandes). En utilisant une technologie comme Next.js pour le visuel, nous obtenons des temps de chargement instantanés qui augmentent massivement vos ventes, tout en conservant la robustesse du back-office Shopify ou Medusa.',
    category: 'tech'
  },
  {
    id: '3',
    question: 'Combien coûte la création d\'un site e-commerce avec votre agence lyonnaise ?',
    answer: 'Une boutique e-commerce professionnelle sur mesure (Shopify ou WooCommerce) commence généralement autour de 5 000 €. Pour des projets impliquant des catalogues complexes, du Headless Commerce, ou des intégrations ERP spécifiques, les budgets se situent entre 15 000 € et 50 000 €. Nous évaluons ensemble le ROI.',
    category: 'pricing'
  },
  {
    id: '4',
    question: 'Comment optimisez-vous le taux de conversion (CRO) ?',
    answer: 'Nous réduisons au maximum les frictions (clics inutiles). Nous implémentons des éléments de rassurance (avis vérifiés, paiements sécurisés), accélérons le tunnel de commande, proposons des paiements en plusieurs fois (Alma), et utilisons des "Upsells/Cross-sells" pertinents au moment de l\'ajout au panier.',
    category: 'strategy'
  },
  {
    id: '5',
    question: 'Serez-vous là pour gérer la boutique après le lancement ?',
    answer: 'Oui. Nous proposons une Tierce Maintenance Applicative (TMA). De plus, l\'équipe de Sidikoff Digital forme vos collaborateurs (logistique, marketing) pour qu\'ils soient 100% autonomes sur la gestion quotidienne (ajout de produits, codes promo, traitement des expéditions).',
    category: 'service'
  }
]

export default function EcommerceLyonLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-[#1A0B2E]'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-30'>
          <Image
            src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop'
            alt='Création site E-commerce Lyon'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#1A0B2E] via-[#1A0B2E]/90 to-purple-900/40'></div>
        </div>

        {/* Decorative Purple Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-purple-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium'>
                <ShoppingCart className='w-4 h-4 mr-2' />
                Agence E-Commerce à Lyon
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de site <span className='text-purple-400'>E-Commerce</span> à Lyon
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Shopify, WooCommerce & architectures Headless. Nous concevons des boutiques en ligne ultra-performantes, pensées pour maximiser votre chiffre d'affaires et convertir vos visiteurs en acheteurs.
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
                    <CheckCircle className='w-5 h-5 text-purple-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-600/20'>
                    Chiffrer mon projet e-commerce
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos boutiques
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-100 p-6'>
                <div className='bg-white rounded-xl shadow-lg h-[450px] overflow-hidden border border-slate-200 flex flex-col'>
                  {/* Fake Browser Header */}
                  <div className='h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 space-x-4'>
                    <div className='flex space-x-2'>
                      <div className='w-3 h-3 rounded-full bg-red-400'></div>
                      <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                      <div className='w-3 h-3 rounded-full bg-green-400'></div>
                    </div>
                    <div className='flex-1 h-8 bg-white border border-slate-200 rounded-md flex items-center px-3 justify-center'>
                      <span className='text-xs text-slate-400'>https://votremarque-lyon.fr/checkout</span>
                    </div>
                  </div>
                  {/* Fake Checkout View */}
                  <div className='flex-1 flex'>
                     <div className='w-2/3 p-6 bg-white'>
                        <div className='h-6 w-32 bg-slate-200 rounded mb-6'></div>
                        <div className='space-y-4'>
                          <div className='h-10 border border-slate-200 rounded flex items-center px-3'>
                            <span className='text-sm text-slate-400'>Email</span>
                          </div>
                          <div className='flex space-x-4'>
                            <div className='flex-1 h-10 border border-slate-200 rounded flex items-center px-3'>
                              <span className='text-sm text-slate-400'>Prénom</span>
                            </div>
                            <div className='flex-1 h-10 border border-slate-200 rounded flex items-center px-3'>
                              <span className='text-sm text-slate-400'>Nom</span>
                            </div>
                          </div>
                          <div className='h-10 border border-slate-200 rounded flex items-center px-3'>
                            <span className='text-sm text-slate-400'>Adresse à Lyon</span>
                          </div>
                          <div className='h-12 bg-purple-600 rounded-lg flex items-center justify-center mt-6 cursor-pointer hover:bg-purple-700 transition'>
                             <span className='text-white font-bold text-sm flex items-center'><ShieldCheck className="w-4 h-4 mr-2" /> Payer 124,00 €</span>
                          </div>
                        </div>
                     </div>
                     <div className='w-1/3 bg-slate-50 border-l border-slate-200 p-6'>
                        <div className='flex items-start mb-6'>
                          <div className='w-12 h-12 bg-slate-200 rounded border border-slate-300'></div>
                          <div className='ml-3'>
                            <div className='h-3 w-16 bg-slate-300 rounded mb-2'></div>
                            <div className='h-2 w-10 bg-slate-200 rounded'></div>
                          </div>
                        </div>
                        <div className='border-t border-slate-200 pt-4 mt-4'>
                           <div className='flex justify-between mb-2'>
                             <span className='text-sm text-slate-500'>Sous-total</span>
                             <span className='text-sm font-medium'>124,00 €</span>
                           </div>
                           <div className='flex justify-between font-bold text-lg pt-2'>
                             <span>Total</span>
                             <span>124,00 €</span>
                           </div>
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
      <section className='py-8 bg-purple-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Checkout Ultra-Rapide</span>
            </div>
            <div className='flex items-center gap-2'>
              <CreditCard className='w-6 h-6' />
              <span>Paiement Sécurisé</span>
            </div>
            <div className='flex items-center gap-2'>
              <BarChart className='w-6 h-6' />
              <span>Analytique & Tracking Avancé</span>
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
              Pourquoi choisir une agence e-commerce experte à Lyon pour votre business en ligne ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Lyon est un hub européen de la vente en ligne et de la logistique. Que vous soyez une marque digitale (DNVB), un retailer souhaitant développer sa stratégie omnicanale, ou un grossiste B2B dans la région Auvergne-Rhône-Alpes, lancer une <strong>boutique e-commerce</strong> exige aujourd'hui une excellence technique et marketing. Le marché est ultra-concurrentiel : vos visiteurs n'ont plus la patience pour un site lent ou un tunnel d'achat mal conçu.
              </p>
              <p>
                En tant qu'<strong>agence web e-commerce basée sur la métropole de Lyon</strong>, notre rôle n'est pas seulement de mettre vos produits en ligne, mais de concevoir une véritable machine de vente. La différence entre une boutique qui stagne et un site qui génère des millions d'euros réside dans l'optimisation du taux de conversion (CRO). Nous analysons chaque point de friction, simplifions le processus d'ajout au panier et implémentons des solutions de paiement modernes (Apple Pay, paiements fractionnés) pour maximiser vos revenus.
              </p>
              <p>
                Nous sommes indépendants de toute solution logicielle, ce qui nous permet de vous conseiller la meilleure architecture : <strong>Shopify</strong> pour un lancement rapide et une gestion simplifiée, <strong>WooCommerce</strong> pour des catalogues aux caractéristiques complexes, ou encore le développement en <strong>Headless Commerce</strong> (React/Next.js) pour les marques réalisant des volumes de ventes importants et exigeant des temps de chargement inférieurs à la seconde.
              </p>
              <p>
                Créer un beau site e-commerce ne suffit pas s'il n'est pas visible. L'acquisition de trafic est le nerf de la guerre. Nous intégrons nativement une <strong>stratégie SEO e-commerce</strong> dès le développement : arborescence en silos pour catégoriser vos produits, optimisation des balises Schema.org pour faire remonter vos avis et prix dans les résultats Google, et maillage interne automatisé. Votre boutique est conçue pour dominer Google dès le premier jour.
              </p>
              <p>
                Enfin, la réussite e-commerce passe par l'automatisation. Nous développons des API et des connecteurs sur mesure pour synchroniser votre boutique en ligne avec votre ERP, vos logiciels comptables, et vos partenaires logistiques locaux. De la commande à l'expédition depuis votre entrepôt lyonnais, vos processus sont fluidifiés.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos solutions E-commerce</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des architectures scalables pour accompagner votre croissance.
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
                  <div className='w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-purple-600' />
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
      <section className='py-20 bg-[#1A0B2E] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Comment nous lançons votre boutique</h2>
            <p className='text-xl text-slate-400'>Une méthodologie sécurisée pour un déploiement sans accroc.</p>
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
                className='bg-slate-900/80 backdrop-blur p-6 rounded-xl border border-slate-800 relative'
              >
                <div className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-purple-500/20'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Foire Aux Questions E-Commerce</h2>
            <p className='text-xl text-slate-600'>Les réponses techniques et stratégiques de nos experts.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à booster vos ventes en ligne ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-purple-100'>
            Que vous souhaitiez migrer une boutique existante ou créer un nouveau projet e-commerce à Lyon, discutons de votre stratégie d'acquisition.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-purple-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un devis e-commerce
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
