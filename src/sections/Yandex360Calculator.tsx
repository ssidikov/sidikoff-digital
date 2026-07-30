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

type ProjectType = 'vitrine' | 'pro' | 'ecommerce' | 'refonte'

interface AddonOption {
  id: string
  label: string
  price: number
  days: number
}

export function Yandex360Calculator() {
  const [projectType, setProjectType] = useState<ProjectType>('vitrine')
  const [pageCount, setPageCount] = useState<number>(1)
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo'])
  const [isExpress, setIsExpress] = useState<boolean>(false)

  const projectBase: Record<
    ProjectType,
    { name: string; basePrice: number; baseDays: number; basePages: number }
  > = {
    vitrine: { name: 'Site Vitrine (1 page)', basePrice: 890, baseDays: 7, basePages: 1 },
    pro: { name: 'Site Pro (3–5 pages)', basePrice: 1890, baseDays: 10, basePages: 5 },
    ecommerce: { name: 'E-Commerce Sur-Mesure', basePrice: 2490, baseDays: 14, basePages: 5 },
    refonte: { name: 'Refonte UI/UX & SEO 360°', basePrice: 1290, baseDays: 7, basePages: 3 },
  }

  const addonsList: AddonOption[] = [
    { id: 'seo', label: 'Pack SEO Local & Schema.org JSON-LD', price: 350, days: 2 },
    { id: 'ai', label: 'Intégration Chatbot / Assistant IA', price: 490, days: 3 },
    { id: 'i18n', label: 'Support Multilingue (FR / EN)', price: 290, days: 2 },
    { id: 'motion', label: 'Animations Sur-Mesure & GSAP', price: 350, days: 2 },
  ]

  const handleProjectTypeChange = (type: ProjectType) => {
    setProjectType(type)
    setPageCount(projectBase[type].basePages)
  }

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentBase = projectBase[projectType]
  const pagesExtra = Math.max(0, pageCount - currentBase.basePages) * 80
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id)
    return sum + (found ? found.price : 0)
  }, 0)
  const addonsDaysTotal = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id)
    return sum + (found ? found.days : 0)
  }, 0)

  const subtotal = currentBase.basePrice + pagesExtra + addonsTotal
  const finalPrice = isExpress ? Math.round(subtotal * 1.2) : subtotal
  const totalDays = Math.max(
    3,
    isExpress
      ? Math.round((currentBase.baseDays + addonsDaysTotal) * 0.65)
      : currentBase.baseDays + addonsDaysTotal
  )

  return (
    <section id='calculator' className='relative bg-[#060812] px-4 py-20 text-white md:py-28 border-t border-white/10'>
      <div className='relative z-10 mx-auto max-w-5xl'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan-300 uppercase'>
            <Sliders className='h-3.5 w-3.5 text-cyan-400' /> Tarification Transparente
          </span>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl'>
            Simulez le Budget de Votre Projet
          </h2>

          <p className='mt-3 text-sm text-gray-400 leading-relaxed'>
            Estimation instantanée alignée sur nos formules officielles. Sans frais cachés.
          </p>
        </div>

        {/* Calculator Box */}
        <div className='mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6 md:p-8 backdrop-blur-xl'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
            {/* Left Controls (7 cols) */}
            <div className='space-y-6 lg:col-span-7'>
              {/* Step 1: Project Type Selection */}
              <div>
                <label className='text-xs font-mono font-semibold uppercase tracking-wider text-gray-400'>
                  1. Formule de base
                </label>
                <div className='mt-3 grid grid-cols-2 gap-2.5'>
                  {(
                    [
                      { id: 'vitrine', label: 'Vitrine (890 €)', desc: '1 page responsive' },
                      { id: 'pro', label: 'Pro (1 890 €)', desc: '3 à 5 pages + SEO' },
                      { id: 'ecommerce', label: 'E-Commerce (2 490 €)', desc: 'Boutique & Stripe' },
                      { id: 'refonte', label: 'Refonte (1 290 €)', desc: 'UI/UX & Vitesse' },
                    ] as const
                  ).map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleProjectTypeChange(type.id)}
                      className={`rounded-xl border p-3.5 text-left transition-all ${
                        projectType === type.id
                          ? 'border-cyan-400 bg-cyan-500/10 text-white'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
                      }`}
                    >
                      <div className='text-xs font-bold'>{type.label}</div>
                      <div className='text-[11px] text-gray-400 mt-0.5'>{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Slider for Page Count */}
              <div>
                <div className='flex items-center justify-between text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider'>
                  <span>2. Volume de pages ({currentBase.basePages} incluse{currentBase.basePages > 1 ? 's' : ''})</span>
                  <span className='text-cyan-400 text-sm font-bold'>{pageCount} Page{pageCount > 1 ? 's' : ''}</span>
                </div>
                <input
                  type='range'
                  min='1'
                  max='20'
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className='mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-cyan-400'
                />
              </div>

              {/* Step 3: Addons Checklist */}
              <div>
                <label className='text-xs font-mono font-semibold uppercase tracking-wider text-gray-400'>
                  3. Options complémentaires
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
                        <div className='flex items-center gap-2.5'>
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              isChecked
                                ? 'border-cyan-400 bg-cyan-400 text-black'
                                : 'border-gray-600'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className='h-3.5 w-3.5' />}
                          </span>
                          <span>{addon.label}</span>
                        </div>
                        <span className='font-mono text-gray-300'>+{addon.price} €</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Step 4: Express Delivery Option */}
              <div className='flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs'>
                <div className='flex items-center gap-2.5'>
                  <Zap className='h-4 w-4 text-amber-400' />
                  <div>
                    <div className='font-semibold text-white'>Option Livraison Express</div>
                    <div className='text-gray-400 text-[11px]'>Délai réduit de 35% (+20% sur total)</div>
                  </div>
                </div>
                <input
                  type='checkbox'
                  checked={isExpress}
                  onChange={(e) => setIsExpress(e.target.checked)}
                  className='h-4 w-4 cursor-pointer accent-cyan-400'
                />
              </div>
            </div>

            {/* Right Summary Box (5 cols) */}
            <div className='flex flex-col justify-between rounded-xl border border-white/10 bg-slate-950 p-6 lg:col-span-5'>
              <div>
                <div className='flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider'>
                  <Sparkles className='h-4 w-4' /> Synthèse Estimative
                </div>

                <div className='mt-5 space-y-2.5 text-xs border-b border-white/10 pb-5'>
                  <div className='flex justify-between text-gray-300'>
                    <span>Formule :</span>
                    <span className='font-semibold text-white'>{currentBase.name}</span>
                  </div>
                  <div className='flex justify-between text-gray-300'>
                    <span>Tarif formule :</span>
                    <span className='font-mono text-white'>{currentBase.basePrice} €</span>
                  </div>
                  {pagesExtra > 0 && (
                    <div className='flex justify-between text-gray-300'>
                      <span>Pages supplémentaires ({pageCount - currentBase.basePages}) :</span>
                      <span className='font-mono text-white'>+{pagesExtra} €</span>
                    </div>
                  )}
                  {addonsTotal > 0 && (
                    <div className='flex justify-between text-gray-300'>
                      <span>Options ({selectedAddons.length}) :</span>
                      <span className='font-mono text-white'>+{addonsTotal} €</span>
                    </div>
                  )}
                  {isExpress && (
                    <div className='flex justify-between text-amber-400 font-semibold'>
                      <span>Majoration Express :</span>
                      <span className='font-mono'>+20%</span>
                    </div>
                  )}
                </div>

                {/* Final Estimated Price & Timeline */}
                <div className='mt-5'>
                  <div className='text-xs text-gray-400 font-mono uppercase'>Budget total estimé :</div>
                  <div className='mt-1 text-3xl font-black text-cyan-400 md:text-4xl font-mono'>
                    {finalPrice} € <span className='text-xs font-normal text-gray-400'>TTC</span>
                  </div>

                  <div className='mt-4 flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-lg p-3'>
                    <Clock className='h-4 w-4 text-cyan-400 shrink-0' />
                    <span>Délai d&apos;exécution : <strong className='text-white'>{totalDays} jours ouvrés</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className='mt-6'>
                <a
                  href='#contact'
                  className='flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-bold text-black transition-all hover:bg-gray-200'
                >
                  <span>Demander Devis Officiel</span>
                  <ArrowRight className='h-4 w-4' />
                </a>
                <p className='mt-2 text-center text-[11px] text-gray-500'>
                  Réponse & devis détaillé sous 24h sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

