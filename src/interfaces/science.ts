export interface SciencePublication {
  id: number
  title: string
  content: string
  author: string
  categories: { id: number, category: string }[]
  date?: Date
  // todo remove later
  dateStr?: string
  pdfUrl?: string
}

export interface SciencePublicationForSave {
  title: string
  content: string
  author: string
  categories: string
  dateStr: string
  pdfUrl?: string
}
