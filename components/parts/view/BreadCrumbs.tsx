import React from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material'
import { preventDefault } from '@/components/utils/clickUtils'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

export type PathToName = Record<string, string>

const BreadCrumbs = ({ pathname, pathToName }: { pathname?: string; pathToName?: PathToName }): JSX.Element => {
  const _pathname = usePathname()
  const pathnames = (pathname ?? _pathname).split('/').filter((x) => !!x)
  return (
    <div role="presentation" onClick={preventDefault}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link className="--link" href="/">
          Home
        </Link>
        {pathnames.map((item, index) => {
          const isLast = index === pathnames.length - 1
          const title = pathToName?.[item] ?? _.capitalize(item)
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          return (
            <Link key={item} className={cn('--link', { '--active': isLast })} href={routeTo}>
              {title}
            </Link>
          )
        })}
      </MUIBreadcrumbs>
    </div>
  )
}

export default BreadCrumbs
