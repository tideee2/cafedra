'use client'

import { useEffect, useState } from 'react'
import CustomButton from '@/components/custom-button'
import PlusIcon from '@/components/icons/PlusIcon'
import Loader from '@/components/Loader'
import { CONFIG } from '@/constants/config'
import type { AdministrationItem } from '@/interfaces/administration-item'
import MembersTable from '@/app/admin/_components/MembersTable'

export default function AdministrationPage() {
  const [members, setMembers] = useState<AdministrationItem[]>([])
  const [isLoading, setLoading] = useState(true)

  // todo add pagination for publications list
  useEffect(() => {
    fetch(`${CONFIG.api.administration}`)
      .then(res => res.json())
      .then((data: AdministrationItem[]) => {
        setMembers(data || [])
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
    fetch(`${CONFIG.api.administration}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        const updatedMembers = members.filter((p: AdministrationItem) => p.id !== id)
        setMembers(updatedMembers)
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Редагувати членів кафедри</h1>
          <CustomButton
            className="flex gap-2 items-center normal-case self-center !p-4"
            href="/admin/a_dministration/create"
            type="regularLink"
          ><PlusIcon className="size-8" />Додати працівника
          </CustomButton>
        </div>
        { isLoading
          ? <div hidden={!isLoading}><Loader /></div>
          : <MembersTable data={members || []} onDeleteMember={onDelete} /> }
      </main>
    </>
  )
}
