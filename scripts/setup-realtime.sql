-- Enable real-time for tables
ALTER publication supabase_realtime ADD TABLE contact_submissions;
ALTER publication supabase_realtime ADD TABLE projects;

-- Ensure RLS policies allow real-time subscriptions
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow realtime access to projects" ON projects;
DROP POLICY IF EXISTS "Allow realtime access to contact_submissions" ON contact_submissions;

-- For anonymous users to listen to project changes (if needed for public data)
CREATE POLICY "Allow realtime access to projects" ON projects
  FOR SELECT TO anon, authenticated USING (true);

-- For authenticated users to listen to contact submissions
CREATE POLICY "Allow realtime access to contact_submissions" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- Enable real-time on tables if not already enabled
ALTER TABLE contact_submissions REPLICA IDENTITY FULL;
ALTER TABLE projects REPLICA IDENTITY FULL;

-- Grant necessary permissions
GRANT SELECT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON projects TO anon, authenticated;
