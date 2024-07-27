import Image from 'next/image'

// todo get this data from server
const mainPageData = {
  title: 'Кафедра ІСМ готує професіоналів для відомих ІТ-компаній та корпорацій',
  items: [
    {
      id: 1,
      image: '/images/bg/main_news_1.svg',
      title: 'Динамічне академічне життя',
      descriptionShort: 'Наш факультет комп\'ютерних наук прагне створити студентам оптимальні умови для навчання та досліджень. Оновлені програми курсів, наближені до реальної динаміки ІТ-сфери, дозволяють студентам отримувати актуальні знання та вміння. Крім того, ми заохочуємо активну участь студентів у конференціях, семінарах та воркшопах.',
    },
    {
      id: 2,
      image: '/images/bg/main_news_2.svg',
      title: 'Практичний досвід через реальні проєкти',
      descriptionShort: 'Факультет комп\'ютерних наук зосереджений на забезпеченні студентів реальними можливостями для практичного застосування знань. Студенти мають доступ до роботи над проектами, що відображають найновіші тенденції та виклики в ІТ-сфері, роблячи їх набагато краще підготовленими до реального професійного світу.',
    },
    {
      id: 3,
      image: '/images/bg/main_news_3.svg',
      title: 'Активне громадське життя',
      descriptionShort: 'Життя на факультеті не обмежується лише навчанням. Велика кількість студентських організацій та волонтерських програм дозволяє студентам створювати різноманітне дозвілля, розвивати лідерські здібності та отримувати незабутні спогади.',
    },
  ],
}
function sliceStr(str: string, count = 100) {
  if (!str?.length) {
    return '...'
  }
  if (str.length < count) {
    return str
  }
  return `${str.slice(0, count)}...`
}
export default function MainPageContent() {
  return (
    <>
      <section className="my-5 lg:my-14">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-text-primary">
          <h2 className="text-center uppercase font-bold text-green text-2xl mb-14">{mainPageData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              mainPageData.items.map((item, _index) => (
                <div className="grid gap-8 grid-rows-[156px_50px_1fr] border-b-8 border-green pb-4" key={item.id}>
                  <div className="flex justify-center items-end">
                    <Image alt={item.title} className="w-auto md:h-auto md:w-full max-h-[153px]" height={100} src={item.image} width={166} />
                  </div>
                  <h3 className="font-bold text-xl card-title-line text-update-blue">{item.title}</h3>
                  <p className="font-medium text-lg self-stretch">{item.descriptionShort}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
