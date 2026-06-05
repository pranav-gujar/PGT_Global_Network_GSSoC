-- Add skills and social links to profiles table
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS skills text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS linkedin_url text,
  ADD COLUMN IF NOT EXISTS github_url text,
  ADD COLUMN IF NOT EXISTS twitter_url text,
  ADD COLUMN IF NOT EXISTS is_admin boolean DEFAULT false;

-- Drop the old select policy that restricted profile access
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;

-- Create a new select policy allowing public view of profiles
CREATE POLICY "Anyone can view profiles"
  ON profiles
  FOR SELECT
  USING (true);

-- Create user_achievements table
CREATE TABLE IF NOT EXISTS user_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  badge_type text NOT NULL, -- e.g. 'gold', 'silver', 'bronze' or icon names
  earned_at timestamptz DEFAULT now()
);

-- Enable RLS on achievements
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Achievements policies
CREATE POLICY "Anyone can view user achievements"
  ON user_achievements
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert achievements"
  ON user_achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can update achievements"
  ON user_achievements
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can delete achievements"
  ON user_achievements
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);
