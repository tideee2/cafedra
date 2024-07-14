'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { SciencePublication } from '@/interfaces/science'
import PublicationRow from '@/app/admin/_components/PublicationRow'
import ModalDialog from '@/components/ModalDialog'

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
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined)

  function editPublication(id: number) {
    router.push(`/admin/science/edit/${id}`)
  }

  function deletePublication(id: number) {
    setDeleteId(id)
    setShowModal(true)
  }

  function acceptDeleting() {
    console.log('acceptDeleting', deleteId)
    setDeleteId(undefined)
  }

  function cancelDeleting() {
    console.log('cancel', deleteId)
    setDeleteId(undefined)
  }

  useEffect(() => {
    if (!showModal) {
      setDeleteId(undefined)
    }
  }, [showModal])

  return (
    <>
      <ModalDialog
        acceptText="Відхилити"
        cancelText="Видалити"
        description={`Впевнені що хочете назавжди видалити публікацію “${data.find(p => p.id === deleteId)?.title}”?`}
        onAccept={() => acceptDeleting()}
        onCancel={() => cancelDeleting()}
        onCloseModal={() => setShowModal(false)}
        showModal={showModal}
        title="Видалити публікацію?"
      />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="">
            <tr className="">
              {
                TABLE_HEADERS.map((header, index) => (
                  <th className="px-6 py-3 bg-secondary-blue2 border-r-4 border-secondary-white" key={index} scope="col">
                    {header.label}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((publication, _id) => (
                <PublicationRow
                  key={_id}
                  onDelete={() => deletePublication(publication.id)}
                  onEdit={() => editPublication(publication.id)}
                  publication={publication}
                />
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}
