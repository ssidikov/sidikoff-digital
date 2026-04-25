'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  ArrowRight,
  CheckCircle,
  CalendarDays,
  Smartphone,
  Star,
  Camera,
  MapPin,
  ChefHat,
  ShoppingBag
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Bouton de réservation ultra-visible (TheFork, Zenchef)",
  "Menu digital optimisé pour mobile et facile à mettre à jour",
  "Intégration Click & Collect / Livraison (UberEats, Deliveroo)",
  "Optimisation Google Maps pour attirer la clientèle locale",
  "Design appétissant mettant en valeur vos plats"
]

const services = [
  {
    icon: CalendarDays,
    title: 'Réservation en Ligne',
    description: 'Ne ratez plus de tables pendant le service. Intégration fluide de votre module Zenchef, TheFork, ou GuestOnline directement sur votre site.'
  },
  {
    icon: Smartphone,
    title: 'Menu Mobile First',
    description: 'Vos clients consultent votre carte sur leur téléphone. Nous concevons des menus digitaux fluides, rapides, et que vous pouvez mettre à jour vous-même.'
  },
  {
    icon: MapPin,
    title: 'SEO Local Restaurant',
    description: 'Stratégie de référencement pour dominer les recherches de type "Restaurant Italien Lyon 2" ou "Bistrot Paris 11". Soyez trouvé avant vos concurrents.'
  },
  {
    icon: ShoppingBag,
    title: 'Click & Collect',
    description: 'Diversifiez vos revenus avec un module de commande à emporter sans commission, ou intégrez vos liens Deliveroo / UberEats.'
  },
  {
    icon: Camera,
    title: 'Galerie Culinaire',
    description: 'Mise en valeur de vos plats, de l\'ambiance de la salle et de la cuisine pour donner faim à vos visiteurs dès la première seconde.'
  },
  {
    icon: Star,
    title: 'Avis & TripAdvisor',
    description: 'Réassurance instantanée grâce à l\'intégration de vos meilleurs avis Google et TripAdvisor pour convertir les touristes et les locaux.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Immersion',
    description: 'Compréhension de votre concept (Bistronomique, Fast-Food, Gastronomique) et de votre clientèle cible.'
  },
  {
    number: '02',
    title: 'Design Appétissant',
    description: 'Création d\'une maquette visuelle qui reflète l\'ambiance de votre établissement (couleurs, typographies, photos).'
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Intégration Next.js pour une vitesse de chargement optimale et connexion à vos outils de réservation.'
  },
  {
    number: '04',
    title: 'Lancement Local',
    description: 'Mise en ligne et optimisation de votre fiche Google My Business pour maximiser les réservations.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi payer pour un site alors que j\'ai Google My Business et TripAdvisor ?',
    answer: 'Google et TripAdvisor sont des annuaires où vous êtes en concurrence directe avec vos voisins. Un site web vous appartient. C\'est votre vitrine. Il permet de ne pas payer de commissions sur les réservations (si vous utilisez un outil propre), de fidéliser via une newsletter, et surtout d\'offrir une expérience de marque forte qui donne envie de venir chez vous plutôt qu\'ailleurs.',
    category: 'strategy'
  },
  {
    id: '2',
    question: 'Est-il facile de mettre à jour le menu et la carte des vins ?',
    answer: 'Oui, c\'est primordial pour un restaurant. Nous vous formons à l\'utilisation d\'un espace d\'administration très simple. Vous pourrez changer vos plats du jour, ajuster vos prix ou mettre à jour la carte des vins depuis votre smartphone ou votre tablette en 2 minutes.',
    category: 'features'
  },
  {
    id: '3',
    question: 'Pouvez-vous intégrer notre système de réservation actuel ?',
    answer: 'Absolument. Que vous utilisiez Zenchef, TheFork, GuestOnline, SevenRooms ou un simple formulaire, nous l\'intégrons de manière transparente sur votre site. L\'objectif est de maximiser le taux de conversion en rendant le bouton de réservation accessible en permanence.',
    category: 'booking'
  },
  {
    id: '4',
    question: 'Comment faites-vous pour le Click & Collect ?',
    answer: 'Nous avons deux approches : soit nous lions les boutons de votre site vers vos partenaires de livraison (UberEats, Deliveroo), soit nous créons une boutique en ligne interne sans commission (via Stripe/WooCommerce) pour que vos clients commandent directement chez vous.',
    category: 'ecommerce'
  },
  {
    id: '5',
    question: 'Le site sera-t-il bien visible pour les touristes de passage ?',
    answer: 'C\'est tout l\'enjeu du SEO local. En optimisant techniquement votre site (vitesse, balises, multilinguisme) et en l\'associant à Google Maps, nous vous aidons à capter aussi bien la clientèle de bureau le midi que les touristes qui cherchent "où manger près de [votre quartier]" le soir.',
    category: 'seo'
  }
]

export default function RestaurantLandingContent() {
  return (
    <div className='min-h-screen bg-stone-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-stone-900'>
        {/* Background Image & Overlay */}
        <div className='absolute inset-0 z-0 opacity-40'>
          <Image
            src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop'
            alt='Intérieur de restaurant animé'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/40'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-full text-sm font-bold tracking-wide uppercase'>
                <UtensilsCrossed className='w-4 h-4 mr-2' />
                Agence Digitale Restauration
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6'>
                  Remplissez votre <span className='text-orange-500'>Salle</span>,<br />
                  tous les soirs.
                </h1>
                <p className='text-xl text-stone-300 leading-relaxed mb-8 max-w-lg'>
                  De la réservation en ligne au Click & Collect, nous créons des sites web performants qui transforment les internautes affamés en clients fidèles.
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
                    <CheckCircle className='w-5 h-5 text-orange-500 flex-shrink-0' />
                    <span className='text-stone-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-lg font-bold uppercase tracking-wide hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-500/30'>
                    Demander un devis
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border-2 border-stone-600 text-white rounded-lg font-bold uppercase tracking-wide hover:bg-stone-800 transition-all duration-300'>
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 aspect-[4/5]'>
                <Image
                  src='https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop'
                  alt='Plat gastronomique dressé'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent'></div>
                
                <div className='absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0'>
                        <ChefHat className='w-6 h-6 text-orange-600' />
                      </div>
                      <div>
                        <h3 className='text-stone-900 font-bold text-lg'>Le Bistrot Parisien</h3>
                        <div className='flex items-center text-orange-500 text-sm'>
                          <Star className='w-4 h-4 fill-current' />
                          <Star className='w-4 h-4 fill-current' />
                          <Star className='w-4 h-4 fill-current' />
                          <Star className='w-4 h-4 fill-current' />
                          <Star className='w-4 h-4 fill-current' />
                          <span className='text-stone-500 ml-2'>(4.8 sur Google)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='w-full py-3 bg-stone-900 text-white rounded-lg font-bold uppercase tracking-wide text-sm hover:bg-stone-800 transition'>
                    Réserver une Table
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-orange-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold uppercase tracking-wider text-sm'>
            <div className='flex items-center gap-2'>
              <CalendarDays className='w-6 h-6 opacity-80' />
              <span>Zenchef / TheFork</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='w-6 h-6 opacity-80' />
              <span>SEO Local Optimisé</span>
            </div>
            <div className='flex items-center gap-2'>
              <ShoppingBag className='w-6 h-6 opacity-80' />
              <span>Click & Collect</span>
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
            <h2 className='text-3xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight'>
              L'importance vitale d'un site internet pour un <span className='text-orange-600'>restaurant</span>
            </h2>
            <div className='prose prose-lg text-stone-700 space-y-6'>
              <p>
                Dans l'univers de la restauration (gastronomique, bistrot, fast-food ou franchise), la bataille pour attirer des clients se joue aujourd'hui sur les smartphones. Lorsqu'un groupe d'amis ou un touriste cherche "où manger à Lyon" ou "meilleur burger Paris 11", la décision se prend en quelques secondes. La <strong>création d'un site internet pour votre restaurant</strong> est l'élément déclencheur qui transforme cette recherche en réservation confirmée.
              </p>
              <p>
                Beaucoup de restaurateurs pensent que Google My Business et Instagram suffisent. C'est une erreur stratégique. Sur les plateformes d'avis (TripAdvisor, TheFork), vous êtes affiché juste à côté de vos concurrents, et vous subissez leurs commissions. Un site web propriétaire vous permet de reprendre le contrôle de votre image de marque. Nous concevons des designs "appétissants" qui mettent en valeur la qualité de vos produits, l'ambiance de votre salle et l'histoire de votre chef, créant une expérience immersive avant même que le client ne passe votre porte.
              </p>
              <p>
                Le nerf de la guerre reste le service en salle. C'est pourquoi nous accordons une importance capitale à l'<strong>intégration de modules de réservation en ligne</strong> (Zenchef, TheFork, GuestOnline). Nous plaçons des "Call-to-Action" (boutons) de réservation toujours visibles, surtout sur mobile. Plus besoin d'interrompre votre service du midi pour répondre au téléphone : votre site prend les réservations pour vous, automatiquement et sans erreur.
              </p>
              <p>
                Enfin, notre expertise en <strong>SEO local pour restaurant</strong> vous garantit une visibilité maximale sur Google Maps. Que vous proposiez de la vente à emporter (Click & Collect), de la livraison (UberEats, Deliveroo) ou de la privatisation pour des événements d'entreprise, nous structurons vos contenus pour que vous soyez le premier choix dans votre quartier. La mise à jour de vos menus devient un jeu d'enfant grâce à notre interface d'administration ultra-simplifiée.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-stone-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-stone-900 mb-4'>Les ingrédients de votre succès digital</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Des fonctionnalités techniques pensées exclusivement pour les métiers de bouche.
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
                  className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-stone-200 group'
                >
                  <div className='w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors'>
                    <Icon className='w-7 h-7 text-orange-600 group-hover:text-white transition-colors' />
                  </div>
                  <h3 className='text-xl font-bold text-stone-900 mb-3'>{service.title}</h3>
                  <p className='text-stone-600 leading-relaxed'>{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-stone-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Notre recette pour votre site</h2>
            <p className='text-xl text-stone-400'>Un déploiement rapide pour ne rater aucune saisonnalité.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-stone-800 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-stone-800 p-6 rounded-2xl border border-stone-700 relative'
              >
                <div className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-orange-500/20'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-stone-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-stone-900 mb-4'>Questions Fréquentes</h2>
            <p className='text-xl text-stone-600'>Ce que les restaurateurs nous demandent le plus.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-orange-100 text-stone-900 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Prêt à digitaliser votre établissement ?</h2>
          <p className='text-xl mb-10 text-stone-700 max-w-2xl mx-auto'>
            Laissez-nous gérer votre visibilité en ligne pendant que vous vous concentrez sur l'essentiel : votre cuisine et le service en salle.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-orange-600 text-white rounded-xl font-bold uppercase tracking-wide hover:bg-orange-500 transition-all shadow-xl'>
                Demander un devis gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
