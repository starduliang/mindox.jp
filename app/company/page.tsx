'use client'

import PageNav from '@/components/layouts/PageNav'

import Profile from './Profile'
import History from './History'
import Purpose from './Purpose'
import useNState from '@/components/hooks/useNState'

type DataType = {
  title: string
  subTitle: string
}

const data: DataType = {
  title: 'Company',
  subTitle: '会社情報'
}

const Company = () => {
  const { state } = useNState<DataType>(data)

  return (
    <main className="space-y-48">
      <PageNav title={state.title} subTitle={state.subTitle} />
      <Purpose />
      <div className="px-0 md:px-20 lg:px-48">
        <Profile />
      </div>
      <History />
    </main>
  )
}

export default Company
