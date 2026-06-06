import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: 'signin' | 'signup'
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab = 'signin' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [showVerificationScreen, setShowVerificationScreen] = useState(false)
  const { signIn, signUp } = useAuth()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setShowVerificationScreen(false)
      resetForm()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (activeTab === 'signin') {
        await signIn(email, password)
        onClose()
        resetForm()
      } else {
        await signUp(email, password, fullName)
        setShowVerificationScreen(true)
      }
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setFullName('')
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 relative border border-transparent dark:border-slate-700">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 dark:text-slate-400">
            {activeTab === 'signin'
              ? 'Sign in to access exclusive features'
              : 'Join PGT Global Network today'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-6 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'signin'
                ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'signup'
                ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Verification Screen */}
        {showVerificationScreen ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Check your email
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mb-6">
              We sent a verification link to <strong>{email}</strong>. Please verify your email to continue.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name — signup only */}
              {activeTab === 'signup' && (
                <div>
                  <label
                    htmlFor="signup-fullname"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
                    <input
                      id="signup-fullname"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  htmlFor={activeTab === 'signin' ? 'signin-email' : 'signup-email'}
                  className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
                  <input
                    id={activeTab === 'signin' ? 'signin-email' : 'signup-email'}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor={activeTab === 'signin' ? 'signin-password' : 'signup-password'}
                  className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
                  <input
                    id={activeTab === 'signin' ? 'signin-password' : 'signup-password'}
                    name="password"

                    type="password"
                    autoComplete={activeTab === 'signin' ? 'current-password' : 'new-password'}

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                    minLength={6}
                  />

                  <button 
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-grey-600 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : (activeTab === 'signin' ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            {/* Footer link */}
            <div className="mt-6 text-center text-sm text-gray-600 dark:text-slate-400">
              {activeTab === 'signin' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => setActiveTab('signup')}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Sign up here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setActiveTab('signin')}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Sign in here
                  </button>
                </>
              )}
            </div>
          </>
        )}

      </div>
    </div>,
    document.body
  )
}

export default AuthModal