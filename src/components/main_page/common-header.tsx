// todo get this data from server
'use client'

import type { IHeaderInfo } from '@/interfaces/header-interfaces'

export default function CommonHeaderContent({ props }: { props: IHeaderInfo }) {
  return (
    <>
      <section
        className="bg-update-bg py-4"
      >
        <div
          className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4 py-7 h-[560px] bg-[image:var(--image-url)] bg-left-bottom bg-[length:auto_70%] md:bg-[length:auto_80%] lg:bg-contain md:bg-center bg-no-repeat"
          // @ts-expect-error todo find how fix error with custom css props
          style={{ '--image-url': `url(${props.img})` }}
        >
          <div className="flex justify-end">
            <div className="flex flex-col justify-between max-w-[460px]">
              <h1 className="uppercase text-3xl mb-8 text-green text-right">{ props.title }</h1>
              {
                props.descriptionItems.map((item, index) => (
                  <p className="text-text-primary text-lg mb-3 last:mb-0 text-right" key={index}>{ item.text }</p>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
