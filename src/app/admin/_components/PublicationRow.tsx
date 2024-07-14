import type { SciencePublication } from '@/interfaces/science'
import EditIcon from '@/components/icons/EditIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'

const sortOrder = ['id', 'title', 'author', 'categories', 'dateStr']
export default function PublicationRow({ publication, onEdit }: { publication: SciencePublication, onEdit: () => void }) {
  const readyPublication = sortOrder.map((key: string) => {
    return String(publication[key as keyof SciencePublication])
  })
  return (
    <>
      <tr className="border-b border-gray-300">
        {
          readyPublication.map(value => (
            <td className="px-6 py-4" key={value}>
              {value}
            </td>
          ))
        }
        <td className="px-2">
          <button className="bg-update-blue p-1 mr-1 hover:opacity-80" onClick={onEdit}>
            <EditIcon className="size-4" />
          </button>
          <button className="bg-red-300 text-red-800 p-1 hover:opacity-80">
            <DeleteIcon className="size-4" />
          </button>
        </td>

      </tr>
    </>
  )
}
