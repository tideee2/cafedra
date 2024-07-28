export interface AdministrationItem {
  id: number
  photo: string
  scientificLevel: string
  academicLevel: string
  phone: string
  email: string
  interests: string
  courses: string
  publications: string
  biography: string
  commonInfo: string
  schedule: string
  pib: string
}
export type RequestAdministrationItem = AdministrationItem | {
  photo: File
}

export interface AdministrationItemForSave {
  photo: string
  scientificLevel: string
  academicLevel: string
  phone: string
  email: string
  interests: string
  courses: string
  publications: string
  biography: string
  commonInfo: string
  schedule: string
  pib: string
  filePath?: Blob | string
  file?: File | FileList | string | null
}
