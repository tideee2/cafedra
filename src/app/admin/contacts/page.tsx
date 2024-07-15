'use client'

import React from 'react'

import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const myfunc = () => {
    console.log('button is clicked')
  }

  return (
    <>
      <div className="flex flex-column w-full bg-yellow-300 h-72">
        <div className="flex flex-row flex-wrap basis-1/2  bg-white justify-center Calibri items-center">
          <div className="text-blue-900  font-bold basis-2/3 text-xl mt-3">Контакти</div>
          <div className="basis-2/3  space-y-4 text-xs mb-12">
            <div className="mt-1">
              <div className="font-bold text-blue-950">Адреса</div>
              <div className="mt-1.5">Національний університет Львівська політехніка, вул.С.Бандери, 12, Львів, Україна</div>
            </div>
            <div>
              <div className="font-bold text-blue-950">Телефон</div>
              <div className="mt-1.5">+38 032 258-22-82</div>
            </div>
            <div>
              <div className="font-bold text-blue-950">Електронна пошта</div>
              <div className="mt-1.5">coffice@lpnu.ua</div>
            </div>

          </div>

        </div>
        <div className="flex flex-row flex-wrap bg-blue-100 basis-1/2 justify-around Calibri items-center">
          <div className="text-blue-900  font-bold basis-4/5 text-lg mt-3">Написати нам</div>
          <div className="basis-4/5 mb-3">
            <form className="flex flex-row flex-wrap text-xs basis-full" onSubmit={handleSubmit(myfunc)}>
              <div className="flex flex-column basis-full">
                <div className="basis-1/2">
                  <label>Name</label><br />
                  <input

                    className="py-2 mt-2 w-full border border-solid border-cyan-800"
                    id="user_name"
                    type="text"
                    {...register('firstName', { required: true, minLength: 2, maxLength: 50 })}
                  />
                  {errors.firstName && <p className="text-red-700 font-bold">Name must contains from 2 to 50 symbols</p>}
                </div>

                <div className="basis-1/2 ml-5">
                  <label>Електронна пошта</label><br />
                  <input
                    className="py-2 mt-2 w-full border border-solid border-cyan-800"
                    id="user_email"
                    type="email"
                    {...register('Email', { required: true, minLength: 5, maxLength: 100 })}
                  />
                  {errors.Email && <p className="text-red-700 font-bold">Email must contains from 5 to 100 symbols</p>}
                </div>

              </div>
              <div className="basis-full mt-5">
                <label>Повідомлення</label><br />
                <textarea
                  className="w-full h-12 mt-2 border border-solid border-cyan-800"
                  id="user_message"
                  {...register('Message', { required: true, minLength: 10, maxLength: 2000 })}
                >
                </textarea>
                {errors.Message && <p className="text-red-700 font-bold">Message must contains from 10 to 2000 symbols</p>}
              </div>

              <button className="bg-yellow-400 p-2 mt-3 font-bold" type="submit">Надіслати</button>
            </form>

          </div>

        </div>

      </div>

    </>
  )
}
