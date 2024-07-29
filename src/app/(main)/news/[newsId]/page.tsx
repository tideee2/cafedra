// todo get this data from server
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BackArrowIcon from '@/components/icons/back-arrow'
import { CONFIG } from '@/constants/config'
import InlineLoader from '@/components/InlineLoader'
import type { NewsItem } from '@/interfaces/news-item'
import PublicNewsList from '@/app/(main)/news/[newsId]/PublicNewsList'

interface Props {
  params: {
    newsId: number
  }
}
export default function MemberPublicPage({ params }: Props) {
  const [isLoading, setLoading] = useState(true)
  const [newsItem, setNewsItem] = useState<NewsItem | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch(`${CONFIG.api.news}/${Number(params.newsId)}`)
        .then(res => res.json())
        .then((memberData) => {
          setNewsItem(memberData)
        })
        .catch((_) => {
          setNewsItem(undefined)
        })
        .finally(() => setLoading(false))
    }, 30)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="w-full py-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
          <Link className="text-secondary-blue flex gap-3 items-center text-opacity-80 hover:text-opacity-100" href="/news">
            <BackArrowIcon />
            <span className="text-xl font-bold">До списку новин</span>
          </Link>
          { isLoading && !newsItem
            ? <div hidden={!isLoading}><InlineLoader /></div>
            : (
                <div className="flex flex-col text-text-primary pb-5 mb-4">
                  <h1 className="pt-12 pb-10 text-5xl text-update-blue">{ newsItem?.title }</h1>
                  <div className="flex mb-5">
                    <img alt={`${newsItem?.title}`} src={newsItem?.image} />
                  </div>
                  <PublicNewsList memberItem={newsItem} />
                </div>
              ) }
        </div>
      </section>
    </>
  )
}
