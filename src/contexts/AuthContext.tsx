import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<any>
  signOut: () => Promise<void>
  updateProfile: (data: any) => Promise<void>
  resendVerificationEmail: (email: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updatePassword: (password: string) => Promise<void>
  verifyEmailOtp: (email: string, token: string) => Promise<void>
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

  // Handle profile row initialization safely without deadlocking the client
  useEffect(() => {
    const initializeProfile = async () => {
      if (!user) return

      try {
        // Check if profile already exists to avoid overwriting existing data
        const { data: existingProfile, error: fetchError } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', user.id)
          .maybeSingle()

        if (fetchError) {
          console.error('Error checking profile existence:', fetchError)
          return
        }

        if (!existingProfile) {
          // Create the profile row only if it doesn't already exist
          const { error: insertError } = await supabase
            .from('profiles')
            .insert({
              id: user.id,
              email: user.email!,
              full_name: user.user_metadata?.full_name || '',
              bio: '',
              location: '',
              website: '',
              avatar_url: '',
              updated_at: new Date().toISOString(),
            })

          if (insertError) {
            console.error('Error initializing profile:', insertError)
          } else {
            console.log('Profile row successfully initialized for new user')
          }
        }
      } catch (err) {
        console.error('Unexpected error during profile initialization:', err)
      }
    }

    initializeProfile()
  }, [user])

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes synchronously to avoid auth client deadlocks
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
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
    const { data, error } = await supabase.auth.signUp({
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
      if (data.session) {
        toast.success('Successfully registered and signed in!')
      } else {
        toast.success('Account created successfully! Please verify using the OTP code sent to your email.')
      }
      return data
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

  const resendVerificationEmail = async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: window.location.origin
      }
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Verification email resent! Please check your inbox.')
    }
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Password reset email sent! Please check your inbox.')
    }
  }

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Password updated successfully!')
    }
  }

  const verifyEmailOtp = async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'signup'
    })

    if (error) {
      toast.error(error.message)
      throw error
    } else {
      toast.success('Email verified successfully!')
    }
  }

  const updateProfile = async (data: any) => {
    if (!user) throw new Error('No user logged in')

    // Double check that the profile exists before we update it, in case initialization failed
    const { data: existingProfile, error: checkError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .maybeSingle()

    if (checkError) {
      console.error('Error checking profile during update:', checkError)
    } else if (!existingProfile) {
      // Create profile row first if it doesn't exist
      const { error: insertError } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email!,
          full_name: user.user_metadata?.full_name || '',
          bio: '',
          location: '',
          website: '',
          avatar_url: '',
          updated_at: new Date().toISOString(),
        })
      if (insertError) {
        throw insertError
      }
    }

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
    resendVerificationEmail,
    resetPassword,
    updatePassword,
    verifyEmailOtp,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
