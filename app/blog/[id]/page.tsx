'use client'
import { usePathname } from 'next/navigation'

import Post from '@/app/blog/components/Post'
import PageNav from '@/components/layouts/PageNav'
import { posts } from '../db'

const Page = ({ params }: { params: { id: string } }) => {
  const pathname = usePathname()

  const pathToName = posts.reduce(
    (acc, post) => ({
      ...acc,
      [post.id]: post.title
    }),
    {}
  )

  const showTableOfContents = pathname !== '/blog'
  const id = params.id

  const post = posts.find((post) => String(post.id) === String(id))

  return (
    <main>
      <PageNav title="Blog" subTitle="技術ブログ" pathToName={pathToName} />
      <Post data={post!} className="mt-8" showTableOfContents={showTableOfContents} />
    </main>
  )
}

export default Page
