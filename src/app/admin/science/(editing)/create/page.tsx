'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublicationForSave } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'
import Loader from '@/components/Loader'

// todo need to add popup messages about success / error creating
export default function ScienceAdminPageCreate() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  function savePublication(publication: SciencePublicationForSave): void {
    if (!publication) {
      return
    }
    setIsLoading(true)
    const { filePath, file, ...publicationData } = { ...publication }

    fetch(`${CONFIG.api.publications}/add`, {
      method: 'POST',
      body: JSON.stringify(publicationData),
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
      .finally(() => setIsLoading(false))
  }
  return (
    <>
      { isLoading
        ? <div className="relative" hidden={!isLoading}><Loader /></div>
        : <EditPublicationTemplate onSave={savePublication} />}
    </>
  )
}
