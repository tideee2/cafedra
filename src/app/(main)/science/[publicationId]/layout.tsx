import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'

interface Props {
  params: { publicationId: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const publication = await fetch(`${CONFIG.api.publications}/${Number(params.publicationId)}`).then(res => res.json())

  return {
    title: publication?.title || '',
    openGraph: {
      title: publication?.title || '',
      description: publication?.description || '',
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
