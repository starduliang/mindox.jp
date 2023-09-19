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
  <div className={className}>
    {showTableOfContents && (
      <div>
        <TableOfContents contentId={CONTENT_ID} />
      </div>
    )}
    <article id={CONTENT_ID} className={'prose dark:prose-invert w-full mt-8'}>
      {children}
    </article>
  </div>
)
export default ArticleLayout
