'use client'

import { useForm } from 'react-hook-form'
import HeaderLogo from '@/components/header/logo/header-logo'
import CounterInput from '@/components/form/CounterInput'
import CustomButton from '@/components/custom-button'

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

  const test = (...x: any) => {
    console.log(x, errors)
  }
  console.log(errors)
  return (
    <>
      <div className="px-8 sm:px-0 sm:w-[32rem] w-screen">
        <div className="sm:px-14 py-7 px-8 bg-white">
          <HeaderLogo className="flex text-center justify-center gap-3 mb-8" isShort={true} type="sidebar" />
          <h3 className="font-black text-5xl text-text-primary mb-1 text-center">Вхід</h3>
          <p className="text-lg font-normal text-custom-black mb-5 text-center">Увійти як адміністратор</p>
          <form onSubmit={handleSubmit(data => test(data))}>
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
                    message: 'Логін має містити англійські літери й цифри',
                    value: /^[\w.-]*$/,
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
