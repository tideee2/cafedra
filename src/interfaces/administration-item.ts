export interface AdministrationItem {
  id: number
  photo: string
  scientificLevel: string
  academicLevel: string
  phone: string
  email: string
  interests: {
    id: number
    title: string
  }[]
  courses: {
    id: number
    title: string
  }[]
  publications: {
    id: number
    title: string
  }[]
  biography: string
  commonInfo: string
  schedule: string
}
export type RequestAdministrationItem = AdministrationItem | {
  photo: File
}
