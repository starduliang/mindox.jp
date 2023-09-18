'use client'

import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import commonValidation from '@/lib/commonValidation'
import Theme from '@/components/Theme'

interface ValuesType {
  companyName: string
  tel: string
  lastName: string
  firstName: string
  email: string
  inquiryDetails: string
}

const validationSchema = yup.object({
  companyName: commonValidation.REQUIRED,
  tel: commonValidation.REQUIRED,
  lastName: commonValidation.REQUIRED,
  firstName: commonValidation.REQUIRED,
  email: commonValidation.EMAIL,
  inquiryDetails: commonValidation.REQUIRED
})

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValuesType>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<ValuesType> = (values) => {
    console.log(values)
  }

  return (
    <Theme>
      <Container maxWidth="md" className="mt-40 py-24 px-24 rounded-xl bg-[#181818]">
        <Typography>
          オフィスの見学、インターンシップ、採用に関するお問い合わせなどは下記フォームまたはお電話にてお気軽にご連絡ください。
          お問い合わせ時間：10:00～17:00　電話番号：070 1321 1199　採用担当まで
        </Typography>
        <Stack spacing={3} className="mt-16">
          <TextField
            required
            label="会社名"
            variant="outlined"
            {...register('companyName')}
            error={'companyName' in errors}
            helperText={errors.companyName?.message}
          />
          <TextField
            required
            label="電話番号"
            variant="outlined"
            {...register('tel')}
            error={'tel' in errors}
            helperText={errors.tel?.message}
          />
          <TextField
            required
            label="お名前（姓）"
            variant="outlined"
            {...register('lastName')}
            error={'lastName' in errors}
            helperText={errors.lastName?.message}
          />
          <TextField
            required
            label="お名前（名）"
            variant="outlined"
            {...register('firstName')}
            error={'firstName' in errors}
            helperText={errors.firstName?.message}
          />
          <TextField
            required
            label="メールアドレス"
            variant="outlined"
            type="email"
            {...register('email')}
            error={'email' in errors}
            helperText={errors.email?.message}
          />
          <TextField
            required
            label="お問い合わせ内容*"
            variant="outlined"
            {...register('inquiryDetails')}
            error={'inquiryDetails' in errors}
            helperText={errors.inquiryDetails?.message}
            multiline
            rows={4}
          />
        </Stack>
        <div className="mt-6 text-center">
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
            className="bg-[color-primary] px-12 text-white font-bold"
          >
            送信
          </Button>
        </div>
      </Container>
    </Theme>
  )
}

export default Contact
