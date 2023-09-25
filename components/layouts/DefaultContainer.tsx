import Container from './Container'
import Footer from './Footer'
import Header from './Header'

const DefaultContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <>
    <Header />
    <Container className={`mt-56 ${className}`}>{children}</Container>
    <Footer className="mt-56" />
  </>
)

export default DefaultContainer
