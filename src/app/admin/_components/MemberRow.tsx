import Link from 'next/link'
import EditIcon from '@/components/icons/EditIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'
import type { AdministrationItem } from '@/interfaces/administration-item'

interface PublicationRowProps {
  memberItem: AdministrationItem
  onEdit: () => void
  onDelete: () => void
}
const sortOrder = ['id', 'pib', 'photo', 'scientificLevel', 'academicLevel']
export default function MemberRow({ memberItem, onEdit, onDelete }: PublicationRowProps) {
  const readyPublication = sortOrder.map((key: string) => {
    return { value: String(memberItem[key as keyof AdministrationItem]), key }
  })
  return (
    <>
      <tr className="border-b border-gray-300">
        {
          readyPublication.map(((tdValue, _, arr) => (
            <td className="px-2 py-2" key={tdValue.key}>
              {tdValue.key === 'pib'
                ? (
                    <Link className="text-blue-800 hover:underline" href={`/admin/a_dministration/edit/${memberItem.id}`}>{tdValue.value}</Link>
                  )
                : tdValue.key === 'photo'
                  ? (
                      <img alt={memberItem.pib || ''} className="mx-auto" height={40} src={tdValue.value || ''} width={40} />
                    )
                  : tdValue.value}
            </td>
          )))
        }
        <td className="px-2">
          <button aria-pressed="false" className="bg-update-blue p-1 mr-1 hover:opacity-80" onClick={onEdit} role="button" tabIndex={0}>
            <EditIcon className="size-4" />
          </button>
          <button aria-pressed="false" className="bg-red-300 text-red-800 p-1 hover:opacity-80" onClick={onDelete} role="button" tabIndex={0}>
            <DeleteIcon className="size-4" />
          </button>
        </td>

      </tr>
    </>
  )
}
