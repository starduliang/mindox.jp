import { useToast } from '@/components/contexts/ToastContext'
import { useProgress } from '@/components/contexts/ProgressContext'

export function useSubmitForm(callback: (values: any) => Promise<void>, successMessage: string) {
  const { showToast } = useToast()
  const { startProgress, endProgress, isInProgress } = useProgress()

  const onSubmit = async (values: any) => {
    if (isInProgress) return
    try {
      startProgress()
      await callback(values)
      showToast(successMessage)
    } catch (error) {
      console.error(error)
      showToast('An error occurred!')
    } finally {
      endProgress()
    }
  }

  return { onSubmit, isInProgress }
}
