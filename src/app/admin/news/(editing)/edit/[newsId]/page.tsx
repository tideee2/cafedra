'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CONFIG } from '@/constants/config'
import type { NewsItem, NewsItemForSave } from '@/interfaces/news-item'
import EditNewsTemplate from '@/app/admin/_components/news/EditNewsTemplate'

interface Props {
  params: {
    newsId: number
  }
}
export default function PublicationEditAdminPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [newsItem, setNewsItem] = useState<NewsItem | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    fetch(`${CONFIG.api.news}/${params.newsId}`)
      .then(res => res.json())
      .then((data: NewsItem) => {
        setNewsItem(data)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [params.newsId])

  function saveMember(data: NewsItemForSave, newsId?: number | null): void {
    if (!data || !newsId) {
      return
    }
    setLoading(true)
    const { image, filePath, file, ...tempData } = { ...data }
    const formData = new FormData()
    formData.set('data', JSON.stringify(tempData))
    if (!file) {
      formData.append('img', new File([], ''))
    }
    else {
      formData.append('img', file as File)
    }

    fetch(`${CONFIG.api.news}/${newsId}`, {
      method: 'PUT',
      body: formData,
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        router.push('/admin/news')
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }

  return (
    <>
      { isLoading
        ? <h1>Loading...</h1>
        : <EditNewsTemplate newsItem={newsItem} onSave={saveMember} />}
    </>
  )
}
