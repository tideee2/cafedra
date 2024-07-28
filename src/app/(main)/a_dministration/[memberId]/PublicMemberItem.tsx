interface Props {
  title: string
  data: string
}
export default function PublicMemberItem({ title, data }: Props) {
  return (
    <>
      <div className="flex flex-col mb-5">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-xl">{ data }</div>
      </div>
    </>
  )
}
