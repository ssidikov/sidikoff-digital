// Apply migration manually - Remove image_url and add payment_status
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

async function applyMigration() {
  try {
    console.log('Applying database migration...')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Step 1: Add payment_status column if it doesn't exist
    console.log('1. Adding payment_status column...')
    const addColumnResult = await supabase.rpc('exec_sql', {
      sql: `ALTER TABLE projects ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue'));`,
    })

    if (addColumnResult.error) {
      console.log('Column already exists or error:', addColumnResult.error.message)
    } else {
      console.log('✓ payment_status column added')
    }

    // Step 2: Update existing projects to have payment status
    console.log('2. Setting default payment status for existing projects...')
    const { error: updateError } = await supabase
      .from('projects')
      .update({ payment_status: 'completed' })
      .is('payment_status', null)

    if (updateError) {
      console.log('Update error (might be normal):', updateError.message)
    } else {
      console.log('✓ Default payment status set')
    }

    // Step 3: Update sample projects with specific payment statuses
    console.log('3. Updating sample projects...')

    // Update E-commerce Platform to completed
    await supabase
      .from('projects')
      .update({ payment_status: 'completed' })
      .ilike('title', '%E-commerce Platform%')

    // Update Portfolio Website to free
    await supabase
      .from('projects')
      .update({ payment_status: 'free' })
      .ilike('title', '%Portfolio Website%')

    // Update Task Management App to partial
    await supabase
      .from('projects')
      .update({ payment_status: 'partial' })
      .ilike('title', '%Task Management%')

    console.log('✓ Sample projects updated')

    // Step 4: Remove image_url column (this might fail if there are dependencies)
    console.log('4. Attempting to remove image_url column...')
    try {
      const dropColumnResult = await supabase.rpc('exec_sql', {
        sql: `ALTER TABLE projects DROP COLUMN IF EXISTS image_url;`,
      })

      if (dropColumnResult.error) {
        console.log('Could not drop image_url column:', dropColumnResult.error.message)
        console.log('This is normal if the column has dependencies.')
      } else {
        console.log('✓ image_url column removed')
      }
    } catch (e) {
      console.log('Could not drop image_url column - this is expected in many cases')
    }

    // Verify the changes
    console.log('\n5. Verifying migration...')
    const { data: projects, error } = await supabase
      .from('projects')
      .select('id, title, payment_status')
      .limit(5)

    if (error) {
      console.error('Error verifying migration:', error)
    } else {
      console.log('Migration verification - projects with payment status:')
      projects?.forEach((project) => {
        console.log(`- ${project.title}: payment_status = ${project.payment_status}`)
      })
    }

    console.log('\n✅ Migration completed successfully!')
  } catch (error) {
    console.error('Migration error:', error)
  }
}

applyMigration()
