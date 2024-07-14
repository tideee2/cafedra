'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './styles.module.scss'
import { headerLinks } from '@/constants/header'

export default function SidebarLinks() {
  const pathname = usePathname()
  const linkStyle = 'flex items-center w-full p-3 text-start leading-tight font-medium transition-all hover:text-green focus:text-green active:text-blue-900 outline-none'
  const isActive = (link: string) => {
    return pathname === `/admin${link}` || (pathname === '/admin' && link === '/')
  }
  return (
    headerLinks.map(headerLink => (
      <Link
        aria-current="page"
        className={`${linkStyle} ${isActive(headerLink.href) ? styles.activeLink : ''}`}
        href={`/admin${headerLink.href}`}
        key={headerLink.href}
        tabIndex={0}
      >{ headerLink.title }
      </Link>
    ))
  )
}
