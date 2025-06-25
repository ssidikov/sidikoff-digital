import { NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'

export async function GET() {
  try {
    await requireAdminAuth()
    const supabase = createAdminClient()

    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
