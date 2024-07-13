import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { headerLinks } from '@/constants/header'
import styles from '@/components/header/styles.module.scss'

export default function HeaderLinks() {
  const pathname = usePathname()
  const linkStyle = 'flex align-items-center px-1 lg:px-3 py-2 text-sm font-medium hover:text-green whitespace-nowrap border-b-2-transparent'
  return headerLinks.map(link => (
    <Link
      aria-current="page"
      className={`${linkStyle} ${pathname === link.href ? styles.activeLink : ''}`}
      href={link.href}
      key={link.href}
    >{ link.title }
    </Link>
  ))
}
