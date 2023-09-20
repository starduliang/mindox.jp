'use client'

const News = () => (
  <main>
    <PageNav title="News List" subTitle="お知らせ" pathToName={{ news: 'News List' }} />
    <article className="prose dark:prose-invert w-full mt-16">
      <HelloWorld />
    </article>
  </main>
)

import HelloWorld from './helloworld.mdx'
import PageNav from '@/components/layouts/PageNav'
export default News
