import Container from './Container'
import Footer from './Footer'
import Header from './Header'

const DefaultContainer = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Container className="mt-56">{children}</Container>
    <Footer className="mt-56" />
  </>
)

export default DefaultContainer
