'use client'

import { useEffect, useState } from 'react'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublication } from '@/interfaces/science'

interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [data, setData] = useState<{ publications: SciencePublication[] } | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [publication, setPublication] = useState<SciencePublication | undefined>(undefined)
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then((data) => {
        setData(data)
        const pub = data.publications.find((p: SciencePublication) => Number(p.id) === Number(params.publicationId)) || {} as SciencePublication
        setPublication(pub)
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [params.publicationId])
  return (
    <>
      { isLoading
        ? <h1>Loading...</h1>
        : <EditPublicationTemplate publication={publication} />}
    </>
  )
}
