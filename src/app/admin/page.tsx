'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import CustomInput from '@/components/form/CustomInput'
import { titleOptions } from '@/app/(login-actions)/login/auth.constants'
import { CONFIG } from '@/constants/config'
import type { MainPageInterface } from '@/interfaces/main-page.interface'
import CustomFileInput from '@/components/form/CustomFileInput'
import CustomButton from '@/components/custom-button'

export default function CommonScienceAdminPage() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<MainPageInterface | null>(null)

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
  watch(() => {

  })
  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.mainPage}`)
      .then(res => res.json())
      .then((requestData: MainPageInterface[]) => {
        setData({
          ...requestData[0],
          mainItems: requestData[0].mainItems.slice(0, 3),
        })
        setValue('title', requestData[0].title)
        setValue('subTitle', requestData[0].subTitle)
        setValue('sectionTitle', requestData[0].sectionTitle)
        setValue('img', requestData[0].img)
        setValue('mainItems', requestData[0].mainItems.slice(0, 3))
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onSave = async () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }

    const formData = new FormData()
    formData.set('data', JSON.stringify({
      title: formValue.title,
      name: 'Home',
      subTitle: formValue.subTitle,
      sectionTitle: formValue.sectionTitle,
      mainItems: data?.mainItems.map(item => ({
        id: item.id,
        itemTitle: item.itemTitle,
        text: item.text,
      })),
    }))

    console.log(images)
    if (images) {
      if (images.img) {
        formData.set('img', images.img)
      }
      else {
        formData.append('img', new File([], ''))
      }
      const mainItemsImages = Object.entries(images).map(([key, value]) => {
        if (key === 'img') {
          return null
        }

        return value as File
      }).filter(Boolean)

      if (mainItemsImages?.length) {
        mainItemsImages.forEach((image) => {
          if (image) {
            formData.append('mainItemImgs[]', image)
          }
        })
      }
      else {
        formData.append('mainItemImgs', new File([], ''))
      }
    }
    else {
      formData.append('img', new File([], ''))
      formData.append('mainItemImgs', new File([], ''))
    }

    fetch(`${CONFIG.api.mainPage}`, {
      method: 'PUT',
      body: formData,
    })
      .then(res => res.json())
      .then((requestData: MainPageInterface[]) => {
      })
  }

  const [images, setImages] = useState<any>(null)

  const changeImg = (file: File, inputName: string) => {
    setImages({
      ...images,
      [inputName]: file,
    })
  }
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Головна сторінка</h1>
          <CustomButton onClick={onSave}>Зберігти</CustomButton>
        </div>
        <div className="bg-white p-6 text-sm">
          { isLoading
            ? <h1>Loading...</h1>
            : (
                <form className="flex flex-col gap-5">
                  <p className="text-xs text-red-700">{ errors?.title?.message }</p>
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
                    fileChange={e => changeImg(e, 'img')}
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
                          labelText={`Зображення колонки ${index + 1}`}
                          {...register(`mainItems.${index}.img`, { required: 'Додайте зображення секції' })}
                          fileChange={e => changeImg(e, `mainItems.${index}`)}
                        />
                        <CustomInput
                          className="!p-3 normal-case !min-h-[8rem]"
                          initialValue={item?.text}
                          placeholder="Введіть текст колонки"
                          title="Текст колонки"
                          type="textarea"
                          {...register(`mainItems.${index}.text`, titleOptions)}
                        />
                      </div>
                    ))
                  }
                </form>
              ) }
        </div>
      </main>
    </>
  )
}
