import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Кафедра інформаційних систем та мереж',
    default: 'Кафедра інформаційних систем та мереж',
  },
  description: 'Кафедра «Інформаційні системи та мережі» утворена 1-го червня 1995 року наказом ректора «Львівської політехніки» після прийняття відповідної ухвали Вченою радою Університету.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col bg-update-bg">
          { children }
        </main>
        <Footer />
      </body>
    </html>
  )
}
