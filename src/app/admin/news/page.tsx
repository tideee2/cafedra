'use client'

import React, { useEffect, useState } from 'react'
import CustomButton from '@/components/custom-button'
import PlusIcon from '@/components/icons/PlusIcon'
import Loader from '@/components/Loader'
import { CONFIG } from '@/constants/config'
import type { NewsItem } from '@/interfaces/news-item'
import NewsTable from '@/app/admin/_components/news/NewsTable'

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${CONFIG.api.news}`)
      .then(res => res.json())
      .then((data: NewsItem[]) => {
        const localNews = (data || []).sort((a, b) => a.id - b.id)
        setNews(localNews)
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const onDelete = (id: number) => {
    if (!id) {
      return
    }
    setLoading(true)
    fetch(`${CONFIG.api.news}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        const updatedNews = news.filter((p: NewsItem) => p.id !== id)
        setNews(updatedNews)
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14 whitespace-nowrap">
          <h1 className="font-black text-5xl text-update-primary">Редагувати новини</h1>
          <CustomButton
            className="flex gap-2 items-center normal-case self-center !p-4"
            href="/admin/news/create"
            type="regularLink"
          ><PlusIcon className="size-8" />Додати новину
          </CustomButton>
        </div>
        { isLoading
          ? <div hidden={!isLoading}><Loader /></div>
          : <NewsTable data={news || []} onDeleteNews={onDelete} /> }
      </main>
    </>
  )
}
