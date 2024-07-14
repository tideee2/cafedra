'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import CreatePublicationHeader from '@/app/admin/_components/CreatePublicationHeader'
import EditPublicationHeader from '@/app/admin/_components/EditPublicationHeader'

export default function EditingLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname()
  return (
    <>
      <main className="flex flex-col p-20">
        {
          pathname.includes('/science/create') ? <CreatePublicationHeader /> : <EditPublicationHeader />
        }
        {children}
      </main>
    </>
  )
}
