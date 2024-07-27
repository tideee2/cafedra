import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { CONFIG } from '@/constants/config'

interface Props {
  params: { publicationId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const publication = await fetch(`${CONFIG.api.publications}/${Number(params.publicationId)}`).then(res => res.json())

  return {
    title: publication.title,
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
