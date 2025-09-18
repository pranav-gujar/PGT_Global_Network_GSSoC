import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './AuthModal'

interface ProtectedActionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  requireAuth?: boolean
  onAction?: () => void
}

const ProtectedAction: React.FC<ProtectedActionProps> = ({ 
  children, 
  fallback, 
  requireAuth = true,
  onAction 
}) => {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (loading) {
      e.preventDefault()
      return // ⏳ Don’t allow action until we know if logged in
    }

    if (requireAuth && !user) {
      e.preventDefault()
      setShowAuthModal(true)
    } else if (onAction) {
      onAction()
    }
  }

  // While loading, keep UI stable (don’t flash fallback)
  if (loading) {
    return (
      <div className="opacity-50 cursor-not-allowed">
        {children}
      </div>
    )
  }

  return (
    <>
      <div onClick={handleClick}>
        {requireAuth && !user && fallback ? fallback : children}
      </div>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  )
}

export default ProtectedAction
