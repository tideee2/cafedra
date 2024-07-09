import Image from 'next/image'
import styles from '@/components/main_page/index.module.scss'

// todo get this data from server
const mainPageData = {
  title: 'Факультетське життя',
  items: [
    {
      id: 1,
      image: '/images/university_life1.png',
      title: 'Динамічне академічне життя',
      descriptionShort: 'Наш факультет комп\'ютерних наук прагне створити студентам оптимальні умови для навчання та досліджень. Оновлені програми курсів, наближені до реальної динаміки ІТ-сфери, дозволяють студентам отримувати актуальні знання та вміння. Крім того, ми заохочуємо активну участь студентів у конференціях, семінарах та воркшопах.',
    },
    {
      id: 2,
      image: '/images/university_life2.png',
      title: 'Практичний досвід через реальні проєкти',
      descriptionShort: 'Факультет комп\'ютерних наук зосереджений на забезпеченні студентів реальними можливостями для практичного застосування знань. Студенти мають доступ до роботи над проектами, що відображають найновіші тенденції та виклики в ІТ-сфері, роблячи їх набагато краще підготовленими до реального професійного світу.',
    },
    {
      id: 3,
      image: '/images/university_life3.png',
      title: 'Активне громадське життя',
      descriptionShort: 'Життя на факультеті не обмежується лише навчанням. Велика кількість студентських організацій та волонтерських програм дозволяє студентам створювати різноманітне дозвілля, розвивати лідерські здібності та отримувати незабутні спогади.',
    },
  ],
}

export default function MainPageContent() {
  return (
    <>
      <main className="main-page my-[100px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-text-primary">
          <h2 className="text-center font-black text-4xl mb-12">{mainPageData.title}</h2>
          <div className="grid grid-cols-3 gap-8">
            {
              mainPageData.items.map((item, index) => (
                <div className="grid gap-8 grid-rows-[256px_50px_1fr]" key={item.id}>
                  <Image alt="university life" className="w-full" height={100} src={item.image} width={166} />
                  <h4 className={`font-bold text-xl card-title-line ${styles.cardTitleLine}`}>{item.title}</h4>
                  <p className="font-normal text-lg self-stretch">{item.descriptionShort}</p>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}
