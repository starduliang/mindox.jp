import cn from 'classnames'
import TableOfContents from './TableOfContents'

const CONTENT_ID = 'article'

const ArticleLayout = ({
  className,
  children,
  showTableOfContents
}: {
  className?: string
  children: React.ReactNode
  showTableOfContents?: boolean
}) => (
  <>
    {showTableOfContents && <TableOfContents contentId={CONTENT_ID} />}
    <article id={CONTENT_ID} className={cn('prose dark:prose-invert w-full', className ?? '')}>
      {children}
    </article>
  </>
)
export default ArticleLayout
