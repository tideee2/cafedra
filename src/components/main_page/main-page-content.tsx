import type { MainPageContentInterface } from '@/interfaces/main-page.interface'

interface Props {
  mainPageContent?: MainPageContentInterface | null
}
export default function MainPageContent({ mainPageContent }: Props) {
  console.log(mainPageContent)
  return (
    <>
      <section className="my-5 lg:my-14">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-text-primary">
          <h2 className="text-center uppercase font-bold text-accent-green text-2xl mb-14">{mainPageContent?.sectionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              mainPageContent?.mainItems.map((item, index) => (
                <div className="grid gap-8 grid-rows-[156px_50px_1fr] border-b-8 border-green pb-4" key={item.id}>
                  <div className="flex justify-center items-end">
                    <img
                      alt={`малюнок ${item.itemTitle}`}
                      className="max-h-[153px] w-auto md:h-auto md:w-full"
                      height={100}
                      src={item.img}
                      width={166}
                    />
                  </div>
                  <h3 className="font-bold text-xl card-title-line text-update-blue break-all">{item.itemTitle}</h3>
                  <p className="font-medium text-lg self-stretch break-all">{item.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
