import Link from 'next/link'
import type { SciencePublication } from '@/interfaces/science'
import EditIcon from '@/components/icons/EditIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'

interface PublicationRowProps {
  publication: SciencePublication
  onEdit: () => void
  onDelete: () => void
}
const sortOrder = ['id', 'title', 'author', 'categories', 'dateStr']
export default function PublicationRow({ publication, onEdit, onDelete }: PublicationRowProps) {
  const readyPublication = sortOrder.map((key: string) => {
    if (key === 'categories') {
      return { value: publication.categories[0].category, key }
    }
    return { value: String(publication[key as keyof SciencePublication]), key }
  })
  return (
    <>
      <tr className="border-b border-gray-300">
        {
          readyPublication.map(tdValue => (
            <td className="px-4 py-4" key={tdValue.key}>
              {tdValue.key === 'title'
                ? (
                    <Link className="text-blue-800 hover:underline" href={`/admin/science/edit/${publication.id}`}>{tdValue.value}</Link>
                  )
                : tdValue.value}
            </td>
          ))
        }
        <td className="px-2">
          <button className="bg-update-blue p-1 mr-1 hover:opacity-80" onClick={onEdit}>
            <EditIcon className="size-4" />
          </button>
          <button className="bg-red-300 text-red-800 p-1 hover:opacity-80" onClick={onDelete}>
            <DeleteIcon className="size-4" />
          </button>
        </td>

      </tr>
    </>
  )
}
