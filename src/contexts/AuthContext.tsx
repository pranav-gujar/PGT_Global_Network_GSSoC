import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (data: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)

      if (event === 'SIGNED_IN' && session?.user) {
        // Create or update profile with all fields initialized
        const { error } = await supabase
          .from('profiles')
          .upsert({
            id: session.user.id,
            email: session.user.email!,
            full_name: session.user.user_metadata?.full_name || '',
            bio: '',
            location: '',
            website: '',
            avatar_url: '',
            updated_at: new Date().toISOString(),
          })

        if (error) {
          console.error('Error creating or updating profile:', error)
        }
      }
    })

    // Cleanup subscription
    return () => {
      if (subscription) subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Successfully signed in!')
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Account created successfully! Please check your email to verify your account.')
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Successfully signed out!')
    }
  }

  const updateProfile = async (data: any) => {
    if (!user) throw new Error('No user logged in')

    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== null)
    )

    const { error } = await supabase
      .from('profiles')
      .update({
        ...cleanData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)

    if (error) {
      toast.error('Error updating profile')
      throw error
    } else {
      toast.success('Profile updated successfully!')
    }
  }

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
