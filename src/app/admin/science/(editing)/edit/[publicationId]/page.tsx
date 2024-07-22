'use client'

import { useEffect, useState } from 'react'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublication } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'

interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [publication, setPublication] = useState<SciencePublication | undefined>(undefined)
  useEffect(() => {
    fetch(`${CONFIG.api.publications}/${params.publicationId}`)
      .then(res => res.json())
      .then((data: SciencePublication) => {
        setPublication(data)
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
