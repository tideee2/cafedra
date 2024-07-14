'use client'

import type { BaseSyntheticEvent } from 'react'
import { useEffect, useState } from 'react'

interface InputInterface {
  title: string
  maxCount: number
  showCounter: boolean
  type: 'regular' | 'select' | 'datepicker' | 'textarea'
  placeholder: string
  initialValue: string
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

export default function CounterInput({ initialValue = '', title, maxCount, type, placeholder, showCounter = true }: Partial<InputInterface>) {
  const [counter, setCounter] = useState(0)
  const [inputValue, setValue] = useState(initialValue)
  function onInput(event: BaseSyntheticEvent) {
    setValue(event.target.value)
    if (!showCounter) {
      return
    }
    setCounter(event.target.value.length)
  }

  useEffect(() => {
    setCounter((initialValue as string)?.length || 0)
  }, [initialValue])

  function formatDate(strDate: string | undefined) {
    if (!strDate) {
      return ''
    }
    return strDate
      .split('/')
      .map(s => s.trim())
      .reverse()
      .join('-')
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
                      value={inputValue}
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
                    value={type === 'datepicker' ? formatDate(inputValue) : inputValue}
                  />
                )
          }
        </div>
      </div>
    </>
  )
}
