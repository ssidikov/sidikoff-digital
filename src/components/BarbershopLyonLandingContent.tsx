'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion'
import {
  Scissors,
  CalendarCheck,
  MapPin,
  Smartphone,
  Search,
  Zap,
  ArrowRight,
  Check,
  ChevronDown,
  TrendingUp,
  Clock,
  ShieldCheck,
  Sparkles,
  Phone,
} from 'lucide-react'
import { cn } from '@/utils/styles'

// ─── Imagery (Unsplash — swap for brand/client photos when available) ─────────
// Centralised so every photo can be replaced in one place. The custom image
// loader (src/lib/image-loader.ts) appends width/quality params automatically.

const IMG = {
  hero: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80',
  ambiance:
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
  cut: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
  tools:
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  beard:
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
  chair:
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80',
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  faqs: FaqItem[]
}

// ─── Reveal — scroll-triggered entrance, reduced-motion aware ─────────────────

function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

// ─── Eyebrow label ─────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400'>
      <span className='h-px w-8 bg-linear-to-r from-transparent to-amber-400' />
      {children}
    </span>
  )
}

// ─── Gold button with shine + glow ─────────────────────────────────────────────

function GoldButton({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full',
        'bg-linear-to-br from-amber-300 via-yellow-400 to-amber-500 px-8 py-4 text-base font-bold text-stone-950',
        'shadow-[0_8px_30px_-6px_rgba(245,158,11,0.5)] transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-6px_rgba(245,158,11,0.65)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950',
        'cursor-pointer',
        className,
      )}>
      {/* shine sweep */}
      <span className='pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
      <span className='relative z-10 flex items-center gap-2'>{children}</span>
    </Link>
  )
}

function GhostButton({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-stone-600 bg-white/5 px-8 py-4',
        'text-base font-semibold text-stone-100 backdrop-blur-sm transition-all duration-300',
        'hover:border-amber-400/60 hover:bg-white/10 hover:text-white',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950',
        'cursor-pointer',
        className,
      )}>
      {children}
    </Link>
  )
}

// ─── Count-up number ────────────────────────────────────────────────────────────

function Counter({
  to,
  suffix = '',
  prefix = '',
  duration = 1600,
}: {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let raf = 0
    let start = 0
    const tick = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

// ─── Before / After comparison slider ───────────────────────────────────────────

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(55)
  const [dragging, setDragging] = useState(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => setDragging(false)

  return (
    <div className='mx-auto max-w-4xl'>
      {/* Browser chrome frame */}
      <div className='overflow-hidden rounded-2xl border border-stone-700/60 bg-stone-900 shadow-2xl shadow-black/50'>
        <div className='flex items-center gap-2 border-b border-stone-700/60 bg-stone-800/80 px-4 py-3'>
          <span className='h-3 w-3 rounded-full bg-red-400/80' />
          <span className='h-3 w-3 rounded-full bg-amber-400/80' />
          <span className='h-3 w-3 rounded-full bg-emerald-400/80' />
          <span className='ml-3 hidden truncate rounded-md bg-stone-700/60 px-3 py-1 text-xs text-stone-400 sm:block'>
            votre-barbershop-lyon.fr
          </span>
        </div>

        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className='relative aspect-16/10 w-full cursor-ew-resize touch-none select-none'>
          {/* APRÈS (base, full) — modern, vibrant */}
          <div className='absolute inset-0'>
            <Image
              src={IMG.cut}
              alt='Nouveau site web barbershop moderne créé par Sidikoff Digital'
              fill
              sizes='(max-width: 768px) 100vw, 768px'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/30 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-5 sm:p-8'>
              <span className='inline-block rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-950'>
                Réserver en ligne
              </span>
              <p className='mt-3 font-barber text-3xl uppercase tracking-wide text-white sm:text-5xl'>
                Le Barbier Lyonnais
              </p>
              <p className='text-sm text-amber-200/90'>Coupe · Barbe · Rasage traditionnel</p>
            </div>
          </div>

          {/* AVANT (clipped to left) — dated, dull */}
          <div
            className='absolute inset-0 overflow-hidden'
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image
              src={IMG.cut}
              alt='Ancien site web barbershop daté et peu performant'
              fill
              sizes='(max-width: 768px) 100vw, 768px'
              className='object-cover grayscale contrast-75 brightness-75'
            />
            <div className='absolute inset-0 bg-stone-800/40' />
            <div className='absolute inset-x-0 top-0 flex items-center justify-between bg-stone-700 px-3 py-2'>
              <span className='text-[10px] font-bold text-stone-300'>★ BARBER SHOP ★</span>
              <span className='text-[10px] text-stone-400'>Menu | Photos | Contact</span>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
              <p className='font-mono text-base font-bold text-stone-200 underline sm:text-xl'>
                BIENVENUE SUR NOTRE SITE
              </p>
              <p className='mt-2 max-w-xs font-mono text-[10px] text-stone-400 sm:text-xs'>
                Tel: 04 XX XX XX XX — Ouvert du mardi au samedi. Cliquez ici pour nous appeler.
              </p>
            </div>
          </div>

          {/* Divider handle */}
          <div
            className='pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-amber-400'
            style={{ left: `${pos}%` }}>
            <div className='absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-amber-400 bg-stone-950 shadow-lg'>
              <ArrowRight className='h-4 w-4 -translate-x-0.5 text-amber-400' />
              <ArrowRight className='h-4 w-4 translate-x-0.5 rotate-180 text-amber-400' />
            </div>
          </div>

          {/* Labels */}
          <span className='absolute left-3 top-3 z-10 rounded-full bg-stone-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-300 backdrop-blur'>
            Avant
          </span>
          <span className='absolute right-3 top-3 z-10 rounded-full bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-950 backdrop-blur'>
            Après
          </span>

          {/* Accessible range: visible on keyboard focus, screen-reader labelled */}
          <label className='sr-only' htmlFor='ba-range'>
            Comparer l&#x2019;ancien et le nouveau site
          </label>
          <input
            id='ba-range'
            type='range'
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label='Glissez pour comparer l’ancien et le nouveau site'
            className='absolute inset-x-0 bottom-2 z-20 mx-auto w-[92%] cursor-pointer opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2'
          />
        </div>
      </div>
      <p className='mt-4 text-center text-sm text-stone-400'>
        Glissez le curseur pour comparer&nbsp;— un site qui convertit vs un site qui fait fuir.
      </p>
    </div>
  )
}

// ─── Results showcase ────────────────────────────────────────────────────────
// NOTE DEV: Remplacez par de vrais témoignages clients avant mise en production.

const TESTIMONIALS = [
  {
    quote:
      'Objectif : plus de no-show et un planning géré sans effort. La réservation en ligne 24h/24 avec rappels email, c’est ce qu’on met en place sur chaque barbershop.',
    label: 'Réservation en ligne 24/7',
    context: 'Ce que nous livrons · Barbershops à Lyon',
  },
  {
    quote:
      'Apparaître en tête sur « barbershop [votre quartier] » sans publicité payante. C’est l’objectif du SEO local que nous configurons dès la mise en ligne de votre site.',
    label: 'SEO local · Top 3 Google',
    context: 'Ce que nous livrons · Métropole de Lyon',
  },
  {
    quote:
      'Un design qui reflète votre enseigne : couleurs sur mesure, galerie de coupes pleine page, chargement instantané sur mobile. Votre image en ligne à la hauteur de votre savoir-faire.',
    label: 'Design premium & mobile-first',
    context: 'Ce que nous livrons · Site vitrine',
  },
  {
    quote:
      'Formation incluse pour gérer photos et horaires en autonomie. Support réactif sous 24h pendant 3 mois. Un site livré, un barbier qui sait s’en servir — c’est notre engagement.',
    label: 'Formation + support 3 mois',
    context: 'Ce que nous livrons · Après la mise en ligne',
  },
]

function AnimatedTestimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const count = TESTIMONIALS.length

  useEffect(() => {
    if (reduce || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(id)
  }, [reduce, paused, count])

  const t = TESTIMONIALS[index]
  if (!t) return null

  return (
    <div
      className='relative mx-auto max-w-3xl'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      <Sparkles className='mx-auto mb-6 h-8 w-8 text-amber-400/50' aria-hidden='true' />
      <div className='relative min-h-50 sm:min-h-45'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='text-center'>
            <span className='inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300'>
              {t.label}
            </span>
            <p className='mt-6 text-balance text-xl font-medium leading-relaxed text-stone-100 sm:text-2xl'>
              “{t.quote}”
            </p>
            <p className='mt-5 text-sm text-stone-500'>{t.context}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots — enlarged touch target (44px) via padding, pill visual via inner span */}
      <div className='mt-8 flex justify-center gap-1'>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Afficher l'objectif ${i + 1}`}
            aria-current={i === index}
            className='flex cursor-pointer items-center justify-center p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950'>
            <span
              className={cn(
                'block rounded-full transition-all duration-300',
                i === index
                  ? 'h-2.5 w-8 bg-amber-400'
                  : 'h-2.5 w-2.5 bg-stone-600 hover:bg-stone-500',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Marquee strip ──────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  'Réservation en ligne',
  'SEO local Lyon',
  'Design premium',
  'Mobile-first',
  'Google Business',
  'Galerie photo',
  'Chargement ultra-rapide',
  'Livraison 10-14 jours',
]

function Marquee() {
  return (
    <div className='relative overflow-hidden border-y border-amber-400/20 bg-stone-900/60 py-5'>
      <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-stone-950 to-transparent' />
      <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-stone-950 to-transparent' />
      <div
        className='flex w-max gap-8 whitespace-nowrap'
        style={{ animation: 'bs-marquee 38s linear infinite' }}>
        {[0, 1].map((set) => (
          <div key={set} className='flex shrink-0 items-center gap-8'>
            {MARQUEE_ITEMS.map((item) => (
              <div key={item} className='flex items-center gap-8'>
                <span className='font-barber text-2xl uppercase tracking-wide text-stone-300'>
                  {item}
                </span>
                <Scissors className='h-5 w-5 shrink-0 text-amber-400' aria-hidden='true' />
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes bs-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bs-marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    icon: Search,
    title: 'Invisible sur Google',
    desc: 'Vos futurs clients cherchent « barbier Lyon » et tombent sur vos concurrents. Sans SEO local, vous n’existez pas.',
  },
  {
    icon: Phone,
    title: 'Réservations par téléphone uniquement',
    desc: 'Chaque appel manqué pendant une coupe = un rendez-vous perdu. La majorité des clients préfèrent réserver en ligne à toute heure.',
  },
  {
    icon: Smartphone,
    title: 'Site illisible sur mobile',
    desc: "La plupart de vos clients vous cherchent depuis leur téléphone. Un site daté les fait fuir avant même d'avoir vu votre travail.",
  },
]

const FEATURES = [
  {
    icon: CalendarCheck,
    title: 'Réservation en ligne 24/7',
    desc: 'Vos clients réservent leur créneau à toute heure. Rappel email automatiques, agenda synchronisé, zéro no-show.',
    span: 'lg:col-span-7',
  },
  {
    icon: Search,
    title: 'SEO local Lyon',
    desc: 'Apparaissez en tête sur « barbershop Lyon » et dans votre quartier.',
    span: 'lg:col-span-5',
  },
  {
    icon: MapPin,
    title: 'Google Business optimisé',
    desc: 'Fiche Maps soignée, avis mis en avant, itinéraire en un clic.',
    span: 'lg:col-span-5',
  },
  {
    icon: Sparkles,
    title: 'Galerie qui vend vos coupes',
    desc: 'Vos dégradés, barbes et rasages mis en scène comme dans un magazine. La photo déclenche la réservation.',
    span: 'lg:col-span-7',
  },
  {
    icon: Zap,
    title: 'Vitesse extrême',
    desc: 'Score Lighthouse 95+. Chargement instantané même en 4G.',
    span: 'lg:col-span-6',
  },
  {
    icon: Smartphone,
    title: '100 % mobile-first',
    desc: 'Pensé pour le pouce. Parfait sur chaque écran, du iPhone au desktop.',
    span: 'lg:col-span-6',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Devis gratuit sous 24h',
    desc: 'On échange sur votre barbershop, vos prestations et vos objectifs. Vous recevez un devis clair, sans engagement.',
  },
  {
    step: '02',
    title: 'Design sur mesure',
    desc: 'Maquette cinématique aux couleurs de votre enseigne. Vous validez avant la moindre ligne de code.',
  },
  {
    step: '03',
    title: 'Développement & SEO',
    desc: 'Site rapide, réservation en ligne, SEO local Lyon et fiche Google Business configurés de A à Z.',
  },
  {
    step: '04',
    title: 'Mise en ligne & formation',
    desc: 'On publie, on teste sur mobile, et on vous forme pour gérer photos et horaires en autonomie.',
  },
]

const PACKAGES = [
  {
    name: 'Essentiel',
    price: '990 €',
    tagline: 'Le shop qui démarre en ligne',
    features: [
      'Site vitrine 1 page premium',
      'Design sur mesure dark/gold',
      'Galerie photo',
      'SEO local de base',
      'Fiche Google Business',
      'Livraison 10 jours',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '1 690 €',
    tagline: 'Le plus choisi par les barbershops',
    features: [
      'Site multi-pages (5 pages)',
      'Réservation en ligne 24/7',
      'Rappels email automatiques',
      'SEO local avancé Lyon',
      'Galerie + avis clients',
      'Formation + support 3 mois',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'Sur devis',
    tagline: 'L’enseigne multi-salons',
    features: [
      'Tout le pack Pro',
      'Multi-établissements',
      'Boutique produits en ligne',
      'Programme de fidélité',
      'Stratégie SEO sur 6 mois',
      'Maintenance prioritaire',
    ],
    featured: false,
  },
]

const QUARTIERS = [
  'Lyon 1 — Presqu’île',
  'Lyon 2 — Confluence',
  'Lyon 3 — Part-Dieu',
  'Lyon 4 — Croix-Rousse',
  'Lyon 5 — Vieux-Lyon',
  'Lyon 6',
  'Lyon 7 — Guillotière',
  'Villeurbanne',
  'Caluire-et-Cuire',
  'Bron',
  'Vaulx-en-Velin',
  'Saint-Priest',
]

// ─── Main component ────────────────────────────────────────────────────────────

export default function BarbershopLyonLandingContent({ faqs }: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const bgY = reduce ? '0%' : rawY
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <main className='relative overflow-x-hidden bg-stone-950 text-stone-200 font-features-["ss01"] selection:bg-amber-400/30 selection:text-amber-100'>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className='relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-32 md:px-8 md:pt-36'>
        {/* Parallax background photo */}
        <motion.div style={{ y: bgY }} className='absolute inset-0 -z-20 will-change-transform'>
          <Image
            src={IMG.hero}
            alt='Intérieur d’un barbershop premium à Lyon'
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
        </motion.div>

        {/* Cinematic overlays */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className='absolute inset-0 -z-10 bg-linear-to-b from-stone-950/80 via-stone-950/70 to-stone-950'
        />
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(245,158,11,0.18),transparent_70%)]' />
        {/* Grain */}
        <div
          className='pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay'
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className='relative mx-auto w-full max-w-5xl text-center'>
          <Reveal>
            <span className='mb-7 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-stone-900/60 px-5 py-2.5 text-sm font-semibold text-amber-200 backdrop-blur-md'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75' />
                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400' />
              </span>
              Agence web · Barbershops à Lyon
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className='font-barber text-5xl uppercase leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl'>
              Le site web qui remplit
              <br />
              <span className='bg-linear-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent'>
                votre barbershop
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className='mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-stone-300 sm:text-xl'>
              Création de sites internet sur mesure pour barbershops à&nbsp;Lyon. Design
              cinématique, réservation en ligne et SEO local pour devenir le barbier{' '}
              <span className='font-semibold text-amber-300'>numéro 1 de votre quartier</span>.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <GoldButton href='/contact' ariaLabel='Demander un devis gratuit'>
                Devis gratuit sous 24h
                <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
              </GoldButton>
              <GhostButton href='#realisations'>Voir une transformation</GhostButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className='mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-400'>
              <span className='flex items-center gap-2'>
                <ShieldCheck className='h-4 w-4 text-amber-400' aria-hidden='true' />
                Sans engagement
              </span>
              <span className='flex items-center gap-2'>
                <Clock className='h-4 w-4 text-amber-400' aria-hidden='true' />
                Livré en 10-14 jours
              </span>
              <span className='flex items-center gap-2'>
                <Zap className='h-4 w-4 text-amber-400' aria-hidden='true' />
                Devis sous 24h
              </span>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className='absolute inset-x-0 bottom-8 flex justify-center'>
          <ChevronDown className='h-6 w-6 animate-bounce text-amber-400/60' aria-hidden='true' />
        </div>
      </section>

      <Marquee />

      {/* ═══════════════ PROBLEM ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-6xl'>
          <Reveal className='mx-auto mb-14 max-w-2xl text-center'>
            <Eyebrow>Le constat</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Un bon barbier mérite mieux qu’un mauvais site
            </h2>
            <p className='mt-4 text-lg text-stone-400'>
              Sans présence en ligne solide, même le meilleur barbershop de Lyon perd des clients
              chaque jour.
            </p>
          </Reveal>

          <div className='grid gap-6 md:grid-cols-3'>
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className='group h-full rounded-2xl border border-stone-800 bg-stone-900/40 p-8 transition-all duration-300 hover:border-amber-400/30 hover:bg-stone-900/70'>
                  <div className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20'>
                    <p.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-white'>{p.title}</h3>
                  <p className='leading-relaxed text-stone-400'>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SOLUTION / FEATURES (bento) ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(245,158,11,0.06),transparent)]' />
        <div className='mx-auto max-w-6xl'>
          <Reveal className='mb-14 max-w-2xl'>
            <Eyebrow>La solution</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Tout ce qu’un barbershop doit avoir en ligne
            </h2>
            <p className='mt-4 text-lg text-stone-400'>
              Un site pensé pour transformer les curieux de Google en clients dans votre fauteuil.
            </p>
          </Reveal>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-12'>
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08} className={cn('lg:col-span-6', f.span)}>
                <div className='group relative h-full overflow-hidden rounded-2xl border border-stone-800 bg-linear-to-br from-stone-900/80 to-stone-900/30 p-8 transition-all duration-300 hover:border-amber-400/40'>
                  <div className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                  <div className='relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/20'>
                    <f.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <h3 className='relative mb-2 text-xl font-bold text-white'>{f.title}</h3>
                  <p className='relative leading-relaxed text-stone-400'>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BEFORE / AFTER ═══════════════ */}
      <section id='realisations' className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-6xl'>
          <Reveal className='mx-auto mb-14 max-w-2xl text-center'>
            <Eyebrow>La transformation</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Avant / Après
            </h2>
            <p className='mt-4 text-lg text-stone-400'>
              La différence entre un site qu’on quitte et un site qui réserve.
            </p>
          </Reveal>
          <Reveal>
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className='relative border-y border-stone-800 bg-stone-900/40 px-6 py-16 md:px-8'>
        <div className='mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4'>
          {[
            { to: 24, suffix: 'h', label: 'Devis envoyé' },
            { to: 95, suffix: '+', label: 'Score Lighthouse' },
            { to: 100, suffix: '%', label: 'Responsive mobile' },
            { to: 14, suffix: 'j', label: 'Délai max de livraison' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className='font-barber text-5xl text-amber-400 sm:text-6xl'>
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className='mt-2 text-sm uppercase tracking-widest text-stone-400'>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-5xl'>
          <Reveal className='mb-14 max-w-2xl'>
            <Eyebrow>La méthode</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              De l’idée au site en ligne
            </h2>
          </Reveal>

          <div className='relative'>
            <div className='absolute left-7 top-0 h-full w-px bg-linear-to-b from-amber-400/60 via-stone-700 to-transparent md:left-8' />
            <div className='space-y-10'>
              {PROCESS.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <div className='relative flex items-start gap-6 md:gap-8'>
                    <div className='relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-stone-900 font-barber text-2xl text-amber-400 shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)] md:h-16 md:w-16'>
                      {step.step}
                    </div>
                    <div className='pt-2'>
                      <h3 className='mb-2 text-2xl font-bold text-white'>{step.title}</h3>
                      <p className='max-w-2xl leading-relaxed text-stone-400'>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SHOWCASE GALLERY ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-6xl'>
          <Reveal className='mb-14 max-w-2xl'>
            <Eyebrow>L’ambiance</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Un site à la hauteur de votre salon
            </h2>
          </Reveal>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {[
              { src: IMG.ambiance, alt: 'Ambiance barbershop', span: 'col-span-2 row-span-2' },
              { src: IMG.tools, alt: 'Outils de barbier', span: '' },
              { src: IMG.beard, alt: 'Taille de barbe', span: '' },
              { src: IMG.chair, alt: 'Fauteuil de barbier', span: 'col-span-2' },
            ].map((g, i) => (
              <Reveal
                key={i}
                delay={i * 0.07}
                className={cn('group relative overflow-hidden rounded-2xl', g.span)}>
                <div className='relative aspect-square h-full w-full'>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes='(max-width: 768px) 50vw, 25vw'
                    className='object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-stone-950/70 to-transparent' />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-6xl'>
          <Reveal className='mx-auto mb-14 max-w-2xl text-center'>
            <Eyebrow>Les formules</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Un tarif clair, sans surprise
            </h2>
            <p className='mt-4 text-lg text-stone-400'>
              Des prix pensés pour les barbershops indépendants comme pour les enseignes.
            </p>
          </Reveal>

          <div className='grid gap-6 md:grid-cols-3'>
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300',
                    pkg.featured
                      ? 'border-2 border-amber-400/60 bg-linear-to-b from-amber-400/10 to-stone-900/60 shadow-[0_0_40px_-10px_rgba(245,158,11,0.35)] lg:-translate-y-3'
                      : 'border border-stone-800 bg-stone-900/40 hover:border-stone-700',
                  )}>
                  {pkg.featured && (
                    <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-stone-950'>
                      Le plus choisi
                    </span>
                  )}
                  <h3 className='font-barber text-2xl uppercase tracking-wide text-white'>
                    {pkg.name}
                  </h3>
                  <p className='mt-1 text-sm text-stone-400'>{pkg.tagline}</p>
                  <div className='mt-5 font-barber text-5xl text-amber-400'>{pkg.price}</div>
                  <ul className='mt-7 mb-8 flex-1 space-y-3'>
                    {pkg.features.map((feat) => (
                      <li key={feat} className='flex items-start gap-3 text-sm text-stone-300'>
                        <Check
                          className='mt-0.5 h-5 w-5 shrink-0 text-amber-400'
                          aria-hidden='true'
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.featured ? (
                    <GoldButton href='/contact' className='w-full'>
                      Choisir Pro
                    </GoldButton>
                  ) : (
                    <GhostButton href='/contact' className='w-full'>
                      Demander un devis
                    </GhostButton>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className='relative border-y border-stone-800 bg-stone-900/40 px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-5xl'>
          <Reveal className='mb-12 text-center'>
            <Eyebrow>Nos engagements</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl'>
              Ce que vous obtenez
            </h2>
            <p className='mt-3 text-sm text-stone-500'>
              Exemples de résultats visés — remplacés par vos vrais témoignages après lancement.
            </p>
          </Reveal>
          <Reveal>
            <AnimatedTestimonials />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ LOCAL SEO ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <Reveal>
              <Eyebrow>SEO local</Eyebrow>
              <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl'>
                Premier sur Google dans tout Lyon
              </h2>
              <div className='mt-5 space-y-4 text-lg leading-relaxed text-stone-400'>
                <p>
                  On optimise votre site pour les recherches{' '}
                  <span className='font-semibold text-amber-300'>
                    « barbershop + votre quartier »
                  </span>
                  . Objectif : apparaître dans le pack local Google Maps et capter les clients à
                  deux rues de votre salon.
                </p>
                <p>
                  Que votre barbershop soit à la Croix-Rousse, sur la Presqu’île ou à Villeurbanne,
                  votre site parle le langage de Google <em>et</em> de vos clients.
                </p>
              </div>
              <div className='mt-8'>
                <GoldButton href='/contact'>
                  Dominer mon quartier
                  <TrendingUp className='h-5 w-5' />
                </GoldButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className='flex flex-wrap gap-3'>
                {QUARTIERS.map((q) => (
                  <span
                    key={q}
                    className='rounded-full border border-stone-700 bg-stone-900/60 px-4 py-2 text-sm font-medium text-stone-300 transition-colors hover:border-amber-400/40 hover:text-amber-200'>
                    <MapPin
                      className='mr-1.5 inline h-3.5 w-3.5 text-amber-400'
                      aria-hidden='true'
                    />
                    {q}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className='relative px-6 py-24 md:px-8 md:py-32'>
        <div className='mx-auto max-w-3xl'>
          <Reveal className='mb-12 text-center'>
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className='mt-4 font-barber text-4xl uppercase tracking-tight text-white sm:text-5xl'>
              On répond à tout
            </h2>
          </Reveal>

          <div className='space-y-4'>
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className='group overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/40 transition-colors hover:border-stone-700 open:border-amber-400/30'>
                  <summary className='flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-stone-100'>
                    <span>{faq.question}</span>
                    <ChevronDown
                      className='h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 group-open:rotate-180'
                      aria-hidden='true'
                    />
                  </summary>
                  <div className='px-6 pb-6 leading-relaxed text-stone-400'>{faq.answer}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className='relative px-6 pb-28 pt-8 md:px-8'>
        <div className='mx-auto max-w-5xl'>
          <Reveal>
            <div className='relative overflow-hidden rounded-3xl border border-amber-400/30 bg-linear-to-br from-stone-900 via-stone-900 to-stone-950 px-8 py-16 text-center md:px-16 md:py-24'>
              <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(245,158,11,0.2),transparent_70%)]' />
              <Scissors className='mx-auto mb-6 h-10 w-10 text-amber-400' aria-hidden='true' />
              <h2 className='font-barber text-4xl uppercase leading-tight tracking-tight text-white sm:text-6xl'>
                Prêt à remplir votre fauteuil&nbsp;?
              </h2>
              <p className='mx-auto mt-5 max-w-2xl text-lg text-stone-300'>
                Recevez votre devis gratuit sous 24h. Sans engagement, sans jargon — juste un site
                qui fait venir des clients.
              </p>
              <div className='mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                <GoldButton href='/contact' ariaLabel='Obtenir mon devis gratuit'>
                  Obtenir mon devis gratuit
                  <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                </GoldButton>
                <GhostButton href='tel:+33626932734'>
                  <Phone className='h-4 w-4' aria-hidden='true' />
                  06 26 93 27 34
                </GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
