import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio-data'
import ProjectPageClient from './ProjectPageClient'

const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id) || null
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: 'Projet non trouvé - SIDIKOFF DIGITAL',
      description: "Le projet demandé n'existe pas. Découvrez nos autres réalisations.",
      robots: 'noindex,nofollow',
    }
  }

  return {
    title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
    description: `Découvrez ${project.title.fr}: ${project.description.fr} Réalisé par SIDIKOFF DIGITAL, agence web à Paris.`,
    keywords: [
      ...project.technologies,
      'portfolio',
      'projet web',
      'SIDIKOFF DIGITAL',
      'développement web',
      'agence web paris',
    ],
    openGraph: {
      title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
      description: project.description.fr,
      images: [project.image],
      url: `https://www.sidikoff.com/projects/${project.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
      description: project.description.fr,
      images: [project.image],
    },
    alternates: {
      canonical: `https://www.sidikoff.com/projects/${project.id}`,
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
