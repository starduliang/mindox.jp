'use client'
import { Container } from '@mui/material'
import { usePathname } from 'next/navigation'

import Article from '@/app/articles/components/Article'
import PageNav from '@/components/layouts/PageNav'
import { articles } from './db'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const pathToName = articles.reduce(
    (acc, article) => ({
      ...acc,
      [article.id]: article.title
    }),
    {}
  )

  const showTableOfContents = pathname !== '/articles'
  const id = pathname.split('/').pop()

  const article = articles.find((article) => String(article.id) === String(id))

  return (
    <Container maxWidth="md" className="mt-56 p-4">
      <PageNav title="Articles" subTitle="技術ブログ" pathToName={pathToName} />
      <Article data={article!} className="mt-8" showTableOfContents={showTableOfContents}>
        {children}
      </Article>
    </Container>
  )
}

export default Layout
