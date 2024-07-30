import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'
import type { SciencePublication } from '@/interfaces/science'

interface Props {
  params: { publicationId: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const publication: SciencePublication = await fetch(`${CONFIG.api.publications}/${Number(params.publicationId)}`)
    .then(res => res.json())

  const title = publication.title ? `Публікація: ${publication.title}` : 'Публікація'
  return {
    title,
    openGraph: {
      title,
      description: publication?.content || '',
      url: 'https://cafedra-neon.vercel.app/',
      images: '/images/new_main_bg.png',
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
