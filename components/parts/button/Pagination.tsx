import { Pagination as MUIPagination, PaginationProps as MUIPaginationProps } from '@mui/material'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'

export type PaginationProps = MUIPaginationProps & {
  totalCount: number
  itemsPerPage: number
}

const Pagination = (props: PaginationProps) => {
  const { page, totalCount, itemsPerPage, onChange } = props
  const count = Math.ceil(totalCount / itemsPerPage)
  const router = useRouter()

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    onChange && onChange(event, value)
    router.push(`?page=${value}`)
  }

  return <MUIPagination count={count} page={page} onChange={handlePageChange} />
}

export default Pagination
