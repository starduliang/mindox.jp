type LinkName = 'Company' | 'Service' | 'Works' | 'News' | 'Articles' | 'Contact'

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
    name: 'Articles',
    href: '/articles'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export default links
