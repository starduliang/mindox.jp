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
  <div className="border-b border-gray-800">
    <div className="p-2 max-w-screen-xl mx-auto flex justify-between items-center ">
      <div className="flex gap-[80px] items-center">
        <div>
          <Image src="/logo.png" alt="Mindox Logo" width={260} height={58} priority />
        </div>
        <ul className="flex gap-8">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="p-6 header-link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href={'/contact'} className="p-6 header-link">
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default Header
