import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, AlertTriangle } from 'lucide-react'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const confirmBtnRef = useRef<HTMLButtonElement>(null)

  // Handle ESC key listener and body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Focus on the confirm button when the modal opens for quick accessibility
      setTimeout(() => {
        confirmBtnRef.current?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-start md:items-center p-4 overflow-y-auto"
      role="presentation"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-sm w-full p-6 relative my-auto shadow-2xl border border-gray-100 transition-all duration-300 transform scale-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-desc"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Warning Icon & Title */}
        <div className="flex flex-col items-center text-center mt-2">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 text-red-500">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 id="confirm-modal-title" className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p id="confirm-modal-desc" className="text-sm text-gray-500 mb-6 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 order-2 sm:order-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 min-h-[44px] text-sm"
          >
            {cancelText}
          </button>
          
          <button
            ref={confirmBtnRef}
            type="button"
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="flex-1 order-1 sm:order-2 px-4 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-750 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-h-[44px] text-sm"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ConfirmModal
