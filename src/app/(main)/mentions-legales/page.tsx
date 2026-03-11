import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: common.legal.title,
    description:
      'Mentions légales et informations légales de Sidikoff, agence web spécialisée dans la création de sites internet et applications.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: createCanonicalUrl('mentions-legales', 'fr'),
      languages: generateAlternateUrls('mentions-legales'),
    },
  }
}

export default function MentionsLegalesPage() {
  const legal = common.legal

  return (
    <div className='min-h-screen bg-linear-to-br from-[#F9F7FF] via-[#F9F7FF] to-[#DBE2EF]'>
      <div className='container mx-auto px-4 py-40'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl font-bold text-[#112D4E] mb-6'>
              {legal.title}
            </h1>
            <div className='w-24 h-1 bg-linear-to-r from-[#3F72AF] to-[#112D4E] mx-auto'></div>
          </div>

          {/* Content */}
          <div className='space-y-12'>
            {/* Company Information */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.company_info_title}
              </h2>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.company_name_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>
                      {legal.company_name}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.company_type_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>
                      {legal.company_type}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.siren_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>{legal.siren}</span>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.address_label}
                    </span>
                    <span className='text-lg text-[#112D4E] font-medium'>{legal.address}</span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.phone_label}
                    </span>
                    <a
                      href={`tel:${legal.phone}`}
                      className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                      {legal.phone}
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                      {legal.email_label}
                    </span>
                    <a
                      href={`mailto:${legal.email}`}
                      className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                      {legal.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Publication Director */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.director_title}
              </h2>
              <p className='text-lg text-[#112D4E] font-medium'>{legal.director_name}</p>
            </section>

            {/* Hosting */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.hosting_title}
              </h2>

              <div className='space-y-4'>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {legal.host_label}
                  </span>
                  <span className='text-lg text-[#112D4E] font-medium'>{legal.host}</span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {legal.host_address_label}
                  </span>
                  <span className='text-lg text-[#112D4E] font-medium'>
                    {legal.host_address}
                  </span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-[#3F72AF] uppercase tracking-wide'>
                    {legal.host_website_label}
                  </span>
                  <a
                    href={`https://${legal.host_website}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg text-[#112D4E] font-medium hover:text-[#3F72AF] transition-colors'>
                    {legal.host_website}
                  </a>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.ip_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{legal.ip_text}</p>
            </section>

            {/* Data Protection */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.data_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{legal.data_text}</p>
            </section>

            {/* Cookies */}
            <section className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-6 flex items-center'>
                <div className='w-8 h-8 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg mr-3'></div>
                {legal.cookies_title}
              </h2>
              <p className='text-lg text-[#112D4E] leading-relaxed'>{legal.cookies_text}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
