import { promises as fs } from 'node:fs'
import type { SciencePublication } from '@/interfaces/science'
import CustomButton from '@/components/custom-button'
import PlusIcon from '@/components/icons/PlusIcon'
import SciencePublicationsTable from '@/app/admin/_components/SciencePublicationsTable'

async function getData() {
  const file = await fs.readFile(`${process.cwd()}/src/mock/publications.json`, 'utf8')
  const data: { publications: SciencePublication[] } = JSON.parse(file)
  return data
}

export default async function ScienceAdminPage() {
  const data = await getData()
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14">
          <h1 className="font-black text-5xl text-update-primary">Наукова робота</h1>
          <CustomButton className="flex gap-2 items-center normal-case" type="regular"><PlusIcon className="size-8" />Створити публікацію</CustomButton>
        </div>
        <SciencePublicationsTable data={data.publications} />
      </main>
    </>
  )
}
