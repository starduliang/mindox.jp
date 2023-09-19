'use client'

const News = () => (
  <Container maxWidth="md" className="mt-56">
    <PageNav title="News List" subTitle="お知らせ" />
    <article className="prose dark:prose-invert w-full">
      <HelloWorld />
    </article>
  </Container>
)

import { Container } from '@mui/material'
import HelloWorld from './helloworld.mdx'
import PageNav from '@/components/layouts/PageNav'
export default News
