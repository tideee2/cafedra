'use client'

import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import CustomInput from '@/components/form/CustomInput'
import {
  titleOptions,
} from '@/app/(login-actions)/login/auth.constants'
import type { AdministrationItem, AdministrationItemForSave } from '@/interfaces/administration-item'
import CustomFileInput from '@/components/form/CustomFileInput'
import CreateMemberHeader from '@/app/admin/_components/administrations/CreateMemberHeader'
import EditMemberHeader from '@/app/admin/_components/administrations/EditMemberHeader'

interface Props {
  memberItem: AdministrationItem
  onSave: (memberItem: AdministrationItemForSave, id?: number | null) => void
}
export default function EditMemberTemplate({ memberItem, onSave }: Partial<Props>) {
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
    control,
    setValue,
  } = useForm(({
    defaultValues: {
      pib: memberItem?.pib || '',
      photo: memberItem?.photo || '',
      biography: memberItem?.biography || '',
      academicLevel: memberItem?.academicLevel || '',
      email: memberItem?.email || '',
      scientificLevel: memberItem?.scientificLevel || '',
      commonInfo: memberItem?.commonInfo || '',
      courses: memberItem?.courses || '',
      interests: memberItem?.interests || '',
      phone: memberItem?.phone || '',
      publications: memberItem?.publications || '',
      schedule: memberItem?.schedule || '',
    },
    mode: 'onTouched',
  }))

  const onSubmit = () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }

    onSave({
      pib: formValue?.pib,
      photo: formValue?.photo,
      biography: formValue?.biography,
      academicLevel: formValue?.academicLevel,
      email: formValue?.email,
      scientificLevel: formValue?.scientificLevel,
      commonInfo: formValue?.commonInfo,
      courses: formValue?.courses,
      interests: formValue?.interests,
      phone: formValue?.phone,
      publications: formValue?.publications,
      schedule: formValue?.schedule,
      filePath: '',
      file: fileImage,
    }, memberItem?.id || null)
  }

  const formRef = useRef<HTMLFormElement | null>(null)

  const changePhoto = (file: File) => {
    // todo fix ts error with never type
    setValue('photo', 'filed' as never)
    setFileImage(file)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        {
          pathname.includes('/a_dministration/create')
            ? <CreateMemberHeader isDisabledSave={!isValid} title="Додати члена кафедри" />
            : <EditMemberHeader isDisabledSave={!isValid} title="Редагувати члена кафедри" />
        }
        <div className="flex flex-col p-10 bg-white">
          <div className="w-full w-max[800px] ">
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.pib}
                placeholder="Введіть ПІБ члена кафедри"
                title="ПІБ члена кафедри"
                type="regular"
                {...register('pib', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.pib?.message }</p>
            </div>
            <div className="pb-8 h-auto mb-1">
              <CustomFileInput
                filePath={memberItem?.photo}
                labelText="Фото члена кафедри"
                {...register('photo', { required: 'Додайте фото члена кафедри' })}
                fileChange={e => changePhoto(e)}
              />
              <p>{errors?.photo?.message}</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.scientificLevel}
                placeholder="Введіть науковий рівень члена кафедри"
                title="Науковий рівень члена кафедри"
                type="regular"
                {...register('scientificLevel', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.scientificLevel?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.academicLevel}
                placeholder="Введіть вчене звання члена кафедри"
                title="Вчене звання члена кафедри"
                type="regular"
                {...register('academicLevel', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.academicLevel?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.phone}
                placeholder="Введіть телефон члена кафедри"
                title="Телефон рівень члена кафедри"
                type="regular"
                {...register('phone')}
              />
              <p className="text-xs text-red-700">{ errors?.phone?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.email}
                placeholder="Введіть email члена кафедри"
                title="Email члена кафедри"
                type="regular"
                {...register('email', {
                  pattern: {
                    message: 'Введіть валідну пошту',
                    value: /^[\w.%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              <p className="text-xs text-red-700">{ errors?.email?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.publications}
                placeholder="Введіть публікації члена кафедри"
                title="Публікації рівень члена кафедри"
                type="regular"
                {...register('publications', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.publications?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.interests}
                placeholder="Введіть інтереси члена кафедри"
                title="Інтереси рівень члена кафедри"
                type="regular"
                {...register('interests', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.interests?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.courses}
                placeholder="Введіть курси члена кафедри"
                title="Курси рівень члена кафедри"
                type="regular"
                {...register('courses', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.courses?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.biography}
                placeholder="Введіть біографію члена кафедри"
                title="Біографію члена кафедри"
                type="regular"
                {...register('biography', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.biography?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.commonInfo}
                placeholder="Введіть загальну інформацію про члена кафедри"
                title="Загальну інформацію про члена кафедри"
                type="regular"
                {...register('commonInfo', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.commonInfo?.message }</p>
            </div>
            <div className="pb-8 h-[140px]">
              <CustomInput
                initialValue={memberItem?.schedule}
                placeholder="Введіть розклад члена кафедри"
                title="Розклад інформацію про члена кафедри"
                type="regular"
                {...register('schedule', titleOptions)}
              />
              <p className="text-xs text-red-700">{ errors?.schedule?.message }</p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
