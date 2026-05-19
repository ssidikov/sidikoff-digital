'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  UserCircle,
  Server,
  ShieldCheck,
  Database,
  Cookie
} from 'lucide-react'

// Define the shape of `legal` based on common.json
interface LegalProps {
  title: string
  company_info_title: string
  company_name_label: string
  company_name: string
  company_type_label: string
  company_type: string
  siren_label: string
  siren: string
  address_label: string
  address: string
  phone_label: string
  phone: string
  email_label: string
  email: string
  director_title: string
  director_name: string
  hosting_title: string
  host_label: string
  host: string
  host_address_label: string
  host_address: string
  host_website_label: string
  host_website: string
  ip_title: string
  ip_text: string
  data_title: string
  data_text: string
  cookies_title: string
  cookies_text: string
}

export default function MentionsLegalesContent({ legal }: { legal: LegalProps }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  }

  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Dynamic Header */}
      <div className='relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/50'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-[50%] -left-[10%] w-[70%] h-[150%] rounded-full bg-blue-200/40 blur-[120px] pointer-events-none' />
          <div className='absolute top-[20%] -right-[20%] w-[60%] h-[120%] rounded-full bg-indigo-100/60 blur-[120px] pointer-events-none' />
        </div>
        <div className='container relative z-10 mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1 className='text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight'>
              {legal.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-16 -mt-12 relative z-20'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          {/* Company Information */}
          <motion.section variants={itemVariants} className='md:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden relative group'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500' />
            <h2 className='text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10'>
              <div className='p-3 bg-blue-100 text-blue-600 rounded-xl'>
                <Building2 className='w-6 h-6' />
              </div>
              {legal.company_info_title}
            </h2>

            <div className='grid md:grid-cols-2 gap-8 relative z-10'>
              <div className='space-y-6'>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.company_name_label}
                  </span>
                  <span className='text-lg text-slate-800 font-medium group-hover/item:text-blue-600 transition-colors'>
                    {legal.company_name}
                  </span>
                </div>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.company_type_label}
                  </span>
                  <span className='text-lg text-slate-800 font-medium'>
                    {legal.company_type}
                  </span>
                </div>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.siren_label}
                  </span>
                  <span className='text-lg text-slate-800 font-medium tracking-wide'>
                    {legal.siren}
                  </span>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.address_label}
                  </span>
                  <span className='text-lg text-slate-800 font-medium'>
                    {legal.address}
                  </span>
                </div>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.phone_label}
                  </span>
                  <a href={`tel:${legal.phone.replace(/\s+/g, '')}`} className='text-lg text-slate-800 font-medium hover:text-blue-600 transition-colors inline-block'>
                    {legal.phone}
                  </a>
                </div>
                <div className='group/item'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                    {legal.email_label}
                  </span>
                  <a href={`mailto:${legal.email}`} className='text-lg text-slate-800 font-medium hover:text-blue-600 transition-colors inline-block'>
                    {legal.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Publication Director */}
          <motion.section variants={itemVariants} className='bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-100 transition-colors'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3'>
              <div className='p-3 bg-blue-100 text-blue-600 rounded-xl'>
                <UserCircle className='w-6 h-6' />
              </div>
              {legal.director_title}
            </h2>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl'>
                {legal.director_name.charAt(0)}
              </div>
              <div>
                <p className='text-lg text-slate-800 font-bold'>{legal.director_name}</p>
                <p className='text-sm text-slate-500'>Directeur de la publication</p>
              </div>
            </div>
          </motion.section>

          {/* Hosting */}
          <motion.section variants={itemVariants} className='bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-100 transition-colors'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3'>
              <div className='p-3 bg-blue-100 text-blue-600 rounded-xl'>
                <Server className='w-6 h-6' />
              </div>
              {legal.hosting_title}
            </h2>
            <div className='space-y-5'>
              <div>
                <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                  {legal.host_label}
                </span>
                <span className='text-lg text-slate-800 font-medium'>{legal.host}</span>
              </div>
              <div>
                <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                  {legal.host_address_label}
                </span>
                <span className='text-base text-slate-700 leading-relaxed block'>
                  {legal.host_address}
                </span>
              </div>
              <div>
                <span className='text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1'>
                  {legal.host_website_label}
                </span>
                <a
                  href={`https://${legal.host_website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base text-blue-600 font-medium hover:text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors'>
                  {legal.host_website}
                </a>
              </div>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section variants={itemVariants} className='md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0' />
            <h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10'>
              <div className='p-3 bg-blue-500/20 text-blue-400 rounded-xl'>
                <ShieldCheck className='w-6 h-6' />
              </div>
              {legal.ip_title}
            </h2>
            <p className='text-base text-slate-300 leading-relaxed relative z-10'>
              {legal.ip_text}
            </p>
          </motion.section>

          {/* Data Protection */}
          <motion.section variants={itemVariants} className='bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100'>
            <h2 className='text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3'>
              <div className='p-3 bg-emerald-100 text-emerald-600 rounded-xl'>
                <Database className='w-6 h-6' />
              </div>
              {legal.data_title}
            </h2>
            <p className='text-base text-slate-600 leading-relaxed'>
              {legal.data_text}
            </p>
          </motion.section>

          {/* Cookies */}
          <motion.section variants={itemVariants} className='bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100'>
            <h2 className='text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3'>
              <div className='p-3 bg-amber-100 text-amber-600 rounded-xl'>
                <Cookie className='w-6 h-6' />
              </div>
              {legal.cookies_title}
            </h2>
            <p className='text-base text-slate-600 leading-relaxed'>
              {legal.cookies_text}
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
