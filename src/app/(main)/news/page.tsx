'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONFIG } from '@/constants/config'
import type { NewsItem } from '@/interfaces/news-item'
import { sliceStr } from '@/hooks/utils'

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [isLoading, setLoading] = useState(true)

  // todo add pagination for publications list
  useEffect(() => {
    fetch(`${CONFIG.api.news}`)
      .then(res => res.json())
      .then((data: NewsItem[]) => {
        setNewsItems(data.filter(item => !!item?.content) || [])
        setLoading(false)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex flex-col items-center">
          <h1 className="text-3xl uppercase mb-8 text-accent-green">Новини кафедри</h1>
          {
            isLoading
              ? <h1>Loading...</h1>
              : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {
                        newsItems.map((newItem: NewsItem) => (
                          <div
                            className="flex flex-col text-center border-accent-green"
                            key={newItem.id}
                          >
                            <Link
                              className="flex flex-col gap-3 p-4 text-secondary-blue font-bold hover:opacity-80 hover:underline"
                              href={`/news/${newItem.id}`}
                              title={newItem.title}
                            >
                              <img
                                alt={newItem.title}
                                className="w-full h-[200px]"
                                height={100}
                                hidden={!newItem.image}
                                src={newItem.image}
                                width={100}
                              />
                              { newItem.title }
                            </Link>
                            <p className="break-all">{sliceStr(newItem.content, 100)}</p>
                          </div>
                        ))
                      }
                    </div>
                  </>
                )
          }
        </div>
      </section>
    </>
  )
}
