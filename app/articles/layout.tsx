'use client'
import { Typography, Breadcrumbs, Link as MUILink, Container } from '@mui/material'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import Theme from '@/components/config/Theme'

import ArticleLayout from '@/components/layouts/articles/ArticleLayout'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const articleName = pathname.split('/').slice(-1)?.[0] ?? ''
  const isSelf = articleName === 'articles'

  const showTableOfContents = pathname !== '/articles'

  return (
    <Theme>
      <Container maxWidth="md" className="mt-[100px] p-4">
        <Breadcrumbs aria-label="breadcrumb">
          <MUILink underline="hover" color="inherit" href="/" component={NextLink}>
            Home
          </MUILink>
          {!isSelf && (
            <MUILink underline="hover" color="inherit" href="/articles" component={NextLink}>
              Articles
            </MUILink>
          )}
          <Typography color="text.primary">{articleName}</Typography>
        </Breadcrumbs>
        <ArticleLayout className="mt-8" showTableOfContents={showTableOfContents}>
          {children}
        </ArticleLayout>
      </Container>
    </Theme>
  )
}

export default Layout
