'use client'

import PageNav from '@/components/layouts/PageNav'
import Profile from './Profile'
import History from './History'
import Purpose from './Purpose'

const Company = () => {
  return (
    <main className="flex flex-col gap-[200px]">
      <PageNav title="Company" subTitle="会社情報" />
      <Purpose />
      <Profile />
      <History />
    </main>
  )
}

export default Company
