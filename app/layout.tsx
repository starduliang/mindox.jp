import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layouts/Header'
import cn from 'classnames'
import Footer from '@/components/layouts/Footer'
import { Metadata } from 'next'
import { AppProvider } from '@/components/contexts/AppProvider'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'before:--body-divider')}>
        <AppProvider>
          <Header></Header>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mindox Inc. | React.jsを活用したウェブアプリ開発の専門家',
  description: 'Mindox Inc. homepage'
}

export default RootLayout
