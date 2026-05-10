'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Wrench,
  ArrowRight,
  CheckCircle,
  HardHat,
  Star,
  MapPin,
  Camera,
  Smartphone,
  PhoneCall,
  Search,
  Hammer
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Formulaire de demande de devis rapide",
  "Galeries avant/après de vos chantiers",
  "Optimisation Google Maps (SEO Local)",
  "Mise en avant de vos certifications (RGE, Qualibat)",
  "Bouton d'appel d'urgence (Dépannage)"
]

const services = [
  {
    icon: PhoneCall,
    title: 'Génération de Contacts (Devis)',
    description: 'Des formulaires de contact ultra-simples et des boutons d\'appel rapides conçus pour convertir les visiteurs en clients potentiels.'
  },
  {
    icon: Search,
    title: 'SEO Local Artisan',
    description: 'Dominez les recherches dans votre ville (ex: "Plombier urgence Lyon", "Électricien Paris 15"). Soyez trouvé avant vos concurrents.'
  },
  {
    icon: Camera,
    title: 'Portfolio de Chantiers',
    description: 'Rien ne rassure plus qu\'un beau travail. Galeries photos avant/après fluides pour prouver votre savoir-faire et votre sérieux.'
  },
  {
    icon: Star,
    title: 'Avis Clients & Réputation',
    description: 'Intégration de vos avis Google My Business ou Trustpilot directement sur le site pour asseoir votre crédibilité instantanément.'
  },
  {
    icon: Smartphone,
    title: '100% Mobile (Dépannage)',
    description: 'La majorité de vos clients cherchent un artisan en urgence sur leur téléphone. Votre site sera ultra-rapide et ergonomique sur mobile.'
  },
  {
    icon: CheckCircle,
    title: 'Certifications en Évidence',
    description: 'Mise en valeur stratégique de vos labels (RGE, Qualibat, Eco-Artisan, garantie décennale) pour déclencher la confiance.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Étude de votre zone',
    description: 'Analyse des mots-clés recherchés dans votre secteur géographique (rayon d\'intervention).'
  },
  {
    number: '02',
    title: 'Création du Site',
    description: 'Design robuste et professionnel, intégration de vos photos de chantier et textes SEO.'
  },
  {
    number: '03',
    title: 'Optimisation Google',
    description: 'Configuration de votre fiche Google My Business pour dominer la carte locale.'
  },
  {
    number: '04',
    title: 'Lancement',
    description: 'Mise en ligne rapide, vous commencez à recevoir des appels et des demandes de devis.'
  }
]

const artisanTypes = [
  {
    icon: '🔧',
    metier: 'Plombier & Chauffagiste',
    keywords: 'plombier urgence, chauffagiste, débouchage canalisation',
    description: 'Bouton Click-to-Call géant, disponibilité 24h/24, formulaire de dépannage rapide et zone de chalandise optimisée pour les recherches locales en urgence.'
  },
  {
    icon: '⚡',
    metier: 'Électricien',
    keywords: 'électricien certifié, mise aux normes, tableau électrique',
    description: 'Mise en avant des certifications Qualifelec, galerie de réalisations (tableaux, domotique) et devis automatisé par type de travaux électriques.'
  },
  {
    icon: '🪵',
    metier: 'Menuisier & Charpentier',
    keywords: 'menuisier sur mesure, pose fenêtres, escalier bois',
    description: 'Galeries avant/après de vos créations sur mesure, configurateur de demande de devis et pages dédiées par type de menuiserie (intérieure, extérieure, agencement).'
  },
  {
    icon: '🏠',
    metier: 'Maçon & Carreleur',
    keywords: 'rénovation maison, extension, dallage terrasse',
    description: 'Portfolio de chantiers de rénovation complète, attestation décennale visible et pages optimisées par type de travaux (extension, surélévation, rénovation).'
  },
  {
    icon: '🎨',
    metier: 'Peintre en Bâtiment',
    keywords: 'peintre décorateur, enduit, ravalement façade',
    description: 'Sliders d\'ambiances colorées pour inspirer, témoignages de chantiers récents et formulaire de demande de devis rapide par type de pièce ou façade.'
  },
  {
    icon: '🏗️',
    metier: 'Couvreur & Zingueur',
    keywords: 'couvreur urgence, réparation toiture, étanchéité',
    description: 'Photos de chantiers toiture (tuiles, ardoise, zinc, bac acier), bouton d\'urgence fuite toiture et devis intervention express en 24h.'
  }
]

const pricingPlans = [
  {
    name: 'Vitrine Essentiel',
    price: '990 €',
    description: 'Pour démarrer votre présence en ligne professionnellement',
    features: [
      '5 pages optimisées SEO',
      'Formulaire de devis intégré',
      'Galerie de 20 photos chantiers',
      'Fiche Google My Business',
      'Hébergement 1 an inclus',
      'Certificat SSL'
    ],
    isPrimary: false
  },
  {
    name: 'Premium Local',
    price: '1 990 €',
    description: 'Pour dominer les recherches dans votre zone d\'intervention',
    features: [
      '10 pages + pages par ville',
      'SEO local avancé (3 villes)',
      'Module avis Google intégré',
      'Bouton urgence Click-to-Call',
      'Blog conseils & actualités',
      'Rapport mensuel de trafic'
    ],
    isPrimary: true
  },
  {
    name: 'E-Devis Pro',
    price: '2 990 €',
    description: 'Pour les entreprises BTP qui veulent automatiser',
    features: [
      'Site + configurateur de devis',
      'SEO département complet',
      'Espace client sécurisé',
      'Paiement d\'acompte en ligne',
      'CRM basique intégré',
      'Maintenance 12 mois incluse'
    ],
    isPrimary: false
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi un artisan a-t-il besoin d\'un site internet en 2026 ?',
    answer: 'Le bouche-à-oreille ne suffit plus pour remplir un carnet de commandes sur le long terme. Aujourd\'hui, 85% des particuliers cherchent leur artisan (plombier, chauffagiste, menuisier) sur Google. Sans site web, vous laissez tous ces chantiers à vos concurrents.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Faites-vous des sites pour les urgences et dépannages ?',
    answer: 'Absolument. Pour les métiers du dépannage (serrurier, plombier), nous créons des sites ultra-rapides sur mobile avec un bouton d\'appel géant (Click-to-Call). Le but est que le client vous appelle en moins de 3 secondes.',
    category: 'features'
  },
  {
    id: '3',
    question: 'Comment allez-vous me positionner sur ma ville ?',
    answer: 'Grâce au SEO local. Nous créons des pages spécifiques pour votre ville et les communes alentours (ex: "Rénovation salle de bain à Villeurbanne"). Nous couplons cela avec l\'optimisation de votre fiche Google My Business.',
    category: 'seo'
  },
  {
    id: '4',
    question: 'Puis-je ajouter moi-même des photos de mes nouveaux chantiers ?',
    answer: 'Oui ! Nous pouvons vous fournir un accès très simple pour mettre à jour votre galerie avant/après. Sinon, vous pouvez simplement nous envoyer les photos et notre équipe de maintenance s\'en chargera.',
    category: 'maintenance'
  },
  {
    id: '5',
    question: 'Combien de temps faut-il pour avoir mon site en ligne ?',
    answer: 'Nous savons que les artisans n\'ont pas de temps à perdre. La livraison de nos sites vitrines pour le bâtiment se fait généralement en 3 à 4 semaines, clés en main.',
    category: 'timing'
  },
  {
    id: '6',
    question: 'Quel est le budget moyen pour un site artisan professionnel ?',
    answer: 'Nos tarifs commencent à 990 € pour un site vitrine de 5 pages avec formulaire de devis intégré. Un site premium avec SEO local avancé sur 3 villes est à 1 990 €. Ces investissements sont généralement rentabilisés dès les 2 premiers chantiers obtenus via le web.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Un site web est-il vraiment plus efficace que les Pages Jaunes ou Houzz ?',
    answer: 'Oui. Sur les annuaires, vous êtes affiché à côté de vos concurrents directs et vous payez des abonnements élevés. Sur votre propre site, vous maîtrisez votre image, vous ne payez aucune commission sur les devis, et vous construisez une autorité SEO long terme que personne ne peut vous retirer.',
    category: 'strategy'
  },
  {
    id: '8',
    question: 'Pouvez-vous afficher ma garantie décennale et mes certifications RGE sur le site ?',
    answer: 'Absolument. Nous créons une section "Certifications & Garanties" dédiée mettant en valeur vos labels RGE, Qualibat, Qualifelec, Eco-Artisan et votre attestation de garantie décennale. Ces éléments sont essentiels pour rassurer vos clients et se démarquer de la concurrence non-certifiée.',
    category: 'trust'
  }
]

export default function ArtisanLandingContent() {
  return (
    <div className='min-h-screen bg-stone-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-stone-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-25'>
          <Image
            src='https://images.unsplash.com/photo-1504307651254-35680f35aa9e?q=80&w=2000&auto=format&fit=crop'
            alt='Artisan au travail sur un chantier'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900/60'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-sm font-medium'>
                <HardHat className='w-4 h-4 mr-2' />
                Agence Digitale pour les Métiers du Bâtiment
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de site internet pour <span className='text-amber-500'>Artisans</span> & BTP
                </h1>
                <p className='text-xl text-stone-300 leading-relaxed mb-8'>
                  Trouvez de nouveaux chantiers grâce à un site web qui prouve votre savoir-faire. Soyez visible sur Google dans votre ville et recevez des demandes de devis qualifiées.
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
                    <span className='text-stone-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-amber-500 text-stone-900 rounded-xl font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-500/20'>
                    Demander un devis gratuit
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border-2 border-stone-600 text-white rounded-xl font-semibold hover:bg-stone-800 transition-all duration-300'>
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 aspect-[4/3]'>
                <Image
                  src='https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
                  alt='Menuisier Artisan'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent'></div>
                
                <div className='absolute bottom-8 left-8 right-8 bg-stone-900/90 backdrop-blur-md p-6 rounded-xl border border-stone-700'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <Wrench className='w-6 h-6 text-stone-900' />
                      </div>
                      <div>
                        <h3 className='text-white font-bold text-lg'>Plomberie & Rénovation</h3>
                        <div className='flex items-center text-amber-500 text-sm'>
                          <MapPin className='w-4 h-4 mr-1' />
                          <span>Intervention : 30km autour de Lyon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='w-full py-3 bg-amber-500 text-stone-900 rounded-lg font-bold hover:bg-amber-400 transition flex items-center justify-center'>
                    <PhoneCall className='w-5 h-5 mr-2' />
                    Urgence 24/7 : Appeler
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-amber-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-stone-900 font-bold'>
            <div className='flex items-center gap-2'>
              <Hammer className='w-6 h-6' />
              <span>Génération de Devis Qualifiés</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='w-6 h-6' />
              <span>1ère Page sur Google Maps</span>
            </div>
            <div className='flex items-center gap-2'>
              <Star className='w-6 h-6' />
              <span>Mise en valeur de vos Avis</span>
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
            <h2 className='text-3xl md:text-4xl font-bold text-stone-900 mb-8'>
              Pourquoi la création d'un site internet pour artisan est votre meilleur investissement ?
            </h2>
            <div className='prose prose-lg text-stone-700 space-y-6'>
              <p>
                Dans le secteur du bâtiment (plomberie, électricité, menuiserie, maçonnerie), la concurrence est féroce. Si un bouche-à-oreille positif reste essentiel, il ne garantit plus un flux de chantiers régulier. Aujourd'hui, lorsqu'un particulier ou une entreprise cherche un professionnel pour des travaux ou un dépannage, son premier réflexe est de sortir son smartphone et de chercher sur Google. La <strong>création d'un site internet pour artisan</strong> est l'outil indispensable pour intercepter ces demandes qualifiées avant vos concurrents.
              </p>
              <p>
                Un site web vitrine pour un artisan ne doit pas être une simple carte de visite numérique. Il doit être une véritable machine à rassurer. Les particuliers ont souvent peur des "arnaques" dans le BTP. Un site web professionnel, affichant clairement vos certifications (<strong>RGE, Qualibat, Garantie Décennale</strong>), l'historique de votre entreprise, et surtout des galeries de photos "Avant / Après" de vos réalisations, crée immédiatement un climat de confiance. Chez Sidikoff Digital, nous concevons des designs robustes qui reflètent la qualité de votre travail manuel.
              </p>
              <p>
                L'enjeu majeur d'un site web artisan est la conversion locale. Nous mettons en place des stratégies de <strong>SEO Local (Référencement Naturel Local)</strong> très pointues. L'objectif est d'apparaître dans le fameux "Pack Local Google" (la carte avec les 3 premiers résultats) lorsque quelqu'un tape "électricien urgence Paris" ou "rénovation salle de bain Lyon". Nous lions étroitement votre site web à votre fiche Google Business Profile, et nous optimisons vos pages de services pour répondre aux requêtes exactes de votre zone de chalandise.
              </p>
              <p>
                Enfin, l'expérience utilisateur doit être orientée vers l'action immédiate. Pour les métiers du dépannage, nous privilégions le "Mobile-First" avec des boutons "Click-to-Call" omniprésents. Pour les métiers de rénovation, nous mettons en place des <strong>formulaires de demande de devis</strong> simples et clairs, vous permettant de qualifier le prospect (type de travaux, budget, délai) avant même le premier contact téléphonique. Un site internet bien conçu travaille pour vous 24h/24, 7j/7, en vous apportant les chantiers que vous choisissez.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-stone-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Les outils pour développer votre entreprise BTP</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Des fonctionnalités pensées spécifiquement pour les professionnels du bâtiment.
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
                  className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-stone-200'
                >
                  <div className='w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-amber-600' />
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
            <h2 className='text-3xl font-bold mb-4'>Votre site livré clés en main</h2>
            <p className='text-xl text-stone-400'>Restez concentré sur vos chantiers, on s'occupe de tout le reste.</p>
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
                <div className='w-12 h-12 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-amber-500/20'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-stone-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Types Section */}
      <section className='py-20 bg-stone-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Tous les corps de métier du BTP</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Que vous soyez plombier, électricien ou maçon, nous avons une solution sur mesure pour votre activité.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {artisanTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-2xl border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300'
              >
                <div className='text-4xl mb-4'>{type.icon}</div>
                <h3 className='text-lg font-bold text-stone-900 mb-1'>{type.metier}</h3>
                <p className='text-xs text-amber-600 font-medium mb-3 uppercase tracking-wide'>{type.keywords}</p>
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
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Tarifs clairs pour votre site artisan</h2>
            <p className='text-xl text-stone-600 max-w-3xl mx-auto'>
              Des offres transparentes, sans surprise. Rentabilisées dès les 2 premiers chantiers obtenus.
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
                    ? 'bg-amber-500 border-amber-500 text-stone-900'
                    : 'bg-white border-stone-200 text-stone-900'
                }`}
              >
                {plan.isPrimary && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='px-4 py-1 bg-stone-900 text-amber-500 text-sm font-bold rounded-full'>Recommandé</span>
                  </div>
                )}
                <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>
                <div className='text-4xl font-black mb-2'>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.isPrimary ? 'text-stone-700' : 'text-stone-500'}`}>{plan.description}</p>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPrimary ? 'text-stone-900' : 'text-amber-600'}`} />
                      <span className={`text-sm ${plan.isPrimary ? 'text-stone-800' : 'text-stone-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href='/contact'>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.isPrimary
                      ? 'bg-stone-900 text-white hover:bg-stone-800'
                      : 'bg-amber-500 text-stone-900 hover:bg-amber-400'
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
            <h2 className='text-3xl font-bold text-stone-900 mb-4'>Questions Fréquentes</h2>
            <p className='text-xl text-stone-600'>Ce que les artisans nous demandent le plus souvent.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className='py-16 bg-stone-50 border-t border-stone-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl font-bold text-stone-900 mb-3'>Nous intervenons partout en France</h2>
            <p className='text-stone-600'>Spécialistes des artisans du BTP à Lyon, Paris et dans toute la région.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/agence-web-lyon' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-amber-400 hover:text-amber-700 transition-colors text-sm'>Agence Web Lyon</Link>
            <Link href='/services/agence-web-paris' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-amber-400 hover:text-amber-700 transition-colors text-sm'>Agence Web Paris</Link>
            <Link href='/services/agence-web-villeurbanne' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-amber-400 hover:text-amber-700 transition-colors text-sm'>Agence Web Villeurbanne</Link>
            <Link href='/services/creation-site-internet-restaurant' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-amber-400 hover:text-amber-700 transition-colors text-sm'>Site Internet Restaurant</Link>
            <Link href='/services/optimisation-seo' className='px-5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-amber-400 hover:text-amber-700 transition-colors text-sm'>Optimisation SEO</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-amber-500 text-stone-900 relative overflow-hidden'>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à remplir votre carnet de commandes ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Obtenez un site internet professionnel qui met en valeur votre savoir-faire et vous apporte des demandes de devis régulières.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all shadow-xl'>
                Demander mon devis gratuit
              </button>
            </Link>
            <a href='tel:+33123456789'>
              <button className='px-10 py-4 border-2 border-stone-900 text-stone-900 rounded-xl font-bold hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center'>
                <PhoneCall className='w-5 h-5 mr-2' />
                Nous appeler
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
