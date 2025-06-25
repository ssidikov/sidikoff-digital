import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import { notFound } from 'next/navigation'
import ProjectForm from '@/components/admin/ProjectForm'

interface EditProjectProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function EditProject({ params }: EditProjectProps) {
  await requireAdminAuth()
  const { id } = await params
  const supabase = createAdminClient()

  const { data: project, error } = await supabase.from('projects').select('*').eq('id', id).single()

  if (error || !project) {
    notFound()
  }

  return <ProjectForm project={project} isEditing={true} />
}
