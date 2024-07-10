'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

export default function Footer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const target = new Date(1919, 11, 26, 11, 59, 59)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - target.getTime()
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <footer className="bg-blue-950 text-white w-full min-h-10 flex flex-row justify-around pt-3 pb-3">
        <div className=" basis-1/3 text-xs flex flex-row items-center justify-around">
          <div className="basis 2/5">Ukraine National University. 1991-2024 </div>
          <div className="basis 3/5  flex flex-row items-center justify-between text-xs">
            <div className="basis-1/5 ml-1">D:{days}</div>
            <div className="basis-1/5 ml-1">H:{hours}</div>
            <div className="basis-1/5 ml-1">M:{minutes}</div>
            <div className="basis-1/5 ml-1">S:{seconds}</div>

          </div>
        </div>

        <div className=" basis-2/4 text-xs flex flex-row justify-between">
          <div className="flex flex-row justify-around basis-4/12 items-center">
            <Image alt="Icon location" height={4} priority src="/images/icon_location.png" width={20} />
            <div className="mr-3">Ukraine, Unknown street, 25</div>
          </div>

          <div className="flex flex-row justify-around basis-4/12 ml-2 items-center">
            <Image alt="Icon email" height={5} priority src="/images/icon_email.png" width={20} />
            <div className="mr-5">cool_university@gmail.com</div>
          </div>

          <div className="flex flex-row justify-around basis-4/12 ml-2 items-center">
            <Image alt="Icon phone" height={5} priority src="/images/icon_phone.png" width={20} />
            <div className="mr-5">Phone:+38(123)456-78-90</div>
          </div>

        </div>
      </footer>
    </>
  )
}
