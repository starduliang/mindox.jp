import cn from 'classnames'

const ArticleLayout = ({
  className,
  contentId,
  children
}: {
  className?: string
  contentId?: string
  children: React.ReactNode
}) => (
  <article id={contentId ?? 'article'} className={cn('prose dark:prose-invert w-full', className ?? '')}>
    {children}
  </article>
)
export default ArticleLayout
