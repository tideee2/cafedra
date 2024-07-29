// todo get this data from server
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import BackArrowIcon from '@/components/icons/back-arrow'
import { CONFIG } from '@/constants/config'
import InlineLoader from '@/components/InlineLoader'
import type { AdministrationItem } from '@/interfaces/administration-item'
import PublicMemberList from '@/app/(main)/a_dministration/[memberId]/PublicMemberList'

interface Props {
  params: {
    memberId: number
  }
}
export default function MemberPublicPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [memberItem, setMember] = useState<AdministrationItem | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch(`${CONFIG.api.administration}/${Number(params.memberId)}`)
        .then(res => res.json())
        .then((memberData) => {
          setMember(memberData)
        })
        .catch((_) => {
          setMember(undefined)
        })
        .finally(() => setLoading(false))
    }, 30)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
          <Link className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100" href="/a_dministration">
            <BackArrowIcon />
            <span className="text-xl font-bold">До списку працівників</span>
          </Link>
          { isLoading && !memberItem
            ? <div hidden={!isLoading}><InlineLoader /></div>
            : (
                <div className="flex flex-col text-text-primary pb-5 mb-4">
                  <h1 className="pt-12 pb-10 text-5xl text-update-blue">{ memberItem?.pib }</h1>
                  <div className="flex mb-5">
                    <img alt={`фото ${memberItem?.pib}`} src={memberItem?.photo} />
                  </div>
                  <PublicMemberList memberItem={memberItem} />
                </div>
              ) }
        </div>
      </section>
    </>
  )
}
