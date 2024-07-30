'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

import HeaderLogo from '@/components/header/logo/header-logo'
import HeaderMenuButton from '@/components/header/menu-button'
import HeaderLinks from '@/components/header/header-links'
import GlassesIcon from '@/components/icons/GlassesIcon'

export default function Header() {
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false)
  const [accessibilityMenuVisible, setAccessibilityMenuVisible] = useState(false)

  const changeMenuVisibility = () => {
    setHeaderMenuVisible(!headerMenuVisible)
  }

  const linkClick = () => {
    setHeaderMenuVisible(false)
  }

  const changeAccessibilityMenuVisibility = () => {
    setAccessibilityMenuVisible(!accessibilityMenuVisible)
  }

  const changeContrast = () => {
    document.documentElement.classList.toggle('contrast')
  }
  const changeFont = (value: string) => {
    const root = getComputedStyle(document.documentElement)
    const fontValue = +root.getPropertyValue('--base-font-size').replace('px', '')
    const multiplier = value === '+' ? 1 : -1

    const newValue = fontValue + multiplier * 2
    if (!!fontValue && newValue > 10 && newValue <= 24) {
      document.documentElement.style.setProperty('--base-font-size', `${newValue}px`)
    }
  }
  return (
    <>
      <header className="w-full bg-white">
        <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-2">
            <div className="flex flex-col">
              <div className={`flex justify-center sm:justify-end `}>
                <div className={`${styles.accessWrapper} flex flex-col md:flex-row gap-3 ${accessibilityMenuVisible ? 'w-auto' : ''}`}>
                  <button className={`${styles.accessBtn} flex gap-2`} onClick={changeAccessibilityMenuVisibility}>
                    <GlassesIcon className="size-5 glass-icon" />
                    <span className="text-md font-bold uppercase">Людям&nbsp;з&nbsp;порушенням&nbsp;зору</span>
                  </button>
                  <div hidden={!accessibilityMenuVisible}>
                    <div className="flex gap-1">
                      <button onClick={e => changeFont('+')}>A+</button>
                      <button onClick={e => changeFont('-')}>A-</button>
                      <button onClick={changeContrast}>Contrast</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex pb-3 pt-1 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <HeaderLogo />
                  <div className="flex-1"></div>
                  <div className="hidden md:ml-6 md:flex items-center">
                    <div className="flex space-x-1 lg:space-x-4 flex-wrap">
                      <HeaderLinks linkClick={linkClick} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  <HeaderMenuButton onClick={changeMenuVisibility} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden" hidden={!headerMenuVisible} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <HeaderLinks linkClick={linkClick} />
            </div>
          </div>
        </nav>
      </header>
      <a className={styles.speakOnly} href="#content" title="Пропустити навігацію">Пропустити навігацію</a>
    </>
  )
}
