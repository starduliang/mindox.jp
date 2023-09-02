const ArticleLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="--center-content-container mt-[100px]">
    <article className="prose dark:prose-invert w-full">{children}</article>
  </div>
)
export default ArticleLayout
