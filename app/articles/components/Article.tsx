import TableOfContents from './TableOfContents'
import { ArticleModel } from '../db'

const CONTENT_ID = 'article'

const Article = ({
  data,
  className,
  children,
  showTableOfContents
}: {
  data: ArticleModel
  className?: string
  children: React.ReactNode
  showTableOfContents?: boolean
}) => {
  return (
    <article className={className}>
      {showTableOfContents && (
        <div>
          <div className="text-4xl font-semibold mb-6">{data?.title}</div>
          <TableOfContents contentId={CONTENT_ID} />
        </div>
      )}
      <div id={CONTENT_ID} className={'prose dark:prose-invert w-full mt-8'}>
        {children}
      </div>
    </article>
  )
}
export default Article
