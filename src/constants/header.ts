import type { IHeaderLink } from '@/interfaces/headerLink'
import type { IHeaderInfo } from '@/interfaces/header-interfaces'
import { HeaderType } from '@/interfaces/header-interfaces'

export const headerLinks: IHeaderLink[] = [
  {
    title: 'Про факультет',
    href: '/',
  },
  {
    title: 'Новини',
    href: '/news',
  },
  {
    title: 'Адміністрація',
    href: '/administration',
  },
  {
    title: 'Наукова робота',
    href: '/science',
  },
  {
    title: 'Контакти',
    href: '/contacts',
  },
]
export const mainPageHeaderInfo: IHeaderInfo = {
  type: HeaderType.Main,
  title: 'Кафедра інформаційних систем та мереж',
  img: '/images/new_main_bg.svg',
  descriptionItems: [
    {
      text: 'Кафедра «Інформаційні системи та мережі» утворена 1-го червня 1995 року наказом ректора «Львівської політехніки» після прийняття відповідної ухвали Вченою радою Університету.',
    },
    // {
    //   text: 'Факультет зосереджено на підготовці фахівців з глибоким розумінням програмування, системного аналізу і дизайну інтерфейсу.',
    // },
    // {
    //   text: 'По завершенню навчання наші студенти будуть досконало володіти сучасними технологіями ІТ, мати здатність до аналітичного мислення, розуміння принципів проектування та імплементації програмного забезпечення, а також здатність адаптуватися до швидко змінюваних тенденцій у сфері ІТ.',
    // },
  ],
}

export const sciencePageHeaderInfo: IHeaderInfo = {
  type: HeaderType.Science,
  title: 'Наукова робота',
  img: '/images/bg/science_main_bg.svg',
  descriptionItems: [
    {
      text: 'Наукова робота в університеті здійснюється під егідою провідних академіків і дослідників, що забезпечують найвищий рівень досліджень. Ми заохочуємо студентів долучатися до наших дослідницьких груп, формуючи дослідницькі навички в рамках реальних проектів та проводячи роботи, які мають велику вагу у нашому сучасному технологічному світі.',
    },
  ],
}
