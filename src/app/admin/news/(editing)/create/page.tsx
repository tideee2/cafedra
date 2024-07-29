'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CONFIG } from '@/constants/config'
import Loader from '@/components/Loader'
import EditNewsTemplate from '@/app/admin/_components/news/EditNewsTemplate'
import type { NewsItemForSave } from '@/interfaces/news-item'

// todo need to add popup messages about success / error creating
export default function NewsCreatePage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  function saveNews(newsItem: NewsItemForSave): void {
    if (!newsItem) {
      return
    }
    setIsLoading(true)
    const { filePath, file, ...newsData } = { ...newsItem }

    const formData = new FormData()
    formData.set('data', JSON.stringify(newsData))
    if (file) {
      formData.set('img', file as File)
    }
    else {
      formData.set('img', new File([], ''))
    }
    fetch(`${CONFIG.api.news}`, {
      method: 'POST',
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
      .finally(() => setIsLoading(false))
  }
  return (
    <>
      { isLoading
        ? <div className="relative" hidden={!isLoading}><Loader /></div>
        : <EditNewsTemplate onSave={saveNews} />}
    </>
  )
}
