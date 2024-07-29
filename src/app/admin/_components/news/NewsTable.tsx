'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ModalDialog from '@/components/ModalDialog'
import type { NewsItem } from '@/interfaces/news-item'
import NewsRow from '@/app/admin/_components/news/NewsRow'

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
  data: NewsItem[]
  onDeleteNews?: (id: number) => void
}
export default function NewsTable({ data, onDeleteNews }: Props) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined)

  function editNews(id: number) {
    router.push(`/admin/news/edit/${id}`)
  }

  function deleteNews(id: number) {
    setDeleteId(id)
    setShowModal(true)
  }

  function acceptDeleting() {
    if (deleteId && onDeleteNews) {
      onDeleteNews(deleteId)
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
        description={`Впевнені що хочете назавжди видалити новину “${data.find(p => p.id === deleteId)?.title}”?`}
        onAccept={() => acceptDeleting()}
        onCancel={() => cancelDeleting()}
        onCloseModal={() => setShowModal(false)}
        showModal={showModal}
        title="Видалити новину?"
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
              data.map((newsItem, _id) => (
                <NewsRow
                  key={newsItem.id}
                  newsItem={newsItem}
                  onDelete={() => deleteNews(newsItem.id)}
                  onEdit={() => editNews(newsItem.id)}
                />
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}
