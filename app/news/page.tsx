'use client'

import dayjs from 'dayjs'
import { List, ListItem, Paper } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import PageNav from '@/components/layouts/PageNav'
import { newsPosts } from '@/db/data'
import { Post } from '@/db/models/post'
import PaginationScrollTop from '@/components/parts/button/PaginationScrollTop'
import useNState from '@/components/hooks/useNState'

const ITEMS_PER_PAGE = 10

type DataType = {
  posts: Post[]
  page: number
  totalCount: number
}

const data: DataType = {
  posts: [],
  page: 1,
  totalCount: 0
}

const Page = () => {
  const { state, setState, patchState } = useNState<DataType>(data)
  const searchParams = useSearchParams()
  const pageQuery = searchParams.get('page')

  useEffect(() => {
    const fetchPosts = async () => {
      if (pageQuery) {
        if (pageQuery) {
          patchState('page', Number(pageQuery))
        }
      }

      const { posts, totalCount } = await getPostsAndCount(state.page)
      setState({ ...state, posts, totalCount })
    }

    fetchPosts()
  }, [state.page, pageQuery, state, setState, patchState])

  const getPostsAndCount = async (page: number) => {
    const getPaginationIndices = (page: number, pageSize: number) => {
      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize
      return { startIndex, endIndex }
    }

    const { startIndex, endIndex } = getPaginationIndices(page, ITEMS_PER_PAGE)
    const posts = newsPosts.slice(startIndex, endIndex)
    const totalCount = newsPosts.length
    return { posts, totalCount }
  }
  return (
    <main className="flex flex-col gap-4">
      <PageNav title="News List" subTitle="お知らせ" pathToName={{ news: 'News List' }} />
      <List className="flex flex-col gap-y-4">
        {state.posts.map((item) => (
          <ListItem key={item.id}>
            <Link className="--link w-full" href={`/news/${item.id}`}>
              <Paper className="p-6 flex flex-col gap-4 items-left md:flex-row md:space-x-4 md:items-center">
                {item?.images?.[0] && (
                  <Image
                    className="rounded w-full md:w-1/4"
                    src={item?.images?.[0]?.src}
                    alt="post image"
                    width={200}
                    height={100}
                  />
                )}
                <div className="grow text-xl h-full font-semibold">{item?.title}</div>
                <div className="md:absolute top-6 right-6 text-xl text-[color-text-gray]">
                  {dayjs(item.createdAt).format('YY.MM.DD')}
                </div>
              </Paper>
            </Link>
          </ListItem>
        ))}
        <PaginationScrollTop
          page={state.page}
          totalCount={state.totalCount}
          itemsPerPage={ITEMS_PER_PAGE}
          onChange={(_, value) => {
            patchState('page', value)
          }}
        />
      </List>
    </main>
  )
}

export default Page
