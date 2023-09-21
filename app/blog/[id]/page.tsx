'use client'

import { usePathname } from 'next/navigation'
import Post from '@/components/module/post/Post'
import { blogPosts } from '@/db/data'
import BreadCrumbs from '@/components/parts/view/BreadCrumbs'
import Link from 'next/link'

const Page = ({ params }: { params: { id: string } }) => {
  const pathname = usePathname()

  const post = blogPosts.find((post) => String(post.id) === String(params.id))
  if (!post) return <Link href="/404"></Link>

  return (
    <main>
      <BreadCrumbs pathname={pathname} pathToName={{ [post.id ?? '']: post.title }} />
      <div className="bg-[color-bg-dark] p-16 mt-8">
        <Post data={post!} className="mt-8" showTableOfContents={true} />
      </div>
    </main>
  )
}

export default Page
