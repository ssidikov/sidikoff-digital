import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'

interface Props {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: `${dict.legal.title} | SIDIKOFF DIGITAL- Agence Web`,
    description:
      'Mentions légales et informations légales de Sidikoff, agence web spécialisée dans la création de sites internet et applications.',
    robots: 'noindex, nofollow',
  }
}

export default async function MentionsLegalesPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#F9F7FF] via-[#F9F7FF] to-[#DBE2EF]'>
      <div className='container mx-auto px-4 py-40'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl font-bold text-[#112D4E] mb-6'>
              {dict.legal.title}
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] mx-auto'></div>
          </div>

          {/* Content */}
          <div className='space-y-12'>
            {/* Company Information */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.company_info_title}
              </h2>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.company_name_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>
                      {dict.legal.company_name}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.company_type_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>
                      {dict.legal.company_type}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.siren_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>{dict.legal.siren}</span>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.address_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>{dict.legal.address}</span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.phone_label}
                    </span>
                    <a
                      href={`tel:${dict.legal.phone}`}
                      className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                      {dict.legal.phone}
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {dict.legal.email_label}
                    </span>
                    <a
                      href={`mailto:${dict.legal.email}`}
                      className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                      {dict.legal.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Publication Director */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.director_title}
              </h2>
              <p className='text-lg text-[#112D4E] font-medium'>{dict.legal.director_name}</p>
            </section>

            {/* Hosting */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.hosting_title}
              </h2>

              <div className='space-y-4'>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {dict.legal.host_label}
                  </span>
                  <span className='text-lg text-[#112D4E] font-medium'>{dict.legal.host}</span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {dict.legal.host_address_label}
                  </span>
                  <span className='text-lg text-[#112D4E] font-medium'>
                    {dict.legal.host_address}
                  </span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {dict.legal.host_website_label}
                  </span>
                  <a
                    href={`https://${dict.legal.host_website}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                    {dict.legal.host_website}
                  </a>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.ip_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{dict.legal.ip_text}</p>
            </section>

            {/* Data Protection */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.data_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{dict.legal.data_text}</p>
            </section>

            {/* Cookies */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {dict.legal.cookies_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{dict.legal.cookies_text}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
