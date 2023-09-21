import { Post } from './models/post'

import Post1 from '../posts/1/page.mdx'
import Post2 from '../posts/2/page.mdx'
import Post3 from '../posts/3/page.mdx'
import Post4 from '../posts/4/page.mdx'

export const blogPosts: Post[] = [
  {
    id: 1,
    title: 'Hello World',
    content: <Post1 />,
    createdAt: new Date('2023-09-10')
  },
  {
    id: 2,
    title: 'Why creating a project is slow?',
    content: <Post2 />,
    createdAt: new Date('2023-09-19')
  }
]

export const newsPosts: Post[] = [
  {
    id: 3,
    title: '会社設立しました',
    content: <Post3 />,
    createdAt: new Date('2023-09-10')
  },
  {
    id: 4,
    title: '社員採用',
    content: <Post4 />,
    createdAt: new Date('2023-09-19')
  }
]

export const posts: Post[] = [...blogPosts, ...newsPosts]
