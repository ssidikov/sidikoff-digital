-- Add trash functionality to contact_submissions table
-- Migration: Add deleted_at column for soft deletes

ALTER TABLE contact_submissions 
ADD COLUMN deleted_at timestamp with time zone DEFAULT NULL;

-- Create index for better performance when filtering non-deleted items
CREATE INDEX IF NOT EXISTS idx_contact_submissions_deleted_at 
ON contact_submissions (deleted_at) 
WHERE deleted_at IS NULL;

-- Update the status check constraint to include 'trash' status
ALTER TABLE contact_submissions 
DROP CONSTRAINT IF EXISTS contact_submissions_status_check;

ALTER TABLE contact_submissions 
ADD CONSTRAINT contact_submissions_status_check 
CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived', 'trash'));

-- Add comments for documentation
COMMENT ON COLUMN contact_submissions.deleted_at IS 'Timestamp when the submission was moved to trash. NULL means not deleted.';
COMMENT ON TABLE contact_submissions IS 'Contact form submissions with soft delete functionality via deleted_at column';
