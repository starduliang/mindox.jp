import cn from 'classnames'

const ArticleLayout = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <article className={cn('prose dark:prose-invert w-full', className ?? '')}>{children}</article>
)
export default ArticleLayout
