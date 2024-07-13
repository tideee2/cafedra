interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationAdminPage({ params }: Props) {
  return (
    <>
      <h1>PublicationAdminPage edit page {params.publicationId}</h1>
    </>
  )
}
