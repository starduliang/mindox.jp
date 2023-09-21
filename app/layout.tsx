import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layouts/Header'
import cn from 'classnames'
import Footer from '@/components/layouts/Footer'
import { Metadata } from 'next'
import { AppProvider } from '@/components/contexts/AppProvider'
import Theme from '@/components/config/Theme'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'before:--body-divider')}>
        <Theme>
          <AppProvider>
            <Header />
            <Container maxWidth="lg" className="mt-56">
              {children}
            </Container>
            <Footer className="mt-56" />
          </AppProvider>
        </Theme>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mindox Inc. | React.jsを活用したウェブアプリ開発の専門家',
  description: 'Mindox Inc. homepage'
}

export default RootLayout
