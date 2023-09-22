import cn from 'classnames'

const ContainerBoarded = ({
  className,
  children,
  color = '[color-border-lighter]'
}: {
  className?: string
  children: React.ReactNode
  color?: string
}) => {
  return (
    <div className={cn(`border divide-y md:divide-y-0 md:divide-x divide-${color} border-${color}`, className)}>
      {children}
    </div>
  )
}

export default ContainerBoarded
