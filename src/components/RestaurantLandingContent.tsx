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

const restaurantTypes = [
  {
    icon: '🍷',
    type: 'Restaurant Gastronomique',
    keywords: 'restaurant étoilé, gastronomie, chef',
    description: 'Design luxueux, galerie de plats signés, biographie du chef et système de réservation privatisation d\'événements.'
  },
  {
    icon: '🍾',
    type: 'Bistrot & Brasserie',
    keywords: 'bistrot, brasserie, plat du jour',
    description: 'Design chaleureux, menu du jour facilement éditable, avis Google intégrés et module de réservation Zenchef.'
  },
  {
    icon: '💚',
    type: 'Restaurant Végétarien & Bio',
    keywords: 'restaurant végétarien, bio, vegan',
    description: 'Valeurs et engagements au premier plan, labels bio mis en avant et storytelling des producteurs locaux.'
  },
  {
    icon: '🚚',
    type: 'Food Truck & Street Food',
    keywords: 'food truck, street food, livraison',
    description: 'Planning des emplacements semaine par semaine, réseaux sociaux intégrés et commande en ligne via QR Code.'
  },
  {
    icon: '🍰',
    type: 'Salon de Thé & Pâtisserie',
    keywords: 'salon de thé, pâtisserie artisanale, brunch',
    description: 'Design pastel et gourmand, vitrine des créations saisonnières et Click & Collect pour les commandes spéciales.'
  },
  {
    icon: '🍗',
    type: 'Restauration Rapide & Franchise',
    keywords: 'fast food, kebab, livraison pizza',
    description: 'Commande en ligne sans commission (Stripe), menu digital mobile et intégration UberEats / Deliveroo.'
  }
]

const pricingPlans = [
  {
    name: 'Vitrine Resto',
    price: '890 €',
    description: 'Pour un restaurant qui veut exister en ligne',
    features: [
      '5 pages optimisées SEO',
      'Menu digital mis à jour facile',
      'Bouton réservation Zenchef',
      'Optimisation Google Maps',
      'Hébergement 1 an inclus',
      'Photos libres de droits'
    ],
    isPrimary: false
  },
  {
    name: 'Salle Comble',
    price: '1 790 €',
    description: 'Pour remplir votre salle tous les soirs',
    features: [
      '10 pages + blog recettes',
      'SEO local avancé (ville + quartier)',
      'Module avis Google & TripAdvisor',
      'Galerie culinaire interactive',
      'Newsletter clients intégrée',
      'Rapport de trafic mensuel'
    ],
    isPrimary: true
  },
  {
    name: 'E-Commerce Food',
    price: '2 890 €',
    description: 'Pour diversifier vos revenus avec le digital',
    features: [
      'Site + boutique Click & Collect',
      'Paiement en ligne (Stripe) 0% commission',
      'Gestion commandes livraison',
      'Privatisation & événements pro',
      'Fidélisation par QR Code',
      'Maintenance 12 mois incluse'
    ],
    isPrimary: false
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
  },
  {
    id: '6',
    question: 'Combien coûte un site internet pour un restaurant ?',
    answer: 'Nos offres commencent à 890 € pour un site vitrine avec menu digital et réservation intégrée. Un site premium avec SEO local avancé et galerie culinaire est à 1 790 €. Ces investissements sont généralement rentabilisés dès le premier mois grâce aux nouvelles réservations générées.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Pouvez-vous créer un site bilingue pour attirer les touristes étrangers ?',
    answer: 'Oui. Pour les restaurants situés dans des quartiers touristiques (Marais, Vieux-Lyon, Montmartre), nous créons des sites bilingues français/anglais (voire trilingues) avec des URLs hreflang pour être visible sur Google.fr et Google.com.',
    category: 'multilingual'
  },
  {
    id: '8',
    question: 'Proposez-vous des forfaits photo si nous n\'avons pas de photos professionnelles de nos plats ?',
    answer: 'Oui. La photographie culinaire est cruciale pour un restaurant. Nous pouvons vous recommander des photographes spécialisés en food photography avec qui nous travaillons régulièrement, ou intégrer des images de haute qualité libres de droits en attendant votre propre shooting.',
    category: 'design'
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

      {/* Restaurant Types Section */}
      <section className='py-20 bg-stone-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Tous les types de restauration</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Du gastronomique au food truck, nous créons des sites qui reflètent parfaitement votre concept.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {restaurantTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-2xl border border-stone-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group'
              >
                <div className='text-4xl mb-4'>{type.icon}</div>
                <h3 className='text-lg font-bold text-stone-900 mb-1'>{type.type}</h3>
                <p className='text-xs text-orange-600 font-medium mb-3 uppercase tracking-wide'>{type.keywords}</p>
                <p className='text-stone-600 text-sm leading-relaxed'>{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Tarifs pour votre site restaurant</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Des offres claires adaptées à chaque type d\'établissement, sans frais cachés.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.isPrimary
                    ? 'bg-stone-900 border-stone-700 text-white'
                    : 'bg-white border-stone-200 text-stone-900'
                }`}
              >
                {plan.isPrimary && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full'>Recommandé</span>
                  </div>
                )}
                <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>
                <div className='text-4xl font-black mb-2'>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.isPrimary ? 'text-stone-400' : 'text-stone-500'}`}>{plan.description}</p>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPrimary ? 'text-orange-400' : 'text-orange-600'}`} />
                      <span className={`text-sm ${plan.isPrimary ? 'text-stone-300' : 'text-stone-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href='/contact'>
                  <button className={`w-full py-3 rounded-xl font-bold uppercase tracking-wide transition-all ${
                    plan.isPrimary
                      ? 'bg-orange-500 text-white hover:bg-orange-400'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}>
                    Demander un devis
                  </button>
                </Link>
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

      {/* Internal Links Section */}
      <section className='py-16 bg-stone-50 border-t border-stone-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl font-bold text-stone-900 mb-3'>Nos services pour la restauration et le commerce local</h2>
            <p className='text-stone-600'>Experts du digital CHR (Cafés, Hôtels, Restaurants) à Paris, Lyon et partout en France.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/creation-site-internet-artisan' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-700 transition-colors text-sm'>Site Internet Artisan</Link>
            <Link href='/services/agence-web-paris' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-700 transition-colors text-sm'>Agence Web Paris</Link>
            <Link href='/services/agence-web-lyon' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-700 transition-colors text-sm'>Agence Web Lyon</Link>
            <Link href='/services/creation-site-ecommerce' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-700 transition-colors text-sm'>Création Site E-commerce</Link>
            <Link href='/services/optimisation-seo' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-orange-400 hover:text-orange-700 transition-colors text-sm'>Optimisation SEO</Link>
          </div>
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
