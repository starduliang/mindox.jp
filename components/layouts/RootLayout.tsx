import '@/app/globals.css'
import { Inter } from 'next/font/google'
import cn from 'classnames'
import { Metadata } from 'next'
import { AppProvider } from '@/components/contexts/AppProvider'
import Theme from '@/components/config/Theme'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'before:--body-divider before:left-[--margin]  before:md:left-[--md-margin] after:--body-divider after:left-[--1-margin-2-interval] after:md:left-[--md-1-margin-3-interval]'
        )}
      >
        <div className="before:--body-divider before:left-[--1-margin-1-interval] before:md:left-[--md-1-margin-1-interval] after:--body-divider after:md:left-[--md-1-margin-2-interval]">
          <Theme>
            <AppProvider>{children}</AppProvider>
          </Theme>
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mindox Inc. | React.jsを活用したウェブアプリ開発の専門家',
  description: 'Mindox Inc. homepage'
}

export default RootLayout
