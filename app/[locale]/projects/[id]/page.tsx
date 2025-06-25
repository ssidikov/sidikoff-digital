import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio-data'
import ProjectPageClient from './ProjectPageClient'

const locales = ['fr', 'en', 'ru']

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projet non trouvé - SIDIKOFF DIGITAL',
      description: "Le projet demandé n'existe pas. Découvrez nos autres réalisations.",
      robots: 'noindex,nofollow',
    }
  }

  const localeKey = locale as 'fr' | 'en' | 'ru'
  const title = project.title[localeKey] || project.title.fr
  const description = project.description[localeKey] || project.description.fr

  return {
    title: `${title} - Portfolio SIDIKOFF DIGITAL`,
    description: `Découvrez ${title}: ${description} Réalisé par SIDIKOFF DIGITAL, agence web à Paris.`,
    keywords: [
      ...project.technologies,
      'portfolio',
      'projet web',
      'SIDIKOFF DIGITAL',
      'développement web',
      'agence web paris',
    ],
    openGraph: {
      title: `${title} - Portfolio SIDIKOFF DIGITAL`,
      description: description,
      images: [project.image],
      url: `https://www.sidikoff.com/${locale}/projects/${project.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Portfolio SIDIKOFF DIGITAL`,
      description: description,
      images: [project.image],
    },
    alternates: {
      canonical: `https://www.sidikoff.com/${locale}/projects/${project.id}`,
      languages: {
        fr: `https://www.sidikoff.com/fr/projects/${project.id}`,
        en: `https://www.sidikoff.com/en/projects/${project.id}`,
        ru: `https://www.sidikoff.com/ru/projects/${project.id}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function LocaleProjectPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient locale={locale} project={project} />
}
