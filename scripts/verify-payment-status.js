// Verify if payment_status column was added successfully
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

async function verifyPaymentStatus() {
  try {
    console.log('Verifying payment_status column...')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Check if payment_status column exists and has data
    const { data: projects, error } = await supabase
      .from('projects')
      .select('id, title, payment_status, status, featured')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('❌ Error: payment_status column does not exist yet')
      console.error('Please run the SQL commands in MANUAL_MIGRATION.sql first')
      console.error('Error details:', error.message)
      return
    }

    console.log('✅ payment_status column exists!')
    console.log('\nCurrent projects with payment status:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

    projects?.forEach((project, index) => {
      const paymentIcon =
        {
          completed: '💰',
          pending: '⏳',
          partial: '💸',
          free: '🎁',
          overdue: '🚨',
        }[project.payment_status] || '❓'

      console.log(`${index + 1}. ${paymentIcon} ${project.title}`)
      console.log(
        `   Payment: ${project.payment_status} | Status: ${project.status} | Featured: ${
          project.featured ? 'Yes' : 'No'
        }`
      )
      console.log('')
    })

    console.log('✅ Migration verification complete!')
    console.log('💡 You can now use the admin panel to manage payment statuses.')
  } catch (error) {
    console.error('Verification error:', error)
  }
}

verifyPaymentStatus()
