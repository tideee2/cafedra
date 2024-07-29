import type { NewsItem } from '@/interfaces/news-item'
import PublicNewsItem from '@/app/(main)/news/[newsId]/PublicNewsItem'

interface Props {
  memberItem: NewsItem | undefined
}
const titles = {
  author: 'Автор:',
  date: 'Дата',
  content: 'Новина:',
}
const excessFields = ['id', 'image', 'title']
export default function PublicNewsList({ memberItem }: Props) {
  if (!memberItem) {
    return (
      <>
        <h1>Помилка</h1>
      </>
    )
  }

  const membersData = Object.entries(memberItem)
    .filter(([key, _]) => !excessFields.includes(key))
    .map(([key, item]) => ({
      // @ts-expect-error
      title: titles[key],
      key,
      data: item,
    }))
  return (
    <>
      {
        membersData.map((item, id) => (
          <PublicNewsItem data={item.data} key={id} title={item.title} />
        ),
        )
      }
    </>
  )
}
