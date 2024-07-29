'use client'

import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import CustomButton from '@/components/custom-button'
import { CONFIG } from '@/constants/config'
import type { ContactInterface } from '@/interfaces/contact-interfaces'
import CustomInput from '@/components/form/CustomInput'
import { commonOptions } from '@/app/(login-actions)/login/auth.constants'
import type { MainPageInterface } from '@/interfaces/main-page.interface'

export default function ContactPage() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<ContactInterface | null>(null)
  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors,
    },
    control,
    watch,
    setValue,
  } = useForm(({
    defaultValues: {
      address: data?.address || '',
      tel: data?.tel || '',
      email: data?.email || '',
      apiKey: data?.apiKey || '',
      mapId: data?.mapId || '',
    },
  }))

  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.contacts}`)
      .then(res => res.json())
      .then((requestData: ContactInterface[]) => {
        console.log(requestData)
        setData(requestData[0])
        setValue('address', requestData[0].address)
        setValue('tel', requestData[0].tel)
        setValue('email', requestData[0].email)
        setValue('apiKey', requestData[0].apiKey)
        setValue('mapId', requestData[0].mapId)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const onSave = async () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }

    fetch(`${CONFIG.api.contacts}/${data?.id || 0}`, {
      method: 'PUT',
      body: JSON.stringify({
        address: formValue.address,
        tel: formValue.tel,
        email: formValue.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((requestData: MainPageInterface[]) => {
        console.log(requestData)
      })
  }
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Сторінка контактів</h1>
          <CustomButton onClick={onSave}>Зберігти</CustomButton>
        </div>
        <div className="bg-white p-6 text-sm">
          { isLoading
            ? <h1>Loading...</h1>
            : (
                <form className="flex flex-col gap-5">
                  <CustomInput
                    className="!p-3 normal-case"
                    initialValue={data?.address}
                    placeholder="Введіть адресу університету"
                    title="Адреса університету"
                    type="regular"
                    {...register('address', commonOptions('Адреса університету'))}
                  />
                  <CustomInput
                    className="!p-3 normal-case"
                    initialValue={data?.tel}
                    placeholder="Введіть телефон університету"
                    title="Телефон університету"
                    type="regular"
                    {...register('tel', commonOptions('Телефон університету'))}
                  />
                  <CustomInput
                    className="!p-3 normal-case"
                    initialValue={data?.email}
                    placeholder="Введіть email університету"
                    title="Email університету"
                    type="regular"
                    {...register('email', commonOptions('Email університету'))}
                  />
                </form>
              )}
        </div>
      </main>
    </>
  )
}
