-- Create quiz_submissions table
CREATE TABLE IF NOT EXISTS quiz_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL,
  archetype TEXT NOT NULL,
  answers INTEGER[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Add constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_archetype CHECK (archetype IN ('Drift Sailor', 'Tide Navigator', 'Deckhand Builder', 'Lighthouse Operator'))
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_email ON quiz_submissions(email);

-- Disable RLS for now since this is a public form
ALTER TABLE quiz_submissions DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Allow public inserts" ON quiz_submissions;
DROP POLICY IF EXISTS "Allow select from authenticated users" ON quiz_submissions; 