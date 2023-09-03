import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import cn from 'classnames'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'before:--body-divider')}>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mindox Inc. | React.jsを活用したウェブアプリ開発の専門家',
  description: 'Mindox Inc. homepage'
}

export default RootLayout
