import frProjects from '../../locales/fr/projects.json'

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
  github?: string
}

function normalizeProjects(data: unknown[]): Project[] {
  return (Array.isArray(data) ? data : []).filter(
    (p): p is Project =>
      typeof p === 'object' && p !== null && 'id' in p && 'title' in p && 'category' in p,
  )
}

export const getProjects = (): Project[] => {
  return normalizeProjects(frProjects as unknown[]).reverse()
}

// Export a default projects array for backwards compatibility
export const projects: Project[] = getProjects()
