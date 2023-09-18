'use client'
import { Typography, Breadcrumbs, Link as MUILink } from '@mui/material'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import TableOfContents from '@/components/articles/TableOfContents'
import Theme from '@/components/Theme'

import ArticleLayout from '@/components/articles/ArticleLayout'

const CONTENT_ID = 'article'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const articleName = pathname.split('/').slice(-1)?.[0] ?? ''
  const isSelf = articleName === 'articles'

  return (
    <Theme>
      <div className="--center-content-container mt-[100px] p-4">
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
        <TableOfContents contentId={CONTENT_ID} />
        <ArticleLayout contentId={CONTENT_ID} className="mt-8">
          {children}
        </ArticleLayout>
      </div>
    </Theme>
  )
}

export default Layout
