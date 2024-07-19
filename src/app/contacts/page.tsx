'use client'

import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import { APIProvider, AdvancedMarker, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps'

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const position = { lat: 49.83609012525825, lng: 24.01516111096321 }
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const onChangeHandler = (event) => {
    event.preventDefault()
    setFormData(() => ({
      ...formData,
      [event.target.id]: event.target.value,
    }),
    )
  }

  const myfunc = () => {
    console.log('button is clicked')
    console.log(formData)

    fetch('#', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      alert('Information was written successfully')
    })

    window.location.reload()
  }

  return (
    <>
      <div className="flex flex-column w-full bg-yellow-300 h-3/5">
        <div className="flex flex-row flex-wrap basis-1/2  bg-slate-200 justify-center Calibri items-center">
          <div className="text-lime-600 font-bold basis-2/3 text-xl mt-12 text-center">Контакти</div>
          <div className="basis-2/3  space-y-3 text-xs mt-2 mb-6">
            <div className="mt-1">
              <div className="font-bold text-sky-700 text-sm">Адреса</div>
              <div className="mt-1.5 tex-sm uppercase">Національний університет Львівська політехніка, вул.С.Бандери, 12, Львів, Україна</div>
            </div>
            <div>
              <div className="font-bold text-sky-700 text-sm">Телефон</div>
              <div className="mt-1.5 text-sm">+38 032 258-22-82</div>
            </div>
            <div>
              <div className="font-bold text-sky-700 text-sm">Електронна пошта</div>
              <div className="mt-1.5 texts-sm uppercase">coffice@lpnu.ua</div>
            </div>

          </div>

        </div>
        <div className="flex flex-row flex-wrap bg-blue-800 text-white basis-1/2 justify-around Calibri items-center">
          <div className="font-bold basis-4/5 text-lg mt-2 text-center">Написати нам</div>
          <div className="basis-4/5 mb-3">
            <form className="flex flex-row flex-wrap text-xs basis-full" onSubmit={handleSubmit(myfunc)}>
              <div className="lg:flex flex-column basis-full sm:flex flex-row">
                <div className="basis-1/2">
                  <label>Ім`я</label><br />
                  <input
                    className="py-2 mt-2 w-full border border-solid border-cyan-800 text-black"
                    id="user_name"
                    type="text"
                    {...register('firstName', { required: true, minLength: 2, maxLength: 50 })}
                    onChange={onChangeHandler}
                  />
                  {errors.firstName && <p className="text-lime-200 mt-1">Ім`я має містити від 2 до 50 символів</p>}
                </div>

                <div className="basis-1/2 sm:ml-0 lg:ml-5">
                  <label>Електронна пошта</label><br />
                  <input
                    className="py-2 mt-2 w-full border border-solid border-cyan-800 text-black"
                    id="user_email"
                    type="email"
                    {...register('Email', { required: true, minLength: 5, maxLength: 100 })}
                    onChange={onChangeHandler}
                  />
                  {errors.Email && <p className="text-lime-200  mt-1">Електронна пошта має містити від 5 до 100 символів</p>}
                </div>

              </div>
              <div className="basis-full mt-5">
                <label>Повідомлення</label><br />
                <textarea
                  className="w-full h-12 mt-2 border border-solid border-cyan-800 text-black"
                  id="user_message"
                  {...register('Message', { required: true, minLength: 10, maxLength: 2000 })}
                  onChange={onChangeHandler}
                >
                </textarea>
                {errors.Message && <p className="text-lime-200 mt-1">Повідомлення має містити від 10 до 2000 символів</p>}
              </div>
              <div>
                <button className="bg-lime-400 p-2 mt-3 font-bold text-custom-black rounded-md place-self-start" type="submit">Надіслати</button>
              </div>

            </form>

          </div>

        </div>

      </div>
      <div className="bg-green-200 w-full h-full">
        <APIProvider apiKey="AIzaSyC5l7qHPnzB3P79F4s1TIwUksxlcQhyDLE">
          <div className="w-full h-96">
            <Map center={position} mapId="d7aa5a734b57a986" zoom={17}>
              <AdvancedMarker onClick={() => setOpen(true)} position={position}>
                <Pin
                  background="red"
                  borderColor="red"
                  glyphColor="darkred"
                />
              </AdvancedMarker>
              {open && (
                <InfoWindow onCloseClick={() => setOpen(false)} position={position}>
                  <p>Кафедра інформаційних систем та технологій</p>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      </div>
    </>
  )
}
