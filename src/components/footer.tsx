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
      <footer className="bg-white  w-full h-24  text-black Calibri font-bold items-center text-9px sm:flex flex-column justify-around lg:flex flex-row lg:text-12px">
        <div className=" basis-2/3 flex flex-row items-center justify-around sm: mt-8 mr-3 mb-5 lg:m-0">
          <div className="flex flex-row items-center justify-start uppercase ">
            <Image alt="Icon" height={5} priority src="/images/1.png" width={10} />
            <div className="ml-2">
              ну львівська політехніка {year}-{month}-{day} {hours}:{minutes}:{seconds}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center md:ml-5 lg:m-0">
            <Image alt="Icon email" height={5} priority src="/images/icon_mail.png" width={17} />
            <div className="uppercase ml-3">coffice@lpnu.ua</div>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-3 basis-6/12 sm:mt-10 ml-5 lg:m-0">
          <div className="flex flex-row  items-center basis-5/12 sm:mb-8 md:mb-7 lg:m-0">
            <Image alt="Icon phone" height={5} priority src="/images/icon_phone.png" width={15} />
            <div className="ml-3">+38 032 258-22-82</div>
          </div>

          <div className="flex flex-row  basis-7/12 items-center ml-10 sm:mb-8 md:mb-7 lg:m-0">
            <Image alt="Icon location" height={4} priority src="/images/icon_addres.png" width={17} />
            <div className="uppercase ml-3">вул.C.Бандери, 12, Львів, Україна</div>
          </div>

        </div>

      </footer>
    </>
  )
}
