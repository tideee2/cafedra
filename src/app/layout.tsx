import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // title: 'Кафедра інформаційних систем та мереж',
  // description: 'Кафедра «Інформаційні системи та мережі» утворена 1-го червня 1995 року наказом ректора «Львівської політехніки» після прийняття відповідної ухвали Вченою радою Університету.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        { children }
      </body>
    </html>
  )
}
