'use client'

import React, { createContext, useContext, useState } from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

type ContextType = {
  showToast: (message: Message) => void
  hideToast: () => void
}

const initialState = { showToast: () => {}, hideToast: () => {} }

const ToastContext = createContext<ContextType>(initialState)

type Severity = 'success' | 'error' | 'warning' | 'info'

export type Message = {
  text: string
  type?: Severity
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState<Message | undefined>({ text: '' })

  const showToast = (message: Message) => {
    setMessage(message)
    setIsOpen(true)
  }

  const hideToast = () => {
    setIsOpen(false)
  }

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={hideToast}
      >
        <div>
          <Alert onClose={hideToast} severity={message?.type ?? 'success'}>
            {message?.text}
          </Alert>
        </div>
      </Snackbar>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
