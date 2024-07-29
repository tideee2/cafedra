import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import CustomButton from '@/components/custom-button'
import { CONFIG } from '@/constants/config'
import type { MainPageInterface, SciencePageInfo } from '@/interfaces/main-page.interface'
import CustomInput from '@/components/form/CustomInput'
import { commonOptions, titleOptions } from '@/app/(login-actions)/login/auth.constants'
import CustomFileInput from '@/components/form/CustomFileInput'

export default function ScienceAdminInfoPage() {
  const [scienceData, setScienceData] = useState<SciencePageInfo | null>(null)
  const [isLoading, setLoading] = useState(true)
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
    watch,
    setValue,
  } = useForm(({
    defaultValues: {
      title: scienceData?.title || '',
      img: scienceData?.img || '',
      text: scienceData?.text || '',
    },
    mode: 'onTouched',
  }))

  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.scienceInfo}`)
      .then(res => res.json())
      .then((requestData: SciencePageInfo[]) => {
        setScienceData(requestData[0])
        setValue('title', requestData[0].title)
        setValue('text', requestData[0].text)
        setValue('img', requestData[0].img)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const onSave = () => {
    const formValue = getValues()
    if (!formValue || !onSave) {
      return
    }

    const formData = new FormData()
    formData.set('data', JSON.stringify({
      title: formValue.title,
      text: formValue.text,
    }))

    if (fileImage) {
      formData.append('img', fileImage)
    }
    else {
      formData.set('img', new File([], ''))
    }

    fetch(`${CONFIG.api.scienceInfo}/${scienceData?.id}`, {
      method: 'PUT',
      body: formData,
    })
      .then(res => res.json())
      .then((requestData: MainPageInterface[]) => {
        console.log(requestData)
      })
  }
  const changeFile = (file: File) => {
    setFileImage(file)
  }
  return (
    <>
      <div className="flex justify-between pb-14 whitespace-nowrap">
        <h1 className="font-black text-5xl text-update-primary">Сторінка наукова робота</h1>
        <CustomButton disabled={!isValid} onClick={onSave} type="regular">Зберігти</CustomButton>
      </div>
      <div className="bg-white p-6 text-sm">
        { isLoading
          ? <h1>Loading...</h1>
          : (
              <form className="flex flex-col gap-5">
                <CustomInput
                  className="!p-3 normal-case"
                  initialValue={scienceData?.title}
                  placeholder="Введіть заголовок сторінки"
                  title="Заголовок сторінки"
                  type="regular"
                  {...register('title', titleOptions)}
                />
                <CustomInput
                  className="!p-3 normal-case !min-h-[6rem]"
                  initialValue={scienceData?.text}
                  placeholder="Введіть підзаголовок сторінки"
                  title="Підзаголовок сторінки"
                  type="textarea"
                  {...register('text', commonOptions('підзаголовок сторінки'))}
                />
                <CustomFileInput
                  filePath={scienceData?.img}
                  labelText="Головне зображення"
                  {...register('img', { required: 'Додайте зображення' })}
                  fileChange={changeFile}
                />
              </form>
            )}
      </div>
    </>
  )
}
