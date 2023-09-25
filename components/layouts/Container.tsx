import cn from 'classnames'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('--container md:--md-container', className ?? '')}>{children}</div>
)

export default Container
