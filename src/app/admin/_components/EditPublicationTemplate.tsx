'use client'

import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import type { BaseSyntheticEvent } from 'react'
import { useRef, useState } from 'react'
import CustomInput from '@/components/form/CustomInput'
import CustomButton from '@/components/custom-button'
import LoadIcon from '@/components/icons/LoadIcon'
import type { SciencePublication, SciencePublicationForSave } from '@/interfaces/science'
import CreatePublicationHeader from '@/app/admin/_components/CreatePublicationHeader'
import {
  authorOptions,
  categoryOptions,
  contentOptions,
  titleOptions,
} from '@/app/(login-actions)/login/auth.constants'
import { dateFormatForStore, formatDate } from '@/hooks/utils'
import EditPublicationHeader from '@/app/admin/_components/EditPublicationHeader'

interface Props {
  publication: SciencePublication
  onSave: (publication: SciencePublicationForSave, id?: number | null) => void
}
export default function EditPublicationTemplate({ publication, onSave }: Partial<Props>) {
  const pathname = usePathname()
  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors,
      isValid,
    },
    control,
    watch,
  } = useForm(({
    defaultValues: {
      title: publication?.title || '',
      author: publication?.author || '',
      category: publication?.categories[0].category || '',
      date: formatDate(publication?.dateStr) || '',
      content: publication?.content || '',
    },
    mode: 'all',
  }))

  const onSubmit = () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }
    const formData = new FormData()

    if (fileInput?.current?.files) {
      formData.append('uploadedFile', fileInput?.current?.files[0])
    }

    onSave({
      content: formValue.content,
      title: formValue.title,
      author: formValue.author,
      dateStr: dateFormatForStore(formValue.date),
      categories: formValue.category,
      filePath,
      file: !!fileInput?.current?.files ? fileInput.current.files[0] : null,
    }, publication?.id || null)
  }

  const [fileUrlValue, setFileUrl] = useState<string>('')
  const [filePath, setFilePath] = useState<string>(publication?.pdfUrl || '')
  const fileInput = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const onAddFile = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    if (!fileInput.current) {
      return
    }
    fileInput.current.click()
  }
  const onChangeFile = (event: BaseSyntheticEvent) => {
    if (!fileInput?.current?.files?.length) {
      return
    }
    const blob = new Blob([fileInput.current.files[0]], { type: 'application/pdf' })
    setFilePath(URL.createObjectURL(blob))
    setFileUrl(fileInput.current.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        {
          pathname.includes('/science/create')
            ? <CreatePublicationHeader isDisabledSave={!isValid} />
            : <EditPublicationHeader isDisabledSave={!isValid} />
        }
        <div className="flex flex-col p-10 bg-white">
          <div className="w-full w-max[800px] ">
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={publication?.title}
                maxCount={120}
                placeholder="Введіть назву публікації"
                showCounter={true}
                title="Назва публікації"
                type="regular"
                {...register('title', titleOptions)}
              />
              <p className="text-xs text-red-700">{errors?.title?.message}</p>
            </div>
            <div className="pb-2 flex justify-between gap-3 h-[150px]">
              <div>
                <CustomInput
                  initialValue={publication?.author}
                  placeholder="Введіть автора публікації"
                  showCounter={false}
                  title="Aвтор"
                  type="regular"
                  {...register('author', authorOptions)}
                />
                <p className="text-xs text-red-700">{ errors?.author?.message }</p>
              </div>

              <div>
                <CustomInput
                  initialValue={publication?.categories[0].category}
                  placeholder="Введіть категорію"
                  showCounter={false}
                  title="Категорія"
                  type="regular"
                  {...register('category', categoryOptions)}
                />
                <p className="text-xs text-red-700">{ errors?.category?.message }</p>
              </div>

              <div>
                <CustomInput
                  initialValue={publication?.dateStr}
                  placeholder="Виберіть дату"
                  showCounter={false}
                  title="Дата публікаці"
                  {...register('date', { required: 'Оберіть дату публікації', pattern: {
                    message: 'Не правильний формат дати',
                    value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/,
                  } })}
                  type="datepicker"
                />
                <p className="text-xs text-red-700">{ errors?.date?.message }</p>
              </div>
            </div>
            <div className="pb-8">
              <CustomInput
                initialValue={publication?.content}
                placeholder="Вступне слово про тему та її актуальність"
                showCounter={false}
                title="Вступне слово"
                type="textarea"
                {...register('content', contentOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.content?.message }</p>
            </div>
            <div className="flex gap-[120px]">
              <div className="flex flex-col gap-1 flex-grow">
                <div className="font-bold text-xl text-text-primary">Завантажте файл для повного ознайомлення</div>
                <div className="text-lg text-text-primary">Необхідний формат файлу: PDF</div>
              </div>
              <div className="flex gap-5 items-center ">
                <a
                  className="text-xl text-blue-600 hover:underline"
                  hidden={!filePath}
                  href={filePath}
                  target="_blank"
                >Переглянути файл
                </a>
                <span className="text-xs text-red-700" hidden={!!filePath}>Файл не додано</span>
                <input
                  accept=".pdf"
                  defaultValue={fileUrlValue}
                  hidden={true}
                  onChange={onChangeFile}
                  ref={fileInput}
                  type="file"
                />
                <CustomButton className="flex gap-2 items-center !p-4 self-end" onClick={onAddFile} type="button">
                  <LoadIcon className="size-6" />
                  <span className="whitespace-nowrap">Завантажити файл</span>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
