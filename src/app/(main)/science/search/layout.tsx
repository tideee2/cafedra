import type { ReactNode } from 'react'
import React, { Suspense } from 'react'

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
