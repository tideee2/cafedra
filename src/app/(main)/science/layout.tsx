import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Усі публікаці факультету',
}
export default function SearchLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      { children }
    </>
  )
}
