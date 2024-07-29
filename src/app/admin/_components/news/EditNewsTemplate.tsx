'use client'

import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import CustomInput from '@/components/form/CustomInput'
import {
  commonOptions,
} from '@/app/(login-actions)/login/auth.constants'
import CustomFileInput from '@/components/form/CustomFileInput'
import type { NewsItem, NewsItemForSave } from '@/interfaces/news-item'
import EditNewsHeader from '@/app/admin/_components/news/EditNewsHeader'
import CreateNewsHeader from '@/app/admin/_components/news/CreateNewsHeader'

interface Props {
  newsItem: NewsItem
  onSave: (newsItem: NewsItemForSave, id?: number | null) => void
}
export default function EditNewsTemplate({ newsItem, onSave }: Partial<Props>) {
  const pathname = usePathname()
  const [fileImage, setFileImage] = useState<any>(null)
  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors,
      isValid,
    },
    setValue,
  } = useForm(({
    defaultValues: {
      title: newsItem?.title || '',
      image: newsItem?.image || '',
      author: newsItem?.author || '',
      date: newsItem?.date || '',
      content: newsItem?.content || '',
    },
    mode: 'onTouched',
  }))

  const onSubmit = () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }

    onSave({
      title: formValue?.title || '',
      image: formValue?.image || '',
      author: formValue?.author || '',
      date: formValue?.date || '',
      content: formValue?.content || '',
      filePath: '',
      file: fileImage,
    }, newsItem?.id || null)
  }

  const formRef = useRef<HTMLFormElement | null>(null)

  const changePhoto = (file: File) => {
    // todo fix ts error with never type
    setValue('image', 'filed' as never)
    setFileImage(file)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        {
          pathname.includes('/news/create')
            ? <CreateNewsHeader isDisabledSave={!isValid} title="Додати новину" />
            : <EditNewsHeader isDisabledSave={!isValid} title="Редагувати новину" />
        }
        <div className="flex flex-col p-10 bg-white">
          <div className="w-full w-max[800px] ">
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={newsItem?.title}
                placeholder="Введіть назву новини"
                title="Назва новини"
                type="regular"
                {...register('title', commonOptions('Назва новини'))}
              />
              <p className="text-xs text-red-700">{ errors?.title?.message }</p>
            </div>
            <div className="pb-8 h-auto mb-1">
              <CustomFileInput
                filePath={newsItem?.image}
                labelText="Зображення новини"
                {...register('image')}
                fileChange={e => changePhoto(e)}
              />
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={newsItem?.author}
                placeholder="Введіть автора новини"
                title="Автор новини"
                type="regular"
                {...register('author', commonOptions('Автор новини'))}
              />
              <p className="text-xs text-red-700">{ errors?.author?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={newsItem?.date}
                placeholder="Введіть дату новини"
                title="Дата новини"
                type="datepicker"
                {...register('date', { required: 'Оберіть дату новини', pattern: {
                  message: 'Не правильний формат дати',
                  value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/,
                } })}
              />
              <p className="text-xs text-red-700">{ errors?.date?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={newsItem?.content}
                placeholder="Введіть текст новини"
                title="Текст новини"
                type="regular"
                {...register('content', commonOptions('Текст новини'))}
              />
              <p className="text-xs text-red-700">{ errors?.content?.message }</p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
