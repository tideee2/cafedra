'use client'

import { useState } from 'react'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublicationForSave } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'
import Loader from '@/components/Loader'

// todo need to add popup messages about success / error creating
export default function ScienceAdminPageCreate() {
  const [isLoading, setIsLoading] = useState(false)
  const onSave = (publication: SciencePublicationForSave) => {
    setIsLoading(true)
    fetch(`${CONFIG.api.publications}/add`, {
      method: 'POST',
      body: JSON.stringify(publication),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((publicationData) => {
        console.log(publicationData)
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }
  return (
    <>
      <EditPublicationTemplate onSave={onSave} />
      <div className="relative" hidden={!isLoading}><Loader /></div>
    </>
  )
}
