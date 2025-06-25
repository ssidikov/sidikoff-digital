# Database Migration Instructions

Since we can't run the migration automatically, please execute the following SQL commands in your Supabase SQL Editor:

## 1. Add payment_status column to projects table

```sql
ALTER TABLE projects ADD COLUMN payment_status text DEFAULT 'pending'
CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue'));
```

## 2. Update existing projects with payment status

```sql
-- Set default payment status for existing projects
UPDATE projects SET payment_status = 'completed' WHERE payment_status IS NULL;

-- Update sample projects with specific payment statuses
UPDATE projects SET payment_status = 'completed' WHERE title ILIKE '%E-commerce Platform%';
UPDATE projects SET payment_status = 'free' WHERE title ILIKE '%Portfolio Website%';
UPDATE projects SET payment_status = 'partial' WHERE title ILIKE '%Task Management%';
```

## 3. Optional: Remove image_url column (if not needed)

```sql
-- Only run this if you're sure you don't need the image_url column
ALTER TABLE projects DROP COLUMN image_url;
```

## 4. Create index for better performance

```sql
CREATE INDEX IF NOT EXISTS idx_projects_payment_status ON projects(payment_status);
```

## How to execute:

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy and paste each SQL block above
4. Execute them one by one
5. Verify the changes by running: `SELECT id, title, payment_status FROM projects LIMIT 5;`

After running these commands, the admin panel will be able to display and manage payment statuses for projects.
