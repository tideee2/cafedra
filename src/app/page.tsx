import MainHeaderContent from '@/components/main_page/common-header'
import MainPageContent from '@/components/main_page/main-page-content'
import { mainPageHeaderInfo } from '@/constants/header'

export default function Home() {
  return (
    <>
      <MainHeaderContent props={mainPageHeaderInfo} />
      <MainPageContent />
    </>
  )
}
