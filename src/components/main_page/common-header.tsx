// todo get this data from server
'use client'

import type { IHeaderInfo } from '@/interfaces/header-interfaces'
import { HeaderType } from '@/interfaces/header-interfaces'

interface Props {
  data: IHeaderInfo | null
}
export default function CommonHeaderContent({ data }: Props) {
  const wrapperClasses = data?.type === HeaderType.Main
    ? 'bg-left-bottom bg-[length:auto_70%] md:bg-[length:auto_80%] lg:bg-contain md:bg-center'
    : 'bg-bottom md:bg-right-bottom md:bg-[length:auto_50%] lg:bg-[length:50%_auto] xl:bg-auto'

  const textWrapperClasses = data?.type === HeaderType.Main ? 'justify-end' : 'justify-left xl:h-full'
  const textAlignClasses = data?.type === HeaderType.Main ? 'justify-between text-right' : 'justify-center text-center md:text-right'

  return (
    <>
      <section
        className="bg-update-bg py-4"
      >
        <div
          className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4 py-7 h-[650px] md:h-[560px] bg-contain bg-no-repeat bg-[image:var(--image-url)] ${wrapperClasses}`}
          // @ts-expect-error todo find how fix error with custom css props
          style={{ '--image-url': `url(${data.img})` }}
        >
          <div className={`flex ${textWrapperClasses}`}>
            <div className={`flex flex-col max-w-max md:max-w-[460px] ${textAlignClasses}`}>
              <h1 className="uppercase text-3xl mb-8 text-accent-green">{ data?.title }</h1>
              {
                data?.descriptionItems.map((item, index) => (
                  <p className="text-lg mb-3 last:mb-0" key={index}>{ item.text }</p>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
