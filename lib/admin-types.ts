export interface AdminUser {
  id: number
  email: string
  name: string
  role: 'admin' | 'editor'
  last_login?: string
  created_at: string
}
