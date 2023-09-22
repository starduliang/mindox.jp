'use client'

import PageNav from '@/components/layouts/PageNav'
import Works from './Works'

const WorksPage = () => (
  <main className="flex flex-col gap-[200px]">
    <PageNav title="Works" subTitle="お客様事例" />
    <Works />
  </main>
)

export default WorksPage
