'use client'

import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import HeaderLogo from '@/components/header/logo/header-logo'
import SidebarLinks from '@/app/admin/_components/SidebarLinks'
import LogoutIcon from '@/components/icons/LogoutIcon'
import { IsLoggedlocalStorageKey } from '@/constants/auth'

export default function AdminSidebar() {
  const router = useRouter()
  const onLogout = () => {
    setTimeout(() => {
      deleteCookie(IsLoggedlocalStorageKey)
      window.location.href = '/'
    }, 30)
  }
  return (
    <div
      className="relative flex flex-col bg-clip-border bg-white text-gray-700 h-[calc(100vh)] w-full p-4"
    >
      <div className="mb-2 p-4">
        <HeaderLogo className="flex flex-col text-center justify-center gap-3" type="sidebar" />
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        <SidebarLinks />
      </nav>
      <div className="flex-grow">
      </div>
      <button className="flex gap-2 items-center cursor-pointer hover:text-green" onClick={onLogout}>
        <LogoutIcon className="size-8" /><span className="text-lg">Вийти</span>
      </button>
    </div>
  )
}
