'use client'

import { Button, Container, Stack, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import commonValidation from '@/lib/commonValidation'

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
    <Container maxWidth="sm" sx={{ pt: 5 }} className="bg-white mt-40 p-8 rounded-xl">
      <Stack spacing={3}>
        <TextField
          required
          label="会社名"
          {...register('companyName')}
          error={'companyName' in errors}
          helperText={errors.companyName?.message}
        />
        <TextField
          required
          label="電話番号"
          {...register('tel')}
          error={'tel' in errors}
          helperText={errors.tel?.message}
        />
        <TextField
          required
          label="お名前（姓）"
          {...register('lastName')}
          error={'lastName' in errors}
          helperText={errors.lastName?.message}
        />
        <TextField
          required
          label="お名前（名）"
          {...register('firstName')}
          error={'firstName' in errors}
          helperText={errors.firstName?.message}
        />
        <TextField
          required
          label="メールアドレス"
          type="email"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
        />
        <TextField
          required
          label="お問い合わせ内容*"
          {...register('inquiryDetails')}
          error={'inquiryDetails' in errors}
          helperText={errors.inquiryDetails?.message}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
          className="bg-violet-500"
        >
          Submit
        </Button>
      </Stack>
    </Container>
  )
}

export default Contact
