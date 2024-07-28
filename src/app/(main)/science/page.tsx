import CommonHeaderContent from '@/components/main_page/common-header'
import { sciencePageHeaderInfo } from '@/constants/header'
import ScienceMainPage from '@/app/(main)/science/science-main-page'
import SciencePublications from '@/app/(main)/science/science-publications'

export default function SciencePage() {
  return (
    <>
      <CommonHeaderContent data={sciencePageHeaderInfo} />
      <ScienceMainPage />
      <SciencePublications />
    </>
  )
}
