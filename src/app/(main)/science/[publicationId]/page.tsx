// todo get this data from server
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import BackArrowIcon from '@/components/icons/back-arrow'
import CustomButton from '@/components/custom-button'
import DownloadIcon from '@/components/icons/download-icon'
import type { SciencePublication } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'
import InlineLoader from '@/components/InlineLoader'

interface Props {
  params: {
    publicationId: number
  }
}
export default function SciencePage({ params }: Props) {
  const [publication, setPublication] = useState< SciencePublication | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch(`${CONFIG.api.publications}/${Number(params.publicationId)}`)
        .then(res => res.json())
        .then((publicationData) => {
          setPublication(publicationData)
        })
        .catch((_) => {
          setPublication(null)
        })
        .finally(() => setLoading(false))
    }, 30)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const publicationContent = (content: string | undefined) => {
    return !content
      ? ''
      : content.split('\n')
        .map(paragraph => `<p>${paragraph}</p>`).join('')
  }
  const disabledStyles = !publication?.pdfUrl ? 'pointer-events-none cursor-not-allowed bg-gray' : ''
  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
          <Link className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100" href="/science">
            <BackArrowIcon />
            <span className="text-xl font-bold">До списку публікацій</span>
          </Link>
          { isLoading && !publication
            ? <div hidden={!isLoading}><InlineLoader /></div>
            : (
                <div className="flex flex-col w-4/5 text-text-primary pb-5 mb-4">
                  <h1 className="pt-12 pb-10 text-5xl text-update-blue">{ publication?.title }</h1>
                  <div className="flex gap-14 mb-14">
                    <div className="">
                      <span className="text-xl font-bold mr-1.5 text-update-blue">Автор:</span>
                      <span className="text-update-blue">{ publication?.author }</span>
                    </div>
                    <div className="">
                      <span className="text-xl font-bold mr-1.5 text-update-blue">Категорія:</span>
                      <span className="text-update-blue">{ publication?.categories[0]?.category }</span>
                    </div>
                    <div className="">
                      <span className="text-xl font-bold mr-1.5 text-update-blue">Дата:</span>
                      <span className="text-update-blue">{ publication?.dateStr }</span>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    dangerouslySetInnerHTML={{ __html: publicationContent(publication?.content) }}
                  >
                  </div>
                  <div className="flex justify-start mt-8">
                    <div className={`${!publication?.pdfUrl ? 'cursor-not-allowed bg-gray' : ''}`}>
                      <CustomButton
                        className={`flex gap-1 items-center ${disabledStyles}`}
                        href={publication?.pdfUrl || '#'}
                        rel="noopener noreferrer"
                        target="_blank"
                        type="regularLink"
                      >
                        <DownloadIcon />
                        <span>Завантажити увесь текст</span>
                      </CustomButton>
                    </div>
                  </div>
                </div>
              ) }
        </div>
      </section>
    </>
  )
}
