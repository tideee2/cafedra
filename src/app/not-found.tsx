import React from 'react'

import Link from 'next/link'

import '@/app/globals.css'

import { headers } from 'next/headers'
import Header from '@/components/header/header'

import Footer from '@/components/footer'

export default function NotFound() {
  const headersList = headers()
  const referer = headersList.get('Referer')
  return (
    <main className="flex min-h-screen flex-col bg-update-bg" id="content">
      <Header />
      <div className="w=full h-60 text-lg font-bold text-custom-blue1 p-12 underline bg-custom-gray1">
        <Link href="https://cafedra-neon.vercel.app/">Повернутися на головну сторінку</Link>
      </div>
      <div className="w-full h-52 text-xl bg-custom-gray1 p-12">Нажаль
        <span className="font-bold">, { referer }
        </span> - Сторінка не знайдена
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}
