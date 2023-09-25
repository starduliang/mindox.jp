'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactSupport as ContactSupportIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton } from '@mui/material'
import links from '@/components/config/links'

const headerLinks = links.filter((link) => ['Company', 'Service', 'Works', 'News', 'Blog'].includes(link.name))

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <header className="border-b border-[color-border] fixed top-0 w-full before:--header-bg-mask z-10">
      <div className="p-2 --center-content-container flex justify-between items-center ">
        <div className="flex gap-[80px] items-center">
          <Link href={'/'}>
            <Image src="/logo_text.png" alt="Mindox Logo" width={260} height={58} priority />
          </Link>
          <ul className="hidden md:flex gap-8">
            {headerLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="p-6 --link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Link href={'/contact'} className="flex p-6 --link items-center gap-2">
            <ContactSupportIcon />
            Contact
          </Link>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} className="md:hidden mr-2 ">
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
          PaperProps={{
            sx: { width: '60%' }
          }}
          className="relative"
        >
          <ul className="p-6 bg-[color-bg-dark] h-screen pt-10">
            {headerLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="--link text-xl px-6 py-4 block" onClick={toggleDrawer}>
                  {name}
                </Link>
              </li>
            ))}
            <li className="absolute right-8 bottom-8">
              <Link
                href={'/contact'}
                className="grid place-items-center w-24 h-24 border-2 border-white rounded-full"
                onClick={toggleDrawer}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
      <div className="fixed -translate-x-1/2 rotate-90 top-1/2 left-[4%] tracking-widest text-xs text-[color-text-gray]">
        Copyright © Mindox All Rights Reserved.
      </div>
    </header>
  )
}

export default Header
