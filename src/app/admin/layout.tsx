import type { ReactNode } from 'react'
import AdminSidebar from '@/app/admin/_components/AdminSidebar'

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <main className="grid grid-cols-[15rem_1fr]">
        <AdminSidebar />
        {children}
      </main>
    </>
  )
}
