import { Image } from './image'

export type Post = {
  id?: string | number
  title: string
  content: React.ReactNode
  createdAt: Date
  images?: Image[]
}
