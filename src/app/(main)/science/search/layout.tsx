import type { ReactNode } from 'react'
import React, { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Результати пошуку публікацій',
}
export default function SearchLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Suspense>
        { children }
      </Suspense>
    </>
  )
}
