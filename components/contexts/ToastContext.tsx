'use client'

import React, { createContext, useContext, useState } from 'react'
import { Snackbar } from '@mui/material'

type ContextType = {
  showToast: (message: string) => void
  hideToast: () => void
}

const initialState = { showToast: () => {}, hideToast: () => {} }

const ToastContext = createContext<ContextType>(initialState)

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const showToast = (message: string) => {
    setMessage(message)
    setIsOpen(true)
  }

  const hideToast = () => {
    setIsOpen(false)
  }

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={hideToast} message={message} />
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
