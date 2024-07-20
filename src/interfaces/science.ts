export interface SciencePublication {
  id: number
  title: string
  content: string
  author: string
  categories: { id: number, category: string }[]
  date?: Date
  // todo remove later
  dateStr?: string
}
