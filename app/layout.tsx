import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindox Inc.',
  description: 'Mindox Inc. homepage'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'before:--body-divider')}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
