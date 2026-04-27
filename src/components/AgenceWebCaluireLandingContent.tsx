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
  "Agence web de proximité intervenant à Caluire-et-Cuire",
  "Création de sites vitrines et E-commerce ultra-performants",
  "Expertise Next.js / React pour des temps de chargement éclair",
  "Optimisation SEO locale pour capter la clientèle du Grand Lyon",
  "Accompagnement de A à Z : Stratégie, Design, Dev, Hébergement"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Création de Sites Internet',
    description: 'Conception de sites vitrines B2B et B2C modernes. Design sur mesure qui valorise l\'image de votre entreprise caluirarde et convertit vos visiteurs en clients.'
  },
  {
    icon: ShoppingCart,
    title: 'Développement E-Commerce',
    description: 'Création de boutiques en ligne performantes (Shopify, WooCommerce, Next.js). Vendez vos produits bien au-delà de Caluire avec un tunnel d\'achat optimisé.'
  },
  {
    icon: Search,
    title: 'SEO & Référencement Local',
    description: 'Stratégie de référencement naturel pour dominer Google sur les requêtes locales (ex: "plombier caluire", "restaurant croix-rousse").'
  },
  {
    icon: Smartphone,
    title: 'Sites Web Mobile-First',
    description: 'Vos futurs clients naviguent sur smartphone. Nous concevons des interfaces responsives irréprochables pour offrir la meilleure expérience mobile possible.'
  },
  {
    icon: Rocket,
    title: 'Refonte de Site Web',
    description: 'Votre ancien site ne vous rapporte plus de clients ? Nous modernisons votre présence en ligne avec les dernières technologies (Core Web Vitals).'
  },
  {
    icon: Shield,
    title: 'Maintenance & Sécurité',
    description: 'Hébergement infogéré haute disponibilité, sauvegardes automatiques et mises à jour de sécurité pour protéger votre site des cyberattaques.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Objectifs',
    description: 'Rencontre physique ou visio pour comprendre votre activité à Caluire et définir vos objectifs d\'acquisition digitale.'
  },
  {
    number: '02',
    title: 'Web Design (UI/UX)',
    description: 'Création de maquettes graphiques sur mesure reflétant votre identité de marque, optimisées pour la conversion.'
  },
  {
    number: '03',
    title: 'Développement Web',
    description: 'Intégration d\'un code propre, rapide et optimisé pour le référencement (SEO technique).'
  },
  {
    number: '04',
    title: 'Lancement & Suivi',
    description: 'Mise en ligne, formation à votre outil d\'administration, et suivi des performances (Analytics).'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir une agence web proche de Caluire-et-Cuire ?',
    answer: 'Bien que nous opérions partout en France, notre proximité avec la région lyonnaise nous permet d\'avoir une connaissance fine du tissu économique local. Nous pouvons nous rencontrer facilement pour des ateliers stratégiques, ce qui fluidifie la communication et accélère la réussite de votre projet digital.',
    category: 'local'
  },
  {
    id: '2',
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer: 'Pour un site vitrine professionnel de 5 à 10 pages, comptez environ 3 à 5 semaines de la validation du design à la mise en ligne. Un site e-commerce ou une plateforme sur mesure nécessite généralement entre 6 et 10 semaines. Nous établissons un rétroplanning précis dès le début du projet.',
    category: 'timing'
  },
  {
    id: '3',
    question: 'Mon site sera-t-il bien positionné sur Google ?',
    answer: 'Le SEO (référencement naturel) est l\'ADN de Sidikoff Digital. Contrairement aux agences classiques qui ajoutent le SEO à la fin, nous concevons l\'architecture et le code de votre site (balises sémantiques, vitesse de chargement) spécifiquement pour plaire aux algorithmes de Google dès le jour du lancement.',
    category: 'seo'
  },
  {
    id: '4',
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Nous sélectionnons la technologie selon votre besoin. Pour les startups et sites à forte exigence technique, nous utilisons le puissant framework Next.js. Pour des sites institutionnels nécessitant une grande autonomie, nous développons des thèmes WordPress sur mesure. Pour le e-commerce, nous sommes experts Shopify et WooCommerce.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    answer: 'Absolument. Nous développons des back-offices (espaces d\'administration) intuitifs. Avant la mise en ligne, nous formons vos équipes pour que vous soyez 100% autonomes sur la création de nouveaux articles, l\'ajout de produits ou la modification des textes et images.',
    category: 'service'
  }
]

// Fix missing icons from lucide-react import above
import { ShoppingCart, LayoutTemplate } from 'lucide-react'

export default function AgenceWebCaluireLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'
            alt='Agence web et bureaux modernes'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-900/40'></div>
        </div>

        {/* Decorative Amber Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-amber-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-sm font-medium'>
                <MapPin className='w-4 h-4 mr-2' />
                Agence Web Intervenant à Caluire-et-Cuire
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de sites internet à <span className='text-amber-500'>Caluire-et-Cuire</span>
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développez votre activité dans le Grand Lyon avec un site internet premium, pensé pour convertir vos visiteurs et dominer les moteurs de recherche.
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
                    <CheckCircle className='w-5 h-5 text-amber-500 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-500/20'>
                    Demander un devis gratuit
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-square'>
                <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop")] bg-cover bg-center opacity-40 mix-blend-overlay'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center'>
                  <div className='w-20 h-20 bg-amber-500 rounded-2xl rotate-12 flex items-center justify-center mb-8 shadow-xl'>
                    <Code className='w-10 h-10 text-slate-900 -rotate-12' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>Sidikoff Digital</h3>
                  <p className='text-amber-400 font-medium text-lg mb-6'>Accélération Digitale en Région Lyonnaise</p>
                  <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 w-full'>
                    <div className='flex justify-between items-center text-sm'>
                       <span className='text-slate-400'>Client Local</span>
                       <span className='text-emerald-400 font-mono'>+142% Trafic</span>
                    </div>
                    <div className='w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden'>
                      <div className='h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[85%] rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-amber-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-900 font-bold'>
            <div className='flex items-center gap-2'>
              <LayoutTemplate className='w-6 h-6' />
              <span>Design Sur Mesure</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Performances Optimales</span>
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
              Pourquoi faire appel à notre agence web pour votre entreprise à Caluire-et-Cuire ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                Stratégiquement située aux portes de Lyon et de la Croix-Rousse, <strong>Caluire-et-Cuire</strong> bénéficie d'un dynamisme économique exceptionnel. Les PME, artisans et commerçants locaux font face à une concurrence croissante dans le Grand Lyon. Pour se démarquer, un simple site internet ne suffit plus : il vous faut un outil d'acquisition client performant, conçu par une véritable <strong>agence web</strong> experte de votre secteur géographique.
              </p>
              <p>
                Chez Sidikoff Digital, nous ne nous contentons pas de créer des vitrines digitales esthétiques. Nous concevons des machines à générer du chiffre d'affaires. Que vous ayez besoin de <strong>créer un site internet vitrine</strong> pour présenter vos services ou d'une plateforme <strong>E-commerce</strong> robuste, notre processus de conception intègre dès le premier jour l'expérience utilisateur (UX) et l'optimisation de la conversion (CRO). 
              </p>
              <p>
                La force de notre agence réside dans notre pôle technique. Contrairement aux acteurs traditionnels qui utilisent des solutions génériques souvent lentes, nous déployons des technologies de pointe comme <strong>Next.js, React et des architectures WordPress sur mesure</strong>. Résultat : votre site se charge en une fraction de seconde. Google récompense cette vitesse, et vos utilisateurs ne quittent plus votre page par frustration.
              </p>
              <p>
                Avoir le plus beau site de Caluire est inutile si personne ne le trouve. C'est pourquoi le <strong>référencement naturel (SEO)</strong> est au cœur de notre prestation. Nous menons un audit sémantique approfondi pour identifier ce que recherchent vos clients dans votre zone de chalandise (Rillieux-la-Pape, Fontaines-sur-Saône, Lyon 4ème). Nous structurons ensuite vos contenus et vos balises de données structurées pour que votre entreprise domine les résultats de recherche locale.
              </p>
              <p>
                Enfin, nous savons que votre métier vous prend 100% de votre temps. Nous vous offrons donc un accompagnement global : de la rédaction du cahier des charges à la création graphique, en passant par le développement de fonctionnalités spécifiques, l'hébergement sécurisé et la maintenance technique. Confier votre communication digitale à <strong>Sidikoff Digital</strong>, c'est investir dans la croissance pérenne de votre entreprise caluirarde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos prestations digitales pour les entreprises de Caluire</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Des solutions web complètes pour accélérer votre développement numérique dans le Rhône.
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
                  <div className='w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-amber-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Comment nous construisons votre succès web</h2>
            <p className='text-xl text-slate-400'>Une méthodologie éprouvée, transparente et orientée résultats.</p>
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
                <div className='w-12 h-12 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-amber-500/20'>
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
            <p className='text-xl text-slate-600'>Les réponses aux interrogations de nos clients locaux.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à digitaliser votre entreprise caluirarde ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Rencontrons-nous pour auditer votre présence en ligne et élaborer ensemble une stratégie digitale adaptée à votre budget.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl'>
                Demander un devis sans engagement
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
