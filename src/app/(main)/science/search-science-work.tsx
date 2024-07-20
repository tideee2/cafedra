'use client'

import { type KeyboardEvent, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'
import CustomButton from '@/components/custom-button'

export default function SearchScienceWork() {
  const router = useRouter()
  const searchField = useRef<HTMLInputElement | null>(null)
  const onSearch = () => {
    if (!searchField?.current?.value || searchField?.current?.value.length < 3) {
      return
    }
    router.push(`/science/search?q=${searchField?.current?.value}`)
  }
  const [searchFieldValue, setSearchFieldValue] = useState<string>('')
  function keyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      onSearch()
    }
  }
  return (
    <>
      <div className="w-full bg-update-blue">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white flex justify-between items-center py-10">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center">
            <div className="font-black text-white text-4xl text-center uppercase">
              Пошук&nbsp;публікацій
            </div>
            <div className="flex justify-center px-4 gap-5 w-full">
              <input
                className="flex-1 py-5 px-6 w-full lg:min-w-[400px] placeholder-gray placeholde:font-normal text-lg font-bold text-text-primary"
                onChange={e => setSearchFieldValue(e.target.value)}
                onKeyDown={keyDown}
                placeholder="Введіть назву або ключове слово"
                ref={searchField}
                type="text"
                value={searchFieldValue}
              />
              <CustomButton disabled={searchFieldValue.length < 3} onClick={onSearch} type="regular">Шукати</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
