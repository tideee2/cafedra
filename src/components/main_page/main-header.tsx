// todo get this data from server
const mainPageHeaderInfo = {
  title: 'Вітаємо на факультеті комп\'ютерних наук та технологій',
  descriptionItems: [
    {
      text: 'Факультет зосереджено на підготовці фахівців з глибоким розумінням програмування, системного аналізу і дизайну інтерфейсу.',
    },
    {
      text: 'По завершенню навчання наші студенти будуть досконало володіти сучасними технологіями ІТ, мати здатність до аналітичного мислення, розуміння принципів проектування та імплементації програмного забезпечення, а також здатність адаптуватися до швидко змінюваних тенденцій у сфері ІТ.',
    },
  ],
}
export default function MainHeaderContent() {
  return (
    <>
      <section className="bg-secondary-bg md:bg-[url('/images/header-bg.png')] bg-no-repeat bg-right-bottom bg-none">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-[104px] h-auto min-h-[20rem] ">
          <div className="flex flex-col justify-between max-w-[650px]">
            <h1 className="font-black text-5xl mb-8 text-text-primary">{mainPageHeaderInfo.title}</h1>
            {
              mainPageHeaderInfo.descriptionItems.map((item, index) => (
                <p className="text-text-primary text-lg mb-3 last:mb-0" key={index}>{item.text}</p>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
