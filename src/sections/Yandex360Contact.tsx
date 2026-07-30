'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export function Yandex360Contact() {
  const [step, setStep] = useState<number>(1)
  const [projectType, setProjectType] = useState<string>('Site Vitrine Next.js')
  const [budget, setBudget] = useState<string>('1 000€ - 3 000€')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setStatus('submitting')

    const messageText = `
Demande de Projet 360° :
- Type de projet : ${projectType}
- Budget estimé : ${budget}
- Téléphone : ${formData.phone || 'Non renseigné'}
- Détails & Objectifs : ${formData.details || 'Aucun détail supplémentaire'}
    `.trim()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: messageText,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      {/* Background radial glows */}
      <div className='pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-radial from-[#00F0FF]/15 via-[#7000FF]/10 to-transparent blur-[120px]' />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 items-center'>
          {/* Left Info Column (5 cols) */}
          <div className='space-y-6 lg:col-span-5'>
            <span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md'>
              <Sparkles className='h-3.5 w-3.5 text-cyan-400' /> Démarrer Votre Projet
            </span>

            <h2 className='text-3xl font-extrabold tracking-tight md:text-5xl'>
              Parlons de Votre{' '}
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 bg-clip-text text-transparent'>
                Prochain Succès
              </span>
            </h2>

            <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
              Devis personnalisé, audit technique offert et roadmap claire transmis sous 24h.
            </p>

            <div className='space-y-4 pt-4 border-t border-white/10 text-xs md:text-sm text-gray-300'>
              <div className='flex items-center gap-3'>
                <div className='rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400 border border-cyan-500/30'>
                  <Mail className='h-4 w-4' />
                </div>
                <div>
                  <div className='text-gray-400 text-[11px]'>Email direct</div>
                  <a href='mailto:contact@sidikoff.com' className='font-bold hover:text-cyan-400'>
                    contact@sidikoff.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='rounded-xl bg-purple-500/10 p-2.5 text-purple-400 border border-purple-500/30'>
                  <Phone className='h-4 w-4' />
                </div>
                <div>
                  <div className='text-gray-400 text-[11px]'>Téléphone & WhatsApp</div>
                  <a href='tel:+33626932734' className='font-bold hover:text-purple-400'>
                    +33 6 26 93 27 34
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='rounded-xl bg-amber-500/10 p-2.5 text-amber-400 border border-amber-500/30'>
                  <MapPin className='h-4 w-4' />
                </div>
                <div>
                  <div className='text-gray-400 text-[11px]'>Studio & Adresse</div>
                  <div className='font-bold'>Villeurbanne / Lyon, France</div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className='inline-flex items-center gap-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 text-xs text-emerald-400 font-bold'>
              <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
              <span>🟢 2 créneaux de lancement disponibles ce mois-ci</span>
            </div>
          </div>

          {/* Right Form Wizard (7 cols) */}
          <div className='rounded-3xl border border-white/15 bg-slate-900/70 p-6 backdrop-blur-2xl md:p-8 lg:col-span-7 shadow-[0_20px_80px_rgba(0,0,0,0.8)]'>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12 space-y-4'>
                <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400'>
                  <CheckCircle2 className='h-8 w-8' />
                </div>
                <h3 className='text-2xl font-bold text-white'>Message Reçu avec Succès !</h3>
                <p className='text-xs text-gray-300 max-w-md mx-auto'>
                  Merci {formData.name}. Sardor étudie votre demande et vous recontacte d'ici moins
                  de 24h avec un devis détaillé.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Step Indicator */}
                <div className='flex items-center justify-between border-b border-white/10 pb-4 text-xs text-gray-400'>
                  <span>Étape {step} sur 2</span>
                  <div className='flex gap-1'>
                    <span
                      className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-cyan-400' : 'bg-white/10'}`}
                    />
                    <span
                      className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-cyan-400' : 'bg-white/10'}`}
                    />
                  </div>
                </div>

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='space-y-5'>
                    <div>
                      <label className='text-xs font-bold uppercase tracking-wider text-gray-300'>
                        Quel est le type de votre projet ?
                      </label>
                      <div className='mt-3 grid grid-cols-2 gap-2'>
                        {[
                          'Site Vitrine Next.js',
                          'WebApp / SaaS',
                          'E-Commerce Sur-Mesure',
                          'Refonte UI/UX & SEO',
                          'Integration IA & Chatbot',
                        ].map((t) => (
                          <button
                            key={t}
                            type='button'
                            onClick={() => setProjectType(t)}
                            className={`rounded-xl border p-3 text-left text-xs font-bold transition-all ${
                              projectType === t
                                ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                            }`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className='text-xs font-bold uppercase tracking-wider text-gray-300'>
                        Budget approximatif envisagé
                      </label>
                      <div className='mt-3 grid grid-cols-3 gap-2'>
                        {['< 1 000€', '1 000€ - 3 000€', '> 3 000€'].map((b) => (
                          <button
                            key={b}
                            type='button'
                            onClick={() => setBudget(b)}
                            className={`rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                              budget === b
                                ? 'border-purple-400 bg-purple-500/10 text-purple-300'
                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                            }`}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type='button'
                      onClick={() => setStep(2)}
                      className='mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 text-xs font-extrabold text-black hover:bg-cyan-400 transition-all'>
                      <span>Continuer vers les coordonnées</span>
                      <ArrowRight className='h-4 w-4' />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='space-y-4'>
                    <div>
                      <label className='text-xs text-gray-300 font-medium'>
                        Votre Nom Complet *
                      </label>
                      <input
                        type='text'
                        required
                        placeholder='Jean Dupont'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='mt-1 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-white focus:border-cyan-400 focus:outline-none'
                      />
                    </div>

                    <div>
                      <label className='text-xs text-gray-300 font-medium'>
                        Votre Adresse Email *
                      </label>
                      <input
                        type='email'
                        required
                        placeholder='jean@entreprise.com'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className='mt-1 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-white focus:border-cyan-400 focus:outline-none'
                      />
                    </div>

                    <div>
                      <label className='text-xs text-gray-300 font-medium'>
                        Téléphone (optionnel)
                      </label>
                      <input
                        type='tel'
                        placeholder='+33 6 12 34 56 78'
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className='mt-1 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-white focus:border-cyan-400 focus:outline-none'
                      />
                    </div>

                    <div>
                      <label className='text-xs text-gray-300 font-medium'>
                        Détails de votre projet
                      </label>
                      <textarea
                        rows={3}
                        placeholder='Objectifs, fonctionnalités souhaitées, contraintes...'
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className='mt-1 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-white focus:border-cyan-400 focus:outline-none'
                      />
                    </div>

                    <div className='flex gap-3 pt-2'>
                      <button
                        type='button'
                        onClick={() => setStep(1)}
                        className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-gray-400 hover:text-white'>
                        Retour
                      </button>

                      <button
                        type='submit'
                        disabled={status === 'submitting'}
                        className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3 text-xs font-extrabold text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all disabled:opacity-50'>
                        <Send className='h-4 w-4' />
                        <span>
                          {status === 'submitting'
                            ? 'Envoi en cours...'
                            : 'Envoyer ma Demande 360°'}
                        </span>
                      </button>
                    </div>

                    {status === 'error' && (
                      <p className='text-center text-xs text-red-400'>
                        Une erreur est survenue lors de l'envoi. Veuillez réessayer ou envoyer un
                        email à contact@sidikoff.com.
                      </p>
                    )}
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
