import type { AdministrationItem } from '@/interfaces/administration-item'
import PublicMemberItem from '@/app/(main)/a_dministration/[memberId]/PublicMemberItem'

interface Props {
  memberItem: AdministrationItem | undefined
}
const titles = {
  scientificLevel: 'Науковий рівень: ',
  academicLevel: 'Вчене звання: ',
  phone: 'Телефон: ',
  email: 'Email: ',
  interests: 'Інтереси: ',
  courses: 'Курси: ',
  publications: 'Публікації: ',
  biography: 'Біографія: ',
  commonInfo: 'Загальна інформація: ',
  schedule: 'Розклад: ',
}
const excessFields = ['id', 'pib', 'photo']
export default function PublicMemberList({ memberItem }: Props) {
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
      // @ts-expect-error need to fix
      title: titles[key],
      key,
      data: item,
    }))
  return (
    <>
      {
        membersData.map((item, id) => (
          <PublicMemberItem data={item.data} key={id} title={item.title} />
        ),
        )
      }
    </>
  )
}
