// todo get this data from server
'use client'

import type { IHeaderInfo } from '@/interfaces/header-interfaces'

export default function CommonHeaderContent({ props }: { props: IHeaderInfo }) {
  console.log(props)
  return (
    <>
      <section
        className="bg-secondary-bg md:bg-[image:var(--image-url)] bg-no-repeat bg-right-bottom bg-none"
        // @ts-expect-error todo find how fix error with custom css props
        style={{ '--image-url': `url(${props.img})` }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-[104px] h-auto min-h-[35rem] ">
          <div className="flex flex-col justify-between max-w-[650px]">
            <h1 className="font-black text-5xl mb-8 text-text-primary">{props.title}</h1>
            {
              props.descriptionItems.map((item, index) => (
                <p className="text-text-primary text-lg mb-3 last:mb-0" key={index}>{item.text}</p>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
