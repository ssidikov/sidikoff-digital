import bcrypt from 'bcryptjs'
import { createClient } from '@supabase/supabase-js'

// Create Supabase client with service role key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function setupAdminUser() {
  try {
    const email = 'whrite_your_email@example.com'
    const password = 'admin123!for_example'

    // Hash the password
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // Check if admin user already exists
    const { data: existingUser } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .single()

    if (existingUser) {
      console.log('Admin user already exists')
      return
    }

    // Create admin user
    const { data, error } = await supabase
      .from('admin_users')
      .insert([
        {
          email,
          password_hash: passwordHash,
          name: 'Sardorbek SIDIKOV',
          role: 'admin',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating admin user:', error)
      return
    }

    console.log('Admin user created successfully:', data)
  } catch (error) {
    console.error('Setup error:', error)
  }
}

async function changeAdminPassword() {
  try {
    const email = 'whrite_your_email@example.com' // Change this to your admin email
    const newPassword = 'your_new_password_here' // Change this to your new password

    if (newPassword === 'your_new_password_here') {
      console.error('Please update the newPassword variable with your actual new password')
      return
    }

    // Hash the new password
    const saltRounds = 10
    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds)

    // Update the admin user's password
    const { data, error } = await supabase
      .from('admin_users')
      .update({ 
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString()
      })
      .eq('email', email)
      .select()
      .single()

    if (error) {
      console.error('Error updating admin password:', error)
      return
    }

    if (!data) {
      console.error('Admin user not found with email:', email)
      return
    }

    console.log('Admin password updated successfully for:', email)
    console.log('Updated at:', data.updated_at)
  } catch (error) {
    console.error('Password change error:', error)
  }
}

// Check command line arguments to determine which function to run
const action = process.argv[2]

if (action === 'change-password') {
  changeAdminPassword()
} else if (action === 'setup') {
  setupAdminUser()
} else {
  console.log('Usage:')
  console.log('  npm run setup-admin setup          - Create new admin user')
  console.log('  npm run setup-admin change-password - Change admin password')
  console.log('')
  console.log('Before running, make sure to update the email and password variables in the script')
}
