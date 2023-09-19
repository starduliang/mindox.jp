import BreadCrumbs from '../parts/view/BreadCrumbs'
import { PathToName } from '../parts/view/BreadCrumbs'
import cn from 'classnames'

const PageNav = ({
  title,
  subTitle,
  pathname,
  pathToName
}: {
  title: string
  subTitle?: string
  pathname?: string
  pathToName?: PathToName
}) => (
  <div>
    <div className="text-7xl font-bold">{title}</div>
    <div className={cn('mt-4 mb-14 h-6 font-medium', { invisible: !subTitle })}>{subTitle}</div>
    <BreadCrumbs pathname={pathname} pathToName={pathToName} />
  </div>
)
export default PageNav
