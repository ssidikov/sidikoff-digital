'use client'

import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Globe, ShieldCheck } from 'lucide-react'

export function FounderEEATBlock() {
  return (
    <section className='relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24'>
      <div className='mb-12'>
        <span className='text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block'>
          [04] Leadership Technique
        </span>
        <h2 className='text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]'>
          Expertise &amp; Leadership Technique
        </h2>
      </div>

      <div className='bg-[#DBE2EF]/30 p-2.5 rounded-[2rem] border border-[#DBE2EF]/60 hover:shadow-soft-lg transition-all duration-300'>
        <div className='bg-white p-8 md:p-10 rounded-[calc(2rem-0.625rem)] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12'>
          {/* Photo Column */}
          <div className='relative shrink-0 bg-[#DBE2EF]/40 p-1.5 rounded-2xl border border-[#DBE2EF]/80 shadow-soft'>
            <div className='relative h-56 w-40 md:h-72 md:w-56 rounded-xl overflow-hidden bg-white'>
              <Image
                src='/images/sidikov-web.png'
                alt='Sardorbek Sidikov - Fondateur de Sidikoff Digital'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 160px, 224px'
              />
            </div>
            <div
              className='absolute -bottom-2 -right-2 bg-[#3377FF] text-white p-1.5 rounded-full shadow-md border-2 border-white'
              title='Profil vérifié'>
              <ShieldCheck className='h-4 w-4' />
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className='flex-1 text-center md:text-left space-y-4'>
            <div className='space-y-2'>
              <h3 className='text-2xl font-black uppercase tracking-tight text-[#112D4E] font-[family:var(--font-grotesk)]'>
                Sardorbek Sidikov
              </h3>
              <p className='text-sm font-bold uppercase tracking-wider text-[#3377FF]'>
                Développeur Full Stack Senior &amp; Consultant SEO
              </p>
            </div>

            <p className='text-[#112D4E]/85 leading-relaxed text-sm md:text-base font-light max-w-3xl'>
              Passionné par l&apos;ingénierie logicielle et le référencement naturel, je conçois des
              solutions web modernes à haute performance avec React, Next.js et Node.js. À travers
              Sidikoff Digital, j&apos;accompagne les entreprises et indépendants dans la métropole
              lyonnaise et partout en France pour transformer leur présence en ligne en un véritable
              canal d&apos;acquisition client. Chaque projet respecte des standards de performance,
              d&apos;accessibilité et de balisage sémantique stricts.
            </p>

            {/* Links and Professional Profiles */}
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2'>
              <a
                href='https://linkedin.com/in/ssidikov'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#112D4E]/70 hover:text-[#3377FF] hover:border-[#3377FF]/40 transition duration-200 px-4 py-2 rounded-full border border-[#DBE2EF]/80 bg-[#F9F7F7] shadow-soft'>
                <Linkedin className='h-3.5 w-3.5 text-[#3377FF]' />
                LinkedIn
              </a>
              <a
                href='https://github.com/ssidikov'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#112D4E]/70 hover:text-[#3377FF] hover:border-[#3377FF]/40 transition duration-200 px-4 py-2 rounded-full border border-[#DBE2EF]/80 bg-[#F9F7F7] shadow-soft'>
                <Github className='h-3.5 w-3.5 text-[#112D4E]' />
                GitHub
              </a>
              <a
                href='https://www.malt.fr/profile/sardorbeksidikov'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#112D4E]/70 hover:text-[#3377FF] hover:border-[#3377FF]/40 transition duration-200 px-4 py-2 rounded-full border border-[#DBE2EF]/80 bg-[#F9F7F7] shadow-soft'>
                <Globe className='h-3.5 w-3.5 text-[#3377FF]' />
                Profil Malt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
