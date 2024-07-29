import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'
import type { NewsItem } from '@/interfaces/news-item'

interface Props {
  params: { newsId: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const member: NewsItem = await fetch(`${CONFIG.api.news}/${Number(params.newsId)}`)
    .then(res => res.json())

  const title = member.title ? `Новина: ${member.title}` : ''
  return {
    title,
    openGraph: {
      title,
      images: member.image ? [member.image] : [],
      url: 'https://cafedra-neon.vercel.app/',
    },
  }
}
export default function PublicationLayout({
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
