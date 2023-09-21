'use client'

import dayjs from 'dayjs'
import { List, ListItem } from '@mui/material'
import PageNav from '@/components/layouts/PageNav'
import { posts } from './db'
import Link from 'next/link'

const Page = () => (
  <main className="flex flex-col gap-4">
    <PageNav title="Articles" subTitle="技術ブログ" />
    <List>
      {posts.map((item) => (
        <ListItem key={item.id}>
          <Link className="--link " href={`/articles/${item.id}`}>
            <span className="text-xl">{item?.title}</span>
          </Link>
          <span className="ml-auto text-xs text-[color-text-gray]">{dayjs(item.createdAt).format('YY.MM.DD')}</span>
        </ListItem>
      ))}
    </List>
  </main>
)

export default Page
