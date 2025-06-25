const { createClient } = require('@supabase/supabase-js')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function applyTrashMigration() {
  console.log('Applying trash functionality migration...')

  try {
    // Check if deleted_at column exists
    console.log('1. Checking if deleted_at column exists...')
    const { data: columns } = await supabase.from('contact_submissions').select('*').limit(1)

    if (columns && columns[0] && 'deleted_at' in columns[0]) {
      console.log('✅ deleted_at column already exists')
    } else {
      console.log('❌ deleted_at column does not exist. Manual migration required.')
      console.log('')
      console.log('Please run the following SQL manually in your Supabase SQL editor:')
      console.log('')
      console.log(
        'ALTER TABLE contact_submissions ADD COLUMN deleted_at timestamp with time zone DEFAULT NULL;'
      )
      console.log('')
      console.log('CREATE INDEX IF NOT EXISTS idx_contact_submissions_deleted_at')
      console.log('ON contact_submissions (deleted_at)')
      console.log('WHERE deleted_at IS NULL;')
      console.log('')
      console.log(
        'ALTER TABLE contact_submissions DROP CONSTRAINT IF EXISTS contact_submissions_status_check;'
      )
      console.log('')
      console.log('ALTER TABLE contact_submissions ADD CONSTRAINT contact_submissions_status_check')
      console.log(
        "CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived', 'trash'));"
      )
      console.log('')
    }

    console.log('2. Testing API endpoints...')

    // Test GET endpoint
    const response = await fetch('http://localhost:3000/api/admin/messages?view=active')
    if (response.ok) {
      console.log('✅ API endpoint accessible')
    } else {
      console.log('⚠️  API endpoint not accessible (server may not be running)')
    }
  } catch (error) {
    console.error('Error:', error.message)
    console.log('')
    console.log('The database migration needs to be applied manually.')
    console.log('Please run the SQL statements shown above in your Supabase dashboard.')
  }
}

applyTrashMigration()
