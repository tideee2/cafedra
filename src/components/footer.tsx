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
      <footer className="bg-white text-teal-900 Calibri w-full font-bold h-24 sm:flex flex-column  justify-around items-center space-y-2 lg:flex flex-row ">
        <div className=" basis-1/3 text-xs flex flex-row items-center justify-around ">
          <div className="flex flex-row items-center justify-center uppercase">
            <Image alt="Icon" height={5} priority src="/images/1.png" width={10} />
            <div className="ml-2">
              ну львівська політехніка 1816-
              {year}-{month}-{day} {hours}:{minutes}:{seconds}
            </div>
          </div>
        </div>

        <div className="basis-2/4 text-xs sm:flex flex-column justify-center space-x-4 text-center lg:flex flex-row items-center">

          <div className="flex flex-row justify-center items-center basis-4/12">
            <Image alt="Icon email" height={5} priority src="/images/icon_mail.png" width={17} />
            <div className="uppercase lg:ml-3 md:ml-1">coffice@lpnu.ua</div>
          </div>

          <div className="flex flex-row justify-center basis-4/12 items-center">
            <Image alt="Icon phone" height={5} priority src="/images/icon_phone.png" width={15} />
            <div className="lg:ml-3 md:ml-1">+38 032 258-22-82</div>
          </div>

          <div className="flex flex-row justify-center basis-6/12 items-center">
            <Image alt="Icon location" height={4} priority src="/images/icon_addres.png" width={17} />
            <div className="uppercase lg:ml-3 md:ml-1">вул.C.Бандери, 12, Львів, Україна</div>
          </div>

        </div>
      </footer>
    </>
  )
}
