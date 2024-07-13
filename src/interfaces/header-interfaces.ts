export interface IHeaderLink {
  title: string
  href: string
}

export enum HeaderType {
  Main,
  Science,
}

export interface IHeaderInfo {
  type: HeaderType
  title: string
  img: string
  descriptionItems: {
    text: string
  }[]
}
