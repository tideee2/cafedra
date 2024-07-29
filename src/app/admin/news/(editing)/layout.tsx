'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function EditingLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname()
  return (
    <>
      <main className="flex flex-col p-20 min-h-[calc(100vh)]">
        {children}
      </main>
    </>
  )
}
