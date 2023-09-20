'use client'
import { usePathname } from 'next/navigation'

import Article from '@/app/articles/components/Article'
import PageNav from '@/components/layouts/PageNav'
import { articles } from '../db'

const Page = ({ params }: { params: { id: string } }) => {
  const pathname = usePathname()

  const pathToName = articles.reduce(
    (acc, article) => ({
      ...acc,
      [article.id]: article.title
    }),
    {}
  )

  const showTableOfContents = pathname !== '/articles'
  const id = params.id

  const article = articles.find((article) => String(article.id) === String(id))

  return (
    <main>
      <PageNav title="Articles" subTitle="技術ブログ" pathToName={pathToName} />
      <Article data={article!} className="mt-8" showTableOfContents={showTableOfContents} />
    </main>
  )
}

export default Page
