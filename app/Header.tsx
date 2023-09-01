import Link from 'next/link'
import Image from 'next/image'

const links: { name: string; href: string }[] = [
  { name: 'Company', href: '/company' },
  {
    name: 'Service',
    href: '/service'
  },
  {
    name: 'Works',
    href: '/works'
  },
  {
    name: 'News',
    href: '/news'
  }
]

const Header = () => (
  <header className="border-b border-[color-border] fixed w-full before:--header-bg-mask">
    <div className="p-2 --center-content-container flex justify-between items-center ">
      <div className="flex gap-[80px] items-center">
        <Link href={'/'}>
          <Image src="/logo_text.png" alt="Mindox Logo" width={260} height={58} priority />
        </Link>
        <ul className="flex gap-8">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="p-6 hover:text-gray-400 --link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href={'/contact'} className="p-6 hover:text-gray-400 --link">
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
