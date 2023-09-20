export type ArticleModel = {
  id: string | number
  title: string
}

export const articles: ArticleModel[] = [
  {
    id: 1,
    title: 'Hello World'
  },
  {
    id: 2,
    title: 'Why creating a project is slow?'
  }
]
