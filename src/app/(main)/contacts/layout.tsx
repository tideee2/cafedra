import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакти',
}
export default function ContactLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      {children}
    </>
  )
}
