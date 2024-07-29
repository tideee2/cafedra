'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CONFIG } from '@/constants/config'
import type { AdministrationItem, AdministrationItemForSave } from '@/interfaces/administration-item'
import EditMemberTemplate from '@/app/admin/_components/EditMemberTemplate'

interface Props {
  params: {
    memberId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [memberItem, setMember] = useState<AdministrationItem | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.administration}/${params.memberId}`)
      .then(res => res.json())
      .then((data: AdministrationItem) => {
        setMember(data)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [params.memberId])

  function saveMember(data: AdministrationItemForSave, memberId?: number | null): void {
    if (!data || !memberId) {
      return
    }
    setLoading(true)
    const { photo, filePath, file, ...tempData } = { ...data }
    const formData = new FormData()
    formData.set('data', JSON.stringify(tempData))
    if (!file) {
      formData.append('img', new File([], ''))
    }
    else {
      formData.append('img', file as File)
    }

    fetch(`${CONFIG.api.administration}/${memberId}`, {
      method: 'PUT',
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
      .finally(() => setLoading(false))
  }

  return (
    <>
      { isLoading
        ? <h1>Loading...</h1>
        : <EditMemberTemplate memberItem={memberItem} onSave={saveMember} />}
    </>
  )
}
