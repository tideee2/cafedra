'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import CustomInput from '@/components/form/CustomInput'
import { titleOptions } from '@/app/(login-actions)/login/auth.constants'
import { CONFIG } from '@/constants/config'
import type { MainPageInterface } from '@/interfaces/main-page.interface'
import CustomFileInput from '@/components/form/CustomFileInput'

export default function CommonScienceAdminPage() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<MainPageInterface | null>(null)
  const {
    register,
    handleSubmit,
    getValues,
    formState: {
    },
    control,
    watch,
  } = useForm(({
    defaultValues: {
      title: data?.title || '',
      img: data?.img || '',
      subTitle: data?.subTitle || '',
      sectionTitle: data?.sectionTitle || '',
      mainItems: data?.mainItems || [],
    },
  }))
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'mainItems',
  })
  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.mainPage}`)
      .then(res => res.json())
      .then((requestData: MainPageInterface[]) => {
        setData(requestData[0])
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Головна сторінка</h1>
        </div>
        <div className="bg-white p-6 text-sm">
          { isLoading
            ? <h1>Loading...</h1>
            : (
                <form className="flex flex-col gap-5">
                  {data?.title}
                  <CustomInput
                    className="!p-3 normal-case"
                    initialValue={data?.title}
                    placeholder="Введіть заголовок сторінки"
                    title="Заголовок сторінки"
                    type="regular"
                    {...register('title', titleOptions)}
                  />
                  <CustomInput
                    className="!p-3 normal-case !min-h-[6rem]"
                    initialValue={data?.subTitle}
                    placeholder="Введіть підзаголовок сторінки"
                    title="Підзаголовок сторінки"
                    type="textarea"
                    {...register('subTitle', titleOptions)}
                  />
                  <CustomFileInput
                    filePath={data?.img}
                    labelText="Головне зображення"
                    {...register('img', { required: 'Додайте головне зображення' })}
                  />
                  <CustomInput
                    className="!p-3 normal-case"
                    initialValue={data?.sectionTitle}
                    placeholder="Введіть назву секції сторінки"
                    title="Назва секції сторінки"
                    {...register('sectionTitle', titleOptions)}
                  />
                  {
                    data?.mainItems.map((item, index) => (
                      <div className="" key={item.id}>
                        <div className="text-lg">Колонка { index + 1 }</div>
                        <CustomInput
                          className="!p-3 normal-case"
                          initialValue={item?.itemTitle}
                          placeholder="Введіть назву секції сторінки"
                          title="Назва колонки"
                          {...register(`mainItems.${index}.itemTitle`, titleOptions)}
                        />
                        <CustomFileInput
                          filePath={item?.img}
                          labelText="Головне зображення"
                          {...register(`mainItems.${index}.img`, { required: 'Додайте зображення секції' })}
                        />
                      </div>
                    ))
                  }
                </form>
              )}
        </div>
      </main>
    </>
  )
}
