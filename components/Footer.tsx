import links from '@/config/links'
import Link from 'next/link'
import Image from 'next/image'

const linkGroups = [
  ['Company', 'Service'],
  ['Works', 'News', 'Contact']
].map((group) => links.filter((link) => group.includes(link.name)))

const Footer = () => (
  <div className="text-left flex flex-col md:flex-row gap-10 text-4xl mt-24">
    <div>
      <Link href={'/'}>
        <Image src="/logo_text.png" alt="Mindox Logo" width={150} height={58} />
      </Link>
    </div>
    {linkGroups.map((group, index) => (
      <ul key={index} className="flex flex-col gap-y-10">
        {group.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="p-6 hover:text-gray-400 --link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    ))}
  </div>
)

export default Footer
