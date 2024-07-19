'use client'

import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import CounterInput from '@/components/form/CounterInput'
import CustomButton from '@/components/custom-button'
import LoadIcon from '@/components/icons/LoadIcon'
import type { SciencePublication } from '@/interfaces/science'
import CreatePublicationHeader from '@/app/admin/_components/CreatePublicationHeader'
import {
  authorOptions,
  categoryOptions,
  contentOptions,
  titleOptions,
} from '@/app/(login-actions)/login/auth.constants'
import { formatDate } from '@/hooks/utils'
import EditPublicationHeader from '@/app/admin/_components/EditPublicationHeader'

export default function EditPublicationTemplate({ publication }: Partial<{ publication: SciencePublication }>) {
  const pathname = usePathname()
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm(({
    defaultValues: {
      title: publication?.title || '',
      author: publication?.author || '',
      category: publication?.categories[0] || '',
      date: formatDate(publication?.dateStr) || '',
      content: publication?.content || '',
    },
  }))
  const onSave = (x: any) => {
    onSubmit(x)
  }
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          pathname.includes('/science/create') ? <CreatePublicationHeader /> : <EditPublicationHeader />
        }
        <div className="flex flex-col p-10 bg-white">
          <div className="w-full w-max[800px] ">
            <div className="pb-8 h-[140px]">
              <CounterInput
                initialValue={publication?.title}
                maxCount={120}
                placeholder="Введіть назву публікації"
                title="Назва публікації"
                type="regular"
                {...register('title', titleOptions)}
              />
              <p className="text-xs text-red-700">{errors?.title?.message}</p>
            </div>
            <div className="pb-2 flex justify-between gap-3 h-[150px]">
              <div>
                <CounterInput
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
                <CounterInput
                  initialValue={publication?.categories?.join('')}
                  placeholder="Введіть категорію"
                  showCounter={false}
                  title="Категорія"
                  type="regular"
                  {...register('category', categoryOptions)}
                />
                <p className="text-xs text-red-700">{ errors?.category?.message }</p>
              </div>

              <div>
                <CounterInput
                  initialValue={publication?.dateStr}
                  placeholder="Виберіть дату"
                  showCounter={false}
                  title="Дата публікаці"
                  {...register('date', { required: 'Оберіть дату публікації' })}
                  type="datepicker"
                />
                <p className="text-xs text-red-700">{ errors?.date?.message }</p>
              </div>
            </div>
            <div className="pb-8">
              <CounterInput
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
              <CustomButton className="flex gap-2 items-center !p-4 self-end " type="regular">
                <LoadIcon className="size-6" />
                <span className="whitespace-nowrap">Завантажити файл</span>
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
