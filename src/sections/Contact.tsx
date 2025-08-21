'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Section from '@/components/ui/Section'
import { cardStyles } from '@/utils/styles'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactDictionary {
  title?: string
  subtitle?: string
  quickContact?: string
  social?: string
  socialDesc?: string
  form?: {
    title?: string
    name?: { label?: string; placeholder?: string }
    email?: { label?: string; placeholder?: string }
    message?: { label?: string; placeholder?: string }
    submit?: string
    sending?: string
    success?: string
    success_description?: string
    error?: string
    error_description?: string
  }
  info?: {
    title?: string
    localisations?: string
    locations?: string[]
    phone_label?: string
    email_label?: string
    phone?: string
    email?: string
  }
  channels?: {
    email?: string
    whatsapp?: string
    telegram?: string
    phone?: string
  }
}

interface ContactProps {
  className?: string
  dictionary?: ContactDictionary
  locale?: string
}

const Contact = ({ className, dictionary, locale = 'fr' }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Reset submit status after 3 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }

    return undefined
  }, [submitStatus])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
          throw new Error('Tous les champs sont requis')
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
          throw new Error('Adresse email invalide')
        }

        // Create form data for submission
        const submitData = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }

        // Here you can add your actual form submission logic
        // For example, sending to your backend API:
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...submitData,
            locale: locale || 'fr', // Use dynamic locale
          }),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || "Erreur lors de l'envoi du message")
        }

        // Email sent successfully

        // Mark as successful
        setSubmitStatus('success')

        // Reset form
        setFormData({ name: '', email: '', message: '' })

        // Remove alert and let the UI notification handle success message
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus('error')

        // Error will be shown in UI notification below the button
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, locale]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  return (
    <Section
      id='contact'
      variant='contact'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      className={className || ''}>
      <div className='relative z-10'>
        {/* Mobile Title Section - Above everything on mobile */}
        <div className='mb-8 lg:hidden'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#112D4E] mb-4'>
            {dictionary?.title || 'Prenez Contact'}
          </h2>
          <p className='text-xl text-[#3377FF] mb-6 font-semibold'>
            {dictionary?.subtitle || 'Prêt à Commencer Votre Projet ?'}
          </p>
        </div>

        {/* Layout: Form First on Mobile, Text Left on Desktop */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left Side - Text Information (Second on mobile, First on desktop) */}
          <div className='space-y-8 order-2 lg:order-1'>
            {/* Section Title - Hidden on mobile, shown on desktop */}
            <div className='hidden lg:block'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6'>
                {dictionary?.title || 'Contactez-Nous'}
              </h2>
              <p className='text-xl text-[#3377FF] mb-4 font-semibold'>
                {dictionary?.subtitle || 'Prêt à Commencer Votre Projet ?'}
              </p>
            </div>

            {/* Contact Rapide Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                {dictionary?.quickContact || 'Contact Rapide'}
              </h3>

              {/* Contact Channels - Icons with direct links */}
              <div className='space-y-4 lg:space-y-6'>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <div className='flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gray-900 rounded-xl shadow-lg hover:bg-[#3377FF] transition-colors duration-300'>
                    <Mail className='w-6 h-6 lg:w-8 lg:h-8 text-white' />
                  </div>
                  <a
                    href='mailto:s.sidikoff@gmail.com'
                    className='text-lg lg:text-xl xl:text-2xl text-gray-600 hover:text-[#3377FF] transition-colors duration-200 font-medium break-all'>
                    s.sidikoff@gmail.com
                  </a>
                </div>

                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <div className='flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gray-900 rounded-xl shadow-lg hover:bg-[#3377FF] transition-colors duration-300'>
                    <svg className='w-6 h-6 lg:w-8 lg:h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488' />
                    </svg>
                  </div>
                  <a
                    href='https://wa.me/+33626932734'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg lg:text-xl xl:text-2xl text-gray-600 hover:text-[#3377FF] transition-colors duration-200 font-medium'>
                    +33 6 26 93 27 34
                  </a>
                </div>

                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <div className='flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gray-900 rounded-xl shadow-lg hover:bg-[#3377FF] transition-colors duration-300'>
                    <svg className='w-6 h-6 lg:w-8 lg:h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                    </svg>
                  </div>
                  <a
                    href='https://t.me/sardorbek_sidikov'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg lg:text-xl xl:text-2xl text-gray-600 hover:text-[#3377FF] transition-colors duration-200 font-medium'>
                    @sardorbek_sidikov
                  </a>
                </div>

                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <div className='flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gray-900 rounded-xl shadow-lg hover:bg-[#3377FF] transition-colors duration-300'>
                    <svg
                      className='w-6 h-6 lg:w-8 lg:h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
                      />
                    </svg>
                  </div>
                  <a
                    href='tel:+33626932734'
                    className='text-lg lg:text-xl xl:text-2xl text-gray-600 hover:text-[#3377FF] transition-colors duration-200 font-medium'>
                    +33 6 26 93 27 34
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (First on mobile, Second on desktop) */}
          <div className={`p-8 lg:p-10 ${cardStyles.card} relative overflow-hidden order-1 lg:order-2`}>
            <div className='mb-8'>
              <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-2'>
                {dictionary?.form?.title || 'Envoyez-nous un message'}
              </h3>
              <p className='text-gray-500 text-sm'>Nous répondons généralement sous 24h</p>
            </div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name || ''}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
                  placeholder={dictionary?.form?.name?.placeholder || 'Entrez votre nom complet'}
                />
              </div>

              <div>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
                  placeholder={dictionary?.form?.email?.placeholder || 'votre@email.com'}
                />
              </div>

              <div>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 resize-none bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
                  placeholder={
                    dictionary?.form?.message?.placeholder || 'Parlez-nous de votre projet...'
                  }
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#3377FF] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base'>
                {isSubmitting ? (
                  <span className='flex items-center justify-center'>
                    <div className='animate-spin mr-2 h-4 w-4 border-2 border-white/30 border-t-white rounded-full'></div>
                    {dictionary?.form?.sending || 'Envoi en cours...'}
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className='flex items-center justify-center'>
                    <CheckCircle className='w-4 h-4 mr-2' />
                    {dictionary?.form?.success || 'Message envoyé !'}
                  </span>
                ) : submitStatus === 'error' ? (
                  <span className='flex items-center justify-center'>
                    <AlertCircle className='w-4 h-4 mr-2' />
                    Réessayer
                  </span>
                ) : (
                  dictionary?.form?.submit || 'Envoyer le Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
