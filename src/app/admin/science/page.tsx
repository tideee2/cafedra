'use client'

import { useEffect, useState } from 'react'
import type { SciencePublication } from '@/interfaces/science'
import CustomButton from '@/components/custom-button'
import PlusIcon from '@/components/icons/PlusIcon'
import SciencePublicationsTable from '@/app/admin/_components/SciencePublicationsTable'
import Loader from '@/components/Loader'
import { CONFIG } from '@/constants/config'

export default function ScienceAdminPage() {
  const [publications, setPublications] = useState<SciencePublication[]>([])
  const [isLoading, setLoading] = useState(true)

  // todo add pagination for publications list
  useEffect(() => {
    fetch(`${CONFIG.api.publications}?count=1000`)
      .then(res => res.json())
      .then((data) => {
        setPublications(data?.publications || [])
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const onDelete = (id: number) => {
    if (!id) {
      return
    }
    setLoading(true)
    fetch(`${CONFIG.api.publications}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        const newPublications = publications.filter((p: SciencePublication) => p.id !== id)
        setPublications(newPublications)
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Наукова робота</h1>
          <CustomButton
            className="flex gap-2 items-center normal-case self-center !p-4"
            href="/admin/science/create"
            type="regularLink"
          ><PlusIcon className="size-8" />Створити публікацію
          </CustomButton>
        </div>
        { isLoading
          ? <div hidden={!isLoading}><Loader /></div>
          : <SciencePublicationsTable data={publications || []} onDeletePublication={onDelete} />}
      </main>
    </>
  )
}
