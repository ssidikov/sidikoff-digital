'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Section, { SectionHeader } from '@/components/ui/Section'

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

        console.log('Email sent successfully:', result)

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
      id="contact"
      background="pattern"
      padding="lg"
      contentWidth="wide"
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#f8fafc',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y'
      }}
      className={className || ''}
    >
      <SectionHeader
        title={dictionary?.title || 'Prenez Contact'}
        subtitle={dictionary?.subtitle || 'Prêt à Commencer Votre Projet ?'}
        titleId="contact-title"
        className="text-left mb-20"
      />

      <div className='grid lg:grid-cols-5 gap-8'>
          {/* Contact Form */}
          <div className='lg:col-span-3'>
            <div
              className='bg-white shadow-gray-900/5 p-10 h-full rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(16px) saturate(100%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
              }}>
              <div className='flex items-center mb-8'>
                <div className='w-2 h-8 bg-black rounded-full mr-4'></div>
                <h3 className='text-3xl font-bold text-gray-900'>
                  {dictionary?.form?.title || 'Envoyez-nous un message'}
                </h3>
              </div>
              <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='group'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                      {dictionary?.form?.name?.label || 'Nom Complet'}
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-6 py-4 focus:bg-white focus:border-black focus:outline-none text-gray-900 placeholder-gray-400 bg-white/70 border-2 hover:border-black p-6 rounded-2xl transition-all duration-300 overflow-hidden border-gray-400/30'
                      placeholder={
                        dictionary?.form?.name?.placeholder || 'Entrez votre nom complet'
                      }
                    />
                  </div>
                  <div className='group'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                      {dictionary?.form?.email?.label || 'Adresse Email'}
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-6 py-4 focus:bg-white focus:border-black focus:outline-none text-gray-900 placeholder-gray-400 bg-white/70 border-2 hover:border-black p-6 rounded-2xl transition-all duration-300 overflow-hidden border-gray-400/30'
                      placeholder={
                        dictionary?.form?.email?.placeholder || 'Entrez votre adresse email'
                      }
                    />
                  </div>
                </div>
                <div className='group'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                    {dictionary?.form?.message?.label || 'Message'}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-6 py-4 resize-none focus:bg-white focus:border-black focus:outline-none text-gray-900 placeholder-gray-400 bg-white/70 border-2 hover:border-black p-6 rounded-2xl transition-all duration-300 overflow-hidden border-gray-400/30'
                    placeholder={
                      dictionary?.form?.message?.placeholder || 'Parlez-nous de votre projet...'
                    }
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full font-medium whitespace-nowrap rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 group relative border transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] text-lg 3xl:text-xl px-6 lg:px-8 ${
                    submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700 text-white border-green-600'
                      : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700 text-white border-red-600'
                        : 'bg-black hover:bg-transparent text-white hover:text-black border-black'
                  }`}>
                  <span className='relative flex items-center justify-center'>
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-current'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'>
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                        {dictionary?.form?.sending || 'Envoi en cours...'}
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Message Envoyé!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Réessayer
                      </>
                    ) : (
                      <>
                        {dictionary?.form?.submit || 'Envoyer le Message'}
                        <svg
                          className='ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                {/* Success/Error Notification */}
                {submitStatus !== 'idle' && (
                  <div
                    className={`mt-4 p-4 rounded-2xl border transition-all duration-500 transform animate-in slide-in-from-bottom-2 ${
                      submitStatus === 'success'
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                    style={{
                      background:
                        submitStatus === 'success'
                          ? 'rgba(34, 197, 94, 0.15)'
                          : 'rgba(239, 68, 68, 0.15)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      border:
                        submitStatus === 'success'
                          ? '1px solid rgba(34, 197, 94, 0.3)'
                          : '1px solid rgba(239, 68, 68, 0.3)',
                      boxShadow:
                        submitStatus === 'success'
                          ? '0 4px 16px rgba(34, 197, 94, 0.2)'
                          : '0 4px 16px rgba(239, 68, 68, 0.2)',
                    }}>
                    <div className='flex items-start space-x-3'>
                      <div className='flex-shrink-0'>
                        {submitStatus === 'success' ? (
                          <svg
                            className='w-5 h-5 text-green-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        ) : (
                          <svg
                            className='w-5 h-5 text-red-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path
                              fillRule='evenodd'
                              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            />
                          </svg>
                        )}
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h4 className='text-sm font-semibold mb-1'>
                          {submitStatus === 'success'
                            ? dictionary?.form?.success || 'Message envoyé avec succès !'
                            : dictionary?.form?.error || "Erreur lors de l'envoi du message"}
                        </h4>
                        <p className='text-sm opacity-90'>
                          {submitStatus === 'success'
                            ? dictionary?.form?.success_description ||
                              'Votre message a été envoyé avec succès. Vous recevrez bientôt un email de confirmation.'
                            : dictionary?.form?.error_description ||
                              "Une erreur s'est produite. Veuillez vérifier vos informations et réessayer."}
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className='flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'>
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Quick Contact */}
            <div
              className='bg-white shadow-gray-900/5 p-8 rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(16px) saturate(100%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
              }}>
              <div className='flex items-center mb-6'>
                <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {dictionary?.quickContact || 'Contact Rapide'}
                </h3>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='mailto:s.sidikoff@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50/50 hover:bg-black border-2 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden border-white/70'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                    <polyline points='22,6 12,13 2,6' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.email || 'Email'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='https://wa.me/+33626932734'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50/50 hover:bg-black border-2 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden border-white/70'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.whatsapp || 'WhatsApp'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='https://t.me/sardorbek_sidikov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50/50 hover:bg-black border-2 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden border-white/70'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.telegram || 'Telegram'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='tel:+33 6 26 93 27 34'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50/50 hover:bg-black border-2 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden border-white/70'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.phone || 'Téléphone'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className='bg-white shadow-gray-900/5 p-8 rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(16px) saturate(100%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
              }}>
              <div className='flex items-center mb-6'>
                <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {dictionary?.info?.title || 'Informations de Contact'}
                </h3>
              </div>
              <div className='space-y-6'>
                <div className='group flex items-start space-x-4 p-4 hover:bg-gray-50/20 transition-colors duration-200 border border-white/70 rounded-xl pb-5 sm:pb-6 3xl:pb-8'>
                  <div className='flex-shrink-0 w-12 h-12 bg-white/70 border border-gray-500/20 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                      <circle cx='12' cy='10' r='3' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.localisations || 'Localisations'}
                    </h4>
                    <p className='text-gray-600 break-words'>
                      {dictionary?.info?.locations
                        ? dictionary.info.locations.join(' | ')
                        : 'Paris, France | Toulouse, France'}
                    </p>
                  </div>
                </div>
                <div className='group flex items-start space-x-4 p-4 hover:bg-gray-50/20 transition-colors duration-200 border border-white/70 rounded-xl pb-5 sm:pb-6 3xl:pb-8'>
                  <div className='flex-shrink-0 w-12 h-12 bg-white/70 border border-gray-500/20 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.phone_label || 'Téléphone'}
                    </h4>
                    <a
                      href='tel:+33 6 26 93 27 34'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 hover:text-black transition-colors duration-200 break-words'>
                      {dictionary?.info?.phone || '+33 6 26 93 27 34'}
                    </a>
                  </div>
                </div>
                <div className='group flex items-start space-x-4 p-4 hover:bg-gray-50/20 transition-colors duration-200 border border-white/70 rounded-xl pb-5 sm:pb-6 3xl:pb-8'>
                  <div className='flex-shrink-0 w-12 h-12 bg-white/70 border border-gray-500/20 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                      <polyline points='22,6 12,13 2,6' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.email_label || 'Email'}
                    </h4>
                    <a
                      href='mailto:s.sidikoff@gmail.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 hover:text-black transition-colors duration-200 break-words'>
                      {dictionary?.info?.email || 's.sidikoff@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Contact
