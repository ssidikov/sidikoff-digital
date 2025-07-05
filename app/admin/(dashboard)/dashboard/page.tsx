import { requireAdminAuth } from '@/lib/admin-auth-server'
import DashboardClient from '@/components/admin/DashboardClient'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  await requireAdminAuth()

  return <DashboardClient />
}
