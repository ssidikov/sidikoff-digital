const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

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
    // Read the migration file
    const migrationPath = path.join(__dirname, '../database/add-trash-functionality.sql')
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8')
    
    // Split by semicolon and execute each statement
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))
    
    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`)
      const { error } = await supabase.rpc('exec_sql', { sql: statement })
      
      if (error) {
        if (error.message.includes('already exists') || error.message.includes('does not exist')) {
          console.log(`  → Skipped (already exists or doesn't exist)`)
        } else {
          console.error(`  → Error: ${error.message}`)
        }
      } else {
        console.log(`  → Success`)
      }
    }
    
    // Verify the migration worked
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id, deleted_at')
      .limit(1)
    
    if (error) {
      console.error('Verification failed:', error)
    } else {
      console.log('✅ Migration verification successful - deleted_at column exists')
    }
    
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

applyTrashMigration()
