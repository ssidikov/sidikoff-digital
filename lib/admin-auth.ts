// Re-export types for client components
export type { AdminUser } from './admin-types'

// Client-side utilities (no server dependencies)
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
  return password.length >= 6
}
