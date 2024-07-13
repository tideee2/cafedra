import type { ReactNode } from 'react'

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <h1>test layout</h1>
      {children}
    </>
  )
}
