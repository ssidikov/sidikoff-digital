// Test contact form submission and check database
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

async function checkContactSubmissions() {
  try {
    console.log('Checking contact submissions in database...')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get all contact submissions
    console.log('Querying contact_submissions table...')
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase query error:', error)
      return
    }

    console.log('Contact submissions found:', data?.length || 0)

    if (data && data.length > 0) {
      console.log('\n--- Recent submissions ---')
      data.slice(0, 5).forEach((submission, index) => {
        console.log(`${index + 1}. ${submission.name} (${submission.email})`)
        console.log(`   Created: ${submission.created_at}`)
        console.log(`   Message: ${submission.message?.substring(0, 100)}...`)
        console.log(`   Status: ${submission.status}`)
        console.log('')
      })
    }
  } catch (error) {
    console.error('Test error:', error)
  }
}

checkContactSubmissions()
