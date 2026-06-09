import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle2, XCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: 'signin' | 'signup'
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab = 'signin' }) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup' | 'forgot'>(defaultTab)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [otpCode, setOtpCode] = useState('')
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const [showVerificationScreen, setShowVerificationScreen] = useState(false)
  
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [unconfirmedEmail, setUnconfirmedEmail] = useState<string | null>(null)

  const { signIn, signUp, resendVerificationEmail, resetPassword, verifyEmailOtp } = useAuth()

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const forgotEmailRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Sync active tab to defaultTab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab)
      setError(null)
      setSuccessMessage(null)
      setUnconfirmedEmail(null)
    }
  }, [isOpen, defaultTab])

  // Handle focus lock and ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      
      // Auto-focus logic
      setTimeout(() => {
        if (activeTab === 'signup' && nameInputRef.current) {
          nameInputRef.current.focus()
        } else if (activeTab === 'forgot' && forgotEmailRef.current) {
          forgotEmailRef.current.focus()
        } else if (emailInputRef.current) {
          emailInputRef.current.focus()
        }
      }, 100)
    } else {
      document.body.style.overflow = ''
      setShowVerificationScreen(false)
      resetForm()
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, activeTab, onClose])

  // Handle resend email countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [resendTimer])

  // Password criteria verification
  const isLengthValid = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[^A-Za-z0-9]/.test(password)
  const isPasswordValid = isLengthValid && hasUppercase && hasNumber && hasSpecial

  const formatResendTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFullName('')
    setOtpCode('')
    setShowPassword(false)
    setShowConfirmPassword(false)
    setError(null)
    setSuccessMessage(null)
    setUnconfirmedEmail(null)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
      await verifyEmailOtp(email, otpCode)
      onClose()
      resetForm()
    } catch (err: any) {
      setError(err.message || 'Verification failed. Please check the code and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
    setUnconfirmedEmail(null)

    try {
      if (activeTab === 'signin') {
        await signIn(email, password)
        onClose()
        resetForm()
      } else if (activeTab === 'signup') {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match.')
        }
        if (!isPasswordValid) {
          throw new Error('Password does not meet validation criteria.')
        }
        const data = await signUp(email, password, fullName)
        if (data?.session) {
          onClose()
          resetForm()
        } else {
          setShowVerificationScreen(true)
        }
      } else if (activeTab === 'forgot') {
        await resetPassword(email)
        setSuccessMessage('A password recovery link has been sent to your email address.')
      }
    } catch (err: any) {
      const errMsg = err.message || 'An unexpected error occurred.'
      setError(errMsg)
      if (errMsg.toLowerCase().includes('confirm') || errMsg.toLowerCase().includes('verified')) {
        setUnconfirmedEmail(email)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      })
      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'OAuth initialization failed')
      setLoading(false)
    }
  }

  const handleResendVerification = async () => {
    const targetEmail = unconfirmedEmail || email
    if (!targetEmail) return
    setResendLoading(true)
    setError(null)
    try {
      await resendVerificationEmail(targetEmail)
      setResendTimer(120)
      setSuccessMessage('Verification email has been resent!')
    } catch (err: any) {
      setError(err.message || 'Failed to resend verification email.')
    } finally {
      setResendLoading(false)
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-start md:items-center p-4 overflow-y-auto"
      role="presentation"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-md w-full p-8 relative my-auto shadow-2xl border border-gray-100 transition-all duration-300 transform scale-100 max-h-[95vh] overflow-y-auto flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {showVerificationScreen ? (
          /* OTP Verification Screen */
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-105 mb-6">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h2 id="auth-modal-title" className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h2>
            <p className="text-gray-650 text-sm mb-6 px-2">
              We've sent a 6-digit verification code to <span className="font-semibold text-gray-950 break-all">{email}</span>. Please enter the code below to verify your account.
            </p>
            
            {error && (
              <div className="flex items-start bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6 text-left" role="alert">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            {successMessage && (
              <div className="flex items-start bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-6 text-left" role="alert">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-700 font-medium">{successMessage}</p>
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-5 mb-6">
              <div>
                <label
                  htmlFor="verification-otp"
                  className="block text-xs font-semibold text-gray-750 text-left mb-1.5"
                >
                  6-Digit Verification Code
                </label>
                <input
                  id="verification-otp"
                  type="text"
                  maxLength={6}
                  pattern="\d{6}"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  className="w-full text-center tracking-widest text-2xl font-bold py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[48px]"
                  placeholder="000000"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading || otpCode.length !== 6}
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Verifying...</span>
                  </div>
                ) : (
                  'Verify & Log In'
                )}
              </button>
            </form>

            <div className="space-y-3 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={handleResendVerification}
                disabled={resendLoading || resendTimer > 0}
                className="w-full bg-gray-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 min-h-[44px]"
              >
                {resendLoading ? 'Resending...' : resendTimer > 0 ? `Resend code in ${formatResendTimer(resendTimer)}` : 'Resend Code'}
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setShowVerificationScreen(false)
                  setActiveTab('signin')
                  resetForm()
                }}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-205 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 min-h-[44px]"
              >
                Go to Sign In
              </button>
            </div>
          </div>
        ) : (
          /* Main Auth Forms */
          <>
            {/* Headers */}
            <div className="text-center mb-6">
              <h2 id="auth-modal-title" className="text-2xl font-extrabold text-gray-900 mb-2">
                {activeTab === 'signin' && 'Welcome Back'}
                {activeTab === 'signup' && 'Create Account'}
                {activeTab === 'forgot' && 'Reset Password'}
              </h2>
              <p className="text-sm text-gray-500">
                {activeTab === 'signin' && 'Sign in to access your platform dashboard'}
                {activeTab === 'signup' && 'Join the PGT Global Network community'}
                {activeTab === 'forgot' && 'We\'ll send you instructions to reset your password'}
              </p>
            </div>

            {/* Error & Success Banners */}
            {error && (
              <div className="flex items-start bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-5" role="alert">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div className="flex-1 text-left">
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                  {unconfirmedEmail && (
                    <button
                      type="button"
                      onClick={handleResendVerification}
                      disabled={resendLoading || resendTimer > 0}
                      className="mt-2 text-xs font-bold text-red-700 hover:text-red-900 underline disabled:opacity-50 disabled:no-underline"
                    >
                      {resendLoading ? 'Resending...' : resendTimer > 0 ? `Resend in ${formatResendTimer(resendTimer)}` : 'Resend verification email'}
                    </button>
                  )}
                </div>
              </div>
            )}

            {successMessage && (
              <div className="flex items-start bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-5" role="alert">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-700 text-left font-medium">{successMessage}</p>
              </div>
            )}

            {/* Tab Switcher (Visible only for signin / signup) */}
            {activeTab !== 'forgot' && (
              <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => {
                    setActiveTab('signin')
                    setError(null)
                    setSuccessMessage(null)
                  }}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all min-h-[40px] focus:outline-none ${
                    activeTab === 'signin'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  aria-selected={activeTab === 'signin'}
                  role="tab"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setActiveTab('signup')
                    setError(null)
                    setSuccessMessage(null)
                  }}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-semibold transition-all min-h-[40px] focus:outline-none ${
                    activeTab === 'signup'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  aria-selected={activeTab === 'signup'}
                  role="tab"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Forms */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'signup' && (
                <div>
                  <label
                    htmlFor="signup-fullname"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      ref={nameInputRef}
                      id="signup-fullname"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              {activeTab !== 'forgot' ? (
                <div>
                  <label
                    htmlFor={activeTab === 'signin' ? 'signin-email' : 'signup-email'}
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      ref={activeTab === 'signin' ? emailInputRef : null}
                      id={activeTab === 'signin' ? 'signin-email' : 'signup-email'}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label
                    htmlFor="forgot-email"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      ref={forgotEmailRef}
                      id="forgot-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                      placeholder="Enter recovery email address"
                      required
                    />
                  </div>
                </div>
              )}

              {activeTab !== 'forgot' && (
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor={activeTab === 'signin' ? 'signin-password' : 'signup-password'}
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>
                    {activeTab === 'signin' && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('forgot')
                          setError(null)
                          setSuccessMessage(null)
                        }}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none"
                      >
                        Forgot Password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id={activeTab === 'signin' ? 'signin-password' : 'signup-password'}
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete={activeTab === 'signin' ? 'current-password' : 'new-password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-describedby={activeTab === 'signup' ? 'password-checklist' : undefined}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                      placeholder="Enter your password"
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
              )}

              {activeTab === 'signup' && (
                <>
                  {/* Password Strength Checklist */}
                  {password.length > 0 && (
                    <div 
                      className="bg-gray-50 p-4 rounded-xl border border-gray-150 text-xs space-y-2.5 transition-all duration-200" 
                      id="password-checklist"
                      role="group"
                      aria-label="Password validation requirements"
                    >
                      <p className="font-semibold text-gray-700">Password strength requirements:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                        <div className="flex items-center space-x-1.5">
                          {isLengthValid ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={isLengthValid ? 'text-green-700 font-medium' : 'text-gray-500'}>
                            Min. 8 characters
                          </span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          {hasUppercase ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={hasUppercase ? 'text-green-700 font-medium' : 'text-gray-500'}>
                            Uppercase letter
                          </span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          {hasNumber ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={hasNumber ? 'text-green-700 font-medium' : 'text-gray-500'}>
                            At least 1 number
                          </span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          {hasSpecial ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={hasSpecial ? 'text-green-700 font-medium' : 'text-gray-500'}>
                            Special character
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="signup-confirmpassword"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="signup-confirmpassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[44px]"
                        placeholder="Re-enter your password"
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
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || (activeTab === 'signup' && !isPasswordValid)}
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    {activeTab === 'signin' && 'Sign In'}
                    {activeTab === 'signup' && 'Create Account'}
                    {activeTab === 'forgot' && 'Send Password Reset Link'}
                  </>
                )}
              </button>
            </form>

            {/* OAuth Sign In */}
            {activeTab !== 'forgot' && (
              <>
                <div className="relative my-6" aria-hidden="true">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-3 text-gray-500 font-medium">Or continue with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 rounded-lg py-2.5 px-4 font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 min-h-[44px]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61a5.66 5.66 0 0 1-2.45 3.71v3.08h3.95a12.01 12.01 0 0 0 3.63-8.64Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3a7.48 7.48 0 0 1-11.55-3.95H.53v3.19A12 12 0 0 0 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M4.52 14.14a7.18 7.18 0 0 1 0-4.28V6.67H.53a12 12 0 0 0 0 10.66l3.99-3.19Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 .53a12 12 0 0 0-11.47 7.64l3.99 3.19A7.47 7.47 0 0 1 12 4.75Z"
                    />
                  </svg>
                  Google
                </button>
              </>
            )}

            {/* Bottom Swappers */}
            <div className="mt-6 text-center text-sm text-gray-600 flex flex-col items-center space-y-2">
              {activeTab === 'signin' && (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => {
                      setActiveTab('signup')
                      setError(null)
                      setSuccessMessage(null)
                    }}
                    className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                  >
                    Sign up here
                  </button>
                </p>
              )}
              {activeTab === 'signup' && (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setActiveTab('signin')
                      setError(null)
                      setSuccessMessage(null)
                    }}
                    className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                  >
                    Sign in here
                  </button>
                </p>
              )}
              {activeTab === 'forgot' && (
                <button
                  onClick={() => {
                    setActiveTab('signin')
                    setError(null)
                    setSuccessMessage(null)
                  }}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-xs focus:outline-none gap-1 py-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
                </button>
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