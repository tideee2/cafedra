'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { KeyboardEvent } from 'react'
import { useRef, useState } from 'react'
import useOnMount from '@mui/utils/useOnMount'
import BackArrowIcon from '@/components/icons/back-arrow'
import type { SciencePublication } from '@/interfaces/science'
import CustomButton from '@/components/custom-button'
import styles from '@/components/global-styles.module.scss'
import { CONFIG } from '@/constants/config'
import InlineLoader from '@/components/InlineLoader'

export default function ScienceSearchPage() {
  const searchParams = useSearchParams()

  const search = searchParams.get('q')

  const [publications, setPublications] = useState<SciencePublication[] | null>([])
  const [isLoading, setLoading] = useState(true)
  const [searchFieldValue, setSearchFieldValue] = useState<string>(search || '')

  useOnMount(() => {
    fetch(`${CONFIG.api.publications}/search?q=${search}`)
      .then(res => res.json())
      .then((data) => {
        setPublications(data || [])
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  })

  const searchField = useRef<HTMLInputElement | null>(null)
  const onSearch = () => {
    if (!searchField?.current?.value || searchField?.current?.value.length < 3) {
      return
    }
    // todo find the way how get new publications and change route via react way
    // router.push(`/science/search?q=${searchField?.current?.value}`)
    // setSearchFieldValue(searchField?.current?.value)
    location.href = `/science/search?q=${searchField?.current?.value}`
  }

  function sliceStr(str: string, count = 100) {
    return `${str.slice(0, count)}...`
  }

  if (searchField?.current && typeof search === 'string') {
    searchField.current.value = search
  }

  function keyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Link
            className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100"
            href="/science"
          >
            <BackArrowIcon />
            <span className="text-xl font-bold">До списку публікацій</span>
          </Link>
          <div className="flex flex-col w-4/5 text-text-primary pb-5 mb-4">
            <div className="pt-12 pb-10 text-5xl text-update-blue">Результати пошуку</div>
          </div>
          <div className="">
            За пошуковим запитом &quot;<b>{ search }</b>&quot; було
            знайдено { publications?.length || 0 } результат(ів).
          </div>
          <div className="flex justify-center gap-5 w-full py-8">
            <input
              className="flex-1 py-5 px-6 w-full lg:min-w-[400px] placeholder-gray placeholde:font-normal text-lg font-bold text-text-primary"
              onChange={e => setSearchFieldValue(e.target.value)}
              onKeyDown={keyDown}
              placeholder="Введіть назву або ключове слово"
              ref={searchField}
              type="text"
              value={searchFieldValue}
            />
            <CustomButton
              disabled={isLoading || searchFieldValue?.length < 3}
              onClick={onSearch}
              type="regular"
            >Шукати
            </CustomButton>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 text-text-primary my-12"
            hidden={!publications?.length}
          >
            { isLoading
              ? <div hidden={!isLoading}><InlineLoader /></div>
              : (publications && publications.map(publication => (
                  <div className="p-7 bg-white flex flex-col" key={publication.id}>
                    <h3 className="font-bold text-xl mb-5 text-update-blue">{ publication.title }</h3>
                    <p
                      className={`text-xl mb-10 ${styles.cardTitleLine}`}
                      // @ts-expect-error todo find how fix error with custom css props
                      style={{ '--bottom-line-position': '-20px' }}
                    >{ sliceStr(publication.content) }
                    </p>
                    <div className="flex-1"></div>
                    <div className="mb-5">
                      <span className="font-bold text-xl text-update-blue">Автор:</span><br />
                      <span className="text-update-blue">{ publication.author }</span>
                    </div>
                    <CustomButton href={`/science/${publication.id}`} type="regularLink">Читати
                      далі
                    </CustomButton>
                  </div>
                ))) }
          </div>
        </div>
      </section>
    </>
  )
}
