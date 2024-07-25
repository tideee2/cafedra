'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { SciencePublication } from '@/interfaces/science'
import { CONFIG } from '@/constants/config'
import CustomButton from '@/components/custom-button'
import OpenEyeIcon from '@/components/icons/OpenEyeIcon'
import EditIcon from '@/components/icons/EditIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'
import BackArrowIcon from '@/components/icons/back-arrow'
import InlineLoader from '@/components/InlineLoader'
import DownloadIcon from '@/components/icons/download-icon'
import ModalDialog from '@/components/ModalDialog'

interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [publication, setPublication] = useState<SciencePublication | undefined>(undefined)
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined)

  useEffect(() => {
    fetch(`${CONFIG.api.publications}/${params.publicationId}`)
      .then(res => res.json())
      .then((data: SciencePublication) => {
        setPublication(data)
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [params.publicationId])

  const disabledStyles = !publication?.pdfUrl ? 'pointer-events-none cursor-not-allowed !bg-gray-300' : ''
  const publicationContent = (content: string | undefined) => {
    return !content
      ? ''
      : content.split('\n')
        .map(paragraph => `<p>${paragraph}</p>`).join('')
  }
  const onDelete = () => {
    if (!publication?.id) {
      return
    }
    setShowModal(true)
  }

  function acceptDeleting() {
    if (!publication?.id) {
      return
    }
    setLoading(true)
    fetch(`${CONFIG.api.publications}/${publication.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setLoading(false)
      })
      .then(() => router.push('/admin/science'))
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }

  function cancelDeleting() {
    setDeleteId(undefined)
  }

  return (
    <>
      <ModalDialog
        acceptText="Відхилити"
        cancelText="Видалити"
        description={`Впевнені що хочете назавжди видалити публікацію “${publication?.title}”?`}
        onAccept={() => acceptDeleting()}
        onCancel={() => cancelDeleting()}
        onCloseModal={() => setShowModal(false)}
        showModal={showModal}
        title="Видалити публікацію?"
      />
      <div className="flex justify-between pb-14">
        <h1 className="font-black text-5xl text-update-primary flex gap-2 items-center">
          <OpenEyeIcon
            className="size-10"
          />Перегляд публікації
        </h1>

        <div className="flex gap-2">
          <CustomButton
            className="flex gap-2 items-center normal-case !p-4"
            href={`/admin/science/edit/${publication?.id || ''}`}
            type="regularLink"
          ><EditIcon className="size-6" />Редагувати
          </CustomButton>
          <CustomButton
            className="flex gap-2 items-center normal-case whitespace-nowrap !p-4 !text-xl self-center bg-red-500 text-white"
            onClick={onDelete}
            type="regular"
          ><DeleteIcon className="size-6" />Видалити
          </CustomButton>
        </div>
      </div>

      <div className="p-12 relative max-w-5xl bg-white">
        <Link
          className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100"
          href="/admin/science"
        >
          <BackArrowIcon />
          <span className="text-xl font-bold">До списку публікацій</span>
        </Link>
        { isLoading && !publication
          ? <div hidden={!isLoading}><InlineLoader /></div>
          : (
              <div className="flex flex-col text-text-primary">
                <h1 className="pt-12 pb-10 text-5xl text-update-blue">{ publication?.title }</h1>
                <div className="flex gap-14 mb-14">
                  <div className="">
                    <span className="text-xl font-bold mr-1.5 text-update-blue">Автор:</span>
                    <span className="text-update-blue">{ publication?.author }</span>
                  </div>
                  <div className="">
                    <span className="text-xl font-bold mr-1.5 text-update-blue">Категорія:</span>
                    <span className="text-update-blue">{ publication?.categories[0]?.category }</span>
                  </div>
                  <div className="">
                    <span className="text-xl font-bold mr-1.5 text-update-blue">Дата:</span>
                    <span className="text-update-blue">{ publication?.dateStr }</span>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: publicationContent(publication?.content) }}
                >
                </div>
                <div className="flex justify-start mt-14">
                  <div className={`${!publication?.pdfUrl ? 'cursor-not-allowed' : ''}`}>
                    <CustomButton
                      className={`flex gap-1 items-center ${disabledStyles}`}
                      href={publication?.pdfUrl || '#'}
                      rel="noopener noreferrer"
                      target="_blank"
                      type="regularLink"
                    >
                      <DownloadIcon />
                      <span>Завантажити увесь текст</span>
                    </CustomButton>
                  </div>
                </div>
              </div>
            ) }
      </div>
    </>
  )
}
