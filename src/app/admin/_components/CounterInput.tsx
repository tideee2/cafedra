'use client'

import type { BaseSyntheticEvent } from 'react'
import { useState } from 'react'

interface InputInterface {
  title: string
  maxCount: number
  showCounter: boolean
  type: 'regular' | 'select' | 'datepicker' | 'textarea'
  placeholder: string
}

function getElementType(type: string) {
  switch (type) {
    case 'regular':
      return 'text'
    case 'datepicker':
      return 'date'
    case 'textarea':
      return 'textarea'
    default:
      return 'text'
  }
}

export default function CounterInput({ title, maxCount, type, placeholder, showCounter = true }: Partial<InputInterface>) {
  const [counter, setCounter] = useState(0)

  function onInput(event: BaseSyntheticEvent) {
    if (!showCounter) {
      return
    }
    setCounter(event.target.value.length)
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between pb-3">
          <label className="text-lg font-bold" htmlFor="counter">{title}</label>
          <div hidden={!showCounter}>
            {`${counter}/${maxCount}`}
          </div>
        </div>
        <div className="w-full">
          {
            type === 'textarea'
              ? (
                  <>
                    <textarea
                      className="w-full p-5 border-[3px] border-secondary-blue min-h-40"
                      id="counter"
                      onInput={onInput}
                      placeholder={placeholder}
                    />
                  </>
                )
              : (
                  <input
                    className="w-full p-5 border-[3px] border-secondary-blue"
                    id="counter"
                    onInput={onInput}
                    placeholder={placeholder}
                    type={getElementType(type as string)}
                  />
                )
          }
        </div>
      </div>
    </>
  )
}
