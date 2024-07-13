// todo get this data from server
'use client'

import Link from 'next/link'
import BackArrowIcon from '@/components/icons/back-arrow'
import { tempSciencePublications } from '@/app/science/temp_science-publications'
import CustomButton from '@/components/custom-button'
import DownloadIcon from '@/components/icons/download-icon'

interface Props {
  params: {
    publicationId: number
  }
}
export default function SciencePage({ params }: Props) {
  const data = tempSciencePublications.find(publication => publication.id === Number(params.publicationId))

  if (!data) {
    return <h1>Error</h1>
  }

  const publicationContent = data.content.split('\n')
    .map(paragraph => `<p>${paragraph}</p>`).join('')
  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Link className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100" href="/science">
            <BackArrowIcon />
            <span className="text-xl font-bold">До списку публікацій</span>
          </Link>
          <div className="flex flex-col w-4/5 text-text-primary pb-5 mb-4">
            <h1 className="pt-12 pb-10 text-5xl text-update-blue">{data.title}</h1>
            <div className="flex gap-14 mb-14">
              <div className="">
                <span className="text-xl font-bold mr-1.5 text-update-blue">Автор:</span>
                <span className="text-update-blue">{ data.author }</span>
              </div>
              <div className="">
                <span className="text-xl font-bold mr-1.5 text-update-blue">Категорія:</span>
                <span className="text-update-blue">{ data.categories[0] }</span>
              </div>
              <div className="">
                <span className="text-xl font-bold mr-1.5 text-update-blue">Автор:</span>
                <span className="text-update-blue">{ data.dateStr }</span>
              </div>
            </div>
            <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: publicationContent }}></div>
          </div>

          <div className="flex justify-start">
            <CustomButton className="flex gap-1" type="regular">
              <DownloadIcon />
              <span>Завантажити увесь текст</span>
            </CustomButton>
          </div>
        </div>
      </section>
    </>
  )
}
