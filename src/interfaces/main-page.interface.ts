export interface MainPageInterface {
  title: string
  img: File
  name: string
  subTitle: string
  sectionTitle: string
  mainItems: {
    id: number
    itemTitle: string
    img: File
    text: string
  }[]
}
