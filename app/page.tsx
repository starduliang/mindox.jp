import Strength from './home/Strength'
import Hero from './home/Hero'
import DefaultContainer from './company/layout'

const Home = () => (
  <DefaultContainer>
    <main className="space-y-48">
      <Hero />
      <Strength />
    </main>
  </DefaultContainer>
)

export default Home
