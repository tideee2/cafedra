'use client'

import { useState } from 'react'
import HeaderLogo from '@/components/header/logo/header-logo'
import HeaderMenuButton from '@/components/header/menu-button'
import HeaderLinks from '@/components/header/header-links'

export default function Header() {
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false)

  const changeMenuVisibility = () => {
    setHeaderMenuVisible(!headerMenuVisible)
  }

  return (
    <>
      <header className="w-full bg-white">
        <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex py-3 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <HeaderLogo />
                <div className="flex-1"></div>
                <div className="hidden md:ml-6 md:flex items-center">
                  <div className="flex space-x-1 lg:space-x-4">
                    <HeaderLinks />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <HeaderMenuButton onClick={changeMenuVisibility} />
              </div>
            </div>
          </div>

          <div className="md:hidden" hidden={!headerMenuVisible} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <HeaderLinks />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
