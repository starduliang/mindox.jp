'use client'

const News = () => (
  <Container maxWidth="md" className="mt-[100px]">
    <article className="prose dark:prose-invert w-full">
      <HelloWorld />
    </article>
  </Container>
)

import { Container } from '@mui/material'
import HelloWorld from './helloworld.mdx'
export default News
