'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { headerLinks } from '@/constants/header'

export default function Header() {
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false)

  const changeMenuVisibility = () => {
    setHeaderMenuVisible(!headerMenuVisible)
  }

  const pathname = usePathname()
  const linkStyle = 'flex align-items-center px-1 lg:px-3 py-2 text-sm font-medium text-white hover:text-primary whitespace-nowrap'
  const links = headerLinks.map(link => (
    <Link
      aria-current="page"
      className={`${linkStyle} ${pathname === link.href ? 'active-link' : ''}`}
      href={link.href}
      key={link.href}
    >{link.title}
    </Link>
  ))
  return (
    <>
      <header className="w-full bg-custom-blue">
        <nav className="bg-blue-200">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="flex flex-shrink flex-grow-0 items-center" href="/">
                  <Image alt="logo" height={100} priority src="/images/logo.svg" width={100} />
                  <h1 className="hidden pl-1 lg:pl-2 md:flex text-white text-sm lg:text-base min-w-40">Кафедра якогось університету</h1>
                </Link>
                <div className="flex-1"></div>
                <div className="hidden md:ml-6 md:flex items-center">
                  <div className="flex space-x-1 lg:space-x-4">
                    { links }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden text-white">
                <button
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={changeMenuVisibility}
                  type="button"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    aria-hidden="true"
                    className="block h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    aria-hidden="true"
                    className="hidden h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden" hidden={!headerMenuVisible} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              { links }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
