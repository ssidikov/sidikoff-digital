'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  Search,
  Palette,
  Clock,
  CheckCircle,
  Globe2,
} from 'lucide-react'

export function Yandex360Bento() {
  const [activeTheme, setActiveTheme] = useState<'cyan' | 'purple' | 'amber' | 'emerald'>('cyan')

  const themeGlows = {
    cyan: 'from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400',
    purple: 'from-purple-500/20 to-indigo-600/20 border-purple-500/30 text-purple-400',
    amber: 'from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-400',
    emerald: 'from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400',
  }

  return (
    <section className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md'>
            <Zap className='h-3.5 w-3.5 text-cyan-400' /> Architecture & Ingénierie
          </span>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'>
            Bento Grid d'
            <span className='bg-gradient-to-r from-cyan-400 via-amber-300 to-purple-400 bg-clip-text text-transparent'>
              Innovations Tech
            </span>
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-gray-400 text-sm md:text-base'>
            Découvrez les standards d'excellence appliqués à chacun de nos projets.
          </p>
        </div>

        {/* Bento Grid */}
        <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {/* BENTO 1: CORE WEB VITALS & SPEED (Large 2 Cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            className='group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-xl md:col-span-2 shadow-[0_10px_40px_rgba(0,240,255,0.1)]'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='rounded-2xl bg-cyan-500/10 p-3 text-cyan-400 border border-cyan-500/30'>
                  <Zap className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>100/100 Core Web Vitals</h3>
                  <p className='text-xs text-gray-400'>Score Google PageSpeed V6</p>
                </div>
              </div>
              <span className='rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30'>
                Ultra Fast
              </span>
            </div>

            <p className='mt-4 text-xs text-gray-300 leading-relaxed'>
              Nos sites sont bâtis avec le framework Next.js 16 et compilés sur le réseau Edge CDN mondial. Résultats : temps de chargement &lt;0.2 seconde, aucune friction et un taux de rebond minimal.
            </p>

            {/* Speed Gauge Simulator */}
            <div className='mt-6 grid grid-cols-3 gap-3 text-center'>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                <div className='text-2xl font-black text-cyan-400'>0.18s</div>
                <div className='text-[10px] text-gray-400 mt-1 uppercase'>LCP (Load)</div>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                <div className='text-2xl font-black text-emerald-400'>0ms</div>
                <div className='text-[10px] text-gray-400 mt-1 uppercase'>FID (Delay)</div>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-3'>
                <div className='text-2xl font-black text-purple-400'>0.00</div>
                <div className='text-[10px] text-gray-400 mt-1 uppercase'>CLS (Shift)</div>
              </div>
            </div>
          </motion.div>

          {/* BENTO 2: DYNAMIC THEME SYSTEM */}
          <motion.div
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-3xl border bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-500 ${themeGlows[activeTheme]}`}
          >
            <div className='flex items-center gap-3'>
              <div className='rounded-2xl bg-white/10 p-3 text-white'>
                <Palette className='h-6 w-6' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-white'>Design System</h3>
                <p className='text-xs text-gray-400'>Thèmes vivants sur-mesure</p>
              </div>
            </div>

            <p className='mt-4 text-xs text-gray-300'>
              Testez la palette de couleurs dynamique en 1 clic :
            </p>

            <div className='mt-4 flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-2'>
              {(['cyan', 'purple', 'amber', 'emerald'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t)}
                  className={`h-8 w-8 rounded-xl transition-all ${
                    t === 'cyan'
                      ? 'bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                      : t === 'purple'
                      ? 'bg-purple-500 shadow-[0_0_10px_rgba(112,0,255,0.8)]'
                      : t === 'amber'
                      ? 'bg-amber-400 shadow-[0_0_10px_rgba(255,184,0,0.8)]'
                      : 'bg-emerald-400 shadow-[0_0_10px_rgba(0,255,148,0.8)]'
                  } ${activeTheme === t ? 'scale-110 ring-2 ring-white' : 'opacity-60 hover:opacity-100'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* BENTO 3: SECURITY & RGPD */}
          <motion.div
            whileHover={{ y: -4 }}
            className='group relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-6 backdrop-blur-xl'
          >
            <div className='flex items-center gap-3'>
              <div className='rounded-2xl bg-emerald-500/10 p-3 text-emerald-400 border border-emerald-500/30'>
                <Shield className='h-6 w-6' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-white'>Sécurité & RGPD</h3>
                <p className='text-xs text-gray-400'>Normes Européennes</p>
              </div>
            </div>

            <p className='mt-4 text-xs text-gray-300 leading-relaxed'>
              Protection DDoS cloudflare, SSL Wildcard, données hébergées en France/UE et conformité RGPD intégrée dès la conception.
            </p>

            <div className='mt-4 flex items-center gap-2 rounded-xl bg-emerald-950/40 p-2.5 text-xs text-emerald-300 border border-emerald-500/30'>
              <CheckCircle className='h-4 w-4 text-emerald-400' />
              <span>Certifié 100% Conforme RGPD</span>
            </div>
          </motion.div>

          {/* BENTO 4: SEO RICH SNIPPETS (2 COLS) */}
          <motion.div
            whileHover={{ y: -4 }}
            className='group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/60 p-6 backdrop-blur-xl md:col-span-2'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='rounded-2xl bg-purple-500/10 p-3 text-purple-400 border border-purple-500/30'>
                  <Search className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>Google Rich Snippets JSON-LD</h3>
                  <p className='text-xs text-gray-400'>Affichage Étoiles & Extraits Enrichis SERP</p>
                </div>
              </div>
              <span className='rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-500/30'>
                Google Ready
              </span>
            </div>

            {/* Google SERP Previewer */}
            <div className='mt-6 rounded-2xl border border-white/10 bg-slate-950 p-4 font-sans text-xs'>
              <div className='text-[11px] text-gray-400 flex items-center gap-1'>
                <Globe2 className='h-3.5 w-3.5 text-blue-400' /> https://www.sidikoff.com › agence-web-lyon
              </div>
              <div className='mt-1 text-sm font-bold text-blue-400 hover:underline cursor-pointer'>
                Sidikoff Digital | Agence Création Site Internet Lyon & France
              </div>
              <div className='mt-1 flex items-center gap-2 text-amber-400 font-bold text-[11px]'>
                <span>★★★★★ 5.0 (34 avis Google)</span>
                <span className='text-gray-400'>• Devis gratuit sous 24h</span>
              </div>
              <p className='mt-1 text-gray-300 text-[11px] leading-normal'>
                Studio numérique spécialisé en sites web sur-mesure, webapps et SEO à Lyon. Livré en 7 jours.
              </p>
            </div>
          </motion.div>

          {/* BENTO 5: SLA 99.99% UPTIME */}
          <motion.div
            whileHover={{ y: -4 }}
            className='group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-slate-900/60 p-6 backdrop-blur-xl md:col-span-2'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='rounded-2xl bg-amber-500/10 p-3 text-amber-400 border border-amber-500/30'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-white'>Disponibilité & Support 24/7</h3>
                  <p className='text-xs text-gray-400'>Surveillance continue des serveurs</p>
                </div>
              </div>
              <div className='flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30'>
                <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
                <span>Tous Systèmes Opérationnels</span>
              </div>
            </div>

            <p className='mt-4 text-xs text-gray-300 leading-relaxed'>
              Maintenance réactive, sauvegarde quotidienne automatique et assistance prioritaire en direct.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
