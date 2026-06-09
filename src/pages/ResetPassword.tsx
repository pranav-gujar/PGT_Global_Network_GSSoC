import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, CheckCircle2, XCircle, AlertCircle, KeyRound, ArrowRight } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)
  const [hasSession, setHasSession] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const { updatePassword, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const verifySession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          setHasSession(true)
        } else {
          setHasSession(false)
        }
      } catch (err) {
        console.error('Error verifying recovery session:', err)
        setHasSession(false)
      } finally {
        setCheckingSession(false)
      }
    }

    if (!authLoading) {
      verifySession()
    }
  }, [authLoading])

  // Password criteria verification
  const isLengthValid = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[^A-Za-z0-9]/.test(password)
  const isPasswordValid = isLengthValid && hasUppercase && hasNumber && hasSpecial

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isPasswordValid) {
      setError('Password does not meet validation requirements.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await updatePassword(password)
      setSuccess(true)
      setTimeout(() => {
        navigate('/dashboard', { replace: true })
      }, 2000)
    } catch (err: any) {
      setError(err.message || 'Failed to update password. Please request another reset link.')
    } finally {
      setLoading(false)
    }
  }

  if (checkingSession || authLoading) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-650 font-semibold">Verifying secure recovery session...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-all duration-300">
        
        {!hasSession ? (
          /* Invalid/Expired Session Card */
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-150 mb-6">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Invalid or Expired Link</h2>
            <p className="text-gray-600 mb-6">
              The password recovery link you clicked is invalid or has expired. Recovery links are single-use only and expire after a short period.
            </p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 min-h-[44px]"
            >
              Go to Homepage
            </button>
          </div>
        ) : success ? (
          /* Success Screen */
          <div className="text-center py-4">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Password Reset Successfully</h2>
            <p className="text-gray-600 mb-6">
              Your password has been securely updated. We are redirecting you to your account dashboard now...
            </p>
            <div className="flex justify-center items-center space-x-2 text-blue-600 font-semibold text-sm">
              <span className="animate-pulse">Loading dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        ) : (
          /* Password Form */
          <>
            <div className="text-center mb-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 mb-4">
                <KeyRound className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Password</h2>
              <p className="text-sm text-gray-500">
                Please enter a secure password for your account. Make sure to use a mix of characters.
              </p>
            </div>

            {error && (
              <div className="flex items-start bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-5" role="alert">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 text-left font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password */}
              <div className="space-y-1">
                <label
                  htmlFor="reset-password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="reset-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="reset-password-checklist"
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Requirements checklist */}
              {password.length > 0 && (
                <div 
                  className="bg-gray-50 p-4 rounded-xl border border-gray-150 text-xs space-y-2.5 transition-all duration-200" 
                  id="reset-password-checklist"
                  role="group"
                  aria-label="Password strength validation checklist"
                >
                  <p className="font-semibold text-gray-700">Password strength requirements:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    <div className="flex items-center space-x-1.5">
                      {isLengthValid ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={isLengthValid ? 'text-green-700 font-medium' : 'text-gray-505'}>
                        Min. 8 characters
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {hasUppercase ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={hasUppercase ? 'text-green-700 font-medium' : 'text-gray-505'}>
                        Uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {hasNumber ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={hasNumber ? 'text-green-700 font-medium' : 'text-gray-505'}>
                        At least 1 number
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {hasSpecial ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={hasSpecial ? 'text-green-700 font-medium' : 'text-gray-505'}>
                        Special character
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Password */}
              <div className="space-y-1">
                <label
                  htmlFor="confirm-reset-password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="confirm-reset-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !isPasswordValid}
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Updating password...</span>
                  </div>
                ) : (
                  'Update Password'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
