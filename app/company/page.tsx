'use client'

import { Container } from '@mui/material'

import PageNav from '@/components/layouts/PageNav'

const Company = () => {
  return (
    <Container maxWidth="md" className="mt-56">
      <PageNav title="Company" subTitle="会社情報" />
    </Container>
  )
}

export default Company
