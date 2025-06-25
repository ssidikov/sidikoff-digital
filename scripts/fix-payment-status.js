// Manually add payment_status column to projects table
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

async function addPaymentStatusColumn() {
  try {
    console.log('Adding payment_status column to projects table...')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // First, let's check current table structure
    console.log('1. Checking current projects table structure...')
    const { data: projects, error: selectError } = await supabase
      .from('projects')
      .select('*')
      .limit(1)

    if (selectError) {
      console.error('Error reading projects table:', selectError)
      return
    }

    if (projects && projects.length > 0) {
      console.log('Current project columns:', Object.keys(projects[0]))

      if (projects[0].hasOwnProperty('payment_status')) {
        console.log('✓ payment_status column already exists!')
        return
      }
    }

    console.log('\n2. payment_status column does not exist. Please add it manually in Supabase.')
    console.log('\nTo fix this, follow these steps:')
    console.log('1. Go to your Supabase Dashboard')
    console.log('2. Navigate to Table Editor > projects table')
    console.log('3. Click "Add Column" and add:')
    console.log('   - Name: payment_status')
    console.log('   - Type: text')
    console.log('   - Default value: pending')
    console.log('   - Is nullable: false')
    console.log('\n4. Or use SQL Editor and run this command:')
    console.log(
      "   ALTER TABLE projects ADD COLUMN payment_status text DEFAULT 'pending' NOT NULL;"
    )
    console.log('\n5. Then add the check constraint:')
    console.log(
      "   ALTER TABLE projects ADD CONSTRAINT payment_status_check CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue'));"
    )
  } catch (error) {
    console.error('Error:', error)
  }
}

addPaymentStatusColumn()
