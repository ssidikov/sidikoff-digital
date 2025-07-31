
import { Contact } from '@/sections'
import { defaultLocale } from '@/lib/i18n'
import { Footer } from '@/components/Footer'
import { getDictionary } from '@/lib/dictionaries'
import { Header } from '@/components/Header'
import LocaleProvider from '@/components/LocaleProvider'



export default async function ContactPage() {
  const dictionary = await getDictionary(defaultLocale)
  
  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <Header locale={defaultLocale} dictionary={dictionary} />
        <main className='m-0 p-0'>
          <Contact dictionary={dictionary.contact} locale={defaultLocale} className='pt-[140px]' />
        </main>
        <Footer dictionary={dictionary} locale={defaultLocale} />
      </div>
    </LocaleProvider>
  )
}
