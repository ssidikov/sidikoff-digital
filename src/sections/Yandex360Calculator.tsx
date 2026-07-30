'use client'

import React, { useState } from 'react'
import {
  Sliders,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
} from 'lucide-react'

type ProjectType = 'vitrine' | 'saas' | 'ecommerce' | 'refonte'

interface AddonOption {
  id: string
  label: string
  price: number
  days: number
}

export function Yandex360Calculator() {
  const [projectType, setProjectType] = useState<ProjectType>('vitrine')
  const [pageCount, setPageCount] = useState<number>(5)
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo'])
  const [isExpress, setIsExpress] = useState<boolean>(false)

  const projectBase: Record<ProjectType, { name: string; basePrice: number; baseDays: number }> = {
    vitrine: { name: 'Site Vitrine Next.js', basePrice: 990, baseDays: 5 },
    saas: { name: 'WebApp / SaaS d\'Entreprise', basePrice: 2490, baseDays: 14 },
    ecommerce: { name: 'E-Commerce Sur-Mesure', basePrice: 1890, baseDays: 10 },
    refonte: { name: 'Refonte UI/UX & SEO 360°', basePrice: 1290, baseDays: 7 },
  }

  const addonsList: AddonOption[] = [
    { id: 'seo', label: 'Pack SEO Programmatique & JSON-LD', price: 450, days: 2 },
    { id: 'motion', label: 'Animations 3D & GSAP Awwwards Tier', price: 390, days: 2 },
    { id: 'ai', label: 'Intégration Agent IA Custom (RAG/GPT)', price: 590, days: 3 },
    { id: 'i18n', label: 'Support Multilingue (FR / EN / ES)', price: 350, days: 2 },
  ]

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Calculation Math
  const currentBase = projectBase[projectType]
  const pagesExtra = Math.max(0, pageCount - 5) * 80
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id)
    return sum + (found ? found.price : 0)
  }, 0)
  const addonsDaysTotal = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id)
    return sum + (found ? found.days : 0)
  }, 0)

  const subtotal = currentBase.basePrice + pagesExtra + addonsTotal
  const finalPrice = isExpress ? Math.round(subtotal * 1.25) : subtotal
  const totalDays = Math.max(
    3,
    isExpress
      ? Math.round((currentBase.baseDays + addonsDaysTotal) * 0.65)
      : currentBase.baseDays + addonsDaysTotal
  )

  return (
    <section id='calculator' className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-5xl'>
        {/* Header */}
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md'>
            <Sliders className='h-3.5 w-3.5 text-amber-400' /> Devis Instantané 360°
          </span>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl'>
            Simulez le Budget de{' '}
            <span className='bg-gradient-to-r from-amber-300 via-rose-400 to-purple-400 bg-clip-text text-transparent'>
              Votre Projet Web
            </span>
          </h2>

          <p className='mx-auto mt-4 max-w-xl text-gray-400 text-sm md:text-base'>
            Transparence totale. Obtenez une estimation précise en fonction de vos exigences.
          </p>
        </div>

        {/* Calculator Box */}
        <div className='mt-12 rounded-3xl border border-white/15 bg-slate-900/70 p-6 backdrop-blur-2xl md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
            {/* Left Controls (8 cols) */}
            <div className='space-y-6 lg:col-span-7'>
              {/* Step 1: Project Type Selection */}
              <div>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-400'>
                  1. Type de projet
                </label>
                <div className='mt-3 grid grid-cols-2 gap-3'>
                  {(
                    [
                      { id: 'vitrine', label: 'Site Vitrine 7J' },
                      { id: 'saas', label: 'WebApp / SaaS' },
                      { id: 'ecommerce', label: 'E-Commerce Sur-Mesure' },
                      { id: 'refonte', label: 'Refonte UI/UX 360°' },
                    ] as const
                  ).map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`rounded-2xl border p-4 text-left text-xs font-bold transition-all ${
                        projectType === type.id
                          ? 'border-amber-400 bg-amber-500/10 text-amber-300 shadow-[0_0_20px_rgba(255,184,0,0.2)]'
                          : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Slider for Page Count */}
              <div>
                <div className='flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider'>
                  <span>2. Nombre de pages prévues</span>
                  <span className='text-cyan-400 text-sm font-mono'>{pageCount} Pages</span>
                </div>
                <input
                  type='range'
                  min='1'
                  max='25'
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className='mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-amber-400'
                />
              </div>

              {/* Step 3: Addons Checklist */}
              <div>
                <label className='text-xs font-bold uppercase tracking-wider text-gray-400'>
                  3. Options & Fonctionnalités Avancées
                </label>
                <div className='mt-3 space-y-2'>
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id)
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 text-xs transition-all ${
                          isChecked
                            ? 'border-cyan-500/40 bg-cyan-500/10 text-white'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className='flex items-center gap-3'>
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              isChecked
                                ? 'border-cyan-400 bg-cyan-400 text-black'
                                : 'border-gray-500'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className='h-3.5 w-3.5' />}
                          </span>
                          <span>{addon.label}</span>
                        </div>
                        <span className='font-mono font-bold text-gray-300'>+{addon.price}€</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Step 4: Express Delivery Option */}
              <div className='flex items-center justify-between rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 text-xs'>
                <div className='flex items-center gap-3'>
                  <Zap className='h-5 w-5 text-rose-400 animate-pulse' />
                  <div>
                    <div className='font-bold text-white'>Option Livraison Express</div>
                    <div className='text-gray-400 text-[11px]'>Réduit le délai de fabrication de 35%</div>
                  </div>
                </div>
                <input
                  type='checkbox'
                  checked={isExpress}
                  onChange={(e) => setIsExpress(e.target.checked)}
                  className='h-5 w-5 cursor-pointer accent-rose-500'
                />
              </div>
            </div>

            {/* Right Result Summary Box (5 cols) */}
            <div className='flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 p-6 lg:col-span-5'>
              <div>
                <div className='flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider'>
                  <Sparkles className='h-4 w-4' /> Résumé du Devis
                </div>

                <div className='mt-6 space-y-3 text-xs border-b border-white/10 pb-6'>
                  <div className='flex justify-between text-gray-300'>
                    <span>Formule :</span>
                    <span className='font-bold text-white'>{currentBase.name}</span>
                  </div>
                  <div className='flex justify-between text-gray-300'>
                    <span>Volume de pages ({pageCount}) :</span>
                    <span className='font-mono text-white'>+{pagesExtra}€</span>
                  </div>
                  <div className='flex justify-between text-gray-300'>
                    <span>Options sélectionnées :</span>
                    <span className='font-mono text-white'>+{addonsTotal}€</span>
                  </div>
                  {isExpress && (
                    <div className='flex justify-between text-rose-400 font-bold'>
                      <span>Majoration Express :</span>
                      <span className='font-mono'>+25%</span>
                    </div>
                  )}
                </div>

                {/* Final Estimated Price & Timeline */}
                <div className='mt-6'>
                  <div className='text-xs text-gray-400'>Budget estimé :</div>
                  <div className='mt-1 text-4xl font-black text-amber-300 md:text-5xl font-mono'>
                    {finalPrice} € <span className='text-xs font-normal text-gray-400'>HT</span>
                  </div>

                  <div className='mt-4 flex items-center gap-2 text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-3'>
                    <Clock className='h-4 w-4 text-cyan-400' />
                    <span>Délai estimé : <strong>{totalDays} jours ouvrés</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className='mt-8'>
                <a
                  href='#contact'
                  className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 px-6 py-4 text-sm font-extrabold text-black shadow-[0_0_25px_rgba(255,184,0,0.4)] transition-all hover:scale-105'
                >
                  <span>Bloquer ce Créneau & Réserver</span>
                  <ArrowRight className='h-4 w-4' />
                </a>
                <p className='mt-2 text-center text-[10px] text-gray-400'>
                  Devis officiel et contrat transmis sous 24h sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
