import { Services } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('fr')
  
  return {
    title: dictionary.services.title,
    description: dictionary.services.subtitle,
  }
}

export default async function ServicesPage() {
  const dictionary = await getDictionary('fr')
  
  return <Services dictionary={dictionary.services} locale="fr" className="pt-[140px]" />
}
