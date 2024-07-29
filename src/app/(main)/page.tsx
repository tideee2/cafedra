'use client'

import useOnMount from '@mui/utils/useOnMount'
import { useState } from 'react'
import MainHeaderContent from '@/components/main_page/common-header'
import MainPageContent from '@/components/main_page/main-page-content'
import { CONFIG } from '@/constants/config'
import type { MainPageContentInterface, MainPageInterface } from '@/interfaces/main-page.interface'
import type { IHeaderInfo } from '@/interfaces/header-interfaces'
import { HeaderType } from '@/interfaces/header-interfaces'

export default function Home() {
  const [headerInfo, setHeaderInfo] = useState<IHeaderInfo | null>(null)
  const [pageContent, setPageContent] = useState<MainPageContentInterface | null>(null)
  const [isLoading, setLoading] = useState(true)

  useOnMount(() => {
    setLoading(true)
    fetch(`${CONFIG.api.mainPage}`)
      .then(res => res.json())
      .then((data: MainPageInterface[]) => {
        if (!data?.length) {
          return
        }
        setHeaderInfo({
          img: data[0]?.img || '',
          title: data[0]?.title || '',
          type: HeaderType.Main,
          descriptionItems: data[0]?.subTitle
            ? [{
                text: data[0]?.subTitle || '',
              }]
            : [],
        })
        const mainItems = (data[0]?.mainItems || [])
          .map(((item, index) => ({
            ...item,
            // @ts-expect-error need to fix
            img: data[0][`itemImg${index + 1}`],
          })))
        setPageContent({
          mainItems,
          sectionTitle: data[0]?.sectionTitle || '',
        })
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  })
  return (
    <>
      { isLoading
        ? <h1>Loading...</h1>
        : (
            <>
              <MainHeaderContent data={headerInfo} />
              <MainPageContent mainPageContent={pageContent || null} />
            </>
          )}
    </>
  )
}
