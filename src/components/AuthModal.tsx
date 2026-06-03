import React, { useState } from 'react'
import { X, Mail, Lock, User } from 'lucide-react'
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
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (activeTab === 'signin') {
        await signIn(email, password)
      } else {
        await signUp(email, password, fullName)
      }
      onClose()
      resetForm()
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

  return (
    // Backdrop — black overlay works fine in both modes, no change needed
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">

      {/* Modal panel — was bg-white, now dark:bg-slate-800 with a subtle border in dark mode */}
      <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 relative border border-transparent dark:border-slate-700">

        {/* Close button — hover was only gray-600, now also dark:hover:text-slate-200 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          {/* Heading — was text-gray-900 only, now dark:text-white */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          {/* Subtitle — was text-gray-600 only, now dark:text-slate-400 */}
          <p className="text-gray-600 dark:text-slate-400">
            {activeTab === 'signin'
              ? 'Sign in to access exclusive features'
              : 'Join PGT Global Network today'
            }
          </p>
        </div>

        {/* Tab Switcher */}
        {/* Container — was bg-gray-100 only, now dark:bg-slate-700 */}
        <div className="flex mb-6 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'signin'
                // Active tab — was bg-white text-blue-600, now dark:bg-slate-600 dark:text-blue-400
                ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                // Inactive tab — was text-gray-600 hover:text-gray-900, now dark variants added
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'signup' && (
            <div>
              {/* Label — was text-gray-700 only, now dark:text-slate-300 */}
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                {/* Icon — was text-gray-400 only, now dark:text-slate-500 */}
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
                {/* Input — added dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-500 */}
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>
          </div>

          {/* Submit button — blue on both modes, no change needed */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Please wait...' : (activeTab === 'signin' ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        {/* Footer text — was text-gray-600 only, now dark:text-slate-400 */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-slate-400">
          {activeTab === 'signin' ? (
            <>
              Don't have an account?{' '}
              {/* Link stays text-blue-600 — readable in both modes */}
              <button
                onClick={() => setActiveTab('signup')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setActiveTab('signin')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign in here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthModal