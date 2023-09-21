'use client'

import dayjs from 'dayjs'
import { Card, CardContent, List, ListItem } from '@mui/material'
import PageNav from '@/components/layouts/PageNav'
import { blogPosts } from '@/db/data'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Post } from '@/db/models/post'
import PaginationScrollTop from '@/components/parts/button/PaginationScrollTop'

const ITEMS_PER_PAGE = 10

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(blogPosts.length)
  const searchParams = useSearchParams()
  const pageQuery = searchParams.get('page')

  useEffect(() => {
    const fetchPosts = async () => {
      if (pageQuery) {
        setPage(Number(pageQuery))
      }

      const { posts, totalCount } = await getPostsAndCount(page)
      setPosts(posts)
      setTotalCount(totalCount)
    }

    fetchPosts()
  }, [page, pageQuery])

  const getPostsAndCount = async (page: number) => {
    const getPaginationIndices = (page: number, pageSize: number) => {
      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize
      return { startIndex, endIndex }
    }

    const { startIndex, endIndex } = getPaginationIndices(page, ITEMS_PER_PAGE)
    const posts = blogPosts.slice(startIndex, endIndex)
    const totalCount = blogPosts.length
    return { posts, totalCount }
  }

  return (
    <main className="flex flex-col gap-4">
      <PageNav title="Blog" subTitle="技術ブログ" />
      <List className="flex flex-col gap-y-4">
        {posts.map((item) => (
          <ListItem key={item.id}>
            <Link className="--link w-full" href={`/blog/${item.id}`}>
              <Card className="bg-transparent p-2">
                <CardContent className="flex ">
                  <div className="text-xl">{item?.title}</div>
                  <div className="ml-auto text-xs text-[color-text-gray]">
                    {dayjs(item.createdAt).format('YY.MM.DD')}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ListItem>
        ))}
        <PaginationScrollTop
          page={page}
          totalCount={totalCount}
          itemsPerPage={ITEMS_PER_PAGE}
          onChange={(_, value) => {
            setPage(value)
          }}
        />
      </List>
    </main>
  )
}

export default Page
