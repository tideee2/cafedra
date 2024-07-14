import { promises as fs } from 'node:fs'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'
import type { SciencePublication } from '@/interfaces/science'

interface Props {
  params: {
    publicationId: number
  }
}
async function getData() {
  const file = await fs.readFile(`${process.cwd()}/src/mock/publications.json`, 'utf8')
  const data: { publications: SciencePublication[] } = JSON.parse(file)
  return data
}
export default async function PublicationEditAdminPage({ params }: Props) {
  const data = await getData()
  const publication = data.publications.find(p => Number(p.id) === Number(params.publicationId)) || {} as SciencePublication
  console.log(params.publicationId)
  return (
    <>
      <EditPublicationTemplate publication={publication} />
    </>
  )
}
