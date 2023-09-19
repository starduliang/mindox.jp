'use client'

import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PATTERNS, MESSAGES } from '@/lib/validation'
import Theme from '@/components/config/Theme'
import { useToast } from '@/components/contexts/ToastContext'
import { useProgress } from '@/components/contexts/ProgressContext'

interface ValuesType {
  companyName: string
  tel: string
  lastName: string
  firstName: string
  email: string
  inquiryDetails: string
}

const validationSchema = yup.object({
  companyName: PATTERNS.REQUIRED,
  tel: PATTERNS.TEL.required(MESSAGES.REQUIRED),
  lastName: PATTERNS.REQUIRED,
  firstName: PATTERNS.REQUIRED,
  email: PATTERNS.EMAIL.required(MESSAGES.REQUIRED),
  inquiryDetails: PATTERNS.REQUIRED
})

interface FormField {
  name: string
  label: string
  type: string
  multiline?: boolean
  rows?: number
}

const formFields: FormField[] = [
  { name: 'companyName', label: '会社名', type: 'text' },
  { name: 'tel', label: '電話番号', type: 'text' },
  { name: 'lastName', label: 'お名前（姓）', type: 'text' },
  { name: 'firstName', label: 'お名前（名）', type: 'text' },
  { name: 'email', label: 'メールアドレス', type: 'email' },
  { name: 'inquiryDetails', label: 'お問い合わせ内容*', type: 'text', multiline: true, rows: 4 }
]

const Contact = () => {
  const { showToast } = useToast()
  const { isInProgress, startProgress, endProgress } = useProgress()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValuesType>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  })

  // TODO add api call
  const onSubmit: SubmitHandler<ValuesType> = async (values) => {
    if (isInProgress) return
    try {
      alert(isInProgress)
      startProgress()
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
      alert(isInProgress)
      console.log(values)
      showToast('success!')
    } catch (error) {
      console.error(error)
      showToast('An error occurred!')
    } finally {
      endProgress()
    }
  }

  return (
    <Theme>
      <Container maxWidth="md" className="mt-40 py-24 px-24 rounded-xl bg-[#181818]">
        <Typography>
          オフィスの見学、インターンシップ、採用に関するお問い合わせなどは下記フォームまたはお電話にてお気軽にご連絡ください。
          お問い合わせ時間：10:00～17:00　電話番号：070 1321 1199　採用担当まで
        </Typography>
        <Stack spacing={3} className="mt-16">
          {formFields.map(({ name, label, type, multiline, rows }) => {
            const key = name as keyof ValuesType
            return (
              <TextField
                key={name}
                required
                label={label}
                variant="outlined"
                type={type}
                {...register(key)}
                error={!!errors[key]}
                helperText={errors[key]?.message}
                multiline={multiline}
                rows={rows}
              />
            )
          })}
        </Stack>
        <div className="mt-6 text-center">
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
            className="bg-[color-primary] px-12 text-white font-bold"
            disabled={isInProgress}
          >
            {isInProgress ? 'Loading...' : '送信'}
          </Button>
        </div>
      </Container>
    </Theme>
  )
}

export default Contact
