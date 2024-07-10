'use client'

import { tempSciencePublications } from '@/app/science/temp_science-publications'
import styles from '@/components/global-styles.module.scss'
import CustomButton from '@/components/custom-button'

function sliceStr(str: string, count = 100) {
  return `${str.slice(0, count)}...`
}
export default function SciencePublications() {
  return (
    <>
      <div className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between items-center py-12">
            <h3 className="mb-5 font-black text-4xl self-start">Усі публікаці факультету</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 text-text-primary my-12">
              { tempSciencePublications.map(publication => (
                <div className="p-7 bg-secondary-white flex flex-col" key={publication.id}>
                  <h3 className="font-bold text-xl mb-5">{ publication.title }</h3>
                  <p
                    className={`text-xl mb-10 ${styles.cardTitleLine}`}
                    // @ts-expect-error todo find how fix error with custom css props
                    style={{ '--bottom-line-position': '-20px' }}
                  >{ sliceStr(publication.content) }
                  </p>
                  <div className="flex-1"></div>
                  <div className="mb-5">
                    <span className="font-bold text-xl">Автор:</span><br />
                    <span>{ publication.author }</span>
                  </div>
                  <CustomButton props={{ outlined: true, type: 'link', href: `/science/${publication.id}` }}>Читати
                    далі
                  </CustomButton>
                </div>
              )) }
            </div>
          </div>
          <div className="flex justify-center">
            <CustomButton>Завантажити ще</CustomButton>
          </div>
        </div>
      </div>
    </>
  )
}
