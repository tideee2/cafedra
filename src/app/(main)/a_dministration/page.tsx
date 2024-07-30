'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { AdministrationItem } from '@/interfaces/administration-item'
import { CONFIG } from '@/constants/config'

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
  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex flex-col items-center">
          <h1 className="text-3xl uppercase mb-8 text-accent-green">Склад кафедри</h1>
          {
            isLoading
              ? <h1>Loading...</h1>
              : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {
                        members.map((member: AdministrationItem) => (
                          <div className="flex flex-col text-center border-accent-green text-secondary-blue font-bold hover:opacity-80 hover:underline ">
                            <Link className="flex flex-col gap-3 p-4" href={`/a_dministration/${member.id}`}>
                              <img
                                alt={`фото ${member.pib}`}
                                className="w-full h-[200px]"
                                height={100}
                                src={member.photo}
                                width={100}
                              />
                              { member.pib }
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </>
                )
          }
        </div>
      </section>
    </>
  )
}
