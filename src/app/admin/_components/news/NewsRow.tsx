import Link from 'next/link'
import EditIcon from '@/components/icons/EditIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'
import type { NewsItem } from '@/interfaces/news-item'

interface NewsRowProps {
  newsItem: NewsItem
  onEdit: () => void
  onDelete: () => void
}
const sortOrder = ['id', 'title', 'image', 'author', 'date']
export default function NewsRow({ newsItem, onEdit, onDelete }: NewsRowProps) {
  const readyPublication = sortOrder.map((key: string) => {
    return { value: String(newsItem[key as keyof NewsItem]), key }
  })
  return (
    <>
      <tr className="border-b border-gray-300 h-12">
        {
          readyPublication.map(((tdValue, _, arr) => (
            <td className="px-2 py-2" key={tdValue.key}>
              {tdValue.key === 'title'
                ? (
                    <Link className="text-blue-800 hover:underline" href={`/admin/news/edit/${newsItem.id}`}>{tdValue.value}</Link>
                  )
                : tdValue.key === 'image'
                  ? (
                      <img alt={newsItem.title || ''} className="mx-auto h-10 w-auto" height={40} src={tdValue.value || ''} width={40} />
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
