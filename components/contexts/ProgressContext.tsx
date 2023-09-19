'use client'

import { createContext, useContext, useState } from 'react'

type ProgressContextType = {
  isInProgress: boolean
  startProgress: () => void
  endProgress: () => void
}

const ProgressContext = createContext<ProgressContextType>({
  isInProgress: false,
  startProgress: () => {},
  endProgress: () => {}
})
export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInProgress, setIsInProgress] = useState(false)

  const startProgress = () => setIsInProgress(true)
  const endProgress = () => setIsInProgress(false)

  return (
    <ProgressContext.Provider value={{ isInProgress, startProgress, endProgress }}>{children}</ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)
