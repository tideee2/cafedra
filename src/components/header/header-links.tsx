import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { headerLinks } from '@/constants/header'
import styles from '@/components/header/styles.module.scss'

export default function HeaderLinks({ linkClick }: { linkClick: () => void }) {
  const pathname = usePathname()
  const linkStyle = 'flex align-items-center px-1 lg:px-3 py-2 text-sm font-medium hover:text-accent-green whitespace-nowrap border-b-2-transparent'
  const isActiveLink = (link: string, path: string) => {
    return path === `${link}` || (path === '/' && link === '/#') || (`/${path.split('/')[1]}` === `${link}`)
  }
  const ariaCurrent = (link: string, path: string) => isActiveLink(link, pathname) ? 'page' : false

  return headerLinks.map(link => (
    <Link
      aria-current={ariaCurrent(link.href, pathname)}
      className={`${linkStyle} ${isActiveLink(link.href, pathname) ? styles.activeLink : ''}`}
      href={link.href}
      key={link.href}
      onClick={linkClick}
    >{ link.title }
    </Link>
  ))
}
