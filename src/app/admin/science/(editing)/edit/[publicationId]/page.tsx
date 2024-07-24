'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublication, SciencePublicationForSave } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'

interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [publication, setPublication] = useState<SciencePublication | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    fetch(`${CONFIG.api.publications}/${params.publicationId}`)
      .then(res => res.json())
      .then((data: SciencePublication) => {
        setPublication(data)
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [params.publicationId])

  function savePublication(data: SciencePublicationForSave, id?: number | null): void {
    if (!data || !id) {
      return
    }
    setLoading(true)
    const { categories, filePath, file, ...tempData } = { ...data }

    fetch(`${CONFIG.api.publications}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...tempData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((res) => {
        if (res.id && file && filePath !== res.pdfUrl) {
          const formData = new FormData()
          formData.set('id', res.id.toString())
          formData.set('file', file as File)
          return fetch(`${CONFIG.api.publications}/uploadPdf`, {
            method: 'POST',
            body: formData,
          })
        }
      })
      .then(() => {
        router.push('/admin/science')
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }

  return (
    <>
      { isLoading
        ? <h1>Loading...</h1>
        : <EditPublicationTemplate onSave={savePublication} publication={publication} />}
    </>
  )
}
