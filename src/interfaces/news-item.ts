export interface NewsItem {
  id: number
  title: string
  author: string
  date: string
  content: string
  image: string
}
export type RequestNewsItem = NewsItem | {
  photo: File
}
export interface NewsItemForSave {
  title: string
  author: string
  date: string
  content: string
  image: string
  file?: File | string | null
  filePath?: string
}
