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
      <footer className="bg-white text-teal-900 Calibri w-full font-bold flex flex-row h-24 justify-around items-center  ">
        <div className=" lg:basis-1/3 text-xs flex flex-row items-center justify-around sm:mt-3">
          <div className="flex flex-row items-center justify-between uppercase">
            <Image alt="Icon email" height={5} priority src="/images/1.png" width={10} />
            ну львівська політехніка 1816-
            {year}-{month}-{day} {hours}:{minutes}:{seconds}
          </div>
        </div>

        <div className="basis-2/4 text-xs flex flex-row justify-between">

          <div className="flex flex-row justify-around basis-4/12 ml-2 items-center">
            <Image alt="Icon email" height={5} priority src="/images/icon_mail.png" width={17} />
            <div className="mr-5 uppercase">coffice@lpnu.ua</div>
          </div>

          <div className="flex flex-row justify-around basis-4/12 ml-2 items-center">
            <Image alt="Icon phone" height={5} priority src="/images/icon_phone.png" width={15} />
            <div className="mr-5">+38 032 258-22-82</div>
          </div>

          <div className="flex flex-row justify-around basis-6/12 items-center">
            <Image alt="Icon location" height={4} priority src="/images/icon_addres.png" width={17} />
            <div className="mr-3 uppercase">вул.C.Бандери, 12, Львів, Україна</div>
          </div>

        </div>
      </footer>
    </>
  )
}
