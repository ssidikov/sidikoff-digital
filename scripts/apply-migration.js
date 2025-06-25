// Apply database migration: Remove image_url and add payment_status
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

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

    // Read migration file
    const migrationSQL = fs.readFileSync('./database/migration-projects.sql', 'utf8')

    // Split by semicolon and execute each statement
    const statements = migrationSQL
      .split(';')
      .map((stmt) => stmt.trim())
      .filter((stmt) => stmt.length > 0)

    console.log(`Executing ${statements.length} migration statements...`)

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i]
      console.log(`${i + 1}. Executing: ${statement.substring(0, 50)}...`)

      const { error } = await supabase.rpc('exec_sql', { sql: statement })

      if (error) {
        console.error(`Error executing statement ${i + 1}:`, error)
        // Continue with other statements
      } else {
        console.log(`✓ Statement ${i + 1} executed successfully`)
      }
    }

    // Verify the changes
    console.log('\nVerifying migration...')
    const { data: projects, error } = await supabase
      .from('projects')
      .select('id, title, payment_status')
      .limit(5)

    if (error) {
      console.error('Error verifying migration:', error)
    } else {
      console.log('Migration verification - sample projects:')
      projects?.forEach((project) => {
        console.log(`- ${project.title}: payment_status = ${project.payment_status}`)
      })
    }

    console.log('\nMigration completed!')
  } catch (error) {
    console.error('Migration error:', error)
  }
}

applyMigration()
