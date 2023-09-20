import Post1 from '../../posts/1/page.mdx'
import Post2 from '../../posts/2/page.mdx'

export type ArticleModel = {
  id: string | number
  title: string
  content: React.ReactNode
  createdAt: Date
}

export const articles: ArticleModel[] = [
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
