'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CONFIG } from '@/constants/config'
import Loader from '@/components/Loader'
import type { AdministrationItemForSave } from '@/interfaces/administration-item'
import EditMemberTemplate from '@/app/admin/_components/EditMemberTemplate'

// todo need to add popup messages about success / error creating
export default function MemberCreatePage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  function saveMember(memberItem: AdministrationItemForSave): void {
    if (!memberItem) {
      return
    }
    setIsLoading(true)
    const { filePath, file, ...memberData } = { ...memberItem }

    const formData = new FormData()
    formData.set('data', JSON.stringify(memberData))
    if (file) {
      formData.set('img', file as File)
    }
    else {
      formData.set('img', new File([], ''))
    }
    fetch(`${CONFIG.api.administration}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        router.push('/admin/a_dministration')
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }
  return (
    <>
      { isLoading
        ? <div className="relative" hidden={!isLoading}><Loader /></div>
        : <EditMemberTemplate onSave={saveMember} />}
    </>
  )
}
