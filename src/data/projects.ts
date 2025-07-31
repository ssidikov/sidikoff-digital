
import enProjects from '../../locales/en/projects.json'
import frProjects from '../../locales/fr/projects.json'
import ruProjects from '../../locales/ru/projects.json'



export type Project = {
  id: string
  title: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  link: string
  category: string
  featured?: boolean
  demo?: string
  github?: string
}

function normalizeProjects(data: unknown[]): Project[] {
  return (Array.isArray(data) ? data : []).filter(
    (p): p is Project =>
      typeof p === 'object' && p !== null && 'id' in p && 'title' in p && 'category' in p
  )
}

export const getProjects = (locale: 'en' | 'fr' | 'ru'): Project[] => {
  switch (locale) {
    case 'fr':
      return normalizeProjects(frProjects as unknown[])
    case 'ru':
      return normalizeProjects(ruProjects as unknown[])
    default:
      return normalizeProjects(enProjects as unknown[])
  }
}

// Export a default projects array for backwards compatibility
export const projects: Project[] = getProjects('fr')
