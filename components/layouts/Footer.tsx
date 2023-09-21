'use client'

import links from '@/components/config/links'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material'
import ContactCard from '@/app/contact/ContactCard'

const linkGroups = [
  ['Company', 'Service'],
  ['Works', 'News', 'Contact']
].map((group) => links.filter((link) => group.includes(link.name)))

const Footer = ({ className }: { className?: string }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container maxWidth="lg" className={'gap-10 flex flex-col gap-y-16 ' + className}>
      <ContactCard />
      <div className="text-left grid grid-cols-1 md:grid-cols-3 text-4xl">
        <div className="py-4 px-8">
          <Link href={'/'}>
            <Image
              src="/logo_text.png"
              alt="Mindox Logo"
              width={isSmallScreen ? 150 : 300}
              height={isSmallScreen ? 39 : 58}
            />
          </Link>
        </div>
        {linkGroups.map((group, index) => (
          <ul key={index}>
            {group.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="block p-6 --link-enhanced relative">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mt-16 p-6 text-xs text-[color-text-gray]">Copyright © Mindox All Rights Reserved.</div>
    </Container>
  )
}
export default Footer
