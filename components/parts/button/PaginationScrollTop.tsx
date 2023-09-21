import ScrollToTop from '../behavior/ScrollTop'
import Pagination, { PaginationProps } from './Pagination'

const PaginationScrollTop = (props: PaginationProps) => (
  <ScrollToTop>
    <Pagination {...props} />
  </ScrollToTop>
)

export default PaginationScrollTop
