import { Post } from './models/post'

import Post0 from './posts/0/page.mdx'
import Post1 from './posts/1/page.mdx'

export const newsPosts: Post[] = [
  {
    id: 0,
    title: 'ホームページ開設しました。',
    content: <Post0 />,
    createdAt: new Date('2022-11-28'),
    images: [{ src: '/news_0.jpeg', id: '0' }]
  }
]

export const blogPosts: Post[] = [
  {
    id: 1,
    title: 'How to use Next.js with TypeScript',
    content: <Post1 />,
    createdAt: new Date('2022-11-09'),
    images: [{ src: '/blog_0.jpg', id: '1' }]
  }
]

export const posts: Post[] = [...blogPosts, ...newsPosts]
