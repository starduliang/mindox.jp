'use client'

import { Container } from '@mui/material'

import PageNav from '@/components/layouts/PageNav'
import Profile from './Profile'
import History from './History'
import Purpose from './Purpose'

const Company = () => {
  return (
    <Container maxWidth="md" className="mt-56 flex flex-col gap-[200px]">
      <PageNav title="Company" subTitle="会社情報" />
      <Purpose />
      <Profile />
      <History />
    </Container>
  )
}

export default Company
