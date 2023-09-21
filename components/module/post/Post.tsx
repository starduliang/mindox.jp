import TableOfContents from './TableOfContents'
import { Post as PostModel } from '@/db/models/post'
import dayjs from 'dayjs'

const CONTENT_ID = 'post'

const Post = ({
  data,
  className,
  showTableOfContents
}: {
  data: PostModel
  className?: string
  showTableOfContents?: boolean
}) => {
  return (
    <article className={className}>
      <div>
        <div className="text-4xl font-semibold mb-6">{data?.title}</div>
        <div className="text-xs font-semibold mb-6 text-[color-text-gray]">
          [{dayjs(data.createdAt).format('YY.MM.DD')}]
        </div>
      </div>
      {showTableOfContents && <TableOfContents contentId={CONTENT_ID} />}
      <div id={CONTENT_ID} className={'prose dark:prose-invert w-full mt-8'}>
        {data.content}
      </div>
    </article>
  )
}
export default Post
