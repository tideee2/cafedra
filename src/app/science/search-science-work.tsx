'use client'

import CustomButton from '@/components/custom-button'

export default function SearchScienceWork() {
  return (
    <>
      <div className="w-full bg-custom-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white flex justify-between items-center py-10">
          <div className="w-full">
            <div className="font-black text-white text-4xl text-center mb-6">
              Пошук публікацій
            </div>
            <div className="flex justify-center mx-auto max-w-[600px] px-4 gap-5">
              <input className="flex-1 py-5 px-6 placeholder-gray text-lg text-text-primary" placeholder="Введіть назву або ключове слово" type="text" />
              <CustomButton>Шукати</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
