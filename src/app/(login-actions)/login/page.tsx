'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deleteCookie, setCookie } from 'cookies-next'
import HeaderLogo from '@/components/header/logo/header-logo'
import CounterInput from '@/components/form/CounterInput'
import CustomButton from '@/components/custom-button'
import Loader from '@/components/Loader'

import { IsLoggedlocalStorageKey } from '@/constants/auth'

export default function CommonScienceAdminPage() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const [commonError, setCommonError] = useState<string>('')
  const router = useRouter()
  const [loaderActive, setLoaderActive] = useState<boolean>(false)

  const onSubmit = (data: any, event: any) => {
    setLoaderActive(true)
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        login: data.login,
        password: data.password,
      }),
    })
      .then(res => res.json())
      .then((res: { statusText: string, message: string }) => {
        if (res.statusText === 'error') {
          setCommonError(res.message || 'Логін та пароль не співпадають')
          return
        }
        setCommonError('')
        setCookie(IsLoggedlocalStorageKey, 'true')
        router.push('/admin/science')
      })
      .catch((error) => {
        setCommonError(error?.message || 'Логін та пароль не співпадають')
        deleteCookie(IsLoggedlocalStorageKey)
      })
      .finally(() => setLoaderActive(false))
  }
  return (
    <>
      <div hidden={!loaderActive}><Loader /></div>
      <div className="px-8 sm:px-0 sm:w-[32rem] w-screen">
        <div className="sm:px-14 py-7 px-8 bg-white">
          <HeaderLogo className="flex text-center justify-center gap-3 mb-8" isShort={true} type="sidebar" />
          <h3 className="font-black text-5xl text-text-primary mb-1 text-center">Вхід</h3>
          <p className="text-lg font-normal text-custom-black mb-5 text-center">Увійти як адміністратор</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {
              commonError ? <p className="text-red-700">{commonError}</p> : null
            }
            <div className="mb-10 h-[100px]">
              <CounterInput
                id="login"
                placeholder="Введіть логін"
                {...register('login', {
                  required: 'Введіть логін',
                  minLength: {
                    message: 'Логін має бути більше 4 символів',
                    value: 4,
                  },
                  pattern: {
                    message: 'Введіть валідну пошту',
                    value: /^[\w.%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i,
                  },
                })}
                showCounter={false}
                title="Логін"
                type="regular"
              />
              <p className="text-red-700 text-sm">{errors.login?.message}</p>
            </div>

            <div className="mb-10 h-[100px]">
              <CounterInput
                showCounter={false}
                title="Пароль"
                type="password"
                {...register('password', {
                  required: 'Введіть пароль',
                  minLength: {
                    message: 'Пароль має бути більше 4 символів',
                    value: 4,
                  },
                  pattern: {
                    message: 'Пароль має містити англійські літери й цифри',
                    value: /^[\w.-]*$/,
                  },
                })}
              />
              <p className="text-red-700 text-xs">{ errors.password?.message }</p>
            </div>
            <div className="w-full">
              <CustomButton className="!py-3 w-full text-white" type="regular">Увійти</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
