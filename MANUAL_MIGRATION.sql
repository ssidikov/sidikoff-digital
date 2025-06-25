-- SQL commands to add payment_status column to projects table
-- Copy and paste these commands one by one in Supabase SQL Editor

-- 1. Add the payment_status column
ALTER TABLE projects ADD COLUMN payment_status text DEFAULT 'pending' NOT NULL;

-- 2. Add check constraint for valid payment status values
ALTER TABLE projects ADD CONSTRAINT payment_status_check 
  CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue'));

-- 3. Update existing projects with sample payment statuses
UPDATE projects SET payment_status = 'completed' WHERE title ILIKE '%E-commerce%';
UPDATE projects SET payment_status = 'free' WHERE title ILIKE '%Portfolio%';
UPDATE projects SET payment_status = 'partial' WHERE title ILIKE '%Task%';

-- 4. Verify the changes
SELECT id, title, payment_status FROM projects;
