// todo get this data from server
'use client'

import CommonHeaderContent from '@/components/main_page/common-header'
import { sciencePageHeaderInfo } from '@/constants/header'
import ScienceMainPage from '@/app/science/science-main-page'

export default function SciencePage() {
  return (
    <>
      <CommonHeaderContent props={sciencePageHeaderInfo} />
      <ScienceMainPage />
    </>
  )
}
