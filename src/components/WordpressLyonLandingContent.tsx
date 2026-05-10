'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FileText,
  ArrowRight,
  CheckCircle,
  PenTool,
  Settings,
  ShieldAlert,
  Search,
  LayoutTemplate,
  Rocket
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence WordPress locale basée en région lyonnaise",
  "Développement de thèmes sur mesure (sans Elementor ni Divi)",
  "Hébergement infogéré et sécurisation avancée (WAF)",
  "Formation de vos équipes à la gestion du Back-Office",
  "Optimisation Core Web Vitals pour le SEO"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Thèmes WP Sur Mesure',
    description: 'Nous concevons des thèmes uniques "from scratch", parfaitement codés, garantissant une identité visuelle exclusive pour votre entreprise lyonnaise.'
  },
  {
    icon: Search,
    title: 'SEO WordPress Expert',
    description: 'Configuration optimale pour Google. Implémentation technique avancée pour propulser vos pages en tête des résultats de recherche.'
  },
  {
    icon: Rocket,
    title: 'Optimisation Vitesse',
    description: 'Fini les sites WordPress lents. Nous optimisons vos requêtes, mettons en place des systèmes de cache serveurs et allégeons le poids de vos pages.'
  },
  {
    icon: ShieldAlert,
    title: 'Maintenance & Sécurité',
    description: 'Contrats de maintenance proactifs : mises à jour du Core, thèmes et plugins, sauvegardes quotidiennes et protection anti-piratage.'
  },
  {
    icon: PenTool,
    title: 'Éditeur Gutenberg (ACF)',
    description: 'Développement de blocs Gutenberg personnalisés pour vous offrir une édition de page facile, sans jamais risquer de casser votre design.'
  },
  {
    icon: Settings,
    title: 'Migration vers WordPress',
    description: 'Migration complexe sans perte de SEO depuis d\'anciens CMS (Joomla, Drupal, Wix, Squarespace) vers une nouvelle architecture WordPress.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Arborescence',
    description: 'Analyse de vos besoins, structuration de la donnée (Custom Post Types) et maquettage du parcours utilisateur (UX).'
  },
  {
    number: '02',
    title: 'Développement Technique',
    description: 'Création de votre thème WordPress sur mesure et intégration des blocs Gutenberg dynamiques.'
  },
  {
    number: '03',
    title: 'Contenu & SEO',
    description: 'Intégration de vos textes et images avec une optimisation stricte des balises (H1, Meta) pour le référencement naturel.'
  },
  {
    number: '04',
    title: 'Formation & Maintenance',
    description: 'Formation de votre équipe à Lyon, puis suivi régulier pour garantir la pérennité et la sécurité de votre plateforme.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi faire appel à une agence WordPress plutôt que de le faire soi-même ?',
    answer: 'Installer WordPress est facile, mais concevoir un site performant, sécurisé et bien référencé est un métier. Un site "fait maison" utilise souvent des thèmes lourds et trop de plugins, ce qui détruit l\'expérience utilisateur. Notre agence code votre thème sur mesure, garantissant vitesse, sécurité et résultats SEO sur le marché lyonnais.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Utilisez-vous des constructeurs de pages comme Elementor ?',
    answer: 'Non. Nous fuyons les "Page Builders" (Elementor, Divi) car ils génèrent du "code spaghetti" pénalisé par Google. Nous développons des blocs sur mesure basés sur l\'éditeur natif Gutenberg et Advanced Custom Fields (ACF). Votre site sera 3x plus rapide et infiniment plus stable.',
    category: 'tech'
  },
  {
    id: '3',
    question: 'Où serez-vous physiquement pour notre projet ?',
    answer: 'Notre agence est fortement implantée en région Auvergne-Rhône-Alpes. Nous pouvons nous rencontrer physiquement à Lyon (Part-Dieu, Presqu\'île, Confluence) ou dans sa métropole pour échanger sur la stratégie, valider les maquettes et effectuer les formations.',
    category: 'local'
  },
  {
    id: '4',
    question: 'Combien coûte un site WordPress professionnel sur mesure ?',
    answer: 'Un site vitrine WordPress avec un thème développé "from scratch" commence généralement autour de 3 000 €. Le prix évolue selon le nombre de modèles de pages différents, les fonctionnalités spécifiques (espace membre, annuaire complexe) et les enjeux SEO.',
    category: 'pricing'
  },
  {
    id: '5',
    question: 'Qu\'inclut votre prestation de maintenance WordPress ?',
    answer: 'Notre forfait de Tierce Maintenance Applicative (TMA) inclut : les mises à jour sécurisées du Core WordPress et des plugins, des sauvegardes externalisées quotidiennes, la surveillance 24/7 contre le piratage, et des heures d\'intervention dédiées pour les évolutions de votre site.',
    category: 'service'
  }
]

export default function WordpressLyonLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'
            alt='Agence WordPress Lyon'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-[#0073aa]/40'></div>
        </div>

        {/* Decorative WP Blue Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#0073aa]/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-[#0073aa]/20 border border-[#0073aa]/30 text-[#42b7f0] rounded-full text-sm font-medium'>
                <FileText className='w-4 h-4 mr-2' />
                L'Expertise WordPress en Région Lyonnaise
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Agence <span className='text-[#42b7f0]'>WordPress</span> Lyon : Performance & Sur Mesure
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développement de thèmes exclusifs (sans Elementor), optimisation de la vitesse et maintenance infogérée pour propulser votre entreprise lyonnaise.
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
                    <CheckCircle className='w-5 h-5 text-[#42b7f0] flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-[#0073aa] text-white rounded-lg font-bold hover:bg-[#005a87] transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#0073aa]/20'>
                    Demander une estimation
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Parler à un développeur
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
                <div className='flex bg-white rounded-xl shadow-lg h-[400px] overflow-hidden border border-slate-200'>
                  {/* WP Sidebar Mockup */}
                  <div className='w-16 md:w-48 bg-[#1e1e1e] flex flex-col'>
                    <div className='h-12 flex items-center px-4 bg-[#23282d] border-b border-slate-700'>
                      <div className='w-6 h-6 rounded-full bg-[#0073aa] flex items-center justify-center text-white font-serif italic text-xs'>W</div>
                    </div>
                    <div className='flex-1 p-2 space-y-1'>
                      <div className='h-8 bg-[#0073aa] rounded flex items-center px-2'>
                        <LayoutTemplate className='w-4 h-4 text-white mr-2' />
                        <span className='hidden md:block text-white text-xs'>Thème Actif</span>
                      </div>
                      <div className='h-8 hover:bg-[#32373c] rounded flex items-center px-2'>
                        <ShieldAlert className='w-4 h-4 text-slate-400 mr-2' />
                        <span className='hidden md:block text-slate-300 text-xs'>Sécurité</span>
                      </div>
                      <div className='h-8 hover:bg-[#32373c] rounded flex items-center px-2'>
                        <Rocket className='w-4 h-4 text-slate-400 mr-2' />
                        <span className='hidden md:block text-slate-300 text-xs'>Performance</span>
                      </div>
                    </div>
                  </div>
                  {/* WP Content Area Mockup */}
                  <div className='flex-1 bg-[#f0f0f1] p-6'>
                    <div className='bg-white p-6 rounded shadow-sm border border-slate-200 h-full flex flex-col'>
                      <div className='mb-6 flex justify-between items-center'>
                         <h3 className='text-lg font-serif text-slate-800'>Santé du site</h3>
                         <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold'>Excellent</span>
                      </div>
                      <div className='space-y-4 flex-1'>
                        <div className='flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50'>
                           <span className='text-sm text-slate-600'>Vitesse de chargement (Lyon)</span>
                           <span className='font-mono text-emerald-600 font-bold'>0.8s</span>
                        </div>
                        <div className='flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50'>
                           <span className='text-sm text-slate-600'>Requêtes base de données</span>
                           <span className='font-mono text-blue-600 font-bold'>Optimisées</span>
                        </div>
                        <div className='flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50'>
                           <span className='text-sm text-slate-600'>Mises à jour (Core/Plugins)</span>
                           <span className='font-mono text-emerald-600 font-bold'>À jour</span>
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
      <section className='py-8 bg-[#0073aa]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <Rocket className='w-6 h-6' />
              <span>Temps de chargement &lt; 1s</span>
            </div>
            <div className='flex items-center gap-2'>
              <PenTool className='w-6 h-6' />
              <span>Zéro Page Builder (No Elementor)</span>
            </div>
            <div className='flex items-center gap-2'>
              <ShieldAlert className='w-6 h-6' />
              <span>Haute Sécurité Intégrée</span>
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
              Pourquoi choisir une véritable agence WordPress à Lyon ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                WordPress est le CMS le plus populaire au monde, mais c'est aussi le plus mal utilisé. La majorité des agences de communication généralistes à Lyon se contentent d'acheter un thème préconçu à 50€ et d'y installer un constructeur de page très lourd (comme Elementor ou Divi). Le résultat ? Un site lent, difficile à référencer sur Google, et dont la sécurité est vulnérable. En tant qu'<strong>agence web experte WordPress</strong>, notre démarche est diamétralement opposée.
              </p>
              <p>
                Notre pôle d'ingénierie web lyonnais conçoit des <strong>thèmes sur mesure (from scratch)</strong>. Nous écrivons chaque ligne de code (PHP, HTML, CSS, JavaScript) spécifiquement pour votre projet. Ce niveau d'exigence technique garantit des performances exceptionnelles (temps de réponse serveur minimes) et un design exclusif, parfaitement aligné avec votre charte graphique B2B ou B2C.
              </p>
              <p>
                La facilité d'utilisation ne doit pas se faire au détriment de la performance. C'est pourquoi nous utilisons la puissance des <strong>blocs Gutenberg natifs couplés à Advanced Custom Fields (ACF)</strong>. Vos équipes marketing basées à Lyon pourront créer de nouvelles "Landing Pages" en assemblant des blocs prédéfinis, sans jamais risquer de casser l'architecture du site. Vous devenez 100% autonomes sur votre contenu.
              </p>
              <p>
                S'agissant d'une technologie Open Source mondiale, la sécurité de votre site est une priorité absolue. Nous déployons un arsenal défensif complet : hébergement Cloud infogéré en France, pare-feu applicatif (WAF), désactivation des accès superflus et <strong>sauvegardes automatiques quotidiennes</strong>. Si une faille "Zero Day" menace l'écosystème, notre équipe intervient de façon proactive.
              </p>
              <p>
                Enfin, votre site WordPress doit être une machine à générer du trafic. Grâce à notre expertise interne en SEO (référencement naturel), nous intégrons toutes les balises sémantiques nécessaires, gérons finement vos redirections 301 (très utile lors d'une refonte), et optimisons le maillage interne. Votre entreprise domine ainsi les résultats de recherche sur le bassin lyonnais (Confluence, Part-Dieu, Villeurbanne) et au niveau national.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos prestations WordPress exclusives</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une maîtrise technique pointue pour des sites vitrines institutionnels et complexes.
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
                    <Icon className='w-7 h-7 text-[#0073aa]' />
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
            <h2 className='text-3xl font-bold mb-4'>Développement & Mise en production</h2>
            <p className='text-xl text-slate-400'>Un workflow technique maîtrisé pour vous livrer un outil clé en main.</p>
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
                <div className='w-12 h-12 bg-[#0073aa] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-500/20'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Techniques & Stratégiques</h2>
            <p className='text-xl text-slate-600'>Les réponses de nos ingénieurs WordPress.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-[#0073aa] to-[#005a87] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Votre site WordPress actuel vous pose problème ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Refonte complète, optimisation des performances ou migration serveur. Nos experts basés à Lyon analysent votre code et vous proposent des solutions viables.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-[#0073aa] rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un Audit de Code (Gratuit)
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
