// Debug script to check database connection and data
import { createAdminClient } from '../utils/supabase/server'

export async function checkDatabaseConnection() {
  try {
    const supabase = createAdminClient()
    
    console.log('🔍 Checking database connection...')
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .select('count(*)')
      .limit(1)
    
    if (testError) {
      console.error('❌ Database connection error:', testError)
      return false
    }
    
    console.log('✅ Database connection successful')
    
    // Get total count of submissions
    const { count: totalCount, error: countError } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true })
    
    if (countError) {
      console.error('❌ Error getting count:', countError)
      return false
    }
    
    console.log(`📊 Total submissions in database: ${totalCount}`)
    
    // Get recent submissions
    const { data: recentSubmissions, error: recentError } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)
    
    if (recentError) {
      console.error('❌ Error getting recent submissions:', recentError)
      return false
    }
    
    console.log(`📄 Recent submissions count: ${recentSubmissions?.length || 0}`)
    
    if (recentSubmissions && recentSubmissions.length > 0) {
      console.log('📝 Sample submission:', {
        id: recentSubmissions[0].id,
        name: recentSubmissions[0].name,
        email: recentSubmissions[0].email,
        created_at: recentSubmissions[0].created_at,
        status: recentSubmissions[0].status
      })
    }
    
    return true
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
    return false
  }
}
