import cn from 'classnames'

const ContainerBoarded = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `border divide-y md:divide-y-0 md:divide-x divide-[color-border-lighter] border-[color-border-lighter]`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default ContainerBoarded
