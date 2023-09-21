import Link from 'next/link'
import Image from 'next/image'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

import links from '@/components/config/links'

const headerLinks = links.filter((link) => ['Company', 'Service', 'Works', 'News', 'Blog'].includes(link.name))

const Header = () => (
  <header className="border-b border-[color-border] fixed top-0 w-full before:--header-bg-mask">
    <div className="p-2 --center-content-container flex justify-between items-center ">
      <div className="flex gap-[80px] items-center">
        <Link href={'/'}>
          <Image src="/logo_text.png" alt="Mindox Logo" width={260} height={58} priority />
        </Link>
        <ul className="flex gap-8">
          {headerLinks.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="p-6 --link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href={'/contact'} className="flex p-6 --link-enhanced items-center gap-2">
          <ContactSupportIcon />
          Contact
        </Link>
      </div>
    </div>
    <div className="fixed -translate-x-1/2 rotate-90 top-1/2 left-[4%] tracking-widest text-xs text-[color-text-gray]">
      Copyright © Mindox All Rights Reserved.
    </div>
  </header>
)

export default Header
