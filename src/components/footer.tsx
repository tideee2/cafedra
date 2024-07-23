'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

export default function Footer() {
  const [year, setYear] = useState(0)
  const [month, setMonth] = useState(0)
  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth() + 1
      const day = now.getDate()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      setYear(year)
      setMonth(month)
      setDay(day)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <footer className="bg-white w-full  h-24  items-center flex flex-row  justify-around space-x-10">
        <div className=" basis-3/5 flex flex-row items-center justify-between text-teal-900 Calibri text-xs font-bold ">
          <div className="flex flex-row items-center justify-center uppercase basis-9/12">
            <Image alt="Icon" height={5} priority src="/images/1.png" width={10} />
            <div className="ml-2">
              ну львівська політехніка 1816-
              {year}-{month}-{day} {hours}:{minutes}:{seconds}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mr-2 basis-1/5 ">
            <Image alt="Icon email" height={5} priority src="/images/icon_mail.png" width={17} />
            <div className="uppercase lg:ml-3 md:ml-1">coffice@lpnu.ua</div>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-3  text-teal-900 Calibri text-xs font-bold basis-6/12 mr-2">
          <div className="flex flex-row justify-center items-center basis-4/12">
            <Image alt="Icon phone" height={5} priority src="/images/icon_phone.png" width={15} />
            <div className="lg:ml-3 md:ml-1">+38 032 258-22-82</div>
          </div>

          <div className="flex flex-row justify-center basis-6/12 items-center ml-10">
            <Image alt="Icon location" height={4} priority src="/images/icon_addres.png" width={17} />
            <div className="uppercase lg:ml-3 md:ml-1">вул.C.Бандери, 12, Львів, Україна</div>
          </div>

        </div>

      </footer>
    </>
  )
}
