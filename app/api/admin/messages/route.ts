import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'

export async function POST(request: NextRequest) {
  try {
    await requireAdminAuth()

    const body = await request.json()
    const { action, messageIds } = body

    if (!action || !messageIds || !Array.isArray(messageIds)) {
      return NextResponse.json(
        { error: 'Action and messageIds array are required' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Check if deleted_at column exists
    let hasDeletedAtColumn = true
    try {
      await supabase.from('contact_submissions').select('deleted_at').limit(1)
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string' &&
        error.message.includes('column') &&
        error.message.includes('does not exist')
      ) {
        hasDeletedAtColumn = false
      }
    }

    if (!hasDeletedAtColumn) {
      return NextResponse.json(
        {
          error:
            'Database migration required. Please apply the trash functionality migration first.',
          migrationRequired: true,
        },
        { status: 400 }
      )
    }

    switch (action) {
      case 'moveToTrash':
        // Soft delete: set deleted_at timestamp
        const { error: moveError } = await supabase
          .from('contact_submissions')
          .update({
            deleted_at: new Date().toISOString(),
            status: 'trash',
            updated_at: new Date().toISOString(),
          })
          .in('id', messageIds)
          .is('deleted_at', null) // Only move items that aren't already deleted

        if (moveError) {
          console.error('Error moving to trash:', moveError)
          return NextResponse.json({ error: 'Failed to move messages to trash' }, { status: 500 })
        }

        return NextResponse.json({
          success: true,
          message: `${messageIds.length} message(s) moved to trash`,
          action: 'moveToTrash',
          count: messageIds.length,
        })

      case 'restore':
        // Restore from trash: remove deleted_at timestamp
        const { error: restoreError } = await supabase
          .from('contact_submissions')
          .update({
            deleted_at: null,
            status: 'new', // Reset to new status when restoring
            updated_at: new Date().toISOString(),
          })
          .in('id', messageIds)
          .not('deleted_at', 'is', null) // Only restore items that are deleted

        if (restoreError) {
          console.error('Error restoring from trash:', restoreError)
          return NextResponse.json(
            { error: 'Failed to restore messages from trash' },
            { status: 500 }
          )
        }

        return NextResponse.json({
          success: true,
          message: `${messageIds.length} message(s) restored from trash`,
          action: 'restore',
          count: messageIds.length,
        })

      case 'permanentDelete':
        // Permanent delete: actually remove from database
        const { error: deleteError } = await supabase
          .from('contact_submissions')
          .delete()
          .in('id', messageIds)
          .not('deleted_at', 'is', null) // Only delete items that are in trash

        if (deleteError) {
          console.error('Error permanently deleting:', deleteError)
          return NextResponse.json(
            { error: 'Failed to permanently delete messages' },
            { status: 500 }
          )
        }

        return NextResponse.json({
          success: true,
          message: `${messageIds.length} message(s) permanently deleted`,
          action: 'permanentDelete',
          count: messageIds.length,
        })

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: moveToTrash, restore, or permanentDelete' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Message management error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    await requireAdminAuth()

    const { searchParams } = new URL(request.url)
    const view = searchParams.get('view') || 'active' // 'active', 'trash', 'all'

    const supabase = createAdminClient()

    // First, check if deleted_at column exists by trying a simple query
    let hasDeletedAtColumn = true
    try {
      await supabase.from('contact_submissions').select('deleted_at').limit(1)
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string' &&
        error.message.includes('column') &&
        error.message.includes('does not exist')
      ) {
        hasDeletedAtColumn = false
      }
    }

    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    // Only filter by deleted_at if the column exists
    if (hasDeletedAtColumn) {
      switch (view) {
        case 'active':
          query = query.is('deleted_at', null)
          break
        case 'trash':
          query = query.not('deleted_at', 'is', null)
          break
        case 'all':
          // No filter, show everything
          break
        default:
          query = query.is('deleted_at', null)
      }
    } else {
      // If no deleted_at column, treat all as active
      if (view === 'trash') {
        return NextResponse.json({
          success: true,
          data: [],
          stats: { active: 0, trash: 0, total: 0 },
          view,
          count: 0,
          warning: 'Migration required: deleted_at column does not exist',
        })
      }
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching messages:', error)
      return NextResponse.json(
        { error: 'Failed to fetch messages: ' + error.message },
        { status: 500 }
      )
    }

    // Get counts for different views
    let stats = { active: 0, trash: 0, total: 0 }

    if (hasDeletedAtColumn) {
      const { data: allData } = await supabase
        .from('contact_submissions')
        .select('id, deleted_at, status')

      stats = {
        active: allData?.filter((item) => item.deleted_at === null).length || 0,
        trash: allData?.filter((item) => item.deleted_at !== null).length || 0,
        total: allData?.length || 0,
      }
    } else {
      // If no deleted_at column, all are active
      stats = {
        active: data?.length || 0,
        trash: 0,
        total: data?.length || 0,
      }
    }

    return NextResponse.json({
      success: true,
      data: data || [],
      stats,
      view,
      count: data?.length || 0,
      migrationStatus: hasDeletedAtColumn ? 'applied' : 'required',
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
