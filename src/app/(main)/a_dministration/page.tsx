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
                  <table>
                    <tr className="text-left">
                      <th className="p-4">
                        №
                      </th>
                      <th className="p-4">
                        ПІБ
                      </th>
                      <th className="p-4">
                        Науковий рівень
                      </th>
                      <th className="p-4">
                        Вчене звання
                      </th>
                    </tr>
                    {
                      members.map((member: AdministrationItem) => (
                        <tr className="" key={member.id}>
                          <td className="p-4">
                            { member.id }
                          </td>
                          <td className="text-update-blue hover:opacity-80 hover:underline p-4">
                            <Link href={`/a_dministration/${member.id}`} title={member.pib}>{ member.pib }</Link>
                          </td>
                          <td className="p-4">
                            { member.scientificLevel }
                          </td>
                          <td className="p-4">
                            { member.academicLevel }
                          </td>
                        </tr>
                      ))
                    }

                  </table>
                )
          }
        </div>
      </section>
    </>
  )
}
