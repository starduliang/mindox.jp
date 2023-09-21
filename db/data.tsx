import { Post } from './models/post'

import Post1 from '../posts/1/page.mdx'
import Post2 from '../posts/2/page.mdx'
import Post3 from '../posts/3/page.mdx'
import Post4 from '../posts/4/page.mdx'

const titles = [
  'Hello World',
  'Why creating a project is slow?',
  'The importance of code reviews',
  'How to write clean code',
  'Understanding async/await',
  'The benefits of TypeScript',
  'Introduction to React',
  'Advanced React patterns',
  'Testing in JavaScript',
  'How to debug efficiently',
  'Understanding closures',
  'The power of functional programming'
]

export const blogPosts: Post[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: titles[i],
  content: i % 2 === 0 ? <Post1 /> : <Post2 />,
  createdAt: new Date(`2023-09-${10 + i}`)
}))

const newsTitles = [
  '会社設立しました',
  '社員採用',
  '新製品発表',
  '新オフィス開設',
  '新規事業開始',
  '新パートナーシップ',
  '新規投資',
  '新規採用',
  '新製品開発',
  '新規プロジェクト',
  '新規契約',
  '新規提携',
  '新規資金調達',
  '新規マーケティング戦略',
  '新規販売チャネル'
]

export const newsPosts: Post[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 3,
  title: newsTitles[i],
  content: i % 2 === 0 ? <Post3 /> : <Post4 />,
  createdAt: new Date(`2023-09-${10 + i}`)
}))

export const posts: Post[] = [...blogPosts, ...newsPosts]
