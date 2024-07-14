import type { SciencePublication } from '@/interfaces/science'
import PublicationRow from '@/app/admin/_components/PublicationRow'

const TABLE_HEADERS = [
  {
    label: '№',
    key: 'id',
  },
  {
    label: 'Назва публікації',
    key: 'title',
  },
  {
    label: 'Автор',
    key: 'author',
  },
  {
    label: 'Категорія',
    key: 'categories',
  },
  {
    label: 'Дата публікації',
    key: 'date',
  },
  {
    label: 'Дія',
    key: 'actions',
  },
]
export default function SciencePublicationsTable({ data }: { data: SciencePublication[] }) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="">
            <tr className="">
              {
                TABLE_HEADERS.map((header, index) => (
                  <th className="px-6 py-3 bg-secondary-blue2 border-r-4 border-secondary-white" scope="col">
                    {header.label}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((publication, _id) => (
                <PublicationRow publication={publication} />
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}
