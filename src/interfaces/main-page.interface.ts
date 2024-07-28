export interface MainPageInterface {
  title: string
  img: string
  name: string
  subTitle: string
  sectionTitle: string
  mainItems: IMainPageItem[]
}
export interface IMainPageItem {
  id: number
  itemTitle: string
  img: string
  text: string
}
export type RequestMainPageItem = IMainPageItem | {
  img: File
}
export type RequestMainPageInterface = MainPageInterface | {
  img: File
}
export interface MainPageHeaderInterface {
  title: string
  img: string
  subTitle: string
}
export interface MainPageContentInterface {
  sectionTitle: string
  mainItems: IMainPageItem[]
}
