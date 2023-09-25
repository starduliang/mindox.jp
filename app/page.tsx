import Strength from './home/Strength'
import Hero from './home/Hero'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

const Home = () => (
  <>
    <Header />
    <main className="space-y-48">
      <Hero />
      <Strength />
    </main>
    <Footer className="mt-56" />
  </>
)

export default Home
