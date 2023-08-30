import Link from 'next/link'

const Header = () => (
  <div>
    <ul className="flex gap-4 p-4">
      <li>
        <Link href={'/company'}>Company</Link>
      </li>
      <li>
        <Link href={'/service'}>Service</Link>
      </li>
      <li>
        <Link href={'/works'}>Works</Link>
      </li>
      <li>
        <Link href={'/news'}>News</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact</Link>
      </li>
      <li>
        <Link href={'/vercel'}>Vercel</Link>
      </li>
    </ul>
  </div>
)

export default Header
