import { fallbackDictionary } from '@/lib/fallback-dictionary'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import LocaleProvider from '@/components/LocaleProvider'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const locale = defaultLocale

  try {
    const dict = await getDictionary(locale)

    return (
      <LocaleProvider locale={locale}>
        <div className='min-h-screen' suppressHydrationWarning>
          <Header locale={locale} dictionary={dict} />
          <main className='m-0 p-0'>{children}</main>
          <Footer dictionary={dict} locale={locale} />
        </div>
      </LocaleProvider>
    )
  } catch {
    return (
      <LocaleProvider locale={locale}>
        <div className='min-h-screen' suppressHydrationWarning>
          <Header locale={locale} dictionary={fallbackDictionary} />
          <main className='m-0 p-0'>{children}</main>
          <Footer dictionary={fallbackDictionary} locale={locale} />
        </div>
      </LocaleProvider>
    )
  }
}
