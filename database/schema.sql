-- Admin panel database schema for SIDIKOFF DIGITAL

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  description text,
  project_url text,
  github_url text,
  technologies text[], -- Array of technologies used
  category text DEFAULT 'web-development',
  status text DEFAULT 'completed' CHECK (status IN ('in-progress', 'completed', 'archived')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'completed', 'free', 'overdue')),
  featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  project_type text,
  budget text,
  timeline text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived')),
  priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  notes text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create admin_users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL,
  role text DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  last_login timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access to projects
CREATE POLICY "Public can read projects" ON projects
  FOR SELECT TO anon USING (true);

-- Create RLS policies for admin access
CREATE POLICY "Admin full access to projects" ON projects
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Admin full access to contact_submissions" ON contact_submissions
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Admin full access to admin_users" ON admin_users
  FOR ALL TO authenticated USING (true);

-- Create functions for automatic updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample projects data
INSERT INTO projects (title, description, project_url, github_url, technologies, category, payment_status, featured) VALUES
  ('E-commerce Platform', 'Modern e-commerce solution with Next.js and Stripe integration', 'https://example-ecommerce.com', 'https://github.com/sidikoff/ecommerce', ARRAY['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'], 'e-commerce', 'completed', true),
  ('Portfolio Website', 'Creative portfolio website for a design agency', 'https://example-portfolio.com', 'https://github.com/sidikoff/portfolio', ARRAY['React', 'Gatsby', 'GraphQL', 'Styled Components'], 'portfolio', 'free', true),
  ('Task Management App', 'Collaborative task management application', 'https://example-tasks.com', 'https://github.com/sidikoff/tasks', ARRAY['React', 'Node.js', 'MongoDB', 'Socket.io'], 'web-app', 'partial', false);

-- Insert sample contact submissions
INSERT INTO contact_submissions (name, email, phone, company, message, project_type, budget, timeline, priority) VALUES
  ('Jean Dupont', 'jean.dupont@example.com', '+33 6 12 34 56 78', 'Dupont Industries', 'Nous souhaitons créer un site e-commerce pour notre entreprise', 'e-commerce', '5000-10000', '2-3 months', 'high'),
  ('Marie Martin', 'marie.martin@startup.fr', '+33 6 98 76 54 32', 'StartupFR', 'Besoin d''une application web pour la gestion de projets', 'web-app', '10000-20000', '3-4 months', 'medium'),
  ('Pierre Dubois', 'pierre.dubois@gmail.com', '+33 6 11 22 33 44', '', 'Site vitrine pour mon cabinet d''avocats', 'website', '2000-5000', '1-2 months', 'low');

-- Insert default admin user
-- Note: In production, create your admin user with proper credentials
-- Example: INSERT INTO admin_users (email, password_hash, name, role) VALUES
-- ('your-admin@example.com', 'your-hashed-password', 'Your Name', 'admin');
