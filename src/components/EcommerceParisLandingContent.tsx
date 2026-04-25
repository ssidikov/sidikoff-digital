import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  CreditCard,
  BarChart,
  Package,
  TrendingUp,
  Shield,
  Smartphone,
  Globe
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Boutiques en ligne ultra-rapides et optimisées SEO",
  "Design UX/UI conçu pour maximiser la conversion",
  "Intégration de paiements sécurisés (Stripe, PayPal, Alma)",
  "Gestion des stocks synchronisée (ERP/CRM)",
  "Plateformes scalables capables d'encaisser des pics de trafic"
]

const services = [
  {
    icon: ShoppingCart,
    title: 'Création Boutique E-commerce',
    description: 'Développement de A à Z de votre site marchand sur mesure, Shopify ou WooCommerce, avec un catalogue produits illimité et une navigation fluide.'
  },
  {
    icon: TrendingUp,
    title: 'Optimisation du Taux de Conversion (CRO)',
    description: 'Refonte de votre tunnel d\'achat (checkout), ajout d\'upsells et cross-sells, et optimisation des fiches produits pour générer plus de ventes.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Commerce',
    description: 'Aujourd\'hui, 70% des achats se font sur mobile. Nous créons des expériences d\'achat tactiles parfaites pour augmenter vos ventes sur smartphone.'
  },
  {
    icon: BarChart,
    title: 'Tracking & Analytics E-commerce',
    description: 'Intégration avancée de Google Analytics 4, Meta Pixel et TikTok Pixel pour tracker chaque ajout au panier et calculer précisément votre ROAS.'
  },
  {
    icon: CreditCard,
    title: 'Paiement & Logistique',
    description: 'Configuration des passerelles de paiement (CB, Apple Pay, paiement en 3x) et synchronisation avec vos transporteurs (Colissimo, Mondial Relay).'
  },
  {
    icon: Shield,
    title: 'Sécurité & RGPD',
    description: 'Hébergement sécurisé, certificats SSL de grade bancaire, et conformité stricte avec les normes de protection des données européennes (RGPD).'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Stratégie Commerciale',
    description: 'Analyse de votre catalogue, de votre audience cible et choix de la plateforme technologique la plus adaptée.'
  },
  {
    number: '02',
    title: 'Design Orienté Conversion',
    description: 'Maquettage UI/UX des pages clés (Home, Catégorie, Fiche Produit, Panier) pour guider l\'utilisateur vers l\'achat.'
  },
  {
    number: '03',
    title: 'Développement & Intégration',
    description: 'Création de la boutique, intégration des moyens de paiement, et import de votre catalogue produits existant.'
  },
  {
    number: '04',
    title: 'Tests & Lancement',
    description: 'Tests de charge (Black Friday), vérification des tunnels d\'achat et mise en production avec monitoring des ventes.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quelle plateforme e-commerce recommandez-vous ?',
    answer: 'Cela dépend de vos besoins. Pour un lancement rapide ou une marque D2C (Direct-to-Consumer), Shopify est souvent le meilleur choix. Pour un catalogue complexe avec beaucoup de contenu, WooCommerce (WordPress) est excellent. Pour des besoins sur mesure avec des millions de vues, nous développons des architectures Headless Commerce (Next.js + Shopify/Medusa).',
    category: 'tech'
  },
  {
    id: '2',
    question: 'Faites-vous du Headless Commerce ?',
    answer: 'Oui, c\'est notre spécialité pour les marques à forte croissance. Nous séparons le front-end (ce que le client voit) du back-end (la gestion du catalogue). En utilisant Next.js pour le front et Shopify/Swelle pour le back, vous obtenez un site e-commerce d\'une rapidité foudroyante qui surclasse vos concurrents en SEO.',
    category: 'tech'
  },
  {
    id: '3',
    question: 'Combien coûte la création d\'un site e-commerce professionnel ?',
    answer: 'Une boutique Shopify ou WooCommerce standard commence autour de 5 000 €. Une plateforme e-commerce sur mesure avec des fonctionnalités avancées (Headless, PIM, ERP synchronisé, design très personnalisé) se situe entre 15 000 € et 50 000 €. Nous évaluons ensemble le meilleur compromis ROI.',
    category: 'pricing'
  },
  {
    id: '4',
    question: 'Puis-je gérer moi-même mon catalogue produits après la livraison ?',
    answer: 'Absolument. Nous vous formons (vous et vos équipes) sur le back-office de la solution choisie. Vous serez totalement autonomes pour ajouter de nouveaux produits, modifier les prix, créer des codes promotionnels et gérer vos commandes.',
    category: 'service'
  },
  {
    id: '5',
    question: 'Gérez-vous la migration d\'une ancienne boutique vers une nouvelle ?',
    answer: 'Oui. Les migrations e-commerce (de PrestaShop vers Shopify par exemple) sont des opérations délicates. Nous sécurisons le transfert de vos clients, de l\'historique des commandes, de votre catalogue produits, et surtout, nous mettons en place des plans de redirection 301 massifs pour ne pas perdre votre trafic SEO.',
    category: 'seo'
  }
]

export default function EcommerceParisLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop'
            alt='E-commerce Shopping en ligne'
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
                <ShoppingCart className='w-4 h-4 mr-2' />
                Agence E-Commerce Paris
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de sites <span className='text-indigo-400'>E-Commerce</span> performants à Paris
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développez votre chiffre d'affaires avec une boutique en ligne sur mesure, optimisée pour la conversion et le SEO. Experts Shopify, WooCommerce et Headless Commerce.
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
                    Estimer mon projet e-commerce
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos e-commerces
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 p-6'>
                <div className='bg-white rounded-xl overflow-hidden shadow-lg'>
                  <div className='h-12 bg-slate-100 border-b flex items-center px-4 space-x-2'>
                     <div className='w-3 h-3 rounded-full bg-red-400'></div>
                     <div className='w-3 h-3 rounded-full bg-amber-400'></div>
                     <div className='w-3 h-3 rounded-full bg-green-400'></div>
                     <div className='flex-1 ml-4 bg-white rounded-md border h-6 flex items-center px-3 text-xs text-slate-400'>
                       <Lock className='w-3 h-3 mr-1' /> https://votreboutique.com
                     </div>
                  </div>
                  <div className='p-6'>
                    <div className='flex justify-between items-center mb-6'>
                      <div className='w-32 h-6 bg-slate-200 rounded'></div>
                      <div className='flex space-x-4'>
                        <div className='w-16 h-4 bg-slate-200 rounded'></div>
                        <div className='w-16 h-4 bg-slate-200 rounded'></div>
                        <ShoppingCart className='w-5 h-5 text-indigo-600' />
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                      <div className='space-y-4'>
                        <div className='aspect-square bg-slate-100 rounded-lg relative overflow-hidden'>
                           <div className='absolute inset-0 flex items-center justify-center text-slate-300'>
                             <Package className='w-16 h-16' />
                           </div>
                        </div>
                        <div className='flex gap-2'>
                          <div className='w-1/4 aspect-square bg-slate-200 rounded'></div>
                          <div className='w-1/4 aspect-square bg-slate-200 rounded'></div>
                          <div className='w-1/4 aspect-square bg-slate-200 rounded'></div>
                        </div>
                      </div>
                      <div className='space-y-4 pt-4'>
                        <div className='w-full h-8 bg-slate-200 rounded'></div>
                        <div className='w-24 h-6 bg-indigo-100 rounded text-indigo-600 font-bold text-sm flex items-center justify-center'>149,00 €</div>
                        <div className='space-y-2 pt-4'>
                          <div className='w-full h-3 bg-slate-100 rounded'></div>
                          <div className='w-full h-3 bg-slate-100 rounded'></div>
                          <div className='w-3/4 h-3 bg-slate-100 rounded'></div>
                        </div>
                        <div className='pt-6'>
                          <div className='w-full py-3 bg-indigo-600 text-white rounded-lg text-center font-bold text-sm shadow-md'>Ajouter au panier</div>
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
      <section className='py-8 bg-indigo-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-6 h-6' />
              <span>Conversion Optimisée</span>
            </div>
            <div className='flex items-center gap-2'>
              <Shield className='w-6 h-6' />
              <span>Paiements Sécurisés</span>
            </div>
            <div className='flex items-center gap-2'>
              <Globe className='w-6 h-6' />
              <span>SEO E-commerce Expert</span>
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
              Pourquoi choisir notre agence e-commerce parisienne pour votre boutique en ligne ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                La vente en ligne ne s'improvise plus. Dans un secteur où la concurrence est mondiale à portée de clic, avoir simplement un "site qui vend" n'est pas suffisant. Les consommateurs exigent des temps de chargement immédiats, une navigation mobile irréprochable et un processus de paiement (checkout) sans aucune friction. En tant qu'<strong>agence e-commerce à Paris</strong>, nous concevons des plateformes de vente conçues spécifiquement pour maximiser votre Taux de Conversion (CRO) et générer du chiffre d'affaires.
              </p>
              <p>
                Nous travaillons avec les technologies les plus robustes du marché. Que vous ayez besoin de la flexibilité de <strong>WooCommerce</strong> pour un catalogue hybride, de la fiabilité marketing de <strong>Shopify / Shopify Plus</strong> pour une marque D2C (Direct to Consumer), ou d'une architecture <strong>Headless Commerce (Next.js)</strong> pour des performances extrêmes et des pics de trafic intenses (Black Friday, lancements de collections), nous déployons la solution qui correspond à votre maturité digitale.
              </p>
              <p>
                Le succès d'un site marchand repose lourdement sur sa visibilité. C'est pourquoi chaque boutique en ligne que nous créons intègre nativement les meilleures pratiques de <strong>SEO E-commerce</strong>. Nous structurons minutieusement vos catégories, optimisons le maillage interne, gérons intelligemment la navigation à facettes (filtres) pour éviter la duplication de contenu (Duplicate Content) et intégrons les balises de données structurées (Schema.org Product) pour que vos produits apparaissent enrichis de leurs prix et avis directement dans Google.
              </p>
              <p>
                De plus, nous comprenons que le commerce électronique est le centre névralgique de votre entreprise. Nous intégrons donc votre nouvelle plateforme avec votre écosystème d'outils existants : ERP (Cegid, Sage), CRM (Salesforce, HubSpot), outils logistiques (Sendcloud, Boxtal) et vos passerelles de paiement favorites (Stripe, PayPal, Apple Pay, Klarna pour le paiement fractionné). Tout est automatisé pour que vous puissiez vous concentrer sur la stratégie de vos ventes plutôt que sur l'opérationnel technique.
              </p>
              <p>
                Enfin, basés en région parisienne, nous privilégions la proximité avec nos clients. Nous animons des ateliers stratégiques dans nos locaux ou les vôtres pour définir l'arborescence de votre catalogue, concevoir l'expérience utilisateur (UX) de vos fiches produits, et planifier la stratégie d'acquisition (Google Ads, Meta Ads) qui propulsera vos ventes dès la mise en ligne.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos solutions de commerce digital</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Un accompagnement technique et marketing pour scaler votre activité de vente en ligne.
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
            <h2 className='text-3xl font-bold mb-4'>Notre méthodologie E-Commerce</h2>
            <p className='text-xl text-slate-400'>Un processus éprouvé pour lancer des boutiques qui vendent.</p>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes E-Commerce</h2>
            <p className='text-xl text-slate-600'>Les réponses pour bien structurer votre projet de vente en ligne.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à augmenter vos ventes en ligne ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-indigo-100'>
            Que ce soit pour une refonte, une migration ou un lancement, nos experts e-commerce à Paris vous accompagnent. Demandez un audit gratuit de votre tunnel de vente actuel.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-indigo-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Obtenir un devis E-Commerce
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
