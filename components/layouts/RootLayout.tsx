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
          'before:--body-divider before:--left-1  before:md:--md-left-1 after:--body-divider after:--left-3 after:md:--md-left-4'
        )}
      >
        <div className="before:--body-divider before:--left-2 before:md:--md-left-2 after:--body-divider after:md:--md-left-3">
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
