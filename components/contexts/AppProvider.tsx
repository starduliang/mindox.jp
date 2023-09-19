import { ToastProvider } from './ToastContext'
import { ProgressProvider } from './ProgressContext'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <ProgressProvider>{children}</ProgressProvider>
    </ToastProvider>
  )
}
