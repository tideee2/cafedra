'use client'

import { useEffect, useState } from 'react'
import styles from '@/components/global-styles.module.scss'
import CustomButton from '@/components/custom-button'
import { CONFIG } from '@/constants/config'
import type { SciencePublication } from '@/interfaces/science'
import Loader from '@/components/Loader'

function sliceStr(str: string, count = 100) {
  if (!str?.length) {
    return '...'
  }
  return `${str.slice(0, count)}...`
}
export default function SciencePublications() {
  const [publications, setPublications] = useState< SciencePublication[] | null>([])
  const [isLoading, setLoading] = useState(true)
  const [isMaxCount, setMaxCount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch(CONFIG.api.publications)
        .then(res => res.json())
        .then((publicationsData) => {
          return publicationsData
        })
        .then((publicationsData) => {
          const updatedPublications = [...publications || [], ...publicationsData.publications]
          setPublications(updatedPublications)
          setMaxCount(publicationsData.totalCount <= updatedPublications?.length)
        })
        .catch((_) => {
          setPublications([])
        })
        .finally(() => setLoading(false))
    }, 3000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="w-full bg-update-bg pt-5 pb-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between items-center pt-12 pb-6">
            <h3 className="mb-5 text-green text-center font-black text-4xl self-center">Усі публікаці факультету</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 text-text-primary my-12 relative">
              { isLoading && !publications?.length
                ? <div hidden={!isLoading}><Loader /></div>
                : publications?.map((publication, index) => (
                  <div className="p-7 bg-white flex flex-col" key={publication.id + index}>
                    <h3 className="font-bold text-xl mb-5 text-update-blue">{ publication.title }</h3>
                    <div className="flex-1"></div>
                    <p
                      className={`text-xl mb-10 ${styles.cardTitleLine}`}
                      // @ts-expect-error todo find how fix error with custom css props
                      style={{ '--bottom-line-position': '-20px' }}
                    >{ sliceStr(publication.content) }
                    </p>
                    <div className="mb-5">
                      <span className="font-bold text-xl text-update-blue">Автор:</span><br />
                      <span className="text-update-blue">{ publication.author }</span>
                    </div>
                    <CustomButton disabled href={`/science/${publication.id}`} type="regularLink">Читати
                      далі
                    </CustomButton>
                  </div>
                )) }
            </div>
          </div>
          <div className="flex justify-center" hidden={isLoading}>
            <CustomButton disabled={isMaxCount || isLoading} type="regular">Завантажити ще</CustomButton>
          </div>
        </div>
      </div>
    </>
  )
}
