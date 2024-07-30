import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Усі публікаці факультету',
  openGraph: {
    title: {
      template: '%s | Кафедра інформаційних систем та мереж',
      default: 'Кафедра інформаційних систем та мереж',
    },
    images: '/images/new_main_bg.png',
  },
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
