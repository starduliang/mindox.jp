'use client'

import PageNav from '@/components/layouts/PageNav'
import Strength from './Strength'
import Services from './Services'

const Service = () => (
  <main className="flex flex-col gap-[200px]">
    <PageNav title="Service" />
    <Strength />
    <Services />
  </main>
)

export default Service
