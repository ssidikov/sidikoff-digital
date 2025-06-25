-- Migration: Remove image_url and add payment_status to projects table

-- Remove image_url column
ALTER TABLE projects DROP COLUMN IF EXISTS image_url;

-- Add payment_status column
ALTER TABLE projects ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending' 
  CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue'));

-- Update existing projects to have a default payment status
UPDATE projects SET payment_status = 'completed' WHERE payment_status IS NULL;

-- Create index for faster queries on payment_status
CREATE INDEX IF NOT EXISTS idx_projects_payment_status ON projects(payment_status);

-- Update sample data to include payment status
UPDATE projects SET payment_status = 'completed' WHERE title = 'E-commerce Platform';
UPDATE projects SET payment_status = 'free' WHERE title = 'Portfolio Website';
UPDATE projects SET payment_status = 'partial' WHERE title = 'Task Management App';
