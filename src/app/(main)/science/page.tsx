'use client'

import { useEffect, useState } from 'react'
import CommonHeaderContent from '@/components/main_page/common-header'
import ScienceMainPage from '@/app/(main)/science/science-main-page'
import SciencePublications from '@/app/(main)/science/science-publications'
import { CONFIG } from '@/constants/config'
import type { SciencePageInfo } from '@/interfaces/main-page.interface'
import type { IHeaderInfo } from '@/interfaces/header-interfaces'
import { HeaderType } from '@/interfaces/header-interfaces'

export default function SciencePage() {
  const [data, setData] = useState<IHeaderInfo | null>(null)

  useEffect(() => {
    fetch(`${CONFIG.api.scienceInfo}`)
      .then(res => res.json())
      .then((requestData: SciencePageInfo[]) => {
        setData({
          title: requestData[0].title || '',
          type: HeaderType.Science,
          img: requestData[0].img || '',
          descriptionItems: [{
            text: requestData[0].text || '',
          }],
        })
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <>
      <CommonHeaderContent data={data} />
      <ScienceMainPage />
      <SciencePublications />
    </>
  )
}
