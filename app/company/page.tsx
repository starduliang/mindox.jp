'use client'

import { Container } from '@mui/material'

import PageNav from '@/components/layouts/PageNav'
import Profile from './Profile'

const Company = () => {
  return (
    <Container maxWidth="md" className="mt-56">
      <PageNav title="Company" subTitle="会社情報" />
      <Profile className="mt-[200px]" />
    </Container>
  )
}

export default Company
