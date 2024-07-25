'use client'

import type { BaseSyntheticEvent } from 'react'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'

import useOnMount from '@mui/utils/useOnMount'
import OpenEyeIcon from '@/components/icons/OpenEyeIcon'
import ClosedEyeIcon from '@/components/icons/ClosedEyeIcon'
import { formatDate } from '@/hooks/utils'

interface InputInterface {
  title: string
  maxCount: number
  showCounter: boolean
  type: 'regular' | 'select' | 'datepicker' | 'textarea' | 'password'
  placeholder: string
  initialValue: string
  id: string
}

function getElementType(type: string | undefined) {
  switch (type) {
    case 'regular':
      return 'text'
    case 'datepicker':
      return 'date'
    case 'textarea':
      return 'textarea'
    case 'password':
      return 'password'
    default:
      return 'text'
  }
}
export type Ref = HTMLInputElement | HTMLTextAreaElement

export default forwardRef<Ref, Partial<InputInterface>>(function CustomInput(
  { id, initialValue = '', title, maxCount, type, placeholder, showCounter = true, ...props },
  ref,
) {
  const [counter, setCounter] = useState(0)
  const [inputValue, setValue] = useState(initialValue)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const uniqId = useId()
  if (!id) {
    id = uniqId
  }
  const [inputType, setInputType] = useState<string | undefined>('text')
  const inputRef = useRef<HTMLInputElement>()
  const additionalStyles = []
  if (type === 'password') {
    additionalStyles.push('pr-8')
  }
  useOnMount(() => {
    setInputType(getElementType(type))
  })

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

  const handleToggle = () => {
    if (inputType === 'password') {
      setInputType('text')
      setPasswordVisible(false)
    }
    else {
      setInputType('password')
      setPasswordVisible(true)
    }
    setFocusToInput()
  }

  const setFocusToInput = () => {
    setTimeout(() => {
      if (inputRef?.current) {
        inputRef.current?.focus()
        inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length
      }
    }, 0)
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between pb-3">
          <label className="text-lg font-bold" htmlFor={id}>{title}</label>
          <div hidden={!showCounter}>
            {`${counter}/${maxCount}`}
          </div>
        </div>
        <div className="w-full relative">
          {
            type === 'textarea'
              ? (
                  <>
                    <textarea
                      className="w-full p-5 border-[3px] border-secondary-blue min-h-40"
                      defaultValue={inputValue}
                      id={id}
                      onInput={onInput}
                      placeholder={placeholder}
                      ref={ref as any}
                      {...props}
                    >
                    </textarea>
                  </>
                )
              : (
                  <input
                    className={`w-full p-5 border-[3px] border-secondary-blue ${additionalStyles}`}
                    id={id}
                    onInput={onInput}
                    placeholder={placeholder}
                    ref={ref as any}
                    type={inputType}
                    value={type === 'datepicker' ? formatDate(inputValue) : inputValue}
                    {...props}
                  />
                )
          }
          {type === 'password'
            ? (
                <div className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggle}>
                  {passwordVisible ? <OpenEyeIcon className="size-6" /> : <ClosedEyeIcon className="size-6" />}
                </div>
              )
            : '' }
        </div>
      </div>
    </>
  )
})
