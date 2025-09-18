/*
  # Authentication and User Management Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `full_name` (text, nullable)
      - `avatar_url` (text, nullable)
      - `bio` (text, nullable)
      - `location` (text, nullable)
      - `website` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `applications`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `position_title` (text)
      - `position_type` (enum: job, internship)
      - `application_data` (jsonb)
      - `status` (enum: pending, reviewed, accepted, rejected)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `blog_likes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `blog_id` (text)
      - `created_at` (timestamp)
    
    - `blog_comments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `blog_id` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `user_activities`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `activity_type` (text)
      - `activity_data` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  bio text,
  location text,
  website text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  position_title text NOT NULL,
  position_type text CHECK (position_type IN ('job', 'internship')) NOT NULL,
  application_data jsonb DEFAULT '{}',
  status text CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_likes table
CREATE TABLE IF NOT EXISTS blog_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  blog_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, blog_id)
);

-- Create blog_comments table
CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  blog_id text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_activities table
CREATE TABLE IF NOT EXISTS user_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  activity_type text NOT NULL,
  activity_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activities ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Applications policies
CREATE POLICY "Users can read own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Blog likes policies
CREATE POLICY "Users can read own likes"
  ON blog_likes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own likes"
  ON blog_likes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Blog comments policies
CREATE POLICY "Anyone can read comments"
  ON blog_comments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own comments"
  ON blog_comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
  ON blog_comments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON blog_comments
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- User activities policies
CREATE POLICY "Users can read own activities"
  ON user_activities
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own activities"
  ON user_activities
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_user_id ON applications(user_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_blog_likes_user_id ON blog_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_blog_likes_blog_id ON blog_likes(blog_id);
CREATE INDEX IF NOT EXISTS idx_blog_comments_user_id ON blog_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_blog_comments_blog_id ON blog_comments(blog_id);
CREATE INDEX IF NOT EXISTS idx_user_activities_user_id ON user_activities(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activities_type ON user_activities(activity_type);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_comments_updated_at
  BEFORE UPDATE ON blog_comments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();