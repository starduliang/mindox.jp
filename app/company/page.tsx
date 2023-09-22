'use client'

import PageNav from '@/components/layouts/PageNav'

import Profile from './Profile'
import History from './History'
import Purpose from './Purpose'

type DataType = {
  title: string
  subTitle: string
}

const data: DataType = {
  title: 'Company',
  subTitle: '会社情報'
}

const Company = () => {
  return (
    <main className="space-y-48">
      <PageNav title={data.title} subTitle={data.subTitle} />
      <Purpose />
      <Profile />
      <History />
    </main>
  )
}

export default Company
