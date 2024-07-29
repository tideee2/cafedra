import type { ReactNode } from 'react'
import React from 'react'
import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'
import type { AdministrationItem } from '@/interfaces/administration-item'

interface Props {
  params: { memberId: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const member: AdministrationItem = await fetch(`${CONFIG.api.administration}/${Number(params.memberId)}`)
    .then(res => res.json())

  const title = member.pib ? `Сторінка ${member.pib}` : ''
  return {
    title,
    openGraph: {
      title,
      images: member.photo ? [member.photo] : [],
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
