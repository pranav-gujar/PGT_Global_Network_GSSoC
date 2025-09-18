import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY5MzcyMDAsImV4cCI6MTk2MjUxMzIwMH0.Ek_6dWaWJKdZxE8VJKvKJKvKJKvKJKvKJKvKJKvKJKs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          website: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          user_id: string
          position_title: string
          position_type: 'job' | 'internship'
          application_data: any
          status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          position_title: string
          position_type: 'job' | 'internship'
          application_data: any
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          position_title?: string
          position_type?: 'job' | 'internship'
          application_data?: any
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
      blog_likes: {
        Row: {
          id: string
          user_id: string
          blog_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          blog_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          blog_id?: string
          created_at?: string
        }
      }
      blog_comments: {
        Row: {
          id: string
          user_id: string
          blog_id: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          blog_id: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          blog_id?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      user_activities: {
        Row: {
          id: string
          user_id: string
          activity_type: string
          activity_data: any
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          activity_type: string
          activity_data: any
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          activity_type?: string
          activity_data?: any
          created_at?: string
        }
      }
    }
  }
}