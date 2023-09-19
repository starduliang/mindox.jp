import { ToastProvider } from './ToastContext'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>
}
