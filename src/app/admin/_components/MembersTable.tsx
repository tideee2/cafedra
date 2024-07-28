'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ModalDialog from '@/components/ModalDialog'
import type { AdministrationItem } from '@/interfaces/administration-item'
import MemberRow from '@/app/admin/_components/MemberRow'

const TABLE_HEADERS = [
  {
    label: '№',
    key: 'id',
  },
  {
    label: 'ПІБ',
    key: 'title',
  },
  {
    label: 'Фото',
    key: 'photo',
  },
  {
    label: 'Науковий рівень',
    key: 'scientificLevel',
  },
  {
    label: 'Вчене звання',
    key: 'academicLevel',
  },

  {
    label: 'Дія',
    key: 'actions',
  },
]
interface Props {
  data: AdministrationItem[]
  onDeleteMember?: (id: number) => void
}
export default function MembersTable({ data, onDeleteMember }: Props) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined)

  function editMember(id: number) {
    router.push(`/admin/a_dministration/edit/${id}`)
  }

  function deletePublication(id: number) {
    setDeleteId(id)
    setShowModal(true)
  }

  function acceptDeleting() {
    if (deleteId && onDeleteMember) {
      onDeleteMember(deleteId)
    }
    setDeleteId(undefined)
  }

  function cancelDeleting() {
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
        description={`Впевнені що хочете назавжди видалити члена кафедри “${data.find(p => p.id === deleteId)?.pib}”?`}
        onAccept={() => acceptDeleting()}
        onCancel={() => cancelDeleting()}
        onCloseModal={() => setShowModal(false)}
        showModal={showModal}
        title="Видалити члена кафедри?"
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
              data.map((memberItem, _id) => (
                <MemberRow
                  key={memberItem.id}
                  memberItem={memberItem}
                  onDelete={() => deletePublication(memberItem.id)}
                  onEdit={() => editMember(memberItem.id)}
                />
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}
