'use client'

import { usePathname } from 'next/navigation'

import Post from '@/components/module/post/Post'
import BreadCrumbs from '@/components/parts/view/BreadCrumbs'
import { posts } from '@/db/data'
import Link from 'next/link'
import { Paper } from '@mui/material'

const Page = ({ params }: { params: { id: string } }) => {
  const pathname = usePathname()

  const post = posts.find((post) => String(post.id) === String(params.id))
  if (!post) return <Link href="/404"></Link>

  return (
    <main>
      <BreadCrumbs pathname={pathname} pathToName={{ [post.id ?? '']: post.title, news: 'News List' }} />
      <Paper className="p-16 mt-8">
        <Post data={post!} className="mt-8" />
      </Paper>
    </main>
  )
}

export default Page
