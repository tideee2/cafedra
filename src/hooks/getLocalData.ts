import { promises as fs } from 'node:fs'
import type { SciencePublication } from '@/interfaces/science'

export async function getLocalData(path: string = '/src/mock/publications.json') {
  const file = await fs.readFile(`${process.cwd()}${path}`, 'utf8')
  const data: { publications: SciencePublication[] } = JSON.parse(file)
  return data
}
