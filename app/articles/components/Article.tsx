import TableOfContents from './TableOfContents'
import { ArticleModel } from '../db'
import dayjs from 'dayjs'

const CONTENT_ID = 'article'

const Article = ({
  data,
  className,
  showTableOfContents
}: {
  data: ArticleModel
  className?: string
  showTableOfContents?: boolean
}) => {
  return (
    <article className={className}>
      {showTableOfContents && (
        <div>
          <div className="text-4xl font-semibold mb-6">{data?.title}</div>
          <div className="text-xs font-semibold mb-6 text-[color-text-gray]">
            [{dayjs(data.createdAt).format('YY.MM.DD')}]
          </div>
          <TableOfContents contentId={CONTENT_ID} />
        </div>
      )}
      <div id={CONTENT_ID} className={'prose dark:prose-invert w-full mt-8'}>
        {data.content}
      </div>
    </article>
  )
}
export default Article
