'use client'
import { Container } from '@mui/material'
import { usePathname } from 'next/navigation'

import ArticleLayout from '@/components/layouts/articles/ArticleLayout'
import PageNav from '@/components/layouts/PageNav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const showTableOfContents = pathname !== '/articles'

  return (
    <Container maxWidth="md" className="mt-56 p-4">
      <PageNav title="Articles" subTitle="技術ブログ" />
      <ArticleLayout className="mt-8" showTableOfContents={showTableOfContents}>
        {children}
      </ArticleLayout>
    </Container>
  )
}

export default Layout
