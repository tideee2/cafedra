'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { headerLinks } from '@/constants/header'
import styles from '@/components/header/styles.module.scss'

export default function SidebarLinks() {
  const pathname = usePathname()
  const linkStyle = 'flex items-center w-full p-3 rounded-lg text-start leading-tight font-medium transition-all hover:text-green focus:text-green active:text-blue-900 outline-none'
  return (
    headerLinks.map(headerLink => (
      <Link
        aria-current="page"
        className={`${linkStyle} ${pathname === headerLink.href ? styles.activeLink : ''}`}
        href={`/admin${headerLink.href}`}
        key={headerLink.href}
        tabIndex={0}
      >{ headerLink.title }
      </Link>
    ))
  )
}
