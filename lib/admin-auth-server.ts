import bcrypt from 'bcryptjs'
import { createAdminClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import type { AdminUser } from './admin-types'

export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  try {
    const supabase = createAdminClient()
    
    // Get user from database
    const { data: user, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !user) {
      console.error('User not found:', error)
      return null
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    if (!isValidPassword) {
      console.error('Invalid password for user:', email)
      return null
    }

    // Update last login
    await supabase
      .from('admin_users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id)

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      last_login: user.last_login,
      created_at: user.created_at
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

export async function setAdminSession(user: AdminUser) {
  const cookieStore = await cookies()
  const sessionData = JSON.stringify(user)
  
  cookieStore.set('admin_session', sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
}

export async function getAdminSession(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('admin_session')
    
    if (!sessionCookie?.value) {
      return null
    }

    const user = JSON.parse(sessionCookie.value) as AdminUser
    return user
  } catch (error) {
    console.error('Session parsing error:', error)
    return null
  }
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}

export async function requireAdminAuth(): Promise<AdminUser> {
  const user = await getAdminSession()
  if (!user) {
    throw new Error('Authentication required')
  }
  return user
}
