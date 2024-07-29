'use client'

import React from 'react'

import Link from 'next/link'

import '@/app/globals.css'

import Header from '@/components/header/header'

import Footer from '@/components/footer'

export default function notFound() {
  return (
    <main className="flex min-h-screen flex-col bg-update-bg" id="content">
      <Header />
      <div className="w-full h-52 text-lg font-bold bg-custom-gray1 p-12">404 - Сторінка не знайдена</div>
      <div className="w=full h-60 text-lg font-bold text-custom-blue1 p-12 underline bg-custom-gray1">
        <Link href="https://cafedra-neon.vercel.app/">Повернутися на головну сторінку</Link>
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}
