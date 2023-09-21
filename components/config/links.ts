type LinkName = 'Company' | 'Service' | 'Works' | 'News' | 'Blog' | 'Contact'

const links: { name: LinkName; href: string }[] = [
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
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export default links
