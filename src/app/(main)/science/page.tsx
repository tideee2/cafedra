import type { Metadata } from 'next'
import CommonHeaderContent from '@/components/main_page/common-header'
import { sciencePageHeaderInfo } from '@/constants/header'
import ScienceMainPage from '@/app/(main)/science/science-main-page'
import SciencePublications from '@/app/(main)/science/science-publications'

export const metadata: Metadata = {
  title: 'Усі публікаці факультету',
}
export default function SciencePage() {
  return (
    <>
      <CommonHeaderContent props={sciencePageHeaderInfo} />
      <ScienceMainPage />
      <SciencePublications />
    </>
  )
}
