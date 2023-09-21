'use client'

import dayjs from 'dayjs'
import { Card, CardContent, List, ListItem } from '@mui/material'
import PageNav from '@/components/layouts/PageNav'
import { blogPosts } from '@/db/data'
import Link from 'next/link'

const Page = () => (
  <main className="flex flex-col gap-4">
    <PageNav title="Blog" subTitle="技術ブログ" />
    <List className="flex flex-col gap-y-4">
      {blogPosts.map((item) => (
        <ListItem key={item.id}>
          <Link className="--link w-full" href={`/blog/${item.id}`}>
            <Card className="bg-transparent p-2">
              <CardContent className="flex ">
                <div className="text-xl">{item?.title}</div>
                <div className="ml-auto text-xs text-[color-text-gray]">{dayjs(item.createdAt).format('YY.MM.DD')}</div>
              </CardContent>
            </Card>
          </Link>
        </ListItem>
      ))}
    </List>
  </main>
)

export default Page
