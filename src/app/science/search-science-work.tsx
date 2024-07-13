'use client'

import CustomButton from '@/components/custom-button'

export default function SearchScienceWork() {
  return (
    <>
      <div className="w-full bg-update-blue">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white flex justify-between items-center py-10">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center">
            <div className="font-black text-white text-4xl text-center uppercase">
              Пошук&nbsp;публікацій
            </div>
            <div className="flex justify-center px-4 gap-5 w-full">
              <input className="flex-1 py-5 px-6 w-full lg:min-w-[400px] placeholder-gray placeholde:font-normal text-lg font-bold text-text-primary" placeholder="Введіть назву або ключове слово" type="text" />
              <CustomButton type="regular">Шукати</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
